import { lazy, Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ArrowRight } from 'lucide-react';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

// Import images
import me0 from '../assets/me0.png';
import me1 from '../assets/me1.png';
import me4 from '../assets/me4.png';
import me5 from '../assets/me5.png';
import me6 from '../assets/me6.png';
import me9 from '../assets/me9.png';

// Lazy load the animation component
const Hero3D = lazy(() => import('../components/Hero3D'));

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position to -1 to 1 range
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Create parallax effect values for different layers
  const parallaxLayers = {
    slow: {
      x: mousePosition.x * 10,
      y: mousePosition.y * 10,
    },
    medium: {
      x: mousePosition.x * 20,
      y: mousePosition.y * 20,
    },
    fast: {
      x: mousePosition.x * 30,
      y: mousePosition.y * 30,
    },
  };

  // Timeline sections configuration
  const sections = [
    { id: 'experience', title: 'Experience', component: <Experience /> },
    { id: 'skills', title: 'Skills', component: <Skills /> },
    { id: 'about', title: 'About Me', component: <AboutEducationCombined /> },
    { id: 'projects', title: 'Projects', component: <Projects /> },
    { id: 'contact', title: 'Get In Touch', component: <Contact /> },
  ];

  return (
    <div className="pt-16 overflow-hidden bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section with full-page parallax */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content with parallax */}
            <motion.div
              className="z-10 space-y-6"
              style={{
                transform: `translate(${parallaxLayers.slow.x}px, ${parallaxLayers.slow.y}px)`,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <motion.h1
                className="text-5xl lg:text-8xl font-bold leading-tight tracking-tight mt-4"
                style={{
                  transform: `translate(${parallaxLayers.slow.x}px, ${parallaxLayers.slow.y}px)`,
                }}
              >
                <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Sonja Xiao
                </span>
              </motion.h1>

              <motion.h2
                className="text-3xl lg:text-5xl font-bold leading-tight"
                style={{
                  transform: `translate(${parallaxLayers.slow.x}px, ${parallaxLayers.slow.y}px)`,
                }}
              >
                <span className="text-gray-900">Product & Strategy</span>
              </motion.h2>

              <motion.p
                className="text-xl text-purple-600 font-semibold"
                style={{
                  transform: `translate(${parallaxLayers.slow.x}px, ${parallaxLayers.slow.y}px)`,
                }}
              >
                Computer Engineering M.Sc. | AI Native 
              </motion.p>

              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-xl"
                style={{
                  transform: `translate(${parallaxLayers.slow.x}px, ${parallaxLayers.slow.y}px)`,
                }}
              >
                Berlin-based product enthusiast with a unique blend of technical expertise 
                and product management experience. I specialize in driving AI-powered solutions 
                from concept to deployment, leveraging data-driven insights to create exceptional 
                user experiences.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                style={{
                  transform: `translate(${parallaxLayers.medium.x}px, ${parallaxLayers.medium.y}px)`,
                }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors"
                >
                  <span>Contact Me</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Lottie Animation with parallax */}
            <motion.div
              className="hidden lg:block h-[600px]"
              style={{
                transform: `translate(${parallaxLayers.medium.x}px, ${parallaxLayers.medium.y}px)`,
              }}
            >
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-600"></div>
                  </div>
                }
              >
                <Hero3D />
              </Suspense>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator - 2x bigger, no text */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="w-32 h-32">
            <DotLottieReact
              src="https://lottie.host/e3013d14-ec22-4ed4-bdca-fcb003cf7906/n4rWrA1wiW.lottie"
              loop={false}
              autoplay
            />
          </div>
        </motion.div>

        {/* Decorative Background Elements with parallax */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          style={{
            transform: `translate(${parallaxLayers.fast.x}px, ${parallaxLayers.fast.y}px)`,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
          style={{
            transform: `translate(${parallaxLayers.slow.x * -1}px, ${parallaxLayers.slow.y * -1}px)`,
          }}
        />
        <motion.div
          className="absolute top-40 left-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
          style={{
            transform: `translate(${parallaxLayers.medium.x}px, ${parallaxLayers.medium.y * -1}px)`,
          }}
        />
      </section>

      {/* Timeline Sections */}
      <div className="relative">
        {/* Fixed Timeline Navigation - Right Side */}
        <TimelineNavigation sections={sections} activeSection={activeSection} />

        {/* Timeline Sections */}
        {sections.map((section, index) => (
          <TimelineSection
            key={section.id}
            id={section.id}
            title={section.title}
            index={index}
            totalSections={sections.length}
            onInView={setActiveSection}
          >
            {section.component}
          </TimelineSection>
        ))}
      </div>
    </div>
  );
};

// Timeline Navigation Component - Moved to Right Side, Fixed text flickering
const TimelineNavigation = ({ sections, activeSection }) => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Hide when near bottom (within 200px of end)
      setIsAtBottom(scrollTop + windowHeight >= documentHeight - 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isAtBottom) return null;

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative space-y-8">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex items-center justify-end group"
            >
              {/* Label - appears on hover or when active, positioned to the left */}
              <div
                className={`mr-4 px-3 py-1 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-600 text-white opacity-100' 
                    : 'bg-white text-gray-600 opacity-0 group-hover:opacity-100'
                }`}
              >
                <span className="text-sm font-medium whitespace-nowrap">
                  {section.title}
                </span>
              </div>

              {/* Dot with connecting line */}
              <div className="relative">
                {/* Vertical line to next dot */}
                {index < sections.length - 1 && (
                  <div className="absolute top-4 left-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent transform -translate-x-1/2" />
                )}
                
                {/* Dot */}
                <div
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-blue-600 ring-4 ring-blue-200 scale-125' 
                      : 'bg-gray-300 group-hover:bg-blue-400'
                  }`}
                />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

// Timeline Section Component
const TimelineSection = ({ id, title, children, index, totalSections, onInView }) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          onInView(id);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(id);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [id, onInView]);

  return (
    <div id={id} className="relative min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        </motion.div>

        {/* Section Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : 30 
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

// Combined About & Education Component - Fixed photo positions, simple hover
const AboutEducationCombined = () => {
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

  // Photo configuration - Fixed positions and sizes
  const photos = [
    {
      src: me0, // mountain
      top: '40%',
      left: '30%',
      width: '180px',
      height: '220px',
      rotate: -6,
      scale: 1.2,
      zIndex: 25,
    },
    {
      src: me1, // freiburg
      top: '30%',
      left: '8%',
      width: '200px',
      height: '240px',
      rotate: -1,
      scale: 1.3,
      zIndex: 40,
    },
    {
      src: me4, //travel
      top: '0%',
      left: '25%',
      width: '160px',
      height: '200px',
      rotate: -7,
      scale: 2.4,
      zIndex: 1,
    },
    {
      src: me5, // working
      bottom: '45%',
      right: '10%',
      width: '220px',
      height: '320px',
      rotate: 5,
      scale: 1.7,
      zIndex: 18,
    },
    {
      src: me6, //head
      bottom: '30%',
      left: '40%',
      width: '170px',
      height: '210px',
      rotate: 0,
      scale: 0.9,
      zIndex: 22,
    },
    {
      src: me9, // snow
      bottom: '5%',
      right: '10%',
      width: '175px',
      height: '215px',
      rotate: 4,
      scale: 1.6,
      zIndex: 22,
    },
  ];

  return (
    <div className="py-8 space-y-16">
      {/* First Row: About Text (Left) + Photo Collage (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: About Text */}
        <div>
          <About />
        </div>

        {/* Right: Photo Collage - Fixed positions, simple hover */}
        <div className="relative h-[500px] hidden lg:block">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="absolute rounded-2xl overflow-hidden"
              style={{
                top: photo.top,
                bottom: photo.bottom,
                left: photo.left,
                right: photo.right,
                width: photo.width,
                height: photo.height,
                zIndex: photo.zIndex,
                transform: `rotate(${photo.rotate}deg) scale(${photo.scale})`,
              }}
              whileHover={{ 
                opacity: 0.9,
                transition: { duration: 0.2 }
              }}
            >
              <img 
                src={photo.src}
                alt={`Sonia Xiao ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Second Row: Education (Master Left, Bachelor Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <EducationCard key={index} edu={edu} />
        ))}
      </div>
    </div>
  );
};

// Education Card Component
const EducationCard = ({ edu }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
      {/* School Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">
            {edu.school}
          </h4>
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
  );
};

export default Home;
