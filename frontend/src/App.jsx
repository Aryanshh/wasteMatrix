import React, { useState, useEffect } from 'react'
import { Zap, Menu, X, ArrowRight, CheckCircle2, AlertTriangle, BarChart3, Network, Box, MapPin, ShieldCheck, Factory, LayoutGrid, ChevronRight } from 'lucide-react'
import MatchFeed from './components/MatchFeed'
import NetworkView from './components/NetworkView'
import AnalyticsView from './components/AnalyticsView'
import LoginView from './components/LoginView'

// --- Sub-Components (Defined Outside App for Stability) ---

const SiteLoader = ({ messages }) => {
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((prev) => (prev + 1) % messages.length);
    }, 600);
    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute animate-fall text-charcoal/5"
              style={{ 
                left: `${Math.random() * 100}%`, 
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              <Box size={24 + Math.random() * 24} />
            </div>
          ))}
        </div>
        <div className="text-center z-10 flex flex-col items-center justify-center min-h-screen w-full">
          <div className="flex flex-col items-center gap-6">
            <div className="px-8 py-3 bg-white border-2 border-charcoal rounded-2xl shadow-[4px_4px_0px_var(--charcoal)]">
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-charcoal animate-pulse">
                {messages[statusIdx]}
              </span>
            </div>
            <div className="w-64 h-3 bg-slate-100 border-2 border-charcoal rounded-full overflow-hidden relative">
              <div className="absolute inset-y-0 left-0 bg-primary animate-progress-fill"></div>
            </div>
            <div className="text-[12px] font-black uppercase tracking-[0.8em] text-charcoal/20 flex items-center gap-2 mt-2">
              LOADING<span className="animate-ping">...</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-32 bg-primary/5 blur-3xl animate-pulse"></div>
      </div>
    </div>
  );
};


const LandingHeader = ({ setView, enterPlatform }) => (
  <header className="header-fixed flex items-center justify-between px-10">
    <div className="logo-display flex items-center gap-2 cursor-pointer" onClick={() => setView('landing')}>
      <Zap className="fill-primary text-primary" size={24} />
      WASTEMATRIX<span className="logo-period">.</span>
    </div>
    
    <div className="flex items-center gap-6">
      <a href="#" onClick={enterPlatform} className="text-xs font-black uppercase tracking-[0.2em] hidden sm:block hover:underline">Login</a>
      <button onClick={enterPlatform} className="btn-pill px-8">Enter Platform</button>
    </div>
  </header>
);

const Hero = ({ enterPlatform }) => (
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
      <button onClick={enterPlatform} className="btn-brutal flex items-center justify-center gap-2">
        Match Now <ArrowRight size={20} />
      </button>
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

const FinalCTA = ({ enterPlatform }) => (
  <section className="bg-[var(--primary)] py-32 px-6 relative overflow-hidden">
    <div className="absolute inset-0 font-['Anton'] text-[20vw] uppercase opacity-5 select-none pointer-events-none">MATRIXXXX</div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="headline-brutal mb-10">Ready to <span className="highlight-box">Scale?</span></h2>
      <p className="text-xl font-bold mb-12">Join 450+ factories optimizing their secondary material flows today.</p>
      <button onClick={enterPlatform} className="btn-brutal bg-[var(--charcoal)] text-white border-white px-12">Enter The Platform</button>
    </div>
  </section>
);

const DashboardView = ({ activeTab, navigateTo, setView }) => (
  <div className="flex h-screen overflow-hidden bg-white">
    <aside className="w-72 border-r border-charcoal-10 flex flex-col bg-slate-50">
      <div className="p-8 border-b border-charcoal-10">
        <div className="logo-display cursor-pointer flex items-center gap-2" onClick={() => setView('landing')}>
          <Zap className="fill-primary text-primary" size={20} />
          WASTEMATRIX<span className="logo-period">.</span>
        </div>
      </div>
      <nav className="flex-1 p-6 flex flex-col gap-6">
        {[
          { id: 'matches', label: 'Match Feed', icon: LayoutGrid },
          { id: 'network', label: 'Network', icon: Network },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 },
          { id: 'map', label: 'Proximity Map', icon: MapPin },
        ].map(tab => {
          const Icon = tab.icon
          return (
            <button 
              key={tab.id}
              onClick={() => navigateTo(tab.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-full font-bold uppercase text-[11px] tracking-[0.15em] transition-all border-2 ${
                activeTab === tab.id 
                  ? 'bg-primary border-charcoal text-charcoal shadow-[4px_4px_0px_var(--charcoal)]' 
                  : 'bg-white border-charcoal-10 text-charcoal/40 hover:border-primary hover:text-charcoal'
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          )
        })}
      </nav>
      <div className="p-6 border-t border-charcoal-10">
        <button className="btn-brutal w-full py-4 text-xs tracking-widest">Register Waste</button>
      </div>
    </aside>

    <main className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-50/10">
      <header className="flex justify-between items-center p-10 pb-6 bg-white/50 backdrop-blur-md border-b border-charcoal-10 z-20">
        <h2 className="font-['Anton'] text-5xl uppercase">
          {activeTab === 'matches' ? 'Material Matches' : activeTab === 'network' ? 'Network Intelligence' : activeTab === 'analytics' ? 'Analytics Deep-Dive' : 'Proximity Routing'}
        </h2>
        <div className="flex gap-4">
          <div className="px-6 py-3 border-2 border-charcoal rounded-2xl bg-white shadow-[4px_4px_0px_var(--charcoal)] flex items-center gap-3">
            <ShieldCheck className="text-primary" size={20} />
            <span className="text-[10px] font-black uppercase tracking-widest">Verified Industrial Hub</span>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-scroll p-10 scroll-smooth custom-scroll relative">
        <div className="animate-fade-in pb-20">
          {activeTab === 'matches' && <MatchFeed />}
          {activeTab === 'network' && <NetworkView />}
          {activeTab === 'analytics' && <AnalyticsView />}
          {activeTab === 'map' && <MapView />}
        </div>
      </div>
    </main>
  </div>
);

// --- Main App Component ---

function App() {
  const [view, setView] = useState('loader');
  const [activeTab, setActiveTab] = useState('matches');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const messages = ['[GRINDING SLAG...]', '[SMELTING FLY ASH...]', '[CALIBRATING NODES...]', '[BONDING POLYMERS...]', '[MAPPING FLUX...]'];

  useEffect(() => {
    const syncRoute = () => {
      if (view === 'loader') return;
      
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validTabs = ['matches', 'network', 'analytics', 'map'];
      
      if (validTabs.includes(hash)) {
        setView(isAuthenticated ? 'app' : 'login');
        setActiveTab(hash);
        return;
      } 
      
      // Only force landing if explicitly requested or if we are unauthenticated and on an empty hash
      if (hash === 'landing' || (hash === '' && !isAuthenticated && view === 'app')) {
        setView('landing');
      }
      
      // If authenticated and on empty hash, default to matches
      if (isAuthenticated && hash === '' && view === 'app') {
        window.location.hash = '#/matches';
      }
    };
    window.addEventListener('hashchange', syncRoute);
    syncRoute();
    return () => window.removeEventListener('hashchange', syncRoute);
  }, [view, isAuthenticated]);

  useEffect(() => {
    if (view === 'loader') {
      const timer = setTimeout(() => setView('landing'), 3500);
      return () => clearTimeout(timer);
    }
  }, [view]);

  const enterPlatform = () => {
    if (!isAuthenticated) setView('login');
    else setView('app');
  };

  const navigateTo = (tabId) => {
    if (!isAuthenticated) setView('login');
    else window.location.hash = `#/${tabId}`;
  };

  return (
    <div className="min-h-screen">
      {view === 'loader' && <SiteLoader messages={messages} />}
      {view === 'login' && <LoginView onAuth={() => { setIsAuthenticated(true); setView('app'); }} setView={setView} />}
      {view === 'landing' && (
        <>
          <LandingHeader setView={setView} enterPlatform={enterPlatform} />
          <main>
            <Hero enterPlatform={enterPlatform} />
            <ProblemSolution />
            <FeatureBento />
            <FinalCTA enterPlatform={enterPlatform} />
          </main>
          <footer className="py-10 border-t border-[var(--charcoal)]/10 text-center text-xs font-bold uppercase tracking-widest opacity-30">
            © 2026 WasteMatrix AI Platform. Built for the Circular Economy.
          </footer>
        </>
      )}
      {view === 'app' && <DashboardView activeTab={activeTab} navigateTo={navigateTo} setView={setView} />}
    </div>
  );
}

export default App;
