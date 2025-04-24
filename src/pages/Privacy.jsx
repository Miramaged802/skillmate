import React from "react";
import { Container, Typography, Card } from "@mui/material";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 py-12">
      <Container maxWidth="lg">
        <Card className="p-8">
          <div className="mb-8">
            <Typography
              variant="h3"
              className="font-bold mb-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
            >
              Privacy Policy
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Last Updated: April 11, 2025 (v1.0)
            </Typography>
          </div>

          <div className="prose max-w-none">
            <Typography variant="body1" className="text-gray-700 mb-6">
              This Privacy Policy describes how SkillMate ("we," "us," or "our")
              collects, uses, and shares your personal information when you use
              our website and services.
            </Typography>

            <Typography variant="h5" className="font-semibold mb-4">
              1. Information We Collect
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              We collect several types of information from and about users of
              our website, including:
            </Typography>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Personal identifiers (name, email address, phone number)</li>
              <li>
                Professional information (skills, experience, certifications)
              </li>
              <li>Usage data (how you interact with our services)</li>
              <li>
                Device information (IP address, browser type, operating system)
              </li>
              <li>Location data (if permitted by your device settings)</li>
            </ul>

            <Typography variant="h5" className="font-semibold mb-4">
              2. How We Collect Information
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              We collect information through:
            </Typography>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>
                Direct interactions (when you create an account or contact us)
              </li>
              <li>Automated technologies (cookies, web beacons)</li>
              <li>Third-party sources (with your permission)</li>
            </ul>

            <Typography variant="h5" className="font-semibold mb-4">
              3. How We Use Your Information
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              We use the information we collect to:
            </Typography>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Provide and improve our services</li>
              <li>Personalize your experience</li>
              <li>Communicate with you</li>
              <li>Process transactions</li>
              <li>Analyze usage patterns</li>
              <li>Prevent fraud and enhance security</li>
            </ul>

            <Typography variant="h5" className="font-semibold mb-4">
              4. Information Sharing and Disclosure
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              We may share your information with:
              <ul className="list-disc pl-6 mt-2">
                <li>Service providers who assist in our operations</li>
                <li>Professional advisers (lawyers, bankers, auditors)</li>
                <li>Law enforcement when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </Typography>

            <Typography variant="h5" className="font-semibold mb-4">
              5. Your Privacy Rights
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              Under GDPR and CCPA, you have the right to:
              <ul className="list-disc pl-6 mt-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </Typography>

            <Typography variant="h5" className="font-semibold mb-4">
              6. Data Security
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to
              protect your personal information. However, no method of
              transmission over the Internet or electronic storage is 100%
              secure.
            </Typography>

            <Typography variant="h5" className="font-semibold mb-4">
              7. International Data Transfers
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              for such transfers in accordance with applicable data protection
              laws.
            </Typography>

            <Typography variant="h5" className="font-semibold mb-4">
              8. Cookie Policy
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              We use cookies and similar tracking technologies to track activity
              on our service and hold certain information. You can instruct your
              browser to refuse all cookies or to indicate when a cookie is
              being sent.
            </Typography>

            <Typography variant="h5" className="font-semibold mb-4">
              9. Children's Privacy
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              Our service is not directed to children under 13. We do not
              knowingly collect personal information from children under 13. If
              we become aware that we have collected personal information from a
              child under 13, we will take steps to remove that information.
            </Typography>

            <Typography variant="h5" className="font-semibold mb-4">
              10. Changes to This Privacy Policy
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date.
            </Typography>

            <Typography variant="h5" className="font-semibold mb-4">
              11. Contact Us
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              If you have any questions about this Privacy Policy, please
              contact us at:
              <br />
              Email: privacy@skillmate.com
              <br />
              Address: 123 Privacy Street, San Francisco, CA 94105
            </Typography>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Privacy;
