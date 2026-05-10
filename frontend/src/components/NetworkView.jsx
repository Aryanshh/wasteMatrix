import React from 'react'
import { Activity, Zap, TrendingUp, ShieldCheck, ArrowUpRight, Globe, BarChart3, Layers, Database } from 'lucide-react'

export default function NetworkView() {
  const activity = [
    { from: "EcoCement Hub", to: "SteelCycle Foundry", material: "Fly Ash", qty: "450t", status: "Active" },
    { from: "Bio-Polymer Works", to: "Nordic Plastics", material: "Ethylene", qty: "120t", status: "Verified" },
    { from: "Metals Refinery", to: "EcoCement Hub", material: "Slag", qty: "800t", status: "Active" },
    { from: "Metals Refinery", to: "SteelCycle Foundry", material: "Iron Scrap", qty: "200t", status: "In-Transit" },
  ]

  return (
    <div className="space-y-16 animate-fade-in pb-20">
      {/* Network Hero Stats - Clean Grid Calibration */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Active Material Flows', val: '1,240', icon: Zap, trend: '+12%', color: 'primary' },
          { label: 'CO2 Avoided (Tonnes)', val: '4,520', icon: Globe, trend: '+8.4%', color: 'primary' },
          { label: 'Total Cost Savings', val: '$1.2M', icon: TrendingUp, trend: '+15.2%', color: 'primary' },
        ].map((stat, i) => (
          <div key={i} className="bg-white border-2 border-charcoal/10 rounded-[2.5rem] p-12 hover:border-charcoal transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[5rem] -mr-10 -mt-10 group-hover:bg-primary transition-colors duration-500"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                <stat.icon size={28} className="text-charcoal/20 group-hover:text-charcoal transition-colors" />
                <span className="text-[11px] font-black text-primary tracking-widest">{stat.trend}</span>
              </div>
              <div className="font-['Anton'] text-8xl text-charcoal mb-4 tracking-tighter leading-none">{stat.val}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-charcoal/30 group-hover:text-charcoal transition-colors">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Industrial Data Corridor */}
      <div className="bg-white border-2 border-charcoal/10 rounded-[3rem] overflow-hidden shadow-2xl relative">
        <div className="p-10 border-b-2 border-slate-50 flex justify-between items-center bg-slate-50/50">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-charcoal rounded-2xl text-primary">
              <Activity size={24} />
            </div>
            <h3 className="font-['Anton'] text-4xl uppercase tracking-tight">Live Network Activity</h3>
          </div>
          <button className="text-[10px] font-black uppercase tracking-[0.3em] px-8 py-3 border-2 border-charcoal rounded-full hover:bg-charcoal hover:text-white transition-all">
            View All Streams
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/30 text-[10px] font-black uppercase tracking-[0.4em] text-charcoal/20">
                <th className="py-8 px-10 border-r border-slate-50">Origin Hub</th>
                <th className="py-8 px-10 border-r border-slate-50">Receiver Hub</th>
                <th className="py-8 px-10 border-r border-slate-50">Material Flux</th>
                <th className="py-8 px-10">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-50">
              {activity.map((flow, i) => (
                <tr key={i} className="group hover:bg-slate-50/80 transition-all">
                  <td className="py-10 px-10">
                    <div className="font-black text-xs text-charcoal uppercase tracking-widest mb-1">{flow.from}</div>
                    <div className="text-[9px] font-bold text-charcoal/30 uppercase tracking-widest">Certified Node</div>
                  </td>
                  <td className="py-10 px-10 border-l border-slate-50">
                    <div className="font-black text-xs text-charcoal uppercase tracking-widest mb-1">{flow.to}</div>
                    <div className="text-[9px] font-bold text-charcoal/30 uppercase tracking-widest">Active Sink</div>
                  </td>
                  <td className="py-10 px-10 border-l border-slate-50">
                    <div className="flex flex-col">
                      <span className="text-xs font-black uppercase text-primary tracking-[0.2em] mb-1">{flow.material}</span>
                      <span className="text-[10px] font-bold text-charcoal uppercase tracking-tighter">{flow.qty} / QUARTER</span>
                    </div>
                  </td>
                  <td className="py-10 px-10 border-l border-slate-50">
                    <span className={`px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.3em] border-2 transition-all ${
                      flow.status === 'Active' 
                      ? 'bg-primary border-charcoal text-charcoal shadow-[4px_4px_0px_var(--charcoal)]' 
                      : flow.status === 'Verified'
                      ? 'bg-white border-charcoal text-charcoal shadow-[4px_4px_0px_var(--charcoal)]'
                      : 'bg-slate-100 border-charcoal/10 text-charcoal/20'
                    }`}>
                      {flow.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sophisticated Certification Hubs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-charcoal p-16 rounded-[4rem] relative overflow-hidden group">
          <div className="absolute -bottom-20 -right-20 opacity-5 group-hover:opacity-10 transition-all duration-700 rotate-12 group-hover:rotate-0">
            <ShieldCheck size={400} />
          </div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-1px w-12 bg-primary"></div>
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.5em]">Network Certification</span>
              </div>
              <h2 className="font-['Anton'] text-7xl text-white uppercase leading-none mb-8">92% <br/><span className="text-primary">Efficiency</span></h2>
              <p className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.2em] max-w-sm leading-relaxed">
                Operating at peak circularity. 4 new synergy opportunities detected in the Nordic Corridor.
              </p>
            </div>
            <div className="mt-16 flex gap-6">
              <button className="flex-1 py-6 bg-primary text-charcoal font-black uppercase text-[10px] tracking-[0.4em] shadow-[8px_8px_0px_white] hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1">
                Audit Compliance
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex-1 bg-primary border-4 border-charcoal rounded-[4rem] p-16 relative overflow-hidden group cursor-pointer shadow-2xl">
            <div className="absolute top-10 right-10">
              <ArrowUpRight size={48} className="text-charcoal/20 group-hover:text-charcoal transition-all group-hover:translate-x-2 group-hover:-translate-y-2" />
            </div>
            <div className="relative z-10">
              <Globe size={64} className="mb-10 text-charcoal/30 group-hover:text-charcoal transition-colors" />
              <h2 className="font-['Anton'] text-6xl uppercase text-charcoal leading-none">Global <br/>Expansion</h2>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/60 mt-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-charcoal rounded-full animate-pulse"></span>
                Connecting to Nordic Hub...
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white border-2 border-charcoal/10 p-10 rounded-[3rem] hover:border-charcoal transition-all group">
              <BarChart3 className="text-charcoal/20 group-hover:text-primary mb-6" size={24} />
              <div className="font-['Anton'] text-3xl uppercase">Data Vault</div>
            </div>
            <div className="bg-white border-2 border-charcoal/10 p-10 rounded-[3rem] hover:border-charcoal transition-all group">
              <Layers className="text-charcoal/20 group-hover:text-primary mb-6" size={24} />
              <div className="font-['Anton'] text-3xl uppercase">Stream Map</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
