import './project-card.css';

interface IProps {
  name: string;
  color: string;
  description?: string;
  projectHours: number;

}
const ProjectCard = (props: IProps) => {
  return (
    <div className="project-card">
      <div className="project-top">
        <span className='color' style={{ backgroundColor: props.color }}>&nbsp;</span>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
      </div>
      <p><b>Total Time: </b>{props.projectHours}</p>
    </div>
  )
}
export default ProjectCard;