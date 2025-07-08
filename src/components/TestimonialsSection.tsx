import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This platform transformed our business operations completely. The insights we get are invaluable.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      avatar: "👩‍💼"
    },
    {
      quote: "The AI-driven analytics helped us increase our traffic by 300% in just 3 months.",
      author: "Mike Chen",
      role: "Marketing Director, GrowthCo",
      avatar: "👨‍💻"
    },
    {
      quote: "Finally, a tool that actually delivers on its promises. Our ROI has never been better.",
      author: "Emily Rodriguez",
      role: "CMO, ScaleUp Inc",
      avatar: "👩‍💻"
    },
    {
      quote: "The real-time monitoring and brand perception analytics are game-changers for our team.",
      author: "David Park",
      role: "Brand Manager, InnovateLab",
      avatar: "👨‍💼"
    },
    {
      quote: "We've seen a 250% improvement in our conversion rates since implementing this solution.",
      author: "Lisa Wang",
      role: "VP Marketing, NextGen",
      avatar: "👩‍🎯"
    },
    {
      quote: "The customer support and onboarding process made everything seamless from day one.",
      author: "James Wilson",
      role: "CTO, DataFlow",
      avatar: "👨‍🔬"
    }
  ];

  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  return (
    <section className="w-full py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
            Don't just take our word for it. See how we've helped businesses like yours achieve remarkable growth.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* First Row */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {firstRow.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 bg-[#1a1a1a] rounded-xl border border-[#262626] h-full">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <div className="flex-1">
                        <p className="text-white mb-4 leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <div className="text-white font-semibold">{testimonial.author}</div>
                          <div className="text-[#a1a1aa] text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Second Row */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3500,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {secondRow.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 bg-[#1a1a1a] rounded-xl border border-[#262626] h-full">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <div className="flex-1">
                        <p className="text-white mb-4 leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <div className="text-white font-semibold">{testimonial.author}</div>
                          <div className="text-[#a1a1aa] text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;