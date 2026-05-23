import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { CTASection } from "@/components/CTASection";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Download, ArrowUp, CheckCircle2,
  Activity, Zap, Shield, Camera, Cpu, Target, Settings,
  Waves, Layers, Network, Lock, Sliders, Database, Microchip
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.6)] hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] transition-all hover:-translate-y-1"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ==========================================
// 3D TILT EFFECT WRAPPER
// ==========================================
const TiltWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 600, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 600, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ==========================================
// NEW PATTERN: CIRCUIT TRACE DATA MATRIX (Specs)
// ==========================================
const CircuitTraceSpecs = ({ specs }: { specs: any }) => {
  const entries = Object.entries(specs);

  return (
    <div className="w-full bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
        {entries.map(([key, value], i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-20px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
            className="group relative bg-slate-950 p-5 rounded-xl flex flex-col justify-center border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 cursor-default overflow-hidden"
          >
            {/* Hover Circuit Trace Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-100" />
            
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 group-hover:text-cyan-400 transition-colors z-10">{key}</p>
            <p className="text-sm font-bold text-white group-hover:translate-x-1 transition-transform z-10">{String(value)}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// HARDWARE CONFIGURATION DECK (Channels)
// ==========================================
const HardwareConfigDeck = ({ configs }: { configs: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {configs.map((config, i) => {
        const glowColor = config.color === 'blue' ? 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:border-blue-400' :
                          config.color === 'purple' ? 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:border-purple-400' :
                          'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] group-hover:border-emerald-400';
                          
        const iconColor = config.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          config.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                          'bg-emerald-100 text-emerald-600';

        return (
          <TiltWrapper key={i} className="h-full">
            <div className={`h-full bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-md transition-all duration-500 flex flex-col group ${glowColor}`}>
              <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none" />
              <div className="relative z-10 flex-grow">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${iconColor}`}>
                  <Layers className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{config.name}</h3>
                <p className="text-sm font-bold text-slate-600 mb-6">{config.desc}</p>
                <ul className="space-y-3">
                  {config.points.map((pt: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${config.color === 'blue' ? 'text-blue-500' : config.color === 'purple' ? 'text-purple-500' : 'text-emerald-500'}`} />
                      <span className="text-sm font-bold text-slate-700">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TiltWrapper>
        );
      })}
    </div>
  );
};

// ==========================================
// LIGHT THEME ANALYTICS DASHBOARD (Adapted for Analog Design)
// ==========================================
const AnalogDesignDashboard = ({ data }: { data: any }) => {
  return (
    <div className="w-full bg-white/90 backdrop-blur-xl rounded-[2.5rem] border border-blue-100 shadow-[0_20px_60px_-15px_rgba(0,100,255,0.15)] overflow-hidden font-sans flex flex-col group hover:border-blue-300 transition-colors duration-500">
      <div className="bg-slate-50/80 border-b border-blue-100/50 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
          <span className="text-slate-600 text-xs font-black tracking-widest uppercase font-mono">{data.subtitle}</span>
        </div>
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-200 group-hover:bg-blue-400 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-blue-200 group-hover:bg-cyan-400 transition-colors delay-75" />
          <div className="w-2.5 h-2.5 rounded-full bg-blue-200 group-hover:bg-emerald-400 transition-colors delay-150" />
        </div>
      </div>

      <div className="p-8 lg:p-12 grid md:grid-cols-2 gap-10 bg-gradient-to-br from-white to-blue-50/30">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-100/50 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-200">
            <Waves className="w-4 h-4" /> Noise Suppression
          </div>
          <h3 className="text-3xl font-black text-slate-900 mb-6">{data.title}</h3>
          <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Architecture Minimizes:</p>
          <ul className="grid grid-cols-2 gap-3 mb-8">
            {data.minimizes.map((item: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-white p-2 rounded-lg border border-slate-100 shadow-sm"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"/>{item}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <h4 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-6 flex items-center gap-2"><Cpu className="w-5 h-5"/> Design Highlights</h4>
          <ul className="space-y-4">
            {data.highlights.map((h: string, i: number) => (
              <li key={i} className="flex items-start gap-3 group/item">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 group-hover/item:scale-110 transition-transform" />
                <span className="font-bold text-slate-800 text-sm">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-slate-900 px-8 py-5">
        <p className="text-slate-300 font-bold text-sm text-center tracking-wide">{data.footer}</p>
      </div>
    </div>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const QuantumVoltPage = () => {
  const product = productsData["quantum-volt"];
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

  if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

  const iconMap: Record<string, any> = { Shield, Activity, Waves, Target, Cpu, Settings };

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500 selection:text-white relative">
        <Navbar />

        {/* STICKY HEADER */}
        <div className="sticky z-40 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm" style={{ top: '64px' }}>
          <div className="container py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 tracking-wide uppercase">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link> <span>/</span>
              <Link to="/products" className="hover:text-blue-600 transition-colors">Catalog</Link> <span>/</span>
              <span className="hidden sm:inline-block cursor-default text-slate-500">{product.category}</span> <span className="hidden sm:inline-block">/</span>
              <span className="text-blue-600">{product.name}</span>
            </div>
            <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
              <span className="hidden lg:block font-display font-black text-slate-900 tracking-tight">{product.name}</span>
              <button className="px-5 py-2.5 rounded-xl font-black text-white bg-blue-600 text-xs tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:bg-blue-500 transition-all pointer-events-auto hover:-translate-y-0.5">
                REQUEST PROPOSAL
              </button>
            </motion.div>
          </div>
        </div>
        
        <main>
          {/* HERO SECTION */}
          <section className="relative pt-16 pb-24 overflow-hidden bg-slate-900 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-black z-0 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[600px]">
              
              <motion.div className="lg:col-span-7 flex flex-col justify-center" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                
                <div className="w-fit inline-block px-6 py-2 border border-blue-500/50 rounded-sm bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  Precision Isolated Voltage Source
                </div>

                <h1 className="font-display text-5xl lg:text-7xl font-black text-white mb-4 tracking-tight leading-[1.05]">
                  {product.name}
                </h1>
                <p className="text-xl text-cyan-400 font-bold mb-6 leading-snug">{product.subtitle}</p>
                
                {/* SPEC STRIP PILLS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.specStrip.map((spec: string, i: number) => (
                    <motion.span 
                      key={i} whileHover={{ y: -3, scale: 1.05 }} 
                      className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-blue-300 text-[10px] font-black uppercase tracking-widest rounded-md shadow-lg cursor-default hover:border-blue-400 hover:text-white hover:bg-slate-700 transition-all duration-300"
                    >
                      {spec}
                    </motion.span>
                  ))}
                </div>

                <motion.div whileHover={{ x: 5 }} className="bg-slate-800/40 backdrop-blur-md border-l-4 border-blue-500 p-6 rounded-r-2xl shadow-xl mb-10 transition-transform duration-300">
                  <div className="space-y-4 text-slate-300 font-medium text-sm leading-relaxed">
                    {product.overview.map((p: string, i: number) => <p key={i}>{p}</p>)}
                  </div>
                </motion.div>

                <div className="flex flex-wrap gap-4">
                  <button className="group px-8 py-4 rounded-xl font-black text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] flex items-center gap-3 transition-all duration-300 hover:-translate-y-1">
                    Request Technical Proposal <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button className="group px-8 py-4 rounded-xl font-black text-white bg-slate-800 border-2 border-slate-700 hover:border-blue-500 hover:bg-slate-800 flex items-center gap-3 shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <Download className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" /> Download Datasheet
                  </button>
                </div>
              </motion.div>

              {/* HERO IMAGE GRID */}
              <motion.div className="lg:col-span-5 h-full flex flex-col justify-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[550px]">
                  <motion.div whileHover={{ scale: 1.02 }} className="col-span-12 row-span-1 md:col-span-7 md:row-span-2 relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl group cursor-pointer transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
                    <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-slate-600 group-hover:text-blue-500 transition-colors z-0" />
                    <span className="absolute bottom-4 left-4 text-[10px] font-black text-blue-400 uppercase tracking-widest z-20">Main Interface</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="col-span-6 row-span-1 md:col-span-5 relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-xl group cursor-pointer transition-transform duration-500">
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
                     <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-slate-600 group-hover:text-cyan-500 transition-colors z-0" />
                     <span className="absolute bottom-4 left-4 text-[10px] font-black text-cyan-400 uppercase tracking-widest z-20">Channel Modules</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="col-span-6 row-span-1 md:col-span-5 relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-xl group cursor-pointer transition-transform duration-500">
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
                     <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-slate-600 group-hover:text-emerald-500 transition-colors z-0" />
                     <span className="absolute bottom-4 left-4 text-[10px] font-black text-emerald-400 uppercase tracking-widest z-20">Analog PCB</span>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </section>

          {/* KEY FEATURES BENTO */}
          <section className="py-24 relative overflow-hidden bg-slate-50 border-y border-slate-200">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#cbd5e1_2px,transparent_2px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
            <div className="container max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <span className="text-blue-600 font-black tracking-widest uppercase text-[10px] mb-3 block">High-Fidelity Engineering</span>
                <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-4">Key Features</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {product.keyFeatures.map((feat: any, i: number) => {
                  const Icon = iconMap[feat.icon] || CheckCircle2;
                  return (
                    <TiltWrapper key={i} className="h-full">
                      <div className="group relative h-full bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.3)] hover:border-blue-300 transition-all duration-500 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-blue-50/50 group-hover:opacity-100 opacity-0 transition-opacity duration-500 pointer-events-none" />
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white text-blue-600 transition-colors duration-500 shadow-sm">
                          <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h4 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{feat.title}</h4>
                        <p className="text-slate-600 font-medium leading-relaxed">{feat.desc}</p>
                      </div>
                    </TiltWrapper>
                  )
                })}
              </div>
            </div>
          </section>

          {/* CHANNEL CONFIGURATIONS DECK */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-purple-600 font-black tracking-widest uppercase text-[10px] mb-3 block">Scalable Architecture</span>
                <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-6">Flexible Multi-Channel Architectures</h2>
                <p className="text-slate-600 font-bold max-w-2xl mx-auto">Select the configuration that matches the density of your quantum gating and transport setups.</p>
              </div>
              <HardwareConfigDeck configs={product.channelConfigs} />
            </div>
          </section>

          {/* ULTRA-LOW NOISE ANALOG DASHBOARD */}
          <section className="py-24 bg-slate-100 border-y border-slate-200 relative overflow-hidden">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-emerald-600 font-black tracking-widest uppercase text-[10px] mb-3 block">Precision Analog Design</span>
                <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-6">Built for Sensitive Quantum Experiments</h2>
              </div>
              <AnalogDesignDashboard data={product.analogDesign} />
            </div>
          </section>

          {/* SYSTEM INTEGRATION & PROTECTION (Dual Dark Panel) */}
          <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black z-0 pointer-events-none" />
            <div className="container relative z-10 max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Integration */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
                  whileHover={{ y: -5 }} className="bg-slate-800/80 backdrop-blur-md rounded-[3rem] p-10 border border-slate-700 shadow-2xl transition-all"
                >
                  <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-3"><Network className="w-8 h-8 text-cyan-400"/> {product.integration.title}</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Connects Directly With</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.integration.connectsWith.map((c: string, i: number) => (
                          <span key={i} className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-bold text-slate-300">{c}</span>
                        ))}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Integration Features</h4>
                        <ul className="space-y-2">
                          {product.integration.features.map((f: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-xs font-bold text-slate-200"><CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0"/>{f}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Compatible Software</h4>
                        <div className="flex flex-col gap-2">
                          {product.integration.compatibleWith.map((c: string, i: number) => (
                            <span key={i} className="px-3 py-2 bg-cyan-900/30 border border-cyan-800/50 rounded-md text-cyan-300 text-xs font-bold">{c}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Protection */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -5 }} className="bg-gradient-to-br from-rose-900/40 to-slate-800 rounded-[3rem] p-10 border border-rose-900/50 shadow-2xl transition-all"
                >
                  <h3 className="text-3xl font-black text-white mb-6 flex items-center gap-3"><Lock className="w-8 h-8 text-rose-500"/> {product.protection.title}</h3>
                  <p className="text-slate-300 font-bold mb-8">{product.protection.desc}</p>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[10px] font-black text-rose-300 uppercase tracking-widest mb-4 border-b border-rose-800/50 pb-2">Protection Features</h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {product.protection.features.map((f: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 text-xs font-bold text-white"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"/>{f}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Actively Protects</h4>
                      <div className="flex flex-wrap gap-3">
                        {product.protection.protects.map((p: string, i: number) => (
                          <div key={i} className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-bold text-slate-300">
                            <Shield className="w-3 h-3 text-rose-400"/>{p}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* APPLICATIONS */}
          <section className="py-24 bg-slate-50 border-b border-slate-200">
             <div className="container max-w-7xl mx-auto">
               <div className="text-center mb-16">
                  <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900">Research Applications</h2>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {product.applications.map((app: string, i: number) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: i * 0.05 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex items-center gap-4 group cursor-default"
                     >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 transition-colors duration-300 shrink-0">
                           <Microchip className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-bold text-slate-700 text-sm leading-tight group-hover:text-blue-900 transition-colors">{app}</span>
                     </motion.div>
                  ))}
               </div>
             </div>
          </section>

          {/* CIRCUIT TRACE TECHNICAL SPECS */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <span className="text-cyan-600 font-black tracking-widest uppercase text-[10px] mb-3 block">Data Sheet</span>
                <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-6">Technical Specifications</h2>
                <p className="text-slate-600 font-bold leading-relaxed max-w-2xl mx-auto">
                  Precision parameters engineered for advanced scientific environments and ultra-low noise stability.
                </p>
              </div>
              <CircuitTraceSpecs specs={product.specs} />
            </div>
          </section>

          <CTASection />

          <section className="border-t border-slate-200 bg-slate-50 py-6">
            <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link to="/" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-slate-500 hover:text-blue-600 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Homepage
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-slate-500 hover:text-blue-600 transition-colors">
                Return to Product Catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </main>
        
        <ScrollToTop />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default QuantumVoltPage;