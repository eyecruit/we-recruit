import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { CloudPlatform } from "../interactive/cloud-platform";
import { AnalyticsPlatform } from "../interactive/analytics-platform";
import { SecurityPlatform } from "../interactive/security-platform";

export default function Products() {
    return(
        <>
        <section id="products" className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(120,50,255,0.15),transparent_50%)]" />
        
                <div className="container mx-auto px-4 relative z-10">
                  <div className="text-center mb-16">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Products</h2>
                      <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore our suite of innovative products designed to transform your digital experience.
                      </p>
                    </motion.div>
                  </div>
        
                  <div className="space-y-24">
                    {/* TechNova Cloud */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                      >
                        <h3 className="text-3xl font-bold">TechNova Cloud</h3>
                        <p className="text-gray-300 text-lg">
                          A scalable cloud platform that adapts to your needs. Deploy applications with ease and manage
                          resources efficiently.
                        </p>
                        <ul className="space-y-3">
                          {["Auto-scaling", "Global distribution", "Pay-as-you-go pricing", "99.9% uptime SLA"].map(
                            (feature, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-purple-500" />
                                <span>{feature}</span>
                              </li>
                            ),
                          )}
                        </ul>
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                          Learn More
                        </Button>
                      </motion.div>
        
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-lg">
                          <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                            <CloudPlatform />
                          </div>
                        </div>
                      </motion.div>
                    </div>
        
                    {/* TechNova Analytics */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 md:order-last space-y-4 md:space-y-6"
                      >
                        <h3 className="text-2xl md:text-3xl font-bold">TechNova Analytics</h3>
                        <p className="text-gray-300 text-base md:text-lg">
                          Gain valuable insights from your data with our powerful analytics platform. Make data-driven decisions
                          with confidence.
                        </p>
                        <ul className="space-y-2 md:space-y-3">
                          {["Real-time dashboards", "Custom reports", "AI-powered predictions", "Data visualization"].map(
                            (feature, i) => (
                              <li key={i} className="flex items-center gap-2 md:gap-3">
                                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-purple-500 flex-shrink-0" />
                                <span className="text-sm md:text-base">{feature}</span>
                              </li>
                            ),
                          )}
                        </ul>
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                          Learn More
                        </Button>
                      </motion.div>
        
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 md:order-first"
                      >
                        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-lg">
                          <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                            <AnalyticsPlatform />
                          </div>
                        </div>
                      </motion.div>
                    </div>
        
                    {/* TechNova Security */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4 md:space-y-6 order-1 md:order-1"
                      >
                        <h3 className="text-2xl md:text-3xl font-bold">TechNova Security</h3>
                        <p className="text-gray-300 text-base md:text-lg">
                          Protect your digital assets with our comprehensive security solution. Stay ahead of threats with
                          advanced protection.
                        </p>
                        <ul className="space-y-2 md:space-y-3">
                          {[
                            "Threat detection",
                            "Vulnerability scanning",
                            "Compliance monitoring",
                            "24/7 security operations",
                          ].map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 md:gap-3">
                              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-purple-500 flex-shrink-0" />
                              <span className="text-sm md:text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                          Learn More
                        </Button>
                      </motion.div>
        
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 md:order-2"
                      >
                        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-lg">
                          <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                            <SecurityPlatform />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>
        </>
    );
}