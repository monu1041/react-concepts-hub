// src/components/Sidebar.jsx
import React from 'react';
import { topics } from '../topics/topicsRegistry';

export default function Sidebar({ activeTopicId, setActiveTopicId, isOpen }) {
  return (
    <aside 
      className={`app-sidebar ${isOpen ? 'open' : ''}`}
      style={{ 
        width: '280px', 
        background: '#1e1e24', 
        color: '#fff', 
        height: '100vh', 
        padding: '20px', 
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 50
      }}
    >
      <h2 style={{ fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px', flexShrink: 0 }}>
        📚 Dev Journal
      </h2>
      
      <ul 
        style={{ 
          listStyle: 'none', 
          padding: 0, 
          margin: 0,
          overflowY: 'auto',
          flex: 1,
          paddingRight: '4px'
        }}
      >
        {topics.map((topic) => (
          <li 
            key={topic.id} 
            onClick={() => setActiveTopicId(topic.id)}
            style={{
              padding: '10px 15px',
              borderRadius: '6px',
              cursor: 'pointer',
              marginBottom: '8px',
              background: activeTopicId === topic.id ? '#3b82f6' : 'transparent',
              transition: 'background 0.2s'
            }}
          >
            <div style={{ fontWeight: '500' }}>{topic.title}</div>
            <small style={{ opacity: 0.6, fontSize: '11px' }}>{topic.category}</small>
          </li>
        ))}
      </ul>

      {/* Responsive styles handling slide animation */}
      <style>{`
        @media (max-width: 768px) {
          .app-sidebar {
            position: fixed !important;
            top: 50px; /* Sits right beneath the mobile header bar */
            left: 0;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
            width: 100% !important; /* Full width drawer on mobile */
            height: calc(100vh - 50px) !important;
          }
          .app-sidebar.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </aside>
  );
}