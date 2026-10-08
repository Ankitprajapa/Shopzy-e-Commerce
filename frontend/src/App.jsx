import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Profile from './pages/Profile';
import AdminOrders from './Admin/AdminOrders';
import EditProduct from './Admin/EditProduct';
import AddProduct from './Admin/AddProduct';
import AdminDashBoard from './Admin/AdminDashBoard';
import AdminProducts from './Admin/AdminProduct';
import AdminUsers from './Admin/AdminUsers';
import Shop from './pages/Shop';
import ReturnPolicy from './pages/ReturnPolicy';






const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
         
        <Route path="/disclaimer" element={<Disclaimer />} /> */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ordersuccess" element={<OrderSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashBoard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/edit-product/:id" element={<EditProduct />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/return" element={<ReturnPolicy />} />

      </Routes>

      <Footer />
    </Router>
  );
};

export default App;