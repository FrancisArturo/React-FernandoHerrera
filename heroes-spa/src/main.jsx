import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from './auth';
import { router } from './router/AppRouter';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>

        <RouterProvider  router={router}/>

    </AuthProvider>

  </React.StrictMode>,
)
