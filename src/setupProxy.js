const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/login',
        // '/register',
        createProxyMiddleware({
            target: 'http://127.0.0.1:8000/',
            changeOrigin: true,
        })
    );
    app.use(
        // '/login',
        '/register',
        createProxyMiddleware({
            target: 'http://127.0.0.1:8000/',
            changeOrigin: true,
        })
    );
};