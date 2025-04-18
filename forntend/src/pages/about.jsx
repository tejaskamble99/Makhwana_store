import React from 'react'
import '../styles/about.css'

const about = () => {
  return (
    <>
      <section id="about-us" className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="Images/rb_124.png" alt="About Us" className="about-img fade-in " />
            </div>
            <div className="col-md-6 about-container">
              <h1>About Us</h1>
              <p><strong>Welcome to Makwana Store – Where Fashion Meets Heartfelt Gifting!</strong></p>
              <p>
                At Makwana Store, we blend creativity and practicality to bring you the best in apparel and personalized gifts.
                Established with the vision of creating a one-stop shop for fashion-forward individuals and thoughtful gifters, we
                pride ourselves on offering high-quality products that celebrate moments and memories.
              </p>
              <h2>Our Mission</h2>
              <p>To inspire meaningful connections through unique gifting solutions and stylish apparel that cater to your personality
                and occasion.</p>

              <h2>What We Offer</h2>
              <ul>
                <li><strong>Trendy Apparel:</strong> Stylish outfits that reflect your personality.</li>
                <li><strong>Personalized Gifts:</strong> Custom mugs, wallets, T-shirts, and more.</li>
                <li><strong>Quality You Can Trust:</strong> Premium, durable, and unique products.</li>
              </ul>

              <h2>Why Choose Us?</h2>
              <ul>
                <li><strong>Affordable Prices:</strong> Premium products at budget-friendly prices.</li>
                <li><strong>Customization Options:</strong> Add a personal touch to your gifts.</li>
                <li><strong>Excellent Service:</strong> Seamless shopping & great customer support.</li>
              </ul>

              <a href="contact.html" className="btn btn-primary cta-btn bounce">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default about