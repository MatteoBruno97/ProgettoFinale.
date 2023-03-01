import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Navbar from "./components/Navbar";


import { Outlet } from "react-router-dom";

import { CartProvider } from "./CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <Outlet />
      </CartProvider>
    </div>
  );
}
 export default App;
