import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="font-display font-extrabold text-xl tracking-tight text-white uppercase">
                SlotGame <span className="text-red-600">Index</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              The ultimate database for slot game volatility. We help you understand the risk and reward of your favorite games so you can play smarter.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-500 transition-colors"><Mail size={20} /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Phone size={20} /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><MapPin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-red-500 transition-colors">Home</Link></li>
              <li><Link to="/games" className="hover:text-red-500 transition-colors">Games Database</Link></li>
              <li><Link to="/volatility-guide" className="hover:text-red-500 transition-colors">Volatility Guide</Link></li>
              <li><Link to="/blog" className="hover:text-red-500 transition-colors">Insights (Blog)</Link></li>
              <li><Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Volatility Levels</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/volatility-guide" className="hover:text-green-500 transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> Low Volatility
              </Link></li>
              <li><Link to="/volatility-guide" className="hover:text-yellow-500 transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Medium Volatility
              </Link></li>
              <li><Link to="/volatility-guide" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span> High Volatility
              </Link></li>
              <li><Link to="/volatility-guide" className="hover:text-red-500 transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span> Extreme Volatility
              </Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} SlotGame Index. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Responsible Gaming</a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-[10px] text-gray-600 max-w-2xl mx-auto uppercase tracking-tighter">
            Gambling can be addictive. Please play responsibly. 18+ Only. SlotGame Index is an independent database and educational platform.
          </p>
        </div>
      </div>
    </footer>
  );
}
