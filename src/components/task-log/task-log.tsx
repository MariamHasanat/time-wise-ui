import "./task-log.css";
import { Button } from "antd";
import { ClockCircleTwoTone, EditTwoTone } from "@ant-design/icons"
import { useState } from "react";
import EditTaskPopup from "../edit-task/edit-task";
import DeleteConfirmation from "../delete-confirmation/delete-confirmation";

import { setTwoToneColor } from '@ant-design/icons';
import { timeAsADate, timeInHoursAndMinutes, convertTimestampToDHMS } from "../../utils/time-borders";
import { comingTasks } from "../../services/tasks/submit-task";
import NoTaksFound from "../../pages/time-tracker/no-tasks-found/not-found";

setTwoToneColor('#52469C');

export interface IProps {
  allTasks: comingTasks[];
  handleDeleteTask: Function;
  handleUpdateTask: Function;
}

const TaskLog = (props: any) => {
  const allTasks = props.allTasks;
  const [editMode, setEditMode] = useState<string>('');
  const handleDeleteTask = props.handleDeleteTask;
  const handleUpdateTask = props.handleUpdateTask;

  return (
    <>{
      allTasks.length ?
        allTasks.map((task: comingTasks, key: number) => (
          task.status === "stopped" ?
            <form className="task-log" key={task._id}>
              <span className="newStyle" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", maxWidth: "220px" }}>
                <span className="color" style={{ backgroundColor: task.projectColor }}>&nbsp;</span>
                <div className="task-desc" >
                  <label style={{ fontSize: "15px", color: "#52469C", minWidth: "180px" }}>{task.description}</label>
                  <label style={{ fontSize: "10px", color: "#7489C1" }} >{task.projectName}</label>
                </div>
              </span>
              <label style={{ width: "185px", textAlign: "center" }} >{convertTimestampToDHMS(Number(task.totalTimeInSeconds))}</label>
              <div className="task-time">
                <ClockCircleTwoTone style={{ "fontSize": "22px", "margin": "5px", "color": "#f9ff00" }} /> &nbsp;&nbsp;
                <div className="task-date-time">
                  <label> &nbsp;{timeInHoursAndMinutes(task.beginTime)} - {timeInHoursAndMinutes(task.endTime)}</label>
                  <label className="task-dates" >{timeAsADate(task.beginTime)} - {timeAsADate(task.endTime)}</label>
                </div>
              </div>
              <div className="control-btns">
                <Button
                  onClick={() => setEditMode(task._id)}
                  style={{ "backgroundColor": "transparent", "border": "none", "boxShadow": "none", "padding": 0, "marginRight": "10px" }}
                >
                  <EditTwoTone style={{ "fontSize": "22px", "margin": "5px" }} />
                </Button>
                <DeleteConfirmation onDelete={() => handleDeleteTask(task._id)} taskId={task._id} />
              </div>
              <EditTaskPopup handleUpdateTask={handleUpdateTask} editMode={editMode} taskId={task._id} setEditMode={setEditMode} description={task.description} start={task.beginTime} end={task.endTime} />
            </form>
            :
            <div key={key}></div>))
        : <NoTaksFound />
    }</>
  )
}

export default TaskLog;
