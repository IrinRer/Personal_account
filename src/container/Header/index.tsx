import React from 'react';
import AddBtn from './AddBtn';
import ExitContainer from './Exit';
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
