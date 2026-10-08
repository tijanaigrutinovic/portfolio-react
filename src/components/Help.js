import React from "react";

const items = [
  {
    title: "Frontend development",
    text: "React and Next.js interfaces, built to hold up in production.",
  },
  {
    title: "Figma → React",
    text: "Turning a finished design into a responsive, polished interface.",
  },
  {
    title: "Existing products",
    text: "New features, redesigns, performance improvements and frontend maintenance.",
  },
  {
    title: "Frontend support for agencies",
    text: "Additional frontend capacity when your team needs another developer.",
  },
];

function Help() {
  return (
    <section className="experience section" id="help">
      <div className="experience-left">
        <h2>{"// What I can help with"}</h2>
        <p>
          Frontend development, project work, or ongoing frontend support for
          an agency or product team.
        </p>
      </div>
      <div className="experience-right">
        <div className="experience-cards">
          {items.map((item) => (
            <div className="ex-card" key={item.title}>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Help;
