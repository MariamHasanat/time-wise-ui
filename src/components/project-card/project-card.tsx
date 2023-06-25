import './project-card.css';

interface IProps {
  name: string;
  color: string;
  description?: string;
  projectHours:number;

}
// interface IProps {
//   projectName: string,
//   description: string,
//   color: string,
//   totalTime: string;
// }
const ProjectCard = (props: IProps) => {
  console.log("jjjjjjjjjjjjjj"); 
  return (
    <div className="project-card">
      <div className="project-top">
        <span className='color' style={{backgroundColor: props.color}}>&nbsp;</span>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
      </div>
      <p><b>Total Time: </b>{props.projectHours}</p>
    </div>
  )
}
export default ProjectCard;