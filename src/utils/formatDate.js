const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const daySuffix =
    ["th", "st", "nd", "rd"][(((day + 90) % 100) - 10) % 10] || "th";
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${month} ${day}${daySuffix} ${hours}:${minutes}`;
};

export default formatDate;
