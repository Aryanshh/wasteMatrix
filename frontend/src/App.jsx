import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { Zap, Menu, X, ArrowRight, CheckCircle2, AlertTriangle, BarChart3, Network, Box, MapPin, ShieldCheck, Factory, LayoutGrid, ChevronRight, UserCircle, Settings, LogOut, ChevronDown, User } from 'lucide-react'

// Components
import MatchFeed from './components/MatchFeed'
import NetworkView from './components/NetworkView'
import AnalyticsView from './components/AnalyticsView'
import MapView from './components/MapView'
import LoginView from './components/LoginView'
import LandingView from './components/LandingView'
import UploadModal from './components/UploadModal'
import ProfileView from './components/ProfileView'
import SettingsView from './components/SettingsView'

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

  const getTitle = () => {
    switch(activeTab) {
      case 'matches': return 'Material Matches';
      case 'network': return 'Network Intelligence';
      case 'analytics': return 'Analytics Deep-Dive';
      case 'map': return 'Proximity Routing';
      case 'profile': return 'Node Identity Hub';
      case 'settings': return 'System Configuration';
      default: return 'WasteMatrix';
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-white relative">
      {/* Tier 1: Sidebar (z-100) */}
      <aside className="w-72 border-r border-charcoal-10 flex flex-col bg-slate-50 relative z-[100]">
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

      {/* Tier 2: Main Content (z-200) */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-50/10 relative z-[200]">
        {/* Tier 3: Header (z-1000) */}
        <header className="flex justify-between items-center p-10 pb-6 bg-white/50 backdrop-blur-md border-b border-charcoal-10 z-[1000] relative">
          <h2 className="font-['Anton'] text-5xl uppercase transition-all duration-500">
            {getTitle()}
          </h2>
          
          <div className="flex gap-8 items-center">
            <div className="hidden xl:flex px-8 py-4 border-2 border-charcoal rounded-2xl bg-white shadow-[4px_4px_0px_var(--charcoal)] items-center gap-4">
              <ShieldCheck className="text-primary" size={24} />
              <span className="text-[10px] font-black uppercase tracking-widest text-charcoal">Verified Hub</span>
            </div>
            
            {/* Command Capsule - High Fidelity Controls */}
            <div className="flex items-center bg-white border-[3px] border-charcoal rounded-full p-2 shadow-[8px_8px_0px_var(--charcoal)] hover:shadow-[10px_10px_0px_var(--charcoal)] transition-all">
              <div className="flex items-center px-6 py-3 gap-4 border-r-2 border-charcoal/10 cursor-pointer hover:bg-slate-50 transition-all rounded-l-full" onClick={() => setActiveTab('profile')}>
                <div className="h-10 w-10 bg-primary border-2 border-charcoal rounded-full flex items-center justify-center overflow-hidden">
                  <User size={22} className="text-charcoal" />
                </div>
                <div className="hidden lg:block text-left">
                  <div className="text-[10px] font-black uppercase tracking-widest text-charcoal leading-none">Node_8821</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 px-3">
                <button 
                  onClick={() => setActiveTab('profile')}
                  title="Profile" 
                  className={`p-4 rounded-full transition-all group ${activeTab === 'profile' ? 'bg-primary text-charcoal' : 'text-charcoal/30 hover:text-charcoal hover:bg-slate-50'}`}
                >
                  <UserCircle size={24} className="group-hover:scale-110 transition-transform" />
                </button>
                <button 
                  onClick={() => setActiveTab('settings')}
                  title="Settings" 
                  className={`p-4 rounded-full transition-all group ${activeTab === 'settings' ? 'bg-primary text-charcoal' : 'text-charcoal/30 hover:text-charcoal hover:bg-slate-50'}`}
                >
                  <Settings size={24} className="group-hover:rotate-45 transition-transform duration-500" />
                </button>
                <div className="w-[3px] h-8 bg-charcoal/10 mx-2"></div>
                <button 
                  onClick={() => navigate('/login')}
                  title="De-Authorize" 
                  className="p-4 text-red-500/40 hover:text-red-500 hover:bg-red-50 rounded-full transition-all group"
                >
                  <LogOut size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-scroll p-10 scroll-smooth custom-scroll relative">
          <div className="animate-fade-in pb-20">
            {activeTab === 'matches' && <MatchFeed />}
            {activeTab === 'network' && <NetworkView />}
            {activeTab === 'analytics' && <AnalyticsView />}
            {activeTab === 'map' && <MapView />}
            {activeTab === 'profile' && <ProfileView />}
            {activeTab === 'settings' && <SettingsView />}
          </div>
        </div>
      </main>

      {/* Tier 4: Modal (Global Front z-99999) */}
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
