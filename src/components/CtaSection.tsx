
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const CtaSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="w-full py-20 px-6 bg-[#000000] relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#797BEC]/5 via-transparent to-[#EB894C]/5"></div>
      
      {/* Floating background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#797BEC]/10 to-transparent rounded-full blur-3xl"
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#EB894C]/10 to-transparent rounded-full blur-3xl"
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="bg-[#0D0D0D] border border-[#252525] rounded-2xl overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#797BEC]/20 via-[#EB894C]/20 to-[#797BEC]/20 opacity-0 group-hover:opacity-100 rounded-2xl blur-sm transition-opacity duration-500"></div>
          
          {/* Content */}
          <motion.div 
            className="text-center py-16 px-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="flex justify-center mb-6"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#797BEC]/20 to-[#EB894C]/20 rounded-full px-4 py-2 border border-[#252525]">
                <Sparkles className="w-4 h-4 text-[#797BEC]" />
                <span className="text-sm text-white font-medium">Ready to get started?</span>
              </div>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              Discover What We Can Do
            </motion.h2>
            
            <motion.p 
              className="text-xl text-[#a1a1aa] font-medium mb-10 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Schedule a call with our team and learn how we can help you get ahead with AI-powered brand intelligence.
            </motion.p>
            
            {/* Enhanced Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#797BEC] to-[#EB894C] text-white hover:from-[#797BEC]/80 hover:to-[#EB894C]/80 px-8 py-3 text-base font-semibold rounded-lg shadow-lg border-0"
                >
                  Try for free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent text-white border-2 border-[#252525] hover:bg-[#252525] hover:border-[#797BEC]/50 px-8 py-3 text-base font-semibold rounded-lg transition-all duration-300"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Chat with sales
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Animated decorative elements */}
          <motion.div 
            className="absolute left-8 bottom-8 w-24 h-16 border border-[#252525] rounded-xl bg-[#0D0D0D]/50 backdrop-blur-sm hidden sm:block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="p-3 flex flex-col gap-2">
              <div className="w-6 h-1 bg-gradient-to-r from-[#797BEC] to-transparent rounded-full"></div>
              <div className="w-10 h-1 bg-gradient-to-r from-[#EB894C] to-transparent rounded-full"></div>
              <div className="w-4 h-1 bg-gradient-to-r from-[#797BEC] to-transparent rounded-full"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute right-8 top-8 w-24 h-16 border border-[#252525] rounded-xl bg-[#0D0D0D]/50 backdrop-blur-sm hidden sm:block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="p-3 flex flex-col gap-2">
              <div className="w-8 h-1 bg-gradient-to-r from-[#EB894C] to-transparent rounded-full"></div>
              <div className="w-5 h-1 bg-gradient-to-r from-[#797BEC] to-transparent rounded-full"></div>
              <div className="w-7 h-1 bg-gradient-to-r from-[#EB894C] to-transparent rounded-full"></div>
            </div>
          </motion.div>

          {/* Corner accent dots */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-[#797BEC] rounded-full animate-pulse"></div>
          <div className="absolute top-4 right-4 w-2 h-2 bg-[#EB894C] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#EB894C] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#797BEC] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
