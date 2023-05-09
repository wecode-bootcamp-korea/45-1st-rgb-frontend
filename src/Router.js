import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductList from "./pages/ProductList/ProductList";
import Order from "./pages/Order/Order";
import Invoice from "./pages/Invoice/Invoice";
import User from "./pages/User/User";
import Auth from "./components/Nav/Auth";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user" element={<User />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/productList/all" element={<ProductList />} />
        <Route path="/order" element={<Order />} />
        <Route path="/invoice" element={<Invoice />} />

        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
