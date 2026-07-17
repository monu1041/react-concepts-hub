// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import CodeViewer from './CodeViewer';
import ReadmeViewer from './ReadmeViewer';
import { useTheme } from '../context/ThemeContext';

export default function Dashboard({ topic }) {
  const [activeTab, setActiveTab] = useState('ui');
  const [Component, setComponent] = useState(null);
  const [files, setFiles] = useState([]);
  const [readmeContent, setReadmeContent] = useState(null);
  
  const [isUiLoading, setIsUiLoading] = useState(false);
  const [isCodeLoading, setIsCodeLoading] = useState(false);
  const [isReadmeLoading, setIsReadmeLoading] = useState(false);
  
  const { isDark } = useTheme();

  // 1️⃣ Load UI Component when topic changes
  useEffect(() => {
    if (!topic) return;
    
    setActiveTab('ui');
    setFiles([]); 
    setReadmeContent(null);
    setIsUiLoading(true);

    let isMounted = true;

    async function fetchUi() {
      try {
        const compModule = await topic.loadComponent();
        if (isMounted) {
          setComponent(() => compModule.default);
        }
      } catch (err) {
        console.error("Failed to load UI component:", err);
      } finally {
        if (isMounted) setIsUiLoading(false);
      }
    }

    fetchUi();
    return () => { isMounted = false; };
  }, [topic]);

  // 2️⃣ Lazy-Load README string
  useEffect(() => {
    if (activeTab !== 'readme' || readmeContent !== null || !topic) return;

    let isMounted = true;
    setIsReadmeLoading(true);

    async function fetchReadme() {
      try {
        const text = await topic.loadReadme();
        if (isMounted) {
          setReadmeContent(text || ''); 
        }
      } catch (err) {
        console.error("Failed to load readme:", err);
      } finally {
        if (isMounted) setIsReadmeLoading(false);
      }
    }

    fetchReadme();
    return () => { isMounted = false; };
  }, [activeTab, topic, readmeContent]);

  // 3️⃣ Lazy-Load Source Code strings
  useEffect(() => {
    if (activeTab !== 'code' || files.length > 0 || !topic) return;

    let isMounted = true;
    setIsCodeLoading(true);

    async function fetchCode() {
      try {
        const fetchedFiles = await topic.loadFiles();
        if (isMounted) {
          setFiles(fetchedFiles);
        }
      } catch (err) {
        console.error("Failed to load code files:", err);
      } finally {
        if (isMounted) setIsCodeLoading(false);
      }
    }

    fetchCode();
    return () => { isMounted = false; };
  }, [activeTab, topic, files.length]);

  if (!topic) return <div style={{ padding: '24px', flex: 1, color: 'var(--text-secondary)' }}>Select a topic to begin!</div>;

  return (
    <main 
      className="dashboard-main-panel" 
      style={{ 
        flex: 1, 
        padding: '12px 24px 24px 24px', 
        backgroundColor: 'var(--bg-main)', 
        transition: 'all 0.2s' 
      }}
    >
      <div style={{ marginBottom: '16px' }}>
        <h1 style={{ margin: '0 0 6px 0', fontSize: '24px', color: 'var(--text-primary)' }}>{topic.title}</h1>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>{topic.description}</p>
      </div>

      {/* 3-Tab Navigation Bar */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', borderBottom: `2px solid var(--border-color)`, paddingBottom: '8px' }}>
        <button onClick={() => setActiveTab('ui')} className={`tab-btn ${activeTab === 'ui' ? 'active' : ''}`}>👁️ Live UI</button>
        {topic.hasReadme && (
          <button onClick={() => setActiveTab('readme')} className={`tab-btn ${activeTab === 'readme' ? 'active' : ''}`}>📖 README</button>
        )}
        <button onClick={() => setActiveTab('code')} className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}>💻 Source Code</button>
      </div>

      {/* Main Display Surface Card */}
      <div style={{ 
        background: 'var(--bg-card)', 
        padding: '16px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', 
        maxWidth: '100%', 
        overflowX: 'auto', 
        /* 💡 FIX 1: Removed minHeight: '300px' so short UI demos don't have empty bottom space! */
        transition: 'all 0.2s'
      }}>
        {activeTab === 'ui' && (
          isUiLoading || !Component ? (
            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>⚡ Mounting Live UI...</div>
          ) : (
            <div 
              className="live-ui-sandbox"
              style={{ 
                all: 'initial', 
                display: 'block', 
                fontFamily: 'sans-serif', 
                width: '100%',
                /* 💡 FIX 2: Explicitly restore border-box so padding doesn't cause 100%+20px horizontal overflow! */
                boxSizing: 'border-box',
                padding: '10px', 
                borderRadius: '4px', 
                color: '#0f172a', 
                backgroundColor: '#ffffff',    
                '--bg-main': '#f8fafc', 
                '--bg-card': '#ffffff', 
                '--text-primary': '#0f172a',
                '--text-secondary': '#64748b', 
                '--border-color': '#e2e8f0'
              }}
            >
              <Component />
            </div>
          )
        )}

        {activeTab === 'readme' && (
          isReadmeLoading ? (
            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>📖 Parsing Markdown...</div>
          ) : (
            <ReadmeViewer content={readmeContent} />
          )
        )}

        {activeTab === 'code' && (
          isCodeLoading ? (
            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>📄 Reading Source Code...</div>
          ) : (
            <CodeViewer files={files} isDark={isDark} />
          )
        )}
      </div>

      {/* Embedded Styles & Layout Utilities */}
      <style>{`
        .tab-btn { padding: 8px 16px; border: none; background: transparent; color: var(--text-secondary); border-radius: 4px; cursor: pointer; font-weight: bold; transition: all 0.2s; }
        .tab-btn.active { background: var(--tab-active-bg); color: var(--tab-active-text); }
        .dashboard-main-panel { height: 100%; overflow-y: auto; box-sizing: border-box; }
        
        /* 💡 FIX 3: THE DUAL GAP CRUSHER 
           Strips both top margins from the first element AND bottom margins from the last element,
           ensuring your component sits snugly inside the box with zero dead space! */
        .live-ui-sandbox > *:first-child {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }
        .live-ui-sandbox > *:last-child {
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }

        @media (max-width: 768px) { 
          .dashboard-main-panel { 
            height: auto; 
            overflow-y: visible; 
            padding: 12px 16px 24px 16px !important; 
          } 
        }
      `}</style>
    </main>
  );
}