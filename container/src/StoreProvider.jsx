// src/StoreProvider.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

/**
 * Redux Provider wrapper component to ensure consistent store context
 * when using Module Federation
 */
const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;