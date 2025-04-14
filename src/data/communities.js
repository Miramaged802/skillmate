// Importing icons from lucide-react for use in community objects
import {
  Code2,
  Database,
  Palette,
  LineChart,
  Video,
  Briefcase,
  Cpu,
  Camera,
  Megaphone,
} from "lucide-react";

export const communities = [
  // Software Development community
  {
    id: "software-dev",
    type: "tech",
    icon: Code2,
    name: "Software Development",
    members: 5200,
    description:
      "A community for developers to share knowledge, discuss trends, and collaborate on projects.",
    tags: [
      "Programming",
      "Software Engineering",
      "Web Development",
      "Mobile Development",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    topics: [
      "Frontend",
      "Backend",
      "Mobile",
      "DevOps",
      "Cloud Computing",
      "Security",
    ],
    skillLevels: ["Beginner", "Intermediate", "Advanced", "Expert"],
    technologies: [
      "JavaScript",
      "Python",
      "Java",
      "React",
      "Node.js",
      "AWS",
      "Docker",
      "Kubernetes",
      "GraphQL",
      "TypeScript",
    ],
    learningPaths: [
      {
        name: "Full-Stack Development",
        level: "Intermediate",
        duration: "6 months",
        topics: ["JavaScript", "React", "Node.js", "MongoDB"],
      },
      {
        name: "Cloud Architecture",
        level: "Advanced",
        duration: "4 months",
        topics: ["AWS", "Azure", "DevOps", "Microservices"],
      },
    ],
    certifications: [
      {
        name: "Full-Stack Developer",
        provider: "SkillMate",
        level: "Professional",
      },
      {
        name: "Cloud Architecture",
        provider: "AWS",
        level: "Associate",
      },
    ],
    jobBoard: {
      active: true,
      positions: 150,
      companies: ["Google", "Microsoft", "Amazon", "Meta", "Netflix"],
    },
    hackathons: {
      upcoming: true,
      frequency: "Quarterly",
      nextDate: "2025-06-15",
    },
    admins: [
      {
        id: "b2c3d4e5-f6a7-8901-bcde-2345678901bc",
        name: "Alex Chen",
        role: "Community Lead",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      },
      {
        id: "a1b2c3d4-e5f6-7890-abcd-1234567890ab",
        name: "Sarah Miller",
        role: "Tech Mentor",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
    ],
    resources: [
      {
        title: "Modern JavaScript Guide",
        type: "Course",
        access: "premium",
        views: 12500,
      },
      {
        title: "System Design Handbook",
        type: "PDF",
        access: "free",
        downloads: 8900,
      },
    ],
    events: [
      {
        title: "React Advanced Workshop",
        type: "Workshop",
        date: "2025-04-15",
        time: "10:00 AM",
        attendees: 200,
        location: "online",
      },
      {
        title: "Tech Conference 2025",
        type: "Conference",
        date: "2025-05-20",
        time: "9:00 AM",
        attendees: 1000,
        location: "hybrid",
      },
    ],
  },
  // Data Science community
  {
    id: "data-science",
    type: "tech",
    icon: Database,
    name: "Data Science",
    members: 3800,
    description:
      "Connect with data professionals, share insights, and explore the latest in data science.",
    tags: ["Analytics", "Machine Learning", "Big Data", "Statistics"],
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    topics: [
      "Machine Learning",
      "Data Analysis",
      "Big Data",
      "AI",
      "Statistics",
    ],
    skillLevels: ["Beginner", "Intermediate", "Advanced"],
    technologies: [
      "Python",
      "R",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "Scikit-learn",
      "SQL",
      "Tableau",
      "Power BI",
    ],
    learningPaths: [
      {
        name: "Data Analysis",
        level: "Beginner",
        duration: "3 months",
        topics: ["Python", "Pandas", "SQL", "Visualization"],
      },
      {
        name: "Machine Learning",
        level: "Advanced",
        duration: "6 months",
        topics: ["TensorFlow", "Deep Learning", "NLP", "Computer Vision"],
      },
    ],
    certifications: [
      {
        name: "Data Scientist",
        provider: "SkillMate",
        level: "Professional",
      },
      {
        name: "ML Engineer",
        provider: "Google",
        level: "Advanced",
      },
    ],
    jobBoard: {
      active: true,
      positions: 80,
      companies: ["IBM", "Google", "Amazon", "Microsoft"],
    },
    hackathons: {
      upcoming: true,
      frequency: "Bi-monthly",
      nextDate: "2025-05-01",
    },
    admins: [
      {
        id: "e5f6a7b8-c9d0-1234-ef01-5678901234ef",
        name: "Emily Wang",
        role: "Data Science Lead",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
      {
        id: "a5b6c7d8-e9f0-1234-8901-5678901234a5",
        name: "Michael Johnson",
        role: "ML Expert",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      },
    ],
    resources: [
      {
        title: "Machine Learning Fundamentals",
        type: "Course",
        access: "premium",
        views: 9500,
      },
      {
        title: "Data Analysis Cookbook",
        type: "PDF",
        access: "free",
        downloads: 6700,
      },
    ],
    events: [
      {
        title: "Data Science Summit",
        type: "Conference",
        date: "2025-04-20",
        time: "9:00 AM",
        attendees: 500,
        location: "hybrid",
      },
      {
        title: "ML Workshop Series",
        type: "Workshop",
        date: "2025-05-15",
        time: "2:00 PM",
        attendees: 150,
        location: "online",
      },
    ],
  },
  // Design community
  {
    id: "design",
    type: "creative",
    icon: Palette,
    name: "Design",
    members: 4100,
    description:
      "A space for designers to showcase work, get feedback, and discuss design trends.",
    tags: ["UI/UX", "Graphic Design", "Motion", "Brand Design"],
    coverImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    topics: ["UI Design", "UX Research", "Brand Identity", "Motion Design"],
    skillLevels: ["Beginner", "Intermediate", "Advanced"],
    disciplines: [
      "UI/UX Design",
      "Graphic Design",
      "Motion Design",
      "Brand Design",
      "Illustration",
    ],
    showcases: [
      {
        type: "Portfolio Review",
        frequency: "Monthly",
        nextDate: "2025-04-25",
        submissions: 45,
      },
      {
        type: "Design Awards",
        frequency: "Annually",
        nextDate: "2025-12-10",
        submissions: 120,
      },
    ],
    workshops: [
      {
        format: "Live Design Session",
        skillLevel: "Intermediate",
        equipment: ["Laptop", "Figma", "Adobe CC"],
        maxParticipants: 30,
      },
      {
        format: "Critique Session",
        skillLevel: "All Levels",
        equipment: ["Design Portfolio"],
        maxParticipants: 20,
      },
    ],
    collaborationProjects: [
      {
        name: "Community Design System",
        type: "UI Kit",
        status: "In Progress",
        participants: 15,
      },
      {
        name: "Brand Refresh Project",
        type: "Branding",
        status: "Planning",
        participants: 8,
      },
    ],
    admins: [
      {
        id: "b6c7d8e9-f0a1-2345-9012-6789012345b6",
        name: "Lisa Park",
        role: "Design Lead",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
      {
        id: "c7d8e9f0-a1b2-3456-0123-7890123456c7",
        name: "David Chen",
        role: "Creative Director",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      },
    ],
    resources: [
      {
        title: "Design Systems Guide",
        type: "Course",
        access: "premium",
        views: 7800,
      },
      {
        title: "UI Components Library",
        type: "Resource Pack",
        access: "free",
        downloads: 5600,
      },
    ],
    events: [
      {
        title: "Design Week 2025",
        type: "Conference",
        date: "2025-06-10",
        time: "9:00 AM",
        attendees: 300,
        location: "hybrid",
      },
      {
        title: "UX Research Workshop",
        type: "Workshop",
        date: "2025-04-30",
        time: "2:00 PM",
        attendees: 50,
        location: "online",
      },
    ],
  },
  // Cybersecurity community
  {
    id: "cybersecurity",
    type: "tech",
    icon: Cpu,
    name: "Cybersecurity",
    members: 3200,
    description:
      "A hub for cybersecurity enthusiasts to learn about threats, defenses, and best practices.",
    tags: ["Security", "Hacking", "Encryption", "Network Defense"],
    coverImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    topics: [
      "Ethical Hacking",
      "Penetration Testing",
      "Cryptography",
      "Network Security",
    ],
    skillLevels: ["Beginner", "Intermediate", "Advanced"],
    technologies: [
      "Wireshark",
      "Metasploit",
      "Kali Linux",
      "Nmap",
      "Burp Suite",
      "OpenSSL",
      "Firewall",
      "SIEM",
    ],
    learningPaths: [
      {
        name: "Ethical Hacking Basics",
        level: "Beginner",
        duration: "3 months",
        topics: ["Linux", "Networking", "Nmap", "Wireshark"],
      },
      {
        name: "Advanced Penetration Testing",
        level: "Advanced",
        duration: "5 months",
        topics: ["Metasploit", "Burp Suite", "Exploit Development"],
      },
    ],
    certifications: [
      {
        name: "Certified Ethical Hacker",
        provider: "EC-Council",
        level: "Professional",
      },
      {
        name: "CompTIA Security+",
        provider: "CompTIA",
        level: "Intermediate",
      },
    ],
    jobBoard: {
      active: true,
      positions: 60,
      companies: ["Palo Alto Networks", "Cisco", "FireEye", "CrowdStrike"],
    },
    hackathons: {
      upcoming: true,
      frequency: "Bi-annually",
      nextDate: "2025-07-10",
    },
    admins: [
      {
        id: "d8e9f0a1-b2c3-4567-1234-8901234567d8",
        name: "Omar Khalid",
        role: "Security Lead",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        id: "e9f0a1b2-c3d4-5678-2345-9012345678e9",
        name: "Fatima Ali",
        role: "Penetration Tester",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      },
    ],
    resources: [
      {
        title: "Network Security Essentials",
        type: "Course",
        access: "premium",
        views: 8500,
      },
      {
        title: "Penetration Testing Guide",
        type: "PDF",
        access: "free",
        downloads: 7200,
      },
    ],
    events: [
      {
        title: "Cyber Defense Summit",
        type: "Conference",
        date: "2025-05-25",
        time: "10:00 AM",
        attendees: 400,
        location: "hybrid",
      },
      {
        title: "CTF Workshop",
        type: "Workshop",
        date: "2025-04-28",
        time: "1:00 PM",
        attendees: 100,
        location: "online",
      },
    ],
  },
  // Entrepreneurship community
  {
    id: "entrepreneurship",
    type: "business",
    icon: Briefcase,
    name: "Entrepreneurship",
    members: 4500,
    description:
      "A community for entrepreneurs to network, share startup ideas, and grow their businesses.",
    tags: ["Startups", "Business Strategy", "Funding", "Leadership"],
    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    topics: ["Startup Funding", "Business Models", "Marketing", "Scaling"],
    skillLevels: ["Beginner", "Intermediate", "Advanced"],
    industries: ["Tech", "Retail", "Healthcare", "Finance", "E-commerce"],
    networkingEvents: [
      {
        type: "Pitch Night",
        frequency: "Monthly",
        format: "hybrid",
      },
      {
        type: "Founder Meetup",
        frequency: "Quarterly",
        format: "in-person",
      },
    ],
    mentorship: {
      available: true,
      programs: [
        {
          name: "Startup Accelerator",
          focus: "Early-Stage Growth",
          duration: "6 months",
        },
        {
          name: "Leadership Coaching",
          focus: "Team Management",
          duration: "3 months",
        },
      ],
    },
    investmentOpportunities: [
      {
        type: "Seed Funding",
        minimumInvestment: 5000,
        sector: "Tech",
      },
      {
        type: "Venture Capital",
        minimumInvestment: 25000,
        sector: "Healthcare",
      },
    ],
    admins: [
      {
        id: "f0a1b2c3-d4e5-6789-3456-0123456789f0",
        name: "Ahmed Hassan",
        role: "Founder Lead",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      },
      {
        id: "a1b2c3d4-e5f6-7890-4567-1234567890a1",
        name: "Layla Omar",
        role: "Business Mentor",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
      },
    ],
    resources: [
      {
        title: "Startup Playbook",
        type: "Course",
        access: "premium",
        views: 9200,
      },
      {
        title: "Business Model Canvas",
        type: "Template",
        access: "free",
        downloads: 8100,
      },
    ],
    events: [
      {
        title: "Global Startup Summit",
        type: "Conference",
        date: "2025-06-15",
        time: "9:00 AM",
        attendees: 600,
        location: "hybrid",
      },
      {
        title: "Pitch Workshop",
        type: "Workshop",
        date: "2025-05-05",
        time: "3:00 PM",
        attendees: 80,
        location: "online",
      },
    ],
  },
  // Content Creation community
  {
    id: "content-creation",
    type: "content",
    icon: Video,
    name: "Content Creation",
    members: 3900,
    description:
      "A space for content creators to collaborate, share tips, and grow their audience.",
    tags: ["Video", "Blogging", "Podcasting", "Social Media"],
    coverImage:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    topics: ["Video Editing", "SEO", "Branding", "Audience Engagement"],
    skillLevels: ["Beginner", "Intermediate", "Advanced"],
    platforms: ["YouTube", "TikTok", "Instagram", "Medium", "Spotify"],
    contentTypes: ["Video", "Blog", "Podcast", "Social Media Posts"],
    analytics: {
      totalReach: 1500000,
      avgEngagement: 5.2,
      topPlatforms: ["YouTube", "Instagram"],
    },
    guidelines: [
      {
        category: "Content Quality",
        rules: ["Original content only", "Minimum 1080p for videos"],
      },
      {
        category: "Community Interaction",
        rules: [
          "No self-promotion in comments",
          "Provide constructive feedback",
        ],
      },
    ],
    collaborations: [
      {
        type: "Cross-Promotion",
        requirements: ["Minimum 10k followers", "Similar niche"],
        benefits: ["Increased reach", "Shared audience"],
      },
      {
        type: "Guest Content",
        requirements: ["Approved portfolio", "Proposal submission"],
        benefits: ["Exposure to new audience", "Portfolio credit"],
      },
    ],
    admins: [
      {
        id: "b2c3d4e5-f6a7-8901-5678-2345678901b2",
        name: "Noor Salem",
        role: "Content Lead",
        avatar: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263",
      },
      {
        id: "c3d4e5f6-a7b8-9012-6789-3456789012c3",
        name: "Youssef Amr",
        role: "Video Editor", // Fixed typo from 'pront'
        avatar: "https://images.unsplash.com/photo-1506794778202-cbfcc65c5967",
      },
    ],
    resources: [
      {
        title: "Video Editing Masterclass",
        type: "Course",
        access: "premium",
        views: 6700,
      },
      {
        title: "SEO Checklist",
        type: "PDF",
        access: "free",
        downloads: 5400,
      },
    ],
    events: [
      {
        title: "Creator Con 2025",
        type: "Conference",
        date: "2025-07-01",
        time: "10:00 AM",
        attendees: 350,
        location: "hybrid",
      },
      {
        title: "Live Editing Workshop",
        type: "Workshop",
        date: "2025-05-12",
        time: "4:00 PM",
        attendees: 60,
        location: "online",
      },
    ],
  },
  // Artificial Intelligence community
  {
    id: "artificial-intelligence",
    type: "tech",
    icon: LineChart,
    name: "Artificial Intelligence",
    members: 4600,
    description:
      "A community for AI enthusiasts to explore machine learning, neural networks, and cutting-edge innovations.",
    tags: ["AI", "Machine Learning", "Neural Networks", "Robotics"],
    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    topics: [
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Reinforcement Learning",
    ],
    skillLevels: ["Beginner", "Intermediate", "Advanced"],
    technologies: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "OpenAI",
      "Hugging Face",
      "Python",
      "CUDA",
      "Jupyter",
      "Scikit-learn",
    ],
    learningPaths: [
      {
        name: "AI Fundamentals",
        level: "Beginner",
        duration: "4 months",
        topics: ["Python", "Linear Algebra", "Basic Neural Networks"],
      },
      {
        name: "Deep Learning Specialization",
        level: "Advanced",
        duration: "6 months",
        topics: ["CNNs", "RNNs", "Transformers", "GANs"],
      },
    ],
    certifications: [
      {
        name: "AI Professional",
        provider: "Coursera",
        level: "Professional",
      },
      {
        name: "Deep Learning Specialist",
        provider: "NVIDIA",
        level: "Advanced",
      },
    ],
    jobBoard: {
      active: true,
      positions: 90,
      companies: ["OpenAI", "DeepMind", "Tesla", "NVIDIA"],
    },
    hackathons: {
      upcoming: true,
      frequency: "Bi-monthly",
      nextDate: "2025-06-20",
    },
    admins: [
      {
        id: "d4e5f6a7-b8c9-0123-7890-4567890123d4",
        name: "Rana Mahmoud",
        role: "AI Lead",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      },
      {
        id: "e5f6a7b8-c9d0-1234-8901-5678901234e5",
        name: "Khaled Sami",
        role: "ML Researcher",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
    ],
    resources: [
      {
        title: "Intro to Deep Learning",
        type: "Course",
        access: "premium",
        views: 11000,
      },
      {
        title: "AI Research Papers",
        type: "PDF",
        access: "free",
        downloads: 9500,
      },
    ],
    events: [
      {
        title: "AI Innovation Summit",
        type: "Conference",
        date: "2025-06-25",
        time: "9:00 AM",
        attendees: 700,
        location: "hybrid",
      },
      {
        title: "NLP Workshop",
        type: "Workshop",
        date: "2025-05-18",
        time: "2:00 PM",
        attendees: 120,
        location: "online",
      },
    ],
  },
  // Photography community
  {
    id: "photography",
    type: "creative",
    icon: Camera,
    name: "Photography",
    members: 3700,
    description:
      "A community for photographers to share techniques, critique work, and explore visual storytelling.",
    tags: ["Photography", "Editing", "Portrait", "Landscape"],
    coverImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    topics: ["Portrait Photography", "Landscape", "Photo Editing", "Lighting"],
    skillLevels: ["Beginner", "Intermediate", "Advanced"],
    disciplines: [
      "Portrait Photography",
      "Landscape Photography",
      "Street Photography",
      "Wildlife Photography",
      "Photojournalism",
    ],
    showcases: [
      {
        type: "Photo Exhibition",
        frequency: "Quarterly",
        nextDate: "2025-07-15",
        submissions: 60,
      },
      {
        type: "Annual Photo Contest",
        frequency: "Annually",
        nextDate: "2025-11-20",
        submissions: 150,
      },
    ],
    workshops: [
      {
        format: "Outdoor Shoot",
        skillLevel: "Intermediate",
        equipment: ["DSLR Camera", "Tripod", "Lens Kit"],
        maxParticipants: 25,
      },
      {
        format: "Editing Masterclass",
        skillLevel: "All Levels",
        equipment: ["Laptop", "Lightroom", "Photoshop"],
        maxParticipants: 30,
      },
    ],
    collaborationProjects: [
      {
        name: "Cityscape Series",
        type: "Photo Collection",
        status: "In Progress",
        participants: 12,
      },
      {
        name: "Cultural Portraits",
        type: "Exhibition",
        status: "Planning",
        participants: 10,
      },
    ],
    admins: [
      {
        id: "f6a7b8c9-d0e1-2345-9012-6789012345f6",
        name: "Aya Nasser",
        role: "Photography Lead",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
      },
      {
        id: "a7b8c9d0-e1f2-3456-0123-7890123456a7",
        name: "Hassan Zaki",
        role: "Creative Mentor",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      },
    ],
    resources: [
      {
        title: "Photography Basics",
        type: "Course",
        access: "premium",
        views: 8200,
      },
      {
        title: "Lightroom Presets",
        type: "Resource Pack",
        access: "free",
        downloads: 6500,
      },
    ],
    events: [
      {
        title: "Photo Fest 2025",
        type: "Conference",
        date: "2025-08-05",
        time: "10:00 AM",
        attendees: 250,
        location: "hybrid",
      },
      {
        title: "Portrait Lighting Workshop",
        type: "Workshop",
        date: "2025-05-22",
        time: "3:00 PM",
        attendees: 40,
        location: "online",
      },
    ],
  },
  // Marketing community
  {
    id: "marketing",
    type: "business",
    icon: Megaphone,
    name: "Marketing",
    members: 4300,
    description:
      "A community for marketers to share strategies, analyze trends, and boost brand growth.",
    tags: ["Digital Marketing", "SEO", "Advertising", "Branding"],
    coverImage:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    topics: ["SEO", "Content Marketing", "Social Media", "Analytics"],
    skillLevels: ["Beginner", "Intermediate", "Advanced"],
    industries: ["E-commerce", "Tech", "Retail", "Healthcare", "Entertainment"],
    networkingEvents: [
      {
        type: "Marketing Roundtable",
        frequency: "Monthly",
        format: "online",
      },
      {
        type: "Brand Summit",
        frequency: "Annually",
        format: "hybrid",
      },
    ],
    mentorship: {
      available: true,
      programs: [
        {
          name: "Digital Marketing Bootcamp",
          focus: "Campaign Strategy",
          duration: "4 months",
        },
        {
          name: "SEO Mentorship",
          focus: "Search Optimization",
          duration: "3 months",
        },
      ],
    },
    investmentOpportunities: [
      {
        type: "Ad Campaign Funding",
        minimumInvestment: 10000,
        sector: "E-commerce",
      },
      {
        type: "Influencer Marketing",
        minimumInvestment: 5000,
        sector: "Entertainment",
      },
    ],
    admins: [
      {
        id: "b8c9d0e1-f2a3-4567-1234-8901234567b8",
        name: "Mona Ibrahim",
        role: "Marketing Lead",
        avatar: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263",
      },
      {
        id: "c9d0e1f2-a3b4-5678-2345-9012345678c9",
        name: "Sami Farid",
        role: "SEO Expert",
        avatar: "https://images.unsplash.com/photo-1506794778202-cbfcc65c5967",
      },
    ],
    resources: [
      {
        title: "Digital Marketing Masterclass",
        type: "Course",
        access: "premium",
        views: 8800,
      },
      {
        title: "SEO Toolkit",
        type: "Template",
        access: "free",
        downloads: 7600,
      },
    ],
    events: [
      {
        title: "Marketing Expo 2025",
        type: "Conference",
        date: "2025-07-20",
        time: "9:00 AM",
        attendees: 500,
        location: "hybrid",
      },
      {
        title: "Social Media Strategy Workshop",
        type: "Workshop",
        date: "2025-05-10",
        time: "2:00 PM",
        attendees: 100,
        location: "online",
      },
    ],
  },
];
