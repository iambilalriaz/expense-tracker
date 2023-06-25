import { useLocation, useNavigate } from 'react-router-dom';
import { sidebarItems } from './sidebar-items';
import { useAppDispatch } from '@app/hooks';
import { userLogout } from '@components/auth/authSlice';

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div
      style={{
        boxShadow: '8px 1px 27px -7px rgba(0,0,0,0.37)',
      }}
      className='md:block hidden bg-light pt-20 px-4 text-2xl fixed left-0 h-full w-full md:w-[30%] lg:w-[20%]'
    >
      {sidebarItems?.map(({ title, path, Icon }) => (
        <div
          onClick={() => {
            if (title === 'Logout') {
              dispatch(userLogout());
              navigate(path);
            } else {
              navigate(path);
            }
          }}
          key={path}
          className={`cursor-pointer flex items-center text-base font p-2 mb-2 rounded-lg ${
            pathname === path ? 'bg-secondary text-light' : 'hover:bg-slate-300'
          }`}
        >
          <p>
            <Icon />
          </p>
          <p className='ml-2'>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
