import { FC } from 'react';
import { motion } from 'framer-motion';

const DocsPage: FC = () => {
  const sections = [
    {
      title: 'Getting Started',
      content: [
        {
          heading: 'Introduction',
          text: 'MCP Coin is a revolutionary protocol that enables the creation, trading, and management of AI context packages using blockchain technology.',
        },
        {
          heading: 'Quick Start',
          text: 'To get started with MCP Coin, you need to connect your Solana wallet and have some MCP tokens. You can then create, buy, or sell AI context packages.',
        },
      ],
    },
    {
      title: 'Context Packages',
      content: [
        {
          heading: 'Structure',
          text: 'Context packages are structured JSON objects that contain memory, instructions, and metadata. They can be minted as NFTs and traded on the marketplace.',
        },
        {
          heading: 'Creation',
          text: 'Create context packages using our visual interface or programmatically using our SDK. Each package can be customized with specific AI behaviors and memories.',
        },
      ],
    },
    {
      title: 'Smart Contracts',
      content: [
        {
          heading: 'Overview',
          text: 'Our smart contracts are built on Solana and handle the minting, trading, and management of context packages. They ensure secure and transparent transactions.',
        },
        {
          heading: 'Integration',
          text: 'Integrate MCP Coin into your applications using our Solana program interface. We provide comprehensive documentation and examples.',
        },
      ],
    },
    {
      title: 'API Reference',
      content: [
        {
          heading: 'Authentication',
          text: 'All API requests require authentication using your API key. You can obtain an API key from the developer dashboard.',
        },
        {
          heading: 'Endpoints',
          text: 'Our REST API provides endpoints for managing context packages, handling transactions, and interacting with the marketplace.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold gradient-text mb-8">
            Documentation
          </h1>
          <p className="text-gray-400 mb-12">
            Welcome to the MCP Coin documentation. Here you'll find everything you
            need to know about using our platform.
          </p>

          <div className="space-y-12">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="card"
              >
                <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
                <div className="space-y-8">
                  {section.content.map((item, itemIndex) => (
                    <div key={item.heading}>
                      <h3 className="text-xl font-medium mb-3">
                        {item.heading}
                      </h3>
                      <p className="text-gray-400">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 card">
            <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
            <p className="text-gray-400 mb-4">
              If you need assistance or have questions, our team is here to help.
            </p>
            <div className="flex gap-4">
              <a
                href="https://discord.gg/mcpcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Join Discord
              </a>
              <a
                href="https://github.com/mcpcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DocsPage; 