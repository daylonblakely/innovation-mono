import React, { useState } from 'react';
import { useCreateTodoMutation } from '@innovation-mono/todos/client/data-access';
import { AnimatedModal } from '@innovation-mono/shared/ui-modals';

/* eslint-disable-next-line */
export interface CreateTodoModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: (modalIsOpen: boolean) => void;
}

export const CreateTodoModal: React.FC<CreateTodoModalProps> = ({
  modalIsOpen,
  setModalIsOpen,
}) => {
  const [todoTitleText, setTodoTitleText] = useState('');
  const [todoDescriptionText, setTodoDescriptionText] = useState('');

  const [createTodo, { isLoading, isError }] = useCreateTodoMutation();

  const closeModal = () => {
    setModalIsOpen(false);
    setTodoTitleText('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoTitleText.trim() === '') {
      return; // Don't add empty todos
    }

    createTodo({ title: todoTitleText, description: todoDescriptionText })
      .then(() => {
        // Todo created successfully
        setTodoTitleText('');
        setTodoDescriptionText('');
      })
      .catch((error) => {
        // Error occurred while creating todo
        console.log('Error creating todo:', error);
      });

    closeModal();
  };

  return (
    <AnimatedModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <form onSubmit={handleSubmit}>
        <h2>Add Todo</h2>
        <input
          type="text"
          placeholder="Title"
          value={todoTitleText}
          onChange={(e) => setTodoTitleText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripton"
          value={todoDescriptionText}
          onChange={(e) => setTodoDescriptionText(e.target.value)}
        />
        <button onClick={closeModal}>Cancel</button>
        <button type="submit" disabled={isLoading}>
          Add
        </button>
        {isError && <div>Error creating todo</div>}
      </form>
    </AnimatedModal>
  );
};

export default CreateTodoModal;
