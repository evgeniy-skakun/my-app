import { View } from 'react-native';

import React from 'react';
import { Profile } from '@models/ProfileModel';
import TitleValueView from '@components/Atoms/TitleValueView';
import { createStyles } from '@assets/BaseStyles';
import Theme from '@assets/Theme';

type Props = {
  profile: Profile;
};

const ProfileDetailInfoView = (props: Props) => {
  const { profile } = props;

  const address = `${profile.location.country}, ${profile.location.state}, ${profile.location.city}`;

  return (
    <View style={styles.container}>
      <TitleValueView title='Email' value={profile.email} />
      <TitleValueView title='Phone' value={profile.phone} />
      <TitleValueView title='Cell' value={profile.cell} />
      <TitleValueView title='Address' value={address} />
      <TitleValueView title='Gender' value={profile.gender} />
      <TitleValueView title='Age' value={profile.dob.age.toString()} />
      <TitleValueView
        title='Time Zone'
        value={profile.location.timezone.description}
      />
    </View>
  );
};

const styles = createStyles({
  container: {
    alignItems: 'center',
    marginHorizontal: Theme.SIZES.BASE,
    marginTop: Theme.SIZES.BASE,
  },
});

export default ProfileDetailInfoView;
