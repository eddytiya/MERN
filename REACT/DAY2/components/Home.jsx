import React from "react";

const Home = () => {
  return (
    <>
      {/* Custom Styles */}
      <style>
        {`
          .hero-carousel img {
            height: 600px;
            object-fit: cover;
            filter: brightness(65%);
          }

          .carousel-caption {
            bottom: 25%;
          }

          .carousel-caption h1 {
            font-size: 3.5rem;
            font-weight: 700;
            text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
          }

          .carousel-caption p {
            font-size: 1.2rem;
          }

          .section-title {
            font-weight: 700;
            position: relative;
            display: inline-block;
          }

          .section-title::after {
            content: "";
            width: 60%;
            height: 4px;
            background: #dc3545;
            position: absolute;
            bottom: -10px;
            left: 20%;
            border-radius: 10px;
          }

          .service-card {
            border: none;
            overflow: hidden;
            border-radius: 20px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            transition: all 0.4s ease;
          }

          .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          }

          .service-card img {
            height: 260px;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .service-card:hover img {
            transform: scale(1.08);
          }

          .service-card .card-body {
            padding: 25px;
          }

          .custom-btn {
            background: linear-gradient(
              135deg,
              #dc3545,
              #ff6b6b
            );
            border: none;
            padding: 10px 22px;
            border-radius: 30px;
            font-weight: 600;
            transition: 0.3s;
          }

          .custom-btn:hover {
            transform: scale(1.05);
          }

          @media (max-width: 768px) {
            .hero-carousel img {
              height: 400px;
            }

            .carousel-caption h1 {
              font-size: 2rem;
            }

            .carousel-caption p {
              font-size: 1rem;
            }
          }
        `}
      </style>

      {/* Hero Carousel */}
      <div className="container-fluid p-0">
        <div
          id="carouselId"
          className="carousel slide hero-carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide-to="0"
              className="active"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide-to="1"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <img
                src="https://media.gettyimages.com/id/182790712/photo/soccer-jerseys.jpg?s=612x612&w=0&k=20&c=rQVy-ENttTIJhzPeRA4Oq0Ds9tkmOen9q_YIsNlSXdE="
                className="d-block w-100"
                alt="First Slide"
              />

              <div className="carousel-caption">
                <h1>Premium Football Jerseys</h1>
                <p>
                  Discover the latest collections from top clubs around the
                  world.
                </p>
                <button className="btn btn-danger btn-lg px-4">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <img
                src="https://media.gettyimages.com/id/2276645038/photo/shanghai-china-jerseys-are-on-display-at-a-store-on-may-16-2026-in-shanghai-china-the-fifa.jpg?s=612x612&w=0&k=20&c=WP3BHWjQPgiUOnrZWwbCnOLG64amtfC9lN2OPPLd8kU="
                className="d-block w-100"
                alt="Second Slide"
              />

              <div className="carousel-caption">
                <h1>Official Team Collections</h1>
                <p>
                  Wear your favorite team's colors with pride and passion.
                </p>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <img
                src="https://media.gettyimages.com/id/2279472761/photo/jerseys-of-german-french-argentinian-and-brazilian-national-football-teams-for-the-fifa-2026.jpg?s=612x612&w=0&k=20&c=-tjcJMbcqtzpYJfOKDtGiELjMPGEp6d3nmBaa3Jjuww="
                className="d-block w-100"
                alt="Third Slide"
              />

              <div className="carousel-caption">
                <h1>World Cup 2026 Collection</h1>
                <p>
                  Explore exclusive national team jerseys and merchandise.
                </p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="section-title text-danger">Our Services</h1>

            <p className="text-muted mt-4">
              Premium football jerseys from the world's biggest clubs and
              national teams.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="card service-card h-100">
                <img
                  src="https://media.gettyimages.com/id/2226009266/photo/fc-barcelona-logo-is-seen-on-a-football-jersey-in-this-illustration-photo-taken-in-a-store-in.jpg?s=612x612&w=0&k=20&c=M2DMgJOim8TyMXv-g0mz82ULveAjV2yZgip62Z7s61Q="
                  alt="Barcelona"
                />

                <div className="card-body text-center">
                  <h4 className="fw-bold">Barcelona Jerseys</h4>

                  <p className="text-muted">
                    Explore authentic Barcelona kits with premium quality and
                    stunning designs.
                  </p>

                  <button className="btn custom-btn text-white">
                    Show More
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="card service-card h-100">
                <img
                  src="https://media.gettyimages.com/id/2239409850/photo/fc-bayern-munich-logo-is-seen-on-a-jersey-at-the-store-in-krakow-poland-on-october-8-2025.jpg?s=612x612&w=0&k=20&c=g44fQBZWTfhh1-mO6nLG1aMMqAf3wV08LfL3By6hSd4="
                  alt="Bayern"
                />

                <div className="card-body text-center">
                  <h4 className="fw-bold">Bayern Munich Kits</h4>

                  <p className="text-muted">
                    Official Bayern Munich collections crafted for true football
                    fans.
                  </p>

                  <button className="btn custom-btn text-white">
                    Show More
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6 mx-md-auto">
              <div className="card service-card h-100">
                <img
                  src="https://media.gettyimages.com/id/1800366974/photo/london-england-a-detailed-view-of-the-chelsea-logo-outside-the-stadium-prior-to-the-barclays.jpg?s=612x612&w=0&k=20&c=gOqhOX4zVtnPQ86kU0yZQ7ILRr5-ohOKsHmqZberQ4w="
                  alt="Chelsea"
                />

                <div className="card-body text-center">
                  <h4 className="fw-bold">Chelsea Merchandise</h4>

                  <p className="text-muted">
                    Premium Chelsea apparel and jerseys designed for every fan.
                  </p>

                  <button className="btn custom-btn text-white">
                    Show More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;