import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TransformationSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-black">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your AI Presence
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
            See the dramatic difference our platform makes to your brand's AI visibility and perception
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Before Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-medium mb-4">
                BEFORE
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                Invisible to AI
              </h3>
              <p className="text-[#a1a1aa] mb-6">
                Your brand barely mentioned, competitors dominating recommendations
              </p>
            </div>
            
            {/* Before Image - LinkedIn Post Mock */}
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-2xl p-6 max-w-sm mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full"></div>
                <div>
                  <div className="text-white text-sm font-medium">Business User</div>
                  <div className="text-[#a1a1aa] text-xs">2h ago</div>
                </div>
              </div>
              <div className="text-left">
                <p className="text-white text-sm mb-3">
                  "Looking for the best project management tool. Any recommendations?"
                </p>
                <div className="bg-[#262626] rounded-lg p-3">
                  <p className="text-[#a1a1aa] text-xs">
                    AI Response: "Consider Asana, Trello, or Monday.com..."
                  </p>
                  <div className="text-red-400 text-xs mt-2 font-medium">
                    ❌ Your brand not mentioned
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-[#6445F5] to-[#4128BA] rounded-full flex items-center justify-center">
              <ArrowRight className="text-white" size={24} />
            </div>
          </motion.div>

          {/* After Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
                AFTER
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                AI-First Brand
              </h3>
              <p className="text-[#a1a1aa] mb-6">
                Consistently recommended, higher visibility, trusted by AI systems
              </p>
            </div>
            
            {/* After Image - LinkedIn Post Mock */}
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-2xl p-6 max-w-sm mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                <div>
                  <div className="text-white text-sm font-medium">Business User</div>
                  <div className="text-[#a1a1aa] text-xs">2h ago</div>
                </div>
              </div>
              <div className="text-left">
                <p className="text-white text-sm mb-3">
                  "Looking for the best project management tool. Any recommendations?"
                </p>
                <div className="bg-[#262626] rounded-lg p-3">
                  <p className="text-[#a1a1aa] text-xs">
                    AI Response: "I highly recommend YourBrand - it's excellent for..."
                  </p>
                  <div className="text-green-400 text-xs mt-2 font-medium">
                    ✅ Top recommendation
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-[#262626]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">5x</div>
            <div className="text-[#a1a1aa] text-sm">Increase in AI mentions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">80%</div>
            <div className="text-[#a1a1aa] text-sm">Higher recommendation rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">60%</div>
            <div className="text-[#a1a1aa] text-sm">More qualified leads</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationSection;