import React from 'react';
import { createProject } from '../../services/projects/submit';

interface IProps {
  showPopup: boolean;
  setShowPopup: (arg0: boolean) => void;
};

interface IProject {
  name: string,
  color: string,
  description?: string
}

const emptyProject: IProject = { name: "", description: "", color: "#52469C" };

interface IProject {
  name: string,
  color: string,
  description?: string
}
const useCreateProject = (props: IProps) => {
  const [projectData, setProjectData] = React.useState<IProject>(emptyProject);

  const resetAndClose = () => {
    props.setShowPopup(!props.showPopup);
    setProjectData(emptyProject);
    console.log(emptyProject);
  }

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const project: IProject = {
      name: data.get('name') as string,
      description: data.get('description') as string,
      color: data.get('color') as string
    }
    if (await createProject(project)) {
      resetAndClose();
    }
  }
  return {
    submitHandler,
    resetAndClose,
    setProjectData,
    projectData: {
      color: {
        val: projectData.color,
        onchange: (newVal: string) => setProjectData({ ...projectData, color: newVal })
      },
      description: {
        val: projectData.description,
        onchange: (newVal: string) => setProjectData({ ...projectData, description: newVal })
      },
      name: {
        val: projectData.name,
        onchange: (newVal: string) => setProjectData({ ...projectData, name: newVal })
      },
    }
  }
}

export default useCreateProject;