export function convertToTimestamp(timeString: string): number {
  // Create a Date object from the time string
  const date = new Date(timeString);

  // Get the timestamp in milliseconds
  const timestamp = date.getTime();

  // Return the timestamp as a number
  return timestamp;
}

export function convertFromTimestamp(timestamp: number): string {
  // Create a Date object from the timestamp
  const date = new Date(timestamp);

  // Get the components of the date
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Month is zero-based
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  // Create the time string in the desired format
  const timeString = `${year}-${month}-${day}T${hours}:${minutes}`;

  // Return the time string
  return timeString;
}
