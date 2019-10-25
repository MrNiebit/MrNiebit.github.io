/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","e95ba121de42b8fe2874bb5bfa543a77"],["/2019/07/20/Spring入门学习/index.html","e867ce1d2e29cd5d5ccff29777a69521"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","c11e98d3992d23659e4c514ba71dd221"],["/2019/08/04/Struts2的执行流程分析/index.html","a1ecdd92a5311f3be40adb4b4096f213"],["/2019/08/17/Struts2的拦截器栈/index.html","9f612b84770655170e27de1c1a217f01"],["/2019/08/20/ognl表达式和值栈/index.html","ce25dea7beb9c18eec8192a5ff0056e4"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","f38fd92775f7b4c7b4b49ad957fd0fa3"],["/2019/09/01/Untitled/index.html","a1ab43eb4625ef1b1edcbf9003494271"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","57e5491d34989e1816af1f53e3217662"],["/2019/09/06/MybatisUtils工具类/index.html","a568adad068a1b68515b5820995450ae"],["/2019/09/06/Mybatis使用注解入门案例/index.html","9791a8b8509484b20ce6342d5edda328"],["/2019/09/11/Git笔记/index.html","7901a253d826dd46b518fcfc36aa0df2"],["/2019/09/11/MyBatis的动态SQL/index.html","a1cd13ec067dd5bc17c63cb60a415639"],["/2019/09/14/安装Docker/index.html","613700be465ea944f5302f2648365f22"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","52371052c46c2e78f896fb86fe9d02c7"],["/2019/09/21/linux服务器和tomcat部署/index.html","7d6e0808c8d530db5bcf11bea7529417"],["/2019/09/21/maven创建spring入门项目/index.html","11f629b3b8ff0cd7127bc2de04021a09"],["/2019/09/23/mybatis多对一、一对多查询/index.html","7bed69e0540118cd88e6606560fbb73f"],["/2019/10/08/Maven入门学习/index.html","6cc854fbb99bfb79bcc5c5e8be6db3c5"],["/2019/10/09/CentOS安装Dokcer/index.html","ba3ebd51f2e81026fd2c5d9aef3627b6"],["/2019/10/09/docker学习的入门/index.html","1ea55d1173bda1825a24e0e3364101f9"],["/2019/10/09/linux常用命令/index.html","3be903c8ec37ad57c8b46705dcb62e85"],["/2019/10/10/mybatis单表的嵌套查询/index.html","97afa43ad404eb2dfac9d00b1135c033"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","1f7bf63f2d2ad89f3a473f1616f58c5f"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","defee1d99ad3043210c495b0c422eee6"],["/2019/10/23/Untitled/index.html","16567e2592cedb8bf3cb33760d99d88f"],["/2019/10/23/docker安装mysql/index.html","664626f6b07f9f93c5f878eeb8ea5fc9"],["/2019/10/24/Spring的属性注入/index.html","464610309bc90146e476f663b957808f"],["/about/index.html","f64d644b9a1aeccb4233d0bde8e72784"],["/archives/2019/07/index.html","32005915598f1dd6931ec65a6ed961c2"],["/archives/2019/08/index.html","f4282b450a986591f780bdc46dde610d"],["/archives/2019/09/index.html","3c1197ed7cc76e95e0ec9927b1d192b2"],["/archives/2019/09/page/2/index.html","bca9f39a583b3b6bd1774e4ca2d33dbd"],["/archives/2019/10/index.html","f098a9de3954299ef8e418608bb2aa5b"],["/archives/2019/index.html","e4d69196c833c371c87b95d67522f3a5"],["/archives/2019/page/2/index.html","2923c2fcf3db143fb5211181dd54558b"],["/archives/2019/page/3/index.html","6d93937adec55eba67e8bbb5a99c32c0"],["/archives/index.html","58328eff26bb4916cce2276a812ae490"],["/archives/page/2/index.html","bcc4422155d32692af482ea92e8a5c40"],["/archives/page/3/index.html","90d8056e7f330eccef2a55bbe5645307"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","394eb5c4106dde82361f15c3b7700bfe"],["/categories/git/index.html","14654d6ef1d1dc52e2319f8d99bb5163"],["/categories/index.html","6422da6d426a223d7eb4a6d1b0369331"],["/categories/linux/index.html","8a116136d8fc007b76ebd6e610ce9504"],["/categories/linux/tomcat/index.html","bd16f50df02229bae162420f713a1aff"],["/categories/maven/index.html","04b0d382bb99a533fc2e9639f7a5f1aa"],["/categories/mybatis/index.html","8f316b14f06eff77e11481b686bc1919"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","c05feec2ebd13a8ed87b113f145bc955"],["/categories/spring/index.html","59b7967d2b73506a623c5fcf66b0d1f9"],["/categories/struts2/index.html","af2f71712e698dfd04d98ce2a39be890"],["/categories/框架/page/2/index.html","4864f40a56dd0d6fcecce4f4e3906dfe"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","11a456f6de9bd5ad2f97c60880a1d6ad"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/高速下载相关/index.html","6597548aaf35c5d6a2c0f251fae9934e"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/main.css","d6bf5853180dd62f186f6715d93dbfdc"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","aa37a02a2d496fd3f019246a61acb308"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","f7d52d1b3387db6176a8c8b6a203bfd9"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","72c2cdb2b9a85711db7333fc8f68c60a"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","5dff65d48c1e8bf5310d7b8f5c2f201b"],["/js/src/algolia-search.js","1439df5a210313359e094de32752a839"],["/js/src/bootstrap.js","ef69d1073f5ff78265df4568feae6768"],["/js/src/clipboard-use.js","d3eb0afa0f3e550f342913c1cb430831"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","e38d81be140025367d035c33399305fb"],["/js/src/exturl.js","bf626b362c064af62fc3e95f58fe0c83"],["/js/src/hook-duoshuo.js","23b1511f42442f2dfb5ff6366e886331"],["/js/src/instantclick.js","e93bbdd33a5256154c515c4cad8936ab"],["/js/src/js.cookie.js","03cd0ec11609d32c8312ca89c22522de"],["/js/src/motion.js","1e30dcd1f5389a3fef066b010e1e3156"],["/js/src/post-details.js","09ed2f85618dd5002660fce03f6c695f"],["/js/src/schemes/pisces.js","958f527b8f06470d6532659ecc1b19c7"],["/js/src/scroll-cookie.js","b07c5261251b2f8ec5e35ffd05934401"],["/js/src/scrollspy.js","8d9dd6260fa52d88fd1fe88d3264ae14"],["/js/src/utils.js","7725bf0915423fc76921228fbf223a13"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","6c81f041241958be718b75bfc089969d"],["/lib/Han/dist/han.js","bfda3d9db23d9a6b86d80b04ca36045c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","9e9c81836247d46b36e96ed768d64fd7"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","4ae5fe624e632c6322fa3f43e99a57a7"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4246196ef1ed548fa41270f04319ab44"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c7d31d7adc33501fb169a165bffd82f2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ec48d7986961d354f5027d7ea2c22156"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","1ba989a901560088421fcc75eaccd486"],["/lib/fancybox/source/jquery.fancybox.css","3ef822129c367907b1c3407721e932bb"],["/lib/fancybox/source/jquery.fancybox.js","8a2e432ef0fc00b9a0eeee583ad085b0"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","31d7935679622a1afe1f0813886069b0"],["/lib/fastclick/lib/fastclick.js","a6e2b452f668c18692a1892d5f0906b7"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","ffb905751627626a3480c472b366f203"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","3c8a58e2dcc0094659e5f396421db9ef"],["/lib/jquery_lazyload/README.html","3ddd144d65e3f83846c176b24f8b14b2"],["/lib/jquery_lazyload/jquery.lazyload.js","211639cc86e0949df55291814cdc00f6"],["/lib/jquery_lazyload/jquery.scrollstop.js","634d936f740fb1db49a1375ee0de1988"],["/lib/needsharebutton/font-embedded.css","571b47cf8134d375e370fe9a9650c3cd"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","4bd9ec96f29d2ccc048b9bedf1cf2d4d"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","9d3c3e4bbd49cf413efa4c00281313be"],["/lib/velocity/velocity.js","b132127592793f6a06440b8165dec857"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","42730c410713b347a0e74a653fd41e60"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","97bc0e45989aab9e2c9dbdae393a3120"],["/page/3/index.html","01ebe89f14ab92686adb229348678e3d"],["/static/api/css/imgshare.css","90f36a63123af27b3930cb54064844bb"],["/static/api/css/like.css","47f0a458f8b854f22adb2fa3da25acce"],["/static/api/css/select_share.css","a8582cc94524a583d9c0577e370e72c8"],["/static/api/css/share_popup.css","0cc11330a558d452b238ec995ebf2d23"],["/static/api/css/share_style0_16.css","eef3d264edb6cb27f4af8404b5b492a0"],["/static/api/css/share_style0_24.css","07eee31e052b3b9a1e262915ce208525"],["/static/api/css/share_style0_32.css","6e7cbece6e88ae644404277b1641f9f3"],["/static/api/css/share_style1_16.css","9e2ef5fea162adfb7ac40b117888a970"],["/static/api/css/share_style1_24.css","a69feb6fadb3344de074c2fdee276ee7"],["/static/api/css/share_style1_32.css","d16299cef6d4595ca7edd9169bf81a1a"],["/static/api/css/share_style2.css","3393c3e8ff26b55e19b21211a9b2c402"],["/static/api/css/share_style2_16.css","088cbbd9e2e322d6d95325046ffdee02"],["/static/api/css/share_style2_24.css","ef33ac9d3106d2dfba11efc7950c8dfe"],["/static/api/css/share_style2_32.css","3c5c2271d4cc78134e6bd6e60238446a"],["/static/api/css/share_style4.css","8ece836cf4facb2c6b43467380c585de"],["/static/api/css/slide_share.css","5ead175e3f72868f477f547ea7858622"],["/static/api/css/weixin_popup.css","78a1ded749c57594e5afe9a531b0b260"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","350da826d1036b61870d710c72b14229"],["/static/api/js/base/tangram.js","4eb524fc83a13eea280f69d62402bebd"],["/static/api/js/component/animate.js","98ed5a78e0d9d1048af3e39f3985f37b"],["/static/api/js/component/anticheat.js","f455c9f59a743d684d6a6d10b452603d"],["/static/api/js/component/comm_tools.js","0bff19932f31c2a5650c37f0c9f40b6c"],["/static/api/js/component/partners.js","b9cbfc38d60c9ddf33c5e2d013ccf9a9"],["/static/api/js/component/pop_base.js","eef279e74f39629972e33fea4a538265"],["/static/api/js/component/pop_dialog.js","ba07e427bfc787abde6b9913a4ecfab4"],["/static/api/js/component/pop_popup.js","2f23794e4a6cc758bfbca54c77f9457e"],["/static/api/js/component/pop_popup_slide.js","e3ed08bdbd711d02c87b87637040edba"],["/static/api/js/component/qrcode.js","2583c3646a0f87da7846fbbe5fae2f91"],["/static/api/js/conf/const.js","ca6b6bb7217288420b8204a69be03a1f"],["/static/api/js/conf/define.js","be16aa1350e164d90dd621a271fe98eb"],["/static/api/js/share.js","b401bcca556d6ceec7224b710f5efb89"],["/static/api/js/share/api_base.js","9adb962e1f6c8ce44d4102f08bb9b8f6"],["/static/api/js/share/combine_api.js","fa33f9157adf4f211c5bc8928e94d841"],["/static/api/js/share/image_api.js","49f6208bca085fcdf6760255cb144ebc"],["/static/api/js/share/like_api.js","16dea543c118a351c51f7f6bda514b31"],["/static/api/js/share/likeshare.js","99a698ce38739ee38f8a81ef79e30cd2"],["/static/api/js/share/select_api.js","adf07725f02a3811309e94adca478a6a"],["/static/api/js/share/share_api.js","0958f70a1bd5af33e1b0b2e5dd87e001"],["/static/api/js/share/slide_api.js","f832f7553d33432fe3cd00466dac57e0"],["/static/api/js/start/router.js","5b2ddad49e2057d0a6249eff1233afe1"],["/static/api/js/trans/data.js","99a698ce38739ee38f8a81ef79e30cd2"],["/static/api/js/trans/logger.js","99a698ce38739ee38f8a81ef79e30cd2"],["/static/api/js/trans/trans.js","94bb757688d1a75c6a25008b783624b4"],["/static/api/js/trans/trans_bdxc.js","e4666340ce1580e0580fedd4e813ff5c"],["/static/api/js/trans/trans_bdysc.js","d193e4a0dcbc5b82caf036535e6b12c0"],["/static/api/js/trans/trans_weixin.js","0a08731cf2645cec769a423f56f011b7"],["/static/api/js/view/image_view.js","04cced55089b02fa236a7927e180b960"],["/static/api/js/view/like_view.js","b0c5332472c19de3c5d79e2b74316aec"],["/static/api/js/view/select_view.js","ecbee54e7a7ec6a4e82e7d7366ce4138"],["/static/api/js/view/share_view.js","cf1cf1787b7c3f0fce1045353bd49133"],["/static/api/js/view/slide_view.js","272687584dd94b2644b64919053f9f05"],["/static/api/js/view/view_base.js","32dac479c1635b25e5d5782affda4711"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","a1a72be94db039fce678d3c553eacce6"],["/tags/Spring/index.html","000e81d047801d13aa2e235f5a1ba44f"],["/tags/docker/index.html","d75b8dd4d1c20c904f8fa2c97ed5ea93"],["/tags/git/index.html","ca3705c29235ab99112f094724cbd02a"],["/tags/index.html","144bf0502d34ddc2855c52c21aa8ae43"],["/tags/java/index.html","0f6caa81fe2243571b7eb1f7646e075e"],["/tags/linux/index.html","b3175e8bd947329030654eba688713d2"],["/tags/maven/index.html","ffab3a34dcfb66adbed97cfa8ed2d762"],["/tags/mybatis/index.html","598d311229e7c0178310e66b2e5e1d1b"],["/tags/mysql/index.html","30a95846f15b8af9d1df330391ecc6a1"],["/tags/scrapy/index.html","41161483001b08cb99600c0d6eacafd5"],["/tags/spring/index.html","c10d5d342855e3de088b28f7ae01b9f7"],["/tags/struts/index.html","768e43a3ce9f2af9fa3a2ef6c8a106f9"],["/tags/struts2/index.html","427d4de91d3ce36f8bc8140ab0f88613"],["/tags/tomcat/index.html","94a9ed053ba0f0cfe78cc53db8d58d8c"],["/tags/爬虫/index.html","786c3c7f1b43ee8f75ec56d3ac113dbe"],["/tags/百度云/index.html","6344342111d6751d6aedf07354ebeb73"],["/tags/高速下载/index.html","c7e86c4ad3cc82648ca26a65239fddd4"],["/测试/index.html","3eec615143ba207e0e57b6a9f4aca852"]];
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
