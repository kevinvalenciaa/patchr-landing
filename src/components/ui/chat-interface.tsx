"use client";

import { motion, AnimatePresence, useMotionValue, useAnimation, useMotionTemplate } from "framer-motion";
import { User, Bot, Phone } from "lucide-react";
import React, { useEffect } from "react";

const ChatInterface = () => {
  const animationControls = useAnimation();
  const customerTextProgress = useMotionValue(0);
  const aiTextProgress = useMotionValue(0);
  const animationStep = useMotionValue(0);
  
  const customerMessage = "Hi, my AC unit stopped working and it's getting really hot in here. Can someone come out today or tomorrow to take a look?";
  const aiMessage = "I can absolutely help you with that! I have an opening tomorrow at 2pm or Thursday at 10am. I'll book the appointment, add it to our calendar, and text you the details.";
  
  const customerText = useMotionTemplate`${customerTextProgress}`;
  const aiText = useMotionTemplate`${aiTextProgress}`;
  
  useEffect(() => {
    const animationSequence = async () => {
      while (true) {
        // Step 1: Customer typing (2 seconds)
        animationStep.set(1);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Step 2: Customer message with typing effect
        animationStep.set(2);
        await animationControls.start({
          transition: { duration: customerMessage.length * 0.05, ease: "linear" }
        });
        customerTextProgress.set(customerMessage.length);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Step 3: AI typing (2 seconds)
        animationStep.set(3);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Step 4: AI message with typing effect
        animationStep.set(4);
        await animationControls.start({
          transition: { duration: aiMessage.length * 0.05, ease: "linear" }
        });
        aiTextProgress.set(aiMessage.length);
        
        // Step 5: Pause before reset
        await new Promise(resolve => setTimeout(resolve, 4000));
        
        // Reset for next cycle
        animationStep.set(0);
        customerTextProgress.set(0);
        aiTextProgress.set(0);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    };
    
    animationSequence();
  }, [animationControls, customerTextProgress, aiTextProgress, animationStep, customerMessage.length, aiMessage.length]);

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
      <motion.div
        className="flex justify-start mb-4"
        animate={{
          opacity: animationStep.get() >= 2 ? 1 : 0,
          y: animationStep.get() >= 2 ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-end space-x-2 max-w-[85%]">
          <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center flex-shrink-0">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
            <div className="text-sm leading-relaxed text-gray-800">
              <motion.span
                animate={{
                  opacity: 1
                }}
                transition={{ duration: customerMessage.length * 0.05, ease: "linear" }}
              >
                {customerMessage.slice(0, Math.floor(customerTextProgress.get()))}
              </motion.span>
              <motion.span
                className="inline-block w-0.5 h-4 bg-gray-300 ml-0.5"
                animate={{ 
                  opacity: animationStep.get() === 2 && customerTextProgress.get() < customerMessage.length ? [0, 1, 0] : 0 
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* AI Response */}
      <motion.div
        className="flex justify-end"
        animate={{
          opacity: animationStep.get() >= 3 ? 1 : 0,
          y: animationStep.get() >= 3 ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-end space-x-2 max-w-[85%]">
          <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3 shadow-sm min-h-[48px] flex items-center">
            <AnimatePresence mode="wait">
              {animationStep.get() === 3 && (
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
              
              {animationStep.get() === 4 && (
                <motion.div
                  key="ai-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm leading-relaxed text-white"
                >
                  <motion.span
                    animate={{
                      opacity: 1
                    }}
                    transition={{ duration: aiMessage.length * 0.05, ease: "linear" }}
                  >
                    {aiMessage.slice(0, Math.floor(aiTextProgress.get()))}
                  </motion.span>
                  <motion.span
                    className="inline-block w-0.5 h-4 bg-white ml-0.5"
                    animate={{ 
                      opacity: animationStep.get() === 4 && aiTextProgress.get() < aiMessage.length ? [0, 1, 0] : 0 
                    }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
            <Bot className="w-4 h-4 text-white" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatInterface; 