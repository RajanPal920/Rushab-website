import React from 'react';
import '../../styles/footer.css';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            
            <div className="footer-widget about-widget">
              <h3 className="footer-brand">RISHABH METAL INDUSTRIES</h3>
              <p className="footer-about">
                A globally recognized premium supplier of industrial metal products. We engineer excellence and deliver reliability across diverse sectors worldwide.
              </p>
              <div className="footer-socials">
                <a href="#" className="social-icon"><FaLinkedinIn /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
                <a href="#" className="social-icon"><FaFacebookF /></a>
              </div>
            </div>
            
            <div className="footer-widget links-widget">
              <h4 className="widget-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Products</a></li>
                <li><a href="#">Quality Assurance</a></li>
                <li><a href="#">Industries Served</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="footer-widget products-widget">
              <h4 className="widget-title">Products</h4>
              <ul className="footer-links">
                <li><a href="#">Stainless Steel Pipes</a></li>
                <li><a href="#">Carbon Steel Tubes</a></li>
                <li><a href="#">Alloy Steel Plates</a></li>
                <li><a href="#">Industrial Flanges</a></li>
                <li><a href="#">Pipe Fittings</a></li>
              </ul>
            </div>
            
            <div className="footer-widget contact-widget">
              <h4 className="widget-title">Contact Info</h4>
              <ul className="contact-list">
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>123 Industrial Estate, Mumbai, Maharashtra 400004, India</span>
                </li>
                <li>
                  <FaPhoneAlt className="contact-icon" />
                  <span>+91 98765 43210</span>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <span>info@rishabhmetals.com</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Rishabh Metal Industries. All Rights Reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
