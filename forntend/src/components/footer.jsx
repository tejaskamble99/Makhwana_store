import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer bg-dark text-light pt-5 pb-3">
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-md-3 mb-3">
              <img
                src="Images/Logo.png"
                alt="MakwanaStore"
                className="footer-logo"
              />
              <p className="company-info">
                <i className="bi bi-geo-alt"></i>Borivali Magathane Depot
                <br />
                <i className="bi bi-telephone"></i>+91 9152100750
                <br />
                <i className="bi bi-envelope"></i>info@makwanastore.com
              </p>
              {/* <!-- Instagram Icon Below Company Info --> */}
              <a
                href="https://www.instagram.com/makwanastore.com_fashion/?igsh=ZjN3cm1rZzdpcW4z"
                className="social-icon"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>

            {/* <- Quick Links -->!- */}
            <div className="col-md-3 mb-3">
              <h3 className="fw-bold">Quick Links</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="index.html" className="footer-link">
                    <i className="bi bi-house-door"></i> Home
                  </a>
                </li>
                <li>
                  <a href="shop.html" className="footer-link">
                    <i className="bi bi-shop"></i> Shop
                  </a>
                </li>
                <li>
                  <a href="about.html" className="footer-link">
                    <i className="bi bi-info-circle"></i> About Us
                  </a>
                </li>
                <li>
                  <a href="contact.html" className="footer-link">
                    <i className="bi bi-envelope"></i> Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Useful Links --> */}
            <div className="col-md-3 mb-3">
              <h3 className="fw-bold">Useful Links</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="footer-link">
                    <i className="bi bi-truck"></i> Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    <i className="bi bi-shield-lock"></i> Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    <i className="bi bi-file-earmark-text"></i> Terms &
                    Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    <i className="bi bi-credit-card"></i> Payment Methods
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Payment Methods --> */}
            <div className="col-md-3 mb-3">
              <h3 className="fw-bold">We Accept</h3>
              <img
                src="Images/Pay/Visa.png"
                alt="Visa"
                className="payment-icon"
              />
              <img
                src="Images/Pay/Mastercard.png"
                alt="MasterCard"
                className="payment-icon"
              />
              <img
                src="Images/Pay/RazorPay.png"
                alt="RazorPay"
                className="payment-icon"
              />
            </div>
          </div>
        </div>

        <div className="copyright">
          © 2025 <span className="fw-bold">MakwanaStore</span> | All Rights
          Reserved
        </div>
      </footer>
      {/* 
    <!-- Floating WhatsApp Button --> */}
      <a
        href="https://wa.me/9152100750"
        className="whatsapp-float"
        target="_blank"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </>
  );
}

export default Footer;
