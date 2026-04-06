import { Link } from 'react-router-dom';
import { SlotGame } from '../types';
import VolatilityBadge from './VolatilityBadge';
import { ExternalLink, ArrowRight, TrendingUp, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

interface SlotCardProps {
  slot: SlotGame;
  key?: string;
}

export default function SlotCard({ slot }: SlotCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
              {slot.name}
            </h3>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
              {slot.provider}
            </p>
          </div>
          <VolatilityBadge level={slot.volatility} size="sm" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1 flex items-center gap-1">
              <TrendingUp size={10} /> RTP
            </p>
            <p className="stat-value text-gray-900">{slot.rtp}%</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1 flex items-center gap-1">
              <DollarSign size={10} /> Max Win
            </p>
            <p className="stat-value text-gray-900">{slot.maxWin.toLocaleString()}x</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Link
            to={`/games/${slot.slug}`}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-bold bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            View Details <ArrowRight size={16} />
          </Link>
          <a
            href="https://platinumcasino.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-bold border border-red-600 text-red-600 hover:bg-red-50 transition-colors"
          >
            Play Now <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
