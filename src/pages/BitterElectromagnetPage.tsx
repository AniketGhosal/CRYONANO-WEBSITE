// import { useState, useEffect } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence, useScroll, useTransform, animate } from "framer-motion";
// import { 
//   ArrowLeft, ArrowRight, Download, Phone, Mail, 
//   Zap, Thermometer, Droplets, Shield, Activity, 
//   Layers, Cpu, CheckCircle2, ArrowUp, Settings
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { productsData } from "@/data/products";

// // ==========================================
// // SCROLL TO TOP BUTTON (Smooth User Experience)
// // ==========================================
// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 400) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };
//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.button
//           initial={{ opacity: 0, scale: 0.5, y: 20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.5, y: 20 }}
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 z-50 p-3 lg:p-4 bg-rose-600 text-white rounded-full shadow-[0_4px_14px_rgba(225,29,72,0.4)] hover:bg-rose-700 hover:shadow-[0_6px_20px_rgba(225,29,72,0.6)] transition-all hover:-translate-y-1"
//           aria-label="Scroll to top"
//         >
//           <ArrowUp className="w-6 h-6" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };

// // ==========================================
// // ANIMATED APPLICATIONS SUBSECTION
// // Refined layout based on UI screenshot
// // ==========================================
// const AnimatedApplications = ({ applications }: { applications: string[] }) => {
//   if (!applications) return null;
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-8 max-w-4xl mx-auto px-4">
//       {applications.map((app, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: i * 0.1 }}
//           className="flex items-center gap-4 group cursor-default"
//         >
//           <div className="w-8 h-8 rounded-full border-2 border-rose-500 flex items-center justify-center shrink-0 group-hover:bg-rose-50 transition-colors">
//             <CheckCircle2 className="w-5 h-5 text-rose-500" />
//           </div>
//           <span className="text-lg font-bold text-slate-800 group-hover:text-rose-600 transition-colors">
//             {app}
//           </span>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// // ==========================================
// // DATA-RICH TELEMETRY DASHBOARD
// // ==========================================
// const BitterTelemetryDashboard = () => {
//   const [current, setCurrent] = useState(0);
//   const [field, setField] = useState(0);
//   const [pressure, setPressure] = useState(0);

//   useEffect(() => {
//     const duration = 3;
//     const c1 = animate(0, 1000, { duration, ease: "easeOut", onUpdate: (v) => setCurrent(Math.round(v)) });
//     const c2 = animate(0, 1.1, { duration, ease: "easeOut", onUpdate: (v) => setField(Number(v.toFixed(2))) });
//     const c3 = animate(0, 12, { duration, ease: "easeOut", onUpdate: (v) => setPressure(Number(v.toFixed(1))) });

//     const fluctuate = setTimeout(() => {
//       animate(1000, 1002, { duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", onUpdate: (v) => setCurrent(Math.round(v)) });
//       animate(1.10, 1.11, { duration: 2.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", onUpdate: (v) => setField(Number(v.toFixed(3))) });
//       animate(12.0, 11.8, { duration: 1.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", onUpdate: (v) => setPressure(Number(v.toFixed(1))) });
//     }, duration * 1000);

//     return () => {
//       c1.stop(); c2.stop(); c3.stop();
//       clearTimeout(fluctuate);
//     };
//   }, []);

//   return (
//     <div className="w-full bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden font-sans flex flex-col relative">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f1f5f9_2px,transparent_2px)] bg-[size:24px_24px] pointer-events-none" />
      
//       <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between relative z-10">
//         <div className="flex items-center gap-3">
//           <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse shadow-[0_0_12px_rgba(244,63,94,0.6)]" />
//           <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">Continuous Operation Mode</span>
//         </div>
//         <div className="flex gap-3">
//           <span className="text-[10px] font-bold font-mono text-cyan-700 bg-cyan-100 border border-cyan-200 px-2 py-1 rounded shadow-sm">WATER COOLING: ACTIVE</span>
//           <span className="text-[10px] font-bold font-mono text-rose-700 bg-rose-100 border border-rose-200 px-2 py-1 rounded shadow-sm">1.1T FIELD LOCKED</span>
//         </div>
//       </div>

//       <div className="p-6 grid lg:grid-cols-2 gap-6 relative z-10">
        
//         {/* GRAPH 1: Field Density */}
//         <div className="bg-white border border-slate-200 rounded-2xl p-6 relative flex flex-col shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
//           <div className="flex justify-between items-start mb-4 relative z-10">
//             <div>
//               <p className="text-rose-500 text-[10px] font-extrabold uppercase tracking-widest mb-1">Magnetic Flux Density</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">{field.toFixed(3)} <span className="text-xs text-slate-500 font-bold">Tesla</span></p>
//             </div>
//             <div className="p-2.5 bg-rose-50 rounded-xl border border-rose-100">
//               <Activity className="w-5 h-5 text-rose-500" />
//             </div>
//           </div>
          
//           <div className="flex-grow w-full h-48 mt-2 relative flex items-center justify-center bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
//             <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
//               <motion.path d="M 0 180 Q 150 180, 200 40 T 400 180" fill="none" stroke="#f43f5e" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeOut" }} />
//               <motion.path d="M 0 180 Q 150 180, 200 40 T 400 180 L 400 200 L 0 200 Z" fill="rgba(244, 63, 94, 0.1)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} />
//               <motion.path d="M 50 100 Q 100 0, 150 100 T 250 100 T 350 100" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" animate={{ x: [-100, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} opacity={0.5} />
//             </svg>
//             <div className="absolute top-3 left-3 text-[10px] font-bold text-slate-500 font-mono bg-white/80 px-2 py-1 rounded shadow-sm border border-slate-200">Coil Current: {current} A</div>
//             <div className="absolute bottom-3 right-3 text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-1 rounded">Symmetric Axial Decay</div>
//           </div>
//         </div>

//         {/* GRAPH 2: Data-Rich Cooling Simulator */}
//         <div className="bg-white border border-slate-200 rounded-2xl p-6 relative flex flex-col shadow-sm hover:shadow-md transition-shadow overflow-hidden">
//           <div className="flex justify-between items-start mb-4 relative z-10">
//             <div>
//               <p className="text-cyan-600 text-[10px] font-extrabold uppercase tracking-widest mb-1">Thermal Management</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">{pressure.toFixed(1)} <span className="text-xs text-slate-500 font-bold">Bar</span></p>
//             </div>
//             <div className="p-2.5 bg-cyan-50 rounded-xl border border-cyan-100">
//               <Droplets className="w-5 h-5 text-cyan-600" />
//             </div>
//           </div>
          
//           <div className="flex-grow relative w-full h-48 mt-2 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-inner flex items-center justify-center">
//             {/* Visual Scanner Background */}
//             <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px)] bg-[size:20px_20px]" />
            
//             {/* Animated Flow Bars */}
//             <div className="absolute inset-0 flex justify-around px-8 py-4 opacity-30">
//               {[1,2,3,4].map(i => (
//                 <motion.div key={i} animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} className="h-full w-8 bg-cyan-400 rounded-lg blur-md" />
//               ))}
//             </div>

//             {/* High-Density Data Overlays */}
//             <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-20">
//               <div className="bg-white/90 backdrop-blur text-[9px] font-bold text-slate-600 font-mono px-2 py-1 rounded shadow-sm border border-slate-200">Max Field Uniformity: ±0.1%</div>
//               <div className="bg-white/90 backdrop-blur text-[9px] font-bold text-slate-600 font-mono px-2 py-1 rounded shadow-sm border border-slate-200">Axial Water Flow Rate: 10 L/min</div>
//               <div className="bg-white/90 backdrop-blur text-[9px] font-bold text-slate-600 font-mono px-2 py-1 rounded shadow-sm border border-slate-200">Coolant Purity: &lt;0.1 µS/cm</div>
//             </div>

//             <div className="absolute bottom-3 right-3 flex items-center gap-2 z-20">
//                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//                <span className="text-[10px] font-extrabold text-cyan-800 bg-cyan-100 border border-cyan-200 px-2 py-1 rounded shadow-sm">Axial Flow Stable</span>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// // ==========================================
// // INTERACTIVE SYSTEM ARCHITECTURE
// // ==========================================
// const StackedArchitecture = ({ architecture }: { architecture: any[] }) => {
//   if (!architecture) return null;
//   const [activeId, setActiveId] = useState(architecture[0]?.id);

//   const richContent: Record<string, any> = {
//     "1.1": { title: "Precision Copper Core", desc: "Engineered from high-purity copper, these Bitter plates form a dense, continuous helical current path, maximizing field generation efficiency.", specs: ["Material: High-Purity Cu", "Machining Tolerance: <10µm"], color: "amber" },
//     "1.2": { title: "Dielectric Isolation", desc: "Advanced high-strength insulating spacers withstand extreme Lorentz forces while maintaining perfect electrical isolation between plates.", specs: ["Dielectric Strength: >20kV/mm", "Thermal Rating: 250°C"], color: "slate" },
//     "1.3": { title: "Axial Thermal Management", desc: "Perfectly aligned macroscopic channels allow high-velocity, low-pressure-drop axial flow of de-ionized water for continuous 100% duty cycle.", specs: ["Flow Rate: 10 L/min", "Coolant Purity: <0.1 µS/cm"], color: "cyan" },
//     "1.4": { title: "Optimized Dual-Coil Configuration", desc: "Maximizing field volume and uniformity, this series-connected, dual concentric coil design ensures precise high-field generation for demanding research and custom application.", specs: ["Field Uniformity: ±0.1% over 10mm DSV", "Maximum Field: 1.1 Tesla"], color: "rose" }
//   };

//   const activeContent = richContent[activeId] || richContent["1.1"];

//   return (
//     <div className="flex flex-col lg:flex-row gap-8 items-stretch bg-white p-6 md:p-8 rounded-[2.5rem] border border-slate-200 shadow-lg">
      
//       {/* Left: Interactive List */}
//       <div className="w-full lg:w-5/12 flex flex-col gap-3 relative z-10">
//         {architecture.map((item) => (
//           <button 
//             key={item.id}
//             onClick={() => setActiveId(item.id)}
//             className={`text-left w-full p-4 rounded-2xl transition-all duration-300 border-2 flex gap-4 items-center ${
//               activeId === item.id ? 'bg-slate-50 border-rose-300 shadow-sm' : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'
//             }`}
//           >
//             <div className={`font-mono text-base font-black ${activeId === item.id ? 'text-rose-600' : 'text-slate-400'}`}>
//               {item.id}
//             </div>
//             <h4 className={`text-lg font-bold ${activeId === item.id ? 'text-slate-900' : 'text-slate-600'}`}>{item.title}</h4>
//           </button>
//         ))}
//       </div>

//       {/* Right: Meaningful Data Panel */}
//       <div className="w-full lg:w-7/12 bg-slate-50 rounded-[2rem] border border-slate-200 p-8 relative overflow-hidden flex flex-col justify-center">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f1f5f9_2px,transparent_2px)] bg-[size:16px_16px] opacity-80" />
        
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeId}
//             initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
//             className="relative z-10 flex flex-col"
//           >
//             {/* Visual Representation Element */}
//             <div className="mb-6 flex justify-start">
//                <div className={`w-16 h-16 rounded-2xl bg-${activeContent.color}-100 border border-${activeContent.color}-200 flex items-center justify-center shadow-sm`}>
//                   <motion.div animate={{ rotate: 90 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
//                     <Settings className={`w-8 h-8 text-${activeContent.color}-600`} />
//                   </motion.div>
//                </div>
//             </div>

//             <h3 className="font-display text-3xl font-extrabold text-slate-900 mb-4 leading-tight">{activeContent.title}</h3>
//             <p className="text-base text-slate-600 font-medium leading-relaxed mb-8">{activeContent.desc}</p>
            
//             <div className="flex flex-wrap gap-3 mt-auto">
//                {activeContent.specs.map((spec: string, i: number) => (
//                  <div key={i} className={`bg-white border border-${activeContent.color}-200 text-${activeContent.color}-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm`}>
//                    {spec}
//                  </div>
//                ))}
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// // ==========================================
// // HOVER-REVEAL FEATURE CARDS 
// // ==========================================
// const WhyBitterGrid = ({ whyBitter }: { whyBitter: any }) => {
//   if (!whyBitter) return null;
//   const icons = [Zap, Thermometer, Shield, Layers];
//   const colors = ["amber", "cyan", "slate", "rose"];
  
//   const expandedDesc = [
//     "Densely packed helical current geometry maximizes magnetic field strength within a compact footprint.",
//     "Optimized internal channels provide exceptionally efficient, uniform heat removal under continuous high-power operation.",
//     "Stacked plate construction resists extreme mechanical stresses, preventing deformation even at highest field strengths.",
//     "A scalable, modular architecture for customizable magnet systems with precise field profiles and intensities."
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
//       {whyBitter.points.map((point: string, i: number) => {
//         const Icon = icons[i % icons.length];
//         const color = colors[i % colors.length];
//         return (
//           <div
//             key={i}
//             className={`group relative h-64 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-${color}-300 transition-all duration-500 overflow-hidden cursor-default`}
//           >
//             <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center transform group-hover:-translate-y-10 transition-transform duration-500">
//               <div className={`w-16 h-16 rounded-2xl bg-${color}-50 flex items-center justify-center mb-4 border border-${color}-100 transition-colors duration-300 group-hover:bg-${color}-100`}>
//                 <Icon className={`w-8 h-8 text-${color}-500`} />
//               </div>
//               <h4 className="font-extrabold text-slate-900 text-lg leading-snug">{point}</h4>
//             </div>

//             <div className="absolute bottom-0 left-0 right-0 p-6 bg-slate-50/95 backdrop-blur border-t border-slate-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
//               <p className="text-sm font-semibold text-slate-700 leading-relaxed text-center">
//                 {expandedDesc[i]}
//               </p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// // ==========================================
// // TECHNICAL SPECIFICATIONS (SPLIT MATRIX)
// // ==========================================
// const TechSpecsMatrix = ({ specs }: { specs: any }) => {
//   if (!specs) return null;

//   return (
//     <div className="mt-8 w-full max-w-6xl mx-auto">
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//           <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center gap-3">
//             <Cpu className="w-6 h-6 text-rose-500" />
//             <h3 className="font-display font-extrabold text-slate-900 text-xl">Core Parameters</h3>
//           </div>
//           <div className="divide-y divide-slate-100">
//             {specs.coreParameters.map((param: any, i: number) => (
//               <motion.div 
//                 key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
//                 className="flex flex-col sm:flex-row justify-between px-8 py-4 hover:bg-rose-50/30 transition-colors"
//               >
//                 <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest sm:w-1/2 mb-1 sm:mb-0">{param.label}</span>
//                 <span className="text-sm font-bold text-slate-900 sm:w-1/2 sm:text-right">{param.value}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//           <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center gap-3">
//             <Zap className="w-6 h-6 text-cyan-500" />
//             <h3 className="font-display font-extrabold text-slate-900 text-xl">Electric & Cooling</h3>
//           </div>
//           <div className="divide-y divide-slate-100">
//             {specs.electricCoolingParameters.map((param: any, i: number) => (
//               <motion.div 
//                 key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
//                 className="flex flex-col sm:flex-row justify-between px-8 py-4 hover:bg-cyan-50/30 transition-colors"
//               >
//                 <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest sm:w-1/2 mb-1 sm:mb-0">{param.label}</span>
//                 <span className="text-sm font-bold text-slate-900 sm:w-1/2 sm:text-right">{param.value}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// // ==========================================
// // MAIN PAGE COMPONENT
// // ==========================================
// const BitterElectromagnetPage = () => {
//   const product = productsData["bitter-magnet"] || {
//     category: "Electromagnets",
//     name: "Bitter Type Electromagnet",
//     subtitle: "(Air-Core DC Magnet)",
//     tagline: "High-Field Air-Core DC Magnet Systems for Precision Research and Industrial Applications.",
//     heroImage: "/images/bitter-magnet-hero.png",
//     overview: [
//       "Engineered for generating stable, high magnetic fields under continuous operation for advanced research environments.",
//       "Our Bitter type electromagnets apply advanced precision machining and thermally managed cooling solutions to handle exceptionally high current densities and mechanical stresses."
//     ],
//     applications: [
//       "Gyrotron Magnet Systems",
//       "High-Power Microwave & RF Research",
//       "Plasma Physics Experiments",
//       "Accelerator & Beamline Laboratories",
//       "Magnetic Field-Dependent Material Characterization"
//     ],
//     whyBitter: {
//       description: "Unlike conventional wire-wound solenoids, CryoNano Bitter magnets use stacked copper plates forming a helical current path:",
//       points: ["Extremely High Current Density", "Superior Heat Dissipation", "Excellent Mechanical Strength", "Scalable High-Field Architecture"]
//     },
//     systemArchitecture: [
//       { id: "1.1", title: "Copper Bitter Plates", desc: "Precision-machined copper plates forming the core helical current path." },
//       { id: "1.2", title: "Insulating Spacers", desc: "High-strength insulating spacers placed between plates." },
//       { id: "1.3", title: "Cooling Channels", desc: "Aligned channels allowing axial flow of de-ionized water." },
//       { id: "1.4", title: "Dual Coils (Series)", desc: "Dual concentric coils, series-connected for scalable high-field generation." }
//     ],
//     technicalSpecifications: {
//       header: "Precision-engineered air-core DC Bitter magnet for stable high-field operation.",
//       coreParameters: [
//         { label: "Magnet Type", value: "Air-Core DC Bitter Electromagnet" },
//         { label: "Bore Diameter", value: "65 mm" },
//         { label: "Axial Length", value: "300 mm" },
//         { label: "Maximum Central Field", value: "Up to 1.1 Tesla" },
//         { label: "Field Profile", value: "Peak at center, symmetric axial decay" },
//         { label: "Coil Configuration", value: "Dual concentric coils, series connected" }
//       ],
//       electricCoolingParameters: [
//         { label: "Cooling Method", value: "De-ionized water cooling" },
//         { label: "Cooling Flow Direction", value: "Axial through aligned Bitter plate channels" },
//         { label: "Cooling Water Temperature", value: "~10 °C" },
//         { label: "Cooling Water Pressure", value: "Up to 12 bar" },
//         { label: "Operating Current", value: "~1000 A (application dependent)" },
//         { label: "Continuous Operation", value: "Yes" }
//       ]
//     }
//   };

//   const [currentImg, setCurrentImg] = useState(0);
//   const images = product ? [product.heroImage, ...(product.gallery || [])].filter(Boolean) : [];
//   const { scrollY } = useScroll();
//   const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

//   useEffect(() => {
//     if (images.length <= 1) return;
//     const timer = setInterval(() => setCurrentImg((prev) => (prev + 1) % images.length), 4000);
//     return () => clearInterval(timer);
//   }, [images.length]);

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-gradient-to-b from-white via-slate-50/50 to-white text-slate-800 font-sans selection:bg-rose-200 selection:text-rose-900 relative">
//         <Navbar />

//         {/* STICKY HEADER */}
//         <div className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
//           <div className="container py-3 flex items-center justify-between">
//             <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
//               <Link to="/" className="hover:text-rose-600 transition-colors">Home</Link> <span>/</span>
//               <Link to="/products" className="hover:text-rose-600 transition-colors">Catalog</Link> <span>/</span>
//               <span className="hidden sm:inline-block cursor-default">{product.category}</span> <span className="hidden sm:inline-block">/</span>
//               <span className="text-rose-600 font-bold">{product.name}</span>
//             </div>
//             <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
//               <span className="hidden lg:block font-display font-bold text-slate-900">{product.name}</span>
//               <button className="px-5 py-2 rounded-xl font-bold text-white bg-rose-600 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all pointer-events-auto">
//                 Request Quote
//               </button>
//             </motion.div>
//           </div>
//         </div>
        
//         {/* <main className="pt-8">
        
          
          
//           <section className="container pb-12 overflow-hidden relative">
//             <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
//               <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
//                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-100 text-rose-700 text-[10px] font-extrabold uppercase tracking-widest mb-4">
//                   {product.category}
//                 </div>
//                 <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-3 tracking-tight leading-[1.05]">
//                   {product.name}
//                 </h1> */}


//                 <main className="pt-4 lg:pt-6"> {/* 1. Reduced top padding here from pt-8 */}
          
//           {/* HERO SECTION */}
//           <section className="container pb-12 overflow-hidden relative">
//             {/* 2. CHANGED items-center to items-start below to prevent text pushing down */}
//             <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start relative z-10">
              
//               <motion.div 
//                 initial={{ opacity: 0, x: -20 }} 
//                 animate={{ opacity: 1, x: 0 }} 
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 className="pt-2 lg:pt-6" /* 3. Added a small padding to perfectly align text with the top of the image */
//               >
//                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-100 text-rose-700 text-[10px] font-extrabold uppercase tracking-widest mb-4">
//                   {product.category}
//                 </div>
//                 <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-3 tracking-tight leading-[1.05]">
//                   {product.name}
//                 </h1>
//                 {/* ... rest of your hero text code remains exactly the same ... */}
//                 <p className="text-xl text-rose-600 font-extrabold mb-4">{product.subtitle}</p>
//                 <p className="text-lg font-bold text-slate-700 border-l-4 border-rose-500 pl-4 mb-6">{product.tagline}</p>
                
//                 <div className="space-y-3 mb-8">
//                   {product.overview?.map((p: string, i: number) => (
//                     <p key={i} className="text-base text-slate-600 leading-relaxed font-medium">{p}</p>
//                   ))}
//                   <p className="text-base text-slate-600 leading-relaxed font-medium">
//                     Supporting advanced precise high-field generation for diverse applications, our electromagnets provide precise and stable fields for cutting-edge research, serves a range of demanding research and industrial applications.
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap gap-3">
//                   <button className="group px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-rose-600 to-rose-500 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5">
//                     Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                   <button className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-rose-300 hover:bg-rose-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-0.5">
//                     <Download className="w-4 h-4 text-rose-500" /> Full Specs
//                   </button>
//                 </div>
//               </motion.div>

//               <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative w-full aspect-[4/5] flex items-center justify-center">
//                 <div className="absolute inset-0 bg-gradient-to-tr from-rose-100 to-slate-50 rounded-[3rem] transform rotate-2 scale-105 opacity-60 pointer-events-none" />
//                 <div className="relative w-full h-full rounded-[2rem] bg-white border border-slate-200 shadow-xl overflow-hidden p-6 flex items-center justify-center">
//                    <img src={product.heroImage} alt="Bitter Electromagnet" className="w-full h-full object-contain mix-blend-multiply" />
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* DEPLOYED APPLICATIONS (Animated Subsection) */}
//           <section className="py-12 relative overflow-hidden bg-white border-y border-slate-200">
//             <div className="container max-w-5xl mx-auto">
//               <div className="text-center mb-8">
//                 <span className="text-rose-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Deployed Environments</span>
//                 <h2 className="font-display text-3xl font-extrabold text-slate-900 mb-2">Applications</h2>
//               </div>
//               <AnimatedApplications applications={product.applications} />
//             </div>
//           </section>

//           {/* TELEMETRY SECTION */}
//           <section className="py-12 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
//             <div className="container relative z-10">
//               <div className="text-center max-w-3xl mx-auto mb-10">
//                 <span className="text-rose-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">High-Field Diagnostics</span>
//                 <h2 className="font-display text-3xl font-extrabold text-slate-900">Continuous Telemetry</h2>
//               </div>
//               <div className="max-w-6xl mx-auto">
//                 <BitterTelemetryDashboard />
//               </div>
//             </div>
//           </section>

//           {/* WHY BITTER TECHNOLOGY */}
//           <section className="py-12 relative overflow-hidden bg-white">
//             <div className="container max-w-6xl mx-auto">
//               <div className="text-center mb-8">
//                 <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Helical Current Architecture</span>
//                 <h2 className="font-display text-3xl font-extrabold text-slate-900 mb-2">Why Bitter Technology?</h2>
//                 <p className="text-slate-600 font-medium text-base">Unlike conventional wire-wound solenoids, CryoNano Bitter magnets use stacked copper plates forming a helical current path.</p>
//               </div>
//               <WhyBitterGrid whyBitter={product.whyBitter} />
//             </div>
//           </section>

//           {/* STACKED ARCHITECTURE (Data-Rich Panels) */}
//           <section className="py-16 relative overflow-hidden bg-slate-50 border-y border-slate-200">
//             <div className="container max-w-6xl mx-auto">
//               <div className="text-center mb-8">
//                 <span className="text-blue-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Construction Details</span>
//                 <h2 className="font-display text-3xl font-extrabold text-slate-900 mb-2">Precision Engineering</h2>
//                 <p className="text-base text-slate-600 font-medium">Select a component to inspect the internal architecture and specifications.</p>
//               </div>
//               <StackedArchitecture architecture={product.systemArchitecture} />
//             </div>
//           </section>

//           {/* TECHNICAL SPECIFICATIONS MATRIX */}
//           <section className="py-16 bg-white relative">
//             <div className="container max-w-6xl mx-auto">
//               <div className="text-center mb-10">
//                 <span className="text-rose-600 font-extrabold tracking-widest uppercase text-xs mb-2 block">Data Matrix</span>
//                 <h2 className="font-display text-3xl font-extrabold text-slate-900 mb-2">Technical Specifications</h2>
//                 <p className="text-slate-600 font-medium text-base">{product.technicalSpecifications?.header}</p>
//               </div>
//               <TechSpecsMatrix specs={product.technicalSpecifications} />
//             </div>
//           </section>

//           {/* SPEAK TO A SCIENTIST */}
//           <section className="container py-16">
//             <div className="bg-[#e2e8f0] rounded-[2.5rem] p-8 lg:p-12 flex flex-col lg:flex-row gap-10 items-center justify-between shadow-sm border border-slate-300 relative overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-transparent pointer-events-none" />
              
//               <div className="lg:w-1/2 relative z-10">
//                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-slate-300 text-slate-800 text-[10px] font-extrabold tracking-widest uppercase mb-5 shadow-sm"><div className="w-2 h-2 rounded-full bg-rose-500" /> Engineering Support</div>
//                 <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-[1.1]">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">Specialist</span></h2>
//                 <p className="text-base text-slate-700 font-bold mb-8">CRYONANO's systems engineers are available to answer your questions. Discuss your high-field DC Magnet requirements with us today.</p>
//                 <div className="flex flex-wrap gap-4">
//                   <button className="px-6 py-3 rounded-xl font-bold text-white bg-rose-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2">Get a Quote <ArrowRight className="w-4 h-4" /></button>
//                 </div>
//               </div>

//               <div className="lg:w-5/12 flex flex-col gap-4 w-full relative z-10">
//                 <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-white hover:border-rose-200 group">
//                   <div className="w-12 h-12 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-rose-50 transition-colors"><Phone className="w-5 h-5 text-slate-500 group-hover:text-rose-500 transition-colors" /></div>
//                   <div><p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Call Us Directly</p><p className="text-xl font-extrabold text-slate-900">+91 97481 81485</p></div>
//                 </div>
//                 <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-white hover:border-rose-200 group">
//                   <div className="w-12 h-12 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-rose-50 transition-colors"><Mail className="w-5 h-5 text-slate-500 group-hover:text-rose-500 transition-colors" /></div>
//                   <div><p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Email Engineering</p><p className="text-lg font-extrabold text-slate-900">contact@cryonano.com</p></div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* BOTTOM NAVIGATION */}
//           <section className="border-t border-slate-200 bg-white py-6">
//             <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
//               <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-rose-600 transition-colors px-4 py-2 rounded-lg hover:bg-rose-50">
//                 <ArrowLeft className="w-4 h-4" /> Back to Homepage
//               </Link>
//               <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-rose-600 transition-colors px-4 py-2 rounded-lg hover:bg-rose-50">
//                 Return to Product Catalog <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>
//           </section>

//         </main>
        
//         <ScrollToTop />
//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

// export default BitterElectromagnetPage;


import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { CTASection } from "@/components/CTASection";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, ArrowUp, CheckCircle2,
  Zap, Droplets, Activity, Layers, Cpu, Crosshair, Camera, 
  Settings, Database, Flame, Orbit, LayoutTemplate, Shield
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
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-br from-rose-500 to-rose-700 text-white rounded-full shadow-[0_0_20px_rgba(225,29,72,0.6)] hover:shadow-[0_0_30px_rgba(225,29,72,0.8)] transition-all hover:-translate-y-1"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ==========================================
// HUD DATA MATRIX (Replaces old Technical Specs)
// ==========================================
const HUDDataMatrix = ({ specs }: { specs: any }) => {
  const entries = Object.entries(specs);

  return (
    <div className="w-full bg-slate-800 p-1 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden relative group">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-slate-900 rounded-xl overflow-hidden relative z-10">
        {entries.map(([key, value], i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-20px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group/cell relative bg-slate-950 p-6 flex flex-col justify-center items-center text-center overflow-hidden cursor-default transition-colors hover:bg-slate-900"
          >
            {/* Animated Laser Scan on Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/20 to-transparent -translate-y-full group-hover/cell:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 group-hover/cell:text-rose-400 transition-colors z-10">{key}</p>
            <p className="text-sm font-bold text-white group-hover/cell:scale-105 transition-transform z-10">{String(value)}</p>
            
            {/* Border glow on hover */}
            <div className="absolute inset-0 border border-transparent group-hover/cell:border-rose-500/50 rounded-xl transition-colors duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// STAGGERED PARALLAX FEATURE CARDS
// ==========================================
const StaggeredParallaxFeatures = ({ features }: { features: any[] }) => {
  const iconMap: Record<string, any> = { Layers, Zap, Crosshair, Droplets, Activity, Cpu };
  const { scrollYProgress } = useScroll();
  
  // Create opposite scroll directions for columns
  const yUp = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yDown = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4 lg:px-0">
      {features.map((feature, i) => {
        const Icon = iconMap[feature.icon] || CheckCircle2;
        // Middle column moves down, outer columns move up
        const yTransform = i % 3 === 1 ? yDown : yUp;
        
        return (
          <motion.div
            key={i}
            style={{ y: yTransform }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, zIndex: 20 }}
            className="group relative rounded-[2rem] p-1 bg-gradient-to-br from-slate-200 to-slate-300 hover:from-rose-500 hover:to-orange-500 transition-all duration-500 shadow-lg hover:shadow-[0_20px_40px_rgba(225,29,72,0.4)] overflow-hidden"
          >
            <div className="relative h-full bg-white rounded-[1.8rem] p-8 flex flex-col items-start z-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-slate-50 border border-slate-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                <Icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">{feature.title}</h4>
              <p className="text-[14px] font-bold text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  );
};

// ==========================================
// POWER & COOLING INFRASTRUCTURE
// ==========================================
const PowerAndCoolingDashboard = ({ data }: { data: any }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* POWER SUPPLY */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
        whileHover={{ y: -8 }}
        className="bg-slate-900 border border-rose-900/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden group/card"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 rounded-full blur-[80px] group-hover/card:bg-rose-500/20 transition-colors duration-700 pointer-events-none" />
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div>
            <p className="text-rose-400 text-[10px] font-black uppercase tracking-widest mb-2">{data.powerSupply.title}</p>
            <h3 className="text-3xl font-black text-white tracking-tight leading-tight">50 kW Regulated</h3>
          </div>
          <div className="p-4 bg-rose-950/50 rounded-2xl border border-rose-800 group-hover/card:scale-110 transition-transform duration-500">
            <Zap className="w-8 h-8 text-rose-500" />
          </div>
        </div>
        <p className="text-slate-400 font-medium mb-6 relative z-10 text-sm leading-relaxed">{data.powerSupply.desc}</p>
        <div className="space-y-6 relative z-10">
          <div>
            <h4 className="text-[10px] font-black text-rose-300 uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">Industrial Features</h4>
            <ul className="grid sm:grid-cols-2 gap-3">
              {data.powerSupply.features.map((f: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-300"><CheckCircle2 className="w-3 h-3 text-rose-500 shrink-0"/>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">Protection Systems</h4>
            <div className="flex flex-wrap gap-2">
              {data.powerSupply.protection.map((p: string, i: number) => (
                <span key={i} className="bg-slate-950 border border-slate-800 text-amber-400 text-[10px] font-bold px-3 py-1.5 rounded-md hover:bg-slate-800 transition-colors cursor-default">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* COOLING ARCHITECTURE */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ y: -8 }}
        className="bg-slate-900 border border-cyan-900/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden group/card"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] group-hover/card:bg-cyan-500/20 transition-colors duration-700 pointer-events-none" />
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div>
            <p className="text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-2">{data.coolingSystem.title}</p>
            <h3 className="text-3xl font-black text-white tracking-tight leading-tight">High-Flow Cooling</h3>
          </div>
          <div className="p-4 bg-cyan-950/50 rounded-2xl border border-cyan-800 group-hover/card:scale-110 transition-transform duration-500">
            <Droplets className="w-8 h-8 text-cyan-500" />
          </div>
        </div>
        <p className="text-slate-400 font-medium mb-6 relative z-10 text-sm leading-relaxed">{data.coolingSystem.desc}</p>
        <div className="space-y-6 relative z-10">
          <div>
            <h4 className="text-[10px] font-black text-cyan-300 uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">Cooling Highlights</h4>
            <ul className="grid sm:grid-cols-2 gap-3">
              {data.coolingSystem.highlights.map((h: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-300"><Activity className="w-3 h-3 text-cyan-500 shrink-0"/>{h}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">Operating Parameters</h4>
            <div className="flex flex-col gap-2">
              {data.coolingSystem.params.map((p: string, i: number) => (
                <span key={i} className="bg-slate-950 border border-slate-800 text-blue-300 text-xs font-bold px-3 py-2 rounded-md hover:bg-slate-800 transition-colors cursor-default">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const BitterElectromagnetPage = () => {
  const product = productsData["bitter-magnet"];
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

  if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-rose-500 selection:text-white relative">
        <Navbar />

        {/* STICKY HEADER */}
        <div className="sticky z-50 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl" style={{ top: '64px' }}>
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 tracking-widest uppercase">
              <Link to="/" className="hover:text-rose-500 transition-colors">Home</Link> <span>/</span>
              <Link to="/products" className="hover:text-rose-500 transition-colors">Catalog</Link> <span>/</span>
              <span className="hidden sm:inline-block cursor-default text-slate-500">{product.category}</span> <span className="hidden sm:inline-block">/</span>
              <span className="text-rose-500">{product.name}</span>
            </div>
            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-black text-white tracking-tight">{product.name}</span>
              <button className="px-5 py-2.5 rounded-xl font-black text-white bg-rose-600 text-xs tracking-wider shadow-[0_0_15px_rgba(225,29,72,0.4)] hover:shadow-[0_0_25px_rgba(225,29,72,0.7)] hover:bg-rose-500 transition-all pointer-events-auto hover:-translate-y-0.5">
                REQUEST PROPOSAL
              </button>
            </motion.div>
          </div>
        </div>
        
        <main className="bg-slate-50">
          
          {/* HERO SECTION (Adjusted 7/5 Grid) */}
          <section className="relative pt-16 pb-24 overflow-hidden bg-slate-900 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-900/40 via-slate-900 to-slate-950 z-0 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center h-full min-h-[600px]">
              
              {/* Left Content (Col 7) */}
              <motion.div className="lg:col-span-7 flex flex-col justify-center h-full" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[10px] font-black uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(225,29,72,0.2)]">
                  Ultra-High Current Architecture
                </div>
                <h1 className="font-display text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight leading-[1.05]">
                  {product.name}
                </h1>
                <p className="text-xl text-rose-400 font-bold mb-6 leading-snug">{product.subtitle}</p>
                
                {/* SPEC STRIP PILLS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.specStrip.map((spec: string, i: number) => (
                    <motion.span 
                      key={i} whileHover={{ y: -3, scale: 1.05 }} 
                      className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-cyan-300 text-[10px] font-black uppercase tracking-widest rounded-md shadow-lg cursor-default hover:border-cyan-400 hover:text-white hover:bg-slate-700 transition-all duration-300"
                    >
                      {spec}
                    </motion.span>
                  ))}
                </div>

                {/* HIGHLIGHTED OVERVIEW BLOCK */}
                <motion.div whileHover={{ x: 5 }} className="bg-slate-800/40 backdrop-blur-md border-l-4 border-rose-500 p-6 rounded-r-2xl shadow-xl mb-10 transition-transform duration-300">
                  <div className="space-y-3 text-slate-300 font-medium text-sm leading-relaxed">
                    {product.overview.map((p: string, i: number) => <p key={i}>{p}</p>)}
                  </div>
                </motion.div>

                <div className="flex flex-wrap gap-4">
                  <button className="group px-8 py-4 rounded-xl font-black text-white bg-gradient-to-r from-rose-600 to-rose-700 shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:shadow-[0_0_35px_rgba(225,29,72,0.6)] flex items-center gap-3 transition-all duration-300 hover:-translate-y-1">
                    Request Technical Proposal <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button className="group px-8 py-4 rounded-xl font-black text-white bg-slate-800 border-2 border-slate-700 hover:border-rose-500 hover:bg-slate-800 flex items-center gap-3 shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <Download className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" /> Download Datasheet
                  </button>
                </div>
              </motion.div>

              {/* Right Images (Col 5) - Adjusted Proportions */}
              <motion.div className="lg:col-span-5 h-full flex flex-col justify-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[550px]">
                  {/* Main Large Image */}
                  <motion.div whileHover={{ scale: 1.02 }} className="col-span-12 row-span-1 md:col-span-7 md:row-span-2 relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl group cursor-pointer transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
                    <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-slate-600 group-hover:text-rose-500 transition-colors z-0" />
                    <span className="absolute bottom-4 left-4 text-[10px] font-black text-rose-400 uppercase tracking-widest z-20">Main Assembly</span>
                  </motion.div>
                  {/* Top Right Smaller Image */}
                  <motion.div whileHover={{ scale: 1.05 }} className="col-span-6 row-span-1 md:col-span-5 relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-xl group cursor-pointer transition-transform duration-500">
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
                     <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-slate-600 group-hover:text-cyan-500 transition-colors z-0" />
                     <span className="absolute bottom-4 left-4 text-[10px] font-black text-cyan-400 uppercase tracking-widest z-20">Cooling</span>
                  </motion.div>
                  {/* Bottom Right Smaller Image */}
                  <motion.div whileHover={{ scale: 1.05 }} className="col-span-6 row-span-1 md:col-span-5 relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-xl group cursor-pointer transition-transform duration-500">
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
                     <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-slate-600 group-hover:text-amber-500 transition-colors z-0" />
                     <span className="absolute bottom-4 left-4 text-[10px] font-black text-amber-400 uppercase tracking-widest z-20">Copper Core</span>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </section>

          {/* KEY FEATURES (Parallax Staggered Grid) */}
          <section className="py-24 relative overflow-hidden bg-slate-50 border-y border-slate-200">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#cbd5e1_2px,transparent_2px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
            <div className="container max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <span className="text-rose-600 font-black tracking-widest uppercase text-[10px] mb-3 block">Premium Engineering</span>
                <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-4">Key Features</h2>
              </div>
              <StaggeredParallaxFeatures features={product.keyFeatures} />
            </div>
          </section>

          {/* HUD DATA MATRIX (Replaces old static table) */}
          <section className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />
            <div className="container max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <span className="text-cyan-400 font-black tracking-widest uppercase text-[10px] mb-3 block">Data Sheet</span>
                <h2 className="font-display text-4xl lg:text-5xl font-black text-white mb-6">Technical Specifications</h2>
                <p className="text-slate-400 font-bold leading-relaxed max-w-2xl mx-auto">
                  Precision parameters engineered for advanced scientific environments and high-current stability.
                </p>
              </div>
              <HUDDataMatrix specs={product.specs} />
            </div>
          </section>

          {/* ADVANCED BITTER PLATE CONSTRUCTION */}
          <section className="py-24 bg-white relative">
            <div className="container max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-4">{product.bitterTech.title}</h2>
                <p className="text-lg text-slate-600 font-bold max-w-3xl mx-auto">The magnet is constructed from alternating layers that maximize field generation and thermal dissipation.</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
                  className="bg-slate-900 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden group transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-amber-500/20 transition-colors duration-700" />
                  <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3"><Layers className="w-8 h-8 text-amber-500"/> Core Components</h3>
                  <div className="space-y-4">
                    {product.bitterTech.layers.map((layer: string, i: number) => (
                      <motion.div key={i} whileHover={{ x: 10, backgroundColor: "rgba(30,41,59,1)" }} className="p-4 rounded-xl border border-slate-700 bg-slate-800/50 flex items-center gap-4 transition-all cursor-default group/item">
                        <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 font-black text-xs group-hover/item:scale-110 transition-transform">{i+1}</div>
                        <span className="font-bold text-slate-200">{layer}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(245,158,11,0.2)" }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-[3rem] p-10 shadow-xl border border-amber-200 relative overflow-hidden transition-all duration-500"
                >
                  <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3"><Activity className="w-8 h-8 text-orange-600"/> Architecture Enables</h3>
                  <div className="grid gap-4">
                    {product.bitterTech.enables.map((item: string, i: number) => (
                      <motion.div key={i} whileHover={{ scale: 1.02 }} className="p-5 rounded-2xl bg-white border border-amber-100 shadow-sm flex items-start gap-4 transition-all">
                        <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5"/>
                        <span className="font-bold text-slate-800 text-lg leading-tight">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* POWER & COOLING DASHBOARD */}
          <section className="py-24 bg-slate-100 relative overflow-hidden border-y border-slate-200">
            <div className="container relative z-10 max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-rose-600 font-black tracking-widest uppercase text-[10px] mb-3 block">Continuous Operation Dynamics</span>
                <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-6">Power & Cooling Infrastructure</h2>
              </div>
              <PowerAndCoolingDashboard data={product} />
            </div>
          </section>

          {/* FIELD PERFORMANCE & ENGINEERING HIGHLIGHTS */}
          <section className="py-24 bg-white relative">
            <div className="container max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Field Generation */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-rose-50 to-white border-2 border-rose-100 rounded-[3rem] p-10 shadow-lg transition-all"
                >
                  <h3 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3"><Orbit className="w-8 h-8 text-rose-600"/> {product.fieldPerformance.title}</h3>
                  <p className="text-slate-700 font-bold mb-8">{product.fieldPerformance.desc}</p>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8 hover:border-rose-300 transition-colors">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Generates:</h4>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {product.fieldPerformance.generates.map((g: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 font-bold text-sm text-slate-800"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"/>{g}</li>
                      ))}
                    </ul>
                  </div>

                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Includes Visual Content:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.fieldPerformance.includes.map((inc: string, i: number) => (
                      <motion.span key={i} whileHover={{ scale: 1.05 }} className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-md border border-slate-200 cursor-default">{inc}</motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Engineering Highlights */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-50 border-2 border-slate-200 rounded-[3rem] p-10 shadow-lg flex flex-col justify-center transition-all"
                >
                  <h3 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3"><Settings className="w-8 h-8 text-slate-600"/> {product.engineeringDesign.title}</h3>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Engineering Highlights</h4>
                  <ul className="space-y-4">
                    {product.engineeringDesign.highlights.map((h: string, i: number) => (
                      <motion.li key={i} whileHover={{ x: 10 }} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-cyan-300 transition-all">
                        <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center border border-cyan-100">
                           <LayoutTemplate className="w-4 h-4 text-cyan-600" />
                        </div>
                        <span className="font-bold text-slate-800 text-sm">{h}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

              </div>
            </div>
          </section>

          {/* VISUAL & SCIENTIFIC APPLICATIONS GRID */}
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
                        className="bg-slate-800/80 p-8 rounded-[2rem] border border-slate-700 shadow-lg hover:shadow-[0_15px_30px_rgba(225,29,72,0.3)] hover:border-rose-500/50 transition-all duration-300 flex flex-col items-center text-center gap-4 group cursor-default"
                     >
                        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 flex items-center justify-center border border-rose-500/30 group-hover:bg-rose-600 group-hover:border-rose-500 transition-colors duration-300 shadow-sm">
                           <Database className="w-8 h-8 text-rose-500 group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-black text-slate-200 text-lg group-hover:text-white transition-colors">{app}</span>
                     </motion.div>
                  ))}
               </div>
               
               {/* Visual Elements Footer */}
               <motion.div 
                 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
                 className="mt-16 bg-slate-800 p-8 rounded-[2rem] border border-slate-700 shadow-sm text-center"
               >
                 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Recommended Visual Content For Integration</h4>
                 <div className="flex flex-wrap justify-center gap-3">
                    {product.visualElements.map((el: string, i: number) => (
                      <motion.span key={i} whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-slate-900 text-slate-300 text-xs font-bold rounded-xl border border-slate-700 hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500/50 transition-colors cursor-pointer">
                        {el}
                      </motion.span>
                    ))}
                 </div>
               </motion.div>
             </div>
          </section>

          {/* GLOBAL CTA */}
          <CTASection />

          {/* BOTTOM NAVIGATION */}
          <section className="border-t border-slate-200 bg-white py-6">
            <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link to="/" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-slate-500 hover:text-rose-600 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Homepage
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-slate-500 hover:text-rose-600 transition-colors">
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

export default BitterElectromagnetPage;