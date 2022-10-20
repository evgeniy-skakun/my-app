import { ActivityIndicator, RefreshControl, View } from 'react-native';

import React from 'react';
import Theme from '@assets/Theme';
import { baseStyles } from '@assets/BaseStyles';

type Props = {};

const FullScreenLoadingView = (props: Props) => {
  return (
    <View style={baseStyles.centeredContainer}>
      <ActivityIndicator color={Theme.COLORS.QUATERNARY} size='small' />
    </View>
  );
};

export default FullScreenLoadingView;
