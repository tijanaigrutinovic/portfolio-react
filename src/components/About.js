import React from 'react';
import tijanaImage from '../images/tijana.JPG';

const About = () => {
  return (
    <div className="about section" id="about">
      <div className="about-content">
        <h2>// About me</h2>
        <p>
          I'm an enthusiastic frontend developer living in Belgrade concentrating on the front-end side of the web.
        </p>
        <p>
          I've been working on web development for about three years, focusing on the front end. I love collaborating with designers
          because they help me find creativity when form and function come together. When I'm not coding, I use my artistic side to
          create handcrafted jewelry. My experience as a rock climber has taught me the resolve and precision necessary to overcome
          challenges and produce polished work. I see each project as a chance to bring ideas to life with care and precision.
        </p>
      </div>
      <div className="about-image">
        <img className="animated-image" src={tijanaImage} alt="Tijana Igrutinović" />
      </div>
    </div>
  );
};

export default About;
