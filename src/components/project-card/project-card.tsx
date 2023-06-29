import { Tooltip } from 'antd';
import './project-card.css';
import { InfoCircleFilled } from '@ant-design/icons';

interface IProps {
  name: string;
  color: string;
  description?: string;
  projectHours: number;

}
const ProjectCard = (props: IProps) => {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <span className='color' style={{ backgroundColor: props.color }}>&nbsp;</span>
        <Tooltip placement='top' title={props.description || "no description"}>
          <button className='proj-tooltip-btn'><InfoCircleFilled /></button>
        </Tooltip>
      </div>
        <h4>{props.name}</h4>
      <p><b>Total Time: </b>{props.projectHours}</p>
    </div>
  )
}
export default ProjectCard;