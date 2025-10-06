import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
server:{
  port: 3000, //Porta fixa para senac
    host: '0.0.0.0', //Permite acesso na rede local
    open: true // Abrir navegador automaticamente
  },
  build: {
    outDir: 'dist' ,
    sourcemap: false //Diretório de saída
  }



})
