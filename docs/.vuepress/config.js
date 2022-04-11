module.exports = {
    title: 'All about ESG | ESG 资料库', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '关于ESG，包括ESG的标准有哪些，公司应如何披露ESG、提升ESG评级。Environmental, Social, Governance and more.', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
	base: '/' ,


  themeConfig: {
	 search: true,
         footer: { // 页脚信息
            createYear: 2019, // 博客创建年份
            copyrightInfo: 'by Zhou Sanfeng on Cloud', // 博客版权信息，支持a标签
                  },	 
        lastUpdated: "上次更新",
        logo: '/esg.png',  //网页顶端导航栏左上角的图标
        //顶部导航栏
        nav: [           
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            { text: '首页', link: '/' }, 
		{ text: 'ESG介绍', 
		ariaLabel: '关于ESG的介绍',
		items: [
			{ text: 'ESG是什么', link: '/about/ESG/' },
			{ text: 'ESG发展史', link: '/about/ESG-history/'},
			{ text: 'ESG投资史', link: '/about/ESG-investment-history/'}
			  
			  ]	
			}, 
		{ text: 'ESG标准', 
		  ariaLabel:'ESG的标准有哪些',
	          items: [
			 { text: 'ESG标准',   link: '/criteria/ESG-Criteria/' },
			 { text: 'ESG在中国', link: '/criteria/ESG-China/'},
			 { text: '港交所ESG', link: '/criteria/hkex-ESG/'},
			 { text: '政策更新',  link: '/criteria/ESG-update/'}
			  ]		
			}, 
		{ text: 'ESG评级', 
		  ariaLabel: '关于ESG的应用',
		  items:[
			{ text: 'ESG评级', link: '/apply/ESG-rating/'},
			{ text: 'ESG投资', link: '/apply/ESG-investment/'},
			{ text: '绿色债券', link: '/apply/Green-bond-definition-priciples-reporting/'},
			{ text: '投资者需求', link: '/apply/ESG-investor-need/'}
			  ]
			}, 
		{ text: '如何写ESG报告', link: '/how/ESG-guide/' }, 		
           			
            //格式二：添加下拉菜单，link指向的文件路径
               {
                text: '帮助/关于',  //默认显示        
                ariaLabel: '需帮助/服务？',   //用于识别的label
                items: [
                         { text: 'ESG服务', link: '/contact.md' },
			 { text: 'SDGs 中文', link: 'https://sdg.js.org' },
			 { text: 'CSR服务', link: 'https://3feng.im' },  
            		 { text: '公益创投', link: 'https://lib.3feng.im/venture-philanthropy/' }, 
			 { text: '基金会咨询', link: 'https://lib.3feng.im/'},
			 { text: '作者简历', link: 'https://zhou.3feng.im/'}
                ]
            },
            //{ text: '功能演示', link: '/pages/folder1/test3.md' },
            
            //格式三：跳转至外部网页，需http/https前缀
            //{ text: 'Github', link: 'https://github.com/dwanda' },
        ],
		activeHeaderLinks: true, // 默认值：true
        
        //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
        sidebar: {
            '/about/':[         
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
				       ],
                '/criteria/':[ {
                    title: 'ESG标准',
                    collapsable: false, 
					sidebarDepth: 1, 
                    children: [
                        ['/criteria/ESG-Criteria', 'ESG标准'],
						['/criteria/ESG-China','ESG在中国'],
						['/criteria/hkex-ESG','港交所ESG'],
						['/criteria/hkex-new-esg-guide-2019','港交所ESG解读'],
						['/criteria/ESG-update','ESG政策更新']
                    ]
                },
				             ],
				 '/apply/':[
				 {
                    title: 'ESG应用',
                    collapsable: false, 
					sidebarDepth: 1, 
                    children: [
                        ['/apply/ESG-as-supervision.md', '以ESG实现监管'],
						['/apply/ESG-rating.md','ESG评级'],
						['/apply/ESG-investment.md','作为投资工具'],
						['/apply/ESG-communicate.md','作为沟通工具'],
						['/apply/ESG-investment-and-social-value','ESG投资与价值'],
						['/apply/ESG-research-reports','ESG研究报告'],
						['/apply/MSCI-ESG-Rating-Methology-Chinese','MSCI 评级'],
						['/apply/ESG-investor-need','投资者需要什么ESG信息'],
						['/apply/Green-bond-definition-priciples-reporting','绿色债券指南']
                    ]
                },
				          ],
				'/how/':[
				{
			        title: 'ESG披露实践',   // 一级菜单名称
                    collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                    sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: [
                        ['/how/ESG-guide.md', 'ESG披露指南'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
                        ['/how/contact', '帮助']
                             ]
			}
			        ]
				
      
			
            
            //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
		},
	smoothScroll: true,	
	
  },
plugins: [
    // code-copy 插件安装后，每段代码行都看起来像多了一行，不好看。而且有较宽的行触发左右滑动时，复制按钮也跟着滑动，滑稽
    //'code-copy',
     ['@vuepress/google-analytics',
      {
        'ga': 'G-5NDPDMT1LW'
      }
    ],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    [
      '@vuepress/last-updated', 
      {
        transformer: (timestamp, lang) => {
          //return (new Date(timestamp)).toUTCString() 或者用下面这段
          // 不要忘了安装 moment
           const moment = require("moment");
          moment.locale(lang);
          return moment(timestamp).format("YYYY-MM-DD");
        }
      }
    ],
   
  ]
  
}
