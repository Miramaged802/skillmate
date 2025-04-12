// import React from "react";
// import { Link } from "react-router-dom";
// import { Twitter, Linkedin, Facebook } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="col-span-1 md:col-span-2">
//             <Link
//               to="/"
//               className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
//             >
//               SkillMate
//             </Link>
//             <p className="mt-4 text-gray-600 max-w-md">
//               A platform connecting skilled professionals with opportunities
//             </p>
//           </div>

//           <div>
//             <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
//               Quick Links
//             </h3>
//             <ul className="space-y-4">
//               <li>
//                 <Link to="/about" className="text-gray-600 hover:text-blue-600">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/contact"
//                   className="text-gray-600 hover:text-blue-600"
//                 >
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/terms" className="text-gray-600 hover:text-blue-600">
//                   Terms
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
//               Connect
//             </h3>
//             <ul className="space-y-4">
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
//                   <Twitter size={16} />
//                   Twitter
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
//                   <Linkedin size={16} />
//                   LinkedIn
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
//                   <Facebook size={16} />
//                   Facebook
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-8 pt-8 border-t border-gray-200">
//           <p className="text-center text-gray-500 text-sm">
//             © {new Date().getFullYear()} SkillMate. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              SkillMate
            </h3>
            <p className="text-gray-400">Your Skills Are Your Currency</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-100">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-100">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-100">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} SkillMate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
