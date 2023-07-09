import './bar-chart.css'
import { BarChart, Bar, YAxis, CartesianGrid, XAxis, Tooltip, Legend } from "recharts"
import { useEffect, useState } from 'react'
import { Spin } from 'antd';
import useFetchProjects from '../../../hooks/dashboard/bar-chart/projects.hook';
import useFetchTimeline from '../../../hooks/dashboard/bar-chart/timeline.hook';
import convertGivenToWanted from '../../../utils/project-data';

const MyBarChart = (dateRange: any) => {
  const [loading, setLoading] = useState(true);
  const [newTimeLine , setneweTimeLine] = useState<any>([]);
  const projectsHook = useFetchProjects();
  const timelineHook = useFetchTimeline();
  useEffect(() => {
    if (dateRange){
      projectsHook.fetchProjects();
      timelineHook.fetchtimeline(dateRange.dateRange[0], dateRange.dateRange[1]).then(()=>{

       const manolya = convertGivenToWanted(timelineHook.timeline); 
       console.log(manolya);
       
       setneweTimeLine(manolya);
       console.log(newTimeLine);
      });
    }
    setLoading(false);
  }, [dateRange])

  return (
    <div className="bar-chart">
      {
        timelineHook.timeline && projectsHook.projects ?
          <>
            <p className="y-axis-label">Hours</p>
            <BarChart barSize={20} barGap={10} width={1000} height={250} data={newTimeLine}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={"date"} />
              <YAxis />
              <Tooltip />
              {projectsHook.projects ?
                projectsHook.projects.map((project, key) =>
                  <Bar key={key} legendType="circle" dataKey={project.name} stackId="a" fill={project.color} />)
                : "no projects"}
              <Legend />
            </BarChart >
            <p className="x-axis-label">Date</p>
          </>
          : <div className='barchart-spinner'><Spin spinning={loading} />
            {!loading && 'no data found'}</div>
      }
    </div>
  )
}

export default MyBarChart;