import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

import { RootStackParamList } from '@src-types/types';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name: keyof RootStackParamList, params?: any) => {
  if (navigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    navigationRef.navigate(name, params);
  } else {
    // Do nothing as we can't navigate yet
  }
};

export const replace = (name: keyof RootStackParamList, params?: any) => {
  if (navigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    navigationRef.dispatch(StackActions.replace(name, params));
  } else {
    // Do nothing as we can't navigate yet
  }
};
