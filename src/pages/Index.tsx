// import { Navbar } from "@/components/Navbar";
// import { HeroSection } from "@/components/HeroSection";
// import { ProductCategories } from "@/components/ProductCategories";
// import { FeaturedProducts } from "@/components/FeaturedProducts";
// import { CTASection } from "@/components/CTASection";
// import { Footer } from "@/components/Footer";

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <main>
//         <HeroSection />
//         <ProductCategories />
//         <FeaturedProducts />
//         <CTASection />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;










import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { FlagshipProduct } from "../components/FlagshipProduct";
import { SynergisticStack } from "@/components/SynergisticStack";
import { ProductCategories } from "@/components/ProductCategories";
// import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ImpactSection } from "@/components/ImpactSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition"; // Added our wrapper

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <WhatWeBuild />
          <FlagshipProduct />
           <SynergisticStack />
          <ProductCategories />
          {/* <FeaturedProducts /> */}

         
          <ImpactSection />
          <TestimonialSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;