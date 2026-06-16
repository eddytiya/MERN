import React from "react";

const Contact = () => {
  return (
    <>
      <style>
        {`
          .contact-hero {
            padding: 80px 0 40px;
            text-align: center;
          }

          .contact-title {
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, #dc3545, #ff6b6b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .contact-subtitle {
            color: #6c757d;
            max-width: 700px;
            margin: auto;
            font-size: 1.1rem;
          }

          .info-card {
            background: white;
            border-radius: 25px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            transition: 0.4s ease;
          }

          .info-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          }

          .custom-table {
            overflow: hidden;
            border-radius: 15px;
            margin-bottom: 0;
          }

          .custom-table td {
            padding: 15px;
            font-weight: 500;
            vertical-align: middle;
          }

          .form-card {
            background: white;
            border-radius: 25px;
            padding: 35px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          }

          .form-control {
            border-radius: 12px;
            border: 1px solid #dee2e6;
          }

          .form-control:focus {
            box-shadow: 0 0 15px rgba(220,53,69,0.25);
            border-color: #dc3545;
          }

          .submit-btn {
            background: linear-gradient(
              135deg,
              #dc3545,
              #ff6b6b
            );
            border: none;
            padding: 12px 35px;
            border-radius: 50px;
            font-weight: 600;
            color: white;
            transition: 0.3s ease;
          }

          .submit-btn:hover {
            transform: translateY(-3px);
            color: white;
          }

          .section-heading {
            font-size: 2rem;
            font-weight: 700;
            color: #212529;
            margin-bottom: 25px;
          }

          .map-card {
            border-radius: 25px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }

          .map-card iframe {
            width: 100%;
            height: 450px;
            border: none;
          }

          @media (max-width: 768px) {
            .contact-title {
              font-size: 2.2rem;
            }

            .section-heading {
              font-size: 1.7rem;
            }

            .form-card,
            .info-card {
              padding: 20px;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Contact Us</h1>

          <p className="contact-subtitle mt-3">
            Have questions about jerseys, orders, or partnerships? We're here
            to help you connect with your favorite football merchandise.
          </p>
        </div>
      </section>

      {/* Company Information */}
      <div className="container mb-5">
        <div className="info-card mx-auto" style={{ maxWidth: "800px" }}>
          <h2 className="section-heading text-center">
            Company Information
          </h2>

          <table className="table table-bordered custom-table">
            <tbody>
              <tr className="table-danger">
                <td>
                  <strong>Company Name</strong>
                </td>
                <td>Mumbai Jersey</td>
              </tr>

              <tr className="table-warning">
                <td>
                  <strong>Phone</strong>
                </td>
                <td>891451308</td>
              </tr>

              <tr className="table-success">
                <td>
                  <strong>Address</strong>
                </td>
                <td>Goregaon, Mumbai</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Query Form */}
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="form-card">
              <h2 className="section-heading text-center">
                Send Us A Query
              </h2>

              <form>
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>

                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Phone"
                  />
                  <label htmlFor="phone">Phone Number</label>
                </div>

                <div className="form-floating mb-4">
                  <textarea
                    className="form-control"
                    placeholder="Query"
                    id="query"
                    style={{ height: "140px" }}
                  ></textarea>

                  <label htmlFor="query">Your Query</label>
                </div>

                <div className="text-center">
                  <button type="submit" className="submit-btn">
                    Submit Query
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="container mb-5">
        <h2 className="section-heading text-center mb-4">
          Visit Our Location
        </h2>

        <div className="map-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.188563402814!2d72.85147417374101!3d19.23061214710343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b02a94fea373%3A0xb6acbbcdd3cf39ce!2sSDAC%20Infotech!5e0!3m2!1sen!2sin!4v1745574606843!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;