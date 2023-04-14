export const getProgress = (status, liveStatus) => {
  if (status === "inprogress") {
    if (liveStatus === "HT") {
      return 45;
    }
    return Math.min(90, parseInt(liveStatus, 10));
  } else if (status === "finished") {
    return 90;
  } else {
    return 0;
  }
};

export const getColor = (status) => {
  if (status === "finished" || status === "inprogress") {
    return "green";
  } else {
    return "gray";
  }
};
