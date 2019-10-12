/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","4020ee409cba56a4467eb82c5a24a857"],["/2019/07/20/Spring入门学习/index.html","64260749c7ba4e88d7a46233deba5287"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","1aba27c1287349630613cb0289b46d48"],["/2019/08/04/Struts2的执行流程分析/index.html","c7192b25452c074f529d5901bafb2665"],["/2019/08/17/Struts2的拦截器栈/index.html","cca78922db7ba305fe8d3422a56583ae"],["/2019/08/20/ognl表达式和值栈/index.html","1cf09f51c88a92217781a5f155b1a4f1"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","443474076c7a9dcb24661e29e062a5e8"],["/2019/09/01/Untitled/index.html","4bb07a49cb3e7d90a7bdff5c8a0f9040"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","37a1e5671dc74e40aff775a565c9f76a"],["/2019/09/06/MybatisUtils工具类/index.html","65dd98d9175249a4a69c5017d1a946f0"],["/2019/09/06/Mybatis使用注解入门案例/index.html","8730e4216b40866490572ef80e30a415"],["/2019/09/11/Git笔记/index.html","5b67a3e7d6887f3e66a5c9f9b65f8cee"],["/2019/09/11/MyBatis的动态SQL/index.html","5e5ac6483026b6c712ffb1f996e6e160"],["/2019/09/14/安装Docker/index.html","8e17a80ae39c6c91459578bd199769ab"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","4914a5bb363eddce653357894c339798"],["/2019/09/21/linux服务器和tomcat部署/index.html","c196a91249b4d17e5b933996f61abd4f"],["/2019/09/21/maven创建spring入门项目/index.html","f55baf1839b795f6684bed32969c0c94"],["/2019/09/23/mybatis多对一、一对多查询/index.html","01c7c63b3c7af91fe193391207032d63"],["/2019/10/08/Maven入门学习/index.html","37ac6a18ae4594cbf6a3991c7c103974"],["/2019/10/09/CentOS安装Dokcer/index.html","00597be5af09803773ac789a1b41cbe9"],["/2019/10/09/docker学习的入门/index.html","c4659b6e94313865a8fbc03c75ae3837"],["/2019/10/09/linux常用命令/index.html","2b7fa9d127bea9c6adaf2740af774034"],["/2019/10/10/mybatis单表的嵌套查询/index.html","1a16520685eb5b4d89c1b41bff865296"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","6348107ef6f70eb2cee3e308926835c3"],["/about/index.html","a5b756d5df04afeabc826717f036980b"],["/archives/2019/07/index.html","95fb2d4782d588dc091ec59bdc1a4112"],["/archives/2019/08/index.html","4fdf1379242fc5b15ccf6146fffb8080"],["/archives/2019/09/index.html","ed8ad45b5512496df0f109167c68840a"],["/archives/2019/09/page/2/index.html","fe9f10f14ed15068b28345d582480e07"],["/archives/2019/10/index.html","6dc3ea4cbc441d5b4feb09f4dbc7ed00"],["/archives/2019/index.html","082493a9b7f1b7b69ffc008cd99b8c5c"],["/archives/2019/page/2/index.html","2a16146673275433dce91fc0ee72a998"],["/archives/2019/page/3/index.html","a832e7d31d79bfb5656ffda160cddb12"],["/archives/index.html","fe0ac954a329ff029d27d00bd221d089"],["/archives/page/2/index.html","a9b6d41a36ad055d5160113e7e37e19b"],["/archives/page/3/index.html","704af2c877b4c5faa52fd0c2c11dc1ca"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","0fcb11012a37e3508559ac77ba59eb3c"],["/categories/git/index.html","4077757daa8bbec1ecffa6574f4ae60e"],["/categories/index.html","b9214bd26e4f703f0f362fd847c7e13b"],["/categories/linux/index.html","ffcf877cbafb6bd91faa9526d46ae900"],["/categories/maven/index.html","ff1fe5f432a989cb12e90d6ac6829b92"],["/categories/mybatis/index.html","41a2ec9c6270674823d6372c91b058fd"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","074f7615e0c9155d89d0592b46a9af1f"],["/categories/框架/index.html","33aac5af912a6336b89674472f4a554a"],["/categories/框架/page/2/index.html","609e7123c37f0144437c87c49dac3ec9"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","c146330ed87812f97df0c3c75303481c"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/高速下载相关/index.html","52766cb1a1e0d2bf5d5f776e3d5d24be"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/main.css","1ef0b44cf28afb0aa1797823cda34cf3"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1c508fa5bc5e0c73d1afb94bc7fcdf25"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","664b8a56fc73f820d0102d79139823b6"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","5ea26b88a04f9a8d43b4d65314d459d3"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","5a6beed70e2890fb8ec9fe53f5e2f194"],["/js/src/algolia-search.js","b09ea1a317fa3786e52b8d4b16971edf"],["/js/src/bootstrap.js","8db2bd47f2011fd8ea3c44cf22879845"],["/js/src/clipboard-use.js","99bc7913a69cdc745e2072059939e739"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","61a8498c3677d8fc75599e7eaf4cba7e"],["/js/src/exturl.js","5a2b8717fe784d27e0148696ffa70a43"],["/js/src/hook-duoshuo.js","e7b0d11f3489b86fd2b7b2a1de2f5d45"],["/js/src/instantclick.js","e205b3945cc3b0f11812e8d76b4375a2"],["/js/src/js.cookie.js","90a03d3f2d8d43103a7e5c511486962f"],["/js/src/motion.js","e3ceeef66e0e110bb97a3dba4e151869"],["/js/src/post-details.js","efee93992623481f48c319f93a43f21b"],["/js/src/schemes/pisces.js","c2cbdd878c604f9b5756fcd9d1fbd0b2"],["/js/src/scroll-cookie.js","42e5716d20f9f5d25469ef96f50b070c"],["/js/src/scrollspy.js","cb5489c649ac3602484bf85fd8e97f85"],["/js/src/utils.js","1bfbb1a5f408f2ebdfb3706ecb7985a2"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","e5559c33c3e72f38a37557a6b4893bad"],["/lib/Han/dist/han.js","fa957ae64e6da0fe29b23777eb03b164"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","ec0b8f8802b771e3cc5d96df1ca5e576"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","2da5f71af1af4a94cb4ff6b5a69c8a28"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e1d1c5e19c22f3bf3f9b6911eff98a1d"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","218119c2768b2d6dde99703691bf92a3"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","1103e50abb31512a9c86f00023072dab"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","552c04e41d8749a70278d2e640b28ccc"],["/lib/fancybox/source/jquery.fancybox.css","401c4f6d4c2d0d1bba2fb79e9a578769"],["/lib/fancybox/source/jquery.fancybox.js","2e2e2dd30b0ea36105cae42a042f87d7"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","be958d023c5939bb34253164a3c03d7b"],["/lib/fastclick/lib/fastclick.js","161c6e2545f27c6cd470511805dde9b1"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","2985e2765757433bd37007eece423d83"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","3a657f8f5ea8285a0a213ccaf4eea5c4"],["/lib/jquery_lazyload/README.html","e5dc74e949e888a30a24a87fdc7f39e1"],["/lib/jquery_lazyload/jquery.lazyload.js","9956672e6fbc8f7a3789e72df3261455"],["/lib/jquery_lazyload/jquery.scrollstop.js","64e3704fbfc85fe044199da62d0fbf21"],["/lib/needsharebutton/font-embedded.css","6165484f1dc98c06f2a5a074f351195d"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","8addee4ca45ff711a1109f13087f7159"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","0eaae58560e592d44cd08542ae79c0ec"],["/lib/velocity/velocity.js","dbcba77fb859b50365bdcb8c58e45756"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","3703618d49d26a56cb6a5b8fbecc2354"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","d8010c57ecab2e2f770aacc8b386ce7b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","1830fc3da82d77b0ce7a76f91fced1c4"],["/live2d-widget/demo/demo1.html","2e991942a56a0e5b7eab5d63641f4434"],["/live2d-widget/demo/demo2.html","3e80e447b1b03c0e6e82c97cee2e5950"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","8794dbffe2e1162750745467b148f7ff"],["/page/2/index.html","5d8d60ee6e441081828baf7996cae7a8"],["/page/3/index.html","9e6fc9a5d722d6d6cfdc251e1fa5fc09"],["/static/api/css/imgshare.css","ce11cbb2a4b83e33abedbccc81a4a7c0"],["/static/api/css/like.css","783b0c43d3d7c5136f041cb1470ef9ff"],["/static/api/css/select_share.css","e088362dbc5f8211ebcc3069791830a3"],["/static/api/css/share_popup.css","64c4f26992a4251f1b51aae88122cbaa"],["/static/api/css/share_style0_16.css","8a8b28dce3c320a36398a85168ee79a1"],["/static/api/css/share_style0_24.css","102063a05209e031f3804d513573ec19"],["/static/api/css/share_style0_32.css","78086455a78e072b8030aae3604634c7"],["/static/api/css/share_style1_16.css","7b9696b7ae9d098b826404d7c4cf6e97"],["/static/api/css/share_style1_24.css","b7b0ca8f230f32e99d70e4bebf719cdd"],["/static/api/css/share_style1_32.css","c09e284507b96e4bdaae12dc68b308cc"],["/static/api/css/share_style2.css","651f8fa7600108618ca4a3223c3e9755"],["/static/api/css/share_style2_16.css","7c02a82c9b8e6bc0dcf47e5fcc82545a"],["/static/api/css/share_style2_24.css","8fc011200680613729086c55d98253b8"],["/static/api/css/share_style2_32.css","c82c5c5ae7867dc5b443782227ee673e"],["/static/api/css/share_style4.css","86b4498ff2a3435a5d78ad55a369fdf9"],["/static/api/css/slide_share.css","f7b835c256c1d6af704f0cc4447a04f1"],["/static/api/css/weixin_popup.css","cc77824088e3df7866def2fcba891280"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","837a3f4c3d84a720f7db6dda1285610b"],["/static/api/js/base/tangram.js","41e332e217ecce6a8540e98ca0724a05"],["/static/api/js/component/animate.js","932831c22461c347241c1357f839909e"],["/static/api/js/component/anticheat.js","ca02830757cd54504d5e1807861c0e28"],["/static/api/js/component/comm_tools.js","adc6b8feaf81285e731613d827bb3b37"],["/static/api/js/component/partners.js","83ad14f48081b6f4165ff87e0c9c30e7"],["/static/api/js/component/pop_base.js","df2b17b13e7e1558ef57355f8c16e95c"],["/static/api/js/component/pop_dialog.js","acff544501e07efce094f077e425fdf4"],["/static/api/js/component/pop_popup.js","cf4d116d508080c7009d7dc34f001c68"],["/static/api/js/component/pop_popup_slide.js","913ec0bce49d9aef0056f3d93b015bdb"],["/static/api/js/component/qrcode.js","dfae43dc3daab3229119f60ef898e7ae"],["/static/api/js/conf/const.js","6326a25a28b5e322c91cddc544287804"],["/static/api/js/conf/define.js","8dda3303eb24598a00e087c06f74d00d"],["/static/api/js/share.js","622e27677cadb1db9a790b4be755b894"],["/static/api/js/share/api_base.js","f8b31dc0b4c426a512069a5a9bd917e7"],["/static/api/js/share/combine_api.js","e88a423b03c0723f753ed243337351fa"],["/static/api/js/share/image_api.js","11c4611ba3e5403270ceed1afaf23ca1"],["/static/api/js/share/like_api.js","449121ed3d2130c0cc9c0ad221abf3e4"],["/static/api/js/share/likeshare.js","44420105a02e7d8e110d8652ae9439cb"],["/static/api/js/share/select_api.js","43b92c2adf9cdd78f0d4a4a73a70c618"],["/static/api/js/share/share_api.js","116ab584c92c721a78cb39f7037fffd2"],["/static/api/js/share/slide_api.js","e720c1ce32e202df067f4d4c1f5d7450"],["/static/api/js/start/router.js","cf549e679c360ce7592e9893a8cbdf73"],["/static/api/js/trans/data.js","44420105a02e7d8e110d8652ae9439cb"],["/static/api/js/trans/logger.js","44420105a02e7d8e110d8652ae9439cb"],["/static/api/js/trans/trans.js","0f226d143a2caf131816abb0e8523666"],["/static/api/js/trans/trans_bdxc.js","d37b212c3077f00450b64c00070d88ed"],["/static/api/js/trans/trans_bdysc.js","98944aaffaa2dfa1c7ea6b1ac66a9023"],["/static/api/js/trans/trans_weixin.js","c73a83324d8d62f7ddd83c6653cb1668"],["/static/api/js/view/image_view.js","08608fdb9a671ce6b837d3cdee629444"],["/static/api/js/view/like_view.js","0d7752909922cafb8cd3265d509dd57d"],["/static/api/js/view/select_view.js","f9e6cc2c63f892c79bba5686c1b03822"],["/static/api/js/view/share_view.js","50a9060b2bd5eec236a3ab21294fe703"],["/static/api/js/view/slide_view.js","c168d209b30e805470f1fb22d26a296e"],["/static/api/js/view/view_base.js","53011ab3842b7752de58c0c67d8c1a5e"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","e84e48b93ce2b92038055aa9ba1f4b3c"],["/tags/Spring/index.html","18525f60c354487c4a2d381fb7fe2203"],["/tags/docker/index.html","dea2437c4f35a5900f230f3a8eb0cfa9"],["/tags/git/index.html","6f3be35a8ec6df00899b88a7db7d872f"],["/tags/index.html","f10d0a38d0f4acab95c4470afd7f246e"],["/tags/java/index.html","55e595451669728b5232396d546092f3"],["/tags/linux/index.html","33c135d6fee023f1dd4e9edb4829f428"],["/tags/maven/index.html","0de5e9728cab25f19ce08fa7417aad78"],["/tags/mybatis/index.html","787818f33d92272737646af2957b0f22"],["/tags/mysql/index.html","f63c6dc9d0301502c4e32395b6cae34c"],["/tags/scrapy/index.html","b702c7c3a6a615241864977733503674"],["/tags/spring/index.html","cd5acdc09d1ac2d255f1e04d101ca668"],["/tags/struts/index.html","53f903732c3a3141719d83fcb63b0c42"],["/tags/struts2/index.html","fcbd6ec36da5d98365f5c779d308abf5"],["/tags/tomcat/index.html","e3dac6944783194e132521ab9fa4257e"],["/tags/爬虫/index.html","7ac21a95fdc2776ddd89ed304f576ca5"],["/tags/爬虫框架/index.html","98ff37af3cbbef907bbadedb6111f4f8"],["/tags/百度云/index.html","c3c0594b64fa6af6bb2b31d59a7efcc5"],["/tags/高速下载/index.html","68527b3f35a74b84cef0bfda9381e8b5"],["/测试/index.html","25232aec3e2e8d73f1565734d09f7548"]];
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
