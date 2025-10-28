import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'Product Management',
      excerpt:
        'Exploring the transition from technical engineering to product management, and how my technical background helps me build better products.',
      date: 'October 15, 2025',
      readTime: '0 min read',
      category: 'Career',
      tags: ['Product Management', 'Career', 'Tech'],
      image: '🚀',
    },
    {
      title: 'Building AI Products',
      excerpt:
        'Key takeaways from managing AI-driven products, including challenges with model performance, A/B testing, and user feedback.',
      date: 'September 28, 2025',
      readTime: '0 min read',
      category: 'AI & ML',
      tags: ['AI', 'Product Management', 'Machine Learning'],
      image: '🤖',
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
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughts on product management, AI, technology
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts[0] && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-3xl p-8 md:p-12">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-semibold">
                    Featured Post
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
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

                    <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg">
                      <span>Read More</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
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
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Post Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                <span className="text-7xl">{post.image}</span>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
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
                      className="inline-flex items-center space-x-1 text-xs text-gray-500"
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
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="mt-16 text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
          <p className="text-gray-700 text-lg font-medium">
            📝 More articles coming soon... Personal documentation...
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;


