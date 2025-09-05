import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <header className="network-header">
      <div className="nav-wrapper">
        <Link to="/" className="network-logo">
          <img 
            src="https://customer-assets.emergentagent.com/job_1599ee33-608a-4f29-a948-5fbb4b56f909/artifacts/scyoowtk_MagoMeal_Logo.jpeg" 
            alt="MagoMeal Logo" 
            style={{ height: '40px', width: 'auto' }}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="network-nav desktop-nav">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`network-nav-link ${isActive(item.href) ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`mobile-nav-link ${isActive(item.href) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;