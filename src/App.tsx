import AppRouter from '@router';
import { useEffect } from 'react';
import { useAppDispatch } from '@app/hooks';
import { getLoginState } from '@components/auth/authSlice';
const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getLoginState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
