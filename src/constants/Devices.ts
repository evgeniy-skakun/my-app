import * as Device from 'expo-device';

import { Platform } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import Theme from '@assets/Theme';

import Layout from './Layout';

type ModalPresentation = 'fullScreenModal' | 'modal';
type ModalPresentationStyle = 'fullScreen' | 'pageSheet';

/*
 * get status bar height
 *
 * android ~24
 * ios 20 - 40
 */
const statusBarHeight = initialWindowMetrics?.insets.top || 0;

/*
 * get bottom insets height
 *
 */
const bottomSafeHeight = initialWindowMetrics?.insets.bottom || 0;

/*
 * check if phone with notch
 */
const isNotchDevice = Platform.select({
  android: statusBarHeight > 28,
  ios: statusBarHeight > 20,
  default: false,
});

/*
 * check if phone has insets
 */
const isNoInsets = Layout.screen.height === Layout.window.height;

/*
 * get presentation style for react navigation
 */
const presentation: ModalPresentation =
  Device.osName === 'iPadOS' ? 'fullScreenModal' : 'modal';

/*
 * get presentation style for react native modal component
 */
const presentationStyle: ModalPresentationStyle =
  Device.osName === 'iPadOS' ? 'fullScreen' : 'pageSheet';

/*
 * get paddingTop for BottomSheetSectionList | BottomSheetScrollView | BottomSheetFlatList
 */
const bottomSheetPadding = isNotchDevice
  ? Theme.SIZES.BASE * 5
  : Theme.SIZES.BASE * 2.5;

/*
 * get top for ImageBackground
 */
const topImageBackground = isNotchDevice
  ? Layout.window.height - Theme.SIZES.BASE * 10
  : Layout.window.height - Theme.SIZES.BASE * 7;

/*
 * get toast top offset
 */
const topToastOffset =
  statusBarHeight +
  Platform.select({
    default: 0,
    ios: 44,
    android: 56,
  });

export default {
  isNoInsets,
  presentation,
  isNotchDevice,
  topToastOffset,
  statusBarHeight,
  bottomSafeHeight,
  presentationStyle,
  bottomSheetPadding,
  topImageBackground,
};
