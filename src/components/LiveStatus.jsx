import React from "react";
import { getStatusTextAndColor } from "@/utils/getStatusTextAndColor";

const LiveStatus = ({ node }) => {
  const { statusText, textColor } = getStatusTextAndColor(node);
  return <span className="text-sm block mb-3" style={{color: textColor}}>{statusText.toLocaleUpperCase()}</span>;
};

export default React.memo(LiveStatus);
