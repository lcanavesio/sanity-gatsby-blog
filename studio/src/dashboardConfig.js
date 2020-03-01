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
                  buildHookId: '5e5b49dd53bf642c6ca3b7fb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wttdr9rm',
                  apiId: '1cd0391f-4be2-452f-a954-5178adf26de4'
                },
                {
                  buildHookId: '5e5b49dd777f2492381ec1a8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jrmg6z4z',
                  apiId: '7ba19dd7-de4b-40b5-a112-c9dff7e104d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/luxer066/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jrmg6z4z.netlify.com', category: 'apps' }
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
