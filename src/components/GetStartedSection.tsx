import { useEffect } from "react";
import { Sparkles, Grid3x3, Code, Zap, Timer } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useAnimation } from "framer-motion";

const GetStartedSection = () => {
  const selectedFeatureValue = useMotionValue(0);
  const progressControls = useAnimation();
  
  const STEP_DURATION = 6000; // 6 seconds per step

  const features = [
    {
      icon: Sparkles,
      title: "Tell Us About Your Business",
      description: "Just your company name, services (HVAC, plumbing, electrical), and service area. That's it.",
      image: "/lovable-uploads/cefc339e-1b57-499b-be6b-fc6405d707a3.png"
    },
    {
      icon: Grid3x3,
      title: "Connect Your Calendar", 
      description: "We'll send you a simple link to connect your Google Calendar. One click and you're done.",
      image: "/lovable-uploads/8212efc3-9d25-4b5d-a856-32f10dc0abff.png"
    },
    {
      icon: Code,
      title: "We Set Up Everything Else",
      description: "Our team handles the technical stuff—AI training, phone setup, calendar sync. You don't lift a finger.",
      image: "/lovable-uploads/7d7505ec-772e-4b00-b619-d37f22301b0c.png"
    },
    {
      icon: Zap,
      title: "Start Getting Booked Jobs",
      description: "Your line is now protected by AI. Next missed call becomes a text message with a booked appointment.",
      image: "/lovable-uploads/f34b8c76-b7ef-449b-a865-e696160e3132.png"
    }
  ];

  // Animation cycle using Framer Motion
  useEffect(() => {
    const animateSteps = async () => {
      while (true) {
        for (let i = 0; i < features.length; i++) {
          selectedFeatureValue.set(i);
          await progressControls.start({
            width: "100%",
            transition: { duration: STEP_DURATION / 1000, ease: "linear" }
          });
          await progressControls.start({
            width: "0%",
            transition: { duration: 0 }
          });
        }
      }
    };
    
    animateSteps();
  }, [selectedFeatureValue, progressControls, features.length]);

  const handleFeatureSelect = (index: number) => {
    selectedFeatureValue.set(index);
    progressControls.stop();
    progressControls.start({
      width: "0%",
      transition: { duration: 0 }
    }).then(() => {
      progressControls.start({
        width: "100%",
        transition: { duration: STEP_DURATION / 1000, ease: "linear" }
      });
    });
  };

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Set up in minutes, not hours.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We handle the technical setup for you. Just give us your info and you're protecting every call within 15 minutes.
          </p>
        </div>


        <motion.div 
          className="bg-background border border-border rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left side - Feature list */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  AI-Powered Brand
                </h3>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#797BEC] mb-6">
                  Intelligence Platform
                </h3>
                <p className="text-muted-foreground text-lg">
                  Experience comprehensive brand monitoring with AI-powered tools and 
                  analytics designed for modern businesses and brands.
                </p>
              </motion.div> */}

              <div className="space-y-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="relative flex items-start gap-4 p-4 rounded-lg cursor-pointer"
                      onClick={() => handleFeatureSelect(index)}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      animate={{
                        backgroundColor: selectedFeatureValue.get() === index ? 'hsl(var(--muted) / 0.4)' : 'transparent',
                        borderColor: selectedFeatureValue.get() === index ? 'hsl(var(--muted))' : 'transparent',
                        borderWidth: selectedFeatureValue.get() === index ? 1 : 0,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                      whileHover={{ 
                        backgroundColor: 'hsl(var(--muted) / 0.2)',
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex-shrink-0">
                        <div 
                          className="p-2 rounded-lg flex-shrink-0 bg-muted/60"
                        >
                          <IconComponent 
                            size={20} 
                            className="text-muted-foreground" 
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-foreground text-lg font-semibold mb-1 leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      
                      {/* Progress bar for selected step */}
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-1 bg-muted/30 rounded-b-lg overflow-hidden"
                        animate={{
                          opacity: selectedFeatureValue.get() === index ? 1 : 0,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#1D4ED8] to-[#1D4ED8] rounded-b-lg"
                          animate={progressControls}
                          style={{ width: "0%" }}
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* Right Side - Feature Graphics */}
            <div className="w-full lg:w-1/2 relative bg-muted/40 border-l border-border flex items-center justify-center p-8">
            <AnimatePresence mode="wait">
                <motion.div
                  className="relative w-full h-full flex items-center justify-center"
                  key={selectedFeatureValue.get()}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.4, 0, 0.2, 1],
                    type: "tween"
                  }}
                >
                  {/* Custom Graphics for each step */}
                  <motion.div 
                    className="relative z-10 flex items-center justify-center w-full h-full"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {selectedFeatureValue.get() === 0 && (
                      // Step 1: Business Info
                      <div className="flex flex-col items-center">
                        <div className="w-32 h-32 bg-[#1D4ED8] rounded-2xl flex items-center justify-center mb-6 relative">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                            <div className="text-xs text-gray-500 mb-1">Company</div>
                            <div className="text-sm font-medium text-gray-800">HVAC Pro</div>
                          </div>
                          <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                            <div className="text-xs text-gray-500 mb-1">Service</div>
                            <div className="text-sm font-medium text-gray-800">HVAC</div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-gray-200 w-full text-center">
                          <div className="text-xs text-gray-500 mb-1">Service Area</div>
                          <div className="text-sm font-medium text-gray-800">Dallas, TX</div>
                        </div>
                      </div>
                    )}

                    {selectedFeatureValue.get() === 1 && (
                      // Step 2: Calendar Connection
                      <div className="flex flex-col items-center">
                        <div className="flex items-center space-x-6 mb-6">
                          <div className="w-24 h-24 bg-[#1D4ED8] rounded-xl flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded mb-2">
                              <div className="w-4 h-4 bg-green-400 rounded-full -mt-1.5 ml-12 animate-pulse"></div>
                            </div>
                            <div className="text-xs text-gray-500">Connecting...</div>
                          </div>
                          <div className="w-24 h-24 bg-green-500 rounded-xl flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                          <div className="text-green-600 font-semibold mb-1">✓ Google Calendar Connected</div>
                          <div className="text-xs text-gray-500">One-click setup complete</div>
                        </div>
                      </div>
                    )}

                    {selectedFeatureValue.get() === 2 && (
                      // Step 3: Technical Setup
                      <div className="flex flex-col items-center">
                        <div className="w-32 h-32 bg-[#797BEC] rounded-2xl flex items-center justify-center mb-6 relative">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-white">
                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center animate-spin">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="bg-green-100 border border-green-200 rounded-lg p-2 text-center">
                            <div className="text-green-600 font-bold text-xs">✓</div>
                            <div className="text-xs text-green-700">AI Training</div>
                          </div>
                          <div className="bg-blue-100 border border-blue-200 rounded-lg p-2 text-center animate-pulse">
                            <div className="text-blue-600 font-bold text-xs">⚡</div>
                            <div className="text-xs text-blue-700">Phone Setup</div>
                          </div>
                          <div className="bg-gray-100 border border-gray-200 rounded-lg p-2 text-center">
                            <div className="text-gray-400 font-bold text-xs">○</div>
                            <div className="text-xs text-gray-500">Calendar Sync</div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-800">Setting up your AI...</div>
                          <div className="text-xs text-gray-500">Handles everything automatically</div>
                        </div>
                      </div>
                    )}

                    {selectedFeatureValue.get() === 3 && (
                      // Step 4: Start Getting Jobs
                      <div className="flex flex-col items-center">
                        <div className="w-32 h-32 bg-green-500 rounded-2xl flex items-center justify-center mb-6 relative">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="currentColor"/>
                          </svg>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-bounce flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4 w-full">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-sm font-medium text-gray-800">Incoming Call</div>
                            <div className="text-xs text-green-600">AI Answered</div>
                          </div>
                          <div className="text-xs text-gray-600 mb-2">"My water heater isn't working..."</div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-blue-600">→ Appointment Booked</div>
                            <div className="text-xs text-gray-500">Tomorrow 2PM</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-400"></div>
                        </div>
                        <div className="text-center mt-2">
                          <div className="text-sm font-medium text-green-600">Live & Protected</div>
                          <div className="text-xs text-gray-500">Never miss another job</div>
                        </div>
                      </div>
                    )}

                    <div className="mt-6 flex justify-center">
                      <div className="flex space-x-1">
                        {features.map((_, i) => (
                          <motion.div 
                            key={i} 
                            className="w-2 h-2 rounded-full"
                            animate={{
                              backgroundColor: i === selectedFeatureValue.get() ? '#1D4ED8' : 'hsl(var(--muted))',
                              scale: i === selectedFeatureValue.get() ? 1.2 : 1
                            }}
                            transition={{ 
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1],
                              type: "tween"
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;
