import React from 'react'
import { MapPin, Factory, Navigation } from 'lucide-react'

export default function MapView() {
  // Mock data for geographic visualization
  const locations = [
    { name: "Your Waste Stream", type: "waste", x: 45, y: 30 },
    { name: "EcoCement Plant A", type: "factory", x: 55, y: 35 },
    { name: "Bio-Polymer Works", type: "factory", x: 40, y: 55 },
    { name: "SteelCycle Foundry", type: "factory", x: 70, y: 20 },
  ]

  return (
    <div className="flex flex-col" style={{ height: '75vh', minHeight: '600px' }}>
      <div className="flex-1 bg-slate-50 border-4 border-charcoal rounded-[3rem] relative overflow-hidden group shadow-2xl">
        {/* Map Header Overlay */}
        <div className="absolute top-10 left-10 z-10 bg-white p-6 border-2 border-charcoal shadow-[8px_8px_0px_var(--charcoal)] rounded-2xl max-w-xs">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <h3 className="font-['Anton'] text-2xl uppercase tracking-tight">Live Network Map</h3>
          </div>
          <p className="text-[10px] font-black uppercase text-charcoal/40 tracking-widest leading-relaxed">
            Visualizing 14 active secondary material nodes across the Nordic industrial hub.
          </p>
        </div>

        {/* Map Legend */}
        <div className="absolute bottom-10 right-10 z-10 bg-white px-6 py-4 border-2 border-charcoal rounded-2xl flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-[10px] font-black uppercase tracking-widest">Active Sink</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-charcoal rounded-full"></div>
            <span className="text-[10px] font-black uppercase tracking-widest">Source Node</span>
          </div>
        </div>

        {/* Real-Time Map Iframe */}
        <iframe 
          title="Industrial Network Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120000!2d18.0686!3d59.3293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sse!4v1620000000000!5m2!1sen!2sse"
          className="w-full h-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}
