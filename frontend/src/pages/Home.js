import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Package, Recycle, Users, Star, ChevronRight } from 'lucide-react';
import MagoMealLogo from 'src/assets/new_MagoMeal_Logo.jpeg';

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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'animated fadeIn' : 'animated'}`}>
            {/* Centered Logo */}
            <div className="hero-logo">
              <img 
                src={MagoMealLogo}   
                alt="MagoMeal Logo" 
                className="hero-logo-image"
              />
            </div>
            
            <h1 className="hero-tagline">
              Why throw plastic away when you can eat the cup?
            </h1>
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
              <div key={index} className="network-card hover-lift">
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
    </div>
  );
};

export default Home;