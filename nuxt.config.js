const fs = require('fs')
// const webpack = require('webpack')
require('dotenv').config()
const {
  API_BASE_URL,
  BASE_URL,
  // CDN_URL,
  projectNameJa,
  projectNameEn,

  projectFooterJa,
  projectFooterEn,

  projectDescriptionJa,
  projectDescriptionEn,
  projectKeywords,
  ELASTIC_SEARCH_HOST,
  ELASTIC_SEARCH_MAIN_INDEX,
  IIIF_VIEWER_SHOW_FLAG,
  CURATION_VIEW_SHOW_FLAG,
  FACETS_FLAGS,
  FACETS_LABELS,
  SORT_LABELS,
  SEARCH_LABELS,
  GOOGLE_ANALYTICS_ID,
  SHORT_NAME,
  SIMILAR_IMAGES_FLAG,
} = process.env

/* nuxt.config.js */
// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/taishozo/',
        },
      }
    : {}

// path
const baseUrl = process.env.BASE_URL
const baseDir = process.env.BASE_DIR || '/'
const basePath = baseUrl + baseDir

// meta
const lang = 'ja'
const siteName = process.env.projectNameJa
const siteDesc = process.env.projectDescriptionJa
const siteKeywords = process.env.projectKeywords

// images
const iconImages = basePath + 'img/icons/'
const ogpImages = basePath + 'img/ogp/' // cdnPath + 'img/ogp/'

// pwa
const shortName = process.env.SHORT_NAME
const manifestIcon = 'img/icons/icon-512.png'
// const splashscreens = cdnPath + 'img/splashscreens/'

const env = {
  API_BASE_URL,
  BASE_URL,
  // CDN_URL,
  projectNameJa,
  projectNameEn,

  projectFooterJa,
  projectFooterEn,

  projectDescriptionJa,
  projectDescriptionEn,
  projectKeywords,
  ELASTIC_SEARCH_HOST,
  ELASTIC_SEARCH_MAIN_INDEX,
  IIIF_VIEWER_SHOW_FLAG,
  CURATION_VIEW_SHOW_FLAG,
  FACETS_FLAGS,
  FACETS_LABELS,
  SORT_LABELS,
  SEARCH_LABELS,
  GOOGLE_ANALYTICS_ID,
  SHORT_NAME,
  SIMILAR_IMAGES_FLAG,
}
env['u-renja'] = 'https://static.toyobunko-lab.jp/u-renja'

///

env.bc = false

env.index = 'index.json'

env.aggs = {
  '基-経典番号': {
    sort: '',
    label: '基本情報-経典番号',
    value: {},
    key: '基-経典番号',
    more: false,
  },
  '基-収録巻次': {
    sort: 'name:asc',
    label: '基本情報-収録巻次',
    value: {},
    key: '基-収録巻次',
    more: false,
  },
  '基-部門': {
    // sort: 'name:asc',
    label: '基本情報-部門',
    value: {},
    key: '基-部門',
    more: false,
  },
  '基-配本': {
    // sort: 'name:asc',
    label: '基本情報-配本',
    value: {},
    key: '基-配本',
    more: false,
  },
  '勘-底本/校本': {
    // sort: 'name:asc',
    label: '勘同目録-底本/校本',
    key: '勘-底本/校本',
    value: {},
    more: false,
  },
  '勘同目録-テキスト': {
    // sort: 'name:asc',
    label: '勘同目録-テキスト',
    key: '勘同目録-テキスト',
    value: {},
    more: false,
  },
  '脚-底本/校本': {
    // sort: 'name:asc',
    label: '脚注-底本/校本',
    key: '脚-底本/校本',
    value: {},
    more: false,
  },
  '脚注-テキスト': {
    // sort: 'name:asc',
    label: '脚注-テキスト',
    key: '脚注-テキスト',
    value: {},
    more: false,
  },
  画像: {
    // sort: 'name:asc',
    label: '画像',
    key: '画像',
    value: {},
    more: false,
    open: true,
  },
  objectID: {
    // sort: 'name:asc',
    label: 'objectID',
    key: 'objectID',
    value: {},
    more: false,
    open: true,
    hide: true,
  },
}

env.hide = []

env.list = []

env.sort = [
  { label: '適合度', value: '_score' },
  { label: '基-経典番号', value: 'objectID' },
  { label: '基本情報-配本', value: '基-配本' },
]

env.defaultSort = 'objectID:asc'

env.layout = [
  {
    label: 'table',
    value: 'table',
    icon: 'mdi-table',
    component: 'custom-search-layout-table',
  },
  {
    label: 'graph',
    value: 'graph',
    icon: 'mdi-chart-bar',
    component: 'search-layout-graph',
  },
]

env.defaultLayout = 'table'

env.advanced = []

const norm = JSON.parse(fs.readFileSync('static/norm.json'))
env.itaiji = norm

///

module.exports = {
  server: {
    port: 8089, // デフォルト: 3000
    host: '0.0.0.0', // デフォルト: localhost
  },
  ...routerBase,
  env,
  // serverMiddleware: ['~~/api/'],
  workbox: {
    runtimeCaching: [
      {
        urlPattern: '^https://fonts.(?:googleapis|gstatic).com/(.*)',
        handler: 'cacheFirst',
      },
      {
        urlPattern: 'https://cdn.jsdelivr.net/.*',
        handler: 'cacheFirst',
      },
      {
        urlPattern: 'https://cdn.materialdesignicons.com/.*',
        handler: 'cacheFirst',
      },
      {
        urlPattern: baseDir + '.*',
        handler: 'staleWhileRevalidate',
        strategyOptions: {
          cacheName: 'my-cache',
          cacheExpiration: {
            maxAgeSeconds: 24 * 60 * 60 * 30,
          },
        },
      },
    ],
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
  // mode: 'universal',
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang,
    },
    titleTemplate: `%s - ${siteName}`,
    // title: 'Cultural Japan',
    meta: [
      { chatset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'format-detection',
        content: 'telephone=no, email=no, address=no',
      },
      // SEO関連
      { hid: 'description', name: 'description', content: siteDesc },
      { hid: 'keywords', name: 'keywords', content: siteKeywords },
      // ogp関連
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: basePath },
      { hid: 'og:title', property: 'og:title', content: siteName },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDesc,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${ogpImages}home.png`,
      },
      /*
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'ja_JP'
      }
      */
      { name: 'twitter:card', content: 'summary_large_image' },
      // pwa iOS
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
    ],
    link: [
      // fonts
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/yakuhanjp@3.0.0/dist/css/yakuhanmp.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Noto+Serif+JP:400,700&subset=japanese',
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: iconImages + 'favicon-16.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: iconImages + 'favicon-32.png',
      },
      {
        rel: 'icon',
        sizes: '48x48',
        type: 'image/png',
        href: iconImages + 'favicon-48.png',
      },
      {
        rel: 'icon',
        sizes: '72x72',
        type: 'image/png',
        href: iconImages + 'favicon-72.png',
      },
      // apple touch icon
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: iconImages + 'apple-touch-icon.png',
      },
      /*
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      */
      // pwa splash screens
      // Doc: https://appsco.pe/developer/splash-screens
      /*
      {
        href: splashscreens + 'iphone5_splash.png',
        media:
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: splashscreens + 'iphone6_splash.png',
        media:
          '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: splashscreens + 'iphoneplus_splash.png',
        media:
          '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: splashscreens + 'iphonex_splash.png',
        media:
          '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: splashscreens + 'iphonexr_splash.png',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: splashscreens + 'iphonexsmax_splash.png',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: splashscreens + 'ipad_splash.png',
        media:
          '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: splashscreens + 'ipadpro1_splash.png',
        media:
          '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: splashscreens + 'ipadpro3_splash.png',
        media:
          '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: splashscreens + 'ipadpro2_splash.png',
        media:
          '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image'
      },
      */
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons',
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
      },
    ],
  },
  manifest: {
    lang,
    name: siteName,
    short_name: shortName,
    description: siteDesc,
    background_color: '#ffffff',
    theme_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
  },
  icon: {
    iconFileName: manifestIcon,
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'red' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/utils.ts', '@/plugins/searchUtils.ts'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-i18n',
    '@nuxtjs/sitemap',
    'nuxt-leaflet',
    // ['@nuxtjs/moment', ['ja', 'en']],
    '@nuxtjs/moment',
    '@nuxtjs/google-gtag',
  ],
  'google-gtag': {
    id: 'G-LBXM4V8FLL',
    debug: true, // Enable to track in dev mode.
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en_US', file: 'en.json' },
      { code: 'ja', iso: 'ja_JP', file: 'ja.json' },
    ],
    defaultLocale: 'ja',
    vueI18nLoader: true,
    lazy: true,
    langDir: 'lang/',
    // strategy: 'no_prefix'
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: baseUrl,
    // generate: true,
    exclude: ['/admin', '/test*', '/en/test*'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
    },
    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line
    extend(config, ctx) {}
  },
}
