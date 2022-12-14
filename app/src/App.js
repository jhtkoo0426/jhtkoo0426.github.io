import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import React, { useState, useEffect } from "react";

import "../src/css/app.scss";
import "../src/css/components.scss";


const AppRoute = () => {
  return (
    <Routes>
      {/* Webframe for portfolio (Layout is the base template) */}
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
      </Route>
    </Routes>
  );
};

// Main Function
export default function App() {
  // Declaring states for using splash screen.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading time transition into app page
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);  

  return isLoading ? 
    // Page is still loading -> Display the splash screen
    // TODO: Improve the splash screen animation
    <div className="splash-screen">
        <div className="splash-screen">
            {/* https://codepen.io/aaroniker/pen/omvYNZ */}
            <div class="loader circle">
                <svg viewBox="0 0 80 80">
                    <circle id="test" cx="40" cy="40" r="32"></circle>
                </svg>
            </div>
        </div>
    </div>:
    // Page finished loading -> Load portfolio
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
}