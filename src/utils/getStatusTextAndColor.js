import formatDate from "@/utils/formatDate";

export const getStatusTextAndColor = (node) => {
  let statusText = "";
  let textColor = "";

  switch (node?.status?.type) {
    case "finished":
      statusText = "FT";
      textColor = "text-green-500";
      break;
    case "inprogress":
      statusText = "Live";
      textColor = "text-yellow-500";
      break;
    case "notstarted":
      statusText = formatDate(node.timestamp);
      textColor = "text-gray-300";
      break;
    default:
      statusText = "Canceled";
      textColor = "text-red-500";
  }

  return { statusText, textColor };
};


