// import React, { useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Snackbar,
//   Chip,
// } from "@mui/material";

// import { useNavigate, Link } from "react-router-dom";
// import { groups } from "../data/groups";

// const Groups = () => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [showSnackbar, setShowSnackbar] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const handleJoinClick = (group) => {
//     setSelectedGroup(group);
//     setOpenDialog(true);
//   };

//   const handleJoinConfirm = () => {
//     setOpenDialog(false);
//     setShowSnackbar(true);
//     setTimeout(() => {
//       navigate(`/groups/${selectedGroup.id}`);
//     }, 2000);
//   };

//   const filteredGroups = groups.filter((group) =>
//     group.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-violet-600 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Skill Groups
//           </h1>
//           <p className="text-xl text-blue-100">
//             Connect with people who share your skills and interests
//           </p>
//         </div>
//       </div>

//       {/* Search Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//           <div className="flex flex-wrap gap-4">
//             <input
//               type="text"
//               placeholder="Search for groups..."
//               className="flex-grow px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Button
//               variant="contained"
//               className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 py-3 px-6 text-lg"
//             >
//               Search
//             </Button>
//           </div>
//         </div>

//         {/* Groups Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredGroups.map((group) => (
//             <GroupCard
//               key={group.id}
//               group={group}
//               onJoin={() => handleJoinClick(group)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Join Dialog */}
//       <Dialog
//         open={openDialog}
//         onClose={() => setOpenDialog(false)}
//         maxWidth="sm"
//         fullWidth
//       >
//         <DialogTitle className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-4">
//           <div className="text-center">
//             Joining {selectedGroup?.name}
//           </div>
//         </DialogTitle>
//         <DialogContent className="mt-4">
//           <div className="space-y-6 py-4">
//             <img
//               src={selectedGroup?.coverImage}
//               alt={selectedGroup?.name}
//               className="w-full h-48 object-cover rounded-lg"
//             />
//             <div>
//               <h3 className="font-semibold mb-2">Topics:</h3>
//               <div className="flex flex-wrap gap-2">
//                 {selectedGroup?.topics.map((topic) => (
//                   <Chip
//                     key={topic}
//                     label={topic}
//                     className="bg-blue-50 text-blue-600"
//                   />
//                 ))}
//               </div>
//             </div>
//             <div className="space-y-2">
//               <p>
//                 <strong>Meeting Schedule:</strong>{" "}
//                 {selectedGroup?.meetingSchedule}
//               </p>
//               <p>
//                 <strong>Skill Level:</strong>{" "}
//                 {selectedGroup?.skillLevel}
//               </p>
//             </div>
//           </div>
//         </DialogContent>
//         <DialogActions className="p-4">
//           <Button onClick={() => setOpenDialog(false)} variant="outlined">
//             Cancel
//           </Button>
//           <Button
//             onClick={handleJoinConfirm}
//             variant="contained"
//             className="bg-gradient-to-r from-blue-600 to-violet-600"
//           >
//             Confirm Join
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Success Snackbar */}
//       <Snackbar
//         open={showSnackbar}
//         autoHideDuration={2000}
//         onClose={() => setShowSnackbar(false)}
//         message={`Successfully joined ${selectedGroup?.name}! Redirecting...`}
//         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//       />
//     </div>
//   );
// };

// const GroupCard = ({ group, onJoin }) => {
//   const {
//     id,
//     icon: Icon,
//     name,
//     members,
//     description,
//     tags,
//     upcomingEvents,
//     admins,
//   } = group;

//   return (
//     <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
//       <div className="flex items-start gap-4">
//         <div className="p-3 bg-gradient-to-br from-blue-50 to-violet-50 rounded-lg">
//           <Icon className="w-8 h-8 text-blue-600" />
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold text-gray-900">
//             <Link to={`/groups/${id}`} className="hover:text-blue-600">
//               {name}
//             </Link>
//           </h3>
//           <p className="text-sm text-gray-500 mb-2">
//             {members} members
//           </p>
//         </div>
//       </div>

//       <p className="text-gray-600 mt-4 mb-4">{description}</p>

//       {/* Tags */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {tags.map((tag, index) => (
//           <span
//             key={index}
//             className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       {/* Next Event */}
//       {upcomingEvents && upcomingEvents[0] && (
//         <div className="mb-4 p-3 bg-blue-50 rounded-lg">
//           <p className="text-sm font-semibold text-blue-600">
//             Next Event:
//           </p>
//           <p className="text-sm text-gray-600">
//             {upcomingEvents[0].title}
//             <br />
//             {upcomingEvents[0].date} - {upcomingEvents[0].time}
//           </p>
//         </div>
//       )}

//       {/* Group Leaders */}
//       <div className="mb-4">
//         <p className="text-sm font-semibold mb-2">
//           Group Leaders:
//         </p>
//         <div className="flex -space-x-2 rtl:space-x-reverse">
//           {admins.map((admin, index) => (
//             <img
//               key={index}
//               src={admin.avatar}
//               alt={admin.name}
//               className="w-8 h-8 rounded-full border-2 border-white"
//               title={admin.name}
//             />
//           ))}
//         </div>
//       </div>

//       <Button
//         variant="contained"
//         fullWidth
//         onClick={onJoin}
//         className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
//       >
//         Join Group
//       </Button>
//     </div>
//   );
// };

// export default Groups;


import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Chip,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { groups } from "../data/groups";

const Groups = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleJoinClick = (group) => {
    setSelectedGroup(group);
    setOpenDialog(true);
  };

  const handleJoinConfirm = () => {
    if (selectedGroup) {
      // Retrieve existing joined groups from localStorage
      const existingGroups = JSON.parse(
        localStorage.getItem("joinedGroups") || "[]"
      );
      // Add new group if not already joined
      if (!existingGroups.some((g) => g.id === selectedGroup.id)) {
        const updatedGroups = [...existingGroups, selectedGroup];
        localStorage.setItem("joinedGroups", JSON.stringify(updatedGroups));
      }
      setOpenDialog(false);
      setShowSnackbar(true);
      setTimeout(() => {
        navigate(`/groups/${selectedGroup.id}`);
      }, 2000);
    }
  };

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-violet-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Skill Groups</h1>
          <p className="text-xl text-blue-100">
            Connect with people who share your skills and interests
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Search for groups..."
              className="flex-grow px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              variant="contained"
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 py-3 px-6 text-lg"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGroups.map((group) => (
            <GroupCard
              key={group.id}
              group={group}
              onJoin={() => handleJoinClick(group)}
            />
          ))}
        </div>
      </div>

      {/* Join Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-4">
          <div className="text-center">Joining {selectedGroup?.name}</div>
        </DialogTitle>
        <DialogContent className="mt-4">
          <div className="space-y-6 py-4">
            <img
              src={selectedGroup?.coverImage}
              alt={selectedGroup?.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-semibold mb-2">Topics:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedGroup?.topics.map((topic) => (
                  <Chip
                    key={topic}
                    label={topic}
                    className="bg-blue-50 text-blue-600"
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p>
                <strong>Meeting Schedule:</strong>{" "}
                {selectedGroup?.meetingSchedule}
              </p>
              <p>
                <strong>Skill Level:</strong> {selectedGroup?.skillLevel}
              </p>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="p-4">
          <Button onClick={() => setOpenDialog(false)} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleJoinConfirm}
            variant="contained"
            className="bg-gradient-to-r from-blue-600 to-violet-600"
          >
            Confirm Join
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Snackbar */}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={2000}
        onClose={() => setShowSnackbar(false)}
        message={`Successfully joined ${selectedGroup?.name}! Redirecting...`}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </div>
  );
};

const GroupCard = ({ group, onJoin }) => {
  const {
    id,
    icon: Icon,
    name,
    members,
    description,
    tags,
    upcomingEvents,
    admins,
  } = group;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-to-br from-blue-50 to-violet-50 rounded-lg">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            <Link to={`/groups/${id}`} className="hover:text-blue-600">
              {name}
            </Link>
          </h3>
          <p className="text-sm text-gray-500 mb-2">{members} members</p>
        </div>
      </div>

      <p className="text-gray-600 mt-4 mb-4">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Next Event */}
      {upcomingEvents && upcomingEvents[0] && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm font-semibold text-blue-600">Next Event:</p>
          <p className="text-sm text-gray-600">
            {upcomingEvents[0].title}
            <br />
            {upcomingEvents[0].date} - {upcomingEvents[0].time}
          </p>
        </div>
      )}

      {/* Group Leaders */}
      <div className="mb-4">
        <p className="text-sm font-semibold mb-2">Group Leaders:</p>
        <div className="flex -space-x-2 rtl:space-x-reverse">
          {admins.map((admin, index) => (
            <img
              key={index}
              src={admin.avatar}
              alt={admin.name}
              className="w-8 h-8 rounded-full border-2 border-white"
              title={admin.name}
            />
          ))}
        </div>
      </div>

      <Button
        variant="contained"
        fullWidth
        onClick={onJoin}
        className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
      >
        Join Group
      </Button>
    </div>
  );
};

export default Groups;