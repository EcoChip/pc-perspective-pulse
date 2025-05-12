
import React from "react";
import { Link } from "react-router-dom";
import { Monitor } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-tech-gray text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Monitor className="h-6 w-6" />
              <span className="text-xl font-bold">TechPulse</span>
            </div>
            <p className="text-sm text-gray-300">
              Your trusted source for PC hardware reviews, guides, and tech news.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/hardware" className="text-gray-300 hover:text-white transition-colors">Hardware</Link></li>
              <li><Link to="/category/software" className="text-gray-300 hover:text-white transition-colors">Software</Link></li>
              <li><Link to="/category/reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</Link></li>
              <li><Link to="/category/guides" className="text-gray-300 hover:text-white transition-colors">Guides</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">YouTube</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Discord</a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-600" />
        
        <div className="text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} TechPulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
