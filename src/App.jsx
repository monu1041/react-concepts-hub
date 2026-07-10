// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { topics } from './topics/topicsRegistry';

export default function App() {
  const [activeTopicId, setActiveTopicId] = useState(topics[0]?.id || null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile menu toggle state

  const currentTopic = topics.find(t => t.id === activeTopicId);

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden', fontFamily: 'sans-serif', position: 'relative' }}>
      
      {/* Mobile Top Bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '50px',
        background: '#1e1e24',
        display: 'flex',
        alignItems: 'center',
        padding: '0 15px',
        zIndex: 40,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }} className="mobile-only-header">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}
        >
          {isSidebarOpen ? '✕' : '☰'}
        </button>
        <span style={{ color: '#fff', marginLeft: '15px', fontWeight: 'bold' }}>Dev Journal</span>
      </div>

      {/* Sidebar Component */}
      <Sidebar 
        activeTopicId={activeTopicId} 
        setActiveTopicId={(id) => {
          setActiveTopicId(id);
          setIsSidebarOpen(false); // Close sidebar automatically on mobile after clicking a link
        }} 
        isOpen={isSidebarOpen}
      />

      {/* Main Dashboard Panel */}
      <Dashboard topic={currentTopic} />

      {/* Inject CSS Media Queries for layout shifts */}
      <style>{`
        .mobile-only-header { display: none !important; }
        
        @media (max-width: 768px) {
          .mobile-only-header { display: flex !important; }
          main { 
            padding-top: 70px !important; /* Make room for the top bar on mobile */
            padding-left: 15px !important;
            padding-right: 15px !important;
          }
        }
      `}</style>
    </div>
  );
}