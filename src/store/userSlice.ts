import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { logError } from '@services/ErrorService';

import { Profile } from '@models/ProfileModel';
import { getUserByUid } from '@services/UserService';

export interface UserState {
  profile?: Profile;
}

const initialState: UserState = {
  profile: undefined,
};

const authStateChanged = createAsyncThunk(
  'user/authStateChanged',
  async (uid: string, thunk) => {
    console.log('#user/authStateChanged::', uid);

    if (!uid) {
      thunk.dispatch(userActions.setProfile(undefined));
      return null;
    }

    // identifyMixpanelProfile(uid);
    try {
      const profile = await getUserByUid('<id>');
      thunk.dispatch(userActions.setProfile(profile));

      // todo: other initialization
    } catch (err) {
      logError(err);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Profile | undefined>) => {
      state.profile = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.profile = { ...state.profile, ...action.payload };
    },
  },
});

export { authStateChanged };
export const userActions = userSlice.actions;
export default userSlice.reducer;
