import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import LocomotiveScroll from 'locomotive-scroll';
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#root'),
//   smooth: true
// });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer />
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
