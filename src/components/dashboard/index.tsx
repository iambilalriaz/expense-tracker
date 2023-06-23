import { getAppUser } from '@utils';
import './index.css';
import BudgetForm from './BudgetForm';
const Dashboard = () => {
  const appUser = getAppUser();

  return (
    <div className='h-screen py-24 grid place-items-center px-12 bg-secondary'>
      <div className='text-light text-xl pb-4 welcome-message text-center'>
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
      </div>
      <BudgetForm />
    </div>
  );
};

export default Dashboard;
