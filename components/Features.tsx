import React from 'react';
import { Sparkles, Truck, Camera, Eraser } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#f8faff] border-t border-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
            <div>
                <span className="mono text-xs uppercase tracking-widest text-pink-500 font-bold mb-4 block">
                    Relief Guaranteed
                </span>
                <h2 className="text-5xl font-extrabold mb-8 tracking-tight text-slate-900">
                    What’s included.
                </h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-blue-50 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-2xl p-2 bg-yellow-50 rounded-full text-yellow-500">
                            <Sparkles size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1">Custom design + color planning</h4>
                            <p className="text-sm text-slate-500">Tailored to your moodboard or branding.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-blue-50 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-2xl p-2 bg-blue-50 rounded-full text-blue-500">
                            <Truck size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1">Delivery + on-site installation</h4>
                            <p className="text-sm text-slate-500">We handle the heavy lifting, you handle the wine.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-blue-50 shadow-sm hover:shadow-md transition-shadow">
                         <div className="text-2xl p-2 bg-pink-50 rounded-full text-pink-500">
                            <Camera size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1">Pro materials</h4>
                            <p className="text-sm text-slate-500">Durable, photo-ready, high-shine balloons.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-blue-50 shadow-sm hover:shadow-md transition-shadow">
                         <div className="text-2xl p-2 bg-purple-50 rounded-full text-purple-500">
                            <Eraser size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1">Cleanup options</h4>
                            <p className="text-sm text-slate-500">Optional teardown services available.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-white p-12 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 self-start sticky top-24">
                <h3 className="text-2xl font-bold mb-8">Optional add-ons</h3>
                <ul className="space-y-4">
                    <li className="flex justify-between items-center pb-4 border-b border-slate-50 hover:bg-slate-50 p-2 rounded-lg transition-colors">
                        <span className="font-medium">Shimmer wall backdrop</span>
                        <span className="text-[10px] bg-slate-100 px-3 py-1 rounded-full font-bold text-slate-600">POPULAR</span>
                    </li>
                    <li className="flex justify-between items-center pb-4 border-b border-slate-50 hover:bg-slate-50 p-2 rounded-lg transition-colors">
                        <span className="font-medium">Marquee numbers/letters</span>
                        <span className="text-[10px] bg-slate-100 px-3 py-1 rounded-full font-bold text-slate-600">XL SIZE</span>
                    </li>
                    <li className="flex justify-between items-center pb-4 border-b border-slate-50 hover:bg-slate-50 p-2 rounded-lg transition-colors">
                        <span className="font-medium">Florals or greenery</span>
                        <span className="text-[10px] bg-slate-100 px-3 py-1 rounded-full font-bold text-slate-600">FRESH</span>
                    </li>
                    <li className="flex justify-between items-center hover:bg-slate-50 p-2 rounded-lg transition-colors">
                        <span className="font-medium">Custom acrylic signage</span>
                        <span className="text-[10px] bg-slate-100 px-3 py-1 rounded-full font-bold text-slate-600">CUSTOM</span>
                    </li>
                </ul>
                <div className="mt-10 p-6 bg-pink-50 rounded-2xl border border-pink-100">
                    <p className="text-sm text-pink-600 leading-relaxed font-medium italic">“Showed up early, built it fast, looked insane in photos.” ⭐⭐⭐⭐⭐</p>
                </div>
            </div>
        </div>
        
        {/* Social Proof */}
        <div className="max-w-7xl mx-auto px-6 mt-32 overflow-hidden text-center">
            <p className="mono text-[10px] uppercase tracking-[0.5em] text-slate-400 mb-10">Trusted for events at</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale select-none">
                <span className="text-2xl font-black font-serif">VENUE_ONE</span>
                <span className="text-2xl font-black font-sans">HOTEL_LUXE</span>
                <span className="text-2xl font-black font-mono">LOFT_STUDIO</span>
                <span className="text-2xl font-black">THE_PARK</span>
            </div>
        </div>
    </section>
  );
};

export default Features;