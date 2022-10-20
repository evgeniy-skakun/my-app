import { loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { useEffect, useState } from 'react';

import { logError } from '@services/ErrorService';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await loadAsync({
          GorditaBlack: require('@assets/fonts/GorditaBlack.otf'),
          GorditaBlackItalic: require('@assets/fonts/GorditaBlackItalic.otf'),
          GorditaBold: require('@assets/fonts/GorditaBold.otf'),
          GorditaBoldItalic: require('@assets/fonts/GorditaBoldItalic.otf'),
          GorditaMedium: require('@assets/fonts/GorditaMedium.otf'),
          GorditaMediumItalic: require('@assets/fonts/GorditaMediumItalic.otf'),
          GorditaRegular: require('@assets/fonts/GorditaRegular.otf'),
          GorditaRegularItalic: require('@assets/fonts/GorditaRegularItalic.otf'),
        });
      } catch (e) {
        logError(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
