import "./task-log.css";
import { Button } from "antd";
import { ClockCircleTwoTone, EditTwoTone } from "@ant-design/icons"
import { useState } from "react";
import EditTaskPopup from "../edit-task/edit-task";
import DeleteConfirmation from "../delete-confirmation/delete-confirmation";
import { comingTasks } from "../../services/tasks/taskApi";
import { setTwoToneColor } from '@ant-design/icons';
import { timeAsADate, timeInHoursAndMinutes, whatTheTime } from "../../utils/time-borders";

setTwoToneColor('#52469C');

export interface IProps {
  allTasks: comingTasks[];
  handleDeleteTask: Function;
}

const TaskLog = (props: any) => {
  const allTasks = props.allTasks;
  const [editMode, setEditMode] = useState<boolean>(false);
  const handleDeleteTask = props.handleDeleteTask;

  return (
    allTasks.map((task: comingTasks, key: number) => (
      task.status === "stopped" ?
        <form className="task-log" key={key}>
          <span className="color" style={{ backgroundColor: task.projectColor }}>&nbsp;</span>
          <div className="task-desc">
            <label style={{ fontSize: "15px", color: "#52469C", width: 300 }}>{task.description}</label>
            <label style={{ fontSize: "10px", color: "#7489C1" }} >{task.projectName}</label>
          </div>
          <label >{whatTheTime(task.totalTimeInSeconds)}</label>
          <div className="task-time">
            <ClockCircleTwoTone style={{ "fontSize": "22px", "margin": "5px", "color": "#f9ff00" }} /> &nbsp;&nbsp;
            <div className="task-date-time">
              <label> &nbsp;{timeInHoursAndMinutes(task.beginTime)} - {timeInHoursAndMinutes(task.endTime)}</label>
              <label className="task-dates" >{timeAsADate(task.beginTime)} - {timeAsADate(task.endTime)}</label>
            </div>
          </div>
          <div className="control-btns">
            <Button
              onClick={() => setEditMode(true)}
              style={{ "backgroundColor": "transparent", "border": "none", "boxShadow": "none", "padding": 0, "marginRight": "10px" }}
            >
              <EditTwoTone style={{ "fontSize": "22px", "margin": "5px" }} />
            </Button>

            <DeleteConfirmation onDelete={() => handleDeleteTask(task._id)} taskId={task._id} />

          </div>
          <EditTaskPopup editMode={editMode} setEditMode={setEditMode} description="none" />
        </form>
        :
        <div key={key}></div>))
  )
}

export default TaskLog;
