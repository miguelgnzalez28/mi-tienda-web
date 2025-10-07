import React, { useState, useEffect } from 'react'
import { APPSCRIPT_URL } from '../config'

const ImageDebug = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        console.log('🔍 Debug: Cargando artículos desde Apps Script...', APPSCRIPT_URL)
        const res = await fetch(APPSCRIPT_URL, { cache: 'no-store', mode: 'cors' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const articulos = await res.json()
        console.log('🔍 Debug: Artículos recibidos:', articulos)

        const mapped = (articulos || []).map((articulo, idx) => {
          let imageUrl = `https://via.placeholder.com/355x568?text=${encodeURIComponent(articulo.title || 'Producto')}`
          
          if (articulo.images && articulo.images[0]) {
            imageUrl = articulo.images[0]
            console.log(`🖼️ Debug: Imagen ${idx + 1} (${articulo.title}):`, imageUrl)
          }
          
          return {
            id: idx + 1,
            name: articulo.title || `Producto ${idx + 1}`,
            image: imageUrl,
            raw: articulo
          }
        })
        
        setProducts(mapped)
      } catch (error) {
        console.error('❌ Debug: Error cargando artículos:', error)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (loading) {
    return <div className="p-8 text-center">🔍 Cargando imágenes para debug...</div>
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">🔍 Debug de Imágenes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{product.name}</h3>
            
            {/* Imagen sin máscara para debug */}
            <div className="mb-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg border-2 border-gray-300"
                onLoad={() => console.log(`✅ Imagen cargada: ${product.name}`)}
                onError={(e) => console.log(`❌ Error cargando imagen: ${product.name}`, e)}
              />
            </div>
            
            {/* URL de la imagen */}
            <div className="text-xs text-gray-600 break-all">
              <strong>URL:</strong> {product.image}
            </div>
            
            {/* Imagen con máscara para comparar */}
            <div className="mt-4">
              <h4 className="text-sm font-bold mb-2">Con máscara:</h4>
              <div
                className="card-mask shadow-lg mx-auto"
                style={{ 
                  backgroundImage: `url('${product.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  width: '200px',
                  height: '300px'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageDebug

