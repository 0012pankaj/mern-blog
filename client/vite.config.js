import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
  proxy: {
    '/api': {  //on fetch  we change path to server port of route wher we found /api in path we add target"..3000"to that
      target: 'http://localhost:3000',
      secure: false,
    },
  },
},
  plugins: [react()],
})
