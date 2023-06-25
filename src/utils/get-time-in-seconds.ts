const getTimeInSeconds = (timestamp: number) => {
  if (timestamp > 0) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timeInSeconds = hours * 3600 + minutes * 60 + seconds;

    return timeInSeconds;
  }
  else return 0
};

export default getTimeInSeconds;