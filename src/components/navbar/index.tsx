import { RxHamburgerMenu } from 'react-icons/rx';
import appLogo from '@assets/app-logo.png';
import MobileMenu from './mobileMenu';

import './index.css';

const Navbar = ({
  mobileMenu,
  toggleMobileMenu,
}: {
  mobileMenu: boolean | null;
  toggleMobileMenu: () => void;
}) => {
  return (
    <>
      <MobileMenu mobileMenu={mobileMenu} toggleMobileMenu={toggleMobileMenu} />
      <div className='bg-secondary text-light w-full fixed top-0 p-4 flex items-center isolate z-10'>
        <p
          className='text-2xl block md:hidden cursor-pointer absolute left-4'
          onClick={toggleMobileMenu}
        >
          <RxHamburgerMenu />
        </p>
        <p className='text-3xl flex items-center align-middle justify-center text-center w-full'>
          <img
            src={appLogo}
            alt=''
            width={36}
            loading='lazy'
            className='mr-2'
          />
          Expense Tracker
        </p>
      </div>
    </>
  );
};

export default Navbar;
