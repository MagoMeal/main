import React from 'react';
import { Leaf, Users, Target, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Leaf size={48} />,
      title: "Sustainability First",
      description: "Every decision we make prioritizes environmental impact and long-term sustainability for our planet."
    },
    {
      icon: <Users size={48} />,
      title: "Community Focused",
      description: "We believe in building strong relationships with our customers, partners, and local communities."
    },
    {
      icon: <Target size={48} />,
      title: "Innovation Driven",
      description: "Continuously developing cutting-edge edible solutions to revolutionize the packaging industry."
    },
    {
      icon: <Award size={48} />,
      title: "Quality Assured",
      description: "Commitment to excellence in every product we deliver to our valued customers."
    }
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      description: "Environmental engineer with 15+ years experience in sustainable packaging solutions."
    },
    {
      name: "Maya Patel",
      role: "Head of Innovation",
      description: "Food scientist specializing in edible materials and edible packaging development."
    },
    {
      name: "Jordan Kim",
      role: "Operations Director",
      description: "Expert in sustainable business operations and supply chain management."
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
                Founded in 2020, MagoMeal emerged from a simple yet powerful vision: to create packaging 
                solutions that could be consumed along with the food they protect. Our founders, 
                frustrated by the environmental impact of traditional packaging, set out to develop 
                innovative edible materials that would change the industry forever.
              </p>
              <p className="body-medium">
                Today, we're proud to offer revolutionary edible packaging solutions that embody our 
                commitment to environmental stewardship while delivering exceptional quality and functionality. 
                Our products serve restaurants, cafes, and food businesses worldwide.
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
              Passionate experts dedicated to sustainable innovation
            </p>
          </div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card network-card">
                <div className="team-avatar">
                  <div className="avatar-placeholder">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
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
              To lead the transformation of the food packaging industry by providing innovative, 
              sustainable solutions that eliminate waste while delivering exceptional quality and functionality. 
              We're committed to creating a world where packaging enhances rather than harms our environment.
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