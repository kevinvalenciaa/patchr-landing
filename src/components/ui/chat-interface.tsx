"use client";

import { motion, AnimatePresence } from "framer-motion";
import { User, Bot } from "lucide-react";
import React, { useEffect, useState } from "react";

const ChatInterface = () => {
  const [showTyping, setShowTyping] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  
  const aiMessage = "I can absolutely help you with that! I have an opening tomorrow at 2pm or Thursday at 10am. I'll book the appointment, add it to your calendar, and text you the details.";
  
  useEffect(() => {
    // Start the sequence
    const timer1 = setTimeout(() => {
      setShowTyping(true);
    }, 1000);
    
    const timer2 = setTimeout(() => {
      setShowTyping(false);
      setShowMessage(true);
    }, 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  
  useEffect(() => {
    if (showMessage && typedText.length < aiMessage.length && !isComplete) {
      const timer = setTimeout(() => {
        setTypedText(aiMessage.slice(0, typedText.length + 1));
      }, 50);
      
      return () => clearTimeout(timer);
    } else if (showMessage && typedText.length === aiMessage.length && !isComplete) {
      setIsComplete(true);
    }
  }, [showMessage, typedText, aiMessage, isComplete]);
  
  // Reset animation after completion pause
  useEffect(() => {
    if (isComplete) {
      const resetTimer = setTimeout(() => {
        setShowTyping(false);
        setShowMessage(false);
        setTypedText("");
        setIsComplete(false);
        
        setTimeout(() => setShowTyping(true), 1000);
        setTimeout(() => {
          setShowTyping(false);
          setShowMessage(true);
        }, 3000);
      }, 6000);
      
      return () => clearTimeout(resetTimer);
    }
  }, [isComplete]);

  return (
    <div className="w-full max-w-md mx-auto p-6 h-full flex flex-col justify-center">
      {/* Customer Message */}
      <div className="flex justify-start mb-4">
        <div className="flex items-end space-x-2 max-w-[85%]">
          <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center flex-shrink-0">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
            <p className="text-sm leading-relaxed">
              Hi, my AC unit stopped working and it's getting really hot in here. Can someone come out today or tomorrow to take a look?
            </p>
          </div>
        </div>
      </div>

      {/* AI Response */}
      <div className="flex justify-end">
        <div className="flex items-end space-x-2 max-w-[85%]">
          <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3 shadow-sm min-h-[48px] flex items-center">
            <AnimatePresence mode="wait">
              {showTyping && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex space-x-1"
                >
                  <motion.div
                    className="w-2 h-2 bg-blue-200 rounded-full"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-blue-200 rounded-full"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-blue-200 rounded-full"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  />
                </motion.div>
              )}
              
              {showMessage && (
                <motion.div
                  key="message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm leading-relaxed text-white"
                >
                  {typedText}
                  {typedText.length < aiMessage.length && !isComplete && (
                    <motion.span
                      className="inline-block w-0.5 h-4 bg-white ml-0.5"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
            <Bot className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface; 