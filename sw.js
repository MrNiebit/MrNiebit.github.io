/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","f3ec27dfff551a95f36edbad27d783bc"],["/2019/07/20/Spring入门学习/index.html","97dfde56f294e8607b32af94e7b2462f"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","e4dbcc5672fd8abf3f5c59b382d91856"],["/2019/08/04/Struts2的执行流程分析/index.html","9dabb5bac2b079d903ff0791f9dcf235"],["/2019/08/17/Struts2的拦截器栈/index.html","92121c2b1d653d11b88a181748b2385e"],["/2019/08/20/ognl表达式和值栈/index.html","e62a7548fbc76a279c9d7121455ed00a"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","a3869e1a418cbf95f6d4d16b621bd03e"],["/2019/09/01/Untitled/index.html","a71142c6a1886c0574c3181d1592f7ad"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","9113a5f5be0cfbc191092a09504211ba"],["/2019/09/06/MybatisUtils工具类/index.html","d8ad76ba1b4647463e42d8290f7aacc4"],["/2019/09/06/Mybatis使用注解入门案例/index.html","9e8def927c6a20af0e9186054800f39a"],["/2019/09/11/Git笔记/index.html","c82ef2cd9353d14f011f22058920c5b5"],["/2019/09/11/MyBatis的动态SQL/index.html","587ad88c3bea116691a83255f162af4c"],["/2019/09/14/安装Docker/index.html","5f800e3e296419fcae12ecb041003518"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","88510ba69bb683e17a9bb3a97ba4c465"],["/2019/09/21/linux服务器和tomcat部署/index.html","08fd8b07391fcdcda4b245d2600b65fb"],["/2019/09/21/maven创建spring入门项目/index.html","9818091712e298927892b844ebfbcce3"],["/2019/09/23/mybatis多对一、一对多查询/index.html","0ae370c4f195dca87eca137e3d13d50c"],["/2019/10/08/Maven入门学习/index.html","22ce2be0d6d429b3076d5f4641d8cf87"],["/2019/10/09/CentOS安装Dokcer/index.html","1ef474a2e25a6899f454035667488556"],["/2019/10/09/docker学习的入门/index.html","e7a8d4b80595de29bf575190624e0ea8"],["/2019/10/09/linux常用命令/index.html","85341cf7ab681f1e850e792c0b23958f"],["/about/index.html","5f18eb5dd4bc32af58362baf0b070c2e"],["/archives/2019/07/index.html","bd48de3ac5e95c3d13e9d3f5ec12a303"],["/archives/2019/08/index.html","7a4882b28f4e25d6becde3304820473f"],["/archives/2019/09/index.html","a333aa8a1c0413f960a290c6d80c35b1"],["/archives/2019/09/page/2/index.html","e7d2fcd4325576ff619e88ffd35bb544"],["/archives/2019/10/index.html","fc199bffbd69cd8739f58ff31252c62c"],["/archives/2019/index.html","a9f0a69fba74b4585ef568ad0297647a"],["/archives/2019/page/2/index.html","e63e35966df57a86a72c5b49597ee03b"],["/archives/2019/page/3/index.html","0e00b5aabddd489a860c011adceba007"],["/archives/index.html","3af2f9be1ecf4a56d9db4fa7caaadd68"],["/archives/page/2/index.html","7c40f8994378396fb464e34c6797babe"],["/archives/page/3/index.html","14eee9ae32ed2c5b70c0ef14435f8f5e"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","614775f787f5ebc217d450cb2b696042"],["/categories/git/index.html","b24810a90425f7a115dc0e020923817e"],["/categories/index.html","166d81ee0fab898e4bb8774bde7ba3e2"],["/categories/linux/index.html","ee1083f5e76f763765ba4efbb7dbeff5"],["/categories/maven/index.html","8e8bb96c2e42c4d382a531cbdfff3a86"],["/categories/mybatis/index.html","3d649590e0578de4712d310b1d77c632"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","672f0728e5fe903c6d19f590ca5f2e08"],["/categories/框架/index.html","a5459480cf2597b9eafbc9b38444edd5"],["/categories/框架/page/2/index.html","0772ba80c0a57467c77eed30f4030bb8"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","34d8b443aa7388a1316016e1ab8873de"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/main.css","04d3d5a53446b5fa49b9be19d57a4b8e"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","cdc39e86b084f413827b6aba8bef432c"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","a8222b439506c0346849afc8d8285f64"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","54f2b7f0bb4e6bc75db1d588fc4236f6"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","c5036bd01628386dc1154fbb1096ee6a"],["/js/src/algolia-search.js","92fd5a479472bd8628742a8c3675828d"],["/js/src/bootstrap.js","472e31007993b796ca2f4a3789847108"],["/js/src/clipboard-use.js","1b1bc068355bbef2841e1bbf2d346695"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","b241cd11970e2995c863ec9f316482b9"],["/js/src/exturl.js","4150b548e92c9d993b2b8299a0a580d1"],["/js/src/hook-duoshuo.js","4cbdcf19ee51cef04d14b374536f3d5f"],["/js/src/instantclick.js","cc9b966509b93be2c6c8fa878a736821"],["/js/src/js.cookie.js","fd33be922f1cfa897d900e87fbf369eb"],["/js/src/motion.js","0718b70e7863148232e7083833fa963d"],["/js/src/post-details.js","2edf48235b093337c2e8814cb6647802"],["/js/src/schemes/pisces.js","635b375be111c1059d7d080b1ebb335d"],["/js/src/scroll-cookie.js","2936bf71ec01a95be5f5538380fc5a9f"],["/js/src/scrollspy.js","83e32b64be16d392e7f0bd3530d8f8cb"],["/js/src/utils.js","aa3482f6d05df53f8d796f91b4c72aee"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","e8cf3d782ddac061ff33ed7e35be7c94"],["/lib/Han/dist/han.js","4f4af6e88cfa9f247ab8133b18ee0298"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3e8ac9e6dd97145a2f39a36d873ea1a1"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","601531b62730d8187380b84d5bedca09"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","0cb2c4267079bab9987c3448889e9104"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b6da2b762fb0309962a389d1308218e6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","440ef438bc6ac365c18e209fea380280"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","59bf98304f7752e12fd5331693a411d7"],["/lib/fancybox/source/jquery.fancybox.css","c3ea323836d73e605601e99a4ee6a204"],["/lib/fancybox/source/jquery.fancybox.js","03195d3a1dd2b924c559d4567ea5145c"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","fcefc6c1a6005e40b8b8bfa67f349103"],["/lib/fastclick/lib/fastclick.js","2361bf4a0c7eae95ff9a8169e4247202"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","5066c36f5a0c4ef558ac7bc2eff59324"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","3dbe38fd6ff6b838a60ec5090d3a624c"],["/lib/jquery_lazyload/README.html","25161c89fd27df179a37b498e7737531"],["/lib/jquery_lazyload/jquery.lazyload.js","f124c5279c2faa74a8a2d1e45d9422aa"],["/lib/jquery_lazyload/jquery.scrollstop.js","319630aee43ead74177778d895af3f07"],["/lib/needsharebutton/font-embedded.css","843648701fe596d0debb6fd7062a748b"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","65fa686637c0f37f52b17c11542fee70"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","fda27078c1e9f863e37249c1ec3263d3"],["/lib/velocity/velocity.js","5ba99152a47d5f4eea298c7f766c62f1"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","7df404f06afaa816cfe8b3692476cf90"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","ac0e10631570ec9589127e00e55983c5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","0c745c85f5e5edc4da805d06e8effedd"],["/live2d-widget/demo/demo1.html","2301c4d15829a79d4f7408423a931fb8"],["/live2d-widget/demo/demo2.html","4150e5d94565ccce306bf368211091fc"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","8529a0d3c9f5aceea623ad2267d95f99"],["/page/2/index.html","4bea9abc4478fa46e19389c7a6cd988f"],["/page/3/index.html","3eda35268fbb09304eef4ca16b2b1d0e"],["/static/api/css/imgshare.css","6bf7f00565b12d2259b5671df92f1db4"],["/static/api/css/like.css","7d88c6c358297192c0d7b554d638de90"],["/static/api/css/select_share.css","faf78a98b50777e2d7681f64b7ff5047"],["/static/api/css/share_popup.css","aa303140be1228e9648cedb02934ffb6"],["/static/api/css/share_style0_16.css","d23ff21db183100679affd7e47685498"],["/static/api/css/share_style0_24.css","3db24494e2df88c8b0248c9f3c976d02"],["/static/api/css/share_style0_32.css","8042aa027138ec84f129c9a164827123"],["/static/api/css/share_style1_16.css","e19376293f640278950ebe5847baa993"],["/static/api/css/share_style1_24.css","41a9778993241e988590fb874a31adfd"],["/static/api/css/share_style1_32.css","94d0b05d2dc4b7c0da37486bce31c803"],["/static/api/css/share_style2.css","8a2c33d5999918012b7111d46a07f9cd"],["/static/api/css/share_style2_16.css","36f0900b7186edc7576f7d97ffa192e9"],["/static/api/css/share_style2_24.css","5bc7192b3e6700599a4f2692374e3f8c"],["/static/api/css/share_style2_32.css","a7928a47f3e8f5aacf594965bb8338df"],["/static/api/css/share_style4.css","ebe4b3a516771e50b6e7c39509419c63"],["/static/api/css/slide_share.css","5613691f2548f3fede1f3f9dc4d95d2c"],["/static/api/css/weixin_popup.css","73a0ac7600ac905c22420cbf35653d1a"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","3e641b331cd4616327b066b8a86c56d6"],["/static/api/js/base/tangram.js","bd5fbb86f777edcb862ed17606f3c70d"],["/static/api/js/component/animate.js","7ea3459b2646936be6faabfd6a2a2da9"],["/static/api/js/component/anticheat.js","a05c4a8aee9f8218470f33998e19716f"],["/static/api/js/component/comm_tools.js","fafcfd8df1f5756cf735365fe93c49de"],["/static/api/js/component/partners.js","a62dc174567c4febac304f8118ecb7bf"],["/static/api/js/component/pop_base.js","959e50bf8a44d965def2508dd81ba28a"],["/static/api/js/component/pop_dialog.js","ae50307614c15221325519e49fa89472"],["/static/api/js/component/pop_popup.js","35be1795561b4e86ca09dd38f7a634bd"],["/static/api/js/component/pop_popup_slide.js","13bc1e9ad0e7526786b1a07771b08a9d"],["/static/api/js/component/qrcode.js","4a390b5eea99e31f756d0205f5b5dd57"],["/static/api/js/conf/const.js","5e32bc3f572b776b525939bb73310613"],["/static/api/js/conf/define.js","8257bd54ee3cb30b2adcb9a29436e14a"],["/static/api/js/share.js","5e6e3db431b0e672a8e1d2f3c82e52dd"],["/static/api/js/share/api_base.js","e6898fe3778ee6644c6c54e43d3e30eb"],["/static/api/js/share/combine_api.js","b4695783b8daaa26e25167e7a86f57a9"],["/static/api/js/share/image_api.js","75cf0ca4a52ebcd970531ce59ab706c8"],["/static/api/js/share/like_api.js","6ca3ca5184ca7bf386e8d8c42ff36266"],["/static/api/js/share/likeshare.js","778236a05275c37dd1a9806a5887373e"],["/static/api/js/share/select_api.js","78a95bd902dfba159154bd7a5a4d0045"],["/static/api/js/share/share_api.js","fb00a5cab3229be14619eb6f81bc4ec4"],["/static/api/js/share/slide_api.js","f1a1dcc3c2831493acbc9afad84a6199"],["/static/api/js/start/router.js","84ce14e577d49ad76e14192120c5399a"],["/static/api/js/trans/data.js","aff8a39abe5adc59b6710f89029851ee"],["/static/api/js/trans/logger.js","778236a05275c37dd1a9806a5887373e"],["/static/api/js/trans/trans.js","ab1eac03010d25e8f758d949237aba1e"],["/static/api/js/trans/trans_bdxc.js","3acb4fe160d7f293ee65b54061421c81"],["/static/api/js/trans/trans_bdysc.js","cc8272ad453e31a021e54c86907c3d1b"],["/static/api/js/trans/trans_weixin.js","4bfab66b34f0052481920d8e2a8f2ab9"],["/static/api/js/view/image_view.js","b64704bf590f1770d1ea3cbef8e3b53e"],["/static/api/js/view/like_view.js","c09d703ac666adaf98e7c8a09da502a4"],["/static/api/js/view/select_view.js","d6488e499fdbcc780b9407edd2ea1a44"],["/static/api/js/view/share_view.js","3f18efcaac7103e5f068bdc5234c2721"],["/static/api/js/view/slide_view.js","4699b3e6ed47ee548b450de607f55114"],["/static/api/js/view/view_base.js","bcab1bab45459ba8ecfa0f26bfc22deb"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","ee481aedd52dca295f80243589b4f559"],["/tags/Spring/index.html","3b33d24cc5eae54e88b1dc2630a6d31c"],["/tags/docker/index.html","d157de4b5cebe5a2a650fd6e15fefea8"],["/tags/git/index.html","2d5a50fc2ec7ef0ad3b3d7333ffc417e"],["/tags/index.html","d5fd4073cc09131c8da3daba1515cc73"],["/tags/java/index.html","e7bce0b0803c16fd1dc6cf7a2bf1ea87"],["/tags/linux/index.html","5ca1164e61a2f974722aad86dea3adfb"],["/tags/maven/index.html","30fb4da1a3c0b795215a137573112858"],["/tags/mybatis/index.html","576b927f0fdb2de8a2ca1a5fc3810434"],["/tags/mysql/index.html","61c60635986516df855fe993d40e1b32"],["/tags/scrapy/index.html","0bef408db207701d0b344d1e084bbafb"],["/tags/spring/index.html","8a11a91a3b345f89807433c02a0180e2"],["/tags/struts/index.html","8180ad05a16162cace77a083d6eb418c"],["/tags/struts2/index.html","dbfa0ce0b0002f7420a2e062ac6088e5"],["/tags/tomcat/index.html","a798c68394e530ba309d0e24d006cfe8"],["/tags/爬虫/index.html","87c5f3ba9d4ea0ae52e0d4a6c6b18228"],["/tags/爬虫框架/index.html","8494ff588a6bc6238c23f1d35af53ed2"],["/测试/index.html","afe66e2e4880954629d32658565c43e9"]];
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
