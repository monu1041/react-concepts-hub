// src/topics/topicsRegistry.js
import ReduxCartDemo from './01-redux-cart/ReduxCartDemo';
import ReduxCartCode from './01-redux-cart/ReduxCartDemo?raw'; // '?raw' tells Vite to read this as a text string!

export const topics = [
  {
    id: 'redux-shopping-cart',
    title: 'Redux Shopping Cart',
    category: 'State Management',
    component: ReduxCartDemo,
    codeString: ReduxCartCode,
    description: 'A mock shopping cart demonstrating Redux slice actions, reducers, and global state tracking.'
  }
  // Future topics go here seamlessly!
];