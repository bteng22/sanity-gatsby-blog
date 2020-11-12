export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fad5cdd0b10804c5e7bd812',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ujk2vd52',
                  apiId: '7c1e6d79-0e7e-4b72-b037-12cc3dc9d26d'
                },
                {
                  buildHookId: '5fad5cdde45a68467377dfdd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-imotgkxz',
                  apiId: '36d9c0ca-023e-4b63-9eda-410cb686deaf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bteng22/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-imotgkxz.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
