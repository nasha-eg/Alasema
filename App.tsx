
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Offers, initialOffers, Offer } from './components/Offers';
import { Gallery } from './components/Gallery';
import { Blog, initialArticles, Article } from './components/Blog';
import { Testimonials } from './components/Testimonials';
import { AIChatWidget } from './components/AIChatWidget';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';

export type Language = 'ar' | 'en';

export interface SiteSettings {
  brandName: { ar: string, en: string };
  tagline: { ar: string, en: string };
  logoText: string;
  whatsapp: string;
  phone: string;
  email: string;
  address: { ar: string, en: string };
  facebook: string;
  instagram: string;
  seoTitle: string;
  seoDescription: string;
}

const initialSettings: SiteSettings = {
  brandName: { ar: "العاصمة", en: "Al-Asimh" },
  tagline: { ar: "نخب التصدير الأول للفحم المصري", en: "Egypt's Premier Export Grade Charcoal" },
  logoText: "Premium Charcoal",
  whatsapp: "201211111111",
  phone: "00201211111111",
  email: "sales@alasimh.net",
  address: { ar: "الجيزة، مصر", en: "Giza, Egypt" },
  facebook: "https://facebook.com/alasimh",
  instagram: "https://instagram.com/alasimh",
  seoTitle: "شركة العاصمة للفحم | إنتاج وتصدير فحم نباتي نخب أول",
  seoDescription: "شركة العاصمة للفحم: المصدر الأول للفحم المصري عالي الجودة بمواصفات عالمية."
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdminView, setIsAdminView] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>(initialSettings);
  const [offers, setOffers] = useState<Offer[]>(initialOffers);
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [orders, setOrders] = useState([
    { id: 'AS-9921', client: 'Hanz Import Co.', country: 'Germany', qty: '24 Tons', product: 'Orange Charcoal', status: 'On Sea' },
    { id: 'AS-9922', client: 'Arab Palace Group', country: 'KSA', qty: '48 Tons', product: 'BBQ Charcoal', status: 'Customs' },
  ]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.title = settings.brandName[lang] + " | " + settings.logoText;
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang, settings.brandName, settings.logoText]);

  const toggleLang = () => setLang(prev => (prev === 'ar' ? 'en' : 'ar'));

  if (isAdminView) {
    return (
      <AdminDashboard 
        onLogout={() => setIsAdminView(false)} 
        offers={offers} 
        setOffers={setOffers} 
        articles={articles} 
        setArticles={setArticles}
        orders={orders} 
        setOrders={setOrders}
        settings={settings} 
        setSettings={setSettings}
      />
    );
  }

  return (
    <div className={`min-h-screen flex flex-col bg-black selection:bg-orange-600 selection:text-white overflow-x-hidden ${lang === 'en' ? 'font-sans' : 'font-cairo'}`}>
      <Header isScrolled={isScrolled} settings={settings} lang={lang} toggleLang={toggleLang} />
      
      <main className="flex-grow">
        <Hero settings={settings} lang={lang} />
        
        {/* Section: About */}
        <section id="about" className="py-32 bg-[#0a0a0a] relative">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-24 items-center">
              <div className="lg:col-span-2 space-y-10">
                 <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-16 h-[2px] bg-orange-600"></div>
                    <span className="ember-text font-black text-[11px] uppercase tracking-widest">
                      {lang === 'ar' ? 'نحو صدارة الصناعة العالمية' : 'Leading Global Industry Standards'}
                    </span>
                 </div>
                 <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                   {lang === 'ar' ? 'أكثر من مجرد فحم، نقدم ثقة التوريد' : 'More Than Just Charcoal, We Provide Supply Trust'}
                 </h2>
                 <p className="text-slate-400 text-xl font-light italic max-w-2xl leading-relaxed">
                   {lang === 'ar' 
                     ? '"نحن نؤمن أن جودة الفحم تعكس جودة الشراكة. لذا نلتزم بأعلى معايير الرقابة من قلب مزارعنا في مصر."' 
                     : '"We believe quality charcoal reflects quality partnership. Committed to the highest standards from Egypt to the world."'}
                 </p>
              </div>
              <div className="relative p-12 bg-[#111] rounded-[4rem] border border-white/5 text-center shadow-2xl">
                 <h3 className="text-2xl font-black text-white mb-6 italic">{lang === 'ar' ? 'ميثاق الجودة' : 'Quality Charter'}</h3>
                 <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-10">
                   {lang === 'ar' ? 'نضمن الجودة أو نسترد الشحنة بالكامل' : 'We guarantee quality or we take it back'}
                 </p>
                 <a href={`https://wa.me/${settings.whatsapp}`} className="block py-6 bg-white text-black font-black text-[10px] uppercase rounded-2xl hover:bg-orange-600 transition-all">
                   {lang === 'ar' ? 'تحميل الكتالوج' : 'Download Catalog'}
                 </a>
              </div>
           </div>
        </section>

        <Features settings={settings} lang={lang} />
        <Offers offers={offers} settings={settings} lang={lang} />
        <Gallery lang={lang} />
        <Blog articles={articles} settings={settings} lang={lang} />
        <Testimonials lang={lang} />

        <div className="py-12 bg-[#050505] text-center">
           <button onClick={() => setIsAdminView(true)} className="text-[8px] text-slate-800 font-black tracking-[0.8em] hover:text-orange-500 opacity-30 hover:opacity-100">
             DASHBOARD LOGIN
           </button>
        </div>
      </main>

      <AIChatWidget settings={settings} lang={lang} />
      <Footer settings={settings} lang={lang} />
      
      {/* Scroll to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 left-10 w-14 h-14 bg-orange-600 text-black rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-all z-50 font-bold"
      >
        ↑
      </button>
    </div>
  );
};

export default App;
