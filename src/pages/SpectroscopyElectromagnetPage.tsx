// import { useState, useEffect, useRef } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { CTASection } from "@/components/CTASection";
// import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
// import { 
//   ArrowLeft, ArrowRight, Download, ArrowUp, CheckCircle2,
//   Zap, Thermometer, Layers, Cpu, Crosshair, Camera, 
//   Settings, Database, Eye, PackageSearch, Scaling, Target, Lightbulb
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { productsData } from "@/data/products";

// // ==========================================
// // SCROLL TO TOP BUTTON
// // ==========================================
// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     const toggleVisibility = () => window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.button
//           initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.5, y: 20 }}
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-500 text-white rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] transition-all hover:-translate-y-1"
//         >
//           <ArrowUp className="w-6 h-6" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };

// // ==========================================
// // 3D TILT EFFECT WRAPPER
// // ==========================================
// const TiltWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const mouseXSpring = useSpring(x, { stiffness: 600, damping: 20 });
//   const mouseYSpring = useSpring(y, { stiffness: 600, damping: 20 });
//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     x.set((e.clientX - rect.left) / rect.width - 0.5);
//     y.set((e.clientY - rect.top) / rect.height - 0.5);
//   };
//   const handleMouseLeave = () => { x.set(0); y.set(0); };

//   return (
//     <motion.div
//       ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
//       style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// };

// // ==========================================
// // LASER-SCANNED DATA MATRIX (Technical Specs)
// // ==========================================
// const LaserDataMatrix = ({ specs }: { specs: any }) => {
//   const entries = Object.entries(specs);

//   return (
//     <div className="w-full bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl overflow-hidden relative group">
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#3730a3_1px,transparent_1px),linear-gradient(to_bottom,#3730a3_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 relative z-10 p-1">
//         {entries.map(([key, value], i) => (
//           <motion.div 
//             key={i}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: false, margin: "-20px" }}
//             transition={{ duration: 0.4, delay: i * 0.05 }}
//             className="group/cell relative bg-slate-950 p-6 flex flex-col justify-center items-start overflow-hidden cursor-default transition-colors hover:bg-indigo-950/50 rounded-lg"
//           >
//             <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 scale-y-0 group-hover/cell:scale-y-100 origin-top transition-transform duration-300 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
//             <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1 group-hover/cell:text-emerald-400 transition-colors pl-3">{key}</p>
//             <p className="text-base font-bold text-white pl-3 group-hover/cell:translate-x-1 transition-transform">{String(value)}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // ==========================================
// // PRISM PARALLAX FEATURE CARDS
// // ==========================================
// const PrismFeatureCards = ({ features }: { features: any[] }) => {
//   const iconMap: Record<string, any> = { Eye, PackageSearch, Layers, Scaling, Thermometer, Zap };
//   const { scrollYProgress } = useScroll();
//   const yUp = useTransform(scrollYProgress, [0, 1], [0, -80]);
//   const yDown = useTransform(scrollYProgress, [0, 1], [0, 80]);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4 lg:px-0">
//       {features.map((feature, i) => {
//         const Icon = iconMap[feature.icon] || CheckCircle2;
//         const yTransform = i % 3 === 1 ? yDown : yUp;
        
//         return (
//           <motion.div
//             key={i}
//             style={{ y: yTransform }}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, margin: "-50px" }}
//             transition={{ duration: 0.6 }}
//             whileHover={{ scale: 1.05, zIndex: 20 }}
//             className="group relative rounded-[2rem] p-1 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 hover:from-emerald-400 hover:to-indigo-500 transition-all duration-500 shadow-lg overflow-hidden"
//           >
//             <div className="absolute inset-0 bg-slate-900 rounded-[1.9rem] opacity-90 group-hover:opacity-0 transition-opacity duration-500" />
//             <div className="relative h-full bg-slate-900/90 backdrop-blur-md rounded-[1.8rem] p-8 flex flex-col items-start z-10 border border-slate-800 group-hover:border-transparent transition-colors">
//               <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-slate-800 border border-slate-700 text-indigo-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
//                 <Icon className="w-7 h-7" />
//               </div>
//               <h4 className="text-xl font-black text-white mb-3 group-hover:text-emerald-300 transition-colors">{feature.title}</h4>
//               <p className="text-[14px] font-bold text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">{feature.desc}</p>
//             </div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// // ==========================================
// // MAIN PAGE COMPONENT
// // ==========================================
// const SpectroscopyElectromagnetPage = () => {
//   const product = productsData["spectroscopy-magnet"];
//   const { scrollY } = useScroll();
//   const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

//   if (!product) return null;

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500 selection:text-white relative">
//         <Navbar />

//         {/* STICKY HEADER */}
//         <div className="sticky z-50 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl" style={{ top: '64px' }}>
//           <div className="container py-3 flex items-center justify-between">
//             <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 tracking-wide uppercase">
//               <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link> <span>/</span>
//               <Link to="/products" className="hover:text-emerald-400 transition-colors">Catalog</Link> <span>/</span>
//               <span className="hidden sm:inline-block cursor-default text-slate-500">{product.category}</span> <span className="hidden sm:inline-block">/</span>
//               <span className="text-emerald-400">{product.name}</span>
//             </div>
//             <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
//               <span className="hidden lg:block font-display font-black text-white tracking-tight">{product.name}</span>
//               <button className="px-5 py-2.5 rounded-xl font-black text-slate-900 bg-emerald-400 text-xs tracking-wider shadow-[0_0_15px_rgba(52,211,153,0.4)] hover:shadow-[0_0_25px_rgba(52,211,153,0.7)] hover:bg-emerald-300 transition-all pointer-events-auto hover:-translate-y-0.5">
//                 REQUEST PROPOSAL
//               </button>
//             </motion.div>
//           </div>
//         </div>
        
//         <main className="bg-slate-50">
          
//           {/* HERO SECTION */}
//           <section className="relative pt-16 pb-24 overflow-hidden bg-slate-900 text-white">
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-950 z-0 pointer-events-none" />
//             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
            
//             <div className="container relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center h-full min-h-[600px]">
              
//               {/* Left Content */}
//               <motion.div className="lg:col-span-7 flex flex-col justify-center h-full" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                
//                 <div className="w-fit inline-block px-6 py-2 border border-emerald-500/50 rounded-sm bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
//                   Compact Optical Access
//                 </div>

//                 <h1 className="font-display text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight leading-[1.05]">
//                   {product.name}
//                 </h1>
//                 <p className="text-xl text-indigo-300 font-bold mb-6 leading-snug">{product.subtitle}</p>
                
//                 {/* SPEC STRIP PILLS */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {product.specStrip.map((spec: string, i: number) => (
//                     <motion.span 
//                       key={i} whileHover={{ y: -3, scale: 1.05 }} 
//                       className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-emerald-300 text-[10px] font-black uppercase tracking-widest rounded-md shadow-lg cursor-default hover:border-emerald-400 hover:text-slate-900 hover:bg-emerald-400 transition-all duration-300"
//                     >
//                       {spec}
//                     </motion.span>
//                   ))}
//                 </div>

//                 {/* OVERVIEW BLOCK */}
//                 <motion.div whileHover={{ x: 5 }} className="bg-slate-800/40 backdrop-blur-md border-l-4 border-emerald-500 p-6 rounded-r-2xl shadow-xl mb-10 transition-transform duration-300">
//                   <div className="space-y-3 text-slate-300 font-medium text-sm leading-relaxed">
//                     {product.overview.map((p: string, i: number) => <p key={i}>{p}</p>)}
//                   </div>
//                 </motion.div>

//                 <div className="flex flex-wrap gap-4">
//                   <button className="group px-8 py-4 rounded-xl font-black text-slate-900 bg-gradient-to-r from-emerald-400 to-teal-400 shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:shadow-[0_0_35px_rgba(52,211,153,0.6)] flex items-center gap-3 transition-all duration-300 hover:-translate-y-1">
//                     Request Technical Proposal <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
//                   </button>
//                   <button className="group px-8 py-4 rounded-xl font-black text-white bg-slate-800 border-2 border-slate-700 hover:border-emerald-500 hover:bg-slate-800 flex items-center gap-3 shadow-lg transition-all duration-300 hover:-translate-y-1">
//                     <Download className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" /> Download Datasheet
//                   </button>
//                 </div>
//               </motion.div>

//               {/* RIGHT IMAGE GRID */}
//               <motion.div className="lg:col-span-5 h-full flex flex-col justify-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
//                 <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[450px]">
//                   <motion.div whileHover={{ scale: 1.02 }} className="col-span-12 row-span-1 md:col-span-7 md:row-span-2 relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl group cursor-pointer transition-transform duration-500">
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
//                     <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-slate-600 group-hover:text-emerald-400 transition-colors z-0" />
//                     <span className="absolute bottom-4 left-4 text-[10px] font-black text-emerald-400 uppercase tracking-widest z-20">Main Assembly</span>
//                   </motion.div>
//                   <motion.div whileHover={{ scale: 1.05 }} className="col-span-6 row-span-1 md:col-span-5 relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-xl group cursor-pointer transition-transform duration-500">
//                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
//                      <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-slate-600 group-hover:text-indigo-400 transition-colors z-0" />
//                      <span className="absolute bottom-4 left-4 text-[10px] font-black text-indigo-400 uppercase tracking-widest z-20">Optical Profile</span>
//                   </motion.div>
//                   <motion.div whileHover={{ scale: 1.05 }} className="col-span-6 row-span-1 md:col-span-5 relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-xl group cursor-pointer transition-transform duration-500">
//                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
//                      <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-slate-600 group-hover:text-purple-400 transition-colors z-0" />
//                      <span className="absolute bottom-4 left-4 text-[10px] font-black text-purple-400 uppercase tracking-widest z-20">Coil Detail</span>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* OVERVIEW MATRICES (Uses overviewRequirements and overviewIdealFor) */}
//           <section className="py-16 bg-white relative overflow-hidden border-b border-slate-200">
//             <div className="container max-w-7xl mx-auto">
//               <div className="grid lg:grid-cols-2 gap-10">
//                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
//                     <h4 className="text-lg font-black text-slate-900 mb-4">Applications Requiring</h4>
//                     <div className="grid sm:grid-cols-2 gap-3">
//                       {product.overviewRequirements.map((item: string, i: number) => (
//                         <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/>{item}</div>
//                       ))}
//                     </div>
//                  </motion.div>
//                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
//                     <h4 className="text-lg font-black text-slate-900 mb-4">Ideal For</h4>
//                     <div className="grid sm:grid-cols-2 gap-3">
//                       {product.overviewIdealFor.map((item: string, i: number) => (
//                         <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700"><Target className="w-4 h-4 text-indigo-500 shrink-0"/>{item}</div>
//                       ))}
//                     </div>
//                  </motion.div>
//               </div>
//               <div className="mt-8 text-center bg-indigo-50 border border-indigo-100 p-6 rounded-2xl">
//                 <p className="text-indigo-900 font-bold">{product.overviewFooter}</p>
//               </div>
//             </div>
//           </section>

//           {/* KEY FEATURES */}
//           <section className="py-24 relative overflow-hidden bg-slate-900 border-y border-slate-800">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3730a3_2px,transparent_2px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />
//             <div className="container max-w-7xl mx-auto relative z-10">
//               <div className="text-center mb-16">
//                 <span className="text-emerald-400 font-black tracking-widest uppercase text-[10px] mb-3 block">Premium Engineering</span>
//                 <h2 className="font-display text-4xl lg:text-5xl font-black text-white mb-4">Key Features</h2>
//               </div>
//               <PrismFeatureCards features={product.keyFeatures} />
//             </div>
//           </section>

//           {/* TECHNICAL SPECIFICATIONS */}
//           <section className="py-24 bg-slate-50 relative overflow-hidden">
//             <div className="container max-w-7xl mx-auto relative z-10">
//               <div className="text-center mb-16">
//                 <span className="text-indigo-600 font-black tracking-widest uppercase text-[10px] mb-3 block">Data Sheet</span>
//                 <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-6">Technical Specifications</h2>
//                 <p className="text-slate-600 font-bold leading-relaxed max-w-2xl mx-auto">Precision parameters for optical experiments and high-current stability.</p>
//               </div>
//               <LaserDataMatrix specs={product.specs} />
//             </div>
//           </section>

//           {/* OPTICAL ACCESS & MECHANICAL DESIGN */}
//           <section className="py-24 bg-white relative border-y border-slate-200">
//             <div className="container max-w-7xl mx-auto">
//               <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                
//                 {/* Optical Access */}
//                 <motion.div 
//                   initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
//                   whileHover={{ y: -5 }}
//                   className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-200 relative overflow-hidden group transition-all"
//                 >
//                   <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] group-hover:bg-indigo-500/10 transition-colors" />
//                   <h3 className="text-3xl font-black text-slate-900 mb-4 flex items-center gap-3"><Eye className="w-8 h-8 text-indigo-600"/> {product.opticalAccess.title}</h3>
//                   <p className="text-slate-600 font-bold mb-8 text-lg">{product.opticalAccess.desc}</p>
//                   <div className="space-y-8">
//                     <div>
//                       <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Design Highlights</h4>
//                       <div className="grid sm:grid-cols-2 gap-3">
//                         {product.opticalAccess.highlights.map((h: string, i: number) => (
//                           <div key={i} className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100"><CheckCircle2 className="w-4 h-4 text-indigo-500"/><span className="text-xs font-bold text-slate-700">{h}</span></div>
//                         ))}
//                       </div>
//                     </div>
//                     <div>
//                       <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Ideal For</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {product.opticalAccess.idealFor.map((item: string, i: number) => (
//                           <span key={i} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg border border-indigo-100">{item}</span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Mechanical Design */}
//                 <motion.div 
//                   initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
//                   whileHover={{ y: -5 }}
//                   className="bg-slate-900 rounded-[3rem] p-10 shadow-xl border border-slate-800 relative overflow-hidden transition-all text-white"
//                 >
//                   <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-colors" />
//                   <h3 className="text-3xl font-black text-white mb-4 flex items-center gap-3"><Settings className="w-8 h-8 text-emerald-400"/> {product.mechanicalDesign.title}</h3>
//                   <p className="text-slate-400 font-bold mb-8 text-lg">{product.mechanicalDesign.desc}</p>
//                   <div className="space-y-8">
//                     <div>
//                       <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Requirements Met</h4>
//                       <div className="grid sm:grid-cols-2 gap-3">
//                         {product.mechanicalDesign.requirements.map((r: string, i: number) => (
//                           <div key={i} className="flex items-center gap-2 bg-slate-800 p-3 rounded-xl border border-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-400"/><span className="text-xs font-bold text-slate-200">{r}</span></div>
//                         ))}
//                       </div>
//                     </div>
//                     <div>
//                       <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Highlights</h4>
//                       <ul className="space-y-2">
//                         {product.mechanicalDesign.highlights.map((h: string, i: number) => (
//                           <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"/>{h}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </section>

//           {/* THERMAL & POWER */}
//           <section className="py-24 bg-slate-50 relative overflow-hidden">
//             <div className="container relative z-10 max-w-7xl mx-auto">
//               <div className="text-center mb-16">
//                 <span className="text-indigo-600 font-black tracking-widest uppercase text-[10px] mb-3 block">Continuous Operation Dynamics</span>
//                 <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-6">Thermal & Power Infrastructure</h2>
//               </div>
//               <div className="grid lg:grid-cols-2 gap-10">
//                 {/* Thermal */}
//                 <motion.div whileHover={{ y: -5 }} className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-lg relative overflow-hidden group">
//                   <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] group-hover:bg-cyan-500/20 transition-colors" />
//                   <div className="flex justify-between items-start mb-8">
//                     <div>
//                       <p className="text-cyan-600 text-[10px] font-black uppercase tracking-widest mb-2">Thermal Management</p>
//                       <h3 className="text-3xl font-black text-slate-900">{product.thermalManagement.title}</h3>
//                     </div>
//                     <div className="p-4 bg-cyan-50 rounded-2xl border border-cyan-100 group-hover:scale-110 transition-transform">
//                       <Thermometer className="w-8 h-8 text-cyan-600" />
//                     </div>
//                   </div>
//                   <p className="text-slate-600 font-bold mb-6">{product.thermalManagement.desc}</p>
//                   <ul className="grid sm:grid-cols-2 gap-3 mb-6">
//                     {product.thermalManagement.features.map((f: string, i: number) => (
//                       <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"/>{f}</li>
//                     ))}
//                   </ul>
//                   <div className="p-4 bg-slate-100 rounded-xl text-xs font-bold text-slate-500 italic">{product.thermalManagement.footer}</div>
//                 </motion.div>

//                 {/* Power Supply */}
//                 <motion.div whileHover={{ y: -5 }} className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-lg relative overflow-hidden group">
//                   <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-[60px] group-hover:bg-amber-500/20 transition-colors" />
//                   <div className="flex justify-between items-start mb-8">
//                     <div>
//                       <p className="text-amber-600 text-[10px] font-black uppercase tracking-widest mb-2">Power Delivery</p>
//                       <h3 className="text-3xl font-black text-slate-900">{product.powerSupply.title}</h3>
//                     </div>
//                     <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 group-hover:scale-110 transition-transform">
//                       <Zap className="w-8 h-8 text-amber-600" />
//                     </div>
//                   </div>
//                   <p className="text-slate-600 font-bold mb-6">{product.powerSupply.desc}</p>
//                   <ul className="grid sm:grid-cols-2 gap-3 mb-6">
//                     {product.powerSupply.features.map((f: string, i: number) => (
//                       <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700"><CheckCircle2 className="w-4 h-4 text-amber-500"/>{f}</li>
//                     ))}
//                   </ul>
//                   <div className="flex flex-wrap gap-2">
//                     {product.powerSupply.idealFor.map((item: string, i: number) => (
//                       <span key={i} className="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1.5 rounded-md">{item}</span>
//                     ))}
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </section>

//           {/* APPLICATIONS */}
//           <section className="py-24 bg-slate-900 border-y border-slate-800">
//              <div className="container max-w-7xl mx-auto">
//                <div className="text-center mb-16">
//                   <h2 className="font-display text-4xl lg:text-5xl font-black text-white">Scientific & Industrial Applications</h2>
//                </div>
//                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {product.applications.map((app: string, i: number) => (
//                      <motion.div 
//                         key={i} 
//                         initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: i * 0.05 }}
//                         whileHover={{ y: -8, scale: 1.02 }}
//                         className="bg-slate-800/80 p-8 rounded-[2rem] border border-slate-700 shadow-lg hover:shadow-[0_15px_30px_rgba(52,211,153,0.2)] hover:border-emerald-500/50 transition-all duration-300 flex flex-col items-center text-center gap-4 group cursor-default"
//                      >
//                         <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:border-emerald-400 transition-colors">
//                            <Lightbulb className="w-8 h-8 text-emerald-400 group-hover:text-slate-900 transition-colors" />
//                         </div>
//                         <span className="font-black text-slate-200 text-lg group-hover:text-white transition-colors">{app}</span>
//                      </motion.div>
//                   ))}
//                </div>
               
//                {/* Optional Configurations */}
//                <motion.div 
//                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
//                  className="mt-16 bg-slate-800 p-8 rounded-[2rem] border border-slate-700 shadow-sm text-center"
//                >
//                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center justify-center gap-2"><Settings className="w-4 h-4"/> Optional Enhancements</h4>
//                  <div className="flex flex-wrap justify-center gap-3">
//                     {product.optionalConfigs.map((el: string, i: number) => (
//                       <motion.span key={i} whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-slate-900 text-slate-300 text-xs font-bold rounded-xl border border-slate-700 hover:bg-indigo-500/20 hover:text-indigo-300 hover:border-indigo-500/50 transition-colors cursor-pointer">
//                         {el}
//                       </motion.span>
//                     ))}
//                  </div>
//                </motion.div>
//              </div>
//           </section>

//           {/* GLOBAL CTA */}
//           <CTASection />

//           {/* BOTTOM NAV */}
//           <section className="border-t border-slate-200 bg-white py-6">
//             <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
//               <Link to="/" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-slate-500 hover:text-emerald-500 transition-colors">
//                 <ArrowLeft className="w-4 h-4" /> Back to Homepage
//               </Link>
//               <Link to="/products" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-slate-500 hover:text-emerald-500 transition-colors">
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

// export default SpectroscopyElectromagnetPage;






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
  Image, PackageSearch, Scaling, Thermometer, Droplets
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// Icon mapping dictionary
const iconMap: Record<string, any> = { 
  ThermometerSnowflake, Activity, Zap, Shield, Camera, Move, Waves, Target, Cpu, Settings, Layers, Code, Eye, PackageSearch, Scaling, Thermometer
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
// CORE TECHNOLOGIES – Enhanced Card Stack Pattern
// ==========================================
const CoreTechnologiesCardStack = ({ technologies }: { technologies: any[] }) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto">
      {technologies.map((tech, idx) => {
        const TechIcon = iconMap[tech.icon] || Settings;
        
        return (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
            className="w-full bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-8 relative overflow-hidden group"
          >
            {/* Enhanced: Animated border glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Left Side: Icon & Caption */}
            <div className="w-full md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left shrink-0 relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center mb-4 border border-red-100 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                <TechIcon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest leading-relaxed group-hover:text-primary transition-colors">
                {tech.sideCaption}
              </p>
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-3/4 flex flex-col relative z-10">
              <h3 className="text-2xl font-extrabold text-[#0A2647] mb-3 group-hover:text-primary transition-colors">{tech.title}</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">{tech.description}</p>
              
              {/* Green Checkmark Bullets */}
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                {tech.bullets.map((bullet: string, i: number) => (
                  <div key={i} className="flex items-start gap-2.5 group/bullet">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover/bullet:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-slate-700 group-hover/bullet:text-slate-900 transition-colors">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Dynamic Bottom Bar depending on type */}
              {tech.type === 'hardware' && tech.highlights && (
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex flex-wrap gap-6 divide-x divide-slate-200 group-hover:border-primary/30 transition-colors">
                  {tech.highlights.map((h: any, i: number) => (
                    <div key={i} className="pl-6 first:pl-0 first:border-0 flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{h.label}</span>
                      <span className="text-sm font-extrabold text-primary">{h.val}</span>
                    </div>
                  ))}
                </div>
              )}

              {tech.type === 'software' && tech.platforms && (
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 block">Ideal For</span>
                  <div className="flex flex-wrap gap-2">
                    {tech.platforms.map((p: string, i: number) => (
                      <div key={i} className="px-4 py-2 bg-[#0A2647] text-white rounded-md text-xs font-bold tracking-wide hover:bg-primary transition-colors cursor-default">
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {tech.type === 'protection' && tech.protects && (
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 block">Requirements Met</span>
                  <div className="flex flex-wrap gap-2">
                    {tech.protects.map((p: string, i: number) => (
                      <div key={i} className="px-4 py-2 bg-red-50 text-primary border border-red-100 rounded-md text-xs font-bold flex items-center gap-2 hover:bg-red-100 transition-colors cursor-default">
                        <ShieldAlert className="w-3.5 h-3.5" /> {p}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        );
      })}
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
                    Engineered for high-stability DC magnetic field generation, compact optical table integration, and superior thermal dissipation in {app.toLowerCase()} workflows.
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
  const icons = [Settings, Move, Layers, Target, Eye, Zap, Droplets, Waves];
  
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-8 border border-border shadow-sm">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
          <Settings className="w-3.5 h-3.5" /> Customize Your System
        </div>
        <h3 className="text-2xl font-extrabold text-[#0A2647] mt-3">Optional Enhancements</h3>
        <p className="text-sm text-slate-500 mt-1">Configure your electromagnet for specific research requirements</p>
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
export default function SpectroscopyElectromagnetPage() {
  const product = productsData["spectroscopy-magnet"];
  const [activeSection, setActiveSection] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>("Magnetic & Mechanical");
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

        {/* 04. CORE TECHNOLOGIES – Enhanced Card Stack Pattern */}
        <section ref={techRef} className="py-10 bg-white border-b border-border">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-[10px] mb-2 block">Technical Deep-Dive</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Core Technologies</h2>
            </div>
            
            <CoreTechnologiesCardStack technologies={product.coreTechnologies} />
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

        

        {/* 07. OPTIONAL ENHANCEMENTS – Highlighted Grid */}
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

        {/* 09. FINAL TAGLINE
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
        )} */}



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