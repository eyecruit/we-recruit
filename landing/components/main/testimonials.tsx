import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
    return(
        <>
        <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,50,255,0.15),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about their experience with
                TechNova.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CTO, TechStart Inc.",
                image: "https://avatar.vercel.sh/jill",
                content:
                  "TechNova has completely transformed our development workflow. The platform's intuitive design and powerful features have increased our team's productivity by over 40%.",
              },
              {
                name: "Michael Chen",
                role: "Founder, DataFlow",
                image: "https://avatar.vercel.sh/jill",
                content:
                  "Implementing TechNova was one of the best decisions we've made. The seamless integration and robust API have allowed us to focus on what matters most - building great products.",
              },
              {
                name: "Emily Rodriguez",
                role: "Lead Developer, InnovateCorp",
                image: "https://avatar.vercel.sh/jill",
                content:
                  "As a developer, I appreciate the attention to detail in TechNova's platform. The documentation is comprehensive, and the support team is always ready to help.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl">
                  <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-8 rounded-xl border border-gray-800/50 backdrop-blur-sm">
                    <div className="flex items-center mb-6">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        </>
    );
}