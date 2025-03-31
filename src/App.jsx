

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import './App.css';
import { useState } from "react";
import Home from "./components/Home.js"; 
import Paste from "./components/Paste.js"; 

import viewPaste from "./components/viewPaste.jsx";

// const ViewPaste = () => <div>📝 Viewing Paste</div>;



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div>
        <Navbar />
        <Paste />
      </div>
    ),
  },

  {
    path: "/Home",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },

  {
    path: "/pastes/:id",
    element: (
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

                   



















