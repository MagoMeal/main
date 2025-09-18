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
      name: "Edible Cups",
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
          <h1 className="display-medium">Edible Packaging Solutions</h1>
          <p className="body-large">
            Bringing sustainable, innovative edible products to the Benelux market protecting both your business and the planet.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="packaging-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Our Product Range</h2>
            <p className="body-large">
              Edible cups and packaging made to reduce waste, help the planet, and bring value to your business.
            </p>
          </div>

          {/* Coming Soon Message */}
          <div className="coming-soon-section">
            <div className="coming-soon-card network-card">
              <Package size={64} style={{ color: 'var(--brand-dark)', marginBottom: 'var(--spacing-medium)' }} />
              <h3 className="heading-2">Product Catalog Coming Soon</h3>
              <p className="body-large">
                We're preparing detailed information about our complete range of edible packaging solutions. 
                Our innovative products will be showcased here very soon.
              </p>
              <p className="body-medium" style={{ marginTop: 'var(--spacing-medium)', color: 'var(--brand-hover)' }}>
                Stay tuned for updates on our revolutionary edible packaging lineup!
              </p>
              <a
                href="mailto:info@magomeal.nl?subject=Early%20Access%20Request"
                className="btn-primary"
                style={{ marginTop: 'var(--spacing-large)', display: 'inline-block' }}
              >
                Contact Us for Early Access
              </a>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="benefits-section">
            <h3 className="heading-2">Why Choose Our Packaging?</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <Leaf size={32} style={{ color: 'var(--brand-dark)' }} />
                <h4 className="heading-3">100% Eco-Friendly</h4>
                <p className="body-medium">Good for you, better for the planet, 100% natural and zero waste</p>
              </div>
              <div className="benefit-item">
                <Star size={32} style={{ color: 'var(--brand-dark)' }} />
                <h4 className="heading-3">Premium Quality</h4>
                <p className="body-medium">Durable and delicious, designed to keep your food safe while you eat the cup</p>
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
              Associate your company with the mission of sustainability. Put your brand in the hands of your customers.
              Need your own custom edible cup ? No problem! The paper label is completely customizable.
              </p>
              <a
                href="mailto:info@magomeal.nl?subject=Custom%20Quote%20Request"
                className="btn-primary"
                style={{ display: 'inline-block' }}
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
