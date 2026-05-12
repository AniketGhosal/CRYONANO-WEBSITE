// import { useEffect, useRef, useState, useCallback } from 'react';
// import { motion, AnimatePresence, Variants } from 'framer-motion';
// import { 
//   Target, Activity, ThermometerSnowflake, Maximize, Lightbulb, 
//   Microscope, Layers, Settings, Zap, Network, Box, Cable, 
//   MonitorPlay, FlaskConical, Sparkles, Leaf, Minimize, 
//   ShieldCheck, CheckCircle2, ChevronRight
// } from 'lucide-react';
// import { Navbar } from '../components/Navbar'; 
// import { Footer } from '../components/Footer'; 

// // --- ANIMATION VARIANTS ---
// // const staggerContainer = {
// //   hidden: { opacity: 0 },
// //   show: { opacity: 1, transition: { staggerChildren: 0.15 } }
// // };
// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 30 },
// //   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// // };
// // --- ANIMATION VARIANTS ---
// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.15 } }
// };
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// };

// export function ArchivedProductsPage() {
//   const [activeSoftwareTab, setActiveSoftwareTab] = useState(0);

//   // Autonomous Software Tabs logic
//   const softwareTabs = [
//     { title: "TABBED Control", content: "The TABBED software provided with the system communicates with the PPMS MultiVu software for controlling its Temperature and Magnetic Field while measuring various parameters with the impedance analyzer in a larger phase space. Provides maximum automation for complex measurements." },
//     { title: "Measurement Modes", content: "Measurements such as ε (B,T,f) or Z, φ (B,T,f) can be quickly measured using the TABBED program making it easy to use with live graphical display." },
//     { title: "Data Export", content: "The raw data files can later be processed seamlessly in Origin, MATLAB, and other standard analysis software suites." }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSoftwareTab((prev) => (prev + 1) % softwareTabs.length);
//     }, 5000); // Auto-cycles every 5 seconds
//     return () => clearInterval(timer);
//   }, [softwareTabs.length]);

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans flex flex-col relative overflow-hidden">
      
//       {/* Global Navbar */}
//       <div className="relative z-50">
//         <Navbar />
//       </div>

//       {/* ========================================== */}
//       {/* HERO SECTION (Animated Flowing Background) */}
//       {/* ========================================== */}
//       <section className="relative pt-32 pb-24 px-6 text-center z-10 overflow-hidden bg-white border-b border-slate-100">
//         {/* Animated Background blobs acting as a continuous GIF */}
//         <motion.div 
//           animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }} 
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute -top-[20%] -left-[10%] w-[60%] h-[150%] bg-gradient-to-br from-blue-50 to-cyan-50/30 rounded-full blur-3xl pointer-events-none"
//         />
//         <motion.div 
//           animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }} 
//           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//           className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[150%] bg-gradient-to-tl from-purple-50 to-pink-50/30 rounded-full blur-3xl pointer-events-none"
//         />

//         <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-10 max-w-4xl mx-auto">
//           {/* <motion.div variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
//             Archived <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Instruments</span>
//           </motion.div> */}


//           <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
//             Archived <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Instruments</span>
//           </motion.h1>
//           {/* <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 leading-snug">
//             Magnetodielectric/ Pyroelectric Current Measurement Option for QD PPMS
//           </motion.h2> */}
//           <motion.p variants={fadeInUp} className="text-lg text-slate-500 leading-relaxed font-medium">
//             Legacy CRYONANO systems that contributed to breakthroughs in quantum and cryogenic research. Explore the technical DNA of our foundational engineering.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* ========================================== */}
//       {/* PRODUCT 1: MAGNETODIELECTRIC               */}
//       {/* ========================================== */}
//       <section className="relative z-10 pt-20 pb-16 bg-gradient-to-b from-blue-50/50 to-white">
//         <div className="max-w-7xl mx-auto px-6">
          
//           {/* Overlapping Intro Layout with Integrated Theory */}
//           <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
//             <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5">
//               <span className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-blue-100/80 text-blue-700 rounded-full shadow-sm">
//                 Archived Module
//               </span>
//               <h3 className="text-4xl font-extrabold text-slate-900 mt-6 mb-6 leading-tight">
//                 Magnetodielectric/ Pyroelectric Current Measurement Option for QD PPMS
//               </h3>
//               <div className="prose text-slate-600 font-medium leading-relaxed border-l-4 border-blue-300 pl-6 mb-8">
//                 <p>Using the versatile Quantum Design PPMS, CRYONANO's automated Magneto-dielectric Measurement Module Option enhances the wide measurement capabilities of the PPMS to allow popular AC measurements such as dielectric constant, AC conductivity, Capacitance, Phase information, and Nyquist Plots.</p>
//                 <p>The setup consists of an insert with low noise, guarded electrical wiring connected to an inbuilt breakout box which in turn is connected to an electronic instrument panel. The software controls the given experimental scheme seamlessly.</p>
//               </div>
//             </motion.div>
            
//             {/* 3-Image Overlapping Animated Gallery */}
//             <div className="lg:col-span-7 relative h-[450px] w-full flex items-center justify-center">
//               <motion.img 
//                 initial={{ opacity: 0, y: 50, rotate: -5 }} whileInView={{ opacity: 1, y: 0, rotate: -5 }} whileHover={{ scale: 1.05, zIndex: 30, rotate: 0 }} transition={{ duration: 0.6 }}
//                 src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" alt="PPMS System 1" 
//                 className="absolute left-0 top-10 w-[55%] h-[60%] object-cover rounded-3xl shadow-xl border-4 border-white z-10 cursor-pointer"
//               />
//               <motion.img 
//                 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05, zIndex: 30 }} transition={{ duration: 0.6, delay: 0.1 }}
//                 src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600" alt="Cryostat Panel" 
//                 className="absolute right-10 top-0 w-[50%] h-[65%] object-cover rounded-3xl shadow-2xl border-4 border-white z-20 cursor-pointer"
//               />
//               <motion.img 
//                 initial={{ opacity: 0, x: 50, rotate: 5 }} whileInView={{ opacity: 1, x: 0, rotate: 5 }} whileHover={{ scale: 1.05, zIndex: 30, rotate: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
//                 src="https://images.unsplash.com/photo-1635048424329-a9bfb10440f4?q=80&w=600" alt="Control Software" 
//                 className="absolute right-0 bottom-10 w-[45%] h-[50%] object-cover rounded-3xl shadow-xl border-4 border-white z-10 cursor-pointer"
//               />
//             </div>
//           </div>

//           {/* Key Features (Product Specific) */}
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-24">
//             <motion.h3 variants={fadeInUp} className="text-3xl font-extrabold text-slate-900 mb-10 flex items-center gap-4 justify-center">
//               <span className="w-12 h-1 bg-blue-500 rounded-full" /> Magnetodielectric System Key Features <span className="w-12 h-1 bg-blue-500 rounded-full" />
//             </motion.h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[
//                 { icon: Target, title: 'High Precision', desc: '1 mΩ to 200 MΩ, ΔZ = ±0.05%, Δθ = ±0.03%' },
//                 { icon: Activity, title: 'Wide Frequency', desc: '4 Hz to 2 MHz, 10 mHz resolution, 1 ms speed' },
//                 { icon: ThermometerSnowflake, title: 'Cryo Optimized', desc: 'Cable length compensation, low-noise wiring' },
//                 { icon: Maximize, title: 'Flexible Config', desc: 'In-plane & out-of-plane, orientation compatible' }
//               ].map((f, i) => (
//                 <motion.div key={i} variants={fadeInUp} className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                   <div className="relative z-10">
//                     <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
//                       <f.icon className="w-7 h-7" />
//                     </div>
//                     <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{f.title}</h4>
//                     <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Autonomous Animated Architecture Flow */}
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24 relative bg-white rounded-[3rem] p-12 shadow-lg border border-slate-100 text-center overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />
//             <h3 className="text-2xl font-bold text-slate-800 mb-12 flex items-center justify-center gap-3 relative z-10">
//               <Network className="w-8 h-8 text-cyan-500" /> Autonomous Signal Architecture
//             </h3>
//             <div className="flex flex-col md:flex-row justify-center items-center gap-4 relative z-10">
//               {['Insert', 'Breakout Box', 'Instrument Rack', 'Control Software', 'PPMS'].map((step, i) => (
//                 <div key={i} className="flex flex-col md:flex-row items-center gap-4 group">
//                   <motion.div 
//                     whileHover={{ scale: 1.1, y: -5 }} 
//                     className="px-6 py-4 bg-white rounded-2xl shadow-md border-b-4 border-cyan-400 text-slate-700 font-bold hover:bg-cyan-50 hover:text-cyan-900 transition-all cursor-default"
//                   >
//                     {step}
//                   </motion.div>
//                   {i < 4 && (
//                     <motion.div 
//                       animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }} 
//                       transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
//                       className="text-cyan-300 hidden md:block"
//                     >
//                       <ChevronRight className="w-8 h-8" />
//                     </motion.div>
//                   )}
//                   {i < 4 && <ChevronRight className="w-6 h-6 text-cyan-300 md:hidden rotate-90 my-2" />}
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Interactive Inclusions & Probe (Hover Cards) */}
//           <div className="grid md:grid-cols-2 gap-10 mb-24">
//             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="group p-10 bg-white rounded-[2rem] border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden">
//               <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
//               <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
//                 <Box className="w-8 h-8 text-blue-500" /> What's Included
//               </h4>
//               <ul className="space-y-4 text-slate-600 font-medium">
//                 {['Custom measurement insert with BNC', 'Cryogenic coaxial wiring', 'Integrated breakout box', 'Impedance analyzer + interface', 'Portable 19-inch rack', 'Automation software'].map((item, idx) => (
//                   <li key={idx} className="flex items-center gap-3 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: `${idx * 50}ms` }}>
//                     <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {item}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="group p-10 bg-gradient-to-br from-slate-900 to-blue-950 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 text-white">
//               <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
//                 <Cable className="w-8 h-8 text-cyan-400" /> Multi-Function Probe
//               </h4>
//               <p className="text-slate-300 leading-relaxed text-lg mb-6">
//                 The setup comes with a multi-function probe option which allows the use of PPMS just as a cryostat with a magnetic field while making the electrical measurements from outside using a separate computer. 
//               </p>
//               <div className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm text-sm text-cyan-100">
//                 Direct access to sample chamber puck connector. Signal accessed from top goes into instrument rack via LAN.
//               </div>
//             </motion.div>
//           </div>

//           {/* Autonomous Software Auto-Cycling Layout */}
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-xl flex flex-col lg:flex-row gap-12">
//             <div className="lg:w-1/3">
//               <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
//                 <MonitorPlay className="w-8 h-8 text-blue-600" /> Software Control
//               </h3>
//               <div className="flex flex-col gap-4">
//                 {softwareTabs.map((tab, idx) => (
//                   <button 
//                     key={idx} onClick={() => setActiveSoftwareTab(idx)}
//                     className={`text-left px-6 py-4 rounded-2xl transition-all font-bold ${
//                       activeSoftwareTab === idx 
//                       ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 translate-x-2' 
//                       : 'bg-slate-50 text-slate-500 hover:bg-blue-50 hover:text-blue-700'
//                     }`}
//                   >
//                     {tab.title}
//                     {activeSoftwareTab === idx && (
//                       <motion.div 
//                         initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }}
//                         className="h-1 bg-white/30 mt-3 rounded-full"
//                       />
//                     )}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="lg:w-2/3 bg-blue-50/50 rounded-3xl p-10 flex items-center border border-blue-100">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeSoftwareTab}
//                   initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
//                 >
//                   <h4 className="text-2xl font-bold text-blue-900 mb-4">{softwareTabs[activeSoftwareTab].title}</h4>
//                   <p className="text-slate-600 text-xl leading-relaxed">{softwareTabs[activeSoftwareTab].content}</p>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </motion.div>

//         </div>
//       </section>

//       {/* ========================================== */}
//       {/* PRODUCT 2: UV MASK ALIGNER (Innovative Layout) */}
//       {/* ========================================== */}
//       <section className="relative z-10 py-24 bg-gradient-to-b from-white to-purple-50/40 border-t border-slate-200">
//         <div className="max-w-7xl mx-auto px-6">
          
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
//             <span className="px-6 py-2 text-xs font-bold tracking-widest uppercase bg-purple-100/80 text-purple-700 rounded-full shadow-sm">
//               Archived Lithography System
//             </span>
//             <h2 className="text-5xl font-extrabold mt-8 mb-6 bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
//               UV Mask Aligner — Model CN500
//             </h2>
//           </motion.div>

//           {/* Innovative Split Layout */}
//           <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
//             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[500px] rounded-[3rem] overflow-hidden group shadow-2xl">
//               <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1000" alt="UV Lithography" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
//               <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent" />
//               <div className="absolute bottom-10 left-10 right-10">
//                 <h3 className="text-3xl font-bold text-white mb-2">High-Precision Nanofabrication</h3>
//                 <p className="text-purple-200 font-medium">Compact UV Lithography for Research & Prototyping</p>
//               </div>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
//               <div className="prose text-slate-600 text-lg font-medium leading-relaxed">
//                 <p className="mb-6">Photolithography and mask aligners are part of a process called nanofabrication. It is a process by which a series of thin layers of different materials can be patterned to a desired shape. Lithographic techniques have played a central role in the advancement of semiconductor process technologies.</p>
//                 <p>MODEL CN500 MASK ALIGNER developed by CRYONANO is a state of the art system developed with highest quality at extremely low cost. It is completely UV LED based with automatic vacuum and Mask holding controls.</p>
//               </div>
//               <div className="mt-10 flex gap-6">
//                 <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
//                   <span className="block text-3xl font-black text-purple-600 mb-1">1 µm</span>
//                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Resolution</span>
//                 </div>
//                 <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
//                   <span className="block text-3xl font-black text-purple-600 mb-1">100 mm</span>
//                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Max Wafer Size</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Timeline / Vertical Flow Features */}
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
//             <h3 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">System Features & Parameters</h3>
//             <div className="space-y-6 max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-purple-200 before:to-transparent">
              
//               {[
//                 { icon: Lightbulb, title: "Advanced UV-LED Optics", desc: "No complex, high voltage power supply. Almost monochromatic radiation ensures uniformity in deposition." },
//                 { icon: Zap, title: "Instant Operation", desc: "No waiting time after switching on, operation can be done immediately. Very fast response time." },
//                 { icon: Microscope, title: "High Precision Alignment", desc: "High precision X-Y-Z-θ aligner. High resolution microscope (Eye piece: 10x | Objective: 4x, 10x & 20x)." },
//                 { icon: Settings, title: "Automation Control", desc: "Permits precise, accurate electronic control on the exposure time and power." }
//               ].map((feature, idx) => (
//                 <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
//                   <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-purple-100 text-purple-600 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
//                     <feature.icon className="w-6 h-6" />
//                   </div>
//                   <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] p-6 bg-white rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
//                     <h4 className="font-bold text-slate-900 text-lg mb-2">{feature.title}</h4>
//                     <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
//                   </div>
//                 </motion.div>
//               ))}

//             </div>
//           </motion.div>

//           {/* Metric Driven Advantages (Gradient text, animated counters implied visually) */}
//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-slate-900 text-white rounded-[2rem] p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500">
//               <span className="block text-6xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">~4×</span>
//               <h4 className="text-xl font-bold mb-2">Lower Cost System</h4>
//               <p className="text-slate-400 text-sm">Price is almost one-fourth compared to traditional Hg-based systems.</p>
//             </motion.div>
            
//             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-slate-900 text-white rounded-[2rem] p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500">
//               <span className="block text-6xl font-black bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-4">&lt;0.5%</span>
//               <h4 className="text-xl font-bold mb-2">Power Consumption</h4>
//               <p className="text-slate-400 text-sm">Requires less than 0.5% of the power required for Hg-vapor lamps.</p>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-slate-900 text-white rounded-[2rem] p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500">
//               <span className="block text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">Zero</span>
//               <h4 className="text-xl font-bold mb-2">Hg-Vapor Toxicity</h4>
//               <p className="text-slate-400 text-sm">Environment friendly. Less hazardous from high frequency UV radiation.</p>
//             </motion.div>
//           </div>

//           <p className="text-center text-rose-500 font-bold mt-16 max-w-2xl mx-auto bg-rose-50 py-4 px-6 rounded-full border border-rose-100">
//             This product is part of CRYONANO's archived portfolio. For upgraded lithography systems, contact our team.
//           </p>

//         </div>
//       </section>

//       {/* Global Footer */}
//       <div className="relative z-50">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default ArchivedProductsPage;







// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// import { useEffect, useRef, useState, useCallback } from 'react';
// import { motion, AnimatePresence, Variants } from 'framer-motion';
// import { 
//   Target, Activity, ThermometerSnowflake, Maximize, Lightbulb, 
//   Microscope, Layers, Settings, Zap, Network, Box, Cable, 
//   MonitorPlay, FlaskConical, Sparkles, Leaf, Minimize, 
//   ShieldCheck, CheckCircle2, ChevronRight, ChevronLeft,
//   Cpu, Clock, Compass, Archive
// } from 'lucide-react';
// import { Navbar } from '../components/Navbar'; 
// import { Footer } from '../components/Footer'; 

// // --- ANIMATION VARIANTS ---
// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.15 } }
// };
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// };

// export function ArchivedProductsPage() {
//   const [activeSoftwareTab, setActiveSoftwareTab] = useState(0);

//   // Scroll reveal observer
//   const revealRef = useRef<HTMLDivElement[]>([]);
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   const addToRevealRefs = useCallback((el: HTMLDivElement | null) => {
//     if (el && !revealRef.current.includes(el)) {
//       revealRef.current.push(el);
//       observerRef.current?.observe(el);
//     }
//   }, []);

//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('opacity-100', 'translate-y-0');
//             entry.target.classList.remove('opacity-0', 'translate-y-8');
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
//     );

//     revealRef.current.forEach((el) => observerRef.current?.observe(el));
//     return () => observerRef.current?.disconnect();
//   }, []);

//   // Autonomous Software Tabs logic
//   const softwareTabs = [
//     { title: "TABBED Control", content: "The TABBED software provided with the system communicates with the PPMS MultiVu software for controlling its Temperature and Magnetic Field while measuring various parameters with the impedance analyzer in a larger phase space. Provides maximum automation for complex measurements." },
//     { title: "Measurement Modes", content: "Measurements such as ε (B,T,f) or Z, φ (B,T,f) can be quickly measured using the TABBED program making it easy to use with live graphical display." },
//     { title: "Data Export", content: "The raw data files can later be processed seamlessly in Origin, MATLAB, and other standard analysis software suites." }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSoftwareTab((prev) => (prev + 1) % softwareTabs.length);
//     }, 5000); 
//     return () => clearInterval(timer);
//   }, [softwareTabs.length]);

//   return (
//     <div className="min-h-screen relative bg-slate-50 font-sans flex flex-col overflow-hidden selection:bg-cyan-100">

//       {/* 1. ANIMATED HOME LINK (Top Left) */}
//       <motion.div 
//         initial={{ opacity: 0, x: -20 }} 
//         animate={{ opacity: 1, x: 0 }} 
//         transition={{ duration: 0.5, delay: 0.2 }} 
//         className="fixed top-24 left-6 z-50 hidden md:block"
//       >
//          <a href="/" className="group flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest hover:text-cyan-600 hover:border-cyan-300 hover:shadow-md transition-all">
//            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
//          </a>
//       </motion.div>

//       {/* Navbar */}
//       <div className="relative z-50">
//         <Navbar />
//       </div>

//       {/* ========================================== */}
//       {/* HERO SECTION (Dark Background, Reduced White Space) */}
//       {/* ========================================== */}
//       <section className="relative pt-32 pb-24 px-6 text-center z-10 bg-slate-900 border-b border-slate-800 overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black z-0 pointer-events-none" />
        
//         {/* Subtle Autonomous Ambient Glows */}
//         <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-[20%] -left-[10%] w-[60%] h-[150%] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none z-0" />
//         <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[150%] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none z-0" />

//         <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 relative z-10 max-w-4xl mx-auto">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/80 text-slate-300 text-[11px] font-black tracking-widest uppercase mb-6 shadow-sm">
//             <Archive className="w-3.5 h-3.5 text-cyan-400" /> Legacy Systems
//           </div>
//           <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
//             Archived <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Instruments</span>
//           </h1>
//           <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
//             Legacy CRYONANO systems that contributed to breakthroughs in quantum and cryogenic research. Explore their technical DNA below.
//           </p>
//         </div>
//       </section>

//       {/* ========================================== */}
//       {/* PRODUCT 1: MAGNETODIELECTRIC               */}
//       {/* ========================================== */}
//       <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
//         <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 mb-10">
//           <span className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-blue-100/80 text-blue-700 rounded-full shadow-sm">
//             Archived Module
//           </span>
//           <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-800 bg-clip-text text-transparent mt-6 mb-4">
//             Magnetodielectric / Pyroelectric Measurement Option
//           </h2>
//         </div>

//         {/* Overview & 4-Side-by-Side Collage */}
//         <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl hover:border-cyan-200">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
//             {/* Smooth Broad Text Flow */}
//             <div className="space-y-6">
//               <p className="text-slate-700 font-medium leading-relaxed text-lg">
//                 Precise magnetodielectric and pyroelectric characterization across wide ranges of temperature, magnetic field, and frequency — fully automated and research-ready.
//               </p>
              
//               <div className="flex flex-wrap gap-6 py-4 border-y border-slate-100">
//                 <div><span className="text-3xl font-black text-cyan-600">±16 T</span><br/><span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Magnetic Field</span></div>
//                 <div><span className="text-3xl font-black text-cyan-600">1.9 – 400 K</span><br/><span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Temperature</span></div>
//                 <div><span className="text-3xl font-black text-cyan-600">4 Hz – 2 MHz</span><br/><span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Frequency</span></div>
//               </div>

//               <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-cyan-500 hover:bg-cyan-50/50 transition-colors">
//                 <h4 className="text-cyan-800 font-bold mb-2">System Description</h4>
//                 <p className="text-slate-600 text-sm leading-relaxed">Enhances the Quantum Design PPMS to perform advanced AC measurements such as dielectric constant, AC conductivity, capacitance, phase information, and Nyquist plots under magnetic fields up to ±16 T and temperatures from 1.9–400 K.</p>
//               </div>
//               <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-blue-500 hover:bg-blue-50/50 transition-colors">
//                 <h4 className="text-blue-800 font-bold mb-2">Precision Setup</h4>
//                 <p className="text-slate-600 text-sm leading-relaxed">Insert with low-noise, guarded electrical wiring connects to a breakout box and instrument panel, controlled via PC software for magnetic field, temperature, and frequency sweeps.</p>
//               </div>
//             </div>
            
//             {/* 4 SIDE-BY-SIDE COLLAGE WITH PLACEHOLDER */}
//             <div className="grid grid-cols-2 gap-3 h-full min-h-[400px]">
//               <div className="bg-slate-200 rounded-2xl overflow-hidden relative group shadow-inner">
//                   <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Detail 1" />
//               </div>
//               <div className="bg-slate-200 rounded-2xl overflow-hidden relative group shadow-inner">
//                   <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Detail 2" />
//               </div>
//               <div className="bg-slate-200 rounded-2xl overflow-hidden relative group shadow-inner">
//                   <img src="https://images.unsplash.com/photo-1635048424329-a9bfb10440f4?q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Detail 3" />
//               </div>
//               <div className="bg-cyan-50 rounded-2xl border-2 border-dashed border-cyan-300 flex flex-col items-center justify-center text-cyan-600 gap-2 hover:bg-cyan-100 transition-colors cursor-pointer group">
//                   <Box className="w-8 h-8 opacity-50 group-hover:scale-110 transition-transform" />
//                   <span className="text-xs font-bold uppercase tracking-wider opacity-60">Placeholder</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Existing Key Features Grid */}
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
//             <Zap className="w-6 h-6 text-cyan-600" /> Key Features
//           </h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {features1.map((f, i) => {
//               const Icon = f.icon;
//               return (
//                 <div key={i} ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-cyan-200 hover:-translate-y-1 group">
//                   <div className="mb-5 text-cyan-600 bg-cyan-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300"><Icon className="w-6 h-6" /></div>
//                   <h4 className="font-bold text-slate-800">{f.title}</h4>
//                   <p className="text-slate-500 text-sm mt-2 font-medium">{f.desc}</p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Smooth Narrative Flow Broad Text (No harsh boxes, flowing layout) */}
//           <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 mt-10 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-3xl p-8 md:p-10 border border-blue-100 shadow-sm relative overflow-hidden">
//             <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/40 rounded-full blur-2xl" />
//             <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
//               <p className="group"><strong className="text-blue-800 font-bold mb-1 flex items-center gap-2 group-hover:text-cyan-600 transition-colors"><Target className="w-4 h-4"/> High Accuracy Measurements</strong> <span className="text-slate-600 text-sm leading-relaxed">Guaranteed accuracy in the range of 1 mΩ to 200 MΩ, with ΔZ = ±0.05% and Δθ = ±0.03%, even under cryogenic and high-field conditions.</span></p>
//               <p className="group"><strong className="text-blue-800 font-bold mb-1 flex items-center gap-2 group-hover:text-cyan-600 transition-colors"><Activity className="w-4 h-4"/> Wide Frequency Range</strong> <span className="text-slate-600 text-sm leading-relaxed">Operates from 4 Hz to 2 MHz with fine 10 mHz resolution and ultra-fast 1 ms acquisition speed.</span></p>
//               <p className="group"><strong className="text-blue-800 font-bold mb-1 flex items-center gap-2 group-hover:text-cyan-600 transition-colors"><ThermometerSnowflake className="w-4 h-4"/> Cryogenic Optimization</strong> <span className="text-slate-600 text-sm leading-relaxed">Built-in cable length compensation ensures reliable measurements at low temperatures.</span></p>
//               <p className="group"><strong className="text-blue-800 font-bold mb-1 flex items-center gap-2 group-hover:text-cyan-600 transition-colors"><Compass className="w-4 h-4"/> Flexible Measurement Geometry</strong> <span className="text-slate-600 text-sm leading-relaxed">Supports in-plane and out-of-plane configurations relative to applied magnetic fields.</span></p>
//               <p className="group"><strong className="text-blue-800 font-bold mb-1 flex items-center gap-2 group-hover:text-cyan-600 transition-colors"><Clock className="w-4 h-4"/> Quick Sample Handling</strong> <span className="text-slate-600 text-sm leading-relaxed">Special PCB design allows rapid sample changes and efficient thermalization.</span></p>
//               <p className="group"><strong className="text-blue-800 font-bold mb-1 flex items-center gap-2 group-hover:text-cyan-600 transition-colors"><Cpu className="w-4 h-4"/> Automated LabVIEW Control</strong> <span className="text-slate-600 text-sm leading-relaxed">Fully automated software enables parameter sweeps, live graphical display, and easy export to Origin/Matlab.</span></p>
//             </div>
//           </div>
//         </div>

//         {/* System Architecture Flow */}
//         <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 mt-16">
//           <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
//             <Network className="w-6 h-6 text-cyan-600" /> System Architecture
//           </h3>
//           <div className="flex flex-wrap justify-center items-center gap-3 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
//             {['Insert', 'Breakout Box', 'Instrument Rack', 'Control Software', 'PPMS'].map((step, i) => (
//               <div key={i} className="flex items-center gap-3 group">
//                 <div className="px-6 py-3 bg-slate-50 rounded-xl shadow-sm border border-slate-200 font-bold text-slate-700 group-hover:border-cyan-400 group-hover:text-cyan-700 transition-colors duration-300">{step}</div>
//                 {i < 4 && <ChevronRight className="text-slate-300 w-6 h-6" />}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* What’s Included & Multi-Function Probe */}
//         <div className="grid md:grid-cols-2 gap-8 mt-16">
//           <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group">
//             <div>
//               <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3 group-hover:text-cyan-700 transition-colors">
//                 <Box className="w-6 h-6 text-cyan-500" /> What's Included
//               </h4>
//               <ul className="space-y-3 text-slate-600 font-medium">
//                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Custom measurement insert with BNC</li>
//                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Cryogenic coaxial wiring</li>
//                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Integrated breakout box</li>
//                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Impedance analyzer + interface</li>
//                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Portable 19-inch rack</li>
//                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Automation & acquisition software</li>
//               </ul>
//             </div>
//             {/* Broad Text Integrated Naturally */}
//             <div className="mt-8 pt-5 border-t border-slate-100 text-sm text-slate-500 font-medium leading-relaxed">
//               <strong className="text-slate-700">Package Details:</strong> Custom insert with BNC connectors, cryogenic coaxial wiring, breakout box, impedance analyzer with Ethernet interface, portable 19-inch rack system, and automation software.
//             </div>
//           </div>
          
//           <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between group">
//             <div>
//               <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3 group-hover:text-cyan-300 transition-colors">
//                 <Cable className="w-6 h-6 text-cyan-400" /> Multi-Function Probe
//               </h4>
//               <p className="text-slate-300 leading-relaxed font-medium">Use PPMS as a flexible cryostat with external measurement access via LAN. Direct puck connector, high-isolation BNC breakout, and compatibility with custom instrumentation.</p>
//             </div>
//             {/* Broad Text Integrated Naturally */}
//             <div className="mt-8 p-5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-sm text-cyan-50 font-medium leading-relaxed">
//               Converts PPMS into a cryostat system with external measurement access via LAN, direct puck connector interface, and high-isolation BNC breakout.
//             </div>
//           </div>
//         </div>

//         {/* Software & Control Tabs */}
//         <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 mt-16">
//           <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
//             <MonitorPlay className="w-6 h-6 text-blue-600" /> Software & Control
//           </h3>
//           <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md">
//             <div className="lg:w-1/3 flex flex-col gap-3">
//               {(['ctrl', 'modes', 'features'] as const).map((key) => {
//                 const idx = key === 'ctrl' ? 0 : key === 'modes' ? 1 : 2;
//                 return (
//                   <button
//                     key={key}
//                     onClick={() => setActiveSoftwareTab(idx)}
//                     className={`text-left px-5 py-4 rounded-xl font-bold transition-all duration-300 ${
//                       activeSoftwareTab === idx
//                         ? 'bg-blue-600 text-white shadow-lg translate-x-2'
//                         : 'bg-slate-50 text-slate-500 hover:bg-blue-50 hover:text-blue-700'
//                     }`}
//                   >
//                     {key === 'ctrl' ? 'TABBED Control' : key === 'modes' ? 'Measurement Modes' : 'Features'}
//                     {activeSoftwareTab === idx && <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-1 bg-white/30 mt-2 rounded-full" />}
//                   </button>
//                 )
//               })}
//             </div>
//             <div className="lg:w-2/3 bg-blue-50/50 rounded-2xl p-8 border border-blue-100 flex flex-col justify-center">
//               <AnimatePresence mode="wait">
//                 <motion.div key={activeSoftwareTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
//                   <p className="text-slate-700 text-lg font-medium leading-relaxed mb-6">{softwareTabs[activeSoftwareTab].content}</p>
//                   <div className="pt-5 border-t border-blue-200 text-sm text-slate-600 font-medium">
//                     <strong className="text-blue-800">Integration:</strong> TABBED software integrates with PPMS MultiVu for synchronized control of temperature, magnetic field, and frequency. Supports measurements such as ε(B,T,f) or Z, φ(B,T,f), with live visualization and automated workflows.
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>

//       </section>

//       {/* ========================================== */}
//       {/* PRODUCT 2: UV MASK ALIGNER                 */}
//       {/* ========================================== */}
//       <section className="relative z-10 py-20 bg-gradient-to-b from-white to-purple-50/30 border-t border-slate-200">
//         <div className="max-w-7xl mx-auto px-6">
          
//           <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 mb-16 text-center">
//             <span className="px-6 py-2 text-xs font-bold tracking-widest uppercase bg-purple-100/80 text-purple-700 rounded-full shadow-sm">
//               Archived Lithography System
//             </span>
//             <h2 className="text-4xl md:text-5xl font-extrabold mt-6 mb-4 bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
//               UV Mask Aligner — Model CN500
//             </h2>
//             <p className="text-lg text-slate-600">Compact, High-Precision UV Lithography for Research & Prototyping</p>
//           </div>

//           {/* Overview Card 2 with Broad Text */}
//           <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
//             <div className="order-2 lg:order-1 relative h-[500px] rounded-[3rem] overflow-hidden group shadow-2xl">
//               <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1000" alt="Mask aligner UV lithography" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
//               <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/20 to-transparent" />
//               <div className="absolute bottom-10 left-10 right-10">
//                 <h3 className="text-3xl font-bold text-white mb-2">High-Precision Nanofabrication</h3>
//                 <p className="text-purple-200 font-medium">Compact UV Lithography for Research & Prototyping</p>
//               </div>
//             </div>

//             <div className="order-1 lg:order-2">
//               <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 mb-8 hover:shadow-xl transition-shadow">
//                 <p className="text-slate-700 text-lg leading-relaxed mb-6 font-medium">Semi‑automatic photolithography system with UV‑LED technology, eliminating mercury lamps. Patterning resolution down to 1 µm, instant on/off, and 4× lower cost.</p>
//                 <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold inline-flex items-center gap-2 border border-indigo-100">
//                   <Target className="w-5 h-5" /> 1 µm resolution
//                 </span>
//               </div>
              
//               <div className="p-6 bg-purple-50 rounded-2xl border-l-4 border-purple-500 hover:bg-purple-100/50 transition-colors">
//                   <h4 className="text-purple-900 font-bold mb-2">System Description</h4>
//                   <p className="text-slate-700 text-sm leading-relaxed font-medium">Semi-automatic UV mask aligner designed for research and small-scale fabrication, enabling precise nanofabrication with UV-LED technology at low cost and high efficiency.</p>
//               </div>
//             </div>
//           </div>

//           {/* Key Features Grid 2 */}
//           <div className="mt-16">
//             <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
//               <Sparkles className="w-6 h-6 text-purple-600" /> Key Features
//             </h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {features2.map((f, i) => {
//                 const Icon = f.icon;
//                 return (
//                   <div key={i} ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-purple-300 hover:-translate-y-1 group">
//                     <div className="mb-5 text-purple-600 bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300"><Icon className="w-6 h-6" /></div>
//                     <h4 className="font-bold text-slate-800">{f.title}</h4>
//                     <p className="text-slate-500 text-sm mt-2 font-medium">{f.desc}</p>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Smooth Narrative Flow Broad Text */}
//             <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 mt-10 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 rounded-3xl p-8 md:p-10 border border-purple-100 shadow-sm relative overflow-hidden">
//               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/40 rounded-full blur-2xl" />
//               <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
//                 <p className="group"><strong className="text-purple-800 font-bold mb-1 flex items-center gap-2 group-hover:text-indigo-600 transition-colors"><Lightbulb className="w-4 h-4"/> Advanced UV-LED Optics</strong> <span className="text-slate-600 text-sm leading-relaxed">High-intensity UV-LED system eliminates the need for mercury lamps, ensuring uniform exposure and eco-friendly operation.</span></p>
//                 <p className="group"><strong className="text-purple-800 font-bold mb-1 flex items-center gap-2 group-hover:text-indigo-600 transition-colors"><Zap className="w-4 h-4"/> Instant Operation</strong> <span className="text-slate-600 text-sm leading-relaxed">No warm-up time required — ready for immediate use after switching on.</span></p>
//                 <p className="group"><strong className="text-purple-800 font-bold mb-1 flex items-center gap-2 group-hover:text-indigo-600 transition-colors"><Layers className="w-4 h-4"/> Wafer Compatibility</strong> <span className="text-slate-600 text-sm leading-relaxed">Supports wafers up to 100 mm (4 inch) and smaller substrates with a dedicated chuck.</span></p>
//                 <p className="group"><strong className="text-purple-800 font-bold mb-1 flex items-center gap-2 group-hover:text-indigo-600 transition-colors"><Microscope className="w-4 h-4"/> Precision Alignment</strong> <span className="text-slate-600 text-sm leading-relaxed">High-precision X-Y-Z-θ aligner with microscope (10x eyepiece, 4x/10x/20x objectives) ensures accurate mask positioning.</span></p>
//                 <p className="group"><strong className="text-purple-800 font-bold mb-1 flex items-center gap-2 group-hover:text-indigo-600 transition-colors"><Target className="w-4 h-4"/> High Resolution Patterning</strong> <span className="text-slate-600 text-sm leading-relaxed">Capable of producing features down to 1 µm, ideal for advanced research and prototyping.</span></p>
//               </div>
//             </div>
//           </div>

//           {/* Performance Advantages */}
//           <div className="grid md:grid-cols-3 gap-6 mt-16">
//             <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group">
//               <div>
//                 <h4 className="text-xl font-bold text-indigo-700 flex items-center gap-3 mb-4 group-hover:text-indigo-500 transition-colors"><Zap className="w-6 h-6"/> Fast & Efficient</h4>
//                 <p className="text-slate-600 font-medium">Immediate processing, no waiting, fast prototyping.</p>
//               </div>
//             </div>
//             <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group">
//               <div>
//                 <h4 className="text-xl font-bold text-amber-600 flex items-center gap-3 mb-4 group-hover:text-amber-500 transition-colors"><Leaf className="w-6 h-6"/> Energy Efficient</h4>
//                 <p className="text-slate-600 font-medium">Consumes &lt;0.5% power vs. Hg‑vapor systems.</p>
//               </div>
//             </div>
//             <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group">
//               <div>
//                 <h4 className="text-xl font-bold text-purple-700 flex items-center gap-3 mb-4 group-hover:text-purple-500 transition-colors"><Minimize className="w-6 h-6"/> Compact & Portable</h4>
//                 <p className="text-slate-600 font-medium">Space‑efficient, no complex infrastructure.</p>
//               </div>
//               <div className="mt-6 pt-4 border-t border-slate-100 text-sm text-slate-500 font-medium">
//                 Lightweight design with fast response time and minimal infrastructure requirements.
//               </div>
//             </div>
//           </div>

//           {/* Safety & Cost Side-by-Side */}
//           <div className="grid md:grid-cols-2 gap-8 mt-12">
//             {/* Safety */}
//             <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 bg-emerald-50/80 rounded-[2rem] p-10 border border-emerald-100 hover:shadow-lg transition-shadow">
//               <h4 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-3">
//                 <ShieldCheck className="w-8 h-8 text-emerald-600"/> Safety & Environment
//               </h4>
//               <ul className="space-y-3 text-slate-700 font-medium mb-8">
//                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> No mercury vapor — non‑toxic</li>
//                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Reduced hazardous UV radiation</li>
//                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Minimal stray radiation after shutdown</li>
//               </ul>
//               <div className="p-5 bg-white/80 rounded-xl border border-emerald-100 text-sm text-emerald-900 font-medium">
//                 <strong className="block mb-1 text-emerald-700">Safe & Efficient Operation</strong>
//                 No mercury toxicity risk, reduced UV hazards, minimal stray radiation, and only 0.5% of the power consumption compared to Hg-vapor systems.
//               </div>
//             </div>

//             {/* Cost */}
//             <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 bg-slate-900 text-white rounded-[2rem] p-10 text-center shadow-xl flex flex-col justify-center relative overflow-hidden group">
//               <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl pointer-events-none transition-transform group-hover:scale-150 duration-700" />
//               <span className="block text-7xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-6">~4×</span>
//               <h4 className="text-2xl font-bold mb-4">Lower Cost</h4>
//               <p className="text-slate-400 text-lg font-medium mb-6">Compared to traditional Hg‑based mask aligners.</p>
//               <div className="pt-6 border-t border-slate-700 text-sm text-slate-300 font-medium">
//                 Approximately one-fourth the cost of traditional Hg-based systems, with reduced maintenance and infrastructure.
//               </div>
//             </div>
//           </div>

//           {/* Capabilities & Applications */}
//           <div className="grid md:grid-cols-2 gap-8 mt-12">
//             <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-lg">
//               <h4 className="text-xl font-bold text-cyan-800 flex items-center gap-3 mb-4"><Cpu className="w-6 h-6 text-cyan-600" /> System Capabilities</h4>
//               <p className="text-slate-600 font-medium leading-relaxed mb-6">High‑resolution photolithography (down to 1 µm), uniform exposure from near‑monochromatic source, rapid prototyping.</p>
//               <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-100 text-sm text-cyan-800 font-medium">
//                 <strong className="block mb-1">Precise Electronic Control</strong>
//                 Automated vacuum, mask holding, and UV exposure with accurate control of exposure time and power.
//               </div>
//             </div>
//             <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-lg">
//               <h4 className="text-xl font-bold text-purple-800 flex items-center gap-3 mb-4"><FlaskConical className="w-6 h-6 text-purple-600" /> Applications</h4>
//               <p className="text-slate-600 font-medium leading-relaxed">Semiconductor device fabrication, MEMS, thin film patterning, academic research, rapid prototyping.</p>
//             </div>
//           </div>

//           <div ref={addToRevealRefs} className="opacity-0 translate-y-8 transition-all duration-700 mt-16 text-center">
//             <p className="text-rose-500 font-bold inline-block bg-rose-50/80 backdrop-blur-sm py-3 px-8 rounded-full border border-rose-100 shadow-sm hover:bg-rose-100 transition-colors">
//               This product is part of CRYONANO's archived portfolio. For upgraded lithography systems, contact our team.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* Global Footer */}
//       <div className="relative z-50">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// // Static feature data for product 1
// const features1 = [
//   { icon: Target, title: 'High Precision Measurement', desc: 'Range: 1 mΩ to 200 MΩ, ΔZ = ±0.05%, Δθ = ±0.03%' },
//   { icon: Activity, title: 'Wide Frequency Capability', desc: '4 Hz to 2 MHz, 10 mHz resolution, 1 ms acquisition speed.' },
//   { icon: ThermometerSnowflake, title: 'Cryogenic Optimization', desc: 'Built-in cable length compensation, low-noise coaxial wiring.' },
//   { icon: Maximize, title: 'Flexible Configurations', desc: 'In-plane & out-of-plane measurements, magnetic field orientation compatibility.' },
// ];

// // Static feature data for product 2
// const features2 = [
//   { icon: Lightbulb, title: 'Advanced UV-LED System', desc: 'No high-voltage supply, instant ON/OFF, no warm‑up.' },
//   { icon: Microscope, title: 'High Precision Alignment', desc: 'X-Y-Z-θ aligner, microscope 10x eyepiece, objectives 4x/10x/20x.' },
//   { icon: Layers, title: 'Substrate Compatibility', desc: 'Wafers up to 100 mm (4 inch), dedicated chuck for small samples.' },
//   { icon: Settings, title: 'Automation & Control', desc: 'Automatic vacuum holding, UV exposure electronic control.' },
// ];

// export default ArchivedProductsPage;




import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Target, Activity, ThermometerSnowflake, Maximize, Lightbulb,
  Microscope, Settings, Zap, Network, Box, Cable,
  MonitorPlay, Sparkles, ShieldCheck, CheckCircle2, ChevronRight,
  ImageIcon, ArrowLeft
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

// --- ANIMATION VARIANTS ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function ArchivedProductsPage() {
  const [activeSoftwareTab, setActiveSoftwareTab] = useState(0);

  const softwareTabs = [
    { title: "TABBED Control", content: "The TABBED software provided with the system communicates with the PPMS MultiVu software for controlling its Temperature and Magnetic Field while measuring various parameters with the impedance analyzer in a larger phase space. Provides maximum automation for complex measurements." },
    { title: "Measurement Modes", content: "Measurements such as ε (B,T,f) or Z, φ (B,T,f) can be quickly measured using the TABBED program making it easy to use with live graphical display." },
    { title: "Data Export", content: "The raw data files can later be processed seamlessly in Origin, MATLAB, and other standard analysis software suites." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSoftwareTab((prev) => (prev + 1) % softwareTabs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [softwareTabs.length]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col relative overflow-hidden">
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* HERO (dark, animated) */}
      <section className="relative pt-28 pb-20 px-6 text-center z-10 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 border-b border-slate-700">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[150%] bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[150%] bg-gradient-to-tl from-purple-900/30 to-pink-900/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="absolute top-6 left-6 z-20"
        >
          <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            Archived <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Instruments</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-slate-300 leading-relaxed font-medium">
            Legacy CRYONANO systems that contributed to breakthroughs in quantum and cryogenic research. Explore the technical DNA of our foundational engineering.
          </motion.p>
        </motion.div>
      </section>

      {/* ========================================== */}
      {/* PRODUCT 1: MAGNETODIELECTRIC                */}
      {/* ========================================== */}
      <section className="relative z-10 pt-20 pb-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Intro + Collage */}
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5">
              <span className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-blue-100/80 text-blue-700 rounded-full shadow-sm">
                Archived Module
              </span>
              <h3 className="text-4xl font-extrabold text-slate-900 mt-6 mb-6 leading-tight">
                Magnetodielectric/ Pyroelectric Current Measurement Option for QD PPMS
              </h3>
              <div className="prose text-slate-600 font-medium leading-relaxed border-l-4 border-blue-300 pl-6 mb-8">
                <p>Using the versatile Quantum Design PPMS, CRYONANO's automated Magneto-dielectric Measurement Module Option enhances the wide measurement capabilities of the PPMS to allow popular AC measurements such as dielectric constant, AC conductivity, Capacitance, Phase information, and Nyquist Plots.</p>
                <p>The setup consists of an insert with low noise, guarded electrical wiring connected to an inbuilt breakout box which in turn is connected to an electronic instrument panel. The software controls the given experimental scheme seamlessly.</p>
              </div>
            </motion.div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4 h-[450px]">
                {[1, 2, 3, 4].map((num) => (
                  <motion.div
                    key={num}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-slate-200 border border-slate-300 rounded-2xl flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden"
                  >
                    <ImageIcon className="w-12 h-12 text-slate-400 mb-2" />
                    <span className="text-slate-500 font-medium text-sm">Image {num}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* KEY FEATURES – replaced with a single elegant text paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 bg-white rounded-[3rem] p-10 border border-slate-200 shadow-lg"
          >
            <h3 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-blue-600" /> Magnetodielectric System Key Features
            </h3>
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-4 bg-blue-50/30 rounded-2xl p-8 border border-blue-100">
              <p className="text-lg font-medium">
                <span className="font-bold text-blue-800">High Precision</span> — 1 mΩ to 200 MΩ, ΔZ = ±0.05%, Δθ = ±0.03%.<br />
                <span className="font-bold text-blue-800">Wide Frequency</span> — 4 Hz to 2 MHz, 10 mHz resolution, 1 ms acquisition speed.<br />
                <span className="font-bold text-blue-800">Cryo Optimized</span> — Built‑in cable length compensation and low‑noise wiring.<br />
                <span className="font-bold text-blue-800">Flexible Config</span> — In‑plane & out‑of‑plane measurement with respect to magnetic field.
              </p>
            </div>
          </motion.div>

          {/* TECHNICAL SPECIFICATIONS (Product 1) – enhanced with hover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-10 lg:p-16 text-white shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-cyan-400" /> Technical Specifications
            </h3>
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {[
                "Enhances the Quantum Design PPMS to perform advanced AC measurements such as dielectric constant, AC conductivity, capacitance, phase information, and Nyquist plots under magnetic fields up to ±16 T and temperatures from 1.9–400 K.",
                "Insert with low-noise, guarded electrical wiring connects to a breakout box and instrument panel, controlled via PC software for magnetic field, temperature, and frequency sweeps.",
                "Guaranteed accuracy in the range of 1 mΩ to 200 MΩ, with ΔZ = ±0.05% and Δθ = ±0.03%, even under cryogenic and high-field conditions.",
                "Operates from 4 Hz to 2 MHz with fine 10 mHz resolution and ultra-fast 1 ms acquisition speed.",
                "Built-in cable length compensation ensures reliable measurements at low temperatures.",
                "Supports in-plane and out-of-plane configurations relative to applied magnetic fields.",
                "Special PCB design allows rapid sample changes and efficient thermalization.",
                "Fully automated LabVIEW software enables parameter sweeps, live graphical display, and easy export to Origin/Matlab.",
                "What’s Included: Custom insert with BNC connectors, cryogenic coaxial wiring, breakout box, impedance analyzer with Ethernet interface, portable 19-inch rack system, and automation software.",
                "Multi-Function Probe: Converts PPMS into a cryostat system with external measurement access via LAN, direct puck connector interface, and high-isolation BNC breakout.",
                "TABBED software integrates with PPMS MultiVu for synchronized control of temperature, magnetic field, and frequency. Supports measurements such as ε(B,T,f) or Z, φ(B,T,f), with live visualization and automated workflows."
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <p className="text-slate-200 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Architecture Flow (unchanged) */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24 relative bg-white rounded-[3rem] p-12 shadow-lg border border-slate-100 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-slate-800 mb-12 flex items-center justify-center gap-3 relative z-10">
              <Network className="w-8 h-8 text-cyan-500" /> Autonomous Signal Architecture
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 relative z-10">
              {['Insert', 'Breakout Box', 'Instrument Rack', 'Control Software', 'PPMS'].map((step, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center gap-4 group">
                  <motion.div
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-6 py-4 bg-white rounded-2xl shadow-md border-b-4 border-cyan-400 text-slate-700 font-bold hover:bg-cyan-50 hover:text-cyan-900 transition-all cursor-default"
                  >
                    {step}
                  </motion.div>
                  {i < 4 && (
                    <motion.div
                      animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      className="text-cyan-300 hidden md:block"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </motion.div>
                  )}
                  {i < 4 && <ChevronRight className="w-6 h-6 text-cyan-300 md:hidden rotate-90 my-2" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Inclusions & Probe (unchanged) */}
          <div className="grid md:grid-cols-2 gap-10 mb-24">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="group p-10 bg-white rounded-[2rem] border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Box className="w-8 h-8 text-blue-500" /> What's Included
              </h4>
              <ul className="space-y-4 text-slate-600 font-medium">
                {['Custom measurement insert with BNC', 'Cryogenic coaxial wiring', 'Integrated breakout box', 'Impedance analyzer + interface', 'Portable 19-inch rack', 'Automation software'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: `${idx * 50}ms` }}>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="group p-10 bg-gradient-to-br from-slate-900 to-blue-950 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 text-white">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Cable className="w-8 h-8 text-cyan-400" /> Multi-Function Probe
              </h4>
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                The setup comes with a multi-function probe option which allows the use of PPMS just as a cryostat with a magnetic field while making the electrical measurements from outside using a separate computer.
              </p>
              <div className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm text-sm text-cyan-100">
                Direct access to sample chamber puck connector. Signal accessed from top goes into instrument rack via LAN.
              </div>
            </motion.div>
          </div>

          {/* Software Auto-Cycling (unchanged) */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-xl flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <MonitorPlay className="w-8 h-8 text-blue-600" /> Software Control
              </h3>
              <div className="flex flex-col gap-4">
                {softwareTabs.map((tab, idx) => (
                  <button
                    key={idx} onClick={() => setActiveSoftwareTab(idx)}
                    className={`text-left px-6 py-4 rounded-2xl transition-all font-bold ${
                      activeSoftwareTab === idx
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 translate-x-2'
                        : 'bg-slate-50 text-slate-500 hover:bg-blue-50 hover:text-blue-700'
                    }`}
                  >
                    {tab.title}
                    {activeSoftwareTab === idx && (
                      <motion.div
                        initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }}
                        className="h-1 bg-white/30 mt-3 rounded-full"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3 bg-blue-50/50 rounded-3xl p-10 flex items-center border border-blue-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSoftwareTab}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
                >
                  <h4 className="text-2xl font-bold text-blue-900 mb-4">{softwareTabs[activeSoftwareTab].title}</h4>
                  <p className="text-slate-600 text-xl leading-relaxed">{softwareTabs[activeSoftwareTab].content}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT 2: UV MASK ALIGNER */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-white to-purple-50/40 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="px-6 py-2 text-xs font-bold tracking-widest uppercase bg-purple-100/80 text-purple-700 rounded-full shadow-sm">
              Archived Lithography System
            </span>
            <h2 className="text-5xl font-extrabold mt-8 mb-6 bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
              UV Mask Aligner — Model CN500
            </h2>
          </motion.div>

          {/* Split Layout (unchanged) */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[500px] rounded-[3rem] overflow-hidden group shadow-2xl">
              <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1000" alt="UV Lithography" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-3xl font-bold text-white mb-2">High-Precision Nanofabrication</h3>
                <p className="text-purple-200 font-medium">Compact UV Lithography for Research & Prototyping</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="prose text-slate-600 text-lg font-medium leading-relaxed">
                <p className="mb-6">Photolithography and mask aligners are part of a process called nanofabrication. It is a process by which a series of thin layers of different materials can be patterned to a desired shape. Lithographic techniques have played a central role in the advancement of semiconductor process technologies.</p>
                <p>MODEL CN500 MASK ALIGNER developed by CRYONANO is a state of the art system developed with highest quality at extremely low cost. It is completely UV LED based with automatic vacuum and Mask holding controls.</p>
              </div>
              <div className="mt-10 flex gap-6">
                <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
                  <span className="block text-3xl font-black text-purple-600 mb-1">1 µm</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Resolution</span>
                </div>
                <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
                  <span className="block text-3xl font-black text-purple-600 mb-1">100 mm</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Max Wafer Size</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* KEY FEATURES – different pattern: horizontal rows with left border accent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 bg-white rounded-[3rem] p-10 border border-slate-200 shadow-lg"
          >
            <h3 className="text-3xl font-extrabold text-slate-900 mb-10 flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-purple-600" /> System Features & Parameters
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Lightbulb, title: "Advanced UV-LED Optics", desc: "No complex, high voltage power supply. Almost monochromatic radiation ensures uniformity in deposition." },
                { icon: Zap, title: "Instant Operation", desc: "No waiting time after switching on, operation can be done immediately. Very fast response time." },
                { icon: Microscope, title: "High Precision Alignment", desc: "High precision X-Y-Z-θ aligner. High resolution microscope (Eye piece: 10x | Objective: 4x, 10x & 20x)." },
                { icon: Settings, title: "Automation Control", desc: "Permits precise, accurate electronic control on the exposure time and power." }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 items-start p-4 rounded-xl border-l-4 border-purple-200 hover:border-purple-500 bg-purple-50/20 hover:bg-purple-50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-1">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">{feature.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* TECHNICAL SPECIFICATIONS (Product 2) – restyled dark professional, with hover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 bg-gradient-to-br from-slate-800 to-indigo-950 rounded-[3rem] p-10 lg:p-16 text-white shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-purple-300" /> Technical Specifications
            </h3>
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {[
                "Semi-automatic UV mask aligner designed for research and small-scale fabrication, enabling precise nanofabrication with UV-LED technology at low cost and high efficiency.",
                "High-intensity UV-LED system eliminates the need for mercury lamps, ensuring uniform exposure and eco-friendly operation.",
                "No warm-up time required — ready for immediate use after switching on.",
                "Supports wafers up to 100 mm (4 inch) and smaller substrates with a dedicated chuck.",
                "High-precision X-Y-Z-θ aligner with microscope (10x eyepiece, 4x/10x/20x objectives) ensures accurate mask positioning.",
                "Capable of producing features down to 1 µm, ideal for advanced research and prototyping.",
                "Lightweight design with fast response time and minimal infrastructure requirements.",
                "No mercury toxicity risk, reduced UV hazards, minimal stray radiation, and only 0.5% of the power consumption compared to Hg-vapor systems.",
                "Automated vacuum, mask holding, and UV exposure with accurate control of exposure time and power.",
                "Approximately one-fourth the cost of traditional Hg-based systems, with reduced maintenance and infrastructure."
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                  <p className="text-slate-200 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Metric Advantages (unchanged) */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-slate-900 text-white rounded-[2rem] p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500">
              <span className="block text-6xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">~4×</span>
              <h4 className="text-xl font-bold mb-2">Lower Cost System</h4>
              <p className="text-slate-400 text-sm">Price is almost one-fourth compared to traditional Hg-based systems.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-slate-900 text-white rounded-[2rem] p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500">
              <span className="block text-6xl font-black bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-4">&lt;0.5%</span>
              <h4 className="text-xl font-bold mb-2">Power Consumption</h4>
              <p className="text-slate-400 text-sm">Requires less than 0.5% of the power required for Hg-vapor lamps.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-slate-900 text-white rounded-[2rem] p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500">
              <span className="block text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">Zero</span>
              <h4 className="text-xl font-bold mb-2">Hg-Vapor Toxicity</h4>
              <p className="text-slate-400 text-sm">Environment friendly. Less hazardous from high frequency UV radiation.</p>
            </motion.div>
          </div>

          <p className="text-center text-rose-500 font-bold mt-16 max-w-2xl mx-auto bg-rose-50 py-4 px-6 rounded-full border border-rose-100">
            This product is part of CRYONANO's archived portfolio. For upgraded lithography systems, contact our team.
          </p>
        </div>
      </section>

      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  );
}

export default ArchivedProductsPage;