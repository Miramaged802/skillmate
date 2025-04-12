// // import React, { useState } from "react";
// // import {
// //   Button,
// //   Slider,
// //   Chip,
// //   TextField,
// //   MenuItem,
// //   FormControl,
// //   InputLabel,
// //   Select,
// //   Typography,
// //   Box,
// //   Grid,
// //   Container,
// //   IconButton,
// //   Card,
// //   CardContent,
// //   Rating,
// //   Divider,
// //   Paper,
// // } from "@mui/material";
// // import {
// //   Clock,
// //   Users,
// //   Star,
// //   ArrowRight,
// //   Search,
// //   Filter,
// //   Bookmark,
// //   TrendingUp,
// //   X,
// // } from "lucide-react";

// // const Exchange = () => {
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [category, setCategory] = useState("");
// //   const [duration, setDuration] = useState("");
// //   const [activeFilters, setActiveFilters] = useState([]);

// //   const handleAddFilter = (filter) => {
// //     if (!activeFilters.includes(filter)) {
// //       setActiveFilters([...activeFilters, filter]);
// //     }
// //   };

// //   const handleRemoveFilter = (filter) => {
// //     setActiveFilters(activeFilters.filter((f) => f !== filter));
// //   };

// //   const handleResetFilters = () => {
// //     setSearchQuery("");
// //     setCategory("");
// //     setDuration("");
// //     setActiveFilters([]);
// //   };

// //   const exchangeCards = [
// //     {
// //       title: "Python Development Mastery",
// //       instructor: "Alex Chen",
// //       rating: 4.8,
// //       reviews: 124,
// //       duration: "1 hour",
// //       price: 50,
// //       tags: ["Programming", "Python", "Backend"],
// //       category: "programming",
// //     },
// //     {
// //       title: "UI/UX Design Workshop",
// //       instructor: "Sarah Miller",
// //       rating: 4.9,
// //       reviews: 89,
// //       duration: "2 hours",
// //       price: 75,
// //       tags: ["Design", "UI/UX", "Figma"],
// //       category: "design",
// //     },
// //     {
// //       title: "Digital Marketing Strategy",
// //       instructor: "Mike Johnson",
// //       rating: 4.7,
// //       reviews: 156,
// //       duration: "1.5 hours",
// //       price: 60,
// //       tags: ["Marketing", "SEO", "Social Media"],
// //       category: "marketing",
// //     },
// //     {
// //       title: "Data Analysis with R",
// //       instructor: "Emily Wang",
// //       rating: 4.8,
// //       reviews: 92,
// //       duration: "1 hour",
// //       price: 55,
// //       tags: ["Data Science", "R", "Statistics"],
// //       category: "programming",
// //     },
// //     {
// //       title: "React.js Development",
// //       instructor: "David Park",
// //       rating: 4.9,
// //       reviews: 178,
// //       duration: "1.5 hours",
// //       price: 65,
// //       tags: ["Programming", "React", "Frontend"],
// //       category: "programming",
// //     },
// //     {
// //       title: "Content Writing Workshop",
// //       instructor: "Lisa Brown",
// //       rating: 4.7,
// //       reviews: 104,
// //       duration: "1 hour",
// //       price: 45,
// //       tags: ["Writing", "Content", "Marketing"],
// //       category: "marketing",
// //     },
// //     {
// //       title: "Machine Learning Basics",
// //       instructor: "Robert Kim",
// //       rating: 4.7,
// //       reviews: 98,
// //       duration: "1.5 hours",
// //       price: 65,
// //       tags: ["Data Science", "ML", "Python"],
// //       category: "programming",
// //     },
// //     {
// //       title: "Business Strategy Planning",
// //       instructor: "Jennifer Lee",
// //       rating: 4.6,
// //       reviews: 80,
// //       duration: "2 hours",
// //       price: 70,
// //       tags: ["Business", "Strategy", "Leadership"],
// //       category: "business",
// //     },
// //     {
// //       title: "Mobile App Development",
// //       instructor: "Chris Taylor",
// //       rating: 4.8,
// //       reviews: 150,
// //       duration: "2.5 hours",
// //       price: 80,
// //       tags: ["Mobile", "React Native", "iOS"],
// //       category: "programming",
// //     },
// //     {
// //       title: "JavaScript Fundamentals",
// //       instructor: "Thomas Wright",
// //       rating: 4.8,
// //       reviews: 132,
// //       duration: "2 hours",
// //       price: 70,
// //       tags: ["Programming", "JavaScript", "Web Development"],
// //       category: "programming",
// //     },
// //     {
// //       title: "Graphic Design Masterclass",
// //       instructor: "Emma Rodriguez",
// //       rating: 4.9,
// //       reviews: 167,
// //       duration: "2.5 hours",
// //       price: 85,
// //       tags: ["Design", "Photoshop", "Illustrator"],
// //       category: "design",
// //     },
// //     {
// //       title: "Advanced SQL Techniques",
// //       instructor: "Michael Smith",
// //       rating: 4.7,
// //       reviews: 90,
// //       duration: "1 hour",
// //       price: 55,
// //       tags: ["Data Science", "SQL", "Database"],
// //       category: "programming",
// //     },
// //     {
// //       title: "Entrepreneurship Bootcamp",
// //       instructor: "Anna Martinez",
// //       rating: 4.8,
// //       reviews: 105,
// //       duration: "2 hours",
// //       price: 60,
// //       tags: ["Business", "Startup", "Innovation"],
// //       category: "business",
// //     },
// //     {
// //       title: "Social Media Branding",
// //       instructor: "Josh Lee",
// //       rating: 4.6,
// //       reviews: 87,
// //       duration: "1 hour",
// //       price: 40,
// //       tags: ["Marketing", "Branding", "Instagram"],
// //       category: "marketing",
// //     },
// //   ];

// //   const filteredCards = exchangeCards.filter((card) => {
// //     const matchesSearch =
// //       card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //       card.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //       card.tags.some((tag) =>
// //         tag.toLowerCase().includes(searchQuery.toLowerCase())
// //       );

// //     const matchesCategory =
// //       category === "" || card.category.toLowerCase() === category;

// //     const matchesDuration = duration === "" || card.duration.includes(duration);

// //     const matchesTags =
// //       activeFilters.length === 0 ||
// //       activeFilters.some((filter) => card.tags.includes(filter));

// //     return matchesSearch && matchesCategory && matchesDuration && matchesTags;
// //   });

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Hero Section */}
// //       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
// //         <Container maxWidth="lg">
// //           <Box textAlign="center" mb={6}>
// //             <Typography
// //               variant="h2"
// //               component="h1"
// //               gutterBottom
// //               sx={{ fontWeight: 700 }}
// //             >
// //               Skill Exchange Marketplace
// //             </Typography>
// //             <Typography variant="h5" sx={{ opacity: 0.9 }}>
// //               Connect with experts and expand your knowledge
// //             </Typography>
// //           </Box>

// //           <Paper
// //             component="form"
// //             sx={{
// //               p: "2px 4px",
// //               display: "flex",
// //               alignItems: "center",
// //               maxWidth: 600,
// //               mx: "auto",
// //               boxShadow: 3,
// //             }}
// //           >
// //             <TextField
// //               fullWidth
// //               variant="outlined"
// //               placeholder="Search for skills, topics, or instructors..."
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               InputProps={{
// //                 startAdornment: (
// //                   <Search className="mr-2 text-gray-400" size={20} />
// //                 ),
// //               }}
// //               sx={{ ml: 1, flex: 1 }}
// //             />
// //           </Paper>
// //         </Container>
// //       </div>

// //       <Container maxWidth="lg" sx={{ py: 6 }}>
// //         {/* Filters Section */}
// //         <Box mb={4}>
// //           <Box
// //             display="flex"
// //             justifyContent="space-between"
// //             alignItems="center"
// //             mb={2}
// //           >
// //             <Typography variant="h6" sx={{ fontWeight: 600 }}>
// //               Refine Your Search
// //             </Typography>
// //             {activeFilters.length > 0 && (
// //               <Button
// //                 variant="text"
// //                 onClick={handleResetFilters}
// //                 startIcon={<X size={16} />}
// //                 sx={{ color: "text.secondary" }}
// //               >
// //                 Clear all
// //               </Button>
// //             )}
// //           </Box>

// //           <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
// //             {activeFilters.map((filter) => (
// //               <Chip
// //                 key={filter}
// //                 label={filter}
// //                 onDelete={() => handleRemoveFilter(filter)}
// //                 sx={{ bgcolor: "primary.light", color: "primary.dark" }}
// //               />
// //             ))}
// //           </Box>

// //           <Grid container spacing={3}>
// //             <Grid item xs={12} sm={6} md={6}>
// //               <FormControl fullWidth size="small">
// //                 <InputLabel>Category</InputLabel>
// //                 <Select
// //                   value={category}
// //                   onChange={(e) => setCategory(e.target.value)}
// //                   label="Category"
// //                 >
// //                   <MenuItem value="">All Categories</MenuItem>
// //                   <MenuItem value="programming">Programming</MenuItem>
// //                   <MenuItem value="design">Design</MenuItem>
// //                   <MenuItem value="marketing">Marketing</MenuItem>
// //                   <MenuItem value="business">Business</MenuItem>
// //                 </Select>
// //               </FormControl>
// //             </Grid>

// //             <Grid item xs={12} sm={6} md={6}>
// //               <FormControl fullWidth size="small">
// //                 <InputLabel>Duration</InputLabel>
// //                 <Select
// //                   value={duration}
// //                   onChange={(e) => setDuration(e.target.value)}
// //                   label="Duration"
// //                 >
// //                   <MenuItem value="">Any Duration</MenuItem>
// //                   <MenuItem value="30">30 minutes</MenuItem>
// //                   <MenuItem value="1">1 hour</MenuItem>
// //                   <MenuItem value="1.5">1.5 hours</MenuItem>
// //                   <MenuItem value="2">2 hours</MenuItem>
// //                   <MenuItem value="2.5">2.5 hours</MenuItem>
// //                 </Select>
// //               </FormControl>
// //             </Grid>
// //           </Grid>
// //         </Box>

// //         {/* Popular Skills */}
// //         <Box mb={4}>
// //           <Typography
// //             variant="h6"
// //             sx={{
// //               fontWeight: 600,
// //               mb: 2,
// //               display: "flex",
// //               alignItems: "center",
// //               gap: 1,
// //             }}
// //           >
// //             <TrendingUp size={24} />
// //             Popular Skills
// //           </Typography>
// //           <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
// //             {[
// //               "React",
// //               "Python",
// //               "UI/UX",
// //               "Data Science",
// //               "Marketing",
// //               "Business",
// //               "JavaScript",
// //               "SQL",
// //             ].map((skill) => (
// //               <Chip
// //                 key={skill}
// //                 label={skill}
// //                 onClick={() => handleAddFilter(skill)}
// //                 variant={activeFilters.includes(skill) ? "filled" : "outlined"}
// //                 color="primary"
// //                 sx={{ cursor: "pointer" }}
// //               />
// //             ))}
// //           </Box>
// //         </Box>

// //         <Divider sx={{ my: 4 }} />

// //         {/* Results Count */}
// //         <Typography variant="body1" color="text.secondary" mb={3}>
// //           Showing {filteredCards.length} of {exchangeCards.length} sessions
// //         </Typography>

// //         {/* Exchange Listings */}
// //         {filteredCards.length > 0 ? (
// //           <Grid container spacing={3}>
// //             {filteredCards.map((card, index) => (
// //               <Grid item xs={12} sm={6} md={4} key={index}>
// //                 <ExchangeCard {...card} />
// //               </Grid>
// //             ))}
// //           </Grid>
// //         ) : (
// //           <Box textAlign="center" py={8}>
// //             <Typography variant="h6" color="text.secondary">
// //               No sessions match your search criteria
// //             </Typography>
// //             <Button
// //               variant="outlined"
// //               onClick={handleResetFilters}
// //               sx={{ mt: 2 }}
// //             >
// //               Reset filters
// //             </Button>
// //           </Box>
// //         )}
// //       </Container>
// //     </div>
// //   );
// // };

// // const ExchangeCard = ({
// //   title,
// //   instructor,
// //   rating,
// //   reviews,
// //   duration,
// //   price,
// //   tags,
// // }) => {
// //   return (
// //     <Card
// //       sx={{
// //         height: "100%",
// //         display: "flex",
// //         flexDirection: "column",
// //         transition: "transform 0.2s, box-shadow 0.2s",
// //         "&:hover": {
// //           transform: "translateY(-4px)",
// //           boxShadow: 6,
// //         },
// //       }}
// //     >
// //       <CardContent sx={{ flexGrow: 1 }}>
// //         <Box
// //           display="flex"
// //           justifyContent="space-between"
// //           alignItems="flex-start"
// //           mb={2}
// //         >
// //           <Box>
// //             <Typography
// //               variant="h6"
// //               component="h3"
// //               fontWeight={600}
// //               gutterBottom
// //             >
// //               {title}
// //             </Typography>
// //             <Typography variant="body2" color="text.secondary">
// //               Instructor: {instructor}
// //             </Typography>
// //           </Box>
// //           <IconButton size="small" color="primary">
// //             <Bookmark size={20} />
// //           </IconButton>
// //         </Box>

// //         <Box display="flex" alignItems="center" gap={2} mb={3}>
// //           <Box display="flex" alignItems="center">
// //             <Rating value={rating} precision={0.1} size="small" readOnly />
// //             <Typography variant="body2" color="text.secondary" ml={0.5}>
// //               ({reviews})
// //             </Typography>
// //           </Box>
// //           <Box display="flex" alignItems="center" color="text.secondary">
// //             <Clock size={16} style={{ marginRight: 4 }} />
// //             <Typography variant="body2">{duration}</Typography>
// //           </Box>
// //         </Box>

// //         <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
// //           {tags.map((tag, index) => (
// //             <Chip
// //               key={index}
// //               label={tag}
// //               size="small"
// //               variant="outlined"
// //               color="primary"
// //             />
// //           ))}
// //         </Box>

// //         <Box mt="auto" pt={2} borderTop="1px solid" borderColor="divider">
// //           <Box
// //             display="flex"
// //             justifyContent="space-between"
// //             alignItems="center"
// //           >
// //             <Typography variant="h6" fontWeight={600}>
// //               ${price}
// //               <Typography
// //                 component="span"
// //                 variant="body2"
// //                 color="text.secondary"
// //               >
// //                 /session
// //               </Typography>
// //             </Typography>
// //             <Button
// //               variant="contained"
// //               endIcon={<ArrowRight size={16} />}
// //               size="small"
// //             >
// //               Book Now
// //             </Button>
// //           </Box>
// //         </Box>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default Exchange;

// import React, { useState, useContext } from "react";
// import {
//   Button,
//   Slider,
//   Chip,
//   TextField,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Select,
//   Typography,
//   Box,
//   Grid,
//   Container,
//   IconButton,
//   Card,
//   CardContent,
//   Rating,
//   Divider,
//   Paper,
// } from "@mui/material";
// import {
//   Clock,
//   Users,
//   Star,
//   ArrowRight,
//   Search,
//   Filter,
//   Bookmark,
//   TrendingUp,
//   X,
// } from "lucide-react";
// import { ExchangeContext } from "../context/ExchangeContext";
// import { useNavigate } from "react-router-dom";

// const Exchange = () => {
//   const { exchangeSessions } = useContext(ExchangeContext);
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [category, setCategory] = useState("");
//   const [duration, setDuration] = useState("");
//   const [activeFilters, setActiveFilters] = useState([]);

//   const handleAddFilter = (filter) => {
//     if (!activeFilters.includes(filter)) {
//       setActiveFilters([...activeFilters, filter]);
//     }
//   };

//   const handleRemoveFilter = (filter) => {
//     setActiveFilters(activeFilters.filter((f) => f !== filter));
//   };

//   const handleResetFilters = () => {
//     setSearchQuery("");
//     setCategory("");
//     setDuration("");
//     setActiveFilters([]);
//   };

//   const filteredCards = exchangeSessions.filter((card) => {
//     const matchesSearch =
//       card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       card.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       card.tags.some((tag) =>
//         tag.toLowerCase().includes(searchQuery.toLowerCase())
//       );

//     const matchesCategory =
//       category === "" || card.category.toLowerCase() === category;

//     const matchesDuration = duration === "" || card.duration.includes(duration);

//     const matchesTags =
//       activeFilters.length === 0 ||
//       activeFilters.some((filter) => card.tags.includes(filter));

//     return matchesSearch && matchesCategory && matchesDuration && matchesTags;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
//         <Container maxWidth="lg">
//           <Box textAlign="center" mb={6}>
//             <Typography
//               variant="h2"
//               component="h1"
//               gutterBottom
//               sx={{ fontWeight: 700 }}
//             >
//               Skill Exchange Marketplace
//             </Typography>
//             <Typography variant="h5" sx={{ opacity: 0.9 }}>
//               Connect with experts and expand your knowledge
//             </Typography>
//           </Box>
//           <Paper
//             component="form"
//             sx={{
//               p: "2px 4px",
//               display: "flex",
//               alignItems: "center",
//               maxWidth: 600,
//               mx: "auto",
//               boxShadow: 3,
//             }}
//           >
//             <TextField
//               fullWidth
//               variant="outlined"
//               placeholder="Search for skills, topics, or instructors..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <Search className="mr-2 text-gray-400" size={20} />
//                 ),
//               }}
//               sx={{ ml: 1, flex: 1 }}
//             />
//           </Paper>
//         </Container>
//       </div>

//       <Container maxWidth="lg" sx={{ py: 6 }}>
//         <Box mb={4}>
//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             mb={2}
//           >
//             <Typography variant="h6" sx={{ fontWeight: 600 }}>
//               Refine Your Search
//             </Typography>
//             {activeFilters.length > 0 && (
//               <Button
//                 variant="text"
//                 onClick={handleResetFilters}
//                 startIcon={<X size={16} />}
//                 sx={{ color: "text.secondary" }}
//               >
//                 Clear all
//               </Button>
//             )}
//           </Box>
//           <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
//             {activeFilters.map((filter) => (
//               <Chip
//                 key={filter}
//                 label={filter}
//                 onDelete={() => handleRemoveFilter(filter)}
//                 sx={{ bgcolor: "primary.light", color: "primary.dark" }}
//               />
//             ))}
//           </Box>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6} md={6}>
//               <FormControl fullWidth size="small">
//                 <InputLabel>Category</InputLabel>
//                 <Select
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   label="Category"
//                 >
//                   <MenuItem value="">All Categories</MenuItem>
//                   <MenuItem value="programming">Programming</MenuItem>
//                   <MenuItem value="design">Design</MenuItem>
//                   <MenuItem value="marketing">Marketing</MenuItem>
//                   <MenuItem value="business">Business</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12} sm={6} md={6}>
//               <FormControl fullWidth size="small">
//                 <InputLabel>Duration</InputLabel>
//                 <Select
//                   value={duration}
//                   onChange={(e) => setDuration(e.target.value)}
//                   label="Duration"
//                 >
//                   <MenuItem value="">Any Duration</MenuItem>
//                   <MenuItem value="30">30 minutes</MenuItem>
//                   <MenuItem value="1">1 hour</MenuItem>
//                   <MenuItem value="1.5">1.5 hours</MenuItem>
//                   <MenuItem value="2">2 hours</MenuItem>
//                   <MenuItem value="2.5">2.5 hours</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//           </Grid>
//         </Box>
//         <Box mb={4}>
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 600,
//               mb: 2,
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <TrendingUp size={24} />
//             Popular Skills
//           </Typography>
//           <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
//             {[
//               "React",
//               "Python",
//               "UI/UX",
//               "Data Science",
//               "Marketing",
//               "Business",
//               "JavaScript",
//               "SQL",
//             ].map((skill) => (
//               <Chip
//                 key={Cesium.Math.toRadians(skill)}
//                 label={skill}
//                 onClick={() => handleAddFilter(skill)}
//                 variant={activeFilters.includes(skill) ? "filled" : "outlined"}
//                 color="primary"
//                 sx={{ cursor: "pointer" }}
//               />
//             ))}
//           </Box>
//         </Box>
//         <Divider sx={{ my: 4 }} />
//         <Typography variant="body1" color="text.secondary" mb={3}>
//           Showing {filteredCards.length} of {exchangeSessions.length} sessions
//         </Typography>
//         {filteredCards.length > 0 ? (
//           <Grid container spacing={3}>
//             {filteredCards.map((card, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <ExchangeCard {...card} navigate={navigate} />
//               </Grid>
//             ))}
//           </Grid>
//         ) : (
//           <Box textAlign="center" py={8}>
//             <Typography variant="h6" color="text.secondary">
//               No sessions match your search criteria
//             </Typography>
//             <Button
//               variant="outlined"
//               onClick={handleResetFilters}
//               sx={{ mt: 2 }}
//             >
//               Reset filters
//             </Button>
//           </Box>
//         )}
//       </Container>
//     </div>
//   );
// };

// const ExchangeCard = ({
//   id,
//   title,
//   instructor,
//   rating,
//   reviews,
//   duration,
//   price,
//   tags,
//   navigate,
// }) => {
//   return (
//     <Card
//       sx={{
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         transition: "transform 0.2s, box-shadow 0.2s",
//         "&:hover": {
//           transform: "translateY(-4px)",
//           boxShadow: 6,
//         },
//       }}
//     >
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Box
//           display="flex"
//           justifyContent="space-between"
//           alignItems="flex-start"
//           mb={2}
//         >
//           <Box>
//             <Typography
//               variant="h6"
//               component="h3"
//               fontWeight={600}
//               gutterBottom
//             >
//               {title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Instructor: {instructor}
//             </Typography>
//           </Box>
//           <IconButton size="small" color="primary">
//             <Bookmark size={20} />
//           </IconButton>
//         </Box>
//         <Box display="flex" alignItems="center" gap={2} mb={3}>
//           <Box display="flex" alignItems="center">
//             <Rating value={rating} precision={0.1} size="small" readOnly />
//             <Typography variant="body2" color="text.secondary" ml={0.5}>
//               ({reviews})
//             </Typography>
//           </Box>
//           <Box display="flex" alignItems="center" color="text.secondary">
//             <Clock size={16} style={{ marginRight: 4 }} />
//             <Typography variant="body2">{duration}</Typography>
//           </Box>
//         </Box>
//         <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
//           {tags.map((tag, index) => (
//             <Chip
//               key={index}
//               label={tag}
//               size="small"
//               variant="outlined"
//               color="primary"
//             />
//           ))}
//         </Box>
//         <Box mt="auto" pt={2} borderTop="1px solid" borderColor="divider">
//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Typography variant="h6" fontWeight={600}>
//               ${price}
//               <Typography
//                 component="span"
//                 variant="body2"
//                 color="text.secondary"
//               >
//                 /session
//               </Typography>
//             </Typography>
//             <Button
//               variant="contained"
//               endIcon={<ArrowRight size={16} />}
//               size="small"
//               onClick={() => navigate(`/checkout/${id}`)}
//             >
//               Book Now
//             </Button>
//           </Box>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default Exchange;

import React, { useState, useContext } from "react";
import {
  Button,
  Slider,
  Chip,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Typography,
  Box,
  Grid,
  Container,
  IconButton,
  Card,
  CardContent,
  Rating,
  Divider,
  Paper,
} from "@mui/material";
import {
  Clock,
  Users,
  Star,
  ArrowRight,
  Search,
  Filter,
  Bookmark,
  TrendingUp,
  X,
} from "lucide-react";
import { ExchangeContext } from "../context/ExchangeContext";
import { useNavigate } from "react-router-dom";

const Exchange = () => {
  const { exchangeSessions } = useContext(ExchangeContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);

  const handleAddFilter = (filter) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const handleRemoveFilter = (filter) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setCategory("");
    setDuration("");
    setActiveFilters([]);
  };

  const filteredCards = exchangeSessions.filter((card) => {
    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      category === "" || card.category.toLowerCase() === category;

    const matchesDuration = duration === "" || card.duration.includes(duration);

    const matchesTags =
      activeFilters.length === 0 ||
      activeFilters.some((filter) => card.tags.includes(filter));

    return matchesSearch && matchesCategory && matchesDuration && matchesTags;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Skill Exchange Marketplace
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9 }}>
              Connect with experts and expand your knowledge
            </Typography>
          </Box>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              maxWidth: 600,
              mx: "auto",
              boxShadow: 3,
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search for skills, topics, or instructors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <Search className="mr-2 text-gray-400" size={20} />
                ),
              }}
              sx={{ ml: 1, flex: 1 }}
            />
          </Paper>
        </Container>
      </div>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box mb={4}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Refine Your Search
            </Typography>
            {activeFilters.length > 0 && (
              <Button
                variant="text"
                onClick={handleResetFilters}
                startIcon={<X size={16} />}
                sx={{ color: "text.secondary" }}
              >
                Clear all
              </Button>
            )}
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
            {activeFilters.map((filter) => (
              <Chip
                key={filter}
                label={filter}
                onDelete={() => handleRemoveFilter(filter)}
                sx={{ bgcolor: "primary.light", color: "primary.dark" }}
              />
            ))}
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl fullWidth size="small">
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  label="Category"
                >
                  <MenuItem value="">All Categories</MenuItem>
                  <MenuItem value="programming">Programming</MenuItem>
                  <MenuItem value="design">Design</MenuItem>
                  <MenuItem value="marketing">Marketing</MenuItem>
                  <MenuItem value="business">Business</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl fullWidth size="small">
                <InputLabel>Duration</InputLabel>
                <Select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  label="Duration"
                >
                  <MenuItem value="">Any Duration</MenuItem>
                  <MenuItem value="30">30 minutes</MenuItem>
                  <MenuItem value="1">1 hour</MenuItem>
                  <MenuItem value="1.5">1.5 hours</MenuItem>
                  <MenuItem value="2">2 hours</MenuItem>
                  <MenuItem value="2.5">2.5 hours</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box mb={4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <TrendingUp size={24} />
            Popular Skills
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {[
              "React",
              "Python",
              "UI/UX",
              "Data Science",
              "Marketing",
              "Business",
              "JavaScript",
              "SQL",
            ].map((skill) => (
              <Chip
                key={skill} // Fixed: Use skill string as key
                label={skill}
                onClick={() => handleAddFilter(skill)}
                variant={activeFilters.includes(skill) ? "filled" : "outlined"}
                color="primary"
                sx={{ cursor: "pointer" }}
              />
            ))}
          </Box>
        </Box>
        <Divider sx={{ my: 4 }} />
        <Typography variant="body1" color="text.secondary" mb={3}>
          Showing {filteredCards.length} of {exchangeSessions.length} sessions
        </Typography>
        {filteredCards.length > 0 ? (
          <Grid container spacing={3}>
            {filteredCards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={card.id}>
                <ExchangeCard {...card} navigate={navigate} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box textAlign="center" py={8}>
            <Typography variant="h6" color="text.secondary">
              No sessions match your search criteria
            </Typography>
            <Button
              variant="outlined"
              onClick={handleResetFilters}
              sx={{ mt: 2 }}
            >
              Reset filters
            </Button>
          </Box>
        )}
      </Container>
    </div>
  );
};

const ExchangeCard = ({
  id,
  title,
  instructor,
  rating,
  reviews,
  duration,
  price,
  tags,
  navigate,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          mb={2}
        >
          <Box>
            <Typography
              variant="h6"
              component="h3"
              fontWeight={600}
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Instructor: {instructor}
            </Typography>
          </Box>
          <IconButton size="small" color="primary">
            <Bookmark size={20} />
          </IconButton>
        </Box>
        <Box display="flex" alignItems="center" gap={2} mb={3}>
          <Box display="flex" alignItems="center">
            <Rating value={rating} precision={0.1} size="small" readOnly />
            <Typography variant="body2" color="text.secondary" ml={0.5}>
              ({reviews})
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" color="text.secondary">
            <Clock size={16} style={{ marginRight: 4 }} />
            <Typography variant="body2">{duration}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              variant="outlined"
              color="primary"
            />
          ))}
        </Box>
        <Box mt="auto" pt={2} borderTop="1px solid" borderColor="divider">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" fontWeight={600}>
              ${price}
              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
              >
                /session
              </Typography>
            </Typography>
            <Button
              variant="contained"
              endIcon={<ArrowRight size={16} />}
              size="small"
              onClick={() => navigate(`/checkout/${id}`)}
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Exchange;