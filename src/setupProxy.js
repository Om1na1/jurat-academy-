const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://localhost:7196',
      changeOrigin: true,
      secure: false, // самоподписанный сертификат
    })
  );
  app.use(
    '/uploads',
    createProxyMiddleware({
      target: 'https://localhost:7196',
      changeOrigin: true,
      secure: false,
    })
  );
};
