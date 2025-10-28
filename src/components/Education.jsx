import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      school: 'Technical University of Berlin',
      degree: 'Master of Science in Computer Engineering',
      duration: 'Oct 2023 - Present',
      location: 'Berlin, Germany',
      coursework: [
        'Natural Language Processing',
        'Hybrid Systems',
        'Deep Learning',
        'Computer Vision',
        'Image Processing',
        'Computer Security',
        'Cloud Computing',
        'Business Research',
      ],
      highlight: 'Focus on AI and Machine Learning',
    },
    {
      school: 'Beijing Jiaotong University',
      degree: 'Bachelor of Science in Computer Science',
      duration: 'Sept 2019 - Jul 2023',
      location: 'Beijing, China',
      coursework: [
        'Statistics',
        'Data Structures',
        'Algorithms Principles',
        'Database Systems',
        'Software Engineering',
        'Operating Systems',
        'Computer Networks',
        'Compiler Design',
        'Computer Graphics',
        'Web Development',
        'Project Management',
      ],
      highlight: 'Capstone: E-commerce Analytics System',
      award: '1st Prize, National Innovation Competition',
    },
  ];

  return (
    <div className="py-8">
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            {/* School Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {edu.school}
                </h3>
                <p className="text-purple-600 font-semibold text-sm">
                  {edu.degree}
                </p>
              </div>
              <div className="p-2 bg-white rounded-lg shadow-md">
                <GraduationCap className="h-5 w-5 text-purple-600" />
              </div>
            </div>

            {/* Duration & Location */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3 text-gray-600 text-xs">
              <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                <Calendar className="h-3 w-3 text-purple-600" />
                <span>{edu.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>{edu.location}</span>
              </div>
            </div>

            {/* Highlight */}
            <div className="bg-purple-50 rounded-lg p-2 mb-3">
              <p className="text-xs font-semibold text-purple-600">
                {edu.highlight}
              </p>
            </div>

            {/* Award if present */}
            {edu.award && (
              <div className="flex items-center space-x-2 mb-3 p-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg">
                <Award className="h-4 w-4 text-orange-600" />
                <span className="text-xs font-semibold text-orange-900">
                  {edu.award}
                </span>
              </div>
            )}

            {/* Coursework */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <BookOpen className="h-3 w-3 text-purple-600" />
                <span className="text-xs font-semibold text-gray-900">
                  Key Coursework
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-white rounded-full text-xs text-gray-700 border border-purple-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
