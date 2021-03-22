module.exports = {
    title: 'All about ESG', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '关于ESG，包括ESG的标准有哪些，公司应如何披露ESG、提升ESG评级。Environmental, Social, Governance and more.', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
	base: '/' ,
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
        logo: '/esg.png',  //网页顶端导航栏左上角的图标
        //顶部导航栏
        nav: [           
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            { text: '首页', link: '/' }, 
			{ text: '公司ESG披露实践', link: '/how/ESG-guide' }, 
            { text: 'CSR博客', link: 'https://3feng.im' }, 			
            { text: '公益创投', link: 'https://lib.3feng.im/venture-philanthropy/' }, 	
            //格式二：添加下拉菜单，link指向的文件路径
            //{
            //    text: '分类',  //默认显示        
            //    ariaLabel: '分类',   //用于识别的label
            //    items: [
            //        { text: '文章', link: '/pages/folder1/test1.md' },  
            //        //点击标签会跳转至link的markdown文件生成的页面
            //        { text: '琐碎', link: '/pages/folder2/test4.md' },
            //    ]
            //},
            //{ text: '功能演示', link: '/pages/folder1/test3.md' },
            
            //格式三：跳转至外部网页，需http/https前缀
            //{ text: 'Github', link: 'https://github.com/dwanda' },
        ],
        
        //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
        sidebar: {
			activeHeaderLinks: true, // 默认值：true
            '/':[         
                {
                    title: 'ESG介绍',   // 一级菜单名称
                    collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                    sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: [
                        ['/about/ESG.md', 'ESG是什么'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
                        ['/about/ESG-history.md', 'ESG发展史'],
						['/about/ESG-investment-history.md', 'ESG投资史']
                    ]
                },
                {
                    title: 'ESG标准',
                    collapsable: false, 
					sidebarDepth: 2, 
                    children: [
                        ['/criteria/ESG-Criteria', 'ESG标准'],
						['/criteria/ESG-China','ESG在中国'],
						['/criteria/hkex-ESG','港交所ESG'],
						['/criteria/hkex-new-esg-guide-2019','港交所ESG解读']
                    ]
                },
				
				 {
                    title: 'ESG应用',
                    collapsable: false, 
					sidebarDepth: 2, 
                    children: [
                        ['/apply/ESG-as-supervision.md', '以ESG实现监管'],
						['/apply/ESG-rating.md','ESG评级'],
						['/apply/ESG-investment.md','作为投资工具'],
						['/apply/ESG-communicate.md','作为沟通工具'],
						['/apply/ESG-investment-and-social-value','ESG投资与价值']
                    ]
                },
				{
			 title: 'ESG披露实践',   // 一级菜单名称
                    collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                    sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: [
                        ['/how/ESG-guide.md', 'ESG披露指南'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
                        ['contact', '帮助']
                    ]
			}
				
            ]
			
            
            //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
		}
  }
}

