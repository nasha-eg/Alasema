
import React from 'react';

const testimonials = [
  {
    name: "روبيرت هانز",
    role: "مستورد فحم - ألمانيا",
    content: "نتعامل مع العاصمة منذ 3 سنوات، فحم البرتقال الخاص بهم هو الأفضل في السوق الأوروبي من حيث طول مدة الاشتعال ونقاء الرماد الأبيض.",
    avatar: "https://i.pravatar.cc/150?u=10"
  },
  {
    name: "أبو فهد القحطاني",
    role: "صاحب سلسلة مطاعم مشويات - السعودية",
    content: "جربنا أنواعاً كثيرة، لكن فحم المشاوي من العاصمة يعطي حرارة ثابتة جداً ولا يصدر شرراً أو دخاناً يزعج الزبائن. نعتمد عليهم بشكل كلي.",
    avatar: "https://i.pravatar.cc/150?u=11"
  },
  {
    name: "ماركو سيلفا",
    role: "وكيل توزيع - اليونان",
    content: "الالتزام بمواعيد الشحن ومواصفات التعبئة والتغليف هو ما يميز شركة العاصمة. المنتج يصل دائماً في حالة ممتازة وبنسبة تكسير شبه منعدمة.",
    avatar: "https://i.pravatar.cc/150?u=12"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-right">
        <div className="text-center mb-24">
          <span className="ember-text font-bold tracking-[0.5em] uppercase text-xs mb-4 block">ثقة شركائنا</span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">قالوا عن <span className="ember-text italic font-light tracking-normal">العاصمة</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="group relative pt-12">
              <div className="absolute top-0 right-0 text-[10rem] leading-none text-orange-600/10 font-serif select-none group-hover:text-orange-600/20 transition-colors pointer-events-none">“</div>
              <div className="relative bg-[#1a1a1a] p-10 border-t-2 border-transparent group-hover:border-orange-600 transition-all duration-500 h-full rounded-b-xl shadow-xl">
                <p className="text-slate-300 text-lg leading-relaxed italic mb-10 font-light">
                  {t.content}
                </p>
                <div className="flex items-center space-x-reverse space-x-5 pt-8 border-t border-white/5">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-orange-600/30 group-hover:border-orange-600 transition-all" />
                  <div>
                    <h4 className="text-white font-black text-sm">{t.name}</h4>
                    <p className="ember-text text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
