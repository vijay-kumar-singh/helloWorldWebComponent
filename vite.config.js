import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'HelloWorldComponent',
      fileName: 'hello-world',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      output: {
        // Ensure the component is properly scoped
        globals: {
          'hello-world': 'HelloWorldComponent'
        }
      }
    }
  }
});