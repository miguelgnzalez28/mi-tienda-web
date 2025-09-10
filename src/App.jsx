import React, { useState } from 'react'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import ProductGrid from './components/ProductGrid'
import ProductDetail from './components/ProductDetail'
import FAQ from './components/FAQ'
import Cart from './components/Cart'
import Footer from './components/Footer'
import ImageTest from './components/ImageTest'

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleAddToCart = (product, customization) => {
    const cartItem = {
      ...product,
      customization,
      id: Date.now()
    }
    setCart([...cart, cartItem])
    setSelectedProduct(null)
    
    // Mostrar notificación de éxito
    alert('¡Producto agregado al carrito!')
  }

  const handleRemoveFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId))
  }

  const handleUpdateQuantity = (itemId, change) => {
    setCart(cart.map(item => {
      if (item.id === itemId) {
        const newQuantity = (item.customization?.quantity || 1) + change
        if (newQuantity < 1) return item // No permitir cantidades menores a 1
        return {
          ...item,
          customization: {
            ...item.customization,
            quantity: newQuantity
          }
        }
      }
      return item
    }))
  }

  const handleCartClick = () => {
    setIsCartOpen(true)
  }

  const handleCloseCart = () => {
    setIsCartOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray-100 to-light-gray-200">
      <Header cart={cart} onCartClick={handleCartClick} />
      <main className="pt-16">
        <HeroBanner />
        <ProductGrid onProductSelect={setSelectedProduct} />
        <FAQ />
        {selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onAddToCart={handleAddToCart}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </main>
      <Footer />
      
      {/* Carrito */}
      <Cart 
        cart={cart}
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
      
      {/* Componente de prueba temporal */}
      <ImageTest />
    </div>
  )
}

export default App
