// import { motion } from "framer-motion";
// import { Quote, Star } from "lucide-react";

// // --- TESTIMONIAL DATA ---
// // Replace the placeholder text and names with the exact content from your image!
// const testimonials = [
//   {
//     id: 1,
//     name: "Dr. Vidya Kochat",
//     role: "Assistant Prof. Material Science  IIT Kharagpur",
//     // company: "Organization Name",
//     // Keep placeholder for adding images later. Just drop the image path here (e.g., "/images/client1.jpg")
//     image: "/logos/Capture.PNG", 
//     text: "We have been able to fabricate a lot of 2D hetreostructures with good precision and control using the 2D Transfer System by Cryonano. The fine angle adjustment has also been very helpful in making twisted bilayers of graphene and various other TMDCs. The temperature control is also good and optics is top class. The visualization of the flakes during the transfer is excellent and hence we are able to fabricate 2D heterostructures with high degree of precision. Recently a journal article has been published in Journal of Applied Physics. 2023;133(11). Where Cryonano transfer system was used to make heterostructures.",
//     // rating: 5,
//   },
//   {
//     id: 2,
//     name: "Dr Biswajit Karmakar",
//     role: "Associate Prof, Saha Institute of Nuclear Physics, India",
//     // company: "Research Institute",
//     image: "/logos/Capture2.PNG", 
//     text: "We have been using the 16-bit digital to analog isolated voltage source (IVS) from Cryonano for quite sometime now and it has become a mainstay for our lab. It has four truly bipolar +/- 10 V output that is controlled by Labview. We are extensively using the IVS for our ongoing research work for mainly Gate Voltage Control of our multi-terminal quantum hall Systems, Gate Voltage Control on graphene devices and I-V spectroscopy of fractional quantum hall systems.. We have carried out several experiments and published two papers (Phys. Rev. Lett. 125, 076802 – Published 12 August 2020; Phys. Rev. B 104, 085304 – Published 9 August 2021).",
//     // rating: 5,
//   }
// //   {
// //     id: 3,
// //     name: "Prof. Firstname Lastname",
// //     role: "Director of Engineering",
// //     company: "Tech University",
// //     image: "", 
// //     text: "[PASTE EXACT CONTENT FROM YOUR THIRD UPLOADED IMAGE HERE. The integration and deterministic precision are unmatched in the industry.]",
// //     rating: 5,
// //   }
// ];

// export function TestimonialSection() {
//   return (
//     <section className="relative py-24 bg-slate-50 overflow-hidden border-t border-slate-200">
      
//       {/* Background Ambient Glows */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-100/50 blur-[100px] rounded-full pointer-events-none" />

//       <div className="container relative z-10">
        
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[12px] font-extrabold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
//           >
//             <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)] animate-pulse" />
//             Client Success
//           </motion.div>
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
//           >
//             Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">Pioneers</span>
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-lg text-slate-600 leading-relaxed"
//           >
//             Hear what leading researchers and engineers have to say about our integrated systems.
//           </motion.p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, idx) => (
//             <motion.div
//               key={testimonial.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.15, duration: 0.5 }}
//               className="group relative bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
//             >
//               {/* Large Quote Icon (Changes color on hover) */}
//               <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-100 group-hover:text-blue-500 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
//                 <Quote className="w-12 h-12 fill-current" />
//               </div>

//               {/* Star Rating */}
//               <div className="flex gap-1 mb-6">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
//                 ))}
//               </div>

//               {/* Testimonial Text */}
//               <p className="text-slate-700 font-medium leading-relaxed mb-8 flex-grow relative z-10">
//                 "{testimonial.text}"
//               </p>

//               {/* User Info & Image Placeholder */}
//               <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
//                 {/* Image Placeholder - Will show initials if no image is provided */}
//                 <div className="w-14 h-14 rounded-full bg-slate-100 border-2 border-white shadow-md overflow-hidden shrink-0 flex items-center justify-center group-hover:border-blue-100 group-hover:shadow-blue-200 transition-all duration-300">
//                   {testimonial.image ? (
//                     <img 
//                       src={testimonial.image} 
//                       alt={testimonial.name} 
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <span className="text-slate-400 font-bold text-lg">
//                       {testimonial.name.charAt(0)}
//                     </span>
//                   )}
//                 </div>

//                 {/* Name and Role */}
//                 <div>
//                   <h4 className="font-extrabold text-slate-900 text-[15px] group-hover:text-blue-700 transition-colors duration-300">
//                     {testimonial.name}
//                   </h4>
//                   <p className="text-xs font-bold text-slate-500">
//                     {testimonial.role}
//                   </p>
//                   <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
//                     {testimonial.company}
//                   </p>
//                 </div>
//               </div>

//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }










import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

// --- TESTIMONIAL DATA ---
const testimonials = [
  {
    id: 1,
    name: "Dr. Vidya Kochat",
    role: "Assistant Prof. Material Science  IIT Kharagpur",
    image: "/logos/Capture.PNG", 
    text: "We have been able to fabricate a lot of 2D hetreostructures with good precision and control using the 2D Transfer System by Cryonano. The fine angle adjustment has also been very helpful in making twisted bilayers of graphene and various other TMDCs. The temperature control is also good and optics is top class. The visualization of the flakes during the transfer is excellent and hence we are able to fabricate 2D heterostructures with high degree of precision. Recently a journal article has been published in Journal of Applied Physics. 2023;133(11). Where Cryonano transfer system was used to make heterostructures.",
    // rating: 5,
  },
  {
    id: 2,
    name: "Dr Biswajit Karmakar",
    role: "Associate Prof, Saha Institute of Nuclear Physics, India",
    image: "/logos/Capture2.PNG", 
    text: "We have been using the 16-bit digital to analog isolated voltage source (IVS) from Cryonano for quite sometime now and it has become a mainstay for our lab. It has four truly bipolar +/- 10 V output that is controlled by Labview. We are extensively using the IVS for our ongoing research work for mainly Gate Voltage Control of our multi-terminal quantum hall Systems, Gate Voltage Control on graphene devices and I-V spectroscopy of fractional quantum hall systems.. We have carried out several experiments and published two papers (Phys. Rev. Lett. 125, 076802 – Published 12 August 2020; Phys. Rev. B 104, 085304 – Published 9 August 2021).",
    // rating: 5,
  }
];

export function TestimonialSection() {
  return (
    <section className="relative py-10 bg-slate-50 overflow-hidden border-t border-slate-200">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-100/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[12px] font-extrabold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)] animate-pulse" />
            Client Success
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">Pioneers</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Hear what leading researchers and engineers have to say about our integrated systems.
          </motion.p>
        </div>

        {/* Testimonials Grid (Centered 2-column layout) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="group relative bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center h-full"
            >
              {/* Large Quote Icon (Moved to the left to balance the centered content) */}
              <div className="absolute top-8 left-8 opacity-10 group-hover:opacity-100 group-hover:text-blue-500 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              {/* User Info & Image (Moved to Top, Centered, and Larger) */}
              <div className="flex flex-col items-center mb-6 relative z-10">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-slate-100 border-4 border-white shadow-xl overflow-hidden shrink-0 flex items-center justify-center group-hover:border-blue-100 group-hover:shadow-blue-200 transition-all duration-300 mb-5">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-slate-400 font-bold text-3xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  )}
                </div>

                <h4 className="font-extrabold text-slate-900 text-xl md:text-2xl group-hover:text-blue-700 transition-colors duration-300">
                  {testimonial.name}
                </h4>
                <p className="text-sm font-bold text-slate-500 mt-2 max-w-[280px]">
                  {testimonial.role}
                </p>
                {/* Fallback for company if it gets added back later */}
                {/* <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-1">
                  {testimonial.company}
                </p> */}
              </div>

              {/* Star Rating */}
              {/* <div className="flex justify-center gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div> */}

              {/* Testimonial Text */}
              <p className="text-slate-700 font-large leading-relaxed flex-grow relative z-10 italic">
                "{testimonial.text}"
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}