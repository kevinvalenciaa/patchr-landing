import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { AnimatePresence, motion } from "framer-motion";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const openTypeform = () => {
    // @ts-ignore - Typeform embed library
    if (window.tf) {
      // @ts-ignore
      window.tf.createPopup('01K0JTVMRTG6346QN17EBT7YG8').open();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <div className={`mx-auto transition-all duration-300 ease-in-out rounded-2xl bg-background/95 backdrop-blur-md border border-border shadow-lg ${
        isScrolled ? 'max-w-4xl' : 'max-w-6xl'
      }`}>
        <div className="flex items-center h-16 px-6">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="text-foreground font-bold text-xl">patchr.</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 ml-12">
            <a 
              href="#features" 
              onClick={(e) => handleSmoothScroll(e, 'features')}
              className="text-foreground hover:text-foreground/80 transition-all duration-300 text-sm font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-foreground/50 after:transition-all after:duration-300 hover:after:w-full"
            >
              Features
            </a>
            <a 
              href="#benefits" 
              onClick={(e) => handleSmoothScroll(e, 'benefits')}
              className="text-foreground hover:text-foreground/80 transition-all duration-300 text-sm font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-foreground/50 after:transition-all after:duration-300 hover:after:w-full"
            >
              Benefits
            </a>
            <a 
              href="#onboarding" 
              onClick={(e) => handleSmoothScroll(e, 'onboarding')}
              className="text-foreground hover:text-foreground/80 transition-all duration-300 text-sm font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-foreground/50 after:transition-all after:duration-300 hover:after:w-full"
            >
              Onboarding
            </a>
            {/* <a 
              href="#pricing" 
              onClick={(e) => handleSmoothScroll(e, 'pricing')}
              className="text-foreground hover:text-foreground/80 transition-all duration-300 text-sm font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-foreground/50 after:transition-all after:duration-300 hover:after:w-full"
            >
              Pricing
            </a> */}
          </div>
          
          <div className="flex items-center space-x-4 ml-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleThemeSwitch}
              className="rounded-full"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Sun className="h-5 w-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
            <Button
              className="px-4 py-2.5 text-sm font-semibold text-white rounded-xl"
              style={{
                background: "linear-gradient(180deg, #1D4ED8 0%, #1E40AF 100%)",
                boxShadow: '0 10px 30px rgba(29, 78, 216, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
              onClick={openTypeform}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;