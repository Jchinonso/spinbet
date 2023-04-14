const applyFilter = (data, filter) => {
  if (!filter) return data;
  switch (filter) {
    case "RESULT":
      return data.filter((match) => match.status.type === "finished");
    case "LIVE":
      return data.filter((match) => match.status.type === "inprogress");
    case "UPCOMING":
      return data.filter((match) => match.status.type === "notstarted");
    default:
      return data;
  }
};

export default applyFilter;
