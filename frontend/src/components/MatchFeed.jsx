import React, { useState } from 'react'
import { CheckCircle2, ChevronRight, MapPin, Truck, Box, Info, AlertTriangle } from 'lucide-react'

const MOCK_MATCHES = [
  {
    factory_name: "EcoCement Plant A",
    score: 0.88,
    type: "Organic Composite",
    distance_km: 12.4,
    volume_match: "92%",
    explanation_tags: [
      "Material class 'organic' is a direct match for this industry.",
      "High elemental overlap: Calcium, Carbon detected.",
      "Receiver has pre-treatment capabilities for hazardous materials.",
      "Distance: 12.4km. Near-optimal logistics.",
      "Volume match: 450t supply vs 500t demand."
    ]
  },
  {
    factory_name: "Bio-Polymer Works",
    score: 0.74,
    type: "Chemical Precursor",
    distance_km: 45.8,
    volume_match: "100%",
    explanation_tags: [
      "Material class mismatch, pre-treatment or specialized processing may be required.",
      "High elemental overlap: Carbon, Oxygen detected.",
      "Distance: 45.8km. Logistics costs may apply.",
      "Volume match: 200t supply vs 200t demand."
    ]
  },
  {
    factory_name: "SteelCycle Foundry",
    score: 0.32,
    type: "Metallic Waste",
    distance_km: 142.1,
    volume_match: "15%",
    explanation_tags: [
      "Material class mismatch.",
      "Low elemental overlap.",
      "Warning: High hazard classification requires pre-treatment facilities not present at receiver.",
      "Distance: 142.1km. High logistics overhead."
    ]
  }
]

export default function MatchFeed() {
  const [expandedMatch, setExpandedMatch] = useState(null)
  const [agreementStatus, setAgreementStatus] = useState({}) // { idx: 'idle' | 'initiating' | 'pending' }

  const handleInitiate = (idx) => {
    setAgreementStatus(prev => ({ ...prev, [idx]: 'initiating' }))
    setTimeout(() => {
      setAgreementStatus(prev => ({ ...prev, [idx]: 'pending' }))
    }, 2000)
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="flex justify-between items-center bg-[var(--glass)] p-4 rounded-lg border border-[var(--glass-border)] mb-4">
        <div className="flex gap-4">
          <select className="bg-transparent border-none text-sm font-medium focus:ring-0 cursor-pointer">
            <option>All Waste Categories</option>
            <option>Organic</option>
            <option>Metallic</option>
          </select>
          <select className="bg-transparent border-none text-sm font-medium focus:ring-0 cursor-pointer">
            <option>Sort by Score</option>
            <option>Sort by Proximity</option>
          </select>
        </div>
        <span className="text-sm text-[var(--muted-foreground)]">3 matches found for "Fly Ash Residue"</span>
      </div>

      {MOCK_MATCHES.map((match, idx) => (
        <div 
          key={idx} 
          className="rounded-[3rem] shadow-2xl mb-12 hover:border-primary transition-all duration-500 overflow-hidden group border-4 border-charcoal/20"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.8)', 
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '4px solid #171e19'
          }}
        >
          <div className="p-12 cursor-pointer" onClick={() => setExpandedMatch(expandedMatch === idx ? null : idx)}>
            <div className="flex justify-between items-center mb-10">
              <div className="flex gap-10 items-center">
                <div className="h-24 w-24 rounded-3xl bg-slate-50 border-2 border-charcoal-10 flex items-center justify-center text-charcoal group-hover:border-primary transition-all">
                  <Box size={40} className="group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h3 className="font-['Anton'] text-5xl uppercase tracking-tight mb-2">{match.factory_name}</h3>
                  <div className="flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.2em] text-charcoal/30">
                    <span className="flex items-center gap-2"><MapPin size={18} className="text-primary" /> {match.distance_km} KM</span>
                    <span className="flex items-center gap-2"><Truck size={18} className="text-primary" /> {match.volume_match} MATCH</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-['Anton'] text-7xl text-primary leading-none">{Math.round(match.score * 100)}%</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-20 mt-2">Symbiosis Score</div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-10 border-t border-slate-100">
              <div className="flex gap-4">
                <span className="px-6 py-2 rounded-full bg-white border-4 border-charcoal text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0px_var(--charcoal)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">{match.type}</span>
                <span className="px-6 py-2 rounded-full bg-primary text-black text-[10px] font-black uppercase tracking-widest border-4 border-charcoal shadow-[4px_4px_0px_var(--charcoal)]">Verified Synergy</span>
              </div>
              <button 
                className={`px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 flex items-center gap-3 ${
                  expandedMatch === idx 
                    ? 'bg-primary text-charcoal shadow-lg' 
                    : 'bg-charcoal text-white hover:bg-primary hover:text-charcoal'
                }`}
              >
                {expandedMatch === idx ? 'Collapse' : 'Deep Analysis'} 
                <ChevronRight size={16} className={`transition-transform duration-500 ${expandedMatch === idx ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </div>

          {expandedMatch === idx && (
            <div className="px-12 pb-12 pt-6 bg-slate-50/50 border-t-2 border-slate-100 animate-fade-in">
              <div className="mt-4">
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-charcoal/30 mb-8 flex items-center gap-3">
                  <Info size={16} className="text-primary" /> Neural Insights Engine
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {match.explanation_tags.map((tag, i) => (
                    <div key={i} className="flex gap-4 items-start p-5 bg-white rounded-3xl border border-charcoal-10 shadow-sm">
                      {tag.includes("Warning") ? (
                        <AlertTriangle className="text-amber-500 shrink-0" size={20} />
                      ) : (
                        <CheckCircle2 className="text-primary shrink-0" size={20} />
                      )}
                      <p className={`text-xs font-bold leading-relaxed ${tag.includes("Warning") ? "text-amber-700" : "text-charcoal/70"}`}>
                        {tag}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 mt-12">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleInitiate(idx); }}
                    disabled={agreementStatus[idx] === 'initiating'}
                    className="btn-pill flex-1 py-6 bg-charcoal text-white hover:bg-primary hover:text-charcoal transition-all duration-500 transform hover:scale-[1.02] shadow-2xl font-black uppercase text-xs tracking-widest"
                  >
                    {agreementStatus[idx] === 'pending' ? 'Negotiation Live' : 
                     agreementStatus[idx] === 'initiating' ? 'Linking...' : 'Initiate Supply Agreement'}
                  </button>
                  <button 
                    onClick={(e) => e.stopPropagation()}
                    className="px-12 btn-pill py-6 border-2 border-charcoal-10 hover:border-charcoal transition-all duration-300 font-black uppercase text-[10px] tracking-widest bg-white"
                  >
                    Download MSDS
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
