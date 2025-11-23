import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "How AI is reshaping the product role · Highlights",
      excerpt:
        "Highlights from 'How AI is reshaping the product role | Oji and Ezinne Udezue' on Lenny's Podcast — covering how AI changes the PM role, the core skills needed, and the Shipyard model.",
      date: 'November 16, 2025',
      readTime: '3 min read',
      category: 'Product Management',
      tags: ['AI', 'Product Management', 'Podcast'],
      image: '🎧',
      link: '/blog/ai-pm-podcast-summary',
    },
    {
      title: 'The Art of Founder-Led Sales: Building Trust Through Vulnerability and Value',
      excerpt:
        "Podcast summary and reflective essay on Jen Abel's framework for founder-led sales: avoiding unqualified prospects, selling services before software, and turning sales into a learning engine.",
      date: 'November 23, 2025',
      readTime: '8 min read',
      category: 'Sales & Go-to-Market',
      tags: ['Founder-Led Sales', 'B2B', 'Podcast'],
      image: '📈',
      link: '/blog/founder-led-sales',
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Blog & Insights
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notes and reflections on product management and AI
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts[0] && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-amber-400 via-orange-500 to-amber-700 rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-3xl p-8 md:p-12">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-full text-xs font-semibold">
                    Featured Post
                  </span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">
                    {blogPosts[0].category}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{blogPosts[0].date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                    </div>

                    {blogPosts[0].link && (
                      <Link
                        to={blogPosts[0].link}
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    )}
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-9xl">{blogPosts[0].image}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100"
            >
              {/* Post Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-amber-300 via-orange-400 to-amber-600 flex items-center justify-center">
                <span className="text-7xl">{post.image}</span>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center space-x-1 text-xs text-amber-800/80"
                    >
                      <Tag className="h-3 w-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Button */}
                {post.link && (
                  <Link
                    to={post.link}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;


