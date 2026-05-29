import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/proyecto_final_de_las_tesis/', // Ajustado al nombre de tu carpeta principal
})