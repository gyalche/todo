import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type userType = {
  taskCompletedList: Array<any>;
};
const initialState: userType = {
  taskCompletedList: [],
};
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    storTaskComplete: (state: any, action: PayloadAction<any>) => {
      state.taskCompletedList.push(action.payload);
    },
    removeIndividalTask: (state: any, action: PayloadAction<any>) => {
      const index = state.taskCompletedList.findIndex(
        (idx: any) => idx?._id === action.payload,
      );
      state.taskCompletedList.splice(index, 1);
    },
  },
});

export const { storTaskComplete, removeIndividalTask } = taskSlice.actions;

export const getCompletedTaskList = (state: any) =>
  state?.task?.taskCompletedList;
export default taskSlice.reducer;
