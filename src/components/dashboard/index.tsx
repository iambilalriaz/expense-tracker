import { getAppUser } from '@utils';
import './index.css';
import BudgetForm from './BudgetForm';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { getUserMonthlyBudget } from './dashboardSlice';
import { getLoadingBudget, monthlyBudgetSelector } from './selectors';
import Spinner from '@components/common/spinner';
import BudgetData from './BudgetData';
const Dashboard = () => {
  const appUser = getAppUser();
  const dispatch = useAppDispatch();
  const loadingBudget = useAppSelector(getLoadingBudget);
  const monthlyBudget = useAppSelector(monthlyBudgetSelector);
  useEffect(() => {
    dispatch(getUserMonthlyBudget());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='h-screen  grid place-items-center bg-secondary'>
      <div>
        {/* <div className='text-light text-xl pb-4 welcome-message text-center'>
          {!appUser?.isNewUser ? (
            <>
              Welcome to Expense Tracker
              <p className='font-bold text-4xl text-primary'>
                {appUser?.name?.split(' ')?.[0]}!
              </p>{' '}
            </>
          ) : (
            <div>
              Welcome back{' '}
              <p className='font-bold text-4xl text-primary'>
                {appUser?.name?.split(' ')?.[0]}!
              </p>
            </div>
          )}
        </div> */}
        {loadingBudget ? (
          <Spinner />
        ) : (
          <>
            {monthlyBudget ? (
              <BudgetData budget={monthlyBudget} />
            ) : (
              <BudgetForm />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
