import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";


// Pages
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Work from "./pages/Work";

// General App & pages SCSS
import "../src/css/app.scss";
import "../src/css/home.scss";
import "../src/css/layout.scss";
import "../src/css/work.scss";

// Component SCSS
import "../src/css/anchor.scss";
import "../src/css/cursor.scss";
import "../src/css/title.scss";
import "../src/css/worklink.scss";


const AppRoute = () => {
  return (
    <Routes>
      {/* Webframe for portfolio (Layout is the base template) */}
      <Route path="/" element={<Layout/>}>
        <Route path="/" index element={<Home/>} />
        <Route path="/work" element={<Work/>} />
      </Route>
    </Routes>
  );
};

// Main Function
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  )
}