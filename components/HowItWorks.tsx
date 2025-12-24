import React from 'react';
import { CalendarDays, Palette, Truck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-32 px-6 bg-white rounded-[40px] md:rounded-[60px] relative z-10 shadow-2xl shadow-blue-100/20 mx-4 md:mx-8 mb-20">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    How it works. <br/>
                    <span className="text-slate-300">Fast & simple.</span>
                </h2>
                <div className="mono text-pink-500 font-bold bg-pink-50 px-4 py-2 rounded-lg text-xs tracking-wider">
                    SETUP IN AS LITTLE AS 60–90 MINS
                </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
                <div className="group cursor-default">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <CalendarDays size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Tell us your date + vibe</h3>
                    <p className="text-slate-500 font-light leading-relaxed">Simple form, 30 seconds. We'll handle the logistics from there so you can focus on the guest list.</p>
                </div>
                <div className="group cursor-default">
                    <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Palette size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">We design your palette</h3>
                    <p className="text-slate-500 font-light leading-relaxed">Pro color matching to your theme or venue branding. We ensure everything looks cohesive.</p>
                </div>
                <div className="group cursor-default">
                    <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Truck size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">We deliver + install</h3>
                    <p className="text-slate-500 font-light leading-relaxed">No measuring. No stress. Just show up and take the photos. We make it look easy.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HowItWorks;