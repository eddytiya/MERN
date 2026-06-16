import React from "react";

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer {
            background: linear-gradient(135deg, #111827, #1f2937);
            color: white;
            padding-top: 60px;
          }

          .footer-logo {
            font-size: 2rem;
            font-weight: 800;
            color: #dc3545;
          }

          .footer-text {
            color: #d1d5db;
            line-height: 1.8;
          }

          .footer-heading {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: white;
          }

          .footer-links {
            list-style: none;
            padding: 0;
          }

          .footer-links li {
            margin-bottom: 12px;
          }

          .footer-links a {
            text-decoration: none;
            color: #d1d5db;
            transition: all 0.3s ease;
          }

          .footer-links a:hover {
            color: #dc3545;
            padding-left: 5px;
          }

          .social-icons {
            display: flex;
            gap: 15px;
            margin-top: 20px;
          }

          .social-icons a {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: rgba(255,255,255,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 1.1rem;
          }

          .social-icons a:hover {
            background: #dc3545;
            transform: translateY(-5px);
          }

          .footer-bottom {
            border-top: 1px solid rgba(255,255,255,0.1);
            margin-top: 40px;
            padding: 20px 0;
            text-align: center;
            color: #9ca3af;
          }

          .contact-info p {
            margin-bottom: 12px;
            color: #d1d5db;
          }

          @media (max-width: 768px) {
            .footer {
              text-align: center;
            }

            .social-icons {
              justify-content: center;
            }
          }
        `}
      </style>

      <footer className="footer">
        <div className="container">
          <div className="row g-5">
            {/* Company Info */}
            <div className="col-lg-4">
              <h2 className="footer-logo">Mumbai Jersey</h2>

              <p className="footer-text mt-3">
                Your trusted destination for premium football jerseys,
                club merchandise, and national team collections.
                Bringing football passion to every fan.
              </p>

              <div className="social-icons">
                <a href="/">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="/">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="/">
                  <i className="bi bi-twitter-x"></i>
                </a>

                <a href="/">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4">
              <h5 className="footer-heading">Quick Links</h5>

              <ul className="footer-links">
                <li>
                  <a href="/">Home</a>
                </li>

                <li>
                  <a href="/about">About Us</a>
                </li>

                <li>
                  <a href="/contact">Contact</a>
                </li>

                <li>
                  <a href="/">Latest Jerseys</a>
                </li>

                <li>
                  <a href="/">Shop Now</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-lg-4">
              <h5 className="footer-heading">Contact Info</h5>

              <div className="contact-info">
                <p>
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  Goregaon, Mumbai
                </p>

                <p>
                  <i className="bi bi-telephone-fill me-2"></i>
                  +91 891451308
                </p>

                <p>
                  <i className="bi bi-envelope-fill me-2"></i>
                  support@mumbaijersey.com
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            © {new Date().getFullYear()} Mumbai Jersey. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;