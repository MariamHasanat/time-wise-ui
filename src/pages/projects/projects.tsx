import './projects.css';
import React from 'react';
import { Button } from 'antd';
import ProjectForm from '../../components/project-form/project-form';

const ProjectsPage = () => {
  const [showPopup, setShowPopup] = React.useState<boolean>(false);
  return (
    <div className="projects">
      <div className='new-project-btn'>
        <Button onClick={() => setShowPopup(!showPopup)}>New Project</Button>
      </div>
      
      <ProjectForm showPopup={showPopup} setShowPopup={setShowPopup} />
    </div >
  )
}
export default ProjectsPage;