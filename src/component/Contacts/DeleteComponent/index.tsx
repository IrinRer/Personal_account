import React from 'react';
import { ReactComponent as DeleteSVG } from 'asserts/icon/delete.svg';
import styles from './index.module.scss';

interface IProps {
  handleClick: () => void;
}

const DeleteComponent: React.FC<IProps> = ({ handleClick }) => {
  return (
    <div className={styles.wrapper}>
      <DeleteSVG onClick={handleClick} />
    </div>
  );
};

export default DeleteComponent;
