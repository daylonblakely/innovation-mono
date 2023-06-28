import React from 'react';
import { Provider } from 'react-redux';

import { Todo } from '@innovation-mono/todos/types';
import {
  store,
  useGetTodosQuery,
} from '@innovation-mono/todos/client/data-access';

const TodoList: React.FC = () => {
  const { data: todos, isLoading } = useGetTodosQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos?.map((todo: Todo, i) => (
          <li key={i}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
