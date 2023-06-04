import './projects.css'
import React from 'react';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import { Modal } from 'antd';


const ProjectsPage = () => {
  const [showPopup, setShowPopup] = React.useState<boolean>(false);
  return (
    <div className="projects">
      <Button label={"New Project"} onClick={() => setShowPopup(!showPopup)} />
      <Modal title="Create a New  Project" open={showPopup} >
        <form action="">
          <Input label="Project Name" required />
          <Input label="Description" />
          <input type="color" value="#ff0000" required style={{ "border": "none", "background": "none" }} />
          <div className='new-project-buttons'>
          </div>
        </form>
      </Modal>
    </div >
  )
}
export default ProjectsPage;