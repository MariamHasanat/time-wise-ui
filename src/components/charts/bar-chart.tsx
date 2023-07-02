import { BarChart, Bar, YAxis, CartesianGrid, XAxis, Tooltip, Legend } from "recharts"

const timeline = [
  {
    "date": "Jan 21",
    "time-wise": 0,
    "frying-nemo": 1,
  },
  {
    "date": "Jan 22",
    "time-wise": 2,
    "frying-nemo": 1
  },
  {
    "date": "Jan 23",
    "time-wise": 0,
    "frying-nemo": 0
  },
  {
    "date": "Jan 24",
    "time-wise": 1,
    "frying-nemo": 2
  },
  {
    "date": "Jan 25",
    "time-wise": 3,
    "frying-nemo": 1,
    "graduation-project": 1
  },
  {
    "date": "Jan 26",
    "time-wise": 3,
    "frying-nemo": 2
  },
  {
    "date": "Jan 27",
    "time-wise": 2,
    "frying-nemo": 2,
    "typing-test": 1,
  },
  {
    "date": "Jan 28",
    "time-wise": 1,
    "frying-nemo": 2
  },
  {
    "date": "Jan 29",
    "time-wise": 3,
    "frying-nemo": 1,
    "graduation-project": 1
  },
  {
    "date": "Jan 30",
    "time-wise": 3,
    "frying-nemo": 2
  },
  {
    "date": "Jan 31",
    "time-wise": 2,
    "frying-nemo": 2,
    "typing-test": 1,
  },
];

const projects = [
  { name: "frying-nemo", color: "#FF9800" },
  { name: "graduation-project", color: "#559ae7" },
  { name: "time-wise", color: "#9C27B0" },
  { name: "typing-test", color: "#FCBD49" },
];

const MyBarChart = () => {
  return (
    <div className="bar-chart">
      <BarChart barSize={20} barGap={10} width={1000} height={250} data={timeline}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"date"} />
        <YAxis />
        <Tooltip />
        <Legend />
        {projects.map((project) =>
          <Bar legendType="circle" dataKey={project.name} stackId="a" fill={project.color} />)}
      </BarChart>
    </div>
  )
}

export default MyBarChart;