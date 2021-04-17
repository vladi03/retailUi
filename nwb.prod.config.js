//Documentation on nwb config
//https://github.com/insin/nwb/blob/HEAD/docs/Configuration.md#configuration-file
module.exports = {
    webpack: {
        publicPath: '',
        copy: [
            // Copy directory contents to output
            {from: './src/retail-shop-flat-icon_small.png'},
            {from: './src/retail-shop-flat-icon_small.jpg'},
            {from: './src/retail-shop-flat-icon.jpg'},
            {from: './src/manifest.json'},
            {from: './src/sw.js'},
            {from: './src/carousel.css'},
            {from: './src/darby_logo_wide.jpg'},
            {from: './src/1stFranklin31.png'},
            {from: './src/progressive.png'},
            {from: './src/logo3.png'}
        ],
        define: {
            'process.env.AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
            'process.env.AUTH_CLIENT_ID': JSON.stringify(process.env.AUTH_CLIENT_ID),
            'process.env.AUTH_AUDIENCE': JSON.stringify(process.env.AUTH_AUDIENCE),
            'process.env.CATALOG_API': JSON.stringify("https://api.netware.io"),
            'process.env.DOMAIN': JSON.stringify("darbyfurnitureoutlet.com")
        }
    }
};