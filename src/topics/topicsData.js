// src/topics/topicsData.js

export const topicsData = [
  {
    id: '01-redux-cart', 
    title: 'Redux Shopping Cart',
    category: 'State Management',
    description: 'A multi-file Redux setup managing global cart state.',
    entryFile: 'ReduxCartDemo.jsx', 
    excludeFiles: ['secretConfig.js'] 
  },
  {
    id: 'shopping-cart-redux', 
    title: 'Redux Shopping Cart v2',
    category: 'State Management',
    description: 'A complete Redux Toolkit architecture.',
    entryFile: 'ShoppingCartRedux.jsx'
  },
  {
    id: 'product-slice-async', 
    title: 'Async Product Slice',
    category: 'State Management',
    description: 'A Redux Toolkit slice with async thunks for product data management.',
    entryFile: 'App.jsx'
  },
  {
    id: 'notification-slice', 
    title: 'Notification Slice',
    category: 'State Management',
    description: 'A Redux Toolkit slice for managing notification state.',
    entryFile: 'App.jsx'
  }
  ,
  {
    id: 'react18-performance-demo', 
    title: 'React 18 Performance Demo',
    category: 'Performance',
    description: 'A demo showcasing React 18 performance improvements.',
    entryFile: 'App.jsx'
  }
  // 🚀 Just drop new arrays here! Clean, readable, and lightning fast.
];