
import { motion } from "framer-motion";

const DashboardSection = () => {
  return (
    <section className="w-full py-12 px-6 relative overflow-visible">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative rounded-full">
          <div className="bg-muted/40 shadow-2xl overflow-hidden border border-border rounded-3xl" 
               style={{
                 boxShadow: '0 0 80px rgba(100, 69, 245, 0.4), 0 0 160px rgba(100, 69, 245, 0.25), 0 0 240px rgba(100, 69, 245, 0.15)'
               }}>
            <img 
              alt="Dashboard interface showing financial management tools" 
              className="w-full h-auto object-cover object-top" 
              src="/lovable-uploads/d6c89680-1f12-4034-858c-dffeb2ad0b24.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
