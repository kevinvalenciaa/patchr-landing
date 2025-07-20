
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedList } from "./ui/animated-list";
import Timeline from "./ui/timeline";

const FeatureSection = () => {
  const features = [
    {
      title: "24/7 AI Voice Receptionist",
      description: "Your phone is answered every time, day or night. Our AI is trained on trade-specific language to handle customer inquiries, answer FAQs about your services, and provide a professional first impression.",
      image: "/lovable-uploads/f34b8c76-b7ef-449b-a865-e696160e3132.png"
    }, 
    {
      title: "Outbound Missed Call Follow-Up",
      description: "Never worry about a mystery missed call again. If a call doesn't connect, your patchr. agent automatically calls the number back within minutes to secure the lead before they can call a competitor.",
      image: "/lovable-uploads/a4d6f5bb-d27b-496a-8738-9da9e145ff67.png"
    }, 
    {
      title: "Automated Job Scheduling",
      description: "Once a lead is qualified, patchr. finds an open slot and books the appointment directly into the calendar you already use (Google, Apple, etc.). No more manual entry or double-booking.",
      image: "/lovable-uploads/d7548ea8-ab44-4e01-b366-5b1b24af72df.png"
    }, 
    {
      title: "Instant SMS & Calendar Updates",
      description: "The entire system works through text messages and your calendar. Get new job details, addresses, and customer notes pushed directly to your phone.",
      image: "/lovable-uploads/ffcae411-32b8-4bd7-882e-5dcef6326338.png"
    }
  ];

  // Border classes for each card position to create shared grid lines
  const cardBorders = [
    "", // Top-left: no borders
    "border-l border-border", // Top-right: left border only
    "border-t border-border", // Bottom-left: top border only
    "border-l border-t border-border" // Bottom-right: left and top borders
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Focus on the job, not your phone.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful, invisible tools to manage your customer calls effortlessly, so you can focus on what matters.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Seamless 2x2 Grid Container with outer border */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 md:gap-0 bg-muted/40 border border-border rounded-lg overflow-hidden h-auto md:h-[900px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`flex flex-col justify-between h-full md:h-[450px] bg-muted/40 ${cardBorders[index]}`}
              >
                <div className="h-80 md:h-full overflow-hidden bg-transparent p-4">
                  {feature.title === "Instant SMS & Calendar Updates" ? (
                    <div className="flex items-start justify-center h-full">
                      <div className="w-full max-w-sm h-full">
                        <AnimatedList delay={2000} className="w-full h-full pt-4">
                          <div key="event1" className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center space-x-3 flex-shrink-0">
                            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold text-gray-900 truncate">New event</h4>
                                <span className="text-xs text-gray-500 ml-2">2m ago</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">patchr.</p>
                            </div>
                          </div>
                          <div key="message1" className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center space-x-3">
                            <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold text-gray-900 truncate">New message</h4>
                                <span className="text-xs text-gray-500 ml-2">5m ago</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">patchr.</p>
                            </div>
                          </div>
                          <div key="signup1" className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center space-x-3">
                            <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold text-gray-900 truncate">User signed up</h4>
                                <span className="text-xs text-gray-500 ml-2">10m ago</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">patchr.</p>
                            </div>
                          </div>
                          <div key="payment1" className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center space-x-3">
                            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold text-gray-900 truncate">Payment received</h4>
                                <span className="text-xs text-gray-500 ml-2">15m ago</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">patchr.</p>
                            </div>
                          </div>
                        </AnimatedList>
                      </div>
                    </div>
                  ) : feature.title === "Automated Job Scheduling" ? (
                    <div className="flex items-center justify-center h-full">
                      <Timeline />
                    </div>
                  ) : (
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="mt-4 mb-4 border-0" 
                      style={{border: 'none', outline: 'none'}} 
                    />
                  )}
                </div>
                <motion.div 
                  className="flex flex-col justify-end p-5 pb-5 pl-5 bg-transparent"
                  variants={textVariants}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
