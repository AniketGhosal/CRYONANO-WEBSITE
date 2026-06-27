// import { useState, useEffect } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { 
//   ArrowLeft, ArrowRight, Download, Phone, Mail, ChevronRight, 
//   Settings, Activity, Cpu, Layers, CheckCircle2, SlidersHorizontal, PackageSearch,
//   Focus, Map, Scaling, ScanFace, Box, Target, Zap, RotateCcw, Camera, Eye, Beaker 
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { productsData } from "@/data/products";

// // ==========================================
// // 1. STAGE TELEMETRY VISUALIZER
// // REFINED: Unique visual patterns for all 3 boxes with relative data
// // ==========================================
// const TransferTelemetry = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
//       className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden font-sans flex flex-col relative"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f1f5f9_2px,transparent_2px)] bg-[size:24px_24px] pointer-events-none" />
      
//       <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
//         <div className="flex items-center gap-3">
//           <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
//           <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">Stage Axis Readout</span>
//         </div>
//         <div className="flex gap-4">
//           <span className="text-xs font-bold font-mono text-amber-700 bg-amber-100 border border-amber-200 px-2 py-1 rounded shadow-sm">LINEAR XYZ ACTIVE</span>
//           <span className="text-xs font-bold font-mono text-blue-700 bg-blue-100 border border-blue-200 px-2 py-1 rounded shadow-sm">ROTATION & TILT POSITIONED</span>
//         </div>
//       </div>

//       <div className="p-8 grid lg:grid-cols-3 gap-8 relative z-10 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
//         {/* GRAPH 1: Animated Flake Alignment Target */}
//         <div className="px-0 lg:px-6 relative flex flex-col overflow-hidden pb-8 lg:pb-0">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-amber-600 text-xs font-extrabold uppercase tracking-widest mb-1">XY Plane</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Flake Alignment</p>
//             </div>
//             <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100"><Target className="w-6 h-6 text-amber-500" /></div>
//           </div>
          
//           <div className="flex-grow w-full h-48 mt-2 border-2 border-slate-100 relative overflow-hidden flex items-center justify-center bg-slate-50 rounded-xl shadow-inner">
//              {/* Dynamic Targeting SVG */}
//              <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
//                 {/* Target Outline */}
//                 <rect x="70" y="70" width="60" height="60" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
//                 <line x1="100" y1="0" x2="100" y2="200" stroke="#cbd5e1" strokeWidth="1" />
//                 <line x1="0" y1="100" x2="200" y2="100" stroke="#cbd5e1" strokeWidth="1" />
                
//                 {/* Animated 2D Flake (Hexagon) */}
//                 <motion.polygon 
//                   points="100,50 125,65 125,95 100,110 75,95 75,65" 
//                   fill="rgba(245,158,11,0.2)" 
//                   stroke="#f59e0b" 
//                   strokeWidth="3" 
//                   animate={{ x: [ -40, 0, -40 ], y: [ -30, 10, -30 ] }} 
//                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
//                 />
//              </svg>
             
//             <div className="absolute top-2 left-2 flex flex-col gap-1 text-[10px] font-bold font-mono">
//                 <span className="bg-white text-slate-600 px-2 py-1 rounded shadow-sm border border-slate-200">X: <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }}>45.231 µm</motion.span></span>
//                 <span className="bg-white text-slate-600 px-2 py-1 rounded shadow-sm border border-slate-200">Y: 12.095 µm</span>
//             </div>
//           </div>
//         </div>

//         {/* GRAPH 2: Radial Z-Axis Gauge */}
//         <div className="px-0 lg:px-6 relative flex flex-col overflow-hidden py-8 lg:py-0">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-blue-500 text-xs font-extrabold uppercase tracking-widest mb-1">Depth Control</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Z-Axis Approach</p>
//             </div>
//             <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100"><Focus className="w-6 h-6 text-blue-500" /></div>
//           </div>
          
//           <div className="flex-grow flex items-center justify-center w-full h-48 mt-2 bg-slate-50 border-2 border-slate-100 rounded-xl relative overflow-hidden shadow-inner">
//              {/* Radial Gauge SVG */}
//              <div className="relative flex items-center justify-center">
//                  <svg viewBox="0 0 100 100" className="h-32 w-32 drop-shadow-md">
//                     <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="8" />
//                     <motion.circle 
//                         cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="8" 
//                         strokeDasharray="251.2" 
//                         animate={{ strokeDashoffset: [251.2, 50, 251.2] }} 
//                         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
//                         strokeLinecap="round" 
//                         transform="rotate(-90 50 50)" 
//                     />
//                  </svg>
//                  <div className="absolute flex flex-col items-center">
//                     <span className="text-2xl font-black text-blue-600 font-mono">Z</span>
//                  </div>
//              </div>
//              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-xs font-bold text-slate-600 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-200">
//                 Gap: 1.050 mm
//              </div>
//           </div>
//         </div>

//         {/* DATA 3: Digital Terminal Readout */}
//         <div className="px-0 lg:px-6 relative flex flex-col overflow-hidden pt-8 lg:pt-0">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-slate-500 text-xs font-extrabold uppercase tracking-widest mb-1">Encoded Data</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Angular Metrics</p>
//             </div>
//             <div className="p-3 bg-slate-100 rounded-2xl border border-slate-200"><Scaling className="w-6 h-6 text-slate-500" /></div>
//           </div>
          
//           <div className="flex-grow flex flex-col justify-center w-full h-48 mt-2">
//             <div className="bg-slate-900 w-full h-full rounded-xl shadow-inner border-2 border-slate-800 p-5 flex flex-col justify-between font-mono text-sm relative overflow-hidden">
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600" />
//                 <div className="flex justify-between items-center text-emerald-400">
//                     <span className="text-xs uppercase opacity-70">Rotation (θ)</span>
//                     <span className="text-lg font-bold">120.05°</span>
//                 </div>
//                 <div className="w-full h-px bg-slate-800" />
//                 <div className="flex justify-between items-center text-blue-400">
//                     <span className="text-xs uppercase opacity-70">Tilt X (φ)</span>
//                     <span className="text-lg font-bold">+1.04°</span>
//                 </div>
//                 <div className="w-full h-px bg-slate-800" />
//                 <div className="flex justify-between items-center text-blue-400">
//                     <span className="text-xs uppercase opacity-70">Tilt Y (ψ)</span>
//                     <span className="text-lg font-bold">-0.82°</span>
//                 </div>
//                 <div className="w-full h-px bg-slate-800" />
//                 <div className="flex justify-between items-center text-amber-400">
//                     <span className="text-xs uppercase opacity-70">VACUUM CHUCK</span>
//                     <span className="text-sm font-bold bg-amber-500/20 px-2 py-0.5 rounded">LOCKED</span>
//                 </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </motion.div>
//   );
// };


// // ==========================================
// // 2. AUTOMATION SEQUENCE DIAGRAM
// // REFINED: Light theme, staggered entrance, hover effects
// // ==========================================
// const AutomationSequence = ({ steps }: { steps: string[] }) => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
//       className="w-full bg-white rounded-[2.5rem] border border-amber-200 shadow-xl p-10 relative overflow-hidden"
//     >
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#fef3c7_2px,transparent_2px)] bg-[size:20px_20px] opacity-60 pointer-events-none" />
        
//         <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch text-center">
//             {steps.map((step: string, i: number) => {
//                 return (
//                     <motion.div 
//                         initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
//                         whileHover={{ scale: 1.05, y: -5 }}
//                         key={step} 
//                         className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex flex-col items-center justify-start gap-4 shadow-sm relative overflow-hidden group cursor-pointer"
//                     >
//                         {/* Animated active pulse */}
//                         <motion.div animate={{ opacity: [0, 0.4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }} className="absolute inset-0 bg-gradient-to-b from-amber-200 to-transparent" />
                        
//                         <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-amber-300 text-amber-600 font-black z-10 shadow-sm group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-colors">
//                             {String(i+1).padStart(2,'0')}
//                         </div>
//                         <h4 className="text-sm font-extrabold text-slate-800 leading-snug z-10">{step}</h4>
//                         <CheckCircle2 className="w-5 h-5 mt-auto text-amber-300 group-hover:text-amber-200 transition-colors z-10" />
//                     </motion.div>
//                 )
//             })}
//         </div>
//     </motion.div>
//   );
// };

// // ==========================================
// // 3. NEW: TRANSFER METHODOLOGY DEEP-DIVE
// // Injecting the missing brochure data gracefully
// // ==========================================
// const MethodologyDeepDive = () => {
//     const data = [
//         {
//             title: "PDMS-Based Viscoelastic Transfer",
//             icon: Beaker,
//             points: [
//                 "Kinetically controlled adhesion for deterministic pickup and release.",
//                 "Rapid peel-off promotes flake pickup from source.",
//                 "Slow peel-off enables controlled release to target.",
//                 "Solvent-free dry transfer compatible with diverse substrates."
//             ]
//         },
//         {
//             title: "Flake Identification & Contrast",
//             icon: Eye,
//             points: [
//                 "Identified using reflected-light optical microscopy.",
//                 "Si/SiO₂ substrates (90nm or 290nm oxide) engineered to enhance contrast.",
//                 "Monolayer and few-layer flakes exhibit distinct optical signatures.",
//                 "Thickness confirmation via integrated Raman or PL spectroscopy paths."
//             ]
//         }
//     ];

//     return (
//         <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto pt-8">
//             {data.map((section, idx) => (
//                 <motion.div 
//                     key={idx}
//                     initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.2 }}
//                     className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-lg hover:border-amber-300 transition-all"
//                 >
//                     <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
//                         <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 border border-amber-100"><section.icon className="w-6 h-6"/></div>
//                         <h3 className="text-2xl font-extrabold text-slate-900">{section.title}</h3>
//                     </div>
//                     <ul className="space-y-4">
//                         {section.points.map((pt, i) => (
//                             <li key={i} className="flex items-start gap-3 text-slate-700 font-bold text-sm leading-relaxed">
//                                 <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> {pt}
//                             </li>
//                         ))}
//                     </ul>
//                 </motion.div>
//             ))}
//         </div>
//     );
// };

// // ==========================================
// // 4. SUBSYSTEMS VISUALIZER
// // ==========================================
// const SubsystemsInteractive = ({ subsystems }: { subsystems: any[] }) => {
//   return (
//     <div className="w-full relative py-12">
//         <svg viewBox="0 0 200 300" className="absolute h-96 w-auto text-slate-300 opacity-60">
//             <line x1="100" y1="20" x2="100" y2="280" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
//             {[40, 150, 190, 240].map(cy => (
//                 <circle key={cy} cx="100" cy={cy} r="4" fill="currentColor" />
//             ))}
//         </svg>

//         <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start max-w-7xl mx-auto px-6">
//             {subsystems.map((item, i) => {
//                 const isEven = i % 2 === 0;
//                 const Icon = item.icon;
//                 return (
//                     <motion.div
//                         key={item.id}
//                         initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.95 }}
//                         whileInView={{ opacity: 1, x: 0, scale: 1 }}
//                         viewport={{ once: true, amount: 0.1 }}
//                         transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
//                         className={`group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:border-amber-200 hover:shadow-lg transition-all flex flex-col relative ${isEven ? 'text-right' : 'text-left'}`}
//                     >
//                         <div className={`flex items-center gap-4 mb-5 border-b border-slate-100 pb-4 relative z-10 ${isEven ? 'flex-row-reverse' : ''}`}>
//                             <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100"><Icon className="w-6 h-6" /></div>
//                             <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{item.title}</h3>
//                         </div>
//                         <p className="text-sm text-slate-700 font-bold leading-relaxed">{item.desc}</p>
                        
//                         <div className={`absolute top-[4rem] flex items-center gap-2 ${isEven ? '-left-[4.5rem]' : '-right-[4.5rem] flex-row-reverse'}`}>
//                             <motion.div initial={{ width: 0 }} whileInView={{ width: '3rem' }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }} className={`h-[2px] bg-amber-300`} />
//                             <div className={`w-3 h-3 rounded-full bg-amber-400 group-hover:scale-125 transition-transform`} />
//                         </div>
//                     </motion.div>
//                 )
//             })}
//         </div>
//     </div>
//   );
// };


// // ==========================================
// // 5. DESIGN HIGHLIGHTS (Autonomous Playback)
// // ==========================================
// const AutonomousDesignHighlights = ({ highlights }: { highlights: any[] }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const icons = [Cpu, Target, Camera, Layers];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % highlights.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, [highlights.length]);

//   return (
//     <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-stretch bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-xl mt-8">
        
//         <div className="w-full md:w-5/12 flex flex-col gap-2 relative">
//             <div className="absolute left-[1.125rem] top-4 bottom-4 w-0.5 bg-slate-100 rounded-full" />
//             {highlights.map((item, i) => (
//                 <div 
//                     key={i} 
//                     onClick={() => setActiveIndex(i)} 
//                     className={`cursor-pointer p-4 rounded-2xl transition-all duration-300 relative z-10 flex items-center gap-4 ${activeIndex === i ? 'bg-slate-50 shadow-sm border border-slate-200' : 'border border-transparent hover:bg-slate-50/50'}`}
//                 >
//                     <div className="relative flex items-center justify-center shrink-0">
//                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-amber-500 scale-125' : 'bg-slate-300'}`} />
//                        {activeIndex === i && (
//                           <motion.svg className="absolute w-8 h-8 text-amber-500" viewBox="0 0 100 100">
//                              <motion.circle cx="50" cy="50" r="46" fill="transparent" stroke="currentColor" strokeWidth="6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, ease: "linear" }} strokeDasharray="289" strokeDashoffset="0" />
//                           </motion.svg>
//                        )}
//                     </div>
//                     <h4 className={`text-sm font-extrabold leading-tight ${activeIndex === i ? 'text-amber-700' : 'text-slate-500'}`}>{item.title}</h4>
//                 </div>
//             ))}
//         </div>

//         <div className="w-full md:w-7/12 min-h-[300px] bg-slate-50 rounded-3xl border border-slate-200 flex flex-col items-center justify-center p-10 relative overflow-hidden text-center shadow-inner">
//             <AnimatePresence mode="wait">
//                 <motion.div 
//                     key={activeIndex} 
//                     initial={{ opacity: 0, scale: 0.95, y: 10 }} 
//                     animate={{ opacity: 1, scale: 1, y: 0 }} 
//                     exit={{ opacity: 0, scale: 1.05, y: -10 }} 
//                     transition={{ duration: 0.4 }} 
//                     className="relative z-10 flex flex-col items-center"
//                 >
//                     <div className="w-20 h-20 bg-white rounded-[1.25rem] shadow-md border border-amber-100 flex items-center justify-center mb-8 text-amber-500">
//                         {(() => {
//                             const Icon = icons[activeIndex % icons.length];
//                             return <Icon className="w-10 h-10" />
//                         })()}
//                     </div>
//                     <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{highlights[activeIndex].title}</h3>
//                     <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-sm">{highlights[activeIndex].desc}</p>
//                 </motion.div>
//             </AnimatePresence>
//             <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0, 0.2, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 bg-amber-100 rounded-full blur-[80px] pointer-events-none" />
//         </div>

//     </div>
//   );
// };

// // ==========================================
// // 6. APPLICATIONS GRID 
// // ==========================================
// const ApplicationsGrid = ({ apps }: { apps: any[] }) => {
//   return (
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pt-8">
//       {apps.map((app, i) => (
//         <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
//             key={app.title} 
//             className={`border border-slate-200 rounded-3xl overflow-hidden bg-white p-6 group hover:border-amber-300 hover:shadow-lg transition-all relative`}
//           >
//             <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-amber-50 text-amber-600 mb-4 border border-amber-100`}>
//               <Box className="w-5 h-5" />
//             </div>
//             <h4 className="text-md font-extrabold text-slate-900 mb-2 leading-tight">{app.title}</h4>
//             <p className="text-sm text-slate-600 font-medium leading-relaxed">{app.desc}</p>
//           </motion.div>
//       ))}
//     </div>
//   );
// };

// // ==========================================
// // 7. MODULARITY & SPECS TABS
// // ==========================================
// const ModularitySpecsTabs = ({ specsStructured }: { specsStructured: any }) => {
//   if (!specsStructured) return null;
//   const categories = Object.keys(specsStructured);
//   const [activeTab, setActiveTab] = useState(categories[0]);
//   const accentColors = [ "border-amber-200 text-amber-700 bg-amber-50", "border-blue-200 text-blue-700 bg-blue-50", "border-emerald-200 text-emerald-700 bg-emerald-50", "border-violet-200 text-violet-700 bg-violet-50" ];

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
//             <motion.div key={activeTab} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }} className="space-y-4">
//               {specsStructured[activeTab].map((item: any, i: number) => {
//                 const titleKey = Object.keys(item)[0];
//                 const specValue = Object.keys(item)[1];
//                 const resValue = Object.keys(item)[2];

//                 return (
//                   <motion.div 
//                     initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} key={i} 
//                     className="flex gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl justify-between items-center"
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className={`w-2 h-2 rounded-full ${activeTab === categories[0] ? 'bg-amber-500' : 'bg-blue-500'} shrink-0`} />
//                       <span className="text-sm font-bold text-slate-800 leading-relaxed">{item[titleKey]}</span>
//                     </div>
//                     <div className="text-right flex flex-col">
//                         <span className="text-base font-black text-slate-900 font-mono">{item[specValue]}</span>
//                         <span className="text-xs font-bold text-slate-500 uppercase font-mono">{item[resValue]}</span>
//                     </div>
//                   </motion.div>
//                 )
//               })}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </motion.div>
//   );
// };


// // ==========================================
// // MAIN PAGE COMPONENT
// // ==========================================
// const TransferSystemPage = () => {
//   const product = productsData["2d-transfer-motorised"];
//   const { scrollY } = useScroll();
//   const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);
//   const modelY = useTransform(scrollY, [0, 500], [0, 80]); 

//   if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900 relative">
//         <Navbar />

//         {/* Sticky Header */}
//         <div className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
//           <div className="container py-3 flex items-center justify-between">
//             <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
//               <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link> <span>/</span>
//               <Link to="/products" className="hover:text-amber-600 transition-colors">Catalog</Link> <span>/</span>
//               <span className="hidden sm:inline-block cursor-default text-slate-400">{product.category}</span> <span>/</span>
//               <span className="text-amber-600 font-bold">{product.name}</span>
//             </div>
//             <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
//               <span className="hidden lg:block font-display font-bold text-slate-900">{product.name}</span>
//               <button className="px-5 py-2 rounded-xl font-bold text-white bg-amber-600 text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all pointer-events-auto">Request Quote</button>
//             </motion.div>
//           </div>
//         </div>
        
//         <main className="pt-2 lg:pt-4">
//           {/* HERO SECTION */}
//           <section className="container pt-8 pb-12 lg:pb-16 overflow-hidden relative">
//             <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
//               <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
//                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-extrabold tracking-widest uppercase mb-6 shadow-sm">CRYO MICRO-NANO PROTOTYPING</div>
                
//                 {/* REFINED: Colorful Hero Title Gradient */}
//                 <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 tracking-tight leading-[1.1]">
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
//                     2D TRANSFER SYSTEM
//                   </span>
//                   <br />
//                   <span className="text-slate-900 text-3xl lg:text-4xl mt-2 block">with Motorised Controller</span>
//                 </h1>
                
//                 <p className="text-xl text-amber-600 font-bold mb-6">{product.subtitle}</p>
//                 <div className="space-y-4 mb-8">
//                   {product.overview?.map((p: string, i: number) => (
//                     <p key={i} className="text-base text-slate-600 leading-relaxed font-medium">{p}</p>
//                   ))}
//                 </div>
                
//                 <div className="flex flex-wrap gap-3">
//                   <button className="group px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5">
//                     Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                   <button className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-0.5">
//                     <Download className="w-4 h-4 text-amber-500" /> Full Specs
//                   </button>
//                 </div>
//               </motion.div>

//               <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ y: modelY }} className="relative w-full aspect-[3/4] lg:aspect-square flex items-center justify-center">
//                 <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-transparent rounded-[2.5rem] transform rotate-3 scale-105 opacity-40 pointer-events-none" />
//                 <div className="relative w-full h-full flex justify-center items-center">
//                     <img src={product.heroImage} alt="2D Transfer System Station" className="h-full object-contain mix-blend-multiply drop-shadow-2xl" />
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* KEY FEATURES */}
//           <section className="py-12 lg:py-16 bg-white relative overflow-hidden border-t border-slate-200">
//             <div className="container relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-10">
//                 <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Deterministic Placement</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Key System Features.</h2>
//               </motion.div>
//               <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
//                 {product.keyFeatures?.map((feature: string, i: number) => (
//                     <motion.div 
//                         initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
//                         key={feature} 
//                         className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-xl hover:border-amber-300 hover:shadow-sm transition-all group"
//                     >
//                         <div className="p-2.5 bg-white rounded-lg border border-slate-200 shrink-0 text-amber-500 shadow-sm group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-colors"><CheckCircle2 className="w-5 h-5"/></div>
//                         <span className="text-base font-bold text-slate-800 leading-snug pt-1">{feature}</span>
//                     </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* TELEMETRY SECTION (Upgraded visual patterns) */}
//           <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden border-y border-slate-200">
//             <div className="container relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-10">
//                 <span className="text-amber-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Integrated Design Diagnostics</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Motorised Multi-Axis Controller Feedback.</h2>
//                 <p className="text-base text-slate-600 font-medium max-w-2xl mx-auto">Analyze active formal system diagnostics from fully motorised stages including targeted alignment travel, z-axis approach, and digital angular readouts.</p>
//               </motion.div>
//               <div className="max-w-7xl mx-auto">
//                 <TransferTelemetry />
//               </div>
//             </div>
//           </section>

//           {/* SUBSYSTEMS VISUALIZER */}
//           <section className="py-12 lg:py-16 relative overflow-hidden bg-white border-b border-slate-200">
//             <div className="container mx-auto">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center mb-12">
//                 <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Customisable Architecture</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Core System Subsystems.</h2>
//               </motion.div>
//               <div className="max-w-7xl mx-auto">
//                 <SubsystemsInteractive subsystems={product.subsystems} />
//               </div>
//             </div>
//           </section>

//           {/* NEW: METHODOLOGY DEEP-DIVE (Injecting missing brochure content) */}
//           <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden border-b border-slate-200">
//             <div className="container relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-8">
//                 <span className="text-amber-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Process Mechanics</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Transfer Methodology & Identification.</h2>
//                 <p className="text-base text-slate-600 font-medium max-w-2xl mx-auto">Engineered for deterministic, dry transfer of two-dimensional materials utilizing viscoelastic stamping and optical contrast screening.</p>
//               </motion.div>
//               <MethodologyDeepDive />
//             </div>
//           </section>

//           {/* AUTOMATION SEQUENCE SECTION (REFINED: Light Theme + Hover Animations) */}
//           <section className="py-12 lg:py-16 bg-white relative overflow-hidden border-b border-slate-200">
//             <div className="container relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-12">
//                 <span className="text-cyan-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Advanced capabilities</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Deterministic Process Logic Flow.</h2>
//               </motion.div>
//               <div className="max-w-7xl mx-auto">
//                 <AutomationSequence steps={product.automationProcess} />
//               </div>
//             </div>
//           </section>

//           {/* DESIGN HIGHLIGHTS (Autonomous Playback) Section */}
//           <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden border-b border-slate-200">
//             <div className="container mx-auto relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-10">
//                 <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Precision Prototyping</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Integrated Advanced Capabilities.</h2>
//               </motion.div>
//               <div className="max-w-7xl mx-auto">
//                 <AutonomousDesignHighlights highlights={product.designHighlights} />
//               </div>
//             </div>
//           </section>

//           {/* MODULARITY & TECHNICAL SPECS TABS Section */}
//           <section className="py-12 lg:py-16 bg-white relative border-b border-slate-200 overflow-hidden">
//             <div className="container mx-auto">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-8">
//                 <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Advanced Specifications</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">Technical Specs & Configuration.</h2>
//               </motion.div>
              
//               <ModularitySpecsTabs specsStructured={product.technicalSpecsStructured} />

//               {/* REFINED: Additional Options with animation and hover effects */}
//               <div className="max-w-6xl mx-auto mt-12 bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
//                 <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-3"><Scaling className="w-5 h-5 text-amber-500"/>Additional Customisable Options</h3>
//                 <ul className="space-y-4">
//                   {product.modularitySpecs["Technical Specifications"].map((item: string, i: number) => (
//                     <motion.li 
//                       key={i} 
//                       initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1, duration: 0.4 }}
//                       whileHover={{ x: 10, scale: 1.01, backgroundColor: "#fffbeb", borderColor: "#fcd34d" }}
//                       className="flex gap-4 text-sm font-bold text-slate-700 leading-relaxed bg-white border border-slate-200 p-5 rounded-2xl shadow-sm cursor-default transition-colors"
//                     >
//                       <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> 
//                       {item}
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </section>

//           {/* APPLICATIONS SECTION */}
//           <section className="py-12 lg:py-16 relative overflow-hidden bg-slate-50">
//             <div className="container mx-auto relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-8">
//                 <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Ideal for materials</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Applications</h2>
//               </motion.div>
//               <div className="max-w-6xl mx-auto">
//                 <ApplicationsGrid apps={product.applications} />
//               </div>
//             </div>
//           </section>

//           {/* CTA SECTION */}
//           <section className="container py-12 lg:py-16 border-t border-slate-200 bg-white">
//             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="bg-[#fffbeb] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-10 items-center justify-between shadow-lg relative overflow-hidden border border-amber-100">
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-200/50 to-transparent pointer-events-none" />
//               <div className="lg:w-1/2 relative z-10 text-slate-900">
//                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-200 text-amber-800 text-[10px] font-extrabold tracking-widest uppercase mb-4 shadow-sm"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Advanced Engineering Support</div>
//                 <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">Speak to an <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Specialist</span></h2>
//                 <p className="text-base text-slate-700 font-medium mb-8">Discuss your fully customised 2D material transfer requirements and twistronics research today.</p>
//                 <button className="px-6 py-3 rounded-xl font-bold text-white bg-amber-600 shadow-md hover:shadow-lg hover:bg-amber-500 transition-all flex items-center gap-2 hover:-translate-y-1">Get a Quote <ArrowRight className="w-4 h-4" /></button>
//               </div>
//               <div className="lg:w-5/12 flex flex-col gap-4 w-full relative z-10">
//                 <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-slate-100 hover:border-amber-300 hover:shadow-md transition-all">
//                   <div className="w-14 h-14 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0"><Phone className="w-6 h-6 text-amber-500" /></div>
//                   <div><p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Call Us Directly</p><p className="text-xl font-extrabold text-slate-900">+91 97481 81485</p></div>
//                 </div>
//                 <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-slate-100 hover:border-amber-300 hover:shadow-md transition-all">
//                   <div className="w-14 h-14 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0"><Mail className="w-6 h-6 text-amber-500" /></div>
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

// export default TransferSystemPage;

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
  Image, Gauge, Maximize2, Focus, RotateCw
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// Icon mapping dictionary
const iconMap: Record<string, any> = { 
  Move, RotateCw, Camera, Maximize2, ThermometerSnowflake, Settings, Activity, Zap, Shield, Layers, Target, Eye
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
// CORE TECHNOLOGIES – Interactive Control Hub
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
                {activeTech.type === 'hardware' ? <Cpu className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
              </div>
              <h3 className="text-2xl font-extrabold text-[#0A2647]">{activeTech.title}</h3>
            </div>
            
            <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">{activeTech.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Core Features</p>
                <ul className="space-y-2.5">
                  {activeTech.bullets.map((b: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {activeTech.type === 'hardware' && activeTech.highlights && (
                   <div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Specifications</p>
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
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Platform Capabilities</p>
                    <div className="flex flex-wrap gap-2">
                      {activeTech.platforms.map((p: string, idx: number) => (
                        <span key={idx} className="px-3 py-1.5 bg-[#0A2647] text-white text-xs font-bold rounded-lg">{p}</span>
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
                    Enabling precision motion control, high-resolution 4K imaging, and automated analysis specifically optimized for {app.toLowerCase()} workflows.
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
// OPTIONAL ENHANCEMENTS – Highlighted Grid
// ==========================================
const OptionalEnhancements = ({ configs }: { configs: string[] }) => {
  const icons = [Settings, Maximize2, Target, Layers, Activity, Camera, Shield, Move];
  
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-8 border border-border shadow-sm">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
          <Settings className="w-3.5 h-3.5" /> Customize Your System
        </div>
        <h3 className="text-2xl font-extrabold text-[#0A2647] mt-3">Optional Enhancements</h3>
        <p className="text-sm text-slate-500 mt-1">Configure your transfer system for specific research requirements</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
export default function MicroscopeMotorisedController() {
  const product = productsData["2d-transfer-motorised"];
  const [activeSection, setActiveSection] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>("XYZ Positioning Stage");
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
              <div className="w-full max-w-[550px] aspect-square rounded-[2rem] bg-gradient-to-br from-[#0F294D] to-[#0A1B35] border border-slate-700 p-2 shadow-2xl relative overflow-hidden group">
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
                        <img src={product.gallery[currentImage].url} alt={product.gallery[currentImage].caption} className="w-full h-full object-cover opacity-85 mix-blend-screen" />
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

        

        {/* 07. OPTIONAL ENHANCEMENTS */}
        <section className="py-10 bg-white border-b border-border">
          <div className="container max-w-6xl">
            <OptionalEnhancements configs={product.configurations} />
          </div>
        </section>

        {/* 08. APPLICATIONS */}
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
                    <div className="aspect-square overflow-hidden bg-slate-100">
                      <img src={img.url} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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