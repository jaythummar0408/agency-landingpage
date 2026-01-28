'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    console.log(`CTA clicked: Navigate to ${sectionId}`)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        >
          <source src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/95 via-white/90 to-white dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-800"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="p-4 bg-primary/10 dark:bg-primary/20 rounded-full">
              <FaRocket className="text-5xl text-primary dark:text-primary-light" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            data-testid="hero-headline"
          >
            Custom software solutions,{' '}
            <span className="text-primary dark:text-primary-light">
              built fast and done right
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto"
            data-testid="hero-description"
          >
            We deliver exceptional web development, WordPress solutions, and
            intelligent automation services that transform your business. From
            concept to launch, we build software that works.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="group w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-primary text-white rounded-lg hover:bg-primary-hover transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              data-testid="hero-cta-primary"
            >
              <span>Book a call</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary dark:hover:border-primary-light transition-all duration-300 font-semibold text-base sm:text-lg"
              data-testid="hero-cta-secondary"
            >
              Learn more
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-gray-500 dark:text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Professional Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Ongoing Support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
