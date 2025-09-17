import React from 'react';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [

  ];

  const categories = ["All", "Innovation", "Business", "Technology"];
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
            Stay updated with the latest in Edible packaging innovations, food truck adventures, 
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