import React from 'react';
import { FaSpinner } from 'react-icons/fa';

export const LoadingIndicator = () => {
  return (
    <div data-testid="container-div" className="flex items-center justify-center h-screen">
      <FaSpinner
        data-testid="spinner-icon"
        className="animate-spin text-4xl text-gray-500"
      />
    </div>
  );
};
