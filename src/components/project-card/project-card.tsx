import './project-card.css';

interface IProps {
  projectName: string,
  description: string,
  color: string,
  totalTime: string;
}
const ProjectCard = (props: IProps) => {
  return (
    <div className="project-card">
      <div className="project-top">
        <span className='color' style={{backgroundColor: props.color}}>&nbsp;</span>
        <h4>{props.projectName}</h4>
        <p>{props.description}</p>
      </div>
      <p><b>Total Time: </b>{props.totalTime}</p>
    </div>
  )
}
export default ProjectCard;