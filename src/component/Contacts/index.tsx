import DeleteContainer from 'container/Contacts/Delete';
import React from 'react';
import { IContactItem } from 'store/contacts/types';
import styles from './index.module.scss';

interface IProps {
  handleBlurName: (arg: React.SyntheticEvent<EventTarget>) => void;
  handleBlurPhone: (arg: React.SyntheticEvent<EventTarget>) => void;
  handleBlurEmail: (arg: React.SyntheticEvent<EventTarget>) => void;
  contacts: Array<IContactItem>;
}

const ContactsComponent: React.FC<IProps> = ({
  handleBlurName,
  handleBlurPhone,
  handleBlurEmail,
  contacts,
}) => {
  return (
    <div className={styles.wrapper}>
      {contacts.map((item: IContactItem) => (
        <div key={item.user} className={styles.wrapper_contact_item}>
          <div className={styles.wrapper_item}>
            <strong>Name: </strong>
            <textarea onBlur={handleBlurName} data-id={item.id}>
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
          <DeleteContainer id={item.id} />
        </div>
      ))}
    </div>
  );
};

export default ContactsComponent;
