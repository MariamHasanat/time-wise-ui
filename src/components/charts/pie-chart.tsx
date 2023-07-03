import { Pie, PieChart, Cell, Tooltip } from "recharts";
const projects = [
  { name: "typing-test", color: "#FCBD49", total: 10 },
  { name: "frying-nemo", color: "#FF9800", total: 7 },
  { name: "graduation-project", color: "#559ae7", total: 1 },
  { name: "time-wise", color: "#9C27B0", total: 20 },
];

const MyPieChart = () => {
  return (
    <div className="pie-chart">
      <PieChart width={300} height={250}>
        <Tooltip />
        <Pie
          data={projects}
          dataKey={"total"}
          innerRadius={60}
          outerRadius={100}
          paddingAngle={5}
          label
          >
          {
            projects.map((project) => <Cell fill={project.color} />)
          }
        </Pie>
      </PieChart>
    </div>
  );
};

export default MyPieChart;
