import {
  Target,
  Code,
  Wrench,
  Users,
  Languages,
  Zap,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Management Skills',
      icon: Target,
      skills: [
        'Agile methodologies, Scrum',
        'Full product lifecycle',
        'Cross-functional coordination',
        'Quantitative strategy'
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Development Skills',
      icon: Code,
      skills: [
        'Python, NodeJS, JavaScript, SQL',
        'AI/ML pipelines, PyTorch, LangChain',
        'Linux, GCP',
        'A/B testing',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Product Tools',
      icon: Wrench,
      skills: [
        'Figma UI prototyping',
        'Git version control',
        'Google Suite, Notion',
        'Data Analytics',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Core Competencies',
      icon: Zap,
      skills: [
        'Ownership mentality',
        'Proactive self-starter',
        'Resourceful troubleshooter',
        'Quick learner',
        'Clear communicator',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Languages',
      icon: Languages,
      skills: [
        'English (fluent, IELTS 7.5)',
        'German (proficient, DSH3)',
        'Chinese (native)',
      ],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        'Team collaboration',
        'Stakeholder management',
        'Problem-solving',
        'Adaptability',
      ],
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon Header */}
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.gradient} mb-4 group-hover:scale-110 transition-transform`}
              >
                <category.icon className="h-6 w-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>

              {/* Skills List - Fixed alignment and spacing */}
              <ul className="space-y-1.5">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <span className="text-purple-600 text-base leading-none">•</span>
                    <span className="text-base leading-tight">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
