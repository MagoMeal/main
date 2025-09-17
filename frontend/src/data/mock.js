// Mock data for MagoMeal website - Edible Packaging Solutions
// This file contains all the mock data used throughout the application
// Once backend is implemented, this data will be replaced with API calls

export const mockData = {
  // Company Information
  company: {
    name: "MagoMeal",
    tagline: "Fuel Your Day, Feed Your Roots",
    description: "Leading the sustainable packaging revolution with innovative edible solutions",
    logo: "https://customer-assets.emergentagent.com/job_1599ee33-608a-4f29-a948-5fbb4b56f909/artifacts/scyoowtk_MagoMeal_Logo.jpeg",
    contact: {
      email: "info@magomeal.com",
      phone: "(555) 123-4567",
      address: "123 Eco Street, Green City, GC 12345",
      hours: "Monday - Friday: 9AM - 6PM, Saturday: 10AM - 4PM"
    }
  },

  // Homepage Statistics
  stats: [
    { number: "50,000+", label: "Packages Delivered" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "200+", label: "Business Partners" },
    { number: "100%", label: "Edible" }
  ],

  // Customer Testimonials
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      content: "MagoMeal's edible packaging has transformed our takeout service. Our customers love the eco-friendly approach!",
      rating: 5
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Cafe Manager",
      content: "The packaging quality is exceptional and our environmental impact has decreased significantly since switching to MagoMeal.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Sustainability Manager",
      content: "Finally, a packaging solution that aligns with our environmental values without compromising on quality.",
      rating: 5
    }
  ],

  // Products and Services
  packagingProducts: [
    {
      id: 1,
      name: "Edible Food Containers",
      description: "Revolutionary containers made from seaweed and plant-based materials that can be eaten along with your meal.",
      features: ["100% Edible", "Tasteless & Odorless", "6-month shelf life", "Various sizes available"],
      price: "Starting at $0.25 per unit",
      category: "packaging"
    },
    {
      id: 2,
      name: "Edible Cups",
      description: "Compostable cups perfect for hot and cold beverages, made from cornstarch and natural fibers.",
      features: ["Heat resistant", "Leak-proof", "Composts in 90 days", "Custom branding available"],
      price: "Starting at $0.15 per unit",
      category: "packaging"
    },
    {
      id: 3,
      name: "Plant-Based Wraps",
      description: "Flexible food wraps made from plant proteins that keep food fresh and are completely edible.",
      features: ["Flexible & durable", "Moisture resistant", "Nutritionally neutral", "Clear & colored options"],
      price: "Starting at $0.30 per unit",
      category: "packaging"
    },
    {
      id: 4,
      name: "Compostable Plates",
      description: "Sturdy dinner plates made from agricultural waste that break down naturally in composting.",
      features: ["Microwave safe", "Sturdy construction", "90-day composting", "Multiple sizes"],
      price: "Starting at $0.20 per unit",
      category: "packaging"
    },
    {
      id: 5,
      name: "Eco-Friendly Bowls",
      description: "Deep bowls perfect for soups, salads, and main dishes, crafted from renewable materials.",
      features: ["Deep capacity", "Temperature resistant", "Non-toxic materials", "Stackable design"],
      price: "Starting at $0.28 per unit",
      category: "packaging"
    },
    {
      id: 6,
      name: "Sustainable Utensils",
      description: "Complete utensil set made from compressed plant fibers that decompose naturally.",
      features: ["Full utensil set", "Sturdy construction", "Compostable", "Bulk packaging available"],
      price: "Starting at $0.12 per piece",
      category: "packaging"
    }
  ],

  // Blog Posts
  blogPosts: [
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
      title: "From Waste to Wonder: How Agricultural Byproducts Become Packaging",
      excerpt: "Learn about our innovative process of transforming agricultural waste into high-quality edible packaging.",
      author: "Maya Patel",
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "Innovation"
    },
    {
      id: 3,
      title: "5 Benefits of Edible Packaging for Your Business",
      excerpt: "Explore the business advantages of switching to edible packaging solutions.",
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
      category: "Business"
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
      title: "Global Impact: How Edible Packaging is Changing the World",
      excerpt: "Exploring the worldwide adoption of sustainable packaging and its environmental benefits.",
      author: "Jordan Kim",
      date: "February 15, 2024",
      readTime: "2 min read",
      category: "Innovation"
    }
  ],

  // Team Members
  team: [
    {
      id: 1,
      name: "Ben Amor",
      role: "Founder",
      description: "Engineer"
    }
  ],

  // FAQ Data
  faqs: [
    {
      id: 1,
      question: "What makes your packaging truly edible?",
      answer: "Our packaging is made from 100% natural materials including seaweed extracts, plant proteins, and agricultural waste. They can be safely consumed or will decompose completely within 90 days in composting conditions."
    },
    {
      id: 2,
      question: "Can I customize the packaging for my brand?",
      answer: "Absolutely! We offer custom printing, sizing, and even flavor options for our edible packaging. Contact us to discuss your specific branding needs."
    },
    {
      id: 3,
      question: "What's the minimum order quantity?",
      answer: "Our minimum order quantity varies by product type. Generally, it ranges from 500-1000 units. We also offer sample packs for testing."
    },
    {
      id: 4,
      question: "How long does the packaging last before decomposing?",
      answer: "Our packaging is designed to maintain integrity during normal use and storage, then compost completely within 90 days in appropriate composting conditions."
    },
    {
      id: 5,
      question: "Do you offer bulk pricing for large orders?",
      answer: "Yes! We provide competitive bulk pricing and special rates for large volume orders. Contact our sales team for custom pricing information."
    }
  ],

  // Contact Form Options
  contactFormOptions: {
    inquiryTypes: [
      { value: 'packaging', label: 'Edible Packaging Inquiry' },
      { value: 'custom', label: 'Custom Packaging Solutions' },
      { value: 'bulk', label: 'Bulk Order Inquiry' },
      { value: 'partnership', label: 'Partnership Opportunity' },
      { value: 'general', label: 'General Question' }
    ]
  }
};

export default mockData;