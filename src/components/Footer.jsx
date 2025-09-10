import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-deep-black-900 via-deep-black-800 to-deep-black-900 text-light-gray-100 py-16 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-vibrant-yellow-400/5 to-bright-blue-500/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-6 mb-4">
              <div className="w-24 h-24 bg-gradient-to-r from-vibrant-yellow-400 to-intense-orange-500 rounded-full flex items-center justify-center p-px">
                <img 
                  src="/logotipo.png" 
                  alt="Ultimate Kits Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-5xl font-heading bg-gradient-to-r from-vibrant-yellow-400 via-intense-orange-500 to-bright-blue-500 bg-clip-text text-transparent">
                Ultimate Kits
              </div>
            </div>
            <p className="text-light-gray-200 mb-6 max-w-md font-body">
              Tu tienda de confianza para camisetas deportivas de élite. 
              Calidad premium, diseños únicos y la mejor experiencia de compra.
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-medium-green-600 hover:bg-medium-green-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                title="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              
              <div 
                className="w-12 h-12 bg-gradient-to-r from-wine-red-700 to-intense-orange-500 rounded-full flex items-center justify-center opacity-50 cursor-not-allowed"
                title="Instagram (Próximamente)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-subtitle mb-4 text-vibrant-yellow-400">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#topventas" className="text-light-gray-200 hover:text-vibrant-yellow-400 transition-colors duration-300 font-body">
                  Top Ventas
                </a>
              </li>
              <li>
                <a href="#faq" className="text-light-gray-200 hover:text-vibrant-yellow-400 transition-colors duration-300 font-body">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>
          
          {/* Información de contacto */}
          <div>
            <h3 className="text-xl font-subtitle mb-4 text-vibrant-yellow-400">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-vibrant-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="text-light-gray-200 font-body">info@sports.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-vibrant-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="text-light-gray-200 font-body">Ciudad, País</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-vibrant-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" clipRule="evenodd"/>
                </svg>
                <span className="text-light-gray-200 font-body">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className="border-t border-deep-black-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-light-gray-300 mb-4 md:mb-0 font-body">
              <p>&copy; 2025 Sports Store. Todos los derechos reservados.</p>
            </div>
            
            {/* Slogan destacado */}
            <div className="text-center">
              <div className="text-2xl font-heading bg-gradient-to-r from-vibrant-yellow-400 via-intense-orange-500 to-bright-blue-500 bg-clip-text text-transparent animate-pulse">
                FOR THE CUP! 🏆
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
