
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface PopularPostProps {
  id: string;
  title: string;
  image: string;
}

const PopularPost = ({ id, title, image }: PopularPostProps) => (
  <Link to={`/post/${id}`} className="flex items-start gap-3 py-3 group">
    <img 
      src={image} 
      alt={title} 
      className="w-16 h-16 object-cover rounded-md" 
    />
    <h4 className="font-medium text-sm group-hover:text-tech-blue transition-colors">
      {title}
    </h4>
  </Link>
);

const categories = [
  "CPUs", "GPUs", "Motherboards", "Memory", 
  "Storage", "Cases", "Cooling", "Peripherals"
];

const BlogSidebar = ({ popularPosts }: { popularPosts: PopularPostProps[] }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Popular Posts</CardTitle>
        </CardHeader>
        <CardContent className="px-4 py-0">
          <div className="divide-y">
            {popularPosts.map((post) => (
              <PopularPost key={post.id} {...post} />
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link key={category} to={`/category/${category.toLowerCase()}`}>
                <Badge variant="outline" className="hover:bg-secondary">
                  {category}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Newsletter</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Subscribe to our newsletter for the latest PC hardware news and reviews.
          </p>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 border rounded-md"
            />
            <button 
              type="submit"
              className="w-full bg-tech-blue hover:bg-tech-lightBlue text-white py-2 rounded-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
