import { CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Análise e Diagnóstico',
    description: 'Mapeamento completo das áreas de risco e identificação dos pontos críticos de alagamento.'
  },
  {
    number: '02',
    title: 'Planejamento Personalizado',
    description: 'Desenvolvimento de soluções customizadas para as necessidades específicas de cada cidade.'
  },
  {
    number: '03',
    title: 'Implementação',
    description: 'Execução do projeto com acompanhamento técnico especializado e mínimo impacto urbano.'
  },
  {
    number: '04',
    title: 'Monitoramento Contínuo',
    description: 'Acompanhamento em tempo real e manutenção preventiva para garantir eficácia duradoura.'
  }
]

export default function Process() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo estruturado para transformar sua cidade em um ambiente mais seguro e resiliente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl font-bold text-blue-200 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <CheckCircle className="w-8 h-8 text-blue-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}