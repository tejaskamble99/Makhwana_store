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


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Products" element={<Products />} />

        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
