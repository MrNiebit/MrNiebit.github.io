/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","0c1bfb0681e38b08e0b0569207551ab2"],["/2019/07/20/Spring入门学习/index.html","e154f3c25514580bce21a59344082f91"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","a193c22332523ed1c10ea9f7bb1de417"],["/2019/08/04/Struts2的执行流程分析/index.html","65381cf1d86a5c3e1c48489b643a5373"],["/2019/08/17/Struts2的拦截器栈/index.html","e049ab50424a9ed3b33779461981c7f4"],["/2019/08/20/ognl表达式和值栈/index.html","655ee7ae0aae5e0d2efe03a1675b6d32"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","53a917da394c5e44768fee000623f085"],["/2019/09/01/Untitled/index.html","a1ab43eb4625ef1b1edcbf9003494271"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","5c6550f4b16460f9f420c88ae5361327"],["/2019/09/06/MybatisUtils工具类/index.html","c3caaf15d94062e0cd10aae851dcfef2"],["/2019/09/06/Mybatis使用注解入门案例/index.html","b0e9f528894af259d48f4915d7deb7fd"],["/2019/09/11/Git笔记/index.html","ef52924cab13f015bae26932d9bc05df"],["/2019/09/11/MyBatis的动态SQL/index.html","de24c54cee1aa609a4d68626a4773b21"],["/2019/09/14/安装Docker/index.html","b223a5d2279992332626057579535420"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","c25487b1c54ddd693e7ec262c5e5a44f"],["/2019/09/21/linux服务器和tomcat部署/index.html","6131ec62765cfbf7044749d30c0ce2e6"],["/2019/09/21/maven创建spring入门项目/index.html","19ac00aeb1f2b12be83924e278c1d920"],["/2019/09/23/mybatis多对一、一对多查询/index.html","a9dff03dad0c01bc8bce37655456b1b5"],["/2019/10/08/Maven入门学习/index.html","d2c92eecaf90dca00943326c29f79383"],["/2019/10/09/CentOS安装Dokcer/index.html","02731445a15a92b88f7597ae697c5942"],["/2019/10/09/docker学习的入门/index.html","38c42cae0e0af46b914a83501111624e"],["/2019/10/09/linux常用命令/index.html","a775c47a05d98173fe76bded3d4bbc86"],["/2019/10/10/mybatis单表的嵌套查询/index.html","38697085aeb55c524d97f1019aabdf61"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","366635d0f7c8fe5c11e777bd3bfd4c85"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","eddb5968a2ed175f39625d22b03ba051"],["/2019/10/23/docker安装mysql/index.html","7952a57a2f05e2b150dd76060961ecc2"],["/2019/10/24/Spring的属性注入/index.html","b408bb187246367f975c57a1cc1e9907"],["/2019/10/25/模拟电梯系统（java）/index.html","3fc5fd4095b4f403eb49e97c022fb254"],["/2019/10/26/Docker学习之二/index.html","40d0c981b5340e1dde7441c356d9a505"],["/2019/10/28/Oracle数据库例题/index.html","96f757bcdb0c3f147c6790c970ad74cf"],["/2019/10/28/linux端口映射工具/index.html","e17c59db4e48f87d5633b22a987dd352"],["/2019/10/29/Untitled/index.html","6bb056baa2e765917097d4e5eabb1eb4"],["/2019/10/31/Spring-AOP学习之（二）/index.html","b5631bf29bf04182f3a87f571bf72b56"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","9370267c327f433770eef7d3a44b22f1"],["/2019/11/02/MyBatis与Spring的整合/index.html","a44f4203f7e38b3061be59965e1023ec"],["/2019/11/02/Spring的事务管理/index.html","3ab4707fee57341ea27242cdbd95c8f0"],["/2019/11/03/SpringMVC入门学习-一/index.html","d77b3b1d8afaa34c6e46f6e192fed0d8"],["/about/index.html","a3b632329cd4e9d35f3bc3e392f66371"],["/archives/2019/07/index.html","3fa988ed8ddf9ca45b88f78530b1cca8"],["/archives/2019/08/index.html","dc8d9fa5687754733c5b2acd389b1ac3"],["/archives/2019/09/index.html","8d3d7bb63f752a14c8cddf0cb7f3181a"],["/archives/2019/09/page/2/index.html","bca9f39a583b3b6bd1774e4ca2d33dbd"],["/archives/2019/10/index.html","67c7d99c2ba774088a9ac36b91c661db"],["/archives/2019/10/page/2/index.html","94acb0e1d44bd45cfbf61563e2913761"],["/archives/2019/11/index.html","34322f7730a0afc9fb5262f6902c4a27"],["/archives/2019/index.html","46603f87e752260c05fcb1fc60e14630"],["/archives/2019/page/2/index.html","1dd6ea138c76276090b77ef25bd9039d"],["/archives/2019/page/3/index.html","01333e290f7bccecae6d4cbf55290089"],["/archives/2019/page/4/index.html","a89b1fb996f37d3e00854f3a31e89ba7"],["/archives/index.html","e338204f3953cfb39fa7faf0ee74cf63"],["/archives/page/2/index.html","e96e97f8dbec60d9bfd2560d10d7f77e"],["/archives/page/3/index.html","5b08f4e72e665c119ca979358bfe90c4"],["/archives/page/4/index.html","707c5a702629a25d5607725e6d3b5ceb"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring-MVC/index.html","cf31ef3313b60df0df45a2c32d496c3d"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","63ef4df7657c847c8050bdcb7b5e7420"],["/categories/git/index.html","8bb25e086e904f1ef4b4288a227431fe"],["/categories/index.html","69c2d79a58743f7cf93d4faac9ccafd2"],["/categories/java基础/index.html","6cf79828b04cf30d4e5aab81ed2b1803"],["/categories/linux/index.html","d37aba4ae3b9fc63e8c4b1629bf6800e"],["/categories/linux/tomcat/index.html","dfe675a36e11602222689e674a58ce9c"],["/categories/maven/index.html","7053d020534e22a89a3971a5cab8a535"],["/categories/mybatis/index.html","d214a47d8f4a111c578688ccb4371054"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","361e51a607893b1150831007c7d2ab89"],["/categories/oracle/index.html","1b800c18ac81e1c12d2193673d3c2c02"],["/categories/spring/index.html","314479d73a86e735e397976a9ad7b77a"],["/categories/struts2/index.html","ca66fb33aa0b5a74fa4c1ad4eabe3eb4"],["/categories/框架/page/2/index.html","4864f40a56dd0d6fcecce4f4e3906dfe"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","061f88eb7ab96070a79744b9c58b1f35"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/高速下载相关/index.html","067c33d44e38909c1d2ab8c316be3a2f"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/jitang.css","bce02771626e2552e906a5acf8a23f0d"],["/css/main.css","389f539c98cd9cf5c9af8396a4a70470"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","9f697b222721227c249886b8e6649817"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","9279d32c29e31af830f5353570aabdfe"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","1c16ff664070b5d8e08484d29fdb8eb5"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","b3667856a278f21b2242a38d70ea6b8a"],["/js/src/algolia-search.js","5cd2b8a99e81c18f6e43d738f46b29f5"],["/js/src/bootstrap.js","2b9b4a9a47273d85fef4cad6b6087908"],["/js/src/clipboard-use.js","f4bc4050f3a358b1fc18e81f5761fad5"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","b5fbfffb9de4a6d5d2aff2737181a723"],["/js/src/exturl.js","d66a5d8ed04ee27dfae7a33f143d2439"],["/js/src/hook-duoshuo.js","ba965469dc84e98cfb39bbd27a3f5b43"],["/js/src/instantclick.js","cc180b9a24f4a5fa5065491c879ef2c1"],["/js/src/jitang.js","1794e62b098e8a1fe2243934f98ff4e3"],["/js/src/js.cookie.js","3f1a8472cde22863c2e7457d270af0a1"],["/js/src/motion.js","ff2e47be9bff36a358bf94dc2c3e2cfc"],["/js/src/post-details.js","becf3713db9a8cd2c2383cdf474c389c"],["/js/src/schemes/pisces.js","3bbf871378983fed65bd259368474aa3"],["/js/src/scroll-cookie.js","16e2946f2d1537ad70dbf68197b3737d"],["/js/src/scrollspy.js","b58ad25c9e5aaeb5093bf4c41c0597db"],["/js/src/utils.js","204d52ea3b4b6308f42e67c4b73f6262"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","4dfb835a9c7fc1692fa6b11eef193ed0"],["/lib/Han/dist/han.js","b6c41ce8cbb313efbc55e4433ed995f2"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","9a59ec31bdb7a214a901564bfc313072"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","242ddc6d804d0dda96cb5d6b85956607"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","311e4e7d62361d93554728d21878ccc0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","4e9a91293ea28ff2cd153f2866a67362"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c356892c86400fa5261aecdb31de02c2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","b229b36fa331ca0c62415f552414747b"],["/lib/fancybox/source/jquery.fancybox.css","36427f0dcbee28a83321587837723086"],["/lib/fancybox/source/jquery.fancybox.js","cc627feb6c26e9f972d877092b5cfe98"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48790fca31f0001c2f71c4865c7b9c74"],["/lib/fastclick/lib/fastclick.js","a46eff57e540762b8da76e73db49ea5d"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","5e2f030bd2db5616ce78df5bfb153c3c"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2fb2edf8a9e50278b6b2a79690cc35ac"],["/lib/jquery_lazyload/README.html","b32b60cca977ce8675ea82a73552a0c6"],["/lib/jquery_lazyload/jquery.lazyload.js","ba962a3752cbdb360887eeb33bcdef2d"],["/lib/jquery_lazyload/jquery.scrollstop.js","ee70291917138e50a9fa229090be2f8a"],["/lib/needsharebutton/font-embedded.css","e162fee7b9f1c0b0505a01939f62672a"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","d500ce7cb2bc281a8b8071db87a2f6f4"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f17bca8407dd759db08df4860199494b"],["/lib/velocity/velocity.js","bcab7bdb004e4ce3f6f060c79fd90909"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","9ffdefe9dae131dadd8cc3c4b7be9be4"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","650a177516a6e6fdd96b65ccf5ab8e82"],["/page/3/index.html","f987d76e89dd66b4bbd32cd5ddc05841"],["/page/4/index.html","227a7371f873ede4079e0e9e6512ec91"],["/static/api/css/imgshare.css","7e437486a6b8f8ab53aea92d1ecbbbe5"],["/static/api/css/like.css","543bf2df8cfec777921ecef8b2929f58"],["/static/api/css/select_share.css","65904cbb3a03f79bfa4e2a6e2cba91fe"],["/static/api/css/share_popup.css","9b908e444a813c23c334a947a56a70ec"],["/static/api/css/share_style0_16.css","ac64be8f34ff60f28c6c96f78f0ed1e8"],["/static/api/css/share_style0_24.css","8a775586bc0d78b6af2ce7003c42dd56"],["/static/api/css/share_style0_32.css","1c3ffc3fbf01f49e8d84b29219921a8a"],["/static/api/css/share_style1_16.css","c14808b440bc36e8d7ed0ebcfcda0fd0"],["/static/api/css/share_style1_24.css","df5bd05303326c4b0d819320c2bce3e4"],["/static/api/css/share_style1_32.css","2b188cdefc227698e7564168b7ed6d72"],["/static/api/css/share_style2.css","d104f34785db13538527b2c00ddfae29"],["/static/api/css/share_style2_16.css","990cc39b1ad6e4b0904450526fc4c74c"],["/static/api/css/share_style2_24.css","1d6d12bcfd0f269679a789bc9c0f5bfe"],["/static/api/css/share_style2_32.css","d2c14a3694fed58258dd776493a31013"],["/static/api/css/share_style4.css","d362703e74e7b65b008fe7fefcccfe1e"],["/static/api/css/slide_share.css","054a9943762700e3caca3c0bfd07c834"],["/static/api/css/weixin_popup.css","0a9f570d68c4afce73aabca0cc1ba031"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","e665cccb622430bd62c6d18bd5359bb3"],["/static/api/js/base/tangram.js","f7f212c248ab9a6f9482ebbf6fa859af"],["/static/api/js/component/animate.js","482a4e404fcc840702f8b1bffaa74094"],["/static/api/js/component/anticheat.js","5ac983b42d66685ba4f0f5952e9950e3"],["/static/api/js/component/comm_tools.js","df2246c4587fb03622024685e04c0af8"],["/static/api/js/component/partners.js","52ac90286f8316c72ea3ab11f51fadf1"],["/static/api/js/component/pop_base.js","e9bd8a28026c13519c1eae7f0410dee9"],["/static/api/js/component/pop_dialog.js","6444a828abe8e6018f3a15b129b40d18"],["/static/api/js/component/pop_popup.js","52f530e6eb5c8933534cd82fc8c015d1"],["/static/api/js/component/pop_popup_slide.js","c435f7fff3b3bbaece88bbb21b251832"],["/static/api/js/component/qrcode.js","b612f024a04b6f21e35753a8148786b9"],["/static/api/js/conf/const.js","29be70ed0c8d04dea24b9c8b8698da40"],["/static/api/js/conf/define.js","5857e600b0144352c0d8fea1313fe6da"],["/static/api/js/share.js","7ad0747a64368d9fedb0444e48276f26"],["/static/api/js/share/api_base.js","7ff893cb8b78f2f987a1d9a04ebe1922"],["/static/api/js/share/combine_api.js","5732845d8fecf1b10efac4534f8167b2"],["/static/api/js/share/image_api.js","6cee247ee0472927384ac229d72a58c6"],["/static/api/js/share/like_api.js","ee787b9ac88c11057f63977b9fd59e0b"],["/static/api/js/share/likeshare.js","c0f8cc9c4e29fbbd45e90497a9e9c7b6"],["/static/api/js/share/select_api.js","fc73b6865ce3606e562e9df7b4415252"],["/static/api/js/share/share_api.js","6bed25bbe5853aff342a2743f452b0ec"],["/static/api/js/share/slide_api.js","fadbbd467d575a0ff219e4f8ffec7310"],["/static/api/js/start/router.js","24d73b1265385d8eda715ba9e35e4c1f"],["/static/api/js/trans/data.js","cd35b85dc6e90ba818f9c085b1586a32"],["/static/api/js/trans/logger.js","cd35b85dc6e90ba818f9c085b1586a32"],["/static/api/js/trans/trans.js","0f98824a223e14c59702083bafbf8edd"],["/static/api/js/trans/trans_bdxc.js","4a765f2bdeeefb60911044258b20db1f"],["/static/api/js/trans/trans_bdysc.js","ad50e27ba1f28214649ac19d5470fff4"],["/static/api/js/trans/trans_weixin.js","5637816e25f9d7e19593c59ffc1b45ba"],["/static/api/js/view/image_view.js","6ca0c2947463cbf0872c4233c519be07"],["/static/api/js/view/like_view.js","b2ff0f175760aca983370fefac4cc727"],["/static/api/js/view/select_view.js","90ffb9f20352de90e3befc44b643b90a"],["/static/api/js/view/share_view.js","add3939ca06a3bd3f543b0e2c573455c"],["/static/api/js/view/slide_view.js","4a35d5a4368dfd8b256faf2df91d5756"],["/static/api/js/view/view_base.js","43c2cf646b9c26ce6e9a86c7858bced4"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","69d01c9ed40fe3285b37accc138b132d"],["/tags/Spring-MVC/index.html","4a0dd452969cce6f94fcebe814389139"],["/tags/docker/index.html","b78c32c000e2ca68931e5a07b464f61f"],["/tags/git/index.html","01fbe713c20811f5445de34dfd384a48"],["/tags/index.html","5f409bba8576ef5029720393d7782573"],["/tags/java/index.html","f4592efbadf278ebad499809374a34d0"],["/tags/linux/index.html","700975bae7e7407c6ef0db8734336820"],["/tags/maven/index.html","37d63a9b3895446a1103e5fc5031164b"],["/tags/mybatis/index.html","c9fcf85a8673cd38210f2cf28b8d8c0c"],["/tags/mysql/index.html","3d818b32c35fbd61f7dfeac9420e5de0"],["/tags/oracle/index.html","660d1c295762d431acca2d156be7951f"],["/tags/scrapy/index.html","32b1bc0278cfaecefd9ce0eb0633eb80"],["/tags/spring/index.html","10ca479915b9ca4b9ca61cd4a45bc2f7"],["/tags/struts2/index.html","0a55fd8d339afd43d540c4ffc2d1ed0a"],["/tags/tomcat/index.html","bb8e90a4fc21f5cfa846e367b7e01fbc"],["/tags/爬虫/index.html","d4aa4b4dad454f29b191aad2edd28d01"],["/tags/百度云/index.html","029164e04bf46d8719c7a46d6f0f57de"],["/tags/端口映射/index.html","9923053f864d69f166b0d43449da11f2"],["/tags/高速下载/index.html","3c3b19542a923a458b0b33cec95143ba"],["/xianbao/css/activities.css","1dc05a2d25a04ec1199a4acd6deccade"],["/xianbao/index.html","476acbc4cf8d4f812bf19fcb8dbaf618"],["/xianbao/js/activities.js","879b04eb0387b7018d69b8beb83f4499"],["/测试/index.html","50789f1366c3a30af6bdb051acc54ab0"]];
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
