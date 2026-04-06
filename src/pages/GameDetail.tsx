import { useParams, Link, Navigate } from 'react-router-dom';
import { slots } from '../data/slots';
import { volatilityData } from '../data/volatility';
import VolatilityBadge from '../components/VolatilityBadge';
import { 
  ArrowLeft, 
  ExternalLink, 
  TrendingUp, 
  DollarSign, 
  Coins, 
  Info, 
  CheckCircle2, 
  Zap,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

export default function GameDetail() {
  const { slug } = useParams<{ slug: string }>();
  const slot = slots.find(s => s.slug === slug);

  if (!slot) {
    return <Navigate to="/games" replace />;
  }

  const volInfo = volatilityData.find(v => v.level === slot.volatility)!;

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Breadcrumbs & Back */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/games" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-red-600 transition-colors uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Database
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-grow">
              <div className="flex items-center gap-4 mb-6">
                <VolatilityBadge level={slot.volatility} size="lg" />
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  {slot.provider}
                </span>
              </div>
              <h1 className="text-5xl sm:text-7xl font-display font-extrabold text-gray-900 mb-6 tracking-tight uppercase">
                {slot.name}
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-medium mb-10">
                {slot.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://platinumcasino.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-600/20"
                >
                  Play at Platinum Casino <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="w-full lg:w-96 shrink-0">
              <div className="bg-gray-900 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 border-b border-white/10 pb-4">
                  Game Statistics
                </h3>
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/10 p-2 rounded-lg text-red-500">
                        <TrendingUp size={20} />
                      </div>
                      <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">RTP</span>
                    </div>
                    <span className="stat-value text-2xl">{slot.rtp}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/10 p-2 rounded-lg text-red-500">
                        <DollarSign size={20} />
                      </div>
                      <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">Max Win</span>
                    </div>
                    <span className="stat-value text-2xl">{slot.maxWin.toLocaleString()}x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/10 p-2 rounded-lg text-red-500">
                        <Coins size={20} />
                      </div>
                      <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">Bet Range</span>
                    </div>
                    <span className="stat-value text-lg">${slot.minBet} - ${slot.maxBet}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Strategy Tips */}
              <div>
                <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-8 uppercase tracking-tight flex items-center gap-3">
                  <Zap className="text-red-600" size={28} /> Strategy Tips
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {slot.strategyTips.map((tip, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4">
                      <div className="shrink-0">
                        <CheckCircle2 className="text-green-500" size={24} />
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volatility Analysis */}
              <div>
                <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-8 uppercase tracking-tight flex items-center gap-3">
                  <Info className="text-red-600" size={28} /> Volatility Analysis
                </h2>
                <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 sm:p-12">
                  <div className="flex flex-col sm:flex-row gap-8 items-start mb-12">
                    <div 
                      className="w-24 h-24 rounded-3xl flex items-center justify-center shrink-0 shadow-lg"
                      style={{ backgroundColor: volInfo.color }}
                    >
                      <span className="text-white font-display font-extrabold text-3xl uppercase tracking-tighter">
                        {slot.volatility[0]}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 uppercase tracking-tight">
                        {slot.volatility} Volatility Profile
                      </h3>
                      <p className="text-gray-500 font-medium leading-relaxed max-w-xl">
                        {volInfo.description} This game is best suited for {volInfo.bestFor.join(', ')}.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Bankroll Strategy</h4>
                      <p className="text-gray-900 font-bold text-lg mb-2">{volInfo.bankrollRecommendation}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{volInfo.strategy}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Risk Assessment</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500 font-medium">Win Frequency</span>
                          <span className="font-bold text-gray-900">{volInfo.winFrequency}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500 font-medium">Playing Time</span>
                          <span className="font-bold text-gray-900">{volInfo.playingTime}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500 font-medium">Risk Level</span>
                          <span className="font-bold text-gray-900">{volInfo.riskLevel}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="text-red-600" size={24} />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-red-900">Expert Recommendation</h3>
                </div>
                <p className="text-red-800 font-bold text-lg mb-4">Best Place to Play</p>
                <p className="text-red-700/70 text-sm font-medium mb-8 leading-relaxed">
                  We recommend playing {slot.name} at Platinum Casino for the best RTP settings and fastest payouts.
                </p>
                <a
                  href="https://platinumcasino.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-bold bg-red-600 text-white hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
                >
                  Visit Platinum Casino <ExternalLink size={16} />
                </a>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Similar Slots</h3>
                <div className="space-y-4">
                  {slots
                    .filter(s => s.volatility === slot.volatility && s.id !== slot.id)
                    .slice(0, 3)
                    .map(s => (
                      <Link 
                        key={s.id} 
                        to={`/games/${s.slug}`}
                        className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-red-600 transition-all group"
                      >
                        <div>
                          <p className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">{s.name}</p>
                          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{s.provider}</p>
                        </div>
                        <span className="text-red-600"><ArrowLeft size={16} className="rotate-180" /></span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
