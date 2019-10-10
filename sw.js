/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","66ea24d820009ff33f0c9bedcfc36d37"],["/2019/07/20/Spring入门学习/index.html","9cc968e4be015485135ddc96da347ed9"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","f1539a9f54bd7ffc10911a173ec1810a"],["/2019/08/04/Struts2的执行流程分析/index.html","4ec91db1f9fb60a962109aed9f8e9836"],["/2019/08/17/Struts2的拦截器栈/index.html","fa92966037c450b43287e60028cd0977"],["/2019/08/20/ognl表达式和值栈/index.html","392ef701a3c69e9a727162b785e7af45"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","013de5513abde4d7792d39e45548ab62"],["/2019/09/01/Untitled/index.html","1eb1169478b176e5f16ee2685ed4d255"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","0c2ba1aa05024c1823df371ce27541c8"],["/2019/09/06/MybatisUtils工具类/index.html","5a5aded1fe4eeed3399f08974b913c1e"],["/2019/09/06/Mybatis使用注解入门案例/index.html","5bcbf25040b03fc16e37e890a3072a5b"],["/2019/09/11/Git笔记/index.html","3ee0c33ea2bc6a36b3c62289ef72cb13"],["/2019/09/11/MyBatis的动态SQL/index.html","5c1f06434b1363eac1ef01f6d754168e"],["/2019/09/14/安装Docker/index.html","897908d3ac4811145e5cf2b1ed8f8aca"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","1eb75c68b361577635cfecfe29d5c942"],["/2019/09/21/linux服务器和tomcat部署/index.html","d2f7e9f37fb5bbb0a30c3881a9ba7821"],["/2019/09/21/maven创建spring入门项目/index.html","f4f776f7ef0530bb32dcb85432567843"],["/2019/09/23/mybatis多对一、一对多查询/index.html","c7c41b89dae3dbb774cd7c4199b624ef"],["/2019/10/08/Maven入门学习/index.html","5ec33de2c83fa19fec6dc22466ad2b49"],["/2019/10/09/CentOS安装Dokcer/index.html","5442495cad4d02008202e8bc2f8e37e1"],["/2019/10/09/docker学习的入门/index.html","c69776b6c1f5be3228b86ae00de1aa56"],["/2019/10/09/linux常用命令/index.html","a79bc3e801b156ab57d818d026687834"],["/about/index.html","fa16cf101acdc99e93a95656296a9238"],["/archives/2019/07/index.html","0aaf01e568afae38405bf68081175c0a"],["/archives/2019/08/index.html","bba360780610d9800cf0f3465befc73f"],["/archives/2019/09/index.html","c04d3fd155f1c8621e616c02133c9d0e"],["/archives/2019/09/page/2/index.html","0ef717a2cdef67aeab2428d4d031de43"],["/archives/2019/10/index.html","0c4d2ec144a9b5d72ce261b7be42d882"],["/archives/2019/index.html","94d3d2926cc2c2bd91262d71475fc182"],["/archives/2019/page/2/index.html","dfc283c6d2786fbea62380221d7631d4"],["/archives/2019/page/3/index.html","0cc3ea1c17b499c2fe6c27ed7462d05c"],["/archives/index.html","5f5bd83f968430b331d0ba87fab0dbd1"],["/archives/page/2/index.html","f99064950bc8e4700a4889ec631591d9"],["/archives/page/3/index.html","f5ff1d0ef38a2cc251fbbf5461a26c58"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","d818499d6ce95ffb8692a2b9175f9d3f"],["/categories/git/index.html","ee74b25da9ccbffb4202ed1fdf747a79"],["/categories/index.html","7e1889358a37ebbe7dd1c846f9d2c5ef"],["/categories/linux/index.html","620aa8a980594ba1361efba2e16503d4"],["/categories/maven/index.html","36ddb408902aae17f9b54027d50b350b"],["/categories/mybatis/index.html","3d649590e0578de4712d310b1d77c632"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","01129c3862908bf7aa923bac0a28596f"],["/categories/框架/index.html","8e6577b775a14cd86afbc89cb29a93c1"],["/categories/框架/page/2/index.html","7a6150a43fd9343325704d0dbfee1782"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","d14fa5d0af79a633896306477fec1648"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/main.css","f375e208409c0d4721314f809b07546b"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","ca119d79bfd10d000b8de1e2c41f51bd"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","d3c183c15342126ec33ec47093c1fb4f"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","7bfca391b1d69a50eb468b289874d38b"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","425f627ca69c30964a9e490e211eff18"],["/js/src/algolia-search.js","c487bdd909de874f7cb90ed266a82600"],["/js/src/bootstrap.js","bae372ce1984a481322946b1e7ffcaf5"],["/js/src/clipboard-use.js","d1541592ee1a6761c63d9752ce88f16a"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","ccba3dc798797cdd55a43e1e3fd6e9dd"],["/js/src/exturl.js","48f90bc54a88d7f5c2870daf8b2773e0"],["/js/src/hook-duoshuo.js","962a303eb875a1a29a560e4255adb29b"],["/js/src/instantclick.js","690319c129aee50347aad98387efa79d"],["/js/src/js.cookie.js","173be90245ee3d8a8b1aae763a65a455"],["/js/src/motion.js","6f1ac2db3690fb0403dc4baba785ec6f"],["/js/src/post-details.js","f9487e8abf288265b2acf0e7beec51c2"],["/js/src/schemes/pisces.js","f8444c5262d49ecfa3e684f1c2781d2d"],["/js/src/scroll-cookie.js","7a40a43fd6a05435454970427a7d97db"],["/js/src/scrollspy.js","f220aba1762e1c41eb9033e65557e4a9"],["/js/src/utils.js","b185ec120b59cf465269bcd2363ca95a"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","1ab3d561df489e3935c976320fe7eb21"],["/lib/Han/dist/han.js","98ad96c1684694173d388d756ce62388"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3183f33241ce373eca8640af655e8b5c"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","2fb97133a01127300ca3ec06b48cb9cc"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","d1461103fd0e8d11584d6398d0450a7b"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a0d9ebc37613791629199ff16d18da0d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","991144257d39fd7d82fe93ad2c974674"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","1f7e3c08d3fd78b57abcd71ffff07f25"],["/lib/fancybox/source/jquery.fancybox.css","f0ec1183c0e6496d304478e95848b959"],["/lib/fancybox/source/jquery.fancybox.js","e03faac5aa21b72840a4a54cd47b817d"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","dbd11d97b003d0d3095d6a5523d52b2a"],["/lib/fastclick/lib/fastclick.js","bcb38cb3fa2770730297e7f2c7c204e8"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","1fff7446fb764ea65d158b8ba0af38e1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","1eeb291b8aad9f2ba3c7557f144784e5"],["/lib/jquery_lazyload/README.html","a1a9b8b0a85f9a27f5b860943811160f"],["/lib/jquery_lazyload/jquery.lazyload.js","d9f03a6bb121360e82fa022827b97e1c"],["/lib/jquery_lazyload/jquery.scrollstop.js","a091b56ad31a53053b2ca3ad0eebc20e"],["/lib/needsharebutton/font-embedded.css","35fad4dbd4e1ba83d9c650671d8ac570"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","017c13afdbd189957f5f33b2b297d28c"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","9cdbb2c18703b8c119155978415c472d"],["/lib/velocity/velocity.js","ce793ac7aa7239cb793f83e36959a739"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f121275f7ba4db1dad72cf5bd579e101"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","79dd4a0995b69eb9a60d2835a4018c64"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","bbf6cc3f72935d6bbbb5c5fb21216983"],["/live2d-widget/demo/demo1.html","938fd929c98d45ad5f448e159fb49ee8"],["/live2d-widget/demo/demo2.html","d664a17f17072709af9eff80bb3e0076"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","cf67a4db13e5109b3b72c41b318aec07"],["/page/2/index.html","6ad06f136acc3e85df5b8213c43c1798"],["/page/3/index.html","b6db08de08f12bf02bfbbfa89d2497a6"],["/static/api/css/imgshare.css","2b8a37379d571158e13183f085fe6f17"],["/static/api/css/like.css","b263d6b082fab5781dbfc61b205baa5f"],["/static/api/css/select_share.css","6d6eadbded07b554b73ae23f6b69aab4"],["/static/api/css/share_popup.css","c9a573c3b67db4b67fb535b726464195"],["/static/api/css/share_style0_16.css","fc7d174db56f48934310bc0335702b7a"],["/static/api/css/share_style0_24.css","d116f87b17e97b9917db8c9e04e9e3fa"],["/static/api/css/share_style0_32.css","229d5be9684877287d74eaf83bd90948"],["/static/api/css/share_style1_16.css","e339c341d104df0494d12fd5860fc09b"],["/static/api/css/share_style1_24.css","2f9848cbca7a9c52bb4cc07cc9ce805c"],["/static/api/css/share_style1_32.css","ad9ce52698f3bee6afebb45bd1d625a4"],["/static/api/css/share_style2.css","cb9b45c6bf365157670380342fc2a205"],["/static/api/css/share_style2_16.css","303e41b16c921f1d4175af7a34f72755"],["/static/api/css/share_style2_24.css","ebf6449aa267ad8f8318f4d06f8f1712"],["/static/api/css/share_style2_32.css","4f2afa6ab0de8204e30e6bde1133952f"],["/static/api/css/share_style4.css","f142032548411189060bc05bf6f92d77"],["/static/api/css/slide_share.css","ab37cc4f15f4c1dabfc3e400e0ff9ca1"],["/static/api/css/weixin_popup.css","6050a7805772db27bb76de32a68c9f31"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","822b8b9a75cc8eff6b3a0ac5f4636d09"],["/static/api/js/base/tangram.js","43f08399b48eb408f638faff38c1367a"],["/static/api/js/component/animate.js","a258da12dd591e107ccb911b4b3c8c28"],["/static/api/js/component/anticheat.js","394dd0a3db7ce6c8deed943eab7cfaf8"],["/static/api/js/component/comm_tools.js","70bdef9f9cfa74db9b7a72af4c7b10d9"],["/static/api/js/component/partners.js","5737287e79ac3656662418add4999e23"],["/static/api/js/component/pop_base.js","4a396283f96cf95377639fa4f8cdff77"],["/static/api/js/component/pop_dialog.js","980c50e6a9a2e70ecb0795c3b0824fa2"],["/static/api/js/component/pop_popup.js","1235b011860227d9f4228c3a45c96d4f"],["/static/api/js/component/pop_popup_slide.js","d9b1847d156359dcdda24f41ebe14f97"],["/static/api/js/component/qrcode.js","3322bf66bc704a3d379f42f4bf4c6809"],["/static/api/js/conf/const.js","bb4912e872eabcdb51abae753852d831"],["/static/api/js/conf/define.js","218336b4e5de71c6663253478b5b5a48"],["/static/api/js/share.js","8130b156c9ba5424def55dc00d651ce5"],["/static/api/js/share/api_base.js","c331d37bd228471bd5849eab78d6deba"],["/static/api/js/share/combine_api.js","a3774670a2b08f248c8eda94124077a1"],["/static/api/js/share/image_api.js","b8e6969898fd99e2c9b82b20595cfbf9"],["/static/api/js/share/like_api.js","21033ad1f7cdd4e3f19a8a5a4b6b2731"],["/static/api/js/share/likeshare.js","e9fd0cbd6b8ee5be7a01bcf7f12969ab"],["/static/api/js/share/select_api.js","cfd7800d23dbc86f41815ed9d145081d"],["/static/api/js/share/share_api.js","d26cd854349054fdb01704c052ada355"],["/static/api/js/share/slide_api.js","36bb51cee8a468c28e1c5e070255c156"],["/static/api/js/start/router.js","94fdca17100774f39ea0e776b98edc80"],["/static/api/js/trans/data.js","e9fd0cbd6b8ee5be7a01bcf7f12969ab"],["/static/api/js/trans/logger.js","e9fd0cbd6b8ee5be7a01bcf7f12969ab"],["/static/api/js/trans/trans.js","ae8bd1fe778e3dced0b831d87facfcfb"],["/static/api/js/trans/trans_bdxc.js","f8f48dfbe4b4e85f23e8ad5c09ad4020"],["/static/api/js/trans/trans_bdysc.js","def6f44f2fd0e41d73f9cdf9c8a9068d"],["/static/api/js/trans/trans_weixin.js","fdf7b111f05c03c41bf257676102bd5a"],["/static/api/js/view/image_view.js","13f2bc7b46f5ac5c0e8589c98c6e6a31"],["/static/api/js/view/like_view.js","bbc1fbe45badef1f69b352b895cbadcc"],["/static/api/js/view/select_view.js","9067ade60413f7e6e34a643de1a678e7"],["/static/api/js/view/share_view.js","3f39b0bed6f940b5361f104b05d2c9f7"],["/static/api/js/view/slide_view.js","0510cedccb50c92d7c12a316d266b332"],["/static/api/js/view/view_base.js","746f98c3d0d004d3367ec0ae260143cf"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","ba4674bc619884dc8d27c87c09258bce"],["/tags/Spring/index.html","10f4bcb656a6272c7af727423e6e3b73"],["/tags/docker/index.html","e74c5c58e67ef0d821984171f4bf7c2b"],["/tags/git/index.html","3cb11d554f7b9e2e3c77c9e19e9168e3"],["/tags/index.html","34d212ef38b6489ed83f328efd057f92"],["/tags/java/index.html","ead9903e064f73b7c6d5d3f7c7ba7a5c"],["/tags/linux/index.html","df5fab5807039caf5885b2be651e52d9"],["/tags/maven/index.html","973a507e3678d1928463b0674495db4b"],["/tags/mybatis/index.html","003f516ae24557a2182ab911924bce7d"],["/tags/mysql/index.html","7d78546504b577bf64dea700131b5f36"],["/tags/scrapy/index.html","8f41a8fe5ed8cbdb03ddcb0ec0fdfeab"],["/tags/spring/index.html","80b395c4e9a130de3ef0c160cac68bc5"],["/tags/struts/index.html","d31eb7558609c9d36b5435a6a122c89d"],["/tags/struts2/index.html","b60123c33659f2d5faf515503d7f884e"],["/tags/tomcat/index.html","1481f549f17a2187794dcea28bed08d2"],["/tags/爬虫/index.html","1d202a296a70c2ac91dec3dbb5e4f5e9"],["/tags/爬虫框架/index.html","3daa59633d2ca526872ccfe3743957d2"],["/测试/index.html","78e62c1e7ea97b391bd23477cb155180"]];
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
