import React from 'react';
import { createPortal } from 'react-dom';
import FormModal from './FormModal';
import styles from './index.module.scss';

interface IProps {
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
}

const Modal: React.FC<IProps> = ({ isOpen, setOpen }) => {
  if (!isOpen) return null;

  const handleClick = (e) => {
    if (e.target.className === styles.modal) {
      setOpen(false);
    }
  };

  return createPortal(
    <div className={styles.modal} onClick={handleClick}>
      <FormModal handleClickModal={setOpen}/>
    </div>,
    document.body,
  );
};

export default Modal;