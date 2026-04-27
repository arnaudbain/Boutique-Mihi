"use client";

import React, { useState } from "react";

export default function Home() {
  const [showChatbotSante, setShowChatbotSante] = useState(false);
  const [showChatbotBusiness, setShowChatbotBusiness] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const categories = [
    { title: "VISAGE", desc: "Soins ciblés et innovants.", img: "https://i.postimg.cc/7b74HyHm/Aloe-via.jpg" },
    { title: "CORPS", desc: "Hygiène et nutrition de la peau.", img: "https://i.postimg.cc/s1SzjRjT/Lifetakt.jpg" },
    { title: "MAQUILLAGE", desc: "Sublimez votre beauté naturelle.", img: "https://i.postimg.cc/Hj5mYCY3/Esthetique.jpg" },
    { title: "MAISON", desc: "Entretien écologique & efficace.", img: "https://i.postimg.cc/xqHQfSfP/Regime.jpg" },
    { title: "PARFUMS", desc: "Fragrances haut de gamme.", img: "https://i.postimg.cc/3Wph8H8C/Parfums.jpg" },
    { title: "BIEN-ÊTRE", desc: "Suppléments et huiles.", img: "https://i.postimg.cc/py8vWtWJ/Catalogue.jpg" },
    { title: "CHEVEUX", desc: "Force et brillance au quotidien.", img: "https://i.postimg.cc/23vYkfkd/Promotions.jpg" },
    { title: "PROMOTIONS", desc: "Vos offres Mihi du moment.", img: "https://i.postimg.cc/hhxnDqDL/E-commerce.jpg" }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
      
      {/* HEADER */}
      <header className="w-full py-4 px-6 flex justify-between items-center bg-white sticky top-0 z-[100] shadow-sm border-b border-slate-50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FF8C69]">
            <img 
              src="https://i.postimg.cc/q7xC1X3S/20230714-222216.jpg" 
              alt="Arnaud Bain" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-2xl font-black tracking-tighter text-[#1b4332] leading-none">MIHI</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#FF8C69] font-bold">Arnaud Bain • Partner</span>
          </div>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 cursor-pointer hover:text-[#FF8C69]">Catalogue</span>
          <button onClick={() => setShowChatbotBusiness(true)} className="text-[11px] font-bold uppercase tracking-widest border-2 border-[#FF8C69] text-[#FF8C69] px-6 py-2 rounded-full hover:bg-[#FF8C69] hover:text-white transition-all shadow-sm">Business</button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="md:hidden p-2 flex flex-col gap-1">
           <div className="w-6 h-0.5 bg-[#1b4332]"></div>
           <div className="w-6 h-0.5 bg-[#1b4332]"></div>
           <div className="w-6 h-0.5 bg-[#1b4332]"></div>
        </button>
      </header>

      {/* Menu Mobile */}
      {showMobileMenu && (
        <div className="md:hidden bg-white border-b border-slate-100 flex flex-col p-6 gap-4 text-center animate-in fade-in slide-in-from-top-4">
          <span className="font-bold text-slate-600 uppercase tracking-widest text-sm">Catalogue</span>
          <button onClick={() => {setShowChatbotBusiness(true); setShowMobileMenu(false);}} className="bg-[#FF8C69] text-white py-3 rounded-full font-bold">Business Mihi</button>
        </div>
      )}

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative py-24 px-6 text-center bg-[#f8f9fa]">
          <div className="max-w-4xl mx-auto">
            <span className="text-[#FF8C69] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Just for you</span>
            <h1 className="text-5xl md:text-8xl font-black text-[#1b4332] mb-8 tracking-tighter leading-tight">
              L'excellence de la cosmétique <span className="text-[#FF8C69]">Mihi</span>
            </h1>
            <p className="text-slate-500 mb-12 max-w-xl mx-auto text-lg font-medium leading-relaxed">
              Découvrez une gamme de produits conçue pour votre bien-être quotidien, alliant nature et technologie.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button onClick={() => setShowChatbotSante(true)} className="w-full md:w-auto bg-[#1b4332] text-white px-12 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-all">
                ✨ Diagnostic Beauté
              </button>
              <button onClick={() => setShowChatbotBusiness(true)} className="w-full md:w-auto bg-white border-2 border-slate-200 text-slate-900 px-12 py-5 rounded-full font-bold shadow-sm hover:border-[#FF8C69] transition-all">
                📊 Plan de Carrière
              </button>
            </div>
          </div>
        </section>

        {/* UNIVERS PRODUITS */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-black text-[#1b4332] uppercase tracking-tighter">Nos Univers</h2>
              <div className="w-12 h-1 bg-[#FF8C69] mt-2 mx-auto md:mx-0"></div>
            </div>
            <p className="text-slate-400 font-medium text-sm">Explorez toutes nos gammes Mihi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="group cursor-pointer text-center">
                <div className="aspect-square bg-[#fcfcfc] rounded-2xl flex items-center justify-center overflow-hidden mb-6 border border-slate-50 group-hover:border-[#FF8C69]/20 transition-all shadow-sm group-hover:shadow-xl">
                  <img src={cat.img} alt={cat.title} className="w-2/3 h-2/3 object-contain group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-lg font-black text-[#1b4332] mb-1 uppercase tracking-tight">{cat.title}</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{cat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BANNIÈRE OPPORTUNITÉ */}
        <section className="py-20 px-6 mx-4 my-12 bg-[#1b4332] rounded-[3rem] text-white relative overflow-hidden text-center">
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Devenez Partenaire Mihi</h2>
              <p className="text-emerald-100/70 mb-10 text-lg max-w-2xl mx-auto font-medium">
                Rejoignez Arnaud Bain dans l'aventure Mihi et créez votre propre succès.
              </p>
              <button className="bg-[#FF8C69] text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:bg-white hover:text-[#1b4332] transition-all transform hover:scale-105">
                🚀 Je m'inscris maintenant
              </button>
           </div>
        </section>
      </main>

      <footer className="py-12 bg-white border-t border-slate-50 text-center">
        <p className="text-[#1b4332] font-black text-xl mb-4 tracking-tighter">MIHI</p>
        <p className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.4em]">
          Arnaud Bain — Partenaire Indépendant Mihi • 2026
        </p>
      </footer>

      {/* CHATBOTS */}
      {(showChatbotSante || showChatbotBusiness) && (
        <div className="fixed inset-0 z-[1000] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full h-[80vh] md:w-[480px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border-4 border-[#1b4332]">
             <button 
                onClick={() => { setShowChatbotSante(false); setShowChatbotBusiness(false); }} 
                className="absolute top-4 right-4 z-[1001] bg-[#1b4332] text-white w-8 h-8 rounded-full font-bold"
             >✕</button>
             <iframe 
                src={showChatbotSante ? "https://limova-web-sltj.onrender.com/embededChatbot?connectionId=937780da-2acb-4270-8654-59226691fbe6&mode=iframe" : "https://limova-web-sltj.onrender.com/embededChatbot?connectionId=562d09be-2114-4e5d-b2a9-84050bb091a7&mode=iframe"} 
                className="w-full h-full border-none"
                title="Chatbot"
             />
          </div>
        </div>
      )}
    </div>
  );
}
