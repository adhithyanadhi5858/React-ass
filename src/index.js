import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ProductDetails from './pages/productDetails';
import Root from './routes/Root';
import ErrorPage from './pages/Error-Page';
import ProductList from './pages/ProductList';
import Roots from './routes/UserRoot';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/products-details/:id",
        element: <ProductDetails />,
      },
    ],
    
  },
  {
    path:"/admine",
    element:<Roots/>,
    children : [
      {
        path :"",
        element : <ProductList/>
      }
    ]
   
  }
 
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <RouterProvider router={router} />



  </React.StrictMode>
);

reportWebVitals();
