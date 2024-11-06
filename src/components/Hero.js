import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const textToAnimate = 'Tijana Igrutinović';
  
  const indexRef = useRef(0); 
  const isDeletingRef = useRef(false); 
  const timeoutRef = useRef(null); 

  useEffect(() => {
    const speed = 100;
    const pauseAfterTyping = 3000;

    const typeWriter = () => {
      if (!isDeletingRef.current) {
        if (indexRef.current < textToAnimate.length) {
          setText((prevText) => prevText + textToAnimate.charAt(indexRef.current));
          indexRef.current++;
          timeoutRef.current = setTimeout(typeWriter, speed); 
        } else {
          setTimeout(() => {
            isDeletingRef.current = true;
            typeWriter(); 
          }, pauseAfterTyping);
        }
      } else {
        if (indexRef.current > 0) {
          setText((prevText) => prevText.substring(0, indexRef.current - 1));
          indexRef.current--;
          timeoutRef.current = setTimeout(typeWriter, speed); 
        } else {
          isDeletingRef.current = false;
          setTimeout(typeWriter, speed); 
        }
      }
    };

    typeWriter();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); 
      }
    };
  }, []);

  return (
    <div className="hero-body">
      <div className="left-hero">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="right-hero">
        <h1 id="animatedText" className="title">{text}</h1> 
        <p className="description">
          Currently Working Remotely from 📍Belgrade
        </p>
        <p className="subtitle">
          Three years of experience, I specialize in creating stunning frontend
          experiences for in-house teams and clients alike.
        </p>
        <p className="subtitle">
          Fluent in Serbian & English.
        </p>
        <p className="subtitle">
          Looking for remote development opportunities.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            whiteSpace: 'nowrap',
            marginTop: '32px',
          }}
        >
          <span className="tehnologies">JavaScript</span>
          <span className="tehnologies">ReactJS</span>
          <span className="tehnologies">NodeJS</span>
          <span className="tehnologies">jQuery</span>
          <span className="tehnologies">SCSS</span>
          <span className="tehnologies">DjangoCMS</span>
          <span className="tehnologies">Tailwind</span>
        </div>
        <a
          className="contact-button"
          href="mailto:tijanaigrutinovic@gmail.com"
        >
          <span>
            Get in touch <i className="fa-regular fa-hand-peace"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
