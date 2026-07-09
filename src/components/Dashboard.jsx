// src/components/Dashboard.jsx
import React, { useState } from 'react';
import CodeViewer from './CodeViewer';

export default function Dashboard({ topic }) {
  const [activeTab, setActiveTab] = useState('ui'); // 'ui' or 'code'

  if (!topic) {
    return <div style={{ padding: '40px', flex: 1 }}>Select a topic from the sidebar to begin learning!</div>;
  }

  const ActiveComponent = topic.component;

  return (
    <main style={{ flex: 1, padding: '40px', backgroundColor: '#f8fafc', height: '100vh', overflowY: 'auto', boxSizing: 'border-box' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ margin: '0 0 8px 0', color: '#0f172a' }}>{topic.title}</h1>
        <p style={{ margin: 0, color: '#64748b' }}>{topic.description}</p>
      </div>

      {/* Tabs Controller */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
        <button 
          onClick={() => setActiveTab('ui')}
          style={{ padding: '8px 16px', border: 'none', background: activeTab === 'ui' ? '#0f172a' : 'transparent', color: activeTab === 'ui' ? '#fff' : '#64748b', borderRadius: '4px', cursor: 'pointer', fontWeight: '6px' }}
        >
          👁️ Live UI
        </button>
        <button 
          onClick={() => setActiveTab('code')}
          style={{ padding: '8px 16px', border: 'none', background: activeTab === 'code' ? '#0f172a' : 'transparent', color: activeTab === 'code' ? '#fff' : '#64748b', borderRadius: '4px', cursor: 'pointer', fontWeight: '6px' }}
        >
          💻 Source Code
        </button>
      </div>

      {/* Dynamic Panel Display */}
      <div style={{ background: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        {activeTab === 'ui' ? (
          <ActiveComponent />
        ) : (
          <CodeViewer files={topic.files} />
        )}
      </div>
    </main>
  );
}