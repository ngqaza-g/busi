import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login, { action as loginAction }  from './pages/Login';
import Root, {loader as rootLoader} from './pages/Root';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import RouteComponent from './components/RouteComponent';
import Monitor from './components/monitoring/Monitor';
import Changepassword from './components/Changepassword';



export default function App(){
    const router = createBrowserRouter([
        {
          path : '/',
          // element: <Root />,
          element: <Dashboard />,
          // errorElement: <Error />,
          loader: rootLoader,
          children: [
            {
              path: "/login",
              element: <RouteComponent isProtected={false}>
                <Login />
              </RouteComponent>, 
              action: loginAction,
          },
          {
              path: '/dashboard',
              element: <RouteComponent isProtected={true}>
                <Dashboard />,
              </RouteComponent>
          },{
            path: "/hello",
            element: <h1>Hello World</h1>
          }
          ]
        }
      ])
    return (
        
            // <RouterProvider router={router} />
            <Dashboard />

    )
}