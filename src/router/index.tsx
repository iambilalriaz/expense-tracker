import { useAppSelector } from '@app/hooks';
import { selectAuth } from '@components/auth/authSlice';
import Login from '@components/auth/login';
import Navbar from '@components/navbar';
import Home from '@components/Home';
import Profile from '@components/profile';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from 'router/ProtectedRoute';
import Budget from '@components/Budget';
import Expenses from '@components/Expenses';
import { useState } from 'react';

const AppRouter = () => {
  const { appUser } = useAppSelector(selectAuth);
  const [mobileMenu, setMobileMenu] = useState<null | boolean>(null);
  const toggleMobileMenu = () => {
    setMobileMenu((prevState) => !prevState);
  };
  const closeMobileMenu = () => {
    if (mobileMenu) {
      setMobileMenu(false);
    }
  };
  return (
    <BrowserRouter>
      {appUser && (
        <Navbar mobileMenu={mobileMenu} toggleMobileMenu={toggleMobileMenu} />
      )}
      <Routes>
        <Route path='/' element={appUser ? <Home /> : <Login />} />
        <Route
          path='/login'
          element={appUser ? <Navigate to='/home' /> : <Login />}
        />
        <Route
          path='/home'
          element={
            <ProtectedRoute closeMobileMenu={closeMobileMenu}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path='/budget'
          element={
            <ProtectedRoute closeMobileMenu={closeMobileMenu}>
              <Budget />
            </ProtectedRoute>
          }
        />
        <Route
          path='/expenses'
          element={
            <ProtectedRoute closeMobileMenu={closeMobileMenu}>
              <Expenses />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute closeMobileMenu={closeMobileMenu}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
