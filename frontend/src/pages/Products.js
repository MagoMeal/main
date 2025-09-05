import React, { useState } from 'react';
import { Package, Truck, Leaf, CheckCircle, Star, MapPin } from 'lucide-react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('packaging');

  const packagingProducts = [
    {
      name: "Edible Food Containers",
      description: "Revolutionary containers made from seaweed and plant-based materials that can be eaten along with your meal.",
      features: ["100% Edible", "Tasteless & Odorless", "6-month shelf life", "Various sizes available"],
      price: "Starting at $0.25 per unit"
    },
    {
      name: "Biodegradable Cups",
      description: "Compostable cups perfect for hot and cold beverages, made from cornstarch and natural fibers.",
      features: ["Heat resistant", "Leak-proof", "Composts in 90 days", "Custom branding available"],
      price: "Starting at $0.15 per unit"
    },
    {
      name: "Plant-Based Wraps",
      description: "Flexible food wraps made from plant proteins that keep food fresh and are completely edible.",
      features: ["Flexible & durable", "Moisture resistant", "Nutritionally neutral", "Clear & colored options"],
      price: "Starting at $0.30 per unit"
    },
    {
      name: "Compostable Plates",
      description: "Sturdy dinner plates made from agricultural waste that break down naturally in composting.",
      features: ["Microwave safe", "Sturdy construction", "90-day composting", "Multiple sizes"],
      price: "Starting at $0.20 per unit"
    }
  ];

  const foodTruckLocations = [
    {
      day: "Monday",
      location: "Downtown Business District",
      time: "11:00 AM - 2:00 PM",
      address: "Main St & 5th Ave"
    },
    {
      day: "Tuesday",
      location: "University Campus",
      time: "11:30 AM - 2:30 PM",
      address: "Student Center Plaza"
    },
    {
      day: "Wednesday",
      location: "Tech Park",
      time: "11:00 AM - 2:00 PM",
      address: "Innovation Drive"
    },
    {
      day: "Thursday",
      location: "Downtown Business District",
      time: "11:00 AM - 2:00 PM",
      address: "Main St & 5th Ave"
    },
    {
      day: "Friday",
      location: "Farmers Market",
      time: "10:00 AM - 3:00 PM",
      address: "Central Park North"
    },
    {
      day: "Saturday",
      location: "Community Events",
      time: "Variable",
      address: "Check our social media for updates"
    }
  ];

  const menuItems = [
    {
      category: "Signature Bowls",
      items: [
        { name: "Green Goddess Bowl", description: "Quinoa, avocado, kale, edible packaging", price: "$12.99" },
        { name: "Protein Power Bowl", description: "Grilled chicken, brown rice, vegetables", price: "$13.99" },
        { name: "Vegan Delight Bowl", description: "Tempeh, mixed greens, tahini dressing", price: "$11.99" }
      ]
    },
    {
      category: "Sustainable Sandwiches",
      items: [
        { name: "Eco Club", description: "Turkey, avocado, sprouts on grain bread", price: "$9.99" },
        { name: "Plant-Based BLT", description: "Coconut bacon, lettuce, tomato", price: "$8.99" },
        { name: "Grilled Veggie Wrap", description: "Seasonal vegetables in edible wrap", price: "$8.49" }
      ]
    }
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <h1 className="display-medium">Products & Services</h1>
          <p className="body-large">
            Discover our innovative biodegradable packaging solutions and sustainable food truck services
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="products-tabs">
        <div className="container">
          <div className="tab-navigation">
            <button 
              className={`tab-btn ${activeTab === 'packaging' ? 'active' : ''}`}
              onClick={() => setActiveTab('packaging')}
            >
              <Package size={24} />
              Biodegradable Packaging
            </button>
            <button 
              className={`tab-btn ${activeTab === 'foodtruck' ? 'active' : ''}`}
              onClick={() => setActiveTab('foodtruck')}
            >
              <Truck size={24} />
              Food Truck Services
            </button>
          </div>
        </div>
      </section>

      {/* Packaging Products Tab */}
      {activeTab === 'packaging' && (
        <section className="packaging-section">
          <div className="container">
            <div className="section-header">
              <h2 className="heading-1">Biodegradable Packaging Solutions</h2>
              <p className="body-large">
                Revolutionary packaging that's as good for the planet as it is for your business
              </p>
            </div>

            <div className="products-grid">
              {packagingProducts.map((product, index) => (
                <div key={index} className="product-card network-card">
                  <div className="product-header">
                    <Package size={40} style={{ color: 'var(--brand-dark)' }} />
                    <h3 className="network-card-title">{product.name}</h3>
                  </div>
                  <p className="network-card-content">{product.description}</p>
                  
                  <div className="product-features">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <CheckCircle size={16} style={{ color: 'var(--brand-hover)' }} />
                        <span className="body-small">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="product-price">
                    <span className="body-medium" style={{ fontWeight: '600' }}>{product.price}</span>
                  </div>
                  
                  <button className="btn-primary product-cta">
                    Request Quote
                  </button>
                </div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="benefits-section">
              <h3 className="heading-2">Why Choose Our Packaging?</h3>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <Leaf size={32} style={{ color: 'var(--brand-dark)' }} />
                  <h4 className="heading-3">100% Eco-Friendly</h4>
                  <p className="body-medium">Made from renewable resources with zero environmental impact</p>
                </div>
                <div className="benefit-item">
                  <Star size={32} style={{ color: 'var(--brand-dark)' }} />
                  <h4 className="heading-3">Premium Quality</h4>
                  <p className="body-medium">Durable, functional, and maintains food freshness</p>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={32} style={{ color: 'var(--brand-dark)' }} />
                  <h4 className="heading-3">Cost Effective</h4>
                  <p className="body-medium">Competitive pricing with long-term sustainability benefits</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Food Truck Services Tab */}
      {activeTab === 'foodtruck' && (
        <section className="foodtruck-section">
          <div className="container">
            <div className="section-header">
              <h2 className="heading-1">Food Truck Services</h2>
              <p className="body-large">
                Delicious, sustainable meals served in our eco-friendly biodegradable packaging
              </p>
            </div>

            {/* Weekly Schedule */}
            <div className="schedule-section">
              <h3 className="heading-2">Weekly Schedule</h3>
              <div className="schedule-grid">
                {foodTruckLocations.map((schedule, index) => (
                  <div key={index} className="schedule-card network-card">
                    <div className="schedule-day">
                      <h4 className="heading-3">{schedule.day}</h4>
                      <p className="body-medium" style={{ color: 'var(--brand-hover)' }}>{schedule.time}</p>
                    </div>
                    <div className="schedule-location">
                      <MapPin size={20} style={{ color: 'var(--brand-dark)' }} />
                      <div>
                        <p className="body-medium" style={{ fontWeight: '600' }}>{schedule.location}</p>
                        <p className="body-small">{schedule.address}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Menu Section */}
            <div className="menu-section">
              <h3 className="heading-2">Our Menu</h3>
              <div className="menu-categories">
                {menuItems.map((category, index) => (
                  <div key={index} className="menu-category">
                    <h4 className="heading-3">{category.category}</h4>
                    <div className="menu-items">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="menu-item">
                          <div className="menu-item-info">
                            <h5 className="body-medium" style={{ fontWeight: '600' }}>{item.name}</h5>
                            <p className="body-small">{item.description}</p>
                          </div>
                          <span className="menu-price body-medium">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Catering CTA */}
            <div className="catering-cta">
              <div className="cta-content">
                <h3 className="heading-2">Need Catering?</h3>
                <p className="body-large">
                  Book our food truck for your next event and enjoy sustainable, delicious meals 
                  served in our biodegradable packaging.
                </p>
                <button className="btn-primary">Book Catering Service</button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Products;