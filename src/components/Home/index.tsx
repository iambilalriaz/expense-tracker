import { getAppUser } from '@utils';
import './index.css';
const Home = () => {
  const appUser = getAppUser();

  return (
    <div>
      <div className='text-secondary text-xl pb-4 welcome-message text-center'>
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
    </div>
  );
};

export default Home;
