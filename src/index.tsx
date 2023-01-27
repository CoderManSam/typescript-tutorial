import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // react strictmode disabled as it prevents draggable from working with react 18
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
