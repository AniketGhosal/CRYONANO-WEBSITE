// import { useState, useEffect, useRef } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { CTASection } from "@/components/CTASection";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
// import { 
//   ArrowLeft, ArrowRight, Download, CheckCircle2, ThermometerSnowflake, 
//   Activity, Zap, Shield, Camera, Move, Layers, Box, FlaskConical, 
//   Microscope, Wrench, GitBranch, Settings, MapPin, Eye, Droplet,
//   Gauge, Wind, ShieldCheck, Crosshair, Sparkles, Cpu, GraduationCap,
//   Award, TrendingUp, Clock, HardDrive, BatteryCharging
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { productsData } from "@/data/products";

// // ==========================================
// // 1. 3D TILT CARD (same as before)
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

// // ==========================================
// // 2. FEATURE CARD (with tilt, glow, color)
// // ==========================================
// const FeatureTiltCard = ({ feature, index }: { feature: any; index: number }) => {
//   const iconMap: Record<string, any> = { ThermometerSnowflake, Activity, Zap, Shield, Camera, Move };
//   const Icon = iconMap[feature.icon] || CheckCircle2;
//   const colorVariants = ["cyan", "blue", "purple", "amber", "emerald", "rose"];
//   const color = colorVariants[index % colorVariants.length];

//   return (
//     <TiltCard className="h-full">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: index * 0.1, duration: 0.5 }}
//         className={`group relative h-full bg-white rounded-2xl border-l-4 border-${color}-500 p-6 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden`}
//       >
//         <div className={`absolute inset-0 bg-gradient-to-br from-${color}-50/0 via-transparent to-${color}-50/0 group-hover:opacity-100 opacity-0 transition-opacity duration-500`} />
//         <div className="relative z-10">
//           <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${color}-100 to-${color}-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
//             <Icon className={`w-7 h-7 text-${color}-700`} />
//           </div>
//           <h3 className="text-xl font-extrabold text-slate-900 mb-2">{feature.title}</h3>
//           <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
//         </div>
//         <motion.div 
//           className={`absolute top-0 right-0 w-32 h-32 bg-${color}-400/10 rounded-full blur-2xl -z-0`}
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </motion.div>
//     </TiltCard>
//   );
// };

// // ==========================================
// // 3. TECHNICAL SPECIFICATIONS – HOVER GLOW CARDS
// // ==========================================
// const SpecGlowCard = ({ param, spec, idx }: { param: string; spec: string; idx: number }) => {
//   const colors = ["cyan", "blue", "purple", "amber", "emerald", "rose", "indigo", "teal", "orange"];
//   const color = colors[idx % colors.length];
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: idx * 0.05 }}
//       whileHover={{ y: -6, scale: 1.02 }}
//       className={`group relative bg-white rounded-xl border border-${color}-200 p-5 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-default`}
//     >
//       <div className={`absolute inset-0 bg-gradient-to-br from-${color}-50/0 via-transparent to-${color}-50/0 group-hover:opacity-100 opacity-0 transition-opacity`} />
//       <div className="relative z-10">
//         <span className={`text-[11px] font-extrabold text-${color}-600 uppercase tracking-wider`}>{param}</span>
//         <p className="text-base font-bold text-slate-800 mt-1 group-hover:text-cyan-700 transition-colors">{spec}</p>
//       </div>
//       <motion.div 
//         className={`absolute -bottom-8 -right-8 w-20 h-20 bg-${color}-300/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500`}
//       />
//     </motion.div>
//   );
// };

// // ==========================================
// // 4. ADVANCED THERMAL ARCHITECTURE – DYNAMIC SPLIT
// // ==========================================
// const ThermalArchitectureSection = ({ data }: { data: any }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const advantages = data.advantages;
  
//   return (
//     <div className="grid lg:grid-cols-2 gap-10 items-center">
//       <div className="space-y-6">
//         <h3 className="text-3xl font-extrabold text-slate-900">{data.title}</h3>
//         <p className="text-slate-600 leading-relaxed">{data.description}</p>
//         <div className="flex flex-wrap gap-3">
//           {advantages.map((adv: string, i: number) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               onMouseEnter={() => setActiveIndex(i)}
//               className={`px-4 py-2 rounded-full text-sm font-bold transition-all cursor-default ${activeIndex === i ? "bg-cyan-600 text-white shadow-lg" : "bg-cyan-100 text-cyan-800"}`}
//             >
//               {adv}
//             </motion.div>
//           ))}
//         </div>
//         <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100 shadow-inner">
//           <p className="text-slate-700 italic">{data.conclusion}</p>
//         </div>
//       </div>
//       <div className="relative flex justify-center">
//         <div className="w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-3xl opacity-30 absolute animate-pulse" />
//         <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-slate-200 w-full max-w-sm text-center">
//           <div className="grid grid-cols-2 gap-4">
//             {advantages.slice(0,4).map((adv: string, i: number) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.1, rotate: 2 }}
//                 className="flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-50"
//               >
//                 <CheckCircle2 className="w-6 h-6 text-cyan-500" />
//                 <span className="text-xs font-bold text-slate-600">{adv.split(" ")[0]}</span>
//               </motion.div>
//             ))}
//           </div>
//           <div className="mt-6 text-sm text-slate-500">Fast thermal response • High conductivity</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==========================================
// // 5. MAIN PAGE
// // ==========================================
// const CryogenicNanoStagePage = () => {
//   const product = productsData["nano-stage"];
//   const [currentImg, setCurrentImg] = useState(0);
//   const images = product ? [product.heroImage, ...(product.gallery || [])].filter(Boolean) : [];

//   useEffect(() => {
//     if (images.length <= 1) return;
//     const timer = setInterval(() => setCurrentImg((prev) => (prev + 1) % images.length), 5000);
//     return () => clearInterval(timer);
//   }, [images.length]);

//   if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/40 text-slate-800 font-sans selection:bg-cyan-200">
//         <Navbar />

//         {/* Sticky header */}
//         <div className="sticky top-16 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
//           <div className="container py-3 flex items-center justify-between">
//             <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
//               <Link to="/" className="hover:text-cyan-600 transition-colors">Home</Link>
//               <span>/</span>
//               <Link to="/products" className="hover:text-cyan-600 transition-colors">Catalog</Link>
//               <span>/</span>
//               <span className="text-cyan-700 font-extrabold">{product.name}</span>
//             </div>
//             <button className="px-5 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-500 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
//               Request Quote
//             </button>
//           </div>
//         </div>

//         <main>
//           {/* HERO SECTION (vibrant) */}
//           <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-r from-cyan-50/30 via-white to-blue-50/30">
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-200/20 via-transparent to-transparent" />
//             <div className="container relative z-10">
//               <div className="grid lg:grid-cols-2 gap-12 items-center">
//                 <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//                   <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 text-xs font-extrabold uppercase tracking-wider mb-6 shadow-sm">
//                     <Sparkles className="w-3.5 h-3.5" /> Next‑Gen Thermal Platform
//                   </div>
//                   <h1 className="font-display text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
//                     {product.name}
//                   </h1>
//                   <p className="text-2xl text-cyan-600 font-medium mb-8">{product.subtitle}</p>
//                   <div className="space-y-5 mb-10">
//                     {product.overview?.map((p: string, i: number) => (
//                       <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i*0.1 }} className="text-lg text-slate-600 leading-relaxed">{p}</motion.p>
//                     ))}
//                   </div>
//                   <div className="flex flex-wrap gap-4">
//                     <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
//                       Get a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
//                     </motion.button>
//                     <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-cyan-300 hover:bg-cyan-50 transition-all flex items-center gap-2">
//                       <Download className="w-5 h-5 text-cyan-500" /> Full Specs
//                     </motion.button>
//                   </div>
//                 </motion.div>

//                 <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
//                   <div className="absolute -inset-4 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-3xl blur-2xl opacity-30" />
//                   <div className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden aspect-square">
//                     <AnimatePresence mode="wait">
//                       <motion.img key={currentImg} src={images[currentImg]} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.7 }} className="w-full h-full object-cover" />
//                     </AnimatePresence>
//                     <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
//                       {images.map((_, idx) => (
//                         <button key={idx} onClick={() => setCurrentImg(idx)} className={`w-2 h-2 rounded-full transition-all ${idx === currentImg ? "bg-cyan-500 w-6" : "bg-white/70 hover:bg-white"}`} />
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </section>

//           {/* KEY FEATURES - 3D Tilt Cards with multiple colors */}
//           <section className="py-24 bg-white">
//             <div className="container">
//               <div className="text-center max-w-3xl mx-auto mb-16">
//                 <span className="text-cyan-600 font-extrabold tracking-widest text-sm">Engineering Excellence</span>
//                 <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2">Key Features</h2>
//                 <p className="text-lg text-slate-600 mt-4">Precision‑crafted for cryogenic and high‑temperature microscopy</p>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {product.keyFeatures?.map((feature: any, idx: number) => (
//                   <FeatureTiltCard key={idx} feature={feature} index={idx} />
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* TECHNICAL SPECIFICATIONS – Interactive glowing cards */}
//           <section className="py-24 bg-gradient-to-b from-slate-100 to-white">
//             <div className="container">
//               <div className="text-center max-w-3xl mx-auto mb-16">
//                 <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900">Technical Specifications</h2>
//                 <p className="text-lg text-slate-600 mt-3">Precision parameters for demanding experiments</p>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//                 {product.technicalSpecs?.map((item: any, idx: number) => (
//                   <SpecGlowCard key={idx} param={item.param} spec={item.spec} idx={idx} />
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* ADVANCED THERMAL ARCHITECTURE – redesigned dynamic split */}
//           <section className="py-20 bg-white">
//             <div className="container">
//               <ThermalArchitectureSection data={product.thermalArchitecture} />
//             </div>
//           </section>

//           {/* ATMOSPHERE & VACUUM CONTROL + OPTICAL DESIGN + TEMP SENSING (3 colorful columns) */}
//           <section className="py-20 bg-gradient-to-r from-cyan-50/40 via-blue-50/20 to-purple-50/40">
//             <div className="container">
//               <div className="grid lg:grid-cols-3 gap-8">
//                 {/* Atmosphere */}
//                 <motion.div whileHover={{ y: -5 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-200 shadow-md hover:shadow-xl transition-all">
//                   <Wind className="w-10 h-10 text-cyan-600 mb-4" />
//                   <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{product.atmosphereVacuumControl.title}</h3>
//                   <p className="text-slate-600 text-sm mb-4">{product.atmosphereVacuumControl.description}</p>
//                   <ul className="space-y-2">
//                     {product.atmosphereVacuumControl.features.map((f: string, i: number) => (
//                       <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-cyan-500" />{f}</li>
//                     ))}
//                   </ul>
//                   <p className="text-xs text-slate-500 mt-4 italic">{product.atmosphereVacuumControl.note}</p>
//                 </motion.div>

//                 {/* Optical Design */}
//                 <motion.div whileHover={{ y: -5 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 shadow-md hover:shadow-xl transition-all">
//                   <Eye className="w-10 h-10 text-blue-600 mb-4" />
//                   <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{product.opticalDesign.title}</h3>
//                   <p className="font-bold text-blue-700 text-sm mb-2">{product.opticalDesign.subtitle}</p>
//                   <p className="text-slate-600 text-sm mb-3">{product.opticalDesign.description}</p>
//                   <ul className="space-y-2">
//                     {product.opticalDesign.benefits.map((b: string, i: number) => (
//                       <li key={i} className="flex items-center gap-2 text-sm"><ShieldCheck className="w-4 h-4 text-blue-500" />{b}</li>
//                     ))}
//                   </ul>
//                   <p className="text-xs text-slate-500 mt-4">{product.opticalDesign.conclusion}</p>
//                 </motion.div>

//                 {/* Temp Sensing */}
//                 <motion.div whileHover={{ y: -5 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 shadow-md hover:shadow-xl transition-all">
//                   <ThermometerSnowflake className="w-10 h-10 text-purple-600 mb-4" />
//                   <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{product.precisionTemperatureSensing.title}</h3>
//                   <p className="font-bold text-purple-700 text-sm mb-2">{product.precisionTemperatureSensing.subtitle}</p>
//                   <ul className="space-y-2">
//                     {product.precisionTemperatureSensing.features.map((f: string, i: number) => (
//                       <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-purple-500" />{f}</li>
//                     ))}
//                   </ul>
//                   <p className="text-xs text-slate-500 mt-4">{product.precisionTemperatureSensing.conclusion}</p>
//                 </motion.div>
//               </div>
//             </div>
//           </section>

//           {/* MICROSCOPY COMPATIBILITY (colorful pills) */}
//           <section className="py-20 bg-white">
//             <div className="container">
//               <div className="text-center max-w-3xl mx-auto mb-12">
//                 <h2 className="font-display text-4xl font-extrabold text-slate-900">Microscopy Compatibility</h2>
//                 <p className="text-lg text-slate-600">Seamless integration with leading imaging platforms</p>
//               </div>
//               <div className="flex flex-wrap justify-center gap-3">
//                 {product.microscopyCompatibility.map((tech: string, i: number) => {
//                   const colors = ["cyan", "blue", "purple", "amber", "emerald", "rose", "indigo"];
//                   const col = colors[i % colors.length];
//                   return (
//                     <motion.div key={i} whileHover={{ scale: 1.05, y: -2 }} className={`bg-gradient-to-r from-${col}-50 to-${col}-100 rounded-full px-5 py-2.5 shadow-sm border border-${col}-200 font-medium text-${col}-800 flex items-center gap-2`}>
//                       <Microscope className="w-4 h-4" /> {tech}
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </section>

//           {/* HIGH TEMPERATURE OPERATION + APPLICATIONS (two columns with strong colors) */}
//           <section className="py-20 bg-gradient-to-r from-amber-50/40 via-orange-50/20 to-rose-50/40">
//             <div className="container">
//               <div className="grid lg:grid-cols-2 gap-10">
//                 <motion.div whileHover={{ scale: 1.01 }} className="bg-white rounded-2xl p-8 border-l-8 border-amber-500 shadow-md hover:shadow-xl transition-all">
//                   <h3 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2"><Zap className="w-6 h-6 text-amber-500" /> {product.highTempOperation.title}</h3>
//                   <p className="text-slate-700 mb-4">{product.highTempOperation.description}</p>
//                   <ul className="space-y-2">
//                     {product.highTempOperation.benefits.map((b: string, i: number) => (
//                       <li key={i} className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />{b}</li>
//                     ))}
//                   </ul>
//                 </motion.div>
//                 <motion.div whileHover={{ scale: 1.01 }} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200 shadow-md">
//                   <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Scientific Research Applications</h3>
//                   <div className="grid grid-cols-2 gap-3">
//                     {product.applications.map((app: string, i: number) => (
//                       <div key={i} className="flex items-center gap-2 text-sm bg-white rounded-lg p-2 shadow-sm hover:shadow transition-all"><div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-700">{i+1}</div><span>{app}</span></div>
//                     ))}
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </section>

//           {/* DESIGN HIGHLIGHTS + OPTIONAL + COMPATIBILITY (3 columns with vivid colors) */}
//           <section className="py-20 bg-slate-50">
//             <div className="container">
//               <div className="grid md:grid-cols-3 gap-8">
//                 <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-cyan-500 hover:shadow-xl transition-all">
//                   <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2"><HardDrive className="w-5 h-5 text-cyan-500" /> Mechanical & Thermal Highlights</h3>
//                   <ul className="space-y-2">
//                     {product.mechanicalDesignHighlights.map((h: string, i: number) => (
//                       <li key={i} className="flex gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />{h}</li>
//                     ))}
//                   </ul>
//                 </motion.div>
//                 <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-blue-500 hover:shadow-xl transition-all">
//                   <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2"><Settings className="w-5 h-5 text-blue-500" /> Optional Configurations</h3>
//                   <ul className="space-y-2">
//                     {product.optionalConfigurations.map((opt: string, i: number) => (
//                       <li key={i} className="flex gap-2 text-sm"><Settings className="w-4 h-4 text-blue-500 shrink-0" />{opt}</li>
//                     ))}
//                   </ul>
//                 </motion.div>
//                 <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-purple-500 hover:shadow-xl transition-all">
//                   <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2"><Layers className="w-5 h-5 text-purple-500" /> System Compatibility</h3>
//                   <ul className="space-y-2">
//                     {product.systemCompatibility.map((sys: string, i: number) => (
//                       <li key={i} className="flex gap-2 text-sm"><Layers className="w-4 h-4 text-purple-500 shrink-0" />{sys}</li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               </div>
//             </div>
//           </section>

//           {/* FINAL TAGLINE with subtle animation */}
//           <section className="py-16 bg-white border-y border-slate-200">
//             <div className="container text-center max-w-4xl mx-auto">
//               <motion.p 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="text-xl text-slate-700 font-medium leading-relaxed"
//               >
//                 The Cryogenic / High-Temperature Microscopy Stage combines precision thermal engineering, advanced optical accessibility, and environmental control into a compact platform optimized for modern scientific research and analytical instrumentation.
//               </motion.p>
//             </div>
//           </section>

//           {/* GLOBAL CTA */}
//           <CTASection />

//           {/* BOTTOM NAV */}
//           <section className="border-t border-slate-200 bg-white py-6">
//             <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
//               <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors px-4 py-2 rounded-lg hover:bg-cyan-50">
//                 <ArrowLeft className="w-4 h-4" /> Back to Home
//               </Link>
//               <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors px-4 py-2 rounded-lg hover:bg-cyan-50">
//                 Return to Catalog <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>
//           </section>
//         </main>

//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

// export default CryogenicNanoStagePage;


import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { CTASection } from "@/components/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, ArrowUp, CheckCircle2, ChevronRight, ChevronDown, Plus, Minus,
  Activity, Zap, Shield, Camera, Cpu, Target, Settings, ThermometerSnowflake,
  Waves, Layers, Network, Lock, ShieldAlert, Code, ArrowLeft, ArrowRight, Move, Wind, Eye, Image
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// Icon mapping dictionary
const iconMap: Record<string, any> = { 
  ThermometerSnowflake, Activity, Zap, Shield, Camera, Move, Waves, Target, Cpu, Settings, Layers 
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

export default function CryogenicNanoStagePage() {
  const product = productsData["nano-stage"];
  const [activeSection, setActiveSection] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>("Thermal & Cooling");
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

            {/* Auto-Playing Carousel Image Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center w-full"
            >
              {/* <div className="w-full max-w-[550px] aspect-square rounded-[2rem] bg-gradient-to-br from-[#0F294D] to-[#0A1B35] border border-slate-700 p-2 shadow-2xl relative overflow-hidden group"> */}
              {/* Removed aspect-square, added h-auto and a responsive min-height boundary for structural layout safety */}
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
                        {/* Changed h-full to h-auto and object-cover to object-contain, padding bottom to accommodate the caption background layer safely */}
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

        {/* 02. OVERVIEW */}
        <section ref={overviewRef} className="py-16 bg-white border-b border-border">
          <div className="container max-w-5xl text-center">
            <motion.span 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block"
            >
              System Profile
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647] mb-6"
            >
              {product.overview.title}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="space-y-4 text-slate-600 font-medium leading-relaxed mb-10 max-w-3xl mx-auto"
            >
              {product.overview.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4">
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

        {/* 04. CORE TECHNOLOGIES */}
        <section ref={techRef} className="py-16 bg-white border-b border-border">
          <div className="container max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">Technical Deep-Dive</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Core Technologies</h2>
            </div>
            
            <div className="space-y-16">
              {product.coreTechnologies.map((tech: any, i: number) => (
                <div key={i} className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: i % 2 === 1 ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    className={`md:col-span-6 ${i % 2 === 1 ? 'md:col-start-7 md:row-start-1' : 'md:col-start-1'}`}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-100 text-[#0A2647] text-[10px] font-bold uppercase tracking-wider mb-4 border border-border shadow-sm">
                      {tech.type === 'hardware' ? <Waves className="w-3.5 h-3.5 text-primary" /> : tech.type === 'software' ? <Code className="w-3.5 h-3.5 text-primary" /> : <Lock className="w-3.5 h-3.5 text-primary" />} {tech.subtitle}
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#0A2647] mb-4">{tech.title}</h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">{tech.description}</p>
                    <ul className="space-y-3">
                      {tech.bullets.map((b: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-bold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                    className={`md:col-span-5 ${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-8'}`}
                  >
                    <div className="bg-slate-50 border border-border p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] relative overflow-hidden group hover:border-primary/50 transition-colors">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                      
                      {tech.type === 'hardware' && (
                        <div className="grid grid-cols-2 gap-4 relative z-10">
                          {tech.highlights.map((h: any, idx: number) => (
                            <div key={idx} className="bg-white border border-border p-5 rounded-xl shadow-sm hover:border-primary hover:shadow-md transition-all">
                              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">{h.label}</p>
                              <p className="text-sm font-extrabold text-[#0A2647]">{h.val}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {tech.type === 'software' && (
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Digital Subsystems</p>
                            <Settings className="w-4 h-4 text-slate-400" />
                          </div>
                          <div className="flex flex-col gap-3">
                            {tech.platforms.map((p: string, idx: number) => (
                              <div key={idx} className="px-4 py-3 bg-[#0A2647] hover:bg-primary text-white rounded-lg text-xs font-bold tracking-wide transition-colors cursor-default flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" /> {p}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {tech.type === 'protection' && (
                        <div className="relative z-10">
                           <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
                              <ShieldAlert className="w-4 h-4 text-primary" />
                              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Environmental Control</p>
                           </div>
                          <div className="flex flex-col gap-3">
                            {tech.protects.map((p: string, idx: number) => (
                              <div key={idx} className="px-4 py-2.5 bg-red-50 text-[#0A2647] border border-red-100 rounded-lg text-xs font-bold flex items-center gap-3 hover:bg-red-100 transition-colors">
                                <Wind className="w-3.5 h-3.5 text-primary" /> {p}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05. TECHNICAL SPECIFICATIONS */}
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

        

        {/* 07. SYSTEM INTEGRATION */}
        <section className="py-16 bg-slate-50/30 border-b border-border">
           <div className="container max-w-6xl">
             <div className="text-center max-w-3xl mx-auto mb-12">
               <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">Extensible Architecture</span>
               <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">System Integration</h2>
             </div>
             
             <div className="grid md:grid-cols-3 gap-6">
                <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-lg font-bold text-[#0A2647] mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" /> Mechanical Highlights
                  </h3>
                  <ul className="space-y-2">
                    {product.mechanicalHighlights.map((h: string, i: number) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />{h}</li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-lg font-bold text-[#0A2647] mb-4 flex items-center gap-2">
                    <Settings className="w-4 h-4 text-primary" /> Optional Configurations
                  </h3>
                  <ul className="space-y-2">
                    {product.optionalConfigurations.map((opt: string, i: number) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-700 font-medium"><Settings className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />{opt}</li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-lg font-bold text-[#0A2647] mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-primary" /> System Compatibility
                  </h3>
                  <ul className="space-y-2">
                    {product.systemCompatibility.map((sys: string, i: number) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-700 font-medium"><Layers className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />{sys}</li>
                    ))}
                  </ul>
                </motion.div>
             </div>
           </div>
        </section>

        {/* 08. RESEARCH APPLICATIONS */}
        <section ref={appsRef} className="py-16 bg-white border-b border-border">
          <div className="container max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">Deployment Scenarios</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Scientific Research Applications</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.applications.map((app: string, i: number) => {
                const isExpanded = expandedApp === i;
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    key={i} 
                    onClick={() => setExpandedApp(isExpanded ? null : i)}
                    className={`bg-white p-5 rounded-xl border transition-all duration-300 cursor-pointer ${isExpanded ? 'border-primary shadow-md' : 'border-border shadow-sm hover:border-slate-400'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isExpanded ? 'bg-primary text-white' : 'bg-slate-100 text-primary'}`}>
                        {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                      <span className="font-bold text-[#0A2647] text-sm leading-tight">{app}</span>
                    </div>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-slate-600 font-medium pl-12">
                            Optimized for {app.toLowerCase()}, delivering exceptional thermal stability and analytical precision for advanced scientific research.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 09. FINAL TAGLINE – Designed for Advanced Scientific Environments (only heading, no extra content) */}
        {product.cta?.tagline && (
          <section className="py-12 bg-white border-b border-border">
            <div className="container text-center max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647] tracking-tight"
              >
                {product.cta.tagline}
              </motion.h2>
            </div>
          </section>
        )}


        {/* 06. VISUAL REFERENCE - SYSTEM IMAGERY */}
        <section className="py-16 bg-white border-b border-border">
          <div className="container max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">System Imagery</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Visual Reference</h2>
            </div>
            {product.gallery && product.gallery.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {product.gallery.map((img: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, y: -6 }}
                    className="group bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* <div className="aspect-square overflow-hidden bg-slate-100">
                      <img src={img.url} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div> */}
                    {/* Replaced fixed square ratio bounds with an absolute flexible image frame using object-contain alignment */}
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

        {/* 10. GLOBAL CTA SECTION */}
        <CTASection />

        {/* 11. BOTTOM NAVIGATION */}
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