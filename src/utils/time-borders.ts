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
  const day = time.getDay();
  return monthName + " " + day;
};

export const whatTheTime = (timeStamp: string) => {
  const time = new Date(Number(timeStamp));
  const minutes = time.getMinutes();

  if (minutes > 59) {
    const hours = time.getHours();
    return hours + " h";
  } else if (minutes < 1) {
    const seconds = time.getSeconds();
      return seconds + " sec";
    } else {
      return minutes + " min";
    }
};
