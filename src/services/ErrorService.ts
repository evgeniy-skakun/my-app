// import * as Sentry from '@sentry/react-native';
import * as Haptics from 'expo-haptics';

import { Alert, AlertButton } from 'react-native';
// import { ENV } from 'react-native-dotenv';

import Strings from '@constants/Strings';

type Props = {
  type?: 'alert' | 'toast';
  message?: string;
  title?: string;
  buttons?: AlertButton[];
  haptics?: boolean;
  hapticsType?: Haptics.NotificationFeedbackType;
};

export const logError = (error: any, props?: Props) => {
  // if (ENV === 'PROD') {
    try {
      // Sentry.addBreadcrumb({
      //   data: { error },
      //   level: Sentry.Severity.Error,
      // });

      // Sentry.captureException(error.originalError || error);
      console.error('LOG_ERROR::', error);
    } catch (e) {
      console.error('ErrorService [ ERROR ]', e);
    }
  // }

  if (props?.type === 'alert') {
    Alert.alert(
      props.title || Strings.ERROR_TITLE,
      props.message || Strings.ERROR_DESCRIPTION,
      props.buttons,
    );
  } else if (props?.type === 'toast') {
    // store.dispatch(
    //   showToast({
    //     message: props.message || Strings.ERROR_DESCRIPTION,
    //   }),
    // );
  }

  if (props?.haptics) {
    Haptics.notificationAsync(
      props?.hapticsType || Haptics.NotificationFeedbackType.Error,
    );
  }
};