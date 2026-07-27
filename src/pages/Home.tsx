import { Link } from 'react-router-dom';
import { slots } from '../data/slots';
import { volatilityData } from '../data/volatility';
import { blogPosts } from '../data/blog';
import SlotCard from '../components/SlotCard';
import VolatilityBadge from '../components/VolatilityBadge';
import { Search, ArrowRight, ShieldCheck, Zap, TrendingUp, Info, ExternalLink, Calendar, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const featuredSlots = slots.slice(0, 4);
  const latestSlots = slots.slice(4, 10);
  
  // Sort and grab 3 latest articles
  const latestArticles = [...blogPosts]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 3);


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 text-white py-24 sm:py-32">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-7xl font-display font-extrabold tracking-tight mb-6 leading-tight">
                KNOW YOUR RISK.<br />
                <span className="text-red-600">CHOOSE YOUR SLOT.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                The most comprehensive slot game volatility index. Data-driven insights to help you match your bankroll with the right game.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/games"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/20"
                >
                  Explore Database <ArrowRight size={20} />
                </Link>
                <Link
                  to="/volatility-guide"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all"
                >
                  Volatility Guide <Info size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Volatility Guide Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 mb-4 uppercase tracking-tight">
              Understanding Volatility
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Volatility determines how often and how much a slot pays out. Choose the level that fits your playing style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {volatilityData.map((vol, idx) => (
              <motion.div
                key={vol.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6">
                  <VolatilityBadge level={vol.level} size="lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{vol.level} Risk</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  {vol.description}
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                    <span>Win Frequency</span>
                    <span className="text-gray-900">{vol.winFrequency}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                    <span>Risk Level</span>
                    <span className="text-gray-900">{vol.riskLevel}</span>
                  </div>
                </div>
                <Link
                  to="/volatility-guide"
                  className="text-sm font-bold text-red-600 hover:text-red-700 flex items-center gap-1 transition-colors group-hover:gap-2"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Slots */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 mb-4 uppercase tracking-tight">
                Featured Slots
              </h2>
              <p className="text-gray-500 font-medium">
                Our top picks for each volatility category.
              </p>
            </div>
            <Link
              to="/games"
              className="text-red-600 font-bold hover:text-red-700 flex items-center gap-2 transition-colors border-b-2 border-red-600/20 hover:border-red-600 pb-1"
            >
              View All Games <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredSlots.map((slot) => (
              <SlotCard key={slot.id} slot={slot} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Slots */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 mb-4 uppercase tracking-tight">
              Latest Additions
            </h2>
            <p className="text-gray-500 font-medium">
              Recently analyzed slot games in our database.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestSlots.map((slot) => (
              <SlotCard key={slot.id} slot={slot} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/games"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-800 transition-all shadow-lg"
            >
              Browse Full Database <Database size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Insights Blog Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 mb-4 uppercase tracking-tight">
                Latest Insights & Strategy
              </h2>
              <p className="text-gray-500 font-medium">
                Expert tips, industry analysis, and guides to help you understand slot mechanics.
              </p>
            </div>
            <Link
              to="/blog"
              className="text-red-600 font-bold hover:text-red-700 flex items-center gap-2 transition-colors border-b-2 border-red-600/20 hover:border-red-600 pb-1 uppercase text-sm tracking-wider"
            >
              View All Articles <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group h-full"
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-gray-100 overflow-hidden relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-gray-900/85 backdrop-blur-md text-white text-[9px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full border border-white/10">
                    {post.category}
                  </span>
                </div>

                {/* Info body */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-3">
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

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-xs font-medium line-clamp-2 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-red-600 uppercase tracking-widest">
                    <span>Read Article</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Database({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}
