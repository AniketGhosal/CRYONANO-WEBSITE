// import { useEffect, useRef, useState, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   BookOpen, Microchip, FlaskConical, Layers, Quote, 
//   ChevronRight, Activity, Magnet, Radio, CheckCircle2, 
//   ThermometerSnowflake, FileText, Cpu, Microscope, Settings
// } from 'lucide-react';
// import { Navbar } from '../components/Navbar'; 
// import { Footer } from '../components/Footer'; 

// // --- ANIMATION VARIANTS ---
// const staggerContainer = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.15 } }
// };
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
// };
// const fadeInLeft = {
//   hidden: { opacity: 0, x: -30 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
// };

// export function ApplicationNotesPage() {
//   const [activeStep, setActiveStep] = useState(0);

//   // Autonomous cycling for the 2D Transfer steps
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveStep((prev) => (prev + 1) % 4);
//     }, 4500);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans flex flex-col relative overflow-hidden selection:bg-blue-100">
      
//       {/* Global Navbar */}
//       <div className="relative z-50">
//         <Navbar />
//       </div>

//       {/* ========================================== */}
//       {/* HERO SECTION                               */}
//       {/* ========================================== */}
//       <section className="relative pt-32 pb-24 px-6 text-center z-10 bg-white border-b border-slate-100 overflow-hidden">
//         {/* Soft Animated Background */}
//         <motion.div 
//           animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }} 
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-bl from-indigo-50 to-transparent blur-3xl pointer-events-none"
//         />
//         <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-10 max-w-4xl mx-auto">
//           <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-500 text-[11px] font-black tracking-widest uppercase mb-6 shadow-sm">
//             <BookOpen className="w-3.5 h-3.5" /> Research Library
//           </motion.div>
//           <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
//             Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Notes</span>
//           </motion.h1>
//           <motion.p variants={fadeInUp} className="text-lg text-slate-500 leading-relaxed font-medium">
//             Detailed application notes written by staff and institutional users, demonstrating the deployment of CRYONANO instruments in cutting-edge quantum and cryogenic research.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* ========================================== */}
//       {/* NOTE 1: IVS & QUANTUM HALL (Cyan/Blue Theme) */}
//       {/* ========================================== */}
//       <section className="relative z-10 py-24 bg-gradient-to-b from-blue-50/40 to-white">
//         <div className="max-w-7xl mx-auto px-6">
          
//           {/* Author & Title Block */}
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-16">
//             <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8 max-w-4xl">
//               Gate Voltage Control and I–V Spectroscopy in Fractional Quantum Hall Systems Using an Isolated Voltage Source
//             </motion.h2>
//             <motion.div variants={fadeInUp} className="inline-flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 pr-8 rounded-2xl border border-blue-100 shadow-sm">
//               <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
//                 BK
//               </div>
//               <div>
//                 <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Application By</p>
//                 <p className="text-slate-900 font-bold">Prof. Biswajit Karmakar</p>
//                 <p className="text-slate-500 text-sm">Condensed Matter Physics Division, Saha Institute of Nuclear Physics (SINP), Kolkata</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Overview & IVS Box */}
//           <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
//             <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="prose text-slate-600 font-medium leading-relaxed">
//               <motion.p variants={fadeInUp}>
//                 Precision voltage control is critical in low-temperature condensed matter experiments, especially in studies involving quantum Hall systems and graphene devices. This application note highlights the use of a <strong className="text-slate-900">16-bit Digital-to-Analog Isolated Voltage Source (IVS)</strong> from Cryonano Labs in enabling high-fidelity gate control and low-noise electrical measurements.
//               </motion.p>
//               <motion.div variants={fadeInUp} className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 mt-6">
//                 <h4 className="text-blue-800 font-bold mb-4">The IVS provides:</h4>
//                 <ul className="space-y-2">
//                   <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Four independent, truly bipolar outputs (±10 V each)</li>
//                   <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Computer-controlled operation (LabVIEW compatible)</li>
//                   <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Output current up to 10 mA</li>
//                   <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Electrical isolation to eliminate ground-loop noise</li>
//                 </ul>
//               </motion.div>
//               <motion.p variants={fadeInUp} className="mt-6 italic">
//                 These features make it particularly suitable for sensitive quantum transport experiments.
//               </motion.p>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="grid grid-cols-1 gap-6">
//               <img src="https://images.unsplash.com/photo-1635048424329-a9bfb10440f4?q=80&w=800" alt="IVS Device Box Placeholder" className="rounded-3xl shadow-lg border border-slate-200 w-full object-cover h-64 hover:shadow-xl transition-shadow" />
//               <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800" alt="Rack Mount Setup Placeholder" className="rounded-3xl shadow-lg border border-slate-200 w-full object-cover h-48 hover:shadow-xl transition-shadow" />
//             </motion.div>
//           </div>

//           {/* 3 Pillars of Application */}
//           <div className="space-y-12">
//             {/* Pillar 1: Quantum Hall */}
//             <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow grid lg:grid-cols-12 gap-10 items-center">
//               <div className="lg:col-span-7">
//                 <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><Activity className="text-blue-500 w-6 h-6"/> 1. Gate Voltage Control in Quantum Hall Systems</h3>
//                 <p className="text-slate-600 mb-6 leading-relaxed">
//                   In multi-terminal quantum Hall devices, electrostatic gates are used to selectively control and probe edge modes in a two-dimensional electron system.
//                 </p>
//                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
//                   <h5 className="font-bold text-slate-800 mb-3">Using the IVS:</h5>
//                   <ul className="space-y-2 text-sm text-slate-600 font-medium">
//                     <li>• Multiple gates can be independently biased with high precision</li>
//                     <li>• Stable and noise-free voltage control enables accurate tuning of edge mode interactions</li>
//                     <li>• The system allows detailed investigation of equilibration lengths in both integer and fractional quantum Hall regimes</li>
//                   </ul>
//                 </div>
//                 <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Published in: <span className="text-blue-600">Phys. Rev. Lett. (2020)</span> | <span className="text-blue-600">Phys. Rev. B (2021)</span></p>
//               </div>
//               <div className="lg:col-span-5">
//                 <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" alt="Quantum Hall Gate Placeholder" className="rounded-2xl shadow-md border border-slate-200 w-full" />
//                 <p className="text-xs text-center text-slate-400 mt-3">Gates g1-g4 controlled by IVS (Placeholder)</p>
//               </div>
//             </motion.div>

//             {/* Pillar 2: Graphene */}
//             <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow grid lg:grid-cols-12 gap-10 items-center">
//               <div className="lg:col-span-5 order-2 lg:order-1">
//                 <img src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800" alt="Graphene Device Placeholder" className="rounded-2xl shadow-md border border-slate-200 w-full" />
//                 <p className="text-xs text-center text-slate-400 mt-3">Graphene device on SiO2/n-Si (Placeholder)</p>
//               </div>
//               <div className="lg:col-span-7 order-1 lg:order-2">
//                 <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><Layers className="text-blue-500 w-6 h-6"/> 2. Gate Control in Graphene Devices</h3>
//                 <p className="text-slate-600 mb-6 leading-relaxed">
//                   Graphene devices are typically fabricated on SiO₂/n-Si substrates, where the silicon layer acts as a global back gate to tune carrier density. The IVS proves highly effective for this application:
//                 </p>
//                 <ul className="space-y-3 text-sm text-slate-600 font-medium mb-6">
//                   <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"/> Provides stable back-gate voltage control</li>
//                   <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"/> Multiple channels can be connected in series to achieve up to ±40 V output</li>
//                   <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"/> Isolation minimizes interference and improves measurement reliability</li>
//                 </ul>
//                 <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Published in: <span className="text-blue-600">ACS Applied Nano Materials (2022)</span></p>
//               </div>
//             </motion.div>

//             {/* Pillar 3: I-V Spectroscopy */}
//             <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow grid lg:grid-cols-12 gap-10 items-center">
//               <div className="lg:col-span-7">
//                 <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><Radio className="text-blue-500 w-6 h-6"/> 3. I–V Spectroscopy in Fractional Quantum Hall Systems</h3>
//                 <p className="text-slate-600 mb-4 leading-relaxed">
//                   I–V spectroscopy is a key technique for probing electronic transport properties, particularly through differential conductance (dI/dV) measurements. Typical setup includes DC voltage excitation (provided by IVS) and AC modulation for lock-in detection.
//                 </p>
//                 <p className="font-bold text-slate-900 mb-3 mt-6">Key advantages of using the IVS:</p>
//                 <ul className="space-y-2 text-sm text-slate-600 font-medium">
//                   <li>• <strong className="text-slate-800">Low-noise 16-bit resolution</strong> enables precise voltage sweeps</li>
//                   <li>• <strong className="text-slate-800">Electrical isolation</strong> eliminates ground loops</li>
//                   <li>• <strong className="text-slate-800">Stable DC bias</strong> improves accuracy in differential conductance measurements</li>
//                 </ul>
//               </div>
//               <div className="lg:col-span-5">
//                 <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" alt="I-V Graph Placeholder" className="rounded-2xl shadow-md border border-slate-200 w-full" />
//                 <p className="text-xs text-center text-slate-400 mt-3">Spectroscopy Data (Placeholder)</p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ========================================== */}
//       {/* NOTE 2: HELIUM DIPSTICK (Purple/Indigo Theme) */}
//       {/* ========================================== */}
//       <section className="relative z-10 py-24 bg-white border-t border-slate-100">
//         <div className="max-w-7xl mx-auto px-6">
          
//           {/* Author & Title Block */}
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-16">
//             <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8 max-w-4xl">
//               Helium Dipstick with DC, RF, and Integrated Magnet for Characterization of Josephson Junctions
//             </motion.h2>
//             <motion.div variants={fadeInUp} className="inline-flex flex-col md:flex-row md:items-center gap-4 bg-purple-50/50 p-4 pr-8 rounded-2xl border border-purple-100 shadow-sm">
//               <div className="w-12 h-12 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center font-bold text-xl">
//                 DT
//               </div>
//               <div>
//                 <p className="text-sm text-purple-400 font-bold uppercase tracking-wider">Application By</p>
//                 <p className="text-purple-900 font-bold">Dr. Deep Talukdar</p>
//                 <p className="text-purple-600 text-sm">Cryonano Labs</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           <div className="grid lg:grid-cols-12 gap-16 mb-20">
//             {/* Content Column */}
//             <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="lg:col-span-7 space-y-10">
              
//               <div>
//                 <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><ThermometerSnowflake className="text-purple-500 w-6 h-6"/> Overview & Objective</h3>
//                 <p className="text-slate-600 leading-relaxed font-medium mb-4">
//                   Characterizing Josephson junctions at cryogenic temperatures requires a carefully engineered environment that combines low-noise DC measurements, RF signal delivery, and controlled magnetic fields.
//                 </p>
//                 <p className="text-slate-600 leading-relaxed font-medium">
//                   This application note describes the development of a custom Helium Dipstick system designed to operate at 4 K, enabling precise I–V characterization of Josephson junction devices under DC bias, RF excitation (up to 18 GHz), and external magnetic field (~0.1 Tesla).
//                 </p>
//               </div>

//               <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3"><Microchip className="text-purple-500 w-5 h-5"/> Measurement Requirements</h3>
//                 <ul className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600 font-medium">
//                   <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/> 24 DC measurement lines</li>
//                   <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/> 24-channel cryogenic DC-RF filters</li>
//                   <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/> In-plane & out-of-plane measurement support</li>
//                   <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/> Fisher to 24 BNC breakout</li>
//                   <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/> Room temperature RF filtering</li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3"><Settings className="text-purple-500 w-6 h-6"/> System Design and Implementation</h3>
//                 <div className="space-y-6">
//                   <div className="border-l-2 border-purple-200 pl-4">
//                     <h5 className="font-bold text-slate-800">Mechanical & Structural Design</h5>
//                     <p className="text-sm text-slate-600 mt-1">Stainless steel dipstick. Three independent tubes isolate: DC measurement lines, Heater/Cernox lines, and Magnet DC supply lines.</p>
//                   </div>
//                   <div className="border-l-2 border-purple-200 pl-4">
//                     <h5 className="font-bold text-slate-800">RF Integration & Filtering</h5>
//                     <p className="text-sm text-slate-600 mt-1">Semi-rigid RF cable used as an antenna (up to 18 GHz). 24-line cryogenic low-pass filters and wire thermalization bobbins integrated inline.</p>
//                   </div>
//                   <div className="border-l-2 border-purple-200 pl-4">
//                     <h5 className="font-bold text-slate-800">Sample Mounting & Shielding</h5>
//                     <p className="text-sm text-slate-600 mt-1">Gold-plated OFC holder for in-plane/out-of-plane chips. BeCu wire looms. Mu-metal shielding with indium gaskets protects against ambient magnetic interference.</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Images Column */}
//             <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 grid grid-cols-1 gap-6">
//               <div className="relative group">
//                 <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800" alt="Dipstick Sketch Placeholder" className="rounded-[2rem] shadow-md border border-slate-200 w-full h-64 object-cover" />
//                 <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/10 transition-colors rounded-[2rem]" />
//                 <p className="text-xs text-center text-slate-400 mt-2">Design Blueprint (Placeholder)</p>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400" alt="Lab Dipstick Vertical Placeholder" className="rounded-[1.5rem] shadow-md border border-slate-200 w-full h-48 object-cover" />
//                 </div>
//                 <div>
//                   <img src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=400" alt="PCB Holder Placeholder" className="rounded-[1.5rem] shadow-md border border-slate-200 w-full h-48 object-cover" />
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//         </div>
//       </section>

//       {/* ========================================== */}
//       {/* NOTE 3: 2D TRANSFER (Emerald/Teal Theme)   */}
//       {/* ========================================== */}
//       <section className="relative z-10 py-24 bg-gradient-to-b from-emerald-50/30 to-white border-t border-slate-100">
//         <div className="max-w-7xl mx-auto px-6">
          
//           {/* Author & Title Block */}
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-16 text-center">
//             <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8 max-w-4xl mx-auto">
//               2D Transfer of Materials – Process and Dynamics
//             </motion.h2>
//             <motion.div variants={fadeInUp} className="inline-flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 px-8 rounded-full border border-emerald-100 shadow-sm mx-auto">
//               <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
//                 SP
//               </div>
//               <div className="text-left">
//                 <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Application By</p>
//                 <p className="text-slate-900 font-bold text-sm">Mr. Sourav Paul (with inputs from Mr. Vineet Pandey) — IIT Kharagpur</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="max-w-3xl mx-auto text-center mb-20">
//             <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
//               The fabrication of high-quality 2D heterostructures requires precise control over alignment, temperature, and interfacial contact. This application note outlines a <strong className="text-slate-900">universal dry transfer method</strong> implemented using the 2D Transfer System from Cryonano Labs.
//             </motion.p>
//             <motion.p variants={fadeInUp} className="text-sm font-bold text-slate-500 uppercase tracking-widest">
//               Published in: <span className="text-emerald-600">Journal of Applied Physics (2023)</span>
//             </motion.p>
//           </motion.div>

//           {/* Configuration & Process Dynamics Panels */}
//           <div className="grid md:grid-cols-2 gap-8 mb-24">
//             <motion.div initial={fadeInLeft.hidden} whileInView={fadeInLeft.show} viewport={{ once: true }} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
//               <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
//                 <Settings className="w-6 h-6 text-emerald-500" /> System Configuration
//               </h4>
//               <ul className="space-y-4 text-slate-600 font-medium">
//                 <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" /> <strong className="text-slate-800">XYθ Stage:</strong> Enables precise lateral positioning and rotational alignment.</li>
//                 <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" /> <strong className="text-slate-800">XYZ Stage:</strong> Equipped with a cantilever-mounted plate for controlled vertical motion.</li>
//               </ul>
//               <p className="mt-6 text-sm text-slate-500 italic">Allows fine control over alignment and contact under an optical microscope.</p>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-slate-900 text-white p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-shadow">
//               <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
//                 <Microscope className="w-6 h-6 text-emerald-400" /> Process Dynamics & Observation
//               </h4>
//               <p className="text-slate-300 leading-relaxed mb-4">
//                 A critical aspect of successful transfer is <strong className="text-white">real-time optical monitoring</strong>. As the stamp approaches the substrate, interference fringes appear, indicating proximity and uniformity of contact.
//               </p>
//               <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-sm text-emerald-100">
//                 Understanding live optical micrographs is essential for avoiding bubbles, ensuring uniform stacking, and achieving high-quality interfaces.
//               </div>
//             </motion.div>
//           </div>

//           {/* Autonomous Animated Pipeline: Step-by-Step Process */}
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-xl overflow-hidden">
//             <h3 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">
//               Universal Dry Transfer Process (PDMS/PPC)
//             </h3>
            
//             {/* Interactive/Animated Tabs */}
//             <div className="flex flex-wrap md:flex-nowrap gap-4 mb-12 justify-center relative">
//               {/* Connecting Line (Desktop) */}
//               <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-slate-100 -z-10 -translate-y-1/2" />
              
//               {["Stamp Prep", "h-BN Pickup", "2D Pickup", "Final Release"].map((stepTitle, idx) => (
//                 <button 
//                   key={idx} 
//                   onClick={() => setActiveStep(idx)}
//                   className={`relative flex-1 py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-300 ${
//                     activeStep === idx 
//                     ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105' 
//                     : 'bg-white border border-slate-200 text-slate-500 hover:border-emerald-300 hover:text-emerald-700'
//                   }`}
//                 >
//                   Step {idx + 1}: {stepTitle}
//                 </button>
//               ))}
//             </div>

//             {/* Dynamic Content Area */}
//             <div className="bg-emerald-50/50 rounded-[2rem] p-8 md:p-12 border border-emerald-100 min-h-[250px] flex items-center">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeStep}
//                   initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
//                   className="w-full"
//                 >
//                   {activeStep === 0 && (
//                     <div>
//                       <h4 className="text-2xl font-bold text-emerald-900 mb-4">Stamp Preparation and Alignment</h4>
//                       <p className="text-slate-600 text-lg leading-relaxed">
//                         A hemispherical PDMS stamp is prepared on a cleaned coverslip, followed by spin-coating of PPC on the PDMS surface. The stamp is mounted upside down and aligned under the microscope with the target sample on SiO₂/Si.
//                       </p>
//                     </div>
//                   )}
//                   {activeStep === 1 && (
//                     <div>
//                       <h4 className="text-2xl font-bold text-emerald-900 mb-4">Pickup of h-BN Flake</h4>
//                       <p className="text-slate-600 text-lg leading-relaxed mb-4">
//                         A few-layer hexagonal boron nitride (h-BN) flake is picked up from the substrate.
//                       </p>
//                       <div className="flex gap-4">
//                         <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-emerald-700 font-bold text-sm">Temp: ~65°C</span>
//                         <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-emerald-700 font-bold text-sm">Substrate: SiO₂/Si</span>
//                       </div>
//                     </div>
//                   )}
//                   {activeStep === 2 && (
//                     <div>
//                       <h4 className="text-2xl font-bold text-emerald-900 mb-4">Pickup of Additional 2D Materials</h4>
//                       <p className="text-slate-600 text-lg leading-relaxed mb-4">
//                         Exfoliated 2D materials like Graphene and Transition Metal Dichalcogenides (TMDs) are picked up sequentially using the PDMS/PPC/h-BN stack. Requires precise alignment for complex heterostructures.
//                       </p>
//                       <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-emerald-700 font-bold text-sm inline-block">Temp: ~55°C</span>
//                     </div>
//                   )}
//                   {activeStep === 3 && (
//                     <div>
//                       <h4 className="text-2xl font-bold text-emerald-900 mb-4">Final Transfer and Release</h4>
//                       <p className="text-slate-600 text-lg leading-relaxed mb-4">
//                         The assembled stack is aligned and brought into contact with the target substrate. The cantilever stage is slowly retracted to detach the PDMS/PPC. Followed by Acetone/IPA cleaning to remove residue.
//                       </p>
//                       <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-emerald-700 font-bold text-sm inline-block">Transfer Temp: ~85°C</span>
//                     </div>
//                   )}
//                 </motion.div>
//               </AnimatePresence>
//             </div>
            
//             {/* Progress Bar for autonomous visual cue */}
//             <div className="w-full bg-slate-100 h-1.5 rounded-full mt-8 overflow-hidden">
//               <motion.div 
//                 key={activeStep}
//                 initial={{ width: "0%" }}
//                 animate={{ width: "100%" }}
//                 transition={{ duration: 4.5, ease: "linear" }}
//                 className="h-full bg-emerald-400"
//               />
//             </div>
//           </motion.div>

//         </div>
//       </section>

//       {/* Global Footer */}
//       <div className="relative z-50">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default ApplicationNotesPage;















import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Microchip, FlaskConical, Layers, Quote, 
  ChevronRight, Activity, Magnet, Radio, CheckCircle2, 
  ThermometerSnowflake, FileText, Cpu, Microscope, Settings,
  Zap, ShieldCheck, Target, Layers2, ArrowLeft, Sparkles
} from 'lucide-react';
import { Navbar } from '../components/Navbar'; 
import { Footer } from '../components/Footer'; 
import { Link } from 'react-router-dom';

// --- ANIMATION VARIANTS ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};
const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export function ApplicationNotesPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeDipstickFeature, setActiveDipstickFeature] = useState(0);

  // Autonomous cycling for the 2D Transfer steps (4 steps)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Autonomous cycling for Helium Dipstick key features (6 features)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDipstickFeature((prev) => (prev + 1) % 6);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Helium Dipstick Key Features Data
  const dipstickFeatures = [
    { icon: ShieldCheck, title: "24-Channel Filtered DC", desc: "24 lines with integrated cryogenic low‑pass filters for clean measurements." },
    { icon: Radio, title: "RF up to 18 GHz", desc: "Semi‑rigid RF cable routed as an antenna for high‑frequency excitation." },
    { icon: Magnet, title: "Integrated Magnet (~0.1 T)", desc: "On‑board magnetic field source for Josephson junction characterization." },
    { icon: ThermometerSnowflake, title: "Superior Thermal Anchoring", desc: "Wire thermalization bobbins and BeCu looms minimize heat load." },
    { icon: Settings, title: "Modular & Scalable", desc: "Three isolated stainless steel tubes separate DC, heater/sensor, and magnet lines." },
    { icon: Layers, title: "EMI Shielding", desc: "Mu‑metal shield with indium gaskets guards against ambient magnetic interference." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col relative overflow-hidden selection:bg-blue-100">
      
      {/* Global Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* ========================================== */}
      {/* HERO SECTION                               */}
      {/* ========================================== */}
      <section className="relative pt-28 pb-24 px-6 text-center z-10 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100 overflow-hidden">
        {/* Soft Animated Background */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-bl from-indigo-50 to-transparent blur-3xl pointer-events-none"
        />
        
        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-6 left-6 z-20"
        >
          <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-700 font-semibold hover:bg-white hover:shadow-md transition-all group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-10 max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-500 text-[11px] font-black tracking-widest uppercase mb-6 shadow-sm">
            <BookOpen className="w-3.5 h-3.5" /> Research Library
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
            Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Notes</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-slate-500 leading-relaxed font-medium">
            Detailed application notes written by staff and institutional users, demonstrating the deployment of CRYONANO instruments in cutting-edge quantum and cryogenic research.
          </motion.p>
        </motion.div>
      </section>

      {/* ========================================== */}
      {/* NOTE 1: IVS & QUANTUM HALL (Blue Theme)    */}
      {/* ========================================== */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Author & Title Block */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-16">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8 max-w-4xl">
              Gate Voltage Control and I–V Spectroscopy in Fractional Quantum Hall Systems Using an Isolated Voltage Source
            </motion.h2>
            <motion.div variants={fadeInUp} className="inline-flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 pr-8 rounded-2xl border border-blue-100 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
                BK
              </div>
              <div>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Application By</p>
                <p className="text-slate-900 font-bold">Prof. Biswajit Karmakar</p>
                <p className="text-slate-500 text-sm">Condensed Matter Physics Division, Saha Institute of Nuclear Physics (SINP), Kolkata</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Overview & IVS Box */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="prose text-slate-600 font-medium leading-relaxed">
              <motion.p variants={fadeInUp}>
                Precision voltage control is critical in low-temperature condensed matter experiments, especially in studies involving quantum Hall systems and graphene devices. This application note highlights the use of a <strong className="text-slate-900">16-bit Digital-to-Analog Isolated Voltage Source (IVS)</strong> from Cryonano Labs in enabling high-fidelity gate control and low-noise electrical measurements.
              </motion.p>
              <motion.div variants={fadeInUp} className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 mt-6">
                <h4 className="text-blue-800 font-bold mb-4">The IVS provides:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Four independent, truly bipolar outputs (±10 V each)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Computer-controlled operation (LabVIEW compatible)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Output current up to 10 mA</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Electrical isolation to eliminate ground-loop noise</li>
                </ul>
              </motion.div>
              <motion.p variants={fadeInUp} className="mt-6 italic">
                These features make it particularly suitable for sensitive quantum transport experiments.
              </motion.p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="grid grid-cols-1 gap-6">
              <img src="https://images.unsplash.com/photo-1635048424329-a9bfb10440f4?q=80&w=800" alt="IVS Device Box Placeholder" className="rounded-3xl shadow-lg border border-slate-200 w-full object-cover h-64 hover:shadow-xl transition-shadow" />
              <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800" alt="Rack Mount Setup Placeholder" className="rounded-3xl shadow-lg border border-slate-200 w-full object-cover h-48 hover:shadow-xl transition-shadow" />
            </motion.div>
          </div>

          {/* 3 Pillars of Application */}
          <div className="space-y-12">
            {/* Pillar 1: Quantum Hall */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><Activity className="text-blue-500 w-6 h-6"/> 1. Gate Voltage Control in Quantum Hall Systems</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  In multi-terminal quantum Hall devices, electrostatic gates are used to selectively control and probe edge modes in a two-dimensional electron system.
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
                  <h5 className="font-bold text-slate-800 mb-3">Using the IVS:</h5>
                  <ul className="space-y-2 text-sm text-slate-600 font-medium">
                    <li>• Multiple gates can be independently biased with high precision</li>
                    <li>• Stable and noise-free voltage control enables accurate tuning of edge mode interactions</li>
                    <li>• The system allows detailed investigation of equilibration lengths in both integer and fractional quantum Hall regimes</li>
                  </ul>
                </div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Published in: <span className="text-blue-600">Phys. Rev. Lett. (2020)</span> | <span className="text-blue-600">Phys. Rev. B (2021)</span></p>
              </div>
              <div className="lg:col-span-5">
                <motion.img whileHover={{ scale: 1.02 }} src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" alt="Quantum Hall Gate Placeholder" className="rounded-2xl shadow-md border border-slate-200 w-full" />
                <p className="text-xs text-center text-slate-400 mt-3">Gates g1-g4 controlled by IVS (Placeholder)</p>
              </div>
            </motion.div>

            {/* Pillar 2: Graphene */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <motion.img whileHover={{ scale: 1.02 }} src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800" alt="Graphene Device Placeholder" className="rounded-2xl shadow-md border border-slate-200 w-full" />
                <p className="text-xs text-center text-slate-400 mt-3">Graphene device on SiO2/n-Si (Placeholder)</p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><Layers className="text-blue-500 w-6 h-6"/> 2. Gate Control in Graphene Devices</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Graphene devices are typically fabricated on SiO₂/n-Si substrates, where the silicon layer acts as a global back gate to tune carrier density. The IVS proves highly effective for this application:
                </p>
                <ul className="space-y-3 text-sm text-slate-600 font-medium mb-6">
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"/> Provides stable back-gate voltage control</li>
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"/> Multiple channels can be connected in series to achieve up to ±40 V output</li>
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"/> Isolation minimizes interference and improves measurement reliability</li>
                </ul>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Published in: <span className="text-blue-600">ACS Applied Nano Materials (2022)</span></p>
              </div>
            </motion.div>

            {/* Pillar 3: I-V Spectroscopy */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><Radio className="text-blue-500 w-6 h-6"/> 3. I–V Spectroscopy in Fractional Quantum Hall Systems</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  I–V spectroscopy is a key technique for probing electronic transport properties, particularly through differential conductance (dI/dV) measurements. Typical setup includes DC voltage excitation (provided by IVS) and AC modulation for lock-in detection.
                </p>
                <p className="font-bold text-slate-900 mb-3 mt-6">Key advantages of using the IVS:</p>
                <ul className="space-y-2 text-sm text-slate-600 font-medium">
                  <li>• <strong className="text-slate-800">Low-noise 16-bit resolution</strong> enables precise voltage sweeps</li>
                  <li>• <strong className="text-slate-800">Electrical isolation</strong> eliminates ground loops</li>
                  <li>• <strong className="text-slate-800">Stable DC bias</strong> improves accuracy in differential conductance measurements</li>
                </ul>
              </div>
              <div className="lg:col-span-5">
                <motion.img whileHover={{ scale: 1.02 }} src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" alt="I-V Graph Placeholder" className="rounded-2xl shadow-md border border-slate-200 w-full" />
                <p className="text-xs text-center text-slate-400 mt-3">Spectroscopy Data (Placeholder)</p>
              </div>
            </motion.div>
          </div>

          {/* NEW: Key Benefits of the IVS */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 bg-gradient-to-br from-blue-50 to-white rounded-[3rem] p-10 border border-blue-100 shadow-lg">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-blue-600" /> Key Benefits of the IVS in Research Applications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: CheckCircle2, title: "True Bipolar Outputs", desc: "Flexible biasing with ±10 V per channel." },
                { icon: Layers, title: "Scalable Voltage Range", desc: "Up to ±40 V via series configuration." },
                { icon: Activity, title: "Low‑Noise Performance", desc: "16‑bit resolution for sensitive measurements." },
                { icon: ShieldCheck, title: "Complete Isolation", desc: "Eliminates ground‑loop interference." },
                { icon: Zap, title: "Multi‑Channel Operation", desc: "Four independent channels for complex devices." },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-slate-100"
                >
                  <benefit.icon className="w-6 h-6 text-blue-600 mb-3" />
                  <h5 className="font-bold text-slate-800 mb-2">{benefit.title}</h5>
                  <p className="text-sm text-slate-500">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* NEW: Conclusion for Note 1 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-white rounded-[2rem] p-8 md:p-10 border border-blue-200 shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-blue-600" /> Conclusion
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              The Isolated Voltage Source (IVS) from Cryonano Labs has proven to be a versatile and reliable tool for advanced condensed matter experiments. Its combination of precision, low noise, and isolation makes it particularly well-suited for quantum Hall edge state studies, graphene device characterization, and high‑resolution I–V spectroscopy. Its integration into experimental setups enables reproducible and high‑quality measurements, supporting cutting‑edge research in quantum transport.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ========================================== */}
      {/* NOTE 2: HELIUM DIPSTICK (Purple Theme)    */}
      {/* ========================================== */}
      <section className="relative z-10 py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Author & Title Block */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-16">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8 max-w-4xl">
              Helium Dipstick with DC, RF, and Integrated Magnet for Characterization of Josephson Junctions
            </motion.h2>
            <motion.div variants={fadeInUp} className="inline-flex flex-col md:flex-row md:items-center gap-4 bg-purple-50/50 p-4 pr-8 rounded-2xl border border-purple-100 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center font-bold text-xl">
                DT
              </div>
              <div>
                <p className="text-sm text-purple-400 font-bold uppercase tracking-wider">Application By</p>
                <p className="text-purple-900 font-bold">Dr. Deep Talukdar</p>
                <p className="text-purple-600 text-sm">Cryonano Labs</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16 mb-20">
            {/* Content Column */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="lg:col-span-7 space-y-10">
              
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><ThermometerSnowflake className="text-purple-500 w-6 h-6"/> Overview & Objective</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-4">
                  Characterizing Josephson junctions at cryogenic temperatures requires a carefully engineered environment that combines low-noise DC measurements, RF signal delivery, and controlled magnetic fields.
                </p>
                <p className="text-slate-600 leading-relaxed font-medium">
                  This application note describes the development of a custom Helium Dipstick system designed to operate at 4 K, enabling precise I–V characterization of Josephson junction devices under DC bias, RF excitation (up to 18 GHz), and external magnetic field (~0.1 Tesla).
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3"><Microchip className="text-purple-500 w-5 h-5"/> Measurement Requirements</h3>
                <ul className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600 font-medium">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/> 24 DC measurement lines</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/> 24-channel cryogenic DC-RF filters</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/> In-plane & out-of-plane measurement support</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/> Fisher to 24 BNC breakout</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/> Room temperature RF filtering</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3"><Settings className="text-purple-500 w-6 h-6"/> System Design and Implementation</h3>
                <div className="space-y-6">
                  <motion.div whileHover={{ x: 5 }} className="border-l-2 border-purple-200 pl-4 transition-all">
                    <h5 className="font-bold text-slate-800">Mechanical & Structural Design</h5>
                    <p className="text-sm text-slate-600 mt-1">Stainless steel dipstick. Three independent tubes isolate: DC measurement lines, Heater/Cernox lines, and Magnet DC supply lines.</p>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} className="border-l-2 border-purple-200 pl-4 transition-all">
                    <h5 className="font-bold text-slate-800">RF Integration & Filtering</h5>
                    <p className="text-sm text-slate-600 mt-1">Semi-rigid RF cable used as an antenna (up to 18 GHz). 24-line cryogenic low-pass filters and wire thermalization bobbins integrated inline.</p>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} className="border-l-2 border-purple-200 pl-4 transition-all">
                    <h5 className="font-bold text-slate-800">Sample Mounting & Shielding</h5>
                    <p className="text-sm text-slate-600 mt-1">Gold-plated OFC holder for in-plane/out-of-plane chips. BeCu wire looms. Mu-metal shielding with indium gaskets protects against ambient magnetic interference.</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Images Column */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 grid grid-cols-1 gap-6">
              <div className="relative group">
                <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800" alt="Dipstick Sketch Placeholder" className="rounded-[2rem] shadow-md border border-slate-200 w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/10 transition-colors rounded-[2rem]" />
                <p className="text-xs text-center text-slate-400 mt-2">Design Blueprint (Placeholder)</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400" alt="Lab Dipstick Vertical Placeholder" className="rounded-[1.5rem] shadow-md border border-slate-200 w-full h-48 object-cover" />
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=400" alt="PCB Holder Placeholder" className="rounded-[1.5rem] shadow-md border border-slate-200 w-full h-48 object-cover" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* NEW: Key Features and Advantages */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 bg-gradient-to-br from-purple-50 to-white rounded-[3rem] p-10 border border-purple-100 shadow-lg">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-purple-600" /> Key Features and Advantages
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {dipstickFeatures.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    activeDipstickFeature === idx ? 'border-purple-400 shadow-lg ring-2 ring-purple-100 scale-105' : 'border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1'
                  }`}
                  onClick={() => setActiveDipstickFeature(idx)}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${activeDipstickFeature === idx ? 'bg-purple-100 text-purple-600' : 'bg-slate-50 text-slate-500'}`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-slate-800 mb-2">{feature.title}</h5>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                  {activeDipstickFeature === idx && (
                    <motion.div 
                      initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 3.5, ease: 'linear' }}
                      className="h-1 bg-purple-300 mt-4 rounded-full"
                    />
                  )}
                </motion.div>
              ))}
            </div>
            <p className="text-center text-slate-400 text-sm mt-6">
              Click any feature or watch them auto-cycle every 3.5 seconds
            </p>
          </motion.div>

          {/* NEW: Applications */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 bg-white rounded-[2rem] p-8 md:p-10 border border-purple-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Layers className="w-6 h-6 text-purple-500" /> Applications
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-600 font-medium">
              {['Josephson junction I–V characterization', 'Superconducting device research', 'Quantum transport experiments', 'RF-driven quantum systems', 'Low-temperature electronics testing'].map((app, idx) => (
                <motion.li key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> {app}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* NEW: Conclusion for Note 2 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[2rem] p-8 md:p-10 border border-purple-200 shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-purple-600" /> Conclusion
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              The developed Helium Dipstick system provides a highly integrated and noise-optimized platform for Josephson junction characterization at cryogenic temperatures. By combining DC, RF, and magnetic field capabilities within a single architecture, it enables precise and reproducible measurements essential for superconducting and quantum device research.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ========================================== */}
      {/* NOTE 3: 2D TRANSFER (Emerald/Teal Theme)   */}
      {/* ========================================== */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-emerald-50/30 to-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Author & Title Block */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-16 text-center">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8 max-w-4xl mx-auto">
              2D Transfer of Materials – Process and Dynamics
            </motion.h2>
            <motion.div variants={fadeInUp} className="inline-flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 px-8 rounded-full border border-emerald-100 shadow-sm mx-auto">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                SP
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Application By</p>
                <p className="text-slate-900 font-bold text-sm">Mr. Sourav Paul (with inputs from Mr. Vineet Pandey) — IIT Kharagpur</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="max-w-3xl mx-auto text-center mb-20">
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
              The fabrication of high-quality 2D heterostructures requires precise control over alignment, temperature, and interfacial contact. This application note outlines a universal dry transfer method implemented using the 2D Transfer System from Cryonano Labs.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              Published in: <span className="text-emerald-600">Journal of Applied Physics (2023)</span>
            </motion.p>
          </motion.div>

          {/* Configuration & Process Dynamics Panels */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <motion.div initial={fadeInLeft.hidden} whileInView={fadeInLeft.show} viewport={{ once: true }} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Settings className="w-6 h-6 text-emerald-500" /> System Configuration
              </h4>
              <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" /> <strong className="text-slate-800">XYθ Stage:</strong> Enables precise lateral positioning and rotational alignment.</li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" /> <strong className="text-slate-800">XYZ Stage:</strong> Equipped with a cantilever-mounted plate for controlled vertical motion.</li>
              </ul>
              <p className="mt-6 text-sm text-slate-500 italic">Allows fine control over alignment and contact under an optical microscope.</p>
            </motion.div>

            {/* Replaced dark panel with light design */}
            <motion.div initial={fadeInRight.hidden} whileInView={fadeInRight.show} viewport={{ once: true }} className="bg-gradient-to-br from-emerald-50 to-teal-50 p-10 rounded-[2rem] border border-emerald-100 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Microscope className="w-6 h-6 text-emerald-600" /> Process Dynamics & Observation
              </h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                A critical aspect of successful transfer is <strong className="text-emerald-800">real-time optical monitoring</strong>. As the stamp approaches the substrate, interference fringes appear, indicating proximity and uniformity of contact.
              </p>
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-emerald-200 text-emerald-900 font-medium">
                Understanding live optical micrographs is essential for avoiding bubbles, ensuring uniform stacking, and achieving high-quality interfaces.
              </div>
            </motion.div>
          </div>

          {/* Autonomous Animated Pipeline: Step-by-Step Process */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-xl overflow-hidden">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">
              Universal Dry Transfer Process (PDMS/PPC)
            </h3>
            
            <div className="flex flex-wrap md:flex-nowrap gap-4 mb-12 justify-center relative">
              <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-slate-100 -z-10 -translate-y-1/2" />
              
              {["Stamp Prep", "h-BN Pickup", "2D Pickup", "Final Release"].map((stepTitle, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveStep(idx)}
                  className={`relative flex-1 py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-300 ${
                    activeStep === idx 
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105' 
                    : 'bg-white border border-slate-200 text-slate-500 hover:border-emerald-300 hover:text-emerald-700'
                  }`}
                >
                  Step {idx + 1}: {stepTitle}
                </button>
              ))}
            </div>

            <div className="bg-emerald-50/50 rounded-[2rem] p-8 md:p-12 border border-emerald-100 min-h-[250px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  {activeStep === 0 && (
                    <div>
                      <h4 className="text-2xl font-bold text-emerald-900 mb-4">Stamp Preparation and Alignment</h4>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        A hemispherical PDMS stamp is prepared on a cleaned coverslip, followed by spin-coating of PPC on the PDMS surface. The stamp is mounted upside down and aligned under the microscope with the target sample on SiO₂/Si.
                      </p>
                    </div>
                  )}
                  {activeStep === 1 && (
                    <div>
                      <h4 className="text-2xl font-bold text-emerald-900 mb-4">Pickup of h-BN Flake</h4>
                      <p className="text-slate-600 text-lg leading-relaxed mb-4">
                        A few-layer hexagonal boron nitride (h-BN) flake is picked up from the substrate.
                      </p>
                      <div className="flex gap-4">
                        <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-emerald-700 font-bold text-sm">Temp: ~65°C</span>
                        <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-emerald-700 font-bold text-sm">Substrate: SiO₂/Si</span>
                      </div>
                    </div>
                  )}
                  {activeStep === 2 && (
                    <div>
                      <h4 className="text-2xl font-bold text-emerald-900 mb-4">Pickup of Additional 2D Materials</h4>
                      <p className="text-slate-600 text-lg leading-relaxed mb-4">
                        Exfoliated 2D materials like Graphene and Transition Metal Dichalcogenides (TMDs) are picked up sequentially using the PDMS/PPC/h-BN stack. Requires precise alignment for complex heterostructures.
                      </p>
                      <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-emerald-700 font-bold text-sm inline-block">Temp: ~55°C</span>
                    </div>
                  )}
                  {activeStep === 3 && (
                    <div>
                      <h4 className="text-2xl font-bold text-emerald-900 mb-4">Final Transfer and Release</h4>
                      <p className="text-slate-600 text-lg leading-relaxed mb-4">
                        The assembled stack is aligned and brought into contact with the target substrate. The cantilever stage is slowly retracted to detach the PDMS/PPC. Followed by Acetone/IPA cleaning to remove residue.
                      </p>
                      <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-emerald-700 font-bold text-sm inline-block">Transfer Temp: ~85°C</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-8 overflow-hidden">
              <motion.div 
                key={activeStep}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4.5, ease: "linear" }}
                className="h-full bg-emerald-400"
              />
            </div>
          </motion.div>

          {/* NEW: Key Advantages of the Cryonano 2D Transfer System */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 bg-white rounded-[3rem] p-10 border border-emerald-100 shadow-lg">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-emerald-600" /> Key Advantages of the Cryonano 2D Transfer System
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "High‑Precision Alignment (XYθ)", desc: "Precise lateral and rotational control for accurate stacking." },
                { title: "Stable Vertical Motion (XYZ)", desc: "Cantilever stage ensures smooth, controlled approach and retraction." },
                { title: "Dry Transfer Compatibility", desc: "Optimized for PDMS/PPC technique for clean, contamination‑free transfer." },
                { title: "Real‑Time Microscopy", desc: "Live optical monitoring to observe interference fringes and contact quality." },
                { title: "Complex Heterostructures", desc: "Enables fabrication of multi‑layer stacks with diverse 2D materials." },
              ].map((advantage, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h5 className="font-bold text-slate-800 mb-1">{advantage.title}</h5>
                  <p className="text-sm text-slate-600">{advantage.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* NEW: Applications */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-white rounded-[2rem] p-8 md:p-10 border border-emerald-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Layers className="w-6 h-6 text-emerald-500" /> Applications
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-600 font-medium">
              {['Van der Waals heterostructure fabrication', 'Graphene-based devices', 'TMD-based optoelectronics', 'Quantum materials research', 'Layered material interface studies'].map((app, idx) => (
                <motion.li key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {app}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* NEW: Research Output */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 bg-gradient-to-r from-emerald-50 to-white rounded-[2rem] p-8 border border-emerald-200 shadow-md">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
              <FileText className="w-5 h-5 text-emerald-600" /> Research Output
            </h3>
            <p className="text-slate-700 leading-relaxed italic">
              “Raman spectroscopic studies on the evolution of interlayer coupling and stacking order in twisted bilayers and polytypes of WSe₂” <br />
              Sourav Paul <em>et al.</em>, <span className="font-bold">Journal of Applied Physics</span>, 133, 114301 (2023)
            </p>
          </motion.div>

          {/* NEW: Conclusion for Note 3 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 bg-white rounded-[2rem] p-8 md:p-10 border border-emerald-200 shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-emerald-600" /> Conclusion
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              The Cryonano 2D Transfer System enables precise, repeatable, and contamination‑free assembly of 2D heterostructures using a universal dry transfer method. Control over alignment, temperature, and interfacial dynamics — combined with real‑time optical feedback — ensures high‑quality device fabrication for advanced materials research.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Global Footer */}
      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  );
}

export default ApplicationNotesPage;