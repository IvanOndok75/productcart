module.exports = {
publicPath: process.env.NODE_ENV === 'production'
? '/productcart/' // <-- той самий шлях
: '/'
};