import { RootState } from '@app/store';

export const getLoadingBudget = (state: RootState) =>
  state.dashboard.loadingBudget;

export const monthlyBudgetSelector = (state: RootState) =>
  state.dashboard.monthlyBudget;
