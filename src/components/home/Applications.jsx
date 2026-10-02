import React from 'react';
import '../../styles/applications.css';

const applications = [
  {
    id: 1,
    title: "Oil & Gas Industry",
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Chemical Plants",
    image: "https://images.unsplash.com/photo-1614271836067-8971f11c7fae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Power Generation",
    image: "https://images.unsplash.com/photo-1542336391-ae2936d8efe4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Marine & Offshore",
    image: "https://images.unsplash.com/photo-1551699908-01e74f172ea7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

export default function Applications() {
  return (
    <section className="applications-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">INDUSTRIAL APPLICATIONS</h2>
          <div className="section-accent-line"></div>
        </div>
        
        <div className="applications-grid">
          {applications.map(app => (
            <div className="app-card" key={app.id}>
              <div className="app-image-container">
                <img src={app.image} alt={app.title} className="app-image" />
                <div className="app-overlay"></div>
              </div>
              <div className="app-content">
                <h3 className="app-title">{app.title}</h3>
                <div className="app-accent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
