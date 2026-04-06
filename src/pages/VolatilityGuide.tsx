import { volatilityData } from '../data/volatility';
import { slots } from '../data/slots';
import VolatilityBadge from '../components/VolatilityBadge';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink,
  Target,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { motion } from 'motion/react';

export default function VolatilityGuide() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="bg-gray-900 text-white py-24 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-red-600 p-2 rounded-lg">
              <BookOpen size={24} />
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase">
              Volatility <span className="text-red-600">Guide</span>
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl font-medium leading-relaxed">
            Master the art of slot game risk management. Learn how volatility affects your gameplay, bankroll, and potential for massive wins.
          </p>
        </div>
      </section>

      {/* Main Guide Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {volatilityData.map((vol, idx) => (
              <motion.div
                key={vol.level}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
              >
                {/* Left Column: Info */}
                <div className="lg:col-span-5 space-y-8">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: vol.color }}
                    >
                      <span className="text-white font-display font-extrabold text-2xl uppercase tracking-tighter">
                        {vol.level[0]}
                      </span>
                    </div>
                    <h2 className="text-4xl font-display font-extrabold text-gray-900 uppercase tracking-tight">
                      {vol.level} <span className="text-gray-400">Volatility</span>
                    </h2>
                  </div>
                  
                  <p className="text-xl text-gray-500 font-medium leading-relaxed">
                    {vol.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                        <TrendingUp size={14} /> Win Frequency
                      </div>
                      <p className="font-bold text-gray-900">{vol.winFrequency}</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                        <Clock size={14} /> Playing Time
                      </div>
                      <p className="font-bold text-gray-900">{vol.playingTime}</p>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-3xl p-8 text-white">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-white/10 pb-4">
                      Best Suited For
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {vol.bestFor.map(item => (
                        <span key={item} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-bold border border-white/10">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Strategy */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="bg-white rounded-[2.5rem] border-4 border-gray-50 p-8 sm:p-12 shadow-sm">
                    <div className="flex items-center gap-3 mb-8">
                      <Target className="text-red-600" size={28} />
                      <h3 className="text-2xl font-display font-extrabold text-gray-900 uppercase tracking-tight">
                        Playing Strategy
                      </h3>
                    </div>
                    
                    <div className="space-y-10">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Bankroll Recommendation</h4>
                        <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                          <p className="text-red-900 font-extrabold text-2xl mb-2">{vol.bankrollRecommendation}</p>
                          <p className="text-red-700/70 text-sm font-medium leading-relaxed">
                            This is the ideal amount of units (bets) you should have to comfortably play slots at this volatility level.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Expert Strategy</h4>
                        <p className="text-gray-600 font-medium leading-relaxed text-lg italic">
                          "{vol.strategy}"
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Example Slots</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {slots
                            .filter(s => s.volatility === vol.level)
                            .slice(0, 4)
                            .map(s => (
                              <Link 
                                key={s.id} 
                                to={`/games/${s.slug}`}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-red-600 transition-all group"
                              >
                                <div>
                                  <p className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">{s.name}</p>
                                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{s.provider}</p>
                                </div>
                                <span className="text-red-600"><ArrowRight size={16} /></span>
                              </Link>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-[3rem] p-12 sm:p-20 text-center relative overflow-hidden shadow-2xl shadow-red-600/20">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <Zap size={400} className="translate-x-1/4 -translate-y-1/4 rotate-12" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white mb-8 uppercase tracking-tight leading-tight">
                Ready to apply your strategy?
              </h2>
              <p className="text-xl text-red-100 mb-12 font-medium leading-relaxed">
                Put your knowledge to the test at Platinum Casino. Use our volatility insights to pick the perfect game for your bankroll.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a
                  href="https://platinumcasino.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-red-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all shadow-xl"
                >
                  Play at Platinum Casino <ExternalLink size={20} className="ml-2 inline" />
                </a>
                <Link
                  to="/games"
                  className="bg-red-700 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-red-800 transition-all border border-red-500"
                >
                  Browse Games Database
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
