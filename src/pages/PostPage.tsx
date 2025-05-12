
import React from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import BlogSidebar from "@/components/BlogSidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, popularPosts } from "@/data/posts";

const PostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Button asChild>
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </a>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex mb-4">
          <Button variant="ghost" asChild>
            <a href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <Badge variant="outline">{post.category}</Badge>
                <div className="flex items-center">
                  <User className="mr-1 h-4 w-4" />
                  <span>By {post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </div>
              
              <div className="mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div 
                className="prose max-w-none article-body" 
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <Separator className="my-8" />
              
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Share your thoughts</h3>
                <p className="text-muted-foreground mb-4">
                  Have you used this product? What do you think about it?
                </p>
                <textarea 
                  className="w-full p-3 border rounded-md mb-3" 
                  rows={4}
                  placeholder="Write a comment..."
                />
                <Button>Post Comment</Button>
              </div>
            </article>
          </div>
          
          <div>
            <BlogSidebar popularPosts={popularPosts} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PostPage;
