import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Button,
  Card,
  Typography,
  Avatar,
  Chip,
  Divider,
  Tab,
  Tabs,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import {
  Users,
  MessageCircle,
  Calendar,
  Trophy,
  Shield,
  BookOpen,
  Target,
  Code2,
  Laptop,
  Award,
  Users2,
  Briefcase,
  Palette,
  Video,
  ThumbsUp,
  Edit,
  Delete,
  MessageSquare,
} from "lucide-react";
import { communities } from "../data/communities";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`community-tabpanel-${index}`}
      aria-labelledby={`community-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const CommunityDetails = () => {
  const { communityId } = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [communityData, setCommunityData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [openAddPost, setOpenAddPost] = useState(false);
  const [openEditPost, setOpenEditPost] = useState(false);
  const [openAddComment, setOpenAddComment] = useState(null);
  const [postData, setPostData] = useState({
    title: "",
    content: "",
  });
  const [editPostData, setEditPostData] = useState({
    id: "",
    title: "",
    content: "",
  });
  const [commentData, setCommentData] = useState("");
  const [showAlert, setShowAlert] = useState({ open: false, message: "" });

  // Get current user data from localStorage
  const currentUser = JSON.parse(localStorage.getItem("registrationData")) || {
    id: "guest",
    fullName: "Guest User",
    email: "guest@example.com",
  };

  useEffect(() => {
    const community = communities.find((c) => c.id === communityId);
    if (community) {
      setCommunityData(community);
      // Initialize posts with user likes tracking
      setPosts([
        {
          id: "post1",
          title: "Welcome to the Community!",
          content: "Let's share knowledge and grow together.",
          user: { id: "admin1", name: "Community Admin" },
          date: new Date().toLocaleDateString(),
          likes: 0,
          likedBy: [],
          comments: [],
        },
      ]);
    }
  }, [communityId]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenAddPost = () => {
    setOpenAddPost(true);
  };

  const handleCloseAddPost = () => {
    setOpenAddPost(false);
    setPostData({ title: "", content: "" });
  };

  const handleOpenEditPost = (post) => {
    setEditPostData({
      id: post.id,
      title: post.title,
      content: post.content,
    });
    setOpenEditPost(true);
  };

  const handleCloseEditPost = () => {
    setOpenEditPost(false);
    setEditPostData({ id: "", title: "", content: "" });
  };

  const handleOpenAddComment = (postId) => {
    setOpenAddComment(postId);
  };

  const handleCloseAddComment = () => {
    setOpenAddComment(null);
    setCommentData("");
  };

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleEditPostChange = (e) => {
    const { name, value } = e.target;
    setEditPostData({
      ...editPostData,
      [name]: value,
    });
  };

  const handleCommentChange = (e) => {
    setCommentData(e.target.value);
  };

  const handleSavePost = () => {
    const newPost = {
      id: `post${posts.length + 1}`,
      title: postData.title,
      content: postData.content,
      user: {
        id: currentUser.email,
        name: currentUser.fullName,
      },
      date: new Date().toLocaleDateString(),
      likes: 0,
      likedBy: [],
      comments: [],
    };
    setPosts([newPost, ...posts]);
    handleCloseAddPost();
    setShowAlert({ open: true, message: "Post added successfully!" });
  };

  const handleSaveEditPost = () => {
    setPosts(
      posts.map((post) =>
        post.id === editPostData.id
          ? {
              ...post,
              title: editPostData.title,
              content: editPostData.content,
            }
          : post
      )
    );
    handleCloseEditPost();
    setShowAlert({ open: true, message: "Post updated successfully!" });
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
    setShowAlert({ open: true, message: "Post deleted successfully!" });
  };

  const handleAddLike = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const userIndex = post.likedBy.indexOf(currentUser.email);
          if (userIndex === -1) {
            // User hasn't liked the post yet
            return {
              ...post,
              likes: post.likes + 1,
              likedBy: [...post.likedBy, currentUser.email],
            };
          } else {
            // User already liked the post, remove the like
            return {
              ...post,
              likes: post.likes - 1,
              likedBy: post.likedBy.filter(
                (email) => email !== currentUser.email
              ),
            };
          }
        }
        return post;
      })
    );
  };

  const handleAddComment = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: `comment${post.comments.length + 1}`,
                  content: commentData,
                  user: {
                    id: currentUser.email,
                    name: currentUser.fullName,
                  },
                  date: new Date().toLocaleDateString(),
                },
              ],
            }
          : post
      )
    );
    handleCloseAddComment();
    setShowAlert({ open: true, message: "Comment added successfully!" });
  };

  const handleCloseAlert = () => {
    setShowAlert({ open: false, message: "" });
  };

  if (!communityData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Typography variant="h4" className="text-gray-600">
            Community Not Found
          </Typography>
        </div>
      </div>
    );
  }

  const renderCommunitySpecificContent = () => {
    switch (communityData.type) {
      case "tech":
        return (
          <div className="space-y-6">
            <div>
              <Typography variant="h6" className="font-semibold mb-4">
                Technologies & Tools
              </Typography>
              <div className="flex flex-wrap gap-2">
                {communityData.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    className="bg-blue-50 text-blue-600"
                  />
                ))}
              </div>
            </div>
            <div>
              <Typography variant="h6" className="font-semibold mb-4">
                Learning Paths
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {communityData.learningPaths.map((path, index) => (
                  <Card key={index} className="p-4">
                    <Typography variant="subtitle1" className="font-semibold">
                      {path.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Level: {path.level}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Duration: {path.duration}
                    </Typography>
                    <div className="mt-2">
                      {path.topics.map((topic, i) => (
                        <Chip
                          key={i}
                          label={topic}
                          size="small"
                          className="m-1 bg-gray-100"
                        />
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <Typography variant="h6" className="font-semibold mb-4">
                Job Board
              </Typography>
              <Card className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Typography variant="h6" className="text-green-600">
                      {communityData.jobBoard.positions}
                    </Typography>
                    <Typography variant="body2">Open Positions</Typography>
                  </div>
                  <Button variant="contained" color="primary">
                    View Jobs
                  </Button>
                </div>
                <Typography variant="subtitle2" className="mb-2">
                  Top Companies Hiring:
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {communityData.jobBoard.companies.map((company, index) => (
                    <Chip
                      key={index}
                      label={company}
                      size="small"
                      className="bg-blue-50 text-blue-600"
                    />
                  ))}
                </div>
              </Card>
            </div>
          </div>
        );

      case "creative":
        return (
          <div className="space-y-6">
            <div>
              <Typography variant="h6" className="font-semibold mb-4">
                Creative Disciplines
              </Typography>
              <div className="flex flex-wrap gap-2">
                {communityData.disciplines.map((discipline) => (
                  <Chip
                    key={discipline}
                    label={discipline}
                    className="bg-purple-50 text-purple-600"
                  />
                ))}
              </div>
            </div>
            <div>
              <Typography variant="h6" className="font-semibold mb-4">
                Upcoming Showcases
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {communityData.showcases.map((showcase, index) => (
                  <Card key={index} className="p-4">
                    <Typography variant="subtitle1" className="font-semibold">
                      {showcase.type}
                    </Typography>
                    <Typography variant="body2">
                      Next Date: {showcase.nextDate}
                    </Typography>
                    <Typography variant="body2">
                      Submissions: {showcase.submissions}
                    </Typography>
                    <Typography variant="body2">
                      Frequency: {showcase.frequency}
                    </Typography>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <Typography variant="h6" className="font-semibold mb-4">
                Workshop Information
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {communityData.workshops.map((workshop, index) => (
                  <Card key={index} className="p-4">
                    <Typography variant="subtitle1" className="font-semibold">
                      {workshop.format}
                    </Typography>
                    <Typography variant="body2">
                      Skill Level: {workshop.skillLevel}
                    </Typography>
                    <Typography variant="body2">
                      Max Participants: {workshop.maxParticipants}
                    </Typography>
                    <div className="mt-2">
                      <Typography variant="subtitle2">
                        Required Equipment:
                      </Typography>
                      {workshop.equipment.map((item, i) => (
                        <Chip
                          key={i}
                          label={item}
                          size="small"
                          className="m-1 bg-gray-100"
                        />
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "business":
        return (
          <div className="space-y-6">
            <div>
              <Typography variant="h6" className="font-semibold mb-4">
                Industries
              </Typography>
              <div className="flex flex-wrap gap-2">
                {communityData.industries.map((industry) => (
                  <Chip
                    key={industry}
                    label={industry}
                    className="bg-green-50 text-green-600"
                  />
                ))}
              </div>
            </div>
            <div>
              <Typography variant="h6" className="font-semibold mb-4">
                Networking Events
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {communityData.networkingEvents.map((event, index) => (
                  <Card key={index} className="p-4">
                    <Typography variant="subtitle1" className="font-semibold">
                      {event.type}
                    </Typography>
                    <Typography variant="body2">
                      Frequency: {event.frequency}
                    </Typography>
                    <Typography variant="body2">
                      Format: {event.format}
                    </Typography>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <Typography variant="h6" className="font-semibold mb-4">
                Mentorship Programs
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {communityData.mentorship.programs.map((program, index) => (
                  <Card key={index} className="p-4">
                    <Typography variant="subtitle1" className="font-semibold">
                      {program.name}
                    </Typography>
                    <Typography variant="body2">
                      Focus: {program.focus}
                    </Typography>
                    <Typography variant="body2">
                      Duration: {program.duration}
                    </Typography>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <Typography variant="h6" className="font-semibold mb-4">
                Investment Opportunities
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {communityData.investmentOpportunities.map(
                  (opportunity, index) => (
                    <Card key={index} className="p-4">
                      <Typography variant="subtitle1" className="font-semibold">
                        {opportunity.type}
                      </Typography>
                      <Typography variant="body2">
                        Sector: {opportunity.sector}
                      </Typography>
                      <Typography variant="body2">
                        Minimum Investment: ${opportunity.minimumInvestment}
                      </Typography>
                    </Card>
                  )
                )}
              </div>
            </div>
          </div>
        );

      case "content":
        return (
          <div className="space-y-6">
            <div>
              <Typography variant="h6" className="font-semibold mb-4">
                Platforms
              </Typography>
              <div className="flex flex-wrap gap-2">
                {communityData.platforms.map((platform) => (
                  <Chip
                    key={platform}
                    label={platform}
                    className="bg-orange-50 text-orange-600"
                  />
                ))}
              </div>
            </div>
            <div>
              <Typography variant="h6" className="font-semibold mb-4">
                Content Types
              </Typography>
              <div className="flex flex-wrap gap-2">
                {communityData.contentTypes.map((type) => (
                  <Chip
                    key={type}
                    label={type}
                    className="bg-orange-50 text-orange-600"
                  />
                ))}
              </div>
            </div>
            <div>
              <Typography variant="h6" className="font-semibold mb-4">
                Analytics
              </Typography>
              <Card className="p-4">
                <Typography variant="subtitle1">
                  Total Reach:{" "}
                  {communityData.analytics.totalReach.toLocaleString()}
                </Typography>
                <Typography variant="body2">
                  Average Engagement: {communityData.analytics.avgEngagement}%
                </Typography>
                <Typography variant="body2" className="mt-2">
                  Top Platforms:
                </Typography>
                <div className="flex flex-wrap gap-2 mt-1">
                  {communityData.analytics.topPlatforms.map(
                    (platform, index) => (
                      <Chip
                        key={index}
                        label={platform}
                        size="small"
                        className="bg-orange-50 text-orange-600"
                      />
                    )
                  )}
                </div>
              </Card>
            </div>
            <div>
              <Typography variant="h6" className="font-semibold mb-4">
                Collaborations
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {communityData.collaborations.map((collab, index) => (
                  <Card key={index} className="p-4">
                    <Typography variant="subtitle1" className="font-semibold">
                      {collab.type}
                    </Typography>
                    <Typography variant="body2">Requirements:</Typography>
                    {collab.requirements.map((req, i) => (
                      <Typography key={i} variant="body2" className="ml-2">
                        • {req}
                      </Typography>
                    ))}
                    <Typography variant="body2" className="mt-2">
                      Benefits:
                    </Typography>
                    {collab.benefits.map((benefit, i) => (
                      <Typography key={i} variant="body2" className="ml-2">
                        • {benefit}
                      </Typography>
                    ))}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Card */}
        <Card className="mb-8">
          <div
            className={`bg-gradient-to-r ${
              communityData.type === "tech"
                ? "from-blue-500 to-cyan-500"
                : communityData.type === "creative"
                ? "from-purple-500 to-pink-500"
                : communityData.type === "business"
                ? "from-green-500 to-teal-500"
                : "from-orange-500 to-red-500"
            } p-8 text-white`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <communityData.icon />
              </div>
              <div>
                <Typography variant="h4" className="font-bold mb-2">
                  {communityData.name}
                </Typography>
                <Typography variant="subtitle1" className="text-blue-100">
                  {communityData.description}
                </Typography>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {communityData.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#FFFFFF",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
            <StatCard
              icon={<Users className="w-5 h-5" />}
              value={communityData.members}
              label="Members"
            />
           
            <StatCard
              icon={<MessageCircle className="w-5 h-5" />}
              value={posts.length} // Updated to show the number of posts
              label="Posts" // Added label for posts
            />
            <StatCard
              icon={<Calendar className="w-5 h-5" />}
              value={communityData.events.length}
              label="Events"
            />
            <StatCard
              icon={<Trophy className="w-5 h-5" />}
              value={communityData.skillLevels.length}
              label="Skill Levels"
            />
          </div>
        </Card>

        {/* Content Tabs */}
        <Card>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            className="border-b border-gray-200"
          >
            <Tab
              label="Overview"
              icon={<Target className="w-4 h-4" />}
              iconPosition="start"
            />
            <Tab
              label="Community Specific"
              icon={<Code2 className="w-4 h-4" />}
              iconPosition="start"
            />
            <Tab
              label="Posts"
              icon={<MessageCircle className="w-4 h-4" />}
              iconPosition="start"
            />
            <Tab
              label="Events"
              icon={<Calendar className="w-4 h-4" />}
              iconPosition="start"
            />
            <Tab
              label="Resources"
              icon={<BookOpen className="w-4 h-4" />}
              iconPosition="start"
            />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <div className="space-y-8">
              {/* Topics */}
              <div>
                <Typography variant="h6" className="font-semibold mb-4">
                  Topics Covered
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {communityData.topics.map((topic, index) => (
                    <Chip
                      key={index}
                      label={topic}
                      className="bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                    />
                  ))}
                </div>
              </div>

              {/* Skill Levels */}
              <div>
                <Typography variant="h6" className="font-semibold mb-4">
                  Skill Levels
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {communityData.skillLevels.map((level, index) => (
                    <Chip
                      key={index}
                      label={level}
                      className="bg-green-50 text-green-600"
                    />
                  ))}
                </div>
              </div>

              {/* Admins Section */}
              <div>
                <Typography variant="h6" className="font-semibold mb-4">
                  Community Leaders
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {communityData.admins.map((admin) => (
                    <Link
                      key={admin.id}
                      to={`/profile-details/${admin.id}`}
                      className="no-underline"
                    >
                      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <Avatar src={admin.avatar} className="w-12 h-12" />
                        <div>
                          <Typography
                            variant="subtitle1"
                            className="font-medium text-blue-600 hover:underline"
                          >
                            {admin.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="text-gray-600 flex items-center gap-1"
                          >
                            <Shield className="w-4 h-4" />
                            {admin.role}
                          </Typography>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            {renderCommunitySpecificContent()}
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <div className="space-y-4">
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenAddPost}
                startIcon={<MessageCircle className="w-4 h-4" />}
                sx={{
                  mb: 2,
                  background: "linear-gradient(to right, #2563eb, #7c3aed)",
                  "&:hover": {
                    background: "linear-gradient(to right, #1d4ed8, #6d28d9)",
                  },
                  fontWeight: "bold",
                  borderRadius: "8px",
                }}
              >
                Add New Post
              </Button>

              {posts.map((post) => (
                <Card key={post.id} className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8" />
                        <Typography variant="subtitle2" className="font-medium">
                          {post.user.name}
                        </Typography>
                      </div>
                      {post.user.id === currentUser.email && (
                        <div className="flex gap-2">
                          <IconButton
                            onClick={() => handleOpenEditPost(post)}
                            size="small"
                          >
                            <Edit className="w-4 h-4" />
                          </IconButton>
                          <IconButton
                            onClick={() => handleDeletePost(post.id)}
                            size="small"
                          >
                            <Delete className="w-4 h-4" />
                          </IconButton>
                        </div>
                      )}
                    </div>
                    <Typography variant="h6">{post.title}</Typography>
                    <Typography variant="body1" className="text-gray-700">
                      {post.content}
                    </Typography>
                    <Typography variant="body2" className="text-gray-600">
                      {post.date}
                    </Typography>
                    <div className="flex gap-4">
                      <Button
                        startIcon={<ThumbsUp className="w-4 h-4" />}
                        onClick={() => handleAddLike(post.id)}
                        size="small"
                        color={
                          post.likedBy.includes(currentUser.email)
                            ? "primary"
                            : "inherit"
                        }
                      >
                        Like ({post.likes})
                      </Button>
                      <Button
                        startIcon={<MessageSquare className="w-4 h-4" />}
                        onClick={() => handleOpenAddComment(post.id)}
                        size="small"
                      >
                        Comment ({post.comments.length})
                      </Button>
                    </div>
                    {post.comments.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <Typography variant="subtitle2" className="font-medium">
                          Comments
                        </Typography>
                        {post.comments.map((comment) => (
                          <div
                            key={comment.id}
                            className="p-2 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center gap-2">
                              <Avatar className="w-6 h-6" />
                              <Typography
                                variant="body2"
                                className="font-medium"
                              >
                                {comment.user.name}
                              </Typography>
                            </div>
                            <Typography
                              variant="body2"
                              className="text-gray-700"
                            >
                              {comment.content}
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-500"
                            >
                              {comment.date}
                            </Typography>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabPanel>

          <TabPanel value={tabValue} index={3}>
            <div className="space-y-4">
              {communityData.events.map((event, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <Typography variant="h6">{event.title}</Typography>
                      <Typography variant="body2" className="text-gray-600">
                        {event.date} at {event.time}
                      </Typography>
                      <div className="flex items-center gap-2 mt-1">
                        <Chip
                          label={event.location}
                          size="small"
                          className="bg-blue-50 text-blue-600"
                        />
                        <Typography variant="body2" className="text-gray-600">
                          {event.attendees} attendees
                        </Typography>
                      </div>
                    </div>
                    <Button variant="outlined" color="primary">
                      Join Event
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabPanel>

          <TabPanel value={tabValue} index={4}>
            <div className="space-y-4">
              {communityData.resources.map((resource, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <Typography variant="h6">{resource.title}</Typography>
                      <div className="flex items-center gap-2">
                        <Typography variant="body2" className="text-gray-600">
                          Type: {resource.type}
                        </Typography>
                        <Chip
                          label={resource.access}
                          size="small"
                          className={
                            resource.access === "premium"
                              ? "bg-purple-50 text-purple-600"
                              : "bg-green-50 text-green-600"
                          }
                        />
                      </div>
                      <Typography variant="body2" className="text-gray-600">
                        {resource.downloads
                          ? `${resource.downloads} downloads`
                          : `${resource.views} views`}
                      </Typography>
                    </div>
                    <Button variant="outlined" color="primary">
                      Access
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabPanel>
        </Card>

        {/* Add Post Dialog */}
        <Dialog
          open={openAddPost}
          onClose={handleCloseAddPost}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            <div className="text-xl font-bold text-gray-800">Add New Post</div>
          </DialogTitle>
          <DialogContent>
            <div className="py-4 space-y-4">
              <TextField
                fullWidth
                label="Post Title"
                name="title"
                value={postData.title}
                onChange={handlePostChange}
                variant="outlined"
                margin="dense"
              />
              <TextField
                fullWidth
                label="Content"
                name="content"
                value={postData.content}
                onChange={handlePostChange}
                variant="outlined"
                margin="dense"
                multiline
                rows={4}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAddPost} color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleSavePost}
              variant="contained"
              color="primary"
              disabled={!postData.title || !postData.content}
              sx={{ fontWeight: "bold", borderRadius: "8px" }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>

        {/* Edit Post Dialog */}
        <Dialog
          open={openEditPost}
          onClose={handleCloseEditPost}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            <div className="text-xl font-bold text-gray-800">Edit Post</div>
          </DialogTitle>
          <DialogContent>
            <div className="py-4 space-y-4">
              <TextField
                fullWidth
                label="Post Title"
                name="title"
                value={editPostData.title}
                onChange={handleEditPostChange}
                variant="outlined"
                margin="dense"
              />
              <TextField
                fullWidth
                label="Content"
                name="content"
                value={editPostData.content}
                onChange={handleEditPostChange}
                variant="outlined"
                margin="dense"
                multiline
                rows={4}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseEditPost} color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleSaveEditPost}
              variant="contained"
              color="primary"
              disabled={!editPostData.title || !editPostData.content}
              sx={{ fontWeight: "bold", borderRadius: "8px" }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>

        {/* Add Comment Dialog */}
        <Dialog
          open={openAddComment !== null}
          onClose={handleCloseAddComment}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            <div className="text-xl font-bold text-gray-800">Add Comment</div>
          </DialogTitle>
          <DialogContent>
            <div className="py-4">
              <TextField
                fullWidth
                label="Comment"
                value={commentData}
                onChange={handleCommentChange}
                variant="outlined"
                margin="dense"
                multiline
                rows={3}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAddComment} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => handleAddComment(openAddComment)}
              variant="contained"
              color="primary"
              disabled={!commentData}
              sx={{ fontWeight: "bold", borderRadius: "8px" }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        {/* Success Alert */}
        <Snackbar
          open={showAlert.open}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
        >
          <Alert
            onClose={handleCloseAlert}
            severity="success"
            sx={{ width: "100%" }}
          >
            {showAlert.message}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label }) => (
  <div className="text-center p-4 rounded-lg bg-white shadow-sm">
    <div className="flex justify-center text-blue-600 mb-2">{icon}</div>
    <Typography variant="h5" className="font-bold text-gray-900">
      {value}
    </Typography>
    <Typography variant="body2" className="text-gray-600">
      {label}
    </Typography>
  </div>
);

export default CommunityDetails;
