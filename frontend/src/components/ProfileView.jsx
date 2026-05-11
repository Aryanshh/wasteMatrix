import React from 'react'
import { User, ShieldCheck, Zap, Box, MapPin, Calendar, Award, ArrowUpRight } from 'lucide-react'

export default function ProfileView() {
  const stats = [
    { label: 'Active Streams', val: '14', icon: Box },
    { label: 'Synergy Matches', val: '128', icon: Zap },
    { label: 'Network Rank', val: 'Top 5%', icon: Award },
  ]

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      {/* Header Profile Card */}
      <div className="bg-white border-4 border-charcoal rounded-[4rem] p-12 shadow-[16px_16px_0px_var(--charcoal)] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-bl-[10rem] -mr-20 -mt-20 group-hover:bg-primary/20 transition-all duration-700"></div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
          <div className="h-48 w-48 bg-primary border-[6px] border-charcoal rounded-[3rem] flex items-center justify-center shadow-xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <User size={120} className="text-charcoal fill-charcoal/10" />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
              <span className="px-4 py-1 bg-charcoal text-primary text-[10px] font-black uppercase tracking-[0.4em] rounded-full">Industrial Node</span>
              <span className="px-4 py-1 bg-slate-100 text-charcoal/40 text-[10px] font-black uppercase tracking-[0.4em] rounded-full flex items-center gap-2">
                <ShieldCheck size={12} /> Verified
              </span>
            </div>
            <h1 className="font-['Anton'] text-7xl uppercase text-charcoal leading-none mb-4">Node_8821</h1>
            <p className="text-[12px] font-bold text-charcoal/40 uppercase tracking-[0.3em] max-w-xl">
              Senior Material Flux Coordinator at SteelCycle Foundry Group. <br/>Managing 1.2M Tonnes of annual industrial secondary stream.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <button className="btn-brutal px-10 py-5 text-[10px] tracking-[0.3em] flex items-center gap-3">
              Edit Credentials <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white border-4 border-charcoal rounded-[3rem] p-10 hover:translate-y-[-8px] transition-all duration-500 group cursor-pointer shadow-xl">
            <div className="h-16 w-16 bg-slate-50 border-2 border-charcoal rounded-2xl flex items-center justify-center text-charcoal group-hover:bg-primary transition-all mb-8">
              <stat.icon size={32} />
            </div>
            <div className="font-['Anton'] text-6xl text-charcoal mb-2">{stat.val}</div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/30">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Industrial Timeline & Metadata */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-slate-900 text-white rounded-[4rem] p-12 border-4 border-charcoal shadow-2xl relative overflow-hidden group">
          <div className="absolute top-10 right-10 text-primary opacity-20 group-hover:rotate-12 transition-transform duration-700">
            <Zap size={120} />
          </div>
          <h3 className="font-['Anton'] text-4xl uppercase mb-10">Industrial Metadata</h3>
          <div className="space-y-8">
            {[
              { label: 'Current Location', val: 'Copenhagen, Nordic Corridor', icon: MapPin },
              { label: 'Member Since', val: 'February 2024', icon: Calendar },
              { label: 'Neural Accuracy', val: '99.2%', icon: Zap },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 border-b border-white/5 pb-6">
                <div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center text-primary">
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-1">{item.label}</div>
                  <div className="text-sm font-bold uppercase tracking-widest">{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary p-12 rounded-[4rem] border-4 border-charcoal shadow-xl">
          <h3 className="font-['Anton'] text-4xl uppercase text-charcoal mb-10">Stream Certifications</h3>
          <div className="grid grid-cols-2 gap-6">
            {['REACH COMPLIANT', 'GHS LEVEL 4', 'ISO 14001', 'CIRCULAR HUB A+'].map((cert, i) => (
              <div key={i} className="bg-white border-2 border-charcoal p-6 rounded-[2rem] flex flex-col items-center justify-center text-center group hover:bg-charcoal hover:text-white transition-all cursor-pointer">
                <ShieldCheck size={32} className="mb-4 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-[10px] font-black uppercase tracking-widest leading-tight">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
