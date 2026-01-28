'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary based on complexity and scope. A simple website can be completed in 2-4 weeks, while more complex applications may take 2-3 months. We provide detailed timelines during the planning phase and keep you updated throughout the process.',
    },
    {
      question: 'Can you work with my existing website or do I need to start from scratch?',
      answer:
        'We can work with your existing website! Whether you need updates, new features, redesign, or optimization, we can enhance what you already have. After an initial assessment, we\'ll recommend the best approach for your specific situation.',
    },
    {
      question: 'What makes your WordPress development different?',
      answer:
        'Our WordPress solutions go beyond basic templates. We create custom themes and plugins tailored to your needs, optimize for performance and security, and ensure your site is easy to manage. We focus on scalability and best practices to ensure long-term success.',
    },
    {
      question: 'What kind of automation services do you offer?',
      answer:
        'We offer workflow automation, API integrations, data synchronization between systems, automated reporting, and custom automation solutions. Our goal is to reduce manual work, minimize errors, and help your business operate more efficiently.',
    },
    {
      question: 'Do you provide support after the project launches?',
      answer:
        'Yes! All our packages include post-launch support. This covers bug fixes, minor updates, and technical assistance. We also offer extended maintenance plans for ongoing support, monitoring, updates, and improvements.',
    },
    {
      question: 'What technologies do you work with?',
      answer:
        'We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, WordPress, and various APIs and automation tools. We choose the best technology stack for each project based on your specific requirements.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden"
      data-testid="faq-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              data-testid="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get answers to common questions about our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
              data-testid={`faq-item-${index}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                aria-expanded={openIndex === index}
                data-testid={`faq-question-${index}`}
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary dark:text-primary-light flex-shrink-0"
                >
                  <FaChevronDown />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 dark:text-gray-300"
                         data-testid={`faq-answer-${index}`}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
