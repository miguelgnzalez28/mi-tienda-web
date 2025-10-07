import React from 'react'

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-light-gray-100 via-light-gray-50 to-light-gray-200">
      {/* Animaciones laterales izquierda */}
      <div className="absolute left-0 top-0 w-32 h-full pointer-events-none">
        {/* Círculos flotantes */}
        <div className="absolute top-1/4 left-4 w-8 h-8 bg-gradient-to-r from-vibrant-yellow-400/20 to-intense-orange-500/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/2 left-8 w-6 h-6 bg-gradient-to-r from-bright-blue-500/20 to-medium-green-600/20 rounded-full animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 left-6 w-4 h-4 bg-gradient-to-r from-wine-red-700/20 to-deep-black-900/20 rounded-full animate-slide-up-down" style={{animationDelay: '2s'}}></div>
        
        {/* Líneas verticales animadas */}
        <div className="absolute top-0 left-12 w-1 h-32 bg-gradient-to-b from-vibrant-yellow-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 left-16 w-1 h-24 bg-gradient-to-b from-bright-blue-500/30 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/3 left-20 w-1 h-20 bg-gradient-to-b from-medium-green-600/30 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Formas geométricas sutiles */}
        <div className="absolute top-1/6 left-2 w-3 h-3 bg-vibrant-yellow-400/15 rotate-45 animate-float" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-2/3 left-10 w-2 h-2 bg-bright-blue-500/15 rotate-12 animate-pulse-glow" style={{animationDelay: '1.2s'}}></div>
      </div>

      {/* Animaciones laterales derecha */}
      <div className="absolute right-0 top-0 w-32 h-full pointer-events-none">
        {/* Círculos flotantes */}
        <div className="absolute top-1/3 right-6 w-6 h-6 bg-gradient-to-r from-medium-green-600/20 to-bright-blue-500/20 rounded-full animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 right-4 w-8 h-8 bg-gradient-to-r from-intense-orange-500/20 to-vibrant-yellow-400/20 rounded-full animate-float-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-2/3 right-8 w-4 h-4 bg-gradient-to-r from-deep-black-900/20 to-wine-red-700/20 rounded-full animate-slide-up-down" style={{animationDelay: '2.5s'}}></div>
        
        {/* Líneas verticales animadas */}
        <div className="absolute top-0 right-12 w-1 h-28 bg-gradient-to-b from-intense-orange-500/30 to-transparent animate-pulse" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute top-1/4 right-16 w-1 h-32 bg-gradient-to-b from-vibrant-yellow-400/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-20 w-1 h-24 bg-gradient-to-b from-wine-red-700/30 to-transparent animate-pulse" style={{animationDelay: '1.8s'}}></div>
        
        {/* Formas geométricas sutiles */}
        <div className="absolute top-1/5 right-2 w-3 h-3 bg-medium-green-600/15 rotate-45 animate-float" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute top-3/4 right-10 w-2 h-2 bg-intense-orange-500/15 rotate-12 animate-pulse-glow" style={{animationDelay: '0.6s'}}></div>
      </div>

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


        {/* Botón CTA */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.9s'}}>
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
