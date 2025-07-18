import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Contact from "./pages/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductDetail from "./components/productDetails";
import Cart from "./pages/cart"
import Products from "./components/Products";
import Register from "./pages/auth/resister";
import Login from "./pages/auth/login";
import AuthForm from "./pages/auth/authForm";


function App() {
  return (
    <div className="app-container">
      <Header />

      {/* Main content should wrap Routes */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/authForm" element={<AuthForm />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
