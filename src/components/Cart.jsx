import React from 'react'

const Cart = ({ cart, isOpen, onClose, onRemoveItem, onUpdateQuantity }) => {
  if (!isOpen) return null

  const totalPrice = cart.reduce((total, item) => {
    return total + (item.price * (item.customization?.quantity || 1))
  }, 0)

  return (
    <div className="fixed inset-0 bg-deep-black-900/50 z-50 flex items-center justify-center p-4">
      <div className="bg-light-gray-100 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-vibrant-yellow-400 to-intense-orange-500 p-6 text-deep-black-900 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-heading">Carrito de Compras</h2>
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
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-subtitle text-deep-black-900 mb-2">Tu carrito está vacío</h3>
              <p className="text-deep-black-800 font-body">Agrega algunos productos para comenzar</p>
            </div>
          ) : (
            <>
              {/* Lista de productos */}
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="bg-light-gray-200 rounded-lg p-4 border border-deep-black-800/10">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-bright-blue-500/20 to-medium-green-600/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">⚽</span>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-subtitle text-deep-black-900 mb-1">{item.name}</h3>
                        <div className="text-sm text-deep-black-800 font-body mb-2">
                          <div>Talla: {item.customization?.size}</div>
                          <div>Versión: {item.customization?.version}</div>
                          <div>Mangas: {item.customization?.sleeve}</div>
                          {item.customization?.name && <div>Nombre: {item.customization.name}</div>}
                          {item.customization?.number && <div>Dorsal: {item.customization.number}</div>}
                        </div>
                        <div className="text-lg font-subtitle text-wine-red-700">
                          ${item.price} x {item.customization?.quantity || 1}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-8 h-8 bg-vibrant-yellow-400 text-deep-black-900 rounded-full flex items-center justify-center hover:bg-vibrant-yellow-300 transition-colors duration-300"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-subtitle text-deep-black-900">
                          {item.customization?.quantity || 1}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-8 h-8 bg-vibrant-yellow-400 text-deep-black-900 rounded-full flex items-center justify-center hover:bg-vibrant-yellow-300 transition-colors duration-300"
                        >
                          +
                        </button>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="w-8 h-8 bg-wine-red-700 text-white rounded-full flex items-center justify-center hover:bg-wine-red-600 transition-colors duration-300 ml-2"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t border-deep-black-800/20 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-subtitle text-deep-black-900">Total:</span>
                  <span className="text-2xl font-heading text-wine-red-700">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Botones */}
              <div className="flex space-x-4">
                <button
                  onClick={onClose}
                  className="flex-1 bg-light-gray-200 text-deep-black-900 py-3 px-6 rounded-full font-subtitle border border-deep-black-800/30 hover:bg-light-gray-300 transition-colors duration-300"
                >
                  Seguir Comprando
                </button>
                <button className="flex-1 bg-gradient-to-r from-vibrant-yellow-400 to-intense-orange-500 text-deep-black-900 py-3 px-6 rounded-full font-subtitle shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Proceder al Pago
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
