const countMatchesByStatus = (data) => {
  const counts = {
    all: data.length,
    result: 0,
    live: 0,
    upcoming: 0,
  };

  data.forEach((match) => {
    switch (match.status.type) {
      case "finished":
        counts.result++;
        break;
      case "inprogress":
        counts.live++;
        break;
      case "notstarted":
        counts.upcoming++;
        break;
      default:
        break;
    }
  });

  return counts;
};

export default countMatchesByStatus;
