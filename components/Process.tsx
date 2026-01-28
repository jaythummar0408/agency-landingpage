'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaSearch, FaClipboardList, FaHammer, FaRocket } from 'react-icons/fa'

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      icon: <FaSearch className="text-3xl" />,
      title: 'Discover',
      description: 'We dive deep into your business needs, goals, and challenges to understand your vision.',
      number: '01',
    },
    {
      icon: <FaClipboardList className="text-3xl" />,
      title: 'Plan',
      description: 'We create a detailed roadmap with timelines, milestones, and technical specifications.',
      number: '02',
    },
    {
      icon: <FaHammer className="text-3xl" />,
      title: 'Build',
      description: 'Our team develops your solution using best practices and modern technologies.',
      number: '03',
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: 'Launch',
      description: 'We deploy your application and provide ongoing support to ensure success.',
      number: '04',
    },
  ]

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden"
      data-testid="process-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              data-testid="process-title">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A proven methodology that delivers results, every time
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary-light to-primary dark:from-primary-light dark:via-primary dark:to-primary-light" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative"
                data-testid={`process-step-${index}`}
              >
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-primary dark:bg-primary-light text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Card */}
                <div className="pt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4 text-primary dark:text-primary-light">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center"
                      data-testid={`process-step-title-${index}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
