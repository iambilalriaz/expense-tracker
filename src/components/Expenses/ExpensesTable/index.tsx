import { useEffect } from 'react';
import { getUserAllExpenses } from '../expenseFormSlice';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { getIsLoadingUserExpenses, getUserExpenses } from '../selectors';
import Spinner from '@components/common/spinner';
import './index.css';
const ExpensesTable = () => {
  const userExpenses = useAppSelector(getUserExpenses);
  const isLoadingUserExpenses = useAppSelector(getIsLoadingUserExpenses);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserAllExpenses());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {isLoadingUserExpenses ? (
        <Spinner variant='secondary' />
      ) : userExpenses?.length ? (
        <table className='expenses-table'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {userExpenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.date}</td>
                <td>{expense.title}</td>
                <td>{expense.type}</td>
                <td>{expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default ExpensesTable;
