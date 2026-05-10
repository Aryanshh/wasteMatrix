import React, { useState } from 'react'
import { X, Beaker, MapPin, Scale, ShieldAlert, ArrowRight, Zap } from 'lucide-react'

export default function UploadModal({ onClose }) {
  // Logic Fix: Removed isOpen check as rendering is handled by App.jsx
  
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 animate-fade-in">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-md transition-all" onClick={onClose}></div>
      
      <div className="bg-white border-[4px] border-charcoal shadow-[16px_16px_0px_var(--charcoal)] w-full max-w-2xl relative z-10 overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="p-8 border-b-[4px] border-charcoal flex justify-between items-center bg-primary">
          <h2 className="font-['Anton'] text-4xl uppercase flex items-center gap-4 text-charcoal">
            <Beaker className="text-charcoal" size={32} />
            Initialize Stream
          </h2>
          <button onClick={onClose} className="p-2 border-2 border-charcoal rounded-full hover:bg-white transition-colors">
            <X size={24} className="text-charcoal" />
          </button>
        </div>

        {/* Content */}
        <div className="p-10 max-h-[70vh] overflow-y-auto custom-scroll bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/40">Material Identity</label>
              <input type="text" placeholder="e.g., FLY ASH RESIDUE" className="w-full bg-slate-50 border-2 border-charcoal rounded-xl p-4 font-bold text-charcoal outline-none focus:border-primary transition-all" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/40">Material Class</label>
              <select className="w-full bg-slate-50 border-2 border-charcoal rounded-xl p-4 font-bold text-charcoal outline-none focus:border-primary appearance-none cursor-pointer">
                <option>SELECT CATEGORY</option>
                <option>ORGANIC COMPOSITE</option>
                <option>METALLIC SLAG</option>
                <option>CHEMICAL FLUX</option>
                <option>MINERAL SECONDARY</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/40 flex items-center gap-2">
                <Scale size={14} /> Tonnage / Month
              </label>
              <input type="number" placeholder="500" className="w-full bg-slate-50 border-2 border-charcoal rounded-xl p-4 font-bold text-charcoal outline-none focus:border-primary" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/40 flex items-center gap-2">
                <MapPin size={14} /> Geo-Coordinates
              </label>
              <div className="flex gap-4">
                <input type="text" placeholder="LAT" className="flex-1 bg-slate-50 border-2 border-charcoal rounded-xl p-4 font-bold text-charcoal outline-none focus:border-primary" />
                <input type="text" placeholder="LNG" className="flex-1 bg-slate-50 border-2 border-charcoal rounded-xl p-4 font-bold text-charcoal outline-none focus:border-primary" />
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <h3 className="font-['Anton'] text-2xl uppercase flex items-center gap-3">
              <Zap className="text-primary fill-primary" size={20} /> Chemical Blueprint (%)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Carbon', 'Calcium', 'Silicon', 'Iron'].map(el => (
                <div key={el} className="bg-slate-50 border-2 border-charcoal p-4 rounded-xl flex items-center justify-between group hover:border-primary transition-all">
                  <span className="text-[10px] font-black uppercase tracking-widest text-charcoal">{el}</span>
                  <input type="number" placeholder="0" className="w-10 bg-transparent text-right outline-none text-primary font-black" />
                </div>
              ))}
            </div>
          </div>

          {/* Warning */}
          <div className="mt-12 p-6 bg-slate-900 border-l-[8px] border-primary flex gap-6 items-center">
            <ShieldAlert className="text-primary shrink-0" size={32} />
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Neural Compliance Check</h4>
              <p className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-widest leading-relaxed">
                Ensure all GHS classifications are synchronized for AI compatibility verification.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t-[4px] border-charcoal bg-slate-50 flex justify-end gap-6">
          <button onClick={onClose} className="font-black uppercase text-[10px] tracking-[0.3em] text-charcoal/40 hover:text-charcoal transition-colors">Abondon Stream</button>
          <button className="btn-brutal px-12 py-4 flex items-center gap-3">
            Run Synergy Matcher <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
