'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCheck, FaStar } from 'react-icons/fa'

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleCTAClick = (tier: string) => {
    console.log(`CTA clicked: ${tier} pricing tier`)
    const element = document.getElementById('contact')
    if (element) {
      const yOffset = -80 // Account for fixed navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const tiers = [
    {
      name: 'Starter',
      price: '$2,500',
      period: 'per project',
      description: 'Perfect for small projects and startups',
      features: [
        'Basic web development',
        'Responsive design',
        'Up to 5 pages',
        '1 month support',
        'Basic SEO setup',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '$7,500',
      period: 'per project',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced web development',
        'Custom functionality',
        'Unlimited pages',
        '3 months support',
        'Advanced SEO & analytics',
        'API integrations',
        'Performance optimization',
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Custom',
      price: 'From $15,000',
      period: 'tailored to you',
      description: 'Enterprise solutions with full customization',
      features: [
        'Everything in Growth',
        'Complex integrations',
        'Custom automation',
        '12 months support',
        'Dedicated account manager',
        'Priority support',
        'Training & documentation',
      ],
      cta: 'Contact Us',
      highlighted: false,
    },
  ]

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden"
      data-testid="pricing-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              data-testid="pricing-title">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our commitment to quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`relative p-8 rounded-2xl ${
                tier.highlighted
                  ? 'bg-primary text-white shadow-2xl scale-105 border-2 border-primary-light'
                  : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700'
              }`}
              data-testid={`pricing-tier-${index}`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-1 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    <FaStar className="text-xs" />
                    <span>POPULAR</span>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    tier.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}
                  data-testid={`pricing-tier-name-${index}`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm ${
                    tier.highlighted ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <div
                  className={`text-4xl font-bold ${
                    tier.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}
                  data-testid={`pricing-tier-price-${index}`}
                >
                  {tier.price}
                </div>
                <div
                  className={`text-sm ${
                    tier.highlighted ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {tier.period}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheck
                      className={`mr-3 mt-1 flex-shrink-0 ${
                        tier.highlighted ? 'text-white/90' : 'text-primary dark:text-primary-light'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        tier.highlighted ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCTAClick(tier.name)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-white hover:bg-primary-hover dark:bg-primary dark:hover:bg-primary-hover'
                }`}
                data-testid={`pricing-tier-cta-${index}`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
