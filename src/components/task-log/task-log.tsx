import './task-log.css';
import { DatePicker } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons'

const TaskLog = () => {
  return (
    <form className='task-log'>
        <span className="color">&nbsp;</span>
      <div className='task-desc'>
        <label style={{ fontSize: '15px', color: '#52469C', width: 300 }}>Description</label>
        <label style={{ fontSize: '10px', color: '#7489C1' }} >projectName</label>
      </div>
      <label >0 mins</label>
      <label> <ClockCircleOutlined /> &nbsp;3:30 - 3:45pm</label>
      <DatePicker />
    </form>
  )
}

export default TaskLog;