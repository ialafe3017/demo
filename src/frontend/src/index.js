import React from 'react'; // this is where we import react
import ReactDOM from 'react-dom';
import './index.css'; //importing css and antd
import App from './App'; //mounting point for our application
import reportWebVitals from './reportWebVitals';
// main entry point for react app
ReactDOM.render( // reactDOM renders the App and with the root ID
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); //vitals and performance
