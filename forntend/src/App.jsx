import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';
import About from './pages/about';
import Contact from './pages/contact';
import Header from './components/header';

function App() {


  return (
    <>
    <Header />
      <Routes>
     
  <Route path="/" element={<Home />} />
  <Route path="/shop" element={<Shop />} />

  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

 
    </>
  )
}

export default App
