import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Target, Activity, ThermometerSnowflake, Maximize, Lightbulb, 
  Microscope, Layers, Settings, Zap, Network, Box, Cable, 
  MonitorPlay, FlaskConical, Sparkles, Leaf, Minimize, 
  ShieldCheck, CheckCircle2, ChevronRight
} from 'lucide-react';
import { Navbar } from '../components/Navbar'; 
import { Footer } from '../components/Footer'; 

// --- ANIMATION VARIANTS ---
// const staggerContainer = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.15 } }
// };
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// };
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

  // Autonomous Software Tabs logic
  const softwareTabs = [
    { title: "TABBED Control", content: "The TABBED software provided with the system communicates with the PPMS MultiVu software for controlling its Temperature and Magnetic Field while measuring various parameters with the impedance analyzer in a larger phase space. Provides maximum automation for complex measurements." },
    { title: "Measurement Modes", content: "Measurements such as ε (B,T,f) or Z, φ (B,T,f) can be quickly measured using the TABBED program making it easy to use with live graphical display." },
    { title: "Data Export", content: "The raw data files can later be processed seamlessly in Origin, MATLAB, and other standard analysis software suites." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSoftwareTab((prev) => (prev + 1) % softwareTabs.length);
    }, 5000); // Auto-cycles every 5 seconds
    return () => clearInterval(timer);
  }, [softwareTabs.length]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col relative overflow-hidden">
      
      {/* Global Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* ========================================== */}
      {/* HERO SECTION (Animated Flowing Background) */}
      {/* ========================================== */}
      <section className="relative pt-32 pb-24 px-6 text-center z-10 overflow-hidden bg-white border-b border-slate-100">
        {/* Animated Background blobs acting as a continuous GIF */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[150%] bg-gradient-to-br from-blue-50 to-cyan-50/30 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[150%] bg-gradient-to-tl from-purple-50 to-pink-50/30 rounded-full blur-3xl pointer-events-none"
        />

        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-10 max-w-4xl mx-auto">
          {/* <motion.div variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            Archived <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Instruments</span>
          </motion.div> */}


          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            Archived <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Instruments</span>
          </motion.h1>
          {/* <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 leading-snug">
            Magnetodielectric/ Pyroelectric Current Measurement Option for QD PPMS
          </motion.h2> */}
          <motion.p variants={fadeInUp} className="text-lg text-slate-500 leading-relaxed font-medium">
            Legacy CRYONANO systems that contributed to breakthroughs in quantum and cryogenic research. Explore the technical DNA of our foundational engineering.
          </motion.p>
        </motion.div>
      </section>

      {/* ========================================== */}
      {/* PRODUCT 1: MAGNETODIELECTRIC               */}
      {/* ========================================== */}
      <section className="relative z-10 pt-20 pb-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Overlapping Intro Layout with Integrated Theory */}
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
            
            {/* 3-Image Overlapping Animated Gallery */}
            <div className="lg:col-span-7 relative h-[450px] w-full flex items-center justify-center">
              <motion.img 
                initial={{ opacity: 0, y: 50, rotate: -5 }} whileInView={{ opacity: 1, y: 0, rotate: -5 }} whileHover={{ scale: 1.05, zIndex: 30, rotate: 0 }} transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" alt="PPMS System 1" 
                className="absolute left-0 top-10 w-[55%] h-[60%] object-cover rounded-3xl shadow-xl border-4 border-white z-10 cursor-pointer"
              />
              <motion.img 
                initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05, zIndex: 30 }} transition={{ duration: 0.6, delay: 0.1 }}
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600" alt="Cryostat Panel" 
                className="absolute right-10 top-0 w-[50%] h-[65%] object-cover rounded-3xl shadow-2xl border-4 border-white z-20 cursor-pointer"
              />
              <motion.img 
                initial={{ opacity: 0, x: 50, rotate: 5 }} whileInView={{ opacity: 1, x: 0, rotate: 5 }} whileHover={{ scale: 1.05, zIndex: 30, rotate: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                src="https://images.unsplash.com/photo-1635048424329-a9bfb10440f4?q=80&w=600" alt="Control Software" 
                className="absolute right-0 bottom-10 w-[45%] h-[50%] object-cover rounded-3xl shadow-xl border-4 border-white z-10 cursor-pointer"
              />
            </div>
          </div>

          {/* Key Features (Product Specific) */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-24">
            <motion.h3 variants={fadeInUp} className="text-3xl font-extrabold text-slate-900 mb-10 flex items-center gap-4 justify-center">
              <span className="w-12 h-1 bg-blue-500 rounded-full" /> Magnetodielectric System Key Features <span className="w-12 h-1 bg-blue-500 rounded-full" />
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, title: 'High Precision', desc: '1 mΩ to 200 MΩ, ΔZ = ±0.05%, Δθ = ±0.03%' },
                { icon: Activity, title: 'Wide Frequency', desc: '4 Hz to 2 MHz, 10 mHz resolution, 1 ms speed' },
                { icon: ThermometerSnowflake, title: 'Cryo Optimized', desc: 'Cable length compensation, low-noise wiring' },
                { icon: Maximize, title: 'Flexible Config', desc: 'In-plane & out-of-plane, orientation compatible' }
              ].map((f, i) => (
                <motion.div key={i} variants={fadeInUp} className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                      <f.icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{f.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Autonomous Animated Architecture Flow */}
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

          {/* Interactive Inclusions & Probe (Hover Cards) */}
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

          {/* Autonomous Software Auto-Cycling Layout */}
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

      {/* ========================================== */}
      {/* PRODUCT 2: UV MASK ALIGNER (Innovative Layout) */}
      {/* ========================================== */}
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

          {/* Innovative Split Layout */}
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

          {/* Timeline / Vertical Flow Features */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">System Features & Parameters</h3>
            <div className="space-y-6 max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-purple-200 before:to-transparent">
              
              {[
                { icon: Lightbulb, title: "Advanced UV-LED Optics", desc: "No complex, high voltage power supply. Almost monochromatic radiation ensures uniformity in deposition." },
                { icon: Zap, title: "Instant Operation", desc: "No waiting time after switching on, operation can be done immediately. Very fast response time." },
                { icon: Microscope, title: "High Precision Alignment", desc: "High precision X-Y-Z-θ aligner. High resolution microscope (Eye piece: 10x | Objective: 4x, 10x & 20x)." },
                { icon: Settings, title: "Automation Control", desc: "Permits precise, accurate electronic control on the exposure time and power." }
              ].map((feature, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-purple-100 text-purple-600 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] p-6 bg-white rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">{feature.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>

          {/* Metric Driven Advantages (Gradient text, animated counters implied visually) */}
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

      {/* Global Footer */}
      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  );
}

export default ArchivedProductsPage;









// import { useEffect, useRef, useCallback } from 'react';
// import { motion, Variants } from 'framer-motion';
// import { 
//   Target, Activity, ThermometerSnowflake, Maximize, 
//   Layers, MonitorPlay, CheckCircle2, Cable, ShieldCheck, 
//   Zap, Microscope, Archive, Cpu, Settings, Box, Sparkles
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
//   show: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.6, ease: "easeOut" as const } // <-- Added "as const" right here!
//   }
// };

// export function ArchivedProductsPage() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const revealRef = useRef<HTMLDivElement[]>([]);
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   const addToRevealRefs = useCallback((el: HTMLDivElement | null) => {
//     if (el && !revealRef.current.includes(el)) {
//       revealRef.current.push(el);
//       observerRef.current?.observe(el);
//     }
//   }, []);

//   // --- LIGHT THEME PARTICLE ANIMATION ---
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
//       { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
//     );

//     revealRef.current.forEach((el) => observerRef.current?.observe(el));
//     const currentObserver = observerRef.current; // Store ref value for cleanup

//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let animationId: number;
//     // eslint-disable-next-line @typescript-eslint/no-use-before-define
//     let particles: Particle[] = [];
//     const particleCount = 60;
//     const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     window.addEventListener('resize', resize);
//     resize();

//     class Particle {
//       x: number; y: number; vx: number; vy: number; size: number; color: string;
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.vx = (Math.random() - 0.5) * 0.3;
//         this.vy = (Math.random() - 0.5) * 0.3;
//         this.size = Math.random() * 2 + 0.5;
//         this.color = `rgba(14, 165, 233, ${Math.random() * 0.15 + 0.05})`; 
//       }
//       update() {
//         this.x += this.vx; this.y += this.vy;
//         if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
//         if (mouse.x && mouse.y) {
//           const dx = this.x - mouse.x;
//           const dy = this.y - mouse.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < mouse.radius) {
//             const force = (mouse.radius - dist) / mouse.radius;
//             this.x += dx * force * 0.02;
//             this.y += dy * force * 0.02;
//           }
//         }
//       }
//       draw() {
//         if (!ctx) return;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = this.color;
//         ctx.fill();
//       }
//     }

//     const initParticles = () => { particles = Array.from({ length: particleCount }, () => new Particle()); };
//     initParticles();

//     const connectParticles = () => {
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < 150) {
//             ctx.strokeStyle = `rgba(14, 165, 233, ${0.06 * (1 - dist / 150)})`;
//             ctx.lineWidth = 0.5;
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach((p) => { p.update(); p.draw(); });
//       connectParticles();
//       animationId = requestAnimationFrame(animate);
//     };
//     animate();

//     const handleMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
//     const handleMouseLeave = () => { mouse.x = null; mouse.y = null; };
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener('resize', resize);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseleave', handleMouseLeave);
//       currentObserver?.disconnect();
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans flex flex-col relative overflow-hidden selection:bg-cyan-100">
//       <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-60" />

//       {/* Global Navbar */}
//       <div className="relative z-50">
//         <Navbar />
//       </div>

//       {/* ========================================== */}
//       {/* HERO SECTION                               */}
//       {/* ========================================== */}
//       <section className="relative pt-32 pb-24 px-6 text-center z-10 bg-white border-b border-slate-100 overflow-hidden">
//         <motion.div 
//           animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }} 
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-bl from-blue-50 to-transparent blur-3xl pointer-events-none"
//         />
//         <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-10 max-w-4xl mx-auto">
//           <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-500 text-[11px] font-black tracking-widest uppercase mb-6 shadow-sm">
//             <Archive className="w-3.5 h-3.5" /> Legacy Systems Archive
//           </motion.div>
//           <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
//             Archived <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">Instruments</span>
//           </motion.h1>
//           <motion.p variants={fadeInUp} className="text-lg text-slate-500 leading-relaxed font-medium">
//             Legacy CRYONANO systems that contributed to breakthroughs in quantum and cryogenic research. Explore their detailed technical DNA below.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* ========================================== */}
//       {/* PRODUCT 1: MAGNETODIELECTRIC               */}
//       {/* ========================================== */}
//       <section className="relative z-10 pt-20 pb-24 bg-gradient-to-b from-blue-50/30 to-white">
//         <div className="max-w-7xl mx-auto px-6">
          
//           {/* Section Header & Exact System Description */}
//           <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
//             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-6">
//               <span className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-blue-100/50 text-blue-700 border border-blue-200 rounded-full shadow-sm">
//                 01 // PPMS Integration Module
//               </span>
//               <h3 className="text-4xl font-extrabold text-slate-900 mt-6 mb-8 leading-tight">
//                 Magnetodielectric / Pyroelectric Current Measurement Option
//               </h3>
//               <div className="prose text-slate-600 font-medium leading-relaxed border-l-4 border-blue-300 pl-6">
//                 <p>Using the versatile Quantum Design PPMS, CRYONANOs automated Magneto-dielectric Measurement Module Option enhances the wide measurement capabilities of the PPMS to allow popular AC measurements such as dielectric constant, AC conductivity, Capacitance, Phase information, Nyquist Plots etc. as a function of Magnetic Fields up to ± 16 tesla and standard temperature ranges of 1.9 – 400 K.</p>
//                 <p className="mt-4">The setup consists of an insert with low noise, guarded electrical wiring connected to an inbuilt breakout box which in turn is connected to an electronic instrument panel. The panel is controlled through software with the PC. The software controls the given experimental scheme with magnetic field, temperature as well as frequency setting/sweeps by controlling the Magnetic Field and Temperature controller of the PPMS.</p>
//               </div>
//             </motion.div>
            
//             {/* Autonomous Overlapping Images */}
//             <div className="lg:col-span-6 relative h-[450px] w-full flex items-center justify-center">
//               <motion.img 
//                 initial={{ opacity: 0, y: 30, rotate: -3 }} whileInView={{ opacity: 1, y: 0, rotate: -3 }} whileHover={{ scale: 1.05, zIndex: 30, rotate: 0 }} transition={{ duration: 0.5 }}
//                 src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" alt="PPMS System Overview" 
//                 className="absolute left-0 top-10 w-[55%] h-[60%] object-cover rounded-3xl shadow-xl border-4 border-white z-10"
//               />
//               <motion.img 
//                 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05, zIndex: 30 }} transition={{ duration: 0.5, delay: 0.1 }}
//                 src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600" alt="Instrument Panel" 
//                 className="absolute right-10 top-0 w-[50%] h-[65%] object-cover rounded-3xl shadow-2xl border-4 border-white z-20"
//               />
//               <motion.img 
//                 initial={{ opacity: 0, x: 30, rotate: 3 }} whileInView={{ opacity: 1, x: 0, rotate: 3 }} whileHover={{ scale: 1.05, zIndex: 30, rotate: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
//                 src="https://images.unsplash.com/photo-1635048424329-a9bfb10440f4?q=80&w=600" alt="Software Interface" 
//                 className="absolute right-0 bottom-10 w-[45%] h-[50%] object-cover rounded-3xl shadow-xl border-4 border-white z-10"
//               />
//             </div>
//           </div>

//           {/* Salient Features (Exact Bullet Points) */}
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-20">
//             <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
//               <Activity className="w-6 h-6 text-blue-600" /> Salient Features
//             </motion.h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 { icon: Target, text: 'Measurement at low temperature and under high magnetic field with Guaranteed accuracy in the range from 1 mΩ to 200 MΩ (depends on measurement configuration settings): ΔZ = ±0.05 % Δθ = ±0.03 %.' },
//                 { icon: Activity, text: 'Frequency range of measurement from 4 Hz to 2 MHz with minimum resolution of 10 mHz and fast 1ms acquisition speed' },
//                 { icon: ThermometerSnowflake, text: 'Built in Cryogenic Cable length Compensation.' },
//                 { icon: Maximize, text: 'Facility of in-plane and out-of-plane measurement with respect to applied magnetic field.' },
//                 { icon: Layers, text: 'Special PCB for quick sample change and thermalization.' },
//                 { icon: MonitorPlay, text: 'Fully Automated user friendly Labview Software for Instrument Control and automation' }
//               ].map((f, i) => (
//                 <motion.div key={i} variants={fadeInUp} className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-400">
//                   <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
//                     <f.icon className="w-6 h-6" />
//                   </div>
//                   <p className="text-slate-600 text-sm font-medium leading-relaxed">{f.text}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* What you get & Multi-function probe */}
//           <div className="grid md:grid-cols-2 gap-8 mb-20">
//             <div ref={addToRevealRefs} className="opacity-0 translate-y-8 bg-white rounded-[2rem] p-10 border border-slate-200 shadow-md hover:shadow-lg transition-all duration-700">
//               <h4 className="text-xl font-bold text-cyan-700 mb-6 flex items-center gap-3">
//                 <Box className="w-6 h-6" /> What you get with this setup
//               </h4>
//               <ul className="space-y-4 text-slate-600 font-medium text-sm leading-relaxed">
//                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" /> Specially designed insert having BNC connectors and cryogenic coaxial wiring.</li>
//                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" /> Impedance analyzer and interfacing hardware through Ethernet connector.</li>
//                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" /> User friendly software for multiple parameter sweeps and data acquisition</li>
//                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" /> Mini portable 19-inch rack mounting system</li>
//               </ul>
//             </div>
//             <div ref={addToRevealRefs} className="opacity-0 translate-y-8 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-[2rem] p-10 border border-blue-100 shadow-md hover:shadow-lg transition-all duration-700">
//               <h4 className="text-xl font-bold text-blue-800 mb-6 flex items-center gap-3">
//                 <Cable className="w-6 h-6 text-blue-600" /> Multi-function probe
//               </h4>
//               <p className="text-slate-600 text-sm font-medium leading-relaxed">
//                 The setup comes with a multi-function probe option which allows the use of PPMS just as a cryostat with a magnetic field while making the electrical measurements from outside using a separate computer. The probe wiring is done using cryogenic co-axial cables with a breakout box at the top consisting of special BNC connectors with large isolation. This probe is used for direct access to the sample chamber puck connector provided by CRYONANO in this case. The signal accessed from the top goes into the measurement system kept in the instrument rack communicating to the PPMS through LAN.
//               </p>
//             </div>
//           </div>

//           {/* Software Control (Animated Presentation) */}
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-md relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100/40 rounded-full blur-3xl" />
//             <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3 relative z-10">
//               <Cpu className="w-6 h-6 text-cyan-600" /> SOFTWARE Control
//             </h4>
//             <div className="grid md:grid-cols-2 gap-8 text-slate-600 text-sm font-medium leading-relaxed relative z-10">
//               <p>The TABBED software provided with the system communicates with the PPMS MultiVu software for controlling its Temperature and Magnetic Field while measuring various parameters with the impedance analyzer in a larger phase space. This provides maximum automation while providing a powerful performance for such a complex measurement.</p>
//               <p>Measurements such as ε (B,T,f) or Z, ɸ (B,T,f) can be quickly measured using the TABBED program making it easy to use with live graphical display. The raw data files can later be processed in Origin / Matlab etc.</p>
//             </div>
//           </motion.div>

//         </div>
//       </section>

//       {/* ========================================== */}
//       {/* PRODUCT 2: UV MASK ALIGNER                 */}
//       {/* ========================================== */}
//       <section className="relative z-10 py-24 bg-white border-t border-slate-200">
//         <div className="max-w-7xl mx-auto px-6">
          
//           {/* Section Header & Exact System Description */}
//           <div className="grid lg:grid-cols-12 gap-16 items-center mb-20">
//             <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-5 order-2 lg:order-1 relative group">
//               <div className="absolute inset-0 bg-purple-200/40 blur-2xl rounded-full transform group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
//               <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1000" alt="UV Lithography" className="relative z-10 rounded-[2rem] w-full shadow-2xl border border-slate-100 object-cover h-[450px]" />
//             </motion.div>
            
//             <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7 order-1 lg:order-2">
//               <span className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-purple-100/50 text-purple-700 border border-purple-200 rounded-full shadow-sm">
//                 02 // Lithography System
//               </span>
//               <h3 className="text-4xl font-extrabold bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent mt-6 mb-8 leading-tight">
//                 UV Mask Aligner — Model CN500
//               </h3>
//               <div className="prose text-slate-600 font-medium leading-relaxed border-l-4 border-purple-300 pl-6">
//                 <p>Photolithography and mask aligners are part of a process called nanofabrication. It is a process by which a series of thin layer of different materials can be patterned to a desired shape. Lithographic techniques have played a central role in the advancement of semiconductor process technologies.</p>
//                 <p className="mt-4">MODEL CN500 MASK ALIGNER developed by CRYONANO is a state of the art system developed with highest quality at extremely low cost. It is completely UV led based with automatic vacuum and Mask holding controls and automatic UV exposure units.</p>
//               </div>
//             </motion.div>
//           </div>

//           {/* Features & Parameters (Exact Bullet Points Categorized Neatly) */}
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//             <h3 className="text-2xl font-bold text-slate-900 mb-10 flex items-center justify-center gap-3">
//               <Sparkles className="w-6 h-6 text-purple-500" /> Features & Parameters
//             </h3>
            
//             <div className="grid md:grid-cols-2 gap-6">
              
//               {/* Card 1: Optics & Precision */}
//               <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-400 group">
//                 <h4 className="text-lg font-bold text-purple-800 mb-5 flex items-center gap-2">
//                   <Microscope className="w-5 h-5 text-purple-500" /> Optics & Alignment
//                 </h4>
//                 <ul className="space-y-3 text-sm text-slate-600 font-medium">
//                   <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" /> High Intensity UV-LED optics</li>
//                   <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" /> Almost monochromatic radiation which ensures uniformity in deposition of layers on a wafer</li>
//                   <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" /> High precision X-Y-Z-θ aligner</li>
//                   <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" /> High resolution microscope: Eye piece: 10x Objective: 4x, 10x & 20x</li>
//                   <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" /> High Resolution Patterning down to 1um</li>
//                 </ul>
//               </div>

//               {/* Card 2: Operation & Control */}
//               <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-400 group">
//                 <h4 className="text-lg font-bold text-indigo-700 mb-5 flex items-center gap-2">
//                   <Settings className="w-5 h-5 text-indigo-500" /> Operation & Control
//                 </h4>
//                 <ul className="space-y-3 text-sm text-slate-600 font-medium">
//                   <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" /> No waiting time after switching on, operation can be done immediately</li>
//                   <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" /> Portable, compact, and has very fast response time. There is practically no waiting period, no stray radiation after switching off the device. Least time for device fabrication and prototyping</li>
//                   <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" /> Permits precise, accurate electronic control on the exposure time and power</li>
//                 </ul>
//               </div>

//               {/* Card 3: Design & Infrastructure */}
//               <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-400 group">
//                 <h4 className="text-lg font-bold text-cyan-700 mb-5 flex items-center gap-2">
//                   <Layers className="w-5 h-5 text-cyan-500" /> Form Factor & Economics
//                 </h4>
//                 <ul className="space-y-3 text-sm text-slate-600 font-medium">
//                   <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" /> Wafers up to diameter 100 mm (4 inch)</li>
//                   <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" /> Separate substrate chuck for smaller pieces</li>
//                   <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" /> Does not require complex infrastructure to operate</li>
//                   <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" /> Very low cost system- price is almost one-forth compared to Hg-based system</li>
//                 </ul>
//               </div>

//               {/* Card 4: Safety & Power */}
//               <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-400 group">
//                 <h4 className="text-lg font-bold text-emerald-700 mb-5 flex items-center gap-2">
//                   <ShieldCheck className="w-5 h-5 text-emerald-500" /> Power & Safety Standards
//                 </h4>
//                 <ul className="space-y-3 text-sm text-slate-600 font-medium">
//                   <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" /> No complex, high voltage power supply</li>
//                   <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" /> Total power consumption is less than 0.5% of the power required for Hg-vapor lamps for the same exposure time</li>
//                   <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" /> Environment friendly, no fear of Hg-vapor toxicity due to accident</li>
//                   <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" /> Less hazardous from high frequency UV radiation</li>
//                 </ul>
//               </div>

//             </div>
//           </motion.div>

//           <div ref={addToRevealRefs} className="opacity-0 translate-y-8 mt-16 text-center">
//             <p className="text-rose-500 font-bold inline-block bg-rose-50/80 backdrop-blur-sm py-3 px-8 rounded-full border border-rose-100 shadow-sm">
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

// export default ArchivedProductsPage;