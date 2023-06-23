import appLogo from '@assets/app-logo.png';
import googleIcon from '@assets/google-icon.svg';
import './styles.css';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { selectAuth, userLogin } from './authSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '@components/common/spinner';

const Login = () => {
  const { appUser, isLoggingIn } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogin = () => {
    dispatch(userLogin());
  };
  useEffect(() => {
    if (appUser) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appUser]);
  return (
    <div className='h-screen w-screen bg-secondary text-2xl grid place-items-center text-light'>
      {isLoggingIn ? (
        <div>
          <Spinner />
          <p>Logging in....</p>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <div className='app-logo flex flex-col justify-center items-center'>
            <img src={appLogo} alt='expense tracker' width={120} />
            <p className='text-light text-4xl'>Expense Tracker</p>
          </div>
          <button
            onClick={onLogin}
            className='google-button flex items-center border-[0.5px] mt-12 border-outline rounded px-2 py-3 text-xs'
          >
            <img
              src={googleIcon}
              alt=''
              className='border-r px-2 border-outline'
            />
            <p className='ml-2 px-2'>Sign in with Google</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
