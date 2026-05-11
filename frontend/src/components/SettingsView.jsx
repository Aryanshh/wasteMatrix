import React, { useState } from 'react'
import { Settings, Bell, Shield, Cpu, Zap, Eye, Database, Power } from 'lucide-react'

export default function SettingsView() {
  const [sensitivity, setSensitivity] = useState(85)
  
  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Neural Matcher Calibration */}
        <div className="lg:col-span-2 space-y-10">
          <div className="bg-white border-4 border-charcoal rounded-[4rem] p-12 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-6 mb-12">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <Cpu size={32} />
              </div>
              <div>
                <h3 className="font-['Anton'] text-4xl uppercase tracking-tight">Neural Matcher Calibration</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/30">Optimize AI Material Recognition</p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="text-[11px] font-black uppercase tracking-[0.4em] text-charcoal">Recognition Sensitivity</label>
                  <span className="font-['Anton'] text-5xl text-primary">{sensitivity}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sensitivity} 
                  onChange={(e) => setSensitivity(e.target.value)}
                  className="w-full h-4 bg-slate-100 rounded-full appearance-none cursor-pointer accent-primary border-2 border-charcoal"
                />
                <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-charcoal/20">
                  <span>Standard Flux</span>
                  <span>Molecular Precision</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { label: 'Auto-Synergy Matching', desc: 'Predictive material bonding alerts', active: true },
                  { label: 'Proximity Filter', icon: Database, desc: 'Restrict matches to 500km radius', active: false },
                  { label: 'Elemental Drift', icon: Zap, desc: 'Allow 5% variance in chemical data', active: true },
                  { label: 'Verified Hubs Only', icon: Shield, desc: 'Filter for ISO certified nodes', active: true },
                ].map((toggle, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-slate-50 border-2 border-charcoal rounded-[2rem] hover:bg-white transition-all cursor-pointer group">
                    <div className="max-w-[70%]">
                      <div className="text-[11px] font-black uppercase tracking-widest text-charcoal mb-1">{toggle.label}</div>
                      <div className="text-[8px] font-bold uppercase tracking-widest text-charcoal/30 leading-relaxed">{toggle.desc}</div>
                    </div>
                    <div className={`h-8 w-14 rounded-full border-2 border-charcoal p-1 transition-colors duration-500 ${toggle.active ? 'bg-primary' : 'bg-slate-200'}`}>
                      <div className={`h-5 w-5 bg-white border-2 border-charcoal rounded-full transition-transform duration-500 ${toggle.active ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Global UI & Security */}
        <div className="space-y-10">
          <div className="bg-charcoal text-white rounded-[4rem] p-12 shadow-2xl relative overflow-hidden group">
            <div className="flex items-center gap-6 mb-10">
              <div className="p-4 bg-white/5 rounded-2xl text-primary">
                <Bell size={28} />
              </div>
              <h4 className="font-['Anton'] text-3xl uppercase">Notification Flux</h4>
            </div>
            <div className="space-y-6">
              {['New Synergy Alerts', 'Network Activity', 'Compliance Reports'].map((item, i) => (
                <div key={i} className="flex items-center justify-between group/item">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 group-hover/item:opacity-100 transition-opacity">{item}</span>
                  <div className="h-4 w-4 bg-primary border-2 border-white rounded-full group-hover/item:scale-125 transition-transform"></div>
                </div>
              ))}
            </div>
            <button className="w-full py-5 bg-white/5 border-2 border-white/10 rounded-full mt-10 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-primary hover:text-charcoal transition-all">
              Test Connection
            </button>
          </div>

          <div className="bg-white border-4 border-charcoal rounded-[4rem] p-12 shadow-xl group hover:border-red-500 transition-all duration-500">
            <div className="flex items-center gap-6 mb-10">
              <div className="p-4 bg-red-50 rounded-2xl text-red-500">
                <Power size={28} />
              </div>
              <h4 className="font-['Anton'] text-3xl uppercase text-charcoal">System Lockdown</h4>
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-charcoal/30 mb-8 leading-relaxed">
              De-authorize all industrial node sessions and reset neural credentials.
            </p>
            <button className="w-full py-5 border-2 border-red-500 text-red-500 rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-red-500 hover:text-white transition-all shadow-[6px_6px_0px_rgba(239,68,68,0.2)]">
              Terminate All Nodes
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
