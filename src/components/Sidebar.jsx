// src/components/Sidebar.jsx
import React, { useState, useEffect, useTransition } from 'react';
import { topics } from '../topics/topicsRegistry';

export default function Sidebar({ activeTopicId, setActiveTopicId, isOpen }) {
  const [isPending, startTransition] = useTransition();

  // 1️⃣ Dynamically group all topics by their category
  const groupedTopics = topics.reduce((acc, topic) => {
    const category = topic.category || 'Uncategorized';
    if (!acc[category]) acc[category] = [];
    acc[category].push(topic);
    return acc;
  }, {});

  // 2️⃣ Find the category of the currently active topic
  const currentTopic = topics.find(t => t.id === activeTopicId);
  const initialCategory = currentTopic ? currentTopic.category : Object.keys(groupedTopics)[0];

  // 3️⃣ State to track which category accordion is currently open
  const [expandedCategory, setExpandedCategory] = useState(initialCategory);

  // Keep the accordion synced if the active topic changes programmatically
  useEffect(() => {
    if (currentTopic) {
      setExpandedCategory(currentTopic.category);
    }
  }, [currentTopic]);

  const handleTopicClick = (id) => {
    startTransition(() => {
      setActiveTopicId(id);
    });
  };

  const toggleCategory = (category) => {
    setExpandedCategory(prev => prev === category ? null : category);
  };

  return (
    <aside 
      className={`app-sidebar ${isOpen ? 'open' : ''}`}
      style={{ 
        width: '280px', 
        background: 'var(--bg-sidebar)', 
        color: 'var(--text-sidebar)', 
        height: '100%', 
        padding: '20px', 
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 50,
        transition: 'background-color 0.2s, color 0.2s',
        opacity: isPending ? 0.7 : 1
      }}
    >
      {/* Sidebar Header Title Anchor */}
      <h2 style={{ 
        fontSize: '20px', 
        marginBottom: '20px', 
        borderBottom: '1px solid var(--border-color)', 
        paddingBottom: '10px', 
        flexShrink: 0, 
        color: 'var(--text-sidebar)',
        transition: 'border-color 0.2s, color 0.2s'
      }}>
        📚 Dev Journal
      </h2>
      
      {/* Scrollable Category Container */}
      <div style={{ overflowY: 'auto', flex: 1, paddingRight: '4px' }}>
        {Object.entries(groupedTopics).map(([category, categoryTopics]) => {
          const isExpanded = expandedCategory === category;

          return (
            <div key={category} style={{ marginBottom: '12px' }}>
              
              {/* 📂 Category Header / Accordion Toggle */}
              <button 
                onClick={() => toggleCategory(category)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  /* 💡 FIX 1: Bolder, larger, and brighter category text */
                  color: 'var(--text-sidebar)',
                  fontWeight: 'bold', 
                  fontSize: '13px', 
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  padding: '8px 4px',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span>{category} ({categoryTopics.length})</span>
                {/* ⬇️ Animated Arrow */}
                <svg 
                  /* 💡 FIX 2: 1.5x bigger dimensions (18px) and thicker stroke (3px) */
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {/* 📝 The Nested Topics List (Only renders if expanded) */}
              {isExpanded && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '4px 0 0 0' }}>
                  {categoryTopics.map((topic) => {
                    const isActive = activeTopicId === topic.id;
                    return (
                      <li 
                        key={topic.id} 
                        onClick={() => handleTopicClick(topic.id)}
                        style={{
                          padding: '10px 15px 10px 12px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          marginBottom: '4px',
                          background: isActive ? 'var(--accent)' : 'transparent',
                          color: isActive ? '#ffffff' : 'var(--text-sidebar)', 
                          transition: 'background-color 0.2s, color 0.2s',
                          fontSize: '14px',
                          borderLeft: '3px solid transparent',
                        }}
                      >
                        <div style={{ fontWeight: isActive ? '600' : '400' }}>
                          {topic.title}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {/* Sliding Mobile Breakpoint Drawer Logic Override */}
      <style>{`
        @media (max-width: 768px) {
          .app-sidebar {
            position: fixed !important;
            top: 56px;
            left: 0;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
            width: 100% !important;
          }
          .app-sidebar.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </aside>
  );
}