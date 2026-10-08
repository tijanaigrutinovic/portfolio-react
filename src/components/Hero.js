import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-layout">
        <div className="hero-copy">
          <h1>
            Frontend developer building polished, production-ready web
            experiences.
          </h1>
          <p className="hero-lead">
            I work with React, Next.js and JavaScript to turn designs and
            product ideas into responsive, maintainable interfaces.
          </p>
          <p className="hero-stack">
            React · Next.js · JavaScript · TypeScript · Tailwind · Django/Wagtail
          </p>
          <div className="hero-actions">
            <a className="contact-button" href="#projects">
              <span>View my work</span>
            </a>
            <a className="contact-button ghost" href="#contact">
              <span>Get in touch</span>
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>
      <p className="hero-note">
        Available for full-time roles, freelance projects and ongoing frontend work. Remote · Europe.
      </p>
    </section>
  );
};

export default Hero;
