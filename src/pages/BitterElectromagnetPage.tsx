// import { useState, useEffect, useRef } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { CTASection } from "@/components/CTASection";
// import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
// import { 
//   ArrowLeft, ArrowRight, Download, ArrowUp, CheckCircle2,
//   Zap, Droplets, Activity, Layers, Cpu, Crosshair, Camera, 
//   Settings, Database, Flame, Orbit, LayoutTemplate, Shield
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
//           className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-br from-rose-500 to-rose-700 text-white rounded-full shadow-[0_0_20px_rgba(225,29,72,0.6)] hover:shadow-[0_0_30px_rgba(225,29,72,0.8)] transition-all hover:-translate-y-1"
//         >
//           <ArrowUp className="w-6 h-6" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };

// // ==========================================
// // HUD DATA MATRIX (Replaces old Technical Specs)
// // ==========================================
// const HUDDataMatrix = ({ specs }: { specs: any }) => {
//   const entries = Object.entries(specs);

//   return (
//     <div className="w-full bg-slate-800 p-1 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden relative group">
//       {/* Background ambient glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
      
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-slate-900 rounded-xl overflow-hidden relative z-10">
//         {entries.map(([key, value], i) => (
//           <motion.div 
//             key={i}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: false, margin: "-20px" }}
//             transition={{ duration: 0.4, delay: i * 0.05 }}
//             className="group/cell relative bg-slate-950 p-6 flex flex-col justify-center items-center text-center overflow-hidden cursor-default transition-colors hover:bg-slate-900"
//           >
//             {/* Animated Laser Scan on Hover */}
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/20 to-transparent -translate-y-full group-hover/cell:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            
//             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 group-hover/cell:text-rose-400 transition-colors z-10">{key}</p>
//             <p className="text-sm font-bold text-white group-hover/cell:scale-105 transition-transform z-10">{String(value)}</p>
            
//             {/* Border glow on hover */}
//             <div className="absolute inset-0 border border-transparent group-hover/cell:border-rose-500/50 rounded-xl transition-colors duration-300 pointer-events-none" />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // ==========================================
// // STAGGERED PARALLAX FEATURE CARDS
// // ==========================================
// const StaggeredParallaxFeatures = ({ features }: { features: any[] }) => {
//   const iconMap: Record<string, any> = { Layers, Zap, Crosshair, Droplets, Activity, Cpu };
//   const { scrollYProgress } = useScroll();
  
//   // Create opposite scroll directions for columns
//   const yUp = useTransform(scrollYProgress, [0, 1], [0, -100]);
//   const yDown = useTransform(scrollYProgress, [0, 1], [0, 100]);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4 lg:px-0">
//       {features.map((feature, i) => {
//         const Icon = iconMap[feature.icon] || CheckCircle2;
//         // Middle column moves down, outer columns move up
//         const yTransform = i % 3 === 1 ? yDown : yUp;
        
//         return (
//           <motion.div
//             key={i}
//             style={{ y: yTransform }}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: false, margin: "-50px" }}
//             transition={{ duration: 0.6 }}
//             whileHover={{ scale: 1.05, zIndex: 20 }}
//             className="group relative rounded-[2rem] p-1 bg-gradient-to-br from-slate-200 to-slate-300 hover:from-rose-500 hover:to-orange-500 transition-all duration-500 shadow-lg hover:shadow-[0_20px_40px_rgba(225,29,72,0.4)] overflow-hidden"
//           >
//             <div className="relative h-full bg-white rounded-[1.8rem] p-8 flex flex-col items-start z-10">
//               <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-slate-50 border border-slate-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
//                 <Icon className="w-7 h-7" />
//               </div>
//               <h4 className="text-xl font-black text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">{feature.title}</h4>
//               <p className="text-[14px] font-bold text-slate-600 leading-relaxed">{feature.desc}</p>
//             </div>
//           </motion.div>
//         )
//       })}
//     </div>
//   );
// };

// // ==========================================
// // POWER & COOLING INFRASTRUCTURE
// // ==========================================
// const PowerAndCoolingDashboard = ({ data }: { data: any }) => {
//   return (
//     <div className="grid lg:grid-cols-2 gap-8">
//       {/* POWER SUPPLY */}
//       <motion.div 
//         initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
//         whileHover={{ y: -8 }}
//         className="bg-slate-900 border border-rose-900/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden group/card"
//       >
//         <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 rounded-full blur-[80px] group-hover/card:bg-rose-500/20 transition-colors duration-700 pointer-events-none" />
//         <div className="flex justify-between items-start mb-8 relative z-10">
//           <div>
//             <p className="text-rose-400 text-[10px] font-black uppercase tracking-widest mb-2">{data.powerSupply.title}</p>
//             <h3 className="text-3xl font-black text-white tracking-tight leading-tight">50 kW Regulated</h3>
//           </div>
//           <div className="p-4 bg-rose-950/50 rounded-2xl border border-rose-800 group-hover/card:scale-110 transition-transform duration-500">
//             <Zap className="w-8 h-8 text-rose-500" />
//           </div>
//         </div>
//         <p className="text-slate-400 font-medium mb-6 relative z-10 text-sm leading-relaxed">{data.powerSupply.desc}</p>
//         <div className="space-y-6 relative z-10">
//           <div>
//             <h4 className="text-[10px] font-black text-rose-300 uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">Industrial Features</h4>
//             <ul className="grid sm:grid-cols-2 gap-3">
//               {data.powerSupply.features.map((f: string, i: number) => (
//                 <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-300"><CheckCircle2 className="w-3 h-3 text-rose-500 shrink-0"/>{f}</li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">Protection Systems</h4>
//             <div className="flex flex-wrap gap-2">
//               {data.powerSupply.protection.map((p: string, i: number) => (
//                 <span key={i} className="bg-slate-950 border border-slate-800 text-amber-400 text-[10px] font-bold px-3 py-1.5 rounded-md hover:bg-slate-800 transition-colors cursor-default">{p}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* COOLING ARCHITECTURE */}
//       <motion.div 
//         initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.1 }}
//         whileHover={{ y: -8 }}
//         className="bg-slate-900 border border-cyan-900/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden group/card"
//       >
//         <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] group-hover/card:bg-cyan-500/20 transition-colors duration-700 pointer-events-none" />
//         <div className="flex justify-between items-start mb-8 relative z-10">
//           <div>
//             <p className="text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-2">{data.coolingSystem.title}</p>
//             <h3 className="text-3xl font-black text-white tracking-tight leading-tight">High-Flow Cooling</h3>
//           </div>
//           <div className="p-4 bg-cyan-950/50 rounded-2xl border border-cyan-800 group-hover/card:scale-110 transition-transform duration-500">
//             <Droplets className="w-8 h-8 text-cyan-500" />
//           </div>
//         </div>
//         <p className="text-slate-400 font-medium mb-6 relative z-10 text-sm leading-relaxed">{data.coolingSystem.desc}</p>
//         <div className="space-y-6 relative z-10">
//           <div>
//             <h4 className="text-[10px] font-black text-cyan-300 uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">Cooling Highlights</h4>
//             <ul className="grid sm:grid-cols-2 gap-3">
//               {data.coolingSystem.highlights.map((h: string, i: number) => (
//                 <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-300"><Activity className="w-3 h-3 text-cyan-500 shrink-0"/>{h}</li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">Operating Parameters</h4>
//             <div className="flex flex-col gap-2">
//               {data.coolingSystem.params.map((p: string, i: number) => (
//                 <span key={i} className="bg-slate-950 border border-slate-800 text-blue-300 text-xs font-bold px-3 py-2 rounded-md hover:bg-slate-800 transition-colors cursor-default">{p}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // ==========================================
// // MAIN PAGE COMPONENT
// // ==========================================
// const BitterElectromagnetPage = () => {
//   const product = productsData["bitter-magnet"];
//   const { scrollY } = useScroll();
//   const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

//   if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-rose-500 selection:text-white relative">
//         <Navbar />

//         {/* STICKY HEADER */}
//         <div className="sticky z-50 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl" style={{ top: '64px' }}>
//           <div className="container py-3 flex items-center justify-between">
//             <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 tracking-widest uppercase">
//               <Link to="/" className="hover:text-rose-500 transition-colors">Home</Link> <span>/</span>
//               <Link to="/products" className="hover:text-rose-500 transition-colors">Catalog</Link> <span>/</span>
//               <span className="hidden sm:inline-block cursor-default text-slate-500">{product.category}</span> <span className="hidden sm:inline-block">/</span>
//               <span className="text-rose-500">{product.name}</span>
//             </div>
//             <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
//               <span className="hidden lg:block font-display font-black text-white tracking-tight">{product.name}</span>
//               <button className="px-5 py-2.5 rounded-xl font-black text-white bg-rose-600 text-xs tracking-wider shadow-[0_0_15px_rgba(225,29,72,0.4)] hover:shadow-[0_0_25px_rgba(225,29,72,0.7)] hover:bg-rose-500 transition-all pointer-events-auto hover:-translate-y-0.5">
//                 REQUEST PROPOSAL
//               </button>
//             </motion.div>
//           </div>
//         </div>
        
//         <main className="bg-slate-50">
          
//           {/* HERO SECTION (Adjusted 7/5 Grid) */}
//           <section className="relative pt-16 pb-24 overflow-hidden bg-slate-900 text-white">
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-900/40 via-slate-900 to-slate-950 z-0 pointer-events-none" />
//             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />
            
//             <div className="container relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center h-full min-h-[600px]">
              
//               {/* Left Content (Col 7) */}
//               <motion.div className="lg:col-span-7 flex flex-col justify-center h-full" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
//                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[10px] font-black uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(225,29,72,0.2)]">
//                   Ultra-High Current Architecture
//                 </div>
//                 <h1 className="font-display text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight leading-[1.05]">
//                   {product.name}
//                 </h1>
//                 <p className="text-xl text-rose-400 font-bold mb-6 leading-snug">{product.subtitle}</p>
                
//                 {/* SPEC STRIP PILLS */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {product.specStrip.map((spec: string, i: number) => (
//                     <motion.span 
//                       key={i} whileHover={{ y: -3, scale: 1.05 }} 
//                       className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-cyan-300 text-[10px] font-black uppercase tracking-widest rounded-md shadow-lg cursor-default hover:border-cyan-400 hover:text-white hover:bg-slate-700 transition-all duration-300"
//                     >
//                       {spec}
//                     </motion.span>
//                   ))}
//                 </div>

//                 {/* HIGHLIGHTED OVERVIEW BLOCK */}
//                 <motion.div whileHover={{ x: 5 }} className="bg-slate-800/40 backdrop-blur-md border-l-4 border-rose-500 p-6 rounded-r-2xl shadow-xl mb-10 transition-transform duration-300">
//                   <div className="space-y-3 text-slate-300 font-medium text-sm leading-relaxed">
//                     {product.overview.map((p: string, i: number) => <p key={i}>{p}</p>)}
//                   </div>
//                 </motion.div>

//                 <div className="flex flex-wrap gap-4">
//                   <button className="group px-8 py-4 rounded-xl font-black text-white bg-gradient-to-r from-rose-600 to-rose-700 shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:shadow-[0_0_35px_rgba(225,29,72,0.6)] flex items-center gap-3 transition-all duration-300 hover:-translate-y-1">
//                     Request Technical Proposal <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
//                   </button>
//                   <button className="group px-8 py-4 rounded-xl font-black text-white bg-slate-800 border-2 border-slate-700 hover:border-rose-500 hover:bg-slate-800 flex items-center gap-3 shadow-lg transition-all duration-300 hover:-translate-y-1">
//                     <Download className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" /> Download Datasheet
//                   </button>
//                 </div>
//               </motion.div>

//               {/* Right Images (Col 5) - Adjusted Proportions */}
//               <motion.div className="lg:col-span-5 h-full flex flex-col justify-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
//                 <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[550px]">
//                   {/* Main Large Image */}
//                   <motion.div whileHover={{ scale: 1.02 }} className="col-span-12 row-span-1 md:col-span-7 md:row-span-2 relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl group cursor-pointer transition-transform duration-500">
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
//                     <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-slate-600 group-hover:text-rose-500 transition-colors z-0" />
//                     <span className="absolute bottom-4 left-4 text-[10px] font-black text-rose-400 uppercase tracking-widest z-20">Main Assembly</span>
//                   </motion.div>
//                   {/* Top Right Smaller Image */}
//                   <motion.div whileHover={{ scale: 1.05 }} className="col-span-6 row-span-1 md:col-span-5 relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-xl group cursor-pointer transition-transform duration-500">
//                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
//                      <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-slate-600 group-hover:text-cyan-500 transition-colors z-0" />
//                      <span className="absolute bottom-4 left-4 text-[10px] font-black text-cyan-400 uppercase tracking-widest z-20">Cooling</span>
//                   </motion.div>
//                   {/* Bottom Right Smaller Image */}
//                   <motion.div whileHover={{ scale: 1.05 }} className="col-span-6 row-span-1 md:col-span-5 relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-xl group cursor-pointer transition-transform duration-500">
//                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
//                      <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-slate-600 group-hover:text-amber-500 transition-colors z-0" />
//                      <span className="absolute bottom-4 left-4 text-[10px] font-black text-amber-400 uppercase tracking-widest z-20">Copper Core</span>
//                   </motion.div>
//                 </div>
//               </motion.div>

//             </div>
//           </section>

//           {/* KEY FEATURES (Parallax Staggered Grid) */}
//           <section className="py-24 relative overflow-hidden bg-slate-50 border-y border-slate-200">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#cbd5e1_2px,transparent_2px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
//             <div className="container max-w-7xl mx-auto relative z-10">
//               <div className="text-center mb-16">
//                 <span className="text-rose-600 font-black tracking-widest uppercase text-[10px] mb-3 block">Premium Engineering</span>
//                 <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-4">Key Features</h2>
//               </div>
//               <StaggeredParallaxFeatures features={product.keyFeatures} />
//             </div>
//           </section>

//           {/* HUD DATA MATRIX (Replaces old static table) */}
//           <section className="py-24 bg-slate-900 relative overflow-hidden">
//             <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />
//             <div className="container max-w-7xl mx-auto relative z-10">
//               <div className="text-center mb-16">
//                 <span className="text-cyan-400 font-black tracking-widest uppercase text-[10px] mb-3 block">Data Sheet</span>
//                 <h2 className="font-display text-4xl lg:text-5xl font-black text-white mb-6">Technical Specifications</h2>
//                 <p className="text-slate-400 font-bold leading-relaxed max-w-2xl mx-auto">
//                   Precision parameters engineered for advanced scientific environments and high-current stability.
//                 </p>
//               </div>
//               <HUDDataMatrix specs={product.specs} />
//             </div>
//           </section>

//           {/* ADVANCED BITTER PLATE CONSTRUCTION */}
//           <section className="py-24 bg-white relative">
//             <div className="container max-w-7xl mx-auto">
//               <div className="text-center mb-16">
//                 <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-4">{product.bitterTech.title}</h2>
//                 <p className="text-lg text-slate-600 font-bold max-w-3xl mx-auto">The magnet is constructed from alternating layers that maximize field generation and thermal dissipation.</p>
//               </div>
              
//               <div className="grid lg:grid-cols-2 gap-12 items-stretch">
//                 <motion.div 
//                   initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
//                   whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
//                   className="bg-slate-900 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden group transition-all duration-500"
//                 >
//                   <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-amber-500/20 transition-colors duration-700" />
//                   <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3"><Layers className="w-8 h-8 text-amber-500"/> Core Components</h3>
//                   <div className="space-y-4">
//                     {product.bitterTech.layers.map((layer: string, i: number) => (
//                       <motion.div key={i} whileHover={{ x: 10, backgroundColor: "rgba(30,41,59,1)" }} className="p-4 rounded-xl border border-slate-700 bg-slate-800/50 flex items-center gap-4 transition-all cursor-default group/item">
//                         <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 font-black text-xs group-hover/item:scale-110 transition-transform">{i+1}</div>
//                         <span className="font-bold text-slate-200">{layer}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>

//                 <motion.div 
//                   initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
//                   whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(245,158,11,0.2)" }}
//                   className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-[3rem] p-10 shadow-xl border border-amber-200 relative overflow-hidden transition-all duration-500"
//                 >
//                   <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3"><Activity className="w-8 h-8 text-orange-600"/> Architecture Enables</h3>
//                   <div className="grid gap-4">
//                     {product.bitterTech.enables.map((item: string, i: number) => (
//                       <motion.div key={i} whileHover={{ scale: 1.02 }} className="p-5 rounded-2xl bg-white border border-amber-100 shadow-sm flex items-start gap-4 transition-all">
//                         <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5"/>
//                         <span className="font-bold text-slate-800 text-lg leading-tight">{item}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </section>

//           {/* POWER & COOLING DASHBOARD */}
//           <section className="py-24 bg-slate-100 relative overflow-hidden border-y border-slate-200">
//             <div className="container relative z-10 max-w-7xl mx-auto">
//               <div className="text-center mb-16">
//                 <span className="text-rose-600 font-black tracking-widest uppercase text-[10px] mb-3 block">Continuous Operation Dynamics</span>
//                 <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-6">Power & Cooling Infrastructure</h2>
//               </div>
//               <PowerAndCoolingDashboard data={product} />
//             </div>
//           </section>

//           {/* FIELD PERFORMANCE & ENGINEERING HIGHLIGHTS */}
//           <section className="py-24 bg-white relative">
//             <div className="container max-w-7xl mx-auto">
//               <div className="grid lg:grid-cols-2 gap-12">
                
//                 {/* Field Generation */}
//                 <motion.div 
//                   initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
//                   whileHover={{ y: -5 }}
//                   className="bg-gradient-to-br from-rose-50 to-white border-2 border-rose-100 rounded-[3rem] p-10 shadow-lg transition-all"
//                 >
//                   <h3 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3"><Orbit className="w-8 h-8 text-rose-600"/> {product.fieldPerformance.title}</h3>
//                   <p className="text-slate-700 font-bold mb-8">{product.fieldPerformance.desc}</p>
                  
//                   <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8 hover:border-rose-300 transition-colors">
//                     <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Generates:</h4>
//                     <ul className="grid sm:grid-cols-2 gap-4">
//                       {product.fieldPerformance.generates.map((g: string, i: number) => (
//                         <li key={i} className="flex items-center gap-3 font-bold text-sm text-slate-800"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"/>{g}</li>
//                       ))}
//                     </ul>
//                   </div>

//                   <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Includes Visual Content:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {product.fieldPerformance.includes.map((inc: string, i: number) => (
//                       <motion.span key={i} whileHover={{ scale: 1.05 }} className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-md border border-slate-200 cursor-default">{inc}</motion.span>
//                     ))}
//                   </div>
//                 </motion.div>

//                 {/* Engineering Highlights */}
//                 <motion.div 
//                   initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.1 }}
//                   whileHover={{ y: -5 }}
//                   className="bg-slate-50 border-2 border-slate-200 rounded-[3rem] p-10 shadow-lg flex flex-col justify-center transition-all"
//                 >
//                   <h3 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3"><Settings className="w-8 h-8 text-slate-600"/> {product.engineeringDesign.title}</h3>
//                   <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Engineering Highlights</h4>
//                   <ul className="space-y-4">
//                     {product.engineeringDesign.highlights.map((h: string, i: number) => (
//                       <motion.li key={i} whileHover={{ x: 10 }} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-cyan-300 transition-all">
//                         <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center border border-cyan-100">
//                            <LayoutTemplate className="w-4 h-4 text-cyan-600" />
//                         </div>
//                         <span className="font-bold text-slate-800 text-sm">{h}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </motion.div>

//               </div>
//             </div>
//           </section>

//           {/* VISUAL & SCIENTIFIC APPLICATIONS GRID */}
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
//                         className="bg-slate-800/80 p-8 rounded-[2rem] border border-slate-700 shadow-lg hover:shadow-[0_15px_30px_rgba(225,29,72,0.3)] hover:border-rose-500/50 transition-all duration-300 flex flex-col items-center text-center gap-4 group cursor-default"
//                      >
//                         <div className="w-16 h-16 rounded-2xl bg-rose-500/10 flex items-center justify-center border border-rose-500/30 group-hover:bg-rose-600 group-hover:border-rose-500 transition-colors duration-300 shadow-sm">
//                            <Database className="w-8 h-8 text-rose-500 group-hover:text-white transition-colors" />
//                         </div>
//                         <span className="font-black text-slate-200 text-lg group-hover:text-white transition-colors">{app}</span>
//                      </motion.div>
//                   ))}
//                </div>
               
//                {/* Visual Elements Footer */}
//                <motion.div 
//                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
//                  className="mt-16 bg-slate-800 p-8 rounded-[2rem] border border-slate-700 shadow-sm text-center"
//                >
//                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Recommended Visual Content For Integration</h4>
//                  <div className="flex flex-wrap justify-center gap-3">
//                     {product.visualElements.map((el: string, i: number) => (
//                       <motion.span key={i} whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-slate-900 text-slate-300 text-xs font-bold rounded-xl border border-slate-700 hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500/50 transition-colors cursor-pointer">
//                         {el}
//                       </motion.span>
//                     ))}
//                  </div>
//                </motion.div>
//              </div>
//           </section>

//           {/* GLOBAL CTA */}
//           <CTASection />

//           {/* BOTTOM NAVIGATION */}
//           <section className="border-t border-slate-200 bg-white py-6">
//             <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
//               <Link to="/" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-slate-500 hover:text-rose-600 transition-colors">
//                 <ArrowLeft className="w-4 h-4" /> Back to Homepage
//               </Link>
//               <Link to="/products" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-slate-500 hover:text-rose-600 transition-colors">
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
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, ArrowUp, CheckCircle2, ChevronRight, ChevronDown, Plus, Minus,
  Activity, Zap, Shield, Camera, Cpu, Target, Settings, ThermometerSnowflake,
  Waves, Layers, Network, Lock, ShieldAlert, Code, ArrowLeft, ArrowRight, Move, Wind, Eye, Droplets, Orbit, Image
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

const iconMap: Record<string, any> = { ThermometerSnowflake, Activity, Zap, Shield, Camera, Move, Waves, Target, Cpu, Settings, Layers, Code, Eye, Droplets };

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
// ENHANCED CORE TECHNOLOGIES – Vertical Stack with Hover Effects
// ==========================================
const CoreTechnologiesStack = ({ technologies }: { technologies: any[] }) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto">
      {technologies.map((tech, idx) => {
        const TechIcon = iconMap[tech.icon] || Settings;
        
        return (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
            className="w-full bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 relative overflow-hidden group"
          >
            {/* Animated border glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Left Box: Icon Block & Side Caption */}
            <div className="w-full md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left shrink-0 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0 md:pr-4 relative z-10">
              <div className="w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center mb-3 border border-red-100 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                <TechIcon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest leading-normal group-hover:text-primary transition-colors">
                {tech.sideCaption}
              </p>
            </div>

            {/* Right Box: Text content area */}
            <div className="w-full md:w-3/4 flex flex-col justify-center relative z-10">
              <span className="text-[10px] font-bold text-primary tracking-wider uppercase mb-1 block">{tech.subtitle}</span>
              <h3 className="text-xl font-extrabold text-[#0A2647] mb-2 group-hover:text-primary transition-colors">{tech.title}</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">{tech.description}</p>
              
              {/* Grid of Checkmarked elements */}
              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                {tech.bullets.map((bullet: string, bIdx: number) => (
                  <div key={bIdx} className="flex items-start gap-2 group/bullet">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5 group-hover/bullet:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-slate-700 group-hover/bullet:text-slate-900 transition-colors">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Bottom highlight bars mapped dynamically */}
              {tech.type === 'hardware' && tech.highlights && (
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-wrap gap-4 divide-x divide-slate-200 group-hover:border-primary/30 transition-colors">
                  {tech.highlights.map((h: any, hIdx: number) => (
                    <div key={hIdx} className="px-2 first:pl-0">
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{h.label}</p>
                      <p className="text-xs font-extrabold text-primary">{h.val}</p>
                    </div>
                  ))}
                </div>
              )}

              {tech.type === 'software' && tech.platforms && (
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Integrated Fault Shutdown Protections</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tech.platforms.map((p: string, pIdx: number) => (
                      <div key={pIdx} className="px-2.5 py-1 bg-[#0A2647] text-white rounded text-[10px] font-bold tracking-wide hover:bg-primary transition-colors cursor-default">
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {tech.type === 'protection' && tech.protects && (
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Optimized For Research Environments</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tech.protects.map((p: string, pIdx: number) => (
                      <div key={pIdx} className="px-2.5 py-1 bg-red-50 text-primary border border-red-100 rounded text-[10px] font-bold flex items-center gap-1.5 hover:bg-red-100 transition-colors cursor-default">
                        <ShieldAlert className="w-3 h-3" /> {p}
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
                    Engineered for high-stability DC magnetic field generation, advanced plasma research, and precision magneto-transport experiments in {app.toLowerCase()} applications.
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
// VISUAL REFERENCE – 3-Column Image Gallery
// ==========================================
const VisualReference = ({ gallery }: { gallery: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {gallery.map((img: any, idx: number) => (
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
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function BitterElectromagnetPage() {
  const product = productsData["bitter-magnet"];
  const [activeSection, setActiveSection] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>("Magnet Parameters");
  const [expandedApp, setExpandedApp] = useState<number | null>(null);
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
        <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-[#061B35] to-[#0A2647] text-white">
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
          
          <div className="container relative z-10 grid lg:grid-cols-12 gap-8 items-center min-h-[550px]">
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

            {/* Auto-Playing Carousel Image Box – 3 Images */}
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
            
            <CoreTechnologiesStack technologies={product.coreTechnologies} />
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

        

        {/* 07. APPLICATIONS – Expandable 3-Column Grid ("+" design) */}
        <section ref={appsRef} className="py-10 bg-slate-50/30 border-b border-border">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-[10px] mb-2 block">Deployment Scenarios</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Scientific & Industrial Applications</h2>
            </div>
            <ApplicationsExpandableGrid apps={product.applications} />
          </div>
        </section>

        {/* 08. FINAL TAGLINE */}
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
              <VisualReference gallery={product.gallery} />
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