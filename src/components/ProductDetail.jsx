import React, { useState } from 'react'

const ProductDetail = ({ product, onAddToCart, onClose }) => {
  const [customization, setCustomization] = useState({
    size: '',
    patches: 'SIN PARCHES',
    version: 'FAN VERSION',
    sleeve: 'MANGA CORTA',
    name: '',
    number: '',
    quantity: 1
  })

  const handleInputChange = (field, value) => {
    setCustomization(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleQuantityChange = (change) => {
    const newQuantity = customization.quantity + change
    if (newQuantity >= 1) {
      handleInputChange('quantity', newQuantity)
    }
  }

  const handleAddToCart = () => {
    // Validar que se haya seleccionado una talla
    if (!customization.size) {
      alert('Por favor selecciona una talla')
      return
    }
    
    onAddToCart(product, customization)
  }

  return (
    <div className="fixed inset-0 bg-deep-black-900/50 z-50 flex items-center justify-center p-4">
      <div className="bg-light-gray-100 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-vibrant-yellow-400 to-intense-orange-500 p-6 text-deep-black-900 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-heading">{product.name}</h2>
            <button 
              onClick={onClose}
              className="text-deep-black-900 hover:text-deep-black-800 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Imagen y precio */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <div className="w-full h-64 bg-gradient-to-r from-bright-blue-500/20 to-medium-green-600/20 rounded-xl flex items-center justify-center">
                <span className="text-6xl">⚽</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-heading text-deep-black-900 mb-4">{product.name}</h3>
              <div className="text-4xl font-heading text-wine-red-700 mb-6">${product.price},00</div>
              
              {/* Información del producto */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="bg-bright-blue-500/20 text-bright-blue-500 px-3 py-1 rounded-full text-sm font-semibold">
                    {product.brand}
                  </span>
                  <span className="bg-medium-green-600/20 text-medium-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {product.sponsor}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Opciones de personalización */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tallas */}
            <div className="space-y-3">
              <h4 className="text-lg font-subtitle text-deep-black-900">TALLAS</h4>
              <div className="grid grid-cols-4 gap-2">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button
                    key={size}
                    onClick={() => handleInputChange('size', size)}
                    className={`py-3 px-4 rounded-lg font-subtitle transition-all duration-300 ${
                      customization.size === size
                        ? 'bg-vibrant-yellow-400 text-deep-black-900 shadow-lg'
                        : 'bg-light-gray-200 text-deep-black-800 hover:bg-vibrant-yellow-400/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <a href="#" className="text-sm text-bright-blue-500 hover:text-bright-blue-400 underline font-body">
                GUÍA DE TALLAS
              </a>
            </div>

            {/* Parches */}
            <div className="space-y-3">
              <h4 className="text-lg font-subtitle text-deep-black-900">PARCHES</h4>
              <select
                value={customization.patches}
                onChange={(e) => handleInputChange('patches', e.target.value)}
                className="w-full p-3 border border-deep-black-800/30 rounded-lg focus:ring-2 focus:ring-vibrant-yellow-400 focus:border-transparent bg-light-gray-100 text-deep-black-900 font-body"
              >
                <option value="SIN PARCHES">SIN PARCHES</option>
                <option value="OPCIÓN 2">OPCIÓN 2</option>
                <option value="OPCIÓN 3">OPCIÓN 3</option>
              </select>
            </div>

            {/* Versión */}
            <div className="space-y-3">
              <h4 className="text-lg font-subtitle text-deep-black-900">VERSIÓN</h4>
              <select
                value={customization.version}
                onChange={(e) => handleInputChange('version', e.target.value)}
                className="w-full p-3 border border-deep-black-800/30 rounded-lg focus:ring-2 focus:ring-vibrant-yellow-400 focus:border-transparent bg-light-gray-100 text-deep-black-900 font-body"
              >
                <option value="FAN VERSION">FAN VERSION</option>
                <option value="PLAYER VERSION">PLAYER VERSION</option>
              </select>
            </div>

            {/* Mangas */}
            <div className="space-y-3">
              <h4 className="text-lg font-subtitle text-deep-black-900">MANGAS</h4>
              <select
                value={customization.sleeve}
                onChange={(e) => handleInputChange('sleeve', e.target.value)}
                className="w-full p-3 border border-deep-black-800/30 rounded-lg focus:ring-2 focus:ring-vibrant-yellow-400 focus:border-transparent bg-light-gray-100 text-deep-black-900 font-body"
              >
                <option value="MANGA CORTA">MANGA CORTA</option>
                <option value="MANGA LARGA">MANGA LARGA</option>
              </select>
            </div>

            {/* Nombre */}
            <div className="space-y-3">
              <h4 className="text-lg font-subtitle text-deep-black-900">NOMBRE</h4>
              <input
                type="text"
                placeholder="Tu nombre"
                value={customization.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full p-3 border border-deep-black-800/30 rounded-lg focus:ring-2 focus:ring-vibrant-yellow-400 focus:border-transparent bg-light-gray-100 text-deep-black-900 font-body"
              />
            </div>

            {/* Número dorsal */}
            <div className="space-y-3">
              <h4 className="text-lg font-subtitle text-deep-black-900">NÚMERO DORSAL</h4>
              <input
                type="number"
                placeholder="Número"
                min="0"
                max="99"
                value={customization.number}
                onChange={(e) => handleInputChange('number', e.target.value)}
                className="w-full p-3 border border-deep-black-800/30 rounded-lg focus:ring-2 focus:ring-vibrant-yellow-400 focus:border-transparent bg-light-gray-100 text-deep-black-900 font-body"
              />
            </div>

            {/* Cantidad */}
            <div className="space-y-3">
              <h4 className="text-lg font-subtitle text-deep-black-900">CANTIDAD</h4>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-12 h-12 bg-vibrant-yellow-400 text-deep-black-900 rounded-full flex items-center justify-center hover:bg-vibrant-yellow-300 transition-colors duration-300 text-xl font-bold"
                >
                  -
                </button>
                <span className="text-2xl font-subtitle text-deep-black-900 w-16 text-center">
                  {customization.quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-12 h-12 bg-vibrant-yellow-400 text-deep-black-900 rounded-full flex items-center justify-center hover:bg-vibrant-yellow-300 transition-colors duration-300 text-xl font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Botón agregar al carrito */}
          <div className="mt-8 text-center">
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-vibrant-yellow-400 to-intense-orange-500 text-deep-black-900 text-xl px-12 py-4 rounded-full font-subtitle shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              🛒 AGREGAR AL CARRITO
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
