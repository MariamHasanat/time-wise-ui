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

export const timeAsADate = (timeStamp: string): string => {
  const time = new Date(Number(timeStamp));
  const month = time.getMonth();
  const day = time.getDate();

  // Create an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the month name using the month index
  const monthName = monthNames[month];

  return `${monthName} ${day}`;
};

export function convertTimestampToDHMS(timestamp: number): string {
  const seconds = Math.floor(timestamp / 1000);
  const days = Math.floor(seconds / (24 * 60 * 60));
  const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const remainingSeconds = seconds % 60;

  let formattedTime = "";

  if (days > 0) {
    formattedTime += `${days} days, `;
  }

  if (hours > 0) {
    formattedTime += `${hours} hours, `;
  }

  if (minutes > 0) {
    formattedTime += `${minutes} minutes, `;
  }

  if (remainingSeconds > 0) {
    formattedTime += `${remainingSeconds} seconds`;
  }

  // Trim any trailing comma and space
  formattedTime = formattedTime.replace(/,\s*$/, "");

  return formattedTime;
}
