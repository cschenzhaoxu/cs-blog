module.exports = {
  title: 'Chen\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/user-ico26.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/cs-blog/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      { text: 'Home', link: '/' },
      { text: 'FirstBlog', link: '/blog/FirstBlog.md' }  
    ],
    sidebarDepth: 2, // 侧边栏显示2级
	// 你的GitHub仓库，请正确填写
    repo: 'https://github.com/cschenzhaoxu',
	// 自定义仓库链接文字。
    repoLabel: 'My GitHub',
	sidebar: [
      ['/', '首页'],
      ['/blog/FirstBlog.md', '我的第一篇博客']
    ]
  }
};