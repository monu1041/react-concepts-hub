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
        const [compModule, fetchedFiles] = await Promise.all([topic.loadComponent(), topic.loadFiles()]);
        setComponent(() => compModule.default);
        setFiles(fetchedFiles);
      } catch (err) { console.error(err); }
      finally { setIsLoading(false); }
    }
    loadTopicData();
  }, [topic]);

  if (!topic) return <div style={{ padding: '40px', flex: 1, color: 'var(--text-secondary)' }}>Select a topic to begin!</div>;
  if (isLoading) return <div style={{ padding: '40px', flex: 1, color: 'var(--text-secondary)' }}>⚡ Loading assets...</div>;

  return (
    <main style={{ 
      flex: 1, 
      padding: '24px',          // Slightly lowered padding for cleaner layout frames
      backgroundColor: 'var(--bg-main)', 
      height: '100%',           // Fills exactly the container framework passed by App.jsx
      overflowY: 'auto', 
      boxSizing: 'border-box',
      transition: 'all 0.2s'
    }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ margin: '0 0 8px 0', color: 'var(--text-primary)' }}>{topic.title}</h1>
        <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{topic.description}</p>
      </div>

      {/* Navigation Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: `2px solid var(--border-color)`, paddingBottom: '10px' }}>
        <button onClick={() => setActiveTab('ui')} className={`tab-btn ${activeTab === 'ui' ? 'active' : ''}`}>👁️ Live UI</button>
        <button onClick={() => setActiveTab('code')} className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}>💻 Source Code</button>
      </div>

      {/* Main Display Card */}
      <div style={{ 
        background: 'var(--bg-card)', 
        padding: '24px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', 
        maxWidth: '100%', 
        overflowX: 'auto', 
        transition: 'all 0.2s'
      }}>
        {activeTab === 'ui' && Component ? (
          <div style={{ color: 'initial', backgroundColor: 'initial' }}><Component /></div>
        ) : (
          <CodeViewer files={files} />
        )}
      </div>

      <style>{`
        .tab-btn {
          padding: 8px 16px; border: none; background: transparent; 
          color: var(--text-secondary); border-radius: 4px; cursor: pointer; font-weight: bold;
        }
        .tab-btn.active {
          background: var(--tab-active-bg);
          color: var(--tab-active-text);
        }
      `}</style>
    </main>
  );
}