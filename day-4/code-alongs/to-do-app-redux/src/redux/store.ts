import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducer';

// Define the RootState type to represent the overall state of the Redux store
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;

