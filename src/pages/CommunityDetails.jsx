// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Button,
//   Card,
//   Typography,
//   Avatar,
//   Chip,
//   Divider,
//   Tab,
//   Tabs,
//   Box,
// } from "@mui/material";
// import {
//   Users,
//   MessageCircle,
//   Calendar,
//   Trophy,
//   Shield,
//   BookOpen,
//   Target,
//   Code2,
//   Laptop,
//   Award,
//   Users2,
//   Briefcase,
//   Palette,
//   Video,
// } from "lucide-react";
// import { communities } from "../data/communities";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`community-tabpanel-${index}`}
//       aria-labelledby={`community-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// const CommunityDetails = () => {
//   const { communityId } = useParams();
//   const [tabValue, setTabValue] = useState(0);
//   const [communityData, setCommunityData] = useState(null);

//   useEffect(() => {
//     const community = communities.find((c) => c.id === communityId);
//     if (community) {
//       setCommunityData(community);
//     }
//   }, [communityId]);

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   if (!communityData) {
//     return <div>Loading...</div>;
//   }

//   const renderCommunitySpecificContent = () => {
//     switch (communityData.type) {
//       case "tech":
//         return (
//           <div className="space-y-6">
//             <div>
//               <Typography variant="h6" className="font-semibold mb-4">
//                 Technologies & Tools
//               </Typography>
//               <div className="flex flex-wrap gap-2">
//                 {communityData.technologies.map((tech) => (
//                   <Chip
//                     key={tech}
//                     label={tech}
//                     className="bg-blue-50 text-blue-600"
//                   />
//                 ))}
//               </div>
//             </div>
//             <div>
//               <Typography variant="h6" className="font-semibold mb-4">
//                 Learning Paths
//               </Typography>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {communityData.learningPaths.map((path, index) => (
//                   <Card key={index} className="p-4">
//                     <Typography variant="subtitle1" className="font-semibold">
//                       {path.name}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       Level: {path.level}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       Duration: {path.duration}
//                     </Typography>
//                     <div className="mt-2">
//                       {path.topics.map((topic, i) => (
//                         <Chip
//                           key={i}
//                           label={topic}
//                           size="small"
//                           className="m-1 bg-gray-100"
//                         />
//                       ))}
//                     </div>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <Typography variant="h6" className="font-semibold mb-4">
//                 Job Board
//               </Typography>
//               <Card className="p-4">
//                 <div className="flex items-center justify-between mb-4">
//                   <div>
//                     <Typography variant="h6" className="text-green-600">
//                       {communityData.jobBoard.positions}
//                     </Typography>
//                     <Typography variant="body2">Open Positions</Typography>
//                   </div>
//                   <Button variant="contained" color="primary">
//                     View Jobs
//                   </Button>
//                 </div>
//                 <Typography variant="subtitle2" className="mb-2">
//                   Top Companies Hiring:
//                 </Typography>
//                 <div className="flex flex-wrap gap-2">
//                   {communityData.jobBoard.companies.map((company, index) => (
//                     <Chip
//                       key={index}
//                       label={company}
//                       size="small"
//                       className="bg-blue-50 text-blue-600"
//                     />
//                   ))}
//                 </div>
//               </Card>
//             </div>
//           </div>
//         );

//       case "creative":
//         return (
//           <div className="space-y-6">
//             <div>
//               <Typography variant="h6" className="font-semibold mb-4">
//                 Creative Disciplines
//               </Typography>
//               <div className="flex flex-wrap gap-2">
//                 {communityData.disciplines.map((discipline) => (
//                   <Chip
//                     key={discipline}
//                     label={discipline}
//                     className="bg-purple-50 text-purple-600"
//                   />
//                 ))}
//               </div>
//             </div>
//             <div>
//               <Typography variant="h6" className="font-semibold mb-4">
//                 Upcoming Showcases
//               </Typography>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {communityData.showcases.map((showcase, index) => (
//                   <Card key={index} className="p-4">
//                     <Typography variant="subtitle1" className="font-semibold">
//                       {showcase.type}
//                     </Typography>
//                     <Typography variant="body2">
//                       Next Date: {showcase.nextDate}
//                     </Typography>
//                     <Typography variant="body2">
//                       Submissions: {showcase.submissions}
//                     </Typography>
//                     <Typography variant="body2">
//                       Frequency: {showcase.frequency}
//                     </Typography>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <Typography variant="h6" className="font-semibold mb-4">
//                 Workshop Information
//               </Typography>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {communityData.workshops.map((workshop, index) => (
//                   <Card key={index} className="p-4">
//                     <Typography variant="subtitle1" className="font-semibold">
//                       {workshop.format}
//                     </Typography>
//                     <Typography variant="body2">
//                       Skill Level: {workshop.skillLevel}
//                     </Typography>
//                     <Typography variant="body2">
//                       Max Participants: {workshop.maxParticipants}
//                     </Typography>
//                     <div className="mt-2">
//                       <Typography variant="subtitle2">
//                         Required Equipment:
//                       </Typography>
//                       {workshop.equipment.map((item, i) => (
//                         <Chip
//                           key={i}
//                           label={item}
//                           size="small"
//                           className="m-1 bg-gray-100"
//                         />
//                       ))}
//                     </div>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );

//       case "business":
//         return (
//           <div className="space-y-6">
//             <div>
//               <Typography variant="h6" className="font-semibold mb-4">
//                 Industries
//               </Typography>
//               <div className="flex flex-wrap gap-2">
//                 {communityData.industries.map((industry) => (
//                   <Chip
//                     key={industry}
//                     label={industry}
//                     className="bg-green-50 text-green-600"
//                   />
//                 ))}
//               </div>
//             </div>
//             <div>
//               <Typography variant="h6" className="font-semibold mb-4">
//                 Networking Events
//               </Typography>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {communityData.networkingEvents.map((event, index) => (
//                   <Card key={index} className="p-4">
//                     <Typography variant="subtitle1" className="font-semibold">
//                       {event.type}
//                     </Typography>
//                     <Typography variant="body2">
//                       Frequency: {event.frequency}
//                     </Typography>
//                     <Typography variant="body2">
//                       Format: {event.format}
//                     </Typography>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <Typography variant="h6" className="font-semibold mb-4">
//                 Mentorship Programs
//               </Typography>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {communityData.mentorship.programs.map((program, index) => (
//                   <Card key={index} className="p-4">
//                     <Typography variant="subtitle1" className="font-semibold">
//                       {program.name}
//                     </Typography>
//                     <Typography variant="body2">
//                       Focus: {program.focus}
//                     </Typography>
//                     <Typography variant="body2">
//                       Duration: {program.duration}
//                     </Typography>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <Typography variant="h6" className="font-semibold mb-4">
//                 Investment Opportunities
//               </Typography>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {communityData.investmentOpportunities.map(
//                   (opportunity, index) => (
//                     <Card key={index} className="p-4">
//                       <Typography variant="subtitle1" className="font-semibold">
//                         {opportunity.type}
//                       </Typography>
//                       <Typography variant="body2">
//                         Sector: {opportunity.sector}
//                       </Typography>
//                       <Typography variant="body2">
//                         Minimum Investment: ${opportunity.minimumInvestment}
//                       </Typography>
//                     </Card>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         );

//       case "content":
//         return (
//           <div className="space-y-6">
//             <div>
//               <Typography variant="h6" className="font-semibold mb-4">
//                 Platforms
//               </Typography>
//               <div className="flex flex-wrap gap-2">
//                 {communityData.platforms.map((platform) => (
//                   <Chip
//                     key={platform}
//                     label={platform}
//                     className="bg-orange-50 text-orange-600"
//                   />
//                 ))}
//               </div>
//             </div>
//             <div>
//               <Typography variant="h6" className="font-semibold mb-4">
//                 Content Types
//               </Typography>
//               <div className="flex flex-wrap gap-2">
//                 {communityData.contentTypes.map((type) => (
//                   <Chip
//                     key={type}
//                     label={type}
//                     className="bg-orange-50 text-orange-600"
//                   />
//                 ))}
//               </div>
//             </div>
//             <div>
//               <Typography variant="h6" className="font-semibold mb-4">
//                 Analytics
//               </Typography>
//               <Card className="p-4">
//                 <Typography variant="subtitle1">
//                   Total Reach:{" "}
//                   {communityData.analytics.totalReach.toLocaleString()}
//                 </Typography>
//                 <Typography variant="body2">
//                   Average Engagement: {communityData.analytics.avgEngagement}%
//                 </Typography>
//                 <Typography variant="body2" className="mt-2">
//                   Top Platforms:
//                 </Typography>
//                 <div className="flex flex-wrap gap-2 mt-1">
//                   {communityData.analytics.topPlatforms.map(
//                     (platform, index) => (
//                       <Chip
//                         key={index}
//                         label={platform}
//                         size="small"
//                         className="bg-orange-50 text-orange-600"
//                       />
//                     )
//                   )}
//                 </div>
//               </Card>
//             </div>
//             <div>
//               <Typography variant="h6" className="font-semibold mb-4">
//                 Collaborations
//               </Typography>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {communityData.collaborations.map((collab, index) => (
//                   <Card key={index} className="p-4">
//                     <Typography variant="subtitle1" className="font-semibold">
//                       {collab.type}
//                     </Typography>
//                     <Typography variant="body2">Requirements:</Typography>
//                     {collab.requirements.map((req, i) => (
//                       <Typography key={i} variant="body2" className="ml-2">
//                         • {req}
//                       </Typography>
//                     ))}
//                     <Typography variant="body2" className="mt-2">
//                       Benefits:
//                     </Typography>
//                     {collab.benefits.map((benefit, i) => (
//                       <Typography key={i} variant="body2" className="ml-2">
//                         • {benefit}
//                       </Typography>
//                     ))}
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Card */}
//         <Card className="mb-8">
//           <div
//             className={`bg-gradient-to-r ${
//               communityData.type === "tech"
//                 ? "from-blue-500 to-cyan-500"
//                 : communityData.type === "creative"
//                 ? "from-purple-500 to-pink-500"
//                 : communityData.type === "business"
//                 ? "from-green-500 to-teal-500"
//                 : "from-orange-500 to-red-500"
//             } p-8 text-white`}
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
//                 <communityData.icon />
//               </div>
//               <div>
//                 <Typography variant="h4" className="font-bold mb-2">
//                   {communityData.name}
//                 </Typography>
//                 <Typography variant="subtitle1" className="text-blue-100">
//                   {communityData.description}
//                 </Typography>
//               </div>
//             </div>
//             <div className="flex flex-wrap gap-2 mt-4">
//               {communityData.tags.map((tag, index) => (
//                 <Chip
//                   key={index}
//                   label={tag}
//                   sx={{
//                     backgroundColor: "rgba(255, 255, 255, 0.1)",
//                     color: "#FFFFFF",
//                   }}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Stats Section */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
//             <StatCard
//               icon={<Users className="w-5 h-5" />}
//               value={communityData.members}
//               label="Members"
//             />
//             <StatCard
//               icon={<MessageCircle className="w-5 h-5" />}
//               value={communityData.events.length}
//               label="Events"
//             />
//             <StatCard
//               icon={<Calendar className="w-5 h-5" />}
//               value={communityData.resources.length}
//               label="Resources"
//             />
//             <StatCard
//               icon={<Trophy className="w-5 h-5" />}
//               value={communityData.skillLevels.length}
//               label="Skill Levels"
//             />
//           </div>
//         </Card>

//         {/* Content Tabs */}
//         <Card>
//           <Tabs
//             value={tabValue}
//             onChange={handleTabChange}
//             variant="scrollable"
//             scrollButtons="auto"
//             className="border-b border-gray-200"
//           >
//             <Tab
//               label="Overview"
//               icon={<Target className="w-4 h-4" />}
//               iconPosition="start"
//             />
//             <Tab
//               label="Community Specific"
//               icon={<Code2 className="w-4 h-4" />}
//               iconPosition="start"
//             />
//             <Tab
//               label="Events"
//               icon={<Calendar className="w-4 h-4" />}
//               iconPosition="start"
//             />
//             <Tab
//               label="Resources"
//               icon={<BookOpen className="w-4 h-4" />}
//               iconPosition="start"
//             />
//           </Tabs>

//           <TabPanel value={tabValue} index={0}>
//             <div className="space-y-8">
//               {/* Topics */}
//               <div>
//                 <Typography variant="h6" className="font-semibold mb-4">
//                   Topics Covered
//                 </Typography>
//                 <div className="flex flex-wrap gap-2">
//                   {communityData.topics.map((topic, index) => (
//                     <Chip
//                       key={index}
//                       label={topic}
//                       className="bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Skill Levels */}
//               <div>
//                 <Typography variant="h6" className="font-semibold mb-4">
//                   Skill Levels
//                 </Typography>
//                 <div className="flex flex-wrap gap-2">
//                   {communityData.skillLevels.map((level, index) => (
//                     <Chip
//                       key={index}
//                       label={level}
//                       className="bg-green-50 text-green-600"
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Admins Section */}
//               <div>
//                 <Typography variant="h6" className="font-semibold mb-4">
//                   Community Leaders
//                 </Typography>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {communityData.admins.map((admin) => (
//                     <div
//                       key={admin.name}
//                       className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
//                     >
//                       <Avatar src={admin.avatar} className="w-12 h-12" />
//                       <div>
//                         <Typography variant="subtitle1" className="font-medium">
//                           {admin.name}
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           className="text-gray-600 flex items-center gap-1"
//                         >
//                           <Shield className="w-4 h-4" />
//                           {admin.role}
//                         </Typography>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </TabPanel>

//           <TabPanel value={tabValue} index={1}>
//             {renderCommunitySpecificContent()}
//           </TabPanel>

//           <TabPanel value={tabValue} index={2}>
//             <div className="space-y-4">
//               {communityData.events.map((event, index) => (
//                 <Card key={index} className="p-4">
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <Typography variant="h6">{event.title}</Typography>
//                       <Typography variant="body2" className="text-gray-600">
//                         {event.date} at {event.time}
//                       </Typography>
//                       <div className="flex items-center gap-2 mt-1">
//                         <Chip
//                           label={event.location}
//                           size="small"
//                           className="bg-blue-50 text-blue-600"
//                         />
//                         <Typography variant="body2" className="text-gray-600">
//                           {event.attendees} attendees
//                         </Typography>
//                       </div>
//                     </div>
//                     <Button variant="outlined" color="primary">
//                       Join Event
//                     </Button>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </TabPanel>

//           <TabPanel value={tabValue} index={3}>
//             <div className="space-y-4">
//               {communityData.resources.map((resource, index) => (
//                 <Card key={index} className="p-4">
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <Typography variant="h6">{resource.title}</Typography>
//                       <div className="flex items-center gap-2">
//                         <Typography variant="body2" className="text-gray-600">
//                           Type: {resource.type}
//                         </Typography>
//                         <Chip
//                           label={resource.access}
//                           size="small"
//                           className={
//                             resource.access === "premium"
//                               ? "bg-purple-50 text-purple-600"
//                               : "bg-green-50 text-green-600"
//                           }
//                         />
//                       </div>
//                       <Typography variant="body2" className="text-gray-600">
//                         {resource.downloads
//                           ? `${resource.downloads} downloads`
//                           : `${resource.views} views`}
//                       </Typography>
//                     </div>
//                     <Button variant="outlined" color="primary">
//                       Access
//                     </Button>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </TabPanel>
//         </Card>
//       </div>
//     </div>
//   );
// };

// const StatCard = ({ icon, value, label }) => (
//   <div className="text-center p-4 rounded-lg bg-white shadow-sm">
//     <div className="flex justify-center text-blue-600 mb-2">{icon}</div>
//     <Typography variant="h5" className="font-bold text-gray-900">
//       {value}
//     </Typography>
//     <Typography variant="body2" className="text-gray-600">
//       {label}
//     </Typography>
//   </div>
// );

// export default CommunityDetails;


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

  useEffect(() => {
    const community = communities.find((c) => c.id === communityId);
    if (community) {
      setCommunityData(community);
    }
  }, [communityId]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
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
              value={communityData.events.length}
              label="Events"
            />
            <StatCard
              icon={<Calendar className="w-5 h-5" />}
              value={communityData.resources.length}
              label="Resources"
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

          <TabPanel value={tabValue} index={3}>
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