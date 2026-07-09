import ReduxCartDemo from './01-redux-cart/ReduxCartDemo';
import ShoppingCartRedux from './shopping-cart-redux/ShoppingCartRedux';

// import all files for shopping-cart-redux
import ShoppingCartReduxCode from './shopping-cart-redux/ShoppingCartRedux?raw';
import cartSlice from './shopping-cart-redux/features/cart/cartSlice?raw';
import Cart from './shopping-cart-redux/components/Cart?raw';
import ProductList from './shopping-cart-redux/components/ProductList?raw';
import store from './shopping-cart-redux/store?raw';

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
  },
  {
    id: 'redux-shopping-cart1',
    title: 'Redux Shopping Cart',
    category: 'State Management',
    component: ShoppingCartRedux,
    description: 'A complete Redux Toolkit architecture featuring independent store configuration, slice actions, and component state subscription.',
    files: [
      { name: 'ShoppingCartRedux.jsx', code: ShoppingCartReduxCode },
      { name: 'cartSlice.jsx', code: cartSlice },
      { name: 'Cart.jsx', code: Cart },
      { name: 'ProductList.jsx', code: ProductList },
      { name: 'store.js', code: store }
    ]
  }
];