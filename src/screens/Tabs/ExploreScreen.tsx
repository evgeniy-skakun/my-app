import { NavigationProp } from '@react-navigation/native';
import { View } from 'react-native';

import React from 'react';
import { Route } from 'react-native';
import { createStyles } from '@assets/BaseStyles';
import Layout from '@constants/Layout';
import MapView from 'react-native-maps';
import ExploreNavBarView from '@components/View/Explore/ExploreNavBarView';
import {
  selectExploreProfiles,
  useAppDispatch,
  useAppSelector,
} from '@hooks/useAppHooks';
import MarkerView from '@components/View/Explore/MarkerView';
import ExplorePreviewView from '@components/View/Explore/ExplorePreviewView';
import { exploreActions } from '@store/exploreSlice';

type Props = {
  navigation: NavigationProp<any>;
  route: Route;
};

const ExploreScreen = (props: Props) => {
  const { navigation } = props;

  const profiles = useAppSelector(selectExploreProfiles);

  const dispatch = useAppDispatch();

  const onMapPress = () => {
    dispatch(exploreActions.setSelectedProfile(-1));
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} onPress={onMapPress}>
        {profiles.map((profile, index) => (
          <MarkerView profile={profile} key={index} index={index} />
        ))}
      </MapView>
      <ExploreNavBarView navigation={navigation} />
      <ExplorePreviewView navigation={navigation} />
    </View>
  );
};

const styles = createStyles({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Layout.window.width,
    height: Layout.window.height,
  },
});

export default ExploreScreen;
