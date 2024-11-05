import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Mainroot from './Componants/Roots/Mainroot';
import Scndroot from './Componants/Roots/Scndroot';
import Errorpage from './Componants/Error/Errorpage';
import Productdetails from './Componants/Productdetails/Productdetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainroot></Mainroot>,
    errorElement: <Errorpage></Errorpage>,
  },
  {
    path: "/product/:product_id",
    element: <Scndroot></Scndroot>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/product/:product_id',
        element: <Productdetails></Productdetails>,
        loader: () => fetch('/public/Data/gadets.json'),
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
