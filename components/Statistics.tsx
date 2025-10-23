'use client'

import { useEffect, useState } from 'react'

interface StatItem {
  number: string
  label: string
  suffix?: string
}

const stats: StatItem[] = [
  { number: '150', label: 'Cidades Atendidas', suffix: '+' },
  { number: '85', label: 'Redução de Alagamentos', suffix: '%' },
  { number: '2.5', label: 'Pessoas Beneficiadas', suffix: 'M' },
  { number: '98', label: 'Satisfação dos Municípios', suffix: '%' }
]

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}