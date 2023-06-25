import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@components/auth/authSlice';
import budgetFormReducer from '@components/Budget/BudgetForm/budgetFormSlice';
import homeReducer from '@components/Home/homeSlice';
import expenseFormSReducer from '@components/Expenses/expenseFormSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    budgetForm: budgetFormReducer,
    home: homeReducer,
    expenseFrom: expenseFormSReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
