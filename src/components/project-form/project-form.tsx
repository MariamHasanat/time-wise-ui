import './project-form.css'
import Input from '../input/input';
import React from 'react';
import { Modal, Form, Button } from 'antd';
import { createProject } from '../../services/projects/submit';


interface iProps {
  showPopup: boolean;
  setShowPopup: (arg0: boolean) => void;
};

interface IProject {
  name: string,
  color: string,
  description?: string
}
const emptyProject: IProject = { name: "", description: "", color: "#52469C" };

const ProjectForm = (props: iProps) => {
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

  return (
    <div className="project-form">
      <Modal
        title="Create a New  Project"
        open={props.showPopup}
        footer={null}
        onCancel={resetAndClose}
        okButtonProps={{ form: 'category-editor-form', htmlType: 'submit' }}
      >
        <Form onSubmitCapture={submitHandler}>
          <Input
            name="name"
            value={projectData.name || ""}
            onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}
            label="Project Name"
            required
          />
          <Input
            name="description"
            label="Description"
            value={projectData.description || ""}
            onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
          />
          <Input
            name="color"
            label="Color"
            type="color"
            value={projectData.color}
            onChange={(e) => setProjectData({ ...projectData, color: e.target.value })}
            required
          />

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            <Button style={{ marginRight: 10 }} onClick={resetAndClose}>Cancel</Button>
            <Button style={{ marginRight: 10 }} htmlType='submit'>Submit</Button>
          </div>
        </Form>
      </Modal>
    </div >
  )
}
export default ProjectForm;