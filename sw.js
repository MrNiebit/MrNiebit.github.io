/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","8b6f22cdc9c73fa8d5e0b48036034b66"],["/2019/07/20/Spring入门学习/index.html","ddd57993799c35c28b09ea1f17be1c24"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","48e35111e74f4a2cfeeaee9c79a0415c"],["/2019/08/04/Struts2的执行流程分析/index.html","86c124e4c97e7a23a69119e15f43c1eb"],["/2019/08/17/Struts2的拦截器栈/index.html","a7b026389e308044e188192dec3778a8"],["/2019/08/20/ognl表达式和值栈/index.html","b1c7b0a1f784a76f79cbc6415b66b2d7"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","803cb9d1d62b0a39bbe02915673175f8"],["/2019/09/01/Untitled/index.html","a1ab43eb4625ef1b1edcbf9003494271"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","12b350d6019b2dd2cc408a9aade5fdcf"],["/2019/09/06/MybatisUtils工具类/index.html","3100b64879b67a304a36879623c128b8"],["/2019/09/06/Mybatis使用注解入门案例/index.html","a4fe31a9d12bd7b0947ce306b68359ce"],["/2019/09/11/Git笔记/index.html","5439cccbae0961b21e22476b380df64f"],["/2019/09/11/MyBatis的动态SQL/index.html","57176b5894ef6922133179c08ae7fb51"],["/2019/09/14/安装Docker/index.html","f37b66825eade551e97ae5e9c29f8160"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","3e0f606f5c96499c4b9ba581fa04764d"],["/2019/09/21/linux服务器和tomcat部署/index.html","d45c9a3d77441b40c8bcb321348d2420"],["/2019/09/21/maven创建spring入门项目/index.html","751760462cd3c0a9e7b9e8a25f309ab5"],["/2019/09/23/mybatis多对一、一对多查询/index.html","0b95d304077447206230eb28a7af383d"],["/2019/10/08/Maven入门学习/index.html","78f2c77028b1fa2ae0cb59704d5f52ca"],["/2019/10/09/CentOS安装Dokcer/index.html","c1c006e01da46142feec90670e3eddbb"],["/2019/10/09/docker学习的入门/index.html","f91e11bc70225947eaf91b9fed80ff68"],["/2019/10/09/linux常用命令/index.html","00c26e682b98c1f1f95ead6d88bc98b3"],["/2019/10/10/mybatis单表的嵌套查询/index.html","8a26553fd995864aa1b08c1f31360e40"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","f9de08813563f52c13320dbda25b1b8a"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","dfcb70e921720192e204a50b236123ec"],["/about/index.html","acfaecbf4de8a55f5571a779f81d2939"],["/archives/2019/07/index.html","85f86af6794d98303d02e86136949b3a"],["/archives/2019/08/index.html","a9a9659cc9667853df8e38a514e58451"],["/archives/2019/09/index.html","482a47fe5cf9e4b671f63aef22ed2f33"],["/archives/2019/09/page/2/index.html","bca9f39a583b3b6bd1774e4ca2d33dbd"],["/archives/2019/10/index.html","f6f124ec6aa284e6ea46d8ab32d23af9"],["/archives/2019/index.html","88fe2f73c9c9db446fe9e43075ff8c5e"],["/archives/2019/page/2/index.html","174ce42e027597f883fc1caf07962a68"],["/archives/2019/page/3/index.html","3b46f3d1bfedfe7de0656e9bc1e94fc8"],["/archives/index.html","8ab4f8f824c773ec1baee452607f5bf5"],["/archives/page/2/index.html","c1c24122019aaaa12576a87295c80816"],["/archives/page/3/index.html","a8ab1a13103ee3d633ff0223ad0631fa"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","b1327c0dbc1978d7e7393fd04d3616de"],["/categories/git/index.html","1800a273071c1811acce3604a4aadfc6"],["/categories/index.html","f905cc9e2d1bcbed558cd0938e7c1c2e"],["/categories/linux/index.html","73c629f5630eb4c21241130a91181777"],["/categories/linux/tomcat/index.html","22aa260fe32307c67fdec997a5f56767"],["/categories/maven/index.html","8ab4d7607bbb8bbc323b7b9f450346fb"],["/categories/mybatis/index.html","bb5bccf4418c214852702d20a681e7dd"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","a1987a74cde9c4c325bf5714d6bc588e"],["/categories/spring/index.html","dfe8a5ccbb043206284ac74b1b97a3c0"],["/categories/struts2/index.html","5fc56b98a40a41a82f2347f27f9b8019"],["/categories/框架/page/2/index.html","4864f40a56dd0d6fcecce4f4e3906dfe"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","b649799d037c99c17f4dbd61f5d13db9"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/高速下载相关/index.html","08d7d820b83d98a6da8c9104a5884a78"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/main.css","1539efa6daf2a80072acc74d1f741ff8"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","63cfe2738fe96bdd0126433bdc973a75"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","9dff954e28dbb7f254df477407ea2f1f"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","3e5f15479f6a0140dba73e3632c7fb61"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","e6829b01b0fdc50bf8a9f0a026e3d00a"],["/js/src/algolia-search.js","16a387f716323a60b83edb5bba978310"],["/js/src/bootstrap.js","5b5f0dbc3fe4eafd2b890fbbcc5c60a6"],["/js/src/clipboard-use.js","0782b17f05db3ee44b3c16019a4ebf99"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","6e5932f06dd247f0dda8cd5883a9101d"],["/js/src/exturl.js","b0fac15bc3dc1ee8fe53b2537e938d9a"],["/js/src/hook-duoshuo.js","881cc93f473fcd02d85ec859e20e8d43"],["/js/src/instantclick.js","ed949066ccb6dae3d41698ce6edcef2a"],["/js/src/js.cookie.js","82757152f7bc6d8341fd6e3be12d9cf0"],["/js/src/motion.js","ffdc3ef436dd161eec08efa002abe01b"],["/js/src/post-details.js","293c802b44b73dedb78076ddaf3bbe46"],["/js/src/schemes/pisces.js","4e7769108d5363877482de22ca2804aa"],["/js/src/scroll-cookie.js","bb87eb89b4506d1fff2fec56dcbe8635"],["/js/src/scrollspy.js","d78133c7cc195724d59c62201e1e7e19"],["/js/src/utils.js","0f3f0ba0c5497e2a25a526ff6425c29d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","1e7532187502cf5366692cc5c05655d2"],["/lib/Han/dist/han.js","c49639e3d2b3c2902bec717219af8dc0"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e5b81bb4d3b1dbc93328b53bb61b5553"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","ffbad7c244068d37849ab37b101a8235"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","d3b5fff06aed9ce4f32dd62510601527"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c521d9c609fbd19241eacf1be1b2fb68"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","b743d14e9399eaed1431fa62dc36d6c0"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","88d3075761394631e48c6e59d02abcb0"],["/lib/fancybox/source/jquery.fancybox.css","df533c47474a4f4d6293f4950fff2be1"],["/lib/fancybox/source/jquery.fancybox.js","d7f0f90bdb380f758f35d7caf386decb"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","305d7aeeb346619422b9df463930201f"],["/lib/fastclick/lib/fastclick.js","c2a2c5d6daabffce985c96a2dd880621"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bc68e056de29de8844595e1a8bd0bb51"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","9213b7901fc50d81caedd45ef87f0c61"],["/lib/jquery_lazyload/README.html","7a0986e51e4d0b1d4f3c6e2ff13a7489"],["/lib/jquery_lazyload/jquery.lazyload.js","c483515851cf40592fd853a6fdc0bb4c"],["/lib/jquery_lazyload/jquery.scrollstop.js","ac4e863ce71ac5bcc393abd778424ce2"],["/lib/needsharebutton/font-embedded.css","6291e43f5f6135bbeeef4c7e28863702"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","054b82872194e2eff2c92f7d1526bb78"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6f0cd494b52b82f97499dfeabd0d844d"],["/lib/velocity/velocity.js","297d715368610b11a1bb8879cbb161a8"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","1715272d7087c097f17e770be27ded14"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","fce27d9adbb8b850e53dfd90753cccff"],["/page/3/index.html","f5fac94aeb5fd2cec47988b724e45910"],["/static/api/css/imgshare.css","fc4f37590b520ac1cb535415177d5f5a"],["/static/api/css/like.css","90e62ade127c550101b87e9dfebdcf39"],["/static/api/css/select_share.css","7815d3dddce7b2b6e319dc8727089ba8"],["/static/api/css/share_popup.css","ea60b23cac5d8f6a4470414dff618282"],["/static/api/css/share_style0_16.css","df9d14010341af8a6e751225cd0642da"],["/static/api/css/share_style0_24.css","4fb3a7dacd454e6e6d951d7e18b77f52"],["/static/api/css/share_style0_32.css","763454917ecc586d69a2602b7621515e"],["/static/api/css/share_style1_16.css","46d8fdfc689eb9b1755d0f8a6494d161"],["/static/api/css/share_style1_24.css","09980836bdb4d2211b3a527b370256c7"],["/static/api/css/share_style1_32.css","a9f6e609508690a50bc7d9800b7332e7"],["/static/api/css/share_style2.css","b0952815166543b1bcca6b5ba02bc830"],["/static/api/css/share_style2_16.css","91263c5e675a724106fb6640eaf04db0"],["/static/api/css/share_style2_24.css","94e2e16cac16cccddeed00bce3432534"],["/static/api/css/share_style2_32.css","c0f7c84058568e539ccb2735aae0641d"],["/static/api/css/share_style4.css","bae3760ec68b272820705097499640f1"],["/static/api/css/slide_share.css","d4e420e780a86b77d14efe0dea29dbf4"],["/static/api/css/weixin_popup.css","2006e38dfbde39a15e1aa1f8cdf14a82"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","99d123a9c9ae9e0d4bace94d63cb265a"],["/static/api/js/base/tangram.js","610dd89381e8afdb2886c64f2193350f"],["/static/api/js/component/animate.js","beb2fcacc3befe842d719aa3e443bc5a"],["/static/api/js/component/anticheat.js","b0dd3c9079a34feff7faba89242f4f7c"],["/static/api/js/component/comm_tools.js","e768970c54fe521073ea27c2b4371bb9"],["/static/api/js/component/partners.js","7f28ab989234979bceb70e03ec20e6df"],["/static/api/js/component/pop_base.js","16c7816d9212a2e3a8fafc6ae92325a8"],["/static/api/js/component/pop_dialog.js","97cc88c9684bea1fac3e0d896d537751"],["/static/api/js/component/pop_popup.js","354679cc190fb7d4f434d79220594f76"],["/static/api/js/component/pop_popup_slide.js","b743042bc62bff03853eff874cc7b824"],["/static/api/js/component/qrcode.js","824b432a466926f49cc536ec8cdf61fd"],["/static/api/js/conf/const.js","4b60a4160bd497d091f80dad8b9342c9"],["/static/api/js/conf/define.js","8c2ea6408659632dbab237da954db310"],["/static/api/js/share.js","65778adecbfce891ec58b1ecb78c0624"],["/static/api/js/share/api_base.js","32163a1bea1383ca7bd7f7f1f9cc6acc"],["/static/api/js/share/combine_api.js","fba014d590ec0e6543f50bb995fb5943"],["/static/api/js/share/image_api.js","8eb3fd3b007c8813cedc5c2ddd1c294e"],["/static/api/js/share/like_api.js","9bd9c6222077c0bf91ad96ae8d1239b9"],["/static/api/js/share/likeshare.js","03f9bdb6db511a7f2e7125906d4736c3"],["/static/api/js/share/select_api.js","9a34887d6b1e2d4558571414d6dd5d55"],["/static/api/js/share/share_api.js","9f08f59049a698753d7f4f8cfa77902c"],["/static/api/js/share/slide_api.js","f962a9e610ddc8a43c1a1d3a05a3ead1"],["/static/api/js/start/router.js","f41486b4497ce1980b83b62cd0eb2582"],["/static/api/js/trans/data.js","f1c6221df1224a1050b0d32bd2849600"],["/static/api/js/trans/logger.js","f1c6221df1224a1050b0d32bd2849600"],["/static/api/js/trans/trans.js","669452907028df3d434bd19b62ada423"],["/static/api/js/trans/trans_bdxc.js","0a5e10e8451c79a809b309ad69a8982f"],["/static/api/js/trans/trans_bdysc.js","a9bf47058e1c105be35f93be687a0965"],["/static/api/js/trans/trans_weixin.js","f4f342647bd423e10c6252cecc3e0d2b"],["/static/api/js/view/image_view.js","5012ae46cfb2bcaee7927eeb48e7e8d8"],["/static/api/js/view/like_view.js","aba16b5d7dba3ab4554dfce666dc2ec4"],["/static/api/js/view/select_view.js","1544f1bd2b47974cfc224280c4c267ea"],["/static/api/js/view/share_view.js","b0c35c1f6320ce082a590e772f24819f"],["/static/api/js/view/slide_view.js","3df49a52acd9fceac9a007fc2c8d1948"],["/static/api/js/view/view_base.js","c5d695ec9f7ba1917849d3ca1db3a2e6"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","1a66e1596d623bf8dd51c5614347d745"],["/tags/Spring/index.html","2e7c48352220096df12ef6d57ba37511"],["/tags/docker/index.html","d2b5bcdebf3f178600e6c215cad67846"],["/tags/git/index.html","8810956c844de036d299ce023f19846a"],["/tags/index.html","9deca732e3a27d53f7e53bc3a6191d19"],["/tags/java/index.html","a96b5ca7f12c59e2b1618634f18c6d31"],["/tags/linux/index.html","8b77bd0db70cf3350901d78afbf700e1"],["/tags/maven/index.html","153cb67034850c475f29c2f36b08b3f4"],["/tags/mybatis/index.html","b54dc5749327592128fd6fef7dfce882"],["/tags/mysql/index.html","8a0c4f797d10d6341a2fb56e079f0e1e"],["/tags/scrapy/index.html","189e6a0973025da28a75f2765ae80b68"],["/tags/spring/index.html","8bcb94c35e6f0e5abbac5207ef7909c9"],["/tags/struts/index.html","8bf2656de42cc8ad5a0246dff2b8ff55"],["/tags/struts2/index.html","7b19bf08fb91cf52b2ae6620688adf02"],["/tags/tomcat/index.html","17bddb8cd83a1fe42022427eb085ceb0"],["/tags/爬虫/index.html","7ef021f29ce2f57dfe0615176073fa6d"],["/tags/百度云/index.html","70e6adf691178e4646b5817207491b66"],["/tags/高速下载/index.html","e802b81709a960ef44576c6d084f7f28"],["/测试/index.html","72b0cb8798d2681b6caf30e4fbfd3669"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
