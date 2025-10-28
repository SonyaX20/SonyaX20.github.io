import { ExternalLink, Github, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: '---',
      description:
        '---',
      tech: ['---'],
      image: '📱',
      featured: true,
      award: '---',
    },
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center relative">
                <span className="text-7xl">{project.image}</span>
                {project.award && (
                  <div className="absolute top-3 right-3 bg-yellow-400 rounded-full p-2 shadow-lg">
                    <Award className="h-5 w-5 text-yellow-900" />
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-purple-600">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-xs font-medium text-purple-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium">
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                  <button className="p-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
                    <Github className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            <span>View All Projects</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
