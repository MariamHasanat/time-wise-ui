import "./task-log.css";
import { Button } from "antd";
import { ClockCircleTwoTone, EditTwoTone } from "@ant-design/icons"
import { useState } from "react";
import EditTaskPopup from "../edit-task/edit-task";
import DeleteConfirmation from "../delete-confirmation/delete-confirmation";
import { setTwoToneColor } from '@ant-design/icons';
import { comingTasks } from "../../services/tasks/submit-task";

setTwoToneColor('#52469C');


const TaskLog = (props: any) => {
  const allTasks = props.allTasks;
  console.log("from task log", allTasks);

  const [editMode, setEditMode] = useState<boolean>(false);
  return (

    allTasks.map((task: comingTasks, key:number) => (<form className="task-log" key={key}>
      <span className="color">&nbsp;</span>
      <div className="task-desc">
        <label style={{ fontSize: "15px", color: "#52469C", width: 300 }}>{task.description}</label>
        <label style={{ fontSize: "10px", color: "#7489C1" }} >{task.projectName}</label>
      </div>
      <label >{task.totalTimeInSeconds} mins</label>
      <div className="task-time">
        <ClockCircleTwoTone style={{ "fontSize": "22px", "margin": "5px", "color" : "#f9ff00" }} /> &nbsp;&nbsp;
        <div className="task-date-time">
          <label>&nbsp;3:30 - 3:45pm</label>
          <label className="task-dates" >June 19 - June 20</label>
        </div>
      </div>
      <div className="control-btns">
        <Button
          onClick={() => setEditMode(true)}
          style={{ "backgroundColor": "transparent", "border": "none", "boxShadow": "none", "padding": 0, "marginRight": "10px" }}
        >
          <EditTwoTone style={{ "fontSize": "22px", "margin": "5px" }}/>
        </Button>
        <DeleteConfirmation />
      </div>
      <EditTaskPopup editMode={editMode} setEditMode={setEditMode} description="none" />
    </form>))
  )
}

export default TaskLog;