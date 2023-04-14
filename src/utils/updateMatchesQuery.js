const updateMatchesQuery = (prev, { fetchMoreResult }) => {
  if (!fetchMoreResult) return prev;
  return {
    matches: {
      ...fetchMoreResult.matches,
      edges: [...prev.matches.edges, ...fetchMoreResult.matches.edges],
    },
  };
};

export default updateMatchesQuery;
