import './bar-chart.css'
import { BarChart, Bar, YAxis, CartesianGrid, XAxis, Tooltip, Legend } from "recharts"
import showMessage from '../../../utils/message/message';
import { useEffect, useState } from 'react'
import { Spin } from 'antd';
import useFetchProjects from '../../../hooks/dashboard/bar-chart/projects.hook';
import useFetchTimeline from '../../../hooks/dashboard/bar-chart/timeline.hook';


const MyBarChart = (dateRange: any) => {
  const [loading, setLoading] = useState(true);
  const projectsHook = useFetchProjects();
  const timelineHook = useFetchTimeline()
  useEffect(() => {
    if (dateRange?.length) {
      console.log('range in barchart', dateRange)
      projectsHook.fetchProjects();
      timelineHook.fetchtimeline(dateRange[0], dateRange[1]);
      console.log('date range 0 and date range 1 in bar chart',dateRange[0], dateRange[1])
    }
    else{
      console.log('NOOOOO')
    }
    setLoading(false);
  }, [dateRange])

  return (
    <div className="bar-chart">
      {
        timelineHook.timeline && projectsHook.projects ?
          <>
            <p className="y-axis-label">Hours</p>
            <BarChart barSize={20} barGap={10} width={1000} height={250} data={timelineHook.timeline}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={"date"} />
              <YAxis />
              <Tooltip />
              {projectsHook.projects ?
                projectsHook.projects.map((project, key) =>
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