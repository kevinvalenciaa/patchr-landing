
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <div className={`mx-auto transition-all duration-300 ease-in-out rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 shadow-lg ${
        isScrolled ? 'max-w-4xl' : 'max-w-6xl'
      }`}>
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-white font-bold text-xl">Webfluin</div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-white hover:text-primary transition-colors text-sm font-medium">
              About
            </Link>
            <a href="/pricing" className="text-white hover:text-primary transition-colors text-sm font-medium">
              Pricing
            </a>
            <a href="/changelog" className="text-white hover:text-primary transition-colors text-sm font-medium">
              Changelog
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 rounded-lg shadow-sm border-0">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
