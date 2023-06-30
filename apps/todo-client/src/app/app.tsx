import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '@innovation-mono/todos/client/data-access';
import { AnimatedModal } from '@innovation-mono/shared/ui-modals';
import { TodoCard } from '@innovation-mono/todos/client/ui';
import { CardList } from '@innovation-mono/shared/ui-cards';

const App: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [todoTitleText, setTodoTitleText] = useState('');
  const [todoDescriptionText, setTodoDescriptionText] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setTodoTitleText('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoTitleText.trim() === '') {
      return; // Don't add empty todos
    }
    // addTodo(todoText);
    setTodoTitleText('');
    closeModal();
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <button onClick={openModal}>Add Todo</button>
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
              <button type="submit">Add</button>
            </form>
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
