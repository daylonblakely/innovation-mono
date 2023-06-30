import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '@innovation-mono/todos/client/data-access';
import { AnimatedModal } from '@innovation-mono/shared/ui-modals';
import { TodoCard } from '@innovation-mono/todos/client/ui';
import { CardList } from '@innovation-mono/shared/ui-cards';

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
      <BrowserRouter>
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
          <CardList
            data={[
              {
                id: 'a',
                element: (
                  <TodoCard
                    title="test"
                    description="akale;lew"
                    completed={false}
                    isSelected={false}
                  />
                ),
              },
              { id: 'b', element: <div>'Test title!!!!!!!'</div> },
              { id: 'c', element: <div>'Test title!!!!!!!'</div> },
              { id: 'd', element: <div>'Test title!!!!!!!'</div> },
              { id: 'e', element: <div>'Test title!!!!!!!'</div> },
            ]}
          />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
