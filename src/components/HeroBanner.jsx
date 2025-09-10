import React from 'react'

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-light-gray-100 via-light-gray-50 to-light-gray-200">
      {/* Partículas flotantes animadas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-vibrant-yellow-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Líneas de energía */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-vibrant-yellow-400 to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-intense-orange-500 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo principal */}
        <div className="mb-8">
          <div className="inline-block relative">
            <div className="w-[24rem] h-[24rem] bg-gradient-to-r from-vibrant-yellow-400 via-intense-orange-500 to-bright-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl p-px">
              <img 
                src="/logotipo.png" 
                alt="Ultimate Kits Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-6xl md:text-8xl font-heading mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-deep-black-900 via-wine-red-700 to-medium-green-600 bg-clip-text text-transparent">
            Ultimate Kits
          </span>
        </h1>

        {/* Subtítulo con efecto de escritura */}
        <p className="text-2xl md:text-4xl font-subtitle mb-8 text-deep-black-900 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <span className="bg-gradient-to-r from-bright-blue-500 to-medium-green-600 bg-clip-text text-transparent">
            El Futuro del Deporte
          </span>
        </p>

        {/* Descripción */}
        <p className="text-xl mb-12 text-deep-black-800 font-body animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          Descubre las mejores camisetas deportivas con tecnología de vanguardia
        </p>

        {/* Precio destacado */}
        <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
          <div className="inline-block bg-gradient-to-r from-vibrant-yellow-400 to-intense-orange-500 px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
            <span className="text-3xl font-subtitle text-deep-black-900">
              Desde $25 - Calidad Premium
            </span>
          </div>
        </div>

        {/* Botón CTA */}
        <div className="animate-fade-in-up" style={{animationDelay: '1.2s'}}>
          <a 
            href="#topventas" 
            className="inline-block bg-gradient-to-r from-bright-blue-500 to-medium-green-600 text-white text-2xl px-12 py-6 rounded-full font-subtitle shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-3xl animate-pulse"
          >
            🚀 EXPLORAR COLECCIÓN
          </a>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-deep-black-800 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-deep-black-800 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
