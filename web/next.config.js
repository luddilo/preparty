const webpack = require("webpack")
const withCSS = require("@zeit/next-css")
const dotenvJson = require("dotenv-json") // Initialize doteenv library, for local development

dotenvJson({
  path: "./google_credentials.json",
})
dotenvJson({
  path: "./secrets.json",
})

module.exports = withCSS({
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000 * 60,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 15,
  },
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
    }
    /**
     * Returns environment variables as an object, needed as a workaround since Zeit/Now isn't supporting Google Credentials in a good way
     */
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
      return acc
    }, {})

    /** Allows you to create global constants which can be configured
     * at compile time, which in our case is our environment variables
     */
    config.plugins.push(new webpack.DefinePlugin(env))

    // For supporting SVG image imports
    config.module.rules.push(
      //{ test: /\.json$/, loader: 'json-loader' },
      { test: /\.svg$/, use: ["@svgr/webpack"] },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
            },
          },
        ],
      }
    )

    return config
  },
})
