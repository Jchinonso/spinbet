import React from "react";

const useBorderStyle = (status, liveStatus) => {
  return React.useMemo(() => {
    if (status === "finished") {
      return "border-green-500";
    } else if (status === "inprogress") {
      const progress = Math.min(90, parseInt(liveStatus));
      const degree = Math.round((progress / 90) * 360);
      return `bg-conic-to-${degree}-from-green-500`;
    } else if (status === "notstarted" || status === "canceled") {
      return "border-gray-300";
    }
  }, [status, liveStatus]);
};

export default useBorderStyle;
