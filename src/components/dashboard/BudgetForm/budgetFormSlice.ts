import { ExpenseBudget } from '@data-types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
type InitialState = {
  monthlyIncome: number | string;
  expenseBudget: ExpenseBudget;
};
const regex = /^[1-9]\d*$/;

const initialState: InitialState = {
  monthlyIncome: 0,
  expenseBudget: {
    medical: 0,
    shopping: 0,
    utilityBills: 0,
    rents: 0,
    fees: 0,
    food: 0,
    mobile: 0,
    maintainance: 0,
    remittance: 0,
    gifts: 0,
    committee: 0,
    lendAmount: 0,
    borrowAmount: 0,
    charity: 0,
    investments: 0,
    transportation: 0,
    entertainment: 0,
    subscriptions: 0,
    insurance: 0,
    personalCare: 0,
    savings: 0,
    other: 0,
  },
};
export const budgetFormSlice = createSlice({
  name: 'budgetForm',
  initialState,
  reducers: {
    setMonthlyIncome: (state, action: PayloadAction<number | string>) => {
      state.monthlyIncome = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setMedicalExpenseBudget: (
      state,
      action: PayloadAction<number | string>
    ) => {
      state.expenseBudget.medical = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setShoppingExpenseBudget: (
      state,
      action: PayloadAction<number | string>
    ) => {
      state.expenseBudget.shopping = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setUtilityBillsExpenseBudget: (
      state,
      action: PayloadAction<number | string>
    ) => {
      state.expenseBudget.utilityBills = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setRentsExpenseBudget: (state, action: PayloadAction<number | string>) => {
      state.expenseBudget.rents = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setFeesExpenseBudget: (state, action: PayloadAction<number | string>) => {
      state.expenseBudget.fees = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setFoodExpenseBudget: (state, action: PayloadAction<number | string>) => {
      state.expenseBudget.food = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setMobileExpenseBudget: (state, action: PayloadAction<number | string>) => {
      state.expenseBudget.mobile = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setMaintainanceExpenseBudget: (
      state,
      action: PayloadAction<number | string>
    ) => {
      state.expenseBudget.maintainance = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setRemittanceExpenseBudget: (
      state,
      action: PayloadAction<number | string>
    ) => {
      state.expenseBudget.remittance = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setGiftExpenseBudget: (state, action: PayloadAction<number | string>) => {
      state.expenseBudget.gifts = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setCommitteeExpenseBudget: (
      state,
      action: PayloadAction<number | string>
    ) => {
      state.expenseBudget.committee = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setLendAmountExpenseBudget: (
      state,
      action: PayloadAction<number | string>
    ) => {
      state.expenseBudget.lendAmount = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setBorrowAmountExpenseBudget: (
      state,
      action: PayloadAction<number | string>
    ) => {
      state.expenseBudget.borrowAmount = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setCharityExpenseBudget: (
      state,
      action: PayloadAction<number | string>
    ) => {
      state.expenseBudget.charity = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setInvestmentsExpenseBudget: (
      state,
      action: PayloadAction<number | string>
    ) => {
      state.expenseBudget.investments = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setTransportationExpenseBudget: (
      state,
      action: PayloadAction<number | string>
    ) => {
      state.expenseBudget.transportation = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setEntertainmentExpenseBudget: (
      state,
      action: PayloadAction<number | string>
    ) => {
      state.expenseBudget.entertainment = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setSubscriptionsExpenseBudget: (
      state,
      action: PayloadAction<number | string>
    ) => {
      state.expenseBudget.subscriptions = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setInsuranceExpenseBudget: (
      state,
      action: PayloadAction<number | string>
    ) => {
      state.expenseBudget.insurance = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setPersonalCareExpenseBudget: (
      state,
      action: PayloadAction<number | string>
    ) => {
      state.expenseBudget.personalCare = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
    setSavingsBudget: (state, action: PayloadAction<number | string>) => {
      state.expenseBudget.savings = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },

    setOtherExpenseBudget: (state, action: PayloadAction<number | string>) => {
      state.expenseBudget.other = regex.test(`${action.payload}`)
        ? action.payload
        : 0;
    },
  },
});
export const {
  setMonthlyIncome,
  setMedicalExpenseBudget,
  setShoppingExpenseBudget,
  setUtilityBillsExpenseBudget,
  setRentsExpenseBudget,
  setFeesExpenseBudget,
  setFoodExpenseBudget,
  setMobileExpenseBudget,
  setMaintainanceExpenseBudget,
  setRemittanceExpenseBudget,
  setGiftExpenseBudget,
  setCommitteeExpenseBudget,
  setLendAmountExpenseBudget,
  setBorrowAmountExpenseBudget,
  setCharityExpenseBudget,
  setInvestmentsExpenseBudget,
  setTransportationExpenseBudget,
  setEntertainmentExpenseBudget,
  setSubscriptionsExpenseBudget,
  setInsuranceExpenseBudget,
  setPersonalCareExpenseBudget,
  setSavingsBudget,
  setOtherExpenseBudget,
} = budgetFormSlice.actions;

export default budgetFormSlice.reducer;
