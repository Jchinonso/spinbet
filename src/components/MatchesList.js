import React from "react";
import MatchesFilter from "./MatchesFilter";
import Match from "./Match";

const MatchesList = ({
  loading,
  error,
  data,
  filter,
  setFilter,
  counts,
  loaderRef,
}) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="font-barlow">
      <h1 className="text-2xl font-bold mb-4">Matches</h1>
      <MatchesFilter filter={filter} setFilter={setFilter} counts={counts} />
      <div
        className="overflow-auto hide-scrollbar bg-gray-700 rounded-lg shadow"
        style={{ maxHeight: "calc(100vh - 12rem)", marginBottom: "20px" }}
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {data.matches.edges.map(({ node }) => (
            <Match key={node.id} node={node} />
          ))}
        </ul>
      </div>
      {data.matches.pageInfo.hasNextPage && (
        <div ref={loaderRef} className="text-center py-4">
          <p className="inline-block">Loading more matches...</p>
        </div>
      )}
    </div>
  );
};

export default React.memo(MatchesList);
