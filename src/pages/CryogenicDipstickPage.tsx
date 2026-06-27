// import { useState, useEffect, useRef } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { 
//   ArrowLeft, ArrowRight, Download, Phone, Mail, ChevronRight, 
//   ThermometerSnowflake, Zap, ShieldCheck, Gauge, Activity, Cpu, Layers,
//   CheckCircle2, Settings, SlidersHorizontal, PackageSearch
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { productsData } from "@/data/products";

// // ==========================================
// // 1. THERMAL & VACUUM TELEMETRY
// // ==========================================
// const CryoTelemetry = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
//       className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden font-sans flex flex-col relative"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f1f5f9_2px,transparent_2px)] bg-[size:24px_24px] pointer-events-none" />
      
//       <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
//         <div className="flex items-center gap-3">
//           <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse shadow-[0_0_12px_rgba(96,165,250,0.6)]" />
//           <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">Thermal Diagnostics</span>
//         </div>
//         <div className="flex gap-4">
//           <span className="text-xs font-bold font-mono text-blue-700 bg-blue-100 border border-blue-200 px-2 py-1 rounded shadow-sm">LN₂ COOLING ACTIVE</span>
//           <span className="text-xs font-bold font-mono text-rose-700 bg-rose-100 border border-rose-200 px-2 py-1 rounded shadow-sm">VACUUM SEALED</span>
//         </div>
//       </div>

//       <div className="p-8 grid lg:grid-cols-3 gap-8 relative z-10 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
//         {/* GRAPH 1: Cool-Down Curve */}
//         <div className="px-0 lg:px-6 relative flex flex-col overflow-hidden pb-8 lg:pb-0">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-blue-500 text-xs font-extrabold uppercase tracking-widest mb-1">Equilibration</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Cool-Down Curve</p>
//             </div>
//             <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100"><ThermometerSnowflake className="w-6 h-6 text-blue-500" /></div>
//           </div>
          
//           <div className="flex-grow w-full h-48 mt-2 border-l-2 border-b-2 border-slate-200 relative overflow-hidden">
//             <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
//               <line x1="0" y1="160" x2="400" y2="160" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
//               <motion.path 
//                 d="M 0 20 Q 100 20, 200 100 T 400 160" 
//                 fill="none" stroke="#3b82f6" strokeWidth="4" 
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{ duration: 3, ease: "easeOut", repeat: Infinity, repeatDelay: 2 }}
//               />
//               <motion.path d="M 0 20 Q 100 20, 200 100 T 400 160 L 400 200 L 0 200 Z" fill="rgba(59, 130, 246, 0.1)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
//             </svg>
//             <div className="absolute top-2 right-2 text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded border border-blue-200">Target: 77 K</div>
//           </div>
//         </div>

//         {/* GRAPH 2: Vacuum Pressure Monitor */}
//         <div className="px-0 lg:px-6 relative flex flex-col overflow-hidden py-8 lg:py-0">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-rose-500 text-xs font-extrabold uppercase tracking-widest mb-1">Chamber Status</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Vacuum Monitor</p>
//             </div>
//             <div className="p-3 bg-rose-50 rounded-2xl border border-rose-100"><Gauge className="w-6 h-6 text-rose-500" /></div>
//           </div>
          
//           <div className="flex-grow flex items-center justify-center w-full h-48 mt-2 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden">
//              <div className="flex flex-col items-center justify-center w-full px-8">
//                 <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden relative">
//                    <motion.div 
//                      className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full"
//                      animate={{ width: ["0%", "100%"] }}
//                      transition={{ duration: 4, ease: "circOut", repeat: Infinity, repeatDelay: 2 }}
//                    />
//                 </div>
//                 <motion.div 
//                   animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }}
//                   className="mt-6 px-4 py-1.5 bg-rose-100 border border-rose-200 text-rose-700 text-xs font-bold rounded-full font-mono shadow-inner"
//                 >
//                   P: 2.4 x 10⁻⁶ mBar
//                 </motion.div>
//              </div>
//           </div>
//         </div>

//         {/* DATA 3: Real-Time Sensor Counters */}
//         <div className="px-0 lg:px-6 relative flex flex-col overflow-hidden pt-8 lg:pt-0">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-slate-500 text-xs font-extrabold uppercase tracking-widest mb-1">Sensor Readout</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Live Status</p>
//             </div>
//             <div className="p-3 bg-slate-100 rounded-2xl border border-slate-200"><Activity className="w-6 h-6 text-slate-500" /></div>
//           </div>
          
//           <div className="flex-grow flex flex-col justify-center gap-3 w-full h-48 mt-2">
//             {[ 
//               {label: 'Stage Temp', value: '77.4 K', color: 'blue'}, 
//               {label: 'Heater Power', value: '0.0 W', color: 'rose'}, 
//               {label: 'Vacuum State', value: 'High', color: 'emerald'} 
//             ].map((stat, i) => (
//               <div key={i} className={`bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl flex items-center justify-between transition-colors duration-500 hover:border-${stat.color}-200 relative overflow-hidden`}>
//                 <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${stat.color}-400 rounded-l-xl`} />
//                 <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest pl-2">{stat.label}</span>
//                 <span className="text-lg font-black text-slate-900 font-mono">{stat.value}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </motion.div>
//   );
// };

// // ==========================================
// // 2. PRECISION & STABILITY
// // ==========================================
// const PrecisionStabilityBlocks = ({ thermal, electrical }: { thermal: string[], electrical: string[] }) => {
//   return (
//     <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto pt-8 items-start">
//       {/* Thermal Control Card */}
//       <motion.div 
//         initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}
//         className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-lg transition-all h-fit"
//       >
//         <motion.div animate={{ opacity: [0, 0.1, 0], scale: [1, 1.5, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-10 -right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl" />
//         <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4 relative z-10">
//           <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100"><ThermometerSnowflake className="w-6 h-6"/></div>
//           <h3 className="text-2xl font-extrabold text-slate-900">Thermal Control</h3>
//         </div>
//         <ul className="space-y-4 relative z-10">
//           {thermal.map((item, i) => (
//             <li key={i} className="flex items-start gap-3 text-slate-700 font-bold text-sm leading-relaxed">
//               <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> {item}
//             </li>
//           ))}
//         </ul>
//       </motion.div>

//       {/* Electrical Integrity Card */}
//       <motion.div 
//         initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.1 }}
//         className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-lg transition-all h-fit"
//       >
//         <motion.div animate={{ opacity: [0, 0.1, 0], scale: [1, 1.5, 1] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-300 rounded-full blur-3xl" />
//         <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4 relative z-10">
//           <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100"><Zap className="w-6 h-6"/></div>
//           <h3 className="text-2xl font-extrabold text-slate-900">Electrical & Vacuum Integrity</h3>
//         </div>
//         <ul className="space-y-4 relative z-10">
//           {electrical.map((item, i) => (
//             <li key={i} className="flex items-start gap-3 text-slate-700 font-bold text-sm leading-relaxed">
//               <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" /> {item}
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     </div>
//   );
// };

// // ==========================================
// // 3. MODULAR VISUALIZER (Kept original split layout)
// // ==========================================
// const ModularDesignVisualizer = () => {
//   const [activeTab, setActiveTab] = useState("cold-stage");

//   const modularData: Record<string, any> = {
//     "cold-stage": {
//       title: "OFHC Cold Stage",
//       desc: "Machined from Oxygen-Free High Thermal Conductivity copper. Minimal thermal gradients, direct sample integration, replaceable top fixtures.",
//       icon: Cpu,
//       img: "/images/cryo-diag-stage.png"
//     },
//     "flange": {
//       title: "Vacuum Interface Flange",
//       desc: "Available in ISO-KF or CF (Conflat) standards. Features high-vacuum epoxy-sealed multi-pin electrical feedthroughs with gold contacts.",
//       icon: Layers,
//       img: "/images/cryo-diag-flange.png"
//     },
//     "shielding": {
//       title: "Radiation Shielding",
//       desc: "Nickel-plated or gold-plated radiation shields minimize radiative heat load from ambient environments, crucial for achieving 77K base.",
//       icon: ShieldCheck,
//       img: "/images/cryo-diag-shield.png"
//     }
//   };

//   const tabs = Object.entries(modularData).map(([key, data]) => ({ key, ...data }));
//   const activeData = modularData[activeTab];

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
//       className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden font-sans flex flex-col relative"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f1f5f9_2px,transparent_2px)] bg-[size:24px_24px] pointer-events-none" />
      
//       <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
//         <div className="flex items-center gap-3">
//           <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
//           <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">Theoretical Modularity Visualizer</span>
//         </div>
//         <PackageSearch className="w-5 h-5 text-cyan-400" />
//       </div>

//       <div className="p-8 grid md:grid-cols-2 gap-10 lg:gap-16 relative z-10 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        
//         {/* Dynamic Graphic */}
//         <div className="px-0 lg:px-6 relative flex flex-col shadow-inner overflow-hidden pb-10 md:pb-0 h-[420px]">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-cyan-500 text-xs font-extrabold uppercase tracking-widest mb-1">Architecture Overview</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Theoretical Design</p>
//             </div>
//             <div className="p-3 bg-cyan-50 rounded-2xl border border-cyan-100"><activeData.icon className="w-6 h-6 text-cyan-500" /></div>
//           </div>
          
//           <div className="flex-grow flex items-center justify-center w-full mt-2 bg-slate-50 border-2 border-slate-100 rounded-2xl relative overflow-hidden group">
//             <AnimatePresence mode="wait">
//               <motion.img 
//                 key={activeTab}
//                 src={activeData.img} 
//                 alt={activeData.title}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 1.1 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-auto h-full object-contain mix-blend-multiply drop-shadow-xl"
//               />
//             </AnimatePresence>
//             <motion.div animate={{ opacity: [0, 0.1, 0], scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 bg-cyan-100 rounded-full blur-3xl opacity-20" />
//           </div>
//         </div>

//         {/* Dynamic Content */}
//         <div className="px-0 lg:px-10 relative flex flex-col overflow-hidden pt-10 md:pt-0 h-[420px]">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-cyan-500 text-xs font-extrabold uppercase tracking-widest mb-1">Configuration Feed</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Modular Subsystems</p>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-1 gap-3 mb-10 shrink-0">
//             {tabs.map((tab, i) => (
//               <button 
//                 key={tab.key} 
//                 onClick={() => setActiveTab(tab.key)} 
//                 className={`flex items-center gap-4 px-5 py-4 rounded-xl border-2 transition-all duration-300 text-left ${activeTab === tab.key ? 'bg-white border-cyan-400 text-slate-900 shadow-md scale-105' : 'bg-white border-slate-100 hover:border-cyan-100 text-slate-700'}`}
//               >
//                 <div className={`shrink-0 p-2.5 rounded-lg ${activeTab === tab.key ? 'bg-cyan-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
//                   <tab.icon className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <h4 className="font-extrabold text-sm">{tab.title}</h4>
//                   <p className={`text-xs font-medium ${activeTab === tab.key ? 'text-cyan-800' : 'text-slate-500'}`}>Theoretical Configuration {i+1}</p>
//                 </div>
//                 {activeTab === tab.key && <CheckCircle2 className="w-5 h-5 text-cyan-500 ml-auto shrink-0" />}
//               </button>
//             ))}
//           </div>
          
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.4 }}
//               className="flex-grow p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl relative flex flex-col justify-center"
//             >
//               <PackageSearch className="absolute top-3 left-3 w-16 h-16 text-slate-200 opacity-30" />
//               <p className="relative z-10 text-slate-700 font-bold leading-relaxed">{activeData.desc}</p>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//       </div>
//     </motion.div>
//   );
// };

// // ==========================================
// // 4. NEW: THERMAL DEEP-DIVE (Panoramic Dark Mode Pattern)
// // Completely redesigned to look distinct from the Modular block above it.
// // ==========================================
// const ThermalEngineeringDeepDive = () => {
//   const [activeTab, setActiveTab] = useState("ofhc");

//   const thermalData: Record<string, any> = {
//     "ofhc": {
//       title: "OFHC Copper Path",
//       desc: "Simulating the primary heat flow path through high-purity Oxygen-Free copper. Visualizing 390+ W/mK conductivity ensuring rapid thermal equilibration to 77K.",
//       icon: ThermometerSnowflake,
//     },
//     "wiring": {
//       title: "Wiring Thermal Load",
//       desc: "Simulating heat load minimization through thermally anchored phosphor bronze and cryo-coaxial wiring harnesses, critical for stable low-temperature operation.",
//       icon: Zap,
//     },
//     "equilibration": {
//       title: "Thermal Lag Visualization",
//       desc: "Visualizing theoretical cool-down progression. The simulation highlights areas of rapid equilibration (copper) and designed thermal lags (wiring harnesses) derived from performance specs.",
//       icon: Activity,
//     }
//   };

//   const tabs = Object.entries(thermalData).map(([key, data]) => ({ key, ...data }));
//   const activeData = thermalData[activeTab];

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
//       className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden font-sans flex flex-col relative"
//     >
//       <div className="bg-rose-50 border-b border-rose-100 px-8 py-5 flex items-center justify-between relative z-10">
//         <div className="flex items-center gap-3">
//           <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse shadow-[0_0_12px_rgba(244,63,94,0.6)]" />
//           <span className="text-rose-900 text-xs font-extrabold tracking-widest uppercase font-mono">Thermal Engineering Simulation</span>
//         </div>
//       </div>

//       <div className="p-8">
//         {/* Top Grid for Navigation */}
//         <div className="grid md:grid-cols-3 gap-4 mb-8">
//           {tabs.map((tab) => (
//             <button 
//               key={tab.key} 
//               onClick={() => setActiveTab(tab.key)}
//               className={`flex flex-col items-center text-center p-6 rounded-2xl border-2 transition-all duration-300 ${activeTab === tab.key ? 'bg-rose-50 border-rose-400 shadow-md scale-[1.02]' : 'bg-white border-slate-100 hover:border-rose-200 hover:bg-rose-50/50'}`}
//             >
//               <div className={`p-3 rounded-full mb-3 ${activeTab === tab.key ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
//                 <tab.icon className="w-6 h-6" />
//               </div>
//               <h4 className={`font-extrabold text-sm ${activeTab === tab.key ? 'text-rose-900' : 'text-slate-700'}`}>{tab.title}</h4>
//             </button>
//           ))}
//         </div>

//         {/* Bottom Panoramic Display Area */}
//         <div className="w-full bg-slate-900 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#334155_2px,transparent_2px)] bg-[size:20px_20px] opacity-40 pointer-events-none" />
          
//           {/* Text Content */}
//           <div className="md:w-1/2 relative z-10">
//             <AnimatePresence mode="wait">
//               <motion.div key={activeTab} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.4 }}>
//                 <span className="inline-block px-3 py-1 bg-rose-500/20 border border-rose-400/30 text-rose-300 text-[10px] font-bold tracking-widest uppercase rounded-full mb-4">Live Simulation Data</span>
//                 <h3 className="text-3xl font-display font-extrabold text-white mb-4">{activeData.title}</h3>
//                 <p className="text-slate-300 font-medium leading-relaxed">{activeData.desc}</p>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Animated Visualizer (SVG Graphic updates based on tab) */}
//           <div className="md:w-1/2 relative z-10 flex justify-center items-center h-64 w-full bg-slate-800/50 rounded-2xl border border-slate-700">
//             <AnimatePresence mode="wait">
//               <motion.svg key={activeTab} viewBox="0 0 200 200" className="h-48 w-auto text-slate-500" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 0.4 }}>
//                 {/* Central Core Shape representing Cryostat/Cold Stage */}
//                 <rect x="70" y="40" width="60" height="120" rx="8" stroke="currentColor" strokeWidth="3" fill="none" />
//                 <line x1="100" y1="40" x2="100" y2="160" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                
//                 {activeTab === 'ofhc' && (
//                   <>
//                     <motion.path d="M 100 40 L 100 160" stroke="#fb7185" strokeWidth="12" strokeLinecap="round" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
//                     <motion.circle cx="100" cy="100" r="20" fill="#f43f5e" animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }} transition={{ duration: 2, repeat: Infinity }} />
//                   </>
//                 )}

//                 {activeTab === 'wiring' && (
//                   <>
//                     <motion.path d="M 50 60 Q 100 20, 150 60 T 50 100 T 150 140 T 50 180" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" animate={{ strokeDasharray: ["10 10", "20 20"], strokeDashoffset: [0, 100] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
//                     <circle cx="50" cy="100" r="4" fill="#fb7185" />
//                     <circle cx="150" cy="140" r="4" fill="#fb7185" />
//                   </>
//                 )}

//                 {activeTab === 'equilibration' && (
//                   <>
//                     <motion.rect x="70" y="40" width="60" height="120" rx="8" fill="#fb7185" animate={{ height: [0, 120, 120], y: [160, 40, 40] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
//                     <motion.circle cx="100" cy="100" r="70" stroke="#fb7185" strokeWidth="2" fill="none" animate={{ scale: [0.8, 1.2], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
//                   </>
//                 )}
//               </motion.svg>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // ==========================================
// // 5. APPLICATIONS ACCORDION 
// // ==========================================
// const ApplicationsAccordion = ({ apps }: { apps: any[] }) => {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   return (
//     <div className="max-w-4xl mx-auto flex flex-col gap-4 pt-8">
//       {apps.map((app, i) => {
//         const isOpen = openIndex === i;
//         return (
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
//             key={i} 
//             className={`border border-slate-200 rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-slate-50' : 'bg-white hover:bg-slate-50'}`}
//           >
//             <button onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full px-6 py-5 flex items-center justify-between text-left outline-none">
//               <div className="flex items-center gap-4">
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
//                   <CheckCircle2 className="w-4 h-4" />
//                 </div>
//                 <h4 className="text-lg font-extrabold text-slate-900">{app.title}</h4>
//               </div>
//               <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
//             </button>
//             <AnimatePresence>
//               {isOpen && (
//                 <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="px-6 pb-6 pt-0 ml-12">
//                   <p className="text-slate-600 font-medium leading-relaxed pl-2 border-l-2 border-blue-200">{app.desc}</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// // ==========================================
// // 6. DESIGN HIGHLIGHTS GRID
// // ==========================================
// const DesignHighlightsGrid = ({ highlights }: { highlights: any[] }) => {
//   const icons = [Cpu, ShieldCheck, Layers, Zap];
//   return (
//     <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto pt-8">
//       {highlights.map((item, i) => {
//         const Icon = icons[i % icons.length];
//         return (
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
//             key={i} className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-5 group"
//           >
//             <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-slate-600 group-hover:bg-rose-50 group-hover:text-rose-600 group-hover:border-rose-200 transition-colors">
//               <Icon className="w-6 h-6" />
//             </div>
//             <div>
//               <h4 className="text-lg font-extrabold text-slate-900 mb-2 leading-tight">{item.title}</h4>
//               <p className="text-sm text-slate-600 font-medium">{item.desc}</p>
//             </div>
//           </motion.div>
//         )
//       })}
//     </div>
//   );
// };

// // ==========================================
// // 7. MODULARITY & SPECS TABS
// // ==========================================
// const ModularitySpecsTabs = ({ specs }: { specs: any }) => {
//   if (!specs) return null;
//   const categories = Object.keys(specs);
//   const [activeTab, setActiveTab] = useState(categories[0]);
//   const accentColors = [ "border-blue-200 text-blue-700 bg-blue-50", "border-rose-200 text-rose-700 bg-rose-50" ];

//   return (
//     <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 mt-10">
//       <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible hide-scrollbar lg:w-1/3 shrink-0 pb-2 lg:pb-0">
//         {categories.map((cat, index) => {
//           const colorClass = accentColors[index % accentColors.length];
//           return (
//             <button key={cat} onClick={() => setActiveTab(cat)} className={`relative px-5 py-4 text-left rounded-2xl font-bold transition-all duration-300 flex items-center justify-between whitespace-nowrap outline-none ${activeTab === cat ? `${colorClass} shadow-sm border` : "text-slate-600 bg-white hover:bg-slate-50 border border-slate-200"}`}>
//               <span className="relative z-10 text-sm">{cat}</span>
//               {activeTab === cat && <ChevronRight className="w-4 h-4" />}
//             </button>
//           )
//         })}
//       </div>

//       <div className="lg:w-2/3 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[350px]">
//         <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
//           <Settings className="w-5 h-5 text-slate-500" />
//           <h3 className="font-display font-extrabold text-slate-900 text-lg">{activeTab} Details</h3>
//         </div>
//         <div className="p-8">
//           <AnimatePresence mode="wait">
//             <motion.ul key={activeTab} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }} className="space-y-4">
//               {specs[activeTab].map((item: string, i: number) => (
//                 <li key={i} className="flex items-start gap-3 text-slate-700 font-bold text-sm leading-relaxed">
//                   <div className={`w-2 h-2 rounded-full ${activeTab === categories[0] ? 'bg-blue-500' : 'bg-rose-500'} shrink-0 mt-1.5`} />
//                   {item}
//                 </li>
//               ))}
//             </motion.ul>
//           </AnimatePresence>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // ==========================================
// // MAIN PAGE COMPONENT
// // ==========================================
// const CryogenicDipstickPage = () => {
//   const product = productsData["dipstick"];
//   const { scrollY } = useScroll();
//   const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

//   if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900 relative">
//         <Navbar />

//         {/* Sticky Header */}
//         <div className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
//           <div className="container py-3 flex items-center justify-between">
//             <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
//               <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link> <span>/</span>
//               <Link to="/products" className="hover:text-blue-600 transition-colors">Catalog</Link> <span>/</span>
//               <span className="hidden sm:inline-block cursor-default">{product.category}</span> <span>/</span>
//               <span className="text-blue-600 font-bold">{product.name}</span>
//             </div>
//             <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
//               <span className="hidden lg:block font-display font-bold text-slate-900">{product.name}</span>
//               <button className="px-5 py-2 rounded-xl font-bold text-white bg-blue-600 text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all pointer-events-auto">Request Quote</button>
//             </motion.div>
//           </div>
//         </div>
        
//         <main className="pt-8 lg:pt-4">
//           {/* HERO SECTION */}
//           {/* REFINED: Removed container padding to eliminate whitespace around the tall dipstick image */}
//           <section className="container pb-12 overflow-hidden relative">
//             <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
//               <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
//                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-[10px] font-extrabold tracking-widest uppercase mb-6 shadow-sm">CRYONANO LABS</div>
//                 <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
//                   {product.name}
//                 </h1>
//                 <p className="text-xl text-blue-600 font-bold mb-6">{product.subtitle}</p>
//                 <div className="space-y-4 mb-8">
//                   {product.overview?.map((p: string, i: number) => (
//                     <p key={i} className="text-base text-slate-600 leading-relaxed font-medium">{p}</p>
//                   ))}
//                 </div>
//                 <div className="flex flex-wrap gap-3">
//                   <button className="group px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5">
//                     Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                   <button className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-0.5">
//                     <Download className="w-4 h-4 text-blue-500" /> Full Specs
//                   </button>
//                 </div>
//               </motion.div>

//               <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
//                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />
//                 <img src={product.heroImage} alt="Cryogenic Dip Stick" className="relative z-10 w-full h-full object-contain drop-shadow-2xl mix-blend-multiply" />
//               </motion.div>
//             </div>
//           </section>

//           {/* TELEMETRY SECTION (Cooling & Vacuum) */}
//           <section className="py-12 lg:py-16 bg-white relative overflow-hidden border-t border-slate-200">
//             <div className="container relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-10">
//                 <span className="text-blue-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Cryogenic Environment Diagnostics</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Stable Performance at Cryogenic Temp.</h2>
//                 <p className="text-base text-slate-600 font-medium">Analyze formal system feedback including thermal equilibration curves and high-vacuum integrity monitors.</p>
//               </motion.div>
//               <div className="max-w-6xl mx-auto">
//                 <CryoTelemetry />
//               </div>
//             </div>
//           </section>

//           {/* PRECISION. STABILITY. INTEGRATION. (Horizontal Split) */}
//           <section className="py-12 lg:py-16 relative overflow-hidden bg-slate-50 border-y border-slate-200">
//             <div className="container max-w-6xl mx-auto">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center mb-8">
//                 <span className="text-blue-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Core Capabilities</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Precision. Stability. Integration.</h2>
//               </motion.div>
//               <PrecisionStabilityBlocks thermal={product.thermalControl} electrical={product.electricalVacuum} />
//             </div>
//           </section>

//           {/* MODULAR DESIGN VISUALIZER */}
//           <section className="py-12 lg:py-16 bg-white relative overflow-hidden border-b border-slate-200">
//             <div className="container max-w-7xl mx-auto relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-10">
//                 <span className="text-cyan-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Configuration Flexibility</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Programmable Modular Design Visualization.</h2>
//                 <p className="text-base text-slate-600 font-medium max-w-2xl mx-auto">Visualize theoretical modular part configurations derived from spec sheet options. Select a subsystem to update the full diagnostic simulation.</p>
//               </motion.div>
//               <ModularDesignVisualizer />
//             </div>
//           </section>

//           {/* REFINED: THERMAL ENGINEERING DEEP-DIVE (Panoramic Layout) */}
//           <section className="py-12 lg:py-16 relative overflow-hidden bg-slate-50 border-b border-slate-200">
//             <div className="container max-w-6xl mx-auto relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-10">
//                 <span className="text-rose-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Cryogenic Performance Simulation</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Deep-Dive Thermal Engineering.</h2>
//                 <p className="text-base text-slate-600 font-medium max-w-2xl mx-auto">Visualize material science and theoretical thermal paths for the cold stage path based on performance specifications.</p>
//               </motion.div>
//               <ThermalEngineeringDeepDive />
//             </div>
//           </section>

//           {/* APPLICATIONS ACCORDION */}
//           <section className="py-12 lg:py-16 relative overflow-hidden bg-white">
//             <div className="container max-w-6xl mx-auto relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-8">
//                 <span className="text-blue-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Target Environments</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Applications</h2>
//               </motion.div>
//               <ApplicationsAccordion apps={product.applications} />
//             </div>
//           </section>

//           {/* DESIGN HIGHLIGHTS GRID */}
//           <section className="py-12 lg:py-16 relative overflow-hidden bg-slate-50 border-t border-slate-200">
//             <div className="container max-w-6xl mx-auto">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center mb-8">
//                 <span className="text-blue-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">System Architecture</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Design Highlights</h2>
//               </motion.div>
//               <DesignHighlightsGrid highlights={product.designHighlights} />
//             </div>
//           </section>

//           {/* MODULARITY & TECHNICAL SPECS TABS */}
//           <section className="py-12 lg:py-16 bg-white relative border-t border-slate-200">
//             <div className="container mx-auto">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto">
//                 <span className="text-blue-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">System Configuration</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">Modularity & Technical Specs</h2>
//               </motion.div>
//               <ModularitySpecsTabs specs={product.modularitySpecs} />
//             </div>
//           </section>

//           {/* CTA SECTION */}
//           <section className="container py-12 lg:py-16 border-t border-slate-200 bg-white">
//             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="bg-[#e2e8f0] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-10 items-center justify-between shadow-sm border border-slate-300 relative overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-transparent pointer-events-none" />
//               <div className="lg:w-1/2 relative z-10">
//                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-slate-300 text-slate-800 text-[10px] font-extrabold tracking-widest uppercase mb-4 shadow-sm"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Engineering Support</div>
//                 <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Specialist</span></h2>
//                 <p className="text-base text-slate-700 font-medium mb-8">CRYONANO's systems engineers are available to answer your questions. Discuss your low-temperature integration requirements today.</p>
//                 <button className="px-6 py-3 rounded-xl font-bold text-white bg-blue-600 shadow-sm hover:shadow-md transition-all flex items-center gap-2">Get a Quote <ArrowRight className="w-4 h-4" /></button>
//               </div>
//               <div className="lg:w-5/12 flex flex-col gap-4 w-full relative z-10">
//                 <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-white hover:border-blue-200 transition-colors">
//                   <div className="w-12 h-12 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-blue-600" /></div>
//                   <div><p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Call Us Directly</p><p className="text-xl font-extrabold text-slate-900">+91 97481 81485</p></div>
//                 </div>
//                 <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-white hover:border-blue-200 transition-colors">
//                   <div className="w-12 h-12 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-blue-600" /></div>
//                   <div><p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Email Engineering</p><p className="text-lg font-extrabold text-slate-900">contact@cryonano.com</p></div>
//                 </div>
//               </div>
//             </motion.div>
//           </section>

//           <Footer />
//         </main>
//       </div>
//     </PageTransition>
//   );
// };

// export default CryogenicDipstickPage;



import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { CTASection } from "@/components/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, ArrowUp, CheckCircle2, ChevronRight, ChevronDown, Plus, Minus,
  Activity, Zap, Shield, Camera, Cpu, Target, Settings, ThermometerSnowflake,
  Waves, Layers, Lock, ShieldAlert, Code, ArrowLeft, ArrowRight, Move, Eye,
  Image, Gauge, Network, Wind
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// Icon mapping dictionary
const iconMap: Record<string, any> = { 
  ThermometerSnowflake, Activity, Zap, Shield, Camera, Move, Waves, Target, Cpu, Settings, Layers, Eye, Wind, Lock, Network
};

// ==========================================
// SCROLL TO TOP COMPONENT
// ==========================================
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:bg-red-700 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ==========================================
// INTERACTIVE CONTROL HUB FOR CORE TECHNOLOGIES
// ==========================================
const InteractiveControlHub = ({ technologies }: { technologies: any[] }) => {
  const [activeTab, setActiveTab] = useState(technologies[0].id);
  const activeTech = technologies.find(t => t.id === activeTab) || technologies[0];

  return (
    <div className="w-full bg-white rounded-3xl border border-border shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row mt-6">
      
      {/* Sidebar Navigation */}
      <div className="lg:w-1/3 bg-slate-50 border-r border-border p-6 flex flex-col gap-2">
        <div className="mb-6 pb-4 border-b border-slate-200">
          <p className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest">Subsystem Diagnostics</p>
        </div>
        {technologies.map((tech) => (
          <button
            key={tech.id}
            onClick={() => setActiveTab(tech.id)}
            className={`text-left px-5 py-4 rounded-xl font-bold text-sm transition-all duration-300 border-l-4 outline-none ${activeTab === tech.id ? 'bg-white border-primary text-[#0A2647] shadow-sm' : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-700'}`}
          >
            {tech.subtitle}
          </button>
        ))}
      </div>

      {/* Viewing Pane */}
      <div className="lg:w-2/3 p-8 lg:p-10 relative overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-primary">
                {activeTech.type === 'hardware' ? <Cpu className="w-5 h-5" /> : activeTech.type === 'software' ? <Activity className="w-5 h-5" /> : <ShieldAlert className="w-5 h-5" />}
              </div>
              <h3 className="text-2xl font-extrabold text-[#0A2647]">{activeTech.title}</h3>
            </div>
            
            <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">{activeTech.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Core Specifications</p>
                <ul className="space-y-2.5">
                  {activeTech.bullets.map((b: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dynamic UI depending on type */}
              <div>
                {activeTech.type === 'hardware' && activeTech.highlights && (
                   <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Performance Metrics</p>
                     <div className="grid grid-cols-2 gap-2">
                       {activeTech.highlights.map((h: any, idx: number) => (
                         <div key={idx} className="bg-slate-50 border border-slate-200 p-3 rounded-lg">
                           <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{h.label}</p>
                           <p className="text-sm font-extrabold text-primary">{h.val}</p>
                         </div>
                       ))}
                     </div>
                   </div>
                )}
                {activeTech.type === 'software' && activeTech.platforms && (
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Supported Integration</p>
                    <div className="flex flex-col gap-2">
                      {activeTech.platforms.map((p: string, idx: number) => (
                        <div key={idx} className="px-3 py-2 bg-[#0A2647] text-white rounded-md text-xs font-bold tracking-wide flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" /> {p}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeTech.type === 'protection' && activeTech.protects && (
                  <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Environmental Targets</p>
                     <div className="flex flex-col gap-2">
                       {activeTech.protects.map((p: string, idx: number) => (
                         <div key={idx} className="px-3 py-2 bg-red-50 text-[#0A2647] border border-red-100 rounded-md text-xs font-bold flex items-center gap-2">
                           <Lock className="w-3.5 h-3.5 text-primary" /> {p}
                         </div>
                       ))}
                     </div>
                  </div>
                )}
              </div>
            </div>
            
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// ==========================================
// APPLICATIONS – Expandable 3-Column Grid ("+" design)
// ==========================================
const ApplicationsExpandableGrid = ({ apps }: { apps: string[] }) => {
  const [expandedApp, setExpandedApp] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {apps.map((app, i) => {
        const isExpanded = expandedApp === i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setExpandedApp(isExpanded ? null : i)}
            className={`bg-white p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
              isExpanded ? 'border-primary shadow-md' : 'border-border shadow-sm hover:border-slate-400'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                isExpanded ? 'bg-primary text-white' : 'bg-slate-100 text-primary'
              }`}>
                {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
              <span className="font-bold text-[#0A2647] text-sm leading-tight">{app}</span>
            </div>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 10 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-slate-600 font-medium pl-11">
                    Optimized for {app.toLowerCase()}, delivering stable low-temperature operation, minimal thermal gradients, and superior signal integrity.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

// ==========================================
// OPTIONAL ENHANCEMENTS – Highlighted Grid (NEW Pattern)
// ==========================================
const OptionalEnhancements = ({ configs }: { configs: string[] }) => {
  const icons = [Settings, Network, Layers, Shield, Camera, Move, Wind, Cpu, Activity];
  
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-8 border border-border shadow-sm">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
          <Settings className="w-3.5 h-3.5" /> Customize Your System
        </div>
        <h3 className="text-2xl font-extrabold text-[#0A2647] mt-3">Optional Enhancements</h3>
        <p className="text-sm text-slate-500 mt-1">Configure your VTI for specific research requirements</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {configs.map((config, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-white border border-border rounded-xl p-5 text-center shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <p className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors">{config}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function CryogenicDipstickPage() {
  const product = productsData["dipstick"];
  const [activeSection, setActiveSection] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>("Thermal & Operational");
  const [currentImage, setCurrentImage] = useState(0);
  
  // Section references for Scroll Spy
  const overviewRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const appsRef = useRef<HTMLDivElement>(null);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      if (appsRef.current && scrollPos >= appsRef.current.offsetTop) setActiveSection("applications");
      else if (specsRef.current && scrollPos >= specsRef.current.offsetTop) setActiveSection("specifications");
      else if (techRef.current && scrollPos >= techRef.current.offsetTop) setActiveSection("technology");
      else if (featuresRef.current && scrollPos >= featuresRef.current.offsetTop) setActiveSection("features");
      else setActiveSection("overview");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-Carousel Logic
  useEffect(() => {
    if (!product?.gallery?.length) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % product.gallery.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [product]);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop - 130, behavior: "smooth" });
    }
  };

  if (!product) return <div className="min-h-screen bg-background"><Navbar /></div>;

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white relative">
        <Navbar />

        {/* 01. HERO SECTION */}
        <section className="relative pt-16 pb-16 overflow-hidden bg-gradient-to-b from-[#061B35] to-[#0A2647] text-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#112240_1px,transparent_1px),linear-gradient(to_bottom,#112240_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" 
          />
          <motion.div 
            animate={{ x: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" 
          />
          
          <div className="container relative z-10 grid lg:grid-cols-12 gap-8 items-center min-h-[500px]">
            <div className="lg:col-span-7 flex flex-col justify-center">
              {product.statusBadge && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="w-fit px-3 py-1 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest rounded mb-4 bg-primary/10 shadow-[0_0_15px_rgba(220,38,38,0.2)]"
                >
                  {product.statusBadge}
                </motion.div>
              )}
              <motion.h1 
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
                className="font-display text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight"
              >
                {product.hero.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-cyan-400 font-bold mb-4 max-w-2xl leading-relaxed"
              >
                {product.hero.subtitle}
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
                className="text-sm text-slate-300 font-medium mb-8 max-w-2xl leading-relaxed"
              >
                {product.hero.description}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button className="px-6 py-3.5 rounded bg-primary text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:bg-red-600 transition-all transform hover:-translate-y-1">
                  Request Technical Proposal
                </button>
                <button className="px-6 py-3.5 rounded bg-slate-800/80 border border-slate-700 text-white font-bold text-sm tracking-wide hover:border-primary hover:bg-slate-800 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                  <Download className="w-4 h-4 text-primary" /> Download Datasheet
                </button>
              </motion.div>
            </div>

            {/* Auto-Playing Carousel Image Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center w-full"
            >
              {/* <div className="w-full max-w-[550px] aspect-square rounded-[2rem] bg-gradient-to-br from-[#0F294D] to-[#0A1B35] border border-slate-700 p-2 shadow-2xl relative overflow-hidden group"> */}
              {/* REMOVED aspect-square, added h-auto and responsive min-height bounds so long vacuum components don't crop */}
<div className="w-full max-w-[550px] h-auto min-h-[350px] md:min-h-[440px] rounded-[2rem] bg-gradient-to-br from-[#0F294D] to-[#0A1B35] border border-slate-700 p-2 shadow-2xl relative overflow-hidden group">
                  <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full relative rounded-[1.5rem] overflow-hidden bg-slate-900 flex items-center justify-center"
                  >
                    {product.gallery && product.gallery[currentImage] ? (
                      <>
                        {/* <img src={product.gallery[currentImage].url} alt={product.gallery[currentImage].caption} className="w-full h-full object-cover opacity-85 mix-blend-screen" /> */}
                        {/* Swapped h-full to h-auto and object-cover to object-contain, padding bottom to clear the sliding caption overlay banner gracefully */}
<img src={product.gallery[currentImage].url} alt={product.gallery[currentImage].caption} className="w-full h-auto max-h-[400px] object-contain opacity-85 mix-blend-screen p-4 pb-24 mx-auto" />
                        <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-lg">
                           <p className="text-sm font-bold text-white uppercase tracking-wider">{product.gallery[currentImage].caption}</p>
                        </div>
                      </>
                    ) : (
                      <Camera className="w-16 h-16 text-slate-700" />
                    )}
                  </motion.div>
                </AnimatePresence>
                
                {product.gallery && product.gallery.length > 1 && (
                  <div className="absolute top-6 right-6 flex gap-2 z-20">
                    {product.gallery.map((_: any, idx: number) => (
                      <button 
                        key={idx} 
                        onClick={() => setCurrentImage(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImage ? 'w-6 bg-primary shadow-[0_0_10px_rgba(220,38,38,0.8)]' : 'w-2 bg-slate-500 hover:bg-slate-300'}`} 
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 01a. QUICK SPECIFICATION STRIP */}
        <div className="relative z-30 -mt-8 container max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-[#0A2647] rounded-xl border border-blue-900/50 p-6 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {product.quickSpecs.map((spec: any, i: number) => (
              <div key={i} className="text-center border-r last:border-none border-blue-800/50 px-2 group">
                <p className="text-2xl font-display font-extrabold text-white group-hover:text-primary transition-colors">{spec.value}</p>
                <p className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mt-1">{spec.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 01b. DYNAMIC STICKY SUB-NAVIGATION */}
        <div className="sticky top-[var(--nav-height)] z-40 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
          <div className="container py-2 flex items-center justify-between">
            <div className="flex-1" />
            <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar">
              {[
                { id: "overview", label: "Overview", ref: overviewRef },
                { id: "features", label: "Features", ref: featuresRef },
                { id: "technology", label: "Technology", ref: techRef },
                { id: "specifications", label: "Specifications", ref: specsRef },
                { id: "applications", label: "Applications", ref: appsRef }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToRef(tab.ref)}
                  className={`px-4 py-1.5 text-xs font-bold tracking-wide rounded-full transition-all duration-300 ${activeSection === tab.id ? "bg-[#0A2647] text-white shadow-md" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex-1 flex justify-end">
              <button className="hidden sm:block px-4 py-2 bg-primary hover:bg-red-600 text-white font-bold text-[11px] tracking-wider rounded transition-colors shadow-sm transform hover:-translate-y-0.5">
                REQUEST PROPOSAL
              </button>
            </div>
          </div>
        </div>

        {/* 02. OVERVIEW & RESEARCH ADVANTAGES */}
        <section ref={overviewRef} className="py-10 bg-white border-b border-border">
          <div className="container max-w-5xl text-center">
            <motion.span 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-cyan-600 font-bold tracking-widest uppercase text-[10px] mb-2 block"
            >
              System Profile
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647] mb-4"
            >
              {product.overview.title}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="space-y-3 text-slate-600 font-medium leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              {product.overview.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {product.overview.advantages.map((adv: string, i: number) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -3, borderColor: '#0A2647' }}
                  key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full shadow-sm transition-all cursor-default"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-sm font-bold text-[#0A2647]">{adv}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 03. KEY FEATURES */}
        <section ref={featuresRef} className="py-10 bg-slate-50/30 border-b border-border">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-[10px] mb-2 block">High-Fidelity Engineering</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Key Platform Capabilities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.keyFeatures.map((feat: any, i: number) => {
                const Icon = iconMap[feat.icon] || CheckCircle2;
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                    key={i} 
                    className="group relative bg-white border border-border p-6 rounded-xl shadow-sm hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="w-12 h-12 rounded bg-slate-50 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-4 shadow-sm">
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A2647] mb-2">{feat.title}</h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed relative z-10">{feat.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 04. CORE TECHNOLOGIES */}
        <section ref={techRef} className="py-10 bg-white border-b border-border">
          <div className="container max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-[10px] mb-2 block">Technical Deep-Dive</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Core Technologies</h2>
            </div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
               <InteractiveControlHub technologies={product.coreTechnologies} />
            </motion.div>
          </div>
        </section>

        {/* 05. TECHNICAL SPECIFICATIONS */}
        <section ref={specsRef} className="py-10 bg-slate-50/50 border-b border-border">
          <div className="container max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-cyan-600 font-bold tracking-widest uppercase text-[10px] mb-2 block">Data Sheet</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Technical Specifications</h2>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setOpenAccordion("all")} 
                  className="px-4 py-1.5 bg-white border border-border text-slate-700 font-bold text-[11px] uppercase tracking-wider rounded hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Expand All
                </button>
                <button 
                  onClick={() => setOpenAccordion(null)} 
                  className="px-4 py-1.5 bg-white border border-border text-slate-700 font-bold text-[11px] uppercase tracking-wider rounded hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Collapse
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {Object.entries(product.specifications).map(([category, items]: [string, any]) => {
                const isOpen = openAccordion === "all" || openAccordion === category;
                return (
                  <div key={category} className="border border-border rounded-xl overflow-hidden shadow-sm bg-white">
                    <button
                      onClick={() => setOpenAccordion(isOpen ? null : category)}
                      className="w-full px-6 py-4 bg-white flex items-center justify-between border-b border-border hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-display font-bold text-sm text-[#0A2647] uppercase tracking-wide">{category}</span>
                      {isOpen ? <ChevronDown className="w-4 h-4 text-primary" /> : <ChevronRight className="w-4 h-4 text-slate-500" />}
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                          className="overflow-hidden bg-slate-50/50"
                        >
                          <div className="px-6 py-2 divide-y divide-border/50">
                            {items.map((row: any, idx: number) => (
                              <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 py-3 gap-1 hover:bg-blue-50/50 px-3 rounded transition-colors group">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide group-hover:text-primary transition-colors">{row.param}</span>
                                <span className="text-sm font-bold text-slate-900">{row.spec}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        

        {/* 07. OPTIONAL ENHANCEMENTS – Highlighted Grid (NEW Pattern) */}
        <section className="py-10 bg-white border-b border-border">
          <div className="container max-w-6xl">
            <OptionalEnhancements configs={product.configurations} />
          </div>
        </section>

        {/* 08. APPLICATIONS – Expandable 3-Column Grid ("+" design) */}
        <section ref={appsRef} className="py-10 bg-slate-50/30 border-b border-border">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-[10px] mb-2 block">Deployment Scenarios</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Scientific & Industrial Applications</h2>
            </div>
            <ApplicationsExpandableGrid apps={product.applications} />
          </div>
        </section>

        {/* 09. FINAL TAGLINE */}
        {product.cta?.tagline && (
          <section className="py-8 bg-white border-b border-border">
            <div className="container text-center max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-2xl lg:text-3xl font-extrabold text-[#0A2647] tracking-tight"
              >
                {product.cta.tagline}
              </motion.h2>
            </div>
          </section>
        )}

        {/* 06. VISUAL REFERENCE – SYSTEM IMAGERY */}
        <section className="py-10 bg-white border-b border-border">
          <div className="container max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-[10px] mb-2 block">System Imagery</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Visual Reference</h2>
            </div>
            {product.gallery && product.gallery.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {product.gallery.map((img: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, y: -6 }}
                    className="group bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* <div className="aspect-square overflow-hidden bg-slate-100">
                      <img src={img.url} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div> */}
                    {/* Swapped aspect-square crop container with a uniform h-56 window utilizing max-constraints and object-contain alignment */}
<div className="w-full h-56 bg-slate-50 flex items-center justify-center overflow-hidden relative p-4 border-b border-slate-100">
  <img 
    src={img.url} 
    alt={img.caption} 
    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" 
  />
</div>
                    <div className="p-4 text-center">
                      <p className="text-sm font-bold text-[#0A2647]">{img.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-400">
                <Image className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p className="font-medium">No imagery available</p>
              </div>
            )}
          </div>
        </section>

        {/* GLOBAL CTA SECTION */}
        <CTASection />

        {/* BOTTOM NAVIGATION */}
        <section className="bg-white py-8 border-t border-border">
          <div className="container max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link to="/" className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#0A2647] text-white hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
              <span className="text-xs font-bold tracking-widest uppercase">Back to Homepage</span>
            </Link>
            <Link to="/products" className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#0A2647] text-white hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              <span className="text-xs font-bold tracking-widest uppercase">Return to Catalogue</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
            </Link>
          </div>
        </section>

        <ScrollToTop />
        <Footer />
      </div>
    </PageTransition>
  );
}