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
              {/* Left Graphic - Never Miss a Call */}
              <div className="w-full lg:w-1/2 relative">
                <div className="w-full h-[403px] flex items-center justify-center relative overflow-hidden p-8">
                  <DotPattern glow cr={1.5} />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-[#EB894C] rounded-full flex items-center justify-center mb-6">
                      <div className="relative">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="currentColor"/>
                        </svg>
                        <motion.div 
                          className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-[#EB894C] mb-1">24/7</div>
                      <div className="text-sm text-muted-foreground">Always Available</div>
                    </div>
                    <div className="flex space-x-2">
                      <motion.div 
                        className="w-8 h-2 bg-green-400 rounded"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div 
                        className="w-8 h-2 bg-blue-400 rounded"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                      />
                      <motion.div 
                        className="w-8 h-2 bg-orange-400 rounded"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                      />
                    </div>
                  </div>
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
                    Never lose a job again.
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
                    Focus on the work, not the phone.
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

              {/* Right Graphic - Focus on Work */}
              <div className="w-full lg:w-1/2 relative">
                <div className="w-full h-[403px] flex items-center justify-center relative overflow-hidden p-8">
                  <DotPattern glow cr={1.5} />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-[#797BEC] rounded-full flex items-center justify-center mb-6">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="w-12 h-8 bg-green-400 rounded flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="w-12 h-8 bg-green-400 rounded flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <motion.div 
                        className="w-12 h-8 bg-blue-400 rounded flex items-center justify-center"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </motion.div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#797BEC] mb-1">+85%</div>
                      <div className="text-sm text-muted-foreground">Productivity Boost</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Content Section - Works with What You Use */}
          <div className="border-t border-l border-r border-border relative z-30 bg-muted/40">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left Graphic - Integration */}
              <div className="w-full lg:w-1/2 relative">
                <div className="w-full h-[403px] flex items-center justify-center relative overflow-hidden p-8">
                  <DotPattern glow cr={1.5} />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-[#EB894C] rounded-full flex items-center justify-center mb-6">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center mb-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="text-xs text-gray-600">Phone</div>
                      </div>
                      <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-orange-400 rounded relative">
                        <motion.div 
                          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-400 rounded-lg flex items-center justify-center mb-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                            <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                            <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                            <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </div>
                        <div className="text-xs text-gray-600">Calendar</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#EB894C] mb-1">Seamless</div>
                      <div className="text-sm text-muted-foreground">Integration</div>
                    </div>
                  </div>
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
                    Works with what you already use.
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
