import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { logError } from '@services/ErrorService';

import { Profile } from '@models/ProfileModel';
import { getUserPofiles } from '@services/UserService';

export interface ExploreState {
  isLoading: boolean;
  profiles: Profile[];
  selectedProfile?: Profile;
}

const initialState: ExploreState = {
  isLoading: false,
  profiles: [],
};

const loadData = createAsyncThunk('explore/loadData', async (_, thunk) => {
  console.log('#explore/loadData::');

  thunk.dispatch(exploreActions.setLoading(true));

  try {
    const profiles = await getUserPofiles();
    thunk.dispatch(exploreActions.setProfiles(profiles));
  } catch (err) {
    logError(err);
  }

  thunk.dispatch(exploreActions.setLoading(false));
});

export const exploreSlice = createSlice({
  name: 'explore',
  initialState,
  reducers: {
    setProfiles: (state, action: PayloadAction<Profile[]>) => {
      state.profiles = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSelectedProfile: (state, action: PayloadAction<number>) => {
      if (action.payload === -1) {
        state.selectedProfile = undefined;
      } else {
        state.selectedProfile = state.profiles[action.payload];
      }
    },
  },
});

export { loadData };
export const exploreActions = exploreSlice.actions;
export default exploreSlice.reducer;
