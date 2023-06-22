import { useAppSelector } from '@app/hooks';
import { selectAuth } from '@components/auth/authSlice';
import Login from '@components/auth/login';
import Navbar from '@components/common/navbar/navbar';
import Dashboard from '@components/dashboard';
import Profile from '@components/profile';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  const { appUser } = useAppSelector(selectAuth);
  return (
    <BrowserRouter>
      {appUser && <Navbar />}
      <Routes>
        <Route path='/' element={appUser ? <Dashboard /> : <Login />} />
        <Route
          path='/login'
          element={appUser ? <Navigate to='/dashboard' /> : <Login />}
        />
        <Route
          path='/dashboard'
          element={appUser ? <Dashboard /> : <Navigate to='/login' />}
        />
        <Route
          path='/profile'
          element={appUser ? <Profile /> : <Navigate to='/login' />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
