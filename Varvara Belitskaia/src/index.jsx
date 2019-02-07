import './style.css';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { reducer } from './reducers/reducer';
import { Header } from './components/Header';
import { Main } from './components/Main';

export const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Fragment>
        <Header />
        <Main />
      </Fragment>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
