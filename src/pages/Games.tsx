import React from 'react';
import { slots } from '../data/slots';
import SlotCard from '../components/SlotCard';
import { Search, Filter, SlidersHorizontal, X, Database } from 'lucide-react';
import { VolatilityLevel } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function Games() {
  const [search, setSearch] = React.useState('');
  const [volatilityFilter, setVolatilityFilter] = React.useState<VolatilityLevel | 'All'>('All');
  const [providerFilter, setProviderFilter] = React.useState<string | 'All'>('All');
  const [sortBy, setSortBy] = React.useState<'Popularity' | 'RTP' | 'Max Win'>('Popularity');

  const providers = Array.from(new Set(slots.map(s => s.provider)));
  const volatilities: (VolatilityLevel | 'All')[] = ['All', 'Low', 'Medium', 'High', 'Extreme'];

  const filteredSlots = slots
    .filter(slot => {
      const matchesSearch = slot.name.toLowerCase().includes(search.toLowerCase()) || 
                           slot.provider.toLowerCase().includes(search.toLowerCase());
      const matchesVolatility = volatilityFilter === 'All' || slot.volatility === volatilityFilter;
      const matchesProvider = providerFilter === 'All' || slot.provider === providerFilter;
      return matchesSearch && matchesVolatility && matchesProvider;
    })
    .sort((a, b) => {
      if (sortBy === 'Popularity') return b.popularity - a.popularity;
      if (sortBy === 'RTP') return b.rtp - a.rtp;
      if (sortBy === 'Max Win') return b.maxWin - a.maxWin;
      return 0;
    });

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-red-600 p-2 rounded-lg">
              <Database size={24} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight uppercase">
              Games <span className="text-red-600">Database</span>
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl font-medium">
            Search and filter through our comprehensive database of analyzed slot games.
          </p>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search slot name or provider..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all text-sm font-medium"
              />
              {search && (
                <button 
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mr-2">
                <Filter size={14} /> Filters:
              </div>
              
              <select
                value={volatilityFilter}
                onChange={(e) => setVolatilityFilter(e.target.value as any)}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-red-600/20"
              >
                {volatilities.map(v => (
                  <option key={v} value={v}>{v} Volatility</option>
                ))}
              </select>

              <select
                value={providerFilter}
                onChange={(e) => setProviderFilter(e.target.value)}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-red-600/20"
              >
                <option value="All">All Providers</option>
                {providers.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>

              <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mr-2">
                <SlidersHorizontal size={14} /> Sort:
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-red-600/20"
              >
                <option value="Popularity">Popularity</option>
                <option value="RTP">Highest RTP</option>
                <option value="Max Win">Max Win</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Showing <span className="text-gray-900">{filteredSlots.length}</span> results
            </p>
            {(search || volatilityFilter !== 'All' || providerFilter !== 'All') && (
              <button
                onClick={() => {
                  setSearch('');
                  setVolatilityFilter('All');
                  setProviderFilter('All');
                }}
                className="text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-widest flex items-center gap-1"
              >
                Clear All <X size={14} />
              </button>
            )}
          </div>

          {filteredSlots.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredSlots.map((slot) => (
                  <SlotCard key={slot.id} slot={slot} />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-24 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-200">
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                <Search size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 uppercase tracking-tight">No slots found</h3>
              <p className="text-gray-500 font-medium">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      {/* Play at Platinum Banner */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[2rem] p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600 via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-6 uppercase tracking-tight">
                Ready to play for real?
              </h2>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
                Take your volatility knowledge to the reels at Platinum Casino. Enjoy the best selection of high and extreme volatility slots.
              </p>
              <a
                href="https://platinumcasino.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-600/20"
              >
                Play at Platinum Casino <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArrowRight({ size, className }: { size: number, className?: string }) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
