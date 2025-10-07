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

        const mapped = (articulos || []).map((articulo, idx) => {
          // Usar la estructura real del Apps Script: title e images[0]
          let imageUrl = `https://via.placeholder.com/400x640?text=${encodeURIComponent(articulo.title || 'Producto')}`
          
          if (articulo.images && articulo.images[0]) {
            // El Apps Script devuelve images[0] con la URL directa de la imagen
            imageUrl = articulo.images[0]
            console.log(`Imagen ${idx + 1} (${articulo.title}):`, imageUrl)
          }
          
          return {
            id: idx + 1,
            name: (articulo.title || `Producto ${idx + 1}`).toUpperCase(),
            price: 30.00,
            image: imageUrl,
            description: articulo.content || '',
            brand: '—',
            sponsor: '—',
            raw: articulo
          }
        })
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
    console.log(`Error cargando imagen para producto ${productId}`)
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
          {products.map((product, index) => {
            const hasImageError = imageErrors[product.id]
            const imageUrl = hasImageError 
              ? `https://via.placeholder.com/400x640?text=${encodeURIComponent(product.name)}`
              : product.image

            return (
              <div 
                key={product.id} 
                className="group relative cursor-pointer animate-fade-in-up w-full max-w-sm mx-auto"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => onProductSelect && onProductSelect(product)}
              >
                {/* Figura con máscara CSS y fondo */}
                <div
                  className="card-mask shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  style={{ 
                    backgroundImage: `url('${imageUrl}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Fallback image container for better error handling */}
                  <img 
                    src={imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-0"
                    onError={() => handleImageError(product.id)}
                    onLoad={() => console.log(`Imagen cargada correctamente: ${product.name}`)}
                  />
                </div>

                {/* Overlay de información */}
                <div className="absolute inset-x-4 bottom-4 bg-light-gray-100/95 backdrop-blur-sm p-4 rounded-xl shadow-lg transform group-hover:scale-105 transition-all duration-300">
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
                    <button className="w-full bg-gradient-to-r from-vibrant-yellow-400 to-intense-orange-500 text-deep-black-900 py-2 px-4 rounded-full font-subtitle text-sm transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                      Ver Detalles
                    </button>
                  </div>
                </div>

                {/* Efecto de brillo */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
