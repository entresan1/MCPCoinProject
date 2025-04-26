import { FC } from 'react';
import { motion } from 'framer-motion';
import Marketplace from '../../components/Marketplace';

const MarketplacePage: FC = () => {
  const handlePurchase = (contextId: string) => {
    // Fake purchase handler
    console.log('Purchasing context:', contextId);
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="relative">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-900/20 to-secondary-900/20 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                AI Context Marketplace
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover, purchase, and trade high-quality AI context packages.
                Enhance your AI models with specialized knowledge and behaviors.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 -mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Total Contexts', value: '1,234' },
              { label: 'Active Creators', value: '567' },
              { label: 'Total Value', value: '890,000 MCP' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <h3 className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marketplace Section */}
        <div className="py-12">
          <Marketplace onPurchase={handlePurchase} />
        </div>

        {/* Featured Creators */}
        <div className="bg-gray-900/50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold gradient-text text-center mb-12">
              Featured Creators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  name: 'AI Research Lab',
                  role: 'Technical Contexts',
                  contexts: 45,
                  rating: 4.9,
                },
                {
                  name: 'Creative AI Studio',
                  role: 'Creative Contexts',
                  contexts: 32,
                  rating: 4.8,
                },
                {
                  name: 'Business AI Solutions',
                  role: 'Business Contexts',
                  contexts: 28,
                  rating: 4.7,
                },
                {
                  name: 'Personal AI Assistant',
                  role: 'Personal Contexts',
                  contexts: 15,
                  rating: 4.9,
                },
              ].map((creator, index) => (
                <motion.div
                  key={creator.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-1">{creator.name}</h3>
                  <p className="text-gray-400 mb-2">{creator.role}</p>
                  <div className="flex justify-center items-center gap-4 text-sm">
                    <span className="text-gray-400">
                      {creator.contexts} contexts
                    </span>
                    <span className="text-yellow-400">★ {creator.rating}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage; 