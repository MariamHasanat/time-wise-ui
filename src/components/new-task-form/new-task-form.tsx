import React, { useEffect, useState } from 'react';
import './new-task-form.css';
import { Input } from 'antd';
import DropDown from '../drop-down/drop-down';
import StopWatch from '../stop-watch/stop-watch';
import ControlBtn from '../../services/control-button';
import showMessage from '../../utils/message/message';
import useTask, { ITask } from '../../hooks/tasks/task.hook';
// import getTimeInSeconds from '../../utils/get-time-in-seconds';

const NewTaskForm = (props: any) => {
  // const {...projects} = props;
  // console.log(projects.projectsId);
  // console.log("project");
  const projectsId: Array<any> = props.projectsId;
  console.log(projectsId);

  const [timeInSecond, setTimeInSecond] = React.useState<number>(0);
  const [dropdownLabel, setDropdownLabel] = React.useState<string>(localStorage.getItem('projectName')?.toString() || 'Projects');
  const [isRunning, setIsRunning] = React.useState<boolean>((Number(localStorage.getItem("startTime")?.toString()) > 0));
  const [taskDescription, setTaskDescription] = React.useState<string>(localStorage.getItem("taskDescription")?.toString() || '');
  const [selectedProject, setSelectedProject] = useState<string>('');

  const [taskInformation, setTaskInformation] = useState<ITask>({
    projectId: selectedProject,
    beginTime: "",
    endTime: "",
    description: "",
  })

  const submitTask = useTask();

  const handleRequired = () => {
    if (taskDescription.length > 0 && dropdownLabel !== 'Projects') {
      return true
    } else {
      showMessage('warning', "task description and project name is required")
      return false
    }
  }

  useEffect(() => {
    //Save the stopwatch time to localStorage whenever it changes
    localStorage.setItem('stopwatchTime', timeInSecond.toString());
  }, [timeInSecond]);

  useEffect(() => {
    localStorage.setItem("taskDescription", taskDescription)
  }, [taskDescription])

  useEffect(() => {
    console.log("projectsId", projectsId);

    const proHasId = projectsId.find((proName) => proName.name === dropdownLabel);
    const proId = proHasId?.id;
    setSelectedProject(proId)
    console.log("selectedId", selectedProject);


    // eslint-disable-next-line
  }, [dropdownLabel])

  return (
    <form className='new-task-form'>
      <Input required={true} disabled={isRunning} placeholder="Task Description" type='string' style={{ width: '300px', marginRight: '50px', height: '30px' }} value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
      <DropDown projects={props.projects} dropdownLabel={dropdownLabel} setDropdownLabel={setDropdownLabel} isRunning={isRunning} />
      <StopWatch timeInSecond={timeInSecond} />
      <ControlBtn taskInformation={taskInformation} setTaskInformation={setTaskInformation} handleSubmit={submitTask.add} setTimeInSecond={setTimeInSecond} setDropdownLabel={setDropdownLabel} setIsRunning={setIsRunning} setTaskDescription={setTaskDescription} handleRequired={handleRequired} />
    </form>
  )
}

export default NewTaskForm;