const site = {
  url: 'https://testnet.arcana.network',
  title: 'The Storage and Privacy Stack for Ethereum dApps — Arcana Network',
  description:
    'The decentralized storage layer for Ethereum. A privacy stack for apps on EVM compatible chains. Identity, Authentication, Access Control, KMS, and Storage.',
  image: 'https://testnet.arcana.network/cover-image.jpeg',
}

export default {
  target: 'static',

  env: process.env,

  head: {
    title: 'Testnet - Arcana Network',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },

      // Primary meta tags
      { hid: 'title', name: 'title', content: site.title },
      { hid: 'description', name: 'description', content: site.description },

      // Open Graph / Facebook
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: site.url },
      { hid: 'og:title', property: 'og:title', content: site.title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: site.description,
      },
      { hid: 'og:image', property: 'og:image', content: site.image },

      // Twitter
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:url', property: 'twitter:url', content: site.url },
      { hid: 'twitter:title', property: 'twitter:title', content: site.title },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: site.description,
      },
      { hid: 'twitter:image', property: 'twitter:image', content: site.image },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },

  css: ['~/assets/css/normalize.css', '~/assets/css/styles.css'],

  plugins: ['~/plugins/gtag.js'],

  components: ['~/components', '~/components/lib'],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-fonts',
  ],

  axios: {},

  content: {},

  build: {
    postcss: {
      order: 'presetEnvAndCssnanoLast',
      preset: {
        stage: 0,
      },
      plugins: {
        'postcss-import': true,
        'postcss-url': true,
        'postcss-preset-env': {
          stage: 0,
        },
        cssnano: { preset: 'default' },
      },
    },
  },

  googleFonts: {
    families: {
      Montserrat: [300, 500, 600, 700],
      Sora: [300, 400, 600, 700],
    },
    display: 'block',
    prefetch: true,
    preconnect: true,
    preload: true,
  },
}
