import { Outlet, Navigate } from 'react-router-dom';
import UserCartDetailsPage from '../pages/user/UserCartDetailsPage';
import UserChatComponent from './user/UserChatComponent';

const ProtectedRoutesComponent = ({ admin }) => {
  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;
    return userAuth ? (
      <>
        <UserChatComponent /> <Outlet />
      </>
    ) : (
      <Navigate to="/login" />
    );
  }
};

export default ProtectedRoutesComponent;

/* OK. So, if the admin prop is simply a boolean indicating whether or not authorization is needed to access a particular webpage, that 
basically means that the logic inside our ProtectedRoutesComponent should not only check if permissions are needed, but whether or not the 
client has those permissions, right?  */
