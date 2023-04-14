import React from "react";

const TeamName = ({ name }) => {
  return (
    <span
      className={`text-base  md-truncate-8 sm:text-sm md:text-sm lg:text-lg font-semibold truncate  w-16 sm:w-20 md:w-28 lg:w-32 block`}
    >
      {name}
    </span>
  );
};

export default React.memo(TeamName);
