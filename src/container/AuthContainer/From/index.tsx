import { useAppDispatch } from "hooks/redux/useAppDispatch";
import { useAppSelector } from "hooks/redux/useAppSelector";
import { changeInputLogin, changeInputPassword } from "store/auth/slice";
import React from "react";
import { getAuth, getLogin, getPassword } from "store/auth/selectors";
import classnames from "classnames";
import styles from './index.module.scss';
import ButtonContainer from "./BtnContainer";

const Form = () => { 
    const dispatch = useAppDispatch();
    const emailValue = useAppSelector(getLogin);
    const passwordValue = useAppSelector(getPassword);
    const auth = useAppSelector(getAuth);

    const className = classnames(styles.wrapper_form, {
      [styles.error_form]: auth === 'no'
    });
  
    const handleChangeEmail = (e) => {
      dispatch(changeInputLogin(e.target.value));
    };
    const handleChangePassword = (e) => {
      dispatch(changeInputPassword(e.target.value));
    };

return (
    <form className={className} >
      <p>Login In</p>
      <label className={styles.label}>
        Email
        <input
          onChange={handleChangeEmail}
          value={emailValue}
          type="email"
          placeholder="Enter email"
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          onChange={handleChangePassword}
          value={passwordValue}
          type="password"
          placeholder="Enter password"
          className={styles.input}
        />
      </label>
      <ButtonContainer />
    </form>
)
};

export default Form;