
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <motion.div 
        className="w-full h-[962px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url('/lovable-uploads/ecd2dbc8-eb7b-4d3d-bfc8-d3543413d409.png')`
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Translucent Dark Card */}
        <motion.div
          className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl p-12 max-w-2xl mx-6 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.02,
            y: -8,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          
          {/* Content */}
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Transform Your Brand?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/80 mb-8 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join thousands of businesses already using AI-powered brand intelligence to stay ahead of the competition.
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                size="lg"
                variant="outline" 
                className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
              >
                <Zap className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Floating elements for extra visual appeal */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-white/10 rounded-full backdrop-blur-sm"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-[#797BEC]/20 to-[#EB894C]/20 rounded-full backdrop-blur-sm"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
