import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { mockedTodosTest } from '../mockedTodos';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: mockedTodosTest,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      };
      state.unshift(todo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
            description: action.payload.description,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
