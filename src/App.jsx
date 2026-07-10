// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { topics } from './topics/topicsRegistry';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const [activeTopicId, setActiveTopicId] = useState(topics[0]?.id || null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const currentTopic = topics.find(t => t.id === activeTopicId);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', // 👈 Stack navbar and content vertically
      width: '100%', 
      height: '100%', 
      overflow: 'hidden', 
      position: 'relative',
      backgroundColor: 'var(--bg-main)', 
      color: 'var(--text-primary)', 
      transition: 'background-color 0.2s, color 0.2s'
    }}>
      
      {/* Top Navbar Header Component (Now sitting natively at the top of the stack) */}
      <div style={{
        height: '56px',         // Fixed layout heights
        background: 'var(--bg-sidebar)', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between', 
        padding: '0 20px', 
        zIndex: 40,
        borderBottom: `1px solid var(--border-color)`,
        transition: 'background-color 0.2s',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button 
            className="mobile-toggle-btn" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            style={{ background: 'transparent', border: 'none', color: 'var(--text-sidebar)', fontSize: '24px', cursor: 'pointer', marginRight: '10px' }}
          >
            {isSidebarOpen ? '✕' : '☰'}
          </button>
          <span style={{ color: 'var(--text-sidebar)', fontWeight: 'bold', fontSize: '18px' }}>Dev Journal</span>
        </div>

        <button onClick={toggleTheme} style={{ background: isDark ? '#334155' : '#3b82f6', border: 'none', color: '#fff', padding: '8px 14px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}>
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* 💡 The Workspace Container: 
          Takes up 100% of the REMAINING height below the 56px navbar! 
      */}
      <div style={{ display: 'flex', flex: 1, width: '100%', height: 'calc(100% - 56px)', overflow: 'hidden', position: 'relative' }}>
        <Sidebar activeTopicId={activeTopicId} setActiveTopicId={(id) => { setActiveTopicId(id); setIsSidebarOpen(false); }} isOpen={isSidebarOpen} />
        <Dashboard topic={currentTopic} />
      </div>

      <style>{`
        .mobile-toggle-btn { display: none; }
        
        @media (max-width: 768px) {
          .mobile-toggle-btn { display: inline-block; }
          /* Mobile structural slide alignments override setup */
          .app-sidebar {
            position: fixed !important;
            top: 56px;
            left: 0;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
            width: 100% !important;
            height: calc(100% - 56px) !important;
          }
          .app-sidebar.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}