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
import Orders from './Components/Orders.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Profile from './Profile.jsx';

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
      },
      {
        path:'Orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path:'Profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
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
