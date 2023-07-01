import { BarChart, Bar, YAxis, CartesianGrid, XAxis, Tooltip, Legend } from "recharts"

const timeline = [
  {
    "date": "Dec 3, 20220",
    "time-wise": 0,
    "frying-nemo": 1,
  },
  {
    "date": "Dec 3, 20221",
    "time-wise":2,
    "frying-nemo": 1
  },
  {
    "date": "Jan 1, 2022",
    "time-wise": 0,
    "frying-nemo": 0
  },
  {
    "date": "Jan 2, 2022",
    "time-wise": 1,
    "frying-nemo": 2
  },
  {
    "date": "Jan 3, 2022",
    "time-wise": 3,
    "frying-nemo": 1,
    "graduation-project": 1
  },
  {
    "date": "Jan 4, 2022",
    "time-wise": 3,
    "frying-nemo": 2
  },
  {
    "date": "Jan 5, 2022",
    "time-wise": 2,
    "frying-nemo": 2,
    "typing-test": 1,
  },
]


// Orange: #FF9800
// Red: #F44336
// Purple: #9C27B0

const projects = [
  { name: "typing-test", color: "#FFEB3B" },
  { name: "frying-nemo", color: "#FF9800" },
  { name: "graduation-project", color: "#F44336" },
  { name: "time-wise", color: "#9C27B0" },
]
const MyBarChart = () => {
  return (
    <div className="bar-chart">
      <BarChart barSize={20} barGap={10} width={730} height={250} data={timeline}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {projects.map((project) =>
          <Bar dataKey={project.name} stackId="a" fill={project.color} />)}
      </BarChart>
    </div>
  )
}

export default MyBarChart;
