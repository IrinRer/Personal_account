import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import {
  getContacts,
  getEmailTextarea,
  getName,
  getPhone,
} from 'store/contacts/selectors';
import {
  changeEmailName,
  changePhoneName,
  changeUserName,
} from 'store/contacts/thunk';
import styles from './index.module.scss';

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
    <div className={styles.wrapper}>
      {contacts.map((item) => (
        <div key={item.user} className={styles.wrapper_contact_item}>
          <div className={styles.wrapper_item}>
            <strong>Name: </strong>
            <textarea onBlur={handleBlurName} data-id={item.id} >
              {item.user}
            </textarea>
          </div>
          <div className={styles.wrapper_item}>
            <strong>Phone: </strong>
            <textarea onBlur={handleBlurPhone} data-id={item.id}>
              {item.phone}
            </textarea>
          </div>
          <div className={styles.wrapper_item}>
            <strong>Email: </strong>
            <textarea onBlur={handleBlurEmail} data-id={item.id}>
              {item.email}
            </textarea>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
