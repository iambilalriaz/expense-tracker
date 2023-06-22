import { useAppDispatch } from '@app/hooks';
import { userLogout } from '@components/auth/authSlice';
import { SlClose } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import { navLinks } from './nav-links';
import NavLink from './navlink';
const MobileMenu = ({
  mobileMenu,
  closeMobileMenu,
}: {
  mobileMenu: boolean | null;
  closeMobileMenu: () => void;
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div
      className={`${
        mobileMenu === true
          ? 'menu-anim-active'
          : mobileMenu === false
          ? 'menu-anim-close'
          : 'hidden'
      } fixed top-0 z-10 grid place-items-center h-screen bg-secondary/70 backdrop-blur-md w-full`}
    >
      <div className='flex flex-col justify-center items-center'>
        {navLinks?.map((link) => (
          <NavLink
            closeMobileMenu={closeMobileMenu}
            isMobile
            link={link}
            key={link?.path}
          />
        ))}

        <p
          className='mt-8 text-xl text-light font-normal'
          onClick={() => {
            closeMobileMenu();
            dispatch(userLogout());
            navigate('/login');
          }}
        >
          Logout
        </p>
        <p
          className='mt-8 text-3xl font-bold text-light'
          onClick={closeMobileMenu}
        >
          <SlClose />
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;
