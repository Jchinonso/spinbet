import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { getColor, getProgress } from '@/utils/statusUtils';

const StatusIndicator = ({ status, liveStatus }) => {
  const progress = getProgress(status, liveStatus);
  const color = getColor(status);

  return (
    <div className="w-10 h-10" data-testid="CircularProgressbar">
      <CircularProgressbar
        value={progress}
        maxValue={90}
        text={
          status === 'canceled' || status === 'notstarted' ? null : liveStatus
        }
        strokeWidth={8}
        styles={buildStyles({
          strokeLinecap: 'butt',
          textSize: '2.5rem',
          textColor: 'white',
          pathColor: color,
          trailColor:
            status === 'canceled' || status === 'notstarted'
              ? 'gray'
              : 'transparent',
          pathTransitionDuration: 0.5,
        })}
      />
    </div>
  );
};

export default React.memo(StatusIndicator);
