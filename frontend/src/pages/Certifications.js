import React from 'react';
import { FileText, Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "FSSC 22000",
      description: "Food Safety System Certification 22000 - Ensuring the highest standards of food safety management",
      category: "Food Safety",
      icon: <Award size={32} />,
      pdfUrl: "https://customer-assets.emergentagent.com/job_build-magomeal/artifacts/imk2gn8s_FSSC_22000_v.6_Cupffee.pdf",
      fileName: "FSSC_22000_v.6_Cupffee.pdf"
    },
    {
      name: "Vegan Certification",
      description: "Certified 100% vegan product - No animal products or by-products used",
      category: "Dietary",
      icon: <CheckCircle size={32} />,
      pdfUrl: "https://customer-assets.emergentagent.com/job_build-magomeal/artifacts/hal4voqc_Vegan_Certificate.pdf",
      fileName: "Vegan_Certificate.pdf"
    },
    {
      name: "Halal Certification",
      description: "Halal certified product meeting Islamic dietary requirements",
      category: "Dietary",
      icon: <CheckCircle size={32} />,
      pdfUrl: "https://customer-assets.emergentagent.com/job_build-magomeal/artifacts/5jalvbp7_Halal_Certificate.pdf",
      fileName: "Halal_Certificate.pdf"
    },
    {
      name: "FDA Approval",
      description: "US Food and Drug Administration approved for food contact and consumption",
      category: "Regulatory",
      icon: <Award size={32} />,
      pdfUrl: "https://customer-assets.emergentagent.com/job_build-magomeal/artifacts/335vil46_FDA_2026.pdf",
      fileName: "FDA_2026.pdf"
    }
  ];

  const specifications = [
    {
      name: "220ml Cupffee Cup",
      description: "Complete product specification for our 220ml edible coffee cup",
      volume: "220ml",
      icon: <FileText size={32} />,
      pdfUrl: "https://customer-assets.emergentagent.com/job_build-magomeal/artifacts/0hdy6fl0_Cupffee_220_product_specification_2024.pdf",
      fileName: "Cupffee_220_product_specification_2024.pdf"
    },
    {
      name: "110ml Cupffee Cup",
      description: "Complete product specification for our 110ml edible coffee cup",
      volume: "110ml",
      icon: <FileText size={32} />,
      pdfUrl: "https://customer-assets.emergentagent.com/job_build-magomeal/artifacts/5ao2klyu_Cupffee_110_product%20specification_2024.pdf",
      fileName: "Cupffee_110_product_specification_2024.pdf"
    }
  ];

  return (
    <div className="certifications-page">
      {/* Hero Section */}
      <section className="certifications-hero">
        <div className="container">
          <h1 className="display-medium">Cup Certifications & Specifications</h1>
          <p className="body-large">
            Discover our comprehensive certifications and detailed product specifications. 
            All documentation available for download to ensure transparency and compliance.
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Certifications</h2>
            <p className="body-large">
              Our products meet the highest industry standards with internationally recognized certifications.
            </p>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card hover-lift">
                <div className="certification-header">
                  <div className="certification-icon" style={{ color: 'var(--brand-dark)' }}>
                    {cert.icon}
                  </div>
                  <span className="certification-category">{cert.category}</span>
                </div>
                
                <h3 className="certification-name">{cert.name}</h3>
                <p className="certification-description">{cert.description}</p>
                
                <div className="certification-actions">
                  <button
                    onClick={() => window.open(cert.pdfUrl, '_blank')}
                    className="btn-primary view-btn"
                  >
                    <FileText size={18} /> View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="specifications-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Product Specifications</h2>
            <p className="body-large">
              Detailed technical specifications for our edible cup products.
            </p>
          </div>

          <div className="specifications-grid">
            {specifications.map((spec, index) => (
              <div key={index} className="specification-card hover-lift">
                <div className="specification-header">
                  <div className="specification-icon" style={{ color: 'var(--brand-dark)' }}>
                    {spec.icon}
                  </div>
                  <span className="specification-volume">{spec.volume}</span>
                </div>
                
                <h3 className="specification-name">{spec.name}</h3>
                <p className="specification-description">{spec.description}</p>
                
                <div className="specification-actions">
                  <button
                    onClick={() => window.open(spec.pdfUrl, '_blank')}
                    className="btn-primary view-btn"
                  >
                    <FileText size={18} /> View Specifications
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="certifications-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-1">Need More Information?</h2>
            <p className="body-large">
              Have questions about our certifications or need additional documentation? 
              Our team is here to help with any technical or compliance inquiries.
            </p>
            <div className="cta-actions">
              <a
                href="mailto:info@magomeal.nl?subject=Certification%20Inquiry"
                className="btn-primary"
                style={{ display: 'inline-block' }}
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;