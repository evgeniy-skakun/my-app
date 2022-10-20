import { Image, Text, View } from 'react-native';

import React from 'react';
import { Profile } from '@models/ProfileModel';
import { baseStyles, createStyles } from '@assets/BaseStyles';
import Theme from '@assets/Theme';
import { NavigationProp } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
  profile: Profile;
};

const ProfileDetailHeaderView = (props: Props) => {
  const { profile, navigation } = props;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: profile.picture.large }}
        style={baseStyles.avatar}
      />
      <View>
        <Text style={styles.name}>@{profile.name.first || ''}</Text>
        <Text style={styles.nat}>{profile.nat}</Text>
      </View>
    </View>
  );
};

const styles = createStyles({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  name: {
    ...baseStyles.thinTitle,
    fontWeight: '400',
    marginStart: Theme.SIZES.BASE,
  },
  nat: {
    ...baseStyles.thinTitleS,
    color: Theme.COLORS.MUTED,
    fontWeight: '400',
    marginStart: Theme.SIZES.BASE,
  },
});

export default ProfileDetailHeaderView;
