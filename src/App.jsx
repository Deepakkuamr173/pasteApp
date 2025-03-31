

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./componenets/Navbar.jsx";
import './App.css';
import { useState } from "react";
import Home from "./componenets/Home.jsx"; 
import Paste from "./componenets/Paste.jsx"; 

import viewPaste from "./componenets/viewPaste.jsx";

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

                   



















