import React from "react";
import { Typography, Container, Grid, Card } from "@mui/material";
import { Award, Target, Users, Rocket } from "lucide-react";

const ValueCard = ({ icon, title, description }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow flex flex-col">
      <div className="flex justify-center mb-4 text-blue-600">{icon}</div>
      <Typography variant="h6" className="font-bold">
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ mt: 2 }}
        className="text-gray-600 text-center justify-center"
      >
        {description}
      </Typography>
    </Card>
  </Grid>
);

const TimelineItem = ({ year, title, description }) => (
  <div className="flex gap-4 items-start">
    <div className="w-24 text-lg font-bold text-blue-600">{year}</div>
    <div>
      <Typography variant="h6" className="font-bold">
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }} className="text-gray-600">
        {description}
      </Typography>
    </div>
  </div>
);

const TeamMember = ({ name, role, image, description }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Card className="p-6 text-center mx-auto  hover:shadow-lg transition-shadow h-full flex flex-col">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <Typography variant="h6" className="font-bold">
        {name}
      </Typography>
      <Typography variant="subtitle2" sx={{ mt: 2 }} className="text-blue-600">
        {role}
      </Typography>
      <Typography
        variant="body2"
        sx={{ mt: 2 }}
        className="text-gray-600 flex-grow"
      >
        {description}
      </Typography>
    </Card>
  </Grid>
);

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 py-12">
      <Container maxWidth="lg" className="mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-8">
          <Typography
            variant="h2"
            className="font-bold text-5xl bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent leading-snug"
          >
            Empowering Skills,Connecting Futures
          </Typography>
          <Typography variant="h5" className="text-gray-600 mx-auto text-lg">
            SkillMate is a revolutionary platform where expertise meets
            opportunity, connecting skilled professionals with learners in an
            interactive educational environment.
          </Typography>
        </div>

        {/* Core Values */}
        <Grid container spacing={6} className="mb-16">
          <ValueCard
            icon={<Target className="w-8 h-8" />}
            title="Our Vision"
            description="To become the world's leading platform for skill development and professional growth"
          />
          <ValueCard
            icon={<Award className="w-8 h-8" />}
            title="Our Mission"
            description="To create an inclusive learning ecosystem that connects experts with learners"
          />
          <ValueCard
            icon={<Users className="w-8 h-8" />}
            title="Our Values"
            description="Excellence, Innovation, Collaboration, and Transparency in everything we do"
          />
          <ValueCard
            icon={<Rocket className="w-8 h-8" />}
            title="Our Impact"
            description="Transforming careers and empowering individuals to achieve their professional goals"
          />
        </Grid>

        {/* History Timeline */}
        <div className="mb-16 space-y-8">
          <Typography
            variant="h3"
            className="text-center font-bold mb-4 text-gray-900"
          >
            Our Journey
          </Typography>
          <div className="space-y-8 max-w-3xl mx-auto">
            <TimelineItem
              year="2023"
              title="Platform Launch"
              description="Started with a vision to revolutionize skill-sharing and professional development, launching with our first 100 passionate users."
            />
            <TimelineItem
              year="2024"
              title="Community Growth"
              description="Expanded to 10,000 active users, introduced new features, and established key partnerships with industry leaders."
            />
            <TimelineItem
              year="2025"
              title="Global Expansion"
              description="Launched international markets, introduced AI-powered learning paths, and developed innovative collaboration tools."
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 space-y-4">
          <Typography
            variant="h3"
            className="text-center font-bold  text-gray-900"
          >
            Meet Our Team
          </Typography>
          <Grid
            container
            spacing={4}
            alignItems="stretch"
            className="items-stretch"
          >
            <TeamMember
              name="Alex Chen"
              role="Founder & CEO"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              description="Tech visionary with 15+ years of experience in building educational platforms"
            />
            <TeamMember
              name="Sarah Miller"
              role="Head of Product"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              description="Product strategist passionate about creating intuitive user experiences"
            />
            <TeamMember
              name="David Park"
              role="CTO"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              description="Engineering leader specializing in scalable learning technologies"
            />
            <TeamMember
              name="Emily Wang"
              role="Head of Community"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              description="Community builder focused on creating meaningful connections"
            />
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default About;
