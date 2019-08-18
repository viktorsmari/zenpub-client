const { merge } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  siteMetadata: {
    title: 'Moodlenet',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        typescript: true,
        ts: true,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/home/Code/MoodleNet/moodlenet-client-react/.docz',
        base: '/docs/ui/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        ignore: [{}, {}, {}, {}, {}],
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Moodlenet',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        themeConfig: {},
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        paths: {
          root: '/home/Code/MoodleNet/moodlenet-client-react',
          templates:
            '/home/Code/MoodleNet/moodlenet-client-react/node_modules/docz-core/dist/templates',
          packageJson:
            '/home/Code/MoodleNet/moodlenet-client-react/package.json',
          docz: '/home/Code/MoodleNet/moodlenet-client-react/.docz',
          cache: '/home/Code/MoodleNet/moodlenet-client-react/.docz/.cache',
          app: '/home/Code/MoodleNet/moodlenet-client-react/.docz/app',
          appPublic: '/home/Code/MoodleNet/moodlenet-client-react/.docz/public',
          appNodeModules:
            '/home/Code/MoodleNet/moodlenet-client-react/node_modules',
          appPackageJson:
            '/home/Code/MoodleNet/moodlenet-client-react/package.json',
          appYarnLock:
            '/home/Code/MoodleNet/moodlenet-client-react/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/home/Code/MoodleNet/moodlenet-client-react/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/home/Code/MoodleNet/moodlenet-client-react/gatsby-config.js',
          gatsbyBrowser:
            '/home/Code/MoodleNet/moodlenet-client-react/gatsby-browser.js',
          gatsbyNode:
            '/home/Code/MoodleNet/moodlenet-client-react/gatsby-node.js',
          gatsbySSR:
            '/home/Code/MoodleNet/moodlenet-client-react/gatsby-ssr.js',
          importsJs:
            '/home/Code/MoodleNet/moodlenet-client-react/.docz/app/imports.js',
          rootJs:
            '/home/Code/MoodleNet/moodlenet-client-react/.docz/app/root.jsx',
          indexJs:
            '/home/Code/MoodleNet/moodlenet-client-react/.docz/app/index.jsx',
          indexHtml:
            '/home/Code/MoodleNet/moodlenet-client-react/.docz/app/index.html',
          db: '/home/Code/MoodleNet/moodlenet-client-react/.docz/app/db.json',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
  ],
}

module.exports = merge(config, custom)
