import React from 'react'

function FAQ() {
  const faqs = [
    {
      question: "¿Cómo puedo realizar un pedido?",
      answer: "Puedes realizar un pedido seleccionando los productos que desees y agregándolos al carrito. Luego procede al checkout para completar tu compra."
    },
    {
      question: "¿Cuáles son los métodos de pago disponibles?",
      answer: "Aceptamos tarjetas de crédito, débito y transferencias bancarias. También ofrecemos la opción de pago contra entrega."
    },
    {
      question: "¿Cuánto tiempo tarda el envío?",
      answer: "Los envíos dentro de la ciudad se realizan en 24-48 horas. Para envíos nacionales, el tiempo estimado es de 3-5 días hábiles."
    },
    {
      question: "¿Puedo devolver un producto?",
      answer: "Sí, ofrecemos 30 días para devoluciones. El producto debe estar en perfecto estado y con su empaque original."
    }
  ]

  return (
    <section id="faq" className="py-16 bg-light-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-heading text-center mb-12 text-deep-black-900">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-light-gray-200 rounded-lg p-6 border border-deep-black-800/10 hover:border-vibrant-yellow-400/30 transition-all duration-300">
              <h3 className="text-lg font-subtitle text-deep-black-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-deep-black-800 font-body">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ


