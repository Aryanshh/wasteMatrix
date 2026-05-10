import React from 'react';
import { Zap, ArrowRight, X, CheckCircle2, MapPin, ShieldCheck, Network, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingHeader = () => (
  <header className="header-fixed flex items-center justify-between px-10">
    <Link to="/" className="logo-display flex items-center gap-2">
      <Zap className="fill-primary text-primary" size={24} />
      WASTEMATRIX<span className="logo-period">.</span>
    </Link>
    
    <div className="flex items-center gap-6">
      <Link to="/login" className="text-xs font-black uppercase tracking-[0.2em] hidden sm:block hover:underline">Login</Link>
      <Link to="/login" className="btn-pill px-8">Enter Platform</Link>
    </div>
  </header>
);

const Hero = () => (
  <section className="py-40 px-6 max-w-7xl mx-auto flex flex-col items-center text-center animate-fade-in">
    <div className="badge-brutal">
      <div className="dot-indicator"></div>
      Live Industrial Intelligence
    </div>
    <h1 className="headline-brutal mb-10">
      TURNING INDUSTRIAL <br />
      WASTE INTO <span className="highlight-box">REVENUE</span>
    </h1>
    <p className="max-w-xl text-lg font-medium text-[var(--charcoal)]/80 mb-12">
      The high-contrast AI matching engine for industrial secondary materials. 
      Connect, negotiate, and scale your circular economy in seconds.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mb-24">
      <input type="text" placeholder="Your material (e.g. Fly Ash)" className="input-brutal flex-1" />
      <Link to="/login" className="btn-brutal flex items-center justify-center gap-2">
        Match Now <ArrowRight size={20} />
      </Link>
    </div>
  </section>
);

const ProblemSolution = () => (
  <section className="flex flex-col md:flex-row border-y-4 border-charcoal relative">
    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary opacity-10 hidden md:block"></div>
    <div className="flex-1 bg-charcoal text-white p-12 md:p-24 relative overflow-hidden group">
      <div className="absolute top-10 left-10 border-2 border-red-500 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-red-500 transform -rotate-3 select-none">
        Legacy Systems
      </div>
      <h2 className="font-['Anton'] text-6xl md:text-8xl uppercase mb-12 opacity-50 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2">
        The <br/>Old Way
      </h2>
      <ul className="space-y-8 relative z-10">
        {['Manual matching via spreadsheets', 'High logistics overhead', 'Undefined material quality', 'Compliance blindspots'].map((item, i) => (
          <li key={i} className="flex items-center gap-6 text-[var(--sage)] opacity-70 font-bold uppercase text-xs tracking-widest">
            <div className="h-8 w-8 rounded-full border-2 border-red-500 border-opacity-30 flex items-center justify-center text-red-500">
              <X size={16} />
            </div> 
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex-1 bg-dark-gray p-12 md:p-24 relative overflow-hidden group border-t-4 md:border-t-0 md:border-l-4 border-primary">
      <div className="absolute top-10 right-10 bg-primary px-4 py-1 text-[10px] font-black uppercase tracking-widest text-black transform rotate-3 select-none shadow-[4px_4px_0px_white]">
        Synergy-Active
      </div>
      <h2 className="font-['Anton'] text-6xl md:text-8xl uppercase mb-12 text-white transform group-hover:-translate-x-2 transition-all duration-500">
        The <br/><span className="text-primary">Matrix</span> Way
      </h2>
      <ul className="space-y-8 relative z-10 text-white">
        {['AI-Powered chemical matching', 'Real-time logistics routing', 'Verified industrial profiles', 'Regulatory automation'].map((item, i) => (
          <li key={i} className="flex items-center gap-6 font-black uppercase text-xs tracking-[0.2em]">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-black shadow-[0_0_15px_var(--primary)]">
              <CheckCircle2 size={16} />
            </div> 
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const FeatureBento = () => (
  <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
    <h2 className="headline-brutal text-center mb-20">Intelligence <span className="highlight-box">Infrastructure</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-300">
      <div className="md:col-span-2 bg-slate-50 border border-charcoal-10 p-10 rounded-2xl flex flex-col justify-between hover:border-primary transition-all duration-300">
        <div>
          <h3 className="font-['Anton'] text-4xl uppercase mb-4">Chemical Fingerprinting</h3>
          <p className="max-w-md font-medium text-charcoal/70">Our AI analyzes the elemental composition of your waste to find the perfect industrial receiver.</p>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-2 flex-1 bg-primary opacity-20 rounded-full overflow-hidden"><div className="h-full bg-primary w-3/4"></div></div>)}
        </div>
      </div>
      <div className="bg-slate-50 border border-charcoal-10 p-10 rounded-2xl flex flex-col justify-between hover:border-primary transition-all duration-300">
        <MapPin size={40} className="text-primary" />
        <h3 className="font-['Anton'] text-3xl uppercase">Proximity <br/>Routing</h3>
      </div>
      <div className="bg-slate-50 border border-charcoal-10 p-10 rounded-2xl flex flex-col justify-between hover:border-primary transition-all duration-300">
        <ShieldCheck size={40} className="text-primary" />
        <h3 className="font-['Anton'] text-3xl uppercase">Compliance <br/>Vault</h3>
      </div>
      <div className="md:col-span-2 bg-slate-50 border border-charcoal-10 p-10 rounded-2xl flex flex-col justify-between hover:border-primary transition-all duration-300">
        <div className="flex justify-between items-start">
          <h3 className="font-['Anton'] text-4xl uppercase">Network Statistics</h3>
          <Network className="text-primary" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[{ val: '1.2M', label: 'Tonnes Matched' }, { val: 'Nordic', label: 'Region Hub' }, { val: '92%', label: 'Avg. Compatibility' }].map(stat => (
            <div key={stat.label} className="p-4 border border-charcoal-10 rounded-lg text-center">
              <div className="font-['Anton'] text-2xl uppercase">{stat.val}</div>
              <div className="text-[8px] font-black uppercase tracking-widest opacity-50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="bg-[var(--primary)] py-32 px-6 relative overflow-hidden">
    <div className="absolute inset-0 font-['Anton'] text-[20vw] uppercase opacity-5 select-none pointer-events-none">MATRIXXXX</div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="headline-brutal mb-10">Ready to <span className="highlight-box">Scale?</span></h2>
      <p className="text-xl font-bold mb-12">Join 450+ factories optimizing their secondary material flows today.</p>
      <Link to="/login" className="btn-brutal bg-[var(--charcoal)] text-white border-white px-12">Enter The Platform</Link>
    </div>
  </section>
);

export default function LandingView() {
  return (
    <>
      <LandingHeader />
      <main>
        <Hero />
        <ProblemSolution />
        <FeatureBento />
        <FinalCTA />
      </main>
      <footer className="py-10 border-t border-[var(--charcoal)]/10 text-center text-xs font-bold uppercase tracking-widest opacity-30">
        © 2026 WasteMatrix AI Platform. Built for the Circular Economy.
      </footer>
    </>
  );
}
