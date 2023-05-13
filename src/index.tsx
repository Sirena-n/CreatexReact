import ReactDOM from 'react-dom/client';
import React, { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Store from './MobX/Store';

import App from './App';

interface State {
  store: Store,
}

const store = new Store();
export const Context = createContext<State>({
  store,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Context.Provider value={{ store }}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);


