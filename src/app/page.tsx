'use client';

import { FC, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useWallet } from '@solana/wallet-adapter-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { WalletStatus } from '../components/WalletStatus';
import { MarketplacePreview } from '../components/MarketplacePreview';
import CloudPlatform from '../components/CloudPlatform';
import { showProcessingSteps } from '../utils/toast';
import { Toaster } from 'react-hot-toast';

const WalletButton = dynamic(
  () => import('../components/ClientWalletButton').then(mod => mod.ClientWalletButton),
  { ssr: false }
);

const Home: FC = () => {
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll();
  const { connected } = useWallet();
  const [showCloud, setShowCloud] = useState(false);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    // Remove welcome modal trigger
    // if (connected) {
    //   setShowWelcome(true);
    // }
  }, [connected]);

  const handleLearnMore = async () => {
    await showProcessingSteps([
      'Loading documentation...',
      'Fetching latest updates...',
      'Preparing content...',
    ], 'Documentation ready! 📚');
  };

  const handlePreviewContext = async () => {
    await showProcessingSteps([
      'Initializing preview environment...',
      'Loading context data...',
      'Preparing visualization...',
      'Running test queries...',
    ], 'Preview ready! 🔍');
  };

  const handleStartBuilding = async () => {
    if (!connected) {
      await showProcessingSteps([
        'Please connect your wallet to continue...'
      ], 'Wallet connection required 🔒');
      return;
    }
    // Remove loading steps for building
    // await showProcessingSteps([
    //   'Preparing cloud environment...',
    //   'Initializing development tools...',
    //   'Configuring workspace...',
    //   'Setting up dependencies...',
    //   'Loading templates...',
    // ], 'Welcome to MCP Cloud! 🚀');
    setShowCloud(true);
  };

  if (showCloud) {
    return <CloudPlatform onClose={() => setShowCloud(false)} />;
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Toaster position="top-right" />
      <WalletStatus />
      
      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 animate-gradient-xy" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight 
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <Image
                src="/logo.png"
                alt="MCP Coin Logo"
                width={120}
                height={120}
                className="mx-auto"
              />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
              MCP Coin
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The Future of AI Context Economy — Where AI Memories and Personalities 
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> Transform into Valuable Digital Assets</span>
            </p>
            <div className="flex justify-center gap-6 mb-12">
              <WalletButton />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartBuilding}
                className="btn-secondary px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Ready to Build?
              </motion.button>
            </div>
            <div className="flex justify-center gap-8">
              <motion.div 
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-3xl font-bold text-blue-500">10K+</span>
                <span className="text-gray-400">Active Users</span>
              </motion.div>
              <motion.div 
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-3xl font-bold text-purple-500">50K+</span>
                <span className="text-gray-400">AI Contexts</span>
              </motion.div>
              <motion.div 
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-3xl font-bold text-pink-500">$2M+</span>
                <span className="text-gray-400">Total Volume</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <button
            onClick={() => scrollTo('features')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Revolutionary Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="feature-card group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-300 rounded-xl" />
                <div className="relative p-8">
                  <div className="w-16 h-16 mb-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLearnMore}
                    className="mt-6 w-full py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white font-semibold hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Preview Section */}
      <section id="marketplace" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Featured Contexts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
          >
            Explore our curated selection of AI contexts, each uniquely crafted to enhance your applications
          </motion.p>
          <MarketplacePreview />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="process-card"
            >
              <div className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl" />
                <div className="relative">
                  <h3 className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Create & Mint</h3>
                  <p className="text-gray-300 mb-8 text-lg">
                    Transform your AI innovations into valuable digital assets on the Solana blockchain.
                  </p>
                  <div className="space-y-6">
                    <div className="feature-item">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-white">Define AI Personalities</h4>
                      <p className="text-gray-400">Create unique AI personalities with custom traits, behaviors, and knowledge bases.</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleStartBuilding}
                        className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white font-semibold hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                      >
                        Start Creating
                      </motion.button>
                    </div>
                    <div className="feature-item">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-white">Package Memories</h4>
                      <p className="text-gray-400">Bundle conversation history, learned behaviors, and contextual understanding.</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleStartBuilding}
                        className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white font-semibold hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                      >
                        Package Now
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="process-card"
            >
              <div className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl" />
                <div className="relative">
                  <h3 className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Trade & Earn</h3>
                  <p className="text-gray-300 mb-8 text-lg">
                    Participate in the first-ever marketplace for AI context trading and monetization.
                  </p>
                  <div className="space-y-6">
                    <div className="feature-item">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-white">Monetize AI Contexts</h4>
                      <p className="text-gray-400">Set prices, receive royalties, and earn from your AI innovations.</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleStartBuilding}
                        className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white font-semibold hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                      >
                        Start Trading
                      </motion.button>
                    </div>
                    <div className="feature-item">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-white">Instant Integration</h4>
                      <p className="text-gray-400">Seamlessly integrate purchased contexts into your AI applications.</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleStartBuilding}
                        className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white font-semibold hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                      >
                        View Docs
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Ready to Shape the Future of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join the revolution in AI context trading and help build the next generation of intelligent systems.
            </p>
            <div className="flex justify-center gap-6">
              <WalletButton />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLearnMore}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300"
              >
                View Documentation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

const features = [
  {
    title: 'Context Marketplace',
    description: 'The first decentralized marketplace for trading AI context packages.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    capabilities: [
      'Real-time trading and auctions',
      'Secure escrow system',
      'Advanced context discovery',
      'Market analytics dashboard'
    ]
  },
  {
    title: 'Context NFTs',
    description: 'Mint and trade unique AI context packages as NFTs on Solana.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    capabilities: [
      'Verifiable ownership',
      'Royalty system',
      'Context versioning',
      'Composable contexts'
    ]
  },
  {
    title: 'AI Wallets',
    description: 'Autonomous AI agents with their own blockchain wallets.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    capabilities: [
      'Autonomous trading',
      'Context management',
      'Secure key storage',
      'Transaction history'
    ]
  }
];

export default Home; 