// import { useState, useEffect } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { 
//   ArrowRight, Download, Phone, Mail,
//   Settings, Activity, Layers, CheckCircle2, PackageSearch,
//   Scaling, Magnet, Zap, Thermometer,
//   Lightbulb, Beaker, Network, Maximize2, Target, Info, MapIcon
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { productsData } from "@/data/products";

// // ==========================================
// // 1. LIVE TELEMETRY & AUTOMATED CONTROLS
// // (Kept exact as approved)
// // ==========================================
// const FieldTelemetryVisualizer = () => {
//   const [currentA, setCurrentA] = useState(0);
//   const [liveGap, setLiveGap] = useState(40);
//   const [liveField, setLiveField] = useState(0);
//   const [isAuto, setIsAuto] = useState(true);

//   useEffect(() => {
//     if (!isAuto) return;
//     const interval = setInterval(() => {
//       setCurrentA((prev) => {
//         if (prev >= 80) return 0;
//         return prev + 1;
//       });
//       setLiveGap((prev) => {
//         if (prev <= 0) return 40;
//         return prev - 0.5;
//       });
//     }, 100);
//     return () => clearInterval(interval);
//   }, [isAuto]);

//   useEffect(() => {
//     const gapFactor = liveGap === 0 ? 1 : 10 / (liveGap || 1); 
//     const currentFactor = currentA / 80; 
//     const simulatedField = (2.2 * currentFactor * Math.min(gapFactor, 2)).toFixed(3);
//     setLiveField(parseFloat(simulatedField));
//   }, [currentA, liveGap]);

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
//       className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden font-sans flex flex-col relative"
//       onMouseEnter={() => setIsAuto(false)}
//       onMouseLeave={() => setIsAuto(true)}
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f1f5f9_2px,transparent_2px)] bg-[size:24px_24px] pointer-events-none" />
      
//       <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
//         <div className="flex items-center gap-3">
//           <div className={`w-3 h-3 rounded-full animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.6)] ${isAuto ? 'bg-emerald-500' : 'bg-rose-500'}`} />
//           <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">
//             {isAuto ? 'Autonomous Sweep Active' : 'Manual Override'}
//           </span>
//         </div>
//         <Magnet className="w-5 h-5 text-emerald-500" />
//       </div>

//       <div className="p-8 grid lg:grid-cols-2 gap-10 relative z-10 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
//         {/* LIVE GAUGES */}
//         <div className="px-0 lg:px-6 relative flex flex-col shadow-inner overflow-hidden pb-10 md:pb-0 h-[420px]">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-emerald-500 text-xs font-extrabold uppercase tracking-widest mb-1">System Feedback</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Performance Output</p>
//             </div>
//             <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100"><Activity className="w-6 h-6 text-emerald-500" /></div>
//           </div>
          
//           <div className="flex-grow flex flex-col justify-center gap-6 w-full mt-2">
//             <div className="bg-white border border-slate-200 px-6 py-4 rounded-xl flex items-center justify-between transition-colors duration-500 hover:border-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] relative overflow-hidden group">
//                 <Scaling className="absolute top-1 right-1 w-16 h-16 text-slate-100 opacity-50 group-hover:text-emerald-100 transition-colors" />
//                 <div className="relative z-10">
//                     <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">Magnetic Field</span>
//                     <p className="text-sm text-slate-600 font-medium max-w-xs mt-1">Calculated central strength.</p>
//                 </div>
//                 <div className="flex items-end gap-1 shrink-0 text-center relative z-10">
//                     <span className="text-5xl font-black text-emerald-600 font-mono drop-shadow-sm">{liveField.toFixed(3)}</span>
//                     <span className="text-xl font-bold text-emerald-500">T</span>
//                 </div>
//             </div>

//             <div className="bg-white border border-slate-200 px-6 py-4 rounded-xl flex items-center justify-between transition-colors duration-500 hover:border-amber-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] relative overflow-hidden group">
//                 <Zap className="absolute top-1 right-1 w-16 h-16 text-slate-100 opacity-50 group-hover:text-amber-100 transition-colors" />
//                 <div className="relative z-10">
//                     <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">Power Draw</span>
//                 </div>
//                 <div className="flex items-end gap-1 shrink-0 text-center relative z-10">
//                     <span className="text-3xl font-black text-amber-500 font-mono drop-shadow-sm">{((currentA/80)*1.5).toFixed(2)}</span>
//                     <span className="text-lg font-bold text-amber-400">kW</span>
//                 </div>
//             </div>

//             <div className="bg-white border border-slate-200 px-6 py-4 rounded-xl flex items-center justify-between transition-colors duration-500 hover:border-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] relative overflow-hidden group">
//                  <Thermometer className="absolute top-1 right-1 w-16 h-16 text-slate-100 opacity-50 group-hover:text-blue-100 transition-colors" />
//                  <div className="relative z-10">
//                     <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">Cooling State</span>
//                  </div>
//                  <div className="flex items-center gap-2 relative z-10">
//                     <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
//                     <span className="text-lg font-bold font-mono text-blue-600">Active Loop</span>
//                  </div>
//             </div>
//           </div>
//         </div>

//         {/* INTERACTIVE CONTROLS */}
//         <div className="px-0 lg:px-6 relative flex flex-col shadow-inner overflow-hidden pt-10 md:pt-0 h-[420px]">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-blue-500 text-xs font-extrabold uppercase tracking-widest mb-1">Controller Interface</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">System Control</p>
//             </div>
//             <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100"><Settings className="w-6 h-6 text-blue-500" /></div>
//           </div>
          
//           <div className="flex-grow flex flex-col justify-center gap-10 w-full mt-2 bg-slate-50 border-2 border-slate-100 rounded-2xl p-8 relative overflow-hidden shadow-inner">
              
//               <div className="space-y-4 relative z-10">
//                   <div className="flex justify-between items-center text-sm font-bold text-slate-900">
//                     <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-amber-500"/> Current (A)</span> 
//                     <span className="font-mono text-xl font-black text-amber-600 bg-white px-3 py-1 rounded-lg border border-amber-200 shadow-sm">{currentA.toFixed(1)}</span>
//                   </div>
//                   <input type="range" min="0" max="80" step="0.1" value={currentA} onChange={(e) => {setCurrentA(parseFloat(e.target.value)); setIsAuto(false);}} className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-amber-500 hover:accent-amber-600 transition-all shadow-inner"/>
//                   <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest"><span>0 A</span><span>80 A</span></div>
//               </div>

//               <div className="space-y-4 relative z-10">
//                   <div className="flex justify-between items-center text-sm font-bold text-slate-900">
//                     <span className="flex items-center gap-2"><MapIcon className="w-4 h-4 text-blue-500"/> Pole Gap (mm)</span> 
//                     <span className="font-mono text-xl font-black text-blue-600 bg-white px-3 py-1 rounded-lg border border-blue-200 shadow-sm">{liveGap.toFixed(1)}</span>
//                   </div>
//                   <input type="range" min="0" max="40" step="0.1" value={liveGap} onChange={(e) => {setLiveGap(parseFloat(e.target.value)); setIsAuto(false);}} className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-blue-500 hover:accent-blue-600 transition-all shadow-inner"/>
//                   <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest"><span>0 mm</span><span>40 mm</span></div>
//               </div>
            
//             <motion.div animate={{ opacity: [0, 0.4, 0], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
//           </div>
//         </div>

//       </div>
//     </motion.div>
//   );
// };

// // ==========================================
// // 2. PERFORMANCE CHARTS (Light Theme, Autonomous Sweep)
// // (Kept exact as approved)
// // ==========================================
// const PerformanceCharts = () => {
//   const curves = [
//     { current: 0, field: 0 }, { current: 20, field: 0.8 }, { current: 40, field: 1.4 }, { current: 60, field: 1.9 }, { current: 80, field: 2.2 }
//   ];

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
//       className="w-full bg-[#fef3c7] rounded-[2.5rem] border border-amber-200 shadow-xl overflow-hidden font-sans flex flex-col relative"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#fde68a_2px,transparent_2px)] bg-[size:20px_20px] opacity-60 pointer-events-none" />
      
//       <div className="bg-white/80 backdrop-blur border-b border-amber-200 px-8 py-5 flex items-center justify-between relative z-10">
//         <span className="text-amber-800 text-xs font-extrabold tracking-widest uppercase font-mono">Performance Analytics</span>
//         <Activity className="w-5 h-5 text-amber-500" />
//       </div>

//       <div className="p-8 relative z-10">
//         <div className="flex justify-between items-start mb-6">
//           <div>
//             <p className="text-amber-600 text-xs font-extrabold uppercase tracking-widest mb-1">Automated Sweep Analysis</p>
//             <p className="text-3xl font-extrabold text-slate-900 tracking-tight">Magnetic Field vs Current</p>
//           </div>
//         </div>
        
//         <div className="flex-grow flex items-center justify-center w-full h-[400px] mt-2 bg-white/70 backdrop-blur border-2 border-amber-100 rounded-3xl relative overflow-hidden p-10 shadow-sm">
//           <svg viewBox="0 0 500 250" className="absolute inset-0 w-full h-full text-slate-400" preserveAspectRatio="none">
//             <line x1="50" y1="200" x2="450" y2="200" stroke="currentColor" strokeWidth="2" />
//             <line x1="50" y1="200" x2="50" y2="50" stroke="currentColor" strokeWidth="2" />
//             {[50, 100, 150].map(y => <line key={y} x1="50" y1={y} x2="450" y2={y} stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>)}
//             {[150, 250, 350, 450].map(x => <line key={x} x1="x" y1="200" x2="x" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>)}
            
//             <text x="250" y="240" fill="#64748b" fontSize="12" fontWeight="800" textAnchor="middle" className="font-sans uppercase tracking-widest">Coil Current (Amps)</text>
//             <text x="20" y="125" fill="#64748b" fontSize="12" fontWeight="800" textAnchor="middle" transform="rotate(-90 20 125)" className="font-sans uppercase tracking-widest">Field (Tesla)</text>

//              <AnimatePresence>
//                <motion.path 
//                   d={`M 50 200 ${curves.map((d: any) => `L ${50 + (d.current/80) * 400} ${200 - (d.field/2.5) * 150}`).join(' ')}`} 
//                   fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" 
//                   initial={{ pathLength: 0 }}
//                   animate={{ pathLength: [0, 1, 1, 0] }}
//                   transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
//                />
//                <motion.path 
//                   d={`M 50 200 ${curves.map((d: any) => `L ${50 + (d.current/80) * 400} ${200 - (d.field/2.5) * 150}`).join(' ')} L 450 200 Z`} 
//                   fill="rgba(245, 158, 11, 0.1)" 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: [0, 1, 1, 0] }}
//                   transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
//                />
//                {curves.map((d, i) => (
//                  <motion.circle 
//                     key={i}
//                     cx={50 + (d.current/80) * 400} 
//                     cy={200 - (d.field/2.5) * 150} 
//                     r="6" fill="#fff" stroke="#f59e0b" strokeWidth="3"
//                     initial={{ scale: 0 }}
//                     animate={{ scale: [0, 1.5, 1, 0] }}
//                     transition={{ duration: 6, delay: i * 0.2, repeat: Infinity }}
//                  />
//                ))}
//               </AnimatePresence>
//           </svg>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // ==========================================
// // 3. NEW FEATURE: Animated Key Features Sub-Section
// // Separated from hero, colorful glowing cards
// // ==========================================
// const KeyFeaturesAnimated = ({ features }: { features: string[] }) => {
//   return (
//     <section className="py-12 bg-white relative overflow-hidden border-t border-slate-200">
//         <div className="container max-w-7xl mx-auto">
//             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
//                 <h3 className="font-display font-extrabold text-slate-900 text-3xl">System Key Features</h3>
//             </motion.div>
//             <div className="flex flex-wrap justify-center gap-6">
//                 {features.map((feature, i) => {
//                     const colors = ["rose", "blue", "amber", "emerald", "purple"];
//                     const col = colors[i % colors.length];
//                     return (
//                         <motion.div 
//                             key={i}
//                             initial={{ opacity: 0, scale: 0.9, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
//                             whileHover={{ y: -5, scale: 1.05 }}
//                             className={`bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center gap-4 transition-all duration-300 cursor-default hover:border-${col}-300`}
//                         >
//                             <div className={`w-12 h-12 bg-${col}-50 rounded-xl flex items-center justify-center text-${col}-500 shrink-0 border border-${col}-100`}>
//                                 <CheckCircle2 className="w-6 h-6" />
//                             </div>
//                             <span className="font-bold text-slate-700 text-sm max-w-[200px] leading-snug">{feature}</span>
//                         </motion.div>
//                     )
//                 })}
//             </div>
//         </div>
//     </section>
//   );
// };

// // ==========================================
// // 4. MATRIX PATTERN 1: Animated Table (Mechanical/Optical)
// // (Kept exact as approved)
// // ==========================================
// const MechanicalOpticalMatrix = () => {
//   const data = [
//     { section: "Mechanical Specifications", items: [
//       { metric: "Pole Configuration", value: "Dipole electromagnet" },
//       { metric: "Mechanical Pole Size", value: "38 × 38 mm" },
//       { metric: "Pole Faces", value: "Reversible configuration" },
//       { metric: "Standard pole face diameter", value: "15mm" },
//       { metric: "Adjustable Pole Gap", value: "0–40 mm" },
//       { metric: "Weight", value: "~14 kg" }
//     ]},
//     { section: "Optimized for Optical Access", items: [
//       { metric: "Coil Geometry", value: "Low-profile coil geometry" },
//       { metric: "Beam Interference", value: "Minimal beam obstruction" },
//       { metric: "Integration", value: "Direct compatibility with optical tables" },
//       { metric: "Stability", value: "Stable mounting base for vibration-sensitive setups" },
//       { metric: "Ideal Use Case", value: "Ideal for spectrometers, lasers & imaging systems" }
//     ]}
//   ];

//   return (
//     <div className="w-full grid md:grid-cols-2 gap-8">
//       {data.map((cat, idx) => (
//         <motion.div 
//           key={idx}
//           initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}
//           className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden"
//         >
//           <div className="bg-slate-50 border-b border-slate-200 p-6 flex justify-between items-center">
//             <h3 className="font-display font-extrabold text-slate-900 text-xl">{cat.section}</h3>
//             <Layers className="w-6 h-6 text-emerald-500" />
//           </div>
//           <div className="divide-y divide-slate-100">
//             {cat.items.map((row, i) => (
//               <motion.div 
//                 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
//                 key={i} className="flex justify-between p-5 items-center hover:bg-emerald-50/80 hover:shadow-[inset_0_0_15px_rgba(16,185,129,0.1)] transition-all group cursor-default"
//               >
//                 <div className="font-bold text-slate-600 text-sm group-hover:text-emerald-700 transition-colors w-1/2">{row.metric}</div>
//                 <div className="text-right font-extrabold text-slate-900 text-sm w-1/2">{row.value}</div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// // ==========================================
// // 5. NEW FEATURE: Autonomous Coil & Power Showcase
// // Replaces static cards with dynamic, animated tabs
// // ==========================================
// const AutonomousCoilPower = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const data = [
//         { 
//             title: "Advanced Coil & Cooling Design", 
//             icon: Thermometer, 
//             color: "blue",
//             desc: "Patent-pending thermal management.",
//             points: [
//                 "Patent-pending low-profile coil geometry",
//                 "Optimized for uniform field generation",
//                 "Thermally encapsulated coils for enhanced reliability",
//                 "Copper-aluminium jackets for efficient heat dissipation",
//                 "Closed-loop cooling enables sustained high-field operation"
//             ] 
//         },
//         { 
//             title: "Electrical Specifications", 
//             icon: Zap, 
//             color: "amber",
//             desc: "High-performance power delivery.",
//             points: [
//                 "Power Supply: IGBT-based high-current",
//                 "Output current up to 80 A",
//                 "Power Rating: 1.5 kW high-power coil supply",
//                 "Noise Performance: Low-ripple, unipolar power supply design",
//                 "Suitable for noise-sensitive optical experiments"
//             ] 
//         }
//     ];

//     // Auto-cycle tabs
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setActiveIndex(prev => (prev + 1) % data.length);
//         }, 5000);
//         return () => clearInterval(timer);
//     }, [data.length]);

//     const activeData = data[activeIndex];

//     return (
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch bg-white p-8 rounded-[3rem] border border-slate-200 shadow-xl relative overflow-hidden transition-colors duration-1000" style={{ backgroundColor: activeIndex === 0 ? '#f0f9ff' : '#fffbeb' }}>
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none" />
            
//             {/* Left Nav */}
//             <div className="w-full md:w-5/12 flex flex-col gap-4 relative z-10 justify-center">
//                 {data.map((item, i) => (
//                     <div 
//                         key={i} 
//                         onClick={() => setActiveIndex(i)} 
//                         className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 flex items-center gap-5 border-2 ${activeIndex === i ? `bg-white shadow-lg border-${item.color}-400` : 'bg-white/50 border-transparent hover:bg-white/80'}`}
//                     >
//                         <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${activeIndex === i ? `bg-${item.color}-500 text-white shadow-[0_0_15px_rgba(0,0,0,0.2)]` : `bg-slate-100 text-slate-400`}`}>
//                             <item.icon className="w-6 h-6" />
//                         </div>
//                         <div>
//                             <h4 className={`text-lg font-extrabold leading-tight mb-1 ${activeIndex === i ? `text-${item.color}-700` : 'text-slate-500'}`}>{item.title}</h4>
//                             <p className="text-xs font-bold text-slate-400">{item.desc}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Right Display */}
//             <div className="w-full md:w-7/12 bg-white/80 backdrop-blur rounded-[2rem] border border-white p-10 shadow-sm relative z-10 flex flex-col justify-center">
//                 <AnimatePresence mode="wait">
//                     <motion.div 
//                         key={activeIndex} 
//                         initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}
//                     >
//                         <div className="flex items-center gap-4 mb-8 border-b border-slate-200/50 pb-4">
//                             <activeData.icon className={`w-8 h-8 text-${activeData.color}-500`} />
//                             <h3 className="text-3xl font-display font-extrabold text-slate-900">{activeData.title}</h3>
//                         </div>
//                         <ul className="space-y-5">
//                             {activeData.points.map((pt, idx) => (
//                                 <motion.li 
//                                     key={idx} 
//                                     initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
//                                     className={`flex items-start gap-4 text-slate-700 font-bold text-base leading-relaxed p-3 rounded-xl hover:bg-${activeData.color}-50 transition-colors`}
//                                 >
//                                     <CheckCircle2 className={`w-6 h-6 text-${activeData.color}-500 shrink-0 mt-0.5`} /> {pt}
//                                 </motion.li>
//                             ))}
//                         </ul>
//                     </motion.div>
//                 </AnimatePresence>
//             </div>
//         </div>
//     );
// };

// // ==========================================
// // 6. APPLICATIONS: Hexagonal Futuristic Data Showcase
// // Upgraded with larger fonts and animated hover descriptions
// // ==========================================
// const HexagonalApplications = () => {
//     const apps = [
//         { 
//             title: "Optical & Magneto-Optical Spectroscopy", 
//             icon: Lightbulb, 
//             color: "rose",
//             desc: "Seamless integration with optical tables, providing minimal beam obstruction for complex laser paths and imaging."
//         },
//         { 
//             title: "Magnetic Field-Dependent Photoluminescence", 
//             icon: Zap, 
//             color: "amber",
//             desc: "Stable, low-noise environment ensuring high-fidelity signal collection for delicate photoluminescence studies."
//         },
//         { 
//             title: "Materials Science & Condensed Matter", 
//             icon: Beaker, 
//             color: "blue",
//             desc: "Variable field control for characterizing novel 2D materials, spintronics, and van der Waals heterostructures."
//         },
//         { 
//             title: "Compact Test & Measurement Setups", 
//             icon: Target, 
//             color: "emerald",
//             desc: "Lightweight dipole architecture optimized for space-constrained laboratory environments requiring precise fields."
//         }
//     ];

//     return (
//         <div className="relative w-full py-16 flex flex-wrap justify-center gap-8 items-start max-w-7xl mx-auto">
//             {/* Animated Background Connector Lines */}
//             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" preserveAspectRatio="none">
//                 <motion.path 
//                     d="M 10% 50% L 90% 50% M 30% 20% L 70% 80% M 30% 80% L 70% 20%" 
//                     stroke="#94a3b8" strokeWidth="2" strokeDasharray="10 10"
//                     animate={{ strokeDashoffset: [0, 100] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//                 />
//             </svg>

//             {apps.map((app, i) => (
//                 <motion.div 
//                     key={i}
//                     variants={{
//                         idle: { scale: 1, y: 0 },
//                         hover: { scale: 1.05, y: -10 }
//                     }}
//                     initial="idle"
//                     whileInView="idle"
//                     whileHover="hover"
//                     viewport={{ once: true }}
//                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                     className={`relative w-72 flex flex-col items-center justify-start text-center p-8 bg-white border-2 border-slate-100 rounded-[3rem] shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-${app.color}-400 group z-10 cursor-default overflow-hidden`}
//                 >
//                     {/* Glowing pulse effect */}
//                     <motion.div animate={{ opacity: [0, 0.4, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }} className={`absolute inset-0 bg-${app.color}-100 rounded-[3rem] blur-2xl pointer-events-none`} />
                    
//                     <motion.div 
//                       variants={{ idle: { rotate: 0 }, hover: { rotate: 180 } }} transition={{ duration: 0.6 }}
//                       className={`w-20 h-20 bg-${app.color}-50 rounded-2xl flex items-center justify-center text-${app.color}-500 mb-6 border border-${app.color}-100 relative z-10 shadow-sm shrink-0`}
//                     >
//                         <app.icon className="w-10 h-10" />
//                     </motion.div>
                    
//                     <h4 className="text-xl font-extrabold text-slate-900 leading-tight relative z-10 mb-2">{app.title}</h4>
                    
//                     {/* Expandable Description on Hover */}
//                     <motion.div 
//                         variants={{
//                             idle: { opacity: 0, height: 0, marginTop: 0 },
//                             hover: { opacity: 1, height: "auto", marginTop: 16 }
//                         }}
//                         className="relative z-10 overflow-hidden"
//                     >
//                         <p className="text-sm font-bold text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
//                             {app.desc}
//                         </p>
//                     </motion.div>
//                 </motion.div>
//             ))}
//         </div>
//     );
// };

// // ==========================================
// // MAIN PAGE COMPONENT
// // ==========================================
// const SpectroscopyElectromagnetPage = () => {
//   const product = productsData["spectroscopy-magnet"] || {
//       // Robust fallback data
//       name: "Spectroscopy Electromagnet",
//       subtitle: "Compact, High-Performance Dipole Electromagnet for Precision Spectroscopy",
//       heroImage: "/images/spectroscopy-electromagnet.png", 
//       overview: [
//         "Ultra-compact and lightweight, the CryoNano Spectroscopy Electromagnet delivers exceptional magnetic field strength from a lightweight, lab-friendly form factor, ideal for spectroscopic and optical research applications."
//       ],
//       keyFeatures: [
//         "Extremely compact and lightweight dipole electromagnet",
//         "Ideal for spectroscopy and optical measurement setups",
//         "Minimal optical obstruction due to low-profile coil design",
//         "High field stability with low electrical noise",
//         "Designed for continuous laboratory operation"
//       ],
//       category: "Electromagnets"
//   };
  
//   const { scrollY } = useScroll();
//   const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);
//   const modelY = useTransform(scrollY, [0, 500], [0, 100]); 

//   if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

//   return (
//     <PageTransition>
//       {/* <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 font-sans selection:bg-rose-100 selection:text-rose-900 relative overflow-x-hidden"> */}



//       <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 font-sans selection:bg-rose-100 selection:text-rose-900 relative">
//         <Navbar />

//         {/* Sticky Header */}
//         {/* <div className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}> */}

//         <div className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
//           <div className="container py-3 flex items-center justify-between">
//             <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
//               <Link to="/" className="hover:text-rose-600 transition-colors">Home</Link> <span>/</span>
//               <Link to="/products" className="hover:text-rose-600 transition-colors">Catalog</Link> <span>/</span>
//               <span className="hidden sm:inline-block cursor-default text-slate-400">{product.category}</span> <span>/</span>
//               <span className="text-rose-600 font-bold">{product.name}</span>
//             </div>
//             <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
//               <span className="hidden lg:block font-display font-bold text-slate-900">{product.name}</span>
//               <button className="px-5 py-2 rounded-xl font-bold text-white bg-rose-600 text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all pointer-events-auto">Request Quote</button>
//             </motion.div>
//           </div>
//         </div>
        
//         <main className="pt-4 lg:pt-8">
//           {/* HERO SECTION (Fixed whitespace: items-start, removed key features) */}
//           <section className="container pb-12 lg:pb-16 overflow-hidden relative">
//             <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start relative z-10">
              
//               <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="pt-4">
//                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[10px] font-extrabold tracking-widest uppercase mb-6 shadow-sm">
//                   <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"/> CRYONANO LABS
//                 </div>
                
//                 {/* Colorful Hero Title Gradient with Motion */}
//                 <motion.h1 
//                     animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
//                     transition={{ duration: 10, ease: "linear", repeat: Infinity }}
//                     className="font-display text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-[1.1] bg-[length:200%_auto] text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-purple-600 to-blue-600 pb-2"
//                 >
//                   {product.name}
//                 </motion.h1>
                
//                 <p className="text-2xl text-slate-800 font-black mb-6">{product.subtitle}</p>
                
//                 <div className="space-y-4 mb-10">
//                   {product.overview?.map((p: string, i: number) => (
//                     <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + (i*0.1) }} key={i} className="text-lg text-slate-600 leading-relaxed font-medium">{p}</motion.p>
//                   ))}
//                 </div>
                
//                 {/* Animated Buttons with Glow */}
//                 <div className="flex flex-wrap gap-4">
//                   <button className="group px-8 py-4 rounded-xl font-extrabold text-white bg-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.3)] hover:shadow-[0_0_25px_rgba(225,29,72,0.6)] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1">
//                     Get a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                   <button className="px-8 py-4 rounded-xl font-extrabold text-slate-800 bg-white border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 hover:text-blue-700">
//                     <Download className="w-5 h-5" /> Full Specs
//                   </button>
//                 </div>
//               </motion.div>

//               {/* 2x2 Image Grid (Multiple detail views) */}
//               <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ y: modelY }} className="w-full aspect-square grid grid-cols-2 grid-rows-2 gap-4 relative">
//                  <div className="absolute inset-0 bg-rose-100 rounded-full blur-[100px] opacity-40 pointer-events-none" />
                 
//                  {[
//                     { alt: "Dipole Angled View", delay: 0, color: "rose" },
//                     { alt: "Low-profile Coil Detail", delay: 0.15, color: "blue" },
//                     { alt: "Optical Access Gap", delay: 0.3, color: "amber" },
//                     { alt: "Compact Scale Reference", delay: 0.45, color: "emerald" }
//                  ].map((img, i) => (
//                     <motion.div 
//                         key={i}
//                         initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + img.delay, duration: 0.5 }}
//                         whileHover={{ scale: 1.05, zIndex: 10 }}
//                         className={`bg-white rounded-3xl border-2 border-slate-100 p-4 shadow-lg hover:border-${img.color}-400 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all cursor-crosshair flex items-center justify-center relative overflow-hidden group`}
//                     >
//                         <img src={product.heroImage} alt={img.alt} className="w-full h-full object-contain mix-blend-multiply" />
//                         <div className={`absolute bottom-0 left-0 right-0 bg-${img.color}-500 text-white text-[10px] font-bold text-center py-1 translate-y-full group-hover:translate-y-0 transition-transform`}>
//                           {img.alt}
//                         </div>
//                     </motion.div>
//                  ))}
//               </motion.div>
//             </div>
//           </section>

//           {/* NEW: Animated Key Features Sub-section */}
//           {product.keyFeatures && product.keyFeatures.length > 0 && (
//               <KeyFeaturesAnimated features={product.keyFeatures} />
//           )}

//           {/* SYSTEM CONTROL TELEMETRY (Interactive & Automated) */}
//           <section className="py-12 lg:py-20 bg-slate-50 relative overflow-hidden border-y border-slate-200">
//             <div className="container relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
//                 <span className="text-rose-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">System Control & Power Output</span>
//                 <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Precision Control Telemetry.</h2>
//                 <p className="text-lg text-slate-600 font-medium">Analyze automated diagnostics and control parameters for the high-performance dipole electromagnet.</p>
//               </motion.div>
//               <div className="max-w-7xl mx-auto">
//                 <FieldTelemetryVisualizer />
//               </div>
//             </div>
//           </section>

//           {/* PERFORMANCE ANALYTICS (Light Theme Graph) */}
//           <section className="py-12 lg:py-20 relative overflow-hidden bg-white">
//             <div className="container mx-auto">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
//                 <span className="text-amber-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Automated Sweep Analysis</span>
//                 <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Field vs Current Diagnostics.</h2>
//               </motion.div>
//               <div className="max-w-6xl mx-auto">
//                 <PerformanceCharts />
//               </div>
//             </div>
//           </section>

//           {/* TWO DISTINCT MATRIX SECTIONS */}
//           <section className="py-12 lg:py-20 bg-slate-50 relative border-y border-slate-200">
//             <div className="container mx-auto">
              
//               <div className="mb-20">
//                   <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-10">
//                     <span className="text-emerald-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Technical Specifications Matrix</span>
//                     <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900">Mechanical & Optical Profile</h2>
//                   </motion.div>
//                   <div className="max-w-5xl mx-auto">
//                     <MechanicalOpticalMatrix />
//                   </div>
//               </div>

//               <div>
//                   <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-10">
//                     <span className="text-blue-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Physical Matrix</span>
//                     <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900">Advanced Coil & Power Design</h2>
//                   </motion.div>
//                   <div className="max-w-6xl mx-auto">
//                     <AutonomousCoilPower />
//                   </div>
//               </div>

//             </div>
//           </section>

//           {/* APPLICATIONS (Hexagonal Showcase) */}
//           <section className="py-12 lg:py-24 relative overflow-hidden bg-white">
//             <div className="container mx-auto relative z-10">
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
//                 <span className="text-purple-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Typical Applications</span>
//                 <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Research Integrations.</h2>
//               </motion.div>
              
//               <HexagonalApplications />
              
//             </div>
//           </section>

          
//           {/* CTA SECTION */}
//           <section className="container py-12 lg:py-16 border-t border-slate-200 bg-white">
//             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-rose-50 to-blue-50 rounded-[3rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-10 items-center justify-between shadow-xl border border-rose-100 relative overflow-hidden">
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.08)_0%,transparent_60%)] pointer-events-none" />
//               <div className="lg:w-1/2 relative z-10">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur border border-rose-200 text-slate-800 text-[10px] font-extrabold tracking-widest uppercase mb-6 shadow-sm"><div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" /> Precision System Support</div>
//                 <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-blue-600">Specialist</span></h2>
//                 <p className="text-lg text-slate-700 font-medium mb-10">Discuss your variable magnetic field requirements and optical integrations today.</p>
//                 <button className="px-8 py-4 rounded-xl font-extrabold text-white bg-rose-600 shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:bg-rose-500 hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] hover:-translate-y-1 transition-all flex items-center gap-2">Get a Quote <ArrowRight className="w-5 h-5" /></button>
//               </div>
//               <div className="lg:w-5/12 flex flex-col gap-4 w-full relative z-10">
//                 <div className="bg-white/80 backdrop-blur rounded-3xl p-6 flex items-center gap-6 shadow-md border border-white hover:border-rose-300 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
//                   <div className="w-14 h-14 rounded-2xl border border-rose-100 bg-rose-50 flex items-center justify-center shrink-0"><Phone className="w-6 h-6 text-rose-500" /></div>
//                   <div><p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-1">Call Us Directly</p><p className="text-2xl font-extrabold text-slate-900">+91 97481 81485</p></div>
//                 </div>
//                 <div className="bg-white/80 backdrop-blur rounded-3xl p-6 flex items-center gap-6 shadow-md border border-white hover:border-rose-300 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
//                   <div className="w-14 h-14 rounded-2xl border border-rose-100 bg-rose-50 flex items-center justify-center shrink-0"><Mail className="w-6 h-6 text-rose-500" /></div>
//                   <div><p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-1">Email Engineering</p><p className="text-xl font-extrabold text-slate-900">contact@cryonano.com</p></div>
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

// export default SpectroscopyElectromagnetPage;



import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { CTASection } from "@/components/CTASection";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, ArrowUp, CheckCircle2,
  Zap, Thermometer, Layers, Cpu, Crosshair, Camera, 
  Settings, Database, Eye, PackageSearch, Scaling, Target, Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-500 text-white rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] transition-all hover:-translate-y-1"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ==========================================
// 3D TILT EFFECT WRAPPER
// ==========================================
const TiltWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 600, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 600, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ==========================================
// LASER-SCANNED DATA MATRIX (Technical Specs)
// ==========================================
const LaserDataMatrix = ({ specs }: { specs: any }) => {
  const entries = Object.entries(specs);

  return (
    <div className="w-full bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl overflow-hidden relative group">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3730a3_1px,transparent_1px),linear-gradient(to_bottom,#3730a3_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 relative z-10 p-1">
        {entries.map(([key, value], i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-20px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group/cell relative bg-slate-950 p-6 flex flex-col justify-center items-start overflow-hidden cursor-default transition-colors hover:bg-indigo-950/50 rounded-lg"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 scale-y-0 group-hover/cell:scale-y-100 origin-top transition-transform duration-300 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1 group-hover/cell:text-emerald-400 transition-colors pl-3">{key}</p>
            <p className="text-base font-bold text-white pl-3 group-hover/cell:translate-x-1 transition-transform">{String(value)}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// PRISM PARALLAX FEATURE CARDS
// ==========================================
const PrismFeatureCards = ({ features }: { features: any[] }) => {
  const iconMap: Record<string, any> = { Eye, PackageSearch, Layers, Scaling, Thermometer, Zap };
  const { scrollYProgress } = useScroll();
  const yUp = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yDown = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4 lg:px-0">
      {features.map((feature, i) => {
        const Icon = iconMap[feature.icon] || CheckCircle2;
        const yTransform = i % 3 === 1 ? yDown : yUp;
        
        return (
          <motion.div
            key={i}
            style={{ y: yTransform }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, zIndex: 20 }}
            className="group relative rounded-[2rem] p-1 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 hover:from-emerald-400 hover:to-indigo-500 transition-all duration-500 shadow-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-slate-900 rounded-[1.9rem] opacity-90 group-hover:opacity-0 transition-opacity duration-500" />
            <div className="relative h-full bg-slate-900/90 backdrop-blur-md rounded-[1.8rem] p-8 flex flex-col items-start z-10 border border-slate-800 group-hover:border-transparent transition-colors">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-slate-800 border border-slate-700 text-indigo-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                <Icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-black text-white mb-3 group-hover:text-emerald-300 transition-colors">{feature.title}</h4>
              <p className="text-[14px] font-bold text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">{feature.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const SpectroscopyElectromagnetPage = () => {
  const product = productsData["spectroscopy-magnet"];
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

  if (!product) return null;

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500 selection:text-white relative">
        <Navbar />

        {/* STICKY HEADER */}
        <div className="sticky z-50 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl" style={{ top: '64px' }}>
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 tracking-wide uppercase">
              <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link> <span>/</span>
              <Link to="/products" className="hover:text-emerald-400 transition-colors">Catalog</Link> <span>/</span>
              <span className="hidden sm:inline-block cursor-default text-slate-500">{product.category}</span> <span className="hidden sm:inline-block">/</span>
              <span className="text-emerald-400">{product.name}</span>
            </div>
            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-black text-white tracking-tight">{product.name}</span>
              <button className="px-5 py-2.5 rounded-xl font-black text-slate-900 bg-emerald-400 text-xs tracking-wider shadow-[0_0_15px_rgba(52,211,153,0.4)] hover:shadow-[0_0_25px_rgba(52,211,153,0.7)] hover:bg-emerald-300 transition-all pointer-events-auto hover:-translate-y-0.5">
                REQUEST PROPOSAL
              </button>
            </motion.div>
          </div>
        </div>
        
        <main className="bg-slate-50">
          
          {/* HERO SECTION */}
          <section className="relative pt-16 pb-24 overflow-hidden bg-slate-900 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-950 z-0 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center h-full min-h-[600px]">
              
              {/* Left Content */}
              <motion.div className="lg:col-span-7 flex flex-col justify-center h-full" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                
                <div className="w-fit inline-block px-6 py-2 border border-emerald-500/50 rounded-sm bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                  Compact Optical Access
                </div>

                <h1 className="font-display text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight leading-[1.05]">
                  {product.name}
                </h1>
                <p className="text-xl text-indigo-300 font-bold mb-6 leading-snug">{product.subtitle}</p>
                
                {/* SPEC STRIP PILLS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.specStrip.map((spec: string, i: number) => (
                    <motion.span 
                      key={i} whileHover={{ y: -3, scale: 1.05 }} 
                      className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-emerald-300 text-[10px] font-black uppercase tracking-widest rounded-md shadow-lg cursor-default hover:border-emerald-400 hover:text-slate-900 hover:bg-emerald-400 transition-all duration-300"
                    >
                      {spec}
                    </motion.span>
                  ))}
                </div>

                {/* OVERVIEW BLOCK */}
                <motion.div whileHover={{ x: 5 }} className="bg-slate-800/40 backdrop-blur-md border-l-4 border-emerald-500 p-6 rounded-r-2xl shadow-xl mb-10 transition-transform duration-300">
                  <div className="space-y-3 text-slate-300 font-medium text-sm leading-relaxed">
                    {product.overview.map((p: string, i: number) => <p key={i}>{p}</p>)}
                  </div>
                </motion.div>

                <div className="flex flex-wrap gap-4">
                  <button className="group px-8 py-4 rounded-xl font-black text-slate-900 bg-gradient-to-r from-emerald-400 to-teal-400 shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:shadow-[0_0_35px_rgba(52,211,153,0.6)] flex items-center gap-3 transition-all duration-300 hover:-translate-y-1">
                    Request Technical Proposal <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button className="group px-8 py-4 rounded-xl font-black text-white bg-slate-800 border-2 border-slate-700 hover:border-emerald-500 hover:bg-slate-800 flex items-center gap-3 shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <Download className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" /> Download Datasheet
                  </button>
                </div>
              </motion.div>

              {/* RIGHT IMAGE GRID */}
              <motion.div className="lg:col-span-5 h-full flex flex-col justify-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[450px]">
                  <motion.div whileHover={{ scale: 1.02 }} className="col-span-12 row-span-1 md:col-span-7 md:row-span-2 relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl group cursor-pointer transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
                    <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-slate-600 group-hover:text-emerald-400 transition-colors z-0" />
                    <span className="absolute bottom-4 left-4 text-[10px] font-black text-emerald-400 uppercase tracking-widest z-20">Main Assembly</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="col-span-6 row-span-1 md:col-span-5 relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-xl group cursor-pointer transition-transform duration-500">
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
                     <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-slate-600 group-hover:text-indigo-400 transition-colors z-0" />
                     <span className="absolute bottom-4 left-4 text-[10px] font-black text-indigo-400 uppercase tracking-widest z-20">Optical Profile</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="col-span-6 row-span-1 md:col-span-5 relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-xl group cursor-pointer transition-transform duration-500">
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
                     <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-slate-600 group-hover:text-purple-400 transition-colors z-0" />
                     <span className="absolute bottom-4 left-4 text-[10px] font-black text-purple-400 uppercase tracking-widest z-20">Coil Detail</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* OVERVIEW MATRICES (Uses overviewRequirements and overviewIdealFor) */}
          <section className="py-16 bg-white relative overflow-hidden border-b border-slate-200">
            <div className="container max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10">
                 <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-black text-slate-900 mb-4">Applications Requiring</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {product.overviewRequirements.map((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/>{item}</div>
                      ))}
                    </div>
                 </motion.div>
                 <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-black text-slate-900 mb-4">Ideal For</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {product.overviewIdealFor.map((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700"><Target className="w-4 h-4 text-indigo-500 shrink-0"/>{item}</div>
                      ))}
                    </div>
                 </motion.div>
              </div>
              <div className="mt-8 text-center bg-indigo-50 border border-indigo-100 p-6 rounded-2xl">
                <p className="text-indigo-900 font-bold">{product.overviewFooter}</p>
              </div>
            </div>
          </section>

          {/* KEY FEATURES */}
          <section className="py-24 relative overflow-hidden bg-slate-900 border-y border-slate-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3730a3_2px,transparent_2px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />
            <div className="container max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <span className="text-emerald-400 font-black tracking-widest uppercase text-[10px] mb-3 block">Premium Engineering</span>
                <h2 className="font-display text-4xl lg:text-5xl font-black text-white mb-4">Key Features</h2>
              </div>
              <PrismFeatureCards features={product.keyFeatures} />
            </div>
          </section>

          {/* TECHNICAL SPECIFICATIONS */}
          <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <span className="text-indigo-600 font-black tracking-widest uppercase text-[10px] mb-3 block">Data Sheet</span>
                <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-6">Technical Specifications</h2>
                <p className="text-slate-600 font-bold leading-relaxed max-w-2xl mx-auto">Precision parameters for optical experiments and high-current stability.</p>
              </div>
              <LaserDataMatrix specs={product.specs} />
            </div>
          </section>

          {/* OPTICAL ACCESS & MECHANICAL DESIGN */}
          <section className="py-24 bg-white relative border-y border-slate-200">
            <div className="container max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                
                {/* Optical Access */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-200 relative overflow-hidden group transition-all"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] group-hover:bg-indigo-500/10 transition-colors" />
                  <h3 className="text-3xl font-black text-slate-900 mb-4 flex items-center gap-3"><Eye className="w-8 h-8 text-indigo-600"/> {product.opticalAccess.title}</h3>
                  <p className="text-slate-600 font-bold mb-8 text-lg">{product.opticalAccess.desc}</p>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Design Highlights</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {product.opticalAccess.highlights.map((h: string, i: number) => (
                          <div key={i} className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100"><CheckCircle2 className="w-4 h-4 text-indigo-500"/><span className="text-xs font-bold text-slate-700">{h}</span></div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Ideal For</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.opticalAccess.idealFor.map((item: string, i: number) => (
                          <span key={i} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg border border-indigo-100">{item}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Mechanical Design */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-900 rounded-[3rem] p-10 shadow-xl border border-slate-800 relative overflow-hidden transition-all text-white"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-colors" />
                  <h3 className="text-3xl font-black text-white mb-4 flex items-center gap-3"><Settings className="w-8 h-8 text-emerald-400"/> {product.mechanicalDesign.title}</h3>
                  <p className="text-slate-400 font-bold mb-8 text-lg">{product.mechanicalDesign.desc}</p>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Requirements Met</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {product.mechanicalDesign.requirements.map((r: string, i: number) => (
                          <div key={i} className="flex items-center gap-2 bg-slate-800 p-3 rounded-xl border border-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-400"/><span className="text-xs font-bold text-slate-200">{r}</span></div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Highlights</h4>
                      <ul className="space-y-2">
                        {product.mechanicalDesign.highlights.map((h: string, i: number) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"/>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* THERMAL & POWER */}
          <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container relative z-10 max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-indigo-600 font-black tracking-widest uppercase text-[10px] mb-3 block">Continuous Operation Dynamics</span>
                <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-6">Thermal & Power Infrastructure</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-10">
                {/* Thermal */}
                <motion.div whileHover={{ y: -5 }} className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] group-hover:bg-cyan-500/20 transition-colors" />
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-cyan-600 text-[10px] font-black uppercase tracking-widest mb-2">Thermal Management</p>
                      <h3 className="text-3xl font-black text-slate-900">{product.thermalManagement.title}</h3>
                    </div>
                    <div className="p-4 bg-cyan-50 rounded-2xl border border-cyan-100 group-hover:scale-110 transition-transform">
                      <Thermometer className="w-8 h-8 text-cyan-600" />
                    </div>
                  </div>
                  <p className="text-slate-600 font-bold mb-6">{product.thermalManagement.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                    {product.thermalManagement.features.map((f: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"/>{f}</li>
                    ))}
                  </ul>
                  <div className="p-4 bg-slate-100 rounded-xl text-xs font-bold text-slate-500 italic">{product.thermalManagement.footer}</div>
                </motion.div>

                {/* Power Supply */}
                <motion.div whileHover={{ y: -5 }} className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-[60px] group-hover:bg-amber-500/20 transition-colors" />
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-amber-600 text-[10px] font-black uppercase tracking-widest mb-2">Power Delivery</p>
                      <h3 className="text-3xl font-black text-slate-900">{product.powerSupply.title}</h3>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 group-hover:scale-110 transition-transform">
                      <Zap className="w-8 h-8 text-amber-600" />
                    </div>
                  </div>
                  <p className="text-slate-600 font-bold mb-6">{product.powerSupply.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                    {product.powerSupply.features.map((f: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700"><CheckCircle2 className="w-4 h-4 text-amber-500"/>{f}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {product.powerSupply.idealFor.map((item: string, i: number) => (
                      <span key={i} className="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1.5 rounded-md">{item}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* APPLICATIONS */}
          <section className="py-24 bg-slate-900 border-y border-slate-800">
             <div className="container max-w-7xl mx-auto">
               <div className="text-center mb-16">
                  <h2 className="font-display text-4xl lg:text-5xl font-black text-white">Scientific & Industrial Applications</h2>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.applications.map((app: string, i: number) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: i * 0.05 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="bg-slate-800/80 p-8 rounded-[2rem] border border-slate-700 shadow-lg hover:shadow-[0_15px_30px_rgba(52,211,153,0.2)] hover:border-emerald-500/50 transition-all duration-300 flex flex-col items-center text-center gap-4 group cursor-default"
                     >
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:border-emerald-400 transition-colors">
                           <Lightbulb className="w-8 h-8 text-emerald-400 group-hover:text-slate-900 transition-colors" />
                        </div>
                        <span className="font-black text-slate-200 text-lg group-hover:text-white transition-colors">{app}</span>
                     </motion.div>
                  ))}
               </div>
               
               {/* Optional Configurations */}
               <motion.div 
                 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
                 className="mt-16 bg-slate-800 p-8 rounded-[2rem] border border-slate-700 shadow-sm text-center"
               >
                 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center justify-center gap-2"><Settings className="w-4 h-4"/> Optional Enhancements</h4>
                 <div className="flex flex-wrap justify-center gap-3">
                    {product.optionalConfigs.map((el: string, i: number) => (
                      <motion.span key={i} whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-slate-900 text-slate-300 text-xs font-bold rounded-xl border border-slate-700 hover:bg-indigo-500/20 hover:text-indigo-300 hover:border-indigo-500/50 transition-colors cursor-pointer">
                        {el}
                      </motion.span>
                    ))}
                 </div>
               </motion.div>
             </div>
          </section>

          {/* GLOBAL CTA */}
          <CTASection />

          {/* BOTTOM NAV */}
          <section className="border-t border-slate-200 bg-white py-6">
            <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link to="/" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-slate-500 hover:text-emerald-500 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Homepage
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-slate-500 hover:text-emerald-500 transition-colors">
                Return to Product Catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </main>
        
        <ScrollToTop />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default SpectroscopyElectromagnetPage;