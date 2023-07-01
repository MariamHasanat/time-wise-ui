import { BarChart, Bar, YAxis, CartesianGrid, XAxis, Tooltip, Legend } from "recharts"

const data = [
  {
    "name": "Dec 30",
    "time-wise": 4000,
    "frying-nemo": 2400
  },
  {
    "name": "Dec 31",
    "time-wise": 3000,
    "frying-nemo": 1398
  },
  {
    "name": "Jan 1",
    "time-wise": 2000,
    "frying-nemo": 9800
  },
  {
    "name": "Jan 2",
    "time-wise": 2780,
    "frying-nemo": 3908
  },
  {
    "name": "Jan 3",
    "time-wise": 2780,
    "frying-nemo": 3908
  },
  {
    "name": "Jan 4",
    "time-wise": 5780,
    "frying-nemo": 3908
  },
  {
    "name": "Jan 5",
    "time-wise": 2780,
    "frying-nemo": 3008
  },
]

const MyBarChart = () => {
  return (
    <div className="bar-chart">
        <BarChart barSize={20} barGap={10} width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="time-wise" stackId="a" fill="#52469C" />
          <Bar dataKey="frying-nemo" stackId="a" fill="#c4d3fa" />
        </BarChart>
    </div>
  )
}

export default MyBarChart;
