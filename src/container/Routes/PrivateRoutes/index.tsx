import AuthContainer from 'container/AuthContainer';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
// import { getAuth } from 'store/auth/selectors';

interface IRouteProps {
  children: ReactElement;
}

const PrivateRoute: React.FC<IRouteProps> = ({ children: Component }) => {
  const isAuth = 'yes';

  return <>{isAuth === 'yes' ? Component : <AuthContainer />}</>;
};

export default PrivateRoute;
