"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import ChatInterface from './ChatInterface';
import { chatService } from '@/lib/chatService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHealthy, setIsHealthy] = useState(true);

  // Check service health on mount
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const healthy = await chatService.checkHealth();
        setIsHealthy(healthy);
      } catch (error) {
        console.warn('Chatbot service health check failed:', error);
        setIsHealthy(false);
      }
    };

    // Delay health check to avoid blocking page load
    const timer = setTimeout(checkHealth, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Show widget after a delay to avoid overwhelming users
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Don't render if service is not healthy or not visible yet
  if (!isHealthy || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.5 
            }}
            onClick={handleToggle}
            className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Open chat with C³ Care Coordinator"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatDelay: 3 
              }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
            
            {/* Pulse animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ zIndex: -1 }}
            />
            
            {/* Notification badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
            >
              C³
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Interface */}
      <ChatInterface isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default ChatWidget;

