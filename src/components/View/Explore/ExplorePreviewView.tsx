import { NavigationProp } from '@react-navigation/native';

import React, { useCallback, useEffect, useRef } from 'react';
import { baseStyles, createStyles } from '@assets/BaseStyles';
import {
  selectExploreSelectedProfile,
  useAppDispatch,
  useAppSelector,
} from '@hooks/useAppHooks';

import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import ProfileDetailHeaderView from '../Profile/ProfileDetailHeaderView';
import ProfileDetailInfoView from '../Profile/ProfileDetailInfoView';
import { exploreActions } from '@store/exploreSlice';
import Theme from '@assets/Theme';

type Props = {
  navigation: NavigationProp<any>;
};

const ExplorePreviewView = (props: Props) => {
  const { navigation } = props;

  const bottomSheetRef = useRef<BottomSheet>(null);

  const selectedProfile = useAppSelector(selectExploreSelectedProfile);

  const dispatch = useAppDispatch();

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      dispatch(exploreActions.setSelectedProfile(-1));
    }
  }, []);

  useEffect(() => {
    if (selectedProfile?.email) {
      bottomSheetRef.current?.snapToIndex(0);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [selectedProfile]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      enablePanDownToClose={true}
      snapPoints={[Theme.SIZES.BASE * 13, '95%']}
      onChange={handleSheetChanges}>
      <BottomSheetScrollView contentContainerStyle={baseStyles.container}>
        {!!selectedProfile && (
          <>
            <ProfileDetailHeaderView
              profile={selectedProfile}
              navigation={navigation}
            />
            <ProfileDetailInfoView profile={selectedProfile} />
          </>
        )}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = createStyles({});

export default ExplorePreviewView;
