import { RootState } from '@app/store';

export const getMonthlyIncome = (state: RootState) =>
  state.budgetForm.monthlyIncome;
export const getMedicalExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.medical;
export const getShoppingExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.shopping;
export const getUtilityBillsExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.utilityBills;
export const getRentsExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.rents;
export const getFeesExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.fees;
export const getFoodExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.food;
export const getMobileExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.mobile;
export const getMaintainanceExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.maintainance;
export const getRemittanceExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.remittance;
export const getGiftExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.gifts;
export const getCommitteeExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.committee;
export const getLendAmountExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.lendAmount;
export const getBorrowAmountExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.borrowAmount;
export const getCharityExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.charity;
export const getInvestmentsExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.investments;
export const getTransportationExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.transportation;
export const getEntertainmentExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.entertainment;
export const getSubscriptionsExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.subscriptions;
export const getInsuranceExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.insurance;

export const getPersonalCareExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.personalCare;
export const getSavingsBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.savings;

export const getOtherExpenseBudget = (state: RootState) =>
  state.budgetForm.expenseBudget.other;

export const getAllExpensesBudget = (state: RootState) =>
  state.budgetForm.expenseBudget;

export const getTotalExpenseBudget = (state: RootState) =>
  +getMedicalExpenseBudget(state) +
  +getShoppingExpenseBudget(state) +
  +getUtilityBillsExpenseBudget(state) +
  +getRentsExpenseBudget(state) +
  +getFeesExpenseBudget(state) +
  +getFoodExpenseBudget(state) +
  +getMobileExpenseBudget(state) +
  +getMaintainanceExpenseBudget(state) +
  +getRemittanceExpenseBudget(state) +
  +getGiftExpenseBudget(state) +
  +getCommitteeExpenseBudget(state) +
  +getLendAmountExpenseBudget(state) +
  +getBorrowAmountExpenseBudget(state) +
  +getCharityExpenseBudget(state) +
  +getInvestmentsExpenseBudget(state) +
  +getTransportationExpenseBudget(state) +
  +getEntertainmentExpenseBudget(state) +
  +getSubscriptionsExpenseBudget(state) +
  +getInsuranceExpenseBudget(state) +
  +getPersonalCareExpenseBudget(state) +
  +getSavingsBudget(state) +
  +getOtherExpenseBudget(state);

export const getRemainingBalance = (state: RootState) =>
  +getMonthlyIncome(state) - getTotalExpenseBudget(state);
