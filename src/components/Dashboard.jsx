// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import CodeViewer from './CodeViewer';

export default function Dashboard({ topic }) {
  const [activeTab, setActiveTab] = useState('ui');
  const [Component, setComponent] = useState(null);
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!topic) return;

    async function loadTopicData() {
      setIsLoading(true);
      try {
        // Fetch component and raw code simultaneously
        const [compModule, fetchedFiles] = await Promise.all([
          topic.loadComponent(),
          topic.loadFiles()
        ]);
        
        setComponent(() => compModule.default);
        setFiles(fetchedFiles);
      } catch (err) {
        console.error("Failed to load topic module", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadTopicData();
  }, [topic]); // Triggers every time the user changes topics in the sidebar

  if (!topic) {
    return <div style={{ padding: '40px', flex: 1 }}>Select a topic to begin!</div>;
  }

  if (isLoading) {
    return <div style={{ padding: '40px', flex: 1, color: '#64748b' }}>⚡ Loading project assets...</div>;
  }

  return (
    <main style={{ flex: 1, padding: '40px', backgroundColor: '#f8fafc', height: '100vh', overflowY: 'auto', boxSizing: 'border-box' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ margin: '0 0 8px 0', color: '#0f172a' }}>{topic.title}</h1>
        <p style={{ margin: 0, color: '#64748b' }}>{topic.description}</p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
        <button onClick={() => setActiveTab('ui')} style={{ padding: '8px 16px', background: activeTab === 'ui' ? '#0f172a' : 'transparent', color: activeTab === 'ui' ? '#fff' : '#64748b', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>👁️ Live UI</button>
        <button onClick={() => setActiveTab('code')} style={{ padding: '8px 16px', background: activeTab === 'code' ? '#0f172a' : 'transparent', color: activeTab === 'code' ? '#fff' : '#64748b', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>💻 Source Code</button>
      </div>

      {/* Panel */}
      <div style={{ background: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        {activeTab === 'ui' && Component ? (
          <Component />
        ) : (
          <CodeViewer files={files} />
        )}
      </div>
    </main>
  );
}