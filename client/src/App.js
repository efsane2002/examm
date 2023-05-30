import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Service from "./pages/Services";
import Add from "./pages/Add";
import Features from "./pages/Features";
import Portfolio from "./pages/About";
import Team from "./pages/Team";
import Clients from "./pages/Clients";
import Pricing from "./pages/Pricing";
import News from "./pages/News";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/features" element={<Features></Features>}></Route>
      <Route path="/services" element={<Service></Service>}></Route>
      <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
      <Route path="/team" element={<Team></Team>}></Route>
      <Route path="/clients" element={<Clients></Clients>}></Route>
      <Route path="/pricing" element={<Pricing></Pricing>}></Route>
      <Route path="/news" element={<News></News>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/add" element={<Add></Add>}></Route>
    </Routes>
    </>
  );
}

export default App;
