import { Shield, Info, Mail, Phone, MapPin, ExternalLink, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="bg-gray-900 text-white py-24 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-red-600 p-2 rounded-lg">
              <Info size={24} />
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight uppercase">
              About <span className="text-red-600">Us</span>
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl font-medium leading-relaxed">
            The SlotGame Index is the industry's most trusted database for slot game risk assessment and educational resources.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-gray-900 uppercase tracking-tight leading-tight">
                Our Mission: <br />
                <span className="text-red-600">Empowering Players</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                We believe that every player should understand the mathematical reality of the games they play. Our mission is to demystify slot volatility and provide clear, data-driven insights that help players make informed decisions based on their bankroll and risk tolerance.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-red-50 p-3 rounded-xl text-red-600 shrink-0 h-fit">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Unbiased Data</h3>
                    <p className="text-gray-500 font-medium">We analyze games based on official provider data and rigorous testing to ensure accuracy.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-red-50 p-3 rounded-xl text-red-600 shrink-0 h-fit">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Educational Focus</h3>
                    <p className="text-gray-500 font-medium">We don't just list numbers; we explain what they mean for your gameplay and bankroll.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-red-50 p-3 rounded-xl text-red-600 shrink-0 h-fit">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Strategic Insights</h3>
                    <p className="text-gray-500 font-medium">Our volatility-based strategies are designed to help you play longer and smarter.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-red-600/5 rounded-[3rem] blur-3xl pointer-events-none"></div>
              <div className="relative bg-white rounded-[3rem] border-4 border-gray-50 p-12 shadow-2xl">
                <div className="flex items-center gap-4 mb-12">
                  <div className="bg-red-600 text-white p-3 rounded-2xl">
                    <Shield size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-gray-900 uppercase tracking-tight">
                    Methodology
                  </h3>
                </div>
                <div className="space-y-8">
                  <p className="text-gray-600 font-medium leading-relaxed">
                    Our volatility ratings are determined by a combination of factors:
                  </p>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Win Frequency</span>
                      <span className="font-bold text-gray-900">Hit Rate %</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Max Win Potential</span>
                      <span className="font-bold text-gray-900">X-Multiplier</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Bonus Frequency</span>
                      <span className="font-bold text-gray-900">Avg. Spins to Trigger</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Standard Deviation</span>
                      <span className="font-bold text-gray-900">Payout Variance</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 font-medium italic">
                    *We use official provider data where available and supplement with our own simulation testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 mb-6 uppercase tracking-tight">
              Get in Touch
            </h2>
            <p className="text-gray-500 font-medium text-lg">
              Have questions about a specific slot or want to partner with us? Reach out to our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 text-center shadow-sm hover:shadow-xl transition-all">
              <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-tight">Email Us</h3>
              <p className="text-gray-500 font-medium mb-4 text-sm">Our team typically responds within 24 hours.</p>
              <a href="mailto:contact@slotvolatility.com" className="text-red-600 font-bold hover:text-red-700 transition-colors">contact@slotvolatility.com</a>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 text-center shadow-sm hover:shadow-xl transition-all">
              <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-tight">Call Us</h3>
              <p className="text-gray-500 font-medium mb-4 text-sm">Available Mon-Fri, 9am - 5pm GMT.</p>
              <a href="tel:+1234567890" className="text-red-600 font-bold hover:text-red-700 transition-colors">+1 (234) 567-890</a>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 text-center shadow-sm hover:shadow-xl transition-all">
              <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-tight">Visit Us</h3>
              <p className="text-gray-500 font-medium mb-4 text-sm">Our headquarters in London.</p>
              <p className="text-gray-900 font-bold">123 Casino Way, London, UK</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] p-12 sm:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600 via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-8 uppercase tracking-tight leading-tight">
                Partner with the Index
              </h2>
              <p className="text-xl text-gray-400 mb-12 font-medium leading-relaxed">
                Are you a casino operator or game provider? Join our network of trusted partners and reach thousands of informed slot players.
              </p>
              <a
                href="https://platinumcasino.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-600/20"
              >
                Become a Partner <ExternalLink size={20} className="ml-2 inline" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
