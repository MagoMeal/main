import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Package, Recycle, Users, Star, ChevronRight } from 'lucide-react';
import MagoMealLogo from '../assets/new_MagoMeal_Logo.jpeg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Package size={48} />,
      title: "Edible Packaging",
      description: "Revolutionary edible packaging solutions that are crunchy and delicious, 100% bio, fully biodegradable, reduce CO₂ emissions by 75%, and made through a zero-waste production process all while protecting the environment and keeping your food fresh"
    },
    {
      icon: <Recycle size={48} />,
      title: "Sustainable Materials",
      description: "Crafted from 7 sustainable, locally sourced plant-based ingredients including natural grains and coconut oil our edible cups are 100% vegan, GMO-free, and contain no artificial colorants, sweeteners, or preservatives. Made with care through a green, zero-waste process, they’re as pure and natural as freshly baked cookies"
    },
    {
      icon: <Leaf size={48} />,
      title: "100% Eco-Friendly",
      description: "Every product is designed with sustainability in mind, contributing to a healthier planet for future generations."
    }
  ];

  return (
    <div className="home-page">
      {/* Social Media Icons */}
      <section className="social-media-section">
        <div className="container">
          <div className="social-icons-container">
            {/* Side Images for Social Media Section */}
            <div className="side-images-container">
              <div className="left-side-image">
                <img 
                  src="https://customer-assets.emergentagent.com/job_github-builder-5/artifacts/rhnf6auc_magomeal_wheet.png"
                  alt="Natural Wheat"
                  className="side-wheat-image"
                />
              </div>
              <div className="right-side-image">
                <img 
                  src="https://customer-assets.emergentagent.com/job_github-builder-5/artifacts/9shj5p3e_oat_bran.png"
                  alt="Natural Oat Bran" 
                  className="side-oat-image"
                />
              </div>
            </div>
            
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Animated Top Tagline with Logo */}
      <section className="top-tagline-section">
        <div className="container">
          <div className="tagline-container">
            {/* Animated Logo */}
            <div className={`animated-logo ${isVisible ? 'start-logo-animation' : ''}`}>
              <img 
                src={MagoMealLogo}   
                alt="MagoMeal Logo" 
                className="top-logo-image"
              />
            </div>
            
            {/* Animated Tagline */}
            <div className={`animated-tagline ${isVisible ? 'start-animation' : ''}`}>
              <span className="tagline-word" data-word="Why">Why</span>
              <span className="tagline-word" data-word="throw">throw</span>
              <span className="tagline-word" data-word="plastic">plastic</span>
              <span className="tagline-word" data-word="away">away</span>
              <span className="tagline-word" data-word="when">when</span>
              <span className="tagline-word" data-word="you">you</span>
              <span className="tagline-word" data-word="can">can</span>
              <span className="tagline-word highlight-word" data-word="eat">eat</span>
              <span className="tagline-word" data-word="the">the</span>
              <span className="tagline-word highlight-word" data-word="cup">cup</span>
              <span className="giant-question-mark" data-word="?">?</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'animated fadeIn' : 'animated'}`}>
            {/* Cupffee Product Box */}
            <div className={`hero-combined-box ${isVisible ? 'animated fadeIn' : 'animated'}`}>
              {/* More Leaf Decorations */}
              <div className="leaf-decoration-1"></div>
              <div className="leaf-decoration-2"></div>
              <div className="leaf-decoration-3"></div>
              <div className="leaf-decoration-4"></div>
              <div className="leaf-decoration-5"></div>
              <div className="leaf-decoration-6"></div>
              <div className="leaf-decoration-7"></div>
              <div className="leaf-decoration-8"></div>
              <div className="leaf-decoration-9"></div>
              <div className="leaf-decoration-10"></div>
              <div className="leaf-decoration-11"></div>
              <div className="leaf-decoration-12"></div>
              
              <div className="cupffee-section-full">
                <img 
                  src="https://customer-assets.emergentagent.com/job_github-builder-5/artifacts/bd7p45rh_cupffee_by_magomeal.png"
                  alt="Cupffee by MagoMeal - Edible Coffee Cups" 
                  className="cupffee-image"
                />
              </div>
            </div>
            
            <p className="body-large hero-description">
              Discover revolutionary edible packaging solutions that nourish both people and planet. 
              Innovative & Sustainable Edible Products for the Benelux.
            </p>
            
            <div className="hero-actions">
              <Link to="/products" className="btn-primary">
                Explore Our Products <ChevronRight size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Our Sustainable Solutions</h2>
            <p className="body-large">
              Innovative & Sustainable Edible Products for the Benelux
            </p>
          </div>
          
          <div className="network-grid">
            {features.map((feature, index) => (
              <div key={index} className="network-card hover-lift feature-card-with-leafs">
                <div className="leafs-decoration">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_github-builder-5/artifacts/7loflz67_leafs_magomeal.png" 
                    alt="Eco-Friendly Leafs" 
                    className="leafs-corner-image"
                  />
                </div>
                <div className="feature-icon" style={{ color: 'var(--brand-dark)', marginBottom: 'var(--spacing-small)' }}>
                  {feature.icon}
                </div>
                <h3 className="network-card-title">{feature.title}</h3>
                <p className="network-card-content">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Ready to Go Green?</h2>
            <p className="body-large">
              Magomeal brings innovative, sustainable edible products to the Benelux market, join us in making a positive impact on the environment and local communities..
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">
                Start Your Journey <Leaf size={20} />
              </Link>
              <Link to="/products" className="btn-secondary">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_github-builder-5/artifacts/4lpzmkem_magomeal_circular_logo.png"
                alt="MagoMeal Circular Logo"
                className="footer-logo-image"
              />
            </div>
            <div className="footer-text">
              <p className="footer-tagline">Innovative & Sustainable Edible Products for the Benelux</p>
              <p className="footer-copyright">© 2024 MagoMeal. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;