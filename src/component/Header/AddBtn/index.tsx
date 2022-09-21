import React from 'react';
import styles from './index.module.scss';

interface IProps {
  handleClick: () => void;
}

const AddBtnComponent: React.FC<IProps> = ({ handleClick }) => {
  return <button type="button" className={styles.btn} onClick={handleClick} />;
};

export default AddBtnComponent;
