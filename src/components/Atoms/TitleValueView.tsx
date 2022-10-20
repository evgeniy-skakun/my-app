import {
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';
import Theme from '@assets/Theme';
import { baseStyles, createStyles } from '@assets/BaseStyles';

type Props = {
  title: string;
  value: string;
};

const TitleValueView = (props: Props) => {
  const { title, value } = props;

  return (
    <View style={styles.container}>
      <Text style={baseStyles.inputLabel}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = createStyles({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Theme.COLORS.MUTED,
    width: '100%',
    paddingVertical: Theme.SIZES.BASE / 2,
    marginBottom: Theme.SIZES.BASE,
  },
  value: {
    ...baseStyles.thinTitleS,
    paddingTop: Theme.SIZES.BASE / 3,
  },
});

export default TitleValueView;
