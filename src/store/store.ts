import { combineReducers, configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice'
import { githubAPI } from './githubService';

const rootReducer = combineReducers({
  userReducer,
  [githubAPI.reducerPath]: githubAPI.reducer,

})
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
