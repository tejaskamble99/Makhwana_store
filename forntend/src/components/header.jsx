import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import logo from '../assets/Images/Logo.png';
import '../App.css';
import { useProducts } from '../context/productContext';

const Header = () => {
  const { cart } = useProducts();
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/authForm'); // or navigate('/')
    window.location.reload(); // optional: force reload to update header UI
  };

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

            <NavDropdown title='Shop' id="shopDropdown">
              <NavDropdown.Item as={Link} to="/shop/men">Men</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop/women">Women</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop/kids">Kids</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop/accessories">Accessories</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/shop">View All</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

            {/* Search */}
            <div className="search-container d-flex align-items-center">
              <input type="text" placeholder="Search products..." className="search-input" />
              <button className="search-button"><FaSearch /></button>
            </div>

            {/* Icons */}
            <div className="nav-icons d-flex align-items-center ms-3">
              {/* User Icon Dropdown */}
              <NavDropdown
                align="end"
                title={<FaUser style={{ fontSize: '18px', color: '#ccc' }} />}
                id="userDropdown"
                className="user-dropdown"
                drop="down-centered"
              >
                {!isLoggedIn ? (
                  <>
                    <NavDropdown.Item as={Link} to="/authForm">Login</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/authForm">Register</NavDropdown.Item>
                  </>
                ) : (
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                )}
              </NavDropdown>

              {/* Cart Icon */}
              <Nav.Link as={Link} to="/cart">
                <div className="icon-container position-relative">
                  <FaShoppingBag style={{ fontSize: '18px', color: '#ccc' }} />
                  {cart.length > 0 && (
                    <span className="cart-badge">
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  )}
                </div>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
