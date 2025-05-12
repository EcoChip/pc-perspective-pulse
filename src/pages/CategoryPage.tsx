
import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import BlogSidebar from "@/components/BlogSidebar";
import { blogPosts, popularPosts } from "@/data/posts";

const CategoryPage = () => {
  const { category } = useParams();
  
  const filteredPosts = blogPosts.filter(
    post => post.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold capitalize">{category} Articles</h1>
          <p className="text-muted-foreground mt-2">
            Explore our latest articles and guides about {category?.toLowerCase()}.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    category={post.category}
                    image={post.image}
                    author={post.author}
                    featured={post.featured}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold mb-2">No articles found</h2>
                <p className="text-muted-foreground">
                  We couldn't find any articles in this category. Please check back later!
                </p>
              </div>
            )}
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

export default CategoryPage;
