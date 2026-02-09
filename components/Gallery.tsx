
import React from 'react';

const galleryItems = [
  { id: 1, title: "شحنات جاهزة للتصدير", category: "اللوجستيات", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" },
  { id: 2, title: "نخب فحم البرتقال الفاخر", category: "المنتجات", img: "https://images.unsplash.com/photo-1542366810-449e7769527d?auto=format&fit=crop&q=80" },
  { id: 3, title: "فحم الليمون الصافي", category: "المنتجات", img: "https://images.unsplash.com/photo-1599708153386-62e228308412?auto=format&fit=crop&q=80" },
  { id: 4, title: "عمليات الفرز اليدوي", category: "المصنع", img: "https://images.unsplash.com/photo-1518005020453-6ca2f793b39a?auto=format&fit=crop&q=80" },
  { id: 5, title: "تعبئة الأجولة الورقية", category: "التغليف", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80" },
  { id: 6, title: "مستودعات العاصمة الكبرى", category: "المصنع", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80" },
];

export const Gallery: React.FC = () => {
  return (
    <section id="المصنع" className="py-32 bg-white text-black relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="text-right">
            <span className="text-orange-600 font-black tracking-[0.4em] text-xs uppercase mb-4 block">الواقع من قلب العاصمة</span>
            <h2 className="text-5xl md:text-8xl font-black leading-none mb-8 tracking-tighter">الصور <span className="text-slate-300 italic">الواقعية</span></h2>
            <p className="text-slate-500 max-w-xl text-lg font-light leading-relaxed italic">"نحن لا نخفي شيئاً، نعتز بكل قطعة فحم تخرج من أفراننا وبكل شحنة تغادر موانئنا."</p>
          </div>
          <div className="flex space-x-reverse space-x-12">
             <div className="text-center">
                <span className="block text-5xl font-black ember-text mb-2">100%</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">إنتاج طبيعي</span>
             </div>
             <div className="text-center">
                <span className="block text-5xl font-black ember-text mb-2">24/7</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">رقابة جودة</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden aspect-[4/5] bg-slate-900 rounded-[3rem] shadow-2xl transition-all duration-700 hover:shadow-orange-600/10">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12 text-white">
                <span className="text-xs font-black mb-3 tracking-widest uppercase text-orange-500 bg-orange-500/10 w-fit px-3 py-1 rounded-lg">{item.category}</span>
                <h3 className="text-3xl font-black leading-tight mb-4">{item.title}</h3>
                <div className="w-12 h-[2px] bg-orange-600 transition-all duration-700 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
           <a href="https://wa.me/201211111111?text=أريد رؤية المزيد من صور الفرز والإنتاج الحالي" target="_blank" className="inline-flex items-center space-x-reverse space-x-4 bg-black text-white px-12 py-6 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-orange-600 hover:text-black transition-all group shadow-2xl">
              <span>طلب صور حية من المصنع الآن</span>
              <svg className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
           </a>
        </div>
      </div>
    </section>
  );
};
