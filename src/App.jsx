// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { topics } from './topics/topicsRegistry';

export default function App() {
  // Default to the first topic in your registry if it exists
  const [activeTopicId, setActiveTopicId] = useState(topics[0]?.id || null);

  const currentTopic = topics.find(t => t.id === activeTopicId);

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden', fontFamily: 'sans-serif' }}>
      <Sidebar activeTopicId={activeTopicId} setActiveTopicId={setActiveTopicId} />
      <Dashboard topic={currentTopic} />
    </div>
  );
}