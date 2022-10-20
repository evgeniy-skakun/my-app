import * as React from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import Theme from '@assets/Theme';

type Props = {
  icon: any;
  onPress: () => void;
  style?: ViewStyle;
};

const NavBarButtonView = (props: Props) => {
  return (
    <View style={props.style}>
      <TouchableOpacity onPress={props.onPress}>
        <Entypo
          color={Theme.COLORS.DARK}
          name={props.icon}
          size={Theme.SIZES.BASE * 1.5}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavBarButtonView;
