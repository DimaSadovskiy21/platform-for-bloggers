import { combineReducers, configureStore } from '@reduxjs/toolkit';
import blogReducer from './reducers/blogSlice';

const rootReducer = combineReducers({
  blogReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
