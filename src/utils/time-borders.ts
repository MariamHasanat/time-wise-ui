export const timeInHoursAndMinutes = (timeStamp: string) => {
  const time = new Date(Number(timeStamp));
  const hours = time.getHours();
  const minutes = time.getMinutes();
  if (minutes > 9) {
    return hours + ":" + minutes;
  } else {
    return hours + ":0" + minutes;
  }
};
export const timeAsADate = (timeStamp: string) => {
  const time = new Date(Number(timeStamp));
  // Get the month name
  const monthName = time.toLocaleString("default", { month: "long" });
  //const month = time.getMonth();
  const day = time.getDay();
  return monthName + " " + day;
};
