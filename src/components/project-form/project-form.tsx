import './project-form.css'
import Input from '../input/input';
import { Modal } from 'antd';

interface iProps {
  showPopup: boolean;
  setShowPopup: (arg0: boolean) => void;
};

const ProjectForm = (props: iProps) => {
  return (
    <div className="project-form">
      <Modal
        title="Create a New  Project"
        open={props.showPopup}
        onCancel={() => props.setShowPopup(!props.showPopup)}
        onOk={() => { props.setShowPopup(!props.showPopup) }}
      >
        <form action="">
          <Input label="Project Name" required />
          <Input label="Description" />
          <Input label="Color" type="color" required />
        </form>
      </Modal>
    </div >
  )
}
export default ProjectForm;