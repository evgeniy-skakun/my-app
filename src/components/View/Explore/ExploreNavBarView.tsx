import { NavigationProp } from '@react-navigation/native';
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Octicons } from '@expo/vector-icons';

import React from 'react';
import { baseStyles, createStyles, MAX_WIDTH } from '@assets/BaseStyles';
import Theme from '@assets/Theme';
import Devices from '@constants/Devices';
import {
  selectExploreLoading,
  useAppDispatch,
  useAppSelector,
} from '@hooks/useAppHooks';
import { exploreActions, loadData } from '@store/exploreSlice';

type Props = {
  navigation: NavigationProp<any>;
};

const ExploreNavBarView = (props: Props) => {
  const { navigation } = props;

  const isLoading = useAppSelector(selectExploreLoading);

  const dispatch = useAppDispatch();

  const onSearch = () => {
    Alert.alert('Opps', 'Coming soon');
    dispatch(exploreActions.setSelectedProfile(-1));
  };

  const openList = () => {
    Alert.alert('Opps', 'Coming soon');
    dispatch(exploreActions.setSelectedProfile(-1));
  };

  const onLoadData = () => dispatch(loadData());

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.searchContainer} onPress={onSearch}>
          <Octicons
            name='search'
            size={Theme.SIZES.BASE * 1.5}
            color={Theme.COLORS.MUTED}
          />
          <Text style={styles.searchTitle}>Search...</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openList}>
          <Octicons
            name='list-unordered'
            size={Theme.SIZES.BASE * 1.5}
            color={Theme.COLORS.MUTED}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.loadDataContainer}
        disabled={isLoading}
        onPress={onLoadData}>
        {isLoading ? (
          <ActivityIndicator color={Theme.COLORS.QUATERNARY} size='small' />
        ) : (
          <Text style={baseStyles.linkText}>Load Data</Text>
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = createStyles({
  container: {
    ...baseStyles.shadowBorder,
    borderRadius: Theme.SIZES.BASE * 2,
    height: Theme.SIZES.BASE * 3,
    alignItems: 'center',
    paddingHorizontal: Theme.SIZES.BASE,
    width: MAX_WIDTH,
    top: Devices.topToastOffset,
    position: 'absolute',
    backgroundColor: Theme.COLORS.WHITE,
    flexDirection: 'row',
  },
  loadDataContainer: {
    ...baseStyles.shadowBorder,
    borderRadius: Theme.SIZES.BASE * 2,
    width: 100,
    height: Theme.SIZES.BASE * 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    top: Devices.topToastOffset + Theme.SIZES.BASE * 4.5,
    backgroundColor: Theme.COLORS.WHITE,
    position: 'absolute',
  },
  searchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  searchTitle: {
    ...baseStyles.inputLabel,
    paddingStart: Theme.SIZES.BASE,
  },
});

export default ExploreNavBarView;
