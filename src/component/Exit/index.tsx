import React from 'react';
import { ReactComponent as ExitSVG } from 'asserts/icon/exit.svg';
import styles from './index.module.scss';

const Exit = () => {
  return (
    <div className={styles.wrapper}>
      <ExitSVG />
    </div>
  );
};

export default Exit;
