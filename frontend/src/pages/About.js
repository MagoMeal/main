import React from 'react';
import { Leaf, Users, Target, Award } from 'lucide-react';
import membername from 'src/assets/benamor.jpg';

const About = () => {
  const values = [
    {
      icon: <Leaf size={48} />,
      title: "Sustainability First",
      description: "At Magomeal, every choice we make is guided by our mission to replace plastic with edible, zero-waste alternatives prioritizing both sustainability and a cleaner future for our planet."
    },
    {
      icon: <Users size={48} />,
      title: "Community Focused",
      description: "We believe in creating strong bonds with our customers, partners, and communities across the Benelux by sharing sustainable solutions that inspire positive change."
    },
    {
      icon: <Target size={48} />,
      title: "Innovation Driven",
      description: "Innovating edible cups and packaging to change how the world enjoys food without the waste."
    },
    {
      icon: <Award size={48} />,
      title: "Quality Assured",
      description: "Commitment to excellence in every product we deliver to our valued customers."
    }
  ];

  const team = [
    {
      name: "Ben Amor",
      role: "Founder",
      description: "Engineer"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="display-medium">About MagoMeal</h1>
            <p className="body-large">
              We're on a mission to revolutionize the food packaging industry with sustainable, 
              edible solutions that protect both your products and our planet.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="heading-1">Our Story</h2>
              <p className="body-medium">
                MagoMeal was born from a bold idea: packaging that doesn't just protect food but becomes part of the meal itself.
              </p>
              <p className="body-medium">
                Today, we proudly deliver innovative edible packaging solutions that reflect our dedication to sustainability without compromising on quality or practicality. From restaurants and cafés to food businesses across the globe, our products redefine the way food is served and enjoyed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Our Core Values</h2>
            <p className="body-large">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="network-grid">
            {values.map((value, index) => (
              <div key={index} className="network-card hover-lift">
                <div className="value-icon" style={{ color: 'var(--brand-dark)', marginBottom: 'var(--spacing-small)' }}>
                  {value.icon}
                </div>
                <h3 className="network-card-title">{value.title}</h3>
                <p className="network-card-content">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Meet Our Team</h2>
            <p className="body-large">
              Dedicated to bringing sustainable edible products to the Benelux market
            </p>
          </div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card network-card">
                <div className="team-avatar">
                  <img 
                    src={membername}
                    alt={member.name}
                    className="team-photo"
                  />
                </div>
                <h3 className="heading-3">{member.name}</h3>
                <p className="body-medium team-role">{member.role}</p>
                <p className="body-small">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2 className="heading-1">Our Mission</h2>
            <p className="body-large">
              At Magomeal, our mission is to change food packaging with smart, edible, and eco-friendly cups. We want to cut waste, give great quality, and make packaging that is good for people and the planet.
            </p>
            <div className="mission-stats">
              <div className="mission-stat">
                <h3 className="display-small">0</h3>
                <p className="body-medium">Waste Goal</p>
              </div>
              <div className="mission-stat">
                <h3 className="display-small">100%</h3>
                <p className="body-medium">100% Edible</p>
              </div>
              <div className="mission-stat">
                <h3 className="display-small">∞</h3>
                <p className="body-medium">Positive Impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;