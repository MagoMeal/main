import React from 'react';
import { Package, Leaf, CheckCircle, Star } from 'lucide-react';

const Products = () => {
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
    },
    {
      name: "Eco-Friendly Bowls",
      description: "Deep bowls perfect for soups, salads, and main dishes, crafted from renewable materials.",
      features: ["Deep capacity", "Temperature resistant", "Non-toxic materials", "Stackable design"],
      price: "Starting at $0.28 per unit"
    },
    {
      name: "Sustainable Utensils",
      description: "Complete utensil set made from compressed plant fibers that decompose naturally.",
      features: ["Full utensil set", "Sturdy construction", "Compostable", "Bulk packaging available"],
      price: "Starting at $0.12 per piece"
    }
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <h1 className="display-medium">Biodegradable Packaging Solutions</h1>
          <p className="body-large">
            Discover our innovative sustainable packaging solutions designed to protect your food and our planet
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="packaging-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Our Product Range</h2>
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
                <p className="body-medium">Durable, functional, and maintains food freshness and safety</p>
              </div>
              <div className="benefit-item">
                <CheckCircle size={32} style={{ color: 'var(--brand-dark)' }} />
                <h4 className="heading-3">Cost Effective</h4>
                <p className="body-medium">Competitive pricing with long-term sustainability benefits</p>
              </div>
            </div>
          </div>

          {/* Custom Solutions CTA */}
          <div className="catering-cta">
            <div className="cta-content">
              <h3 className="heading-2">Need Custom Solutions?</h3>
              <p className="body-large">
                We offer custom packaging solutions tailored to your specific business needs. 
                From branding to specialized sizes, we can create the perfect sustainable packaging for your business.
              </p>
              <button className="btn-primary">Get Custom Quote</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;