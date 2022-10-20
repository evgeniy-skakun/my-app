import { NavigationProp } from '@react-navigation/native';
import { Linking, View } from 'react-native';

import React from 'react';
import { Route } from 'react-native';

import { baseStyles } from '@assets/BaseStyles';
import SettingOptionView from '@components/View/Settings/SettingOptionView';

type Props = {
  navigation: NavigationProp<any>;
  route: Route;
};

const SettingsScreen = (props: Props) => {
  const { navigation } = props;

  const onRateApp = () => {
    Linking.openURL('https://jobs.dou.ua/companies/room4/');
  };

  const openSettings = () => {
    Linking.openSettings();
  };

  return (
    <View style={baseStyles.container}>
      <SettingOptionView
        title='System Settings'
        icon='cog'
        onPress={openSettings}
      />
      <SettingOptionView title='Rate App' icon='star' onPress={onRateApp} />
    </View>
  );
};

export default SettingsScreen;
