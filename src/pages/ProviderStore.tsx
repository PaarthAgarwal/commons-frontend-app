"use client"
import React from 'react';
import { Provider } from 'react-redux';
import store from '../lib/store';

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
