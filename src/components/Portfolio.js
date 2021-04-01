import React from "react";
import Card from "./Card";
import projects from "./projects.json";

function Portfolio() {
  return (
    <div className="container">
      <section>
        {projects.map((project) => {
          return (
            <Card
              title={project.title}
              image={project.image}
              description={project.description}
              github={project.github}
              heroku={project.heroku}
              key={project.id}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Portfolio;
