import { useState } from "react";
import { Sparkles, Grid3x3, Code, Zap, Timer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GetStartedSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);
  
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

  const handleFeatureSelect = (index: number) => {
    setSelectedFeature(index);
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
                  const isSelected = selectedFeature === index;
                  return (
                    <motion.div
                      key={index}
                      className={`relative flex items-start gap-4 p-4 rounded-lg cursor-pointer ${
                        isSelected 
                          ? 'bg-muted/40 border border-muted' 
                          : 'hover:bg-muted/20'
                      }`}
                      onClick={() => handleFeatureSelect(index)}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      animate={{
                        backgroundColor: isSelected ? 'hsl(var(--muted) / 0.4)' : 'transparent',
                        borderColor: isSelected ? 'hsl(var(--muted))' : 'transparent',
                      }}
                      whileHover={{ 
                        backgroundColor: isSelected ? 'hsl(var(--muted) / 0.4)' : 'hsl(var(--muted) / 0.2)',
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
                      {isSelected && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/30 rounded-b-lg overflow-hidden">
                          <motion.div
                            key={selectedFeature}
                            className="h-full bg-gradient-to-r from-[#1D4ED8] to-[#1D4ED8] rounded-b-lg"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: STEP_DURATION / 1000, ease: "linear" }}
                            onAnimationComplete={() => {
                              setSelectedFeature((prev) => (prev + 1) % features.length);
                            }}
                          />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* Right Side - Feature Image */}
            <div className="w-full lg:w-1/2 relative bg-muted/40 border-l border-border flex items-center justify-center p-8">
            <AnimatePresence mode="wait">
                <motion.div
                  className="relative w-full h-full flex items-center justify-center"
                  key={selectedFeature}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >

                  {/* Feature image */}
                  <motion.div 
                    className="relative z-10 bg-muted/40 rounded-xl p-6 border border-border max-w-[80%]"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <img 
                      src={features[selectedFeature].image} 
                      alt={features[selectedFeature].title}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="mt-4 flex justify-center">
                      <div className="flex space-x-1">
                        {features.map((_, i) => (
                          <motion.div 
                            key={i} 
                            className="w-2 h-2 rounded-full"
                            animate={{
                              backgroundColor: i === selectedFeature ? '#797BEC' : 'hsl(var(--muted))'
                            }}
                            transition={{ duration: 0.3 }}
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
