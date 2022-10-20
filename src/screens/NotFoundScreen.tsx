import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { baseStyles, createStyles } from '@assets/BaseStyles';
import { NavigationProp, StackActions } from '@react-navigation/native';

import Theme from '@assets/Theme';

type Props = {
  navigation: NavigationProp<any>;
};

function NotFoundScreen({ navigation }: Props) {
  const goToRoot = () => navigation.dispatch(StackActions.replace('Root'));

  return (
    <View style={styles.container}>
      <Text style={[baseStyles.thinTitle, { textAlign: 'center' }]}>
        Sorry we were unable to find{'\n'}what you're looking for
      </Text>
      <TouchableOpacity
        onPress={goToRoot}
        style={styles.link}>
        <Text style={baseStyles.linkText}>Go to App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = createStyles({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Theme.SIZES.BASE * 2,
  },
  link: {
    marginTop: Theme.SIZES.BASE,
    paddingVertical: Theme.SIZES.BASE,
  },
});

export default NotFoundScreen;
