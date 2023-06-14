function calculateTimeInSeconds(timeInSecond: number): (number | string)[] {
  let hours: number = Math.floor(timeInSecond / 3600);
  let minutes: number = Math.floor((timeInSecond - (hours * 3600)) / 60);
  let seconds: number = timeInSecond - (hours * 3600) - (minutes * 60);
  return [
    hours < 10 ? `0${hours}` : hours,
    minutes < 10 ? `0${minutes}` : minutes,
    seconds < 10 ? `0${seconds}` : seconds,
  ]
}

export default calculateTimeInSeconds;