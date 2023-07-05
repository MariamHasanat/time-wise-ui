import { Modal } from 'antd';
import './edit-task.css';
import Input from '../input/input';
import { useState } from 'react';

interface IProps {
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  // start: Date??;
  // end: Date??;
  description: string;
}
const EditTaskPopup = (props: IProps) => {
  const [description, setDescription] = useState(props.description);
  // const [start, setStart] = useState(props.start);
  // const [end, setEnd] = useState(props.end);
  return (
    <div className="edit-task">
      <Modal title="edit task" open={props.editMode} onCancel={() => props.setEditMode(false)}>
        <Input
          label={"Description"}
          style={{ "width": "400px" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          label={"Start Time"}
          type='datetime-local'
        // value={start}
        // onChange={(e) => setStart(+e.target.value.toString())}
        />
        <Input
          label={"End Time"}
          type='datetime-local'
        // value={end}
        // onChange={(e) => setEnd(+e.target.value)}
        // min={start | 0}
        />
      </Modal>
    </div>
  )
}

export default EditTaskPopup;