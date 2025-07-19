
import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";

const MetricsSection = () => {
  const metrics = [
    {
      value: 40,
      suffix: "%",
      description: "of customer calls are missed on average."
    }, 
    {
      value: 10,
      suffix: "+",
      description: "hours saved weekly on admin and phone tag."
    }, 
    {
      value: 8000,
      prefix: "$",
      suffix: "+",
      description: "in potential monthly revenue captured."
    }
  ];

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {metrics.map((metric, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={itemVariants}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {metric.prefix && <span>{metric.prefix}</span>}
                <NumberTicker
                  value={metric.value}
                  className="text-foreground"
                  delay={index * 0.2}
                />
                {metric.suffix && <span>{metric.suffix}</span>}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;
