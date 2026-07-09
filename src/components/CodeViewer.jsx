import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeViewer({ files }) {
  // Default to the first file in the array
  const [activeFileIndex, setActiveFileIndex] = useState(0);

  if (!files || files.length === 0) {
    return <div style={{ color: '#64748b' }}>No code files available.</div>;
  }

  const currentFile = files[activeFileIndex];

  return (
    <div>
      {/* File Sub-Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', background: '#0f172a', padding: '8px', borderRadius: '6px' }}>
        {files.map((file, index) => (
          <button
            key={file.name}
            onClick={() => setActiveFileIndex(index)}
            style={{
              padding: '6px 12px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '13px',
              cursor: 'pointer',
              background: activeFileIndex === index ? '#3b82f6' : 'transparent',
              color: '#fff',
              fontWeight: activeFileIndex === index ? 'bold' : 'normal'
            }}
          >
            📄 {file.name}
          </button>
        ))}
      </div>

      {/* Syntax Highlighter */}
      <div style={{ borderRadius: '8px', overflow: 'hidden', fontSize: '14px' }}>
        <SyntaxHighlighter 
          language="javascript" 
          style={tomorrow} 
          showLineNumbers={true}
        >
          {currentFile.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}