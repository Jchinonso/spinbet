import React from 'react';
import LiveStatus from './LiveStatus';
import StatusIndicator from './StatusIndicator';
import TeamName from './TeamName';

const Match = ({ node, testId }) => {
  return (
    <li
      key={node.id}
      data-testid={testId}
      className="border rounded-lg p-4 bg-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300 text-white flex flex-col items-center"
      style={{ minHeight: '200px' }}
    >
      <span className="text-sm text-gray-300 block mb-1 uppercase">
        {node?.country}
      </span>
      <span className="text-lg text-gray-300 block mb-3 font-bold">
        {node?.competition}
      </span>
      <LiveStatus node={node} testId={`live-status-${testId}`} />
      <span className="text-lg font-semibold mb-4">
        {node?.homeScore?.current} - {node?.awayScore?.current}
      </span>
      <div className="flex justify-between items-center  mb-2 space-x-2">
        <div className="w-1/3 text-center">
          <TeamName name={node.homeTeam.name} />
        </div>
        <div className="w-1/3 px-6 text-center">
          <StatusIndicator
            status={node?.status?.type}
            liveStatus={node?.liveStatus}
          />
        </div>
        <div className="w-1/3 text-center">
          <TeamName name={node.awayTeam.name} />
        </div>
      </div>
    </li>
  );
};

export default React.memo(Match);
