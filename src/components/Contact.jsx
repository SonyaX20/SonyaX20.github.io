import { Mail, Phone, MapPin, Linkedin, Download } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'siyux1927@gmail.com',
      link: 'mailto:siyux1927@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+49-15231499333',
      link: 'tel:+4915231499333',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Berlin 10178, Germany',
      link: null,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'sonja-xiao-37347a241',
      link: 'https://linkedin.com/in/sonja-xiao-37347a241',
    },
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm currently seeking full-time Product Manager Intern opportunities in Berlin. 
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">
                        {item.label}
                      </p>
                      <p className="text-gray-900 group-hover:text-purple-600 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                      <item.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">
                        {item.label}
                      </p>
                      <p className="text-gray-900">{item.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Download CV Button */}
          <div className="mt-8">
            <button className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg">
              <Download className="h-5 w-5" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Availability Notice */}
          <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 rounded-lg">
            <p className="text-green-900 font-semibold text-sm">
              ✓ Available for immediate start
            </p>
            <p className="text-green-800 text-sm mt-1">
              Seeking full-time Product Manager Intern roles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
