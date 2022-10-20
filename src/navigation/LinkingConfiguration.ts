import { LinkingOptions } from '@react-navigation/native';

const linking: LinkingOptions<any> = {
  prefixes: ['myapp://'],
  // getInitialURL: async () => {
  //   try {
  //     if (Platform.OS === 'ios') {
  //       const url = await Linking.getInitialURL();

  //       if (url) {
  //         const initialLink = await dynamicLinks().resolveLink(url);

  //         if (initialLink) {
  //           setTimeout(() => handleDynamicLink(initialLink), 1000);
  //           return initialLink.url;
  //         }
  //       }
  //     } else {
  //       const initialLink = await dynamicLinks().getInitialLink();

  //       if (initialLink) {
  //         setTimeout(() => handleDynamicLink(initialLink), 1000);
  //         return initialLink.url;
  //       }
  //     }
  //   } catch (err) {
  //     console.log('getInitialURL:dynamicLinks:error', err);
  //   }

  //   const url = await Linking.getInitialURL();

  //   if (!!url) {
  //     setTimeout(() => handleDeepLink(url), 1000);
  //   }

  //   return url;
  // },
  // subscribe: (listener) => {
  //   const linkingSubscription = Linking.addEventListener('url', ({ url }) => {
  //     setTimeout(() => handleDeepLink(url), 500);
  //     listener(url);
  //   });

  //   const unsubscribeFirebase = dynamicLinks().onLink((data) => {
  //     setTimeout(() => handleDynamicLink(data), 500);
  //     listener(data.url);
  //   });

  //   return () => {
  //     linkingSubscription.remove();
  //     unsubscribeFirebase();
  //   };
  // },
};

export default linking;
