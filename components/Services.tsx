'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCode, FaWordpress, FaCogs, FaHeadset } from 'react-icons/fa'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: [
        'React, Next.js, and TypeScript',
        'RESTful APIs and GraphQL',
        'Progressive Web Apps (PWA)',
        'E-commerce solutions',
      ],
    },
    {
      icon: <FaWordpress className="text-4xl" />,
      title: 'WordPress Development',
      description: 'Custom WordPress solutions tailored to your business needs.',
      features: [
        'Custom theme development',
        'Plugin customization',
        'WooCommerce integration',
        'Performance optimization',
      ],
    },
    {
      icon: <FaCogs className="text-4xl" />,
      title: 'Automation & Integrations',
      description: 'Streamline your workflows with intelligent automation solutions.',
      features: [
        'API integrations',
        'Workflow automation',
        'Data synchronization',
        'Third-party service connections',
      ],
    },
    {
      icon: <FaHeadset className="text-4xl" />,
      title: 'Maintenance & Support',
      description: 'Reliable ongoing support to keep your applications running smoothly.',
      features: [
        '24/7 monitoring',
        'Regular updates and patches',
        'Performance optimization',
        'Technical support',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      data-testid="services-section"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              data-testid="services-title">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive software solutions designed to accelerate your digital transformation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 bg-white dark:bg-gray-800 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light"
              data-testid={`service-card-${index}`}
            >
              <div className="mb-4 text-primary dark:text-primary-light group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                  data-testid={`service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="text-primary dark:text-primary-light mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
