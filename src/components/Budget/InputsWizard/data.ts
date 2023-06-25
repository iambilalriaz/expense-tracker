import {
  setRentsExpenseBudget,
  setCharityExpenseBudget,
  setCommitteeExpenseBudget,
  setEntertainmentExpenseBudget,
  setFeesExpenseBudget,
  setFoodExpenseBudget,
  setGiftExpenseBudget,
  setInsuranceExpenseBudget,
  setInvestmentsExpenseBudget,
  setLendAmountExpenseBudget,
  setBorrowAmountExpenseBudget,
  setMaintainanceExpenseBudget,
  setMedicalExpenseBudget,
  setMobileExpenseBudget,
  setMonthlyIncome,
  setOtherExpenseBudget,
  setRemittanceExpenseBudget,
  setShoppingExpenseBudget,
  setSubscriptionsExpenseBudget,
  setTransportationExpenseBudget,
  setUtilityBillsExpenseBudget,
  setPersonalCareExpenseBudget,
  setSavingsBudget,
  setFuelExpenseBudget,
} from '../BudgetForm/budgetFormSlice';
import {
  getCharityExpenseBudget,
  getCommitteeExpenseBudget,
  getEntertainmentExpenseBudget,
  getFeesExpenseBudget,
  getFoodExpenseBudget,
  getGiftExpenseBudget,
  getInsuranceExpenseBudget,
  getInvestmentsExpenseBudget,
  getLendAmountExpenseBudget,
  getBorrowAmountExpenseBudget,
  getMaintainanceExpenseBudget,
  getMedicalExpenseBudget,
  getMobileExpenseBudget,
  getMonthlyIncome,
  getOtherExpenseBudget,
  getRemittanceExpenseBudget,
  getRentsExpenseBudget,
  getShoppingExpenseBudget,
  getSubscriptionsExpenseBudget,
  getTransportationExpenseBudget,
  getUtilityBillsExpenseBudget,
  getPersonalCareExpenseBudget,
  getSavingsBudget,
  getFuelExpenseBudget,
} from '../BudgetForm/selectors';

export const currentInput = {
  0: {
    placeholder: 'your monthly income',
    getterFn: getMonthlyIncome,
    setterFn: setMonthlyIncome,
  },
  1: {
    placeholder: 'medical',
    getterFn: getMedicalExpenseBudget,
    setterFn: setMedicalExpenseBudget,
  },
  2: {
    placeholder: 'shopping',
    getterFn: getShoppingExpenseBudget,
    setterFn: setShoppingExpenseBudget,
  },
  3: {
    placeholder: 'utility bills',
    getterFn: getUtilityBillsExpenseBudget,
    setterFn: setUtilityBillsExpenseBudget,
  },
  4: {
    placeholder: 'rents',
    getterFn: getRentsExpenseBudget,
    setterFn: setRentsExpenseBudget,
  },
  5: {
    placeholder: 'fees',
    getterFn: getFeesExpenseBudget,
    setterFn: setFeesExpenseBudget,
  },
  6: {
    placeholder: 'food',
    getterFn: getFoodExpenseBudget,
    setterFn: setFoodExpenseBudget,
  },
  7: {
    placeholder: 'mobile',
    getterFn: getMobileExpenseBudget,
    setterFn: setMobileExpenseBudget,
  },
  8: {
    placeholder: 'maintainance',
    getterFn: getMaintainanceExpenseBudget,
    setterFn: setMaintainanceExpenseBudget,
  },
  9: {
    placeholder: 'remittance',
    getterFn: getRemittanceExpenseBudget,
    setterFn: setRemittanceExpenseBudget,
  },
  10: {
    placeholder: 'gifts',
    getterFn: getGiftExpenseBudget,
    setterFn: setGiftExpenseBudget,
  },
  11: {
    placeholder: 'committee',
    getterFn: getCommitteeExpenseBudget,
    setterFn: setCommitteeExpenseBudget,
  },
  12: {
    placeholder: 'lend amount',
    getterFn: getLendAmountExpenseBudget,
    setterFn: setLendAmountExpenseBudget,
  },
  13: {
    placeholder: 'borrow amount',
    getterFn: getBorrowAmountExpenseBudget,
    setterFn: setBorrowAmountExpenseBudget,
  },
  14: {
    placeholder: 'charity',
    getterFn: getCharityExpenseBudget,
    setterFn: setCharityExpenseBudget,
  },
  15: {
    placeholder: 'investments',
    getterFn: getInvestmentsExpenseBudget,
    setterFn: setInvestmentsExpenseBudget,
  },
  16: {
    placeholder: 'transportation',
    getterFn: getTransportationExpenseBudget,
    setterFn: setTransportationExpenseBudget,
  },
  17: {
    placeholder: 'entertainment',
    getterFn: getEntertainmentExpenseBudget,
    setterFn: setEntertainmentExpenseBudget,
  },
  18: {
    placeholder: 'subscriptions',
    getterFn: getSubscriptionsExpenseBudget,
    setterFn: setSubscriptionsExpenseBudget,
  },
  19: {
    placeholder: 'insurance',
    getterFn: getInsuranceExpenseBudget,
    setterFn: setInsuranceExpenseBudget,
  },
  20: {
    placeholder: 'personal care',
    getterFn: getPersonalCareExpenseBudget,
    setterFn: setPersonalCareExpenseBudget,
  },
  21: {
    placeholder: 'fuel',
    getterFn: getFuelExpenseBudget,
    setterFn: setFuelExpenseBudget,
  },
  22: {
    placeholder: 'savings',
    getterFn: getSavingsBudget,
    setterFn: setSavingsBudget,
  },
  23: {
    placeholder: 'other expenses',
    getterFn: getOtherExpenseBudget,
    setterFn: setOtherExpenseBudget,
  },
};
export const expenseTypes = [
  {
    value: 'medical',
    label: 'Medical',
  },
  {
    value: 'shopping',
    label: 'Shopping',
  },
  {
    value: 'utilityBills',
    label: 'Utility Bills',
  },
  {
    value: 'fees',
    label: 'Fees',
  },
  {
    value: 'food',
    label: 'Food',
  },
  {
    value: 'mobile',
    label: 'Mobile',
  },
  {
    value: 'maintainance',
    label: 'Maintainance',
  },
  {
    value: 'remittance',
    label: 'Remittance',
  },
  {
    value: 'gifts',
    label: 'Gifts',
  },
  {
    value: 'committee',
    label: 'Committee',
  },
  {
    value: 'lendAmount',
    label: 'Lend Amount',
  },
  {
    value: 'borrowAmount',
    label: 'Borrow Amount',
  },
  {
    value: 'charity',
    label: 'Charity',
  },
  {
    value: 'investments',
    label: 'Investments',
  },
  {
    value: 'transportation',
    label: 'Transportation',
  },
  {
    value: 'entertainment',
    label: 'Entertainment',
  },
  {
    value: 'subscriptions',
    label: 'Subscriptions',
  },
  {
    value: 'insurance',
    label: 'Insurance',
  },
  {
    value: 'personalCare',
    label: 'Personal Care',
  },
  {
    value: 'fuel',
    label: 'Fuel',
  },
  {
    value: 'savings',
    label: 'Savings',
  },
  {
    value: 'other',
    label: 'Other Expenses',
  },
];

export type InputIndex =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22;
