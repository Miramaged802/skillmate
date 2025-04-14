import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  Typography,
  Chip,
  Rating,
  Tab,
  Tabs,
  Box,
  IconButton,
} from "@mui/material";
import {
  User,
  MapPin,
  Calendar,
  Award,
  Book,
  Briefcase,
  Github,
  Globe,
  Star,
  MessageCircle,
} from "lucide-react";
import { profiles } from "../data/profile"; // استيراد البيانات من profile.js

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

const ProfileDetails = () => {
  const { id } = useParams(); // جلب الـ id من الـ URL
  const [profileNotFound, setProfileNotFound] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  // تعريف الحالة للبيانات
  const [avatar, setAvatar] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillsToLearn, setSkillsToLearn] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  // جلب البيانات من profile.js بناءً على الـ id
  useEffect(() => {
    const profile = profiles.find((p) => p.id === id);
    if (profile) {
      setAvatar(
        profile.avatar ||
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      );
      setCoverPhoto(
        profile.coverPhoto ||
          "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1600&q=80"
      );
      setName(profile.name || "Unknown User");
      setJobTitle(profile.jobTitle || "");
      setLocation(profile.location || "");
      setBio(profile.bio || "No bio available");
      setSkills(profile.skills || []);
      setSkillsToLearn(profile.skillsToLearn || []);
      setProjects(profile.projects || []);
      setCertifications(profile.certifications || []);
      setEducation(profile.education || []);
      setExperience(profile.experience || []);
    } else {
      setProfileNotFound(true);
    }
  }, [id]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (profileNotFound) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Typography variant="h4" className="text-gray-600">
            Profile Not Found
          </Typography>
        </div>
      </div>
    );
  }

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
                </div>
             
              </div>
            </div>
            <div className="mt-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Briefcase className="w-4 h-4" />
                  <span>{jobTitle}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{location}</span>
                </div>
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
                  {bio || "No bio available"}
                </Typography>
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Typography variant="h6" className="font-semibold">
                    Experience
                  </Typography>
                </div>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <ExperienceCard
                      key={index}
                      title={exp.title}
                      company={exp.company}
                      period={exp.period}
                      description={exp.description}
                    />
                  ))}
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Typography variant="h6" className="font-semibold">
                    Education
                  </Typography>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <EducationCard
                      key={index}
                      degree={edu.degree}
                      school={edu.school}
                      period={edu.period}
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
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <SkillCard
                      key={index}
                      name={skill.name}
                      level={skill.level}
                      years={skill.years}
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
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    image={project.image}
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
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <CertificationCard
                    key={index}
                    name={cert.name}
                    issuer={cert.issuer}
                    date={cert.date}
                    image={cert.image}
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
      </div>
    </div>
  );
};

const ExperienceCard = ({
  title,
  company,
  period,
  description,
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
    </div>
  </Card>
);

const EducationCard = ({ degree, school, period }) => (
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
    </div>
  </Card>
);

const SkillCard = ({ name, level, years }) => (
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
    </div>
  </Card>
);

const ProjectCard = ({ title, description, technologies, image }) => (
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
    </div>
  </Card>
);

const CertificationCard = ({ name, issuer, date, image }) => (
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

export default ProfileDetails;