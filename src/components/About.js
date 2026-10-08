import React from "react";
import tijanaImage from "../images/tijana.JPG";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about-content">
        <h2>{"// A little about me"}</h2>
        <p>
          Geology came before frontend. The problems were complicated, and the
          information was rarely complete, so the way through was to look from
          another angle and stay with it until it made sense. An interface that
          almost works asks for the same thing: the structure first, then the
          part that still doesn't behave.
        </p>
        <p>
          Long-distance running came later. A marathon doesn't happen in one
          push. You build a base, something breaks, you fix it, and the distance
          moves out. A design becomes a working interface in those same passes.
          A live product grows one piece at a time, without losing the structure
          underneath.
        </p>
      </div>
      <div className="about-image">
        <img
          className="animated-image"
          src={tijanaImage}
          alt="Tijana Igrutinović"
        />
      </div>
    </section>
  );
};

export default About;
