// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import CodeViewer from './CodeViewer';
import { useTheme } from '../context/ThemeContext';

export default function Dashboard({ topic }) {
  const [activeTab, setActiveTab] = useState('ui');
  const [Component, setComponent] = useState(null);
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    if (!topic) return;
    async function loadTopicData() {
      setIsLoading(true);
      try {
        const [compModule, fetchedFiles] = await Promise.all([
          topic.loadComponent(),
          topic.loadFiles()
        ]);
        setComponent(() => compModule.default);
        setFiles(fetchedFiles);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadTopicData();
  }, [topic]);

  if (!topic) return <div style={{ padding: '40px', flex: 1, color: 'var(--text-secondary)' }}>Select a topic to begin!</div>;
  if (isLoading) return <div style={{ padding: '40px', flex: 1, color: 'var(--text-secondary)' }}>⚡ Loading assets...</div>;

  return (
    <main style={{ flex: 1, padding: '24px', backgroundColor: 'var(--bg-main)', height: '100%', overflowY: 'auto', boxSizing: 'border-box', transition: 'all 0.2s' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ margin: '0 0 8px 0', color: 'var(--text-primary)' }}>{topic.title}</h1>
        <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{topic.description}</p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: `2px solid var(--border-color)`, paddingBottom: '10px' }}>
        <button onClick={() => setActiveTab('ui')} className={`tab-btn ${activeTab === 'ui' ? 'active' : ''}`}>👁️ Live UI</button>
        <button onClick={() => setActiveTab('code')} className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}>💻 Source Code</button>
      </div>

      {/* Main Display Surface */}
      <div style={{ 
        background: 'var(--bg-card)', padding: '24px', borderRadius: '8px', 
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', maxWidth: '100%', overflowX: 'auto', transition: 'all 0.2s'
      }}>
        {activeTab === 'ui' && Component ? (
          /* 🛡️ THE BULLETPROOF ISOLATION DRAWBRIDGE:
             Hardcodes local custom tokens to fully block out dark-mode bleeding!
          */
          <div style={{ 
            all: 'initial', display: 'block', fontFamily: 'sans-serif', padding: '20px', borderRadius: '4px',
            color: '#0f172a', backgroundColor: '#ffffff',    
            '--bg-main': '#f8fafc', '--bg-card': '#ffffff', '--text-primary': '#0f172a',
            '--text-secondary': '#64748b', '--border-color': '#e2e8f0'
          }}>
            <Component />
          </div>
        ) : (
          <CodeViewer files={files} isDark={isDark} />
        )}
      </div>

      <style>{`
        .tab-btn { padding: 8px 16px; border: none; background: transparent; color: var(--text-secondary); border-radius: 4px; cursor: pointer; font-weight: bold; }
        .tab-btn.active { background: var(--tab-active-bg); color: var(--tab-active-text); }
      `}</style>
    </main>
  );
}