/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // distDir: 'build',
}

module.exports =nextConfig
module.exports = {
  
  async redirects() {
    return [
      {
        source: '/fluxCloud',
        destination: 'https://cloud.runonflux.io/hello.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/DApps',
        destination: 'https://www.runonflux.io/flux-dapps.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/fluxNodes',
        destination: 'https://www.runonflux.io/flux-nodes.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/flux',
        destination: 'https://www.runonflux.io/flux.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/parallelMining',
        destination: 'https://www.runonflux.io/parallel.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/zelcore',
        destination: 'https://zelcore.io/',
        permanent: false,
        basePath: false
      },
      {
        source: '/dashboard',
        destination: 'https://home.runonflux.io/dashboard/overview',
        permanent: false,
        basePath: false
      },
      {
        source: '/XDAO',
        destination: 'https://www.runonflux.io/xdao.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/whitepaper',
        destination: 'https://fluxwhitepaper.app.runonflux.io/',
        permanent: false,
        basePath: false
      },
      {
        source: '/roadmaps',
        destination: 'https://www.runonflux.io/roadmap.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/teams',
        destination: 'https://www.runonflux.io/team.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/partner',
        destination: 'https://www.runonflux.io/partners.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/documentation',
        destination: 'https://wiki.runonflux.io/',
        permanent: false,
        basePath: false
      },
      {
        source: '/blockExplorer',
        destination: 'https://explorer.runonflux.io/',
        permanent: false,
        basePath: false
      },
      {
        source: '/carbonNeutrality',
        destination: 'https://www.runonflux.io/zero-carbon.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/fluxLabs',
        destination: 'https://www.runonflux.io/fluxlabs.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/app',
        destination: 'https://jetpack2.app.runonflux.io/hello.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/node',
        destination: 'https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb',
        permanent: false,
        basePath: false
      },
      {
        source: '/miner',
        destination: 'https://www.runonflux.io/mining.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/buyFlux',
        destination: 'https://runonflux.io/flux.html#exchanges',
        permanent: false,
        basePath: false
      },
      {
        source: '/fluxStore',
        destination: 'https://gotflux.store/',
        permanent: false,
        basePath: false
      },
      {
        source: '/blog',
        destination: 'https://www.runonflux.io/blog.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/github',
        destination: 'https://github.com/runonflux',
        permanent: false,
        basePath: false
      },
      {
        source: '/pressKit',
        destination: 'https://github.com/RunOnFlux/press',
        permanent: false,
        basePath: false
      },
      {
        source: '/social',
        destination: 'https://www.runonflux.io/flux-social.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/careers',
        destination: 'https://www.runonflux.io/careers.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/bugBounty',
        destination: 'https://www.runonflux.io/bug-bounty-program.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/donate',
        destination: 'https://www.runonflux.io/donate.html',
        permanent: false,
        basePath: false
      },
      {
        source: '/support',
        destination: 'https://support.runonflux.io/',
        permanent: false,
        basePath: false
      },
      // {
      //   source: '/pricing',
      //   destination: '',
      //   permanent: false,
      //   basePath: false
      // },
    ]
  },
}
