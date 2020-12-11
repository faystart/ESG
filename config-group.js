module.exports = {
    title: 'All about ESG', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '关于ESG，包括ESG的标准有哪些，公司应如何披露ESG、提升ESG评级。Environmental, Social, Governance and more.', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
     head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],  
  themeConfig: {
    sidebar: [
      {
        title: 'ESG介绍',   // 必要的
        //path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
                        ['/about/ESG.md', 'ESG是什么'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
                        ['/about/ESG-history.md', 'ESG发展史'],
						['/about/ESG-investment-history.md', 'ESG投资史']
                    ],
		initialOpenGroupIndex: 0
      },
      {
        title: 'ESG标准',
        children: [
                        ['/criteria/ESG-Criteria', 'ESG标准'],
						['/criteria/ESG-China','ESG在中国'],
						['/criteria/hkex-ESG','港交所ESG'],
						['/criteria/hkex-new-esg-guide-2019','港交所ESG解读']
                    ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
   }
}