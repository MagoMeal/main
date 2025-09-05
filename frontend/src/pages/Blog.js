import React from 'react';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Packaging: Edible Solutions",
      excerpt: "Discover how edible packaging is revolutionizing the food industry and reducing environmental waste.",
      author: "Alex Rodriguez",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Innovation",
      featured: true
    },
    {
      id: 2,
      title: "Food Truck Sustainability: Our Journey to Zero Waste",
      excerpt: "Learn about our food truck's commitment to sustainability and how we achieve zero waste operations.",
      author: "Maya Patel",
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "Sustainability"
    },
    {
      id: 3,
      title: "5 Benefits of Biodegradable Packaging for Your Business",
      excerpt: "Explore the business advantages of switching to biodegradable packaging solutions.",
      author: "Jordan Kim",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Business"
    },
    {
      id: 4,
      title: "Customer Spotlight: Green Restaurant's Success Story",
      excerpt: "See how one restaurant reduced their environmental impact by 80% with our packaging solutions.",
      author: "Alex Rodriguez",
      date: "February 28, 2024",
      readTime: "3 min read",
      category: "Case Study"
    },
    {
      id: 5,
      title: "The Science Behind Edible Packaging Materials",
      excerpt: "A deep dive into the innovative materials and processes that make our edible packaging possible.",
      author: "Maya Patel",
      date: "February 20, 2024",
      readTime: "7 min read",
      category: "Technology"
    },
    {
      id: 6,
      title: "Weekly Food Truck Update: New Locations Added",
      excerpt: "We're expanding! Check out our new weekly stops and updated schedule for March.",
      author: "Jordan Kim",
      date: "February 15, 2024",
      readTime: "2 min read",
      category: "News"
    }
  ];

  const categories = ["All", "Innovation", "Sustainability", "Business", "Case Study", "Technology", "News"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1 className="display-medium">Blog & News</h1>
          <p className="body-large">
            Stay updated with the latest in sustainable packaging innovations, food truck adventures, 
            and eco-friendly business practices.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="featured-post-section">
          <div className="container">
            <div className="featured-post network-card">
              <div className="featured-badge">Featured Article</div>
              <div className="featured-content">
                <div className="post-category">{featuredPost.category}</div>
                <h2 className="heading-1">{featuredPost.title}</h2>
                <p className="body-large">{featuredPost.excerpt}</p>
                
                <div className="post-meta">
                  <div className="meta-item">
                    <User size={16} />
                    <span className="body-small">{featuredPost.author}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span className="body-small">{featuredPost.date}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={16} />
                    <span className="body-small">{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <button className="btn-primary">
                  Read Full Article <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="category-filter">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section">
        <div className="container">
          <div className="blog-posts-grid">
            {filteredPosts.filter(post => !post.featured).map(post => (
              <article key={post.id} className="blog-post-card network-card hover-lift">
                <div className="post-header">
                  <div className="post-category">{post.category}</div>
                  <h3 className="network-card-title">{post.title}</h3>
                </div>
                
                <p className="network-card-content">{post.excerpt}</p>
                
                <div className="post-meta">
                  <div className="meta-item">
                    <User size={14} />
                    <span className="body-small">{post.author}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={14} />
                    <span className="body-small">{post.date}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={14} />
                    <span className="body-small">{post.readTime}</span>
                  </div>
                </div>
                
                <div className="post-footer">
                  <button className="read-more-btn">
                    Read More <ChevronRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="heading-2">Stay in the Loop</h2>
            <p className="body-large">
              Subscribe to our newsletter and never miss updates about sustainable packaging innovations, 
              food truck locations, and eco-friendly tips.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button type="submit" className="btn-primary">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;