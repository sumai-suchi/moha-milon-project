import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'Login',
        element:<Login></Login>
      },
      {
        path:'Register',
        element:<Register></Register>
      }

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
          <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
