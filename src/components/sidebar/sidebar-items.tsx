import { AiOutlineHome } from 'react-icons/ai';
import { GiReceiveMoney, GiTakeMyMoney } from 'react-icons/gi';
import { BiUserCircle, BiLogOutCircle } from 'react-icons/bi';
export const sidebarItems = [
  {
    title: 'Home',
    path: '/home',
    Icon: () => <AiOutlineHome />,
  },
  {
    title: 'Budget',
    path: '/budget',
    Icon: () => <GiReceiveMoney />,
  },
  {
    title: 'Expenses',
    path: '/expenses',
    Icon: () => <GiTakeMyMoney />,
  },
  {
    title: 'Profile',
    path: '/profile',
    Icon: () => <BiUserCircle />,
  },
  {
    title: 'Logout',
    path: '/login',
    Icon: () => <BiLogOutCircle />,
  },
];
