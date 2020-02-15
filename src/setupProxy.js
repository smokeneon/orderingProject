const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        proxy(
            '/vccode',{
                target:'http://121.199.58.227:10001',
                changeOrigin:true,
            }
        )
    )
}