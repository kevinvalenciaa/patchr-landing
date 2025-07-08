
import { useState } from "react";
import { Sparkles, Grid3x3, Code, Zap } from "lucide-react";
import { motion } from "framer-motion";

const GetStartedSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Brand Intelligence",
      description: "Advanced algorithms analyze your brand's AI presence across multiple platforms and channels",
      image: "/lovable-uploads/cefc339e-1b57-499b-be6b-fc6405d707a3.png"
    },
    {
      icon: Grid3x3,
      title: "Comprehensive Analytics Dashboard", 
      description: "Real-time insights and metrics to track your brand's performance in AI-generated content",
      image: "/lovable-uploads/8212efc3-9d25-4b5d-a856-32f10dc0abff.png"
    },
    {
      icon: Code,
      title: "Smart Optimization System",
      description: "Intelligent recommendations to improve your brand's visibility and sentiment in AI responses",
      image: "/lovable-uploads/7d7505ec-772e-4b00-b619-d37f22301b0c.png"
    },
    {
      icon: Zap,
      title: "Lightning Fast Implementation",
      description: "Get up and running in minutes with our streamlined onboarding and automated setup process",
      image: "/lovable-uploads/f34b8c76-b7ef-449b-a865-e696160e3132.png"
    }
  ];

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-[#0D0D0D] border border-[#252525] rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left side - Feature list */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  AI-Powered Brand
                </h2>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#797BEC] mb-6">
                  Intelligence Platform
                </h2>
                <p className="text-[#717179] text-lg">
                  Experience comprehensive brand monitoring with AI-powered tools and 
                  analytics designed for modern businesses and brands.
                </p>
              </motion.div>

              <div className="space-y-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className={`flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedFeature === index 
                          ? 'bg-[#1A1A1A] border border-[#797BEC]/30' 
                          : 'hover:bg-[#151515]'
                      }`}
                      onClick={() => setSelectedFeature(index)}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className={`p-2 rounded-lg flex-shrink-0 ${
                        selectedFeature === index ? 'bg-[#797BEC]' : 'bg-[#252525]'
                      }`}>
                        <IconComponent 
                          size={20} 
                          className={selectedFeature === index ? 'text-white' : 'text-[#717179]'} 
                        />
                      </div>
                      <div>
                        <h3 className={`font-semibold mb-2 ${
                          selectedFeature === index ? 'text-white' : 'text-[#a1a1aa]'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className={`text-sm ${
                          selectedFeature === index ? 'text-[#a1a1aa]' : 'text-[#717179]'
                        }`}>
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right side - Visual representation */}
            <div className="w-full lg:w-1/2 relative bg-[#0F0F0F] border-l border-[#252525] flex items-center justify-center p-8">
              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                key={selectedFeature}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Background network pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#797BEC" />
                        <stop offset="100%" stopColor="#EB894C" />
                      </linearGradient>
                    </defs>
                    {/* Connection lines */}
                    <path d="M100,150 Q200,100 300,150" stroke="url(#gradient)" strokeWidth="2" fill="none" opacity="0.6"/>
                    <path d="M100,150 Q200,200 300,150" stroke="url(#gradient)" strokeWidth="2" fill="none" opacity="0.6"/>
                    <path d="M50,100 L100,150" stroke="url(#gradient)" strokeWidth="2" opacity="0.4"/>
                    <path d="M300,150 L350,100" stroke="url(#gradient)" strokeWidth="2" opacity="0.4"/>
                    <path d="M50,200 L100,150" stroke="url(#gradient)" strokeWidth="2" opacity="0.4"/>
                    <path d="M300,150 L350,200" stroke="url(#gradient)" strokeWidth="2" opacity="0.4"/>
                    
                    {/* Nodes */}
                    <circle cx="100" cy="150" r="8" fill="#797BEC"/>
                    <circle cx="300" cy="150" r="8" fill="#EB894C"/>
                    <circle cx="50" cy="100" r="4" fill="#797BEC" opacity="0.7"/>
                    <circle cx="50" cy="200" r="4" fill="#797BEC" opacity="0.7"/>
                    <circle cx="350" cy="100" r="4" fill="#EB894C" opacity="0.7"/>
                    <circle cx="350" cy="200" r="4" fill="#EB894C" opacity="0.7"/>
                  </svg>
                </div>

                {/* Feature image */}
                <div className="relative z-10 bg-[#1A1A1A] rounded-xl p-6 border border-[#252525] max-w-[80%]">
                  <img 
                    src={features[selectedFeature].image} 
                    alt={features[selectedFeature].title}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="mt-4 flex justify-center">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full ${
                            i === selectedFeature ? 'bg-[#797BEC]' : 'bg-[#252525]'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
