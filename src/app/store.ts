import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@components/auth/authSlice';
import budgetFormReducer from '@components/dashboard/BudgetForm/budgetFormSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    budgetForm: budgetFormReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
