
import { motion } from "framer-motion";
import { Safari } from "./ui/safari";

const DashboardSection = () => {
  return (
    <section className="w-full py-12 px-6 relative overflow-visible">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative rounded-full">
          <div className="bg-muted/40 shadow-2xl overflow-hidden border border-border rounded-3xl max-h-[750px]" 
               style={{
                 boxShadow: '0 0 80px rgba(29, 78, 216, 0.4), 0 0 160px rgba(29, 78, 216, 0.25), 0 0 240px rgba(29, 78, 216, 0.15)'
               }}>
            <Safari
              imageSrc="/Dashboard Design.jpg"
              url="usepatchr.com"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
