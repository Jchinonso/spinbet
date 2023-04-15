import React from "react";
import { getStatusTextAndColor } from "@/utils/getStatusTextAndColor";

const LiveStatus = ({ node, testId }) => {
  const { statusText, textColor } = getStatusTextAndColor(node);
  return <span data-testid={testId} className="text-sm block mb-3 uppercase" style={{color: textColor}}>{statusText}</span>;
};

export default React.memo(LiveStatus);
