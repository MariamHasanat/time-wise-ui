import './projects.css';
import React from 'react';
import { Button } from 'antd';
import ProjectForm from '../../components/project-form/project-form';

const ProjectsPage = () => {
  const [showPopup, setShowPopup] = React.useState<boolean>(false);
  return (
    <div className="projects-page">
      <div className="projects-page-inner">
        <div className='new-project-btn'>
          <Button onClick={() => setShowPopup(!showPopup)}>New Project</Button>
        </div>
      </div>
      {/*list of projects here */}
      <ProjectForm showPopup={showPopup} setShowPopup={setShowPopup} />
    </div >
  )
}
export default ProjectsPage;