/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/163/css/bootstrap.min.css","4eb7e3a7a7121c4a11f2daffd3fb39a0"],["/163/images/bg.jpg","5ac5da1b493c4c24aa958cf7675a0bd5"],["/163/index.html","d6136b492d515e4c2e5f0aaf61bfa9fe"],["/163/js/bootstrap.min.js","4967232dd6018523eaea36b219c7a629"],["/163/live.js","8b6f5c30e296eae7aea0ed719f39348a"],["/2019/07/20/2019年7月20日/index.html","c3f83db1d764bf3253a5079b549cf786"],["/2019/07/20/Spring入门学习/index.html","27681f20689d61933ba3c3f76315facc"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","5bf096e748fcb218bc890d694c5e55a7"],["/2019/08/04/Struts2的执行流程分析/index.html","f15cc3eba8dfebda70b4edd32e48a205"],["/2019/08/17/Struts2的拦截器栈/index.html","f8dd29defe7460a921bfc6e533aee353"],["/2019/08/20/ognl表达式和值栈/index.html","8a0e0d2e95afe654842a83540232fa44"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","c269e4fea06e94d26e2ea398a6f9543f"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","5a83808cff1747cbdc673f6a10e317bd"],["/2019/09/06/MybatisUtils工具类/index.html","214a27a018e8c6a71c77c13209859644"],["/2019/09/06/Mybatis使用注解入门案例/index.html","a473a877257d8e39a96751063a95f6e2"],["/2019/09/11/Git笔记/index.html","dfaa194e928487dab150bdcfda9a2849"],["/2019/09/11/MyBatis的动态SQL/index.html","214c252f47c1d74aff37b231ce7a64ff"],["/2019/09/14/安装Docker/index.html","d3d387ad5aa1cc779bccd7cb13f76cd8"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","6971655fb446184e18f66060211fd079"],["/2019/09/21/linux服务器和tomcat部署/index.html","905282de80a94369f6c05be7285aed89"],["/2019/09/21/maven创建spring入门项目/index.html","cf7b96a2b3a67ee4155b802eee0cb407"],["/2019/09/23/mybatis多对一、一对多查询/index.html","e5633db6ca12292e328b4e3af85166ff"],["/2019/10/08/Maven入门学习/index.html","f07e89a9bb0a5d5ee96fa550d55ca3df"],["/2019/10/09/CentOS安装Dokcer/index.html","4c5e5ce187f4a31f41d1f3cc89ff783f"],["/2019/10/09/docker学习的入门/index.html","62ae54070a736b42201f7e0b46cef839"],["/2019/10/09/linux常用命令/index.html","0db4707c3a5d33e77f04f25d9fe36795"],["/2019/10/10/mybatis单表的嵌套查询/index.html","5f52caacdebd8b01bc8f64ae85d69261"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","23cb245264cb35253a0ac30b21831808"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","2b5cad4062ce96a292fa7610d70a2f30"],["/2019/10/23/docker安装mysql/index.html","7f4ffbf6927999b1439102b5da81297c"],["/2019/10/24/Spring的属性注入/index.html","520247429d3a62982ba2f1ef81961b40"],["/2019/10/25/模拟电梯系统（java）/index.html","cd9d111a03494e0e0c0173fcb606e382"],["/2019/10/26/Docker学习之二/index.html","4e56544aacc447f873a114d61e1224c5"],["/2019/10/28/Oracle数据库例题/index.html","8e8fbdc3fb71b2565cca6555cc1b62bf"],["/2019/10/28/linux端口映射工具/index.html","b968f596016aeab9e5fe70fb9b9128f0"],["/2019/10/29/Untitled/index.html","8768dfda45af224452a4f8219049dafd"],["/2019/10/31/Spring-AOP学习之（二）/index.html","dfe388d9521220d5055f84377aa8786c"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","fd2786572050f33730dfeb58e0237a56"],["/2019/11/02/MyBatis与Spring的整合/index.html","73842d7933b1dfdb0ea099a9969b4c52"],["/2019/11/02/Spring的事务管理/index.html","9a3c81177078ac676f27b0f23f5ef10f"],["/2019/11/03/SpringMVC入门学习-一/index.html","98ff6ee3dabac8aa4ed7e357f516fd97"],["/2019/11/06/SpringMVC入门学习-三/index.html","74cf8dd4a864adcd12e1348864158939"],["/2019/11/06/SpringMVC入门学习-二/index.html","8e66bdd72f662f6c9cac2210ba227355"],["/2019/11/13/frp内网穿透/index.html","06e58fb0193af56821f14de2aac44388"],["/2019/11/15/Spring-MVC入门学习-五/index.html","bb4a7a1fd752b1893c54da738c6da1fe"],["/2019/11/15/Spring-MVC入门学习-四/index.html","4e7622c79df98f19e383ede6456724a6"],["/2019/11/15/pageHelper分页插件初体验/index.html","12d9669969e41b342bdae75d3fd1a493"],["/2019/11/19/使用IDEA将ssm项目模块化/index.html","3985e4cc00c7878436c52cce5e75e23b"],["/2019/11/21/MySQL-8-0安装与操作指南/index.html","8f39007b4a578c04c75aaf1f91dc677f"],["/2019/11/26/SpringBoot相关知识/index.html","ce54d79acf5b0b2deecc4704ed0dc433"],["/2019/11/26/在servlet中使用thymeleaf/index.html","bde9cc5c82326ec064752d6dec415d20"],["/2019/11/26/基于springboot对thymeleaf的使用/index.html","cace8ea40076f0833e926e8c30898433"],["/2019/12/17/Github搜索技巧和Cron表达式/index.html","241e6c8d8499536fdf482256206248e7"],["/2019/12/19/easy/index.html","48b2011e18cc7c01b9ae4c8613a48657"],["/about/index.html","ff3f45fd10ca401cb63ea394f337697a"],["/api/index.html","f966f32cb074528f44ab81bdf6185280"],["/archives/2019/07/index.html","864fc58dbad7e31f134013090cb482f2"],["/archives/2019/08/index.html","564d13984769dd5dc5fc0fedf61e412c"],["/archives/2019/09/index.html","d802ef4e53f1d9462c25e9f922f86d25"],["/archives/2019/10/index.html","b9d9a82c63fa61516b20c60107886d56"],["/archives/2019/10/page/2/index.html","b3c533a705f03b68f3cdbdc485c26788"],["/archives/2019/11/index.html","3626b3cf1c1f3983c77b890786af16e4"],["/archives/2019/11/page/2/index.html","387884d873f2d93842ed5575b9dbe8b4"],["/archives/2019/12/index.html","dbf5c837459a0cce3507596096c84cfc"],["/archives/2019/index.html","3c0fa42c3ae041a09e0eddd620eff82e"],["/archives/2019/page/2/index.html","071b7e21a0aa8c03c530ea3dbc9c64f5"],["/archives/2019/page/3/index.html","b41521afe77f0b0975a243b23e71b955"],["/archives/2019/page/4/index.html","5d5450fec56de1ff5324f3f76e5944ee"],["/archives/2019/page/5/index.html","b1aca3502ef63a1a60475f9e4573485f"],["/archives/index.html","2234c79d3335a7e56ed4140cb0b3ed9b"],["/archives/page/2/index.html","17a0603390c6963c9e852d69a7c71152"],["/archives/page/3/index.html","c91c7b009867cbe82a4d115ff7df54f0"],["/archives/page/4/index.html","e88e557e66c54c5a6485a948ed572a98"],["/archives/page/5/index.html","b8beb936143d9fb4c64e15899b5c018f"],["/categories/docker/index.html","0611336e331263e35442e4f807ad8925"],["/categories/git/index.html","b7470c681ea583f796158b2f1bbb2d92"],["/categories/github/index.html","b52a46067206b9193610c34927d89153"],["/categories/index.html","4f94c40cd0586f213ba57edd873f7bee"],["/categories/java基础/index.html","78cc3a6fef4c8d68f8fdc57655a3c36d"],["/categories/linux/index.html","9fd4e39da8598a32d3c677bccb000440"],["/categories/linux/tomcat/index.html","f647f6aa0d24379e90c4e0d3d72f07a4"],["/categories/maven/index.html","1c0818be9d246f16720f80c6cec133fd"],["/categories/mybatis/index.html","d824683491f6a1189b560e56be894607"],["/categories/mysql/index.html","c603b41dcdc75736de54b1ecd0dc6199"],["/categories/oracle/index.html","50248eca2f6692b7dce28fa19c5af2d1"],["/categories/spring/index.html","7ea3aa5025de31035a8020d46e0cda33"],["/categories/springboot/index.html","01f950d02f1672b2cad6a9263d585cb9"],["/categories/springmvc/index.html","bafc28283d57074666e0d695e59f1666"],["/categories/struts2/index.html","8f9332fbd3cc55ca3fd7426401858c66"],["/categories/爬虫/index.html","33762574eed15ea4d046a2fc79cc169f"],["/categories/计算机网络/index.html","f02e93d7add61aac7a5fee60688dad38"],["/categories/高速下载相关/index.html","3e4e5f37eb0fb38ffa28401edce2253c"],["/css/jitang.css","d491c3ee19fda786ba284ca813557216"],["/css/main.css","1e506f363cfcdb1e64d0fa6e80a220b0"],["/css/xiantiao.css","aba3a74d9b786a5a2c03c308bffd7e47"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","ea0772197da05cb8d12e3630ba4103e0"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","0fe73c2137eb3d80240fff2087e8a394"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clipboard-use.js","530cd7d6505b220c870ba6da8fa0e927"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a9f0920c901ee43e163479111c874163"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.js","53a0bdbc01875e28d512e3d59d72f990"],["/js/src/jitang.js","2d18ecf3031c8e290fe2b2c6c7abd9bc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","9c8a21123e02896dd74be34cd1e4956a"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","5e827e430b239b1d7a793364b8f4c683"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c65837b2e1485ea638c3e98a2827b9fa"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","248663bfb5f5e3dc457852edd1faea13"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","b2e54f8ff16800104bfa7612040171a3"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","eb78b5e3d478a5f1d47819b0f9b13fce"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live/css/bootstrap.min.css","7cc40c199d128af6b01e74a28c5900b0"],["/live/index.html","eca8644a903512717ac842506d4d2d71"],["/live/js/bootstrap.min.js","61f338f870fcd0ff46362ef109d28533"],["/live/js/proper.min.js","2385337f1a10c77a74d2e636aea3abe4"],["/one/css/oneProblem.css","a9a7add5ad6d88bf924364fd2de610ec"],["/one/index.html","24593138cf5e37e5b8c03a6913d38bd0"],["/one/js/oneProblem.js","8b4b2578e2ae85fcc03dae655e655c3a"],["/page/2/index.html","9d8958fe1ea4ebf2b0bb0dc91916b3b9"],["/page/3/index.html","08a62a4ff9bd63bcfdf7fe42ecb7c536"],["/page/4/index.html","d56d8c82b67ae0973873c4292ab83c57"],["/page/5/index.html","178235baf10560dd1a8a37629d5e844e"],["/static/api/css/imgshare.css","dd2f27ab5acdf82a3831b5b8c4fe8881"],["/static/api/css/like.css","716876ba84dfaa4cc5964c3129cda1e8"],["/static/api/css/select_share.css","89cdf0fe9997f6aa2ef34a3bcaf14e8f"],["/static/api/css/share_popup.css","8eb4873e2b60ff18f1724ee94226340b"],["/static/api/css/share_style0_16.css","bbdaa7ccfd421cf25593774e75d284eb"],["/static/api/css/share_style0_24.css","9bff4c200da7f390e27886bb4e58dfe5"],["/static/api/css/share_style0_32.css","6ceea83e7e5db076344f25e8439abf4f"],["/static/api/css/share_style1_16.css","16ea996b19005c101f72d01e811be017"],["/static/api/css/share_style1_24.css","5b0250ca7da25ebb8003b273c11578b0"],["/static/api/css/share_style1_32.css","fd240caefa7eb2c390a03feff8ac80dc"],["/static/api/css/share_style2.css","512a672453db304d7a1723027b863ff0"],["/static/api/css/share_style2_16.css","f08c0b4698ae78b2988cb848ab7f9999"],["/static/api/css/share_style2_24.css","c6449d86b2a5b02bf91cfd510271586f"],["/static/api/css/share_style2_32.css","ed38c252a2495983428c4d5808a0c4ea"],["/static/api/css/share_style4.css","52617842e10633051cab36230e9864fe"],["/static/api/css/slide_share.css","033262c0089b0013dda033d828cfa16d"],["/static/api/css/weixin_popup.css","1dc99c952b11d2ac0c466bb570c3ef99"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/sw-register.js","71257386ba3b28a084029e8cc4f1ebcd"],["/tags/Spring-MVC/index.html","358c06b9e044da75735786724d793fed"],["/tags/cron/index.html","a8921ff0770b3d80af49e6ccb07fc711"],["/tags/docker/index.html","b84de30d5caa7ab77947a81a6ec6df62"],["/tags/easyexcel/index.html","79132e998e2fc05ae94e1f16b1211ec1"],["/tags/excel/index.html","0c4bb1bd0e5e5a1e36cc93a8d75cf21c"],["/tags/frp/index.html","682393a4def4f0f759eb6ce3da2c4103"],["/tags/git/index.html","8fc199a0b449159d4e164c8e9326fc5e"],["/tags/github/index.html","c6d81192ca2be8bec09fd354b18dcddb"],["/tags/index.html","defd697f1edd1f50b4da61c9dce078d7"],["/tags/java/index.html","7a747e4788ff29f22bc11ac004c3e3dd"],["/tags/java/page/2/index.html","b73cd874907afb06f406e578f8ebbc46"],["/tags/linux/index.html","5736655f0e0e7528a80e0b31aa3ce2a0"],["/tags/maven/index.html","7cff1797021d55ed2c218ab6f29238c7"],["/tags/mybatis/index.html","16bc84f96718eebf65fbddb2bfbff77c"],["/tags/mysql/index.html","d2a4e5d1bab07cd4c8a96fb764f1e1bb"],["/tags/oracle/index.html","3ea3369b1a71be52f2c7e2271184033d"],["/tags/pageHelper/index.html","326b2e687de1f53c3f3c8f2d94f0b88f"],["/tags/scrapy/index.html","885067cc49d00cb275dc03fcf0be527b"],["/tags/spring/index.html","0ca9a781355520a298232c9409166a65"],["/tags/springboot/index.html","55e82e626bddb1206f47d40c9c0d9dc8"],["/tags/springmvc/index.html","da5e57154fa9c8763784680c384d04c6"],["/tags/ssm/index.html","785ab0ccb13b4007f3d0141c3cc3bda0"],["/tags/struts2/index.html","14b77c53fa14692a282b547f9cf82a18"],["/tags/thymeleaf/index.html","44dd1e9326972f490006a634cd6fa94f"],["/tags/tomcat/index.html","fa8ce4763ea638dc2566bf7316ac5756"],["/tags/内网穿透/index.html","019a70c05771acf5c076d2ea42d6fa11"],["/tags/小技巧/index.html","dad85499b986f41aed5ff82af4c34f65"],["/tags/插件/index.html","43f634c56667edff6da06a95db345250"],["/tags/爬虫/index.html","100f9c9318a32fbc10fbe137fcf9897e"],["/tags/百度云/index.html","a5cdf8bbeb123ea83b3319fff991fb4e"],["/tags/端口映射/index.html","3606912105eb660598cc954c6abf798d"],["/tags/高速下载/index.html","7ba1bb2a3c94307de126a6b8c554ea69"],["/xianbao/css/activities.css","a17da2c543396a38ffc169d1a0a8181d"],["/xianbao/index.html","acbd447d3d72df74732acb93cd370caa"],["/xianbao/js/activities.js","97bffe0ccd0ce1868bd3059cfdf45861"],["/测试/index.html","eda717074a6c43a6fdaf48b057ee0130"]];
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
