// import { motion } from "framer-motion";
// import { ArrowRight, Phone, Mail, UserPlus } from "lucide-react";
// import { Link } from "react-router-dom";

// export function CTASection() {
  
//   // Smooth scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   return (
//     // Pure white section background to contrast with the grey card
//     <section className="relative py-10 lg:py-14 bg-white overflow-hidden border-t border-slate-200">
      
//       {/* Faint structural grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

//       <div className="container relative z-10">
        
//         {/* ========================================= */}
//         {/* ANIMATED BACKGROUND AURA (Behind the card) */}
//         {/* ========================================= */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <motion.div
//             animate={{ 
//               rotate: [0, 5, -5, 0],
//               scale: [1, 1.02, 1] 
//             }}
//             transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//             className="w-[110%] h-[110%] bg-gradient-to-tr from-blue-100/50 via-slate-200/50 to-primary/10 rounded-[4rem] blur-3xl opacity-70"
//           />
//         </div>

//         {/* ========================================= */}
//         {/* MAIN CONTAINER (Stable Light Grey)        */}
//         {/* ========================================= */}
//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           // Stable slate-100 background creates perfect contrast against the white page
//           className="relative bg-slate-300 border border-slate-200/80 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
//         >

//           <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            
//             {/* LEFT SIDE: Text and Actions */}
//             <div className="flex flex-col gap-6">
              
//               {/* ANIMATED BADGE */}
//               <motion.div 
//                 animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
//                 transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//                 className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 bg-[length:200%_200%] border border-primary/20 text-primary text-xs font-extrabold tracking-widest uppercase w-fit shadow-sm"
//               >
//                 <motion.div 
//                   animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                   className="w-2 h-2 rounded-full bg-primary" 
//                 />
//                 <UserPlus className="w-3.5 h-3.5" />
//                 Expert Consultation
//               </motion.div>
              
//               {/* HEADING */}
//               <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-800 leading-[1.1] tracking-tight">
//                 Speak to a <br/>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-blue-600">
//                   Scientist
//                 </span>
//               </h2>
              
//               {/* DESCRIPTION */}
//               <div className="space-y-5 mt-2">
//                 <p className="text-xl text-slate-700 leading-relaxed font-bold">
//                   CRYONANO's analytical scientists are available to answer your questions. Have a project you'd like to discuss? Give us a call or email us!
//                 </p>
//                 <p className="text-lg text-slate-600 leading-relaxed font-medium">
//                   We are happy to talk to you about any of your applications and instruments. Please write us an email with your question, drawing requirements, etc., and we will get back to you as soon as possible.
//                 </p>
//               </div>

//               {/* BUTTONS */}
//               <div className="flex flex-wrap gap-4 mt-4">
                
//                 {/* GET A QUOTE LINK */}
//                 <Link 
//                   to="/request-quote"
//                   onClick={scrollToTop}
//                   className="group relative px-8 py-4 rounded-xl font-bold text-white bg-primary shadow-lg hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center gap-2 overflow-hidden hover:-translate-y-1"
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     Get a Quote <ArrowRight className="w-5 h-5 group-hover:-rotate-90 transition-transform duration-300" />
//                   </span>
//                   <motion.div 
//                     animate={{ x: ["-100%", "200%"] }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
//                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"
//                   />
//                 </Link>

//                 {/* TECHNICAL SUPPORT LINK */}
//                 <Link 
//                   to="/contact"
//                   onClick={scrollToTop}
//                   className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-primary/50 hover:bg-slate-50 hover:text-primary transition-all duration-300 flex items-center gap-2 shadow-md hover:-translate-y-1"
//                 >
//                   Technical Support
//                 </Link>

//               </div>
//             </div>

//             {/* RIGHT SIDE: Interactive Cards (Highly visible by default) */}
//             <div className="flex flex-col gap-6">
              
//               {/* Phone Card - Pure white to pop out from the grey container */}
//               <a 
//                 href="tel:+919748181485" 
//                 className="group relative flex items-center gap-6 p-6 md:p-8 rounded-[2rem] bg-white border-2 border-slate-200 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-1.5 shadow-md hover:shadow-xl overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
//                 {/* Icon Box - Thicker stroke and darker color for default visibility */}
//                 <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-50 border-2 border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-300 transition-all duration-500 z-10">
//                   <Phone strokeWidth={2.5} className="w-6 h-6 text-slate-700 group-hover:text-cyan-600 transition-colors" />
//                 </div>
//                 <div className="relative z-10">
//                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 group-hover:text-cyan-600 transition-colors">Call Us Directly</p>
//                   <p className="text-2xl font-display font-extrabold text-slate-900 tracking-wide transition-colors">+91 97481 81485</p>
//                 </div>
//               </a>

//               {/* Email Card - Pure white to pop out from the grey container */}
//               <a 
//                 href="mailto:contact@cryonano.com" 
//                 className="group relative flex items-center gap-6 p-6 md:p-8 rounded-[2rem] bg-white border-2 border-slate-200 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1.5 shadow-md hover:shadow-xl overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
//                 {/* Icon Box - Thicker stroke and darker color for default visibility */}
//                 <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-50 border-2 border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-all duration-500 z-10">
//                   <Mail strokeWidth={2.5} className="w-6 h-6 text-slate-700 group-hover:text-primary transition-colors" />
//                 </div>
//                 <div className="relative z-10">
//                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 group-hover:text-primary transition-colors">Email Engineering</p>
//                   <p className="text-xl md:text-2xl font-display font-extrabold text-slate-900 tracking-wide transition-colors">contact@cryonano.com</p>
//                 </div>
//               </a>

//             </div>

//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Mail, UserPlus, Send, CheckCircle2, X } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate an API call / network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
      // Optional: reset form here if needed
    }, 1200);
  };

  return (
    // Pure white section background to contrast with the grey card
    <section className="relative py-10 lg:py-14 bg-white overflow-hidden border-t border-slate-200">
      
      {/* Faint structural grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container relative z-10">
        
        {/* ========================================= */}
        {/* ANIMATED BACKGROUND AURA (Behind the card) */}
        {/* ========================================= */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.02, 1] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="w-[110%] h-[110%] bg-gradient-to-tr from-blue-100/50 via-slate-200/50 to-primary/10 rounded-[4rem] blur-3xl opacity-70"
          />
        </div>

        {/* ========================================= */}
        {/* MAIN CONTAINER (Stable Light Grey)        */}
        {/* ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // Stable slate-300 background creates perfect contrast against the white page
          className="relative bg-slate-300 border border-slate-200/80 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
        >

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            
            {/* ========================================= */}
            {/* LEFT SIDE: Text, Buttons, and Contact Cards */}
            {/* ========================================= */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* ANIMATED BADGE */}
              <motion.div 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 bg-[length:200%_200%] border border-primary/20 text-primary text-xs font-extrabold tracking-widest uppercase w-fit shadow-sm"
              >
                <motion.div 
                  animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-primary" 
                />
                <UserPlus className="w-3.5 h-3.5" />
                Expert Consultation
              </motion.div>
              
              {/* HEADING */}
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-800 leading-[1.1] tracking-tight">
                Speak to a <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-blue-600">
                  Scientist
                </span>
              </h2>
              
              {/* DESCRIPTION */}
              <div className="space-y-5 mt-2">
                <p className="text-xl text-slate-700 leading-relaxed font-bold">
                  CRYONANO's analytical scientists are available to answer your questions. Have a project you'd like to discuss? Give us a call or email us!
                </p>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  We are happy to talk to you about any of your applications and instruments. Please write us an email with your question, drawing requirements, etc., and we will get back to you as soon as possible.
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-2">
                <Link 
                  to="/request-quote"
                  onClick={scrollToTop}
                  className="group relative px-8 py-4 rounded-xl font-bold text-white bg-primary shadow-lg hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center gap-2 overflow-hidden hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get a Quote <ArrowRight className="w-5 h-5 group-hover:-rotate-90 transition-transform duration-300" />
                  </span>
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"
                  />
                </Link>

                <Link 
                  to="/contact"
                  onClick={scrollToTop}
                  className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-primary/50 hover:bg-slate-50 hover:text-primary transition-all duration-300 flex items-center gap-2 shadow-md hover:-translate-y-1"
                >
                  Technical Support
                </Link>
              </div>

              {/* CONTACT CARDS (Moved to left to match image) */}
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <a href="tel:+919748181485" className="group relative flex items-center gap-4 p-5 rounded-2xl bg-slate-800 border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 shadow-md overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-slate-700/50 border border-slate-600 flex items-center justify-center group-hover:border-cyan-400 transition-all duration-300 z-10">
                    <Phone strokeWidth={2.5} className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-cyan-400 transition-colors">Call Directly</p>
                    <p className="text-base font-display font-extrabold text-white tracking-wide transition-colors">+91 97481 81485</p>
                  </div>
                </a>

                <a href="mailto:contact@cryonano.com" className="group relative flex items-center gap-4 p-5 rounded-2xl bg-slate-800 border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-md overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-slate-700/50 border border-slate-600 flex items-center justify-center group-hover:border-primary/50 transition-all duration-300 z-10">
                    <Mail strokeWidth={2.5} className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Email Engineering</p>
                    <p className="text-base font-display font-extrabold text-white tracking-wide transition-colors">contact@cryonano.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* ========================================= */}
            {/* RIGHT SIDE: Interactive Dark Form         */}
            {/* ========================================= */}
            <div className="lg:col-span-5 w-full relative">
              <div className="bg-slate-900 rounded-[2rem] p-8 shadow-2xl border border-slate-800 relative overflow-hidden">
                {/* Form decorative background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Tell us about your application</h3>
                  <p className="text-sm text-slate-400 font-medium">Drawings, requirements, environmental constraints — we'll respond promptly.</p>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Name</label>
                      <input required type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Organization</label>
                      <input required type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Email</label>
                    <input required type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Application / Use Case</label>
                    <textarea required rows={4} placeholder="Describe your system requirements..." className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-slate-600" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 pb-2">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Timeline (Optional)</label>
                      <input type="text" placeholder="e.g. Q2 2026" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Budget (Optional)</label>
                      <input type="text" placeholder="Range" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600" />
                    </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Request Consultation
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* ========================================= */}
      {/* SUCCESS MODAL (Framer Motion Animated)    */}
      {/* ========================================= */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 text-center"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
              <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                Your consultation request has been successfully submitted. Our engineering team will review your requirements and contact you shortly.
              </p>
              
              <button 
                onClick={() => setShowModal(false)}
                className="w-full py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md"
              >
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}