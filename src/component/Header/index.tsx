import AddBtn from 'container/Header/AddBtn';
import ExitContainer from 'container/Header/Exit';
import React from 'react';
import styles from './index.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <AddBtn />
      <ExitContainer />
    </div>
  );
};

export default Header;
