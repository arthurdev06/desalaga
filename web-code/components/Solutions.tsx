'use client'

import { CloudRain, Droplets, Shield, TreePine } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const solutions = [
  {
    icon: CloudRain,
    title: 'Monitoramento Inteligente',
    description: 'Sistema de sensores IoT para prever e alertar sobre riscos de alagamento em tempo real.',
    demoLink: '/mapa'
  },
  {
    icon: Droplets,
    title: 'Drenagem Sustentável',
    description: 'Infraestrutura verde que absorve e direciona águas pluviais de forma natural e eficiente.',
    demoLink: '/drenagem'
  },
  {
    icon: Shield,
    title: 'Barreiras Inteligentes',
    description: 'Sistemas automatizados de contenção que se ativam preventivamente em áreas de risco.',
    demoLink: '/barreiras'
  },
  {
    icon: TreePine,
    title: 'Jardins de Chuva',
    description: 'Áreas verdes projetadas para captar e filtrar água, reduzindo o escoamento superficial.',
    demoLink: '/jardins'
  }
]

export default function Solutions() {
  const router = useRouter()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossas Soluções
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologia e sustentabilidade trabalhando juntas para criar cidades mais resilientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:shadow-xl flex flex-col"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <Icon className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {solution.description}
                </p>
                <Button 
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
                  onClick={() => router.push(solution.demoLink)}
                >
                  Experimente
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}