
import { motion } from "framer-motion";

const DashboardSection = () => {
  return (
    <section className="w-full py-12 px-6 relative overflow-visible">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative rounded-full">
          <div className="bg-muted/40 shadow-2xl overflow-hidden border border-border rounded-3xl" 
               style={{
                 boxShadow: '0 0 80px rgba(59, 130, 246, 0.4), 0 0 160px rgba(59, 130, 246, 0.25), 0 0 240px rgba(59, 130, 246, 0.15)'
               }}>
            <img 
              alt="John's Dashboard showing patchr. sales and customer analytics" 
              className="w-full h-auto object-cover object-top" 
              src="/Dashboard Design.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
