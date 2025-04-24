import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  Typography,
  TextField,
  Chip,
  IconButton,
  Button,
  Avatar,
  InputAdornment,
} from "@mui/material";
import {
  Search,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Clock,
  Eye,
} from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "The Future of AI in Professional Development",
    excerpt:
      "Explore how artificial intelligence is reshaping the landscape of skill development and professional learning.",
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      role: "Tech Analyst",
    },
    category: "Technology",
    tags: [
      "Artificial Intelligence",
      "Professional Development",
      "Future of Work",
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    date: "March 20, 2025",
    readTime: "5 min read",
    views: 1200,
    likes: 120,
    comments: 25,
  },
  {
    id: "2",
    title: "Mastering Remote Collaboration",
    excerpt:
      "Learn effective strategies for building and managing successful remote teams in today's digital workplace.",
    author: {
      name: "Sarah Miller",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      role: "Leadership Coach",
    },
    category: "Leadership",
    tags: ["Remote Work", "Team Management", "Collaboration"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    date: "March 18, 2025",
    readTime: "7 min read",
    views: 850,
    likes: 85,
    comments: 18,
  },
];

const categories = [
  "Technology",
  "Leadership",
  "Professional Growth",
  "Skill Development",
  "Career Advice",
  "Industry Insights",
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 py-12">
      <Container maxWidth="lg" className="mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <Typography
            variant="h2"
            className="font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
          >
            SkillMate Blog
          </Typography>
          <Typography variant="h5" className="text-gray-600 mb-8">
            Insights, guides, and expert perspectives on professional
            development
          </Typography>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <TextField
              fullWidth
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white rounded-lg"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search className="text-gray-400" />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8 space-y-4">
          <Typography variant="h6" className="mb-4 font-bold">
            Categories
          </Typography>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-blue-50"
                } cursor-pointer transition-colors`}
              />
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <Card className="mb-8 overflow-hidden">
          <Grid container>
            <Grid item xs={12} md={6}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Featured post"
                className="w-full h-full object-cover"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="p-8">
                <Chip
                  label="Featured"
                  className="bg-blue-600 text-white mb-4"
                />
                <Typography variant="h4" className="font-bold mb-4">
                  The Evolution of Professional Learning in 2025
                </Typography>
                <Typography variant="body1" className="text-gray-600 mb-4">
                  Discover how technology and changing workplace dynamics are
                  reshaping the way we learn and develop professional skills.
                </Typography>
                <Button
                  variant="contained"
                  className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
                >
                  Read More
                </Button>
              </div>
            </Grid>
          </Grid>
        </Card>

        {/* Blog Posts Grid */}
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={6} key={post.id}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Chip
                      label={post.category}
                      size="small"
                      className="bg-blue-50 text-blue-600"
                    />
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <Typography variant="caption">{post.readTime}</Typography>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Eye className="w-4 h-4" />
                      <Typography variant="caption">{post.views}</Typography>
                    </div>
                  </div>

                  <Typography variant="h5" className="font-bold mb-2">
                    {post.title}
                  </Typography>

                  <Typography variant="body1" className="text-gray-600 mb-4">
                    {post.excerpt}
                  </Typography>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        className="bg-gray-100"
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Avatar src={post.author.avatar} alt={post.author.name} />
                      <div>
                        <Typography variant="subtitle2" className="font-medium">
                          {post.author.name}
                        </Typography>
                        <Typography variant="caption" className="text-gray-500">
                          {post.author.role}
                        </Typography>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <IconButton size="small">
                        <Heart className="w-5 h-5" />
                      </IconButton>
                      <IconButton size="small">
                        <MessageCircle className="w-5 h-5" />
                      </IconButton>
                      <IconButton size="small">
                        <Share2 className="w-5 h-5" />
                      </IconButton>
                      <IconButton size="small">
                        <Bookmark className="w-5 h-5" />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outlined"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Load More Articles
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
