import React from 'react'
import ReactDOM from 'react-dom/client'
import Selection from './components/Selection'
import People from './components/People'
import './index.css'
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Selection />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:id",
    element: <People />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
