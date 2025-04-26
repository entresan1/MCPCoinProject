import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { ContextPackage } from '../lib/context-protocol';

interface AIWalletProps {
  walletAddress: string;
  balance: number;
  contexts: ContextPackage[];
}

const AIWallet: FC<AIWalletProps> = ({ walletAddress, balance, contexts }) => {
  const [activeTab, setActiveTab] = useState<'contexts' | 'transactions'>('contexts');

  // Fake transaction data
  const transactions = [
    {
      id: '1',
      type: 'purchase',
      contextId: '1',
      amount: 100,
      timestamp: Date.now() - 86400000, // 1 day ago
    },
    {
      id: '2',
      type: 'sale',
      contextId: '2',
      amount: 150,
      timestamp: Date.now() - 172800000, // 2 days ago
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card max-w-4xl mx-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold gradient-text">AI Wallet</h2>
              <p className="text-gray-400 mt-1">{walletAddress}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400">Balance</p>
              <p className="text-3xl font-bold text-primary-400">{balance} MCP</p>
            </div>
          </div>

          <div className="flex border-b border-gray-700 mb-6">
            <button
              className={`px-4 py-2 ${
                activeTab === 'contexts'
                  ? 'text-primary-400 border-b-2 border-primary-400'
                  : 'text-gray-400'
              }`}
              onClick={() => setActiveTab('contexts')}
            >
              My Contexts
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'transactions'
                  ? 'text-primary-400 border-b-2 border-primary-400'
                  : 'text-gray-400'
              }`}
              onClick={() => setActiveTab('transactions')}
            >
              Transactions
            </button>
          </div>

          {activeTab === 'contexts' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contexts.map((context, index) => (
                <motion.div
                  key={context.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-lg p-4"
                >
                  <h3 className="text-lg font-semibold mb-2">{context.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{context.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">
                      Usage: {context.metadata.usageCount}
                    </span>
                    <span className="text-sm text-primary-400">
                      {context.metadata.price} MCP
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {transactions.map((tx) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg"
                >
                  <div>
                    <p className="font-semibold">
                      {tx.type === 'purchase' ? 'Purchased' : 'Sold'} Context
                    </p>
                    <p className="text-sm text-gray-400">
                      {new Date(tx.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-semibold ${
                        tx.type === 'purchase' ? 'text-red-400' : 'text-green-400'
                      }`}
                    >
                      {tx.type === 'purchase' ? '-' : '+'}{tx.amount} MCP
                    </p>
                    <p className="text-sm text-gray-400">ID: {tx.contextId}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIWallet; 