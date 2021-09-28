export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '615397e566f6dd0e96627999',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-i9u9ew24',
                  apiId: 'a30bbbfd-cbc4-4a24-8c17-6862203c528b'
                },
                {
                  buildHookId: '615397e648343c120aabaee2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-n4uhr9g9',
                  apiId: 'f1a1ca95-3fd2-46cb-9031-ab3d7b9e497d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Incognito95/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-n4uhr9g9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
