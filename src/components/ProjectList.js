import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const proj = projects.map((user) => {
    <ProjectItem key={user.id} name={user.name} about={user.about} technologies={user.technologies}/>
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
        {proj}
      </div>
    </div>
  );
}

export default ProjectList;
