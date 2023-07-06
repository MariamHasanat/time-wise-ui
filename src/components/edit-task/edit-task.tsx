import { Modal } from 'antd';
import './edit-task.css';
import Input from '../input/input';
import { useState } from 'react';
import { convertToTimestamp } from '../../utils/convert-timeStamp';
import { IUpTask } from '../../hooks/tasks/task.hook';

interface IProps {
  editMode: string;
  setEditMode: React.Dispatch<React.SetStateAction<string>>;
  start: string;
  end: string;
  description: string;
  taskId: string;
  handleUpdateTask: Function;
}
const EditTaskPopup = (props: IProps) => {

  const [updateTask, setUpdatedTask] = useState<IUpTask>({
    taskId: props.taskId,
    task: {
      description: props.description,
      beginTime: props.start,
      endTime: props.end,
    }
  });

  return (
    <div className="edit-task">
      <Modal title="edit task" open={props.editMode === props.taskId} onCancel={() => props.setEditMode('')} onOk={() => {
        props.setEditMode('');
        props.handleUpdateTask(updateTask);
        //collect the information and send it to the api
      }}>
        <Input
          label={"Description"}
          style={{ "width": "400px" }}
          value={updateTask.task.description}
          onChange={(e) => {
            setUpdatedTask({ taskId: props.taskId, task: { ...updateTask.task, description: e.target.value } })
          }}
        />
        <Input
          label={"Start Time"}
          type='datetime-local'
          value={updateTask.task.beginTime}
          onChange={(e) => {
            setUpdatedTask({ taskId: props.taskId, task: { ...updateTask.task, beginTime: convertToTimestamp(e.target.value.toString()).toString() } })
          }}
        />
        <Input
          label={"End Time"}
          type='datetime-local'
          value={updateTask.task.endTime}
          onChange={(e) => {
            setUpdatedTask({ taskId: props.taskId, task: { ...updateTask.task, endTime: convertToTimestamp(e.target.value.toString()).toString() } })          }}
          min={updateTask.task.beginTime || 0}
        />
      </Modal>
    </div>
  )
}

export default EditTaskPopup;