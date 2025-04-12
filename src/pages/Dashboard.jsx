import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import {
  Clock,
  Trophy,
  Target,
  BarChart2,
  Calendar,
  Users,
  Star,
  Mail,
  Phone,
  Info,
  Plus,
  BookOpen,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { ExchangeContext } from "../context/ExchangeContext";

const Dashboard = () => {
  const { user } = useAuth();
  const { addSession, orders } = useContext(ExchangeContext);
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [openAddSession, setOpenAddSession] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    bio: user?.bio || "",
    phone: user?.phone || "",
  });
  const [displayProfile, setDisplayProfile] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    bio: user?.bio || "",
    phone: user?.phone || "",
  });
  const [sessionData, setSessionData] = useState({
    title: "",
    instructor: user?.fullName || "",
    duration: "",
    price: "",
    tags: "",
    category: "",
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        fullName: user.fullName || "",
        email: user.email || "",
        bio: user.bio || "",
        phone: user.phone || "",
      });
      setDisplayProfile({
        fullName: user.fullName || "",
        email: user.email || "",
        bio: user.bio || "",
        phone: user.phone || "",
      });
      setSessionData((prev) => ({
        ...prev,
        instructor: user.fullName || "",
      }));
    }
  }, [user]);

  const handleOpenEditProfile = () => {
    setOpenEditProfile(true);
  };

  const handleCloseEditProfile = () => {
    setOpenEditProfile(false);
  };

  const handleOpenAddSession = () => {
    setOpenAddSession(true);
  };

  const handleCloseAddSession = () => {
    setOpenAddSession(false);
    setSessionData({
      title: "",
      instructor: user?.fullName || "",
      duration: "",
      price: "",
      tags: "",
      category: "",
    });
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSessionChange = (e) => {
    const { name, value } = e.target;
    setSessionData({
      ...sessionData,
      [name]: value,
    });
  };

  const handleSaveProfile = () => {
    console.log("Saving profile data:", profileData);
    setDisplayProfile({ ...profileData });
    handleCloseEditProfile();
    setShowAlert(true);
  };

  const handleSaveSession = () => {
    const newSession = {
      title: sessionData.title,
      instructor: sessionData.instructor,
      rating: 0,
      reviews: 0,
      duration: sessionData.duration,
      price: parseFloat(sessionData.price) || 0,
      tags: sessionData.tags.split(",").map((tag) => tag.trim()),
      category: sessionData.category.toLowerCase(),
    };
    addSession(newSession);
    handleCloseAddSession();
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 text-white py-10 rounded-b-3xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">
                Welcome, {displayProfile.fullName || "User"}!
              </h1>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 space-y-2 max-w-md">
                {displayProfile.email && (
                  <div className="flex items-center gap-2 text-blue-100">
                    <Mail className="w-4 h-4" />
                    <span>{displayProfile.email}</span>
                  </div>
                )}
                {displayProfile.phone && (
                  <div className="flex items-center gap-2 text-blue-100">
                    <Phone className="w-4 h-4" />
                    <span>{displayProfile.phone}</span>
                  </div>
                )}
                {displayProfile.bio && (
                  <div className="flex items-start gap-2 text-blue-100">
                    <Info className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p className="text-sm">{displayProfile.bio}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <Button
                variant="contained"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={handleOpenEditProfile}
                sx={{
                  backgroundColor: "white",
                  color: "#2563eb",
                  "&:hover": { backgroundColor: "#f0f7ff" },
                  fontWeight: "bold",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                Edit Profile
              </Button>
              <Button
                variant="contained"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={handleOpenAddSession}
                startIcon={<Plus className="w-4 h-4" />}
                sx={{
                  backgroundColor: "white",
                  color: "#2563eb",
                  "&:hover": { backgroundColor: "#f0f7ff" },
                  fontWeight: "bold",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                Add Session
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Dialog */}
      <Dialog
        open={openEditProfile}
        onClose={handleCloseEditProfile}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <div className="text-xl font-bold text-gray-800">Edit Profile</div>
        </DialogTitle>
        <DialogContent>
          <div className="py-4 space-y-4">
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={profileData.fullName}
              onChange={handleProfileChange}
              variant="outlined"
              margin="dense"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={profileData.email}
              onChange={handleProfileChange}
              variant="outlined"
              margin="dense"
              type="email"
            />
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={profileData.phone}
              onChange={handleProfileChange}
              variant="outlined"
              margin="dense"
            />
            <TextField
              fullWidth
              label="Bio"
              name="bio"
              value={profileData.bio}
              onChange={handleProfileChange}
              variant="outlined"
              margin="dense"
              multiline
              rows={4}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditProfile} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSaveProfile}
            variant="contained"
            color="primary"
            sx={{ fontWeight: "bold", borderRadius: "8px" }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Session Dialog */}
      <Dialog
        open={openAddSession}
        onClose={handleCloseAddSession}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <div className="text-xl font-bold text-gray-800">Add New Session</div>
        </DialogTitle>
        <DialogContent>
          <div className="py-4 space-y-4">
            <TextField
              fullWidth
              label="Session Title"
              name="title"
              value={sessionData.title}
              onChange={handleSessionChange}
              variant="outlined"
              margin="dense"
            />
            <TextField
              fullWidth
              label="Instructor"
              name="instructor"
              value={sessionData.instructor}
              onChange={handleSessionChange}
              variant="outlined"
              margin="dense"
              disabled
            />
            <FormControl fullWidth size="small" margin="dense">
              <InputLabel>Duration</InputLabel>
              <Select
                name="duration"
                value={sessionData.duration}
                onChange={handleSessionChange}
                label="Duration"
              >
                <MenuItem value="30 minutes">30 minutes</MenuItem>
                <MenuItem value="1 hour">1 hour</MenuItem>
                <MenuItem value="1.5 hours">1.5 hours</MenuItem>
                <MenuItem value="2 hours">2 hours</MenuItem>
                <MenuItem value="2.5 hours">2.5 hours</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Price ($)"
              name="price"
              value={sessionData.price}
              onChange={handleSessionChange}
              variant="outlined"
              margin="dense"
              type="number"
            />
            <TextField
              fullWidth
              label="Tags (comma-separated)"
              name="tags"
              value={sessionData.tags}
              onChange={handleSessionChange}
              variant="outlined"
              margin="dense"
              helperText="e.g., Programming, Python, Backend"
            />
            <FormControl fullWidth size="small" margin="dense">
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={sessionData.category}
                onChange={handleSessionChange}
                label="Category"
              >
                <MenuItem value="programming">Programming</MenuItem>
                <MenuItem value="design">Design</MenuItem>
                <MenuItem value="marketing">Marketing</MenuItem>
                <MenuItem value="business">Business</MenuItem>
              </Select>
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddSession} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSaveSession}
            variant="contained"
            color="primary"
            sx={{ fontWeight: "bold", borderRadius: "8px" }}
            disabled={
              !sessionData.title ||
              !sessionData.duration ||
              !sessionData.price ||
              !sessionData.tags ||
              !sessionData.category
            }
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Alert */}
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Action completed successfully!
        </Alert>
      </Snackbar>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Clock className="w-6 h-6" />}
            title="Learning Hours"
            value="48"
            subtitle="This Month"
            color="from-blue-500 to-cyan-500"
          />
          <StatCard
            icon={<Users className="w-6 h-6" />}
            title="Teaching Hours"
            value="24"
            subtitle="This Month"
            color="from-purple-500 to-pink-500"
          />
          <StatCard
            icon={<Trophy className="w-6 h-6" />}
            title="Mastered Skills"
            value="5"
            subtitle="Total"
            color="from-orange-500 to-red-500"
          />
          <StatCard
            icon={<Target className="w-6 h-6" />}
            title="Completed Goals"
            value="8"
            subtitle="This Year"
            color="from-green-500 to-teal-500"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-blue-600" />
                Skills Progress
              </h2>
              <div className="space-y-4">
                <ProgressBar skill="Python" progress={85} color="bg-blue-600" />
                <ProgressBar
                  skill="React"
                  progress={70}
                  color="bg-violet-600"
                />
                <ProgressBar
                  skill="UI Design"
                  progress={60}
                  color="bg-pink-600"
                />
                <ProgressBar
                  skill="Data Analysis"
                  progress={75}
                  color="bg-green-600"
                />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Upcoming Sessions
              </h2>
              <div className="space-y-4">
                <SessionCard
                  title="Advanced Python Concepts"
                  date="Tomorrow, 2:00 PM"
                  duration="One Hour"
                  type="Learning"
                />
                <SessionCard
                  title="React Components Workshop"
                  date="Thursday, 4:00 PM"
                  duration="Two Hours"
                  type="Teaching"
                />
                <SessionCard
                  title="UI Design Principles"
                  date="Friday, 1:00 PM"
                  duration="One and Half Hours"
                  type="Learning"
                />
              </div>
            </div>
            {/* New Booked Sessions Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                My Booked Sessions
              </h2>
              <div className="space-y-4">
                {orders.length > 0 ? (
                  orders.map((order, index) => (
                    <OrderCard
                      key={order.sessionId}
                      title={order.title}
                      instructor={order.instructor}
                      price={order.price}
                      duration={order.duration}
                      dateBooked={new Date(
                        order.dateBooked
                      ).toLocaleDateString()}
                    />
                  ))
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    No sessions booked yet.
                  </Typography>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Active Goals</h2>
              <div className="space-y-4">
                <GoalCard
                  title="Master Python Django"
                  progress={60}
                  deadline="Two Weeks Left"
                />
                <GoalCard
                  title="Complete React Course"
                  progress={40}
                  deadline="One Month Left"
                />
                <GoalCard
                  title="Design Portfolio"
                  progress={80}
                  deadline="5 Days Left"
                />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Recommendations</h2>
              <div className="space-y-4">
                <RecommendationCard
                  title="Advanced JavaScript Patterns"
                  instructor="David Park"
                  rating={4.9}
                />
                <RecommendationCard
                  title="UI Animation Workshop"
                  instructor="Sarah Miller"
                  rating={4.8}
                />
                <RecommendationCard
                  title="Python for Data Science"
                  instructor="Emily Wang"
                  rating={4.9}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// New OrderCard Component
const OrderCard = ({ title, instructor, price, duration, dateBooked }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">
          Instructor: {instructor} • Booked on: {dateBooked}
        </p>
        <p className="text-sm text-gray-600">
          Duration: {duration} • Price: ${price}
        </p>
      </div>
      <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
        Booked
      </span>
    </div>
  );
};

// Existing Components (unchanged)
const StatCard = ({ icon, title, value, subtitle, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div
        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center text-white mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};

const ProgressBar = ({ skill, progress, color }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700">{skill}</span>
        <span className="text-gray-600">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${color} rounded-full h-2`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

const SessionCard = ({ title, date, duration, type }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">
          {date} • {duration}
        </p>
      </div>
      <span
        className={`px-3 py-1 rounded-full text-sm ${
          type === "Learning"
            ? "bg-blue-100 text-blue-700"
            : "bg-green-100 text-green-700"
        }`}
      >
        {type}
      </span>
    </div>
  );
};

const GoalCard = ({ title, progress, deadline }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div
          className="bg-blue-600 rounded-full h-2"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600">{deadline}</p>
    </div>
  );
};

const RecommendationCard = ({ title, instructor, rating }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">By {instructor}</p>
      </div>
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 text-yellow-400 fill-current" />
        <span className="text-sm text-gray-700">{rating}</span>
      </div>
    </div>
  );
};

export default Dashboard;
