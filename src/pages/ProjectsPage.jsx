import { useState } from 'react';
import { ExternalLink, Github, Award, Filter } from 'lucide-react';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'E-commerce Analytics System',
      description:
        'Comprehensive data analytics platform for e-commerce businesses with predictive modeling capabilities. Built as capstone project with real-world data integration. Features include customer segmentation, sales forecasting, and automated reporting.',
      longDescription:
        'This system integrates multiple data sources to provide real-time analytics and insights. Implemented machine learning models for predictive analytics and customer behavior analysis.',
      tech: ['Python', 'Machine Learning', 'SQL', 'Data Visualization', 'Pandas', 'Scikit-learn'],
      image: '📊',
      category: 'data-science',
      date: 'July 2023',
      github: '#',
      demo: '#',
      featured: true,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai-ml', name: 'AI & ML' },
    { id: 'web', name: 'Web Development' },
    { id: 'data-science', name: 'Data Science' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects in AI, product management, 
            and full-stack development. Represents unique challenges and learning experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Filter className="h-5 w-5 text-purple-600 self-center" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500">{project.date}</span>
                </div>

                {project.award && (
                  <div className="mb-3 flex items-center space-x-2 text-xs text-orange-600 font-semibold">
                    <Award className="h-4 w-4" />
                    <span>{project.award}</span>
                  </div>
                )}

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-xs font-medium text-purple-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                  >
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.github}
                    className="p-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;


