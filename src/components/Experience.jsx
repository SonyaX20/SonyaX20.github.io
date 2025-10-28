import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import figmaIcon from '../assets/figma.svg';
import pythonIcon from '../assets/python.png';
import langchainIcon from '../assets/langchain.webp';
import dashboardIcon from '../assets/dashboard.png';

const Experience = () => {
  const experiences = [
    {
      company: 'Beijing Guoke Zhongan Technology Co., Ltd.',
      role: 'AI Product Manager Intern',
      duration: 'May 2025 – July 2025',
      location: 'Beijing, China',
      achievements: [
        'Built project dashboards to track roadmap and milestone progress, and delivered project presentations to senior management and external stakeholders',
        'Cooperated with development teams to conduct A/B testing on AI product performance',
        'Research and integrated React Agent into existing product workflows, evaluated technical feasibility and performance impact',
        'Collaborated with frontend teams to design product prototypes in Figma',
        'Performed customer studies to shape feature prioritization'
      ],
      icons: [
        { src: dashboardIcon, alt: 'Dashboard' },
        { src: pythonIcon, alt: 'Python' },
        { src: langchainIcon, alt: 'LangChain' },
        { src: figmaIcon, alt: 'Figma' },
      ]
    },
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-purple-600 font-semibold mb-3">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Briefcase className="h-5 w-5 text-purple-600" />
                  <span className="font-medium">Internship</span>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-6 text-gray-600">
                <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                  <Calendar className="h-4 w-4 text-purple-600" />
                  <span className="text-sm">{exp.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-purple-600" />
                  <span className="text-sm">{exp.location}</span>
                </div>
              </div>

              {/* Achievements and Icons Container */}
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Achievements - 70% width */}
                <div className="lg:w-[70%] space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Icons - 30% width, 2x2 grid, more compact */}
                <div className="lg:w-[25%] grid grid-cols-2 gap-0">
                  {exp.icons.map((icon, idx) => (
                    <div
                      key={idx}
                      className="w-full aspect-square flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <img 
                        src={icon.src} 
                        alt={icon.alt}
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
