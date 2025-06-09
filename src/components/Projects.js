import React from "react";

function Projects() {
  return (
    <div className="experience section" id="projects">
      <div className="experience-left">
        <h2>{"// Work"}</h2>
        <p>
          Over the past three years, I’ve led and executed a range of exciting
          projects that reflect my dedication to crafting high-quality, visually
          appealing web experiences. Working closely with designers and
          technical teams in Agile environments, I’ve focused on delivering
          intuitive UI development and optimizing performance. I strive to
          provide practical and beautiful solutions for the joy of the end-user.
        </p>
      </div>
      <div className="experience-right">
        <div className="experience-cards">
          <a
            href="https://crdf.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ex-card">
              <div className="content">
                <h3>CRDF and ThreatCenter</h3>
                <p>
                Redesigned and modernized crdf.fr and threatcenter.crdf.fr to enhance UX and visual consistency. 
                Migrated to the latest Bootstrap, implemented responsive design and light/dark theme. Simplified 
                navigation while maintaining brand identity. Handled frontend development, UI/UX improvements, 
                and worked closely with the client.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/tijanaigrutinovic/game-deals-dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ex-card">
              <div className="content">
                <h3>Game Deals Dashboard</h3>
                <p>
                A full-stack web application that displays the best game deals from Steam, GOG, and Humble Store. 
                The backend, built with Django, fetches data from the CheapShark API and exposes a RESTful API for the 
                frontend. The React-based frontend, styled with Bootstrap, provides a responsive and intuitive interface. 
                Registered users can filter and sort deals by store, price, savings, and rating, while each deal includes
                 detailed information and a direct link to the store page.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://tiksimon.pythonanywhere.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ex-card">
              <div className="content">
                <h3>York Tea Heaven</h3>
                <p>
                A custom-built website using Django and Wagtail CMS to provide a flexible content 
                management experience for a fictional tea brand. The backend leverages Wagtail’s 
                StreamField to create custom page layouts and reusable content blocks, allowing easy 
                editing of product pages, blog sections, and promotional content. The frontend, 
                crafted with SCSS and JavaScript, ensures a responsive, interactive design with 
                smooth transitions and animations. This project highlights a clean integration of 
                Django, Wagtail, and modern frontend technologies to create a dynamic, user-centric experience.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://concentrical.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ex-card">
              <div className="content">
                <h3>Concentrical website</h3>
                <p>
                  I led the complete redesign of the Concentrical website,
                  managing the project from start to finish. This included
                  building both the front end and back end, ensuring full
                  responsiveness across devices, and optimizing performance for
                  a seamless user experience.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://staging-b2b.liaisonedu.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ex-card">
              <div className="content">
                <h3>LiaisonEdu B2B</h3>
                <p>
                  I spearheaded the development of a new Wagtail platform for
                  LiaisonEdu's B2B solution. This involved building the
                  front-end templates from the ground up and customizing Django
                  models to meet the project's specific needs.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://www.collegeconfidential.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ex-card">
              <div className="content">
                <h3>College Confidential</h3>
                <p>
                  I led the frontend development while collaborating with a team
                  of two backend developers. My responsibilities included
                  maintaining the platform, redesigning existing pages, creating
                  new Wagtail blocks, and managing tasks within the Django
                  admin.
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
