import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { ArrowLeft, Calendar, Clock, User, ArrowRight, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Find other similar articles
  const recommendations = blogPosts
    .filter((p) => p.id !== post.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-red-600 transition-colors uppercase tracking-widest"
          >
            <ArrowLeft size={14} /> Back to Insights
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <article className="pt-12 sm:pt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Post Metadata Header */}
        <header className="mb-10 text-center sm:text-left">
          <span className="inline-block bg-red-100 text-red-700 text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-gray-900 mb-6 leading-tight uppercase">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 text-sm text-gray-500 font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-100 text-red-600 font-extrabold text-xs rounded-full flex items-center justify-center">
                {post.author[0]}
              </div>
              <span className="text-gray-700">{post.author}</span>
            </div>
            <div className="h-4 w-px bg-gray-200 hidden sm:block"></div>
            <span className="flex items-center gap-1.5">
              <Calendar size={16} />{' '}
              {new Date(post.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <div className="h-4 w-px bg-gray-200 hidden sm:block"></div>
            <span className="flex items-center gap-1.5">
              <Clock size={16} /> {post.readTime}
            </span>
          </div>
        </header>

        {/* Feature Image */}
        <div className="rounded-[2rem] overflow-hidden aspect-[21/9] bg-gray-100 mb-12 shadow-md">
          <img
            src={post.imageUrl}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main article content text */}
          <div className="lg:col-span-8">
            <div
              className="prose prose-red max-w-none prose-headings:font-display prose-headings:uppercase text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Platform disclaimer */}
            <div className="mt-12 p-6 bg-red-50 rounded-2xl border border-red-100 flex gap-4">
              <div className="shrink-0 text-red-600">
                <ShieldAlert size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">
                  Gaming Responsibility
                </h4>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  Information provided on SlotGame Index is strictly for informational and educational use. Always verify terms and conditions on platform portals directly before wagering. Play within your bounds.
                </p>
              </div>
            </div>
          </div>

          {/* Side Panel Recommendations */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                Recommended Reading
              </h3>
              <div className="space-y-6">
                {recommendations.map((rec) => (
                  <Link
                    key={rec.id}
                    to={`/blog/${rec.slug}`}
                    className="block group border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-red-600 block mb-1">
                      {rec.category}
                    </span>
                    <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 text-sm leading-snug mb-2">
                      {rec.title}
                    </h4>
                    <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                      {rec.readTime}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
