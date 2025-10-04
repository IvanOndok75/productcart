module.exports = {
publicPath: process.env.NODE_ENV === 'production'
? '/productcard/' // <-- той самий шлях
: '/'
};