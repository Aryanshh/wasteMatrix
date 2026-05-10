import React, { useState } from 'react';
import { Zap } from 'lucide-react';

const LoginView = ({ onAuth, setView }) => {
  const [mode, setMode] = useState('login');
  const [socialLoading, setSocialLoading] = useState(null);
  
  const handleSocialAction = (provider) => {
    setSocialLoading(provider);
    setTimeout(() => {
      onAuth();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-white" style={{ backgroundImage: 'radial-gradient(var(--charcoal) 1px, transparent 0)', backgroundSize: '40px 40px', opacity: 0.05 }}></div>
      
      <div className="bg-white border-[6px] border-charcoal rounded-[3.5rem] p-12 w-full max-w-2xl shadow-[30px_30px_0px_var(--charcoal)] relative z-10 animate-fade-in flex flex-col md:flex-row gap-16">
        
        {/* Left Side: Brand & Social Hub */}
        <div className="flex-1 flex flex-col justify-between border-b md:border-b-0 md:border-r border-charcoal/10 pb-12 md:pb-0 md:pr-16">
          <div>
            <div className="logo-display text-4xl mb-8 flex items-center gap-3 cursor-pointer" onClick={() => setView('landing')}>
              <Zap className="fill-primary text-primary" />
              WASTEMATRIX<span className="logo-period">.</span>
            </div>
            <h2 className="font-['Anton'] text-6xl uppercase mb-6 leading-tight">
              Industrial <br/>{mode === 'login' ? 'Nexus' : 'Registry'}
            </h2>
            <p className="text-[10px] font-black text-charcoal/30 uppercase tracking-[0.3em] leading-loose">
              SECURE MULTI-PARTY COMPUTATION ACTIVE
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-4">
            {/* Proper Google Format */}
            <button 
              onClick={() => handleSocialAction('google')}
              disabled={!!socialLoading}
              className="w-full flex items-center justify-center gap-4 py-5 border-[3px] border-charcoal rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:bg-slate-50 transition-all active:translate-y-1 bg-white shadow-[6px_6px_0px_var(--charcoal)]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.11c-.22-.67-.35-1.39-.35-2.11s.13-1.44.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.51 6.16-4.51z"/>
              </svg>
              {socialLoading === 'google' ? 'Authorizing Google Hub...' : 'Sign in with Google'}
            </button>
            
            {/* Proper Microsoft Format */}
            <button 
              onClick={() => handleSocialAction('microsoft')}
              disabled={!!socialLoading}
              className="w-full flex items-center justify-center gap-4 py-5 border-[3px] border-charcoal rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:bg-slate-50 transition-all active:translate-y-1 bg-white shadow-[6px_6px_0px_var(--charcoal)]"
            >
              <svg className="w-5 h-5" viewBox="0 0 23 23">
                <path fill="#f3f3f3" d="M0 0h23v23H0z"/>
                <path fill="#f35325" d="M1 1h10v10H1z"/>
                <path fill="#81bc06" d="M12 1h10v10H12z"/>
                <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                <path fill="#ffba08" d="M12 12h10v10H12z"/>
              </svg>
              {socialLoading === 'microsoft' ? 'Linking Microsoft AD...' : 'Sign in with Microsoft'}
            </button>
          </div>
        </div>

        {/* Right Side: Traditional Neural Form */}
        <div className="flex-[1.2] flex flex-col justify-center">
          <div className="space-y-8 mb-12">
            {mode === 'signup' && (
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/40">Company Legal Name</label>
                <input type="text" placeholder="Nordic Steel Works" className="input-brutal w-full text-sm border-[3px]" />
              </div>
            )}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/40">Industrial ID / Email</label>
              <input type="text" placeholder="WM-2026-NORDIC" className="input-brutal w-full text-sm border-[3px]" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/40">Neural Signature</label>
              <input type="password" placeholder="••••••••" className="input-brutal w-full text-sm border-[3px]" />
            </div>
          </div>

          <button onClick={onAuth} className="btn-brutal w-full py-6 text-sm tracking-[0.3em] border-[3px] shadow-[8px_8px_0px_var(--charcoal)]">
            {mode === 'login' ? 'Authorize Link' : 'Initialize Hub'}
          </button>
          
          <div className="mt-10 text-center">
            <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} className="text-[11px] font-black uppercase tracking-[0.1em] text-charcoal/40 hover:text-primary transition-colors underline underline-offset-8 decoration-2 decoration-primary">
              {mode === 'login' ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
