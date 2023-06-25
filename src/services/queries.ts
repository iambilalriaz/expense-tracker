import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore/lite';
import { firestoreDB } from './firebase';
import { getAppUser } from '@utils';
import moment from 'moment';
import {
  Expense,
  ExpenseBudget,
  MonthlyBudget,
  UserExpense,
} from '@data-types';

export const getUserId = async (email: string) => {
  const requestUser = query(
    collection(firestoreDB, 'users'),
    where('email', '==', email)
  );

  const userDocs = await getDocs(requestUser);
  let userId = '';
  userDocs.forEach((docuemnt) => {
    userId = docuemnt.data()?.userId as string;
  });
  return userId;
};

export const inserUser = async (
  userId: string,
  name: string,
  email: string,
  imageURL: string
) =>
  setDoc(doc(firestoreDB, 'users', email), {
    userId,
    name,
    email,
    imageURL,
  });

export const addMonthlyBudget = async (
  monthlyIncome: number | string,
  expenseBudget: ExpenseBudget
) => {
  const appUser = getAppUser();
  const month = moment(moment().month() + 1, 'M').format('MMMM');
  const year = moment().year();
  return await setDoc(
    doc(firestoreDB, 'budgets', `budget-${crypto.randomUUID()}`),
    {
      userId: appUser?.userId,
      month,
      year,
      monthlyIncome,
      expenseBudget,
    }
  );
};
export const getCurrentMonthBudget = async () => {
  const userId = getAppUser()?.userId as string;
  const month = moment(moment().month() + 1, 'M').format('MMMM');
  const year = moment().year();

  const requestQuery = query(
    collection(firestoreDB, 'budgets'),
    where('month', '==', month),
    where('year', '==', year),
    where('userId', '==', userId)
  );

  const response = await getDocs(requestQuery);
  let monthlyBudget: MonthlyBudget = null;
  response.forEach((docuemnt) => {
    monthlyBudget = docuemnt.data() as MonthlyBudget;
  });
  return monthlyBudget as MonthlyBudget;
};
export const getUserAllBudgets = async () => {
  const appUser = getAppUser();
  const requestQuery = query(
    collection(firestoreDB, 'budgets'),
    where('userId', '==', appUser?.userId)
  );

  const response = await getDocs(requestQuery);
  const allBudgets: MonthlyBudget[] = [];
  response.forEach((docuemnt) => {
    allBudgets.push(docuemnt.data() as MonthlyBudget);
  });
  return allBudgets;
};

export const addNewExpenses = async (expenses: Expense[]) => {
  const appUser = getAppUser();
  const date = moment().format('MMMM DD, YYYY');
  expenses?.forEach(async (expense) => {
    await setDoc(
      doc(firestoreDB, 'expenses', `expense-${crypto.randomUUID()}`),
      {
        userId: appUser?.userId,
        date,
        title: expense?.title,
        type: expense?.type,
        amount: expense?.amount,
        id: expense?.id,
      }
    );
  });
};

export const getUserExpenses = async () => {
  const userId = getAppUser()?.userId as string;

  const requestQuery = query(
    collection(firestoreDB, 'expenses'),
    where('userId', '==', userId)
  );
  const response = await getDocs(requestQuery);
  const result: UserExpense[] = [];
  response?.forEach((document) => {
    result.push(document.data() as UserExpense);
  });
  return result;
};
