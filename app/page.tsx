"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showChatbotSante, setShowChatbotSante] = useState(false);
  const [showChatbotBusiness, setShowChatbotBusiness] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // LIENS MIS À JOUR POUR CORRESPONDRE À TES DOSSIERS GITHUB
  const categories = [
    { title: "ALOE VIA", desc: "La puissance de la nature.", link: "https://aloe-vera-beaute.com/aloe-via.php?id_client=1523", img: "https://i.postimg.cc/7b74HyHm/Aloe-via.jpg" },
    { title: "LIFETAKT", desc: "Votre santé au quotidien.", link: "https://aloe-vera-beaute.com/sante.php?id_client=1523", img: "https://i.postimg.cc/s1SzjRjT/Lifetakt.jpg" },
    { title: "ESTHÉTIQUE", desc: "Technologie Zeitgard Pro.", link: "/blog/zeitgard-pro", img: "https://i.postimg.cc/Hj5mYCY3/Esthetique.jpg" },
    { title: "PARFUMS", desc: "Showroom Interactif 2026.", link: "/blog/parfums-2026", img: "https://i.postimg.cc/3Wph8H8C/Parfums.jpg" },
    { title: "CATALOGUE", desc: "Feuilletez la collection.", link: "https://media.lrworld.com/Collection/FR_fr/index.html", img: "https://i.postimg.cc/py8vWtWJ/Catalogue.jpg" },
    { title: "RÉGIME", desc: "Programme Body Mission.", link: "/blog/nutrition-body-mission", img: "https://i.postimg.cc/xqHQfSfP/Regime.jpg" },
    { title: "OPPORTUNITÉ", desc: "Créez votre propre business.", link: "/blog/marketing-reseau", img: "https://i.postimg.cc/23vYkfkd/Promotions.jpg" },
    { title: "E-COMMERCE", desc: "Votre boutique en ligne.", link: "https://shop.lrworld.com/home/fr/frient=1523?casrnc=8da0c", img: "https://i.postimg.cc/hhxnDqDL/E-commerce.jpg" }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white font-['Poppins'] text-slate-900 italic">
      
      {/* HEADER UNIVERSEL */}
      <header className="w-full py-4 px-6 md:py-6 md:px-8 flex justify-between items-center bg-white sticky top-0 z-[100] shadow-sm border-b border-orange-100 italic">
        <div className="flex items-center gap-4 italic">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[#FF8C69] shadow-sm italic text-center">
            <img 
              src="https://i.postimg.cc/q7xC1X3S/20230714-222216.jpg" 
              alt="Arnaud Bain" 
              className="w-full h-full object-cover italic text-center"
            />
          </div>
          <div className="flex flex-col italic text-center">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-[#006937] italic leading-none text-center">LR</span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.1em] text-slate-400 font-bold italic text-center">Arnaud Bain</span>
          </div>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6 italic text-center">
          <Link href="/blog/promotions" className="text-[10px] font-bold uppercase tracking-widest text-rose-600 hover:text-black transition-all italic">Promotions</Link>
          <Link href="/blog" className="text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-[#FF8C69] transition-all italic">Blog</Link>
          <button onClick={() => setShowChatbotBusiness(true)} className="text-[10px] font-bold uppercase tracking-widest bg-[#FF8C69] text-white px-5 py-2 rounded-full shadow-md hover:bg-black transition-all italic">Opportunité</button>
        </div>

        {/* Bouton Burger */}
        <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="md:hidden flex flex-col gap-1.5 p-2 z-[110] relative italic text-center">
          <div className={`w-6 h-0.5 bg-slate-900 transition-all ${showMobileMenu ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-900 transition-all ${showMobileMenu ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-900 transition-all ${showMobileMenu ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Menu Mobile */}
        <div className={`fixed inset-0 bg-white z-[105] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'} md:hidden italic text-center`}>
          <Link href="/" onClick={() => setShowMobileMenu(false)} className="text-2xl font-black text-slate-800 uppercase italic">Accueil</Link>
          <Link href="/blog/promotions" onClick={() => setShowMobileMenu(false)} className="text-2xl font-black text-rose-600 uppercase italic">Promotions</Link>
          <Link href="/blog" onClick={() => setShowMobileMenu(false)} className="text-2xl font-black text-slate-800 uppercase italic">Blog</Link>
          <button onClick={() => { setShowMobileMenu(false); setShowChatbotBusiness(true); }} className="text-2xl font-black text-[#FF8C69] uppercase italic">Opportunité</button>
          <button onClick={() => setShowMobileMenu(false)} className="mt-8 text-sm font-bold text-slate-400 uppercase tracking-widest italic font-['Poppins'] text-center">Fermer ×</button>
        </div>
      </header>

      <main className="flex-1 italic text-center">
        {/* HERO SECTION */}
        <section className="py-20 px-6 bg-gradient-to-b from-orange-50 to-white text-center italic text-center">
          <h1 className="text-4xl md:text-7xl font-black text-[#006937] mb-6 tracking-tighter italic text-center">Votre Futur Santé & Business</h1>
          <p className="text-slate-500 mb-12 max-w-2xl mx-auto font-bold uppercase tracking-[0.2em] text-sm opacity-80 italic text-center">Expertise & Liberté financière</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 italic text-center">
            <button onClick={() => setShowChatbotSante(true)} className="group relative w-full md:w-auto bg-[#006937] text-white px-10 py-6 rounded-full font-black shadow-xl hover:scale-105 transition-all text-lg italic flex flex-col items-center text-center">
              <span>✨ Diagnostic Bien-être</span>
              <span className="text-[10px] opacity-80 font-medium italic">Accès immédiat 🚀</span>
            </button>
            <button onClick={() => setShowChatbotBusiness(true)} className="group relative w-full md:w-auto bg-[#FF8C69] text-white px-10 py-6 rounded-full font-black shadow-xl hover:scale-105 transition-all text-lg italic flex flex-col items-center text-center">
              <span>💰 Plan de Carrière</span>
              <span className="text-[10px] opacity-80 font-medium italic">Accès immédiat 📈</span>
            </button>
          </div>
        </section>

        {/* GRILLE UNIVERS */}
        <section className="py-16 px-6 max-w-7xl mx-auto italic text-center">
          <h2 className="text-2xl font-black mb-10 border-l-4 border-[#FF8C69] pl-4 uppercase tracking-tighter italic text-left">Nos Univers LR</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 italic text-center">
            {categories.map((cat, i) => (
              <Link key={i} href={cat.link} className="group flex flex-col items-center bg-white border border-slate-100 rounded-3xl p-6 hover:shadow-2xl hover:border-[#FF8C69] transition-all italic text-center">
                <div className="w-full h-40 flex items-center justify-center overflow-hidden mb-4 italic text-center">
                  <img src={cat.img} alt={cat.title} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500 italic text-center" />
                </div>
                <h3 className="text-md font-black text-[#006937] uppercase mb-1 italic text-center">{cat.title}</h3>
                <p className="text-[10px] text-slate-400 font-bold italic text-center">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* SECTION RECRUTEMENT */}
        <section className="py-20 px-6 bg-slate-900 text-white rounded-[4rem] mx-4 my-12 shadow-2xl relative overflow-hidden italic text-center text-center">
          <div className="max-w-4xl mx-auto text-center relative z-10 italic text-center">
            <span className="bg-[#FF8C69] text-white px-4 py-1 rounded-full font-black uppercase tracking-widest text-[10px] mb-6 inline-block italic text-center">Rejoignez l'Élite</span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-none italic text-center">Devenez votre propre <span className="text-[#FF8C69]">Patron</span></h2>
            <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto font-medium italic text-center">Accédez à notre plateforme de formation et lancez votre activité clé en main.</p>
            <Link href="/blog/marketing-reseau" className="bg-white text-slate-900 px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:bg-[#FF8C69] hover:text-white transition-all transform hover:scale-105 uppercase inline-block italic font-['Poppins'] text-center">
              🚀 Je découvre l'opportunité
            </Link>
          </div>
          <div className="absolute -bottom-10 -left-10 text-[15rem] font-black opacity-5 select-none pointer-events-none italic text-center">LR PRO</div>
        </section>
      </main>

      <footer className="py-10 bg-slate-50 text-center text-slate-400 text-[10px] uppercase font-bold tracking-[0.3em] italic text-center">
        Arnaud Bain — Partenaire Indépendant LR • Mirambeau 2026
      </footer>

      {/* MODALS CHATBOTS */}
      {(showChatbotSante || showChatbotBusiness) && (
        <div className="fixed inset-0 z-[1000] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 italic text-center">
          <div className="relative w-full h-full md:w-[480px] md:h-[85vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden italic text-center">
             <button 
                onClick={() => { setShowChatbotSante(false); setShowChatbotBusiness(false); }} 
                className="absolute top-6 right-6 z-[1001] bg-white text-slate-900 w-12 h-12 rounded-full font-bold shadow-2xl hover:bg-red-500 hover:text-white transition-all flex items-center justify-center italic text-xl text-center"
             >✕</button>
             <iframe 
                src={showChatbotSante ? "https://limova-web-sltj.onrender.com/embededChatbot?connectionId=937780da-2acb-4270-8654-59226691fbe6&mode=iframe" : "https://limova-web-sltj.onrender.com/embededChatbot?connectionId=562d09be-2114-4e5d-b2a9-84050bb091a7&mode=iframe"} 
                style={{ border: "none", width: "100%", height: "100%" }} 
                title="Chatbot"
             />
          </div>
        </div>
      )}
    </div>
  );
}
