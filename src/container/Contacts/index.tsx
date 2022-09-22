import ContactsComponent from 'component/Contacts';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getContacts } from 'store/contacts/selectors';
import {
  changeEmailName,
  changePhoneName,
  changeUserName,
} from 'store/contacts/thunk';
import DeleteContainer from './Delete';

const Contacts = () => {
  const contacts = useAppSelector(getContacts);
  const dispatch = useAppDispatch();
  //   const name = useAppSelector(getName);
  //   const phone = useAppSelector(getPhone);
  //   const email = useAppSelector(getEmailTextarea);

  const handleBlurName = (e) => {
    dispatch(changeUserName({ id: e.target.dataset.id, name: e.target.value }));
  };

  const handleBlurPhone = (e) => {
    dispatch(
      changePhoneName({ id: e.target.dataset.id, phone: e.target.value }),
    );
  };

  const handleBlurEmail = (e) => {
    dispatch(
      changeEmailName({ id: e.target.dataset.id, email: e.target.value }),
    );
  };

  return (
    <ContactsComponent
      contacts={contacts}
      handleBlurName={handleBlurName}
      handleBlurPhone={handleBlurPhone}
      handleBlurEmail={handleBlurEmail}
    />
  );
};

export default Contacts;
