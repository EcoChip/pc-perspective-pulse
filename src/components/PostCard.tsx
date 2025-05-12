
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  author: string;
  featured?: boolean;
}

const PostCard = ({
  id,
  title,
  excerpt,
  date,
  category,
  image,
  author,
  featured = false,
}: PostCardProps) => {
  return (
    <Link to={`/post/${id}`}>
      <Card className={`overflow-hidden h-full hover:shadow-lg transition-shadow ${featured ? 'border-tech-accent border-2' : ''}`}>
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
          {featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-tech-accent hover:bg-tech-accent/90">Featured</Badge>
            </div>
          )}
        </div>
        <CardContent className="pt-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <Badge variant="outline" className="hover:bg-transparent">
              {category}
            </Badge>
            <span>{date}</span>
          </div>
          <h3 className={`${featured ? 'text-xl' : 'text-lg'} font-bold hover:text-tech-blue transition-colors line-clamp-2`}>
            {title}
          </h3>
          <p className="text-muted-foreground mt-2 line-clamp-2">{excerpt}</p>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground pt-0">
          By {author}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PostCard;
