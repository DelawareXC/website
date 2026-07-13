export default {
  output: 'static',
  build: {
    format: 'directory'
  },
  vite: {
    ssr: {
      external: ['aria-query', 'axobject-query']
    }
  }
};
