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

