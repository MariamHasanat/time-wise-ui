import React from 'react';
import { Button } from 'antd';
import ProjectForm from '../../components/project-form/project-form';

const ProjectsPage = () => {
  const [showPopup, setShowPopup] = React.useState<boolean>(false);
  return (
    <div className="projects">
      <Button onClick={() => { setShowPopup(!showPopup); console.log('click!') }}>New Project</Button>
      <ProjectForm showPopup={showPopup} setShowPopup={setShowPopup} />
    </div >
  )
}
export default ProjectsPage;