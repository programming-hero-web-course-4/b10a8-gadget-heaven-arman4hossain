// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from './Componants/Context/CartContext';
import { WishProvider } from './Componants/Context/WishContext'; // Import WishProvider
import './index.css';
import Mainroot from './Componants/Roots/Mainroot';
import Scndroot from './Componants/Roots/Scndroot';
import Errorpage from './Componants/Error/Errorpage';
import Productdetails from './Componants/Productdetails/Productdetails';
import Dashboard from './Componants/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainroot />,
    errorElement: <Errorpage />,
  },
  {
    path: "/",
    element: <Scndroot />,
    errorElement: <Errorpage />,
    children: [
      {
        path: '/product/:product_id',
        element: <Productdetails />,
        loader: () => fetch('/public/Data/gadets.json'),
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <WishProvider> {/* Wrap the app with WishProvider */}
        <RouterProvider router={router} />
      </WishProvider>
    </CartProvider>
  </StrictMode>
);
