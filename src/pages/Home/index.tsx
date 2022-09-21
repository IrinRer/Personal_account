import Contacts from 'container/Contacts';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React, { useEffect } from 'react';
import { fechUserAction } from 'store/contacts/thunk';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fechUserAction());
  }, [dispatch]);

  return <Contacts/>;
};

export default Home;
