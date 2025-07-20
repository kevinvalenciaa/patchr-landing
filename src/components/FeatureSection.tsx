
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
                          <div key="job1" className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center space-x-3 flex-shrink-0">
                            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-lg">💼</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold text-gray-900 truncate">New Job Booked</h4>
                                <span className="text-xs text-gray-500 ml-2">Just now</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">John S. (Leaky faucet) – Jul 17 @ 2:00 PM</p>
                            </div>
                          </div>
                          <div key="lead1" className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center space-x-3 flex-shrink-0">
                            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-lg">📥</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold text-gray-900 truncate">New Inbound Lead</h4>
                                <span className="text-xs text-gray-500 ml-2">Just now</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">Rachel L. – Plumbing estimate request</p>
                            </div>
                          </div>
                          <div key="calendar1" className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center space-x-3 flex-shrink-0">
                            <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-lg">📆</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold text-gray-900 truncate">New Calendar Event Added</h4>
                                <span className="text-xs text-gray-500 ml-2">Just now</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">Sarah Lee (Water heater) – Jul 19 @ 10 AM</p>
                            </div>
                          </div>
                          <div key="completed1" className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center space-x-3 flex-shrink-0">
                            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-lg">✅</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold text-gray-900 truncate">Completed Job</h4>
                                <span className="text-xs text-gray-500 ml-2">Just now</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">Emily C. (Furnace check) – Jul 21 @ 9:30 AM</p>
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
