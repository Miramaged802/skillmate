import React from 'react';
import { Button } from '@mui/material';
import { ArrowRight, Code, PieChart, Palette } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-violet-600 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Your Skills Are Your Currency
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50">
              Connect, learn, and grow with a community of skilled professionals
            </p>
          
          </div>
        </div>
      </section>

      {/* Featured Groups */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Featured Groups
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeaturedCard
              icon={<Code className="w-8 h-8" />}
              title="Python Development"
              description="Join our Python community to learn, share, and collaborate on projects."
              members={1200}
            />
            <FeaturedCard
              icon={<PieChart className="w-8 h-8" />}
              title="Data Analytics"
              description="Master data analysis tools and techniques with fellow analysts."
              members={850}
            />
            <FeaturedCard
              icon={<Palette className="w-8 h-8" />}
              title="UI/UX Design"
              description="Connect with designers and learn modern design principles."
              members={950}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-shadow duration-300">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Join Groups
              </h3>
              <p className="text-gray-600">
                Find groups that match your skills or interests
              </p>
            </div>
            <div className="p-6 group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-shadow duration-300">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Connect
              </h3>
              <p className="text-gray-600">
                Engage with other members and share knowledge
              </p>
            </div>
            <div className="p-6 group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-shadow duration-300">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Grow</h3>
              <p className="text-gray-600">
                Learn new skills and advance your career
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeaturedCard = ({ icon, title, description, members }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
      <div className="text-blue-600 mb-4 bg-gradient-to-br from-blue-50 to-violet-50 p-3 rounded-lg inline-block">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{members} members</span>
        <Button
          endIcon={<ArrowRight className="w-4 h-4" />}
          className="text-blue-600 hover:text-violet-600 transition-colors duration-300"
        >
          Join
        </Button>
      </div>
    </div>
  );
};

export default Home;