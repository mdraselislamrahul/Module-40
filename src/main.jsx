import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Contrise from "./Components/Contrise";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Contrise></Contrise>,
    loader: () => {return fetch("https://restcountries.com/v3.1/all") }
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
