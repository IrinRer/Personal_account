import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getContacts } from 'store/contacts/selectors';
import styles from './index.module.scss';

const Contacts = () => {
  const contacts = useAppSelector(getContacts);

  return (
    <div className={styles.wrapper}>
      {contacts.map((item) => (
        <div key={item.user} className={styles.wrapper_contact_item}>
          <p>
            <strong>Name: </strong>
            <textarea>{item.user}</textarea>
          </p>
          <p>
            <strong>Phone: </strong>
            <textarea>{item.phone}</textarea>
          </p>
          <p>
            <strong>Email: </strong>
            <textarea>{item.email}</textarea>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
