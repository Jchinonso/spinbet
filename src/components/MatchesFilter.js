import React from "react";
import FilterButton from "./FilterButton";

const MatchesFilter = ({ filter, setFilter, counts }) => {
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  return (
    <div className="mb-4 flex flex-wrap">
      {["ALL", "RESULT", "LIVE", "UPCOMING"].map((filterType) => (
        <FilterButton
          key={filterType}
          filterType={filterType}
          activeFilter={filter}
          handleFilterChange={handleFilterChange}
          count={counts[filterType]}
        />
      ))}
    </div>
  );
};

export default React.memo(MatchesFilter);
