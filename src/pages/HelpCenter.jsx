// Converted to JavaScript / تم التحويل إلى جافا سكربت
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Grid,
  InputAdornment,
  Chip,
} from "@mui/material";
import {
  Search,
  ChevronDown,
  BookOpen,
  MessageCircle,
  Mail,
  Phone,
  HelpCircle,
  FileText,
  Settings,
  Shield,
  Users,
} from "lucide-react";

const categories = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Getting Started",
    description: "New to SkillMate? Start here",
    articles: 12,
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Account Management",
    description: "Manage your profile and settings",
    articles: 8,
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Privacy & Security",
    description: "Keep your account secure",
    articles: 10,
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Technical Support",
    description: "Troubleshooting guides",
    articles: 15,
  },
];

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "Creating an account is easy! Click the 'Sign Up' button in the top right corner, fill in your details, and verify your email address. You'll then have access to all our features.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
  {
    question: "How can I become a mentor?",
    answer:
      "To become a mentor, you'll need to complete your profile, verify your expertise, and submit an application. We review all applications carefully to maintain high-quality standards.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee for all courses. If you're not satisfied with your learning experience, contact our support team for a full refund.",
  },
];

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(false);

  const handleFaqChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 py-12">
      <Container maxWidth="lg" className="mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <Typography
            variant="h2"
            className="font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
          >
            How can we help?
          </Typography>
          <Typography variant="h5" className="text-gray-600 mb-10 mt-3">
            Find answers, tutorials, and connect with our support team
          </Typography>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <TextField
              fullWidth
              placeholder="Search for help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white rounded-lg"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search className="text-gray-400" />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>

        {/* Help Categories */}
        <Grid container spacing={4} className="mb-12">
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.title}>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-blue-600 mb-2 text-center flex justify-center items-center ">{category.icon}</div>
                <Typography variant="h6" className="font-bold mb-4">
                  {category.title}
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-4">
                  {category.description}
                </Typography>
                <Chip
                  label={`${category.articles} articles`}
                  size="small"
                  className="bg-blue-50 text-blue-600 mt-2"
                />
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* FAQ Section */}
        <div className="mb-12 space-y-4">
          <Typography variant="h4" className="font-bold mb-6">
            Frequently Asked Questions
          </Typography>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expandedFaq === `panel${index}`}
                onChange={handleFaqChange(`panel${index}`)}
                className="border border-gray-200 rounded-lg shadow-sm"
              >
                <AccordionSummary
                  expandIcon={<ChevronDown />}
                  className="hover:bg-gray-50"
                >
                  <Typography className="font-semibold flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="text-gray-600">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <Card className="p-8 bg-gradient-to-r from-blue-600 to-violet-600 text-white ">
          <div className="text-center mb-8">
            <Typography variant="h4" className="font-bold mb-4 text-white">
              Still need help?
            </Typography>
            <Typography variant="body1 text-white">
              Our support team is available 24/7 to assist you
            </Typography>
          </div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card className="p-6 text-center h-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Mail className="w-8 h-8 mx-auto mb-4" />
                <Typography variant="h6" className="font-bold mb-2">
                  Email Support
                </Typography>
                <Typography variant="body2" className="mb-4">
                  Get a response within 24 hours
                </Typography>
                <Button
                  variant="contained"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Send Email
                </Button>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card className="p-6 text-center h-full bg-white/10 backdrop-blur-sm border border-white/20">
                <MessageCircle className="w-8 h-8 mx-auto mb-4" />
                <Typography variant="h6" className="font-bold mb-2">
                  Live Chat
                </Typography>
                <Typography variant="body2" className="mb-4">
                  Chat with us in real-time
                </Typography>
                <Button
                  variant="contained"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Start Chat
                </Button>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card className="p-6 text-center h-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Phone className="w-8 h-8 mx-auto mb-4" />
                <Typography variant="h6" className="font-bold mb-2">
                  Phone Support
                </Typography>
                <Typography variant="body2" className="mb-4">
                  Call us for urgent issues
                </Typography>
                <Button
                  variant="contained"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Call Now
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Card>

        {/* Help Resources */}
        <div className="mt-12 space-y-1">
          <Typography variant="h4" className="font-bold mb-4">
            Additional Resources
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card className="p-6">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <Typography variant="h6" className="font-bold mb-2">
                  Documentation
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-4">
                  Detailed guides and API references
                </Typography>
                <Button variant="text" className="text-blue-600">
                  View Docs
                </Button>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="p-6">
                <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
                <Typography variant="h6" className="font-bold mb-2">
                  Tutorials
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-4">
                  Step-by-step learning guides
                </Typography>
                <Button variant="text" className="text-blue-600">
                  Start Learning
                </Button>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="p-6">
                <Users className="w-8 h-8 text-blue-600 mb-4" />
                <Typography variant="h6" className="font-bold mb-2">
                  Community
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-4">
                  Join discussions and share knowledge
                </Typography>
                <Button variant="text" className="text-blue-600">
                  Join Forum
                </Button>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default HelpCenter;
