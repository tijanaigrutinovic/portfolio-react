import React from "react";

const projects = [
  {
    name: "CBA / Open edX",
    href: "https://centerforbusinessacceleration.com/",
    text: "Production education sites. I build frontend and CMS features across Django/Wagtail sites, including a public course catalog integrated with Open edX.",
  },
  {
    name: "LeadPlay.io",
    href: "https://leadplay.io/",
    text: "Lead generation platform. I led the frontend and built it from Figma in Next.js, React and GSAP: responsive layouts, reusable components and animation.",
  },
  {
    name: "Linkstackz",
    href: "https://linkstackz.com/become-creator",
    text: "Creator landing page. I built the React frontend from scratch in Tailwind, with responsive layouts and reusable components, and no UI library.",
  },
  {
    name: "36 Soma Runners",
    href: "https://36somarunners.com/",
    text: "A black-and-white site for a running club. I shaped the look and the frontend in Next.js and GSAP: motion, photography, a training schedule, and pages in English and Serbian.",
  },
  {
    name: "College Confidential",
    href: "https://www.collegeconfidential.com/",
    text: "A large live content site. I led the frontend with the backend team, adding Wagtail sections, redesigning pages, and refactoring older frontend code. Wagtail, Django and JavaScript.",
  },
  {
    name: "Concentrical",
    href: "https://concentrical.net/",
    text: "Agency marketing site. I built it from the provided designs as Wagtail templates and a library of reusable content blocks.",
  },
];

function Projects() {
  return (
    <section className="experience section" id="projects">
      <div className="experience-left">
        <h2>{"// Selected work"}</h2>
        <p>
          A short list of live work. Each one is a real product, the part I
          built, and the stack behind it.
        </p>
      </div>
      <div className="experience-right">
        <div className="experience-cards">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ex-card">
                <div className="content">
                  <h3>{project.name}</h3>
                  <p>{project.text}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
