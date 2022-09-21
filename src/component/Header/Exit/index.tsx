import React from 'react';
import { ReactComponent as ExitSVG } from 'asserts/icon/exit.svg';
import styles from './index.module.scss';

interface IProps {
  handleClick: () => void;
}

const Exit: React.FC<IProps> = ({ handleClick }) => {
  return (
    <div className={styles.wrapper}>
      <ExitSVG onClick={handleClick} />
    </div>
  );
};

export default Exit;
