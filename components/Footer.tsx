import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 text-center px-6 border-t border-slate-200/50 bg-white/50 backdrop-blur-sm">
        <div className="text-2xl font-extrabold tracking-tighter mb-4">🎈 VIBE</div>
        <p className="text-slate-400 text-sm max-w-sm mx-auto mb-8 font-medium">Professional balloon architecture for those who live for the details.</p>
        <div className="flex justify-center gap-8 opacity-50">
            {['Instagram', 'Pinterest', 'TikTok'].map(social => (
                <a key={social} href="#" className="hover:opacity-100 transition-opacity uppercase text-[10px] font-bold tracking-[0.2em] text-slate-900">
                    {social}
                </a>
            ))}
        </div>
        <p className="mt-12 text-[10px] text-slate-300 mono">© {new Date().getFullYear()} VIBE BALLOONS INC.</p>
    </footer>
  );
};

export default Footer;