import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getEmailAdd, getNameAdd, getPhoneAdd } from 'store/contacts/selectors';
import { resetAdd, setAddEmail, setAddName, setAddPhone } from 'store/contacts/slice';
import { addUser } from 'store/contacts/thunk';
import styles from './index.module.scss';

interface IProps {
    handleClickModal: (arg: boolean) => void;
};

const FormModal: React.FC<IProps> = ({handleClickModal}) => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(getNameAdd);
  const phone = useAppSelector(getPhoneAdd);
  const email = useAppSelector(getEmailAdd);

  const handleChangeName = (e) => {
    dispatch(setAddName(e.target.value));
  };

  const handleChangePhone = (e) => {
    dispatch(setAddPhone(e.target.value));
  };

  const handleChangeEmail = (e) => {
    dispatch(setAddEmail(e.target.value));
  };

  const handleClick = (e) => {
    if(name && phone && email) {
      e.preventDefault();
      handleClickModal(false);
      dispatch(addUser({name, phone, email}))
      dispatch(resetAdd())
    }
  }

  return (
    <form className={styles.wrapper}>
      <div className={styles.wrapper_input_text}>
        <p>Name</p>
        <input type="text" onChange={handleChangeName} value={name} />
      </div>

      <div className={styles.wrapper_input_text}>
        <p>Phone</p>
        <input type="phone" onChange={handleChangePhone} value={phone} />
      </div>

      <div className={styles.wrapper_input_text}>
        <p>Email</p>
        <input type="email" onChange={handleChangeEmail} value={email} />
      </div>
      <button type='submit' className={styles.btn} onClick={handleClick}>Ok</button>
    </form>
  );
};

export default FormModal;
