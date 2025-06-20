import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Passionate about delicious, wholesome vegetarian food.</p>
            </div>
            <p className="mid">
              We believe that vegetarian cuisine is not just a choice, but a way
              to celebrate vibrant flavors and fresh ingredients. Our menu
              features thoughtfully crafted dishes that nourish both body and
              soul. Whether you’re a lifelong vegetarian or simply exploring,
              you’ll find something to delight your taste buds here.
            </p>
            <Link to={"/"}>
              Explore Vegetarian Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/about.jpeg" alt="about vegetarian menu" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
