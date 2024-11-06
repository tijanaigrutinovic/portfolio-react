import React from 'react';

function Footer() {
  return (
    <div id="contact" className="section contact">
      <div className="footer-contact">
        {/* Menu 1 */}
        <div className="menu">
          <ul>
            <li><a href="#about" className="pointer menu-item">About me</a></li>
            <li><a href="#projects" className="pointer menu-item">Projects</a></li>
            <li><a href="#skills" className="pointer menu-item">Skills</a></li>
            <li><a href="#contact" className="pointer menu-item">Contact</a></li>
          </ul>
        </div>
        
        {/* Menu 2 */}
        <div className="menu">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/tijana-igrutinovi%C4%87/" className="pointer menu-item">
                Linkedin
                <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                </svg>  
              </a>
            </li>
            <li>
              <a href="https://github.com/tijanaigrutinovic" className="pointer menu-item">
                Github
                <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                </svg>   
              </a>
            </li>
            <li>
              <a href="https://x.com/igtijana" className="pointer menu-item">
                X Platform
                <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                </svg>                               
              </a>
            </li>
            <li>
              <a href="mailto:tijana.igrutinovic@com" className="pointer menu-item">
                Let's connect!
                <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                </svg>                               
              </a>
            </li>
          </ul>
        </div>
        
        {/* Menu 3 */}
        <div className="menu">
          <ul>
            <li><span className="menu-item">Belgrade, Serbia</span></li>
          </ul>
        </div>
        
        {/* Menu 4 */}
        <div className="menu">
          <ul>
            <li><span className="menu-item">Dev. </span><a href="https://www.linkedin.com/in/tijana-igrutinovi%C4%87/" className="underline pointer menu-item">Tijana Igrutinovic</a></li>
            <li><span className="menu-item">Copyright 2024</span></li>
          </ul>
        </div>
      </div>     
    </div>
  );
}

export default Footer;
