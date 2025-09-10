import React, { useState, useEffect } from 'react'
import { APPSCRIPT_URL } from '../config'

const ProductGrid = ({ onProductSelect }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [imageErrors, setImageErrors] = useState({})

  useEffect(() => {
    const loadProducts = async () => {
      try {
        console.log('Cargando artículos directamente desde Apps Script...', APPSCRIPT_URL)
        const res = await fetch(APPSCRIPT_URL, { cache: 'no-store', mode: 'cors' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const articulos = await res.json()
        console.log('Artículos recibidos:', articulos)

        const mapped = (articulos || []).map((articulo, idx) => ({
          id: idx + 1,
          name: (articulo.title || `Producto ${idx + 1}`).toUpperCase(),
          price: 30.00,
          image: (articulo.images && articulo.images[0]) || `https://via.placeholder.com/400x500?text=${encodeURIComponent(articulo.title || 'Producto')}`,
          description: articulo.content || '',
          brand: '—',
          sponsor: '—',
          raw: articulo
        }))
        setProducts(mapped)
      } catch (error) {
        console.error('Error cargando artículos directamente:', error)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  const handleImageError = (productId) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }))
  }

  if (loading) {
    return (
      <section id="topventas" className="py-20 bg-gradient-to-br from-light-gray-100 to-light-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block w-16 h-16 border-4 border-vibrant-yellow-400 border-t-transparent rounded-full animate-spin mb-4"></div>
            <h2 className="text-2xl font-subtitle text-deep-black-900">Cargando productos...</h2>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="topventas" className="py-20 bg-gradient-to-br from-light-gray-100 to-light-gray-200 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-vibrant-yellow-400/5 to-bright-blue-500/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Título con animación */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-deep-black-900 via-wine-red-700 to-medium-green-600 bg-clip-text text-transparent">
              COLECCIÓN PREMIUM
            </span>
          </h2>
          <p className="text-xl text-deep-black-800 max-w-2xl mx-auto animate-fade-in-up font-body" style={{animationDelay: '0.3s'}}>
            Descubre nuestras camisetas de élite con tecnología de última generación
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const hasImageError = imageErrors[product.id]
            const imageUrl = hasImageError 
              ? `https://via.placeholder.com/355x568?text=${encodeURIComponent(product.name)}`
              : product.image

            return (
              <div 
                key={product.id} 
                className="group cursor-pointer relative animate-fade-in-up max-w-sm mx-auto"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => onProductSelect && onProductSelect(product)}
              >
                <div className="relative">
                  <svg 
                    className="w-full h-auto" 
                    viewBox="0 0 355.04 568" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern id={`pattern-${product.id}`} patternUnits="userSpaceOnUse" width="355.04" height="568">
                        <image 
                          href={imageUrl}
                          xlinkHref={imageUrl}
                          width="355.04" 
                          height="568" 
                          preserveAspectRatio="xMidYMid slice"
                          referrerPolicy="no-referrer"
                          onError={(e) => { e.stopPropagation(); setImageErrors(prev => ({ ...prev, [product.id]: true })) }}
                        />
                      </pattern>
                    </defs>

                    {/* Figura rellena con la imagen */}
                    <path 
                      fill={`url(#pattern-${product.id})`}
                      d="m312.66,29.25S262.29,2.06,177.52,0C92.75,2.06,42.38,29.25,42.38,29.25,36.94,74.87,0,73.84,0,73.84v388.93c0,16.17,9.09,31.07,23.62,38.17,12.08,5.9,24.21,9.33,24.21,9.33,124.6,35.74,129.69,57.73,129.69,57.73,0,0,5.09-21.99,129.69-57.73,0,0,12.13-3.44,24.21-9.33,14.53-7.09,23.62-21.99,23.62-38.17V73.84s-36.94,1.03-42.38-44.59Z"
                    />

                    {/* Borde de la tarjeta */}
                    <path 
                      fill="none"
                      stroke="#2E8ACC"
                      strokeWidth="3"
                      d="m312.66,29.25S262.29,2.06,177.52,0C92.75,2.06,42.38,29.25,42.38,29.25,36.94,74.87,0,73.84,0,73.84v388.93c0,16.17,9.09,31.07,23.62,38.17,12.08,5.9,24.21,9.33,24.21,9.33,124.6,35.74,129.69,57.73,129.69,57.73,0,0,5.09-21.99,129.69-57.73,0,0,12.13-3.44,24.21-9.33,14.53-7.09,23.62-21.99,23.62-38.17V73.84s-36.94,1.03-42.38-44.59Z"
                    />
                  </svg>

                  {/* Información del producto superpuesta */}
                  <div className="absolute bottom-4 left-4 right-4 bg-light-gray-100/95 backdrop-blur-sm p-4 rounded-xl shadow-lg transform group-hover:scale-105 transition-all duration-300">
                    <h3 className="text-lg font-subtitle mb-2 text-center text-deep-black-900 group-hover:text-vibrant-yellow-400 transition-colors duration-300">
                      {product.name}
                    </h3>
                    
                    <div className="text-center">
                      <div className="text-xl font-subtitle text-wine-red-700 mb-2">
                        DESDE ${product.price}
                      </div>
                      
                      <div className="flex justify-between text-xs text-deep-black-800 mb-3">
                        <span className="bg-bright-blue-500/20 text-bright-blue-500 px-2 py-1 rounded-full font-semibold">
                          {product.brand}
                        </span>
                        <span className="bg-medium-green-600/20 text-medium-green-600 px-2 py-1 rounded-full font-semibold">
                          {product.sponsor}
                        </span>
                      </div>
                      
                      {/* Botón con efecto */}
                      <button className="w-full bg-gradient-to-r from-vibrant-yellow-400 to-intense-orange-500 text-deep-black-900 py-2 px-4 rounded-full font-subtitle text-sm transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                        Ver Detalles
                      </button>
                    </div>
                  </div>

                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-vibrant-yellow-400/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
