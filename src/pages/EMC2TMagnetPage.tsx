// import { useState, useEffect, useRef} from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { CTASection } from "@/components/CTASection";
// import { PageTransition } from "@/components/PageTransition";
// // import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
// import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
// import { 
//   ArrowLeft, ArrowRight, Download, Phone, Mail, 
//   Magnet, Activity, Maximize2, Settings, ArrowUp, 
//   Layers, Droplets, Zap, ShieldCheck, CheckCircle2,
//   Eye, Gauge, Thermometer, HardDrive, Shield,
//   Cpu, Sparkles, BarChart, Wind
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { productsData } from "@/data/products";

// // ==========================================
// // SCROLL TO TOP BUTTON
// // ==========================================
// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     const toggleVisibility = () => setIsVisible(window.scrollY > 400);
//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.button
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.5 }}
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 z-50 p-4 bg-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-700 hover:-translate-y-1 transition-all"
//         >
//           <ArrowUp className="w-6 h-6" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };

// // ==========================================
// // KEY FEATURES – 3D Tilt Cards (from first product)
// // ==========================================
// const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const mouseXSpring = useSpring(x, { stiffness: 800, damping: 25 });
//   const mouseYSpring = useSpring(y, { stiffness: 800, damping: 25 });
//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;
//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;
//     x.set(xPct);
//     y.set(yPct);
//   };
//   const handleMouseLeave = () => { x.set(0); y.set(0); };

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//       className={`relative ${className}`}
//     >
//       {children}
//     </motion.div>
//   );
// };

// const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
//   const icons = [Magnet, Maximize2, Eye, Droplets, Settings, Activity];
//   const Icon = icons[index % icons.length];
//   const colors = ["cyan", "blue", "rose", "amber", "emerald", "purple"];
//   const color = colors[index % colors.length];
//   return (
//     <TiltCard className="h-full">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: index * 0.1, duration: 0.5 }}
//         whileHover={{ y: -8 }}
//         className={`group relative h-full bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}
//       >
//         <div className={`absolute inset-0 bg-gradient-to-br from-${color}-50/0 via-transparent to-${color}-50/0 group-hover:opacity-100 opacity-0 transition-opacity duration-500`} />
//         <div className="relative z-10">
//           <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${color}-100 to-${color}-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
//             <Icon className={`w-7 h-7 text-${color}-700`} />
//           </div>
//           <h3 className="text-xl font-extrabold text-slate-900 mb-2">{feature.title}</h3>
//           <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
//         </div>
//       </motion.div>
//     </TiltCard>
//   );
// };

// // ==========================================
// // TECHNICAL SPECIFICATIONS – Two-column interactive cards (new pattern)
// // ==========================================
// const TechSpecCard = ({ param, spec, idx }: { param: string; spec: string; idx: number }) => {
//   const colors = ["cyan", "blue", "rose", "amber", "emerald", "purple", "teal", "orange"];
//   const color = colors[idx % colors.length];
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ delay: idx * 0.05 }}
//       whileHover={{ y: -4, scale: 1.02 }}
//       className={`group bg-white rounded-xl border-l-4 border-${color}-500 p-5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default`}
//     >
//       <span className={`text-[11px] font-extrabold text-${color}-600 uppercase tracking-wider`}>{param}</span>
//       <p className="text-base font-bold text-slate-800 mt-1 group-hover:text-cyan-700 transition-colors">{spec}</p>
//     </motion.div>
//   );
// };

// // ==========================================
// // MAGNETIC FIELD PERFORMANCE – Animated stats + mini graph
// // ==========================================
// const MagneticFieldSection = ({ data }: { data: any }) => {
//   const [animated, setAnimated] = useState(false);
//   useEffect(() => { setAnimated(true); }, []);
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -30 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md hover:shadow-xl transition-all"
//     >
//       <h3 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2"><Gauge className="w-6 h-6 text-cyan-600" /> {data.title}</h3>
//       <p className="text-slate-600 mb-6">{data.description}</p>
//       <div className="space-y-4">
//         {data.highlights.map((item: string, i: number) => (
//           <div key={i} className="flex items-center gap-3">
//             <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
//             <span className="text-slate-700 font-medium">{item}</span>
//             <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
//               <motion.div 
//                 className="h-full bg-cyan-600 rounded-full"
//                 initial={{ width: 0 }}
//                 animate={{ width: animated ? `${100 - i * 12}%` : 0 }}
//                 transition={{ duration: 1, delay: i * 0.2 }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// // ==========================================
// // POWER SUPPLY – Two‑column with protection badges
// // ==========================================
// const PowerSupplySection = ({ data }: { data: any }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 30 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md hover:shadow-xl transition-all"
//     >
//       <h3 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2"><Zap className="w-6 h-6 text-amber-600" /> {data.title}</h3>
//       <div className="grid md:grid-cols-2 gap-6">
//         <div>
//           <p className="font-bold text-slate-800 mb-2">Key Features</p>
//           <ul className="space-y-2">
//             {data.features.map((f: string, i: number) => (
//               <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />{f}</li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <p className="font-bold text-slate-800 mb-2">Integrated Protections</p>
//           <div className="flex flex-wrap gap-2">
//             {data.protections.map((p: string, i: number) => (
//               <span key={i} className="bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-200">{p}</span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // ==========================================
// // COOLING SYSTEM – Horizontal cards with hover
// // ==========================================
// const CoolingSystem = ({ data }: { data: any }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-md"
//     >
//       <h3 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center justify-center gap-2"><Droplets className="w-7 h-7 text-cyan-600" /> {data.title}</h3>
//       <p className="text-slate-700 text-center mb-6 max-w-2xl mx-auto">{data.description}</p>
//       <div className="flex flex-wrap justify-center gap-4">
//         {data.features.map((f: string, i: number) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05, y: -4 }}
//             className="bg-white/80 backdrop-blur-sm rounded-xl px-5 py-3 shadow-sm border border-cyan-200 text-cyan-800 font-bold text-sm cursor-default"
//           >
//             {f}
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// // ==========================================
// // APPLICATIONS – Professional grid with numbering
// // ==========================================
// const ApplicationsGrid = ({ apps }: { apps: string[] }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md"
//     >
//       <div className="flex items-center justify-between mb-6">
//         <h3 className="text-2xl font-extrabold text-slate-900">Research Applications</h3>
//         <Sparkles className="w-5 h-5 text-cyan-500" />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
//         {apps.map((app, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, x: -10 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.03 }}
//             whileHover={{ x: 4 }}
//             className="flex items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-200 hover:border-cyan-300 transition-all"
//           >
//             <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 text-xs font-bold">{i+1}</div>
//             <span className="text-sm font-medium text-slate-700">{app}</span>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// // ==========================================
// // SAFETY & ENGINEERING + MECHANICAL DESIGN (two columns)
// // ==========================================
// const SafetyCard = ({ data }: { data: any }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     whileHover={{ y: -4 }}
//     className="bg-slate-50 rounded-2xl p-8 border-l-8 border-rose-500 shadow-sm hover:shadow-lg transition-all"
//   >
//     <h3 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2"><Shield className="w-6 h-6 text-rose-600" /> {data.title}</h3>
//     <ul className="space-y-2">
//       {data.features.map((f: string, i: number) => (
//         <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />{f}</li>
//       ))}
//     </ul>
//   </motion.div>
// );

// const MechanicalCard = ({ data }: { data: any }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     whileHover={{ y: -4 }}
//     className="bg-slate-50 rounded-2xl p-8 border-l-8 border-blue-500 shadow-sm hover:shadow-lg transition-all"
//   >
//     <h3 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2"><HardDrive className="w-6 h-6 text-blue-600" /> {data.title}</h3>
//     <div className="grid md:grid-cols-2 gap-6">
//       <div>
//         <p className="font-bold text-slate-800 mb-2">Construction Materials</p>
//         <ul className="space-y-1">
//           {data.materials.map((m: string, i: number) => (
//             <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />{m}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <p className="font-bold text-slate-800 mb-2">Mechanical Highlights</p>
//         <ul className="space-y-1">
//           {data.highlights.map((h: string, i: number) => (
//             <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />{h}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   </motion.div>
// );

// // ==========================================
// // MAIN PAGE
// // ==========================================
// const EMC2TMagnetPage = () => {
//   const product = productsData["emc2t-2-magnet"];
//   const { scrollY } = useScroll();
//   const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

//   if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-gradient-to-b from-white via-slate-50/30 to-white text-slate-800 font-sans selection:bg-cyan-200">
//         <Navbar />

//         {/* Sticky header */}
//         <div className="sticky top-16 z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
//           <div className="container py-3 flex items-center justify-between">
//             <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
//               <Link to="/" className="hover:text-cyan-600">Home</Link> <span>/</span>
//               <Link to="/products" className="hover:text-cyan-600">Catalog</Link> <span>/</span>
//               <span className="text-cyan-700 font-bold">EMC2T-2 Tesla</span>
//             </div>
//             <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
//               <button className="px-5 py-2 rounded-xl font-bold text-white bg-cyan-600 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all pointer-events-auto">
//                 Request Quote
//               </button>
//             </motion.div>
//           </div>
//         </div>

//         <main className="pt-4">
//           {/* HERO SECTION – Compact, no white space */}
//           <section className="container pb-8 relative">
//             <div className="grid lg:grid-cols-2 gap-8 items-center">
//               <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
//                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-[10px] font-extrabold uppercase tracking-wider mb-3">
//                   {product.category}
//                 </div>
//                 <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-tight mb-3">
//                   {product.name}
//                 </h1>
//                 <p className="text-xl text-cyan-700 font-extrabold mb-3">{product.subtitle}</p>
//                 <p className="text-base text-slate-600 mb-4">{product.overview[0]}</p>
                
//                 {/* Key Spec Strip – Compact */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {product.keySpecs?.map((spec: any, i: number) => (
//                     <motion.span 
//                       key={i}
//                       whileHover={{ scale: 1.05, y: -2 }}
//                       className="flex items-center gap-1.5 bg-slate-100 rounded-full px-3 py-1.5 text-xs font-bold text-slate-700"
//                     >
//                       <Magnet className="w-3 h-3 text-cyan-500" /> {spec.label}
//                     </motion.span>
//                   ))}
//                 </div>

//                 <div className="flex flex-wrap gap-3">
//                   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 shadow-md hover:shadow-lg transition-all flex items-center gap-2">
//                     Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
//                   </motion.button>
//                   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-cyan-300 hover:bg-cyan-50 transition-all flex items-center gap-2">
//                     <Download className="w-4 h-4 text-cyan-500" /> Full Specs
//                   </motion.button>
//                 </div>
//               </motion.div>

//               {/* <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-blue-50 rounded-2xl blur-2xl opacity-50" />
//                 <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-4 flex items-center justify-center">
//                   <img src={product.heroImage} alt="EMC2T" className="w-full h-auto object-contain max-h-64" />
//                 </div>
//               </motion.div> */}

//               <motion.div 
//   initial={{ opacity: 0, scale: 0.95 }} 
//   animate={{ opacity: 1, scale: 1 }} 
//   transition={{ duration: 0.6 }} 
//   className="relative"
// >
//   <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-blue-50 rounded-2xl blur-2xl opacity-50" />
//   <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-3">
//     <div className="grid grid-cols-2 gap-2">
//       {/* Top Left - Main unit */}
//       <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 group/cell">
//         <img 
//           src="/images/emc2t-main.png" 
//           alt="EMC2T main unit"
//           className="w-full h-full object-cover group-hover/cell:scale-110 transition-transform duration-500"
//         />
//       </div>
//       {/* Top Right - Coils / side view */}
//       <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 group/cell">
//         <img 
//           src="/images/emc2t-coils.png" 
//           alt="Water-cooled coils"
//           className="w-full h-full object-cover group-hover/cell:scale-110 transition-transform duration-500"
//         />
//       </div>
//       {/* Bottom Left - Pole gap / optical access */}
//       <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 group/cell">
//         <img 
//           src="/images/emc2t-pole.png" 
//           alt="Adjustable pole gap"
//           className="w-full h-full object-cover group-hover/cell:scale-110 transition-transform duration-500"
//         />
//       </div>
//       {/* Bottom Right - Power supply */}
//       <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 group/cell">
//         <img 
//           src="/images/emc2t-psu.png" 
//           alt="4-quadrant power supply"
//           className="w-full h-full object-cover group-hover/cell:scale-110 transition-transform duration-500"
//         />
//       </div>
//     </div>
//   </div>
// </motion.div>
//             </div>
//           </section>

//           {/* Product Overview (Suitable For) */}
//           <section className="py-8 bg-white border-y border-slate-200">
//             <div className="container max-w-4xl mx-auto text-center">
//               <h2 className="font-display text-2xl font-extrabold text-slate-900 mb-3">{product.productOverview.title}</h2>
//               <p className="text-slate-600 mb-4">{product.productOverview.description}</p>
//               <div className="flex flex-wrap justify-center gap-2">
//                 {product.productOverview.suitableFor.map((item: string, i: number) => (
//                   <motion.span key={i} whileHover={{ scale: 1.05 }} className="bg-slate-100 rounded-full px-3 py-1.5 text-xs font-medium text-slate-700">{item}</motion.span>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* KEY FEATURES Grid */}
//           <section className="py-16 bg-slate-50">
//             <div className="container">
//               <div className="text-center mb-10">
//                 <span className="text-cyan-600 font-extrabold tracking-widest text-xs">Key Features</span>
//                 <h2 className="font-display text-3xl font-extrabold text-slate-900">Engineering Excellence</h2>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {product.keyFeatures?.map((feature: any, idx: number) => (
//                   <FeatureCard key={idx} feature={feature} index={idx} />
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* TECHNICAL SPECIFICATIONS – New pattern: two-column interactive cards */}
//           <section className="py-16 bg-white">
//             <div className="container">
//               <div className="text-center mb-10">
//                 <span className="text-cyan-600 font-extrabold tracking-widest text-xs">Precision Parameters</span>
//                 <h2 className="font-display text-3xl font-extrabold text-slate-900">Technical Specifications</h2>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
//                 {Object.entries(product.technicalSpecs.data).map(([param, spec], idx) => (
//                   <TechSpecCard key={idx} param={param} spec={String(spec)} idx={idx} />
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Magnetic Field Performance + Power Supply */}
//           <section className="py-16 bg-slate-50">
//             <div className="container max-w-6xl mx-auto">
//               <div className="grid md:grid-cols-2 gap-8">
//                 <MagneticFieldSection data={product.magneticFieldPerformance} />
//                 <PowerSupplySection data={product.powerSupply} />
//               </div>
//             </div>
//           </section>

//           {/* Cooling System */}
//           <section className="py-16 bg-white">
//             <div className="container max-w-5xl mx-auto">
//               <CoolingSystem data={product.coolingSystem} />
//             </div>
//           </section>

//           {/* Applications */}
//           <section className="py-16 bg-slate-50">
//             <div className="container max-w-5xl mx-auto">
//               <ApplicationsGrid apps={product.applications} />
//             </div>
//           </section>

//           {/* Safety + Mechanical Design */}
//           <section className="py-16 bg-white">
//             <div className="container max-w-6xl mx-auto">
//               <div className="grid md:grid-cols-2 gap-8">
//                 <SafetyCard data={product.safetyEngineering} />
//                 <MechanicalCard data={product.mechanicalDesign} />
//               </div>
//             </div>
//           </section>

//           {/* Product-specific Footer CTA */}
//           <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
//             <div className="container text-center max-w-4xl mx-auto">
//               <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">{product.footerCTA.title}</h2>
//               <p className="text-lg text-slate-600 mb-6">{product.footerCTA.description}</p>
//               <div className="flex flex-wrap justify-center gap-4">
//                 <motion.button whileHover={{ scale: 1.05 }} className="px-6 py-3 rounded-xl font-bold text-white bg-cyan-600 shadow-md hover:shadow-lg transition-all">Request Technical Proposal</motion.button>
//                 <motion.button whileHover={{ scale: 1.05 }} className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-cyan-300 hover:bg-cyan-50 transition-all">Download Datasheet</motion.button>
//                 <motion.button whileHover={{ scale: 1.05 }} className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-cyan-300 hover:bg-cyan-50 transition-all">Talk to Magnetics Engineering</motion.button>
//               </div>
//             </div>
//           </section>

//           {/* Global CTA Section */}
//           <CTASection />

//           {/* Bottom Navigation */}
//           <section className="border-t border-slate-200 bg-white py-6">
//             <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
//               <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors px-4 py-2 rounded-lg hover:bg-cyan-50">
//                 <ArrowLeft className="w-4 h-4" /> Back to Homepage
//               </Link>
//               <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors px-4 py-2 rounded-lg hover:bg-cyan-50">
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

// export default EMC2TMagnetPage;


import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { CTASection } from "@/components/CTASection"; 
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, ArrowUp, CheckCircle2, ChevronRight, ChevronDown, Plus, Minus,
  Activity, Zap, Shield, Camera, Cpu, Target, Settings, ThermometerSnowflake,
  Waves, Layers, Network, Lock, ShieldAlert, Code, ArrowLeft, ArrowRight, Move, Wind, Eye, Droplets, Orbit, ShieldCheck, Image
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

const iconMap: Record<string, any> = { ThermometerSnowflake, Activity, Zap, Shield, Camera, Move, Waves, Target, Cpu, Settings, Layers, Code, Eye, Droplets, ShieldCheck };

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
// ENHANCED CORE TECHNOLOGIES – Card Stack with Hover Effects
// ==========================================
const EnhancedCoreTechStack = ({ technologies }: { technologies: any[] }) => {
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

              {/* Dynamic Bottom Bar depending on type */}
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
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Integrated Architectures</p>
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
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Active Safety Monitoring</p>
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
                    Engineered for high-stability DC magnetic field generation, precision magneto-transport experiments, and advanced materials characterization in {app.toLowerCase()} workflows.
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
// const VisualReference = ({ gallery }: { gallery: any[] }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//       {gallery.map((img: any, idx: number) => (
//         <motion.div
//           key={idx}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: idx * 0.1 }}
//           whileHover={{ scale: 1.02, y: -6 }}
//           className="group bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
//         >
//           <div className="aspect-square overflow-hidden bg-slate-100">
//             <img src={img.url} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//           </div>
//           <div className="p-4 text-center">
//             <p className="text-sm font-bold text-[#0A2647]">{img.caption}</p>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

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
          className="group bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          {/* Changed aspect-square to a highly compliant full width flex height window using object-contain layout positioning */}
          <div className="w-full h-56 bg-slate-50 flex items-center justify-center overflow-hidden relative p-4 border-b border-slate-100">
            <img 
              src={img.url} 
              alt={img.caption} 
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="p-4 text-center mt-auto bg-white">
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
export default function EMC2TMagnetPage() {
  const product = productsData["emc2t-2-magnet"];
  const [activeSection, setActiveSection] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>("Magnetic & Electrical");
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
              {/* <div className="w-full max-w-[550px] aspect-square rounded-[2rem] bg-gradient-to-br from-[#0F294D] to-[#0A1B35] border border-slate-700 p-2 shadow-2xl relative overflow-hidden group"> */}
              {/* Removed forced aspect-square and set h-auto with a minimum layout height fallback for responsive scaling */}
<div className="w-full max-w-[550px] h-auto min-h-[350px] md:min-h-[420px] rounded-[2rem] bg-gradient-to-br from-[#0F294D] to-[#0A1B35] border border-slate-700 p-2 shadow-2xl relative overflow-hidden group">
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
                        {/* Swapped h-full to h-auto and object-cover to object-contain, padding bottom to clear text block labels safely */}
<img src={product.gallery[currentImage].url} alt={product.gallery[currentImage].caption} className="w-full h-auto max-h-[380px] object-contain opacity-85 mix-blend-screen p-4 pb-24 mx-auto" />
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

        {/* 01a. QUICK SPECIFICATION STRIP – All 6 Items */}
        <div className="relative z-30 -mt-8 container max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-[#0A2647] rounded-xl border border-blue-900/50 p-6 shadow-2xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
          >
            {product.quickSpecs.map((spec: any, i: number) => (
              <div key={i} className="text-center border-r last:border-none border-blue-800/50 px-2 group">
                <p className="text-lg font-display font-extrabold text-white group-hover:text-primary transition-colors">{spec.value}</p>
                <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider mt-1">{spec.label}</p>
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

        {/* 04. CORE TECHNOLOGIES – Enhanced Pattern */}
        <section ref={techRef} className="py-10 bg-white border-b border-border">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-[10px] mb-2 block">Technical Deep-Dive</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Core Technologies</h2>
            </div>
            
            <EnhancedCoreTechStack technologies={product.coreTechnologies} />
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

        {/* 08. FINAL TAGLINE
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