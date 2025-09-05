import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Leaf, Truck, Package } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo and Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_1599ee33-608a-4f29-a948-5fbb4b56f909/artifacts/scyoowtk_MagoMeal_Logo.jpeg" 
                alt="MagoMeal Logo" 
                style={{ height: '50px', width: 'auto', marginBottom: '16px' }}
              />
              <p className="body-medium">
                Fuel Your Day, Feed Your Roots - Eco-friendly food and packaging solutions for a sustainable future.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="heading-3">Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/products" className="footer-link">Products & Services</Link>
              <Link to="/blog" className="footer-link">Blog & News</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="heading-3">Our Services</h4>
            <div className="footer-services">
              <div className="footer-service">
                <Package size={20} />
                <span>Biodegradable Packaging</span>
              </div>
              <div className="footer-service">
                <Truck size={20} />
                <span>Food Truck Services</span>
              </div>
              <div className="footer-service">
                <Leaf size={20} />
                <span>Eco-Friendly Solutions</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="heading-3">Get In Touch</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={20} />
                <span>info@magomeal.com</span>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <span>(555) 123-4567</span>
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
              © 2024 MagoMeal. All rights reserved. Committed to sustainable packaging and delicious food.
            </p>
            <div className="footer-legal">
              <a href="#privacy" className="footer-link body-small">Privacy Policy</a>
              <a href="#terms" className="footer-link body-small">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;