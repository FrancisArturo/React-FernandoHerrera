import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/AppRouter';
import { AppTheme } from './theme';
import { Provider } from 'react-redux';
import { store } from './store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
            <RouterProvider router={router}/>
        </AppTheme> 
    </Provider>  
  </React.StrictMode>,
)
