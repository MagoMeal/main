import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Package, Recycle, Users, Star, ChevronRight } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'animated fadeIn' : 'animated'}`}>
            {/* Centered Logo */}
            <div className="hero-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_1599ee33-608a-4f29-a948-5fbb4b56f909/artifacts/scyoowtk_MagoMeal_Logo.jpeg" 
                alt="MagoMeal Logo" 
                className="hero-logo-image"
              />
            </div>
            
            <h1 className="display-large">
              Fuel Your Day, <br />
              <span style={{ color: 'var(--brand-hover)' }}>Feed Your Roots</span>
            </h1>
            <p className="body-large hero-description">
              Discover revolutionary edible packaging solutions that nourish both people and planet. 
              Leading the sustainable packaging revolution with innovative, eco-friendly materials.
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
              Leading the way in eco-friendly packaging innovations
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
              Join the sustainable packaging revolution and make a positive impact on the environment with our innovative solutions.
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