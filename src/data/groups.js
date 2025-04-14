import {
  Code,
  PieChart,
  Palette,
  Cpu,
  LineChart,
  Megaphone,
  Globe,
  Camera,
  Coffee,
  BookOpen,
  Briefcase,
  Headphones,
} from "lucide-react";

export const groups = [
  {
    id: "python-dev",
    icon: Code,
    name: "Python Development",
    members: 1200,
    description:
      "Join our Python community to learn, share, and collaborate on projects.",
    tags: ["Programming", "Backend", "Data Science"],
    coverImage:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
    topics: ["Web Development", "Machine Learning", "Data Analysis"],
    meetingSchedule: "Every Tuesday at 7 PM",
    skillLevel: "All Levels",
    upcomingEvents: [
      {
        title: "Python Web Development Workshop",
        date: "March 25, 2025",
        time: "7:00 PM",
        attendees: 45,
      },
      {
        title: "Data Science with Python",
        date: "March 28, 2025",
        time: "6:30 PM",
        attendees: 32,
      },
    ],
    discussions: [
      {
        title: "Best Practices in Python",
        date: "April 1, 2025",
        participants: 15,
      },
      {
        title: "Python Libraries Overview",
        date: "April 3, 2025",
        participants: 20,
      },
    ],
    achievements: [
      {
        title: "Completed 100 Projects",
        date: "March 2025",
      },
      {
        title: "Hosted 10 Workshops",
        date: "February 2025",
      },
    ],
    resources: [
      { title: "Python Basics Guide", type: "PDF", downloads: 234 },
      { title: "Django Tutorial Series", type: "Video", views: 567 },
    ],
    projects: [
      {
        name: "Community Blog Platform",
        status: "In Progress",
        contributors: 8,
      },
      { name: "Data Visualization Tool", status: "Planning", contributors: 5 },
    ],
    admins: [
      {
        id: "a1b2c3d4-e5f6-7890-abcd-1234567890ab",
        name: "Sarah Miller",
        role: "Group Admin",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
      {
        id: "b2c3d4e5-f6a7-8901-bcde-2345678901bc",
        name: "Alex Chen",
        role: "Moderator",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      },
    ],
  },
  {
    id: "data-analytics",
    icon: PieChart,
    name: "Data Analytics",
    members: 850,
    description:
      "Master data analysis tools and techniques with fellow analysts.",
    tags: ["Analytics", "SQL", "Visualization"],
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    topics: ["SQL", "Power BI", "Excel"],
    meetingSchedule: "Every Wednesday at 6 PM",
    skillLevel: "Intermediate",
    upcomingEvents: [
      {
        title: "SQL Masterclass",
        date: "March 26, 2025",
        time: "6:00 PM",
        attendees: 30,
      },
      {
        title: "Data Visualization Workshop",
        date: "March 29, 2025",
        time: "3:00 PM",
        attendees: 25,
      },
    ],
    discussions: [
      {
        title: "Data Cleaning Techniques",
        date: "April 2, 2025",
        participants: 18,
      },
      {
        title: "Visualization Tools Comparison",
        date: "April 5, 2025",
        participants: 22,
      },
    ],
    achievements: [
      {
        title: "Published 5 Case Studies",
        date: "January 2025",
      },
      {
        title: "Conducted 3 Webinars",
        date: "February 2025",
      },
    ],
    resources: [
      { title: "SQL Fundamentals", type: "PDF", downloads: 156 },
      { title: "Power BI Tutorial", type: "Video", views: 432 },
    ],
    projects: [
      { name: "Sales Dashboard", status: "Active", contributors: 6 },
      { name: "Customer Analytics", status: "Planning", contributors: 4 },
    ],
    admins: [
      {
        id: "c3d4e5f6-a7b8-9012-cdef-3456789012cd",
        name: "Mike Johnson",
        role: "Analytics Lead",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      },
      {
        id: "d4e5f6a7-b8c9-0123-def0-4567890123de",
        name: "Lisa Chen",
        role: "Data Expert",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      },
    ],
  },
  {
    id: "ui-ux",
    icon: Palette,
    name: "UI/UX Design",
    members: 950,
    description: "Connect with designers and learn modern design principles.",
    tags: ["Design", "User Experience", "Figma"],
    coverImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    topics: ["UI Design", "UX Research", "Prototyping"],
    meetingSchedule: "Every Monday at 5 PM",
    skillLevel: "All Levels",
    upcomingEvents: [
      {
        title: "UI Animation Workshop",
        date: "March 30, 2025",
        time: "6:00 PM",
        attendees: 35,
      },
      {
        title: "Portfolio Review Session",
        date: "April 2, 2025",
        time: "7:00 PM",
        attendees: 20,
      },
    ],
    discussions: [
      {
        title: "Design Trends 2025",
        date: "April 4, 2025",
        participants: 25,
      },
      {
        title: "User Testing Insights",
        date: "April 6, 2025",
        participants: 15,
      },
    ],
    achievements: [
      {
        title: "Created 3 Design Systems",
        date: "February 2025",
      },
      {
        title: "Hosted 5 Design Workshops",
        date: "March 2025",
      },
    ],
    resources: [
      { title: "Design Systems Guide", type: "PDF", downloads: 189 },
      { title: "Figma Best Practices", type: "Video", views: 423 },
    ],
    projects: [
      { name: "Community Design System", status: "Active", contributors: 12 },
      { name: "UX Case Study Collection", status: "Ongoing", contributors: 8 },
    ],
    admins: [
      {
        id: "e5f6a7b8-c9d0-1234-ef01-5678901234ef",
        name: "Emily Wang",
        role: "Design Lead",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      },
      {
        id: "f6a7b8c9-d0e1-2345-f012-6789012345f0",
        name: "David Park",
        role: "UX Mentor",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
    ],
  },
  {
    id: "machine-learning",
    icon: Cpu,
    name: "Machine Learning",
    members: 750,
    description: "Explore ML algorithms and applications with experts.",
    tags: ["AI", "Deep Learning", "Neural Networks"],
    coverImage:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    topics: ["Neural Networks", "Computer Vision", "NLP"],
    meetingSchedule: "Every Thursday at 7 PM",
    skillLevel: "Advanced",
    upcomingEvents: [
      {
        title: "Deep Learning Workshop",
        date: "April 1, 2025",
        time: "7:00 PM",
        attendees: 28,
      },
      {
        title: "NLP Project Discussion",
        date: "April 4, 2025",
        time: "6:00 PM",
        attendees: 22,
      },
    ],
    discussions: [
      {
        title: "ML Algorithms Overview",
        date: "April 5, 2025",
        participants: 20,
      },
      {
        title: "Ethics in AI",
        date: "April 8, 2025",
        participants: 18,
      },
    ],
    achievements: [
      {
        title: "Developed 2 ML Models",
        date: "March 2025",
      },
      {
        title: "Published Research Paper",
        date: "February 2025",
      },
    ],
    resources: [
      { title: "Neural Networks Guide", type: "PDF", downloads: 145 },
      { title: "TensorFlow Tutorials", type: "Video", views: 378 },
    ],
    projects: [
      { name: "Image Recognition App", status: "In Progress", contributors: 7 },
      { name: "NLP Chatbot", status: "Planning", contributors: 5 },
    ],
    admins: [
      {
        id: "a7b8c9d0-e1f2-3456-0123-7890123456a7",
        name: "Robert Kim",
        role: "ML Engineer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      },
      {
        id: "8",
        name: "Anna Lee",
        role: "AI Researcher",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
    ],
  },
  {
    id: "digital-marketing",
    icon: LineChart,
    name: "Digital Marketing",
    members: 1100,
    description: "Learn and share digital marketing strategies and tools.",
    tags: ["Marketing", "SEO", "Social Media"],
    coverImage:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
    topics: ["SEO", "Content Marketing", "Analytics"],
    meetingSchedule: "Every Friday at 4 PM",
    skillLevel: "All Levels",
    upcomingEvents: [
      {
        title: "SEO Strategy Workshop",
        date: "April 5, 2025",
        time: "4:00 PM",
        attendees: 40,
      },
      {
        title: "Social Media Marketing",
        date: "April 8, 2025",
        time: "5:00 PM",
        attendees: 35,
      },
    ],
    discussions: [
      {
        title: "Effective Marketing Strategies",
        date: "April 10, 2025",
        participants: 30,
      },
      {
        title: "SEO Trends 2025",
        date: "April 12, 2025",
        participants: 25,
      },
    ],
    achievements: [
      {
        title: "Increased Engagement by 50%",
        date: "March 2025",
      },
      {
        title: "Launched 3 Successful Campaigns",
        date: "February 2025",
      },
    ],
    resources: [
      { title: "SEO Best Practices", type: "PDF", downloads: 267 },
      { title: "Content Marketing Guide", type: "Video", views: 589 },
    ],
    projects: [
      { name: "Marketing Campaign", status: "Active", contributors: 10 },
      { name: "Analytics Dashboard", status: "Completed", contributors: 6 },
    ],
    admins: [
      {
        id: "c9d0e1f2-a3b4-5678-2345-90",
        name: "Tom Wilson",
        role: "Marketing Lead",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        id: "d0e1f2a3-b4c5-6789-3456-0123456789d0",
        name: "Sarah Brown",
        role: "SEO Expert",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
    ],
  },
  {
    id: "content-creation",
    icon: Megaphone,
    name: "Content Creation",
    members: 680,
    description: "Create engaging content across different platforms.",
    tags: ["Writing", "Video", "Social"],
    coverImage:
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80",
    topics: ["Video Production", "Writing", "Social Media"],
    meetingSchedule: "Every Saturday at 3 PM",
    skillLevel: "Beginner",
    upcomingEvents: [
      {
        title: "Video Editing Workshop",
        date: "April 6, 2025",
        time: "3:00 PM",
        attendees: 25,
      },
      {
        title: "Content Strategy Session",
        date: "April 9, 2025",
        time: "4:00 PM",
        attendees: 30,
      },
    ],
    discussions: [
      {
        title: "Content Trends 2025",
        date: "April 11, 2025",
        participants: 20,
      },
      {
        title: "Engagement Techniques",
        date: "April 13, 2025",
        participants: 15,
      },
    ],
    achievements: [
      {
        title: "Gained 1000 Followers",
        date: "March 2025",
      },
      {
        title: "Published 5 Articles",
        date: "February 2025",
      },
    ],
    resources: [
      { title: "Content Creation Guide", type: "PDF", downloads: 178 },
      { title: "Video Editing Basics", type: "Video", views: 456 },
    ],
    projects: [
      { name: "YouTube Series", status: "In Progress", contributors: 5 },
      { name: "Blog Network", status: "Planning", contributors: 8 },
    ],
    admins: [
      {
        id: "e1f2a3b4-c5d6-7890-4567-1234567890e1",
        name: "Chris Taylor",
        role: "Content Lead",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        id: "f2a3b4c5-d6e7-8901-5678-2345678901f2",
        name: "Emma White",
        role: "Video Expert",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
    ],
  },
  {
    id: "web-development",
    icon: Globe,
    name: "Web Development",
    members: 1450,
    description: "Full-stack web development community for all skill levels.",
    tags: ["JavaScript", "React", "Node.js"],
    coverImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    topics: ["Frontend", "Backend", "DevOps"],
    meetingSchedule: "Every Monday at 8 PM",
    skillLevel: "All Levels",
    upcomingEvents: [
      {
        title: "React Workshop",
        date: "April 7, 2025",
        time: "8:00 PM",
        attendees: 50,
      },
      {
        title: "Node.js Basics",
        date: "April 10, 2025",
        time: "7:00 PM",
        attendees: 40,
      },
    ],
    discussions: [
      {
        title: "Frontend Frameworks Comparison",
        date: "April 12, 2025",
        participants: 35,
      },
      {
        title: "Backend Development Best Practices",
        date: "April 15, 2025",
        participants: 30,
      },
    ],
    achievements: [
      {
        title: "Launched 5 Websites",
        date: "March 2025",
      },
      {
        title: "Completed 10 Projects",
        date: "February 2025",
      },
    ],
    resources: [
      { title: "Web Dev Roadmap", type: "PDF", downloads: 345 },
      { title: "JavaScript Fundamentals", type: "Video", views: 678 },
    ],
    projects: [
      { name: "E-commerce Platform", status: "Active", contributors: 15 },
      { name: "Social Media App", status: "Planning", contributors: 10 },
    ],
    admins: [
      {
        id: "a3b4c5d6-e7f8-9012-6789-3456789012a3",
        name: "John Doe",
        role: "Tech Lead",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        id: "14",
        name: "Jane Smith",
        role: "Frontend Expert",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
    ],
  },
  {
    id: "photography",
    icon: Camera,
    name: "Photography",
    members: 920,
    description: "Share your photography skills and learn new techniques.",
    tags: ["DSLR", "Editing", "Composition"],
    coverImage:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    topics: ["Portrait", "Landscape", "Street Photography"],
    meetingSchedule: "Every Sunday at 10 AM",
    skillLevel: "All Levels",
    upcomingEvents: [
      {
        title: "Portrait Photography",
        date: "April 11, 2025",
        time: "10:00 AM",
        attendees: 30,
      },
      {
        title: "Photo Editing Workshop",
        date: "April 14, 2025",
        time: "2:00 PM",
        attendees: 25,
      },
    ],
    discussions: [
      {
        title: "Photography Techniques",
        date: "April 16, 2025",
        participants: 20,
      },
      {
        title: "Editing Tips and Tricks",
        date: "April 18, 2025",
        participants: 15,
      },
    ],
    achievements: [
      {
        title: "Hosted 3 Photo Walks",
        date: "March 2025",
      },
      {
        title: "Published 10 Articles",
        date: "February 2025",
      },
    ],
    resources: [
      { title: "Photography Basics", type: "PDF", downloads: 234 },
      { title: "Lightroom Tutorial", type: "Video", views: 567 },
    ],
    projects: [
      { name: "City Photo Walk", status: "Upcoming", contributors: 20 },
      { name: "Portrait Series", status: "In Progress", contributors: 8 },
    ],
    admins: [
      {
        id: "c5d6e7f8-a9b0-1234-8901-5678901234c5",
        name: "Michael Lee",
        role: "Lead Photographer",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        id: "d6e7f8a9-b0c1-2345-9012-6789012345d6",
        name: "Sophie Chen",
        role: "Editor",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
    ],
  },
  {
    id: "coffee-lovers",
    icon: Coffee,
    name: "Coffee Enthusiasts",
    members: 560,
    description: "For those passionate about coffee brewing and tasting.",
    tags: ["Brewing", "Beans", "Cafes"],
    coverImage:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    topics: ["Brewing Methods", "Bean Selection", "Cafe Culture"],
    meetingSchedule: "Every Saturday at 9 AM",
    skillLevel: "All Levels",
    upcomingEvents: [
      {
        title: "Coffee Tasting",
        date: "April 13, 2025",
        time: "9:00 AM",
        attendees: 20,
      },
      {
        title: "Brewing Workshop",
        date: "April 16, 2025",
        time: "10:00 AM",
        attendees: 15,
      },
    ],
    discussions: [
      {
        title: "Coffee Brewing Techniques",
        date: "April 19, 2025",
        participants: 10,
      },
      {
        title: "Best Coffee Beans",
        date: "April 21, 2025",
        participants: 12,
      },
    ],
    achievements: [
      {
        title: "Hosted 5 Coffee Tastings",
        date: "March 2025",
      },
      {
        title: "Published 3 Guides",
        date: "February 2025",
      },
    ],
    resources: [
      { title: "Coffee Brewing Guide", type: "PDF", downloads: 145 },
      { title: "Bean Selection Tips", type: "Video", views: 289 },
    ],
    projects: [
      { name: "Local Cafe Map", status: "Active", contributors: 6 },
      { name: "Brewing Guide", status: "In Progress", contributors: 4 },
    ],
    admins: [
      {
        id: "e7f8a9b0-c1d2-3456-0123-7890123456e7",
        name: "David Kim",
        role: "Coffee Expert",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        id: "f8a9b0c1-d2e3-4567-1234-8901234567f8",
        name: "Maria Garcia",
        role: "Barista",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
    ],
  },
  {
    id: "book-club",
    icon: BookOpen,
    name: "Book Club",
    members: 780,
    description: "Read and discuss books from various genres together.",
    tags: ["Reading", "Literature", "Discussion"],
    coverImage:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80",
    topics: ["Fiction", "Non-Fiction", "Classics"],
    meetingSchedule: "Every Sunday at 4 PM",
    skillLevel: "All Levels",
    upcomingEvents: [
      {
        title: "Monthly Book Discussion",
        date: "April 15, 2025",
        time: "4:00 PM",
        attendees: 35,
      },
      {
        title: "Author Meet & Greet",
        date: "April 18, 2025",
        time: "6:00 PM",
        attendees: 40,
      },
    ],
    discussions: [
      {
        title: "Favorite Books of 2025",
        date: "April 20, 2025",
        participants: 25,
      },
      {
        title: "Author Spotlight",
        date: "April 22, 2025",
        participants: 30,
      },
    ],
    achievements: [
      {
        title: "Read 50 Books Together",
        date: "March 2025",
      },
      {
        title: "Hosted 4 Author Events",
        date: "February 2025",
      },
    ],
    resources: [
      { title: "Reading List 2025", type: "PDF", downloads: 198 },
      { title: "Literary Analysis Guide", type: "PDF", downloads: 156 },
    ],
    projects: [
      { name: "Community Library", status: "Active", contributors: 12 },
      { name: "Book Review Blog", status: "Planning", contributors: 8 },
    ],
    admins: [
      {
        id: "a9b0c1d2-e3f4-5678-2345-9012345678a9",
        name: "Elizabeth Park",
        role: "Book Club Lead",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
      {
        id: "b0c1d2e3-f4a5-6789-3456-0123456789b0",
        name: "James Wilson",
        role: "Discussion Moderator",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
    ],
  },
  {
    id: "business-networking",
    icon: Briefcase,
    name: "Business Networking",
    members: 1320,
    description: "Connect with professionals and entrepreneurs.",
    tags: ["Networking", "Entrepreneurship", "Career"],
    coverImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    topics: ["Startups", "Career Development", "Investments"],
    meetingSchedule: "Every Wednesday at 7 PM",
    skillLevel: "All Levels",
    upcomingEvents: [
      {
        title: "Networking Mixer",
        date: "April 17, 2025",
        time: "7:00 PM",
        attendees: 60,
      },
      {
        title: "Startup Pitch Event",
        date: "April 20, 2025",
        time: "6:00 PM",
        attendees: 45,
      },
    ],
    discussions: [
      {
        title: "Networking Tips",
        date: "April 21, 2025",
        participants: 40,
      },
      {
        title: "Investment Strategies",
        date: "April 23, 2025",
        participants: 35,
      },
    ],
    achievements: [
      {
        title: "Connected 100 Professionals",
        date: "March 2025",
      },
      {
        title: "Hosted 5 Networking Events",
        date: "February 2025",
      },
    ],
    resources: [
      { title: "Networking Guide", type: "PDF", downloads: 287 },
      { title: "Pitch Deck Templates", type: "PDF", downloads: 234 },
    ],
    projects: [
      { name: "Mentorship Program", status: "Active", contributors: 15 },
      { name: "Industry Directory", status: "In Progress", contributors: 8 },
    ],
    admins: [
      {
        id: "b0c1d2e3-f4a5-6789-3456-0123456789b0",
        name: "Robert Johnson",
        role: "Network Lead",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        id: "d2e3f4a5-b6c7-8901-5678-2345678901d2",
        name: "Michelle Lee",
        role: "Events Coordinator",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
    ],
  },
  {
    id: "music-production",
    icon: Headphones,
    name: "Music Production",
    members: 890,
    description: "Learn music production techniques and share your work.",
    tags: ["Production", "Mixing", "Composition"],
    coverImage:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    topics: ["DAWs", "Sound Design", "Mixing & Mastering"],
    meetingSchedule: "Every Friday at 6 PM",
    skillLevel: "All Levels",
    upcomingEvents: [
      {
        title: "Music Production Basics",
        date: "April 19, 2025",
        time: "6:00 PM",
        attendees: 30,
      },
      {
        title: "Mixing Workshop",
        date: "April 22, 2025",
        time: "7:00 PM",
        attendees: 25,
      },
    ],
    discussions: [
      {
        title: "Music Production Techniques",
        date: "April 24, 2025",
        participants: 20,
      },
      {
        title: "Collaboration in Music",
        date: "April 26, 2025",
        participants: 15,
      },
    ],
    achievements: [
      {
        title: "Released 2 Albums",
        date: "March 2025",
      },
      {
        title: "Collaborated with 5 Artists",
        date: "February 2025",
      },
    ],
    resources: [
      { title: "DAW Basics Guide", type: "PDF", downloads: 178 },
      { title: "Mixing Tutorial Series", type: "Video", views: 456 },
    ],
    projects: [
      { name: "Collaborative Album", status: "In Progress", contributors: 10 },
      { name: "Sample Pack Creation", status: "Planning", contributors: 6 },
    ],
    admins: [
      {
        id: "e3f4a5b6-c7d8-9012-6789-3456789012e3",
        name: "Alex Turner",
        role: "Production Lead",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        id: "f4a5b6c7-d8e9-0123-7890-4567890123f4",
        name: "Sarah Martinez",
        role: "Audio Engineer",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
    ],
  },
];
