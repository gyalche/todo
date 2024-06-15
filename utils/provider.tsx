'use client';
import { persistor, store } from '@/services/redux/store';
import React, { PropsWithChildren } from 'react';
import { QueryClient } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const Providers = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;
