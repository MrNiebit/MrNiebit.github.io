/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","e3a926f3e039960cf1de1b3e19cfe0f1"],["/2019/07/20/Spring入门学习/index.html","f906833ba7f72ef7229864b84972f4f4"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","eee1988c45f13adaea1039544236e021"],["/2019/08/04/Struts2的执行流程分析/index.html","b450bde6c630fdd5a45bbfc4ae45bf8a"],["/2019/08/17/Struts2的拦截器栈/index.html","7c1593921a8fe623a0aa2abcb45ba3eb"],["/2019/08/20/ognl表达式和值栈/index.html","01857596bd2adabd2a58eb25243004dd"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","951cde476b8c0d18173e974b3fe384b9"],["/2019/09/01/Untitled/index.html","a1ab43eb4625ef1b1edcbf9003494271"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","52930158cb8e6505a6e90cc183992856"],["/2019/09/06/MybatisUtils工具类/index.html","b641c9284fc606a83347528f05e246f6"],["/2019/09/06/Mybatis使用注解入门案例/index.html","f6173e1cc9f8b76016ed2c1ef6f82d2e"],["/2019/09/11/Git笔记/index.html","960e6580b91d14ebcd6630e0a238e50a"],["/2019/09/11/MyBatis的动态SQL/index.html","1d98eb21ad4642b12d0fb11d71b0fb9e"],["/2019/09/14/安装Docker/index.html","9fe84201831ee0ca61dcfdc989e940f6"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","5d97c4ed4c7b88b6cd6fb14372bf44c9"],["/2019/09/21/linux服务器和tomcat部署/index.html","e7b12187e82fd8c4e0b83bc2eb028832"],["/2019/09/21/maven创建spring入门项目/index.html","87ab23b127d7410d3ee180e28810ab46"],["/2019/09/23/mybatis多对一、一对多查询/index.html","d34f93538d1d1aa2a5a41a52f51cc511"],["/2019/10/08/Maven入门学习/index.html","3f38a1cb89d27feef276bf1c064f3fda"],["/2019/10/09/CentOS安装Dokcer/index.html","e4d02ee19a015a70dbe5df3c1d903fe8"],["/2019/10/09/docker学习的入门/index.html","92bc595f8300f2fc181f8e8892945488"],["/2019/10/09/linux常用命令/index.html","a1e459df0f8b797186b254f5eea7fbc8"],["/2019/10/10/mybatis单表的嵌套查询/index.html","4974452cf07877499eb42883a3f9e1b4"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","b4541e77cedd91802d9446515717b8e4"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","607ebcce78e91351018996cbe896def6"],["/2019/10/23/docker安装mysql/index.html","6994d71f6b1e057916d173002a6c8624"],["/2019/10/24/Spring的属性注入/index.html","5ffb13286eb6fd68d8b2fa5fe00c1374"],["/2019/10/25/模拟电梯系统（java）/index.html","deb87d3d2d8d252451a940561548385d"],["/2019/10/26/Docker学习之二/index.html","43e25f9ce0470276de2709a5537f0d69"],["/2019/10/28/Oracle数据库例题/index.html","a22477e10049589e9c731983ba773271"],["/2019/10/28/linux端口映射工具/index.html","9d934e239d828ae5fec72db731b7ab86"],["/2019/10/29/Untitled/index.html","4f29d546c5ec9fc40d9ba7c3877c6fc3"],["/2019/10/31/Spring-AOP学习之（二）/index.html","a38202af905d4739ea84987a05e4b491"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","fc5420b29837fc1e31655c94537111be"],["/2019/11/02/MyBatis与Spring的整合/index.html","e40c2c7b99fc3791e05e5d093003b81c"],["/2019/11/02/Spring的事务管理/index.html","7858339dd213b8a5107c97f07dcd662e"],["/2019/11/03/SpringMVC入门学习-一/index.html","1ca96d91124367d8c84879c2df5c4773"],["/2019/11/06/SpringMVC入门学习-三/index.html","16521fdab21ab633ce956a591a71f433"],["/2019/11/06/SpringMVC入门学习-二/index.html","e4702425f4aaf49a6e51a21a4b8668fd"],["/about/index.html","38985a596718740050db6448794715af"],["/archives/2019/07/index.html","bc1159a7bdbcf4ef4daf1e765ff7113c"],["/archives/2019/08/index.html","10def8e801adb990a1e2f75692feed5d"],["/archives/2019/09/index.html","899481dfccab88fdd4bf2654c797c3b6"],["/archives/2019/09/page/2/index.html","bca9f39a583b3b6bd1774e4ca2d33dbd"],["/archives/2019/10/index.html","505ab2e15862db1e649b28c78fef4937"],["/archives/2019/10/page/2/index.html","d42024d55b58556fdbd81238ed0815d5"],["/archives/2019/11/index.html","9f62cd28d91f24522c3117bdeefcb9b4"],["/archives/2019/index.html","5f9564a4916cd914267ed76a18824b49"],["/archives/2019/page/2/index.html","7b57d7d44efeffe6b213509c899b39df"],["/archives/2019/page/3/index.html","6e60672dd837a305a278402ebbec6d01"],["/archives/2019/page/4/index.html","2a25b5e3d93858bf8bd90bc971c94ea6"],["/archives/index.html","27d9511032b0c331c8eabbec3d750052"],["/archives/page/2/index.html","4ce299dbbc315b084761829b1d5b31a0"],["/archives/page/3/index.html","8e2e60d6c3a1b191549ed5d547eb4fd3"],["/archives/page/4/index.html","e20719072998b9f94b2bce2b780463cb"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","682a9b66ae71d3e2bea0117e1cfe3871"],["/categories/git/index.html","3b460ea2edc29e740045e7a94bcaf9d3"],["/categories/index.html","6aa90b23c7434f4edac13d165d136659"],["/categories/java基础/index.html","fc668850a3f4152b3adfedef446f081e"],["/categories/linux/index.html","a46a58d12bb6f7f03682df728cc4915e"],["/categories/linux/tomcat/index.html","86931d32f46f55015c1f3a595d0fbab1"],["/categories/maven/index.html","09d43592ba9ccdbe5855a38f7e480e32"],["/categories/mybatis/index.html","88db5f9b556ffcdebdc6bccad1410831"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","d060809d2e9504ae8331b64e75d559d6"],["/categories/oracle/index.html","9d7657e0856da02e9f2aed5c531d340e"],["/categories/spring/index.html","234d67d44a1cf27ace6f7ef8b0071f9a"],["/categories/springmvc/index.html","8fdd7e609b9cc619119d11c027ca9203"],["/categories/struts2/index.html","a6e9a5b2bf95bbfdf116a280686183b0"],["/categories/框架/page/2/index.html","4864f40a56dd0d6fcecce4f4e3906dfe"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","10d5937da9670ce28832a03bc8bbaeac"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/高速下载相关/index.html","c006a014df8bd6b4cc1cbf6b5449a8bd"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/jitang.css","a1cc8656401f2aa05f2b0a7f1317f9ce"],["/css/main.css","e5a3927080d1f9fa53e4036d5837bbe9"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","16602c16c1cb492d0cf1d3431c6ddcaa"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","be9299b0ae7afc2acd2849ea1d260d0e"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","2c99e03328a800608a9a9b068ecb111e"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","bd6e38ee1f66ac6b81ac76a5becfee64"],["/js/src/algolia-search.js","9b91d36a19be74d90a7d280911cf8013"],["/js/src/bootstrap.js","1bb0358b6128fb4b91f6e084f5b3cb94"],["/js/src/clipboard-use.js","7e32fe3c03efbdd9a7fa2d1ae6a406c6"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","aa86f643ff0111921a0bb32efc638528"],["/js/src/exturl.js","8df8b9623ad9cd26a6bfef6b9c6a6568"],["/js/src/hook-duoshuo.js","c4bd0cfe06a228f6ef000fb129cce4db"],["/js/src/instantclick.js","3f09ec49e6d43aec76c6ea87060aaa1e"],["/js/src/jitang.js","e6f93801403f0471fc905828106032a3"],["/js/src/js.cookie.js","05f21b79308ff2ebda27852bbc14bbfe"],["/js/src/motion.js","6a74cf626f0202fb89b6bf8ede376d02"],["/js/src/post-details.js","f3a0f791c94d3813664dfc1d13724249"],["/js/src/schemes/pisces.js","14c887acdf4232c95e2d80f2252cd647"],["/js/src/scroll-cookie.js","e1e7fdac6eb5bbf1cdc8487cb00f9ac0"],["/js/src/scrollspy.js","2101c01664fc39f1e1dac1f48dd0ec0c"],["/js/src/utils.js","acee93878a7037a190ea46df7ac2da5d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","f53749c082753da4d16bfae03e224480"],["/lib/Han/dist/han.js","cf9bb07e9224b276eaa903d12db06062"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","0d45f55cd42aad96b7b201f241c2e3e5"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","150b5689683701229315be753410d18c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","0a91f14fe2a7dca753c0342c1a682032"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","936467467fbe732c6985b1093a0e85d9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","fefcbaffdec1d096409ecacca9441bc5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c43906ba4d9adc58d6d4021c77c4cf1c"],["/lib/fancybox/source/jquery.fancybox.css","2e1bc7801bdf4a4e3e324a236468d9eb"],["/lib/fancybox/source/jquery.fancybox.js","4aebb353f623ab208a24ab87657beadd"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","5b99a665b5d5e89fbce39988fa798628"],["/lib/fastclick/lib/fastclick.js","11ae32fc7439e9d29c7a35738563bb3a"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","35f62022cf9e7849f18504f78d817c25"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","3d66ab23b0f17e52fb29cbbbcf165c90"],["/lib/jquery_lazyload/README.html","b1ff82407d1d578232d1d8bac232eff1"],["/lib/jquery_lazyload/jquery.lazyload.js","d28a7f8e0f9f8922baf582396bd788b0"],["/lib/jquery_lazyload/jquery.scrollstop.js","72a270b2967db3d51c6068a9fb19573e"],["/lib/needsharebutton/font-embedded.css","325fb54564bc31bab06a47b45915f03a"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","1f5a82a05cca083de3c294abce325ba7"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","31503bc289f9a29c4f591cf9f94830b2"],["/lib/velocity/velocity.js","ab644f89b87973fa6807cd7af2b6b864"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","239e59685af1b1980b486d1b70f390d3"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/one/css/oneProblem.css","94408b112d1452ce20e31efa4aaed627"],["/one/index.html","1ed6f5de8dea9636ed4e0b2095a4705b"],["/one/js/oneProblem.js","db379df1a31ded60097ffec9575509d6"],["/page/2/index.html","14d41e751789159422291b67098ad0ef"],["/page/3/index.html","03894d13d04a85b3d984f416d497a562"],["/page/4/index.html","00450419bcb8e078d3ed89a380dd2904"],["/static/api/css/imgshare.css","a11ea018ead64904b06238a0217e0591"],["/static/api/css/like.css","a55f6a9260456b5e8661a33717c48108"],["/static/api/css/select_share.css","ba5abb7acf977147e9daa044e3a25df7"],["/static/api/css/share_popup.css","69a62fd4ae6a47aa1e493b03a1086f69"],["/static/api/css/share_style0_16.css","f1579db4948fa0b28d1389b3ea2d04eb"],["/static/api/css/share_style0_24.css","e2ec8defd59edb0b63a7909ae6d6f39f"],["/static/api/css/share_style0_32.css","516f97790eb2408f7731a9799cc65301"],["/static/api/css/share_style1_16.css","3083754e76b35446189a3f8111b4131b"],["/static/api/css/share_style1_24.css","fcd5cd49e40160da4d8418ff9d2925cb"],["/static/api/css/share_style1_32.css","67b1d66e7c126b5c8d852e3384bb666e"],["/static/api/css/share_style2.css","139ae00ee740c18cb9724425de277bac"],["/static/api/css/share_style2_16.css","75b1dc8b85475d00e01e59b207e08be8"],["/static/api/css/share_style2_24.css","05022432c47373098b9df758c0f22723"],["/static/api/css/share_style2_32.css","2f934a8bb03fd482949a41bd6fffadda"],["/static/api/css/share_style4.css","385285ebd077ec92f372626780ed9021"],["/static/api/css/slide_share.css","a1e8820cc25d5c7687b02fca27f0f4dc"],["/static/api/css/weixin_popup.css","f54e4b66ed8a8e7bbadcc12eff70bb53"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","34dfe214d11a5c67f99ab987ac097080"],["/static/api/js/base/tangram.js","7ae4e1017ce441d0df84a01ac2cde0f7"],["/static/api/js/component/animate.js","2df0105006df0343a5a8d0812550d74c"],["/static/api/js/component/anticheat.js","3f155108f25b39bd8105423a6ae44f1f"],["/static/api/js/component/comm_tools.js","e7d5b974deb038740422462424016504"],["/static/api/js/component/partners.js","eafb1879cfe97500bffb0c7ed3cb4d36"],["/static/api/js/component/pop_base.js","3aac90f926b9627740e061b65062597f"],["/static/api/js/component/pop_dialog.js","5f8417f4b8a40c51d252de8994459619"],["/static/api/js/component/pop_popup.js","71e76ee6544902add9c0beeef8879a27"],["/static/api/js/component/pop_popup_slide.js","791fac73e5b2f9046f5e912dbb8335a9"],["/static/api/js/component/qrcode.js","7c6d72eeaae2f2f65065721c05680257"],["/static/api/js/conf/const.js","ae0d729a8a57fa0bedb5184a35b3c714"],["/static/api/js/conf/define.js","eb4bf543832b87df2ee046b109eb31e7"],["/static/api/js/share.js","d08b7919224cb7b04f413f3eb2ae6925"],["/static/api/js/share/api_base.js","b7eaf7905e77bd134a6c9f440c1393bd"],["/static/api/js/share/combine_api.js","4f0ebce52c95e9b4280dbc16639b2511"],["/static/api/js/share/image_api.js","681e0009cd9179e37f9d0fb27730285b"],["/static/api/js/share/like_api.js","488a5e9e8ebdab944cec32602d515f17"],["/static/api/js/share/likeshare.js","1a8ae2787ecd8780125d158ba95c8e07"],["/static/api/js/share/select_api.js","d1e158701b67431a97a99157ebd0a3ad"],["/static/api/js/share/share_api.js","9e17e0f42db21b8c53f22e996592b177"],["/static/api/js/share/slide_api.js","2444cd78fbb67ef144d47a39cc935912"],["/static/api/js/start/router.js","fc9c77070924eb6a6dbafe959a783474"],["/static/api/js/trans/data.js","1a8ae2787ecd8780125d158ba95c8e07"],["/static/api/js/trans/logger.js","1a8ae2787ecd8780125d158ba95c8e07"],["/static/api/js/trans/trans.js","b9f9abf4aabd7b44ea23e88793e13b77"],["/static/api/js/trans/trans_bdxc.js","2822a894163ff801e55b0c162f8fdf3b"],["/static/api/js/trans/trans_bdysc.js","32e376930ef587a8135d642847f8027d"],["/static/api/js/trans/trans_weixin.js","791172d2179aa6cb0eb0f2ba416d3b45"],["/static/api/js/view/image_view.js","eec9385331f3244d10bcb9cfc8f24a84"],["/static/api/js/view/like_view.js","9214e14705bef7181ab33cbd842ca438"],["/static/api/js/view/select_view.js","c198d0d19c04ba2bb42aa837c9f49020"],["/static/api/js/view/share_view.js","fc529079b5f4961ef48de3d6010b3d01"],["/static/api/js/view/slide_view.js","d63d2af18d1e3af0874d5e191baa8c96"],["/static/api/js/view/view_base.js","40847eb4434f2db1ed4bb0e926e6be78"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","53837987f3dcffb6ed47c0a1f186f7c3"],["/tags/Spring-MVC/index.html","94fef01470cfbb1af628f784910251ef"],["/tags/docker/index.html","7ef704c8a1382edb004b4a0dea284fee"],["/tags/git/index.html","0a4db2aa46971ec423cedc5214dc50ce"],["/tags/index.html","3121686b11d886c79f324904d41114b3"],["/tags/java/index.html","269bdd8822af80a1fc566e37d31effc1"],["/tags/linux/index.html","7daad5b0248b3ead9a219456f99bdb4e"],["/tags/maven/index.html","b672b6242798a2ea269b08bc64c73fc0"],["/tags/mybatis/index.html","ae8407a12ec04f1cf2e6aa5cf6916893"],["/tags/mysql/index.html","b9695da6c7272bb90c50ed9e8d021b3d"],["/tags/oracle/index.html","b3a358e62a85994056afef5e64d1625d"],["/tags/scrapy/index.html","b670cab2bc7e1902a5c20fa5f9dc0a9f"],["/tags/spring/index.html","9d70f312773c56143cdcdb8c26db7ff4"],["/tags/springmvc/index.html","72e906ba1401bd01b15af3ce937a0676"],["/tags/struts2/index.html","db22fae34eb8b677165049ade3c8ae77"],["/tags/tomcat/index.html","a46fca1f8ca8c05d0559a69cfb314b23"],["/tags/爬虫/index.html","943c3352601fb15af3d6b45e041b944b"],["/tags/百度云/index.html","f134c3ab86f17149a97a48c8b8504b87"],["/tags/端口映射/index.html","d5d5bfda214502a8bcd0e517d6981a34"],["/tags/高速下载/index.html","0158a82274646bf96d9320162cb709f2"],["/xianbao/css/activities.css","7d97aafcfe73e5be97bad42cd76bd58c"],["/xianbao/index.html","b329f47a8585f92dde9198244e878c75"],["/xianbao/js/activities.js","5f2046c2d1c3bcce0e1fe19e9e041d11"],["/测试/index.html","735b1b03f2fd0e9bd96cd1c88fb14879"]];
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
