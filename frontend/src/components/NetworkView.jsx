import React from 'react'
import { Activity, Zap, TrendingUp, ShieldCheck, ArrowUpRight, Globe } from 'lucide-react'

export default function NetworkView() {
  const activity = [
    { from: "EcoCement Hub", to: "SteelCycle Foundry", material: "Fly Ash", qty: "450t", status: "Active" },
    { from: "Bio-Polymer Works", to: "Nordic Plastics", material: "Ethylene", qty: "120t", status: "Verified" },
    { from: "Metals Refinery", to: "EcoCement Hub", material: "Slag", qty: "800t", status: "Active" },
    { from: "Metals Refinery", to: "SteelCycle Foundry", material: "Iron Scrap", qty: "200t", status: "In-Transit" },
  ]

  return (
    <div className="space-y-12 animate-fade-in p-2">
      {/* Network Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { label: 'Active Material Flows', val: '1,240', icon: Zap, trend: '+12%' },
          { label: 'CO2 Avoided (Tonnes)', val: '4,520', icon: Globe, trend: '+8.4%' },
          { label: 'Total Cost Savings', val: '$1.2M', icon: TrendingUp, trend: '+15.2%' },
        ].map((stat, i) => (
          <div key={i} className="bg-white border-4 border-charcoal rounded-[3rem] p-10 shadow-xl group hover:border-primary transition-all duration-500">
            <div className="flex justify-between items-start mb-6">
              <div className="h-16 w-16 bg-slate-50 border-2 border-charcoal-10 rounded-2xl flex items-center justify-center text-charcoal group-hover:text-primary transition-colors">
                <stat.icon size={32} />
              </div>
              <span className="text-[10px] font-black text-primary px-3 py-1 bg-primary/10 rounded-full">{stat.trend}</span>
            </div>
            <div className="font-['Anton'] text-7xl text-charcoal mb-2 tracking-tight leading-none">{stat.val}</div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/30">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Network Activity & Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white border-4 border-charcoal rounded-[4rem] p-12 shadow-2xl relative overflow-hidden">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Activity className="text-primary" size={24} />
              </div>
              <h3 className="font-['Anton'] text-4xl uppercase">Live network activity</h3>
            </div>
            <button className="text-[10px] font-black uppercase tracking-[0.25em] text-charcoal/30 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">View All Streams</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-slate-100 text-[11px] font-black uppercase tracking-[0.3em] text-charcoal/20">
                  <th className="pb-8 px-4">Origin Hub</th>
                  <th className="pb-8 px-4">Receiver Hub</th>
                  <th className="pb-8 px-4">Material Flux</th>
                  <th className="pb-8 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {activity.map((flow, i) => (
                  <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="py-8 px-4 font-black text-sm text-charcoal uppercase tracking-tight">{flow.from}</td>
                    <td className="py-8 px-4 font-black text-sm text-charcoal uppercase tracking-tight">{flow.to}</td>
                    <td className="py-8 px-4">
                      <div className="text-xs font-black uppercase text-primary mb-1 tracking-widest">{flow.material}</div>
                      <div className="text-[10px] font-bold text-charcoal/30 uppercase">{flow.qty} / Quarter</div>
                    </td>
                    <td className="py-8 px-4">
                      <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] ${flow.status === 'Active' ? 'bg-primary text-black' : 'bg-slate-100 text-charcoal/40'}`}>
                        {flow.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Intelligence Sidebars */}
        <div className="space-y-10">
          <div className="bg-charcoal text-white rounded-[4rem] p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck size={180} />
            </div>
            <h4 className="font-['Anton'] text-4xl uppercase mb-6 relative z-10 leading-tight">Network <br/>Certification</h4>
            <p className="text-[11px] font-bold leading-relaxed opacity-40 mb-10 relative z-10 uppercase tracking-[0.15em]">
              Operating at 92% circularity efficiency. 4 new synergy opportunities detected.
            </p>
            <button className="w-full py-5 bg-primary text-charcoal rounded-full font-black uppercase text-[10px] tracking-[0.25em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl">
              Audit Compliance
            </button>
          </div>
          
          <div className="bg-primary p-12 rounded-[4rem] shadow-xl group cursor-pointer hover:scale-[1.02] transition-all duration-500 border-4 border-charcoal">
            <div className="flex justify-between items-start mb-8">
              <div className="h-16 w-16 bg-white border-2 border-charcoal rounded-2xl flex items-center justify-center text-charcoal">
                <Globe size={32} />
              </div>
              <ArrowUpRight className="text-charcoal group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" size={28} />
            </div>
            <h4 className="font-['Anton'] text-3xl uppercase text-charcoal">Global Hub expansion</h4>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/40 mt-3">Connecting to Nordic Corridor...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
