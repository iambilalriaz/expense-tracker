import { RootState } from '@app/store';

export const getLoadingBudget = (state: RootState) => state.home.loadingBudget;

export const monthlyBudgetSelector = (state: RootState) =>
  state.home.monthlyBudget;
