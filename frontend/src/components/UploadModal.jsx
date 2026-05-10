import React, { useState } from 'react'
import { X, Beaker, MapPin, Scale, ShieldAlert } from 'lucide-react'

export default function UploadModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="glass-card w-full max-w-2xl relative z-10 animate-fade-in overflow-hidden">
        <div className="p-6 border-b border-[var(--glass-border)] flex justify-between items-center bg-[var(--card)]">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Beaker className="text-[var(--primary)]" />
            Register New Waste Stream
          </h2>
          <button onClick={onClose} className="text-[var(--muted-foreground)] hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-8 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">Material Name</label>
              <input type="text" placeholder="e.g., Fly Ash Residue" className="w-full bg-[var(--background)] border border-[var(--glass-border)] rounded-lg p-3 focus:border-[var(--primary)] outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">Category</label>
              <select className="w-full bg-[var(--background)] border border-[var(--glass-border)] rounded-lg p-3 focus:border-[var(--primary)] outline-none">
                <option>Select Category</option>
                <option>Organic</option>
                <option>Metallic</option>
                <option>Chemical</option>
                <option>Composite</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)] flex items-center gap-2">
                <Scale size={14} /> Monthly Volume (Tonnes)
              </label>
              <input type="number" placeholder="500" className="w-full bg-[var(--background)] border border-[var(--glass-border)] rounded-lg p-3 focus:border-[var(--primary)] outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)] flex items-center gap-2">
                <MapPin size={14} /> Origin Coordinates
              </label>
              <div className="flex gap-2">
                <input type="text" placeholder="Lat" className="flex-1 bg-[var(--background)] border border-[var(--glass-border)] rounded-lg p-3 focus:border-[var(--primary)] outline-none" />
                <input type="text" placeholder="Lng" className="flex-1 bg-[var(--background)] border border-[var(--glass-border)] rounded-lg p-3 focus:border-[var(--primary)] outline-none" />
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <ShieldAlert className="text-amber-500" size={16} /> Elemental Composition (%)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Carbon', 'Calcium', 'Silicon', 'Iron'].map(el => (
                <div key={el} className="bg-[var(--background)] border border-[var(--glass-border)] p-3 rounded-lg flex items-center justify-between">
                  <span className="text-xs font-semibold">{el}</span>
                  <input type="number" placeholder="0" className="w-10 bg-transparent text-right outline-none text-[var(--primary)] font-bold" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <div className="flex gap-3">
              <ShieldAlert className="text-amber-500 shrink-0" size={20} />
              <div>
                <h4 className="text-sm font-bold text-amber-200">Hazardous Material Declaration</h4>
                <p className="text-xs text-amber-200/70 mt-1">
                  Ensure all REACH and GHS classifications are correctly identified for AI compatibility verification.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-[var(--glass-border)] bg-[var(--card)] flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2 rounded-lg font-semibold hover:bg-[var(--glass)]">Cancel</button>
          <button className="glow-btn px-10">Run AI Matcher</button>
        </div>
      </div>
    </div>
  )
}
