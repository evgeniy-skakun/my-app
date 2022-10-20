import { NavigationProp } from '@react-navigation/native';
import { RefreshControl, ScrollView } from 'react-native';

import React, { useEffect, useState } from 'react';
import { Route } from 'react-native';
import { baseStyles } from '@assets/BaseStyles';
import {
  selectUserProfile,
  useAppDispatch,
  useAppSelector,
} from '@hooks/useAppHooks';
import FullScreenLoadingView from '@components/Atoms/FullScreenLoadingView';
import ProfileDetailHeaderView from '@components/View/Profile/ProfileDetailHeaderView';
import ProfileDetailInfoView from '@components/View/Profile/ProfileDetailInfoView';
import Theme from '@assets/Theme';
import { getUserByUid } from '@services/UserService';
import { userActions } from '@store/userSlice';

type Props = {
  navigation: NavigationProp<any>;
  route: Route;
};

const ProfileScreen = (props: Props) => {
  const { navigation } = props;

  const [isRefresh, setRefresh] = useState<boolean>(false);

  const profile = useAppSelector(selectUserProfile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (profile) {
      const fullName = `${profile.name.first} ${profile.name.last}`;

      navigation?.setOptions({
        headerTitle: fullName,
        title: fullName,
      });
    }
  }, [profile?.name]);

  if (!profile) {
    return <FullScreenLoadingView />;
  }

  const handleRefresh = async () => {
    setRefresh(true);

    try {
      const randomProfile = await getUserByUid('...');
      dispatch(userActions.setProfile(randomProfile));
    } catch (err) {
      /* ignore */
    }

    setRefresh(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefresh}
          onRefresh={handleRefresh}
          tintColor={Theme.COLORS.BLACK}
        />
      }
      contentContainerStyle={baseStyles.container}>
      <ProfileDetailHeaderView profile={profile} navigation={navigation} />
      <ProfileDetailInfoView profile={profile} />
    </ScrollView>
  );
};

export default ProfileScreen;
