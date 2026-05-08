import { motion } from "framer-motion";
import { BookOpen, Quote, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// You can move this array to a separate data file later, but for now, we keep it here to render the full list.
const allPublications = [
  { year: "2025", title: "Dimensional Crossover and Emergence of Novel Phases in Puckered PdSe under Pressure", authors: "T Kundu, S Das, K Dey, B Joseph, C Nayak, M Palit, SK Mahatha, K Dolui", journal: "Phys. Rev. B 112, 024109" },
  { year: "2025", title: "Tailored one-dimensional/two-dimensional van der Waals heterostructures for unified analog and digital electronics", authors: "B Karmakar, B Das, S Mandal, R Paramanik, S Maity, T Kundu, S Das", journal: "Phys. Rev. Applied 23, 054013" },
  { year: "2025", title: "Electron-Magnon Coupling Mediated Magnetotransport in Antiferromagnetic van der Waals Heterostructure", authors: "S Maity, S Das, M Palit, K Dey, B Das, T Kundu, R Paramanik, BK De", journal: "Phys. Rev. B 111, L140407" },
  { year: "2023", title: "Raman spectroscopic studies on the evolution of interlayer coupling and stacking order in twisted bilayers and polytypes of WSe2", authors: "Sourav Paul et. al.", journal: "Journal of Applied Physics 133, 114301" },
  { year: "2020", title: "Magnetic-Field-Dependent Equilibration of Fractional Quantum Hall Edge Modes", authors: "Tanmay Maiti, et. al.", journal: "Phys. Rev. Lett. 125, 076802" },
  { year: "2019", title: "Gap states controlled transmission through 1D metal-nanotube junctions", authors: "U.N. Nandi et. al.", journal: "Carbon, Volume 146, Pages 106-115" }
];

export default function ResearchPublicationsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 bg-white border-b border-slate-200">
        <div className="container max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Research & Publications
            </h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed">
            A comprehensive archive of peer-reviewed literature and groundbreaking research powered by our integrated quantum and cryogenic systems.
          </p>
        </div>
      </div>

      {/* Full Timeline List */}
      <div className="flex-grow py-20">
        <div className="container max-w-4xl">
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 pl-8 md:pl-12 space-y-10">
            {allPublications.map((pub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative group cursor-default"
              >
                <div className="absolute -left-[41px] md:-left-[57px] top-4 w-4 h-4 rounded-full bg-white border-4 border-slate-300 group-hover:border-primary transition-colors duration-300 shadow-sm" />
                <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
                    <div className="flex-shrink-0 bg-slate-50 border border-slate-200 text-slate-800 font-extrabold text-xl px-5 py-2.5 rounded-xl shadow-inner group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300">
                      {pub.year}
                    </div>
                    <div className="flex-grow space-y-2">
                      <h4 className="text-lg md:text-xl font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
                        {pub.title}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
                        <p className="text-slate-600 font-medium flex items-center gap-1.5">
                          <Quote className="w-3.5 h-3.5 text-slate-400" /> {pub.authors}
                        </p>
                        <span className="hidden sm:block text-slate-300">•</span>
                        <p className="text-slate-800 font-bold">
                          {pub.journal}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}