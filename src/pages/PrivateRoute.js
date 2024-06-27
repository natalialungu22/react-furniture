import { Navigate } from 'react-router-dom';
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({ children }) => {
  let { user } = useUserContext();
  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};
export default PrivateRoute;
