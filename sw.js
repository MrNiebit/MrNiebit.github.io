/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/163/css/bootstrap.min.css","4eb7e3a7a7121c4a11f2daffd3fb39a0"],["/163/images/bg.jpg","5ac5da1b493c4c24aa958cf7675a0bd5"],["/163/index.html","63188b131dc83320bd0b51ac50607184"],["/163/js/bootstrap.min.js","4967232dd6018523eaea36b219c7a629"],["/163/live.js","8b6f5c30e296eae7aea0ed719f39348a"],["/2019/07/20/2019年7月20日/index.html","e01bf9c848f38a3b7306053406cf3293"],["/2019/07/20/Spring入门学习/index.html","98a6f5d91e4152a47bab7890fcac4bad"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","8ec13ba6a3a6652ecceb6fc82bf735e4"],["/2019/08/04/Struts2的执行流程分析/index.html","3f2877f32d0dd461420570acea7b6e0d"],["/2019/08/17/Struts2的拦截器栈/index.html","6e3fe72de717ecb4f225a37f2a8ae43a"],["/2019/08/20/ognl表达式和值栈/index.html","6db5867f4ecb73ec369a02e40609f5eb"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","06a92099d70bd53e82c367b617e68aa1"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","900dc54dfc330b9770733d1b0e8a0f8e"],["/2019/09/06/MybatisUtils工具类/index.html","43ca7e98b30dab642c56471307f0032b"],["/2019/09/06/Mybatis使用注解入门案例/index.html","6a812d0abca1ce5d92159fad5e1878f8"],["/2019/09/11/Git笔记/index.html","cc4d512dc4601f48ef065514c3dcde9f"],["/2019/09/11/MyBatis的动态SQL/index.html","5786ca65a2ae9df77bb8e2659815eb10"],["/2019/09/14/安装Docker/index.html","83d1f4f80b55d64a7fd79d9465c17bfe"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","b17e4a8b72f3012e02e24954486a0227"],["/2019/09/21/linux服务器和tomcat部署/index.html","72bfccb29e409b67a146b40623c2a1c2"],["/2019/09/21/maven创建spring入门项目/index.html","b38d32db12a4372087d44ba816215e07"],["/2019/09/23/mybatis多对一、一对多查询/index.html","d776f4e13ea40c1ba25ed3af0fb3ace5"],["/2019/10/08/Maven入门学习/index.html","5e1c6f1b357b5fc38f97f823d59e4875"],["/2019/10/09/CentOS安装Dokcer/index.html","220e720b7ef4a025c1b3de90d1fe9d13"],["/2019/10/09/docker学习的入门/index.html","df7cf3038ed264bf39192ced0bb68460"],["/2019/10/09/linux常用命令/index.html","f0ce5d926f1104bd240e00d43d0514e1"],["/2019/10/10/mybatis单表的嵌套查询/index.html","915679f9028222f24abc764543e377ad"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","3966c14b36957c89ce6d0c0d577fcaff"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","22a5e85c4612010daf66d24654f49f2b"],["/2019/10/23/docker安装mysql/index.html","9511e563feac6937c5e0903945da0c33"],["/2019/10/24/Spring的属性注入/index.html","68c8e58c027184c5554261c57d562a4d"],["/2019/10/25/模拟电梯系统（java）/index.html","aacc198fe4c8e32017d11ab17c264fde"],["/2019/10/26/Docker学习之二/index.html","bb91665eb85d37d92b078053dfccffd8"],["/2019/10/28/Oracle数据库例题/index.html","27103f99d8e4acf4850bf36be753dbbc"],["/2019/10/28/linux端口映射工具/index.html","c3506ea6f9c256069f270cf1f0010799"],["/2019/10/29/Untitled/index.html","d3bf0420491cdb311b4fa4d09bff7f24"],["/2019/10/31/Spring-AOP学习之（二）/index.html","68d636f8277c6d7e91a23fa014114d64"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","ee6f088e1ca623352d94e6532c2a6865"],["/2019/11/02/MyBatis与Spring的整合/index.html","1e31f9b72c59f08462d28efdc72d258f"],["/2019/11/02/Spring的事务管理/index.html","5528a1b0d830868cd2d65c2a5b00f9ef"],["/2019/11/03/SpringMVC入门学习-一/index.html","8fc6d3c498bba94061417c6057865e1c"],["/2019/11/06/SpringMVC入门学习-三/index.html","6967c52d08727d30236928888f9dc4cf"],["/2019/11/06/SpringMVC入门学习-二/index.html","4a2554dbf3cfb2fdd52a11c81d26cc83"],["/2019/11/13/frp内网穿透/index.html","2a000add825cc6ae4cf7b06ca299e6e2"],["/2019/11/15/Spring-MVC入门学习-五/index.html","f939e8e7743bd5378f79489cb6daee25"],["/2019/11/15/Spring-MVC入门学习-四/index.html","79c1384243ce4038c2d6306219671eff"],["/2019/11/15/pageHelper分页插件初体验/index.html","81a3a085e1401b7d2443c8d4adf17913"],["/2019/11/19/使用IDEA将ssm项目模块化/index.html","053784784bdd782e6dc358dc0783e2d6"],["/2019/11/21/MySQL-8-0安装与操作指南/index.html","be272696d40eb33bb899c6b06bbc20d3"],["/2019/11/26/SpringBoot相关知识/index.html","7af416085babec635f3a4988bcba67e7"],["/2019/11/26/在servlet中使用thymeleaf/index.html","e2c61f2ad845cf875ebe115449a07859"],["/2019/11/26/基于springboot对thymeleaf的使用/index.html","88d657d853e8b053942ba8293eba870f"],["/2019/12/17/Github搜索技巧和Cron表达式/index.html","628c02d8cd4e3063f013f0fae6e38ee4"],["/2019/12/19/easy/index.html","e5c14a1a9979d7278af8e8aceccf3645"],["/about/index.html","442beeb478fcc464b516dfc3057aa4f5"],["/api/index.html","edf3487b2e5e6610e29ac5cdee47437c"],["/archives/2019/07/index.html","43c26cd6d70f069fc9e51c79bcf31f89"],["/archives/2019/08/index.html","9021a893ba4853ad7ccc18c28da077f6"],["/archives/2019/09/index.html","76a1586cd8e0d14f67a999038ce40126"],["/archives/2019/10/index.html","9ca7a1b3997055b4db8e72531f0f287a"],["/archives/2019/10/page/2/index.html","5b2e6d03b1791fd8ffa181e9e79b5fda"],["/archives/2019/11/index.html","9cb8a41d934b94367ace6ce68e6eb299"],["/archives/2019/11/page/2/index.html","709f4245edcf1fb1ee86525275e20286"],["/archives/2019/12/index.html","d9024267b2730d812fafd0b036a68413"],["/archives/2019/index.html","c04a3ba9c37a100153d8be989371c130"],["/archives/2019/page/2/index.html","5394a3fb425a56177589548c665e6df0"],["/archives/2019/page/3/index.html","ded1a074cc87d9c6f5ee1f9b7e8b7e16"],["/archives/2019/page/4/index.html","cdc63f60ddf267567d5584e294840b5b"],["/archives/2019/page/5/index.html","cfc9f72ac6a086b770282481717fa2c3"],["/archives/index.html","6f35d7cc1b50d35aded13147f3d92660"],["/archives/page/2/index.html","c9002982bd3274266005529192cdeff5"],["/archives/page/3/index.html","6438e86ac77afe6687a929983cda992a"],["/archives/page/4/index.html","826824185170659bde7919dfee859c29"],["/archives/page/5/index.html","491c0356c53c642ef36b2c2b07b9a336"],["/categories/docker/index.html","6df8d2a33d51140a732e00cb99b4589c"],["/categories/git/index.html","69c890955ef50dee23daadab5baef607"],["/categories/github/index.html","b5354dab06b7121913292b1f37e41ca9"],["/categories/index.html","e201c25621f477ba802e848ded724d14"],["/categories/java基础/index.html","57ea5a399bbe233b15ff4704102dc8a7"],["/categories/linux/index.html","b6ad94d8e259800a11e41cb404dcae0e"],["/categories/linux/tomcat/index.html","385e12e471e76d2521264d7085dbb252"],["/categories/maven/index.html","f8912c9e30c092d6b004736675fc5fce"],["/categories/mybatis/index.html","fcf20d14d17a8617a9bf86bd75ec4784"],["/categories/mysql/index.html","dfdb7d8f1b5f00061498428f1b80372e"],["/categories/oracle/index.html","a4e23caba10496f4345e4140c958ca63"],["/categories/spring/index.html","4da1b078322dbd8cc702fe5331d6041d"],["/categories/springboot/index.html","8041c0e6fed19f3ef282664089e04eba"],["/categories/springmvc/index.html","409999d5698ea610d044a799836275a6"],["/categories/struts2/index.html","11846b2e3a2bde1735cbc81a7d366419"],["/categories/爬虫/index.html","d8fa0455ccac4ca7d136be844eddaac7"],["/categories/计算机网络/index.html","94a9939d49e9e1fe6ce2b22f58747d56"],["/categories/高速下载相关/index.html","d6d04df464e3501c1ab3348f471ba8b5"],["/css/jitang.css","e411133f6e5bb685d4088e24e793a844"],["/css/main.css","bbc278bd081f84529c711420c62af23f"],["/css/normalize.css","7c188247a4f019024bd2775a87749ae4"],["/css/screen.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/xiantiao.css","38cce4de5658f37737ad2f3629872e7d"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","9d82750dcd305ca05bbb7d4d46e5b6b5"],["/fonts/icons.dev.svg","4143a6cbb53e488ee357306805bb92a5"],["/fonts/icons.eot","b9c5cbed9bf5e79af98b6fecb9408ad5"],["/fonts/icons.svg","442a880c645e5da6e8c2e3b0f59c93c8"],["/fonts/icons.ttf","84e6367e8a1343d106300eaa692c532b"],["/fonts/icons.woff","f24eaa67582b0ee087a29b12ccdb53f9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","c1fa724a07af2678f2bd354c69d4c83a"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","2e205143a89cbde592d7c4ef3126cf1a"],["/js/index.js","7a399389d5c687dd19cfbe4b66f9a702"],["/js/jquery.fitvids.js","35edbdf88d1621c7a22cbee15b8018e8"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","fce3b2cf1a9469a987ef95187cff896e"],["/js/src/algolia-search.js","2f804a392dc36efaba6529c743d94126"],["/js/src/bootstrap.js","6fd3a36dee87122922619c81cf87ae80"],["/js/src/clipboard-use.js","fba55ac6613e3323f48f5546fa6757d6"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","002569b90209820a74043808b1a3745f"],["/js/src/exturl.js","7eecb527c17fe95bb56aed842d6a4ce2"],["/js/src/hook-duoshuo.js","a092e398a2a782c8e0b656fcb5fd0ba5"],["/js/src/instantclick.js","45fe53c3648fa4b921403da2140ae890"],["/js/src/jitang.js","9e2545649310da6634d16b680e987771"],["/js/src/js.cookie.js","bf70abe728d0c46c88ef46293fda9992"],["/js/src/motion.js","2455b92c4892934099552a84a89b68ce"],["/js/src/post-details.js","85d72569ddcdbf8db04cf6238a39e1f3"],["/js/src/schemes/pisces.js","918a7b8e147dfa41eb6d0b7682342544"],["/js/src/scroll-cookie.js","741248b13734e03a9db0332c7f68471e"],["/js/src/scrollspy.js","eff78f59054efb49491a9b1a32c5e6b2"],["/js/src/utils.js","b949443b281d0c535b593cf756a2733f"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","5b37d5e9daa8d37e502bfd87fc1a6eab"],["/lib/Han/dist/han.js","25f67c3f896b25b02f3dc35414be07cd"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","22efb6c5ce33dfc3b8effa5d39cb66da"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","1a4e2a08150f9bf609a48ab6a22f3a66"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","7ec3e9e089a5aec1676c8eef167d7e7a"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b7eb3f481ee276ef46d14a107a8f2af6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","a8c71eceaefab086c62d0123b8a4f1c5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","4288f8fa4bcb179202adba18e9977afb"],["/lib/fancybox/source/jquery.fancybox.css","20e6ddd1b1f8e769ba47ce555a4cb2b4"],["/lib/fancybox/source/jquery.fancybox.js","dae2bb407b51fa67a8559b8cd2ac70b8"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","4723c574ccaa342f89de6f43488bc121"],["/lib/fastclick/lib/fastclick.js","82a3a4f25806e16ee1083f683e9c6b86"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","d48433ebdacfe830f039b295832bdcd6"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","ec32a9c81a771e1652a016a76c3b6154"],["/lib/jquery_lazyload/README.html","b72fc499ba6494b360b34328931d58af"],["/lib/jquery_lazyload/jquery.lazyload.js","368310ec805148aa3b3183c7ac2c69fe"],["/lib/jquery_lazyload/jquery.scrollstop.js","2125cfbb997f073d13ce314a12da3b2c"],["/lib/needsharebutton/font-embedded.css","5b17333d99fab9bc905af8456a3f9374"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","41844d865bde34dbec5133d022a33b8a"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c047a059e55b4cac2c269118cf12f3b2"],["/lib/velocity/velocity.js","f68541643fd8a812c1fe268da6722c06"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f8b63e8c0ab9f44c5c6bf080231d0a67"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live/css/bootstrap.min.css","7cc40c199d128af6b01e74a28c5900b0"],["/live/index.html","8f762ed0d25cd49a541d09ce828a2930"],["/live/js/bootstrap.min.js","61f338f870fcd0ff46362ef109d28533"],["/live/js/proper.min.js","2385337f1a10c77a74d2e636aea3abe4"],["/one/css/oneProblem.css","1cf85cee3c53f366d9d1b9141512600e"],["/one/index.html","11a03d7ed29bdf9dff6f7aed849e342f"],["/one/js/oneProblem.js","fda22b86dec8e3ec3e44a13d2b5f8c52"],["/page/2/index.html","e9cd6c530e7f63aaee36802fa3885344"],["/page/3/index.html","dc6edccb7edcf15acdcb3a6af1f1d935"],["/page/4/index.html","14381bf3c94619c5f21ec0205348f644"],["/page/5/index.html","084e8a619a91b2cbaec7920c1eaa6ece"],["/static/api/css/imgshare.css","772a8f2e6394d2a7903ba0a2ff1be7e7"],["/static/api/css/like.css","874b66d7f9a847c04c8ba4ffa81c7d03"],["/static/api/css/select_share.css","36c85693d837aebb3669ebd01c040689"],["/static/api/css/share_popup.css","e5b9aec034e52fb4442655cd2dc68750"],["/static/api/css/share_style0_16.css","512e2391048d72dfbe17994b6c998b31"],["/static/api/css/share_style0_24.css","59096b629856f645eb9c14075db0469b"],["/static/api/css/share_style0_32.css","c02a601dadcd3c0869881eb5b2d1a743"],["/static/api/css/share_style1_16.css","236f4b6431659dbefdafe62e3c10ed3a"],["/static/api/css/share_style1_24.css","df6fbcab9758ffa1144e76460fc99843"],["/static/api/css/share_style1_32.css","0f108d70c96dda313c3abf780c44d697"],["/static/api/css/share_style2.css","a80da08be9baaac89e17e196317b9fd7"],["/static/api/css/share_style2_16.css","1c717cfbe1772d277f1e3ec23c5c0bce"],["/static/api/css/share_style2_24.css","3fa7fe6bcc4c848f70eb084cdb45df81"],["/static/api/css/share_style2_32.css","d3d28eb9b6365f001af60ba4ec9d80c5"],["/static/api/css/share_style4.css","a0bf98161c7faed153b0bce9272ae2d2"],["/static/api/css/slide_share.css","2bc39b29ee9c99b1c3e1f43e0db9f90b"],["/static/api/css/weixin_popup.css","ad1de5a82817244ddfbca17768be5c49"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","026e0eb1dd279b21090beb6b066985a3"],["/static/api/js/base/tangram.js","7b18d535680f76201f42e172ceb24ca6"],["/static/api/js/component/animate.js","328dc9cc273392ffaf3ff67ea9db2400"],["/static/api/js/component/anticheat.js","034c9db332d9d26b39f345bc36e54b4f"],["/static/api/js/component/comm_tools.js","e7c018c68790447b0a4a6e797ecb968c"],["/static/api/js/component/partners.js","789d36472407b11ac323d4b90b44e25d"],["/static/api/js/component/pop_base.js","92ff982b904889ad3bfa99501fd727a3"],["/static/api/js/component/pop_dialog.js","e006812e2caa25a17b6a742f7c7e2095"],["/static/api/js/component/pop_popup.js","99c7fabbe188edf13dc93de4835d8473"],["/static/api/js/component/pop_popup_slide.js","4accf4fc674134ed81b582ae844e0b31"],["/static/api/js/component/qrcode.js","a6f7848e8992b06243207c0dc246e783"],["/static/api/js/conf/const.js","e0096594e4539835db36276dafa6dccc"],["/static/api/js/conf/define.js","92817fd4271b3073937fbe49a7a96377"],["/static/api/js/share.js","d699a331ecfdc45790e3f811f491d992"],["/static/api/js/share/api_base.js","0996b1d8dee5ec8c9eb18b903553cabf"],["/static/api/js/share/combine_api.js","928d24839f9551eb635e5829921408c7"],["/static/api/js/share/image_api.js","e9c320a33ccfbc1a2630a22d24e9e37c"],["/static/api/js/share/like_api.js","ab53c14c51c2c40309b33d89c432aaca"],["/static/api/js/share/likeshare.js","305e3e95997926b3fa95fd6e0ef61184"],["/static/api/js/share/select_api.js","81e4e64253ae599edc4709e3bb712d02"],["/static/api/js/share/share_api.js","5b847c140f77b901243df56bddc47044"],["/static/api/js/share/slide_api.js","a61729b989e76d11def9478f571f263e"],["/static/api/js/start/router.js","0664b6c77c9311da369e320c7aa53d8e"],["/static/api/js/trans/data.js","305e3e95997926b3fa95fd6e0ef61184"],["/static/api/js/trans/logger.js","305e3e95997926b3fa95fd6e0ef61184"],["/static/api/js/trans/trans.js","114ab04c5faa54714c3c2cdd97a2d311"],["/static/api/js/trans/trans_bdxc.js","b75b21d584d23e1f6af35cf07ea1d344"],["/static/api/js/trans/trans_bdysc.js","11d7be6f8f02a861a55f8b73ee277069"],["/static/api/js/trans/trans_weixin.js","1e06d44168d547037468269ca881850b"],["/static/api/js/view/image_view.js","76b8b6f55df710343fe80d388ef9a3dd"],["/static/api/js/view/like_view.js","4734a03bb5aceb8932c5e09345536332"],["/static/api/js/view/select_view.js","8bb6d2bfec0df9421eec6786fa4cec2a"],["/static/api/js/view/share_view.js","1504d4400fd92a88b8096f0bd6e04d11"],["/static/api/js/view/slide_view.js","36fb628fd859b643f8a63b7ec6fdc23b"],["/static/api/js/view/view_base.js","c70ee8fd8fb1d066c731871e1ef4052a"],["/sw-register.js","47dd8ae0fe9a62649f2bb77ae4b908a4"],["/tags/Spring-MVC/index.html","4e8d60db70c416993302f8ae6995dceb"],["/tags/cron/index.html","fef3e0ced4054cadbcbb2df00b0e8b2d"],["/tags/docker/index.html","5a4b13c1ad5dc01c818905d8d1208e42"],["/tags/easyexcel/index.html","4efad0f7b6476f8e26860586ac2a15f0"],["/tags/excel/index.html","0f5a8ba666e9f419581ffa2eaf1abbb6"],["/tags/frp/index.html","45f5e3152244f159cd230f37d659d629"],["/tags/git/index.html","42bafeffca325abff02d53a57b990eae"],["/tags/github/index.html","d7681e2a918b0d32062ecece3355904e"],["/tags/index.html","6818bb097b4c552661721e06a417f345"],["/tags/java/index.html","df26138a29a16eb0a6ea743e6caa9bc1"],["/tags/java/page/2/index.html","3787e3594c0a4ec092f9302d906472f6"],["/tags/linux/index.html","1c118534471a08c9e2647b72a4ee18cd"],["/tags/maven/index.html","feb327312cf40ccf4108f7314e5075d7"],["/tags/mybatis/index.html","0ac012fedb7cf8ad1088f0338c6e7472"],["/tags/mysql/index.html","f6fdda04bb21162fe29ab1b53fa51663"],["/tags/oracle/index.html","047181070c14949b37d944d4952f5d90"],["/tags/pageHelper/index.html","f141fabc4807ed55fdc73c66f5d94067"],["/tags/scrapy/index.html","841b9d2498c891c0c807f6e2ce8de409"],["/tags/spring/index.html","2b20546e8b3e3b5851524d56e1516f37"],["/tags/springboot/index.html","fd539464068148ad13df0c2997eb59d8"],["/tags/springmvc/index.html","e0d56e7534a3bf061a847b3dd8dbc38f"],["/tags/ssm/index.html","c01c25f65597fbf70c76881102fd2fcb"],["/tags/struts2/index.html","a191b746e7a1d6fc9b65bb37c8727b27"],["/tags/thymeleaf/index.html","a437adea677c6d5ef7fe614cf03f7381"],["/tags/tomcat/index.html","262f3fcb76c897329a4c10aceeb2defa"],["/tags/内网穿透/index.html","e56b60663c14ceec3baf7b9af4860807"],["/tags/小技巧/index.html","0230df97e40ac9f71829cf106ecad464"],["/tags/插件/index.html","7741dbb1b65c75be329f817593b8f88d"],["/tags/爬虫/index.html","d02ae7348cc859627834f770c70b4736"],["/tags/百度云/index.html","6205927b723f1615bc88ef82927fdb91"],["/tags/端口映射/index.html","ca38690e26413057572bb079c066809a"],["/tags/高速下载/index.html","f2d01bcfc2210b5e3d986ceb79cd6d9d"],["/xianbao/css/activities.css","79436007807d1df8e5d4b28b23ff9a30"],["/xianbao/index.html","35e6a6e518d4b2836b26033bef574a35"],["/xianbao/js/activities.js","a7c928cac0521add6ea4c3138d267725"],["/测试/index.html","47b659cc5ec9433e0001bbc6383146d0"]];
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
