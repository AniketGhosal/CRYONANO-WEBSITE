// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Layers, ThermometerSnowflake, Magnet, Activity, ArrowRight, ArrowDown } from "lucide-react";
// import { Link } from "react-router-dom";

// // --- ACCURATE DATA WITH BRIGHT, EXACT HEX COLORS ---
// const workflowSteps = [
//   {
//     id: "prep",
//     label: "Step 01 — Preparation",
//     title: "Sample Alignment & Assembly",
//     desc: "Build and pattern your 2D heterostructures with absolute deterministic precision.",
//     icon: Layers,
//     theme: {
//       bg: "bg-[#e0f5ee]", 
//       text: "text-[#084d3c]", 
//       iconBg: "bg-[#0d7a5f] text-white", 
//       border: "border-[#0d7a5f]/20",
//       gradient: "from-[#0d7a5f] to-teal-400",
//       lightGlow: "shadow-[#0d7a5f]/10"
//     },
//     products: [
//       { 
//         name: "Motorised 2D Transfer System", 
//         desc: "Automated flake mapping and deterministic stacking under full optical control.", 
//         path: "/products/2d-transfer-motorised" 
//       },
//       { 
//         name: "Cryogenic NanoStage", 
//         desc: "Vitrified nano-positioning for complex assemblies and super-resolution imaging.", 
//         path: "/products/nano-stage" 
//       }
//     ]
//   },
//   {
//     id: "environment",
//     label: "Step 02 — Thermal Control",
//     title: "Cryogenic Environment",
//     desc: "Set the ultimate thermodynamic baseline for your physics, from 77K down to millikelvin.",
//     icon: ThermometerSnowflake,
//     theme: {
//       bg: "bg-[#eee9fb]", 
//       text: "text-[#352470]", 
//       iconBg: "bg-[#5b3fa6] text-white", 
//       border: "border-[#5b3fa6]/20",
//       gradient: "from-[#5b3fa6] to-purple-400",
//       lightGlow: "shadow-[#5b3fa6]/10"
//     },
//     products: [
//       { 
//         name: "100 PSM Probe Station", 
//         desc: "Cost-effective, reliable sub-micron electrical probing of nanoelectronic devices.", 
//         path: "/products/psm-100" 
//       },
//       { 
//         name: "Cryogenic Dipstick", 
//         desc: "Precision cryogenic sample control for rapid electrical and materials characterization.", 
//         path: "/products/dipstick" 
//       }
//     ]
//   },
//   {
//     id: "magnetic",
//     label: "Step 03 — Magnetic Field",
//     title: "Field Manipulation",
//     desc: "Steady, homogeneous magnetic fields for Hall, magnetoresistance, and spintronic measurements.",
//     icon: Magnet,
//     theme: {
//       bg: "bg-[#fceee7]", 
//       text: "text-[#7d2c0e]", 
//       iconBg: "bg-[#c94c20] text-white", 
//       border: "border-[#c94c20]/20",
//       gradient: "from-[#c94c20] to-orange-400",
//       lightGlow: "shadow-[#c94c20]/10"
//     },
//     products: [
//       { 
//         name: "Spectroscopy Electromagnet", 
//         desc: "Ultra-compact dipole delivering exceptional field strength for optical integration.", 
//         path: "/products/spectroscopy-magnet" 
//       },
//       { 
//         name: "Bitter Type Electromagnet", 
//         desc: "High-field air-core DC magnet achieving continuous operation up to 1.1 Tesla.", 
//         path: "/products/bitter-magnet" 
//       }
//     ]
//   },
//   {
//     id: "control",
//     label: "Step 04 — Signal & Power",
//     title: "Data Acquisition & Control",
//     desc: "Galvanically isolated signals and stable power to drive and read your quantum states.",
//     icon: Activity,
//     theme: {
//       bg: "bg-[#e3eef9]", 
//       text: "text-[#0d3967]", 
//       iconBg: "bg-[#1a5fa8] text-white", 
//       border: "border-[#1a5fa8]/20",
//       gradient: "from-[#1a5fa8] to-blue-400",
//       lightGlow: "shadow-[#1a5fa8]/10"
//     },
//     products: [
//       { 
//         name: "QuantumVolt™ DAC", 
//         desc: "Ultra-low-noise gate and bias control through fully isolated bipolar outputs.", 
//         path: "/products/quantum-volt" 
//       },
//       { 
//         name: "CryoClean™ RF Filters", 
//         desc: "Suppress high-frequency EMI before it reaches sensitive quantum devices.", 
//         path: "/products/cryo-clean" 
//       },
//       { 
//         name: "Precision Power Converters", 
//         desc: "High-efficiency AC-DC and DC-DC systems for clean, stable lab power.", 
//         path: "/products/ac-dc-system-low" 
//       }
//     ]
//   }
// ];

// export function SynergisticStack() {
//   // Keeping 0 as default so the first one opens, but auto-scroll is completely removed
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   return (
//     <section className="relative py-24 bg-slate-50 overflow-hidden border-t border-slate-200">
      
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.03)_0%,transparent_60%)] pointer-events-none" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.03)_0%,transparent_60%)] pointer-events-none" />

//       <div className="container max-w-5xl relative z-10">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
//             <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
//             Complete Lab Ecosystem
//           </div>
//           <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
//             From First Flake to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Publishable Data</span>
//           </h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//             Every instrument your laboratory needs—engineered to interface flawlessly from sample preparation through to cryogenic transport measurement.
//           </p>
//         </div>

//         <div className="relative pl-4 md:pl-10">
//           {/* Vertical Connecting Line */}
//           <div className="absolute left-[33px] md:left-[65px] top-8 bottom-12 w-[2px] bg-slate-200 rounded-full" />

//           <div className="space-y-6">
//             {workflowSteps.map((step, index) => {
//               const isActive = activeIndex === index;
//               const StepIcon = step.icon;

//               return (
//                 <div key={step.id} className="relative">
                  
//                   {/* Timeline Node */}
//                   <div className={`absolute -left-[31px] md:-left-[7px] top-6 w-10 h-10 rounded-full border-4 flex items-center justify-center transition-all duration-500 shadow-sm z-10 ${
//                     isActive ? `bg-white ${step.theme.border} scale-110` : 'bg-slate-100 border-slate-200 scale-100'
//                   }`}>
//                     {isActive && (
//                       <motion.div 
//                         layoutId="activeNodeGlow"
//                         className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.theme.gradient} opacity-20 blur-md`}
//                       />
//                     )}
//                     <span className={`text-xs font-black transition-colors ${isActive ? step.theme.text : 'text-slate-400'}`}>
//                       0{index + 1}
//                     </span>
//                   </div>

//                   {/* Main Card */}
//                   <div className="ml-10 md:ml-16">
//                     <motion.div 
//                       onClick={() => setActiveIndex(isActive ? null : index)}
//                       className={`relative rounded-2xl md:rounded-[1.5rem] overflow-hidden cursor-pointer transition-all duration-500 border ${
//                         isActive 
//                           ? `bg-white ${step.theme.border} shadow-xl ${step.theme.lightGlow}` 
//                           : `bg-white border-transparent shadow-sm hover:shadow-md hover:border-slate-200`
//                       }`}
//                     >
//                       {/* Card Header */}
//                       <div className={`p-6 md:p-8 flex items-start sm:items-center justify-between gap-4 transition-colors duration-500 ${step.theme.bg}`}>
//                         <div className="flex items-center gap-5">
//                           <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-colors duration-500 ${step.theme.iconBg}`}>
//                             <StepIcon className="w-6 h-6" />
//                           </div>
//                           <div>
//                             <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${step.theme.text}`}>
//                               {step.label}
//                             </p>
//                             <h3 className={`font-display text-xl md:text-2xl font-extrabold ${step.theme.text}`}>
//                               {step.title}
//                             </h3>
//                           </div>
//                         </div>
                        
//                         {!isActive && (
//                           <p className={`hidden lg:block text-sm flex-grow max-w-sm ml-8 text-right italic line-clamp-1 opacity-80 ${step.theme.text}`}>
//                             {step.desc}
//                           </p>
//                         )}

//                         {/* HIGHLY ANIMATED TOGGLE BUTTON */}
//                         <motion.div 
//                           animate={isActive ? { rotate: 180, y: 0 } : { y: [0, 5, 0] }}
//                           transition={isActive ? { duration: 0.4 } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                           className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 shadow-md border ${
//                             isActive ? 'bg-white/80 border-transparent' : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg'
//                           }`}
//                         >
//                           <ArrowDown className={`w-5 h-5 ${step.theme.text}`} />
//                         </motion.div>
//                       </div>

//                       {/* Expandable Content (Products) */}
//                       <AnimatePresence initial={false}>
//                         {isActive && (
//                           <motion.div
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: "auto", opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
//                             className="overflow-hidden bg-white"
//                           >
//                             <div className="p-6 md:p-8 border-t border-slate-100">
//                               <p className="text-slate-600 mb-6 font-medium max-w-2xl">
//                                 {step.desc}
//                               </p>
                              
//                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 {step.products.map((prod, i) => (
//                                   <Link 
//                                     key={i} 
//                                     to={prod.path}
//                                     onClick={(e) => e.stopPropagation()} 
//                                     className="group block p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300"
//                                   >
//                                     <div className="flex justify-between items-start gap-4">
//                                       <div>
//                                         <h4 className={`font-bold mb-1 transition-colors ${step.theme.text}`}>
//                                           {prod.name}
//                                         </h4>
//                                         <p className="text-xs text-slate-500 leading-relaxed">
//                                           {prod.desc}
//                                         </p>
//                                       </div>
//                                       <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-slate-100 transition-colors group-hover:${step.theme.bg}`}>
//                                         <ArrowRight className={`w-3.5 h-3.5 text-slate-400 group-hover:-rotate-45 transition-all group-hover:${step.theme.text}`} />
//                                       </div>
//                                     </div>
//                                   </Link>
//                                 ))}
//                               </div>
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>

//                     </motion.div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Global CTA Strip */}
//         <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
//           <div>
//             <h3 className="font-display text-2xl font-extrabold text-slate-800 mb-1">Build your lab, stage by stage</h3>
//             <p className="text-sm text-slate-500 font-medium">Start with what you need now. Every instrument integrates as you scale.</p>
//           </div>
//           <div className="flex gap-4 w-full md:w-auto">
//             <Link to="/contact" className="flex-1 md:flex-none text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all hover:-translate-y-0.5">
//               Talk to an expert
//             </Link>
//             <Link to="/products" className="flex-1 md:flex-none text-center px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl border border-slate-200 transition-all hover:-translate-y-0.5">
//               View Full Catalog
//             </Link>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }






















import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Microscope, TestTube, Network, SlidersHorizontal, ChevronRight, Target } from "lucide-react";
import { Link } from "react-router-dom";

// 1. Updated Workflow Data
const workflowSteps = [
  {
    id: "prep",
    step: "1",
    action: "Prepare",
    layer: "Layer 1:",
    title: "Sample Preparation & Imaging",
    subTitle: "Deterministic Stacking & Inspection",
    icon: Microscope,
    image1: "/images/scenes/hero-1.jpg", 
    image2: "/images/product-renders/2d-transfer-system.jpg",
    fallback: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
    theme: {
      bg: "bg-purple-100",           
      primary: "text-purple-950",    
      secondary: "text-purple-800",
      iconBg: "bg-purple-700 text-white",
      cardBorder: "border-purple-300",
      btnDefault: "bg-white border-purple-200 text-purple-700 hover:border-purple-400 hover:shadow-[0_4px_15px_rgba(126,34,206,0.15)]",
      btnHover: "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-600/30",
      numberColor: "text-purple-300/80",
      activeTab: "bg-purple-700 text-white border-purple-700 shadow-lg shadow-purple-700/30",
      inactiveTab: "bg-white text-slate-500 border-slate-200"
    },
    products: [
      { name: "Motorised 2D Transfer System", desc: "Automated flake mapping and deterministic stacking.", path: "/products/2d-transfer-motorised" },
      { name: "4K Microscope Platform", desc: "High-resolution optical inspection and AI-assisted workflows.", path: "/products/ultraclear-4k" },
      { name: "Cryogenic NanoStage", desc: "Vitrified nano-positioning for complex assemblies.", path: "/products/nano-stage" }
    ],
    outcome: "Atomic-scale control with repeatable accuracy."
  },
  {
    id: "measure",
    step: "2",
    action: "Measure",
    layer: "Layer 2:",
    title: "Electrical & Transport Measurement",
    subTitle: "Complete Characterisation Ecosystem",
    icon: TestTube,
    image1: "/images/scenes/scene-2-back.jpg",
    image2: "/images/product-renders/probe-station.jpg",
    fallback: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070",
    theme: {
      bg: "bg-teal-100",           
      primary: "text-teal-950",    
      secondary: "text-teal-800",
      iconBg: "bg-teal-600 text-white",
      cardBorder: "border-teal-300",
      btnDefault: "bg-white border-teal-200 text-teal-600 hover:border-teal-400 hover:shadow-[0_4px_15px_rgba(13,148,136,0.15)]",
      btnHover: "bg-teal-600 border-teal-600 text-white shadow-lg shadow-teal-600/30",
      numberColor: "text-teal-300/80",
      activeTab: "bg-teal-600 text-white border-teal-600 shadow-lg shadow-teal-600/30",
      inactiveTab: "bg-white text-slate-500 border-slate-200"
    },
    products: [
      { name: "Cryogenic Probe Station", desc: "Variable-temperature electrical probing of nanoelectronic devices.", path: "/products/psm-100" },
      { name: "Cryogenic Dipstick Probe", desc: "Precision cryogenic sample control for rapid characterization.", path: "/products/dipstick" },
      { name: "CryoConnect Breakout Box", desc: "Isolated and shielded signal routing for cryogenic systems.", path: "/products/breakout-box" }
    ],
    outcome: "Stable and accurate performance under extreme conditions."
  },
  {
    id: "Environment",
    step: "3",
    action: "Environment",
    layer: "Layer 3:",
    title: "Field & Cryogenic Environment",
    subTitle: "Magnetic Field & Extreme Conditions",
    icon: Network,
    image1: "/images/scenes/scene-3-back.jpg",
    image2: "/images/product-renders/magnet-system.jpg",
    fallback: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070",
    theme: {
      bg: "bg-blue-100",           
      primary: "text-blue-950",    
      secondary: "text-blue-800",
      iconBg: "bg-blue-700 text-white",
      cardBorder: "border-blue-300",
      btnDefault: "bg-white border-blue-200 text-blue-700 hover:border-blue-400 hover:shadow-[0_4px_15px_rgba(29,78,216,0.15)]",
      btnHover: "bg-blue-700 border-blue-700 text-white shadow-lg shadow-blue-700/30",
      numberColor: "text-blue-300/80",
      activeTab: "bg-blue-700 text-white border-blue-700 shadow-lg shadow-blue-700/30",
      inactiveTab: "bg-white text-slate-500 border-slate-200"
    },
    products: [
      { name: "Spectroscopy Electromagnet", desc: "Ultra-compact dipole delivering exceptional field strength.", path: "/products/spectroscopy-magnet" },
      { name: "Bitter Type Electromagnet", desc: "High-field air-core DC magnet achieving continuous operation.", path: "/products/bitter-magnet" },
      { name: "Integrated Magnetic Systems", desc: "Combined sample transport and variable-field measurement.", path: "/products/integrated-systems" }
    ],
    outcome: "Purpose-built solutions for unique engineering challenges."
  },
  {
    id: "control",
    step: "4",
    action: "Control",
    layer: "Layer 4:",
    title: "Signal Control & Data Acquisition",
    subTitle: "Environmental Control & Measurement Brain",
    icon: SlidersHorizontal,
    image1: "/images/scenes/hero-2.jpg",
    image2: "/images/product-renders/power-converter.jpg",
    fallback: "https://images.unsplash.com/photo-1635048424329-a9bfb10440f4?q=80&w=2070",
    theme: {
      bg: "bg-orange-100",           
      primary: "text-orange-950",    
      secondary: "text-orange-800",
      iconBg: "bg-orange-600 text-white",
      cardBorder: "border-orange-300",
      btnDefault: "bg-white border-orange-200 text-orange-700 hover:border-orange-400 hover:shadow-[0_4px_15px_rgba(234,88,12,0.15)]",
      btnHover: "bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-600/30",
      numberColor: "text-orange-300/80",
      activeTab: "bg-orange-600 text-white border-orange-600 shadow-lg shadow-orange-600/30",
      inactiveTab: "bg-white text-slate-500 border-slate-200"
    },
    // Removed DAC products as requested
    products: [
      { name: "CryoConnect Breakout Box", desc: "Cryostat breakout box for seamless interfacing.", path: "/products/breakout-box" },
      { name: "CryoClean™ RF Filters", desc: "Suppress high-frequency EMI before it reaches sensitive devices.", path: "/products/cryo-clean" },
      { name: "Precision Power Converters", desc: "High-efficiency AC-DC and DC-DC systems for clean lab power.", path: "/products/ac-dc-system-low" }
    ],
    outcome: "Efficient, stable power delivery in mission-critical systems."
  }
];

// --- SUB-COMPONENT: Interactive Product Button ---
function StackProductItem({ prod, theme }: { prod: any, theme: any }) {
  const [isProdHovered, setIsProdHovered] = useState(false);

  return (
    <motion.div 
      layout 
      onMouseEnter={() => setIsProdHovered(true)} 
      onMouseLeave={() => setIsProdHovered(false)}
      className="relative w-full"
    >
      <Link 
        to={prod.path} 
        className={`group block w-full px-4 py-3.5 rounded-xl border transition-all duration-300 relative overflow-hidden ${isProdHovered ? theme.btnHover : theme.btnDefault}`}
      >
        <div className="relative z-10 flex flex-col gap-1">
          <div className="flex justify-between items-center">
            {/* FIXED CONTRAST: Explicitly forces text to white on hover */}
            <span className={`font-extrabold text-[16px] leading-tight transition-colors ${isProdHovered ? 'text-white' : theme.primary}`}>
              {prod.name}
            </span>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isProdHovered ? 'bg-white/20' : 'bg-slate-100 group-hover:' + theme.iconBg}`}>
              <ChevronRight className={`w-3.5 h-3.5 transition-all ${isProdHovered ? 'text-white translate-x-0.5' : 'text-slate-500'}`} />
            </div>
          </div>
          {/* Bigger, Truncated One-Line Description. Forces text to bright white/90 on hover */}
          <p className={`text-[13px] font-medium leading-snug pr-6 truncate transition-colors duration-300 ${isProdHovered ? 'text-white/90' : 'text-slate-500'}`}>
            {prod.desc}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

// --- MAIN COMPONENT ---
// export function SynergisticStack() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Autonomous Cycle Logic
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % workflowSteps.length);
//     }, 6000); 
//     return () => clearInterval(timer);
//   }, []);

//   return (
export function SynergisticStack() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-0.5 lg:py-0.5 bg-white overflow-hidden ">
      <div className="container relative z-10">
        
        {/* Global Header Section */}
        <div className="text-center mb-12">
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-[11px] font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Complete Lab Ecosystem
          </motion.div> */}


          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[12px] font-extrabold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)] animate-pulse" />
            Quantum Research Ecosystem
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3"
          >
            The Synergistic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">"Lab Stack"</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            From sample to result — one stack, one conversation.
          </motion.p>
        </div>

        {/* --- TOP ACTION NAVIGATION TABS (Animated) --- */}
        <div className="relative max-w-4xl mx-auto mb-10 hidden md:block">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 rounded-full z-0" />
          <div className="relative z-10 flex justify-between items-center w-full px-4">
            {workflowSteps.map((step, i) => {
              const isActive = activeIndex === i;
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border shadow-sm transition-all duration-500 hover:-translate-y-1 cursor-pointer ${isActive ? step.theme.activeTab : step.theme.inactiveTab}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isActive ? 'bg-white/20' : 'bg-slate-100 text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-extrabold tracking-wide text-sm">{step.action}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- EXPANDING BENTO GRID --- */}
        {/* Slightly taller (720px) to comfortably fit the bigger buttons and images.
            Inactive cards are wider (flex: 1.2 instead of 1) to fit the bigger preview image. */}
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[720px] gap-4 items-stretch">
          {workflowSteps.map((step, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={step.id}
                layout
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setActiveIndex(i)}
                initial={false}
                animate={{ flex: isActive ? (typeof window !== 'undefined' && window.innerWidth > 1024 ? 3.2 : 3.2) : 1.2 }}
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
                className={`relative rounded-[2rem] border overflow-hidden cursor-pointer transition-colors duration-500 flex flex-col ${
                  isActive ? `${step.theme.bg} ${step.theme.cardBorder} shadow-2xl` : `bg-slate-50 border-slate-200 hover:bg-slate-100 shadow-sm`
                }`}
                style={{ zIndex: isActive ? 20 : 1 }}
              >
                
                {/* --- NON-HOVERED / COLLAPSED STATE --- */}
                <motion.div 
                  animate={{ opacity: isActive ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none ${isActive ? 'hidden' : 'flex'}`}
                >
                  <motion.span 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className={`font-display text-[80px] leading-none font-black mb-3 ${step.theme.numberColor}`}
                  >
                    {step.step}
                  </motion.span>
                  <h4 className={`font-extrabold text-xl lg:text-2xl leading-snug ${step.theme.primary}`}>
                    {step.title}
                  </h4>
                  {/* BIGGER Image Preview in Collapsed State */}
                  <div className="relative mt-8 w-full max-w-[220px] h-32 rounded-xl border border-border/50 overflow-hidden shadow-md shrink-0 bg-white">
                    <img 
                      src={step.image1} 
                      onError={(e) => e.currentTarget.src = step.fallback} 
                      className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-70" 
                      alt={step.title} 
                    />
                  </div>
                </motion.div>


                {/* --- HOVERED / EXPANDED STATE --- */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="absolute inset-0 p-8 flex flex-col h-full overflow-y-auto lg:overflow-hidden scrollbar-hide"
                    >
                      
                      {/* Structured Heading */}
                      <div className="mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${step.theme.iconBg}`}>
                            <step.icon className="w-4 h-4" />
                          </div>
                          <span className={`font-bold uppercase tracking-widest text-sm ${step.theme.secondary}`}>
                            {step.layer}
                          </span>
                        </div>
                        <h3 className={`font-display text-2xl lg:text-[28px] font-extrabold tracking-tight leading-tight ${step.theme.primary}`}>
                          {step.title}
                        </h3>
                        <p className={`text-[16px] font-bold mt-1.5 opacity-80 ${step.theme.secondary}`}>
                          {step.subTitle}
                        </p>
                      </div>

                      {/* MOVED UP: Target Outcome Box right below the title */}
                      <div className="mb-6 pt-4 border-t border-slate-300/40 flex items-start gap-3">
                        <Target className={`w-5 h-5 shrink-0 mt-0.5 ${step.theme.secondary}`} />
                        <div>
                          <p className={`text-[10px] font-extrabold uppercase tracking-widest mb-0.5 ${step.theme.secondary}`}>
                            Target outcome
                          </p>
                          <p className={`text-[15px] font-bold leading-snug ${step.theme.primary}`}>
                            {step.outcome}
                          </p>
                        </div>
                      </div>

                      {/* Clickable Product options (appears before images) */}
                      <div className="flex flex-col gap-3 mb-8 relative z-10 w-full lg:max-w-md shrink-0">
                        {step.products.map((prod, idx) => (
                          <StackProductItem key={idx} prod={prod} theme={step.theme} />
                        ))}
                      </div>

                      {/* TWO SIDE-BY-SIDE Images replacing the wide box */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "160px", marginTop: "auto" }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="relative w-full flex gap-4 shrink-0"
                          >
                            <div className="flex-1 rounded-2xl overflow-hidden shadow-md bg-white border border-white/50">
                              <img src={step.image1} onError={(e) => e.currentTarget.src = step.fallback} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" alt={step.title} />
                              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none" />
                            </div>
                            <div className="flex-1 rounded-2xl overflow-hidden shadow-md bg-white border border-white/50">
                              <img src={step.image2} onError={(e) => e.currentTarget.src = step.fallback} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" alt={step.title} />
                              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}