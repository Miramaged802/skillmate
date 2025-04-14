import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Button,
  Card,
  Typography,
  Avatar,
  Chip,
  Tab,
  Tabs,
  Box,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
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
  MessageSquare,
  ThumbsUp,
  Edit,
  Delete,
} from "lucide-react";
import { groups } from "../data/groups";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`group-tabpanel-${index}`}
      aria-labelledby={`group-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const GroupDetails = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
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
  const [posts, setPosts] = useState([]);

  // Get current user data from localStorage
  const currentUser = JSON.parse(localStorage.getItem("registrationData")) || {
    id: "guest",
    fullName: "Guest User",
    email: "guest@example.com",
  };

  const groupData = groups.find((group) => group.id === groupId);

  useEffect(() => {
    // Initialize posts with user likes tracking
    setPosts([
      {
        id: "post1",
        title: "Welcome to the Group!",
        content: "Let's share some ideas and learn together.",
        user: { id: "admin1", name: "Group Admin" },
        date: "2025-04-10",
        likes: 5,
        likedBy: [], // Array to track who liked the post
        comments: [
          {
            id: "comment1",
            content: "Excited to be here!",
            user: { id: "user2", name: "Member One" },
            date: "2025-04-10",
          },
        ],
      },
    ]);
  }, []);

  if (!groupData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Alert
            severity="error"
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => navigate("/groups")}
              >
                Back to Groups
              </Button>
            }
          >
            Group not found
          </Alert>
        </div>
      </div>
    );
  }

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
                  user: currentUser,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Card with Cover Image */}
        <Card className="mb-8">
          <div className="relative">
            <img
              src={groupData.coverImage}
              alt={groupData.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-violet-600/80 p-8 flex flex-col justify-end">
              <Typography variant="h4" className="font-bold mb-2 text-white">
                {groupData.name}
              </Typography>
              <Typography variant="subtitle1" className="text-blue-100">
                {groupData.description}
              </Typography>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
            <StatCard
              icon={<Users className="w-5 h-5" />}
              value={groupData.members}
              label="Members"
            />
            <StatCard
              icon={<MessageCircle className="w-5 h-5" />}
              value={posts.length}
              label="Posts"
            />
            <StatCard
              icon={<Calendar className="w-5 h-5" />}
              value={groupData.upcomingEvents?.length || 0}
              label="Events"
            />
            <StatCard
              icon={<Trophy className="w-5 h-5" />}
              value={groupData.achievements?.length || 0}
              label="Achievements"
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
              label="Events"
              icon={<Calendar className="w-4 h-4" />}
              iconPosition="start"
            />
            <Tab
              label="Discussions"
              icon={<MessageSquare className="w-4 h-4" />}
              iconPosition="start"
            />
            <Tab
              label="Resources"
              icon={<BookOpen className="w-4 h-4" />}
              iconPosition="start"
            />
            <Tab
              label="Posts"
              icon={<MessageCircle className="w-4 h-4" />}
              iconPosition="start"
            />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <div className="space-y-8">
              {/* Skills & Topics */}
              <div>
                <Typography variant="h6" className="font-semibold mb-4">
                  Skills & Topics
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {groupData.skills?.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      className="bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                    />
                  ))}
                </div>
              </div>

              {/* Meeting Schedule */}
              <div>
                <Typography variant="h6" className="font-semibold mb-4">
                  Meeting Schedule
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  {groupData.meetingSchedule}
                </Typography>
              </div>

              {/* Achievements */}
              <div>
                <Typography variant="h6" className="font-semibold mb-4">
                  Achievements
                </Typography>
                <div className="grid gap-4">
                  {groupData.achievements?.map((achievement, index) => (
                    <Card
                      key={index}
                      className="p-4 bg-gradient-to-r from-blue-50 to-violet-50"
                    >
                      <Typography variant="subtitle1" className="font-medium">
                        {achievement.title}
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        {achievement.date}
                      </Typography>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Admins */}
              <div>
                <Typography variant="h6" className="font-semibold mb-4">
                  Group Leaders
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupData.admins?.map((admin) => (
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
            <div className="space-y-4">
              {groupData.upcomingEvents?.map((event, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <Typography variant="h6">{event.title}</Typography>
                      <Typography variant="body2" className="text-gray-600">
                        {event.date} - {event.time}
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        {event.attendees} attendees
                      </Typography>
                    </div>
                    <Button variant="contained" color="primary">
                      Join Event
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <div className="space-y-4">
              {groupData.discussions?.map((discussion, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <Typography variant="h6">{discussion.title}</Typography>
                      <Typography variant="body2" className="text-gray-600">
                        {discussion.date}
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        {discussion.participants} participants
                      </Typography>
                    </div>
                    <Button variant="outlined" color="primary">
                      Join Discussion
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabPanel>

          <TabPanel value={tabValue} index={3}>
            <div className="space-y-4">
              {groupData.resources?.map((resource, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <Typography variant="h6">{resource.title}</Typography>
                      <Typography variant="body2" className="text-gray-600">
                        Type: {resource.type}
                      </Typography>
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

          <TabPanel value={tabValue} index={4}>
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
              {posts.length > 0 ? (
                posts.map((post) => (
                  <Card key={post.id} className="p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8" />
                          <Typography
                            variant="subtitle2"
                            className="font-medium"
                          >
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
                          <Typography
                            variant="subtitle2"
                            className="font-medium"
                          >
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
                ))
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No posts available.
                </Typography>
              )}
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

export default GroupDetails;
