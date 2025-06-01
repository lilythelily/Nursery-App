import { NavLink } from "react-router";
import rightArrowGreen from "/assets/icons/arrow-right-green.svg";
import logoWhite from "/assets/img/logo-white.svg";

function About() {
  return (
    <section className="about">
      <h2>About Us</h2>
      <div className="about-container">
        <div className="about01">
          <div className="about-logo-text">
            <img src={logoWhite} alt="logo" />
            <h3>
              Cultivating Wellness, <br></br>One Plant at at Time.
            </h3>
            <p className="about-text">
              Step into a world where nature thrives indoors at SERENE NURSERY,
              your sanctuary for organically grown indoor plants and cacti.
              Located in the serene countryside, we believe in cultivating not
              just plants, but a healthier, more vibrant living space for you.
            </p>
          </div>
        </div>
        <div className="about02"></div>
        <div className="about03"></div>
        <div className="about04"></div>
      </div>

      <NavLink to="/products">
        <button className="filled-btn2">
          Discover Plants
          <img src={rightArrowGreen} alt="arrow" />
        </button>
      </NavLink>
    </section>
  );
}

export default About;
