import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";


// Pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import UCLdiss from "./pages/UCLdiss";
import ScrollToTop from "./components/ScrollToTop";

// General App & pages SCSS
import "../src/css/app.scss";
import "../src/css/layout.scss";
import "../src/css/home.scss";
import "../src/css/experiences.scss";
import "../src/css/ucldiss.scss";

// Component SCSS
import "../src/css/anchor.scss";
import "../src/css/title.scss";
import "../src/css/timeline.scss";
import "../src/css/worklink.scss";


const AppRoute = () => {
  return (
    <Routes>
      {/* Webframe for portfolio (Layout is the base template) */}
      <Route path="/" element={<Layout/>}>
        <Route path="/" index element={<Home/>} />
        <Route path="/experiences" index element={<Experiences/>} />
        <Route path="/ucl" element={<UCLdiss/>} />
      </Route>
    </Routes>
  );
};

// Main Function
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoute />
    </BrowserRouter>
  )
}