import DeleteComponent from 'component/Contacts/DeleteComponent';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React from 'react';
import { deleteUser } from 'store/contacts/thunk';

interface IProps {
  id: number | string;
}

const DeleteContainer: React.FC<IProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(deleteUser(id));
  };
  return <DeleteComponent handleClick={handleClick} />;
};

export default DeleteContainer;
