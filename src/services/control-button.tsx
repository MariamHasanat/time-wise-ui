import { useState, useEffect, useRef } from 'react';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import getTimeInSeconds from '../utils/get-time-in-seconds';
import useTask, { ITask } from '../hooks/tasks/task.hook';

type Props = {
  setTimeInSecond: Function;
  setDropdownLabel: Function;
  setIsRunning: Function;
  setTaskDescription: Function;
  handleRequired: Function;
  handleStartNewTask: Function;
  handleCompleteRunningTask: Function;
  taskInformation: ITask;
  setTaskInformation: Function;
  isRunning: boolean;
};

const ControlBtn = (props: Props) => {
  const task = useTask();

  // const taskID: number = task.taskId;
  const { setTaskInformation, handleStartNewTask, setTimeInSecond, setDropdownLabel, setIsRunning, setTaskDescription, handleRequired, taskInformation, handleCompleteRunningTask,
  } = props;
  const [startTime, setStartTime] = useState(JSON.parse(localStorage.getItem('startTime') || '0'));
  const [endTime, setEndTime] = useState(JSON.parse(localStorage.getItem('endTime') || '0'));
  const timerRef = useRef<NodeJS.Timer>();
  const [taskRef, setTaskRef] = useState<string>('');

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handlePlayButton = async () => {
    const startTimestamp = Date.now().toString();
    await handleStartNewTask({ ...taskInformation, beginTime: startTimestamp })
    console.log("taskRef", taskRef);

    setIsRunning(true);
    setStartTime(startTimestamp);
    timerRef.current = setInterval(() => {
      setTimeInSecond((previousState: number) => previousState + 1);
    }, 1000);
  };

  useEffect(() => {
    if (props.isRunning)
      setTaskRef(localStorage.getItem("taskID") || '');

  }, [props.isRunning])

  const handleStopButton = () => {
    clearTimer();
    setIsRunning(false);
    handleCompleteRunningTask({ _id: localStorage.getItem("taskID"), endTime: Date.now() })
    localStorage.setItem("taskID", "");
    setEndTime(Date.now());
    setStartTime(0);
    setTimeInSecond(0);
    setDropdownLabel('Projects');
    setTaskDescription('');
  };

  useEffect(() => {
    localStorage.setItem('startTime', startTime.toString());
    setTaskInformation({ ...taskInformation, beginTime: startTime.toString() });
    // eslint-disable-next-line
  }, [startTime]);

  useEffect(() => {
    localStorage.setItem('endTime', endTime.toString());
  }, [endTime]);

  useEffect(() => {
    if (startTime > 0) {
      timerRef.current = setInterval(() => {
        setTimeInSecond(getTimeInSeconds(Date.now()) - getTimeInSeconds(startTime));
      }, 1000);
    }

    return () => clearTimer();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {startTime === 0 ? (
        <Button
          onClick={(e) => {
            if (handleRequired()) {
              handlePlayButton();
            } else {
              return false;
            }
          }}
          type="primary"
          style={{ height: '30px', width: '30px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <PlayCircleOutlined style={{ fontSize: '18px' }} />
        </Button>
      ) : (
        <Button
          onClick={() => handleStopButton()}
          type="primary"
          style={{ height: '30px', width: '30px', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <PauseCircleOutlined style={{ fontSize: '18px' }} />
        </Button>
      )}
    </div>
  );
};

export default ControlBtn;
