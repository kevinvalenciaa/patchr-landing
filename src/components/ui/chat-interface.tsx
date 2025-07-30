"use client";

import { motion, AnimatePresence } from "framer-motion";
import { User, Bot, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";

const ChatInterface = () => {
  const [showCustomerTyping, setShowCustomerTyping] = useState(false);
  const [showCustomerMessage, setShowCustomerMessage] = useState(false);
  const [customerTypedText, setCustomerTypedText] = useState("");
  const [showAiTyping, setShowAiTyping] = useState(false);
  const [showAiMessage, setShowAiMessage] = useState(false);
  const [aiTypedText, setAiTypedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  
  const customerMessage = "Hi, my AC unit stopped working and it's getting really hot in here. Can someone come out today or tomorrow to take a look?";
  const aiMessage = "I can absolutely help you with that! I have an opening tomorrow at 2pm or Thursday at 10am. I'll book the appointment, add it to our calendar, and text you the details.";
  
  useEffect(() => {
    // Start with customer typing
    const timer1 = setTimeout(() => {
      setShowCustomerTyping(true);
    }, 1000);
    
    // Stop customer typing and start customer message
    const timer2 = setTimeout(() => {
      setShowCustomerTyping(false);
      setShowCustomerMessage(true);
    }, 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  
  // Customer typing effect
  useEffect(() => {
    if (showCustomerMessage && customerTypedText.length < customerMessage.length) {
      const timer = setTimeout(() => {
        setCustomerTypedText(customerMessage.slice(0, customerTypedText.length + 1));
      }, 50);
      
      return () => clearTimeout(timer);
    } else if (showCustomerMessage && customerTypedText.length === customerMessage.length) {
      // Start AI typing after customer finishes
      setTimeout(() => {
        setShowAiTyping(true);
      }, 1000);
      
      setTimeout(() => {
        setShowAiTyping(false);
        setShowAiMessage(true);
      }, 3000);
    }
  }, [showCustomerMessage, customerTypedText, customerMessage]);
  
  // AI typing effect
  useEffect(() => {
    if (showAiMessage && aiTypedText.length < aiMessage.length && !isComplete) {
      const timer = setTimeout(() => {
        setAiTypedText(aiMessage.slice(0, aiTypedText.length + 1));
      }, 50);
      
      return () => clearTimeout(timer);
    } else if (showAiMessage && aiTypedText.length === aiMessage.length && !isComplete) {
      setIsComplete(true);
    }
  }, [showAiMessage, aiTypedText, aiMessage, isComplete]);
  
  // Reset animation after completion pause
  useEffect(() => {
    if (isComplete) {
      const resetTimer = setTimeout(() => {
        setShowCustomerTyping(false);
        setShowCustomerMessage(false);
        setCustomerTypedText("");
        setShowAiTyping(false);
        setShowAiMessage(false);
        setAiTypedText("");
        setIsComplete(false);
        
        setTimeout(() => setShowCustomerTyping(true), 1000);
        setTimeout(() => {
          setShowCustomerTyping(false);
          setShowCustomerMessage(true);
        }, 3000);
      }, 6000);
      
      return () => clearTimeout(resetTimer);
    }
  }, [isComplete]);

  return (
    <div className="w-full max-w-md mx-auto p-6 h-full flex flex-col justify-center">
      {/* Phone Call Header */}
      <div className="flex items-center justify-center mb-4 pb-3 border-b border-gray-200">
        <div className="flex items-center space-x-2 text-gray-600">
          <div className="relative">
            <Phone className="w-4 h-4" />
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="text-xs font-medium">Live Call</span>
        </div>
      </div>

      {/* Customer Message */}
      {showCustomerMessage && (
        <div className="flex justify-start mb-4">
          <div className="flex items-end space-x-2 max-w-[85%]">
            <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center flex-shrink-0">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
              <div className="text-sm leading-relaxed text-gray-800">
                {customerTypedText}
                {customerTypedText.length < customerMessage.length && (
                  <motion.span
                    className="inline-block w-0.5 h-4 bg-gray-300 ml-0.5"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Response */}
      {(showAiTyping || showAiMessage) && (
        <div className="flex justify-end">
          <div className="flex items-end space-x-2 max-w-[85%]">
            <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3 shadow-sm min-h-[48px] flex items-center">
              <AnimatePresence mode="wait">
                {showAiTyping && (
                  <motion.div
                    key="ai-typing"
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
                
                {showAiMessage && (
                  <motion.div
                    key="ai-message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm leading-relaxed text-white"
                  >
                    {aiTypedText}
                    {aiTypedText.length < aiMessage.length && !isComplete && (
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
      )}
    </div>
  );
};

export default ChatInterface; 