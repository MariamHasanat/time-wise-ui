import "./task-log.css";
import { Button, DatePicker } from "antd";
import { ClockCircleOutlined, MoreOutlined } from "@ant-design/icons"
import { useState } from "react";
import { Dropdown } from "antd";
import type { MenuProps } from 'antd';
import EditTaskPopup from "../edit-task/edit-task";

const TaskLog = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <button onClick={() => setEditMode(true)} style={{ "backgroundColor": "transparent", "border": "none" }}>
          Edit
        </button>
      ),
    },
    {
      key: '2',
      label: (
        <button style={{ "backgroundColor": "transparent", "border": "none" }}>
          Delete
        </button>
      ),
    }
  ];
  return (
    <form className="task-log">
      <span className="color">&nbsp;</span>
      <div className="task-desc">
        <label style={{ fontSize: "15px", color: "#52469C", width: 300 }}>Description</label>
        <label style={{ fontSize: "10px", color: "#7489C1" }} >projectName</label>
      </div>
      <label >15 mins</label>
      <div className="task-time">
        <ClockCircleOutlined style={{"fontSize": "15px", "margin": "10px"}}/>
        <div className="task-date-time">
          <label> &nbsp;3:30 - 3:45pm</label>
          <label className="task-dates" >June 19 - June 20</label>
        </div>
      </div>
      <EditTaskPopup editMode={editMode} setEditMode={setEditMode} description="none" />
      <Dropdown trigger={['click']} menu={{ items }} placement="bottomLeft" arrow>
        <Button className="controlbtn"><MoreOutlined style={{ "fontSize": 15 }} /></Button>
      </Dropdown>
    </form>
  )
}

export default TaskLog;