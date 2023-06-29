import React, { useState } from 'react';
import { Provider } from 'react-redux';

import { store } from '@innovation-mono/todos/client/data-access';
import { AnimatedModal } from '@innovation-mono/shared/ui-modals';

const App: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [todoText, setTodoText] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setTodoText('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoText.trim() === '') {
      return; // Don't add empty todos
    }
    // addTodo(todoText);
    setTodoText('');
    closeModal();
  };

  return (
    <Provider store={store}>
      <div className="App">
        <button onClick={openModal}>Add Todo</button>
        <AnimatedModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
          <h2>Add Todo</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
          <button onClick={closeModal}>Cancel</button>
        </AnimatedModal>
      </div>
    </Provider>
  );
};

export default App;
