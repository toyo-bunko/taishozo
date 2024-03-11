const fs = require('fs')
require('dotenv').config()
const {
  API_BASE_URL,
  projectNameJa,
  projectNameEn,

  projectDescriptionJa,
  projectDescriptionEn,
  projectKeywords,
  ELASTIC_SEARCH_HOST,
  ELASTIC_SEARCH_MAIN_INDEX,
  FACETS_FLAGS,
  FACETS_LABELS,
  SORT_LABELS,
  SEARCH_LABELS,
  GOOGLE_ANALYTICS_ID,
  SHORT_NAME,
} = process.env

const env = {
  API_BASE_URL,
  // BASE_URL,
  // CDN_URL,
  projectNameJa,
  projectNameEn,

  projectDescriptionJa,
  projectDescriptionEn,
  projectKeywords,
  ELASTIC_SEARCH_HOST,
  ELASTIC_SEARCH_MAIN_INDEX,
  FACETS_FLAGS,
  FACETS_LABELS,
  SORT_LABELS,
  SEARCH_LABELS,
  GOOGLE_ANALYTICS_ID,
  SHORT_NAME,
}

env['u-renja'] = 'https://static.toyobunko-lab.jp/u-renja'

const environment = process.env.NODE_ENV || 'development'
const envSettings = require(`./env/${environment}.js`)
for (const key in envSettings) {
  env[key] = envSettings[key]
}

env.menu = [
  {
    label: 'legend',
    to: {
      name: 'page-slug',
      params: {
        slug: 'legend',
      },
    },
    href_:
      env.BASE_URL +
      '/%E5%BA%95%E6%9C%AC%E3%83%BB%E6%A0%A1%E6%9C%ACDB%E5%87%A1%E4%BE%8B.pdf',

    type: 'about_',
    weight: 0,
  },
  {
    label: 'inquiry',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSd1gYA3qgLN2qQKn4o5vuzbma3Dgtoj_u555SVNuIgM4CSc-g/viewform?usp=sf_link',

    icon: 'mdi-information',
    top: true,
    type: 'about_',
    weight: 2,
    // description: 'このサイトは、ＷＥＢ上で正保琉球国絵図の画像を公開するとともに、絵図に描き込まれた情報を分析するために構築されたデジタルアーカイブです。',
  },
  {
    label: 'news',
    to: {
      name: 'news',
    },
    icon: 'mdi-information',
    top: true,
    type: 'about_',
    weight: 3,
    // description: 'このサイトは、ＷＥＢ上で正保琉球国絵図の画像を公開するとともに、絵図に描き込まれた情報を分析するために構築されたデジタルアーカイブです。',
  },
  {
    label: 'search',
    to: {
      name: 'search',
    },
    icon: 'mdi-information',
    top: true,
    type: 'tools',
    weight: 0,
    // description: 'このサイトは、ＷＥＢ上で正保琉球国絵図の画像を公開するとともに、絵図に描き込まれた情報を分析するために構築されたデジタルアーカイブです。',
  },
  {
    label: 'category',
    to: {
      name: 'category',
    },
    icon: 'mdi-information',
    top: true,
    type: 'tools',
    weight: 1,
    // description: 'このサイトは、ＷＥＢ上で正保琉球国絵図の画像を公開するとともに、絵図に描き込まれた情報を分析するために構築されたデジタルアーカイブです。',
  },
  {
    label: '東洋文庫',
    href: 'http://www.toyo-bunko.or.jp/',
    target: '_blank',
    type: 'links',
    weight: 0,
  },
  {
    label: '酉蓮社（旧増上寺報恩蔵）蔵嘉興版大蔵経目録データベース',
    href: 'https://static.toyobunko-lab.jp/u-renja/',
    target: '_blank',
    type: 'links',
    weight: 1,
  },
]

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
const baseUrl = env.BASE_URL
const baseDir = env.BASE_DIR || '/'
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
  '基-巻数': {
    sort: '',
    label: '基本情報-巻数',
    value: {},
    key: '基-巻数',
    more: false,
  },
  '基-訳著者1-4': {
    sort: '',
    label: '基本情報-訳著者',
    value: {},
    key: '基-訳著者1-4',
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

const both = {}
for (const key in norm) {
  const value = norm[key]
  both[key] = [key, value]
  both[value] = [key, value]
}
env.both = both

///

module.exports = {
  server: {
    port: 8089, // デフォルト: 3000
    // host: '0.0.0.0', // デフォルト: localhost
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
  ssr: false,
  target: 'static',
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
    '@nuxt/content',
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
  content: {
    // Options
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
    analyze: false,
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
    extend(config, ctx) { }
  },

  generate: {
    fallback: true,
  },
}
