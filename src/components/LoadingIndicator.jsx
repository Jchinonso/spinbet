import React from "react";
import { FaSpinner } from "react-icons/fa";

export const LoadingIndicator = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <FaSpinner className="animate-spin text-4xl text-gray-500" />
    </div>
  );
}
