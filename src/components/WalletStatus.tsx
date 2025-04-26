'use client';

import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WalletStatus: FC = () => {
  const { connected, publicKey } = useWallet();

  if (!connected) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed top-4 right-4 p-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-gray-700/30 z-50"
      >
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          <span className="text-gray-300">Connected: {publicKey?.toBase58().slice(0, 6)}...{publicKey?.toBase58().slice(-4)}</span>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
          <div className="stat-mini">
            <span className="text-gray-400">Balance</span>
            <span className="text-white font-mono">0.00 SOL</span>
          </div>
          <div className="stat-mini">
            <span className="text-gray-400">Contexts</span>
            <span className="text-white font-mono">0</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}; 