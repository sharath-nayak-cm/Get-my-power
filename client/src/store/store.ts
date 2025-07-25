import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from '../features/hotelSlice';

export const store = configureStore({
  reducer: {
    hotel: hotelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
