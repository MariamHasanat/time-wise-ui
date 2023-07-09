import './bar-chart.css'
import { BarChart, Bar, YAxis, CartesianGrid, XAxis, Tooltip, Legend } from "recharts"
import { useEffect, useState } from 'react'
import { Spin } from 'antd';


const MyBarChart = () => {
  const [timeline, setTimeLine] = useState<[any] | null>();
  const [projects, setProjects] = useState<[any] | null>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
  }, [])
  return (
    <div className="bar-chart">
      {
        timeline && projects ?
          <>
            <p className="y-axis-label">Hours</p>
            <BarChart barSize={20} barGap={10} width={1000} height={250} data={timeline}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={"date"} />
              <YAxis />
              <Tooltip />
              {projects ?
                projects.map((project, key) =>
                  <Bar key={key} legendType="circle" dataKey={project.name} stackId="a" fill={project.color} />)
                : "no projects"}
              <Legend />
            </BarChart>
            <p className="x-axis-label">Date</p>
          </>
          : <div className='barchart-spinner'><Spin spinning={loading} />
            {!loading && 'no data found'}</div>
      }
    </div>
  )
}

export default MyBarChart;