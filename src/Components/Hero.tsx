import hero from "../assets/hero.jpg";
import Nav from "./Nav";
export const Hero = () => {
  return (
    <header>
      <img src={hero} className="hero" alt="img by johny-georgiadis" />
      <div className="overlay">
        <Nav />
        <div className="hero-content">
          <h1>Book an Appointment for Free</h1>
          <h3>
            Experience the Benefits of Advanced Technology and Expert Care
          </h3>
        </div>
      </div>
    </header>
  );
};
