/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","54709fe6d1235638885c575573b49c10"],["/2019/07/20/Spring入门学习/index.html","813d665c0459a1aabd2e05406b33cf22"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","58deb96e50e69e78ebec809eac165fb9"],["/2019/08/04/Struts2的执行流程分析/index.html","acb6d39c8908094eccf91eb3b4cdc299"],["/2019/08/17/Struts2的拦截器栈/index.html","906f6a797aa263f090f6245a399ae414"],["/2019/08/20/ognl表达式和值栈/index.html","d5397d6d79bf826fa2d37dda0cee9ed0"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","73b3df31c7a084532a4571ac704f1ba2"],["/2019/09/01/Untitled/index.html","a1ab43eb4625ef1b1edcbf9003494271"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","3b771080b9ca3f5650d9543b8e40cbd2"],["/2019/09/06/MybatisUtils工具类/index.html","812c84729c8c1efb4ed660a459828b64"],["/2019/09/06/Mybatis使用注解入门案例/index.html","4a032d6a0f7a0875f5a7e6ea5d56bb26"],["/2019/09/11/Git笔记/index.html","f4d3f26ac747165974afa3923fb3550a"],["/2019/09/11/MyBatis的动态SQL/index.html","cbbf2e35f1e6ac63c3941cd66a1a7aa0"],["/2019/09/14/安装Docker/index.html","5bdcca33c93fbc3c9ba72f2df051e8ae"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","dee22185fa85de60ab37f242abcbc532"],["/2019/09/21/linux服务器和tomcat部署/index.html","a652f0524b988aa37534bf0e3d6f8bd9"],["/2019/09/21/maven创建spring入门项目/index.html","11bcce56c56bee440cfdfb06d7b10d72"],["/2019/09/23/mybatis多对一、一对多查询/index.html","ab07f31b6e5f45f60c981543c21a038b"],["/2019/10/08/Maven入门学习/index.html","b018b5992a6e31b6bb3e089def2917d9"],["/2019/10/09/CentOS安装Dokcer/index.html","4c8c340f8d4f938f231eb133ec2d09f8"],["/2019/10/09/docker学习的入门/index.html","1a88f69400eafe0a243b2e546c8c3308"],["/2019/10/09/linux常用命令/index.html","81c97009b587d27f0f323579483e0f25"],["/2019/10/10/mybatis单表的嵌套查询/index.html","004dc917ca524eefe3a5c35c2f449238"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","b4358bdf43d21835c2539da59719dff1"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","52d23a5a33acb2a204282321abaff66a"],["/2019/10/23/docker安装mysql/index.html","aa238c7ce1efc983672726949454923d"],["/2019/10/24/Spring的属性注入/index.html","96ddf538631737d395dfce7d94439929"],["/2019/10/25/模拟电梯系统（java）/index.html","f6b12f2dd4c52ad851a7de275d25cc02"],["/2019/10/26/Docker学习之二/index.html","2f1b1d67d2f7d46e69fe3346946cf718"],["/2019/10/28/Oracle数据库例题/index.html","d4a0833e64375f74818ab5821104c122"],["/2019/10/28/linux端口映射工具/index.html","4465fd9daa5869ee56e3aef3584146ad"],["/2019/10/29/Untitled/index.html","7e013c08677b5a7b7361ec82a7677452"],["/2019/10/31/Spring-AOP学习之（二）/index.html","fc93d8fd52e6bb0c9d676c3f1bd20f40"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","7de6c0affa32b41f8935020bf5f2ab0f"],["/about/index.html","3ed06db0e6420c8c7b8693351e1ecf2c"],["/archives/2019/07/index.html","2b189bada431625444109812f4368c5b"],["/archives/2019/08/index.html","745b0fddeee1ff5e75e2c1be384ba402"],["/archives/2019/09/index.html","ee70d2552035da258047a533ab5a8b78"],["/archives/2019/09/page/2/index.html","bca9f39a583b3b6bd1774e4ca2d33dbd"],["/archives/2019/10/index.html","df2ff1ee6fa97e0380e0720921a0c4c5"],["/archives/2019/10/page/2/index.html","d9a1ef2fb1a7b196c2ed9e0f5a842fb1"],["/archives/2019/index.html","b74eeb6637f0b40805046953da02f7b8"],["/archives/2019/page/2/index.html","03ff37b3722e747efe936d977d60fa29"],["/archives/2019/page/3/index.html","49959a7dbe2baadac65bbe4cac1d64f8"],["/archives/2019/page/4/index.html","ab1b54e3fc9f0591e1a3af6a382e80fe"],["/archives/index.html","67dde8ff799d938b394a6e6c306114bf"],["/archives/page/2/index.html","9981615fd21880946c4fab94889b812f"],["/archives/page/3/index.html","687bf541536088416b429f0a3b7701ad"],["/archives/page/4/index.html","d52c9b691f7572ca0d7f9441bd57e21f"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","c97823768aecd8d5f8bb693c352afdc1"],["/categories/git/index.html","3d29aa83b33b94fa9ab3bb2b5ac1d904"],["/categories/index.html","3f6e24fd2aa141b882b84767c6e2f2bd"],["/categories/java基础/index.html","89f7aef78278799901c99e1b7b4cccb8"],["/categories/linux/index.html","d2b80fe0285c2fd427f20de5f61adb53"],["/categories/linux/tomcat/index.html","10f17657e4768b66ed57bfff2a319617"],["/categories/maven/index.html","ea889488493a9cfafd143d4e314cd652"],["/categories/mybatis/index.html","519c48d1fcb9a3df6ad4b7de2e0fdb98"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","4b3c38d7f9d6399789844b7920cbea8f"],["/categories/oracle/index.html","33aebaac8b6f7e879de9e223f23f0ef1"],["/categories/spring/index.html","e2c8f8c5ad4160473a1fa84633efadce"],["/categories/struts2/index.html","0d24ae15f4b1b8c9bed72452c041ee08"],["/categories/框架/page/2/index.html","4864f40a56dd0d6fcecce4f4e3906dfe"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","c289e6091737f470ffd81da8424120fd"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/高速下载相关/index.html","ce8eebced803b776aed9a653a475c09d"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/jitang.css","4f99bec0150d69ff8728565f9b057935"],["/css/main.css","2efe8596876cc990bb9efb93e9b651a6"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","40e0ca9a1c104efb9c6ef588803e82e9"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","9b17db47f591e40eedbcafe46db827b2"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","e6e71162109b8455bd3381ee948c50c5"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","bb1411cb61d3f929a744330775ca6c53"],["/js/src/algolia-search.js","80bcd2859f8610db043a5de1ce6255b4"],["/js/src/bootstrap.js","5b92a01b6ad71180a624e6b188f00a6c"],["/js/src/clipboard-use.js","d2060e15666a00c8121c2a407ef94c1d"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","5d6f49a39c200396484526924b8206c4"],["/js/src/exturl.js","315b35de1122c5a448cdd52562fca04e"],["/js/src/hook-duoshuo.js","8fa8929083acc76c311068cbdf944e47"],["/js/src/instantclick.js","4055954a8cab3a57e7494eb6fffe4ffd"],["/js/src/jitang.js","9a0cfd6434de63ad5e26f123e13089a5"],["/js/src/js.cookie.js","921cb87684bccc0fa766ded849638d71"],["/js/src/motion.js","99a41582ea660121ffed0be5350e41f2"],["/js/src/post-details.js","d681c4b75427b403eeed6d87ac5fc586"],["/js/src/schemes/pisces.js","8c71c7eb83c2591f19abdf0d961011fd"],["/js/src/scroll-cookie.js","60b797582325bda1b45b4cc1d55ea644"],["/js/src/scrollspy.js","88b13f3aedaf05cc26b87c021a7a89c2"],["/js/src/utils.js","1695a706eddd83474a955b8f8aa57ab5"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","77c2ee9e22b6181f463496c0fd46da03"],["/lib/Han/dist/han.js","a1283af0092c0e573d1383b74cfbe16a"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","d727c963faf3ae0db54b3cc7ec8f5ffa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d4530d7f78ef0a9115d0d1da4a905e2a"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","93c41e34044be5d46154db18e99c5e6b"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","e2bdecabd9d4c899d0addae6df115719"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","7df663dc9e9bdcd40651c3337ae6abff"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","886b47c8b479614c2cbe3a3be8ce4f26"],["/lib/fancybox/source/jquery.fancybox.css","fe0888bbba3955e88d80be5c9b73b903"],["/lib/fancybox/source/jquery.fancybox.js","1a3522cf77da1faaf37bab4ec4360511"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","28e33821488c49007a55d26101e79dc6"],["/lib/fastclick/lib/fastclick.js","c09c249127e2fb8a87728045e082004a"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bc6336a5abba90a633c027d37fb3b94e"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c2491daec56804050cff785e508857a0"],["/lib/jquery_lazyload/README.html","edf9663c8cf8cd9e46d5d1dd0b5560ee"],["/lib/jquery_lazyload/jquery.lazyload.js","eb7458a4d09896ba03d6addea8b84552"],["/lib/jquery_lazyload/jquery.scrollstop.js","01a9620e485cf49c139d0c8a60abbe84"],["/lib/needsharebutton/font-embedded.css","325b365ccfd2e2c465d0f1937116c76e"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","cc6bfec0ec4021df46bca20f5c23edce"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","23c8da7b844ad1e79e14fccb4bd87ea8"],["/lib/velocity/velocity.js","2371cfd742c6c2e6e0476f4d15f86bf9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e267fa70ec08b8250962e0d598a2ac34"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","7e2a7dfe44425b42a22f12155631b618"],["/page/3/index.html","d9c1fab87483f44e95c5fb8357fc8a5c"],["/page/4/index.html","83c03c24b37786e1361a96156e7ebfe6"],["/static/api/css/imgshare.css","e83cd988bf9cba81d25106dbd4d5769d"],["/static/api/css/like.css","6a5feb856d68613e8f3495e0f476bb89"],["/static/api/css/select_share.css","70fe432b014823983455c09f13b7a560"],["/static/api/css/share_popup.css","a7c0c514904aa57aff849dfe636fc15e"],["/static/api/css/share_style0_16.css","91bc1db8b7b0d44fdb0a5fbb7a81a31c"],["/static/api/css/share_style0_24.css","d353352009ae09478c3bfee2bcd709c3"],["/static/api/css/share_style0_32.css","00673664e4421c70b00946a5e58d4e3f"],["/static/api/css/share_style1_16.css","0622224584fcf9b66821892cf04a9c32"],["/static/api/css/share_style1_24.css","2651585b1980b9d8ed5008e2aad4ab65"],["/static/api/css/share_style1_32.css","a73d2652b8e5a51e6c250c8553a1d124"],["/static/api/css/share_style2.css","907dfc9b945234771cb67763c00b841f"],["/static/api/css/share_style2_16.css","b258703b2789bfb8172b42c21e5c1510"],["/static/api/css/share_style2_24.css","2456c1f8272e6c3f157db3b91e00c5ca"],["/static/api/css/share_style2_32.css","f6bc3e80c6fa01653d001eb5f26e1b47"],["/static/api/css/share_style4.css","68dab86321d83493b8fea562c909b47a"],["/static/api/css/slide_share.css","3dce8494a8cdbb8e0486692cc9a50f49"],["/static/api/css/weixin_popup.css","af5cda6bc0e3e9248ccc7682e5435dc8"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","d85473bae7d9f89ea14c2a3a0dc40aa0"],["/static/api/js/base/tangram.js","ab3b31a2b2b17bc867acda57e7e2530d"],["/static/api/js/component/animate.js","36c0ce6ab491c28484b3b15ee6034c3e"],["/static/api/js/component/anticheat.js","1a49cf47b9be82e160d98e8cbb282434"],["/static/api/js/component/comm_tools.js","30adc3d7f053cba402c626d62018839b"],["/static/api/js/component/partners.js","044ae09cf41a4df95ce6becadcae21d5"],["/static/api/js/component/pop_base.js","55b6ea24352723e68f680e6b70bee4f4"],["/static/api/js/component/pop_dialog.js","18997f95b780a5d570d047e4d314f4e9"],["/static/api/js/component/pop_popup.js","5d6c267be3ac3e07609a8cc8c19a7d2b"],["/static/api/js/component/pop_popup_slide.js","6ca620c413e61f99a547391642e0238c"],["/static/api/js/component/qrcode.js","35afb557616f129cee5c0075456b91c8"],["/static/api/js/conf/const.js","c7b3680a3034b2149df136bec89bf81e"],["/static/api/js/conf/define.js","fdcd0d575ac3101a550effcaf7c73d71"],["/static/api/js/share.js","89d7d458b403963f4f8f6ca3f3fdef71"],["/static/api/js/share/api_base.js","3d9d27bd68e2677f8d5e9dc911934e62"],["/static/api/js/share/combine_api.js","addd3ecd8777e9aad7089ab811b79f43"],["/static/api/js/share/image_api.js","fb9050c172566433872e1ea3031d94f2"],["/static/api/js/share/like_api.js","0d558c623016d024bfe59ca87b9b86af"],["/static/api/js/share/likeshare.js","8f51d8c3bf8b9af0215bcc125cdec48f"],["/static/api/js/share/select_api.js","a4d51066ad4980d91d3cdc7640712b62"],["/static/api/js/share/share_api.js","6091397392cf4f54c637f4b6f7d34870"],["/static/api/js/share/slide_api.js","a0f412430ba613e5dbe5a5f1e692201e"],["/static/api/js/start/router.js","bed2419e781dd112b46a13170d2c9dde"],["/static/api/js/trans/data.js","8f51d8c3bf8b9af0215bcc125cdec48f"],["/static/api/js/trans/logger.js","8f51d8c3bf8b9af0215bcc125cdec48f"],["/static/api/js/trans/trans.js","e93154f757381fd01e43392be68880f9"],["/static/api/js/trans/trans_bdxc.js","e37c58b39db26dda56cc7358620f8957"],["/static/api/js/trans/trans_bdysc.js","82f9213baa0ccd6b33d25b194669b914"],["/static/api/js/trans/trans_weixin.js","4839d9c6e3b3db592b8b27921b3d288f"],["/static/api/js/view/image_view.js","524f86d4f3a479e134b29eed9507f9ea"],["/static/api/js/view/like_view.js","20dd284ab3d3b5a3ecbe539774409cf8"],["/static/api/js/view/select_view.js","0f29a3134c2c944ec7512d9380dd8a63"],["/static/api/js/view/share_view.js","e8a270b244b75d3e6e6a9351f2ea184c"],["/static/api/js/view/slide_view.js","ffd02055bb94f81e9198aa34da1b9e81"],["/static/api/js/view/view_base.js","134e393287511e023db10cd33b163777"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","2d1f8bca5d0ac76df5c0f1a70993d701"],["/tags/docker/index.html","97a74e879c27c9753d49cb7bb8425f3f"],["/tags/git/index.html","b9da776a1873ede1620d87804e76b71d"],["/tags/index.html","ba5dff03c9229ea3791370681e0a73c3"],["/tags/java/index.html","a7b15461ee8632b1d4fc9c05392dad57"],["/tags/linux/index.html","50d3646e1a4f90210a7407daf7b1c4ed"],["/tags/maven/index.html","2e0689098bcfac2f9c45053531b3436b"],["/tags/mybatis/index.html","a61dedec8c19eede7ccb02b45e40ea8c"],["/tags/mysql/index.html","842ec751ad3ab4506b4c661bc122873f"],["/tags/oracle/index.html","497dad4eec884889bfc9955588a62f4b"],["/tags/scrapy/index.html","4241b30cae17fcf32b466a6dc4527a39"],["/tags/spring/index.html","d4cdf9d661ec925b181f82d3bb2812c4"],["/tags/struts2/index.html","48ddd58080ad26b4b6dfa396de79173b"],["/tags/tomcat/index.html","5dd958f39a6cc22c89c3994e12885cf2"],["/tags/爬虫/index.html","c95fcd4f1b5a5ad14f05dd483f5fd120"],["/tags/百度云/index.html","7cebd0f9a22dbcba8081dfdf73deddac"],["/tags/端口映射/index.html","11ee18607724b382d59124f06c5ca32c"],["/tags/高速下载/index.html","6b0fbe13284c1ae9c1d8a5927ba5dc86"],["/测试/index.html","fcc424cc1e7f83fdde16336cf8cb9a9b"]];
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
