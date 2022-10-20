import React from 'react';

import { Marker } from 'react-native-maps';
import { Profile } from '@models/ProfileModel';
import { useAppDispatch } from '@hooks/useAppHooks';
import { exploreActions } from '@store/exploreSlice';

type Props = {
  index: number;
  profile: Profile;
};

const MarkerView = (props: Props) => {
  const { index, profile } = props;

  const dispatch = useAppDispatch();

  const openProfile = (index: number) => {
    dispatch(exploreActions.setSelectedProfile(index));
  };

  return (
    <Marker
      key={index}
      coordinate={{
        latitude: +profile.location.coordinates.latitude,
        longitude: +profile.location.coordinates.longitude,
      }}
      onPress={() => openProfile(index)}></Marker>
  );
};

export default MarkerView;
