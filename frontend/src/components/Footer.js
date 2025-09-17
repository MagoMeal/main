import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Leaf, Package, Recycle } from 'lucide-react';
import MagoMealLogo from 'src/assets/new_MagoMeal_Logo.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo and Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src={MagoMealLogo}  
                alt="MagoMeal Logo" 
                style={{ height: '250px', width: 'auto', marginBottom: '16px' }}
              />
              <p className="body-medium">
                Leading the sustainable packaging revolution with innovative edible solutions.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="heading-3">Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/products" className="footer-link">Products</Link>
              <Link to="/blog" className="footer-link">Blog & News</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
              <Link to="/shop" className="footer-link">Shop</Link>
            </nav>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h4 className="heading-3">Our Products</h4>
            <div className="footer-services">
              <div className="footer-service">
                <Package size={20} />
                <span>Edible Packaging</span>
              </div> {/* 
              <div className="footer-service">
                <Recycle size={20} />
                <span>Compostable Packaging</span>
              </div>
              <div className="footer-service">
                <Leaf size={20} />
                <span>Plant-Based Solutions</span>
              </div>*/}
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="heading-3">Get In Touch</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={20} />
                <span>info@magomeal.nl</span>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <span></span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="newsletter-signup">
              <h5 className="body-large">Stay Updated</h5>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button type="submit" className="btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="body-small">
              © 2025 MagoMeal. All rights reserved. Delivering innovative edible products to the Benelux.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;