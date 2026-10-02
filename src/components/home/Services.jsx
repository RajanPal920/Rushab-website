import React from 'react';
import '../../styles/services.css';

const services = [
  {
    id: 1,
    title: "Precision Cutting",
    description: "Custom length cutting with high precision to meet exact project specifications.",
    icon: "✂️"
  },
  {
    id: 2,
    title: "Custom Fabrication",
    description: "Tailored fabrication services for specialized industrial components.",
    icon: "🛠️"
  },
  {
    id: 3,
    title: "Quality Testing",
    description: "Rigorous material testing ensuring compliance with international standards.",
    icon: "🔬"
  },
  {
    id: 4,
    title: "Global Logistics",
    description: "Efficient packaging and worldwide shipping with secure handling.",
    icon: "🚢"
  }
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">VALUE ADDED SERVICES</h2>
          <div className="section-accent-line"></div>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
