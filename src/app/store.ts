import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@components/auth/authSlice';
import budgetFormReducer from '@components/dashboard/BudgetForm/budgetFormSlice';
import dashboardReducer from '@components/dashboard/dashboardSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    budgetForm: budgetFormReducer,
    dashboard: dashboardReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
