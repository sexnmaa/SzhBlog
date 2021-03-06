import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@/assets/css/reset.css';
import 'antd/dist/antd.css';
import 'animate.css';
import { Provider } from 'mobx-react'
import store from './store'


ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals