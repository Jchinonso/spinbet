import formatDate from "@/utils/formatDate";

export const getStatusTextAndColor = (node) => {
  let statusText = "";
  let textColor = "";

  switch (node?.status?.type) {
    case "finished":
      statusText = "FT";
      textColor = "rgb(34 197 94)";
      break;
    case "inprogress":
      statusText = "Live";
      textColor = "rgb(234 179 8)";
      break;
    case "notstarted":
      statusText = formatDate(node.timestamp);
      textColor = "rgb(209 213 219)";
      break;
    default:
      statusText = "Canceled";
      textColor = "rgb(239 68 68)";
  }

  return { statusText, textColor };
};


