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

          {/* Cupffee Showcase with Animated Text Boxes */}
          <div className="cupffee-showcase-section">
            {/* Background Decorative Images */}
            <div className="wheat-decoration-left">
              <img 
                src="https://customer-assets.emergentagent.com/job_github-builder-5/artifacts/rhnf6auc_magomeal_wheet.png"
                alt="Natural Wheat"
                className="wheat-bg-image"
              />
            </div>
            <div className="oat-decoration-right">
              <img 
                src="https://customer-assets.emergentagent.com/job_github-builder-5/artifacts/9shj5p3e_oat_bran.png"
                alt="Natural Oat Bran" 
                className="oat-bg-image"
              />
            </div>
            
            {/* Central Cupffee Image */}
            <div className="cupffee-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_github-builder-5/artifacts/fij9v0sa_cupfee_bymagomeal.png"
                alt="Cupffee by MagoMeal - Edible Coffee Cups"
                className="cupffee-main-image"
              />
            </div>

            {/* Animated Text Boxes Around Cup */}
            <div className="text-box text-box-top">
              <div className="text-content">
                <h4>Crunchy and delicious</h4>
                <p>The sustainable alternative to disposable cups – a tasty solution to plastic pollution!</p>
              </div>
            </div>

            <div className="text-box text-box-right">
              <div className="text-content">
                <h4>Completely natural</h4>
                <p>Masterfully crafted from 7 sustainable, locally sourced ingredients of natural origin.</p>
              </div>
            </div>

            <div className="text-box text-box-bottom">
              <div className="text-content">
                <h4>Green production</h4>
                <p>Our eco-friendly process generates zero waste and no pollution, only the delicious aroma of freshly baked cookies.</p>
              </div>
            </div>

            <div className="text-box text-box-left">
              <div className="text-content">
                <h4>100% vegan</h4>
                <p>Handpicked for purity: only the best plant-based ingredients, including natural grains and coconut oil.</p>
              </div>
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
