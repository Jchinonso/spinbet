import React from "react";

const FilterButton = ({
  filterType,
  activeFilter,
  handleFilterChange,
  count,
}) => {
  return (
    <button
      key={filterType}
      className={`group flex items-center bg-gray-300 px-4 py-2 mr-2 mb-2 ${
        activeFilter === filterType ? "font-bold" : ""
      }`}
      onClick={() => handleFilterChange(filterType)}
    >
      <span className="mr-2">{filterType}</span>
      <span className="text-xs bg-white text-gray-800 px-2 py-1 rounded-full group-hover:bg-gray-200">
        {count}
      </span>
    </button>
  );
};

export default React.memo(FilterButton);
