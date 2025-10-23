export default function CTA() {
  return (
    <section className="py-20 bg-blue-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para Transformar sua Cidade?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco e descubra como podemos ajudar a proteger sua cidade contra alagamentos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
            Solicitar Orçamento
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all">
            Agendar Consultoria
          </button>
        </div>
      </div>
    </section>
  )
}