/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","ccff21667d9f35561eb2cab19693da06"],["/2019/07/20/Spring入门学习/index.html","13c22132bfd420bcdbdccf7959f94512"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","280c039e49791509992b796a6c3aa640"],["/2019/08/04/Struts2的执行流程分析/index.html","68995f99e7c5f0d53468505b1036cb05"],["/2019/08/17/Struts2的拦截器栈/index.html","b2eb8534f7400bd1c57151fe3df815db"],["/2019/08/20/ognl表达式和值栈/index.html","c33fc5948f139b19b0f0f10322641179"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","ec14fea917ea11f62fc88351632535cb"],["/2019/09/01/Untitled/index.html","a1ab43eb4625ef1b1edcbf9003494271"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","b584fc26e16001741e4b7e08796d1726"],["/2019/09/06/MybatisUtils工具类/index.html","ee607e42db5891a0a73a20f2577f24d8"],["/2019/09/06/Mybatis使用注解入门案例/index.html","f6cebc4c4e9a15ff7bb5f828659405d7"],["/2019/09/11/Git笔记/index.html","ae6f33cc5f3639109328dffc0702bf65"],["/2019/09/11/MyBatis的动态SQL/index.html","21b11fd73af808f302ad2b0fa0db5b89"],["/2019/09/14/安装Docker/index.html","2a285925a5def4a5447e4ad3fcd67408"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","1366fb464d129c8106c4233276d11266"],["/2019/09/21/linux服务器和tomcat部署/index.html","928ff8503c9c0282de7bb48f986ec4f4"],["/2019/09/21/maven创建spring入门项目/index.html","5a39cfcde3bafda5a0542065ffbc6ba7"],["/2019/09/23/mybatis多对一、一对多查询/index.html","02c16cd7791eaef234fa18233ea26036"],["/2019/10/08/Maven入门学习/index.html","2e4e62a9bf3d8518cc528316965bb78e"],["/2019/10/09/CentOS安装Dokcer/index.html","bc6fb8ed664f3a8b694dac185d63c04e"],["/2019/10/09/docker学习的入门/index.html","a295627864203d8602414dd83462d284"],["/2019/10/09/linux常用命令/index.html","1f27d118292ba5797f46aca1ed6784dc"],["/2019/10/10/mybatis单表的嵌套查询/index.html","d4eb7e175cfd59948ad61f8d4c70f3ee"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","ae164788b4263660dfe8b5a38d8067e4"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","98e3a8b71a7820982523f9ab9bd1a21c"],["/2019/10/23/docker安装mysql/index.html","3b7d8ef7171ec5f3e58377ff10f76cef"],["/2019/10/24/Spring的属性注入/index.html","b883c09244f3e2beca8d3be7890d7c21"],["/2019/10/25/模拟电梯系统（java）/index.html","08160d7d69afbe3acbffab2c2afd440b"],["/2019/10/26/Docker学习之二/index.html","91b9a1e013b8a09c4a3b33b4ebc62c13"],["/2019/10/28/Oracle数据库例题/index.html","f3dd9d6b5054e428d82ff4b43bc5b7fc"],["/2019/10/28/linux端口映射工具/index.html","56e67ff2e461b472880ce318bd52d46a"],["/2019/10/29/Untitled/index.html","2d8108e1f03cdd2644bb5da965a54bc5"],["/2019/10/31/Spring-AOP学习之（二）/index.html","72229d21f6a458044feba737fae07cbd"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","063ef8881ac3a9d04c96fc60f9d32847"],["/2019/11/02/MyBatis与Spring的整合/index.html","cf1e6d3e18c97b8ea8aef012f2e97987"],["/2019/11/02/Spring的事务管理/index.html","e71ae5daa0195b9d0577d27dee9ce415"],["/2019/11/03/SpringMVC入门学习-一/index.html","ea9ddcaf1656472307a82f9d7a02d141"],["/2019/11/06/SpringMVC入门学习-三/index.html","2da1c885c76024b48cfbc2d2ea1e5ffd"],["/2019/11/06/SpringMVC入门学习-二/index.html","ac2a1e6adf95eeac225d33ddc5509146"],["/2019/11/13/frp内网穿透/index.html","a41cb29847174d494aaa369c8e43da84"],["/2019/11/15/Spring-MVC入门学习-五/index.html","b984cd1047bdec6a3d92f094072f7f86"],["/2019/11/15/Spring-MVC入门学习-四/index.html","69857ac0f97214b819605cf8073c2cdc"],["/2019/11/15/pageHelper分页插件初体验/index.html","b6c7d8547bed0ba00cc18703b98879af"],["/about/index.html","cff6aaccf1d142141cd79a94c2214596"],["/api/index.html","82f650a9e1c51c8aa4ca1d75940c49d2"],["/archives/2019/07/index.html","0dd1b14fa72346b7906918a6a04fcc4f"],["/archives/2019/08/index.html","a04dd5b46f907b8068b7740b7a6410a3"],["/archives/2019/09/index.html","28753661988abe594578f2af0b88baf5"],["/archives/2019/09/page/2/index.html","bca9f39a583b3b6bd1774e4ca2d33dbd"],["/archives/2019/10/index.html","c79a6cc5167e1b45c15b7ebb63213611"],["/archives/2019/10/page/2/index.html","0108f9602f232807b66ca87b65b0ae9f"],["/archives/2019/11/index.html","4f9544248607f9a2870fc118a1f7f976"],["/archives/2019/index.html","ffdf5ef2c0fdeb858eefab2514cdbac5"],["/archives/2019/page/2/index.html","8b2ea8ab2ffae506b9ceaa4659467db9"],["/archives/2019/page/3/index.html","0878fa454baeff4e7ac87fb2de72ac80"],["/archives/2019/page/4/index.html","48adab5e8b0deb0a2316d44f4636cc1d"],["/archives/2019/page/5/index.html","bdc32f2685ac6c4dda2e5f6a0185438a"],["/archives/index.html","71b63f941f37f63b55ba35d116c274a8"],["/archives/page/2/index.html","ba09c75dcc226ae65919d4afe549f24e"],["/archives/page/3/index.html","97e174615d682a7d165c350f8cbb12af"],["/archives/page/4/index.html","423d1500bde6fd8f40b410a816645113"],["/archives/page/5/index.html","77c2c7dea45d85e05efe7561e62fbad1"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","ae07af7c58275462eb1bcc78bd3cd9bb"],["/categories/git/index.html","b520a68b5e94c397a03ddbb7a1426aa5"],["/categories/index.html","640d9a31ee92fdfdfd9ff171d86be3a4"],["/categories/java基础/index.html","075a40b8616730f59a55e5f4d358c553"],["/categories/linux/index.html","7d6f86caf2adb4efbd23a43095402481"],["/categories/linux/tomcat/index.html","7dce82cf361d8537748d33b2ea869139"],["/categories/maven/index.html","7e1de877c3a3f67646c2871fe198af7e"],["/categories/mybatis/index.html","bbd06dcab9ce174804e158c2413e5c5c"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","f2a09cc7ef1bf05a3adec5f1434c1208"],["/categories/oracle/index.html","cb2b75b49701b77a4382eae77a9f379c"],["/categories/spring/index.html","b4c9c38655ab052ddcc6bfb3a900c974"],["/categories/springmvc/index.html","253946d75d3597c7aa2e5276b4be5d79"],["/categories/struts2/index.html","52184bbfce34067e249710462253cc2a"],["/categories/框架/page/2/index.html","4864f40a56dd0d6fcecce4f4e3906dfe"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","cf90a0e09637b6c3b5240494c2e02a18"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/计算机网络/index.html","355de0d81c7c6bff6bcc728825924b67"],["/categories/高速下载相关/index.html","e2d3b957ec927eeaad211a53788c3a48"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/jitang.css","a1cc8656401f2aa05f2b0a7f1317f9ce"],["/css/main.css","e5a3927080d1f9fa53e4036d5837bbe9"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/css/xiantiao.css","fdb87bd153e099c499cb36eb92067bd1"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","16602c16c1cb492d0cf1d3431c6ddcaa"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","524b354d5161a51274825b6bfecc513e"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","2c99e03328a800608a9a9b068ecb111e"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","bd6e38ee1f66ac6b81ac76a5becfee64"],["/js/src/algolia-search.js","9b91d36a19be74d90a7d280911cf8013"],["/js/src/bootstrap.js","1bb0358b6128fb4b91f6e084f5b3cb94"],["/js/src/clipboard-use.js","7e32fe3c03efbdd9a7fa2d1ae6a406c6"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","aa86f643ff0111921a0bb32efc638528"],["/js/src/exturl.js","8df8b9623ad9cd26a6bfef6b9c6a6568"],["/js/src/hook-duoshuo.js","c4bd0cfe06a228f6ef000fb129cce4db"],["/js/src/instantclick.js","3f09ec49e6d43aec76c6ea87060aaa1e"],["/js/src/jitang.js","e6f93801403f0471fc905828106032a3"],["/js/src/js.cookie.js","05f21b79308ff2ebda27852bbc14bbfe"],["/js/src/motion.js","6a74cf626f0202fb89b6bf8ede376d02"],["/js/src/post-details.js","f3a0f791c94d3813664dfc1d13724249"],["/js/src/schemes/pisces.js","14c887acdf4232c95e2d80f2252cd647"],["/js/src/scroll-cookie.js","e1e7fdac6eb5bbf1cdc8487cb00f9ac0"],["/js/src/scrollspy.js","2101c01664fc39f1e1dac1f48dd0ec0c"],["/js/src/utils.js","acee93878a7037a190ea46df7ac2da5d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","f53749c082753da4d16bfae03e224480"],["/lib/Han/dist/han.js","cf9bb07e9224b276eaa903d12db06062"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","0d45f55cd42aad96b7b201f241c2e3e5"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","150b5689683701229315be753410d18c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","0a91f14fe2a7dca753c0342c1a682032"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","936467467fbe732c6985b1093a0e85d9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","fefcbaffdec1d096409ecacca9441bc5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c43906ba4d9adc58d6d4021c77c4cf1c"],["/lib/fancybox/source/jquery.fancybox.css","2e1bc7801bdf4a4e3e324a236468d9eb"],["/lib/fancybox/source/jquery.fancybox.js","4aebb353f623ab208a24ab87657beadd"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","5b99a665b5d5e89fbce39988fa798628"],["/lib/fastclick/lib/fastclick.js","11ae32fc7439e9d29c7a35738563bb3a"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","35f62022cf9e7849f18504f78d817c25"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","3d66ab23b0f17e52fb29cbbbcf165c90"],["/lib/jquery_lazyload/README.html","b1ff82407d1d578232d1d8bac232eff1"],["/lib/jquery_lazyload/jquery.lazyload.js","d28a7f8e0f9f8922baf582396bd788b0"],["/lib/jquery_lazyload/jquery.scrollstop.js","72a270b2967db3d51c6068a9fb19573e"],["/lib/needsharebutton/font-embedded.css","325fb54564bc31bab06a47b45915f03a"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","1f5a82a05cca083de3c294abce325ba7"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","31503bc289f9a29c4f591cf9f94830b2"],["/lib/velocity/velocity.js","ab644f89b87973fa6807cd7af2b6b864"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","239e59685af1b1980b486d1b70f390d3"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/one/css/oneProblem.css","fa587aba1b9e1289013a11be0611b9a2"],["/one/index.html","363565d8c61e4357f483e8383b937bae"],["/one/js/oneProblem.js","957b625050034f798c0781a2518e368c"],["/page/2/index.html","d018f1e0383d3a57c46b8c4806afb903"],["/page/3/index.html","430da0ad990b78096ba750bccbef43b0"],["/page/4/index.html","b1ffe4e3c1f4a2d8286a6b947860fd6f"],["/page/5/index.html","d3496ffd995ef171a273121ca729be41"],["/static/api/css/imgshare.css","a11ea018ead64904b06238a0217e0591"],["/static/api/css/like.css","a55f6a9260456b5e8661a33717c48108"],["/static/api/css/select_share.css","ba5abb7acf977147e9daa044e3a25df7"],["/static/api/css/share_popup.css","69a62fd4ae6a47aa1e493b03a1086f69"],["/static/api/css/share_style0_16.css","f1579db4948fa0b28d1389b3ea2d04eb"],["/static/api/css/share_style0_24.css","e2ec8defd59edb0b63a7909ae6d6f39f"],["/static/api/css/share_style0_32.css","516f97790eb2408f7731a9799cc65301"],["/static/api/css/share_style1_16.css","3083754e76b35446189a3f8111b4131b"],["/static/api/css/share_style1_24.css","fcd5cd49e40160da4d8418ff9d2925cb"],["/static/api/css/share_style1_32.css","67b1d66e7c126b5c8d852e3384bb666e"],["/static/api/css/share_style2.css","139ae00ee740c18cb9724425de277bac"],["/static/api/css/share_style2_16.css","75b1dc8b85475d00e01e59b207e08be8"],["/static/api/css/share_style2_24.css","05022432c47373098b9df758c0f22723"],["/static/api/css/share_style2_32.css","2f934a8bb03fd482949a41bd6fffadda"],["/static/api/css/share_style4.css","385285ebd077ec92f372626780ed9021"],["/static/api/css/slide_share.css","a1e8820cc25d5c7687b02fca27f0f4dc"],["/static/api/css/weixin_popup.css","f54e4b66ed8a8e7bbadcc12eff70bb53"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","34dfe214d11a5c67f99ab987ac097080"],["/static/api/js/base/tangram.js","7ae4e1017ce441d0df84a01ac2cde0f7"],["/static/api/js/component/animate.js","2df0105006df0343a5a8d0812550d74c"],["/static/api/js/component/anticheat.js","3f155108f25b39bd8105423a6ae44f1f"],["/static/api/js/component/comm_tools.js","e7d5b974deb038740422462424016504"],["/static/api/js/component/partners.js","eafb1879cfe97500bffb0c7ed3cb4d36"],["/static/api/js/component/pop_base.js","3aac90f926b9627740e061b65062597f"],["/static/api/js/component/pop_dialog.js","5f8417f4b8a40c51d252de8994459619"],["/static/api/js/component/pop_popup.js","71e76ee6544902add9c0beeef8879a27"],["/static/api/js/component/pop_popup_slide.js","791fac73e5b2f9046f5e912dbb8335a9"],["/static/api/js/component/qrcode.js","7c6d72eeaae2f2f65065721c05680257"],["/static/api/js/conf/const.js","ae0d729a8a57fa0bedb5184a35b3c714"],["/static/api/js/conf/define.js","eb4bf543832b87df2ee046b109eb31e7"],["/static/api/js/share.js","d08b7919224cb7b04f413f3eb2ae6925"],["/static/api/js/share/api_base.js","b7eaf7905e77bd134a6c9f440c1393bd"],["/static/api/js/share/combine_api.js","4f0ebce52c95e9b4280dbc16639b2511"],["/static/api/js/share/image_api.js","681e0009cd9179e37f9d0fb27730285b"],["/static/api/js/share/like_api.js","488a5e9e8ebdab944cec32602d515f17"],["/static/api/js/share/likeshare.js","1a8ae2787ecd8780125d158ba95c8e07"],["/static/api/js/share/select_api.js","d1e158701b67431a97a99157ebd0a3ad"],["/static/api/js/share/share_api.js","9e17e0f42db21b8c53f22e996592b177"],["/static/api/js/share/slide_api.js","2444cd78fbb67ef144d47a39cc935912"],["/static/api/js/start/router.js","fc9c77070924eb6a6dbafe959a783474"],["/static/api/js/trans/data.js","1a8ae2787ecd8780125d158ba95c8e07"],["/static/api/js/trans/logger.js","1a8ae2787ecd8780125d158ba95c8e07"],["/static/api/js/trans/trans.js","b9f9abf4aabd7b44ea23e88793e13b77"],["/static/api/js/trans/trans_bdxc.js","2822a894163ff801e55b0c162f8fdf3b"],["/static/api/js/trans/trans_bdysc.js","32e376930ef587a8135d642847f8027d"],["/static/api/js/trans/trans_weixin.js","791172d2179aa6cb0eb0f2ba416d3b45"],["/static/api/js/view/image_view.js","eec9385331f3244d10bcb9cfc8f24a84"],["/static/api/js/view/like_view.js","9214e14705bef7181ab33cbd842ca438"],["/static/api/js/view/select_view.js","c198d0d19c04ba2bb42aa837c9f49020"],["/static/api/js/view/share_view.js","fc529079b5f4961ef48de3d6010b3d01"],["/static/api/js/view/slide_view.js","d63d2af18d1e3af0874d5e191baa8c96"],["/static/api/js/view/view_base.js","40847eb4434f2db1ed4bb0e926e6be78"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","371fa5ccb5f6c26be903e600eeccfa42"],["/tags/Spring-MVC/index.html","31e6c04944e352be7e6069251c921d1b"],["/tags/docker/index.html","7150a17fbed8e15790bdd1cbc2d3c202"],["/tags/frp/index.html","18452cfc80347d846cb93a927855cce8"],["/tags/git/index.html","f75421b8ff569e0e8f152f2ea031d469"],["/tags/index.html","257d5de7250887cc905c71c9323a1d9f"],["/tags/java/index.html","91903147e027fc5a6fa03111b01dde16"],["/tags/java/page/2/index.html","541a482a29769ae35b51237e5df5c5e1"],["/tags/linux/index.html","6d1c477a12f315616e05155ede3268c5"],["/tags/maven/index.html","e07278f5ffdcdea1d611879dba7a4e6b"],["/tags/mybatis/index.html","174974d912bdd5ab2c5ef51b2c96dbf8"],["/tags/mysql/index.html","3f1c235dbce664165ad0d9787a163aa2"],["/tags/oracle/index.html","4757c2117b5714cd390a118a336ff841"],["/tags/pageHelper/index.html","1e07ca9f400b69f2354fc41329927340"],["/tags/scrapy/index.html","8186cfa9e9cbafa6a7225a05918dfed1"],["/tags/spring/index.html","85abd1a6b20e92c6a8c05725bd2d07dd"],["/tags/springmvc/index.html","b109cc8055afccbe633ee3fc4f1c331b"],["/tags/struts2/index.html","fdea1ccdd104f5fb9ced025c7c9676a8"],["/tags/tomcat/index.html","208cd086b9caa5271366885a0832ca18"],["/tags/内网穿透/index.html","09f736bcf09b8c5c4906c8e7c467eaea"],["/tags/插件/index.html","40f1d89268e93d7de1534f1cf9d4d8b9"],["/tags/爬虫/index.html","21562e4f835868f4e261678c060b9765"],["/tags/百度云/index.html","eb955ec814535f774b8433a4a63ec4ff"],["/tags/端口映射/index.html","3450e2c26465d8daa8425691e6b96848"],["/tags/高速下载/index.html","2f208eb85cbe8887aee32046db7b41e2"],["/xianbao/css/activities.css","32a18f55d24e01b6aeffdb7545b4bf36"],["/xianbao/index.html","c3a156bdddb691d3a63a3c7a2811d86b"],["/xianbao/js/activities.js","e805df3be28fd4820ae92422cb142bba"],["/测试/index.html","4f7e660831da311e39267ed52d0c7b15"]];
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
