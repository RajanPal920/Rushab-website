import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from '../components/Button';
import { siteConfig } from '../data/siteConfig';
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiCheckCircle
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import PageHero from '../components/common/PageHero';
import './Contact.css';

export default function Contact() {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState(() => {
    const matParam = searchParams.get('material');
    const indParam = searchParams.get('industry');
    const calcWeight = searchParams.get('calcWeight');
    const calcMat = searchParams.get('calcMaterial');

    let initialMsg = '';
    if (matParam) {
      initialMsg += `Inquiry regarding material supply for: ${matParam}.\n`;
    }
    if (indParam) {
      initialMsg += `Inquiry for industrial project in: ${indParam} sector.\n`;
    }
    if (calcWeight && calcMat) {
      initialMsg += `Estimated specification calculation: ${calcWeight} of ${calcMat}.\n`;
    }

    return {
      name: '',
      email: '',
      phone: '',
      company: '',
      productType: 'Pipes & Tubes',
      material: 'Stainless Steel',
      quantity: '',
      message: initialMsg
    };
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <PageHero
        bgImage="/images/herosliderimg/contact.jpg"
        eyebrow="COMMERCIAL & TECHNICAL DESK"
        titleWhite1="CONNECT WITH"
        titleHighlight="OUR TECHNICAL TEAM."
        titleWhite2="2-4 HR TURNAROUND."
        description="Connect directly with our sales engineers in Mumbai for standard inventory stock inquiries, custom manufacturing, or international export shipments."
        primaryBtn={{ text: "DOWNLOAD CATALOGUE ↗", link: "/catalogue" }}
        secondaryBtn={{ text: "VIEW PRODUCTS >", link: "/products" }}
        pillText="FAST 2-4 HR RFQ TURNAROUND // JNPT PORT PROXIMITY"
      />

      {/* Main Contact Grid */}
      <section className="section-py bg-light-steel">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left: Contact Info & Address Cards */}
            <div className="contact-info-column">
              <div className="contact-info-header">
                <span className="cih-tag">HEADQUARTERS & STOCKYARD DESK</span>
                <h2 className="cih-title">{siteConfig.companyName}</h2>
                <p className="cih-desc">
                  An ISO 9001:2015 certified exporter, importer, supplier, and stockist. Strategically situated in Mumbai's metal hub with immediate highway connectivity to JNPT Sea Port and Air Cargo.
                </p>
              </div>

              <div className="contact-cards-stack">
                {/* Office Location Card */}
                <div className="c-info-card">
                  <div className="c-icon-circle"><FiMapPin /></div>
                  <div className="c-info-text">
                    <strong>Corporate & Sales Office</strong>
                    <p>
                      {siteConfig.address.office},<br />
                      {siteConfig.address.street},<br />
                      {siteConfig.address.city}, {siteConfig.address.country}
                    </p>
                  </div>
                </div>

                {/* Telephone Numbers */}
                <div className="c-info-card">
                  <div className="c-icon-circle"><FiPhone /></div>
                  <div className="c-info-text">
                    <strong>Direct Sales Telephones</strong>
                    <p>
                      Primary: <a href={siteConfig.phoneHref}>{siteConfig.phone}</a><br />
                      Secondary: <a href={siteConfig.phoneHrefSecondary}>{siteConfig.phoneSecondary}</a>
                    </p>
                  </div>
                </div>

                {/* Email Inquiries */}
                <div className="c-info-card">
                  <div className="c-icon-circle"><FiMail /></div>
                  <div className="c-info-text">
                    <strong>Commercial Inquiries & BOM Submissions</strong>
                    <p>
                      Primary: <a href={siteConfig.emailHref}>{siteConfig.email}</a><br />
                      Secondary: <a href={siteConfig.emailHrefSecondary}>{siteConfig.emailSecondary}</a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp Quick Chat */}
                <div className="c-info-card wa-highlight">
                  <div className="c-icon-circle wa"><FaWhatsapp /></div>
                  <div className="c-info-text">
                    <strong>Instant WhatsApp Quotation</strong>
                    <p>
                      Chat with technical dispatch for rapid inventory check and price quotation.
                    </p>
                    <a
                      href={siteConfig.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wa-direct-link"
                    >
                      Open WhatsApp Chat &rarr;
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="business-hours-card">
                <FiClock className="bh-icon" />
                <div>
                  <strong>Operational Dispatch Hours:</strong>
                  <span>Monday – Saturday: 9:30 AM – 7:30 PM (IST)</span>
                </div>
              </div>
            </div>

            {/* Right: RFQ Quotation Form */}
            <div className="contact-form-column">
              <div className="form-wrapper-box">
                <div className="form-box-header">
                  <span className="form-box-tag">ONLINE INQUIRY DESK</span>
                  <h3 className="form-box-title">Submit Request For Quotation (RFQ)</h3>
                  <p className="form-box-subtitle">
                    Fill out the technical requirements below. We provide formal quotations with MTC specifications within 24 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="form-success-card">
                    <FiCheckCircle className="fsc-icon" />
                    <h3>Inquiry Successfully Submitted</h3>
                    <p>
                      Thank you for contacting Rushab Metal Industries. Your RFQ has been logged and forwarded to our sales team in Mumbai. We will reach out promptly.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="primary">
                      Send Another RFQ
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="actual-contact-form">
                    <div className="contact-form-row">
                      <div className="contact-field">
                        <label htmlFor="name">Full Name / Contact Person *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="contact-field">
                        <label htmlFor="company">Company / Enterprise Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          placeholder="Company Ltd"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="contact-form-row">
                      <div className="contact-field">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="contact-field">
                        <label htmlFor="phone">Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="+91 99698 84597"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="contact-form-row">
                      <div className="contact-field">
                        <label htmlFor="productType">Primary Product Category</label>
                        <select
                          id="productType"
                          name="productType"
                          value={formData.productType}
                          onChange={handleChange}
                        >
                          <option value="Pipes & Tubes">Pipes & Tubes</option>
                          <option value="Butt Weld Fittings">Butt Weld Fittings</option>
                          <option value="Forged Fittings">Forged Fittings (3000# / 6000# / 9000#)</option>
                          <option value="Flanges">Flanges (WNRF, SORF, Blind)</option>
                          <option value="Fasteners">Fasteners & Stud Bolts</option>
                          <option value="Sheets & Plates">Sheets, Plates & Coils</option>
                          <option value="Rods & Bars">Rods, Bright Bars & Flats</option>
                          <option value="Valves">Industrial Valves</option>
                          <option value="Wire Mesh & Screens">Wire Mesh & Screens</option>
                          <option value="Lifting Materials">Lifting Materials</option>
                        </select>
                      </div>

                      <div className="contact-field">
                        <label htmlFor="material">Material Metallurgy</label>
                        <select
                          id="material"
                          name="material"
                          value={formData.material}
                          onChange={handleChange}
                        >
                          <option value="Stainless Steel">Stainless Steel (304 / 316 / 317 / 321 / 904L)</option>
                          <option value="Carbon Steel">Carbon Steel (A106 / A53 / API 5L)</option>
                          <option value="Alloy Steel">Alloy Steel (P11 / P22 / P91)</option>
                          <option value="Duplex / Super Duplex">Duplex & Super Duplex (2205 / 2507)</option>
                          <option value="Monel / Inconel / Hastelloy">Nickel Alloys (Inconel / Monel / Hastelloy)</option>
                          <option value="Titanium">Titanium & Titanium Alloys</option>
                          <option value="Copper & Brass">Copper, Brass & Cu-Ni</option>
                          <option value="Aluminium">Aluminium & Alloys</option>
                        </select>
                      </div>
                    </div>

                    <div className="contact-field">
                      <label htmlFor="quantity">Required Sizes, Schedules & Quantity</label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        placeholder={'e.g. 2" NB SCH 40S - 120 Pcs / 10mm Plate - 5 Sheets'}
                        value={formData.quantity}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="contact-field">
                      <label htmlFor="message">Bill of Materials / Detailed Specifications</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Detail ASTM/ASME standards, specific testing criteria (MTC, PMI, Hydro, Radiography), Third-Party inspection requirements, and delivery location..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="form-submit-footer">
                      <Button type="submit" variant="primary" size="lg" icon={<FiSend />}>
                        Submit RFQ to Sales Desk
                      </Button>
                      <p className="privacy-promise">
                        Strict confidentiality: Your contact details and project specifications are used solely for generating your formal commercial quotation.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Logistics Note */}
      <section className="section-py-sm bg-white">
        <div className="container">
          <div className="location-logistics-box">
            <div className="llb-left">
              <h3>Strategic Mumbai Hub</h3>
              <p>
                Our commercial office in 3rd Khetwadi Cross Lane is located in Mumbai's historic industrial metal trading epicenter, allowing instantaneous access to local stockyards, calibration labs, and Nhava Sheva (JNPT) sea terminal.
              </p>
            </div>
            <div className="llb-right">
              <div className="llb-stat">
                <strong>ISO 9001:2015</strong>
                <span>Certified System</span>
              </div>
              <div className="llb-stat">
                <strong>Mumbai</strong>
                <span>Air & Sea Logistics</span>
              </div>
              <div className="llb-stat">
                <strong>EN 10204 3.1</strong>
                <span>Full Traceability</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
