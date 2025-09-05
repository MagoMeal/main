// Mock data for MagoMeal website
// This file contains all the mock data used throughout the application
// Once backend is implemented, this data will be replaced with API calls

export const mockData = {
  // Company Information
  company: {
    name: "MagoMeal",
    tagline: "Fuel Your Day, Feed Your Roots",
    description: "Eco-friendly food and packaging solutions for a sustainable future",
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
    { number: "10,000+", label: "Packages Delivered" },
    { number: "95%", label: "Customer Satisfaction" },
    { number: "50+", label: "Business Partners" },
    { number: "100%", label: "Biodegradable" }
  ],

  // Customer Testimonials
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      content: "MagoMeal's biodegradable packaging has transformed our takeout service. Our customers love the eco-friendly approach!",
      rating: 5
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Event Coordinator",
      content: "The food truck service was perfect for our corporate event. Great food and the packaging was impressively sustainable.",
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
      name: "Biodegradable Cups",
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
    }
  ],

  // Food Truck Schedule
  foodTruckSchedule: [
    {
      day: "Monday",
      location: "Downtown Business District",
      time: "11:00 AM - 2:00 PM",
      address: "Main St & 5th Ave"
    },
    {
      day: "Tuesday",
      location: "University Campus",
      time: "11:30 AM - 2:30 PM",
      address: "Student Center Plaza"
    },
    {
      day: "Wednesday",
      location: "Tech Park",
      time: "11:00 AM - 2:00 PM",
      address: "Innovation Drive"
    },
    {
      day: "Thursday",
      location: "Downtown Business District",
      time: "11:00 AM - 2:00 PM",
      address: "Main St & 5th Ave"
    },
    {
      day: "Friday",
      location: "Farmers Market",
      time: "10:00 AM - 3:00 PM",
      address: "Central Park North"
    },
    {
      day: "Saturday",
      location: "Community Events",
      time: "Variable",
      address: "Check our social media for updates"
    }
  ],

  // Food Truck Menu
  foodTruckMenu: [
    {
      category: "Signature Bowls",
      items: [
        { name: "Green Goddess Bowl", description: "Quinoa, avocado, kale, edible packaging", price: "$12.99" },
        { name: "Protein Power Bowl", description: "Grilled chicken, brown rice, vegetables", price: "$13.99" },
        { name: "Vegan Delight Bowl", description: "Tempeh, mixed greens, tahini dressing", price: "$11.99" }
      ]
    },
    {
      category: "Sustainable Sandwiches",
      items: [
        { name: "Eco Club", description: "Turkey, avocado, sprouts on grain bread", price: "$9.99" },
        { name: "Plant-Based BLT", description: "Coconut bacon, lettuce, tomato", price: "$8.99" },
        { name: "Grilled Veggie Wrap", description: "Seasonal vegetables in edible wrap", price: "$8.49" }
      ]
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
  ],

  // Team Members
  team: [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      description: "Environmental engineer with 15+ years experience in sustainable packaging solutions."
    },
    {
      id: 2,
      name: "Maya Patel",
      role: "Head of Innovation",
      description: "Food scientist specializing in biodegradable materials and edible packaging development."
    },
    {
      id: 3,
      name: "Jordan Kim",
      role: "Operations Director",
      description: "Expert in sustainable business operations and supply chain management."
    }
  ],

  // FAQ Data
  faqs: [
    {
      id: 1,
      question: "What makes your packaging truly biodegradable?",
      answer: "Our packaging is made from 100% natural materials including seaweed extracts, plant proteins, and agricultural waste. They completely decompose within 90 days in composting conditions."
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
      question: "Where does your food truck operate?",
      answer: "We currently operate in the downtown area with regular stops at business districts, university campuses, and community events. Check our Products & Services page for our weekly schedule."
    },
    {
      id: 5,
      question: "Do you offer catering services?",
      answer: "Yes! We provide catering services for corporate events, private parties, and community gatherings. All food is served in our biodegradable packaging."
    }
  ],

  // Contact Form Options
  contactFormOptions: {
    inquiryTypes: [
      { value: 'packaging', label: 'Biodegradable Packaging' },
      { value: 'foodtruck', label: 'Food Truck Services' },
      { value: 'catering', label: 'Catering Inquiry' },
      { value: 'partnership', label: 'Partnership Opportunity' },
      { value: 'general', label: 'General Question' }
    ]
  }
};

export default mockData;