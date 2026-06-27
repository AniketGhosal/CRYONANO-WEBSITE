// import { useState, useEffect } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { 
//   ArrowLeft, ArrowRight, Download, Phone, Mail, 
//   Activity, Cpu, Shield, Settings, Zap, CheckCircle
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { productsData } from "@/data/products";

// // ==========================================
// // 1. LIVE TELEMETRY: WAFER MAP & I-V TRACER (Light Theme)
// // ==========================================
// const ProbeStationTelemetry = () => {
//   // Generate a mock grid of "dies" for the wafer map
//   const dies = Array.from({ length: 45 }).map((_, i) => ({
//     id: i,
//     delay: i * 0.15,
//   }));

//   return (
//     <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden font-sans flex flex-col relative">
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      
//       <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
//         <div className="flex items-center gap-3">
//           <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
//           <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">Measurement Telemetry</span>
//         </div>
//         <div className="flex gap-4">
//           <span className="text-xs font-bold font-mono text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded shadow-sm">CHUCK GROUNDED</span>
//           <span className="text-xs font-bold font-mono text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded shadow-sm">PROBE ACTIVE</span>
//         </div>
//       </div>

//       <div className="p-8 grid lg:grid-cols-2 gap-8 relative z-10">
        
//         {/* GRAPH 1: Live Wafer Map Scanner (Light) */}
//         <div className="bg-white border border-slate-200 rounded-3xl p-8 relative flex flex-col shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
//           <div className="flex justify-between items-start mb-6 relative z-10">
//             <div>
//               <p className="text-amber-500 text-xs font-extrabold uppercase tracking-widest mb-1">Wafer Topography</p>
//               <p className="text-3xl font-extrabold text-slate-900 tracking-tight">100 <span className="text-sm text-slate-500 font-bold">mm Scan</span></p>
//             </div>
//             <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100">
//               <Cpu className="w-6 h-6 text-amber-500" />
//             </div>
//           </div>
          
//           <div className="flex-grow w-full h-56 mt-2 relative flex items-center justify-center bg-slate-50 rounded-xl border border-slate-100">
//             {/* The Wafer Outline */}
//             <div className="absolute w-48 h-48 rounded-full border-4 border-slate-300 bg-slate-100 flex items-center justify-center overflow-hidden shadow-inner">
//               {/* The "Flat" edge of a semiconductor wafer */}
//               <div className="absolute bottom-0 w-full h-4 bg-slate-50 z-20 border-t-4 border-slate-300" />
              
//               {/* The Dies Grid */}
//               <div className="grid grid-cols-7 gap-1 p-4 relative z-10">
//                 {dies.map((die) => (
//                   <motion.div 
//                     key={die.id}
//                     className="w-4 h-4 bg-slate-200 rounded-sm border border-slate-300/50"
//                     animate={{ backgroundColor: ["#e2e8f0", "#fbbf24", "#34d399"] }} // Slate-200 -> Amber (Scanning) -> Emerald (Passed)
//                     transition={{ duration: 1.5, delay: die.delay, ease: "linear", repeat: Infinity, repeatDelay: 6.75 }}
//                   />
//                 ))}
//               </div>

//               {/* Scanning Laser Line */}
//               <motion.div 
//                 animate={{ top: ["0%", "100%", "0%"] }}
//                 transition={{ duration: 6.75, ease: "linear", repeat: Infinity }}
//                 className="absolute left-0 right-0 h-0.5 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)] z-30"
//               />
//             </div>
//             <div className="absolute bottom-2 right-2 text-[10px] font-bold font-mono text-emerald-700 bg-white border border-emerald-200 px-2 py-1 rounded shadow-sm">YIELD: 98.4%</div>
//           </div>
//         </div>

//         {/* GRAPH 2: Real-Time I-V Curve Tracer (Light) */}
//         <div className="bg-white border border-slate-200 rounded-3xl p-8 relative flex flex-col shadow-sm hover:shadow-md transition-shadow overflow-hidden">
//           <div className="flex justify-between items-start mb-6 relative z-10">
//             <div>
//               <p className="text-blue-500 text-xs font-extrabold uppercase tracking-widest mb-1">Parametric Testing</p>
//               <p className="text-3xl font-extrabold text-slate-900 tracking-tight">I-V <span className="text-sm text-slate-500 font-bold">Curve Trace</span></p>
//             </div>
//             <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100">
//               <Activity className="w-6 h-6 text-blue-500" />
//             </div>
//           </div>
          
//           <div className="flex-grow relative w-full h-56 mt-2 border-l-2 border-b-2 border-slate-200">
//             {/* Grid Lines */}
//             <div className="absolute inset-0 flex flex-col justify-between opacity-50 pointer-events-none">
//               {[1,2,3,4,5].map(i => <div key={i} className="w-full h-px bg-slate-100" />)}
//             </div>
//             <div className="absolute inset-0 flex justify-between opacity-50 pointer-events-none">
//               {[1,2,3,4,5,6].map(i => <div key={i} className="h-full w-px bg-slate-100" />)}
//             </div>
            
//             <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
//               {/* Origin Crosshairs */}
//               <line x1="200" y1="0" x2="200" y2="200" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
//               <line x1="0" y1="100" x2="400" y2="100" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />

//               {/* Animated Diode I-V Curve */}
//               <motion.path 
//                 d="M 0 100 L 150 100 Q 200 100, 220 90 Q 240 70, 260 20 L 280 -80" 
//                 fill="none" stroke="#f59e0b" strokeWidth="4" 
//                 initial={{ pathLength: 0 }} 
//                 whileInView={{ pathLength: 1 }} 
//                 transition={{ duration: 2, ease: "easeIn", repeat: Infinity, repeatDelay: 1 }} 
//               />
//             </svg>
            
//             <div className="absolute top-0 -left-12 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Current (I)</div>
//             <div className="absolute -bottom-6 right-0 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Voltage (V)</div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// // ==========================================
// // 2. STICKY-SCROLL FEATURE PANEL (Light Theme)
// // ==========================================
// const StickyScrollFeatures = ({ features }: { features: any[] }) => {
//   if (!features) return null;
//   return (
//     <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
//       {/* Left: Sticky Image / Title */}
//       <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
//         <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-3 block">Mechanical Architecture</span>
//         <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">Engineered for Absolute Stability.</h2>
//         <p className="text-slate-600 font-medium">The PSM 100 is built on a rigid, drift-free foundation designed to eliminate environmental vibrations during sub-micron probing.</p>
//       </div>

//       {/* Right: Scrolling Feature Cards */}
//       <div className="lg:w-2/3 flex flex-col gap-6">
//         {features.map((feature, i) => {
//           const Icon = feature.icon || Settings;
//           return (
//             <motion.div 
//               key={i}
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 flex flex-col sm:flex-row gap-6 sm:items-center shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-300"
//             >
//               <div className="w-16 h-16 shrink-0 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center">
//                 <Icon className="w-8 h-8 text-amber-500" />
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
//                 <p className="text-slate-600 leading-relaxed font-medium">{feature.description}</p>
//               </div>
//             </motion.div>
//           )
//         })}
//       </div>
//     </div>
//   );
// };

// // ==========================================
// // 3. LIGHT GLASSMORPHISM ACCESSORIES GRID
// // ==========================================
// const AccessoriesGrid = ({ accessories }: { accessories: any[] }) => {
//   if (!accessories) return null;
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//       {accessories.map((acc, i) => {
//         const Icon = acc.icon || Zap;
//         return (
//           <motion.div 
//             key={i}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: i * 0.1 }}
//             className="relative bg-white rounded-[2rem] p-8 border border-slate-200 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//           >
//             <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-100 rounded-full blur-3xl group-hover:bg-amber-200 transition-colors duration-500 pointer-events-none" />
//             <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 relative z-10 border border-amber-100 group-hover:scale-110 transition-transform duration-300">
//               <Icon className="w-7 h-7 text-amber-500" />
//             </div>
//             <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{acc.title}</h4>
//             <p className="text-slate-600 font-medium relative z-10">{acc.description}</p>
//           </motion.div>
//         )
//       })}
//     </div>
//   );
// };

// // ==========================================
// // 4. MAIN PAGE COMPONENT
// // ==========================================
// const ProbeStationPage = () => {
//   const product = productsData["psm-100"];
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
//       {/* LIGHT AIRY THEME */}
//       <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 font-sans selection:bg-amber-200 selection:text-amber-900 relative">
//         <Navbar />

//         <div 
//           className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm"
//           style={{ top: '64px' }}
//         >
//           <div className="container py-3 flex items-center justify-between">
//             <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
//               <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
//               <span>/</span>
//               <Link to="/products" className="hover:text-amber-500 transition-colors">Catalog</Link>
//               <span>/</span>
//               <span className="hidden sm:inline-block cursor-default">{product.category}</span>
//               <span className="hidden sm:inline-block">/</span>
//               <span className="text-amber-500 font-bold">{product.name}</span>
//             </div>

//             <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
//               <span className="hidden lg:block font-display font-bold text-slate-900">{product.name}</span>
//               <button className="px-5 py-2.5 rounded-xl font-bold text-white bg-amber-500 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all pointer-events-auto">
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
//                 <p className="text-2xl text-amber-500 font-medium mb-8">{product.subtitle}</p>
                
//                 <div className="space-y-6 mb-12">
//                   {product.overview?.map((p: string, i: number) => (
//                     <p key={i} className="text-lg text-slate-600 leading-relaxed font-medium">{p}</p>
//                   ))}
//                 </div>

//                 <div className="flex flex-wrap gap-4">
//                   <button className="group px-8 py-4 rounded-xl font-bold text-white bg-amber-500 shadow-[0_10px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_10px_30px_rgba(245,158,11,0.5)] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1">
//                     Get a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                   <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-1">
//                     <Download className="w-5 h-5 text-amber-500" /> Full Specs
//                   </button>
//                 </div>
//               </motion.div>

//               {/* Light Themed Image Container */}
//               <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full aspect-[4/3] lg:aspect-square">
//                 <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-white rounded-[3rem] transform rotate-3 scale-105 opacity-60 pointer-events-none" />
//                 <div className="relative w-full h-full rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl overflow-hidden group">
//                   <AnimatePresence mode="wait">
//                     {images.length > 0 && (
//                       <motion.img key={currentImg} src={images[currentImg]} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.6 }} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* LIGHT TELEMETRY SECTION */}
//           <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
//             <div className="container relative z-10">
//               <div className="text-center max-w-3xl mx-auto mb-16">
//                 <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-3 block">Sub-Micron Control</span>
//                 <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Electrical Characterization</h2>
//                 <p className="text-lg text-slate-600 font-medium">Monitor real-time wafer scanning topography and non-destructive I-V curve traces across varying semiconductor devices.</p>
//               </div>
              
//               <div className="max-w-6xl mx-auto">
//                 <ProbeStationTelemetry />
//               </div>
//             </div>
//           </section>

//           {/* STICKY SCROLL FEATURES - LIGHT THEME */}
//           <section className="py-24 relative overflow-hidden bg-slate-100">
//             <div className="container max-w-7xl mx-auto">
//               <StickyScrollFeatures features={product.features} />
//             </div>
//           </section>

//           {/* CAPABILITIES LIST - LIGHT THEME */}
//           <section className="py-24 relative overflow-hidden bg-white border-y border-slate-200">
//             <div className="container max-w-5xl mx-auto text-center">
//               <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-3 block">Parametric Testing</span>
//               <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-12">Measurement Capabilities</h2>
//               <div className="flex flex-wrap gap-4 justify-center">
//                 {product.capabilities?.map((cap: string, i: number) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.3, delay: i * 0.05 }}
//                     className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm hover:border-amber-300 hover:bg-amber-50 transition-colors cursor-default"
//                   >
//                     <CheckCircle className="w-5 h-5 text-amber-500" /> {cap}
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* ACCESSORIES GRID - LIGHT THEME */}
//           <section className="py-24 relative overflow-hidden bg-slate-50 border-b border-slate-200">
//             <div className="container max-w-6xl mx-auto">
//               <div className="text-center mb-10">
//                 <span className="text-amber-500 font-extrabold tracking-widest uppercase text-xs mb-3 block">Expansion</span>
//                 <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Flexible Accessories</h2>
//               </div>
//               <AccessoriesGrid accessories={product.accessories} />
//             </div>
//           </section>

//           {/* SPEAK TO A SCIENTIST - LIGHT THEME */}
//           <section className="container py-24">
//             <div className="bg-[#e2e8f0] rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center justify-between shadow-sm border border-slate-300 relative overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-transparent pointer-events-none" />
              
//               <div className="lg:w-1/2 relative z-10">
//                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-slate-300 text-slate-800 text-xs font-extrabold tracking-widest uppercase mb-6 shadow-sm"><div className="w-2 h-2 rounded-full bg-amber-500" /> Engineering Support</div>
//                 <h2 className="font-display text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1]">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Specialist</span></h2>
//                 <p className="text-lg text-slate-700 font-medium mb-10">CRYONANO's systems engineers are available to answer your questions. Discuss your wafer testing requirements with us today.</p>
//                 <div className="flex flex-wrap gap-4">
//                   <button className="px-8 py-4 rounded-xl font-bold text-white bg-amber-500 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2">Get a Quote <ArrowRight className="w-4 h-4" /></button>
//                 </div>
//               </div>

//               <div className="lg:w-5/12 flex flex-col gap-6 w-full relative z-10">
//                 <div className="bg-white rounded-3xl p-8 flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white hover:border-amber-200 group">
//                   <div className="w-16 h-16 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-amber-50 transition-colors"><Phone className="w-7 h-7 text-slate-500 group-hover:text-amber-500 transition-colors" /></div>
//                   <div><p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">Call Us Directly</p><p className="text-2xl font-extrabold text-slate-900">+91 97481 81485</p></div>
//                 </div>
//                 <div className="bg-white rounded-3xl p-8 flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white hover:border-amber-200 group">
//                   <div className="w-16 h-16 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-amber-50 transition-colors"><Mail className="w-7 h-7 text-slate-500 group-hover:text-amber-500 transition-colors" /></div>
//                   <div><p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">Email Engineering</p><p className="text-xl md:text-2xl font-extrabold text-slate-900">contact@cryonano.com</p></div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* BOTTOM NAVIGATION */}
//           <section className="border-t border-slate-200 bg-white py-6">
//             <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
//               <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-amber-500 transition-colors px-4 py-2 rounded-lg hover:bg-amber-50">
//                 <ArrowLeft className="w-4 h-4" /> Back to Homepage
//               </Link>
//               <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-amber-500 transition-colors px-4 py-2 rounded-lg hover:bg-amber-50">
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

// export default ProbeStationPage;











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
  Image, Ruler, RotateCw, Thermometer, Maximize2, SlidersHorizontal, Microscope,
  Crosshair, Wind, Wrench, Radio, GitMerge
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// Icon mapping dictionary
const iconMap: Record<string, any> = { 
  ThermometerSnowflake, Activity, Zap, Shield, Camera, Move, Waves, Target, Cpu, Settings, Layers, Eye, Crosshair, Wind, Wrench, Radio, GitMerge
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
// CORE TECHNOLOGIES – Vertical Accordion Pattern (NEW)
// ==========================================
const CoreTechAccordion = ({ technologies }: { technologies: any[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const iconMapTech: Record<string, any> = {
    hardware: Move,
    software: Code,
    protection: Shield
  };

  const colorMap: Record<string, string> = {
    hardware: "border-blue-500",
    software: "border-cyan-500",
    protection: "border-red-500"
  };

  const bgMap: Record<string, string> = {
    hardware: "bg-blue-50",
    software: "bg-cyan-50",
    protection: "bg-red-50"
  };

  return (
    <div className="space-y-4 max-w-5xl mx-auto">
      {technologies.map((tech, idx) => {
        const isOpen = openIndex === idx;
        const Icon = iconMapTech[tech.type] || Settings;
        const borderColor = colorMap[tech.type] || "border-slate-300";
        const bgColor = bgMap[tech.type] || "bg-slate-50";

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className={`border-l-4 ${borderColor} bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-cyan-600 uppercase tracking-wider">{tech.subtitle}</p>
                  <h3 className="text-lg font-extrabold text-[#0A2647]">{tech.title}</h3>
                </div>
              </div>
              {isOpen ? <ChevronDown className="w-5 h-5 text-primary" /> : <ChevronRight className="w-5 h-5 text-slate-400" />}
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 border-t border-border">
                    <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4">{tech.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {tech.bullets.map((b: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {tech.highlights && tech.highlights.length > 0 && (
                        <div>
                          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Specifications</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {tech.highlights.map((h: any, i: number) => (
                              <div key={i} className="bg-slate-50 rounded-lg p-3 text-center border border-border">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{h.label}</p>
                                <p className="text-sm font-extrabold text-[#0A2647]">{h.val}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {tech.protects && tech.protects.length > 0 && (
                        <div>
                          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Protection Features</h4>
                          <div className="flex flex-wrap gap-2">
                            {tech.protects.map((p: string, i: number) => (
                              <span key={i} className="px-3 py-1.5 bg-red-50 text-red-700 text-xs font-bold rounded-lg border border-red-200">{p}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
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
                    Enabling precision cryogenic probing, reliable thermal control, and high-vacuum stability specifically optimized for {app.toLowerCase()} workflows.
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
  const icons = [Settings, GitMerge, Shield, Camera, Layers, Wrench, Activity, Cpu];
  
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-8 border border-border shadow-sm">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
          <Settings className="w-3.5 h-3.5" /> Customize Your System
        </div>
        <h3 className="text-2xl font-extrabold text-[#0A2647] mt-3">Optional Enhancements</h3>
        <p className="text-sm text-slate-500 mt-1">Configure your probe station for specific research requirements</p>
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
export default function ProbeStationPage() {
  const product = productsData["psm-100"];
  const [activeSection, setActiveSection] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>("Thermal Performance");
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
        <section ref={overviewRef} className="py-12 bg-white border-b border-border">
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
        <section ref={featuresRef} className="py-12 bg-slate-50/30 border-b border-border">
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

        {/* 04. CORE TECHNOLOGIES – Vertical Accordion Pattern (NEW) */}
        <section ref={techRef} className="py-12 bg-white border-b border-border">
          <div className="container max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-[10px] mb-2 block">Technical Deep-Dive</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Core Technologies</h2>
            </div>
            
            <CoreTechAccordion technologies={product.coreTechnologies} />
          </div>
        </section>

        {/* 05. TECHNICAL SPECIFICATIONS */}
        <section ref={specsRef} className="py-12 bg-slate-50/50 border-b border-border">
          <div className="container max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-cyan-600 font-bold tracking-widest uppercase text-[10px] mb-2 block">Data Sheet</span>
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
        <section ref={appsRef} className="py-12 bg-slate-50/30 border-b border-border">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-[10px] mb-2 block">Deployment Scenarios</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Scientific & Industrial Applications</h2>
            </div>
            <ApplicationsExpandableGrid apps={product.applications} />
          </div>
        </section>

        {/* 08. OPTIONAL ENHANCEMENTS – Highlighted Grid (NEW Pattern) */}
        <section className="py-12 bg-white border-b border-border">
          <div className="container max-w-6xl">
            <OptionalEnhancements configs={product.configurations} />
          </div>
        </section>

        {/* 09. FINAL TAGLINE */}
        {product.cta?.tagline && (
          <section className="py-10 bg-white border-b border-border">
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
        <section className="py-12 bg-white border-b border-border">
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