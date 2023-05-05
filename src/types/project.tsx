import React from "react";

interface Project {
  _ID: number;
  name: string;
  color: string;
  projectHours: number;
  description?: string;
}

interface ProjectProps {
  project: Project;
}
//just for testing
// const ProjectComponent: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div>
      <h2>{project.name}</h2>
      <div>Color: {project.color}</div>
      <div>Project Hours: {project.projectHours}</div>
      {project.description && <div>Description: {project.description}</div>}
    </div>
  );
};

