// import { useEffect, useState } from 'react';
// import { Button } from 'antd';
// import ProjectForm from '../../components/project-form/project-form';
// import ProjectCard from '../../components/project-card/project-card';
// import getProjects from '../../services/projects/getProjects';
// import { IProject } from '../../types/project-interface';

// const ProjectsPage = () => {
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [projects, setProjects] = useState<IProject[]>([]);
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const fetchedProjects = await getProjects();
//         if (Array.isArray(fetchedProjects)) {
//           setProjects(fetchedProjects);
//         } else {
//           console.error('Invalid projects data:', fetchedProjects);
//         }
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <div className="projects-page">
//       <div className="projects-page-inner">
//         <div className="new-project-btn">
//           <Button onClick={() => setShowPopup(!showPopup)}>New Project</Button>
//         </div>
//       </div>
//       <div className="projects-board">


//         {projects && projects.map((project) => (
//           <ProjectCard
//             key={project.name}
//             color={project.color}
//             name={project.name}
//             description={project.description || ''}
//             projectHours={project.projectHours || 0}
//           />
//         ))}

//       </div>
//       <ProjectForm showPopup={showPopup} setShowPopup={setShowPopup} />
//     </div>
//   );
// };

// export default ProjectsPage;

// import React, { useEffect, useState } from 'react';
// import { Button } from 'antd';
// import ProjectForm from '../../components/project-form/project-form';
// import ProjectCard from '../../components/project-card/project-card';
// import getProjects from '../../services/projects/getProjects';
// import { IProject } from '../../types/project-interface';

// const ProjectsPage = () => {
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [projects, setProjects] = useState<IProject[]>([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const fetchedProjects = await getProjects();
//         if (Array.isArray(fetchedProjects)) {
//           setProjects(fetchedProjects);
//         } else {
//           console.error('Invalid projects data:', fetchedProjects);
//         }
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const handleProjectSubmit = (newProject: IProject) => {
//     setProjects([...projects, newProject]);
//   };

//   return (
//     <div className="projects-page">
//       <div className="projects-page-inner">
//         <div className="new-project-btn">
//           <Button onClick={() => setShowPopup(!showPopup)}>New Project</Button>
//         </div>
//       </div>
//       <div className="projects-board">
//         {projects &&
//           projects.map((project) => (
//             <ProjectCard
//               key={project.name}
//               color={project.color}
//               name={project.name}
//               description={project.description || ''}
//               projectHours={project.projectHours || 0}
//             />
//           ))}
//       </div>
//       <ProjectForm showPopup={showPopup} setShowPopup={setShowPopup} onSubmit={handleProjectSubmit} />
//     </div>
//   );
// };

// export default ProjectsPage;


// import {useEffect, useState } from 'react';
// import { Button } from 'antd';
// import ProjectForm from '../../components/project-form/project-form';
// import ProjectCard from '../../components/project-card/project-card';
// import getProjects from '../../services/projects/getProjects';
// import { IProject } from '../../types/project-interface';

// const ProjectsPage = () => {
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [projects, setProjects] = useState<IProject[]>([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const fetchedProjects = await getProjects();
//         if (Array.isArray(fetchedProjects)) {
//           setProjects(fetchedProjects);
//         } else {
//           console.error('Invalid projects data:', fetchedProjects);
//         }
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const handleProjectSubmit = (newProject: IProject) => {
//     console.log("projects ",...projects);
//     console.log("newww ",newProject);

    
//     setProjects([...projects, newProject]);
//   };

//   return (
//     <div className="projects-page">
//       <div className="projects-page-inner">
//         <div className="new-project-btn">
//           <Button onClick={() => setShowPopup(!showPopup)}>New Project</Button>
//         </div>
//       </div>
//       <div className="projects-board">
//         {projects &&
//           projects.map((project) => (
//             <ProjectCard
//               key={project._id}
//               color={project.color}
//               name={project.name}
//               description={project.description || ''}
//               projectHours={project.projectHours || 0}
//             />
//           ))}
//       </div>
//       <ProjectForm showPopup={showPopup} setShowPopup={setShowPopup} onSubmit={handleProjectSubmit} />
//     </div>
//   );
// };

// export default ProjectsPage;

import { useEffect, useState } from 'react';
import { Button } from 'antd';
import ProjectForm from '../../components/project-form/project-form';
import ProjectCard from '../../components/project-card/project-card';
import getProjects from '../../services/projects/getProjects';
import { IProject } from '../../types/project-interface';
import { createProject } from '../../services/projects/submit';

const ProjectsPage = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await getProjects();
        if (Array.isArray(fetchedProjects)) {
          setProjects(fetchedProjects);
        } else {
          console.error('Invalid projects data:', fetchedProjects);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectSubmit = async (newProject: IProject) => {
    try {
      const createdProject = await createProject(newProject);

      if (createdProject) {
        setProjects((prevProjects) => [...prevProjects, createdProject]);
        setShowPopup(false);
      }
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div className="projects-page">
      <div className="projects-page-inner">
        <div className="new-project-btn">
          <Button onClick={() => setShowPopup(!showPopup)}>New Project</Button>
        </div>
      </div>
      <div className="projects-board">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            color={project.color}
            name={project.name}
            description={project.description || ''}
            projectHours={project.projectHours || 0}
          />
        ))}
      </div>
      <ProjectForm showPopup={showPopup} setShowPopup={setShowPopup} onSubmit={handleProjectSubmit} />
    </div>
  );
};

export default ProjectsPage;
