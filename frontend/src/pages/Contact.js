import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'packaging',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("company", formData.company);
    form.append("inquiryType", formData.inquiryType);
    form.append("message", formData.message);

    try {
      const response = await fetch("/send-mail.php", {
        method: "POST",
        body: form,
      });
      const result = await response.text();
      if (result === "success") {
       alert(`✅ Thank you, ${formData.name}! Your message has been sent.`);
        setFormData({
          name: '',
          email: '',
          company: '',
          inquiryType: 'packaging',
          message: ''
        });
      } else {
        alert("❌ Oops! Something went wrong, please try again.");
      }
    } catch (error) {
      alert("❌ Error sending message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: "info@magomeal.nl",
      subDetails: "We respond within 24 hours"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: "",
      subDetails: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: "'s-Hertogenbosch, The Netherlands",
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
      question: "Can I customize the packaging for my brand?",
      answer: "Absolutely! We offer custom printing, sizing, and even flavor options for our edible packaging. Contact us to discuss your specific branding needs."
    },
    {
      question: "What's the minimum order quantity?",
      answer: "No minimum order quantity :) "
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
            Ready to join the Edible packaging revolution? We'd love to hear from you!
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
                If you're interested in our Edible packaging solutions, we're here to help answer your questions.
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
                    <option value="packaging">Edible Products Inquiry</option>
                    <option value="bulk">Bulk Order Inquiry</option>
                    <option value="general">General Question to MagoMeal</option>
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

              <button type="submit" className="btn-primary form-submit" disabled={loading}>
                <Send size={20} />
                {loading ? 'Sending...' : 'Send Message'}
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
      <p className="cta-text">
        Discover the taste and innovation of our edible products. Book a demo now and let us bring a hands-on experience to your café, restaurant, or business.
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
