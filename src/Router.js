import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Artists from "./pages/Artists/Artists";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductList from "./pages/ProductList/ProductList";
import Order from "./pages/Order/Order";
import Invoice from "./pages/Invoice/Invoice";
import Cart from "./components/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/productList/all" element={<ProductList />} />
        <Route path="/order" element={<Order />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
