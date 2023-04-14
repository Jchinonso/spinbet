import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const StatusIndicator = ({ status, liveStatus }) => {
  const getProgress = () => {
    if (status === "inprogress") {
      if (liveStatus === "HT") {
        return 45;
      }
      return Math.min(90, parseInt(liveStatus, 10));
    } else if (status === "finished") {
      return 90;
    } else {
      return 0;
    }
  };

  const getColor = () => {
    if (status === "finished" || status === "inprogress") {
      return "green";
    } else {
      return "gray";
    }
  };

  const progress = getProgress();
  const color = getColor();

  return (
    <div className="w-10 h-10">
      <CircularProgressbar
        value={progress}
        maxValue={90}
        text={status !== "canceled" ? liveStatus : ""}
        strokeWidth={8}
        styles={buildStyles({
          strokeLinecap: "butt",
          textSize: "2.5rem", // Increase text size
          textColor: "white",
          pathColor: color,
          trailColor:
            status === "canceled" || status === "notstarted"
              ? "gray"
              : "transparent",
          pathTransitionDuration: 0.5,
        })}
      />
    </div>
  );
};

export default React.memo(StatusIndicator);
