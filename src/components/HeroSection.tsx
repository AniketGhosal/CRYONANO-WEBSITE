// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Play, Maximize } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// export function HeroSection() {
  
//   const [currentMedia, setCurrentMedia] = useState(0);

//   // 1. Put your actual video file names here!
//   const videoUrls = [
//     "/videos/hero-vid-1.mp4", // Make sure these are in your public/videos folder
//     "/videos/hero-vid-2.mp4",
//     "/videos/hero-vid-3.mp4",
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentMedia((prev) => (prev + 1) % videoUrls.length);
//     }, 4000); // 4000ms = 4 seconds per video. Change this if you want them to play longer!
//     return () => clearInterval(timer);
//   }, [videoUrls.length]);

//   return (
//     <section className="relative bg-background overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24">
      
//       {/* Ambient Animated Background Glows */}
//       <motion.div 
//         animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[100px] pointer-events-none" 
//       />
//       <motion.div 
//         animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//         className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" 
//       />

//       <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
//         {/* TEXT AREA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="flex flex-col gap-5"
//         >
//           {/* Tagline */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase w-fit shadow-sm"
//           >
//             <motion.span 
//               animate={{ opacity: [1, 0.4, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-2 h-2 rounded-full bg-primary" 
//             />
//             Precision Instruments for Extreme Temperatures
//           </motion.div>

//           {/* HEADLINE */}
//           <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight tracking-tighter pb-2">
//             Engineering the Future of{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-blue-600">
//               Quantum
//             </span>{" "}
//             &{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-slate-500 to-primary">
//               Cryogenic
//             </span>{" "}
//             Technology
//           </h1>
          
//           {/* REFINED PARAGRAPH: Clearer and more professional */}
//           <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mt-2">
//             We design and manufacture the mission-critical hardware that modern science depends on—from isolated quantum voltage sources to high-field electromagnets and advanced cryogenic control systems.
//           </p>
          
//           {/* <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.5 }}
//             className="flex flex-wrap gap-5 mt-4"
//           > */}
//             {/* <Button size="lg" className="relative group overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide px-8 py-6 rounded-lg transition-all duration-300 shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/60 hover:-translate-y-1">
//               <span className="relative z-10 flex items-center gap-2">
//                 Explore Systems <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </span>
//               <motion.div 
//                 animate={{ x: ["-100%", "200%"] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
//               />
//             </Button>
            
//             <Button size="lg" variant="outline" className="group font-bold tracking-wide px-8 py-6 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
//               Talk to Engineering
//             </Button>
//           </motion.div>
//         </motion.div> */}



//         <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.5 }}
//             className="flex flex-wrap gap-5 mt-4"
//           >
//             {/* LINK ADDED: Routes to Products Catalog */}
//             <Link to="/products">
//               <Button size="lg" className="relative group overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide px-8 py-6 rounded-lg transition-all duration-300 shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/60 hover:-translate-y-1">
//                 <span className="relative z-10 flex items-center gap-2">
//                   Explore Systems <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </span>
//                 <motion.div 
//                   animate={{ x: ["-100%", "200%"] }}
//                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
//                 />
//               </Button>
//             </Link>
            
//             {/* LINK ADDED: Routes to Contact Page */}
//             <Link to="/contact">
//               <Button size="lg" variant="outline" className="group font-bold tracking-wide px-8 py-6 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
//                 Talk to Engineering
//               </Button>
//             </Link>
//           </motion.div>
//         </motion.div> 

//         {/* MEDIA VIEWPORT */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
//           className="relative w-full aspect-square lg:aspect-[4/3] rounded-2xl p-1 bg-gradient-to-br from-border via-background to-border shadow-2xl group"
//         >
//           <div className="absolute inset-0 rounded-2xl border border-border/50 bg-background overflow-hidden">
            
//             <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg z-20 transition-all duration-500 group-hover:border-primary group-hover:w-10 group-hover:h-10" />
//             <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg z-20 transition-all duration-500 group-hover:border-primary group-hover:w-10 group-hover:h-10" />
//             <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg z-20 transition-all duration-500 group-hover:border-primary group-hover:w-10 group-hover:h-10" />
//             <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg z-20 transition-all duration-500 group-hover:border-primary group-hover:w-10 group-hover:h-10" />

//             {/* <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentMedia}
//                 initial={{ opacity: 0, filter: "blur(4px)" }}
//                 animate={{ opacity: 1, filter: "blur(0px)" }}
//                 exit={{ opacity: 0, filter: "blur(4px)" }}
//                 transition={{ duration: 0.8 }}
//                 className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center ${mediaPlaceholders[currentMedia]}`}
//               >
//                 <motion.div 
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="w-24 h-24 mb-4 rounded-full bg-background border border-border flex items-center justify-center shadow-lg shadow-primary/10"
//                 >
//                   <span className="font-display text-4xl font-bold text-foreground">CN</span>
//                 </motion.div>
//                 <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-semibold text-primary">
//                   <Play className="w-3 h-3" /> System Overview {currentMedia + 1}/3
//                 </div>
//               </motion.div>
//             </AnimatePresence> */}

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentMedia}
//                 initial={{ opacity: 0, filter: "blur(4px)" }}
//                 animate={{ opacity: 1, filter: "blur(0px)" }}
//                 exit={{ opacity: 0, filter: "blur(4px)" }}
//                 transition={{ duration: 0.8 }}
//                 className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden"
//               >
//                 {/* THE ACTUAL ROTATING VIDEO */}
//                 <video 
//                   src={videoUrls[currentMedia]} 
//                   autoPlay 
//                   loop 
//                   muted 
//                   playsInline 
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
                
//                 {/* Optional dark overlay so the white text/logo stays readable */}
//                 <div className="absolute inset-0 bg-slate-900/40 mix-blend-overlay z-0" />

//                 {/* YOUR EXISTING UI OVERLAY (Stays on top of the video) */}
//                 <motion.div 
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="relative z-10 w-24 h-24 mb-4 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center shadow-lg shadow-primary/10"
//                 >
//                   <span className="font-display text-4xl font-bold text-foreground">CN</span>
//                 </motion.div>
//                 <div className="relative z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-semibold text-primary">
//                   <Play className="w-3 h-3" /> System Overview {currentMedia + 1}/3
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] z-10 pointer-events-none" />
            
//             <div className="absolute bottom-6 right-6 z-20 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
//               <div className="p-2.5 rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer shadow-lg transition-all">
//                 <Maximize className="w-4 h-4" />
//               </div>
//             </div>
            
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Maximize, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// 1. Define the images and their corresponding featured products
const heroContent = [
  {
    id: 1,
    image: "/images/scenes/hero-1.jpg", 
    fallback: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
    product: {
      tag: "FLAGSHIP • CN-2D",
      name: "2D Transfer System",
      desc: "Deterministic heterostructure stacking with optical control.",
      path: "/products/2d-transfer-motorised"
    }
  },
  {
    id: 2,
    image: "/images/scenes/hero-2.jpg",
    fallback: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070",
    product: {
      tag: "INNOVATION • QUANTUM",
      name: "QuantumVolt™ DAC",
      desc: "Isolated, ultra-low-noise gate & bias control.",
      path: "/products/quantum-volt"
    }
  },
  {
    id: 3,
    image: "/images/scenes/hero-3.jpg",
    fallback: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070",
    product: {
      tag: "PRECISION • PROBING",
      name: "100 PSM Station",
      desc: "Sub-micron electrical probing for complex devices.",
      path: "/products/psm-100"
    }
  }
];

export function HeroSection() {
  // STATE DEFINITIONS
  const [currentMedia, setCurrentMedia] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0); 
  
  const features = ["Isolated voltage sources", "High-field electromagnets", "Cryogenic control"]; 

  // 1. Autonomous Image/Product Change Logic (Cycles every 6 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMedia((prev) => (prev + 1) % heroContent.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  // 2. Autonomous Feature Highlight Logic (Cycles every 2.5 seconds)
  useEffect(() => {
    const featureTimer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 2500);
    return () => clearInterval(featureTimer);
  }, [features.length]);

  return (
    // FIX 1: Removed 'border-b border-slate-200' from here to remove the horizontal line
    <section className="relative bg-background overflow-hidden pt-0 pb-12 lg:pb-20">
      
      {/* Ambient Animated Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center mt-12 lg:mt-16">
        
        {/* ============================== */}
        {/* TEXT AREA (Left Side)          */}
        {/* ============================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-5"
        >
          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase w-fit shadow-sm"
          >
            <motion.span 
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-primary" 
            />
            Precision Instruments for Extreme Temperatures
          </motion.div>

          {/* HEADLINE */}
          <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight tracking-tighter pb-2">
            Engineering the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-blue-600">
              Quantum
            </span>{" "}
            &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-slate-500 to-primary">
              Cryogenic
            </span>{" "}
            Technology
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mt-1">
            We design and manufacture the mission-critical hardware that modern science depends on—from isolated quantum voltage sources to high-field electromagnets and advanced cryogenic control systems.
          </p>
          
          {/* CTA BUTTONS */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <Link to="/products">
              <Button size="lg" className="relative group overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide px-8 py-6 rounded-xl transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(var(--primary-rgb),0.4)] hover:shadow-[0_12px_25px_-6px_rgba(var(--primary-rgb),0.6)] hover:-translate-y-0.5">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Systems <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button size="lg" variant="outline" className="group font-bold tracking-wide px-8 py-6 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-0.5 shadow-sm">
                Talk to Engineering
              </Button>
            </Link>
          </motion.div>
        </motion.div> 


        {/* ============================== */}
        {/* MEDIA VIEWPORT (Right Side)    */}
        {/* ============================== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative w-full aspect-square lg:aspect-[4/3] rounded-2xl p-1 bg-gradient-to-br from-border via-background to-border shadow-2xl group"
        >
          {/* Main Display Box */}
          <div className="absolute inset-0 rounded-2xl border border-border/50 bg-background overflow-hidden">
            
            {/* Corner Brackets */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg z-20 transition-all duration-500 group-hover:border-primary group-hover:w-10 group-hover:h-10" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg z-20 transition-all duration-500 group-hover:border-primary group-hover:w-10 group-hover:h-10" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg z-20 transition-all duration-500 group-hover:border-primary group-hover:w-10 group-hover:h-10" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg z-20 transition-all duration-500 group-hover:border-primary group-hover:w-10 group-hover:h-10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentMedia}
                initial={{ opacity: 0, filter: "blur(4px)", scale: 1.02 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(4px)", scale: 0.98 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden"
              >
                {/* AUTO-ROTATING IMAGE */}
                <img 
                  src={heroContent[currentMedia].image} 
                  alt={heroContent[currentMedia].product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = heroContent[currentMedia].fallback; }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] z-10 pointer-events-none" />
            
            {/* Bottom-Left CN Mark (Sleek Glassmorphic Stamp) */}
            <div className="absolute bottom-6 left-6 z-20 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-background/80 backdrop-blur-md border border-border flex items-center justify-center shadow-lg shadow-primary/5">
              <span className="font-display text-xl md:text-2xl font-extrabold text-foreground tracking-wider">CN</span>
            </div>

            {/* Maximize Icon (Top-Right) */}
            <div className="absolute top-6 right-6 z-20 opacity-0 -translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <div className="p-2.5 rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer shadow-lg transition-all">
                <Maximize className="w-4 h-4" />
              </div>
            </div>
            
          </div>

          {/* SYNCHRONIZED FLOATING PRODUCT CARD (Bottom-Right) */}
          <Link to={heroContent[currentMedia].product.path} className="absolute -bottom-6 lg:-bottom-10 -right-4 lg:-right-8 z-30 group/card block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMedia}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="bg-background/95 backdrop-blur-xl p-4 md:p-5 rounded-2xl shadow-xl border border-border w-[240px] md:w-[280px] hover:border-primary transition-colors cursor-pointer group-hover/card:shadow-2xl"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-[9px] md:text-[10px] text-primary font-extrabold uppercase tracking-widest leading-none">
                    {heroContent[currentMedia].product.tag}
                  </p>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover/card:text-primary transition-all duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                </div>
                <h4 className="font-display font-bold text-foreground text-base md:text-lg leading-tight group-hover/card:text-primary transition-colors">
                  {heroContent[currentMedia].product.name}
                </h4>
                <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">
                  {heroContent[currentMedia].product.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </Link>
        </motion.div>
      </div>

      {/* ============================== */}
      {/* FIX 2 & 3: FULL-WIDTH TRUST STRIP */}
      {/* Moved outside the grid to span horizontally */}
      {/* ============================== */}
      <div className="container relative z-20 mt-16 lg:mt-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-full flex flex-col xl:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        >
          {/* Technical Features spreading across available space */}
          <div className="flex flex-1 flex-wrap justify-center xl:justify-start gap-x-8 gap-y-4 w-full">
            {features.map((feature, i) => {
              const isActive = activeFeature === i;
              return (
                <motion.div
                  key={feature}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    opacity: isActive ? 1 : 0.5 // High-contrast fade effect
                  }}
                  className={`flex items-center gap-3 cursor-default transition-colors duration-500 ${
                    isActive ? 'text-primary font-bold' : 'text-slate-600 font-medium hover:text-primary hover:opacity-100'
                  }`}
                >
                  <motion.span
                    animate={{ scale: isActive ? [1, 1.5, 1] : 1 }}
                    transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${
                      isActive ? 'bg-primary shadow-lg shadow-primary/60' : 'bg-slate-300'
                    }`}
                  />
                  <span className="text-base md:text-lg tracking-wide">{feature}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Vertical Separator line for desktop */}
          <div className="hidden xl:block w-px h-12 bg-slate-200" />

          {/* Differentiated "Made in India" Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 xl:pl-4 cursor-default w-full xl:w-auto justify-center xl:justify-end pt-5 xl:pt-0 border-t xl:border-t-0 border-slate-200"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 shadow-inner">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </span>
            <span className="text-slate-800 font-extrabold tracking-widest uppercase text-[11px] md:text-xs">
              Engineered in India
            </span>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}