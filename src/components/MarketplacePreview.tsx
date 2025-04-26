'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const mockContexts = [
  {
    id: 1,
    name: 'Creative Writer AI',
    description: 'Specialized in creative writing and storytelling',
    price: 2.5,
    rating: 4.8,
    sales: 128,
  },
  {
    id: 2,
    name: 'Financial Advisor AI',
    description: 'Expert in financial analysis and investment strategies',
    price: 5.0,
    rating: 4.9,
    sales: 256,
  },
  {
    id: 3,
    name: 'Technical Support AI',
    description: 'Trained for software and hardware troubleshooting',
    price: 3.2,
    rating: 4.7,
    sales: 192,
  },
];

export const MarketplacePreview: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {mockContexts.map((context, index) => (
        <motion.div
          key={context.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="marketplace-card group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-300 rounded-xl" />
          <div className="relative p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white">{context.name}</h3>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                {context.price} SOL
              </span>
            </div>
            <p className="text-gray-400 mb-4">{context.description}</p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">{context.rating}</span>
              </div>
              <span className="text-gray-400">{context.sales} sales</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Preview Context
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}; 