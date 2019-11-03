import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import '@babel/polyfill';

import store from '../store/index';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default hot(App);
