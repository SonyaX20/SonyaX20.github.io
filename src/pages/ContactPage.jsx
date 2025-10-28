import Contact from '../components/Contact';
import { Mail, MessageSquare, Phone, Linkedin } from 'lucide-react';

const ContactPage = () => {

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Always excited to hear about new opportunities :)
          </p>
        </div>

        {/* Availability Banner */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white text-center shadow-xl">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="text-2xl font-bold">Currently Available</span>
            </div>
            <p className="text-lg opacity-90">
              Seeking full-time Product Manager Intern positions in Berlin
            </p>
            <p className="text-sm opacity-80 mt-2">
              Immediate start • Flexible work arrangements • On-site, hybrid, remote
            </p>
          </div>
        </div>

        {/* Main Contact Component */}
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;


