import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note';
import configStore from './store/store.js';
import Root from './components/root';



document.addEventListener("DOMContentLoaded", () => {
  const store = configStore();
  const root = document.getElementById("root");
  window.store = store;

  ReactDOM.render(<Root store={store} />, root);
});
