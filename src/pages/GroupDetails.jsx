import React from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  const [tabValue, setTabValue] = React.useState(0);

  const groupData = groups.find((group) => group.id === groupId);

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
                {groupData.name} | {groupData.name}
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
              value={groupData.discussions?.length || 0}
              label="Discussions"
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
                    <div
                      key={admin.name}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <Avatar src={admin.avatar} className="w-12 h-12" />
                      <div>
                        <Typography variant="subtitle1" className="font-medium">
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
        </Card>
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
