
import React from 'react';
import { SiteSettings, Language } from '../App';

const charcoalData = {
  ar: [
    {
      title: "فحم البرتقال",
      desc: "نخب أول للشيشة والمطاعم الراقية. يتميز بصلابة القطع وعدم الطرقعة واشتعال يدوم طويلاً.",
      specs: ["كربون: 85%", "رماد: 2.5%", "رطوبة: 4%"],
      icon: "🔥",
      id: "01",
      img: "https://images.unsplash.com/photo-1542366810-449e7769527d?auto=format&fit=crop&q=80",
      msg: "أريد الاستفسار عن تفاصيل وأسعار شحنة فحم البرتقال النخب الأول."
    },
    {
      title: "فحم الليمون",
      desc: "أنقى أنواع الفحم النباتي، عديم الرائحة والدخان تماماً وبنكهة طبيعية مثالية للاستخدام الفاخر.",
      specs: ["كربون: 88%", "رماد: 2%", "رطوبة: 3%"],
      icon: "🍋",
      id: "02",
      img: "https://images.unsplash.com/photo-1599708153386-62e228308412?auto=format&fit=crop&q=80",
      msg: "أهلاً بكم، أريد طلب معلومات عن توفر فحم الليمون الصافي للتصدير."
    },
    {
      title: "فحم المشاوي",
      desc: "مزيج قوي للحرارة العالية والتحمل الشديد، مثالي لمطاعم المشويات الكبرى والكميات الضخمة.",
      specs: ["كربون: 75%", "رماد: 5%", "رطوبة: 6%"],
      icon: "🥩",
      id: "03",
      img: "https://images.unsplash.com/photo-1518005020453-6ca2f793b39a?auto=format&fit=crop&q=80",
      msg: "أريد طلب كميات كبيرة من فحم المشاوي الممتاز لمطاعم في الخارج."
    },
    {
      title: "الفحم المضغوط",
      desc: "فحم صناعي بجودة تصديرية عالية، شكل سداسي منتظم واشتعال متساوٍ جداً وموفر.",
      specs: ["كربون: 80%", "رماد: 4%", "رطوبة: 2%"],
      icon: "📦",
      id: "04",
      img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80",
      msg: "استفسار عن مواصفات وأسعار الفحم المضغوط (سداسي) للبيع بالجملة."
    }
  ],
  en: [
    {
      title: "Orange Charcoal",
      desc: "Premium grade for Shisha and fine dining. Features hard pieces, no sparking, and long-lasting burning.",
      specs: ["Carbon: 85%", "Ash: 2.5%", "Moisture: 4%"],
      icon: "🔥",
      id: "01",
      img: "https://images.unsplash.com/photo-1542366810-449e7769527d?auto=format&fit=crop&q=80",
      msg: "I would like to inquire about the details and prices of the Premium Orange Charcoal shipment."
    },
    {
      title: "Lemon Charcoal",
      desc: "Purest vegetable charcoal, completely odorless and smokeless with a natural flavor perfect for luxury use.",
      specs: ["Carbon: 88%", "Ash: 2%", "Moisture: 3%"],
      icon: "🍋",
      id: "02",
      img: "https://images.unsplash.com/photo-1599708153386-62e228308412?auto=format&fit=crop&q=80",
      msg: "Hello, I would like to request information about the availability of pure Lemon Charcoal for export."
    },
    {
      title: "BBQ Charcoal",
      desc: "Strong blend for high heat and extreme endurance, ideal for large grill restaurants and bulk quantities.",
      specs: ["Carbon: 75%", "Ash: 5%", "Moisture: 6%"],
      icon: "🥩",
      id: "03",
      img: "https://images.unsplash.com/photo-1518005020453-6ca2f793b39a?auto=format&fit=crop&q=80",
      msg: "I want to order large quantities of premium BBQ charcoal for restaurants abroad."
    },
    {
      title: "Hexagonal Charcoal",
      desc: "High export quality industrial charcoal, regular hexagonal shape and very uniform, efficient burning.",
      specs: ["Carbon: 80%", "Ash: 4%", "Moisture: 2%"],
      icon: "📦",
      id: "04",
      img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80",
      msg: "Inquiry about specifications and prices of Hexagonal (Briquette) Charcoal for wholesale."
    }
  ]
};

export const Features: React.FC<{ settings: SiteSettings, lang: Language }> = ({ settings, lang }) => {
  const currentItems = charcoalData[lang];

  return (
    <section id="منتجاتنا" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="ember-text font-black tracking-[0.5em] text-sm uppercase mb-6 block animate-flicker">
            {lang === 'ar' ? 'الكتالوج التجاري الفاخر' : 'Luxury Commercial Catalog'}
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-none">
            {lang === 'ar' ? 'فحم بمواصفات' : 'Charcoal with'} <span className="ember-text italic">{lang === 'ar' ? 'عالمية' : 'Global Standards'}</span>
          </h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            {lang === 'ar' 
              ? `نقدم لكم أفضل ما تجود به الأراضي المصرية، مُصنعة بمعايير ${settings.brandName[lang]} الصارمة لضمان أعلى مستويات الأداء.`
              : `We offer the best of Egyptian lands, manufactured to ${settings.brandName[lang]}'s strict standards for top performance.`}
          </p>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          {currentItems.map((type) => (
            <div key={type.id} className="group relative flex flex-col h-full bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-orange-600/30 transition-all duration-500 shadow-2xl">
              <div className="h-48 overflow-hidden relative">
                <img src={type.img} alt={type.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                <div className={`absolute bottom-4 ${lang === 'ar' ? 'right-6' : 'left-6'} text-4xl group-hover:scale-125 transition-transform`}>{type.icon}</div>
              </div>

              <div className="p-8 pt-4 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-white mb-4 group-hover:ember-text transition-colors">{type.title}</h3>
                <p className="text-slate-500 font-light text-sm mb-8 leading-relaxed flex-grow italic">
                  "{type.desc}"
                </p>
                
                <div className="space-y-3 py-6 border-y border-white/5 mb-8">
                  {type.specs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                      <span className="text-slate-600">{spec.split(':')[0]}</span>
                      <span className="text-slate-300 group-hover:text-orange-500 transition-colors">{spec.split(':')[1]}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <a 
                    href={`https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(type.msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-orange-600 text-black rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-orange-600/10 flex items-center justify-center space-x-reverse space-x-2 group/btn"
                  >
                    <span>{lang === 'ar' ? 'طلب عرض سعر (واتساب)' : 'Request Quote (WhatsApp)'}</span>
                  </a>
                  <a href={`tel:${settings.phone}`} className="block w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl text-center font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                    {lang === 'ar' ? 'اتصال هاتفي' : 'Phone Call'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
