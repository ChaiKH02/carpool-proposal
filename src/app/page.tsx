"use client";

import { useState } from "react";
import { content } from "../lib/translation";
import { MapPin, Car, ShieldCheck, Users, Briefcase, Repeat, ChevronRight } from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "zh">("en");
  const t = content[lang];

  const toggleLanguage = () => {
    setLang(lang === "en" ? "zh" : "en");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#1e3a5f] text-white z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-wider">CORRIDOR CARPOOL</div>
          <button 
            onClick={toggleLanguage}
            className="px-4 py-2 border border-white/30 rounded-full text-sm hover:bg-white/10 transition"
          >
            {t.nav.switchLang}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-[#1e3a5f] text-white pt-32 pb-24 px-6 rounded-br-[100px]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-3xl leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-2xl mb-8">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="bg-white/20 px-6 py-2 rounded-full backdrop-blur-sm">{t.hero.badge1}</span>
            <span className="bg-white/20 px-6 py-2 rounded-full backdrop-blur-sm">{t.hero.badge2}</span>
            <span className="bg-teal-500 px-6 py-2 rounded-full font-medium shadow-lg">{t.hero.badge3}</span>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1e3a5f] mb-10">{t.summary.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-red-500">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><MapPin className="text-red-500"/> {t.summary.problemTitle}</h3>
            <p className="text-slate-600 leading-relaxed">{t.summary.problemDesc}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-teal-500">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Car className="text-teal-500"/> {t.summary.propTitle}</h3>
            <p className="text-slate-600 leading-relaxed">{t.summary.propDesc}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#1e3a5f]">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><ShieldCheck className="text-[#1e3a5f]"/> {t.summary.modelTitle}</h3>
            <p className="text-slate-600 leading-relaxed">{t.summary.modelDesc}</p>
          </div>
        </div>
      </section>

      {/* Product Steps */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-12 text-center">{t.product.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {t.product.steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg">
                  {idx + 1}
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market & Target Customer */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">{t.market.title}</h2>
            <p className="text-lg text-teal-600 font-semibold mb-6">{t.market.beachhead}</p>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-4">
              <h3 className="font-bold flex items-center gap-2 mb-2"><Users className="text-[#1e3a5f]"/> {t.market.primary}</h3>
              <p className="text-slate-600 text-sm">{t.market.primaryDesc}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold flex items-center gap-2 mb-2"><Briefcase className="text-[#1e3a5f]"/> {t.market.hubs}</h3>
            </div>
          </div>
          
          {/* Business Model */}
          <div className="bg-[#1e3a5f] text-white p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-2">{t.business.title}</h2>
            <p className="text-blue-200 text-sm mb-8">{t.business.subtitle}</p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                <Repeat className="text-teal-400"/> <span>{t.business.free}</span>
              </li>
              <li className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                <ShieldCheck className="text-teal-400"/> <span>{t.business.plus}</span>
              </li>
              <li className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                <Users className="text-teal-400"/> <span>{t.business.corporate}</span>
              </li>
              <li className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                <Car className="text-teal-400"/> <span>{t.business.partners}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-slate-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-10 text-center">{t.roadmap.title}</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[t.roadmap.phase0, t.roadmap.phase1, t.roadmap.phase2, t.roadmap.phase3].map((phase, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden group hover:shadow-md transition">
                <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
                <p className="font-semibold text-slate-800 pr-4">{phase}</p>
                <ChevronRight className="absolute bottom-4 right-4 text-slate-300 group-hover:text-teal-500 transition"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Corridor Carpool. All rights reserved.</p>
        <p className="mt-2">Founder review & early-stage planning</p>
      </footer>
    </div>
  );
}