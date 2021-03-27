/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/163/css/bootstrap.min.css","4eb7e3a7a7121c4a11f2daffd3fb39a0"],["/163/images/bg.jpg","5ac5da1b493c4c24aa958cf7675a0bd5"],["/163/index.html","d6136b492d515e4c2e5f0aaf61bfa9fe"],["/163/js/bootstrap.min.js","4967232dd6018523eaea36b219c7a629"],["/163/live.js","8b6f5c30e296eae7aea0ed719f39348a"],["/2019/07/20/2019年7月20日/index.html","4b4588043a8cd1cb57332d40edda0ebb"],["/2019/07/20/Spring入门学习/index.html","981531acf6a0586d29bea994cadd68b9"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","c4308bb72991d1ef2ac504e671500220"],["/2019/08/04/Struts2的执行流程分析/index.html","5b97fa3de20a0cfbee7ee5ed6fcbe166"],["/2019/08/17/Struts2的拦截器栈/index.html","ddc21b3e88987c944366285d6f42a977"],["/2019/08/20/ognl表达式和值栈/index.html","a0657752336057da080bde461a2174cf"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","08101aaf8c2c7cc75f54c5b673a0cf89"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","2b8b538b65b3a85e331de9d6f335b530"],["/2019/09/06/MybatisUtils工具类/index.html","f2f22cb58f695e3d65e9330cd2da6b16"],["/2019/09/06/Mybatis使用注解入门案例/index.html","9670ff1c8ef4a633cb73f722dcf3eb87"],["/2019/09/11/Git笔记/index.html","66b2217d4a0e7acdaa49090b1b4b1964"],["/2019/09/11/MyBatis的动态SQL/index.html","e7146f3eebbe2eb1dcdc2c2d5ca069b2"],["/2019/09/14/安装Docker/index.html","762406b604cc025e277f2ea0a2c45f23"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","c5c1612e06b2222ad0b67c84099facc0"],["/2019/09/21/linux服务器和tomcat部署/index.html","c1074642770aa5dfb62040c0fa1e4a07"],["/2019/09/21/maven创建spring入门项目/index.html","ce3173abd61e309b6cbcc5ee274b16ad"],["/2019/09/23/mybatis多对一、一对多查询/index.html","71cfe1ef47ece32410e4c850151b4cba"],["/2019/10/08/Maven入门学习/index.html","6ae4aad3332d8c2791699a4d6af32c8f"],["/2019/10/09/CentOS安装Dokcer/index.html","f6a49c4a42240735acaaf47d65da80c4"],["/2019/10/09/docker学习的入门/index.html","88463e10c94da9e75b90042b17aaf355"],["/2019/10/09/linux常用命令/index.html","f7f1c6f06c5c03badb8dcc8a18366271"],["/2019/10/10/mybatis单表的嵌套查询/index.html","3668db1c3aff3791dc61af870e47ef5b"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","0b3d6dc26239dd71fbe15d8b11271450"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","ffb94b757d367eba324b20f55d3508a6"],["/2019/10/23/docker安装mysql/index.html","830d627c82e64e2e8f830ff28cafaa3c"],["/2019/10/24/Spring的属性注入/index.html","ddf16d7b849497fa435f056efd542b99"],["/2019/10/25/模拟电梯系统（java）/index.html","bd5759c2ae1559e12d32461e13d6bc89"],["/2019/10/26/Docker学习之二/index.html","d2011caa3571ac2c9965f9debb94d9ab"],["/2019/10/28/Oracle数据库例题/index.html","ac90cf278fce2931e56ef4a2243d56f1"],["/2019/10/28/linux端口映射工具/index.html","c63e3ca8d99c811b635d6c351d5b275e"],["/2019/10/29/Untitled/index.html","2a04f79662cb045075d2e29c357c432f"],["/2019/10/31/Spring-AOP学习之（二）/index.html","9ec3d8654b87a42af8afbe6309b5e6e7"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","bf05835cecb095f95cca48cb394d58bd"],["/2019/11/02/MyBatis与Spring的整合/index.html","7da97c3b5cf739352c2b464e89707e16"],["/2019/11/02/Spring的事务管理/index.html","c3c6fae17f989e6df56f45bf02279f93"],["/2019/11/03/SpringMVC入门学习-一/index.html","8eeb5e61ebf8b5b705dc0aebc081724f"],["/2019/11/06/SpringMVC入门学习-三/index.html","423cc3b52e378135285c27488543a301"],["/2019/11/06/SpringMVC入门学习-二/index.html","7c80ebf61ea674bac98e194bcbdae0df"],["/2019/11/13/frp内网穿透/index.html","6ef7f75d73da281a2b1683dc96e0c592"],["/2019/11/15/Spring-MVC入门学习-五/index.html","c0e21d982677bde1dc77d56152419258"],["/2019/11/15/Spring-MVC入门学习-四/index.html","9e7f51f10b44ca7b89770726424ae2dc"],["/2019/11/15/pageHelper分页插件初体验/index.html","ed62ac1c044f0d1e7baca346d4628f23"],["/2019/11/19/使用IDEA将ssm项目模块化/index.html","e4d838fda97d8ee4f6c3ba0bf6d4f6b7"],["/2019/11/21/MySQL-8-0安装与操作指南/index.html","4d21a4bf14de05b6bb9b82b030d40af7"],["/2019/11/26/SpringBoot相关知识/index.html","1d7610ba18cd0af9af498fc5939a5298"],["/2019/11/26/在servlet中使用thymeleaf/index.html","52d920b15ef274ecf5084dbd661971c8"],["/2019/11/26/基于springboot对thymeleaf的使用/index.html","9e1497326097570080258cd34d62db1c"],["/2019/12/17/Github搜索技巧和Cron表达式/index.html","a4e5e1e1fcec7161929b0cc2ceccc764"],["/2019/12/19/easy/index.html","c35d5fdd5e8dee4403242b7761624106"],["/about/index.html","34e10442fe3f769b5ff49c092b21c419"],["/api/index.html","8007d3e0ae3c700e1ad15d2cd89c9c73"],["/archives/2019/07/index.html","d08ec749f4b87b798f41682ee030815c"],["/archives/2019/08/index.html","c6d1aff2e26423626175d6b81328c0a8"],["/archives/2019/09/index.html","25a9a047ca34cf332f0cddb0b56313ca"],["/archives/2019/10/index.html","ec9b8dabfa324d4fc0b59aa51d39a270"],["/archives/2019/10/page/2/index.html","dcc19808deba7ca44bc6af769d562fcb"],["/archives/2019/11/index.html","900d9a45c03681af199cbc4f669e6c0f"],["/archives/2019/11/page/2/index.html","ea96e819bc2202b813b17f338dd96509"],["/archives/2019/12/index.html","bf59b8cbbe9f360684d546c5ef1d4e84"],["/archives/2019/index.html","0554b59f207a89f19405b984d7196bdc"],["/archives/2019/page/2/index.html","e5c7b5c843eb8c7aaa8621e31163de23"],["/archives/2019/page/3/index.html","4a6fdb5f9fefb81acff312c720471f24"],["/archives/2019/page/4/index.html","85fa7f00b1ca17964c1d8a17d5878817"],["/archives/2019/page/5/index.html","96f18cd129a7c1b43a38181881b461e5"],["/archives/index.html","813138d0393383a57b1b2f74460159b4"],["/archives/page/2/index.html","ae2e8a0857db6d666c0d7b1f3193d282"],["/archives/page/3/index.html","c2ed1d831de953e2f70ed39b147477d0"],["/archives/page/4/index.html","e79c13a5fa98ed5b0fcf73a6c0d3b018"],["/archives/page/5/index.html","7320d8aa510dc6cf4f92f78418c48713"],["/categories/docker/index.html","0764e861a83f268a349fd93e3e7b74ae"],["/categories/git/index.html","1fc513d250da6572f8e07837d5017988"],["/categories/github/index.html","341c30f776f5887df6dd7d95df622efc"],["/categories/index.html","d18ed83685b91c7bdb165715af6455d4"],["/categories/java基础/index.html","ee70d90c70e98a2a8924adef29d3a932"],["/categories/linux/index.html","96dd3c96f4d211759278c19fa04a3775"],["/categories/linux/tomcat/index.html","dd52a15900f80b0a870a5b2166c11e56"],["/categories/maven/index.html","cd2e3fa4d922fed6ee82e99682a01a96"],["/categories/mybatis/index.html","936b099ecd9aa356c2a2414154d713be"],["/categories/mysql/index.html","a99ca3ecb6cf4d4e9559fe20d80f842a"],["/categories/oracle/index.html","38e00aeca720f130531be035fee1e22a"],["/categories/spring/index.html","73477ced324fc62aee135b1235463cf7"],["/categories/springboot/index.html","c10a51b3163a91c43d2da4a787ed40d7"],["/categories/springmvc/index.html","126e70824b5a6ebdb0eb4d95b313dc98"],["/categories/struts2/index.html","2296a54bdb313689cb849d61b43b3a13"],["/categories/爬虫/index.html","d7bc3097db1869fb0055f35332839ea2"],["/categories/计算机网络/index.html","1cfc0f8928e49da9f859d807b7da4601"],["/categories/高速下载相关/index.html","641fb5d3dd628e915a94bddb6d0ab9b2"],["/css/jitang.css","9033fc2b75759d2536b48dfc6beda399"],["/css/main.css","33bbb4783dccbcd2eb5e1fa34c2b4256"],["/css/xiantiao.css","1655d5af768ef49395935d4ea070bec1"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","ea0772197da05cb8d12e3630ba4103e0"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","c959ac9c427d334c369bbb3a6400a7bf"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clipboard-use.js","530cd7d6505b220c870ba6da8fa0e927"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a9f0920c901ee43e163479111c874163"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.js","53a0bdbc01875e28d512e3d59d72f990"],["/js/src/jitang.js","2d18ecf3031c8e290fe2b2c6c7abd9bc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c82acba46947c0404c481497a110e291"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","7c723f55ce77211c855e2ccca7d4b790"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","81be56acfc7ba0ba4892c01888524883"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","2241c57c27c597d7dd6ab49f07d6fbd9"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","ce488d3426ab4f817b0e85ceb882ab13"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","b03803e85d1739079e3c956ac0a74232"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live/css/bootstrap.min.css","7cc40c199d128af6b01e74a28c5900b0"],["/live/index.html","8f762ed0d25cd49a541d09ce828a2930"],["/live/js/bootstrap.min.js","61f338f870fcd0ff46362ef109d28533"],["/live/js/proper.min.js","2385337f1a10c77a74d2e636aea3abe4"],["/one/css/oneProblem.css","54138d72f41ca0002d05a34b95fbc545"],["/one/index.html","55b439fbd886bd4731d922b46bdec17e"],["/one/js/oneProblem.js","275861f92a231cce36fb9debd2491097"],["/page/2/index.html","43e62bda3a79430c2dd0491fcccf6808"],["/page/3/index.html","cd3e30a99c6ff0572966e508db62fd5f"],["/page/4/index.html","e01f99e8fa53024d7399c481c6db05b8"],["/page/5/index.html","fe989f42ee7848a63dfe1e7d6ecbbf1c"],["/static/api/css/imgshare.css","ab84a05bf85590e3f26de4929d27209c"],["/static/api/css/like.css","17295c23fb7fc60554fcd574f732568e"],["/static/api/css/select_share.css","5a5eb4e2ca4ea3b500e62f8c6dbd3961"],["/static/api/css/share_popup.css","815b16d9ff85bc535bcbc94f9efb8f37"],["/static/api/css/share_style0_16.css","25f4ed7f8b653363dd22690c94dc7aac"],["/static/api/css/share_style0_24.css","5666a4a33e3d7d4886de72b2796f17c5"],["/static/api/css/share_style0_32.css","669301a4b7baa4d458893b98c33f9c06"],["/static/api/css/share_style1_16.css","df3b97cf890fca6261e9b5a1c5037456"],["/static/api/css/share_style1_24.css","850e6f06949a47a2056d39f5e5ef3763"],["/static/api/css/share_style1_32.css","db09ae048be4258097c0f4a3e68b630d"],["/static/api/css/share_style2.css","db9f6a975dab570c0618c02972ef05cc"],["/static/api/css/share_style2_16.css","2e8bd589cf052e54a7602ff2e78a213d"],["/static/api/css/share_style2_24.css","6aa4df418d5772a094519bca394b02dd"],["/static/api/css/share_style2_32.css","6096688ff5a3a2243c0b3a26aef72346"],["/static/api/css/share_style4.css","cef6ef138d8e103020dd9081a0ded01a"],["/static/api/css/slide_share.css","73e78aa5089b95d4b87a331d171d0720"],["/static/api/css/weixin_popup.css","f8429b10e9ba8d37cd2e2b06d5f662c8"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/sw-register.js","5b2c2a5501ea90fbe14d7e15a40ad12b"],["/tags/Spring-MVC/index.html","9f07a45094ac00add0df1fc992c7d43d"],["/tags/cron/index.html","0d62cbee19d36881464e1ddeb61427f4"],["/tags/docker/index.html","c7fe63db2b1d60f7aa5f786d5504448e"],["/tags/easyexcel/index.html","f3e83c11f50578ead4ed14a6c7524d72"],["/tags/excel/index.html","1ec562917338819bf4d0ad8d3d010162"],["/tags/frp/index.html","ab84021c27c7134e64ae1e9e19df145a"],["/tags/git/index.html","21af6baa79c76dce6f4a2ec41ad9ad6c"],["/tags/github/index.html","831574422a11bdc2ea316a71f9bc3c55"],["/tags/index.html","a521df38708408b40d755437d5d9a59e"],["/tags/java/index.html","f5f2a2cfc9027906a4ab6d7b4e0465a6"],["/tags/java/page/2/index.html","d2611ed8a7e50d35f9c4549b81ea48ac"],["/tags/linux/index.html","5a388f216bc65ddac51445f022deae48"],["/tags/maven/index.html","62715846ca545f6a9b4216da13c20c61"],["/tags/mybatis/index.html","3530af0af5c459f79068066943d9b024"],["/tags/mysql/index.html","e66a2162c7e85383e7fd41e9c961cb6a"],["/tags/oracle/index.html","690be50a0fbb98180561955e85a2f42e"],["/tags/pageHelper/index.html","e96f66aa1e645a68a3ae4e33cc102451"],["/tags/scrapy/index.html","47fed6b42f4766a2abc56a625eee5070"],["/tags/spring/index.html","7c7ef810d9732e26c585de764f02f15a"],["/tags/springboot/index.html","9ce99ef22b61d0de9055c1d6e01d11a3"],["/tags/springmvc/index.html","6104ce5fd69717f8a9d6a141a680bd34"],["/tags/ssm/index.html","e3593255f31119cf33e42104229a7e8e"],["/tags/struts2/index.html","45f6ad92346b6ff94d65213ed8809159"],["/tags/thymeleaf/index.html","a8944fc3f7b9e100244113d55619587b"],["/tags/tomcat/index.html","5b148f7abc184daebd3d7228af454a9c"],["/tags/内网穿透/index.html","8318a00ef6810007bc2177e3ecfd4030"],["/tags/小技巧/index.html","1ba06ede81f0065960c43aa8c097843b"],["/tags/插件/index.html","8bcced253a1f604a9dcefe184300ad05"],["/tags/爬虫/index.html","5e7ef7322bd0a60daf0816dfab85521a"],["/tags/百度云/index.html","a91c069131004444a221fb036ac9f017"],["/tags/端口映射/index.html","fa558881e163db00eb640e0442a6ea0d"],["/tags/高速下载/index.html","e172295bcbc3dd030b7df6082acfcd45"],["/xianbao/css/activities.css","7bd7cfeb1b4454ee7e39d2f53e98b7ad"],["/xianbao/index.html","bd8a3c521e08ef2827339f0656977267"],["/xianbao/js/activities.js","97bffe0ccd0ce1868bd3059cfdf45861"],["/测试/index.html","89f67037f528cfa35b718f57d0549a41"]];
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
