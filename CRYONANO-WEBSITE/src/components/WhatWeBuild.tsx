// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { 
//   Network, 
//   Snowflake, 
//   Zap, 
//   Settings2,
//   Cpu,
//   ArrowRight
// } from "lucide-react";

// // Data structure utilizing your actual product paths from Navbar.tsx
// const buildCategories = [
//   {
//     id: "quantum",
//     icon: Network,
//     title: "Quantum & Nano",
//     description: "Atomic-scale control and device fabrication systems.",
//     theme: {
//       color: "text-blue-600",
//       bgLight: "bg-blue-50",
//       borderLight: "border-blue-100",
//       borderHover: "hover:border-blue-300",
//       shadowHover: "hover:shadow-blue-500/10",
//       ring: "ring-blue-50"
//     },
//     links: [
//       { name: "2D Transfer System", path: "/products/2d-transfer-system" },
//       { name: "Probe Station", path: "/products/psm-100" },
//       { name: "4K Microscope", path: "/products/ultraclear-4k" }
//     ]
//   },
//   {
//     id: "cryo",
//     icon: Snowflake,
//     title: "Cryogenics",
//     description: "Reliable systems for ultra-low temperature environments.",
//     theme: {
//       color: "text-cyan-600",
//       bgLight: "bg-cyan-50",
//       borderLight: "border-cyan-100",
//       borderHover: "hover:border-cyan-300",
//       shadowHover: "hover:shadow-cyan-500/10",
//       ring: "ring-cyan-50"
//     },
//     links: [
//       { name: "Nano Stage", path: "/products/nano-stage" },
//       { name: "CryoConnect", path: "/products/breakout-box" },
//       { name: "Cryogenic Dipstick", path: "/products/dipstick" }
//     ]
//   },
//   {
//     id: "power",
//     icon: Zap,
//     title: "Industrial Power",
//     description: "High-performance power for demanding industrial workflows.",
//     theme: {
//       color: "text-teal-600",
//       bgLight: "bg-teal-50",
//       borderLight: "border-teal-100",
//       borderHover: "hover:border-teal-300",
//       shadowHover: "hover:shadow-teal-500/10",
//       ring: "ring-teal-50"
//     },
//     links: [
//       { name: "AC-DC High Power", path: "/products/ac-dc-system-high" },
//       { name: "DC-DC Low Power", path: "/products/dc-dc-system-low" },
//       { name: "400Hz Inverters", path: "/products/inverter-400hz-rugged" }
//     ]
//   },
//   {
//     id: "custom",
//     icon: Settings2,
//     title: "Custom Systems",
//     description: "End-to-end design for complex research requirements.",
//     theme: {
//       color: "text-indigo-600",
//       bgLight: "bg-indigo-50",
//       borderLight: "border-indigo-100",
//       borderHover: "hover:border-indigo-300",
//       shadowHover: "hover:shadow-indigo-500/10",
//       ring: "ring-indigo-50"
//     },
//     links: [
//       { name: "Custom Converters", path: "/products/power-converters" },
//       { name: "Talk to Engineers", path: "/contact" }
//     ]
//   }
// ];

// export function WhatWeBuild() {
//   return (
//     <section className="py-20 lg:py-32 bg-white relative overflow-hidden border-b border-slate-200">
      
//       {/* Container */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
        
//         {/* Replicated Heading Style from the 2nd Image */}
//         <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 flex flex-col items-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[11px] font-black tracking-widest uppercase mb-6 shadow-sm"
//           >
//             <Cpu className="w-3.5 h-3.5 text-blue-500" />
//             Core Capabilities
//           </motion.div>
          
//           <motion.h2 
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
//           >
//             Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Extremes</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-slate-500 text-lg md:text-xl font-medium"
//           >
//             From stabilizing fragile qubits to powering industrial automation, our modular hardware architecture integrates seamlessly into your most critical workflows.
//           </motion.p>
//         </div>

//         {/* 4 Side-by-Side Cards Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
//           {buildCategories.map((category, index) => (
//             <motion.div
//               key={category.id}
//               // Entrance animation
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 50 }}
//               className="h-full"
//             >
//               <motion.div
//                 // Autonomous floating animation (each card floats at slightly different speeds)
//                 animate={{ y: [0, -6, 0] }}
//                 transition={{ repeat: Infinity, duration: 4 + index * 0.5, ease: "easeInOut" }}
//                 // Hover interactive animation
//                 whileHover={{ y: -10 }}
//                 className={`flex flex-col h-full bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm transition-all duration-500 relative overflow-hidden group ${category.theme.borderHover} ${category.theme.shadowHover}`}
//               >
                
//                 {/* Decorative Background Blob */}
//                 <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none ${category.theme.bgLight}`} />

//                 {/* Top Icon section styled like the reference image */}
//                 <div className="flex flex-col items-center text-center mb-8 relative z-10">
//                   <div className="relative mb-6">
//                     {/* Concentric rings animation effect */}
//                     <div className={`absolute inset-0 rounded-full scale-150 opacity-20 ring-1 ${category.theme.ring} group-hover:animate-ping`} />
//                     <div className={`absolute inset-0 rounded-full scale-125 opacity-40 ring-1 ${category.theme.ring}`} />
                    
//                     <div className={`w-16 h-16 rounded-full flex items-center justify-center relative z-10 bg-white border shadow-sm ${category.theme.borderLight}`}>
//                       <category.icon className={`w-8 h-8 ${category.theme.color}`} />
//                     </div>
//                   </div>
                  
//                   <h3 className="font-display text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
//                     {category.title}
//                   </h3>
//                   <p className="text-slate-500 text-sm leading-relaxed px-2">
//                     {category.description}
//                   </p>
//                 </div>

//                 {/* Links / Products Area - Displayed as clickable pill buttons */}
//                 <div className="mt-auto relative z-10 flex flex-col gap-2.5">
//                   {category.links.map((link, i) => (
//                     <Link
//                       key={i}
//                       to={link.path}
//                       className={`flex items-center justify-between w-full py-2.5 px-4 rounded-xl border border-slate-100 bg-slate-50/50 text-sm font-semibold text-slate-600 transition-all duration-300 hover:bg-white hover:shadow-md ${category.theme.borderHover} hover:${category.theme.color}`}
//                     >
//                       <span>{link.name}</span>
//                       <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
//                     </Link>
//                   ))}
//                 </div>

//                 {/* Bottom CTA to match image */}
//                 <div className="pt-6 mt-6 border-t border-slate-100">
//                   <Link 
//                     to="/products"
//                     className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-white transition-all duration-300 opacity-90 hover:opacity-100 hover:shadow-lg ${category.id === 'quantum' ? 'bg-blue-600' : category.id === 'cryo' ? 'bg-cyan-600' : category.id === 'power' ? 'bg-teal-600' : 'bg-indigo-600'}`}
//                   >
//                     Explore Division <ArrowRight className="w-4 h-4" />
//                   </Link>
//                 </div>

//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
        
//       </div>
//     </section>
//   );
// }
















import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Layers } from "lucide-react";

// Data structure updated with deeper, clearly visible professional gradients
const portfolioCategories = [
  {
    id: "quantum",
    title: "Quantum & Nano",
    description: "Atomic-scale control and device fabrication systems.",
    filter: "RESEARCH",
    targetCategory: "Quantum Hardware",
    theme: {
      // Deepened the gradient for clear visibility
      cardBg: "bg-gradient-to-br from-slate-50 via-blue-50/80 to-blue-100/90", 
      borderHover: "hover:border-blue-400/60",
      shadowHover: "hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)]",
      placeholderGlow: "group-hover:border-blue-400/40 group-hover:bg-blue-50/30",
      itemHoverBg: "hover:bg-blue-50/50",
      itemHoverText: "hover:text-blue-700",
      itemHoverBorder: "hover:border-blue-200",
      btnBase: "bg-slate-900 text-white",
      btnHover: "group-hover/card:bg-blue-600 group-hover/card:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
    },
    links: [
      { name: "2D Transfer System", path: "/products/2d-transfer-system" },
      { name: "Probe Station", path: "/products/psm-100" },
      { name: "4K Microscope", path: "/products/ultraclear-4k" }
    ]
  },
  {
    id: "cryo",
    title: "Cryogenics",
    description: "Reliable systems for ultra-low temperature environments.",
    filter: "RESEARCH",
    targetCategory: "Cryogenics",
    theme: {
      // Deepened the gradient for clear visibility
      cardBg: "bg-gradient-to-br from-slate-50 via-cyan-50/80 to-cyan-100/90",
      borderHover: "hover:border-cyan-400/60",
      shadowHover: "hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)]",
      placeholderGlow: "group-hover:border-cyan-400/40 group-hover:bg-cyan-50/30",
      itemHoverBg: "hover:bg-cyan-50/50",
      itemHoverText: "hover:text-cyan-700",
      itemHoverBorder: "hover:border-cyan-200",
      btnBase: "bg-slate-900 text-white",
      btnHover: "group-hover/card:bg-cyan-600 group-hover/card:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
    },
    links: [
      { name: "Nano Stage", path: "/products/nano-stage" },
      { name: "CryoConnect", path: "/products/breakout-box" },
      { name: "Cryogenic Dipstick", path: "/products/dipstick" }
    ]
  },
  {
    id: "power",
    title: "Industrial Power",
    description: "High-performance power for demanding industrial workflows.",
    filter: "INDUSTRY",
    targetCategory: "All Solutions",
    theme: {
      // Deepened the gradient for clear visibility
      cardBg: "bg-gradient-to-br from-slate-50 via-emerald-50/80 to-emerald-100/90",
      borderHover: "hover:border-emerald-400/60",
      shadowHover: "hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)]",
      placeholderGlow: "group-hover:border-emerald-400/40 group-hover:bg-emerald-50/30",
      itemHoverBg: "hover:bg-emerald-50/50",
      itemHoverText: "hover:text-emerald-700",
      itemHoverBorder: "hover:border-emerald-200",
      btnBase: "bg-slate-900 text-white",
      btnHover: "group-hover/card:bg-emerald-600 group-hover/card:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
    },
    links: [
      { name: "AC-DC High Power", path: "/products/ac-dc-system-high" },
      { name: "DC-DC Low Power", path: "/products/dc-dc-system-low" },
      { name: "400Hz Inverters", path: "/products/inverter-400hz-rugged" }
    ]
  },
  {
    id: "custom",
    title: "Custom Systems",
    description: "End-to-end design for complex research requirements.",
    filter: "INDUSTRY", 
    targetCategory: "All Solutions",
    theme: {
      // Deepened the gradient for clear visibility
      cardBg: "bg-gradient-to-br from-slate-50 via-indigo-50/80 to-indigo-100/90",
      borderHover: "hover:border-indigo-400/60",
      shadowHover: "hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)]",
      placeholderGlow: "group-hover:border-indigo-400/40 group-hover:bg-indigo-50/30",
      itemHoverBg: "hover:bg-indigo-50/50",
      itemHoverText: "hover:text-indigo-700",
      itemHoverBorder: "hover:border-indigo-200",
      btnBase: "bg-slate-900 text-white",
      btnHover: "group-hover/card:bg-indigo-600 group-hover/card:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
    },
    links: [
      { name: "Custom Converters", path: "/products/power-converters" },
      { name: "Talk to Engineers", path: "/contact" }
    ]
  }
];

// export function WhatWeBuild() {
//   return (
//     <section className="pt-12 pb-24 lg:pt-16 lg:pb-32 bg-[#FAFAFA] relative overflow-hidden">




export function WhatWeBuild() {
  return (
    <section className="pt-12 pb-24 lg:pt-16 lg:pb-32 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[11px] font-black tracking-widest uppercase mb-6 shadow-sm"
          >
            <Layers className="w-3.5 h-3.5 text-slate-900" />
            Deep Tech Portfolio
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
          >
            Pioneering Deep Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">Integration</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl font-medium"
          >
            Architecting the foundational hardware for next-generation quantum computing, advanced material research, and high-stakes industrial automation.
          </motion.p>
        </div>

        {/* 4 Side-by-Side Professional Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {portfolioCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 50 }}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`group/card flex flex-col h-full rounded-[2rem] p-6 lg:p-8 border border-slate-200 shadow-sm transition-all duration-300 relative overflow-hidden ${category.theme.cardBg} ${category.theme.borderHover} ${category.theme.shadowHover}`}
              >
                
                {/* Image Placeholder with Hover Glow */}
                <div className={`relative z-10 w-full aspect-[4/3] rounded-2xl bg-white/60 backdrop-blur-sm border-2 border-dashed border-slate-300 flex items-center justify-center mb-8 shrink-0 transition-all duration-500 shadow-sm ${category.theme.placeholderGlow}`}>
                  <span className="text-sm font-semibold tracking-wide text-slate-500 group-hover/card:text-slate-700 transition-colors">
                    Illustrative Image Placeholder
                  </span>
                </div>

                {/* Title and Description */}
                <div className="text-center mb-8 relative z-10">
                  <h3 className="font-display text-2xl font-bold mb-3 text-slate-900">
                    {category.title}
                  </h3>
                  <p className="text-sm leading-relaxed px-2 font-medium text-slate-600">
                    {category.description}
                  </p>
                </div>

                {/* Interactive Inner Product Links */}
                <div className="mt-auto relative z-10 flex flex-col gap-3">
                  {category.links.map((link, i) => (
                    <Link
                      key={i}
                      to={link.path}
                      className={`group/link flex items-center justify-between w-full py-3 px-4 rounded-xl border border-slate-200/80 bg-white/90 text-sm font-bold text-slate-700 transition-all duration-300 shadow-sm ${category.theme.itemHoverBg} ${category.theme.itemHoverText} ${category.theme.itemHoverBorder}`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-3 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0 relative z-10" />
                    </Link>
                  ))}
                </div>

                {/* Bottom Main Explore CTA with specific Routing State */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 relative z-10">
                  <Link 
                    to="/products"
                    state={{ filter: category.filter, category: category.targetCategory }}
                    className={`relative overflow-hidden w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all duration-500 ${category.theme.btnBase} ${category.theme.btnHover}`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Division <ArrowRight className="w-4 h-4" />
                    </span>
                    
                    {/* Sweeping Shine Animation on the button */}
                    <motion.div 
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
                    />
                  </Link>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}