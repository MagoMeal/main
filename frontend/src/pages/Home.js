import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Package, Recycle, Users, Star, ChevronRight } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Package size={48} />,
      title: "Edible Packaging",
      description: "Revolutionary edible packaging solutions that reduce waste and protect the environment while keeping your food fresh."
    },
    {
      icon: <Recycle size={48} />,
      title: "Sustainable Materials",
      description: "Made from 100% natural materials including seaweed extracts, plant proteins, and agricultural waste that completely decompose."
    },
    {
      icon: <Leaf size={48} />,
      title: "100% Eco-Friendly",
      description: "Every product is designed with sustainability in mind, contributing to a healthier planet for future generations."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      content: "MagoMeal's biodegradable packaging has transformed our takeout service. Our customers love the eco-friendly approach!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Cafe Manager",
      content: "The packaging quality is exceptional and our environmental impact has decreased significantly since switching to MagoMeal.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Sustainability Manager",
      content: "Finally, a packaging solution that aligns with our environmental values without compromising on quality.",
      rating: 5
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'animated fadeIn' : 'animated'}`}>
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

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number display-medium">50,000+</div>
              <div className="stat-label body-medium">Packages Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number display-medium">98%</div>
              <div className="stat-label body-medium">Customer Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-number display-medium">200+</div>
              <div className="stat-label body-medium">Business Partners</div>
            </div>
            <div className="stat-card">
              <div className="stat-number display-medium">100%</div>
              <div className="stat-label body-medium">Biodegradable</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">What Our Customers Say</h2>
            <p className="body-large">
              Trusted by businesses committed to sustainability
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card network-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="var(--brand-dark)" color="var(--brand-dark)" />
                  ))}
                </div>
                <p className="testimonial-content body-medium">
                  "{testimonial.content}"
                </p>
                <div className="testimonial-author">
                  <strong className="body-medium">{testimonial.name}</strong>
                  <span className="body-small">{testimonial.role}</span>
                </div>
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