import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Contact from "./pages/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductDetail from "./components/productDetails";
import Cart from "./pages/cart";
import Products from "./components/Products";
import AuthForm from "./pages/auth/authForm";
// import Account from "./pages/account"; // ✅ Add this new page
import { Toaster } from 'react-hot-toast';
// import Dashboard from "./pages/admin/dashboard";
import AddProductPage from "./pages/AddProductPage";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token on app load
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  return (
    <div className="app-container">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Toaster position="top-right" />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/authForm" element={<AuthForm onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/account" element={isLoggedIn ? <h1>Account</h1> : <AuthForm onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/admin/add-product" element={<AddProductPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
