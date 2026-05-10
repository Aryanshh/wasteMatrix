import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { Zap, Menu, X, ArrowRight, CheckCircle2, AlertTriangle, BarChart3, Network, Box, MapPin, ShieldCheck, Factory, LayoutGrid, ChevronRight } from 'lucide-react'

// Components
import MatchFeed from './components/MatchFeed'
import NetworkView from './components/NetworkView'
import AnalyticsView from './components/AnalyticsView'
import MapView from './components/MapView'
import LoginView from './components/LoginView'
import LandingView from './components/LandingView'
import UploadModal from './components/UploadModal'

// --- Site Loader ---
const SiteLoader = ({ onComplete }) => {
  const [statusIdx, setStatusIdx] = useState(0);
  const messages = ['[GRINDING SLAG...]', '[SMELTING FLY ASH...]', '[CALIBRATING NODES...]', '[BONDING POLYMERS...]', '[MAPPING FLUX...]'];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((prev) => (prev + 1) % messages.length);
    }, 600);
    
    const timer = setTimeout(onComplete, 3500);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

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
      </div>
    </div>
  );
};

// --- Dashboard Component ---
const Dashboard = ({ isAuthenticated }) => {
  const [activeTab, setActiveTab] = useState('matches');
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const navigate = useNavigate();

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <aside className="w-72 border-r border-charcoal-10 flex flex-col bg-slate-50">
        <div className="p-8 border-b border-charcoal-10">
          <div className="logo-display cursor-pointer flex items-center gap-2" onClick={() => navigate('/')}>
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
                onClick={() => setActiveTab(tab.id)}
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
          <button 
            onClick={() => setIsUploadOpen(true)}
            className="btn-brutal w-full py-4 text-xs tracking-widest"
          >
            Register Waste
          </button>
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

      {isUploadOpen && <UploadModal onClose={() => setIsUploadOpen(false)} />}
    </div>
  );
};

// --- Main App Component ---
function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if loader has already played this session
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('wm_loaded');
    if (hasLoaded) setLoading(false);
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('wm_loaded', 'true');
    setLoading(false);
  };

  if (loading) return <SiteLoader onComplete={handleLoaderComplete} />;

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<LandingView />} />
          <Route 
            path="/login" 
            element={
              <LoginView 
                onAuth={() => setIsAuthenticated(true)} 
              />
            } 
          />
          <Route 
            path="/dashboard" 
            element={<Dashboard isAuthenticated={isAuthenticated} />} 
          />
          {/* Redirect any dashboard sub-paths if needed */}
          <Route path="/dashboard/*" element={<Dashboard isAuthenticated={isAuthenticated} />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
