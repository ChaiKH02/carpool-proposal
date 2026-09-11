"use client";

import { useState } from "react";
import { content } from "../lib/translation";
import { 
  MapPin, Car, ShieldCheck, Briefcase, Repeat, TrendingUp, Wallet, Target, 
  Info, CheckCircle2, AlertTriangle, Scale, Users, LayoutDashboard, Flag 
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState<"en" | "zh">("en");
  const t = content[lang];
  const toggleLanguage = () => setLang(lang === "en" ? "zh" : "en");

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-teal-200 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#112240]/90 backdrop-blur-md text-white z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-widest flex items-center gap-2">
            <Car className="text-teal-400" /> CORRIDOR
          </div>
          <button onClick={toggleLanguage} className="px-4 py-2 border border-white/30 rounded-full text-sm hover:bg-white/10 transition-all">
            {t.nav.switchLang}
          </button>
        </div>
      </nav>

      {/* PAGE 1: HERO */}
      <header className="bg-[#0a192f] text-white pt-36 pb-24 px-6 relative">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-6xl mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-10 font-light">{t.hero.subtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <span className="bg-white/10 px-6 py-2 rounded-full border border-white/20 text-sm font-medium">{t.hero.badge1}</span>
            <span className="bg-white/10 px-6 py-2 rounded-full border border-white/20 text-sm font-medium">{t.hero.badge2}</span>
            <span className="bg-teal-500/20 text-teal-300 border border-teal-500/50 px-6 py-2 rounded-full text-sm font-medium">{t.hero.badge3}</span>
          </div>
        </motion.div>
      </header>

      {/* PAGE 2: EXEC SUMMARY + ASK */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-sm font-bold text-teal-600 uppercase tracking-widest">{t.page2_summary.entryTitle}</p>
              <h2 className="text-2xl font-extrabold text-slate-800 mt-1">{t.page2_summary.entryRoute}</h2>
              <p className="text-slate-500 text-sm mt-2 max-w-lg">{t.page2_summary.entryDesc}</p>
            </div>
            <div className="flex flex-col items-end text-right border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8">
              <span className="text-3xl font-extrabold text-[#0a192f]">{t.page2_summary.ask}</span>
              <span className="text-teal-600 font-semibold flex items-center gap-1 mt-1"><TrendingUp size={16}/> {t.page2_summary.runway}</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#0a192f] mb-8">{t.page2_summary.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border-t-4 border-red-500 shadow-sm">
              <h3 className="text-xl font-bold mb-3">{t.page2_summary.problemTitle}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.page2_summary.problemDesc}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border-t-4 border-teal-500 shadow-sm">
              <h3 className="text-xl font-bold mb-3">{t.page2_summary.propTitle}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.page2_summary.propDesc}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border-t-4 border-[#0a192f] shadow-sm">
              <h3 className="text-xl font-bold mb-3">{t.page2_summary.modelTitle}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.page2_summary.modelDesc}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PAGE 3: PROBLEM DEEP DIVE */}
      <section className="bg-slate-100 py-20 px-6 border-y border-slate-200">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a192f] mb-2">{t.page3_problem.title}</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">{t.page3_problem.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.page3_problem.cards.map((card, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h4 className="font-bold text-lg mb-3 text-slate-800">{card.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PAGE 4 & 5: MARKET & TARGET */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <h2 className="text-3xl font-bold text-[#0a192f] mb-10"><Target className="inline text-teal-500 mb-1 mr-2"/>{t.page4_5_market.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-[#0a192f] text-white p-8 rounded-2xl mb-6 shadow-lg">
                <p className="font-semibold text-teal-400 mb-4">{t.page4_5_market.marketFrame}</p>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg text-sm border border-white/10"><MapPin className="inline w-4 h-4 mr-2"/>{t.page4_5_market.hubs}</div>
                  <div className="bg-white/10 p-4 rounded-lg text-sm border border-white/10"><Users className="inline w-4 h-4 mr-2"/>{t.page4_5_market.clusters}</div>
                </div>
              </div>
              <p className="text-teal-600 font-bold bg-teal-50 px-4 py-3 rounded-lg border border-teal-100">{t.page4_5_market.beachhead}</p>
            </div>

            <div className="space-y-4">
              {t.page4_5_market.customers.map((cust, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-slate-800 mb-2">{cust.type}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{cust.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* PAGE 6: PRODUCT & MVP */}
      <section className="bg-[#0a192f] py-20 px-6 text-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center"><Repeat className="inline text-teal-400 mb-1 mr-2"/>{t.page6_product.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {t.page6_product.steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-teal-500/20 transition">
                <div className="w-12 h-12 bg-teal-500 text-[#0a192f] rounded-full flex items-center justify-center font-bold mb-4">{idx + 1}</div>
                <h4 className="font-bold mb-2 text-sm">{step.title}</h4>
                <p className="text-xs text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-teal-900/40 border border-teal-500/30 p-6 rounded-xl"><CheckCircle2 className="text-teal-400 inline mb-1 mr-2"/>{t.page6_product.includes}</div>
            <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl text-slate-300"><AlertTriangle className="text-red-400 inline mb-1 mr-2"/>{t.page6_product.excludes}</div>
          </div>
        </motion.div>
      </section>

      {/* PAGE 7: BUSINESS MODEL */}
      <section className="py-20 px-6 bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a192f] mb-2"><Wallet className="inline text-teal-500 mb-1 mr-2"/>{t.page7_business.title}</h2>
          <p className="text-slate-500 mb-10">{t.page7_business.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {t.page7_business.layers.map((layer, idx) => (
              <div key={idx} className="border border-slate-200 p-6 rounded-xl bg-slate-50 hover:shadow-md transition">
                <h4 className="font-bold text-slate-800 text-lg">{layer.title}</h4>
                <p className="text-teal-600 font-semibold mb-3">{layer.price}</p>
                <p className="text-sm text-slate-600">{layer.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 text-amber-800 px-6 py-4 rounded-xl text-sm font-medium flex items-start gap-3">
            <Info className="shrink-0 mt-0.5 w-5 h-5"/> {t.page7_business.gate}
          </div>
        </motion.div>
      </section>

      {/* PAGE 8 & 9: LANDSCAPE & REGULATORY */}
      <section className="bg-slate-100 py-20 px-6 border-t border-slate-200">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-[#0a192f] mb-4"><LayoutDashboard className="inline text-teal-500 mb-1 mr-2"/>{t.page8_9_landscape_regulatory.compTitle}</h2>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">{t.page8_9_landscape_regulatory.compDesc}</p>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-sm text-slate-600 font-mono flex flex-col gap-3">
              <div><span className="font-bold text-slate-800">KLCarPool:</span> Reported waitlist/pre-launch.</div>
              <div><span className="font-bold text-slate-800">APRide:</span> University-focused.</div>
              <div><span className="font-bold text-slate-800">Scoutrans:</span> Limited visible footprint.</div>
              <div><span className="font-bold text-slate-800">Grab GroupRide:</span> Paid-driver unit economics.</div>
              <div><span className="font-bold text-slate-800">TRIBBU / BlaBlaCar:</span> International reference.</div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#0a192f] mb-4"><Scale className="inline text-teal-500 mb-1 mr-2"/>{t.page8_9_landscape_regulatory.regTitle}</h2>
            <p className="text-slate-500 text-sm mb-6 italic">{t.page8_9_landscape_regulatory.regDesc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.page8_9_landscape_regulatory.regs.map((reg, idx) => (
                <div key={idx} className="bg-white border-l-4 border-[#0a192f] p-5 rounded-r-xl shadow-sm">
                  <h4 className="font-bold text-sm mb-2">{reg.title}</h4>
                  <p className="text-xs text-slate-600">{reg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* PAGE 10: ROADMAP */}
      <section className="py-20 px-6 bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a192f] mb-12 text-center"><Flag className="inline text-teal-500 mb-1 mr-2"/>{t.page10_roadmap.title}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {t.page10_roadmap.phases.map((phase, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col h-full hover:-translate-y-1 transition-transform">
                <div className="text-xs font-bold bg-[#0a192f] text-white self-start px-3 py-1 rounded-full mb-4">{phase.phase}</div>
                <p className="text-sm text-slate-700 mb-6 flex-grow">{phase.desc}</p>
                <div className="text-xs font-semibold text-teal-700 bg-teal-50 p-3 rounded-lg border border-teal-100">{phase.gate}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PAGE 11: FINANCIALS & FUNDS */}
      <section className="bg-[#0a192f] py-20 px-6 text-white border-y border-white/10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2">{t.page11_financials.title}</h2>
            <p className="text-slate-400 text-sm italic">{t.page11_financials.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Trajectory Table */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-white/10">
                    {t.page11_financials.trajHeaders.map((h, i) => <th key={i} className="p-4 font-semibold">{h}</th>)}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {t.page11_financials.trajData.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition">
                      {row.map((cell, j) => <td key={j} className={`p-4 ${j===0 ? 'font-medium text-slate-300' : 'text-white'}`}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Funds Table */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-teal-900/50">
                    <th className="p-4 font-semibold text-teal-300 w-1/3">{t.page11_financials.fundsHeaders[0]}</th>
                    <th className="p-4 font-semibold text-teal-300">{t.page11_financials.fundsHeaders[1]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {t.page11_financials.fundsData.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition group">
                      <td className="p-4 font-medium text-slate-300 align-top">
                        {row[0]} <br/> <span className="text-teal-400 font-bold block mt-1">{row[1]}</span>
                      </td>
                      <td className="p-4 text-slate-400 leading-relaxed text-xs align-top group-hover:text-slate-200">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PAGE 12: RISKS & NEXT STEPS */}
      <section className="py-20 px-6 bg-slate-50">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a192f] mb-12 text-center">{t.page12_risks.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              {t.page12_risks.risks.map((risk, idx) => (
                <div key={idx} className="bg-white border-l-4 border-red-400 p-6 rounded-r-xl shadow-sm">
                  <h4 className="font-bold text-slate-800 mb-1">{risk.title}</h4>
                  <p className="text-sm text-slate-600">{risk.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex-grow">
                <h3 className="text-xl font-bold text-[#0a192f] mb-6 flex items-center gap-2">
                  <MapPin className="text-teal-500"/> {t.page12_risks.nextStepsTitle}
                </h3>
                <ul className="space-y-4">
                  {t.page12_risks.nextSteps.map((step, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                      <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 font-bold text-xs">{idx + 1}</div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 bg-[#0a192f] text-white text-center py-4 rounded-xl font-medium shadow-md tracking-wide">
                {t.page12_risks.decisionGate}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a192f] text-slate-400 py-12 text-center text-sm border-t border-white/10">
        <p className="mb-2 font-semibold tracking-wider text-slate-300">CORRIDOR CARPOOL</p>
        <p>Founder review & early-stage planning • September {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}