
import React, { useState } from 'react';
import { Offer } from './Offers';
import { Article } from './Blog';
import { SiteSettings } from '../App';

interface AdminDashboardProps {
  onLogout: () => void;
  offers: Offer[];
  setOffers: React.Dispatch<React.SetStateAction<Offer[]>>;
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  orders: any[];
  setOrders: React.Dispatch<React.SetStateAction<any[]>>;
  settings: SiteSettings;
  setSettings: React.Dispatch<React.SetStateAction<SiteSettings>>;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  onLogout, offers, setOffers, articles, setArticles, orders, setOrders, settings, setSettings
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ user: '', pass: '' });
  const [activeTab, setActiveTab] = useState('settings');
  const [tempSettings, setTempSettings] = useState<SiteSettings>(settings);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.user === 'admin' && loginForm.pass === '1234') setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6 font-sans">
        <form onSubmit={handleLogin} className="w-full max-w-md bg-[#0a0a0a] border border-orange-600/20 rounded-[3rem] p-12 text-center space-y-8">
           <h2 className="text-2xl font-black text-white">Admin Dashboard</h2>
           <div className="space-y-4">
              <input type="text" placeholder="Username" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none" onChange={e => setLoginForm({...loginForm, user: e.target.value})} />
              <input type="password" placeholder="Password" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none" onChange={e => setLoginForm({...loginForm, pass: e.target.value})} />
           </div>
           <button className="w-full py-5 ember-gradient text-black font-black rounded-2xl">LOGIN</button>
           <p className="text-[10px] text-slate-600 uppercase tracking-widest">Secured by Social Brand Co.</p>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white flex font-sans">
      <aside className="w-72 bg-[#0a0a0a] border-l border-white/5 p-8 flex flex-col space-y-2 shadow-2xl">
        <div className="mb-12 font-black text-orange-600 text-xl italic uppercase">Social Brand CMS</div>
        {['settings', 'offers', 'blog', 'orders'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`w-full text-right px-6 py-4 rounded-xl font-bold uppercase text-xs tracking-widest transition-all ${activeTab === tab ? 'bg-orange-600 text-black' : 'text-slate-500 hover:bg-white/5'}`}>
            {tab}
          </button>
        ))}
        <div className="flex-grow"></div>
        <button onClick={onLogout} className="py-4 bg-red-600/10 text-red-500 rounded-xl font-black text-[10px] uppercase">Logout</button>
      </aside>

      <main className="flex-grow p-12 overflow-y-auto">
        {activeTab === 'settings' && (
          <div className="max-w-4xl space-y-12 animate-in fade-in duration-500">
            <section className="bg-[#0a0a0a] p-10 rounded-[3rem] border border-white/5 space-y-8 shadow-2xl">
              <h3 className="text-orange-500 font-black text-xs uppercase tracking-widest">Global Identity (AR/EN)</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Brand Name (AR)</label>
                  <input type="text" value={tempSettings.brandName.ar} onChange={e => setTempSettings({...tempSettings, brandName: {...tempSettings.brandName, ar: e.target.value}})} className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Brand Name (EN)</label>
                  <input type="text" value={tempSettings.brandName.en} onChange={e => setTempSettings({...tempSettings, brandName: {...tempSettings.brandName, en: e.target.value}})} className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Tagline (AR)</label>
                  <input type="text" value={tempSettings.tagline.ar} onChange={e => setTempSettings({...tempSettings, tagline: {...tempSettings.tagline, ar: e.target.value}})} className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Tagline (EN)</label>
                  <input type="text" value={tempSettings.tagline.en} onChange={e => setTempSettings({...tempSettings, tagline: {...tempSettings.tagline, en: e.target.value}})} className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-sm" />
                </div>
              </div>
            </section>
            <button onClick={() => setSettings(tempSettings)} className="px-20 py-6 ember-gradient text-black font-black rounded-2xl shadow-2xl hover:scale-105 transition-all">SAVE CHANGES</button>
          </div>
        )}
      </main>
    </div>
  );
};
