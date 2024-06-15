import { combineReducers } from '@reduxjs/toolkit';
import taskSlice from './slices/task.slice';

const rootReducer = combineReducers({
  task: taskSlice,
});

export default rootReducer;
