import { useState, useRef, useMemo } from "react";
import { useQuery } from "@apollo/client";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import MATCHES_QUERY from "@/queries/MatchesQuery";
import MatchesList from "./MatchesList";
import updateMatchesQuery from "@/utils/updateMatchesQuery";

const MatchesListContainer = () => {
  const [filter, setFilter] = useState("ALL");
  const loaderRef = useRef();
  const { loading, error, data, fetchMore } = useQuery(MATCHES_QUERY, {
    variables: { first: 10, filter },
  });

  const loadMoreMatches = () => {
    fetchMore({
      variables: {
        first: 10,
        after: data.matches.pageInfo.endCursor,
        filter,
      },
      updateQuery: updateMatchesQuery,
    });
  };

  const counts = useMemo(
    () => ({
      ALL: data?.matches?.pageInfo?.matchCounts?.all,
      RESULT: data?.matches?.pageInfo?.matchCounts?.result,
      LIVE: data?.matches?.pageInfo?.matchCounts?.live,
      UPCOMING: data?.matches?.pageInfo?.matchCounts?.upcoming,
    }),
    [data]
  );

  useInfiniteScroll(loaderRef, loadMoreMatches);

  return (
    <MatchesList
      loading={loading}
      error={error}
      data={data}
      filter={filter}
      setFilter={setFilter}
      counts={counts}
      loaderRef={loaderRef}
    />
  );
};

export default MatchesListContainer;
