import React from 'react'
import { BarChart3, PieChart, TrendingUp, ArrowDown, ArrowUp, Activity, Zap } from 'lucide-react'

export default function AnalyticsView() {
  const dataPoints = [
    { label: 'Carbon Neutrality Index', val: '84.2', change: '+5.2%', up: true },
    { label: 'Resource Recovery Rate', val: '91.8%', change: '+1.4%', up: true },
    { label: 'Avg. Match Latency', val: '1.2s', change: '-0.4s', up: true },
    { label: 'Waste-to-Value Ratio', val: '4.8x', change: '+0.9x', up: true },
  ]

  return (
    <div className="space-y-12 animate-fade-in pb-20 p-2">
      {/* Analytics KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {dataPoints.map((point, i) => (
          <div key={i} className="bg-white border-4 border-charcoal rounded-[3rem] p-10 shadow-xl group hover:border-primary transition-all duration-500">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/30">{point.label}</span>
              <div className={`flex items-center gap-1 text-[10px] font-black ${point.up ? 'text-primary' : 'text-red-500'}`}>
                {point.up ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                {point.change}
              </div>
            </div>
            <div className="font-['Anton'] text-6xl text-charcoal tracking-tight leading-none">{point.val}</div>
          </div>
        ))}
      </div>

      {/* Deep Analytics Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white border-4 border-charcoal rounded-[4rem] p-12 shadow-2xl relative overflow-hidden group">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <BarChart3 className="text-primary" size={28} />
            </div>
            <h3 className="font-['Anton'] text-4xl uppercase">Supply vs Demand flux</h3>
          </div>
          
          <div className="h-72 flex items-end gap-5 mb-10">
            {[60, 80, 45, 95, 70, 100, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-slate-50 rounded-t-2xl relative group cursor-pointer hover:bg-primary/5 transition-all">
                <div 
                  className="absolute bottom-0 w-full bg-charcoal rounded-t-2xl transition-all duration-1000 group-hover:bg-primary" 
                  style={{ height: `${h}%` }}
                ></div>
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal text-white text-[9px] font-black px-2 py-1 rounded">
                  {h}% MATCH
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[11px] font-black uppercase tracking-[0.3em] text-charcoal/20">
            <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
          </div>
        </div>

        <div className="bg-charcoal text-white rounded-[4rem] p-12 shadow-2xl flex flex-col justify-between group">
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-white/10 rounded-2xl">
                <PieChart className="text-primary" size={28} />
              </div>
              <h3 className="font-['Anton'] text-4xl uppercase">Material composition</h3>
            </div>
            
            <div className="space-y-8">
              {[
                { label: 'Organic Sludge', val: '42%', color: 'bg-primary' },
                { label: 'Metallic Residue', val: '28%', color: 'bg-slate-400' },
                { label: 'Chemical Precursors', val: '18%', color: 'bg-slate-500' },
                { label: 'Other Flux', val: '12%', color: 'bg-slate-700' },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-[0.25em]">
                    <span className="opacity-40">{item.label}</span>
                    <span className="text-primary">{item.val}</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} transition-all duration-1000`} style={{ width: item.val }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="w-full py-6 bg-white text-charcoal rounded-full font-black uppercase text-[11px] tracking-[0.3em] mt-12 hover:bg-primary transition-all active:scale-95 shadow-xl">
            Export Neural Report
          </button>
        </div>
      </div>

      {/* Intelligence Pulse */}
      <div className="bg-slate-50 border-4 border-charcoal rounded-[4rem] p-12 flex items-center justify-between group cursor-pointer hover:border-primary transition-all duration-500 shadow-xl">
        <div className="flex items-center gap-12">
          <div className="relative">
            <div className="h-24 w-24 rounded-3xl border-4 border-charcoal flex items-center justify-center bg-white group-hover:border-primary transition-colors">
              <Activity size={40} className="text-charcoal group-hover:text-primary transition-colors" />
            </div>
            <div className="absolute -top-3 -right-3 h-10 w-10 bg-primary rounded-full border-4 border-charcoal flex items-center justify-center animate-bounce shadow-lg">
              <Zap size={18} className="text-charcoal" />
            </div>
          </div>
          <div>
            <h4 className="font-['Anton'] text-4xl uppercase tracking-tight text-charcoal">Neural Pulse Analysis</h4>
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-charcoal/30 mt-2">Real-time market optimization engine active & scanning...</p>
          </div>
        </div>
        <button className="px-12 py-6 bg-charcoal text-white rounded-full font-black uppercase text-[11px] tracking-[0.3em] group-hover:bg-primary group-hover:text-charcoal transition-all shadow-2xl">
          Generate Insights
        </button>
      </div>
    </div>
  )
}
