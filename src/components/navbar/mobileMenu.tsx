import { useAppDispatch } from '@app/hooks';
import { userLogout } from '@components/auth/authSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { sidebarItems } from '@components/sidebar/sidebar-items';
const MobileMenu = ({
  mobileMenu,
  toggleMobileMenu,
}: {
  mobileMenu: boolean | null;
  toggleMobileMenu: () => void;
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  return (
    <div
      style={{
        boxShadow: '8px 1px 27px -7px rgba(0,0,0,0.37)',
      }}
      className={`${
        mobileMenu === true
          ? 'menu-anim-active'
          : mobileMenu === false
          ? 'menu-anim-close'
          : 'hidden'
      } fixed top-0 z-10 pt-20 px-4 h-screen bg-light w-[70%]`}
    >
      <div className=''>
        {sidebarItems?.map(({ path, title, Icon }) => (
          <div
            onClick={() => {
              if (title === 'Logout') {
                dispatch(userLogout());
                navigate(path);
              } else {
                toggleMobileMenu();
                navigate(path);
              }
            }}
            key={path}
            className={`cursor-pointer flex items-center text-base font p-2 mb-2 rounded-lg ${
              pathname === path
                ? 'bg-secondary text-light'
                : 'hover:bg-slate-300'
            }`}
          >
            <p>
              <Icon />
            </p>
            <p className='ml-2'>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
