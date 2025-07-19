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
            It's not software. It's a better way to work.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leverage our AI to handle your front desk, giving you back time, revenue, and peace of mind.
          </p>
        </div>

        <div className="relative">
          {/* First Content Section - Never Lose a Lead Again */}
          <div className="border-t border-l border-r border-border relative z-30 bg-muted/40">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left Image - Placeholder Visual */}
              <div className="w-full lg:w-1/2 relative">
                <div className="w-full h-[403px] flex items-center justify-center relative overflow-hidden p-8">
                  <DotPattern glow cr={1.5} />
                  {/* Sentiment Analysis Visual */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-[#EB894C] rounded-full flex items-center justify-center mb-4">
                      <BarChart3 size={40} className="text-white" />
                    </div>
                    <div className="flex space-x-2 mb-4">
                      <div className="w-3 h-8 bg-green-400 rounded"></div>
                      <div className="w-3 h-12 bg-yellow-400 rounded"></div>
                      <div className="w-3 h-6 bg-red-400 rounded"></div>
                      <div className="w-3 h-10 bg-blue-400 rounded"></div>
                      <div className="w-3 h-14 bg-purple-400 rounded"></div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#EB894C] mb-1">87%</div>
                      <div className="text-sm text-muted-foreground">Positive Sentiment</div>
                    </div>
                  </div>
                  {/* Background decoration */}
                  {/* <div className="absolute top-4 right-4 w-16 h-16 bg-muted rounded-full opacity-50"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-muted rounded-full opacity-30"></div> */}
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
                    Never lose a lead again
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground text-lg font-medium leading-[23.4px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Capture every opportunity with 24/7 call answering, impress customers with professional service, and beat your competition to the job.
                  </motion.p>
                </div>

                {/* Feature List */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Zap size={20} className="text-[#EB894C] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">24/7 opportunity capture</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Zap size={20} className="text-[#EB894C] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">Instant professional response</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Zap size={20} className="text-[#EB894C] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">Outbound lead follow-up</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Content Section - Get Your Time Back */}
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
                    Get your time back
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground text-lg font-medium leading-[23.4px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Eliminate hours of admin work, focus completely on the job at hand, and end your workday without a long list of voicemails to return.
                  </motion.p>
                </div>

                {/* Feature List */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Globe size={20} className="text-[#797BEC] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">No more phone tag</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Bell size={20} className="text-[#797BEC] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">Zero jobsite interruptions</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <TrendingUp size={20} className="text-[#797BEC] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">Reclaim your evenings</span>
                  </div>
                </div>
              </div>

              {/* Right Image - Placeholder Visual */}
              <div className="w-full lg:w-1/2 relative">
                <div className="w-full h-[403px] flex items-center justify-center relative overflow-hidden p-8">
                  <DotPattern glow cr={1.5} />
                  {/* Live Mentions Visual */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-[#797BEC] rounded-full flex items-center justify-center mb-6">
                      <Bell size={40} className="text-white" />
                    </div>
                    {/* Simulated real-time mentions */}
                    <div className="space-y-3 w-64">
                      <div className="flex items-center space-x-2 bg-white/70 rounded-lg p-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="text-sm text-gray-700">Brand mentioned in ChatGPT</div>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/70 rounded-lg p-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="text-sm text-gray-700">Claude recommendation</div>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/70 rounded-lg p-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <div className="text-sm text-gray-700">Gemini response</div>
                      </div>
                    </div>
                  </div>
                  {/* Background decoration */}
                  {/* <div className="absolute top-6 right-6 w-12 h-12 bg-muted rounded-full opacity-40"></div>
                  <div className="absolute bottom-6 left-6 w-16 h-16 bg-muted rounded-full opacity-30"></div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Third Content Section - Work Smarter, Not Harder */}
          <div className="border-t border-l border-r border-border relative z-30 bg-muted/40">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left Image - Placeholder Visual */}
              <div className="w-full lg:w-1/2 relative">
                <div className="w-full h-[403px] flex items-center justify-center relative overflow-hidden p-8">
                  <DotPattern glow cr={1.5} />
                  {/* Traffic Intelligence Visual */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-[#EB894C] rounded-full flex items-center justify-center mb-6">
                      <TrendingUp size={40} className="text-white" />
                    </div>
                    {/* Traffic flow visualization */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center mb-2">
                          <MousePointer size={24} className="text-white" />
                        </div>
                        <div className="text-xs text-gray-600">AI Sources</div>
                      </div>
                      <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-orange-400 rounded relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-400 rounded-lg flex items-center justify-center mb-2">
                          <Globe size={24} className="text-white" />
                        </div>
                        <div className="text-xs text-gray-600">Your Site</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#EB894C] mb-1">+247%</div>
                      <div className="text-sm text-muted-foreground">Traffic Increase</div>
                    </div>
                  </div>
                  {/* Background decoration */}
                  {/* <div className="absolute top-4 left-4 w-8 h-8 bg-muted rounded-full opacity-50"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-muted rounded-full opacity-40"></div> */}
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
                    Work smarter, not harder
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground text-lg font-medium leading-[23.4px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Run your business from the tools you already use, get job details pushed to you automatically, and see your week get booked without lifting a finger.
                  </motion.p>
                </div>

                {/* Feature List */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <BarChart3 size={20} className="text-[#EB894C] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">Works with SMS & your calendar</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Bell size={20} className="text-[#EB894C] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">No new apps to learn</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MousePointer size={20} className="text-[#EB894C] flex-shrink-0" />
                    <span className="text-foreground text-base font-medium">Automated organization</span>
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
