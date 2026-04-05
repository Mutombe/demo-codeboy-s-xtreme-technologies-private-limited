export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Codeboy's Xtreme",
    legalName: "Codeboy's Xtreme Technologies Private Limited",
    tagline: "Xtreme Solutions. Real Results.",
    description:
      "Codeboy's Xtreme Technologies is a dynamic Harare-based IT company delivering web development, mobile apps, and digital solutions with a fresh, creative approach that sets businesses apart.",
    phone: "+263 78 522 1952",
    phoneRaw: "+263785221952",
    whatsappNumber: "263785221952",
    email: "hello@codeboysxtreme.co.zw",
    address: "78 Leopold Takawira and, Robert Mugabe Rd, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.9,
    ratingRounded: 5,
    reviewCount: 8,
    established: "2017",
    yearsExperience: "7+",
    projectsCompleted: "300+",
    employees: "10+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "codeboy-s-xtreme-technologies-private-limited-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Codeboy's",
    logoLine2: "Xtreme",
  },

  hero: {
    badge: "Harare's Creative Tech Solutions Studio",
    titleParts: [
      { text: "XTREME " },
      { text: "SOLUTIONS", highlight: true },
      { text: " REAL RESULTS." },
    ],
    subtitle:
      "Web development, mobile apps, and digital solutions that push boundaries. 300+ projects delivered with creativity, precision, and zero compromise.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "See Our Work",
    trustBadge: "300+ Digital Projects Delivered",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85", alt: "Codeboy's Xtreme professional image 1" },
      { url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=85", alt: "Codeboy's Xtreme professional image 2" },
      { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85", alt: "Codeboy's Xtreme showcase" },
    ],
  },

  stats: [
    { number: "300+", label: "Projects Shipped" },
    { number: "7+", label: "Years Coding" },
    { number: "50+", label: "Active Clients" },
    { number: "4.9", label: "Google Rating" },
  ],

  servicesPreview: [
    {
      title: "Web Development",
      desc: "Custom websites built with React, Next.js, and modern frameworks. Fast, responsive, and conversion-optimized.",
      icon: "Buildings",
    },
    {
      title: "Mobile App Development",
      desc: "iOS and Android apps built with React Native and Flutter. Native performance with cross-platform efficiency.",
      icon: "Rocket",
    },
    {
      title: "E-Commerce Solutions",
      desc: "Online stores with payment integration, inventory management, and logistics coordination for Zimbabwean businesses.",
      icon: "Briefcase",
    },
    {
      title: "UI/UX Design",
      desc: "User-centered design that looks beautiful and works intuitively. Research-driven interfaces that convert.",
      icon: "Star",
    },
    {
      title: "Digital Marketing",
      desc: "SEO, social media management, Google Ads, and content strategy to drive traffic and generate leads.",
      icon: "Lightbulb",
    },
    {
      title: "IT Support",
      desc: "Remote and on-site technical support, network setup, and system administration for growing businesses.",
      icon: "Lock",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Web Development",
        slug: "web-development",
        desc: "Custom websites built with React, Next.js, and modern frameworks. Fast, responsive, and conversion-optimized.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      },
      {
        title: "Mobile App Development",
        slug: "mobile-app-development",
        desc: "iOS and Android apps built with React Native and Flutter. Native performance with cross-platform efficiency.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
      },
      {
        title: "E-Commerce Solutions",
        slug: "e-commerce-solutions",
        desc: "Online stores with payment integration, inventory management, and logistics coordination for Zimbabwean businesses.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      },
      {
        title: "UI/UX Design",
        slug: "ui-ux-design",
        desc: "User-centered design that looks beautiful and works intuitively. Research-driven interfaces that convert.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
      },
      {
        title: "Digital Marketing",
        slug: "digital-marketing",
        desc: "SEO, social media management, Google Ads, and content strategy to drive traffic and generate leads.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      },
      {
        title: "IT Support",
        slug: "it-support",
        desc: "Remote and on-site technical support, network setup, and system administration for growing businesses.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial Codeboy's",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in web development.",
        client: "Commercial Client",
        services: ["Web Development", "Mobile App Development"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential Codeboy's",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in mobile app development.",
        client: "Residential Client",
        services: ["Mobile App Development", "E-Commerce Solutions"],
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial Codeboy's",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in e-commerce solutions.",
        client: "Industrial Client",
        services: ["E-Commerce Solutions", "UI/UX Design"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional Codeboy's",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in ui/ux design.",
        client: "Institutional Client",
        services: ["UI/UX Design", "Digital Marketing"],
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial Codeboy's",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in digital marketing.",
        client: "Commercial Client",
        services: ["Digital Marketing", "IT Support"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential Codeboy's",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in it support.",
        client: "Residential Client",
        services: ["IT Support", "Web Development"],
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Codeboy's built our e-commerce platform and it has been a revelation. Sales are up 200% since launch and the site runs flawlessly.",
      name: "Takudzwa Mhandu",
      role: "Founder, ZimStreet Fashion",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "The mobile app they developed for our delivery service is smooth, reliable, and our riders love it. Best tech investment we have made.",
      name: "Nyasha Chikwanha",
      role: "CEO, QuickDash Deliveries",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "Working with Codeboy's felt like having a tech co-founder. They understood our vision and delivered beyond what we imagined.",
      name: "Grace Mutandwa",
      role: "Startup Founder",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "Our website redesign by Codeboy's tripled our monthly leads. The design is stunning and the SEO work has us ranking on the first page.",
      name: "Peter Mukwende",
      role: "Director, Mukwende & Associates",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "Codeboy's Xtreme Technologies was born from a passion for building digital products that actually move the needle for businesses. We combine technical excellence with creative thinking to deliver solutions that stand out.",
      "With over 300 projects shipped and a 4.9-star Google rating, our team of developers, designers, and digital strategists has helped businesses across Zimbabwe establish powerful digital presences.",
    ],
    values: [
      { title: "Creative + Technical", desc: "We do not just code -- we design experiences. Every solution balances beauty with functionality." },
      { title: "Modern Stack", desc: "React, Next.js, Flutter, Node.js. We build with the same technologies used by Silicon Valley startups." },
      { title: "Speed to Market", desc: "Agile development methodology means you see progress weekly, not monthly. Ship faster, iterate smarter." },
      { title: "Post-Launch Support", desc: "We do not disappear after launch. Ongoing maintenance, updates, and optimization are built into every project." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "Codeboy's built our e-commerce platform and it has been a revelation. Sales are up 200% since launch and the site runs flawlessly.", name: "Takudzwa Mhandu", role: "Founder, ZimStreet Fashion", rating: 5 },
      { text: "The mobile app they developed for our delivery service is smooth, reliable, and our riders love it. Best tech investment we have made.", name: "Nyasha Chikwanha", role: "CEO, QuickDash Deliveries", rating: 5 },
      { text: "Working with Codeboy's felt like having a tech co-founder. They understood our vision and delivered beyond what we imagined.", name: "Grace Mutandwa", role: "Startup Founder", rating: 5 },
      { text: "Our website redesign by Codeboy's tripled our monthly leads. The design is stunning and the SEO work has us ranking on the first page.", name: "Peter Mukwende", role: "Director, Mukwende & Associates", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "Codeboy's Xtreme",
        address: "78 Leopold Takawira and, Robert Mugabe Rd, Harare, Zimbabwe",
        phone: "+263 78 522 1952",
        email: "hello@codeboysxtreme.co.zw",
      },
    ],
  },

  homeCta: {
    title: "BUILD SOMETHING XTREME",
    subtitle: "Websites, apps, and digital solutions that push boundaries. Let us build your next big thing.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Codeboy's! I need a website/app built for my business.",
    backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85",
  },

  footer: {
    description: "Codeboy's Xtreme Technologies is a dynamic Harare-based IT company delivering web development, mobile apps, and digital solutions with a fresh, creati...",
    copyright: "Codeboy's Xtreme",
  },
};

export default siteData;
