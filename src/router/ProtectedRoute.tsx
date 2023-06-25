import Sidebar from '@components/sidebar';
import { getAppUser } from '@utils';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({
  children,
  closeMobileMenu,
}: {
  children: JSX.Element;
  closeMobileMenu: () => void;
}) => {
  const appUser = getAppUser();
  return appUser ? (
    <>
      <Sidebar />
      <div
        onClick={closeMobileMenu}
        className='w-full md:w-[70%] lg:w-[80%] fixed md:left-[30%] lg:left-[20%] h-full bg-black/10 grid place-items-center'
      >
        {children}
      </div>
    </>
  ) : (
    <Navigate to='/login' />
  );
};

export default ProtectedRoute;
