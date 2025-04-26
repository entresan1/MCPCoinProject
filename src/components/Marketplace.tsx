'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { ContextPackage } from '../lib/context-protocol';

interface MarketplaceProps {
  onPurchase: (contextId: string) => void;
}

const Marketplace: FC<MarketplaceProps> = ({ onPurchase }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Fake marketplace data
  const fakeContexts: ContextPackage[] = [
    {
      id: '1',
      version: '1.0.0',
      name: 'Professional Email Writer',
      description: 'AI context for writing professional business emails',
      memory: {
        preferences: {
          tone: 'professional',
          language: 'English',
        },
      },
      instructions: {
        personality: 'Professional and concise',
        behavior: ['Use formal language', 'Include clear call-to-action'],
      },
      metadata: {
        creator: '0x123...abc',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        tags: ['business', 'communication'],
        category: 'business',
        price: 100,
        usageCount: 150,
        rating: 4.8,
      },
    },
    {
      id: '2',
      version: '1.0.0',
      name: 'Creative Storyteller',
      description: 'AI context for generating creative stories and narratives',
      memory: {
        preferences: {
          genre: 'fantasy',
          style: 'descriptive',
        },
      },
      instructions: {
        personality: 'Creative and imaginative',
        behavior: ['Use vivid descriptions', 'Create engaging plots'],
      },
      metadata: {
        creator: '0x456...def',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        tags: ['creative', 'writing'],
        category: 'creative',
        price: 150,
        usageCount: 200,
        rating: 4.9,
      },
    },
  ];

  const categories = ['all', 'business', 'creative', 'technical', 'personal'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl font-bold gradient-text mb-4 md:mb-0">
          Context Marketplace
        </h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search contexts..."
            className="input w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="input w-40"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fakeContexts.map((context, index) => (
          <motion.div
            key={context.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card hover:shadow-lg transition-shadow duration-200"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{context.name}</h3>
              <p className="text-gray-400 mb-4">{context.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-primary-400 font-semibold">
                  {context.metadata.price} MCP
                </span>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span>{context.metadata.rating}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {context.metadata.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                className="btn-primary w-full"
                onClick={() => onPurchase(context.id)}
              >
                Purchase Context
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace; 