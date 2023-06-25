import { useAppDispatch, useAppSelector } from '@app/hooks';
import ExpenseForm from './ExpenseForm';
import {
  getExpensesInForm,
  getIsAddingExpense,
  getIsLoadingUserExpenses,
  getIsSubmittingExpenses,
  getUserExpenses,
} from './selectors';
import { setIsAddingExpense, submitExpenses } from './expenseFormSlice';
import ExpenseCard from './ExpenseCard';
import { HiPlus } from 'react-icons/hi';
import Button from '@components/common/Button';
import Spinner from '@components/common/spinner';
import ExpensesTable from './ExpensesTable';

const Expenses = () => {
  const expensesInForm = useAppSelector(getExpensesInForm);
  const isAddingExpense = useAppSelector(getIsAddingExpense);
  const isSubmittingExpenses = useAppSelector(getIsSubmittingExpenses);
  const userExpenses = useAppSelector(getUserExpenses);

  const dispatch = useAppDispatch();

  const submitAllExpenses = () => {
    dispatch(submitExpenses());
  };
  return isSubmittingExpenses ? (
    <div>
      <Spinner variant='secondary' />
    </div>
  ) : (
    <div>
      <div className='w-full px-[5%] lg:px-[10%]'>
        {userExpenses?.length === 0 ? (
          <p className='text-2xl text-center text-secondary italic'>
            No expenses added yet!
          </p>
        ) : null}
        {expensesInForm?.length > 0 && !isAddingExpense
          ? expensesInForm?.map((expense) => (
              <ExpenseCard key={expense?.id} expense={expense} />
            ))
          : null}

        {isAddingExpense ? (
          <ExpenseForm />
        ) : (
          <>
            <p
              onClick={() => dispatch(setIsAddingExpense(true))}
              className='absolute right-8 top-16 text-sm flex justify-center items-center text-primary font-semibold cursor-pointer mt-4'
            >
              <HiPlus className='mr-1' /> Add new expense
            </p>
          </>
        )}
        {expensesInForm?.length > 0 && !isAddingExpense ? (
          <Button
            styles='mx-auto mt-8'
            title='Submit'
            onClick={submitAllExpenses}
          />
        ) : null}
      </div>
      <ExpensesTable />
    </div>
  );
};

export default Expenses;
