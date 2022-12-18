import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './authSlice';
import counterSliceReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    auth: authSliceReducer,
  },
});

export default store;
