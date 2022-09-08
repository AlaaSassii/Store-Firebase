import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SignUp from './routes/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);

