import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React, { useEffect } from 'react';
import { authorizationAction } from 'store/auth/thunk';

const AuthContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authorizationAction());
  }, [dispatch]);
  
  return <p>auth container</p>;
};

export default AuthContainer;
