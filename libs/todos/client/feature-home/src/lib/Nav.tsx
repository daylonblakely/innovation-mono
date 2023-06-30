import React, { useState } from 'react';
import { CreateTodoModal } from './CreateTodoModal';

/* eslint-disable-next-line */
export interface NavProps {}

export function Nav(props: NavProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <button onClick={openModal}>Add Todo</button>
      <CreateTodoModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </>
  );
}

export default Nav;
