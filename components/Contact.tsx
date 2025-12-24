import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { VibeType } from '../types';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface ContactProps {
    activeVibe: VibeType;
}

const Contact: React.FC<ContactProps> = ({ activeVibe }) => {
    const [submitted, setSubmitted] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const clearFile = () => {
        setFileName(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const colors = activeVibe === 'soft' 
            ? ['#e0c3fc', '#8ec5fc'] 
            : activeVibe === 'bright' 
            ? ['#ff9a9e', '#fecfef'] 
            : ['#667eea', '#764ba2'];

        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.8 }, // From bottom of viewport roughly
            colors: colors
        });
        
        setSubmitted(true);
    };

    return (
        <section id="contact" className="py-32 px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-16 relative overflow-hidden transform transition-all hover:scale-[1.01]">
                
                {!submitted ? (
                    <>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-extrabold mb-4">Request a quote</h2>
                            <p className="text-slate-500">Tell us the basics and we’ll send a quote + design direction.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 relative z-10">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Name</label>
                                <input type="text" required placeholder="Jane Doe" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-pink-200 transition-all outline-none text-slate-800 font-medium" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Email</label>
                                <input type="email" required placeholder="jane@event.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-pink-200 transition-all outline-none text-slate-800 font-medium" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Event Date</label>
                                <input type="date" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-pink-200 transition-all outline-none text-slate-800 font-medium" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Event Type</label>
                                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-pink-200 transition-all outline-none appearance-none text-slate-800 font-medium">
                                    <option>Wedding</option>
                                    <option>Birthday</option>
                                    <option>Corporate</option>
                                    <option>Baby Shower</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Budget Range</label>
                                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-pink-200 transition-all outline-none appearance-none text-slate-800 font-medium">
                                    <option>$300 - $600</option>
                                    <option>$600 - $1,200</option>
                                    <option>$1,200 - $2,500</option>
                                    <option>$2,500+</option>
                                </select>
                            </div>
                            
                            {/* Inspiration Upload */}
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Inspiration / Moodboard</label>
                                <div className="relative">
                                    {!fileName ? (
                                        <label className="flex flex-col items-center justify-center w-full h-32 px-4 transition bg-slate-50 border-2 border-slate-200 border-dashed rounded-2xl appearance-none cursor-pointer hover:border-pink-300 hover:bg-slate-100 focus:outline-none group">
                                            <div className="flex flex-col items-center space-y-2 pt-5 pb-6">
                                                <Upload className="w-8 h-8 text-slate-300 group-hover:text-pink-400 transition-colors mb-2" />
                                                <p className="text-sm text-slate-500 font-medium">
                                                    Drop images or <span className="text-pink-500 underline decoration-2 underline-offset-4 group-hover:text-pink-600">browse</span>
                                                </p>
                                                <p className="text-xs text-slate-400">PNG, JPG up to 10MB</p>
                                            </div>
                                            <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                                        </label>
                                    ) : (
                                         <div className="flex items-center justify-between w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 animate-in fade-in slide-in-from-bottom-2">
                                            <span className="flex items-center gap-3 text-slate-700 font-bold truncate">
                                                <div className="bg-white p-2 rounded-lg border border-slate-100 text-pink-500">
                                                    <ImageIcon size={20} />
                                                </div>
                                                {fileName}
                                            </span>
                                            <button 
                                                type="button" 
                                                onClick={clearFile} 
                                                className="p-2 hover:bg-red-50 hover:text-red-500 rounded-xl transition-all text-slate-400"
                                                aria-label="Remove file"
                                            >
                                                <X size={20} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Notes</label>
                                <textarea rows={3} placeholder="Tell us your color dreams..." className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-pink-200 transition-all outline-none text-slate-800 font-medium"></textarea>
                            </div>
                            
                            <div className="md:col-span-2 mt-4">
                                <button type="submit" className="w-full bg-slate-900 text-white py-6 rounded-2xl text-xl font-bold btn-bounce transition-all shadow-xl shadow-slate-900/10 hover:bg-slate-800">
                                    Request my quote
                                </button>
                                <p className="text-center mt-4 text-[10px] text-slate-400 mono">WE REPLY WITHIN 24 HOURS</p>
                            </div>
                        </form>
                    </>
                ) : (
                    <div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-500">
                        <div className="text-6xl mb-6 animate-bounce">✨</div>
                        <h3 className="text-3xl font-black mb-2">It's a party already!</h3>
                        <p className="text-slate-500 max-w-sm">We've received your request. Check your inbox for some initial inspiration shortly.</p>
                        <button onClick={() => { setSubmitted(false); setFileName(null); }} className="mt-8 text-sm font-bold border-b-2 border-slate-900 pb-1 hover:text-pink-500 hover:border-pink-500 transition-colors">
                            Send another request
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;