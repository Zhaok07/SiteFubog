import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Garante que o Vite resolva corretamente pacotes de React
      react: 'react',
      'react-dom': 'react-dom',
      'react-router-dom': 'react-router-dom',
    },
  },
  server: {
    base: "/SiteFubog",
    host: '0.0.0.0', // Permite conexões de qualquer IP
    port: 5173, // Ou qualquer porta que você preferir
    strictPort: true, // Garante que a porta escolhida seja usada, sem tentar outras portas
  }
})
