import React, { useState } from "react";
import {
  Card,
  Typography,
  Button,
  Chip,
  Rating,
  Tab,
  Tabs,
  Box,
  TextField,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  User,
  MapPin,
  Calendar,
  Award,
  Book,
  Briefcase,
  Edit,
  Github,
  Linkedin,
  Globe,
  Plus,
  Star,
  MessageCircle,
  Trash,
  Mail,
} from "lucide-react";

// Load registration data from localStorage with fallbacks
const registrationData =
  JSON.parse(localStorage.getItem("registrationData")) || {};
console.log("Loaded registrationData:", registrationData);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [skillDialogOpen, setSkillDialogOpen] = useState(false);
  const [projectDialogOpen, setProjectDialogOpen] = useState(false);
  const [certificationDialogOpen, setCertificationDialogOpen] = useState(false);
  const [educationDialogOpen, setEducationDialogOpen] = useState(false);
  const [experienceDialogOpen, setExperienceDialogOpen] = useState(false);
  const [editEducationIndex, setEditEducationIndex] = useState(null);
  const [editExperienceIndex, setEditExperienceIndex] = useState(null);
  const [avatar, setAvatar] = useState(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  );
  const [coverPhoto, setCoverPhoto] = useState(
    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1600&q=80"
  );

  // Initialize states with localStorage data
  const [name, setName] = useState(registrationData.fullName || "Guest User");
  const [email, setEmail] = useState(registrationData.email || "");
  const [jobTitle, setJobTitle] = useState("Senior Software Developer");
  const [location, setLocation] = useState("San Francisco, CA");
  const [bio, setBio] = useState(
    "Passionate software developer with 5+ years of experience in full-stack development. Specialized in React, Node.js, and cloud technologies. Always eager to learn and share knowledge with the community."
  );

  console.log("Initial state - name:", name, "email:", email);

  const [editForm, setEditForm] = useState({
    name: name,
    email: email,
    jobTitle: jobTitle,
    location: location,
    bio: bio,
  });

  const [newSkill, setNewSkill] = useState({
    name: "",
    level: 0,
    years: 0,
    type: "I have",
  });
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    technologies: "",
    image: "",
  });
  const [newCertification, setNewCertification] = useState({
    name: "",
    issuer: "",
    date: "",
    image: "",
  });
  const [newEducation, setNewEducation] = useState({
    degree: "",
    school: "",
    period: "",
  });
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    period: "",
    description: "",
  });
  const [skills, setSkills] = useState([
    { name: "React.js", level: 5, years: 4 },
    { name: "Node.js", level: 4, years: 3 },
    { name: "TypeScript", level: 4, years: 3 },
    { name: "AWS", level: 4, years: 2 },
  ]);
  const [skillsToLearn, setSkillsToLearn] = useState([]);
  const [projects, setProjects] = useState([
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Task Management App",
      description:
        "A real-time task management application using React and Firebase.",
      technologies: ["React", "Firebase", "Material-UI"],
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    },
  ]);
  const [certifications, setCertifications] = useState([
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Professional Cloud Developer",
      issuer: "Google Cloud",
      date: "2022",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    },
  ]);
  const [education, setEducation] = useState([
    {
      degree: "Master of Computer Science",
      school: "Stanford University",
      period: "2016 - 2018",
    },
    {
      degree: "Bachelor of Computer Science",
      school: "University of California",
      period: "2012 - 2016",
    },
  ]);
  const [experience, setExperience] = useState([
    {
      title: "Senior Software Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description:
        "Leading the frontend development team, implementing new features, and mentoring junior developers.",
    },
    {
      title: "Software Developer",
      company: "Digital Innovations",
      period: "2018 - 2021",
      description:
        "Developed and maintained multiple web applications using React and Node.js.",
    },
  ]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleEditProfile = () => {
    setEditForm({ name, email, jobTitle, location, bio });
    setEditDialogOpen(true);
  };

  const handleAddSkill = () => {
    setSkillDialogOpen(true);
  };

  const handleAddProject = () => {
    setProjectDialogOpen(true);
  };

  const handleAddCertification = () => {
    setCertificationDialogOpen(true);
  };

  const handleAddEducation = () => {
    setNewEducation({ degree: "", school: "", period: "" });
    setEditEducationIndex(null);
    setEducationDialogOpen(true);
  };

  const handleEditEducation = (index) => {
    setNewEducation(education[index]);
    setEditEducationIndex(index);
    setEducationDialogOpen(true);
  };

  const handleAddExperience = () => {
    setNewExperience({ title: "", company: "", period: "", description: "" });
    setEditExperienceIndex(null);
    setExperienceDialogOpen(true);
  };

  const handleEditExperience = (index) => {
    setNewExperience(experience[index]);
    setEditExperienceIndex(index);
    setExperienceDialogOpen(true);
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleCoverPhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverPhoto(URL.createObjectURL(file));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleProfileSubmit = () => {
    // Validate inputs
    if (!editForm.name) {
      alert("Name cannot be empty");
      return;
    }
    if (editForm.email && !validateEmail(editForm.email)) {
      alert("Please enter a valid email");
      return;
    }

    // Update states
    setName(editForm.name);
    setEmail(editForm.email);
    setJobTitle(editForm.jobTitle);
    setLocation(editForm.location);
    setBio(editForm.bio);

    // Save to localStorage
    const profileData = {
      fullName: editForm.name,
      email: editForm.email,
      jobTitle: editForm.jobTitle,
      location: editForm.location,
      bio: editForm.bio,
    };
    localStorage.setItem("profileData", JSON.stringify(profileData));
    console.log("Saved profileData:", profileData);

    // Update registrationData
    const updatedRegistrationData = {
      ...registrationData,
      fullName: editForm.name,
      email: editForm.email,
    };
    localStorage.setItem(
      "registrationData",
      JSON.stringify(updatedRegistrationData)
    );
    console.log("Updated registrationData:", updatedRegistrationData);

    setEditDialogOpen(false);
  };

  const handleClearBio = () => {
    setEditForm({ ...editForm, bio: "" });
  };

  const handleSkillSubmit = () => {
    if (newSkill.name) {
      if (newSkill.type === "I want to learn") {
        setSkillsToLearn([...skillsToLearn, newSkill.name]);
      } else {
        setSkills([...skills, newSkill]);
      }
      setNewSkill({ name: "", level: 0, years: 0, type: "I have" });
      setSkillDialogOpen(false);
    }
  };

  const handleProjectSubmit = () => {
    if (newProject.title && newProject.description) {
      setProjects([
        ...projects,
        {
          ...newProject,
          technologies: newProject.technologies
            .split(",")
            .map((tech) => tech.trim()),
        },
      ]);
      setNewProject({
        title: "",
        description: "",
        technologies: "",
        image: "",
      });
      setProjectDialogOpen(false);
    }
  };

  const handleCertificationSubmit = () => {
    if (newCertification.name && newCertification.issuer) {
      setCertifications([...certifications, newCertification]);
      setNewCertification({ name: "", issuer: "", date: "", image: "" });
      setCertificationDialogOpen(false);
    }
  };

  const handleEducationSubmit = () => {
    if (newEducation.degree && newEducation.school && newEducation.period) {
      if (editEducationIndex !== null) {
        const updatedEducation = [...education];
        updatedEducation[editEducationIndex] = newEducation;
        setEducation(updatedEducation);
      } else {
        setEducation([...education, newEducation]);
      }
      setNewEducation({ degree: "", school: "", period: "" });
      setEducationDialogOpen(false);
      setEditEducationIndex(null);
    }
  };

  const handleExperienceSubmit = () => {
    if (
      newExperience.title &&
      newExperience.company &&
      newExperience.period &&
      newExperience.description
    ) {
      if (editExperienceIndex !== null) {
        const updatedExperience = [...experience];
        updatedExperience[editExperienceIndex] = newExperience;
        setExperience(updatedExperience);
      } else {
        setExperience([...experience, newExperience]);
      }
      setNewExperience({
        title: "",
        company: "",
        period: "",
        description: "",
      });
      setExperienceDialogOpen(false);
      setEditExperienceIndex(null);
    }
  };

  const handleDeleteSkill = (skillToDelete) => {
    setSkills(skills.filter((skill) => skill.name !== skillToDelete));
  };

  const handleDeleteProject = (projectToDelete) => {
    setProjects(
      projects.filter((project) => project.title !== projectToDelete)
    );
  };

  const handleDeleteCertification = (certificationToDelete) => {
    setCertifications(
      certifications.filter((cert) => cert.name !== certificationToDelete)
    );
  };

  const handleDeleteEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const handleDeleteExperience = (index) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <Card className="mb-8 overflow-hidden">
          <div className="relative">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url(${coverPhoto})`,
              }}
            />
          </div>
          <div className="p-6">
            <div className="flex items-start gap-6">
              <div className="relative -mt-24">
                <img
                  src={avatar}
                  className="w-48 h-48 border-4 border-white rounded-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <Typography variant="h3" className="font-bold">
                      {name}
                    </Typography>
                    <Typography variant="h5" className="text-gray-600">
                      {jobTitle}
                    </Typography>
                  </div>
                  <Button
                    variant="outlined"
                    startIcon={<Edit className="w-4 h-4" />}
                    onClick={handleEditProfile}
                  >
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Briefcase className="w-4 h-4" />
                  <span>Tech Solutions Inc.</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{location}</span>
                </div>
                {email && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{email}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Joined March 2023</span>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <IconButton className="text-gray-600 hover:text-blue-600">
                  <Github className="w-5 h-5" />
                </IconButton>
                <IconButton className="text-gray-600 hover:text-blue-600">
                  <Linkedin className="w-5 h-5" />
                </IconButton>
                <IconButton className="text-gray-600 hover:text-blue-600">
                  <Globe className="w-5 h-5" />
                </IconButton>
              </div>
            </div>
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
              icon={<User className="w-4 h-4" />}
              iconPosition="start"
            />
            <Tab
              label="Skills"
              icon={<Award className="w-4 h-4" />}
              iconPosition="start"
            />
            <Tab
              label="Portfolio"
              icon={<Book className="w-4 h-4" />}
              iconPosition="start"
            />
            <Tab
              label="Certifications"
              icon={<Star className="w-4 h-4" />}
              iconPosition="start"
            />
            <Tab
              label="Reviews"
              icon={<MessageCircle className="w-4 h-4" />}
              iconPosition="start"
            />
          </Tabs>

          {/* Overview Tab */}
          <TabPanel value={tabValue} index={0}>
            <div className="space-y-8">
              <div>
                <Typography variant="h6" className="font-semibold mb-4">
                  About Me
                </Typography>
                <Typography
                  variant="body1"
                  className="text-gray-600"
                  style={{ fontStyle: bio ? "normal" : "italic" }}
                >
                  {bio || "Add a bio to tell others about yourself"}
                </Typography>
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Typography variant="h6" className="font-semibold">
                    Experience
                  </Typography>
                  <Button
                    onClick={handleAddExperience}
                    startIcon={<Plus className="w-4 h-4" />}
                  >
                    Add Experience
                  </Button>
                </div>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <ExperienceCard
                      key={index}
                      title={exp.title}
                      company={exp.company}
                      period={exp.period}
                      description={exp.description}
                      onEdit={() => handleEditExperience(index)}
                      onDelete={() => handleDeleteExperience(index)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Typography variant="h6" className="font-semibold">
                    Education
                  </Typography>
                  <Button
                    onClick={handleAddEducation}
                    startIcon={<Plus className="w-4 h-4" />}
                  >
                    Add Education
                  </Button>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <EducationCard
                      key={index}
                      degree={edu.degree}
                      school={edu.school}
                      period={edu.period}
                      onEdit={() => handleEditEducation(index)}
                      onDelete={() => handleDeleteEducation(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Skills Tab */}
          <TabPanel value={tabValue} index={1}>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Typography variant="h6" className="font-semibold">
                    Current Skills
                  </Typography>
                  <Button
                    onClick={handleAddSkill}
                    startIcon={<Plus className="w-4 h-4" />}
                  >
                    Add Skill
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <SkillCard
                      key={index}
                      name={skill.name}
                      level={skill.level}
                      years={skill.years}
                      onDelete={() => handleDeleteSkill(skill.name)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <Typography variant="h6" className="font-semibold mb-4">
                  Skills I Want to Learn
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {skillsToLearn.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      className="bg-blue-50 text-blue-600"
                    />
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Portfolio Tab */}
          <TabPanel value={tabValue} index={2}>
            <div className="space-y-8">
              <div className="flex justify-between items-center mb-4">
                <Typography variant="h6" className="font-semibold">
                  Projects
                </Typography>
                <Button
                  onClick={handleAddProject}
                  startIcon={<Plus className="w-4 h-4" />}
                >
                  Add Project
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    image={project.image}
                    onDelete={() => handleDeleteProject(project.title)}
                  />
                ))}
              </div>
            </div>
          </TabPanel>

          {/* Certifications Tab */}
          <TabPanel value={tabValue} index={3}>
            <div className="space-y-8">
              <div className="flex justify-between items-center mb-4">
                <Typography variant="h6" className="font-semibold">
                  Certifications
                </Typography>
                <Button
                  onClick={handleAddCertification}
                  startIcon={<Plus className="w-4 h-4" />}
                >
                  Add Certification
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <CertificationCard
                    key={index}
                    name={cert.name}
                    issuer={cert.issuer}
                    date={cert.date}
                    image={cert.image}
                    onDelete={() => handleDeleteCertification(cert.name)}
                  />
                ))}
              </div>
            </div>
          </TabPanel>

          {/* Reviews Tab */}
          <TabPanel value={tabValue} index={4}>
            <div className="space-y-8">
              <div className="flex justify-between items-center mb-4">
                <Typography variant="h6" className="font-semibold">
                  Reviews
                </Typography>
                <div className="flex items-center gap-2">
                  <Typography variant="h6" className="font-semibold">
                    4.8
                  </Typography>
                  <Rating value={4.8} readOnly precision={0.5} />
                  <Typography variant="body2" className="text-gray-600">
                    (24 reviews)
                  </Typography>
                </div>
              </div>
              <div className="space-y-4">
                <ReviewCard
                  name="Sarah Miller"
                  avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  rating={5}
                  date="March 15, 2024"
                  review="Alex is an exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are impressive."
                />
                <ReviewCard
                  name="David Chen"
                  avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  rating={4}
                  date="March 10, 2024"
                  review="Great collaboration experience. Very knowledgeable and always willing to help team members."
                />
              </div>
            </div>
          </TabPanel>
        </Card>

        {/* Edit Profile Dialog */}
        <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              fullWidth
              value={editForm.name}
              onChange={(e) =>
                setEditForm({ ...editForm, name: e.target.value })
              }
              required
            />
            <TextField
              margin="dense"
              label="Email"
              fullWidth
              value={editForm.email}
              onChange={(e) =>
                setEditForm({ ...editForm, email: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="Job Title"
              fullWidth
              value={editForm.jobTitle}
              onChange={(e) =>
                setEditForm({ ...editForm, jobTitle: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="Location"
              fullWidth
              value={editForm.location}
              onChange={(e) =>
                setEditForm({ ...editForm, location: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="About Me"
              fullWidth
              multiline
              rows={4}
              value={editForm.bio}
              onChange={(e) =>
                setEditForm({ ...editForm, bio: e.target.value })
              }
              placeholder="Tell others about yourself"
            />
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClearBio}
              sx={{ mt: 1 }}
            >
              Clear Bio
            </Button>
            <TextField
              margin="dense"
              label="Profile Picture"
              type="file"
              fullWidth
              InputLabelProps={{ shrink: true }}
              inputProps={{ accept: "image/*" }}
              onChange={handleAvatarChange}
            />
            <TextField
              margin="dense"
              label="Cover Photo"
              type="file"
              fullWidth
              InputLabelProps={{ shrink: true }}
              inputProps={{ accept: "image/*" }}
              onChange={handleCoverPhotoChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleProfileSubmit}>Save</Button>
          </DialogActions>
        </Dialog>

        {/* Add/Edit Education Dialog */}
        <Dialog
          open={educationDialogOpen}
          onClose={() => setEducationDialogOpen(false)}
        >
          <DialogTitle>
            {editEducationIndex !== null ? "Edit Education" : "Add Education"}
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Degree"
              fullWidth
              value={newEducation.degree}
              onChange={(e) =>
                setNewEducation({ ...newEducation, degree: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="School"
              fullWidth
              value={newEducation.school}
              onChange={(e) =>
                setNewEducation({ ...newEducation, school: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="Period"
              fullWidth
              value={newEducation.period}
              onChange={(e) =>
                setNewEducation({ ...newEducation, period: e.target.value })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEducationDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEducationSubmit}>Save</Button>
          </DialogActions>
        </Dialog>

        {/* Add/Edit Experience Dialog */}
        <Dialog
          open={experienceDialogOpen}
          onClose={() => setExperienceDialogOpen(false)}
        >
          <DialogTitle>
            {editExperienceIndex !== null
              ? "Edit Experience"
              : "Add Experience"}
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Title"
              fullWidth
              value={newExperience.title}
              onChange={(e) =>
                setNewExperience({ ...newExperience, title: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="Company"
              fullWidth
              value={newExperience.company}
              onChange={(e) =>
                setNewExperience({ ...newExperience, company: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="Period"
              fullWidth
              value={newExperience.period}
              onChange={(e) =>
                setNewExperience({ ...newExperience, period: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={newExperience.description}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  description: e.target.value,
                })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setExperienceDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleExperienceSubmit}>Save</Button>
          </DialogActions>
        </Dialog>

        {/* Add Skill Dialog */}
        <Dialog
          open={skillDialogOpen}
          onClose={() => setSkillDialogOpen(false)}
        >
          <DialogTitle>Add Skill</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Skill Name"
              fullWidth
              value={newSkill.name}
              onChange={(e) =>
                setNewSkill({ ...newSkill, name: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="Skill Level (1-5)"
              type="number"
              fullWidth
              value={newSkill.level}
              onChange={(e) =>
                setNewSkill({
                  ...newSkill,
                  level: Math.max(
                    1,
                    Math.min(5, parseInt(e.target.value) || 0)
                  ),
                })
              }
            />
            <TextField
              margin="dense"
              label="Years of Experience"
              type="number"
              fullWidth
              value={newSkill.years}
              onChange={(e) =>
                setNewSkill({
                  ...newSkill,
                  years: Math.max(0, parseInt(e.target.value) || 0),
                })
              }
            />
            <TextField
              margin="dense"
              label="Type"
              select
              fullWidth
              value={newSkill.type}
              onChange={(e) =>
                setNewSkill({ ...newSkill, type: e.target.value })
              }
              SelectProps={{ native: true }}
            >
              <option value="I have">I have</option>
              <option value="I want to learn">I want to learn</option>
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setSkillDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSkillSubmit}>Add Skill</Button>
          </DialogActions>
        </Dialog>

        {/* Add Project Dialog */}
        <Dialog
          open={projectDialogOpen}
          onClose={() => setProjectDialogOpen(false)}
        >
          <DialogTitle>Add Project</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Project Title"
              fullWidth
              value={newProject.title}
              onChange={(e) =>
                setNewProject({ ...newProject, title: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="Technologies (comma-separated)"
              fullWidth
              value={newProject.technologies}
              onChange={(e) =>
                setNewProject({ ...newProject, technologies: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="Image URL"
              fullWidth
              value={newProject.image}
              onChange={(e) =>
                setNewProject({ ...newProject, image: e.target.value })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setProjectDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleProjectSubmit}>Save</Button>
          </DialogActions>
        </Dialog>

        {/* Add Certification Dialog */}
        <Dialog
          open={certificationDialogOpen}
          onClose={() => setCertificationDialogOpen(false)}
        >
          <DialogTitle>Add Certification</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Certification Name"
              fullWidth
              value={newCertification.name}
              onChange={(e) =>
                setNewCertification({
                  ...newCertification,
                  name: e.target.value,
                })
              }
            />
            <TextField
              margin="dense"
              label="Issuer"
              fullWidth
              value={newCertification.issuer}
              onChange={(e) =>
                setNewCertification({
                  ...newCertification,
                  issuer: e.target.value,
                })
              }
            />
            <TextField
              margin="dense"
              label="Date"
              fullWidth
              value={newCertification.date}
              onChange={(e) =>
                setNewCertification({
                  ...newCertification,
                  date: e.target.value,
                })
              }
            />
            <TextField
              margin="dense"
              label="Image URL"
              fullWidth
              value={newCertification.image}
              onChange={(e) =>
                setNewCertification({
                  ...newCertification,
                  image: e.target.value,
                })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setCertificationDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCertificationSubmit}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  onEdit,
  onDelete,
}) => (
  <Card className="p-4">
    <div className="flex justify-between items-start">
      <div>
        <Typography variant="subtitle1" className="font-semibold">
          {title}
        </Typography>
        <Typography variant="body2" className="text-gray-600">
          {company}
        </Typography>
        <Typography variant="body2" className="text-gray-500">
          {period}
        </Typography>
        <Typography variant="body2" className="text-gray-600 mt-2">
          {description}
        </Typography>
      </div>
      <div className="flex gap-2">
        <IconButton
          onClick={onEdit}
          className="text-blue-600 hover:text-blue-800"
        >
          <Edit className="w-5 h-5" />
        </IconButton>
        <IconButton
          onClick={onDelete}
          className="text-red-600 hover:text-red-800"
        >
          <Trash className="w-5 h-5" />
        </IconButton>
      </div>
    </div>
  </Card>
);

const EducationCard = ({ degree, school, period, onEdit, onDelete }) => (
  <Card className="p-4">
    <div className="flex justify-between items-start">
      <div>
        <Typography variant="subtitle1" className="font-semibold">
          {degree}
        </Typography>
        <Typography variant="body2" className="text-gray-600">
          {school}
        </Typography>
        <Typography variant="body2" className="text-gray-500">
          {period}
        </Typography>
      </div>
      <div className="flex gap-2">
        <IconButton
          onClick={onEdit}
          className="text-blue-600 hover:text-blue-800"
        >
          <Edit className="w-5 h-5" />
        </IconButton>
        <IconButton
          onClick={onDelete}
          className="text-red-600 hover:text-red-800"
        >
          <Trash className="w-5 h-5" />
        </IconButton>
      </div>
    </div>
  </Card>
);

const SkillCard = ({ name, level, years, onDelete }) => (
  <Card className="p-4">
    <div className="flex justify-between items-start mb-2">
      <Typography variant="subtitle1" className="font-semibold">
        {name}
      </Typography>
      <Chip
        label={`${years} years`}
        size="small"
        className="bg-blue-50 text-blue-600"
      />
    </div>
    <div className="flex justify-between items-center">
      <Rating value={level} readOnly />
      <IconButton
        onClick={onDelete}
        className="text-red-600 hover:text-red-800"
      >
        <Trash className="w-5 h-5" />
      </IconButton>
    </div>
  </Card>
);

const ProjectCard = ({ title, description, technologies, image, onDelete }) => (
  <Card className="overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <Typography variant="h6" className="font-semibold">
        {title}
      </Typography>
      <Typography variant="body2" className="text-gray-600 mt-2">
        {description}
      </Typography>
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech) => (
          <Chip key={tech} label={tech} size="small" className="bg-gray-100" />
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <IconButton
          onClick={onDelete}
          className="text-red-600 hover:text-red-800"
        >
          <Trash className="w-5 h-5" />
        </IconButton>
      </div>
    </div>
  </Card>
);

const CertificationCard = ({ name, issuer, date, image, onDelete }) => (
  <Card className="overflow-hidden">
    <img src={image} alt={name} className="w-full h-32 object-cover" />
    <div className="p-4">
      <Typography variant="subtitle1" className="font-semibold">
        {name}
      </Typography>
      <Typography variant="body2" className="text-gray-600">
        {issuer}
      </Typography>
      <Typography variant="body2" className="text-gray-500">
        {date}
      </Typography>
      <div className="flex justify-end mt-4">
        <IconButton
          onClick={onDelete}
          className="text-red-600 hover:text-red-800"
        >
          <Trash className="w-5 h-5" />
        </IconButton>
      </div>
    </div>
  </Card>
);

const ReviewCard = ({ name, avatar, rating, date, review }) => (
  <Card className="p-4">
    <div className="flex items-start gap-4">
      <img
        src={avatar}
        className="w-10 h-10 rounded-full"
        style={{ objectFit: "cover" }}
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <Typography variant="subtitle1" className="font-semibold">
              {name}
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              {date}
            </Typography>
          </div>
          <Rating value={rating} readOnly size="small" />
        </div>
        <Typography variant="body2" className="text-gray-600 mt-2">
          {review}
        </Typography>
      </div>
    </div>
  </Card>
);

export default Profile;
