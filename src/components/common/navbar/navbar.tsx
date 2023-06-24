import { RxHamburgerMenu } from 'react-icons/rx';
import appLogo from '@assets/app-logo.png';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@app/hooks';
import { userLogout } from '@components/auth/authSlice';
import { useState } from 'react';
import MobileMenu from './mobileMenu';
import './index.css';
import { navLinks } from './nav-links';
import NavLink from './navlink';
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState<null | boolean>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  return (
    <>
      <MobileMenu mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} />
      <div className='bg-primary w-full fixed top-0 p-4 flex justify-between items-center'>
        <img src={appLogo} alt='' width={28} loading='lazy' />
        <p
          className='text-2xl block md:hidden cursor-pointer'
          onClick={() => setMobileMenu(true)}
        >
          <RxHamburgerMenu />
        </p>
        <div className='md:flex hidden cursor-pointer'>
          {navLinks?.map((link) => (
            <NavLink isMobile={false} link={link} key={link?.path} />
          ))}
          <p
            className='ml-8'
            onClick={() => {
              dispatch(userLogout());
              navigate('/login');
            }}
          >
            Logout
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
