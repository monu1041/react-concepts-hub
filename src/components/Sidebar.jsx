// src/components/Sidebar.jsx
import React from 'react';
import { topics } from '../topics/topicsRegistry';

export default function Sidebar({ activeTopicId, setActiveTopicId }) {
  return (
    <aside style={{ width: '280px', background: '#1e1e24', color: '#fff', height: '100vh', padding: '20px', boxSizing: 'border-box' }}>
      <h2 style={{ fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>📚 Dev Journal</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
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
    </aside>
  );
}