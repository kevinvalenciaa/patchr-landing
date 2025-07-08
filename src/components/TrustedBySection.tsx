import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TrustedBySection = () => {
  const partners = [
    { name: "Google", logo: "🔵" },
    { name: "Microsoft", logo: "🟢" },
    { name: "Amazon", logo: "🟠" },
    { name: "Meta", logo: "🔵" },
    { name: "Tesla", logo: "🔴" },
    { name: "Apple", logo: "⚫" },
    { name: "Netflix", logo: "🔴" },
    { name: "Spotify", logo: "🟢" },
  ];

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-[#a1a1aa] text-lg">
            Join thousands of companies already growing with our platform
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6">
                <div className="flex items-center justify-center p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-center">
                    <div className="text-3xl mb-2">{partner.logo}</div>
                    <div className="text-white font-medium text-sm">{partner.name}</div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TrustedBySection;