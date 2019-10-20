/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","d311269931444394b51c39a349c8c19d"],["/2019/07/20/Spring入门学习/index.html","582d548ce0bafe123ab178a59371299f"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","ccf71e55d3511ce598ac9294c1c738c1"],["/2019/08/04/Struts2的执行流程分析/index.html","14991efe6ab9476b26a7631b306cd7d1"],["/2019/08/17/Struts2的拦截器栈/index.html","bc8fccbc44d680cba441732e153cd674"],["/2019/08/20/ognl表达式和值栈/index.html","a9f977beedb6f622f8811db8641fd552"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","4c7ea75963c0ab6318d18cd5e4aa3028"],["/2019/09/01/Untitled/index.html","a1ab43eb4625ef1b1edcbf9003494271"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","cd85da391e790c4b166dac92c8d96ebb"],["/2019/09/06/MybatisUtils工具类/index.html","8437b2f032adc7a31a3a216c8261943f"],["/2019/09/06/Mybatis使用注解入门案例/index.html","5f276430b70ee249bb25b135b34a15ae"],["/2019/09/11/Git笔记/index.html","00afe781ef9eebf0cf7c89300e54a1e8"],["/2019/09/11/MyBatis的动态SQL/index.html","fe3cc428afe85bbeacdbe79b848a8b71"],["/2019/09/14/安装Docker/index.html","5ab30002ee43975e91f7b5f89620da9f"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","a59f5ef88b43c887ee46f21bad9f04f9"],["/2019/09/21/linux服务器和tomcat部署/index.html","9c2a0273bf1a9d719c3d31e6ac04be06"],["/2019/09/21/maven创建spring入门项目/index.html","3a9ceccf153eb89effa73c9ae646d9e0"],["/2019/09/23/mybatis多对一、一对多查询/index.html","09b58078c8e6699616e0cb82ef46484d"],["/2019/10/08/Maven入门学习/index.html","4019d85a6e350fc453e19297809a4dd3"],["/2019/10/09/CentOS安装Dokcer/index.html","c0b5b28726cfb8f3c41b15f2ab9407c7"],["/2019/10/09/docker学习的入门/index.html","3bcdd40f04d660cc80846790c8686bf7"],["/2019/10/09/linux常用命令/index.html","306c57004be4bd59a31fd883713c63bd"],["/2019/10/10/mybatis单表的嵌套查询/index.html","01439711fc1855e5cd62e47839d3f8f8"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","9d42f07a5f4b61bdcb7c70149a2c09dc"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","b8f60a03886dc027cbb3e6169764a82f"],["/about/index.html","e7cf3988f363897ff30bf14debcd8f02"],["/archives/2019/07/index.html","ef472a4c59900107a458b1aa2cdca1a7"],["/archives/2019/08/index.html","ea84f2c24289bc60d77d71e10897372f"],["/archives/2019/09/index.html","8fb3a610c19b85d0580585b1446a765e"],["/archives/2019/09/page/2/index.html","bca9f39a583b3b6bd1774e4ca2d33dbd"],["/archives/2019/10/index.html","4f632d8c7d01ad86527a5e634e79579a"],["/archives/2019/index.html","5e0c913e2365c5089ec7c5b38e8aead0"],["/archives/2019/page/2/index.html","04900379f7e3404642e32b291abe5558"],["/archives/2019/page/3/index.html","a9395ddd9bb5796ab130c3a6b9d7115e"],["/archives/index.html","92d8f62665b18cdf5d5b0279471d5386"],["/archives/page/2/index.html","8bf526bbbd6d881f81c938ce4b649598"],["/archives/page/3/index.html","0bf576983b9d7eb5ce911f961faa2051"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","262742ff21bfd1c7dd3d5cd65e6abbe1"],["/categories/git/index.html","d08228861053248281d06b65ca3fc4cb"],["/categories/index.html","d7769707c9211ebdaf15611c2c899b07"],["/categories/linux/index.html","0e1b15f3e94653eba960a4178ee0b87f"],["/categories/linux/tomcat/index.html","4d63cecd4117dcaad55d4fe26b4fd8b1"],["/categories/maven/index.html","367dcac9eee125a2a5f42830088cb92e"],["/categories/mybatis/index.html","de676a249fbafe7f718453d37f1f1402"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","a211eea41626cad217d1036e22c793b9"],["/categories/spring/index.html","e00b7537d689193856a8b544e866b650"],["/categories/struts2/index.html","b7677b7962e2f2302b871e10fc062e11"],["/categories/框架/page/2/index.html","4864f40a56dd0d6fcecce4f4e3906dfe"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","245b4946dc602d540bcecd9ee73f9e8a"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/高速下载相关/index.html","80520749b849710ce222d5ccbb213e0c"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/main.css","e92f0c142281638e5d6f2f6f6b87f088"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","ab83bb028f98b4ec28e651cf2c734e3d"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","077bd394d256d65742d6d2a1d5580156"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","660ef0512219021db5ad752bf6f1b61a"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","dd252e04a8e08bbf4d1e20207ba64563"],["/js/src/algolia-search.js","59282c4b92e1df759283aa001d324cd3"],["/js/src/bootstrap.js","e99910052b558ba8780b22fe9ebba8c9"],["/js/src/clipboard-use.js","c6de8a4dac239022d4fef1d7fe286913"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","cef2a5e39073afae20ca411a4d15cf3f"],["/js/src/exturl.js","c3bb982bdbdb7aefe2876381ba84b0aa"],["/js/src/hook-duoshuo.js","a806956952954f12daa6ca7eef72ae89"],["/js/src/instantclick.js","52c108e21b91db6916a019a0b7aa1220"],["/js/src/js.cookie.js","d2ff186c02b0e0e6b01643ed2ace838f"],["/js/src/motion.js","d19208a281330f67b01693ec48882532"],["/js/src/post-details.js","f718dc8a468dba7d293b88fac1192ae0"],["/js/src/schemes/pisces.js","c5d0232fb5ee97fe55245be6c598742a"],["/js/src/scroll-cookie.js","15e8492007a0571dace024ba5dd6c40c"],["/js/src/scrollspy.js","0f001b92a8baff9f785be3c684ebcb03"],["/js/src/utils.js","e1ef5b9dd66652aa8c853ea4e012a63f"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","1dc2fe15f37ec21de6395c8f1dd24a66"],["/lib/Han/dist/han.js","31dd4b94027029733fe5c09e4c9e0d27"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","b5b01444a5478fa85884d142fecf907b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","9d665b5fd24c794bf2b1a4e47395c9e5"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a611da9b9bb7ec1d575baff53f14052b"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","cfcf2861cec13c6fc111772a0946e502"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","949ad6f7c248e7be59761be802d111c3"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","553c50d3eb4863112562b1af20f3a46b"],["/lib/fancybox/source/jquery.fancybox.css","965abc204342c3127d529d2957b2f724"],["/lib/fancybox/source/jquery.fancybox.js","fb294dcb88d64ac1b0cd60249d127e0b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b1df2f7525e2a8b2b7d7b28ef9f58a2b"],["/lib/fastclick/lib/fastclick.js","ea4ec100c2a225835c3825a62ddee723"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","80560fce6d6dbe83833c7bd9b67316bb"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","588f10f4069834a26a7a381c4ee6594b"],["/lib/jquery_lazyload/README.html","8d60ae2b0e4c79bd52a8af913d1c7a9e"],["/lib/jquery_lazyload/jquery.lazyload.js","984ae83b24347fc614f186a5a950eb6e"],["/lib/jquery_lazyload/jquery.scrollstop.js","f05e243efc25f780c2908d4b9dd5d766"],["/lib/needsharebutton/font-embedded.css","72900f23269eb597291627cd65d4df57"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","ec9436a33cc44d98b6d91d9fc96f6ec9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","30fb0568ac99fb803376ef7d3b7f7259"],["/lib/velocity/velocity.js","ed620115cd257f9419ff247ece5d6cf4"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","cfe81fd8623f317cf5f366758ffea899"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","994e82a6719db7aa55b45a2380c7271a"],["/page/3/index.html","83d8f98a6aff4f711c14c5bd17982688"],["/static/api/css/imgshare.css","1ce5684fc3bd00f4c51d3d8b56c912b0"],["/static/api/css/like.css","bcbcd48f224577df03154dee6764ac7c"],["/static/api/css/select_share.css","1e0c648877a98a402b666ab4deb77a1d"],["/static/api/css/share_popup.css","1108c1c5f8d9dba4ac43a5b21fc082ab"],["/static/api/css/share_style0_16.css","c2aea63f660fc48d465ef6f227abf2b1"],["/static/api/css/share_style0_24.css","aa3d18eca893a1a3c565c87780339179"],["/static/api/css/share_style0_32.css","bff641d138bdf861e2c7f855df9ee539"],["/static/api/css/share_style1_16.css","884cc7df6fae186eacbf0bb4364c2364"],["/static/api/css/share_style1_24.css","1edc1ba5d6c59644b8a5eca160a99eb1"],["/static/api/css/share_style1_32.css","fc7cfc6f806f574d1840559eb22622e3"],["/static/api/css/share_style2.css","1192c748ce17d802725e81f8266c3223"],["/static/api/css/share_style2_16.css","eebd43470dc6b167d33b838d29ad1a48"],["/static/api/css/share_style2_24.css","5946bf996bb68696f66e94af0ef6a154"],["/static/api/css/share_style2_32.css","ac84a1b22b87bb997a3e3e6696b78457"],["/static/api/css/share_style4.css","24bd05890d18da80dd29174d24420b54"],["/static/api/css/slide_share.css","7953f5cd36093d73d39d19fa2315405e"],["/static/api/css/weixin_popup.css","79e541e01a5f189dfd0c7507548942ca"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","9182812f0681575842e870a3645d9ea3"],["/static/api/js/base/tangram.js","e22aff6f7bd2eea8402f41a1b0a74f47"],["/static/api/js/component/animate.js","b0fbbc3495ce01d5d349b4053b66ada5"],["/static/api/js/component/anticheat.js","a814eb2cb978ac27454dee730b909137"],["/static/api/js/component/comm_tools.js","4fa63e7f6a52184d4a24729ed05c7de8"],["/static/api/js/component/partners.js","f2b03d58af7032dca7dd32cf82c7bfb0"],["/static/api/js/component/pop_base.js","25175e11d2bc5858232df36b6276a4e6"],["/static/api/js/component/pop_dialog.js","ad330f8e5962d5088edfd688d1a05989"],["/static/api/js/component/pop_popup.js","625dfe9fa761e029237805bc43a2bd3a"],["/static/api/js/component/pop_popup_slide.js","58b90d42eaf8f9fadac67ef836b28e54"],["/static/api/js/component/qrcode.js","6009e62e1fef783271813a7f51ff21e1"],["/static/api/js/conf/const.js","50f1e4ae977bb1be3d934d3bde30cef5"],["/static/api/js/conf/define.js","10dc5579a5218aed68efd6c683916603"],["/static/api/js/share.js","23cf0bdddfec44056e63ca0816d70ffa"],["/static/api/js/share/api_base.js","b002a95456379893d3e91a949f64710b"],["/static/api/js/share/combine_api.js","234ed7797bc449435ad5869d97434441"],["/static/api/js/share/image_api.js","45dbb693543050fc261a4c43613ce6b5"],["/static/api/js/share/like_api.js","1c3b3882a8535e90223024577bf5d43f"],["/static/api/js/share/likeshare.js","a0355f33cb180e83c3aaf4a375bcb450"],["/static/api/js/share/select_api.js","3586d19dbbc6d0baae99f65eaee5c28d"],["/static/api/js/share/share_api.js","dc3b710607246280c6cedafedbe7e67c"],["/static/api/js/share/slide_api.js","aa7d706ccee54707bcfb83a5d7ecb4a6"],["/static/api/js/start/router.js","16fceafeb1f076e0cf1fce1e3d696777"],["/static/api/js/trans/data.js","5d7df42a57c93dea9dd0025bed681a94"],["/static/api/js/trans/logger.js","5d7df42a57c93dea9dd0025bed681a94"],["/static/api/js/trans/trans.js","279cd9e6675461758305bcb36a5fa07d"],["/static/api/js/trans/trans_bdxc.js","7f02df54fbbea7801bdbac76ae2efd33"],["/static/api/js/trans/trans_bdysc.js","180e51eeef6d56a10995d7530b5ecceb"],["/static/api/js/trans/trans_weixin.js","d2e75be627fd83f5926922ba0db1ddc4"],["/static/api/js/view/image_view.js","010ea13a7e72444dc304fc80224d2d26"],["/static/api/js/view/like_view.js","84ca4ef5b1e550d7771b60746a29baae"],["/static/api/js/view/select_view.js","eac775da7cf52091a775c7561fa9e1da"],["/static/api/js/view/share_view.js","a72d90bb2bc8a13e2373c0f6b14a7793"],["/static/api/js/view/slide_view.js","4aef4f13c6518cba47be21683df3806d"],["/static/api/js/view/view_base.js","c9a4ac1eee37a309d804d0c3fee36130"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","52d06f09f2439b52e7559b6045659b06"],["/tags/Spring/index.html","3a3dc1b29ace3281f2dee0ad477d5c4a"],["/tags/docker/index.html","4223dd75f5f683274f5e41071ecfe096"],["/tags/git/index.html","394ad914cc339fa2fa02c0ac874dbfae"],["/tags/index.html","b7a54ed4fa3e58b8971dae4d00374fca"],["/tags/java/index.html","84e585c4eaf82313b0824c54f5ec62f3"],["/tags/linux/index.html","39a096d214bb81738823181c41a0ecfd"],["/tags/maven/index.html","69feb48519f21ee37c49ab0efd07bc33"],["/tags/mybatis/index.html","c897b0fcac345e601e02246d7a6e0402"],["/tags/mysql/index.html","f8bdd1a72f8e20c71e6fee3f9782030a"],["/tags/scrapy/index.html","2b014a434f4bd9f40aa96da7a8ae858f"],["/tags/spring/index.html","24bc53c590625eceeca432791fb033b4"],["/tags/struts/index.html","4b2b28cda3dab516e1cba90a8d31610b"],["/tags/struts2/index.html","7dd2dbeb8b9120f95b004320e5c824a8"],["/tags/tomcat/index.html","5fae23be84492d73eab22b09b11c6b8c"],["/tags/爬虫/index.html","ae89e2544f0d9302621bb8b190f29a1e"],["/tags/百度云/index.html","d88e752bc8cf10494343d4fac3e3f3c6"],["/tags/高速下载/index.html","3c2f816efab3916ddc88e117e39ccf8d"],["/测试/index.html","58b6bef052472480552d58cfb4e92816"]];
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
