import { FC } from 'react';
import { motion } from 'framer-motion';
import ContextCreator from '../../components/ContextCreator';

const CreatePage: FC = () => {
  const handleCreateContext = (contextData: any) => {
    // Fake context creation handler
    console.log('Creating new context:', contextData);
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
                Create Your AI Context
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Design and monetize your own AI context packages. Share your expertise
                with the world and earn MCP tokens.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Creation Form */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <ContextCreator onCreateContext={handleCreateContext} />
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-900/50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold gradient-text text-center mb-12">
              Why Create Contexts?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Monetize Your Expertise',
                  description:
                    'Turn your knowledge into valuable AI contexts and earn MCP tokens.',
                  icon: '💰',
                },
                {
                  title: 'Global Reach',
                  description:
                    'Share your contexts with AI developers and users worldwide.',
                  icon: '🌍',
                },
                {
                  title: 'Continuous Income',
                  description:
                    'Earn royalties every time your context is used or traded.',
                  icon: '📈',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center p-6"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage; 