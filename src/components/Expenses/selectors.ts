import { RootState } from '@app/store';

export const getExpensesInForm = (state: RootState) =>
  state.expenseFrom.expensesInForm;
export const getExpenseToBeAdded = (state: RootState) =>
  state.expenseFrom.expenseToBeAdded;
export const expenseTitle = (state: RootState) =>
  state.expenseFrom.expenseToBeAdded.title;
export const expenseType = (state: RootState) =>
  state.expenseFrom.expenseToBeAdded.type;
export const expenseAmount = (state: RootState) =>
  state.expenseFrom.expenseToBeAdded.amount;

export const getIsAddingExpense = (state: RootState) =>
  state.expenseFrom.isAddingExpense;
export const getIsLoadingUserExpenses = (state: RootState) =>
  state.expenseFrom.isLoadingUserExpenses;
export const getUserExpenses = (state: RootState) =>
  state.expenseFrom.userExpenses;
export const getIsSubmittingExpenses = (state: RootState) =>
  state.expenseFrom.isSubmittingExpenses;
