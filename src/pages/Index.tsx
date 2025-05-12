
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import BlogSidebar from "@/components/BlogSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogPosts, popularPosts } from "@/data/posts";

const Index = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 6);

  // Get posts by category
  const hardwarePosts = blogPosts.filter(post => post.category.toLowerCase() === 'hardware').slice(0, 4);
  const guidesPosts = blogPosts.filter(post => post.category.toLowerCase() === 'guides').slice(0, 4);
  const reviewsPosts = blogPosts.filter(post => post.category.toLowerCase() === 'reviews').slice(0, 4);
  const peripheralsPosts = blogPosts.filter(post => post.category.toLowerCase() === 'peripherals').slice(0, 4);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-tech-gray text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              TechPulse
            </h1>
            <p className="text-xl mb-6 max-w-2xl">
              Your trusted source for PC hardware reviews, guides, and tech news.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <PostCard
                  id={featuredPost.id}
                  title={featuredPost.title}
                  excerpt={featuredPost.excerpt}
                  date={featuredPost.date}
                  category={featuredPost.category}
                  image={featuredPost.image}
                  author={featuredPost.author}
                  featured={true}
                />
              </div>
              <div className="hidden lg:block">
                <BlogSidebar popularPosts={popularPosts} />
              </div>
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                image={post.image}
                author={post.author}
              />
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <Tabs defaultValue="hardware" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="hardware">Hardware</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="peripherals">Peripherals</TabsTrigger>
            </TabsList>
            
            <TabsContent value="hardware" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {hardwarePosts.map((post) => (
                  <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    category={post.category}
                    image={post.image}
                    author={post.author}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="guides" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {guidesPosts.length > 0 ? (
                  guidesPosts.map((post) => (
                    <PostCard
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      category={post.category}
                      image={post.image}
                      author={post.author}
                    />
                  ))
                ) : (
                  <div className="col-span-4 text-center py-12">
                    <p>No guides available at the moment.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {reviewsPosts.length > 0 ? (
                  reviewsPosts.map((post) => (
                    <PostCard
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      category={post.category}
                      image={post.image}
                      author={post.author}
                    />
                  ))
                ) : (
                  <div className="col-span-4 text-center py-12">
                    <p>No reviews available at the moment.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="peripherals" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {peripheralsPosts.length > 0 ? (
                  peripheralsPosts.map((post) => (
                    <PostCard
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      category={post.category}
                      image={post.image}
                      author={post.author}
                    />
                  ))
                ) : (
                  <div className="col-span-4 text-center py-12">
                    <p>No peripherals articles available at the moment.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Newsletter Section */}
        <section className="bg-tech-blue text-white py-12 my-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6 max-w-lg mx-auto">
              Subscribe to our newsletter to receive the latest PC hardware news, reviews, and guides.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
              />
              <button className="bg-tech-accent hover:bg-tech-accent/90 px-4 py-2 rounded-r-md font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
