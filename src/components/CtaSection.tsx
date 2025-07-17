
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const CtaSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
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
    <section className="w-full py-20 px-6 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#797BEC]/5 via-transparent to-[#EB894C]/5"></div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <motion.div 
          className="bg-muted/20 backdrop-blur-xl border border-border rounded-2xl overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Mouse follower spotlight effect */}
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: isHovering 
                ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.03), transparent 70%)`
                : 'transparent',
              opacity: isHovering ? 1 : 0
            }}
          />
          
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-transparent to-muted/5 rounded-2xl"></div>
          
          {/* Content */}
          <motion.div 
            className="relative z-10 text-center py-16 px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
              variants={itemVariants}
            >
              Ready to get started?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Join thousands of brands already using our platform to optimize their AI presence and drive growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 text-base font-medium rounded-lg shadow-lg"
                >
                  Try for free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent text-foreground border border-border hover:bg-muted hover:border-border/50 px-8 py-3 text-base font-medium rounded-lg backdrop-blur-sm"
                >
                  Chat with sales
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
