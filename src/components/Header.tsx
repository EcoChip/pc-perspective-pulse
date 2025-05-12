
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Monitor, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { blogPosts } from "@/data/posts";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleSearch = (postId: string) => {
    setSearchOpen(false);
    navigate(`/post/${postId}`);
  };

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
          <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
            <Search className="h-5 w-5" />
          </Button>
          <SubscribeButton />
        </div>
      </div>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Search Articles</DialogTitle>
          </DialogHeader>
          <Command>
            <CommandInput placeholder="Type to search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Articles">
                {blogPosts.map((post) => (
                  <CommandItem key={post.id} onSelect={() => handleSearch(post.id)}>
                    <div className="flex items-center">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-8 h-8 object-cover rounded-sm mr-2" 
                      />
                      <span>{post.title}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </header>
  );
};

// Create a new component for Subscribe functionality
const SubscribeButton = () => {
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setShowSubscribe(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <>
      <Button 
        className="hidden md:flex bg-tech-blue hover:bg-tech-lightBlue" 
        onClick={() => setShowSubscribe(true)}
      >
        Subscribe
      </Button>
      
      <Dialog open={showSubscribe} onOpenChange={setShowSubscribe}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Subscribe to TechPulse</DialogTitle>
          </DialogHeader>
          
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-6">
              <div className="rounded-full bg-green-100 p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-center">Thanks for subscribing!</h3>
              <p className="text-center text-muted-foreground mt-2">
                You'll receive our latest updates in your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-tech-blue hover:bg-tech-lightBlue"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
