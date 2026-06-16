import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <style>
        {`
          .custom-navbar {
            background: rgba(17, 24, 39, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            position: sticky;
            top: 0;
            z-index: 1000;
            padding: 12px 0;
          }

          .navbar-brand-custom {
            font-size: 1.8rem;
            font-weight: 800;
            text-decoration: none;
            background: linear-gradient(
              135deg,
              #dc3545,
              #ff6b6b
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .nav-link-custom {
            color: #ffffff !important;
            font-weight: 500;
            margin: 0 8px;
            padding: 8px 18px !important;
            border-radius: 30px;
            transition: all 0.3s ease;
          }

          .nav-link-custom:hover {
            background: rgba(220, 53, 69, 0.15);
            color: #ff6b6b !important;
            transform: translateY(-2px);
          }

          .active-link {
            background: linear-gradient(
              135deg,
              #dc3545,
              #ff6b6b
            );
            color: white !important;
            box-shadow: 0 4px 15px rgba(220,53,69,0.35);
          }

          .navbar-toggler {
            border: none;
          }

          .navbar-toggler:focus {
            box-shadow: none;
          }

          .shop-btn {
            background: linear-gradient(
              135deg,
              #dc3545,
              #ff6b6b
            );
            color: white;
            border: none;
            padding: 10px 22px;
            border-radius: 30px;
            font-weight: 600;
            transition: 0.3s ease;
            text-decoration: none;
          }

          .shop-btn:hover {
            color: white;
            transform: translateY(-2px);
          }

          @media (max-width: 991px) {
            .navbar-nav {
              text-align: center;
              margin-top: 20px;
            }

            .nav-link-custom {
              margin: 8px 0;
            }

            .shop-btn {
              display: inline-block;
              margin-top: 15px;
            }
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container">
          {/* Brand */}
          <NavLink className="navbar-brand-custom" to="/">
            ⚽ Mumbai Jersey
          </NavLink>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link nav-link-custom active-link"
                      : "nav-link nav-link-custom"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link nav-link-custom active-link"
                      : "nav-link nav-link-custom"
                  }
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link nav-link-custom active-link"
                      : "nav-link nav-link-custom"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="d-flex">
              <NavLink to="/" className="shop-btn">
                Shop Jerseys
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;