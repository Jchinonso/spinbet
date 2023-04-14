import React from "react";
import classNames from "classnames";
import { getStatusTextAndColor } from "@/utils/getStatusTextAndColor";

const LiveStatus = ({ node }) => {
  const { statusText, textColor } = getStatusTextAndColor(node);

  const spanClasses = classNames(
    "text-sm",
    textColor,
    "block",
    "mb-3"
  );

  console.log(spanClasses, "====")

  return <span className={spanClasses}>{statusText}</span>;
};

export default React.memo(LiveStatus);
