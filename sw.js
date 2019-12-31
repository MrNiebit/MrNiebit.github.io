/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/163/css/bootstrap.min.css","4eb7e3a7a7121c4a11f2daffd3fb39a0"],["/163/images/bg.jpg","5ac5da1b493c4c24aa958cf7675a0bd5"],["/163/index.html","ae94b9765aad163651025a5b5cde1e56"],["/163/js/bootstrap.min.js","4967232dd6018523eaea36b219c7a629"],["/2019/07/20/2019年7月20日/index.html","337824265c5b994039e4ec9e6889fcc2"],["/2019/07/20/Spring入门学习/index.html","6d3f50dd74d4e051ede458feac00ca76"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","e36076472a15f1dbd32123958618cf5b"],["/2019/08/04/Struts2的执行流程分析/index.html","f90056abed65ab9bf9a8417ed80199d8"],["/2019/08/17/Struts2的拦截器栈/index.html","20fef4d6aa68259396756da1b99eb67c"],["/2019/08/20/ognl表达式和值栈/index.html","b5f6bb5ce60dbe95fddf2c0b20acbbdd"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","94f73fe3ceb9236fb34552fd7b2ea554"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","c66b0fb18569b072a718067f94c50c8f"],["/2019/09/06/MybatisUtils工具类/index.html","4dde82604dd3d0c121c4741b734a8e92"],["/2019/09/06/Mybatis使用注解入门案例/index.html","90370a317a3bc288720a1cdb5a98e4ea"],["/2019/09/11/Git笔记/index.html","f952d1bfb1cb115a6b56dfb6d4113a8a"],["/2019/09/11/MyBatis的动态SQL/index.html","73175be0d852eb347784dace8cf2a504"],["/2019/09/14/安装Docker/index.html","6916491a2677aadd24266c9b0de5ac73"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","eef7bb08fd946b6e7ee97192462af61b"],["/2019/09/21/linux服务器和tomcat部署/index.html","7f330437c722cad6ff2f52083899de81"],["/2019/09/21/maven创建spring入门项目/index.html","dcd3ae350f89bdb08659ac038e07170a"],["/2019/09/23/mybatis多对一、一对多查询/index.html","3a0c28fdd117e180918db967e45fce21"],["/2019/10/08/Maven入门学习/index.html","f3d38f46bc33a15e1fb9a7122a07ad2f"],["/2019/10/09/CentOS安装Dokcer/index.html","5ab99586582a33245bc0f973c1a8959c"],["/2019/10/09/docker学习的入门/index.html","03a02e7122d102ea97c2177c55e36141"],["/2019/10/09/linux常用命令/index.html","a2ea7718c1e34d5270175e522c1c9573"],["/2019/10/10/mybatis单表的嵌套查询/index.html","f7adce17596ac3aa10b75cccb8ec97f9"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","296ce65ff9abef538834ec0b85566c91"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","25d45e471cbc3954b267a58632fc9160"],["/2019/10/23/docker安装mysql/index.html","cc131b2091c929d74c0dced80ed967ef"],["/2019/10/24/Spring的属性注入/index.html","a7479c156b51ce92a358bd15316ed67b"],["/2019/10/25/模拟电梯系统（java）/index.html","a92019b8fb9215323fdc05ffcaf12f08"],["/2019/10/26/Docker学习之二/index.html","bb1ecab617e50ec7afc5dc1efa7d1483"],["/2019/10/28/Oracle数据库例题/index.html","a789cb4993c8fb24c26b633f802a0486"],["/2019/10/28/linux端口映射工具/index.html","1e08bd6a4a5564e98edce754d4bec091"],["/2019/10/29/Untitled/index.html","8d877839bbab0a07efdaaced3da35ab3"],["/2019/10/31/Spring-AOP学习之（二）/index.html","80aa9d5e0321d953c9f464d3449daa1f"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","8e0416a87490f6bb694b84f5e46cb74b"],["/2019/11/02/MyBatis与Spring的整合/index.html","d6d696e54eb34e551291f95aba080a79"],["/2019/11/02/Spring的事务管理/index.html","efac72513ffc9c2e80e853326b1a953e"],["/2019/11/03/SpringMVC入门学习-一/index.html","d960e672317930b056bcb24d98165167"],["/2019/11/06/SpringMVC入门学习-三/index.html","2f49192450997c7b2879f72006f1d1d7"],["/2019/11/06/SpringMVC入门学习-二/index.html","097fbfddebcd80b3ef894f6d578a6382"],["/2019/11/13/frp内网穿透/index.html","1fc2ca5d936dc42284673f88780bb428"],["/2019/11/15/Spring-MVC入门学习-五/index.html","9cca189ac89fd0379126d9d94eff3a15"],["/2019/11/15/Spring-MVC入门学习-四/index.html","1b635f65f10aadcc8a294b07c7b51681"],["/2019/11/15/pageHelper分页插件初体验/index.html","9c176e7998bb0d60b4f512c304c8ddb0"],["/2019/11/19/使用IDEA将ssm项目模块化/index.html","c3d277c7059c1c46291223bcc80ce850"],["/2019/11/21/MySQL-8-0安装与操作指南/index.html","4bc2a6a7b73d3dfdfcdfe7c27a45265c"],["/2019/11/26/SpringBoot相关知识/index.html","8fef13ff16c5dab2b5f92ee0570eca5f"],["/2019/11/26/在servlet中使用thymeleaf/index.html","6725788ea1f7ddc682ec19f5b87af7ea"],["/2019/11/26/基于springboot对thymeleaf的使用/index.html","9a63f7062793207473e6b54e244d43c1"],["/2019/12/17/Github搜索技巧和Cron表达式/index.html","3df264fb83b14f8152aecab876315dc9"],["/2019/12/19/easy/index.html","1cdb2a0db54ea172b04abe040a62e90b"],["/about/index.html","c072db32b402a4174663e22e18d7a6db"],["/api/index.html","9e3532bd2d9664531475bdd5e135977f"],["/archives/2019/07/index.html","31d00d77d49fac39f91704076fbbeb57"],["/archives/2019/08/index.html","3f31718bcac363cd1c6111f7836fc7fa"],["/archives/2019/09/index.html","8442749f119f74148e7e9d16cc9ac5ae"],["/archives/2019/10/index.html","e016735f1d6b107f454dfddb9ee7fd2c"],["/archives/2019/10/page/2/index.html","f11d9bdf69e042be7079239ab98e89de"],["/archives/2019/11/index.html","c337d1f4b1e96438a74e359e60c589c5"],["/archives/2019/11/page/2/index.html","ccf3323f60227be5ce0a1eaf05bad94d"],["/archives/2019/12/index.html","30759ae25848324e15b0c4938f39d2b7"],["/archives/2019/index.html","e6db79179a07cbc19b943b8127ca0ae0"],["/archives/2019/page/2/index.html","4a8904cbc126d7126a8882735dd43637"],["/archives/2019/page/3/index.html","ba2be840d33488a71480385fa8e73c88"],["/archives/2019/page/4/index.html","c571e6e2d3921fb2b7fba6db5b6d5c51"],["/archives/2019/page/5/index.html","a0e98dbb350ed566bdb4355e272e8a31"],["/archives/index.html","be016d4ab29c44fe888ca3b2c8f96a38"],["/archives/page/2/index.html","3f157a4d28ef4479dd00ffcbeb285757"],["/archives/page/3/index.html","839bf9fe2791149c56a1869e20422e6d"],["/archives/page/4/index.html","c0230b1dd3fa181dc2bd0e52a4dc00d1"],["/archives/page/5/index.html","82c871a9f93da93fb0907e6f5095ea88"],["/categories/docker/index.html","642d8ee42280c097eadb505c5e91db07"],["/categories/git/index.html","3f9a9272e94c9a275698b3973899afeb"],["/categories/github/index.html","d2874beef6b4b8a3dd0f3162ac35f9f1"],["/categories/index.html","6311ca07ce6c3ab9849dbca359ea2563"],["/categories/java基础/index.html","1968e4517a414429891a68ba8863a4a2"],["/categories/linux/index.html","1f35869d104f1141761543ee215929ba"],["/categories/linux/tomcat/index.html","26a5b5b439dcb8a815bc25774177dca2"],["/categories/maven/index.html","1945d08d06a7b3ab0292e179455e6af9"],["/categories/mybatis/index.html","801909fb4c41e552c8f1a82f70144716"],["/categories/mysql/index.html","63d18f053ac19525882064329d347333"],["/categories/oracle/index.html","9f8dd6c74ffcfc9039c469a3bf8e11bb"],["/categories/spring/index.html","a5b52abaff15550dc4d2d829a984deeb"],["/categories/springboot/index.html","76f46be61d5688168ce2c8ea3962749d"],["/categories/springmvc/index.html","c98d3b9c2975a67a53f4713595fe5d98"],["/categories/struts2/index.html","0eb801a3f15f9b3683055a538ccb65fb"],["/categories/爬虫/index.html","d0aaa51289985b9d13baef8d802f18ef"],["/categories/计算机网络/index.html","b1fdff543458d49a105f522d631465cb"],["/categories/高速下载相关/index.html","285098281802c99c7ec8c5792298a54e"],["/css/jitang.css","ab3c81ce2d39b802e6fc9c7e4c020dbc"],["/css/main.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/normalize.css","7c188247a4f019024bd2775a87749ae4"],["/css/screen.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/xiantiao.css","0c6cbe425d37ad4fc1fb8068e52c9b78"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","dbde44282650d8e998cce8cd7ccc816f"],["/fonts/icons.dev.svg","4143a6cbb53e488ee357306805bb92a5"],["/fonts/icons.eot","b9c5cbed9bf5e79af98b6fecb9408ad5"],["/fonts/icons.svg","442a880c645e5da6e8c2e3b0f59c93c8"],["/fonts/icons.ttf","84e6367e8a1343d106300eaa692c532b"],["/fonts/icons.woff","f24eaa67582b0ee087a29b12ccdb53f9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","a38ac03d78892390805507f7c8c5bb3a"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","27a162f8ea1247241057c5d511b52062"],["/js/index.js","7a399389d5c687dd19cfbe4b66f9a702"],["/js/jquery.fitvids.js","35edbdf88d1621c7a22cbee15b8018e8"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","36631b41dbc416067edb1d1ddb9e842c"],["/js/src/algolia-search.js","8339c0dd6caf49586e69d0df2d0b6e5b"],["/js/src/bootstrap.js","7418084c36277bd6dae8a67d85356bac"],["/js/src/clipboard-use.js","57468adc968355d8b9fae7f73e64fde8"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","28f4e208ee595f080628d9da14a7e002"],["/js/src/exturl.js","47bbd493efee6c96a1462580ced8aef1"],["/js/src/hook-duoshuo.js","e9d1caba531ddd656321dce13d80be0b"],["/js/src/instantclick.js","2bfd523a35235ea109190620226bee28"],["/js/src/jitang.js","4984d5e1b8d242ff1fb0ac0ace6ffba8"],["/js/src/js.cookie.js","841d774734710a984000afdfd3ec77cf"],["/js/src/motion.js","3167c4ffc86ed6bfa91ac13d8c733028"],["/js/src/post-details.js","19842daf27299f4d0099a00b7d138f9e"],["/js/src/schemes/pisces.js","316f80edac0fc24c584b5c34e3c83d6f"],["/js/src/scroll-cookie.js","9bc60849296ad5efdd1db28a2e3972e4"],["/js/src/scrollspy.js","cd429b64491004930916dbfc5dfb67be"],["/js/src/utils.js","33fab66d53082beb42f98924cac37aa9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","ccdba78214a02a4fb0e266484e9f6703"],["/lib/Han/dist/han.js","1f63f5f7640a63f52a58899e691a393a"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","ff9f918562f5e667afb057278aae1d1e"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","87fc68e80828a7120d5f71248096b1bd"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","616e423369e5b4808078ac030cbad9a1"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a8c4d257bf739c1c86ffea5d67c04777"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","01c20b1aaecaff52bfda92c7ed904147"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","a2f6016f72a7969c33f40308613ed8f3"],["/lib/fancybox/source/jquery.fancybox.css","581ae7844a88843e98f2ed367b90759d"],["/lib/fancybox/source/jquery.fancybox.js","06282431c0f66e5133d89572a4d0db37"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","edfb27b476a5267a515e3acfe943216a"],["/lib/fastclick/lib/fastclick.js","649bdff0f6c612eda89f9196d22bfd88"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c76ae8cbdda9cd1281ae91f16936455f"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","8b75645a6a91f4a51100c15b68e5391b"],["/lib/jquery_lazyload/README.html","652f1749452dcc739a231088de884d6c"],["/lib/jquery_lazyload/jquery.lazyload.js","c5700a5516fcd7d59d8052769d9de8f3"],["/lib/jquery_lazyload/jquery.scrollstop.js","83e3ace4f4ed6243cff8a70c3cfe1afa"],["/lib/needsharebutton/font-embedded.css","d5c66d7f6d339e3c01d9c3e86197d343"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","60d2d5ad13122fa3865bfb43156bc5be"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a049c8392241f1053b90871f1f28c946"],["/lib/velocity/velocity.js","b094e82f514809d6daada423c4969e25"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","d0186a0fee516fd5e3eaddf7d60382db"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/one/css/oneProblem.css","604c215bf979f3070f6b556fc75f5be2"],["/one/index.html","a25b158d417985b5f38c1985a2641c5b"],["/one/js/oneProblem.js","2cd8281cd6d479186ab15242867b1f74"],["/page/2/index.html","0822d9b7118e3c8fa5ed1bbaeaa19f86"],["/page/3/index.html","5b8ac0e2b2e527e35ee32d3721eb0f2b"],["/page/4/index.html","573854b14f49aa40fc5c8a1f14b4b30a"],["/page/5/index.html","0f50fb3da264ca5b23b1f9d58328325f"],["/static/api/css/imgshare.css","35c78f45898a461e3ba3c4307243e014"],["/static/api/css/like.css","5fcb2dedff3b4dbfc6ec7b780735ad3e"],["/static/api/css/select_share.css","bc7780787bb9e5b795927d2427d603e5"],["/static/api/css/share_popup.css","10dc9df07f6a154ec3e508abf444a250"],["/static/api/css/share_style0_16.css","00d7d314d929543dcb178cf4e6508e31"],["/static/api/css/share_style0_24.css","ce2a5d37f21fcfb1acd887da72e322f8"],["/static/api/css/share_style0_32.css","216d0ed347e0f094a0545b5ff3ace133"],["/static/api/css/share_style1_16.css","155e7dfa4abd01a4fc21d1b081eb9acb"],["/static/api/css/share_style1_24.css","be382ec8900d17e998c6f92b8d99d517"],["/static/api/css/share_style1_32.css","10db9e76b57d6fbb4b9e5c28cba55219"],["/static/api/css/share_style2.css","aa49fff53b63b0858f9d8e7778fb5c11"],["/static/api/css/share_style2_16.css","5821374d8e8d6affb6d5fa2e63343a71"],["/static/api/css/share_style2_24.css","fa996a62913a62894626df093212c38d"],["/static/api/css/share_style2_32.css","51d8dc70bb7325f6d8b98ee7c22fef4d"],["/static/api/css/share_style4.css","a4b734f0c092facee953af97b51e32f5"],["/static/api/css/slide_share.css","beea00aeea015b5d15bf98c8f077874d"],["/static/api/css/weixin_popup.css","79ca1e0ceb5a911711f8120316679538"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","735e0ee52018cd5ca0a9a9db53c8f7aa"],["/static/api/js/base/tangram.js","3b058e6a3466cde02cee62bf99a1b0c0"],["/static/api/js/component/animate.js","63065e11e1bf9388a667931f39794222"],["/static/api/js/component/anticheat.js","8fe3f5f52dd274c3e7bc83ffcda37423"],["/static/api/js/component/comm_tools.js","c857ba5800b6de40b13b13b075a579c0"],["/static/api/js/component/partners.js","8d4e9473d90d66ce48a2cb3b34a26a4e"],["/static/api/js/component/pop_base.js","e79d0e31a66ac1be471f4b82d695fb46"],["/static/api/js/component/pop_dialog.js","014950994026b5265fe3fe649031159b"],["/static/api/js/component/pop_popup.js","e721764452548daf5c08de53ec0c1f3d"],["/static/api/js/component/pop_popup_slide.js","09fca90631b9d3a105db79568693faf6"],["/static/api/js/component/qrcode.js","91ec73da62aa2429bdd641256fda374f"],["/static/api/js/conf/const.js","ae5a32210087400c1d9bd8273721436c"],["/static/api/js/conf/define.js","c4902483ff622bb9e69e5cf7acfc5f88"],["/static/api/js/share.js","61bc9f3ed5c06a78c7571e8adef162f0"],["/static/api/js/share/api_base.js","84f3fbec6966393c69f373b5919f4a29"],["/static/api/js/share/combine_api.js","6b2ac8ee98975c93c78df3168dadcc52"],["/static/api/js/share/image_api.js","b8b7d821330627e900a7fc0e1b6b8d85"],["/static/api/js/share/like_api.js","86c684909880e8bbf349fd3830408ec5"],["/static/api/js/share/likeshare.js","f3442a28f434c28fb204d219495bd81f"],["/static/api/js/share/select_api.js","6b2e239df65efeca7a20db6b000f9260"],["/static/api/js/share/share_api.js","5cd791248f59b631ea89daeb0fb244ae"],["/static/api/js/share/slide_api.js","980f2724a1f8ac461eec163c9190b92d"],["/static/api/js/start/router.js","10864595a1d378c1e6b6b13e7c8f7634"],["/static/api/js/trans/data.js","f3442a28f434c28fb204d219495bd81f"],["/static/api/js/trans/logger.js","f3442a28f434c28fb204d219495bd81f"],["/static/api/js/trans/trans.js","49801b9c4eb41a8876ee239888c59f65"],["/static/api/js/trans/trans_bdxc.js","b364f550ad6ad6095fbfc319d9f8b57f"],["/static/api/js/trans/trans_bdysc.js","a0cb6d1550a7a7c67a7f4461a0ee6e3d"],["/static/api/js/trans/trans_weixin.js","196d5901c9fc34a06ff3546e3e0bc093"],["/static/api/js/view/image_view.js","6c23abc36167aabadc123a109997af01"],["/static/api/js/view/like_view.js","f7101c90290415e3c1d4c53f061810dc"],["/static/api/js/view/select_view.js","6a7445edba1d19c16d1c89c4f829a72d"],["/static/api/js/view/share_view.js","b4fb443a2d4e614afbb97cf63d2ad0c0"],["/static/api/js/view/slide_view.js","76483024622685ee9f21edacb9f4a733"],["/static/api/js/view/view_base.js","97de47d715bcc85a9763379bb34eb23d"],["/sw-register.js","920baa7c3e3d9cb4504435cd00973cd5"],["/tags/Spring-MVC/index.html","bd5715d4a2c14c4c871293a34c39788d"],["/tags/cron/index.html","b78b03e89fb953df593499ba31a9f4a6"],["/tags/docker/index.html","4cb8373899cc22fee4512d697547517c"],["/tags/easyexcel/index.html","952124d77983d674056c4d31e77d4755"],["/tags/excel/index.html","95de6d9afa4c126b1e9e31c9d5dbfe1e"],["/tags/frp/index.html","c30d757d588e2d1f23e50e390a87d3b4"],["/tags/git/index.html","d33df4534ce84b07d6d0fc3e676630c0"],["/tags/github/index.html","5a5b9e4f72f51aafdeca003634734d7d"],["/tags/index.html","300d451c91c4eef0749974fba8d9c633"],["/tags/java/index.html","8be2d04b7415fc773c24075529071605"],["/tags/java/page/2/index.html","8ff15a3286b08528263ae35fdfe37b64"],["/tags/linux/index.html","27b5f785f18dfffed9bb1c29fc65faa3"],["/tags/maven/index.html","c64f7ebc8aef02d73223c1c2051a84c5"],["/tags/mybatis/index.html","b5c135b1f7c2e2822ca2f7ae00d2478f"],["/tags/mysql/index.html","8a24e4cc6070278f736c75d186e14854"],["/tags/oracle/index.html","0833a194516605ae8f55ba77811c8f83"],["/tags/pageHelper/index.html","2a969e6afd6336e33bf2e23954a90946"],["/tags/scrapy/index.html","38331f5e60ae65bf1273a9ed34e9f891"],["/tags/spring/index.html","185a190e673d7021d8a81a8809b57359"],["/tags/springboot/index.html","a51432e35aa9a9b63a180f9181554785"],["/tags/springmvc/index.html","e29dbda573ddbf1cbe93dec6a3cdfc48"],["/tags/ssm/index.html","cb83975fe7fcfe72aa2c227aab3cbe81"],["/tags/struts2/index.html","20c6088aebb056d19553d6e411e9215c"],["/tags/thymeleaf/index.html","5f8df3c51fd3cc8e0e323956ee6a8f5c"],["/tags/tomcat/index.html","6b7577f0721f1779673ece99b6da5f39"],["/tags/内网穿透/index.html","609077f3ecb9b9fe970b79e255fe1d63"],["/tags/小技巧/index.html","ae7d454efa0e4e132edb027668db4dcf"],["/tags/插件/index.html","1d99e8bea2c5fbf43d3a882b92fd4907"],["/tags/爬虫/index.html","39b42b9862f88a807498ebde14552ed4"],["/tags/百度云/index.html","2df1a4120427820796eae8642ebfaa0c"],["/tags/端口映射/index.html","7bde3a0fbdebbd0b8b6dfe0bcc493b9c"],["/tags/高速下载/index.html","dd421ef9f99d5f106c83df5c05ec31c2"],["/xianbao/css/activities.css","d3f6d475c657488c38addea30bc1ffc7"],["/xianbao/index.html","70d0b325c98236d8ef1dd085555732ae"],["/xianbao/js/activities.js","d21d5c6d198a94a6d842df66083077cb"],["/测试/index.html","a543de09393f789f27a563cdf9fb0c02"]];
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
