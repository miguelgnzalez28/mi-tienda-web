// Configuración de la URL del Web App de Google Apps Script
// Pega aquí el URL de despliegue (termina en /exec), por ejemplo:
// export const APPSCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx.../exec'

const DEFAULT_APPSCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxXqp-YHzqnAfD12gkudViIpKB3ULVcMW3NyNpIINZK7gQE3YCHnnCpw4YksDrydxxU/exec'

export const APPSCRIPT_URL = typeof window !== 'undefined' && window.APPSCRIPT_URL
  ? window.APPSCRIPT_URL
  : DEFAULT_APPSCRIPT_URL


