import React from 'react';

function Projects() {
    return (
      <div className="experience section" id="projects">
        <div className="experience-left">
          <h2>// Work</h2>
          <p>
              Over the past three years, I’ve led and executed a range of exciting projects that 
              reflect my dedication to crafting high-quality, visually appealing web experiences. 
              Working closely with designers and technical teams in Agile environments, I’ve focused on 
              delivering intuitive UI development and optimizing performance. I strive to provide 
              practical and beautiful solutions for the joy of the end-user.
          </p>
        </div>
        <div className="experience-right">
          <div className="experience-cards">
              <a href="https://concentrical.net/" target="_blank">
                <div className="ex-card">
                    <div className="content">
                      <h3>Concentrical website</h3>
                      <p>
                          I led the complete redesign of the Concentrical website, managing the project 
                          from start to finish. This included building both the front end and back end, 
                          ensuring full responsiveness across devices, and optimizing performance for a 
                          seamless user experience.
                      </p>
                    </div>
                </div>
              </a>
              <a href="https://staging-b2b.liaisonedu.com/" target="_blank">
                <div className="ex-card">
                    <div className="content">
                      <h3>LiaisonEdu B2B</h3>
                      <p>
                          I spearheaded the development of a new Wagtail platform for LiaisonEdu's B2B solution. 
                          This involved building the front-end templates from the ground up and customizing 
                          Django models to meet the project's specific needs.
                      </p>
                    </div>
                </div>
              </a>
              <a href="https://www.collegeconfidential.com/" target="_blank">
                <div className="ex-card">
                    <div className="content">
                      <h3>College Confidential</h3>
                      <p>
                          I led the frontend development while collaborating with a team of two backend developers. 
                          My responsibilities included maintaining the platform, redesigning existing pages, 
                          creating new Wagtail blocks, and managing tasks within the Django admin.
                      </p>
                    </div>
                </div>
              </a>
          </div>
        </div>
      </div>
    );
  }

  export default Projects;
