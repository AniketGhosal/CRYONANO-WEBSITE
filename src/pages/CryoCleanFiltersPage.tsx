// import { useState, useEffect } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { 
//   ArrowLeft, ArrowRight, Download, Phone, Mail, Settings, 
//   Shield, Zap, Layers, CheckCircle2, Activity, Waves
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { productsData } from "@/data/products";

// // ==========================================
// // 1. REFRESHED LIGHT-THEME SPECTRUM ANALYZER
// // ==========================================
// const SpectrumAnalyzerTelemetry = () => {
//   return (
//     <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden font-sans flex flex-col relative">
//       {/* Subtle background grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      
//       <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
//         <div className="flex items-center gap-3">
//           <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
//           <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">Live RF FFT Analysis</span>
//         </div>
//         <div className="flex gap-4">
//           <span className="text-xs font-bold font-mono text-violet-600 bg-violet-100 px-2 py-1 rounded">RC+LC ACTIVE</span>
//           <span className="text-xs font-bold font-mono text-rose-600 bg-rose-100 px-2 py-1 rounded">-80dB FLOOR</span>
//         </div>
//       </div>

//       <div className="p-8 grid lg:grid-cols-2 gap-8 relative z-10">
        
//         {/* GRAPH 1: Recreated Brochure Graph (Bode Plot) - Light Theme */}
//         <div className="bg-white border border-slate-200 rounded-3xl p-8 relative flex flex-col shadow-sm hover:shadow-md transition-shadow">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-violet-600 text-xs font-extrabold uppercase tracking-widest mb-1">Frequency Response</p>
//               <p className="text-3xl font-extrabold text-slate-900 tracking-tight">80 dB <span className="text-sm text-slate-500 font-bold">Atten.</span></p>
//             </div>
//             <div className="p-3 bg-violet-50 rounded-2xl">
//               <Activity className="w-6 h-6 text-violet-600" />
//             </div>
//           </div>
          
//           <div className="flex-grow relative w-full h-48 mt-2 border-l-2 border-b-2 border-slate-200">
//             {/* Grid lines */}
//             <div className="absolute inset-0 flex flex-col justify-between opacity-50 pointer-events-none">
//               {[1,2,3,4,5].map(i => <div key={i} className="w-full h-px bg-slate-100" />)}
//             </div>
//             <div className="absolute inset-0 flex justify-between opacity-50 pointer-events-none">
//               {[1,2,3,4,5,6].map(i => <div key={i} className="h-full w-px bg-slate-100" />)}
//             </div>
            
//             {/* The Red RF Suppression Zone (From Brochure) */}
//             <motion.div 
//               initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
//               whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
//               transition={{ duration: 1.5, delay: 0.5 }}
//               className="absolute top-0 left-0 h-full bg-rose-100/60 border-r-2 border-dashed border-rose-400"
//               style={{ width: '65%' }}
//             >
//               <span className="absolute top-2 left-2 text-rose-700 text-[11px] font-extrabold bg-white/90 backdrop-blur px-2 py-1 rounded shadow-sm">RF suppression</span>
//             </motion.div>

//             <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
//               {/* Filter Curve */}
//               <motion.path 
//                 d="M 0 40 L 200 40 C 260 40, 260 180, 400 190" 
//                 fill="none" stroke="#e11d48" strokeWidth="4" 
//                 initial={{ pathLength: 0 }} 
//                 whileInView={{ pathLength: 1 }} 
//                 transition={{ duration: 2, ease: "easeInOut" }} 
//               />
//             </svg>
            
//             {/* Axis Labels */}
//             <div className="absolute -left-6 top-0 text-[10px] font-bold text-slate-400">80</div>
//             <div className="absolute -left-5 bottom-0 text-[10px] font-bold text-slate-400">0</div>
//             <div className="absolute top-1/2 -left-14 transform -translate-y-1/2 -rotate-90 text-[10px] font-bold text-slate-500 tracking-widest uppercase">Attenuation (dB)</div>
//             <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-slate-500 tracking-widest uppercase">Cutoff Frequency</div>
//           </div>
//         </div>

//         {/* GRAPH 2: Live FFT Bar Visualizer - Light Theme */}
//         <div className="bg-white border border-slate-200 rounded-3xl p-8 relative flex flex-col shadow-sm hover:shadow-md transition-shadow">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-amber-500 text-xs font-extrabold uppercase tracking-widest mb-1">Real-Time Noise Floor</p>
//               <p className="text-3xl font-extrabold text-slate-900 tracking-tight">Cryostat Input</p>
//             </div>
//             <div className="p-3 bg-amber-50 rounded-2xl">
//               <Waves className="w-6 h-6 text-amber-500" />
//             </div>
//           </div>
          
//           <div className="flex-grow flex items-end justify-between gap-1.5 w-full h-48 mt-2 border-b-2 border-slate-200 relative">
//             {/* Background Grid */}
//             <div className="absolute inset-0 flex flex-col justify-between opacity-50 pointer-events-none">
//               {[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-slate-100" />)}
//             </div>
            
//             {/* Animated FFT Bars (Light Violet & Amber) */}
//             {Array.from({ length: 24 }).map((_, i) => {
//               // First half is noisy (Amber/Yellow), second half is filtered (Light Violet)
//               const isFiltered = i > 11;
//               const heightRange = isFiltered ? [2, 12] : [40, 95];
//               const color = isFiltered ? "bg-violet-400" : "bg-amber-400";
              
//               return (
//                 <motion.div
//                   key={i}
//                   className={`w-full rounded-t-md opacity-90 ${color}`}
//                   animate={{ 
//                     height: [`${Math.random() * heightRange[0]}%`, `${Math.random() * heightRange[1]}%`, `${Math.random() * heightRange[0]}%`] 
//                   }}
//                   transition={{ 
//                     duration: isFiltered ? 2 : 0.2 + Math.random() * 0.3, 
//                     repeat: Infinity, 
//                     ease: "linear" 
//                   }}
//                 />
//               )
//             })}

//             {/* Overlay Labels */}
//             <div className="absolute top-2 left-2 text-[11px] font-extrabold text-amber-700 bg-amber-50/90 backdrop-blur px-2.5 py-1 rounded shadow-sm border border-amber-200">Room Temp (Noisy)</div>
//             <div className="absolute top-2 right-2 text-[11px] font-extrabold text-violet-700 bg-violet-50/90 backdrop-blur px-2.5 py-1 rounded shadow-sm border border-violet-200">Filtered (Clean)</div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// // ==========================================
// // 2. UPGRADED: INTEGRATION STAGGERED TIMELINE
// // ==========================================
// const IntegrationTimeline = ({ steps }: { steps: any[] }) => {
//   if (!steps) return null;
//   return (
//     <div className="mt-24 mb-10">
//       <h3 className="font-display text-4xl font-extrabold text-slate-900 text-center mb-20">Typical Integration Path</h3>
//       <div className="flex flex-col md:flex-row items-start justify-center gap-12 relative max-w-5xl mx-auto">
        
//         {/* Connecting Line */}
//         <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1.5 bg-slate-200 rounded-full z-0 overflow-hidden">
//           <motion.div 
//             className="h-full bg-gradient-to-r from-amber-300 via-blue-400 to-violet-500 w-full"
//             initial={{ x: "-100%" }}
//             whileInView={{ x: "0%" }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//           />
//         </div>

//         {steps.map((step, i) => (
//           <motion.div 
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.25 }}
//             className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 group"
//           >
//             {/* Animated Pulsing Background */}
//             <div className="relative mb-8">
//               <motion.div 
//                 animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
//                 transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
//                 className="absolute inset-0 bg-blue-400 rounded-full"
//               />
//               <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 shadow-xl flex items-center justify-center relative z-10 group-hover:border-blue-300 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
//                 <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-400 to-slate-600 group-hover:from-blue-600 group-hover:to-violet-600 transition-all duration-300">
//                   {step.step}
//                 </span>
//               </div>
//             </div>
            
//             <h4 className="text-2xl font-extrabold text-slate-900 mb-3">{step.title}</h4>
            
//             {/* Increased Font Size and Weight for the description */}
//             <p className="text-base lg:text-lg text-slate-600 font-bold leading-relaxed px-4">
//               {step.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // ==========================================
// // 3. BENEFITS & APPLICATIONS COMPONENTS
// // ==========================================
// const AnimatedBenefitsGrid = ({ benefits }: { benefits: any[] }) => {
//   if (!benefits) return null;
//   return (
//     <div className="grid md:grid-cols-2 gap-6 mt-12">
//       {benefits.map((benefit, i) => {
//         const Icon = benefit.icon || CheckCircle2;
//         return (
//           <motion.div 
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             className="group relative bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
//           >
//             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
//               <Icon className="w-6 h-6" />
//             </div>
//             <h4 className="text-xl font-extrabold text-slate-900 mb-3">{benefit.title}</h4>
//             <p className="text-slate-600 font-medium leading-relaxed">{benefit.description}</p>
//           </motion.div>
//         )
//       })}
//     </div>
//   );
// };

// const ApplicationsStaggeredList = ({ applications }: { applications: string[] }) => {
//   if (!applications) return null;
//   return (
//     <div className="flex flex-wrap gap-3 mt-8 justify-center">
//       {applications.map((app, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4, delay: i * 0.08, type: "spring" }}
//           className="px-5 py-3 rounded-full bg-white text-slate-700 font-bold border-2 border-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-colors duration-300 cursor-default shadow-sm"
//         >
//           {app}
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// const InteractiveSpecsTable = ({ specs }: { specs: any }) => {
//   if (!specs) return null;
//   const entries = Object.entries(specs);

//   return (
//     <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden mt-16">
//       <div className="bg-slate-50 px-8 py-6 border-b border-slate-200">
//         <h3 className="font-display text-2xl font-extrabold text-slate-900">Technical Specifications</h3>
//       </div>
//       <div className="flex flex-col">
//         {entries.map(([param, spec], i) => (
//           <motion.div 
//             key={i}
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.05, duration: 0.3 }}
//             className="group flex flex-col sm:flex-row sm:items-center justify-between px-8 py-5 border-b border-slate-100 hover:bg-blue-50 transition-colors duration-300 last:border-0 cursor-default relative overflow-hidden"
//           >
//             <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
//             <span className="text-sm font-extrabold text-slate-500 uppercase tracking-widest group-hover:text-blue-600 transition-colors w-1/3">
//               {param}
//             </span>
//             <span className="text-lg font-bold text-slate-900 sm:w-2/3 sm:text-right mt-1 sm:mt-0">
//               {String(spec)}
//             </span>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // ==========================================
// // 4. MAIN PAGE COMPONENT
// // ==========================================
// const CryoCleanFiltersPage = () => {
//   const product = productsData["cryo-clean"];
//   const [currentImg, setCurrentImg] = useState(0);
//   const images = product ? [product.heroImage, ...(product.gallery || [])].filter(Boolean) : [];
//   const { scrollY } = useScroll();
//   const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

//   useEffect(() => {
//     if (images.length <= 1) return;
//     const timer = setInterval(() => setCurrentImg((prev) => (prev + 1) % images.length), 4000);
//     return () => clearInterval(timer);
//   }, [images.length]);

//   if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-slate-50/50 text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900 relative">
//         <Navbar />

//         <div 
//           className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm"
//           style={{ top: '64px' }}
//         >
//           <div className="container py-3 flex items-center justify-between">
//             <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
//               <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
//               <span>/</span>
//               <Link to="/products" className="hover:text-blue-600 transition-colors">Catalog</Link>
//               <span>/</span>
//               <span className="hidden sm:inline-block cursor-default">{product.category}</span>
//               <span className="hidden sm:inline-block">/</span>
//               <span className="text-blue-600 font-bold">{product.name}</span>
//             </div>

//             <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
//               <span className="hidden lg:block font-display font-bold text-slate-900">{product.name}</span>
//               <button className="px-5 py-2.5 rounded-xl font-bold text-white bg-blue-600 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all pointer-events-auto">
//                 Request Quote
//               </button>
//             </motion.div>
//           </div>
//         </div>
        
//         <main className="pt-8 lg:pt-12">
//           {/* HERO SECTION */}
//           <section className="container pb-16 lg:pb-24 overflow-hidden relative">
//             <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
//               <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
//                 <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.05]">
//                   {product.name}
//                 </h1>
//                 <p className="text-2xl text-blue-600 font-medium mb-8">{product.subtitle}</p>
                
//                 <div className="space-y-6 mb-12">
//                   {product.overview?.map((p: string, i: number) => (
//                     <p key={i} className="text-lg text-slate-600 leading-relaxed font-medium">{p}</p>
//                   ))}
//                 </div>

//                 <div className="flex flex-wrap gap-4">
//                   <button className="group px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.6)] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1">
//                     Get a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                   <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-1">
//                     <Download className="w-5 h-5 text-blue-500" /> Full Specs
//                   </button>
//                 </div>
//               </motion.div>

//               <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full aspect-[4/3] lg:aspect-square">
//                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-rose-50 rounded-[3rem] transform rotate-3 scale-105 opacity-60 pointer-events-none" />
//                 <div className="relative w-full h-full rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl overflow-hidden group">
//                   <AnimatePresence mode="wait">
//                     {images.length > 0 && (
//                       <motion.img key={currentImg} src={images[currentImg]} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.6 }} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//                     )}
//                   </AnimatePresence>
//                   <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
//                     {images.map((_, idx) => (
//                       <button key={idx} onClick={() => setCurrentImg(idx)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImg ? "bg-blue-600 w-8" : "bg-white/80 hover:bg-white"}`} />
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* LIGHT THEME PERFORMANCE DASHBOARD */}
//           <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
//             <div className="container relative z-10">
//               <div className="text-center max-w-3xl mx-auto mb-16">
//                 <span className="text-blue-600 font-extrabold tracking-widest uppercase text-xs mb-3 block">Signal Conditioning</span>
//                 <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Absolute RF Suppression</h2>
//                 <p className="text-lg text-slate-600 font-medium">Watch how CryoClean eliminates high-frequency noise from room-temperature electronics before it can reach your sensitive quantum devices.</p>
//               </div>
              
//               <div className="max-w-6xl mx-auto">
//                 <SpectrumAnalyzerTelemetry />
//                 <IntegrationTimeline steps={product.integration || []} />
//               </div>
//             </div>
//           </section>

//           {/* CAPABILITIES & APPLICATIONS */}
//           <section className="py-24 relative overflow-hidden">
//             <div className="container max-w-5xl mx-auto">
              
//               <div className="text-center mb-10">
//                 <span className="text-blue-600 font-extrabold tracking-widest uppercase text-xs mb-3 block">Capabilities</span>
//                 <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Engineered Benefits</h2>
//               </div>
//               <AnimatedBenefitsGrid benefits={product.benefits} />

//               <div className="text-center mt-24 mb-8">
//                 <h2 className="font-display text-3xl font-extrabold text-slate-900">Deployed Applications</h2>
//               </div>
//               <ApplicationsStaggeredList applications={product.applications} />

//             </div>
//           </section>

//           {/* COLORFUL MASONRY TECHNICAL SPECS */}
//           <section className="py-24 bg-slate-50 border-y border-slate-200 relative">
//             <div className="container max-w-5xl mx-auto">
//               <div className="text-center mb-12">
//                 <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Precision Engineered</h2>
//                 <p className="text-lg text-slate-600 font-medium">Hover over specifications to inspect parameters.</p>
//               </div>
              
//               <InteractiveSpecsTable specs={product.specs} />
//             </div>
//           </section>

//           {/* SPEAK TO A SCIENTIST */}
//           <section className="container py-24">
//             <div className="bg-[#e2e8f0] rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center justify-between shadow-sm border border-slate-300">
//               <div className="lg:w-1/2">
//                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-slate-300 text-red-600 text-xs font-extrabold tracking-widest uppercase mb-6 shadow-sm"><div className="w-2 h-2 rounded-full bg-red-600" /> Expert Consultation</div>
//                 <h2 className="font-display text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1]">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">Scientist</span></h2>
//                 <p className="text-lg text-slate-700 font-bold mb-6">CRYONANO's analytical scientists are available to answer your questions. Have a project you'd like to discuss? Give us a call or email us!</p>
//                 <p className="text-slate-600 font-medium mb-10">We are happy to talk to you about any of your applications and instruments. Please write us an email with your question, drawing requirements, etc., and we will get back to you as soon as possible.</p>
//                 <div className="flex flex-wrap gap-4"><button className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-500 shadow-[0_10px_20px_-10px_rgba(220,38,38,0.5)] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2">Get a Quote <ArrowRight className="w-4 h-4" /></button><button className="px-8 py-4 rounded-xl font-bold text-slate-800 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">Technical Support</button></div>
//               </div>
//               <div className="lg:w-5/12 flex flex-col gap-6 w-full"><div className="bg-white rounded-3xl p-8 flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white hover:border-slate-200 group"><div className="w-16 h-16 rounded-2xl border-2 border-slate-100 flex items-center justify-center shrink-0 bg-slate-50 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors"><Phone className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors" /></div><div><p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 group-hover:text-slate-600 transition-colors">Call Us Directly</p><p className="text-2xl font-extrabold text-slate-900">+91 97481 81485</p></div></div><div className="bg-white rounded-3xl p-8 flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white hover:border-slate-200 group"><div className="w-16 h-16 rounded-2xl border-2 border-slate-100 flex items-center justify-center shrink-0 bg-slate-50 group-hover:border-red-100 group-hover:bg-red-50 transition-colors"><Mail className="w-7 h-7 text-slate-700 group-hover:text-red-600 transition-colors" /></div><div><p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 group-hover:text-slate-600 transition-colors">Email Engineering</p><p className="text-xl md:text-2xl font-extrabold text-slate-900">contact@cryonano.com</p></div></div></div>
//             </div>
//           </section>

//           {/* BOTTOM NAVIGATION */}
//           <section className="border-t border-slate-200 bg-white py-6">
//             <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
//               <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50">
//                 <ArrowLeft className="w-4 h-4" /> Back to Homepage
//               </Link>
//               <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50">
//                 Return to Product Catalog <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>
//           </section>

//         </main>
        
//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

// export default CryoCleanFiltersPage;



import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { CTASection } from "@/components/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, ArrowUp, CheckCircle2, ChevronRight, ChevronDown, Plus, Minus,
  Activity, Zap, Shield, Camera, Cpu, Target, Settings,
  Waves, Layers, Network, Lock, ShieldAlert, Code, ArrowLeft, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// Icon mapping
const iconMap: Record<string, any> = { Shield, Activity, Waves, Target, Cpu, Settings, Layers, Network, Lock };

// ── Scroll to Top ──
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggle = () => window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:bg-red-700 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ── Application descriptions (static, for clean card layout) ──
const appDescriptions: Record<string, string> = {
  "Quantum Computing Systems": "Protect superconducting qubits and quantum circuits from environmental RF noise.",
  "Quantum Transport Measurements": "Enable high-fidelity measurements of nanoscale devices and mesoscopic structures.",
  "Cryogenic Electronics Testing": "Improve signal purity for characterization of cryogenic amplifiers and sensors.",
  "Nanoelectronics Research": "Essential for experiments with semiconductor nanostructures and advanced quantum materials.",
  "Cryogenic Signal Conditioning": "Provides essential line filtering in cryostats, dilution refrigerators, and probe stations."
};

export default function CryoCleanFiltersPage() {
  const product = productsData["cryo-clean"];
  const [activeSection, setActiveSection] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>("Filter Performance");
  const [currentImage, setCurrentImage] = useState(0);
  
  // Refs
  const overviewRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const appsRef = useRef<HTMLDivElement>(null);

  // Scroll spy
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

  // Auto-carousel
  const heroImages = product?.gallery || [];
  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages]);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) window.scrollTo({ top: ref.current.offsetTop - 130, behavior: "smooth" });
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
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" 
          />
          <motion.div 
            animate={{ x: [0, 40, 0], opacity: [0.2, 0.5, 0.2] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" 
          />
          <div className="container relative z-10 grid lg:grid-cols-12 gap-8 items-center min-h-[550px]">
            <div className="lg:col-span-7 flex flex-col justify-center">
              {product.statusBadge && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="w-fit px-3 py-1 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest rounded mb-4 bg-primary/10 shadow-[0_0_15px_rgba(255,0,0,0.2)]"
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

            {/* Carousel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center w-full"
            >
              {/* <div className="w-full max-w-[550px] aspect-square rounded-[2rem] bg-gradient-to-br from-[#0F294D] to-[#0A1B35] border border-slate-700 p-2 shadow-2xl relative overflow-hidden group">               */}
              {/* REMOVED aspect-square, added h-auto to allow the box to scale to the filter picture dimensions naturally */}
              <div className="w-full max-w-[550px] h-auto rounded-[2rem] bg-gradient-to-br from-[#0F294D] to-[#0A1B35] border border-slate-700 p-2 shadow-2xl relative overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full relative rounded-[1.5rem] overflow-hidden bg-slate-900 flex items-center justify-center"
                  >
                    {heroImages.length > 0 && heroImages[currentImage] ? (
                      <>
                        {/* <img src={heroImages[currentImage].url} alt={heroImages[currentImage].caption} className="w-full h-full object-cover opacity-85 mix-blend-screen" /> */}
                        {/* Changed h-full to h-auto and object-cover to object-contain so the full PCB unit is rendered without any crop */}
                        <img src={heroImages[currentImage].url} alt={heroImages[currentImage].caption} className="w-full h-auto object-contain opacity-85 mix-blend-screen p-4 pb-20" />
                        <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-lg">
                           <p className="text-sm font-bold text-white uppercase tracking-wider">{heroImages[currentImage].caption}</p>
                        </div>
                      </>
                    ) : (
                      <Camera className="w-16 h-16 text-slate-700" />
                    )}
                  </motion.div>
                </AnimatePresence>
                {heroImages.length > 1 && (
                  <div className="absolute top-6 right-6 flex gap-2 z-20">
                    {heroImages.map((_: any, idx: number) => (
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

        {/* 01a. QUICK SPECS */}
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

        {/* 01b. STICKY NAV */}
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

        {/* 02. OVERVIEW – Split layout (Title+Paragraphs left, Advantages right) */}
        <section ref={overviewRef} className="py-16 bg-white border-b border-border">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">System Profile</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647] mb-4">
                  {product.overview.title}
                </h2>
                <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                  {product.overview.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
                </div>
              </motion.div>

              {/* Right – Advantages as checkmark list */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-slate-50 border border-border rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-sm font-bold text-[#0A2647] uppercase tracking-widest mb-6 border-b border-border pb-4">
                  Why Cryogenic Filtering Matters
                </h3>
                <ul className="space-y-4">
                  {product.overview.advantages.map((adv: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-bold text-slate-800">{adv}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 03. KEY FEATURES (unchanged) */}
        <section ref={featuresRef} className="py-16 bg-slate-50/30 border-b border-border">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">High-Fidelity Engineering</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Key Platform Capabilities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.keyFeatures.map((feat: any, i: number) => {
                const Icon = iconMap[feat.icon] || CheckCircle2;
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                    key={i} 
                    className="group relative bg-white border border-border p-8 rounded-xl shadow-sm hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="w-12 h-12 rounded bg-slate-50 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6 shadow-sm">
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2647] mb-2">{feat.title}</h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed relative z-10">{feat.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 04. CORE TECHNOLOGIES – New professional card layout (no dashboard) */}
        <section ref={techRef} className="py-16 bg-white border-b border-border">
          <div className="container max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">Technical Deep‑Dive</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Core Technologies</h2>
              <p className="text-slate-600 font-medium mt-4">Engineered for ultra‑low‑noise cryogenic signal conditioning.</p>
            </div>

            {/* Two‑column layout for the two tech items */}
            <div className="grid md:grid-cols-2 gap-8">
              {product.coreTechnologies.map((tech: any, i: number) => {
                const Icon = tech.type === 'hardware' ? Waves : tech.type === 'software' ? Code : Lock;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{tech.subtitle}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0A2647] mb-3">{tech.title}</h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6 flex-1">{tech.description}</p>
                    <ul className="space-y-3 flex-1">
                      {tech.bullets.map((b: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-bold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Extra UI for highlights or platforms */}
                    {tech.type === 'hardware' && tech.highlights && (
                      <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-3">
                        {tech.highlights.map((h: any, idx: number) => (
                          <div key={idx} className="bg-slate-50 p-3 rounded-lg text-center">
                            <p className="text-[10px] font-bold text-slate-400 uppercase">{h.label}</p>
                            <p className="text-sm font-extrabold text-primary">{h.val}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {tech.type === 'software' && (
                      <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Supported Systems</p>
                        <div className="flex flex-wrap gap-2">
                          {tech.platforms.map((p: string, idx: number) => (
                            <span key={idx} className="px-3 py-1 bg-[#0A2647] text-white rounded text-xs font-bold">{p}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 05. TECHNICAL SPECIFICATIONS (unchanged) */}
        <section ref={specsRef} className="py-16 bg-slate-50/50 border-b border-border">
          <div className="container max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">Data Sheet</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Technical Specifications</h2>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setOpenAccordion("all")} 
                  className="px-4 py-1.5 bg-white border border-border text-slate-700 font-bold text-[11px] uppercase tracking-wider rounded hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                >
                  Expand All
                </button>
                <button 
                  onClick={() => setOpenAccordion(null)} 
                  className="px-4 py-1.5 bg-white border border-border text-slate-700 font-bold text-[11px] uppercase tracking-wider rounded hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
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
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
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

        {/* 06. APPLICATIONS – Static grid of cards with descriptions */}
        <section ref={appsRef} className="py-16 bg-white border-b border-border">
          <div className="container max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">Deployment Scenarios</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Scientific & Industrial Applications</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.applications.map((app: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300 group cursor-default flex flex-col"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#0A2647] mb-2">{app}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    {appDescriptions[app] || "Precision filtering for advanced research applications."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY (optional, if present) */}
        {product.gallery && product.gallery.length > 0 && (
          <section className="py-16 bg-slate-50/50 border-b border-border">
            <div className="container max-w-6xl">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">System Imagery</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Visual Reference</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.gallery.map((img: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* <div className="aspect-video w-full bg-slate-100 overflow-hidden relative">
                      <img src={img.url} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div> */}
                    {/* Changed aspect-video to a cleaner, looser aspect ratio or container sizing to fit the filter blueprints, using object-contain */}
<div className="w-full h-48 bg-white flex items-center justify-center overflow-hidden relative p-4">
  <img 
    src={img.url} 
    alt={img.caption} 
    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" 
  />
</div>
                    <div className="p-4 bg-white border-t border-border/40">
                      <p className="text-xs font-bold text-slate-700">{img.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* GLOBAL CTA */}
        <CTASection />

        {/* BOTTOM NAV */}
        <section className="bg-white py-10 border-t border-border">
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