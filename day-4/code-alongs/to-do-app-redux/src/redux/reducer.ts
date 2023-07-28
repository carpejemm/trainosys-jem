import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface State {
  tasks: Task[];
}

const initialState: State = {
  tasks: [], // Initialize with an empty array
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTaskObj: Task = {
        id: state.tasks.length + 1,
        title: action.payload,
        completed: false,
      };
      state.tasks.push(newTaskObj);
    },
    doneTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    editTask: (state, action: PayloadAction<{ id: number; newNameeee: string }>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.title = action.payload.newNameeee;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, doneTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
