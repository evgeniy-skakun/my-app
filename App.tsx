import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox, StyleSheet } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from '@hooks/useCachedResources';
import Navigation from '@navigation/index';

import { store } from '@store/store';

export default function App() {
  const isLoadingComplete = useCachedResources();

  LogBox.ignoreAllLogs();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ReduxProvider store={store}>
        <SafeAreaProvider>
          <StatusBar translucent={true} backgroundColor='transparent' />
          <Navigation />
        </SafeAreaProvider>
      </ReduxProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
