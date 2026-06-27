// import { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Cpu, Snowflake, Magnet, Microscope, Zap, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";

// // ADDED: 'filter' and 'targetCategory' to pass routing state
// const categories = [
//   {
//     icon: Cpu,
//     title: "Quantum Hardware",
//     description: "Ultra-low noise instrumentation designed for quantum transport and qubit stabilization. Featuring isolated voltage sources and RF filtering.",
//     products: ["QuantumVolt™", "CryoConnect", "CryoClean™"],
//     filter: "RESEARCH",
//     targetCategory: "Quantum Hardware"
//   },
//   {
//     icon: Snowflake,
//     title: "Cryogenics",
//     description: "Precision thermal control and nanometer-scale positioning from 77K to millikelvin environments. Essential for advanced materials research.",
//     products: ["NanoStage", "Probe Station", "Cryo Dipstick", "2D Transfer"],
//     filter: "RESEARCH",
//     targetCategory: "Cryogenics"
//   },
//   {
//     icon: Magnet,
//     title: "Electromagnets",
//     description: "High-field air-core and dipole magnet systems engineered for stable continuous DC operation. Custom-configurable for spintronics.",
//     products: ["EMC2T Variable Gap", "Spectroscopy Dipole", "Bitter Coils"],
//     filter: "RESEARCH",
//     targetCategory: "Electromagnets"
//   },
//   {
//     icon: Microscope,
//     title: "Microscopes",
//     description: "Apochromatic optical precision meets intelligent digital automation. True 4K UHD imaging with AI-assisted measurement workflows.",
//     products: ["UltraClear 4K", "CryoScope™ Hub", "Motorised 2D Transfer"],
//     filter: "RESEARCH",
//     targetCategory: "Microscopes"
//   },
//   {
//     icon: Zap,
//     title: "Industrial Power",
//     description: "Industrial-grade rugged power systems, high-power converters, and pure sine wave inverters designed for complex environments.",
//     products: ["AC-DC Converters", "DC-DC Systems", "400Hz Inverters"],
//     filter: "INDUSTRY",
//     targetCategory: "All Solutions"
//   },
// ];

// export function ProductCategories() {
//   const scrollerRef = useRef<HTMLDivElement>(null);
//   const [autoScroll, setAutoScroll] = useState(true);
//   const [manualSpeed, setManualSpeed] = useState(0);

//   useEffect(() => {
//     let animationFrameId: number;

//     const scroll = () => {
//       if (scrollerRef.current) {
//         let currentSpeed = 0;
//         if (manualSpeed !== 0) {
//           currentSpeed = manualSpeed; 
//         } else if (autoScroll) {
//           currentSpeed = 1; 
//         }

//         if (currentSpeed !== 0) {
//           scrollerRef.current.scrollLeft += currentSpeed;

//           const halfWidth = scrollerRef.current.scrollWidth / 2;
//           if (scrollerRef.current.scrollLeft >= halfWidth) {
//             scrollerRef.current.scrollLeft = 0;
//           } else if (scrollerRef.current.scrollLeft <= 0 && currentSpeed < 0) {
//             scrollerRef.current.scrollLeft = halfWidth;
//           }
//         }
//       }
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     animationFrameId = requestAnimationFrame(scroll);
//     return () => cancelAnimationFrame(animationFrameId);
//   }, [autoScroll, manualSpeed]);

//   return (
//     <section className="relative pt-0 pb-6 bg-background overflow-hidden">
      
//       <div className="container relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.7 }}
//           className="mb-12 md:text-center"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 border border-primary/20 text-primary text-xs font-extrabold tracking-widest uppercase mb-6 md:mx-auto shadow-[0_0_10px_rgba(var(--primary),0.1)]">
//             <Sparkles className="w-4 h-4" />
//             Core Capabilities
//           </div>
//           <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
//             Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Extremes</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl md:mx-auto leading-relaxed">
//             From stabilizing fragile qubits to powering industrial automation, our modular hardware architecture integrates seamlessly into your most critical workflows.
//           </p>
//         </motion.div>
//       </div>

//       <div className="relative w-full group/slider">
        
//         <button 
//           onMouseDown={() => setManualSpeed(-8)}
//           onMouseUp={() => setManualSpeed(0)}
//           onMouseLeave={() => setManualSpeed(0)}
//           onTouchStart={() => setManualSpeed(-8)}
//           onTouchEnd={() => setManualSpeed(0)}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-background/80 backdrop-blur-md border border-primary/30 text-primary opacity-0 group-hover/slider:opacity-100 hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-110 hidden md:flex"
//         >
//           <ChevronLeft className="w-8 h-8" />
//         </button>
        
//         <button 
//           onMouseDown={() => setManualSpeed(8)}
//           onMouseUp={() => setManualSpeed(0)}
//           onMouseLeave={() => setManualSpeed(0)}
//           onTouchStart={() => setManualSpeed(8)}
//           onTouchEnd={() => setManualSpeed(0)}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-background/80 backdrop-blur-md border border-primary/30 text-primary opacity-0 group-hover/slider:opacity-100 hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-110 hidden md:flex"
//         >
//           <ChevronRight className="w-8 h-8" />
//         </button>

//         {/* <div 
//           ref={scrollerRef}
//           className="flex overflow-x-hidden w-full py-8 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] cursor-grab active:cursor-grabbing"
//           onMouseEnter={() => setAutoScroll(false)}
//           onMouseLeave={() => setAutoScroll(true)} 
//         >
//           {[...categories, ...categories].map((cat, i) => (
            
//             <div 
//               key={i} 
//               className="group relative w-[380px] shrink-0 p-[1px] mx-4 rounded-[2rem] overflow-hidden transition-transform duration-500 hover:-translate-y-3"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-border via-background to-border group-hover:from-primary/60 group-hover:to-cyan-400/60 transition-colors duration-700" />
              
//               <div className="relative h-full bg-background/95 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col items-center text-center z-10 shadow-2xl">
                
//                 <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
//                   <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-[spin_8s_linear_infinite] group-hover:border-primary/80 transition-colors duration-500" />
//                   <div className="absolute inset-3 bg-gradient-to-br from-primary/10 to-transparent rounded-full animate-pulse group-hover:from-primary/30 transition-colors duration-500" />
//                   <div className="relative w-12 h-12 bg-background border border-primary/40 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
//                     <cat.icon className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
//                   </div>
//                 </div>
                
//                 <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
//                   {cat.title}
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed mb-8 flex-grow text-sm px-2">
//                   {cat.description}
//                 </p>

//                 <div className="flex flex-wrap justify-center gap-2 mb-10">
//                   {cat.products.map((p) => (
//                     <span 
//                       key={p} 
//                       className="text-xs bg-secondary/80 border border-border/50 text-foreground px-3 py-1.5 rounded-full font-semibold group-hover:border-primary/40 group-hover:bg-primary/5 transition-colors duration-300"
//                     >
//                       {p}
//                     </span>
//                   ))}
//                 </div>

                
//                 <Link 
//                   to="/products" 
//                   state={{ filter: cat.filter, category: cat.targetCategory }}
//                   className="mt-auto w-[80%] mx-auto block"
//                 >
//                   <button className="group/btn w-full py-3.5 rounded-xl font-bold text-white bg-primary border border-primary/50 shadow-md shadow-primary/30 hover:shadow-[0_0_20px_rgba(var(--primary),0.9),0_0_40px_rgba(var(--primary),0.6),0_0_60px_rgba(34,211,238,0.5)] hover:border-cyan-400/50 hover:bg-red-600 transition-all duration-500 flex items-center justify-center gap-2 overflow-hidden relative">
//                     <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
//                       Explore Division <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
//                     </span>
//                     <motion.div 
//                       animate={{ x: ["-100%", "200%"] }}
//                       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                       className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-0"
//                     />
//                   </button>
//                 </Link>

//               </div>
//             </div>
//           ))}
//         </div> */}







//         <div 
//           ref={scrollerRef}
//           className="flex overflow-x-hidden w-full py-12 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] cursor-grab active:cursor-grabbing"
//           onMouseEnter={() => setAutoScroll(false)}
//           onMouseLeave={() => setAutoScroll(true)} 
//         >
//           {/* UPDATED MAPPING BLOCK: Dynamic Button & Pill Hover Colors */}
//           {[...categories, ...categories].map((cat, i) => {
            
//             // Array of 5 distinct themes, now including specific hover colors for the Button (btnHover) and Pills (pillHover)
//             const themes = [
//               { bg: "from-blue-50 via-indigo-50/60 to-blue-100", border: "border-blue-200", shadow: "group-hover:shadow-blue-500/25 group-hover:border-blue-400", titleText: "group-hover:text-blue-700", iconRing: "border-blue-300 group-hover:border-blue-500", iconGlow: "from-blue-200 to-transparent group-hover:from-blue-300", pillHover: "group-hover:border-blue-400 group-hover:text-blue-800", btnHover: "group-hover:bg-blue-600 group-hover:shadow-blue-500/30" },
//               { bg: "from-cyan-50 via-sky-50/60 to-cyan-100", border: "border-cyan-200", shadow: "group-hover:shadow-cyan-500/25 group-hover:border-cyan-400", titleText: "group-hover:text-cyan-700", iconRing: "border-cyan-300 group-hover:border-cyan-500", iconGlow: "from-cyan-200 to-transparent group-hover:from-cyan-300", pillHover: "group-hover:border-cyan-400 group-hover:text-cyan-800", btnHover: "group-hover:bg-cyan-600 group-hover:shadow-cyan-500/30" },
//               { bg: "from-emerald-50 via-teal-50/60 to-emerald-100", border: "border-emerald-200", shadow: "group-hover:shadow-emerald-500/25 group-hover:border-emerald-400", titleText: "group-hover:text-emerald-700", iconRing: "border-emerald-300 group-hover:border-emerald-500", iconGlow: "from-emerald-200 to-transparent group-hover:from-emerald-300", pillHover: "group-hover:border-emerald-400 group-hover:text-emerald-800", btnHover: "group-hover:bg-emerald-600 group-hover:shadow-emerald-500/30" },
//               { bg: "from-rose-50 via-pink-50/60 to-rose-100", border: "border-rose-200", shadow: "group-hover:shadow-rose-500/25 group-hover:border-rose-400", titleText: "group-hover:text-rose-700", iconRing: "border-rose-300 group-hover:border-rose-500", iconGlow: "from-rose-200 to-transparent group-hover:from-rose-300", pillHover: "group-hover:border-rose-400 group-hover:text-rose-800", btnHover: "group-hover:bg-rose-600 group-hover:shadow-rose-500/30" },
//               { bg: "from-amber-50 via-orange-50/60 to-amber-100", border: "border-amber-200", shadow: "group-hover:shadow-amber-500/25 group-hover:border-amber-400", titleText: "group-hover:text-amber-700", iconRing: "border-amber-300 group-hover:border-amber-500", iconGlow: "from-amber-200 to-transparent group-hover:from-amber-300", pillHover: "group-hover:border-amber-400 group-hover:text-amber-800", btnHover: "group-hover:bg-amber-600 group-hover:shadow-amber-500/30" },
//             ];
            
//             const theme = themes[i % 5];

//             return (
//               <div 
//                 key={i} 
//                 className={`group relative w-[380px] shrink-0 mx-4 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 shadow-lg ${theme.shadow}`}
//               >
//                 {/* Glossy Card Body */}
//                 <div className={`relative h-full rounded-[2.5rem] p-8 flex flex-col items-center text-center z-10 border-2 bg-gradient-to-br overflow-hidden transition-colors duration-500 ${theme.bg} ${theme.border}`}>
                  
//                   {/* Glass Reflection Highlight */}
//                   <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />
                  
//                   {/* Icon Setup */}
//                   <div className="relative w-24 h-24 mb-6 flex items-center justify-center z-10">
//                     <div className={`absolute inset-0 border-2 border-dashed rounded-full animate-[spin_8s_linear_infinite] transition-colors duration-500 ${theme.iconRing}`} />
//                     <div className={`absolute inset-3 bg-gradient-to-br rounded-full animate-pulse transition-colors duration-500 ${theme.iconGlow}`} />
//                     <div className="relative w-12 h-12 bg-white border border-white/80 rounded-xl flex items-center justify-center shadow-lg z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
//                       <cat.icon className="w-6 h-6 text-slate-800" />
//                     </div>
//                   </div>
                  
//                   {/* Title & Description */}
//                   <h3 className={`font-display text-2xl font-extrabold text-slate-900 mb-4 transition-colors duration-300 relative z-10 ${theme.titleText}`}>
//                     {cat.title}
//                   </h3>
//                   <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow text-[15px] px-2 relative z-10">
//                     {cat.description}
//                   </p>

//                   {/* Product Pills - Now inherit theme border and text color on hover */}
//                   <div className="flex flex-wrap justify-center gap-2 mb-10 relative z-10">
//                     {cat.products.map((p) => (
//                       <span 
//                         key={p} 
//                         className={`text-[11px] uppercase tracking-wider bg-white/60 backdrop-blur-sm border border-white/80 text-slate-700 px-3 py-1.5 rounded-full font-extrabold shadow-sm group-hover:bg-white transition-colors duration-300 ${theme.pillHover}`}
//                       >
//                         {p}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Button & Link - Now inherits dense theme background on card hover */}
//                   <Link 
//                     to="/products" 
//                     state={{ filter: cat.filter, category: cat.targetCategory }}
//                     className="mt-auto w-[85%] mx-auto block relative z-10"
//                   >
//                     {/* The base color is slate-900, but theme.btnHover overrides it to the vibrant dense color immediately when the card is hovered */}
//                     <button className={`group/btn w-full py-4 rounded-2xl font-bold text-white bg-slate-900 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden relative ${theme.btnHover}`}>
//                       <span className="relative z-10 flex items-center gap-2 text-[14px] tracking-wide">
//                         Explore Division <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
//                       </span>
//                       {/* Button Gloss Sweep */}
//                       <motion.div 
//                         animate={{ x: ["-100%", "200%"] }}
//                         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
//                       />
//                     </button>
//                   </Link>

//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }





import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Snowflake, Magnet, Microscope, Zap, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// ADDED: 'filter' and 'targetCategory' to pass routing state
const categories = [
  {
    icon: Cpu,
    title: "Quantum Hardware",
    description: "Ultra-low noise instrumentation designed for quantum transport and qubit stabilization. Featuring isolated voltage sources and RF filtering.",
    products: ["QuantumVolt™", "CryoConnect", "CryoClean™"],
    filter: "RESEARCH",
    targetCategory: "Quantum Hardware"
  },
  {
    icon: Snowflake,
    title: "Cryogenics",
    description: "Precision thermal control and nanometer-scale positioning from 77K to millikelvin environments. Essential for advanced materials research.",
    products: ["NanoStage", "Probe Station", "Cryo Dipstick", "2D Transfer"],
    filter: "RESEARCH",
    targetCategory: "Cryogenics"
  },
  {
    icon: Magnet,
    title: "Electromagnets",
    description: "High-field air-core and dipole magnet systems engineered for stable continuous DC operation. Custom-configurable for spintronics.",
    products: ["EMC2T Variable Gap", "Spectroscopy Dipole", "Bitter Coils"],
    filter: "RESEARCH",
    targetCategory: "Electromagnets"
  },
  {
    icon: Microscope,
    title: "Microscopes",
    description: "Apochromatic optical precision meets intelligent digital automation. True 4K UHD imaging with AI-assisted measurement workflows.",
    products: ["UltraClear 4K", "CryoScope™ Hub", "Motorised 2D Transfer"],
    filter: "RESEARCH",
    targetCategory: "Microscopes"
  },
  {
    icon: Zap,
    title: "Industrial Power",
    description: "Industrial-grade rugged power systems, high-power converters, and pure sine wave inverters designed for complex environments.",
    products: ["AC-DC Converters", "DC-DC Systems", "400Hz Inverters"],
    filter: "INDUSTRY",
    targetCategory: "All Solutions"
  },
];

export function ProductCategories() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [manualSpeed, setManualSpeed] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const scroll = () => {
      if (scrollerRef.current) {
        let currentSpeed = 0;
        if (manualSpeed !== 0) {
          currentSpeed = manualSpeed; 
        } else if (autoScroll) {
          currentSpeed = 1; 
        }

        if (currentSpeed !== 0) {
          scrollerRef.current.scrollLeft += currentSpeed;

          const halfWidth = scrollerRef.current.scrollWidth / 2;
          if (scrollerRef.current.scrollLeft >= halfWidth) {
            scrollerRef.current.scrollLeft = 0;
          } else if (scrollerRef.current.scrollLeft <= 0 && currentSpeed < 0) {
            scrollerRef.current.scrollLeft = halfWidth;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [autoScroll, manualSpeed]);

  return (
    <section className="relative pt-0 pb-6 bg-background overflow-hidden">
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 border border-primary/20 text-primary text-xs font-extrabold tracking-widest uppercase mb-6 md:mx-auto shadow-[0_0_10px_rgba(var(--primary),0.1)]">
            <Sparkles className="w-4 h-4" />
            Core Capabilities
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">Extrems</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl md:mx-auto leading-relaxed">
            From stabilizing fragile qubits to powering industrial automation, our modular hardware architecture integrates seamlessly into your most critical workflows.
          </p>
        </motion.div>
      </div>

      {/* NEW: Added professional background color matching system architecture to the slider area */}
      {/* <div className="relative w-full group/slider bg-slate-100 border-y border-slate-200/80 py-4 shadow-inner"> */}
      <div className="relative w-full group/slider bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 border-y border-blue-900/50 py-4 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
        
        <button 
          onMouseDown={() => setManualSpeed(-8)}
          onMouseUp={() => setManualSpeed(0)}
          onMouseLeave={() => setManualSpeed(0)}
          onTouchStart={() => setManualSpeed(-8)}
          onTouchEnd={() => setManualSpeed(0)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-background/80 backdrop-blur-md border border-primary/30 text-primary opacity-0 group-hover/slider:opacity-100 hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-110 hidden md:flex"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        
        <button 
          onMouseDown={() => setManualSpeed(8)}
          onMouseUp={() => setManualSpeed(0)}
          onMouseLeave={() => setManualSpeed(0)}
          onTouchStart={() => setManualSpeed(8)}
          onTouchEnd={() => setManualSpeed(0)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-background/80 backdrop-blur-md border border-primary/30 text-primary opacity-0 group-hover/slider:opacity-100 hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-110 hidden md:flex"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        <div 
          ref={scrollerRef}
          className="flex overflow-x-hidden w-full py-12 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setAutoScroll(false)}
          onMouseLeave={() => setAutoScroll(true)} 
        >
          {/* UPDATED MAPPING BLOCK: Unified Standard Colors & Specific Hover Targets */}
          {[...categories, ...categories].map((cat, i) => (
            <div 
              key={i} 
              className="group relative w-[380px] shrink-0 mx-4 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 shadow-md hover:shadow-blue-500/20"
            >
              {/* Glossy Card Body (Default: White, Hover: Blue Border) */}
              <div className="relative h-full rounded-[2.5rem] p-8 flex flex-col items-center text-center z-10 border-2 bg-white border-slate-200 group-hover:border-blue-400 overflow-hidden transition-colors duration-500">
                
                {/* Glass Reflection Highlight */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />
                
                {/* Icon Setup */}
                <div className="relative w-24 h-24 mb-6 flex items-center justify-center z-10">
                  <div className="absolute inset-0 border-2 border-dashed rounded-full animate-[spin_8s_linear_infinite] transition-colors duration-500 border-slate-300 group-hover:border-blue-400" />
                  <div className="absolute inset-3 bg-gradient-to-br rounded-full animate-pulse transition-colors duration-500 from-slate-100 to-transparent group-hover:from-blue-100" />
                  <div className="relative w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm z-10 group-hover:scale-110 group-hover:rotate-3 group-hover:border-blue-300 transition-transform duration-300">
                    <cat.icon className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
                
                {/* Title & Description (Hover shifts to blue) */}
                <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-4 transition-colors duration-300 relative z-10 group-hover:text-blue-700">
                  {cat.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow text-[15px] px-2 relative z-10 group-hover:text-blue-900/70 transition-colors duration-300">
                  {cat.description}
                </p>

                {/* Product Pills (Hover shifts to blue accents) */}
                <div className="flex flex-wrap justify-center gap-2 mb-10 relative z-10">
                  {cat.products.map((p) => (
                    <span 
                      key={p} 
                      className="text-[11px] uppercase tracking-wider bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full font-extrabold shadow-sm transition-colors duration-300 group-hover:bg-blue-50 group-hover:border-blue-300 group-hover:text-blue-800"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                {/* Button & Link (Hover shifts to Red) */}
                <Link 
                  to="/products" 
                  state={{ filter: cat.filter, category: cat.targetCategory }}
                  className="mt-auto w-[85%] mx-auto block relative z-10"
                >
                  <button className="group/btn w-full py-4 rounded-2xl font-bold text-white bg-slate-900 shadow-md hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden relative group-hover:bg-red-600 group-hover:shadow-red-500/40">
                    <span className="relative z-10 flex items-center gap-2 text-[14px] tracking-wide">
                      Explore Division <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                    </span>
                    {/* Button Gloss Sweep */}
                    <motion.div 
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
                    />
                  </button>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}