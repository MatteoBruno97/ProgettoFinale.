import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Antipasti from "./components/Antipasti";
import Primi from "./components/Primi";
import Secondi from "./components/Secondi";
import Sushi from "./components/Sushi";
import Salse from "./components/Salse";
import Bibite from "./components/Bibite";
import Dolci from "./components/Dolci";
import Carrello from "./components/Carrello";
import OrdineEffettuato from "./components/OrdineEffettuato";
import Cucina from "./components/Cucina";

const router = createBrowserRouter([
  {
    path:'/Cucina',
    element:<Cucina/>
  },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", 
        element: <Antipasti /> 
      },
      {
        path: "/Primi",
        element: <Primi />,
      },
      {
        path: "/Secondi",
        element: <Secondi />,
      },
      {
        path: "/Sushi",
        element: <Sushi />,
      },
      {
        path: "/Salse",
        element: <Salse />,
      },
      {
        path: "/Bibite",
        element: <Bibite />,
      },
      {
        path: "/Dolci",
        element: <Dolci />,
      },
      {
        path: "/Carrello",
        element: <Carrello />,
      },
      {
        path: "/ordineEffettuato",
        element: <OrdineEffettuato />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
