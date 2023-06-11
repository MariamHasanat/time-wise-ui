import React from 'react';

export const TimeTrackingContext = React.createContext(null || {});

const TimeTrackingProvider = (props: any) => {
 
  const [timeInSecond, setTimeInSecond] = React.useState<number>(0);
 
  const setTimeInSecondsOverride = (timeInSecond: number) => {
 
    setTimeInSecond(timeInSecond);
  };
 
  return (
    <TimeTrackingContext.Provider value={{ timeInSecond, setTimeInSecond: setTimeInSecondsOverride }}>
      {props.children}
    </TimeTrackingContext.Provider>
  )
}
export default TimeTrackingProvider;