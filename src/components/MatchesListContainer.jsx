import { useState, useRef, useMemo, lazy, Suspense } from 'react';
import { useQuery } from '@apollo/client';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import MATCHES_QUERY from '@/queries/MatchesQuery';
import updateMatchesQuery from '@/utils/updateMatchesQuery';
import { LoadingIndicator } from './LoadingIndicator';

const LazyMatchesList = lazy(() => import('./MatchesList'));

const MatchesListContainer = () => {
  const [filter, setFilter] = useState('ALL');
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

  const counts = useMemo(() => {
    const pageInfo = data?.matches?.pageInfo;
    return {
      ALL: pageInfo?.matchCounts?.all,
      RESULT: pageInfo?.matchCounts?.result,
      LIVE: pageInfo?.matchCounts?.live,
      UPCOMING: pageInfo?.matchCounts?.upcoming,
    };
  }, [data]);

  useInfiniteScroll(loaderRef, loadMoreMatches);

  return (
    <Suspense fallback={<LoadingIndicator />}>
      <LazyMatchesList
        loading={loading}
        error={error}
        data={data}
        filter={filter}
        setFilter={setFilter}
        counts={counts}
        loaderRef={loaderRef}
      />
    </Suspense>
  );
};

export default MatchesListContainer;
