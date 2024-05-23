import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import './index.css';
import { store } from './store';
import { TodosApp } from './TodosApp';
// import App from './App.jsx';
// import { PokemonApp } from './PokemonApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodosApp />
    </Provider>
    
  </React.StrictMode>,
)
