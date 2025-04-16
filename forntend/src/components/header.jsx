import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import logo from '../assets/Images/Logo.png';
import '../App.css';

const Header = () => {
  return (
    <Navbar className="custom-navbar" expand="lg" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center" id="nav-links">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <NavDropdown
              title={<span><Link to="/shop" className="text-decoration-none text-dark">Shop</Link></span>}
              id="shopDropdown"
            >
              <NavDropdown.Item as={Link} to="/shop/men">Men</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop/women">Women</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop/kids">Kids</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop/accessories">Accessories</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

            {/* Search */}
            <div className="search-container">
              <input type="text" placeholder="Search products..." className="search-input" />
              <button className="search-button"><FaSearch /></button>
            </div>

            {/* Icons */}
            <div className="nav-icons">
              <div className="icon-container"><FaUser /></div>
              <div className="icon-container">
                <FaShoppingBag />
                <span className="cart-badge">1</span>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
