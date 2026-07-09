import ReduxCartDemo from './01-redux-cart/ReduxCartDemo';

// Import all files as raw text strings
import cartUiCode from './01-redux-cart/ReduxCartDemo?raw';
import cartSliceCode from './01-redux-cart/cartSlice?raw'; 

export const topics = [
  {
    id: 'redux-shopping-cart',
    title: 'Redux Shopping Cart',
    category: 'State Management',
    component: ReduxCartDemo,
    description: 'A multi-file Redux setup managing global cart state.',
    // 👇 Bundle them into a files array here
    files: [
      { name: 'ReduxCartDemo.jsx', code: cartUiCode },
      { name: 'cartSlice.js', code: cartSliceCode }
    ]
  }
];