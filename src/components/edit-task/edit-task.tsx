import { Modal } from 'antd';
import './edit-task.css';
import Input from '../input/input';

interface IProps {
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const EditTaskPopup = (props: IProps) => {
  return (
    <div className="edit-task">
      <Modal title="edit task" open={props.editMode} onCancel={() => props.setEditMode(false)}>
        <Input label={"Description"} style={{ "width": "400px" }} />
        <Input label={"Start Time"} type='datetime-local' />
        <Input label={"End Time"} type='datetime-local' />
      </Modal>
    </div>
  )
}

export default EditTaskPopup;