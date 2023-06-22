import { useLocation, useNavigate } from 'react-router-dom';

const NavLink = ({
  link,
  isMobile,
  closeMobileMenu,
}: {
  link: {
    name: string;
    path: string;
  };
  isMobile: boolean;
  closeMobileMenu?: () => void;
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <p
      className={`${isMobile ? 'mt-8' : 'ml-8'} cursor-pointer ${
        pathname === link?.path || pathname === '/'
          ? `font-extrabold ${isMobile ? 'text-2xl text-primary' : ''}`
          : `${isMobile ? 'text-xl text-light font-normal' : ''}`
      }`}
      onClick={() => {
        navigate(link?.path);
        if (isMobile && closeMobileMenu) closeMobileMenu();
      }}
    >
      {link?.name}
    </p>
  );
};

export default NavLink;
