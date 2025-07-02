import { motion } from "framer-motion";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Contact(){
    return(
        <>
        <section id="contact" className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(120,50,255,0.15),transparent_50%)]" />
        
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-3xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="text-center mb-12"
                    >
                      <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
                      <p className="text-gray-300 mb-8 text-lg">
                        Join thousands of satisfied users who have already transformed their workflow with TechNova.
                      </p>
                    </motion.div>
        
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="bg-gradient-to-b from-gray-900 to-gray-950 p-[1px] rounded-xl">
                        <div className="bg-gradient-to-b from-gray-900 to-gray-950 p-8 rounded-xl border border-gray-800/50 backdrop-blur-sm">
                          <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                          <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="name" className="text-gray-300">
                                  Name
                                </Label>
                                <Input
                                  id="name"
                                  type="text"
                                  placeholder="Enter your name"
                                  className="bg-gray-800/50 border-gray-700 focus:border-purple-500 h-12"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email" className="text-gray-300">
                                  Email
                                </Label>
                                <Input
                                  id="email"
                                  type="email"
                                  placeholder="Enter your email"
                                  className="bg-gray-800/50 border-gray-700 focus:border-purple-500 h-12"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="subject" className="text-gray-300">
                                Subject
                              </Label>
                              <Input
                                id="subject"
                                type="text"
                                placeholder="Enter subject"
                                className="bg-gray-800/50 border-gray-700 focus:border-purple-500 h-12"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="message" className="text-gray-300">
                                Message
                              </Label>
                              <textarea
                                id="message"
                                rows={4}
                                placeholder="Enter your message"
                                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                              ></textarea>
                            </div>
                            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 h-12 text-base">
                              Send Message
                            </Button>
                          </form>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
        </>
    );
}