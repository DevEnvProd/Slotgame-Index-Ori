import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Search, Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'motion/react';

export default function Blog() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Gather categories
  const categories = useMemo(() => {
    const list = new Set(blogPosts.map((post) => post.category));
    return ['All', ...Array.from(list)];
  }, []);

  // Filter blog posts based on search and selected category
  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter((post) => {
        const matchesSearch =
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(search.toLowerCase());
        const matchesCategory =
          selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }, [search, selectedCategory]);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Blog Hero Header */}
      <section className="bg-gray-900 text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-red-600 p-2.5 rounded-lg text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                <path d="M6 6h10" />
                <path d="M6 10h10" />
                <path d="M13 14h3" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight uppercase">
              SlotGame <span className="text-red-600">Insights</span>
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl font-medium">
            Discover the latest trends, guides, tech updates, and dynamic game strategies in online casino entertainment.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all text-sm font-medium"
              />
            </div>

            {/* Category selection */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-2 flex items-center gap-1">
                <Tag size={12} /> Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                    selectedCategory === cat
                      ? 'bg-red-600 text-white border-red-600'
                      : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group h-full"
                >
                  {/* Card Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full border border-white/10">
                      {post.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {new Date(post.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 mb-3 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-gray-500 text-sm font-medium line-clamp-3 mb-6 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-100 text-red-600 font-extrabold text-xs rounded-full flex items-center justify-center">
                          {post.author[0]}
                        </div>
                        <span className="text-xs font-bold text-gray-700">{post.author}</span>
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                      >
                        Read Post <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-200">
              <p className="text-gray-500 font-medium text-lg mb-2">No articles match your search criteria.</p>
              <button
                onClick={() => {
                  setSearch('');
                  setSelectedCategory('All');
                }}
                className="text-red-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
