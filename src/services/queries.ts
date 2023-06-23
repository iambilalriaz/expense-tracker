import {
  collection,
  doc,
  documentId,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore/lite';
import { firestoreDB } from './firebase';
import { getAppUser } from '@utils';
import moment from 'moment';
import { ExpenseBudgetInput, MonthlyBudget } from '@data-types';

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
  monthlyIncome: number,
  expenseBudgetInput: ExpenseBudgetInput[]
) => {
  const appUser = getAppUser();
  const month = moment().month();
  const year = moment().year();
  return await setDoc(doc(firestoreDB, 'budget', `${appUser?.userId}`), {
    month,
    year,
    income: monthlyIncome,
    expenseBudget: [
      {
        name: 'Medical',
        type: 'medical',
        allocated: 0,
      },
    ],
  });
};
export const getMonthlyBudget = async () => {
  const userId = getAppUser()?.userId as string;
  const requestQuery = query(
    collection(firestoreDB, 'budget'),
    where('month', '==', moment().month()),
    where('year', '==', moment().year()),
    where(documentId(), '==', userId)
  );

  const response = await getDocs(requestQuery);
  let monthlyBudget: MonthlyBudget = null;
  response.forEach((docuemnt) => {
    monthlyBudget = docuemnt.data() as MonthlyBudget;
  });
  return monthlyBudget as MonthlyBudget;
};
