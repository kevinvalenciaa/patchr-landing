import { Button } from "@/components/ui/button";
import { Globe, Bell, TrendingUp, Zap, BarChart3, MousePointer } from "lucide-react";
import { motion } from "framer-motion";
import { DotPattern } from "./ui/dot-pattern";

const AiPresenceSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-background">
      <div className="max-w-screen-xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            It's not software. It's your invisible assistant.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Works seamlessly with your existing tools—SMS and calendar—so you get more jobs without changing how you work.
          </p>
        </div>

        <div className="relative">
          {/* First Content Section - Never Lose a Job Again */}
          <div className="border-t border-l border-r border-border relative z-30 bg-muted/40">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left Video - Female Specialist */}
              <div className="w-full lg:w-1/2 relative">
                <div className="w-full h-[403px] flex items-center justify-center relative overflow-hidden p-8">
                  <video
                    className="w-full h-full object-contain rounded-lg"
                    src="/3d-isometric-female-specialist-working-in-support-service-1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      filter: 'hue-rotate(140deg) saturate(1.5) contrast(1.1) brightness(1)',
                    }}
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-1/2 px-4">
                <div className="mb-8">
                  <motion.h3 
                    className="text-foreground text-4xl font-bold leading-[44px] mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    Never lose a job again
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground text-lg font-medium leading-[23.4px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Every call gets answered professionally, even when you're under a sink or in an attic. Customers get instant responses and you get booked jobs.
                  </motion.p>
                </div>

                {/* Feature List */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Zap size={20} className="text-[#EB894C] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">24/7 professional call answering</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Zap size={20} className="text-[#EB894C] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">Instant customer response</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Zap size={20} className="text-[#EB894C] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">Automatic missed call follow-up</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Content Section - Focus on the Work */}
          <div className="border-t border-l border-r border-border relative z-30 bg-muted/40">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left Content */}
              <div className="w-full lg:w-1/2 pt-6 lg:pt-0 px-4">
                <div className="mb-8">
                  <motion.h3 
                    className="text-foreground text-4xl font-bold leading-[44px] mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    Focus on the work, not the phone
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground text-lg font-medium leading-[23.4px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    No more stopping mid-job to answer calls or returning voicemails at night. Your AI handles everything while you stay productive.
                  </motion.p>
                </div>

                {/* Feature List */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Globe size={20} className="text-[#797BEC] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">No more jobsite interruptions</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Bell size={20} className="text-[#797BEC] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">Zero evening callbacks</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <TrendingUp size={20} className="text-[#797BEC] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">More productive workdays</span>
                  </div>
                </div>
              </div>

              {/* Right Video - Robot Assistant */}
              <div className="w-full lg:w-1/2 relative">
                <div className="w-full h-[403px] flex items-center justify-center relative overflow-hidden p-8">
                  <video
                    className="w-full h-full object-contain rounded-lg"
                    src="/3d-isometric-robot-assistant-helping-developer-to-write-code.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      filter: 'hue-rotate(140deg) saturate(1.5) contrast(1.1) brightness(1)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Third Content Section - Works with What You Use */}
          <div className="border-t border-l border-r border-border relative z-30 bg-muted/40">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left Video - Project Management Team */}
              <div className="w-full lg:w-1/2 relative">
                <div className="w-full h-[403px] flex items-center justify-center relative overflow-hidden p-8">
                  <video
                    className="w-full h-full object-contain rounded-lg"
                    src="/3d-techny-project-management-team-work-and-idea-generation.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-1/2 px-4">
                <div className="mb-8">
                  <motion.h3 
                    className="text-foreground text-4xl font-bold leading-[44px] mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    Works with what you already use
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground text-lg font-medium leading-[23.4px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Uses your existing phone number, calendar, and texting. Jobs appear in your calendar automatically—no new apps or logins required.
                  </motion.p>
                </div>

                {/* Feature List */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <BarChart3 size={20} className="text-[#EB894C] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">Syncs with your current calendar</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Bell size={20} className="text-[#EB894C] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">SMS notifications to your phone</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MousePointer size={20} className="text-[#EB894C] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">Uses your existing phone number</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiPresenceSection;
