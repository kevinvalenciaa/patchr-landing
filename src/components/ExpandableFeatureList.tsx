import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ExpandableFeatureList = () => {
  const openItemValue = useMotionValue<string | null>(null);

  const toggleItem = (itemId: string) => {
    const currentValue = openItemValue.get();
    openItemValue.set(currentValue === itemId ? null : itemId);
  };

  const features = [
    {
      id: "expert-knowledge",
      title: "Expert Local Knowledge", 
      description: "",
      expandedContent: "We provide detailed market analysis, neighborhood insights, and pricing strategies tailored to your specific location and property type."
    },
    {
      id: "hassle-free",
      title: "Hassle-Free Transactions",
      description: "",
      expandedContent: "We handle all the paperwork, coordinate with lenders, inspectors, and other parties involved in your transaction to ensure a smooth process from start to finish."
    },
    {
      id: "comprehensive-support", 
      title: "Comprehensive Support",
      description: "",
      expandedContent: "Our support extends beyond the transaction with ongoing assistance, market updates, and guidance for future real estate needs and investment opportunities."
    }
  ];

  return <motion.div className="flex flex-col gap-3">
      {features.map((feature, index) => <motion.div 
        key={feature.id}
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
          <motion.div className="border border-border rounded-lg overflow-hidden">
            <motion.button
              className="w-full p-6 text-left flex items-center justify-between bg-background hover:bg-muted/50 transition-colors"
              onClick={() => toggleItem(feature.id)}
              whileHover={{ backgroundColor: "hsl(var(--muted) / 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-foreground">{feature.title}</span>
              </div>
              <motion.div
                animate={{ 
                  rotate: openItemValue.get() === feature.id ? 180 : 0 
                }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={20} className="text-muted-foreground" />
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {openItemValue.get() === feature.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-muted-foreground border-t border-border">
                    {feature.expandedContent}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {index < features.length - 1 && <div className="h-px bg-border opacity-20 my-3" />}
        </motion.div>)}
    </motion.div>;
};

export default ExpandableFeatureList;