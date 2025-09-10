import React, { useState, useEffect } from 'react'

const Header = ({ cart, onCartClick }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const cartItemCount = cart.reduce((total, item) => total + (item.customization?.quantity || 1), 0)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-light-gray-100/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-r from-light-gray-100 via-light-gray-50 to-light-gray-200'
    }`}>
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo con animación */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="/logotipo.png" 
                alt="Ultimate Kits Logo" 
                className="h-16 w-32 object-contain"
              />
            </div>
            <div className="text-3xl font-heading bg-gradient-to-r from-deep-black-900 via-wine-red-700 to-medium-green-600 bg-clip-text text-transparent">
              Ultimate Kits
            </div>
          </div>

          {/* Enlaces de navegación con hover effects */}
          <ul className="hidden md:flex space-x-8 list-none">
            <li>
              <a 
                href="#topventas" 
                className="relative text-base font-heading text-deep-black-900 hover:text-vibrant-yellow-400 transition-all duration-300 group"
              >
                COLECCIONES TOP VENTAS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-vibrant-yellow-400 to-intense-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#faq" 
                className="relative text-base font-heading text-deep-black-900 hover:text-vibrant-yellow-400 transition-all duration-300 group"
              >
                PREGUNTAS FRECUENTES
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-vibrant-yellow-400 to-intense-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>

          {/* Carrito con animación */}
          <div className="relative group">
            <button 
              onClick={onCartClick}
              className="flex items-center space-x-2 bg-gradient-to-r from-vibrant-yellow-400 to-intense-orange-500 px-3 py-1 rounded-full cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="text-xl">🛒</span>
              <span className="font-heading text-deep-black-900">CARRITO</span>
              {cartItemCount > 0 && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-bright-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  {cartItemCount}
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
