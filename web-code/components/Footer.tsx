import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Desalaga</h3>
            <p className="text-sm">
              Transformando cidades através de soluções inovadoras contra alagamentos urbanos.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Soluções</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Monitoramento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Drenagem</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Barreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jardins de Chuva</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contato@desalaga.com.br
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (11) 9999-9999
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Desalaga. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}