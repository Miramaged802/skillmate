import React from "react";
import { Container, Typography, Card } from "@mui/material";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 py-12">
      <Container maxWidth="lg">
        <Card className="p-8">
          <div className="mb-8">
            <Typography
              variant="h3"
              className="font-bold mb-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
            >
              Terms of Service
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Last Updated: April 11, 2025 (v1.0)
            </Typography>
          </div>

          <div className="prose max-w-none">
            <Typography variant="h5" className="font-semibold mb-4">
              1. Agreement to Terms
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              By accessing or using SkillMate, you agree to be bound by these
              Terms of Service and all applicable laws and regulations. If you
              do not agree with any of these terms, you are prohibited from
              using or accessing this site.
            </Typography>

            <Typography variant="h5" className="font-semibold mb-4">
              2. Use License
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              Permission is granted to temporarily access the materials
              (information or software) on SkillMate's website for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may
              not:
            </Typography>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>
                Attempt to decompile or reverse engineer any software contained
                on the website
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transfer the materials to another person or "mirror" the
                materials on any other server
              </li>
            </ul>

            <Typography variant="h5" className="font-semibold mb-4">
              3. User Accounts
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              To access certain features of the platform, you must register for
              an account. You agree to provide accurate, current, and complete
              information during registration and to update such information to
              keep it accurate, current, and complete.
            </Typography>

            <Typography variant="h5" className="font-semibold mb-4">
              4. Intellectual Property
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              The Service and its original content, features, and functionality
              are owned by SkillMate and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property or proprietary rights laws.
            </Typography>

            <Typography variant="h5" className="font-semibold mb-4">
              5. User Content
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              By posting content on SkillMate, you grant us the right to use,
              modify, publicly perform, publicly display, reproduce, and
              distribute such content on and through the platform. You retain
              any and all rights to any content you submit, post, or display on
              or through the service.
            </Typography>

            <Typography variant="h5" className="font-semibold mb-4">
              6. Prohibited Activities
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              You may not access or use the Service for any purpose other than
              that for which we make the Service available. As a user of the
              Service, you agree not to:
            </Typography>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>
                Systematically retrieve data or content to create a collection,
                database, or directory
              </li>
              <li>Make any unauthorized use of the Service</li>
              <li>
                Interfere with or circumvent the security features of the
                Service
              </li>
              <li>
                Engage in unauthorized framing of or linking to the website
              </li>
              <li>
                Upload or transmit viruses, malware, or other malicious code
              </li>
            </ul>

            <Typography variant="h5" className="font-semibold mb-4">
              7. Disclaimer
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              The materials on SkillMate's website are provided on an 'as is'
              basis. SkillMate makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </Typography>

            <Typography variant="h5" className="font-semibold mb-4">
              8. Limitations
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              In no event shall SkillMate or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on the website, even if
              SkillMate or an authorized representative has been notified orally
              or in writing of the possibility of such damage.
            </Typography>

            <Typography variant="h5" className="font-semibold mb-4">
              9. Governing Law
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              These terms and conditions are governed by and construed in
              accordance with the laws of the United States and you irrevocably
              submit to the exclusive jurisdiction of the courts in that
              location.
            </Typography>

            <Typography variant="h5" className="font-semibold mb-4">
              10. Changes to Terms
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will
              provide at least 30 days' notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </Typography>

            <Typography variant="h5" className="font-semibold mb-4">
              11. Contact Information
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              If you have any questions about these Terms, please contact us at
              legal@skillmate.com.
            </Typography>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Terms;
