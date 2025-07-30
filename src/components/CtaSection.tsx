
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Zap } from "lucide-react";

const CtaSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const gradientX = useTransform(mouseX, [0, 1000], [0, 100]);
  const gradientY = useTransform(mouseY, [0, 600], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const openTypeform = () => {
    // Open Typeform in a new tab
    window.open('https://form.typeform.com/to/UON7KTNt', '_blank');
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
          // onMouseMove={handleMouseMove}
          // onMouseEnter={() => setIsHovering(true)}
          // onMouseLeave={() => setIsHovering(false)}
        >
          {/* Mouse follower spotlight effect */}
          {/* <motion.div
            className="pointer-events-none absolute"
            style={{
              width: 500,
              height: 500,
              top: -250,
              left: -250,
              background: `radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, rgba(29, 78, 216, 0.05) 40%, transparent 70%)`
            }}
            initial={{ opacity: 0 }}
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              opacity: isHovering ? 1 : 0
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              mass: 0.5,
              opacity: { duration: 0.3, ease: "easeInOut" }
            }}
          /> */}
          
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-transparent to-muted/5 rounded-2xl"></div>
          
          {/* Content */}
          <motion.div 
            className="relative z-10 text-center py-16 px-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to stop missing jobs?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Join hundreds of contractors already using patchr. to capture every call and grow their business—without changing how they work.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* <motion.div
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
              </motion.div> */}
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
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
                    <motion.div
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Zap className="mr-3 h-5 w-5" />
                    </motion.div>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
