// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Button, TextField, Chip } from "@mui/material";
// import { Search, Users, Trophy, Calendar } from "lucide-react";
// import { communities } from "../data/communities";

// const Communities = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter communities based on search term
//   const filteredCommunities = communities.filter(
//     (community) =>
//       community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       community.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       community.tags.some((tag) =>
//         tag.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-violet-600 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl md:text-4xl font-bold mb-4">
//             Skill Communities
//           </h1>
//           <p className="text-xl text-blue-100">
//             Join broader communities based on your interests and career goals
//           </p>

//           {/* Search Bar */}
//           <div className="mt-8 max-w-2xl">
//             <div className="relative">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <TextField
//                 fullWidth
//                 placeholder="Search communities..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="bg-white/10 backdrop-blur-sm rounded-lg"
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     paddingLeft: "3rem",
//                     color: "white",
//                     "& fieldset": {
//                       borderColor: "rgba(255, 255, 255, 0.3)",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "rgba(255, 255, 255, 0.5)",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "white",
//                     },
//                   },
//                   "& .MuiOutlinedInput-input::placeholder": {
//                     color: "rgba(255, 255, 255, 0.7)",
//                     opacity: 1,
//                   },
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Communities Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredCommunities.map((community) => (
//             <Link
//               key={community.id}
//               to={`/communities/${community.id}`}
//               className="block"
//             >
//               <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
//                 <div
//                   className={`bg-gradient-to-r ${
//                     community.type === "tech"
//                       ? "from-blue-500 to-cyan-500"
//                       : community.type === "creative"
//                       ? "from-purple-500 to-pink-500"
//                       : community.type === "business"
//                       ? "from-green-500 to-teal-500"
//                       : "from-orange-500 to-red-500"
//                   } p-6 text-white`}
//                 >
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
//                       <community.icon />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold">
//                         {community.name}
//                       </h3>
//                       <p className="text-white/80">
//                         {community.members} members
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-white/90">{community.description}</p>
//                 </div>
//                 <div className="p-6">
//                   <div className="mb-6">
//                     <h4 className="text-sm font-semibold text-gray-600 mb-3">
//                       Popular Topics
//                     </h4>
//                     <div className="flex flex-wrap gap-2">
//                       {community.topics.slice(0, 4).map((topic, index) => (
//                         <Chip
//                           key={index}
//                           label={topic}
//                           size="small"
//                           className="bg-gray-100 text-gray-700"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-3 gap-4 mb-6">
//                     <div className="text-center">
//                       <Users className="w-5 h-5 mx-auto mb-1 text-blue-600" />
//                       <p className="text-sm text-gray-600">
//                         {community.members} Members
//                       </p>
//                     </div>
//                     <div className="text-center">
//                       <Trophy className="w-5 h-5 mx-auto mb-1 text-blue-600" />
//                       <p className="text-sm text-gray-600">
//                         {community.resources.length} Resources
//                       </p>
//                     </div>
//                     <div className="text-center">
//                       <Calendar className="w-5 h-5 mx-auto mb-1 text-blue-600" />
//                       <p className="text-sm text-gray-600">
//                         {community.events.length} Events
//                       </p>
//                     </div>
//                   </div>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
//                   >
//                     Join Community
//                   </Button>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Communities;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, Chip, Snackbar } from "@mui/material";
import { Search, Users, Trophy, Calendar } from "lucide-react";
import { communities } from "../data/communities";

const Communities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [joinedCommunity, setJoinedCommunity] = useState(null);
  const navigate = useNavigate();

  // Filter communities based on search term
  const filteredCommunities = communities.filter(
    (community) =>
      community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      community.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      community.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleJoinCommunity = (community) => {
    // Retrieve existing joined communities from localStorage
    const existingCommunities = JSON.parse(
      localStorage.getItem("joinedCommunities") || "[]"
    );
    // Add new community if not already joined
    if (!existingCommunities.some((c) => c.id === community.id)) {
      const updatedCommunities = [...existingCommunities, community];
      localStorage.setItem(
        "joinedCommunities",
        JSON.stringify(updatedCommunities)
      );
    }
    setJoinedCommunity(community);
    setShowSnackbar(true);
    // Redirect to CommunityDetails after a short delay
    setTimeout(() => {
      navigate(`/communities/${community.id}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-violet-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Skill Communities
          </h1>
          <p className="text-xl text-blue-100">
            Join broader communities based on your interests and career goals
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <TextField
                fullWidth
                placeholder="Search communities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/10 backdrop-blur-sm rounded-lg"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    paddingLeft: "3rem",
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    color: "rgba(255, 255, 255, 0.7)",
                    opacity: 1,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Communities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCommunities.map((community) => (
            <Link
              key={community.id}
              to={`/communities/${community.id}`}
              className="block"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${
                    community.type === "tech"
                      ? "from-blue-500 to-cyan-500"
                      : community.type === "creative"
                      ? "from-purple-500 to-pink-500"
                      : community.type === "business"
                      ? "from-green-500 to-teal-500"
                      : "from-orange-500 to-red-500"
                  } p-6 text-white`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                      <community.icon />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        {community.name}
                      </h3>
                      <p className="text-white/80">
                        {community.members} members
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90">{community.description}</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-600 mb-3">
                      Popular Topics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {community.topics.slice(0, 4).map((topic, index) => (
                        <Chip
                          key={index}
                          label={topic}
                          size="small"
                          className="bg-gray-100 text-gray-700"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Users className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                      <p className="text-sm text-gray-600">
                        {community.members} Members
                      </p>
                    </div>
                    <div className="text-center">
                      <Trophy className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                      <p className="text-sm text-gray-600">
                        {community.resources.length} Resources
                      </p>
                    </div>
                    <div className="text-center">
                      <Calendar className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                      <p className="text-sm text-gray-600">
                        {community.events.length} Events
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    fullWidth
                    className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
                    onClick={(e) => {
                      e.preventDefault();
                      handleJoinCommunity(community);
                    }}
                  >
                    Join Community
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Success Snackbar */}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={2000}
        onClose={() => setShowSnackbar(false)}
        message={`Successfully joined ${joinedCommunity?.name}! Redirecting...`}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </div>
  );
};

export default Communities;