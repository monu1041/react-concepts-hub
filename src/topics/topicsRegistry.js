// src/topics/topicsRegistry.js

export const topics = [
  {
    id: 'redux-shopping-cart',
    title: 'Redux Shopping Cart',
    category: 'State Management',
    description: 'A multi-file Redux setup managing global cart state.',
    // Dynamically imports the component only when clicked
    loadComponent: () => import('./01-redux-cart/ReduxCartDemo'),
    // Dynamically imports the raw source code text files on demand
    loadFiles: async () => {
      const [cartUi, cartSlice] = await Promise.all([
        import('./01-redux-cart/ReduxCartDemo?raw'),
        import('./01-redux-cart/cartSlice?raw')
      ]);
      return [
        { name: 'ReduxCartDemo.jsx', code: cartUi.default },
        { name: 'cartSlice.js', code: cartSlice.default }
      ];
    }
  },
  {
    id: 'redux-shopping-cart1',
    title: 'Redux Shopping Cart v2',
    category: 'State Management',
    description: 'A complete Redux Toolkit architecture featuring independent store configuration, slice actions, and component state subscription.',
    // Dynamically imports the component only when clicked
    loadComponent: () => import('./shopping-cart-redux/ShoppingCartRedux'),
    // Dynamically imports all 5 source code text files simultaneously on demand
    loadFiles: async () => {
      const [uiCode, sliceCode, cartCode, productCode, storeCode] = await Promise.all([
        import('./shopping-cart-redux/ShoppingCartRedux?raw'),
        import('./shopping-cart-redux/features/cart/cartSlice?raw'),
        import('./shopping-cart-redux/components/Cart?raw'),
        import('./shopping-cart-redux/components/ProductList?raw'),
        import('./shopping-cart-redux/store?raw')
      ]);
      return [
        { name: 'ShoppingCartRedux.jsx', code: uiCode.default },
        { name: 'cartSlice.jsx', code: sliceCode.default },
        { name: 'Cart.jsx', code: cartCode.default },
        { name: 'ProductList.jsx', code: productCode.default },
        { name: 'store.js', code: storeCode.default }
      ];
    }
  }
];