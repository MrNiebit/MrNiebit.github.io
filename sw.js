/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","bee5db5bd1fb481e4cbb725b37504807"],["/2019/07/20/Spring入门学习/index.html","4b46f91484ffe9d59773c4d00e9d382c"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","feddc4265885c0012975b1d03ae78874"],["/2019/08/04/Struts2的执行流程分析/index.html","ad9ec046ac5f7f6f7810ef791a99aef8"],["/2019/08/17/Struts2的拦截器栈/index.html","a8c6290b5cc230ccf596945fffddaeb2"],["/2019/08/20/ognl表达式和值栈/index.html","adad6a035d21efa2713f127e13e3fc9c"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","b487053cbb09f086a6c4587679c8b119"],["/2019/09/01/Untitled/index.html","640df0006e86ff551fa53580bd001eed"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","21ebe05247674bfa455c0d0539b6a425"],["/2019/09/06/MybatisUtils工具类/index.html","804c7a65589173917e04196bb23820d2"],["/2019/09/06/Mybatis使用注解入门案例/index.html","aa93b1eafa3bfd08a01bd1e362eb6c66"],["/2019/09/11/Git笔记/index.html","0574ac85d3f63e28ee77ebfb0f41dc70"],["/2019/09/11/MyBatis的动态SQL/index.html","966583246ec03f24f0d99a8c70d5296d"],["/2019/09/14/安装Docker/index.html","5ae40a494a37a096827dac5a4c55ebbd"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","9d76ae226f0667ca97cb06c1c8f9a2b9"],["/2019/09/21/linux服务器和tomcat部署/index.html","a4cd3d6a4b10580e14481aa746d471f6"],["/2019/09/21/maven创建spring入门项目/index.html","86eee3b1139496a31c2a53f53db324cf"],["/2019/09/23/mybatis多对一、一对多查询/index.html","2cfc618be620801092bc05043e1df67c"],["/2019/10/08/Maven入门学习/index.html","c1312fc18654a21e84e85960aba5e0f4"],["/2019/10/09/CentOS安装Dokcer/index.html","38a20c82973c439073010a44fb10f698"],["/2019/10/09/docker学习的入门/index.html","4da11e1f02872fae469e0860ef5c8b66"],["/2019/10/09/linux常用命令/index.html","89aa74141e4cd9f728c7d14b7f78f98c"],["/2019/10/10/mybatis单表的嵌套查询/index.html","7d83c157b0cbb4c89ac669a246fe2691"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","148a4967765cbde4c0cd755b1a145ef1"],["/about/index.html","0a8499c613d3ea723de1b574caab7992"],["/archives/2019/07/index.html","b9535905743af49d973ce0184a0f85b0"],["/archives/2019/08/index.html","08e62377f77a349116a1f5b6bf6635c1"],["/archives/2019/09/index.html","3575d12b1c7353089f4242ff42e38a73"],["/archives/2019/09/page/2/index.html","870661719864a18b52b4306d7f266bb6"],["/archives/2019/10/index.html","06ef392853a500cc54ea62603a0a8bb4"],["/archives/2019/index.html","723599975fa9010f61dbff34fee0e179"],["/archives/2019/page/2/index.html","21ad11b849e3560cfe4c58d8da180265"],["/archives/2019/page/3/index.html","3b61ba27ff833a3db7b42fa82a91db67"],["/archives/index.html","da3b7817d9e41bd6a4b91e593865a68b"],["/archives/page/2/index.html","802066efc02851e3555a437bd54ca28f"],["/archives/page/3/index.html","8e696863d229e4b4179343e9c164e591"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","5fa4b676825d8c8cc01baf78acc8c6e5"],["/categories/git/index.html","22adcfe1855d447b48c115e2bf4142a6"],["/categories/index.html","33a5631535bf777ffd38af5fe5c46b32"],["/categories/linux/index.html","0b1df313b6e9c6a79c5549cb374b242f"],["/categories/maven/index.html","c174af428d33892eb68916dcf35992b4"],["/categories/mybatis/index.html","eb731e352db70bbc6ddc401525b3836d"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","fabe1ac67a8c6ad8209cf4d3357ca303"],["/categories/框架/index.html","5b7772aa811c7bf88dbde84aaac887b2"],["/categories/框架/page/2/index.html","ca6d855f9ff083de077223a170ca1636"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","7a6c3d482e33d366fc946e3ed15d3b92"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/高速下载相关/index.html","0314ffe1ab473b43a640364877d61903"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/main.css","2747f4c7c1207794920c6ab8b4ab26f2"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b2dcb2279aa4ae88a1bce3fbc1d4cb0d"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","59f2a5bc73c4d943ae1e41e9752016c8"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","8944b1ed96078a0fa1fac75d28360ace"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","f549d6959da3e832819e263e8463549c"],["/js/src/algolia-search.js","9fff5cc849fcb234d60eeb4f3c55de25"],["/js/src/bootstrap.js","77d852e43f2dc547b6987ff73cc720e9"],["/js/src/clipboard-use.js","3dc4897e921b66d0fce9d5396c2903d3"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","5f1afff6afec74879095a56898ada732"],["/js/src/exturl.js","95752617f865686ff780892cd9831478"],["/js/src/hook-duoshuo.js","43b724420a213d0612865a9192ddbc4d"],["/js/src/instantclick.js","b592b20411bbf562835412a57392c44a"],["/js/src/js.cookie.js","9408475724919745c05ef31afe64a3d2"],["/js/src/motion.js","015db741f0292b5dc50d02333687fecd"],["/js/src/post-details.js","5d68fd08b25d323e381b1f96819d6869"],["/js/src/schemes/pisces.js","f5d099c8d3254244d47ba42c61d69c94"],["/js/src/scroll-cookie.js","5081fa7d9589f1c9d7a26342084d4597"],["/js/src/scrollspy.js","70513bad47fa00f95e114be9893a1225"],["/js/src/utils.js","7027c10397008cff3698f880184756c0"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","da204155a3a899bf2511ae417fa011e5"],["/lib/Han/dist/han.js","8b4afc538bb33e13b2e081d04c178fdd"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","8f6e0dd81f4b60fc8a01bdb670002d1b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","914e0abbca62edef3af3777a35de3540"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e6fbc66500f4c475a3587cb7a4c6c733"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","6b85a034c7b5a6030d6a726b623aff15"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c50004d9fbb90673eff44f8ccb18bbfa"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","10a1e3a07ca58e9961c9d286be7d90b3"],["/lib/fancybox/source/jquery.fancybox.css","dd5781db0d99d849559517e21eb889c4"],["/lib/fancybox/source/jquery.fancybox.js","59dda5b46250c3db7b978deb9aed3659"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","bed31a9456a16015b26bc66abec87a8a"],["/lib/fastclick/lib/fastclick.js","f46a9e1fb3c4b11c3ce633886478437b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","311de4cf56e5d22b6fdfe12c41017626"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5aab765627b671f52bef6c11507d20e9"],["/lib/jquery_lazyload/README.html","bf7690a85f178f4ee976d95bafa251e3"],["/lib/jquery_lazyload/jquery.lazyload.js","b93e3e3725a63b6749d3c2935502ae28"],["/lib/jquery_lazyload/jquery.scrollstop.js","52dc4e502c84cd6c7ff80aa61e687f69"],["/lib/needsharebutton/font-embedded.css","d715927da020f8d03a3e3ffe53a11974"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","910f3bee8f0ea4180fb1cb8707140398"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","90a0a5d81e0a5fe0040cd9d539dfc626"],["/lib/velocity/velocity.js","7c65d52975736cfd3f64da7887c5804f"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","528aaf481fe0d77cd51cd092c8a4c0fc"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","f3ef9554f54d6200e1afec51bf6ef552"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","cb99763b2819704261a380e29888dc4e"],["/live2d-widget/demo/demo1.html","39952cb55a55dd591b4db2248b4683ca"],["/live2d-widget/demo/demo2.html","238e7f723bed798e81797e6d21b7073e"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","450ece314836d7b31fbb4a5b9e8f82a3"],["/page/2/index.html","261a74c736a80e8097819b350d87e7ba"],["/page/3/index.html","79abcd6654999b8e5faec8189565ffb7"],["/static/api/css/imgshare.css","f8ec412bff2e88d56900be976fe9b3fa"],["/static/api/css/like.css","355234f2040b011ce175bb17d7ad88cf"],["/static/api/css/select_share.css","0fe7d0a527b3cc2f60393c277462701f"],["/static/api/css/share_popup.css","7baea3bdff750f2cd51a899542ee0524"],["/static/api/css/share_style0_16.css","5fd1027db301e8d608d9c66d16fb9834"],["/static/api/css/share_style0_24.css","8f3ee64725dc6ed6ab5093a48c0c383a"],["/static/api/css/share_style0_32.css","5f32fe6905641a418af12c5d7eeae5e7"],["/static/api/css/share_style1_16.css","004e8ee391b9c73354bc754b52a4ac8f"],["/static/api/css/share_style1_24.css","1fe292dabee5a6dd36a770a8f45b1955"],["/static/api/css/share_style1_32.css","9da7bf932199bc2d3b7a7dcbda108eba"],["/static/api/css/share_style2.css","83b7dc8778243903009a3780f6ac18d5"],["/static/api/css/share_style2_16.css","5c051707bea948b27f48a8dd1579ae08"],["/static/api/css/share_style2_24.css","575e395315e3988d2d81eec8f263214e"],["/static/api/css/share_style2_32.css","47c70c92ab6382d274d13ad288426e99"],["/static/api/css/share_style4.css","2b6f605e7258e81eb4481344fd86188f"],["/static/api/css/slide_share.css","1285cdcb5211bea277193f1b211218a1"],["/static/api/css/weixin_popup.css","393e156cc3773c5733802b385d490b36"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","1d10227c3448f8e1e0bcfbb29de372b0"],["/static/api/js/base/tangram.js","1d682fd5d62503538e6ad128df3ffea9"],["/static/api/js/component/animate.js","43463384f0e391fcb346387df5c1819d"],["/static/api/js/component/anticheat.js","cd9cc8f5a29fc6896ccd380654d732ea"],["/static/api/js/component/comm_tools.js","ca9cb680309dfe22addda215d75bb6ca"],["/static/api/js/component/partners.js","8950c53ecdac49f5df2eb38bcfcacbe4"],["/static/api/js/component/pop_base.js","f1bd8fb7691e1d432b9aadf45aa87c2e"],["/static/api/js/component/pop_dialog.js","038fa4a4485c6fd18c5cb91654a44c0a"],["/static/api/js/component/pop_popup.js","f27e759763a1c1da7a2b6d9e27c10032"],["/static/api/js/component/pop_popup_slide.js","1c44fc1fa06f229b56a1b4c1584e76ce"],["/static/api/js/component/qrcode.js","4e6eca06bd9ffdc20397009ec8f7089e"],["/static/api/js/conf/const.js","f8090765bbb1d95f99424238df851ffc"],["/static/api/js/conf/define.js","7181cf743a8b3c356c0e816cbc861ae7"],["/static/api/js/share.js","a8723410e254440caa0f311f2b19fd7d"],["/static/api/js/share/api_base.js","68ef4d2a9c6173eb2e28d555c9a6bd9c"],["/static/api/js/share/combine_api.js","cd7cef8be92455c9f315ee86159ddda2"],["/static/api/js/share/image_api.js","411aaae0d34b7b7e90be5242632dfc99"],["/static/api/js/share/like_api.js","ed9f27e5534264df69959fee3f6a43fc"],["/static/api/js/share/likeshare.js","6a890908eaa257d05119087576cc1dfc"],["/static/api/js/share/select_api.js","168eb90b34da0b8940212674b496e564"],["/static/api/js/share/share_api.js","398232fd81df0f3e17535a4a8a12c864"],["/static/api/js/share/slide_api.js","c26d30e0897438dbb8ad254972cfecdf"],["/static/api/js/start/router.js","ee5dd6f6f9b67293f6f9dc7ec89cdc24"],["/static/api/js/trans/data.js","6a890908eaa257d05119087576cc1dfc"],["/static/api/js/trans/logger.js","6a890908eaa257d05119087576cc1dfc"],["/static/api/js/trans/trans.js","3859277396e14e241bfa527980552af8"],["/static/api/js/trans/trans_bdxc.js","c1ff3867a7594a81d8c8d820b23e6614"],["/static/api/js/trans/trans_bdysc.js","f0b571773c9e7ea11f08c3eb8834982e"],["/static/api/js/trans/trans_weixin.js","7af49a1f797a0e1a3f7a4cbf501e66dd"],["/static/api/js/view/image_view.js","db868a524f7df618a747504f3ef24df9"],["/static/api/js/view/like_view.js","0cfa2cbb79e425a78053e92cdfeef7d9"],["/static/api/js/view/select_view.js","78ff3c9a1ea7d759387026939de64794"],["/static/api/js/view/share_view.js","52a52cb33aeda0ab7bd0b71806ca2b11"],["/static/api/js/view/slide_view.js","436544281ec6e7440a074c78f1af879a"],["/static/api/js/view/view_base.js","f3d8af2cf271e84f2721e9188f8cebd9"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","7b54ab976c05fa40a33bf93dab9f5a87"],["/tags/Spring/index.html","668f7ffc90f3b47f575ac6d8701a7207"],["/tags/docker/index.html","13e044d5352f8411fd06f1c552ecdf89"],["/tags/git/index.html","9ec39e82a2e4ab6867815b6a47cafa40"],["/tags/index.html","e474edc75c0d1b1f801a57e1eb342bc2"],["/tags/java/index.html","8f5f97b7f8ba93f936cc6eddcb57e2b5"],["/tags/linux/index.html","78c23e0d3e06d7483f9bf081e97e69a7"],["/tags/maven/index.html","aa8d855e29f54ec973ad05cac4a7f166"],["/tags/mybatis/index.html","77e2f62404e169c5e5ac8ca710dc9bb5"],["/tags/mysql/index.html","1b586db74e2cfe79b8fbdd021485b38f"],["/tags/scrapy/index.html","195d3178623a6915f9eac33e2b33502b"],["/tags/spring/index.html","20e9474847aafeccb40344bdb564c7e2"],["/tags/struts/index.html","5b12841e390f157f787b9f4b83842ad2"],["/tags/struts2/index.html","db7324d94e3167f31c924ded9771420b"],["/tags/tomcat/index.html","8a0ac314cf94ba33e913fa9af96f4e5b"],["/tags/爬虫/index.html","050404e88b0a31ceaa8e3b721d39c890"],["/tags/爬虫框架/index.html","c437ce812e3c59cb53448ad3c60e1ae1"],["/tags/百度云/index.html","385e441fb681ca2178adff777f86a263"],["/tags/高速下载/index.html","3a1e1d0fc295e646d439209fce61b6cd"],["/测试/index.html","492f27b1a68620d2ac28a904cf695701"]];
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
