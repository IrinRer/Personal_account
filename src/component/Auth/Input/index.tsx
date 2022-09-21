import React, {useEffect, useRef} from 'react';
import styles from './index.module.scss';

interface IProps {
    value?: string;
    handleChange: (e: any) => void;
    color: string;
    type: string;
  }

const InputComponent: React.FC<IProps> = ({
    value,
    handleChange,
    color,
    type,
  }) => {
    const refInput = useRef<any>();
  
    useEffect(() => {
      refInput.current.focus();
    }, []);
  
    return (
      <input
        type={type}
        onChange={handleChange}
        value={value}
        color={color}
        ref={refInput}
        className={styles.input}
      />
    );
  };
  
  export default InputComponent;