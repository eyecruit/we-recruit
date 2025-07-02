import { motion } from "framer-motion";
import { CheckCircle, Code, Cpu, Github, Globe, MessageSquare } from "lucide-react";

export default function Features(){
    return(
        <>
        <section id="features" className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,50,255,0.15),transparent_50%)]" />
        
                <div className="container mx-auto px-4 relative z-10">
                  <div className="text-center mb-16">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
                      <p className="text-gray-400 max-w-2xl mx-auto">
                        Our platform offers a comprehensive suite of tools designed to enhance your productivity and streamline
                        your workflow.
                      </p>
                    </motion.div>
                  </div>
        
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        icon: <Code className="h-10 w-10 text-purple-500" />,
                        title: "Advanced API",
                        description:
                          "Integrate seamlessly with our robust API designed for developers with comprehensive documentation and examples.",
                      },
                      {
                        icon: <Globe className="h-10 w-10 text-blue-500" />,
                        title: "Global CDN",
                        description:
                          "Lightning-fast content delivery across our worldwide network with 99.9% uptime guarantee.",
                      },
                      {
                        icon: <CheckCircle className="h-10 w-10 text-green-500" />,
                        title: "Reliable Security",
                        description:
                          "Enterprise-grade security with end-to-end encryption and compliance with industry standards.",
                      },
                      {
                        icon: <Cpu className="h-10 w-10 text-red-500" />,
                        title: "AI-Powered",
                        description:
                          "Leverage the power of artificial intelligence to optimize your workflow and gain valuable insights.",
                      },
                      {
                        icon: <MessageSquare className="h-10 w-10 text-yellow-500" />,
                        title: "24/7 Support",
                        description:
                          "Our dedicated team is always available to assist you with any issues through multiple channels.",
                      },
                      {
                        icon: <Github className="h-10 w-10 text-gray-400" />,
                        title: "Open Source",
                        description:
                          "Contribute to our growing ecosystem of open-source tools and libraries with active community support.",
                      },
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl">
                          <div className="h-full bg-gradient-to-b from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800/50 hover:border-purple-500/50 transition-colors backdrop-blur-sm">
                            <div className="mb-4 p-3 bg-gray-800/30 rounded-lg inline-block">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
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