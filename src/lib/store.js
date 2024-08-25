import { configureStore } from '@reduxjs/toolkit';
import { mockStore, requiredCerts } from './localconf'
import explorerReducer from './redux/explorer/slice';

const preloadedState = {
  user:
    process.env.NODE_ENV !== 'production' && mockStore
      ? { username: 'test', certificates_uploaded: requiredCerts }
      : {},
  status: {},
  versionInfo: {
    dataVersion: '',
    dictionaryVersion: '',
    portalVersion: process.env.PORTAL_VERSION,
    survivalCurveVersion: '',
  },
};

const store = configureStore({
  reducer: {
    explorer: explorerReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

export default store;
