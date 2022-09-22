import Exit from 'component/Header/Exit';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React from 'react';
import { resetAuthorization } from 'store/auth/slice';
import { fechUserAction } from 'store/contacts/thunk';

const ExitContainer = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(resetAuthorization());
    dispatch(fechUserAction());
  };
  return <Exit handleClick={handleClick} />;
};

export default ExitContainer;
