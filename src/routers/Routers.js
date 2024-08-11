import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Services from "../pages/services"
import Repair from "../pages/New"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Productslist from "../pages/productslist"
import Cart from "../components/UI/Cart";
import License from "../components/UI/License";
import AdminDashboard from"../pages/Admindashboard";
import  Payment  from "../pages/Payment";
import Paymentnew from"../pages/paymentaccess"
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services/>} />
      <Route path="/New" element={<Repair/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Products" element={<Productslist/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/License" element={<License/>}/>
      <Route path="/Admin" element={<AdminDashboard/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/paymentnew" element={<Paymentnew/>}/>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
