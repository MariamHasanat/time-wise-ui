import { Modal } from 'antd';
import './edit-task.css';
import Input from '../input/input';
import { useEffect, useState } from 'react';
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
  console.log(props.description);

  // const [description, setDescription] = useState(props.description);
  // const [start, setStart] = useState(props.start);
  // const [end, setEnd] = useState(props.end);
  const [updateTask, setUpdatedTask] = useState<IUpTask>({
    taskId: props.taskId,
    task: {
      description: props.description,
      beginTime: props.start,
      endTime: props.end,
    }
  });
  // useEffect(() => {
  //   setUpdatedTask({
  //     taskId: props.taskId,
  //     task: {
  //       description: props.description,
  //       beginTime: props.start,
  //       endTime: props.end,
  //     }
  //   });
  //   setDescription(props.description);
  //   setStart(props.start);
  //   setEnd(props.end);

  // }, [props.taskId, props.description]);

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
            // setDescription(e.target.value);
          }}
        />
        <Input
          label={"Start Time"}
          type='datetime-local'
          value={updateTask.task.beginTime}
          onChange={(e) => {
            // setStart(e.target.value.toString())//with form 22-5-2023.....
            setUpdatedTask({ taskId: props.taskId, task: { ...updateTask.task, beginTime: convertToTimestamp(e.target.value.toString()).toString() } })
            // console.log(convertToTimestamp(start));
          }}
        />
        <Input
          label={"End Time"}
          type='datetime-local'
          value={updateTask.task.endTime}
          onChange={(e) => {
            // setEnd(e.target.value.toString())
            setUpdatedTask({ taskId: props.taskId, task: { ...updateTask.task, endTime: convertToTimestamp(e.target.value.toString()).toString() } })
            // console.log(end);
          }}
          min={updateTask.task.beginTime || 0}
        />
      </Modal>
    </div>
  )
}

export default EditTaskPopup;