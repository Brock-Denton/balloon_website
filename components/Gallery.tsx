import React, { useEffect, useRef } from 'react';
import { GalleryItemProps } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const galleryData: GalleryItemProps[] = [
    {
        image: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=800',
        tags: ['8ft Arch', 'Pastels']
    },
    {
        image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800',
        tags: ['Outdoor', 'Brights']
    },
    {
        image: 'https://images.unsplash.com/photo-1478144592103-25821907077a?auto=format&fit=crop&q=80&w=800',
        tags: ['Indoor', 'Neutrals']
    },
    {
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800',
        tags: ['Corporate', '12ft']
    }
];

const GalleryItem: React.FC<GalleryItemProps & { index: number }> = ({ image, tags, index }) => {
    return (
        <div className={`gallery-item relative h-80 bg-slate-100 rounded-3xl overflow-hidden group cursor-pointer ${index % 2 !== 0 ? 'md:mt-12' : ''}`}>
            <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="gallery-overlay absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-wrap items-end p-6 gap-2">
                {tags.map(tag => (
                    <span key={tag} className="glass-panel text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".gallery-item", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%"
            },
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="gallery" ref={containerRef} className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4">Past work</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {['Weddings', 'Birthdays', 'Corporate', 'Neutrals'].map(filter => (
                        <button key={filter} className="px-5 py-2 rounded-full border border-slate-200 text-xs font-bold hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest text-slate-500">
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {galleryData.map((item, index) => (
                    <GalleryItem key={index} {...item} index={index} />
                ))}
            </div>

            <div className="mt-20 text-center">
                <button 
                  onClick={scrollToContact} 
                  className="bg-slate-900 text-white px-12 py-5 rounded-2xl text-lg font-bold btn-bounce transition-all shadow-xl shadow-slate-900/20 hover:bg-slate-800"
                >
                    Get a custom quote
                </button>
            </div>
        </div>
    </section>
  );
};

export default Gallery;