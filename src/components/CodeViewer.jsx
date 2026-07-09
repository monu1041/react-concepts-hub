// src/components/CodeViewer.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeViewer({ code }) {
  return (
    <div style={{ marginTop: '20px', borderRadius: '8px', overflow: 'hidden', fontSize: '14px' }}>
      <SyntaxHighlighter language="javascript" style={tomorrow} showLineNumbers={true}>
        {code || '// No code available'}
      </SyntaxHighlighter>
    </div>
  );
}