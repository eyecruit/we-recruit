"use client"

import Header from "./main/header"
import Hero from "./main/hero"
import Features from "./main/features"
import Products from "./main/products"
import About from "./main/about"
import Testimonials from "./main/testimonials"
import Contact from "./main/contact"
import Footer from "./main/footer"
import Modal from "./main/Modal"

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features/>

      {/* Products Section */}
      <Products/>

      {/* About Section */}
      <About/>

      {/* Testimonials Section */}
      <Testimonials/>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>

      {/* Modal */}
      <Modal/>
      
    </div>
  )
}
