import react from '@vitejs/plugin-react';

// vite.config.js

export default {
  // other configurations
  
  build: {
    rollupOptions: {
      external: [
        'react-dom/client'
      ]
    }
  }
}