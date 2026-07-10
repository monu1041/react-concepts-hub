// src/components/Sidebar.jsx
import React from 'react';
import { topics } from '../topics/topicsRegistry';

export default function Sidebar({ activeTopicId, setActiveTopicId, isOpen }) {
  return (
    <aside 
      className={`app-sidebar ${isOpen ? 'open' : ''}`}
      style={{ 
        width: '280px', 
        background: 'var(--bg-sidebar)', 
        color: 'var(--text-sidebar)', 
        height: '100%', 
        padding: '20px', 
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 50,
        transition: 'background-color 0.2s, color 0.2s'
      }}
    >
      {/* Sidebar Header Title Anchor */}
      <h2 style={{ 
        fontSize: '20px', 
        marginBottom: '20px', 
        borderBottom: '1px solid var(--border-color)', 
        paddingBottom: '10px', 
        flexShrink: 0, 
        color: 'var(--text-sidebar)',
        transition: 'border-color 0.2s, color 0.2s'
      }}>
        📚 Dev Journal
      </h2>
      
      {/* Scrollable Array Container List */}
      <ul style={{ 
        listStyle: 'none', 
        padding: 0, 
        margin: 0, 
        overflowY: 'auto', 
        flex: 1, 
        paddingRight: '4px' 
      }}>
        {topics.map((topic) => {
          const isActive = activeTopicId === topic.id;
          return (
            <li 
              key={topic.id} 
              onClick={() => setActiveTopicId(topic.id)}
              style={{
                padding: '10px 15px',
                borderRadius: '6px',
                cursor: 'pointer',
                marginBottom: '8px',
                background: isActive ? '#3b82f6' : 'transparent',
                // Keeps active selection legible against bright highlight blocks
                color: isActive ? '#ffffff' : 'var(--text-sidebar)', 
                transition: 'background-color 0.2s, color 0.2s'
              }}
            >
              <div style={{ fontWeight: '500' }}>{topic.title}</div>
              <small style={{ 
                opacity: 0.6, 
                fontSize: '11px',
                color: isActive ? '#ffffff' : 'var(--text-secondary)'
              }}>
                {topic.category}
              </small>
            </li>
          );
        })}
      </ul>

      {/* Sliding Mobile Breakpoint Drawer Logic Override */}
      <style>{`
        @media (max-width: 768px) {
          .app-sidebar {
            position: fixed !important;
            top: 56px;
            left: 0;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
            width: 100% !important;
          }
          .app-sidebar.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </aside>
  );
}