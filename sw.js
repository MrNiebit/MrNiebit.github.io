/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","7575b62dde5659cf6d577dde7b547390"],["/2019/07/20/Spring入门学习/index.html","68f0d9e689792bf22e6bc6a1213bc72a"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","de6a7e926f5fcf702672b99a4c4fb4cb"],["/2019/08/04/Struts2的执行流程分析/index.html","58749f998cd6478eb436888a16ecafe7"],["/2019/08/17/Struts2的拦截器栈/index.html","dd78c71a7dc2574aac522bef72d5351a"],["/2019/08/20/ognl表达式和值栈/index.html","44ffabbc1ca6ac1b2008b486002ce8d1"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","d71b67f931b5b4face788ccd2ca0ea0c"],["/2019/09/01/Untitled/index.html","a2e59bec1039d68227b05a35a7c31cfe"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","8fd447823179f4e2d392b9a49457aed3"],["/2019/09/06/MybatisUtils工具类/index.html","743155743df804aa9e10cabcf273a472"],["/2019/09/06/Mybatis使用注解入门案例/index.html","197120f25325900e4a3a8b99ebf673df"],["/2019/09/11/Git笔记/index.html","04a3751d0e20dfccc8907fe960f22189"],["/2019/09/11/MyBatis的动态SQL/index.html","fa615facbc6324b42a4bec437a02b54b"],["/2019/09/14/安装Docker/index.html","98d369f778c11c076d9c4d63f68fdf0c"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","5acb77bf32f0ed623196391da5bbd24c"],["/2019/09/21/linux服务器和tomcat部署/index.html","8f2f7edd16a09fa8f12ef9f0f5004df5"],["/2019/09/21/maven创建spring入门项目/index.html","b212a322101b3c897fdafbd320a8415b"],["/2019/09/23/mybatis多对一、一对多查询/index.html","efd4c11181a0543cb8aa00ba692a8502"],["/2019/10/08/Maven入门学习/index.html","761ca591724a51e5a8367247afc2a0fb"],["/about/index.html","ba017177fe4224b85acde3ece3d63952"],["/archives/2019/07/index.html","aa34e024132d857f4fd61b1f0ba21dfb"],["/archives/2019/08/index.html","781bf5aeed1d5d6066c04f53e2211d70"],["/archives/2019/09/index.html","5e8de605fb426c59e6930fd99af54515"],["/archives/2019/09/page/2/index.html","2a14c48b6715369e6e10e858292108f6"],["/archives/2019/10/index.html","80f48f5c7b5559ad387eeb3d86ab8251"],["/archives/2019/index.html","97e1e19fed5fbc54b751e1e4bcdcddf5"],["/archives/2019/page/2/index.html","5e7f0bd91bc2bf85effb6cb10fc52c5f"],["/archives/index.html","3f496f6ea2e5706103692b36f79c6748"],["/archives/page/2/index.html","ee666568f1a13552fea712a549fe791e"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/git/index.html","3e9ffd3017e702583ce0377aa90c7ed9"],["/categories/index.html","fa70db7314df95228166c8cdbc807b55"],["/categories/maven/index.html","7b83035795f20267f31ce08bfeb289cf"],["/categories/mybatis/index.html","3d649590e0578de4712d310b1d77c632"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","bed13478dacbdb966b5d0475db2ab6f2"],["/categories/框架/index.html","57d7c05d47d9b81288fba3faf79188f5"],["/categories/框架/page/2/index.html","e69dd736b904ba011bd359c9c22ee46e"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","7c686b33bf57a197cc2f3a7410a7eb53"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/main.css","04e4b9b7e402d61e4ea9b36790b42dd3"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","6f06782aa64815afb66d7337a0ad8cee"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","490b9de0d50edc75ee85305f589b636f"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","389f6034d9f39262d0af1e10f6ea14d1"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","8100e211be299bd6fd83c24ea731c2a6"],["/js/src/algolia-search.js","21625b0636e3df4fb47fca1aad1cd591"],["/js/src/bootstrap.js","20e7619bf57a28446072d9515d462ec5"],["/js/src/clipboard-use.js","22a252f465daaec40b251b3c92dc1547"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","26eb6148823286988f3d0e7a63bc1136"],["/js/src/exturl.js","3acc613bf82793cd2d3c0640c4eb35e0"],["/js/src/hook-duoshuo.js","5b2b28e92af86cfe77b12a377262916e"],["/js/src/instantclick.js","2a3b39c963d0da5ce86754ff266ff7b9"],["/js/src/js.cookie.js","d71ea1b6e0a1d981a2bb945c8659d0ac"],["/js/src/motion.js","dfe26b9d7f4aa7d4318f109a5958fae2"],["/js/src/post-details.js","6db7991f7aceeb6591843e3a2c3f77a8"],["/js/src/schemes/pisces.js","f127874770bebf248fe279b32cb73169"],["/js/src/scroll-cookie.js","0b0382476ecd16f66f13fd5984a525e4"],["/js/src/scrollspy.js","abe4e2d4e744c19603664895f9b73a2d"],["/js/src/utils.js","5a4a54f301c365156cea449b9ddc7a26"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","77262ff48844a65cb7d557a4d2214e0f"],["/lib/Han/dist/han.js","b52b23ae22d8ee767d0dc69751477578"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","0f0cf8d4a09377d19f9022b6c7200240"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","194cb577e056459f62e533dc7acd3bb1"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4621bf3e7cea159108b526e96f92fcdb"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","1e64e813bd19c1666303d3eb3f175b7c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","8461c7f4f92399bc7985e1a4f02d8bca"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e2e9ee0a15a5c76c23eebdc437b01ff9"],["/lib/fancybox/source/jquery.fancybox.css","691957434de869872a41fd9d75ae27fd"],["/lib/fancybox/source/jquery.fancybox.js","abf1d08c4fd322395619d6c3d4687e24"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","0da9af0e389c1bd9f4bf9670cfe5bfb2"],["/lib/fastclick/lib/fastclick.js","bf636b0cbe1ff753ca6f9c730dc725aa"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","1fda31acd0e7ed750bb807b853a31889"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7f0877cfb5a233532320c170b2a8a01e"],["/lib/jquery_lazyload/README.html","357379caa55e839f4f2d66a4ce2baaa0"],["/lib/jquery_lazyload/jquery.lazyload.js","68040c58c017c885f0e4a0a62b1dfd15"],["/lib/jquery_lazyload/jquery.scrollstop.js","f45936e01929830111ece2edaec45c76"],["/lib/needsharebutton/font-embedded.css","644de18501929a3957f5f6b9726b986d"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","72bf9ac2b2bd4b36e92dcb7fd4e5ad0d"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d78af015c0c8b300b040141adbfbc995"],["/lib/velocity/velocity.js","d7e68e87f24c7978f7c5bfe08ec6d10d"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","5d8193ab2640f5de798a018c9b8c4af8"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","b0c82d51ed0bcca3176f90937accb379"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","87cf435004a1f1c0677145d570427e15"],["/live2d-widget/demo/demo1.html","7f9d0b8e55d3faa912c95a4d47215d75"],["/live2d-widget/demo/demo2.html","fa80d196637c4a8a86bd91d75a120b7d"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","c6a07dee0da8ed4059e4b3b4c1bbb572"],["/page/2/index.html","a8ef4efdbe7a373f0a2c1a24803253ca"],["/static/api/css/imgshare.css","85f6513901b1c54103d502531aa13caf"],["/static/api/css/like.css","f5a4d8a0eb6bcd812cb231409407ce0a"],["/static/api/css/select_share.css","0de890c3dc0fc26894e642310225d3a2"],["/static/api/css/share_popup.css","13c4e09457087e6bac8e4d6f7a73fb41"],["/static/api/css/share_style0_16.css","d0d04f6151a5f721084bc2f35404750f"],["/static/api/css/share_style0_24.css","b2210e482f9b504a20482e517b911c45"],["/static/api/css/share_style0_32.css","1a9a749083fbc590a9ca4553873fac0d"],["/static/api/css/share_style1_16.css","ce389d2c585b9757fd49b8cbff15f527"],["/static/api/css/share_style1_24.css","da841461e776f9cebc730df3d931e433"],["/static/api/css/share_style1_32.css","88e40ea6c50d615e41bfe2283481b59c"],["/static/api/css/share_style2.css","62986765c1ea8d219d724ba1a91e6fc9"],["/static/api/css/share_style2_16.css","7c7e4fd1b776136d4e9bbc0ba50f04e3"],["/static/api/css/share_style2_24.css","416ef0dc9554985757a8e4b46c48163b"],["/static/api/css/share_style2_32.css","4c7099ddc2ddf580feeedae9d2e213e1"],["/static/api/css/share_style4.css","315643afbc88791d84d7b6ed90ba3cd6"],["/static/api/css/slide_share.css","7e5c5ecdfe577b03e024dc09aaed193d"],["/static/api/css/weixin_popup.css","e415b32e7118170529a1ea4a5e65c484"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","e6f6a892d17fa2f1a143d0306bafeaac"],["/static/api/js/base/tangram.js","e11d35b3a72d282b41c2a1a8e3d2115f"],["/static/api/js/component/animate.js","f5c65ae8349ca48f758976c9ba14f07f"],["/static/api/js/component/anticheat.js","3d79e6aa59ac79a46f8470678b7aef2e"],["/static/api/js/component/comm_tools.js","a5529fdd261953c4ebc65ac16015c73c"],["/static/api/js/component/partners.js","8a32c9741c581df10b810c50779b5f1a"],["/static/api/js/component/pop_base.js","c7879d9212f737580f31b50dcd681666"],["/static/api/js/component/pop_dialog.js","316eb94871d50b0cd8d43c65572d75bd"],["/static/api/js/component/pop_popup.js","a41a2f14887389158c033440c3193929"],["/static/api/js/component/pop_popup_slide.js","e7949d9ec8977b89bfc685b5305b5b09"],["/static/api/js/component/qrcode.js","b69d9fe4421c0bf0a5b35008d2619906"],["/static/api/js/conf/const.js","396046b9ae8c14d86461f8c8a3e7d607"],["/static/api/js/conf/define.js","9bb9a3c9c7c763e63dbd2856719191f6"],["/static/api/js/share.js","e30abfe6bdeb791fed6640b49aaff519"],["/static/api/js/share/api_base.js","54934d88bec830efd03feed85b2dc6b4"],["/static/api/js/share/combine_api.js","accc684bb3e158ff6b29f02b4b8e382a"],["/static/api/js/share/image_api.js","b7f791cc0c4b7de3b7d4dc87373206b0"],["/static/api/js/share/like_api.js","0ae1b5f14888ac10696fddc462e9a859"],["/static/api/js/share/likeshare.js","0f1c4478c6674d790622428f41438127"],["/static/api/js/share/select_api.js","4ec3bad6e28382a8882858bdcc34fe50"],["/static/api/js/share/share_api.js","7e91cbe8a434060507e0e73999c00006"],["/static/api/js/share/slide_api.js","72905a72956a72a46acb4dea7ee78c28"],["/static/api/js/start/router.js","a55b0de0c1aa7fe75b19a41d3df38a27"],["/static/api/js/trans/data.js","0c1d59d2695848d28a1b5d08ae4b00c3"],["/static/api/js/trans/logger.js","0c1d59d2695848d28a1b5d08ae4b00c3"],["/static/api/js/trans/trans.js","342a1a03d53e08062b1a50b86e1623ff"],["/static/api/js/trans/trans_bdxc.js","815d442de6dbbf831a4b6b71a1e99652"],["/static/api/js/trans/trans_bdysc.js","9dae290569dd09a47582b0f467010893"],["/static/api/js/trans/trans_weixin.js","43fb43fc6c7b59082fa96556de7d4e1b"],["/static/api/js/view/image_view.js","f43c80f1d59d1fcb0002190ce61afd2a"],["/static/api/js/view/like_view.js","43c86d076b3c9d9338f82ac7e9a83bc5"],["/static/api/js/view/select_view.js","198897a46d6d3285342b2bb13c3ce833"],["/static/api/js/view/share_view.js","1b3216cf2b257b32fb043f10e0eeadfe"],["/static/api/js/view/slide_view.js","ec4e0c6da13c54beaba122607a2f8903"],["/static/api/js/view/view_base.js","e86989f35c54c256dabf0a0b500de011"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","f607778e160b87ba118e20e1031eedb9"],["/tags/Spring/index.html","4d2d22273e3c419ce5e3cca0faf8345a"],["/tags/git/index.html","f2247c215e08d7c04a28f595fd876f6a"],["/tags/index.html","2659a3caf019ef3b606076517d26ea6c"],["/tags/java/index.html","e4be88f531c3ddcc1308f213f0d7cb31"],["/tags/linux/index.html","289be98c17da9ecb71f73b3bd63216a2"],["/tags/maven/index.html","2abe47938e120ee8dd862882f19ba6fd"],["/tags/mybatis/index.html","204b418d645b5f2f451d4e3ffc6ae7a2"],["/tags/mysql/index.html","37d3409f8943f1b2153763ddc3234b4d"],["/tags/scrapy/index.html","6cfe7775528966764bfc61e436144b65"],["/tags/spring/index.html","5bd020c34a8566ddb269e839e1710d8f"],["/tags/struts/index.html","2713ac5ad2fcfe413b437082eb94f1e0"],["/tags/struts2/index.html","c01962953e33696219853bda7ca25c48"],["/tags/tomcat/index.html","8b2bf647f49306afcc6503bea995f2cc"],["/tags/爬虫/index.html","b29c49069f8e30f8ac0d25fcb44295e3"],["/tags/爬虫框架/index.html","0fcc70ffcd8e35f1496b1432ef5756c8"],["/测试/index.html","6cd3439d1a92ed1b52cfbce2bae8759b"]];
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
