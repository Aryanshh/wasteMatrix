import React from 'react'
import { BarChart3, PieChart, TrendingUp, ArrowDown, ArrowUp, Activity, Zap, BarChart, Download, Share2 } from 'lucide-react'

export default function AnalyticsView() {
  const dataPoints = [
    { label: 'Carbon Neutrality Index', val: '84.2', change: '+5.2%', up: true },
    { label: 'Resource Recovery Rate', val: '91.8%', change: '+1.4%', up: true },
    { label: 'Avg. Match Latency', val: '1.2s', change: '-0.4s', up: true },
    { label: 'Waste-to-Value Ratio', val: '4.8x', change: '+0.9x', up: true },
  ]

  return (
    <div className="space-y-16 animate-fade-in pb-20">
      {/* Analytics KPI Grid - High Contrast Command Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {dataPoints.map((point, i) => (
          <div key={i} className="bg-white border-2 border-charcoal/10 rounded-[2.5rem] p-10 hover:border-charcoal transition-all duration-500 group relative">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-10">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-charcoal/30 group-hover:text-charcoal transition-colors">{point.label}</div>
                <div className={`flex items-center gap-1 text-[10px] font-black ${point.up ? 'text-primary' : 'text-red-500'}`}>
                  {point.up ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                  {point.change}
                </div>
              </div>
              <div className="font-['Anton'] text-7xl text-charcoal tracking-tighter leading-none">{point.val}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Deep Analytics Bento - Industrial Structure */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white border-2 border-charcoal/10 rounded-[4rem] p-16 shadow-2xl relative overflow-hidden group hover:border-charcoal transition-all duration-500">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-charcoal rounded-2xl text-primary">
                <BarChart3 size={28} />
              </div>
              <h3 className="font-['Anton'] text-4xl uppercase tracking-tight">Supply vs Demand flux</h3>
            </div>
            <div className="flex gap-3">
              <button className="p-3 bg-slate-50 border border-charcoal/5 rounded-xl hover:bg-primary transition-colors">
                <Download size={18} />
              </button>
            </div>
          </div>
          
          <div className="h-80 flex items-end gap-6 mb-12">
            {[60, 80, 45, 95, 70, 100, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-slate-50 rounded-2xl relative group cursor-pointer hover:bg-slate-100 transition-all">
                <div 
                  className="absolute bottom-0 w-full bg-slate-200 rounded-2xl transition-all duration-1000 group-hover:bg-primary" 
                  style={{ height: `${h}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[11px] font-black uppercase tracking-[0.5em] text-charcoal/20 border-t-2 border-slate-50 pt-8">
            <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
          </div>
        </div>

        <div className="bg-charcoal text-white rounded-[4rem] p-16 shadow-2xl relative overflow-hidden group">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-6 mb-16">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-primary">
                  <PieChart size={28} />
                </div>
                <h3 className="font-['Anton'] text-4xl uppercase tracking-tight">Material composition</h3>
              </div>
              
              <div className="space-y-10">
                {[
                  { label: 'Organic Sludge', val: '42%', color: 'bg-primary' },
                  { label: 'Metallic Residue', val: '28%', color: 'bg-white/40' },
                  { label: 'Chemical Precursors', val: '18%', color: 'bg-white/20' },
                  { label: 'Other Flux', val: '12%', color: 'bg-white/5' },
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.4em]">
                      <span className="opacity-40">{item.label}</span>
                      <span className="text-primary">{item.val}</span>
                    </div>
                    <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div className={`h-full ${item.color} transition-all duration-1000`} style={{ width: item.val }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="w-full py-6 bg-primary text-charcoal rounded-full font-black uppercase text-[10px] tracking-[0.4em] shadow-[8px_8px_0px_white] hover:shadow-none transition-all">
              Export Neural Report
            </button>
          </div>
        </div>
      </div>

      {/* Intelligence Pulse - Massive Industrial Command */}
      <div className="bg-white border-[4px] border-charcoal rounded-[4rem] p-12 flex flex-col md:flex-row items-center justify-between shadow-xl relative overflow-hidden">
        <div className="flex items-center gap-12 relative z-10 mb-8 md:mb-0">
          <div className="relative">
            <div className="h-28 w-28 rounded-3xl border-4 border-charcoal flex items-center justify-center bg-slate-50">
              <Activity size={48} className="text-charcoal" />
            </div>
          </div>
          <div>
            <h4 className="font-['Anton'] text-5xl uppercase tracking-tight text-charcoal">Neural Pulse Analysis</h4>
            <div className="flex items-center gap-4 mt-3">
              <p className="text-[11px] font-black uppercase tracking-[0.4em] text-charcoal/30">Optimization engine active & scanning neural pathways...</p>
            </div>
          </div>
        </div>
        <button className="px-16 py-8 bg-charcoal text-white rounded-full font-black uppercase text-[12px] tracking-[0.5em] shadow-[12px_12px_0px_rgba(0,0,0,0.1)] transition-all">
          Generate Insights
        </button>
      </div>
    </div>
  )
}
