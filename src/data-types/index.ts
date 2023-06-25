export type User = {
  name: string;
  photoURL: string;
  email: string;
  userId: string;
  isNewUser: boolean;
} | null;

export type MonthlyBudget = {
  month: number;
  year: number;
  userId: string;
  monthlyIncome: number;
  expenseBudget: ExpenseBudget;
} | null;

export type ExpenseBudget = {
  medical: number | string;
  shopping: number | string;
  utilityBills: number | string;
  rents: number | string;
  fees: number | string;
  food: number | string;
  mobile: number | string;
  maintainance: number | string;
  remittance: number | string;
  gifts: number | string;
  committee: number | string;
  lendAmount: number | string;
  borrowAmount: number | string;
  charity: number | string;
  investments: number | string;
  transportation: number | string;
  entertainment: number | string;
  subscriptions: number | string;
  insurance: number | string;
  personalCare: number | string;
  fuel: number | string;
  savings: number | string;
  other: number | string;
};

export type Expense = {
  id: string;
  title: string;
  type: string;
  amount: number | string;
};
export type UserExpense = {
  id: string;
  title: string;
  type: string;
  amount: number | string;
  date: string;
  userId: string;
};
