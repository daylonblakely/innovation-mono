import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '@innovation-mono/todos/client/data-access';
import { HomePage } from '@innovation-mono/todos/client/feature-home';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <HomePage />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
