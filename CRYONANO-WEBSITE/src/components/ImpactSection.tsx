// import { useEffect, useRef } from "react";
// import { motion, useInView, animate } from "framer-motion";
// import { Award, Briefcase, Globe2, BookOpen, Quote, ArrowRight, ExternalLink } from "lucide-react"; // Added ExternalLink

// import { Link } from "react-router-dom";

// // --- DATA ARRAYS ---
// const stats = [
//   { value: 32, suffix: "+", label: "Systems Delivered" },
//   { value: 15, suffix: "+", label: "IIT Partners" },
//   { value: 5, suffix: "+", label: "Countries Reached" },
//   { value: 15, suffix: "+", label: "Publications" },
// ];

// const credentials = [
//   {
//     icon: Award,
//     title: "SIDBI–TIFAC Acknowledged",
//     desc: "Recognized for semiconductor innovation and deep-tech excellence.",
//     color: "text-blue-500",
//     bg: "bg-blue-500/10",
//   },
//   {
//     icon: Briefcase,
//     title: "End-to-End Solutions",
//     desc: "From ideation to commercial production with modular design for agile customization and faster turnaround times.",
//     color: "text-primary",
//     bg: "bg-primary/10",
//   },
//   {
//     icon: Globe2,
//     title: "International Presence",
//     desc: "Delivering state-of-the-art quantum and cryogenic infrastructure to leading research institutions worldwide.",
//     color: "text-cyan-500",
//     bg: "bg-cyan-500/10",
//   }
// ];

// // UPDATED: Split 16 Partners into Two Rows for Dual-Track Marquee
// const partnersRow1 = [
//   { name: "IISc Bangalore", logo: "/logos/iisc.avif" },
//   { name: "IIT ISM Dhanbad", logo: "/logos/IIT ISM.avif" },
//   { name: "Chinese Academy of Sciences", logo: "/logos/CAS Beijing.avif" },
//   { name: "TATA POWER", logo: "/logos/tata.avif" },
//   { name: "TOBB Türkiye", logo: "/logos/TOBB Turkey.avif" },
//   { name: "AMD India", logo: "/logos/dae.avif" },
//   { name: "IIT Kharagpur", logo: "/logos/iit kharakpur.avif" },
//   { name: "IIT Bhubaneswar", logo: "/logos/iit bhu.png" },
// ];

// const partnersRow2 = [
//   { name: "NTU Singapore", logo: "/logos/nit singapore.avif" },
//   { name: "CEA France", logo: "/logos/cea.avif" },
//   { name: "Saha Institute", logo: "/logos/saha institute.avif" },
//   { name: "HAL India", logo: "/logos/hal.avif" },
//   { name: "IIT Ropar", logo: "/logos/iit ropar.avif" },
//   { name: "IIT Bhilai", logo: "/logos/iit bhilai.avif" },
//   { name: "INST Mohali", logo: "/logos/inst.avif" },
//   // { name: "National Quantum Lab", logo: "/logos/quantum-lab.png" }, // Or whatever your 16th logo is
// ];

// const publications = [
//   {
//     year: "2025",
//     title: "Dimensional Crossover and Emergence of Novel Phases in Puckered PdSe under Pressure",
//     authors: "T Kundu, S Das, K Dey, B Joseph, C Nayak, M Palit, SK Mahatha, K Dolui",
//     journal: "Phys. Rev. B 112, 024109",
//     url: "#"
//   },
//   {
//     year: "2025",
//     title: "Tailored one-dimensional/two-dimensional van der Waals heterostructures for unified analog and digital electronics",
//     authors: "B Karmakar, B Das, S Mandal, R Paramanik, S Maity, T Kundu, S Das",
//     journal: "Phys. Rev. Applied 23, 054013",
//     url: "#"
//   },
//   {
//     year: "2025",
//     title: "Electron-Magnon Coupling Mediated Magnetotransport in Antiferromagnetic van der Waals Heterostructure",
//     authors: "S Maity, S Das, M Palit, K Dey, B Das, T Kundu, R Paramanik, BK De",
//     journal: "Phys. Rev. B 111, L140407",
//     url: "#"
//   },
//   {
//     year: "2023",
//     title: "Raman spectroscopic studies on the evolution of interlayer coupling and stacking order in twisted bilayers and polytypes of WSe2",
//     authors: "Sourav Paul et. al.",
//     journal: "Journal of Applied Physics 133, 114301",
//     url: "#"
//   },
//   {
//     year: "2020",
//     title: "Magnetic-Field-Dependent Equilibration of Fractional Quantum Hall Edge Modes",
//     authors: "Tanmay Maiti, et. al.",
//     journal: "Phys. Rev. Lett. 125, 076802",
//     url: "#"
//   },
//   {
//     year: "2019",
//     title: "Gap states controlled transmission through 1D metal-nanotube junctions",
//     authors: "U.N. Nandi et. al.",
//     journal: "Carbon, Volume 146, Pages 106-115",
//     url: "#"
//   }
// ];

// // --- ANIMATED COUNTER COMPONENT ---
// function Counter({ from, to, suffix }: { from: number, to: number, suffix: string }) {
//   const ref = useRef<HTMLSpanElement>(null);
//   const inView = useInView(ref, { once: true, margin: "-50px" });

//   useEffect(() => {
//     if (inView && ref.current) {
//       const controls = animate(from, to, {
//         duration: 2.5,
//         ease: "easeOut",
//         onUpdate(value) {
//           if (ref.current) {
//             ref.current.textContent = Math.floor(value) + suffix;
//           }
//         },
//       });
//       return () => controls.stop();
//     }
//   }, [inView, from, to, suffix]);

//   return <span ref={ref}>{from}{suffix}</span>;
// }

// // --- MAIN SECTION EXPORT ---
// export function ImpactSection() {
//   return (
//     <section className="relative overflow-hidden">
      
//       {/* ======================================================== */}
//       {/* PART 1 & 2: STATS & LOGOS (Dark Premium Theme)           */}
//       {/* ======================================================== */}
//       {/* <div className="bg-slate-950 py-20 relative border-y border-slate-800"> */}
//       <div className="bg-slate-950 py-12 relative border-y border-slate-800">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-950 to-slate-950" />
        
//         <div className="container relative z-10">
//           {/* Animated Stats Counter */}
//           {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20 divide-x divide-slate-800/50"> */}


//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 divide-x divide-slate-800/50">
//             {stats.map((stat, idx) => (
//               <motion.div 
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1, duration: 0.6 }}
//                 className="flex flex-col items-center text-center px-4"
//               >
//                 <div className="font-display text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2 tracking-tight">
//                   <Counter from={0} to={stat.value} suffix={stat.suffix} />
//                 </div>
//                 <p className="text-sm md:text-base font-semibold text-slate-400 uppercase tracking-widest">
//                   {stat.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Trusted By - Dual Track Marquee */}
//           <div className="text-center mb-10">
//             <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Trusted by leading organizations worldwide</p>
//           </div>
          
//           <div className="relative w-full flex flex-col gap-6 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            
//             {/* TRACK 1: Scrolls Left */}
//             {/* <motion.div
//               className="flex items-center gap-6 md:gap-8 px-4 w-max"
//               animate={{ x: ["0%", "-50%"] }}
//               transition={{ ease: "linear", duration: 35, repeat: Infinity }}
//             >
//               {[...partnersRow1, ...partnersRow1].map((partner, i) => (
//                 <div key={i} className="flex items-center gap-4 shrink-0 w-64 md:w-72 h-20 px-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 group hover:bg-white/5 hover:border-slate-700 transition-all duration-500 cursor-default shadow-inner">
//                   <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center">
//                     <img 
//                       src={partner.logo} 
//                       alt={partner.name}
//                       className="max-h-full max-w-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
//                     />
//                   </div>
//                   <div className="text-[11px] md:text-xs text-slate-500 font-bold uppercase tracking-wide group-hover:text-slate-300 transition-colors duration-500 line-clamp-2">
//                     {partner.name}
//                   </div>
//                 </div>
//               ))}
//             </motion.div> */}

//             {/* TRACK 2: Scrolls Right (Notice the inverted animation array) */}
//             {/* <motion.div
//               className="flex items-center gap-6 md:gap-8 px-4 w-max"
//               animate={{ x: ["-50%", "0%"] }}
//               transition={{ ease: "linear", duration: 40, repeat: Infinity }} // Slightly slower for depth effect
//             >
//               {[...partnersRow2, ...partnersRow2].map((partner, i) => (
//                 <div key={i} className="flex items-center gap-4 shrink-0 w-64 md:w-72 h-20 px-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 group hover:bg-white/5 hover:border-slate-700 transition-all duration-500 cursor-default shadow-inner">
//                   <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center">
//                     <img 
//                       src={partner.logo} 
//                       alt={partner.name}
//                       className="max-h-full max-w-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
//                     />
//                   </div>
//                   <div className="text-[11px] md:text-xs text-slate-500 font-bold uppercase tracking-wide group-hover:text-slate-300 transition-colors duration-500 line-clamp-2">
//                     {partner.name}
//                   </div>
//                 </div>
//               ))}
//             </motion.div> */}
//             {/* TRACK 1: Scrolls Left */}
//             <motion.div
//               className="flex items-center gap-8 md:gap-10 px-4 w-max"
//               animate={{ x: ["0%", "-50%"] }}
//               transition={{ ease: "linear", duration: 35, repeat: Infinity }}
//             >
//               {[...partnersRow1, ...partnersRow1].map((partner, i) => (
//                 <div key={i} className="flex items-center gap-6 shrink-0 w-[20rem] md:w-[24rem] h-28 md:h-32 px-6 md:px-8 rounded-[1.5rem] bg-slate-900/60 border border-slate-700/80 group hover:bg-slate-800 hover:border-slate-500 transition-all duration-500 cursor-default shadow-lg">
                  
//                   {/* MUCH LARGER LOGO CONTAINER */}
//                   {/* <div className="h-16 w-20 md:h-20 md:w-28 flex-shrink-0 flex items-center justify-center bg-white/10 p-2 md:p-3 rounded-xl group-hover:bg-white/20 transition-colors duration-500 shadow-inner">
//                     <img 
//                       src={partner.logo} 
//                       alt={partner.name}
//                       // Base opacity bumped to 90% so it is crystal clear even without hovering
//                       className="max-h-full max-w-full object-contain filter grayscale opacity-90 brightness-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-500"
//                     />
//                   </div> */}


//                   <div className="h-16 w-20 md:h-20 md:w-28 flex-shrink-0 flex items-center justify-center bg-white/10 p-2 md:p-3 rounded-xl group-hover:bg-white/20 transition-colors duration-500 shadow-inner">
//                     <img 
//                       src={partner.logo} 
//                       alt={partner.name}
//                       className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>
                  
//                   {/* LARGER & BRIGHTER TEXT */}
//                   <div className="text-sm md:text-base text-slate-300 font-black uppercase tracking-widest group-hover:text-white transition-colors duration-500 line-clamp-2 leading-tight">
//                     {partner.name}
//                   </div>

//                 </div>
//               ))}
//             </motion.div>

//             {/* TRACK 2: Scrolls Right */}
//             <motion.div
//               className="flex items-center gap-8 md:gap-10 px-4 w-max"
//               animate={{ x: ["-50%", "0%"] }}
//               transition={{ ease: "linear", duration: 40, repeat: Infinity }} 
//             >
//               {[...partnersRow2, ...partnersRow2].map((partner, i) => (
//                 <div key={i} className="flex items-center gap-6 shrink-0 w-[20rem] md:w-[24rem] h-28 md:h-32 px-6 md:px-8 rounded-[1.5rem] bg-slate-900/60 border border-slate-700/80 group hover:bg-slate-800 hover:border-slate-500 transition-all duration-500 cursor-default shadow-lg">
                  
//                   {/* MUCH LARGER LOGO CONTAINER */}
//                   {/* <div className="h-16 w-20 md:h-20 md:w-28 flex-shrink-0 flex items-center justify-center bg-white/10 p-2 md:p-3 rounded-xl group-hover:bg-white/20 transition-colors duration-500 shadow-inner">
//                     <img 
//                       src={partner.logo} 
//                       alt={partner.name}
//                       // Base opacity bumped to 90% so it is crystal clear even without hovering
//                       className="max-h-full max-w-full object-contain filter grayscale opacity-90 brightness-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-500"
//                     />
//                   </div> */}

//                   <div className="h-16 w-20 md:h-20 md:w-28 flex-shrink-0 flex items-center justify-center bg-white/10 p-2 md:p-3 rounded-xl group-hover:bg-white/20 transition-colors duration-500 shadow-inner">
//                     <img 
//                       src={partner.logo} 
//                       alt={partner.name}
//                       className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>
                  
//                   {/* LARGER & BRIGHTER TEXT */}
//                   <div className="text-sm md:text-base text-slate-300 font-black uppercase tracking-widest group-hover:text-white transition-colors duration-500 line-clamp-2 leading-tight">
//                     {partner.name}
//                   </div>

//                 </div>
//               ))}
//             </motion.div>

//           </div>
//         </div>
//       </div>

//       {/* ======================================================== */}
//       {/* PART 3: CREDENTIALS & IMPACT (Light Theme)                 */}
//       {/* ======================================================== */}
//       <div className="bg-slate-50 py-24 relative">
//         <div className="container relative z-10">
          
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
//               Credentials & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Impact</span>
//             </h2>
//             <p className="text-lg text-slate-600 leading-relaxed">
//               Trusted by leading research institutions worldwide to deliver uncompromising precision.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-24">
//             {credentials.map((cred, idx) => {
//               const Icon = cred.icon;
//               return (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.15, duration: 0.6 }}
//                   className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center overflow-hidden"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
//                   <div className={`mx-auto w-16 h-16 rounded-2xl ${cred.bg} border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
//                     <Icon className={`w-8 h-8 ${cred.color}`} />
//                   </div>
                  
//                   <h3 className="font-display text-xl font-bold text-slate-900 mb-4 relative z-10 group-hover:text-primary transition-colors">
//                     {cred.title}
//                   </h3>
//                   <p className="text-slate-600 text-sm leading-relaxed relative z-10">
//                     {cred.desc}
//                   </p>
                  
//                   <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* ======================================================== */}
//           {/* PART 4: PUBLISHED RESEARCH (Interactive Timeline)        */}
//           {/* ======================================================== */}
//           {/* <div className="max-w-5xl mx-auto">
//             <div className="flex items-center gap-4 mb-12">
//               <div className="p-3 rounded-xl bg-slate-200 text-slate-700">
//                 <BookOpen className="w-6 h-6" />
//               </div>
//               <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
//                 Published Research Using Our Systems
//               </h2>
//             </div>

//             <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 pl-8 md:pl-12 space-y-10">
//               {publications.map((pub, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ delay: idx * 0.1, duration: 0.5 }}
//                   className="relative group cursor-default"
//                 >
                  
//                   <div className="absolute -left-[41px] md:-left-[57px] top-4 w-4 h-4 rounded-full bg-white border-4 border-slate-300 group-hover:border-primary transition-colors duration-300 shadow-sm" />
                  
                  
//                   <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    
//                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
//                     <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
                      
                      
//                       <div className="flex-shrink-0 bg-slate-50 border border-slate-200 text-slate-800 font-extrabold text-xl px-5 py-2.5 rounded-xl shadow-inner group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300">
//                         {pub.year}
//                       </div>

                      
//                       <div className="flex-grow space-y-2">
//                         <h4 className="text-lg md:text-xl font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
//                           {pub.title}
//                         </h4>
//                         <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
//                           <p className="text-slate-600 font-medium flex items-center gap-1.5">
//                             <Quote className="w-3.5 h-3.5 text-slate-400" /> {pub.authors}
//                           </p>
//                           <span className="hidden sm:block text-slate-300">•</span>
//                           <p className="text-slate-800 font-bold">
//                             {pub.journal}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div> */}


          





//           {/* ======================================================== */}
//           {/* PART 4: PUBLISHED RESEARCH (Premium Bi-Color Grid)       */}
//           {/* ======================================================== */}
//           <div className="max-w-7xl mx-auto mt-32">
            
//             {/* Section Header */}
//             <div className="flex flex-col items-center justify-center gap-4 mb-14 text-center">
//               <motion.div 
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 className="p-3.5 rounded-[1.2rem] bg-white text-blue-600 border border-blue-100 shadow-xl shadow-blue-500/10"
//               >
//                 <BookOpen className="w-8 h-8" />
//               </motion.div>
//               <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
//                 Published Research <br className="md:hidden" />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 ml-0 md:ml-2">
//                   Using Our Systems
//                 </span>
//               </h2>
//             </div>

//             {/* Side-by-Side Bi-Color Grid */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
//               {publications.slice(0, 3).map((pub, idx) => {
                
//                 // Array of distinct, premium subtle gradients for each card
//                 // const cardShades = [
//                 //   "from-blue-50/80 via-white to-slate-50",
//                 //   "from-cyan-50/70 via-white to-slate-50",
//                 //   "from-indigo-50/70 via-white to-slate-50"
//                 // ];

//                 // const glowColors = [
//                 //   "bg-blue-400/10",
//                 //   "bg-cyan-400/10",
//                 //   "bg-indigo-400/10"
//                 // ];

//                 // Array of rich, dense premium gradients for each card
//                 const cardShades = [
//                   "from-blue-100 via-blue-50 to-white",
//                   "from-cyan-100 via-cyan-50 to-white",
//                   "from-indigo-100 via-indigo-50 to-white"
//                 ];

//                 // Increased opacity to make the animated background glow much brighter
//                 const glowColors = [
//                   "bg-blue-400/25",
//                   "bg-cyan-400/25",
//                   "bg-indigo-400/25"
//                 ];

//                 return (
//                   <motion.div
//                     key={idx}
//                     // Autonomous Floating Animation
//                     animate={{ y: [0, -8, 0] }}
//                     transition={{ 
//                       duration: 5, 
//                       repeat: Infinity, 
//                       ease: "easeInOut", 
//                       delay: idx * 0.4 
//                     }}
//                     whileHover={{ scale: 1.02, y: -5 }}
//                     // Tighter padding (p-6), distinct backgrounds
//                     className={`group relative flex flex-col rounded-[2rem] p-6 shadow-lg hover:shadow-2xl border border-slate-200 hover:border-blue-400 transition-all duration-500 overflow-hidden bg-gradient-to-br ${cardShades[idx % 3]}`}
//                   >
//                     {/* Autonomous moving background orb for premium feel */}
//                     <motion.div 
//                       animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
//                       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
//                       className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none ${glowColors[idx % 3]}`}
//                     />

//                     {/* Structured Top Row: Visible Numbering & Big Year */}
//                     <div className="flex justify-between items-center mb-5 pb-4 border-b border-slate-200/80 relative z-10">
//                       <div className="flex items-center gap-3">
//                         <span className="font-display text-3xl font-black text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
//                           0{idx + 1}
//                         </span>
//                         <div className="w-6 h-1.5 bg-blue-200 group-hover:bg-blue-500 rounded-full transition-colors duration-300" />
//                       </div>
                      
//                       <div className="bg-white border border-slate-200 shadow-sm rounded-xl px-3 py-1.5 flex items-center gap-2 group-hover:border-blue-300 group-hover:shadow-blue-500/10 transition-all duration-300">
//                         <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
//                           Published
//                         </span>
//                         <span className="text-lg font-black text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
//                           {pub.year}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Publication Title with Hover Translate */}
//                     <h4 className="text-[16px] md:text-[17px] font-extrabold text-slate-900 leading-snug mb-4 relative z-10 group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300">
//                       {pub.title}
//                     </h4>

//                     {/* Authors & Journal (Tighter margins) */}
//                     <div className="flex-grow space-y-3 mb-5 relative z-10">
//                       <div className="flex items-start gap-2.5">
//                         <Quote className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-1" />
//                         <p className="text-[13px] text-slate-600 font-semibold leading-relaxed italic line-clamp-3">
//                           {pub.authors}
//                         </p>
//                       </div>
//                       <div className="flex items-center gap-2 text-[10px] font-black text-slate-700 tracking-widest uppercase bg-white/80 w-fit px-3 py-1.5 rounded-md border border-slate-200/80 group-hover:border-blue-200 group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300">
//                         <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
//                         {pub.journal}
//                       </div>
//                     </div>

//                     {/* Centered & Compact 'Read Paper' Button */}
//                     <div className="mt-auto pt-4 border-t border-slate-200/80 flex justify-center relative z-10">
//                       <a 
//                         href={pub.url} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white transition-all duration-300 shadow-md hover:shadow-blue-500/30 hover:-translate-y-1 group/btn"
//                       >
//                         <span className="text-[11px] font-extrabold tracking-widest uppercase">Read Paper</span>
//                         <ExternalLink className="w-3.5 h-3.5 text-white group-hover/btn:scale-110 transition-transform duration-300" />
//                       </a>
//                     </div>

//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* High-End VIEW ALL Button */}
//             <motion.div 
//               className="flex justify-center pt-2"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <Link 
//                 to="/about/research-publications" 
//                 className="group flex items-center gap-4 px-10 py-4 bg-slate-900 hover:bg-blue-700 text-white rounded-2xl shadow-xl hover:shadow-blue-600/30 transition-all duration-500 transform hover:-translate-y-1"
//               >
//                 <span className="text-[14px] font-black tracking-[0.2em] uppercase">
//                   Explore All Publications
//                 </span>
//                 <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
//                   <ArrowRight className="w-4 h-4 text-white group-hover:text-blue-700 transition-colors duration-500 group-hover:translate-x-1" />
//                 </div>
//               </Link>
//             </motion.div>

//           </div>





          

//         </div>
//       </div>
//     </section>
//   );
// }












import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Award, Briefcase, Globe2, BookOpen, Quote, ArrowRight, ExternalLink } from "lucide-react";

import { Link } from "react-router-dom";

// --- DATA ARRAYS ---
const stats = [
  { value: 32, suffix: "+", label: "Systems Delivered" },
  { value: 15, suffix: "+", label: "IIT Partners" },
  { value: 5, suffix: "+", label: "Countries Reached" },
  { value: 15, suffix: "+", label: "Publications" },
];

const credentials = [
  {
    icon: Award,
    title: "SIDBI–TIFAC Acknowledged",
    desc: "Recognized for semiconductor innovation and deep-tech excellence.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Briefcase,
    title: "End-to-End Solutions",
    desc: "From ideation to commercial production with modular design for agile customization and faster turnaround times.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Globe2,
    title: "International Presence",
    desc: "Delivering state-of-the-art quantum and cryogenic infrastructure to leading research institutions worldwide.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  }
];

// Split 16 Partners into Two Rows for Dual-Track Marquee
const partnersRow1 = [
  { name: "IISc Bangalore", logo: "/logos/iisc.avif" },
  { name: "IIT ISM Dhanbad", logo: "/logos/IIT ISM.avif" },
  { name: "Chinese Academy of Sciences", logo: "/logos/CAS Beijing.avif" },
  { name: "TATA POWER", logo: "/logos/tata.avif" },
  { name: "TOBB Türkiye", logo: "/logos/TOBB Turkey.avif" },
  { name: "AMD India", logo: "/logos/dae.avif" },
  { name: "IIT Kharagpur", logo: "/logos/iit kharakpur.avif" },
  { name: "IIT Bhubaneswar", logo: "/logos/iit bhu.png" },
];

const partnersRow2 = [
  { name: "NTU Singapore", logo: "/logos/nit singapore.avif" },
  { name: "CEA France", logo: "/logos/cea.avif" },
  { name: "Saha Institute", logo: "/logos/saha institute.avif" },
  { name: "HAL India", logo: "/logos/hal.avif" },
  { name: "IIT Ropar", logo: "/logos/iit ropar.avif" },
  { name: "IIT Bhilai", logo: "/logos/iit bhilai.avif" },
  { name: "INST Mohali", logo: "/logos/inst.avif" },
];

const publications = [
  {
    year: "2025",
    title: "Dimensional Crossover and Emergence of Novel Phases in Puckered PdSe under Pressure",
    authors: "T Kundu, S Das, K Dey, B Joseph, C Nayak, M Palit, SK Mahatha, K Dolui",
    journal: "Phys. Rev. B 112, 024109",
    url: "#"
  },
  {
    year: "2025",
    title: "Tailored one-dimensional/two-dimensional van der Waals heterostructures for unified analog and digital electronics",
    authors: "B Karmakar, B Das, S Mandal, R Paramanik, S Maity, T Kundu, S Das",
    journal: "Phys. Rev. Applied 23, 054013",
    url: "#"
  },
  {
    year: "2025",
    title: "Electron-Magnon Coupling Mediated Magnetotransport in Antiferromagnetic van der Waals Heterostructure",
    authors: "S Maity, S Das, M Palit, K Dey, B Das, T Kundu, R Paramanik, BK De",
    journal: "Phys. Rev. B 111, L140407",
    url: "#"
  },
  {
    year: "2023",
    title: "Raman spectroscopic studies on the evolution of interlayer coupling and stacking order in twisted bilayers and polytypes of WSe2",
    authors: "Sourav Paul et. al.",
    journal: "Journal of Applied Physics 133, 114301",
    url: "#"
  },
  {
    year: "2020",
    title: "Magnetic-Field-Dependent Equilibration of Fractional Quantum Hall Edge Modes",
    authors: "Tanmay Maiti, et. al.",
    journal: "Phys. Rev. Lett. 125, 076802",
    url: "#"
  },
  {
    year: "2019",
    title: "Gap states controlled transmission through 1D metal-nanotube junctions",
    authors: "U.N. Nandi et. al.",
    journal: "Carbon, Volume 146, Pages 106-115",
    url: "#"
  }
];

// --- ANIMATED COUNTER COMPONENT ---
function Counter({ from, to, suffix }: { from: number, to: number, suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.floor(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, suffix]);

  return <span ref={ref}>{from}{suffix}</span>;
}

// --- MAIN SECTION EXPORT ---
export function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      
      {/* ======================================================== */}
      {/* PART 1 & 2: CREDENTIALS & PUBLISHED RESEARCH             */}
      {/* ======================================================== */}
      {/* FIX: Added 'bg-gradient-to-b from-white via-slate-50 to-white' 
        This provides a decent, professional background color in the middle 
        while perfectly fading into white at the top and bottom edges.
        This removes any separable horizontal lines and creates a smooth feel!
      */}
      {/* <div className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white border-none">
        <div className="container relative z-10"> */}

        {/* ======================================================== */}
      {/* PART 1 & 2: CREDENTIALS & PUBLISHED RESEARCH             */}
      {/* ======================================================== */}
      <div className="relative py-0 bg-white border-none overflow-hidden">
        
        {/* EYE-CATCHING AMBIENT BACKGROUND (Dense & Light Combination) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          
          {/* DENSE COLOR: Deep Royal Blue */}
          <div className="absolute top-[-5%] left-[-10%] w-[55vw] h-[55vw] bg-blue-400/25 rounded-full blur-[100px]" />
          
          {/* LIGHT/BRIGHT COLOR: Vibrant Neon Cyan */}
          <div className="absolute top-[10%] right-[-5%] w-[50vw] h-[50vw] bg-cyan-200/30 rounded-full blur-[100px]" />
          
          {/* SECONDARY DENSE COLOR: Rich Indigo for depth */}
          <div className="absolute bottom-[-5%] left-[15%] w-[60vw] h-[60vw] bg-indigo-400/20 rounded-full blur-[120px]" />
          
          {/* Top and Bottom edge feathering to ensure a 100% seamless merge with other sections */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="container relative z-10">
          
          {/* --- CREDENTIALS & IMPACT --- */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Credentials & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Impact</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Trusted by leading research institutions worldwide to deliver uncompromising precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {credentials.map((cred, idx) => {
              const Icon = cred.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className={`mx-auto w-16 h-16 rounded-2xl ${cred.bg} border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                    <Icon className={`w-8 h-8 ${cred.color}`} />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-4 relative z-10 group-hover:text-primary transition-colors">
                    {cred.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                    {cred.desc}
                  </p>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              );
            })}
          </div>

          {/* --- PUBLISHED RESEARCH --- */}
          <div className="max-w-7xl mx-auto mt-1 mb-4">
            
            {/* Section Header */}
            <div className="flex flex-col items-center justify-center gap-4 mb-14 text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-3.5 rounded-[1.2rem] bg-white text-blue-600 border border-blue-100 shadow-xl shadow-blue-500/10"
              >
                <BookOpen className="w-8 h-8" />
              </motion.div>
              <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Published Research <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 ml-0 md:ml-2">
                  Using Our Systems
                </span>
              </h2>
            </div>

            {/* Side-by-Side Bi-Color Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              {publications.slice(0, 3).map((pub, idx) => {
                const cardShades = [
                  "from-blue-100 via-blue-50 to-white",
                  "from-cyan-100 via-cyan-50 to-white",
                  "from-indigo-100 via-indigo-50 to-white"
                ];

                const glowColors = [
                  "bg-blue-400/25",
                  "bg-cyan-400/25",
                  "bg-indigo-400/25"
                ];

                return (
                  <motion.div
                    key={idx}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut", 
                      delay: idx * 0.4 
                    }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`group relative flex flex-col rounded-[2rem] p-6 shadow-lg hover:shadow-2xl border border-slate-200 hover:border-blue-400 transition-all duration-500 overflow-hidden bg-gradient-to-br ${cardShades[idx % 3]}`}
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                      className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none ${glowColors[idx % 3]}`}
                    />

                    <div className="flex justify-between items-center mb-5 pb-4 border-b border-slate-200/80 relative z-10">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-3xl font-black text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                          0{idx + 1}
                        </span>
                        <div className="w-6 h-1.5 bg-blue-200 group-hover:bg-blue-500 rounded-full transition-colors duration-300" />
                      </div>
                      
                      <div className="bg-white border border-slate-200 shadow-sm rounded-xl px-3 py-1.5 flex items-center gap-2 group-hover:border-blue-300 group-hover:shadow-blue-500/10 transition-all duration-300">
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
                          Published
                        </span>
                        <span className="text-lg font-black text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                          {pub.year}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-[16px] md:text-[17px] font-extrabold text-slate-900 leading-snug mb-4 relative z-10 group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300">
                      {pub.title}
                    </h4>

                    <div className="flex-grow space-y-1 mb-0 relative z-10">
                      <div className="flex items-start gap-2.5">
                        <Quote className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-1" />
                        <p className="text-[13px] text-slate-600 font-semibold leading-relaxed italic line-clamp-3">
                          {pub.authors}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-black text-slate-700 tracking-widest uppercase bg-white/80 w-fit px-3 py-1.5 rounded-md border border-slate-200/80 group-hover:border-blue-200 group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                        {pub.journal}
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-200/80 flex justify-center relative z-10">
                      <a 
                        href={pub.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white transition-all duration-300 shadow-md hover:shadow-blue-500/30 hover:-translate-y-1 group/btn"
                      >
                        <span className="text-[11px] font-extrabold tracking-widest uppercase">Read Paper</span>
                        <ExternalLink className="w-3.5 h-3.5 text-white group-hover/btn:scale-110 transition-transform duration-300" />
                      </a>
                    </div>

                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              className="flex justify-center pt-0 pb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/about/research-publications" 
                className="group flex items-center gap-4 px-10 py-4 bg-slate-900 hover:bg-blue-700 text-white rounded-2xl shadow-xl hover:shadow-blue-600/30 transition-all duration-500 transform hover:-translate-y-1"
              >
                <span className="text-[14px] font-black tracking-[0.2em] uppercase">
                  Explore All Publications
                </span>
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                  <ArrowRight className="w-4 h-4 text-white group-hover:text-blue-700 transition-colors duration-500 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* PART 3: STATS & LOGOS (Dark Premium Theme)               */}
      {/* ======================================================== */}
      {/* Reordered to be at the bottom as requested */}
      <div className="bg-slate-950 py-10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-950 to-slate-950" />
        
        <div className="container relative z-10">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 divide-x divide-slate-800/50">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="font-display text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2 tracking-tight">
                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm md:text-base font-semibold text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-10">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Trusted by leading organizations worldwide</p>
          </div>
          
          <div className="relative w-full flex flex-col gap-6 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            
            <motion.div
              className="flex items-center gap-8 md:gap-10 px-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            >
              {[...partnersRow1, ...partnersRow1].map((partner, i) => (
                <div key={i} className="flex items-center gap-6 shrink-0 w-[20rem] md:w-[24rem] h-28 md:h-32 px-6 md:px-8 rounded-[1.5rem] bg-slate-900/60 border border-slate-700/80 group hover:bg-slate-800 hover:border-slate-500 transition-all duration-500 cursor-default shadow-lg">
                  <div className="h-16 w-20 md:h-20 md:w-28 flex-shrink-0 flex items-center justify-center bg-white/10 p-2 md:p-3 rounded-xl group-hover:bg-white/20 transition-colors duration-500 shadow-inner">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-sm md:text-base text-slate-300 font-black uppercase tracking-widest group-hover:text-white transition-colors duration-500 line-clamp-2 leading-tight">
                    {partner.name}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center gap-8 md:gap-10 px-4 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ ease: "linear", duration: 40, repeat: Infinity }} 
            >
              {[...partnersRow2, ...partnersRow2].map((partner, i) => (
                <div key={i} className="flex items-center gap-6 shrink-0 w-[20rem] md:w-[24rem] h-28 md:h-32 px-6 md:px-8 rounded-[1.5rem] bg-slate-900/60 border border-slate-700/80 group hover:bg-slate-800 hover:border-slate-500 transition-all duration-500 cursor-default shadow-lg">
                  <div className="h-16 w-20 md:h-20 md:w-28 flex-shrink-0 flex items-center justify-center bg-white/10 p-2 md:p-3 rounded-xl group-hover:bg-white/20 transition-colors duration-500 shadow-inner">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-sm md:text-base text-slate-300 font-black uppercase tracking-widest group-hover:text-white transition-colors duration-500 line-clamp-2 leading-tight">
                    {partner.name}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}