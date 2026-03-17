import { Outlet } from 'react-router-dom';
import UserChatComponent from './UserChatComponent';

const RoutesWithUserchatComponent = () => {
  return (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  );
};

export default RoutesWithUserchatComponent;

