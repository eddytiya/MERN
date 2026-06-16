import React from "react";

const About = () => {
  return (
    <>
      <style>
        {`
          .about-hero {
            padding: 80px 0 50px;
            text-align: center;
          }

          .about-title {
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, #dc3545, #ff6b6b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .about-subtitle {
            color: #6c757d;
            max-width: 700px;
            margin: auto;
            font-size: 1.1rem;
          }

          .about-card {
            background: #fff;
            border-radius: 25px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            transition: all 0.4s ease;
            padding: 20px;
          }

          .about-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }

          .about-img {
            width: 100%;
            height: 320px;
            object-fit: cover;
            border-radius: 20px;
            transition: transform 0.5s ease;
          }

          .about-card:hover .about-img {
            transform: scale(1.05);
          }

          .about-text {
            font-size: 1.05rem;
            color: #555;
            line-height: 1.9;
          }

          .video-section {
            background: linear-gradient(
              135deg,
              #f8f9fa,
              #ffffff
            );
            border-radius: 30px;
            padding: 40px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          }

          .video-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 25px;
            color: #dc3545;
          }

          .video-wrapper {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          }

          .video-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
          }

          @media (max-width: 768px) {
            .about-title {
              font-size: 2.2rem;
            }

            .about-img {
              height: 250px;
            }

            .about-text {
              text-align: center;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">About Us</h1>

          <p className="about-subtitle mt-3">
            Passionate about football, dedicated to delivering premium jerseys,
            merchandise, and unforgettable fan experiences.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <div className="container my-5">
        <div className="about-card">
          <div className="row align-items-center g-4">
            <div className="col-lg-4">
              <img
                src="https://media.gettyimages.com/id/1438147452/photo/shanghai-china-jerseys-of-argentina-national-football-team-and-germany-national-football-team.jpg?s=612x612&w=0&k=20&c=Ufanez-i66CDQMPZIXUxXrFHs2M1csTv8nO8VMirZXM="
                className="about-img"
                alt="Football Jerseys"
              />
            </div>

            <div className="col-lg-8">
              <p className="about-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur corporis unde doloremque, odio natus ipsam placeat
                enim dolorum deleniti sit nisi eos sapiente debitis. Excepturi
                possimus ipsam voluptatem dolorem, tempora provident cupiditate
                esse earum dolores mollitia ullam laborum expedita dignissimos
                velit illum consequuntur. Quidem aut voluptatibus et aliquam
                corporis rerum.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container my-5">
        <div className="about-card">
          <div className="row align-items-center g-4">
            <div className="col-lg-8 order-2 order-lg-1">
              <p className="about-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut
                aperiam saepe pariatur. Magnam qui quos aperiam libero nemo ab
                explicabo saepe, corrupti cumque blanditiis laudantium sequi
                tempore optio rem nesciunt, odio magni quam voluptate
                perferendis dolore autem sed. Molestiae itaque nostrum suscipit
                qui impedit recusandae minus quidem nulla unde.
              </p>
            </div>

            <div className="col-lg-4 order-1 order-lg-2">
              <img
                src="https://media.gettyimages.com/id/1244919990/photo/fans-seen-shopping-jerseys-and-flags-of-their-favorite-national-teams-ahead-of-fifa-world-cup.jpg?s=612x612&w=0&k=20&c=Haod_XvtpG3wcwDDlb4sSBYorbLLhibf7qTUiR69yLU="
                className="about-img"
                alt="Football Fans"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="container my-5">
        <div className="video-section text-center">
          <h2 className="video-title">Watch Our Story</h2>

          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/dC8ZVopOC8c?si=h6jhZ-rVdOwrYXAj"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;