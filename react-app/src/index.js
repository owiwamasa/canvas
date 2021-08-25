import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import {ModalProvider} from './context/Modal'
import history from './history';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Router history={history}>
            <App />
          </Router>
        </BrowserRouter>
      </Provider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
