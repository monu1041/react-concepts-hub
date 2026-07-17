// src/components/ReadmeViewer.jsx
import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function ReadmeViewer({ content }) {
  if (!content) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        No README.md documentation found for this topic yet!
      </div>
    );
  }

  return (
    <div className="readme-markdown-container" style={{ padding: '8px 16px', color: 'var(--text-primary)', lineHeight: '1.7' }}>
      <ReactMarkdown>{content}</ReactMarkdown>

      {/* 💡 Embedded Theme-Aware Markdown Typography Rules */}
      <style>{`
        .readme-markdown-container h1, 
        .readme-markdown-container h2, 
        .readme-markdown-container h3 {
          color: var(--text-primary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 8px;
          margin-top: 24px;
          margin-bottom: 16px;
        }
        
        .readme-markdown-container h1:first-child,
        .readme-markdown-container h2:first-child {
          margin-top: 0;
        }

        .readme-markdown-container p, 
        .readme-markdown-container ul, 
        .readme-markdown-container ol {
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .readme-markdown-container a {
          color: var(--accent);
          text-decoration: underline;
        }

        /* Inline Code Chips (e.g., \`const x = 10\`) */
        .readme-markdown-container code:not(pre code) {
          background-color: var(--bg-main);
          color: var(--accent);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.88em;
          border: 1px solid var(--border-color);
        }

        /* Multi-line Code Blocks */
        .readme-markdown-container pre {
          background-color: var(--bg-main);
          padding: 16px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          overflow-x: auto;
          margin-bottom: 16px;
        }

        .readme-markdown-container pre code {
          background-color: transparent;
          color: var(--text-primary);
          padding: 0;
          border: none;
          font-family: monospace;
          font-size: 0.9em;
        }

        /* Blockquotes */
        .readme-markdown-container blockquote {
          border-left: 4px solid var(--accent);
          margin: 0 0 16px 0;
          padding: 8px 16px;
          background-color: var(--bg-main);
          color: var(--text-secondary);
          border-radius: 0 6px 6px 0;
        }
      `}</style>
    </div>
  );
}