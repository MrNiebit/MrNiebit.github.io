/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","6dd6f27a3aa6553ef18910b5e0878633"],["/2019/07/20/Spring入门学习/index.html","83a31a484ab735471638daf30502d4ad"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","090405ae8ee4687e8120754dabf5a830"],["/2019/08/04/Struts2的执行流程分析/index.html","7445c78151d3e6eec379a038df368bb4"],["/2019/08/17/Struts2的拦截器栈/index.html","3af3709a9ee4b1c348020e43782166c4"],["/2019/08/20/ognl表达式和值栈/index.html","51a15be1235509be2afab23cbdc112df"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","3ba02595037a01e2b49cecc83e8f3c71"],["/2019/09/01/Untitled/index.html","a1ab43eb4625ef1b1edcbf9003494271"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","04b0ebd2612f43e053c4e68443c2999e"],["/2019/09/06/MybatisUtils工具类/index.html","c2a13383c1f0773bd53a754efe29723b"],["/2019/09/06/Mybatis使用注解入门案例/index.html","5f081aa1450aa151bf4a1290f7222349"],["/2019/09/11/Git笔记/index.html","b460e1aadc58e2889464e31775113ad9"],["/2019/09/11/MyBatis的动态SQL/index.html","6126e3616240e180f1ae766eb7157cd7"],["/2019/09/14/安装Docker/index.html","9ef171a21c42f239b4487fef6b417537"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","128cd2d1c3e3b3c81db394e560b2bb35"],["/2019/09/21/linux服务器和tomcat部署/index.html","0b64c144c37d337e28c1b70050f6075a"],["/2019/09/21/maven创建spring入门项目/index.html","037da5f1c95fd1006f73eb72fdfd0a12"],["/2019/09/23/mybatis多对一、一对多查询/index.html","8f34ed22e05f4bb6c3c26143e798ae3d"],["/2019/10/08/Maven入门学习/index.html","af47f0f7634cd3ae4d8a20061fffcc0d"],["/2019/10/09/CentOS安装Dokcer/index.html","43c806f6f72c6835bdd96f65504bdaa5"],["/2019/10/09/docker学习的入门/index.html","dcaae585fbf81ab9b6ca4fcd611502aa"],["/2019/10/09/linux常用命令/index.html","a8f2e81891835fbd827aa1845c9ea73e"],["/2019/10/10/mybatis单表的嵌套查询/index.html","d5f769aed4fcff3d536283b63411578f"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","1c628b72ba7e356504c02e01e0075a16"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","ed4fbbf2126c8b5cc998077a8c244ee5"],["/about/index.html","401e0e1790f311030065128159b84c4f"],["/archives/2019/07/index.html","8a628cd77d64106c36079930157c2e45"],["/archives/2019/08/index.html","fe7a7c26345665844f3ba9981b7a3194"],["/archives/2019/09/index.html","476671c883c34756c6a7529219e3d101"],["/archives/2019/09/page/2/index.html","bca9f39a583b3b6bd1774e4ca2d33dbd"],["/archives/2019/10/index.html","84092119cc7f6381321d6071ce198696"],["/archives/2019/index.html","b4cb1d2ccb39a2a2154c60604b2bfa78"],["/archives/2019/page/2/index.html","0e87722e6babb6de22d028612c2b9448"],["/archives/2019/page/3/index.html","bcb85664372b81cf8efc4ef94eba2c42"],["/archives/index.html","a0e14182388d9067aa43ee40e42416a7"],["/archives/page/2/index.html","68e6c712518cd104221e6215cdcecbda"],["/archives/page/3/index.html","da865882a74b69ed79b31eab769ad2e7"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","28574d4aeea2f2067b547e9ad6e677d2"],["/categories/git/index.html","2a482e16364247ffc0684fcb71c95501"],["/categories/index.html","6ee6ac6e15706d91852eacfe5b91fbfe"],["/categories/linux/index.html","1d5bb86d54de3f5c2da22cd8e4eb3b7b"],["/categories/linux/tomcat/index.html","0182488c180c359909cbde20f3588bf6"],["/categories/maven/index.html","f35862891f97a1c4a0739f74578ed742"],["/categories/mybatis/index.html","6eaa0517e7e5f3effaa3fd77a1c8057e"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","56ac65584f4f6d358bf64950af9441bb"],["/categories/struts2/index.html","53f8df4e962b00d49a88a258bf10c982"],["/categories/框架/index.html","a134976af3f2cf567ca49d95330c3eab"],["/categories/框架/mybatis/index.html","70a50112c4b074d885851f2f5b165d43"],["/categories/框架/page/2/index.html","4864f40a56dd0d6fcecce4f4e3906dfe"],["/categories/框架/spring/index.html","e2c0a4a68dd6ae5c17034d7312823ffe"],["/categories/框架/struts2/index.html","be40a7899c4a3acd12780a26b8cd3c2a"],["/categories/框架/爬虫/index.html","6fc54184c8eed4f935012ccc335a3234"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","41abd5afdf74c8debbe7ef5383eeb0e2"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/高速下载相关/index.html","510ed752b05f7df7f8b843370e08284e"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/main.css","34d44312b15fb5de753dfaafc350b47c"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","37a854057d4715dbd5493093493ae825"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","2a9fed3146280d0b0d067fb38e551639"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","3e6fe8582143f030d9b2e538856ddec2"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","19572e8b3211a708acfc1dc9fe42bc4e"],["/js/src/algolia-search.js","09a5d263a8ab3f75c68f2e50128c4e5c"],["/js/src/bootstrap.js","df746458d374ebe30d621ba141b129ae"],["/js/src/clipboard-use.js","3fe03982c8e9dade1ed61a882749e31e"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","4c4c624c27093419cc02b7df88116ed6"],["/js/src/exturl.js","e7dab83fe2302c30c5571dc8d69e1217"],["/js/src/hook-duoshuo.js","8d98095e7097a61196a96709eabcd66d"],["/js/src/instantclick.js","6dd77b7df53f4fa39889f72eaa892a18"],["/js/src/js.cookie.js","c05b9db0a88dd2271b201dc09198e846"],["/js/src/motion.js","124f6f3e28aa38951c92239ee373bd0b"],["/js/src/post-details.js","aaac31fcee56daca15d2fbe7fd86511c"],["/js/src/schemes/pisces.js","2258f0b79fb3d12f13666077457a7617"],["/js/src/scroll-cookie.js","0d0cd5d3043a95efb22676eb03536099"],["/js/src/scrollspy.js","b2cfa68c766f8c0b60e8234fa922ba95"],["/js/src/utils.js","993aaaebe77e7f3021d4873ec6b574f1"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","e852e231246eb133d6dfaebdefcf9d02"],["/lib/Han/dist/han.js","a49d7d010e53ade9e269eb181cb8eeae"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","2b3cd6304b2fbd8b1c171e8c5ae65342"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","276343e68e2b88c71dd7d6bdbf75e319"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","2ccbb6cd623927b8c882c06049b6321b"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","87094585c8f27535410d2f94fc65875c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","da66cfd2eba4ead1f7faab9704900ad7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","da7f7818cc8b36eb41b1e1cba84e17a8"],["/lib/fancybox/source/jquery.fancybox.css","a0801889f02a046a3ac2179d901257a2"],["/lib/fancybox/source/jquery.fancybox.js","f8ef379c7143fc97618f8355c86d709a"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","66220c16e6d507e29be999d2c2213edd"],["/lib/fastclick/lib/fastclick.js","c298147530c732934e0a66acebf1aa49"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","87b64368700fba27e087ace24ffe9f65"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","efc9f89b9e53b45873e40fa89ed6538c"],["/lib/jquery_lazyload/README.html","e04397dd24978cbc91566190e8864535"],["/lib/jquery_lazyload/jquery.lazyload.js","a583b7858581d973e41c820f4862cda4"],["/lib/jquery_lazyload/jquery.scrollstop.js","127630b9cd06ea7482aa7097abfbac0b"],["/lib/needsharebutton/font-embedded.css","ed5fb68fa4c360da3234bf4dbc6e5e52"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","05f763382622b61057bf490d779d8f3f"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","eaaab785d0a3e4189c830cf6acbe6f12"],["/lib/velocity/velocity.js","8c1e3a7e9a73d886d176ca1ab1f177bd"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f22e1042db45b2dbbfebbd990ffa80bd"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","45064986368f7e985b103b75eb81152d"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","eab14826e4bbb889525dacffa0371e0d"],["/live2d-widget/demo/demo1.html","f2c5c4b394663b91ec608bba2a088eae"],["/live2d-widget/demo/demo2.html","f69844523b227988036eef191ebd7349"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","cc37670be418ba9bea237a50b5af761f"],["/page/2/index.html","bbfa125710cf455be1b3c792a8738dc3"],["/page/3/index.html","a4538e7f3cf0af7bc21e6c33b8641210"],["/static/api/css/imgshare.css","61e2c00adab5d1a548be06170b6a9b2d"],["/static/api/css/like.css","7acc86971beb6c895c42b53e13a9419b"],["/static/api/css/select_share.css","e4d4a4205cae40bbbf69f26d2a0aa4f3"],["/static/api/css/share_popup.css","d020539a48f710ae972505ff05ba06bf"],["/static/api/css/share_style0_16.css","b7c351bb5b2a99624252bd8d484cce30"],["/static/api/css/share_style0_24.css","a5a7e92aa311d3f1d0dbdb986a5c4c6b"],["/static/api/css/share_style0_32.css","e310b83555f853f76753022c166e73cf"],["/static/api/css/share_style1_16.css","f5d4876c2dd1d35ed5d04ad8f7c3ec8a"],["/static/api/css/share_style1_24.css","95697c0fbca09e283d0e12a540b094b9"],["/static/api/css/share_style1_32.css","77cc8dc151a461ea19c90668d03ae825"],["/static/api/css/share_style2.css","a133216517e51369eaaad53cbbc7feaa"],["/static/api/css/share_style2_16.css","547f10d455e094b1dfdac88f9d08ca45"],["/static/api/css/share_style2_24.css","12d53288e7b89bb1eb83d15c9a980918"],["/static/api/css/share_style2_32.css","83511e91a10c3a13f21ce58bf64e03da"],["/static/api/css/share_style4.css","0a3036b7f8dc2571f2a4969951d2427c"],["/static/api/css/slide_share.css","110187ffd145f67cf3f8edd247895bf0"],["/static/api/css/weixin_popup.css","63b6cdaa7edd4a7e6358dc4b0429f955"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","831542fea7f8439127c473163e2ec58c"],["/static/api/js/base/tangram.js","4a12cfd7bdb9e533325994270614328e"],["/static/api/js/component/animate.js","a4ef58b79e2b65e4a6b15d55eba481b6"],["/static/api/js/component/anticheat.js","588278f1ddfb205874a4a52c46312614"],["/static/api/js/component/comm_tools.js","5ad4477e0f8d6bc3cb9f96598479fb3d"],["/static/api/js/component/partners.js","7a77a1d1a4354d959ad160af545241a4"],["/static/api/js/component/pop_base.js","cb12b1b4b4b10e90b4bd52f882a37ef4"],["/static/api/js/component/pop_dialog.js","4cba622e09b6552f155cb1809b5b708a"],["/static/api/js/component/pop_popup.js","89594a736854a816a9771a19c8db8b40"],["/static/api/js/component/pop_popup_slide.js","54f6134a66e137f2c52879ab51be11e4"],["/static/api/js/component/qrcode.js","114366c785a661217ba6f0a3fc300ce6"],["/static/api/js/conf/const.js","c6b7d61074fa773768b6d0e555246458"],["/static/api/js/conf/define.js","8b9cb647e4ed09900f029d25070013f0"],["/static/api/js/share.js","924953f51d7d0d1b69fc569ab62681ac"],["/static/api/js/share/api_base.js","5ce2c1f8e0f4f93bbc71ac570da42103"],["/static/api/js/share/combine_api.js","0e5a7ef6b417eaa9e6d01c0aa4e90e8e"],["/static/api/js/share/image_api.js","ccfa353de9c624e5a49257370c981f8c"],["/static/api/js/share/like_api.js","e013761b7c7e7d08bf9cb957746703b3"],["/static/api/js/share/likeshare.js","734cf3463bb214a81f72e4920011f80e"],["/static/api/js/share/select_api.js","d27f25b561986a0c58264d584d22133f"],["/static/api/js/share/share_api.js","bc5e9f6b0b79d4f9b4ed68ad9371d848"],["/static/api/js/share/slide_api.js","c7d929c4d5cafd4b7bba23761130bfe3"],["/static/api/js/start/router.js","edd5051c3b6e352ac84fecb36c57a690"],["/static/api/js/trans/data.js","734cf3463bb214a81f72e4920011f80e"],["/static/api/js/trans/logger.js","734cf3463bb214a81f72e4920011f80e"],["/static/api/js/trans/trans.js","c732370cf76d892cbcdb00b075aa512d"],["/static/api/js/trans/trans_bdxc.js","07a4da9e97ebf9649776a7cbab0173ab"],["/static/api/js/trans/trans_bdysc.js","cd630a94d3f25903d788a21a0ee1619f"],["/static/api/js/trans/trans_weixin.js","7de4f31a8a259ac92cb569b4b2bd14b3"],["/static/api/js/view/image_view.js","f3d69aa78b9387e0b4265b8bf8d8768b"],["/static/api/js/view/like_view.js","18eb9c8ae95d2e6b9c7c6fa7b9a87103"],["/static/api/js/view/select_view.js","b1fecbdeccac71a7f121b0637ff691f2"],["/static/api/js/view/share_view.js","6daa5fd0ed02cdf416d26f590834752a"],["/static/api/js/view/slide_view.js","da9014e8ca9f770adb0ace2b4803e6d5"],["/static/api/js/view/view_base.js","75085dad43dbb4c1da387d789ae315eb"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","4b106dd60654e5ba5889cae9c9d76479"],["/tags/Spring/index.html","65d0d0fa5ea4fc486bf3a58f8ad51ad8"],["/tags/docker/index.html","092a8c6e7dd41c4accbfd74daa2e68d6"],["/tags/git/index.html","26132ab32a8e4a4a90f8127c0ce8cbb0"],["/tags/index.html","f44c31d972399dcdff85e9380fc94f6c"],["/tags/java/index.html","ccc0c0bb38ef4c037ce864148df27135"],["/tags/linux/index.html","1fd4b6599796d399af7142471df64c29"],["/tags/maven/index.html","2c85a4f1d3ccbee8c46ac9dd90a6503e"],["/tags/mybatis/index.html","2b93da1e6f7ed0afcc9674b30ec87eb0"],["/tags/mysql/index.html","3df1689ea99174c80913800d1e4561e0"],["/tags/scrapy/index.html","498bfdd5224a5f728d37c5509bde2793"],["/tags/spring/index.html","b492e7ae36c82b15217f4d183ddb73b2"],["/tags/struts/index.html","5214a17c40a6dad919841cd2b45ddd5d"],["/tags/struts2/index.html","14973f638a2b721f614cd798ed06d809"],["/tags/tomcat/index.html","a8757b6c3b40012339e4ff04de454d2b"],["/tags/爬虫/index.html","cb5f9782eada655ead8593527fbe0153"],["/tags/爬虫框架/index.html","1e1d9bbf3abfa3b434ae04289036731e"],["/tags/百度云/index.html","ab35058cdcb6931b3070a3055f4d1ee6"],["/tags/高速下载/index.html","f7bc26fc2a9128ad391d0ad2427d71c1"],["/测试/index.html","9972f71df20a0ad92a31cb22e422d965"]];
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
