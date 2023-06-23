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
  income: number;
} | null;

export type ExpenseBudgetInput = {
  type: string;
  allocated: number;
};
