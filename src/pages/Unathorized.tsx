import React from 'react';

export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Unauthorized Access</h1>
      <p className="text-lg text-gray-700 mb-2">
        You are not authorized to access this resource.
      </p>
      <p className="text-lg text-gray-700">
        If you think this is a mistake, please contact our{' '}
        <a 
          href="mailto:belammuia0@gmail.com" 
          className="text-blue-500 underline hover:text-blue-700"
        >
          system administrator
        </a>.
      </p>
    </div>
  );
}
