/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/163/css/bootstrap.min.css","4eb7e3a7a7121c4a11f2daffd3fb39a0"],["/163/images/bg.jpg","5ac5da1b493c4c24aa958cf7675a0bd5"],["/163/index.html","d6136b492d515e4c2e5f0aaf61bfa9fe"],["/163/js/bootstrap.min.js","4967232dd6018523eaea36b219c7a629"],["/163/live.js","8b6f5c30e296eae7aea0ed719f39348a"],["/2019/07/20/2019年7月20日/index.html","40d05639297148c164b1d2aedbc6e52b"],["/2019/07/20/Spring入门学习/index.html","30c477edd04f88cefaf2a7a402d554fa"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","06d7a3bd37a9b0030996ca7d9d7bf38e"],["/2019/08/04/Struts2的执行流程分析/index.html","d06ff17016f8940b7c192b8b00bbbb6b"],["/2019/08/17/Struts2的拦截器栈/index.html","99fcf0a8ef1bfb09bfb5410b52153bbf"],["/2019/08/20/ognl表达式和值栈/index.html","40ad5684dcd754a6f92b750428c9038c"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","afe0da7a08cb4e1a9faea6b961065b89"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","aee73e90c85e9385cfc64cae2ccbdc78"],["/2019/09/06/MybatisUtils工具类/index.html","a1c120cb4ba01f0e454dccf4f1246c72"],["/2019/09/06/Mybatis使用注解入门案例/index.html","55fb6d83a9c37e6fe333a13243f935a2"],["/2019/09/11/Git笔记/index.html","8b340aa69c5b682b4b5199433d1da216"],["/2019/09/11/MyBatis的动态SQL/index.html","a7459a12260a4f3abcc9b5b8a7ef09ae"],["/2019/09/14/安装Docker/index.html","e3545b2704f50eea95f7ee78aa1f43d7"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","7bbe6403a0caec17f5afe14e82a69c45"],["/2019/09/21/linux服务器和tomcat部署/index.html","b7c130ebc03509d548dea760e7488ebe"],["/2019/09/21/maven创建spring入门项目/index.html","616a0a63385ab426356002fc1b599c6e"],["/2019/09/23/mybatis多对一、一对多查询/index.html","b335fb3e9e1791caefeddd5cd3f32843"],["/2019/10/08/Maven入门学习/index.html","907a7005f6cfd40d9d7f48ba9994ffd9"],["/2019/10/09/CentOS安装Dokcer/index.html","97ede6a490994bcde4a7b1881ce46ee6"],["/2019/10/09/docker学习的入门/index.html","456c7b4b6474d61efacb5f083801ac2e"],["/2019/10/09/linux常用命令/index.html","d92c7c0eb6eef279f143307ecb60adc7"],["/2019/10/10/mybatis单表的嵌套查询/index.html","451464cb6ff1322b63753310ff3d21cd"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","dd3402388e2ea191058503b4899f4dae"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","2641b4c8ba74e25904fcb9c3f10b1dcc"],["/2019/10/23/docker安装mysql/index.html","37177e825b0af7a55bde17bf44e71dd1"],["/2019/10/24/Spring的属性注入/index.html","e435f91686134441f1dc8689ce05256c"],["/2019/10/25/模拟电梯系统（java）/index.html","ec1f272ef066c8d73c6980a6cfffdcc0"],["/2019/10/26/Docker学习之二/index.html","c16aa0cab3909fc2102719d90202afbd"],["/2019/10/28/Oracle数据库例题/index.html","e09bec2ad41e1fccb105fbc5e4d4d291"],["/2019/10/28/linux端口映射工具/index.html","56a88fb45c7323f82658db1ac798b604"],["/2019/10/29/Untitled/index.html","e895602e2b735e4ff172a194b3d34ac3"],["/2019/10/31/Spring-AOP学习之（二）/index.html","d81173cf232f86bd17463cf25811aa62"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","b99ddaa0a7f4785472d820a12d3b292e"],["/2019/11/02/MyBatis与Spring的整合/index.html","509418345152fd1a4f7a5e56b99a439f"],["/2019/11/02/Spring的事务管理/index.html","25f23936b9cc8437e50496999c477e34"],["/2019/11/03/SpringMVC入门学习-一/index.html","8a1939f5e0e372472d95a578bb9ab72e"],["/2019/11/06/SpringMVC入门学习-三/index.html","9d31014b2cfa530cddcd2738e8ba1fd3"],["/2019/11/06/SpringMVC入门学习-二/index.html","6fad1c39bed1a9d016038e8025829599"],["/2019/11/13/frp内网穿透/index.html","acd4748449c533d0c646a4e701c9c6dc"],["/2019/11/15/Spring-MVC入门学习-五/index.html","c086aaed51eea22e0ebb7ce77116303c"],["/2019/11/15/Spring-MVC入门学习-四/index.html","7bfb62e3e1955f11f986e099dd8c02de"],["/2019/11/15/pageHelper分页插件初体验/index.html","f6627ec2913e8a13f22a323b58386994"],["/2019/11/19/使用IDEA将ssm项目模块化/index.html","6793dda2b20d09583737a272fa0c0588"],["/2019/11/21/MySQL-8-0安装与操作指南/index.html","bad31852a303e532320c9de5c7f65482"],["/2019/11/26/SpringBoot相关知识/index.html","27f7556f8cc44b763a0f1fae7aedb379"],["/2019/11/26/在servlet中使用thymeleaf/index.html","01e19dfb7ef2aa996e4d4d9fbae93885"],["/2019/11/26/基于springboot对thymeleaf的使用/index.html","f408c43bffd056714e1fc8dea5c13fa1"],["/2019/12/17/Github搜索技巧和Cron表达式/index.html","9809ce53b9b79fa38f87890dfe98e187"],["/2019/12/19/easy/index.html","f7ac8381cd6d2eaa51ba0d103fe5c2e9"],["/about/index.html","c761b8dc6e0cf98fe8f1e757e5824fbb"],["/api/index.html","520e914ca1506c3bb3fe338ca58fcd8e"],["/archives/2019/07/index.html","6bbd8ed25963459ec09d58d0484b74db"],["/archives/2019/08/index.html","e2451c993e46a5ce300f08520461f780"],["/archives/2019/09/index.html","1a92dadeeb589d4802f0336603cab2ca"],["/archives/2019/10/index.html","c1628a37ed8d326f9ce9ae413dcd8fe0"],["/archives/2019/10/page/2/index.html","5183cb00bd054e34313f81af17e17d66"],["/archives/2019/11/index.html","775be7b22450faa9259dc7e6c2d1f1ec"],["/archives/2019/11/page/2/index.html","2f8b08ee0cd1432a946e7fbd769d0789"],["/archives/2019/12/index.html","5b5cbca26b032219f3220fae409c40c0"],["/archives/2019/index.html","2bbe0f6331e1e083b25b1bf47e7deb60"],["/archives/2019/page/2/index.html","94333d176d2885ad1044a57b0e50c961"],["/archives/2019/page/3/index.html","5c84dd79a8a9e7083642fd727d42bdc3"],["/archives/2019/page/4/index.html","c6f91f933bb2a45993c529abf655eb9f"],["/archives/2019/page/5/index.html","0aeed0abc2de237e225f80398581bdd7"],["/archives/index.html","76eba30ac3681005f629a9cbebdf6839"],["/archives/page/2/index.html","55b11d854689b0569cdd77a3c0ac28f3"],["/archives/page/3/index.html","1dd784339375afca8aaa109f37b761d1"],["/archives/page/4/index.html","7926429e5eac0eca9b9d1c99a99a68eb"],["/archives/page/5/index.html","fb81c7bc7d5d125407b5596ef282deb1"],["/categories/docker/index.html","95875290b3ec6b0f2d8ff7cc34e369fb"],["/categories/git/index.html","e6e5f6cd6fe69222525221be95942384"],["/categories/github/index.html","c4232cf982e03f968d43d41ec5916fc5"],["/categories/index.html","64789dce775711e4f36e213cd67a2670"],["/categories/java基础/index.html","bc72a4407e03ad2ba844b5e1f5c57ff3"],["/categories/linux/index.html","c02e93cb1ca43687d09a6ff4c2363533"],["/categories/linux/tomcat/index.html","37f1c93cd3154781e330612bfcef2482"],["/categories/maven/index.html","b0ae7f8cc82ed704229655c54ca17f88"],["/categories/mybatis/index.html","f92b90662e79d0022348c073bdf2d642"],["/categories/mysql/index.html","7d9c612aab6c0a810e7974b9ca24a0e3"],["/categories/oracle/index.html","11dc4451e70b4a40af65eb4da84dd6d4"],["/categories/spring/index.html","e004bde4c56f22de28ec03a547a754df"],["/categories/springboot/index.html","15dd1dd7816c07906e12b5cea778af19"],["/categories/springmvc/index.html","a6b818cba75843126538301a50c509e1"],["/categories/struts2/index.html","965431453fc05d23dbb1f6287e86d7aa"],["/categories/爬虫/index.html","28e60807d9db407c3a1ca29ace48d663"],["/categories/计算机网络/index.html","1937c015b560313663258878ec915d96"],["/categories/高速下载相关/index.html","b38d161dcabe3440516601167262259b"],["/css/jitang.css","3805375a742f1bee81f10e161ad5ce45"],["/css/main.css","5552dec76d3ba6ceac2921f4295323c9"],["/css/normalize.css","7c188247a4f019024bd2775a87749ae4"],["/css/screen.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/xiantiao.css","d7dd78dab9605272f80165d6d72afab8"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","cbf4f957f1de1bf272ad655f8f801f84"],["/fonts/icons.dev.svg","4143a6cbb53e488ee357306805bb92a5"],["/fonts/icons.eot","b9c5cbed9bf5e79af98b6fecb9408ad5"],["/fonts/icons.svg","442a880c645e5da6e8c2e3b0f59c93c8"],["/fonts/icons.ttf","84e6367e8a1343d106300eaa692c532b"],["/fonts/icons.woff","f24eaa67582b0ee087a29b12ccdb53f9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","0d350274e0785086580c38c9e49e2693"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","067b395ab2380fb7218758ac14f316f6"],["/js/index.js","7a399389d5c687dd19cfbe4b66f9a702"],["/js/jquery.fitvids.js","35edbdf88d1621c7a22cbee15b8018e8"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","5c9147cb5463f5afb9b628c679af6bb8"],["/js/src/algolia-search.js","ba01d05ab4ab55642b936ed256fbf7d4"],["/js/src/bootstrap.js","2577d7e482b58096625a0fdde9f89960"],["/js/src/clipboard-use.js","d5ba9411870fda1d4a5ad5eb6f301393"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","79d26533ce0b9b1d19baf88b2a29fbcd"],["/js/src/exturl.js","3828e5c35720212c32e8b29d91b177d1"],["/js/src/hook-duoshuo.js","5a803d46776a7929d481e23135adfd07"],["/js/src/instantclick.js","841f80b60c8413222aa9d26a79496cf8"],["/js/src/jitang.js","2f4b521a272c0a2c53fa1bba839661c8"],["/js/src/js.cookie.js","d36542ca58a93a9fb5bad13612ee0023"],["/js/src/motion.js","8e227bd813310066b4b7fbac67367c0d"],["/js/src/post-details.js","47bdc20dd4e8aeb4337eb9c7f83dea73"],["/js/src/schemes/pisces.js","0fde747a82fe12c361e193b442c5dcf9"],["/js/src/scroll-cookie.js","c469c012e9d118f4011927c586b06a90"],["/js/src/scrollspy.js","77f9d9e3cc16fb60f4d19db5cd2e1075"],["/js/src/utils.js","d4be9cc1c857d1a6fd4a5b3606ec0319"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","919eefa57567cf26cae8441b4fcd302b"],["/lib/Han/dist/han.js","64c014dc9e4a64473cb5d110992474cd"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","1d26e81565a4f8a4864853bd54337972"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","190046cc8115d9f96286c42a9a9a3732"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","1812370bb28df39699f60b7678ae38f8"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","ebff886c37acb64c930fa532c8f9b851"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","963fa3194032e247a350f343372b5277"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","b71964fe8cb08df3fdb47918f5885aac"],["/lib/fancybox/source/jquery.fancybox.css","78d215bee7e281c55e667dbe67ec1a81"],["/lib/fancybox/source/jquery.fancybox.js","83300c0146b53fe7b7053a668bddbf67"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","8e073c275ef54369b331322afcff54dd"],["/lib/fastclick/lib/fastclick.js","981601ea5d2b7f39f9878caeea3d732f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","8c158a6d518bb3bd38600453d0de5586"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","0c5a1664b4509f2bbbb02071bbf9693f"],["/lib/jquery_lazyload/README.html","52181728e8b6a41516486b6d90d1b02f"],["/lib/jquery_lazyload/jquery.lazyload.js","0ae0a60d3f7cb06fa3e2501a3b9cc831"],["/lib/jquery_lazyload/jquery.scrollstop.js","1a54064385d088e3573b3c1ef1a38978"],["/lib/needsharebutton/font-embedded.css","1dc83f5ae88808a81c54fcfe949d9797"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6a17d9c270c1267d3c58a541d90bdf49"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","84711797063e90db25b66fb669d357ac"],["/lib/velocity/velocity.js","53977cd8d226a07174ab42cc37c0fe15"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","d43ee0bad4a38261a57ec32cbc6d6fef"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live/css/bootstrap.min.css","7cc40c199d128af6b01e74a28c5900b0"],["/live/index.html","8f762ed0d25cd49a541d09ce828a2930"],["/live/js/bootstrap.min.js","61f338f870fcd0ff46362ef109d28533"],["/live/js/proper.min.js","2385337f1a10c77a74d2e636aea3abe4"],["/one/css/oneProblem.css","389621662ffd4dc37c0c2b77c1f81fd4"],["/one/index.html","3f84c179f0681f8776ef59eea6524690"],["/one/js/oneProblem.js","519391e95ac455a62a89184ad4857629"],["/page/2/index.html","eeaea49e0795ec96bca7d110594c4537"],["/page/3/index.html","349520668f420264798edb4cf88cc862"],["/page/4/index.html","6a12085b546e43368164ab8d47e92e94"],["/page/5/index.html","cd7790f7f3a0feef621befb34dc4ba4b"],["/static/api/css/imgshare.css","af170299fc26aa7a48b82b9ec174c0d6"],["/static/api/css/like.css","b96d30060c79a9a5f95c4c54c634764a"],["/static/api/css/select_share.css","df0f8b88584be648e1f6ffdcdfb5ca72"],["/static/api/css/share_popup.css","5bcd9453db2b3d2594c52d1775ad29ec"],["/static/api/css/share_style0_16.css","e0a85426644912fd33311528779ea0d6"],["/static/api/css/share_style0_24.css","5600ded3fac8e62339d10cccf5fa55eb"],["/static/api/css/share_style0_32.css","76f67a746f5b078b232b58da2ae5e0de"],["/static/api/css/share_style1_16.css","41d604d998078787579994b3406baac6"],["/static/api/css/share_style1_24.css","44069ad2797063533a66ef933e04b25d"],["/static/api/css/share_style1_32.css","f9ec0edebcce16b572161679121c672f"],["/static/api/css/share_style2.css","b156c2142b9dcd889711f05719557edb"],["/static/api/css/share_style2_16.css","375a8ac7a093eca33462ecc3ba350fe1"],["/static/api/css/share_style2_24.css","6a137ba67066cd22b8a051608a78c642"],["/static/api/css/share_style2_32.css","e8210cb641a8d4f628af34a45320476d"],["/static/api/css/share_style4.css","c36c7f63dce315819256b1af1eaf2732"],["/static/api/css/slide_share.css","37e8e7f45d310b2719e1c875566082c1"],["/static/api/css/weixin_popup.css","44e7071b275d378b4b89149d3bb06695"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","dd9519607c648c06819640c25bd8e2cd"],["/static/api/js/base/tangram.js","9419d66595da80d052137b58c4930341"],["/static/api/js/component/animate.js","c130663dd555f1721934f613b3f6884a"],["/static/api/js/component/anticheat.js","8d79a5faab67029c76c5cf74f625e40f"],["/static/api/js/component/comm_tools.js","4174d7f455344b9ad079db34f6e958c5"],["/static/api/js/component/partners.js","d5d0e3877d88afd3f80796be0c0efc2d"],["/static/api/js/component/pop_base.js","8ffb99319f54ab566950276828a3774e"],["/static/api/js/component/pop_dialog.js","99e29c02259a3ae06a4195a8f1a45eb5"],["/static/api/js/component/pop_popup.js","36e6e4f216470dd24648e269b14d387a"],["/static/api/js/component/pop_popup_slide.js","6fc6e456da995bd9f1ac1a6e4c66f88c"],["/static/api/js/component/qrcode.js","8210a9d4ce27cc480dcf89dc4e695192"],["/static/api/js/conf/const.js","a8161a690a69e5814a42a55a3e9e7bfe"],["/static/api/js/conf/define.js","5aee7be8ab7d6dd9b8b6977ca4df58d1"],["/static/api/js/share.js","9508d711cfe862c269fbdac86019d66e"],["/static/api/js/share/api_base.js","67407cd0389b66435c453003a5488b67"],["/static/api/js/share/combine_api.js","1bf5bdf02f157f98ea5972d28c46b896"],["/static/api/js/share/image_api.js","0aa1655fd27d642fa2286ffa29d3b7c6"],["/static/api/js/share/like_api.js","3cacee41f26665cab9791e35a5b00e76"],["/static/api/js/share/likeshare.js","b638c6c7d1f91c470cdf007ce57d5afd"],["/static/api/js/share/select_api.js","34fc4895e498ef74749f782a37e08b75"],["/static/api/js/share/share_api.js","f1077fd2b235660995a1185e6628b6f6"],["/static/api/js/share/slide_api.js","b7270a2daca1366744fb851b07eb5e2d"],["/static/api/js/start/router.js","753e22db9d23811015dae24775ee4974"],["/static/api/js/trans/data.js","b638c6c7d1f91c470cdf007ce57d5afd"],["/static/api/js/trans/logger.js","b638c6c7d1f91c470cdf007ce57d5afd"],["/static/api/js/trans/trans.js","159bcf2a5b8fbd7ea665f2f7683f4474"],["/static/api/js/trans/trans_bdxc.js","0d584bfb8f6fbf62b13c3aefcaf878e9"],["/static/api/js/trans/trans_bdysc.js","5bb020e454dafdf8628a6d339acccae5"],["/static/api/js/trans/trans_weixin.js","26b350ac3c3e8b03152c7f42ba5c7f56"],["/static/api/js/view/image_view.js","517dd6ffd525591876d43df0387341b3"],["/static/api/js/view/like_view.js","b30b0b20bede4783d70d9c2bd7e647f6"],["/static/api/js/view/select_view.js","b40e1402cfd3f405dc6b483194a08668"],["/static/api/js/view/share_view.js","e35578e5b98b18f361c573c78ebc7cf5"],["/static/api/js/view/slide_view.js","bfc76fb3a2f417fe9604dff481275101"],["/static/api/js/view/view_base.js","dc077ba154e5ad6e9e9bdeba69dd23da"],["/sw-register.js","e08782cf11979212f6116ab642957a9d"],["/tags/Spring-MVC/index.html","b435ed122f50d9a85a6b828309779e99"],["/tags/cron/index.html","c5b595ec6c82581655d19461f70035ef"],["/tags/docker/index.html","4a2c547a90cb3c7ee6bc71ab26c8eb31"],["/tags/easyexcel/index.html","fde973a2ac5005d49f12a5474921f54c"],["/tags/excel/index.html","d6ebabe7fad6e5fa5bcb5c51163bb407"],["/tags/frp/index.html","0e82d5ccb9410d7185141b1882b91209"],["/tags/git/index.html","e3a3ae2b0375e28ea212f1a5642f9ee1"],["/tags/github/index.html","79e26878b535f7ef7ad6b2b654e0366e"],["/tags/index.html","68de0ff466b8af2aa6cd3d27d19fc4bc"],["/tags/java/index.html","23bffc27b95aac2ef24d7247671c7d97"],["/tags/java/page/2/index.html","082ed7d141a150a0997de5a071e6aa14"],["/tags/linux/index.html","98d030db295d9bc3d21ec379f1b85ce6"],["/tags/maven/index.html","39b609443147fc274a48354362dcfa7c"],["/tags/mybatis/index.html","f3586f7fc55a65ce9328e4bafdeaacf6"],["/tags/mysql/index.html","3b5ddd6e5980a9dd8399ce770bae6430"],["/tags/oracle/index.html","5fc441bb47e674acf733f6ce1ff162d4"],["/tags/pageHelper/index.html","8dcc9a42507fbee35173e9260b29f68d"],["/tags/scrapy/index.html","4f088031f0fcd39a395a2a18e63167a3"],["/tags/spring/index.html","ec8d8ed774cbd34d349179370dad086b"],["/tags/springboot/index.html","71fb1280c41352d2166b61e8fa611eaf"],["/tags/springmvc/index.html","9c0a81b682385253afa36b4159d280c8"],["/tags/ssm/index.html","58d57662d599dff2a28b33f7a4d80f75"],["/tags/struts2/index.html","13163c3f26dc81a8a82c65a971bc21a8"],["/tags/thymeleaf/index.html","721efda0c96048904b8416857e38ea7a"],["/tags/tomcat/index.html","1397927c3f56b73c1b74844c4fcd55f8"],["/tags/内网穿透/index.html","a8c71d7220178f373e6bc0984c76150d"],["/tags/小技巧/index.html","aabdef4c15b410a392b7b0a509d2e56c"],["/tags/插件/index.html","1489c5f8fd1d0d55b8752fed8f39d537"],["/tags/爬虫/index.html","7fbdea6df2f35bdaeaffd8eadf5c80d3"],["/tags/百度云/index.html","051df317348fdc16dbc04de9c0fb068f"],["/tags/端口映射/index.html","793a80a97ac3358132cfc7e8fe81adee"],["/tags/高速下载/index.html","c4ddb4adf0f77b6ee526ce80643e7155"],["/xianbao/css/activities.css","8f75cbb2bb51a284e74e6356711b0a7f"],["/xianbao/index.html","5e527e0c04c5ac9b1a68e0a5a6fb7145"],["/xianbao/js/activities.js","5d6ed53b7abe67432def7966d02e80be"],["/测试/index.html","87d04d06985582b22ea09d7bf0f1c236"]];
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
