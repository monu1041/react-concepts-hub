// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { topics } from './topics/topicsRegistry';
import { useTheme } from './context/ThemeContext'; // Dynamic theme context engine

export default function App() {
  const [activeTopicId, setActiveTopicId] = useState(topics[0]?.id || null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme(); // Consuming our theme globally

  const currentTopic = topics.find(t => t.id === activeTopicId);

  return (
    <div style={{ 
      display: 'flex', 
      width: '100%', 
      height: '100%', 
      overflow: 'hidden', 
      position: 'relative',
      backgroundColor: 'var(--bg-main)', 
      color: 'var(--text-primary)', 
      transition: 'background-color 0.2s, color 0.2s'
    }}>
      
      {/* Top Navbar Header Component */}
      <div style={{
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        height: '56px',
        background: 'var(--bg-sidebar)', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between', 
        padding: '0 20px', 
        zIndex: 40,
        borderBottom: `1px solid var(--border-color)`,
        transition: 'background-color 0.2s'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Mobile Hamburg Menu Button Toggle */}
          <button 
            className="mobile-toggle-btn" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'var(--text-sidebar)', 
              fontSize: '24px', 
              cursor: 'pointer', 
              marginRight: '10px' 
            }}
          >
            {isSidebarOpen ? '✕' : '☰'}
          </button>
          
          <span style={{ 
            color: 'var(--text-sidebar)', 
            fontWeight: 'bold', 
            fontSize: '18px', 
            transition: 'color 0.2s' 
          }}>
            Dev Journal
          </span>
        </div>

        {/* Dynamic Light / Dark Switching Button */}
        <button 
          onClick={toggleTheme} 
          style={{ 
            background: isDark ? '#334155' : '#3b82f6', 
            border: 'none', 
            color: '#fff', 
            padding: '8px 14px', 
            borderRadius: '20px', 
            cursor: 'pointer', 
            fontWeight: 'bold',
            transition: 'background-color 0.2s'
          }}
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* Main Sidebar Panel Component */}
      <Sidebar 
        activeTopicId={activeTopicId} 
        setActiveTopicId={(id) => { 
          setActiveTopicId(id); 
          setIsSidebarOpen(false); // Clean drawer dismissal on mobile selection
        }} 
        isOpen={isSidebarOpen} 
      />

      {/* Primary Workspace Dashboard Panel */}
      <Dashboard topic={currentTopic} />

      {/* Embedded Global Responsiveness Rules Context */}
      <style>{`
        .mobile-toggle-btn { display: none; }
        main { padding-top: 86px !important; }
        .app-sidebar { margin-top: 56px; height: calc(100% - 56px) !important; }
        
        @media (max-width: 768px) {
          .mobile-toggle-btn { display: inline-block; }
          main { 
            padding-left: 15px !important; 
            padding-right: 15px !important; 
          }
        }
      `}</style>
    </div>
  );
}