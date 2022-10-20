import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { Profile } from '@models/ProfileModel';
import TitleValueView from '@components/Atoms/TitleValueView';
import { baseStyles, createStyles } from '@assets/BaseStyles';
import Theme from '@assets/Theme';

import { Entypo } from '@expo/vector-icons';

type Props = {
  title: string;
  onPress: () => void;
  icon: any;
};

const SettingOptionView = (props: Props) => {
  const { title, onPress, icon } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Entypo
        color={Theme.COLORS.DARK}
        name={icon}
        size={Theme.SIZES.TAB_BAR_ICON_SIZE}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = createStyles({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Theme.COLORS.MUTED,
    width: '100%',
    paddingVertical: Theme.SIZES.BASE / 2,
    marginBottom: Theme.SIZES.BASE,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...baseStyles.thinTitle,
    fontWeight: '400',
    marginStart: Theme.SIZES.BASE,
  },
});

export default SettingOptionView;
