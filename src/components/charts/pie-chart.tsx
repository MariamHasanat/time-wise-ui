import { Pie, PieChart, Cell, Tooltip } from "recharts";

// import { color } from "d3-color";
import { IProject } from "../../types/project-interface";
// const projects = [
//   { name: "typing-test", color: "#FCBD49", total: 10 },
//   { name: "frying-nemo", color: "#FF9800", total: 7 },
//   { name: "graduation-project", color: "#559ae7", total: 1 },
//   { name: "time-wise", color: "#9C27B0", total: 20 },
// ];
interface IProps {
  projects: IProject[];
}
const MyPieChart = (props: IProps) => {
  const projectsArray = props.projects;
 
  const calc = (timeStamp: number) => {
    const converted = Math.floor(timeStamp / (1000 * 60 * 60));
    return converted;
  }
  const projectAnotherArray = projectsArray.map((project: IProject) => ({
    name: project.name,
    color: project.color,
    total: calc(Number(project.projectHours))
  }));


  return (
    projectAnotherArray.length ?
    <div className="pie-chart">
      <PieChart width={300} height={250}>
        <Tooltip />
        <Pie
          data={projectAnotherArray}
          dataKey={"total"}
          innerRadius={60}
          outerRadius={100}
          paddingAngle={5}
          label 
        >
          {
            projectAnotherArray.map((project, key) => <Cell key={key} fill={project.color} />)
          }
        </Pie>
      </PieChart>
    </div>
    : <></>
  );
};

export default MyPieChart;
