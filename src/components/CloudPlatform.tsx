'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CloudPlatformProps {
  onClose: () => void;
}

const CloudPlatform: React.FC<CloudPlatformProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
        <h2 className="text-3xl font-bold mb-6 text-center">Cloud Platform</h2>
        
        <div className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Environment Setup</h3>
            <p className="text-gray-600">
              Your cloud environment is being prepared. This includes setting up the
              necessary infrastructure and configurations.
            </p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Development Tools</h3>
            <p className="text-gray-600">
              Access development tools and resources to build and deploy your
              applications seamlessly.
            </p>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Documentation</h3>
            <p className="text-gray-600">
              Comprehensive guides and documentation to help you get started and
              make the most of the platform.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CloudPlatform; 