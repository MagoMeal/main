import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'packaging',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      inquiryType: 'packaging',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: "info@magomeal.com",
      subDetails: "We respond within 24 hours"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: "(555) 123-4567",
      subDetails: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: "123 Eco Street, Green City, GC 12345",
      subDetails: "By appointment only"
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: "Monday - Friday: 9AM - 6PM",
      subDetails: "Saturday: 10AM - 4PM"
    }
  ];

  const faqs = [
    {
      question: "What makes your packaging truly biodegradable?",
      answer: "Our packaging is made from 100% natural materials including seaweed extracts, plant proteins, and agricultural waste. They completely decompose within 90 days in composting conditions."
    },
    {
      question: "Can I customize the packaging for my brand?",
      answer: "Absolutely! We offer custom printing, sizing, and even flavor options for our edible packaging. Contact us to discuss your specific branding needs."
    },
    {
      question: "What's the minimum order quantity?",
      answer: "Our minimum order quantity varies by product type. Generally, it ranges from 500-1000 units. We also offer sample packs for testing."
    },
    {
      question: "How long does the packaging last before decomposing?",
      answer: "Our packaging is designed to maintain integrity during normal use and storage, then compost completely within 90 days in appropriate composting conditions."
    },
    {
      question: "Do you offer bulk pricing for large orders?",
      answer: "Yes! We provide competitive bulk pricing and special rates for large volume orders. Contact our sales team for custom pricing information."
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="display-medium">Get In Touch</h1>
          <p className="body-large">
            Ready to join the sustainable packaging revolution? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card network-card hover-lift">
                <div className="contact-icon" style={{ color: 'var(--brand-dark)' }}>
                  {info.icon}
                </div>
                <h3 className="heading-3">{info.title}</h3>
                <p className="body-medium" style={{ fontWeight: '600' }}>{info.details}</p>
                <p className="body-small">{info.subDetails}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-content">
            <div className="form-header">
              <h2 className="heading-1">Send Us a Message</h2>
              <p className="body-large">
                Whether you're interested in our packaging solutions or food truck services, 
                we're here to help answer your questions.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inquiryType" className="form-label">Inquiry Type *</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="packaging">Biodegradable Packaging Inquiry</option>
                    <option value="custom">Custom Packaging Solutions</option>
                    <option value="bulk">Bulk Order Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="form-textarea"
                  placeholder="Tell us about your project or ask us anything..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Frequently Asked Questions</h2>
            <p className="body-large">
              Quick answers to common questions about our products and services
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${openFAQ === index ? 'open' : ''}`}
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <MessageSquare size={20} />
                  <span className="body-medium">{faq.question}</span>
                  <div className="faq-icon">
                    {openFAQ === index ? '−' : '+'}
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="faq-answer">
                    <p className="body-medium">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Ready to Make a Change?</h2>
            <p className="body-large">
              Join hundreds of businesses already making a positive environmental impact 
              with our sustainable packaging solutions.
            </p>
            <div className="cta-actions">
              <button className="btn-primary">Request a Quote</button>
              <button className="btn-secondary">Schedule a Demo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;