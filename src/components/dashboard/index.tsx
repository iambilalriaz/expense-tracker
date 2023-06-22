import { getAppUser } from '@utils';
import './index.css';
const Dashboard = () => {
  const appUser = getAppUser();
  return (
    <div className='h-screen py-24 px-12 bg-secondary'>
      <div className='text-light text-xl border-b-2 border-light pb-4 welcome-message'>
        {appUser?.isNewUser ? (
          <>
            Welcome to Expense Tracker!
            <p className='font-bold text-4xl text-primary'>
              {appUser?.name?.split(' ')?.[0]}
            </p>{' '}
          </>
        ) : (
          <p>
            Welcome back{' '}
            <p className='font-bold text-4xl text-primary'>
              {appUser?.name?.split(' ')?.[0]}!
            </p>
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
