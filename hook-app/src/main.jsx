import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Router';
import { UserProvider } from './09-useContext/context/UserProvider';






ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider >
    <RouterProvider  router={router}/>
  </UserProvider>
    
)
