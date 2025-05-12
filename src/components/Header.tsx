
import React from "react";
import { Link } from "react-router-dom";
import { Monitor, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b sticky top-0 z-50 bg-background">
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        <div className="flex items-center gap-2">
          <Monitor className="h-6 w-6 text-tech-blue" />
          <Link to="/" className="text-2xl font-bold text-tech-blue">
            TechPulse
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-tech-blue transition-colors">
            Home
          </Link>
          <Link to="/category/hardware" className="font-medium hover:text-tech-blue transition-colors">
            Hardware
          </Link>
          <Link to="/category/software" className="font-medium hover:text-tech-blue transition-colors">
            Software
          </Link>
          <Link to="/category/reviews" className="font-medium hover:text-tech-blue transition-colors">
            Reviews
          </Link>
          <Link to="/category/guides" className="font-medium hover:text-tech-blue transition-colors">
            Guides
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="hidden md:flex bg-tech-blue hover:bg-tech-lightBlue">
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
