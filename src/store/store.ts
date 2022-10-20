import { configureStore } from '@reduxjs/toolkit';

import exploreReducer from './exploreSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    explore: exploreReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // immutableCheck: false,
      // serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
