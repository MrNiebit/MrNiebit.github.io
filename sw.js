/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/163/css/bootstrap.min.css","4eb7e3a7a7121c4a11f2daffd3fb39a0"],["/163/images/bg.jpg","5ac5da1b493c4c24aa958cf7675a0bd5"],["/163/index.html","ae94b9765aad163651025a5b5cde1e56"],["/163/js/bootstrap.min.js","4967232dd6018523eaea36b219c7a629"],["/2019/07/20/2019年7月20日/index.html","bc36d6e81aeb94dd3e9d5d157678c25c"],["/2019/07/20/Spring入门学习/index.html","6bde18d5b4f155bdfacff0dfa292172b"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","74ea3db30ca2d6468349fbf0f2f67768"],["/2019/08/04/Struts2的执行流程分析/index.html","a99b65644e86e33874ab92ac5b3e6514"],["/2019/08/17/Struts2的拦截器栈/index.html","2dc880d269a7347f61bc5afe7e83153c"],["/2019/08/20/ognl表达式和值栈/index.html","bdd5fb91335b2298eef8217c7211a34b"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","41b1f0275ad81f102445ffb52780ef9b"],["/2019/09/01/Untitled/index.html","a1ab43eb4625ef1b1edcbf9003494271"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","69b6730d993a752a7c8184b10fab50af"],["/2019/09/06/MybatisUtils工具类/index.html","48147323c17b111280d9eb5822992697"],["/2019/09/06/Mybatis使用注解入门案例/index.html","d2e8cff67a622334c3a6a12ce72e42ec"],["/2019/09/11/Git笔记/index.html","d73724d6c19d261d1a3fb40e9c562aeb"],["/2019/09/11/MyBatis的动态SQL/index.html","2f668f3cefcd55f59c1ae2df908f4e61"],["/2019/09/14/安装Docker/index.html","5293cbf129bba498778b69882e3209d6"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","802f420da2f998646989927036b32c1b"],["/2019/09/21/linux服务器和tomcat部署/index.html","377bc7ac1288c6906d28fc88532d3c1c"],["/2019/09/21/maven创建spring入门项目/index.html","1e79fbe0d730c6ead3bd0ff3f2306359"],["/2019/09/23/mybatis多对一、一对多查询/index.html","f65413f78b3715fabb879864cbb883a5"],["/2019/10/08/Maven入门学习/index.html","6aa1a40894b2e454182e47fcc848734f"],["/2019/10/09/CentOS安装Dokcer/index.html","7c701ec10499c35ac3a8831d41334362"],["/2019/10/09/docker学习的入门/index.html","aa199d5a38a553757dadf7dabaa896dd"],["/2019/10/09/linux常用命令/index.html","3100052e9cf450c1eedc94b2a84917cf"],["/2019/10/10/mybatis单表的嵌套查询/index.html","a143800b771d20cf37146e93317f34fe"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","cbdbdcddefca4e4b22b4d58f29adcda1"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","e90b83e12895d7e0ff4b5b401c0ea21a"],["/2019/10/23/docker安装mysql/index.html","e4b6fca5e6d973051d2c36d122975e37"],["/2019/10/24/Spring的属性注入/index.html","41d1787fb00507ed114a8931ed721292"],["/2019/10/25/模拟电梯系统（java）/index.html","7fa79854c874cdc1d477983f4af389db"],["/2019/10/26/Docker学习之二/index.html","383e766ccf7fd0a4299be31548e202d6"],["/2019/10/28/Oracle数据库例题/index.html","0459aaaacaef60435103dd0b079c5a59"],["/2019/10/28/linux端口映射工具/index.html","271118ddf2e09a8a133b131942ab1aef"],["/2019/10/29/Untitled/index.html","31248af4c3c1268a616db2ed52326501"],["/2019/10/31/Spring-AOP学习之（二）/index.html","121fce830d5a4128f2fa35d5be1e8c08"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","77169570e2bdda17de4a5f50bfcf42f5"],["/2019/11/02/MyBatis与Spring的整合/index.html","a1a73fe6e78a58427493887f5ba8fbe5"],["/2019/11/02/Spring的事务管理/index.html","80ec821ac3e99f5bb10ab0f381ab01ed"],["/2019/11/03/SpringMVC入门学习-一/index.html","20c3fa40aad00db9dd34fdc347582a73"],["/2019/11/06/SpringMVC入门学习-三/index.html","cb468060fa40d675f43198e4b93d1cb4"],["/2019/11/06/SpringMVC入门学习-二/index.html","b30355ee23118b87e4ea6d99b919dd8e"],["/2019/11/13/frp内网穿透/index.html","af80292c2ace06f964bc71317b95591e"],["/2019/11/15/Spring-MVC入门学习-五/index.html","34fee80c1388545780fa63b7599b0149"],["/2019/11/15/Spring-MVC入门学习-四/index.html","29f2a274be9498ea6352048eb1b9c365"],["/2019/11/15/pageHelper分页插件初体验/index.html","11b34007f57f46f733c17a29b8e07cf0"],["/2019/11/19/使用IDEA将ssm项目模块化/index.html","c64c92acf9071eb7666df83da6c0e6d3"],["/2019/11/21/MySQL-8-0安装与操作指南/index.html","fc91fcb246b9b1ce8bbe996e6992434d"],["/2019/11/26/SpringBoot相关知识/index.html","0f57d21e869540a03bfec3d760c9493e"],["/2019/11/26/在servlet中使用thymeleaf/index.html","8b25dcd3da2a8d051309502c871aab08"],["/2019/11/26/基于springboot对thymeleaf的使用/index.html","43ac6116cb2c99cf15ff92879ec10915"],["/2019/12/17/Github搜索技巧和Cron表达式/index.html","76c5b57241db46829013cc77bf56b300"],["/about/index.html","6cd32050036cae0652689391b6dec040"],["/api/index.html","2fd0c7d6e14e074c0518031b0565f913"],["/archives/2019/07/index.html","f20bb193f40cdb711a20cc313a2607bf"],["/archives/2019/08/index.html","2ed6c5eb086003c012727efed222a3d0"],["/archives/2019/09/index.html","b8a4f07ca656ffc6e0153338811d78ec"],["/archives/2019/09/page/2/index.html","bca9f39a583b3b6bd1774e4ca2d33dbd"],["/archives/2019/10/index.html","168061f09f4a7344c058fab7f906c263"],["/archives/2019/10/page/2/index.html","35e5a740281a9c23ccf2f35208233bfb"],["/archives/2019/11/index.html","edd456d481ee983181452b60f61690dd"],["/archives/2019/11/page/2/index.html","f0bbf93a04e576a406aaaf786936ae26"],["/archives/2019/12/index.html","9e7df6773fc5dcb52a6b7eae164f5172"],["/archives/2019/index.html","5f33292e8e3c4d17c667c1fc69c6f8b8"],["/archives/2019/page/2/index.html","edc952f835dc9465ff21b861d516f072"],["/archives/2019/page/3/index.html","7d7997845c50ec8cbcad8e45abeab8ce"],["/archives/2019/page/4/index.html","4461b5ddb7d7e434092ebc59ae3c1737"],["/archives/2019/page/5/index.html","a292aec1ab64e8882f59d82097fa3bdf"],["/archives/index.html","cb62755aae985822b80a3ab263b77456"],["/archives/page/2/index.html","84f2bf49ecdd143dbdf8eca042b9c80e"],["/archives/page/3/index.html","c3273a9b559ba16d30b926c4eaca763a"],["/archives/page/4/index.html","5206521ef509d2481e883d90e2a5af12"],["/archives/page/5/index.html","448b1b7f4d83d7116db880e72c9e0132"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","6980678ae786c1b17557f9ec99b6c7a2"],["/categories/git/index.html","a63c886daad743830fb656bec022a0ac"],["/categories/github/index.html","3217d3b7cf3d7cf4176c81b453838dce"],["/categories/index.html","86077a1ab592b1d133440d4ee32003e5"],["/categories/java基础/index.html","f5238bb2b7cc3150acb9e0bd070c5e2a"],["/categories/linux/index.html","0618218f2d79d89b969a7874312e31a0"],["/categories/linux/tomcat/index.html","6e40be56eedc370f460beb5854925305"],["/categories/maven/index.html","f54fcabfb3a3d56ad81bc79854620ad3"],["/categories/mybatis/index.html","40db2a7fd15e67d7cf7e0745f9542c20"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","88a697d382d2934d347a82debd2e2874"],["/categories/oracle/index.html","fc98795a78fea5b779d2a104d7dd4be5"],["/categories/spring/index.html","4bc15f8f2f1d1c88039b04ca0620827f"],["/categories/springboot/index.html","db1534b94a545b949064ea4896f38b11"],["/categories/springmvc/index.html","dca538154712d74ce18c860b273b8228"],["/categories/struts2/index.html","611103adef7474d750b8e63723a71cd4"],["/categories/框架/page/2/index.html","4864f40a56dd0d6fcecce4f4e3906dfe"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","8643ca8fd059e3ed2d7bdbdd112b7f1b"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/计算机网络/index.html","ff6d5b6d6a9c31cb70e9b20b0d791c9e"],["/categories/高速下载相关/index.html","e763ecacd8e94d635603603f7ab4ca2c"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/jitang.css","a1cc8656401f2aa05f2b0a7f1317f9ce"],["/css/main.css","a50688fd914f2fbc9156134ac22c2a82"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/css/xiantiao.css","db8788b9c2505a7ebed9f960fc1ef561"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","140d8c77232acbf55194e090d0be6b8d"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","6f2773425adfccb0591e41d07b5c679b"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","647b0594e15b22557d877795b392a230"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","e51b947a9ef1e5b21a6c3fe0620d8b9f"],["/js/src/algolia-search.js","2d242639eeea1286040803f22b85d98e"],["/js/src/bootstrap.js","f4f44f8701fe3cc62167f876309f92fa"],["/js/src/clipboard-use.js","80432894ea5440d9ea5c89e1a4a5e99e"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","3784693fbe79bbc94e07ce920d7f4474"],["/js/src/exturl.js","c46c5e42ba4874e43cdc68e36a7e642b"],["/js/src/hook-duoshuo.js","5482c7e4bf9657f14525f0b5623f54cf"],["/js/src/instantclick.js","aabd18013779a43f721cc6ad2f022b34"],["/js/src/jitang.js","0f45856dd1df57fb58020f03563ab70d"],["/js/src/js.cookie.js","26dcd570ae3841d934e97af4915adcd7"],["/js/src/motion.js","9f86d780995954dc3c4774da7199dba2"],["/js/src/post-details.js","8a5ee0a3c51b3ed76d093c1ad7efa592"],["/js/src/schemes/pisces.js","88f884d45e4fec9083a050d02627c2e1"],["/js/src/scroll-cookie.js","43656785d481588de42a54d5bfb8af11"],["/js/src/scrollspy.js","82afc652214a5701db454c8066af5774"],["/js/src/utils.js","c06b329dcf7b9cf7dc74d9e8a1aa8339"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","8300fc2edc94064f8e3eb843c235c216"],["/lib/Han/dist/han.js","2f4d88da9b2a658da7cda09b5c47545f"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","7d9504e2b22d45976145c6b93675da67"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","67b5cf9acf43e6b43c0573cd61230a96"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f0bfd6be08125ddd347490b6fee0cd92"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","0d91c794c8a257fc9360615e42a53e2c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52e2d99b58f2c1cf572f822f367d066c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","635a99aecca0b396737f56c97f4729fe"],["/lib/fancybox/source/jquery.fancybox.css","87a98992ca44dacf0f7248b2290516a4"],["/lib/fancybox/source/jquery.fancybox.js","f95eac95a21e3597b41eb00d701b0444"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","e6a1a06b259c378c162f229d3e7f0702"],["/lib/fastclick/lib/fastclick.js","14f76960c0b55cc7f1872e52c83c8495"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","b0582d720da8825070fe463a54ca1d60"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","1f7bcdf81e61f19f49ffd08f77eec5c1"],["/lib/jquery_lazyload/README.html","1bbafcd4c4b2138b59b5c1913cf94c21"],["/lib/jquery_lazyload/jquery.lazyload.js","1f9bbce506bd4eba84482ac3a3371717"],["/lib/jquery_lazyload/jquery.scrollstop.js","5847ea8bb1ff2cf5384d58e5ef21171a"],["/lib/needsharebutton/font-embedded.css","02f031c77129e741ba8bfb20acf0d964"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","97bb50902a8a505a76b0be62e59a5b88"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","632058bea407263045b7a8ee6c78df6d"],["/lib/velocity/velocity.js","49d2d4378a49a7c70b1b68cb22ef374f"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","dbe1059c16589d871b40c856cfb7e61a"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/one/css/oneProblem.css","9d0cc08d746f2833fd19b2fa0138a42f"],["/one/index.html","ab08f9955fec3b6b0b4a79a090c38ab8"],["/one/js/oneProblem.js","d40cb393ddf5bc1d703e23b1740b098c"],["/page/2/index.html","69a99f35e9678f398806e34acac262fc"],["/page/3/index.html","56e84ac614587b058eadcef9ddd10d8f"],["/page/4/index.html","431bbc84e5cec1ffe06917d88deea7b4"],["/page/5/index.html","98bcd922b683998c331e855d53f47249"],["/static/api/css/imgshare.css","226bbdcdbf040baa30deae22e07fd7bc"],["/static/api/css/like.css","18915afc33d5cae1a4c1b2dc915a40fd"],["/static/api/css/select_share.css","29433dd6427a10829be0f3f990f48d4b"],["/static/api/css/share_popup.css","7320893c069ecbc0c726c7f0c2e12258"],["/static/api/css/share_style0_16.css","8955027db75054a183d138e11b633da6"],["/static/api/css/share_style0_24.css","324dbdd33979e52d683cce6ca839d9bb"],["/static/api/css/share_style0_32.css","87273ab13b18e8758b01198dfbc6356e"],["/static/api/css/share_style1_16.css","6b26277ef5ee746dd07b63b6a7cc07b7"],["/static/api/css/share_style1_24.css","b02630bfa910a3993d3502f638b03040"],["/static/api/css/share_style1_32.css","9df7d53c8f360968e26fb407e457a883"],["/static/api/css/share_style2.css","5d4d374a1663e4be4452ae4856528899"],["/static/api/css/share_style2_16.css","be5174136b3be95cf3327693ba22d183"],["/static/api/css/share_style2_24.css","efa753fa1fe04897c14bef4657e135ef"],["/static/api/css/share_style2_32.css","1dde641882e8b1e23e68d5b07e2faf1f"],["/static/api/css/share_style4.css","01faed4113c8f59726df709e0596feef"],["/static/api/css/slide_share.css","9705babf593ab4ea6c79927ff90dc20d"],["/static/api/css/weixin_popup.css","b2dde7370cd17e9c90bd0c9066356d94"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","cdc4706b916ee6784a8feb27139c4525"],["/static/api/js/base/tangram.js","e3cc20b376be9e5e9020816fa7efb463"],["/static/api/js/component/animate.js","f1cd798641034a8bd554134ed7ff5389"],["/static/api/js/component/anticheat.js","0b38b4f6eee6291bc9b489c901738473"],["/static/api/js/component/comm_tools.js","217c5917f2bce1e9db0edffbbf6cdd1c"],["/static/api/js/component/partners.js","cc756f2bdb160bd2242c5146409335aa"],["/static/api/js/component/pop_base.js","8ba28c93e4e397685e8909a6b7e39ef1"],["/static/api/js/component/pop_dialog.js","116a49dfd8bde5b2971b246a6f8167e7"],["/static/api/js/component/pop_popup.js","e43ea44dc8b4010ffe65ca72a89b6bd1"],["/static/api/js/component/pop_popup_slide.js","7889b5929e3dd0c3e92845bdab720a8f"],["/static/api/js/component/qrcode.js","ed695a65b6d45f977c639b71ffda87cb"],["/static/api/js/conf/const.js","464660b9f6ff72084c5c95f65bef7c2e"],["/static/api/js/conf/define.js","533a465be5f5699bf24ea6474f54c2db"],["/static/api/js/share.js","bef32c6b7fcb176646866f8c0a547f24"],["/static/api/js/share/api_base.js","95069d7d9f6aa6a0b275bf574582a6e6"],["/static/api/js/share/combine_api.js","3ac350a17db3141005f9d056a4383b6f"],["/static/api/js/share/image_api.js","2c0bcd244512bf85ffc0572d6cd55fe2"],["/static/api/js/share/like_api.js","f8861787dacf924675a97563e02a01af"],["/static/api/js/share/likeshare.js","9292828666f9c49cd2d3e0e8a4856125"],["/static/api/js/share/select_api.js","5a1fbd5e4d23aa50ab24739aecfa6f8f"],["/static/api/js/share/share_api.js","be31ba0d59b7b3293a6d9805f1ee2a52"],["/static/api/js/share/slide_api.js","6c780208eb8b78c8483065d201a00096"],["/static/api/js/start/router.js","975e5e76104737ac7c4efe6e06dc6d67"],["/static/api/js/trans/data.js","9292828666f9c49cd2d3e0e8a4856125"],["/static/api/js/trans/logger.js","9292828666f9c49cd2d3e0e8a4856125"],["/static/api/js/trans/trans.js","36efb5b070907b5f5d4c6aac6684543f"],["/static/api/js/trans/trans_bdxc.js","d7d04943fcf395695cf21e29232efaf4"],["/static/api/js/trans/trans_bdysc.js","c2ea0d4f6a1f3a4d942681c1bbfbdff2"],["/static/api/js/trans/trans_weixin.js","3aad8b074722e1179271283e0b020b18"],["/static/api/js/view/image_view.js","6acafc9a14d09fa7d852f78e85a2ef51"],["/static/api/js/view/like_view.js","d16b5815a08e94e39dce916ef886c4a5"],["/static/api/js/view/select_view.js","db1d46b6fbb6d979ff94f82a3a2ca078"],["/static/api/js/view/share_view.js","cd1ea5d423e2e281eecac5ca235da772"],["/static/api/js/view/slide_view.js","2d726e363c2ae5e096b67ddab6fed970"],["/static/api/js/view/view_base.js","0acc621599b90aa0cfb17a4b33a4520e"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","af234756f7089650dd3063c4b2814d95"],["/tags/Spring-MVC/index.html","6117033f50cafaa0c090f6efc1daee16"],["/tags/cron/index.html","3543c1a57e3c4f2e070784dc9c77e088"],["/tags/docker/index.html","9ec553f0008e6ef90f5d845007699050"],["/tags/frp/index.html","23cfd62600a7c258852034a22e5f1f87"],["/tags/git/index.html","9a014419a0968bdbdf30c48c05048549"],["/tags/github/index.html","39bcf3d63e0aa601ab2d68556c97ab5e"],["/tags/index.html","918172610c3c2d6ccb829e7e816ffd79"],["/tags/java/index.html","4c1ed77bac2d85ec3db7ba5450f2db86"],["/tags/java/page/2/index.html","001c43755c56597efbb4aa3649ed0a52"],["/tags/linux/index.html","505bf2f5d280e5573b666501b5e6f79b"],["/tags/maven/index.html","4ce2db7d312f1eb83cc89eaef4c85465"],["/tags/mybatis/index.html","24a0118ccdfafc1530138236e7267611"],["/tags/mysql/index.html","aa13db052d546cdc94a41ed45c7e9537"],["/tags/oracle/index.html","d3bd454020f639437841ada83edc2119"],["/tags/pageHelper/index.html","afbed58833a3df6a0940a8a042983880"],["/tags/scrapy/index.html","2b68ca84b3ce186c2c3ce66485e8c00e"],["/tags/spring/index.html","28d5871e1db2f4c703294658aa391e23"],["/tags/springboot/index.html","b46c452bd500d6c2c8a6b91c2e2ca420"],["/tags/springmvc/index.html","3e92f6c20a67c773adb9248d177fc374"],["/tags/ssm/index.html","9a707a2cbe761e6206fe3031406ec581"],["/tags/struts2/index.html","08b55fa85028373d65a388cf780bd39d"],["/tags/thymeleaf/index.html","477d22f4543fb2b1425860347e773991"],["/tags/tomcat/index.html","e02a66e0a32be3e5c764be6fc7e9bc68"],["/tags/内网穿透/index.html","9b5ef97d6d5edabe52df403eb8446991"],["/tags/小技巧/index.html","32f19c09d9b8d93ec3780f11e39398e7"],["/tags/插件/index.html","950c1cf9c1263e0db8f0f07dbabfea53"],["/tags/爬虫/index.html","81138b06b8caa3c60759c44015a6cde4"],["/tags/百度云/index.html","0b8d23d51eb8931eda9d771e6236c8c1"],["/tags/端口映射/index.html","faca68143d7ffcf31c3278044600241c"],["/tags/高速下载/index.html","81ac86628638075a0ba5b8f438f888ca"],["/xianbao/css/activities.css","6dd1cd11bcb3fabeee2733355bb5fd9c"],["/xianbao/index.html","1a8f00b941ba3019210ef6800273e5ae"],["/xianbao/js/activities.js","2f808467f21415e8c4d794c90ead684c"],["/测试/index.html","5da8523722367eb9c69f7355354adb1f"]];
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
