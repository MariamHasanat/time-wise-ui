import './project-form.css'
import Input from '../input/input';
import { Modal, Form, Button } from 'antd';

interface iProps {
  showPopup: boolean;
  setShowPopup: (arg0: boolean) => void;
};
const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);

  console.log(data.get('name'));
  console.log(data.get('description'));
  console.log(data.get('color'));
}

const ProjectForm = (props: iProps) => {
  const cancelHandler = () => {
    props.setShowPopup(!props.showPopup)
  }
  return (
    <div className="project-form">
      <Modal
        title="Create a New  Project"
        open={props.showPopup}
        footer={null}
        onCancel={cancelHandler}
        okButtonProps={{ form: 'category-editor-form', htmlType: 'submit' }}
      >
        <Form onSubmitCapture={submitHandler}>
          <Input name="name" label="Project Name" required />
          <Input name="description" label="Description" />
          <Input name="color" label="Color" type="color" required />
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            <Button style={{ marginRight: 10 }} onClick={cancelHandler}>Cancel</Button>
            <Button style={{ marginRight: 10 }} htmlType='submit'>Submit</Button>
          </div>
        </Form>
      </Modal>
    </div >
  )
}
export default ProjectForm;