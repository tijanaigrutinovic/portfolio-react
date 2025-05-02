import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, setText] = useState(""); 
  const textToAnimate = "Tijana Igrutinović"; 
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [looping, setLooping] = useState(true);

  const speed = 100;
  const deleteSpeed = 100;
  const pauseAfterTyping = 3000;

  useEffect(() => {
    const typeWriter = () => {
      if (!isDeleting) {
        if (index < textToAnimate.length) {
          setText((prevText) => prevText + textToAnimate.charAt(index));
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseAfterTyping);
        }
      } else {
        if (index > 0) {
          setText((prevText) => prevText.substring(0, index - 1));
          setIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsDeleting(false);
        }
      }
    };

    const interval = setInterval(typeWriter, isDeleting ? deleteSpeed : speed);
    
    return () => clearInterval(interval); 
  }, [index, isDeleting]);

  return (
    <div className="hero-body">
      <div className="left-hero">
      <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>
      <div className="right-hero">
        <motion.h1
          className="title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {text}
        </motion.h1>
        <p className="description">Currently Working Remotely from 📍Belgrade</p>
        <p className="subtitle">
          Three years of experience, I specialize in creating stunning frontend
          experiences for in-house teams and clients alike.
        </p>
        <p className="subtitle">Fluent in Serbian & English.</p>
        <p className="subtitle">
          Looking for remote development opportunities.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            whiteSpace: "nowrap",
            marginTop: "32px",
          }}
        >
          <span className="tehnologies">JavaScript</span>
          <span className="tehnologies">ReactJS</span>
          <span className="tehnologies">NodeJS</span>
          <span className="tehnologies">jQuery</span>
          <span className="tehnologies">SCSS</span>
          <span className="tehnologies">Tailwind</span>
          <span className="tehnologies">WagtailCMS</span>
          <span className="tehnologies">Django</span>
        </div>
        <a className="contact-button" href="mailto:tijanaigrutinovic@gmail.com">
          <span>
            Get in touch <i className="fa-regular fa-hand-peace"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
