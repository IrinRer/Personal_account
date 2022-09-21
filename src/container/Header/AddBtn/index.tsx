import AddBtnComponent from 'component/Header/AddBtn';
import React, { useState } from 'react';
import Modal from '../Modal';

const AddBtn = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };
  
  return (
    <>
    <AddBtnComponent handleClick={handleClick} />;
     <Modal isOpen={isOpen} setOpen={setOpen}/>
    </>
  )
};

export default AddBtn;
