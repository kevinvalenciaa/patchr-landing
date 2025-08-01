
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const openTypeform = () => {
    // Open Typeform in a new tab
    window.open('https://form.typeform.com/to/UON7KTNt', '_blank');
  };

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
    <section className="w-full py-20 px-6">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            variants={itemVariants}
          >
            Never miss another job while you're on the tools.
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            AI receptionist handles your calls 24/7, books jobs directly into your calendar, and sends you SMS updates. No app to learn, no logins required—just more booked jobs.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
            >
              <Button 
                size="lg" 
              className="group relative overflow-hidden rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 border-0"
                style={{
                background: "linear-gradient(180deg, #1D4ED8 0%, #1E40AF 100%)",
                  boxShadow: '0 10px 30px rgba(29, 78, 216, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                }}
              onClick={openTypeform}
              >
              {/* Static background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700" />
              
                {/* Animated background gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Shimmer effect */}
                <div 
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                
                <div className="relative z-10 flex items-center">
                  <Zap className="mr-3 h-5 w-5 animate-pulse" />
                  Join the Waitlist
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </div>
              </Button>
              
              {/* Glowing ring effect */}
              <div 
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 -z-10"
                style={{ transform: 'scale(1.1)' }}
              />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
