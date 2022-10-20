import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { RootState } from '@store/store';

export const useAppDispatch = <any>useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// user
export const selectUserProfile = (state: RootState) => state.user.profile;

// explore
export const selectExploreLoading = (state: RootState) =>
  state.explore.isLoading;
export const selectExploreProfiles = (state: RootState) =>
  state.explore.profiles;
export const selectExploreSelectedProfile = (state: RootState) =>
  state.explore.selectedProfile;
