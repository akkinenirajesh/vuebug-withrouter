module.exports = {
    entry: { app: './main.ts', },
    output: { filename: 'main.js' },

    // resolve TypeScript and Vue file
    resolve: {
        extensions: ['', '.ts', '.vue', '.js']
    },

    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.ts$/, loader: 'ts-loader' }
        ],
    }
}