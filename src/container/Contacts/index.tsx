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

const Contacts = () => {
  const contacts = useAppSelector(getContacts);

  const dispatch = useAppDispatch();

  const handleBlurName = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    dispatch(
      changeUserName({ id: target.dataset.id || '', name: target.value }),
    );
  };

  const handleBlurPhone = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    dispatch(
      changePhoneName({ id: target.dataset.id || '', phone: target.value }),
    );
  };

  const handleBlurEmail = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    dispatch(
      changeEmailName({ id: target.dataset.id || '', email: target.value }),
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
