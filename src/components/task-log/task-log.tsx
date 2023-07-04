import "./task-log.css";
import { Button } from "antd";
import { ClockCircleOutlined, EditOutlined } from "@ant-design/icons"
import { useState } from "react";
import EditTaskPopup from "../edit-task/edit-task";
import DeleteConfirmation from "../delete-confirmation/delete-confirmation";
import { comingTasks } from "../../services/tasks/submit-task";
import { timeAsADate, timeInHoursAndMinutes, whatTheTime } from "../../utils/time-borders";


const TaskLog = (props: any) => {
  const allTasks = props.allTasks;
  console.log("from task log", allTasks);

  const [editMode, setEditMode] = useState<boolean>(false);
  return (

    allTasks.map((task: comingTasks, key: number) => (<form className="task-log" key={key}>
      <span className="color" style={{ backgroundColor: task.projectColor }}>&nbsp;</span>
      <div className="task-desc">
        <label style={{ fontSize: "15px", color: "#52469C", width: 300 }}>{task.description}</label>
        <label style={{ fontSize: "10px", color: "#7489C1" }} >{task.projectName}</label>
      </div>
      <label >{whatTheTime(task.totalTimeInSeconds)}</label>
      <div className="task-time">
        <ClockCircleOutlined style={{ "fontSize": "15px", "margin": "10px" }} />
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
          <EditOutlined />
        </Button>
        <DeleteConfirmation />
      </div>
      <EditTaskPopup editMode={editMode} setEditMode={setEditMode} description="none" />
    </form>))
  )
}

export default TaskLog;