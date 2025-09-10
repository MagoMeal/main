import React from 'react';
import { ShoppingCart, Package } from 'lucide-react';

const Shop = () => {
  const product = {
    id: 1,
    name: "Edible Cups Brought to you by MagoMeal, Enjoy your drink, Eat your cup, save the Planet",
    features: [] // Keep Key Features empty
  };

  return (
    <div 
      className="shop-page" 
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "flex-start",  // push content down
        minHeight: "100vh", 
        textAlign: "center",
        paddingTop: "120px" // adjust distance from the top menu
      }}
    >
      {/* Single Product Section */}
      <section className="shop-product-section">
        <div className="container">
          <div className="single-product-container">
            <div 
              className="product-display" 
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              {/* Product Icon/Visual */}
              <div className="product-visual" style={{ marginBottom: "20px" }}>
                <div className="product-icon-container">
                  <Package size={120} style={{ color: 'var(--brand-dark)' }} />
                </div>
              </div>

              {/* Product Details */}
              <div className="product-details" style={{ maxWidth: "600px" }}>
                <h2 className="product-title">{product.name}</h2>

                <div className="product-features" style={{ marginTop: "20px" }}>
                  {/* <h4 className="heading-3">Key Features:</h4> */}
                  <ul className="features-list" style={{ listStyle: "none", padding: 0 }}>
                    {product.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-checkmark">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div 
                  className="product-actions" 
                  style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}
                >
                  <div className="quantity-selector">
                    <label htmlFor="quantity" className="quantity-label">Quantity:</label>
                    <select id="quantity" className="quantity-select">
                      <option value="1">1 Pack (50 cups)</option>
                      <option value="2">2 Packs (100 cups)</option>
                      <option value="5">5 Packs (250 cups)</option>
                      <option value="10">10 Packs (500 cups)</option>
                    </select>
                  </div>

                  <button className="btn-primary add-to-cart-btn">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>

                  <button className="btn-secondary contact-btn">
                    Contact for Bulk Orders
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
