import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById("root");

const root = createRoot(container as Element | DocumentFragment)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
