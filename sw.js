/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","bbddfc11a8231e1db6594b3c4840770a"],["/2019/07/20/Spring入门学习/index.html","00f5979d031de590dae1ab22234094c8"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","1a67d76e98980b9c9f2edb268524c85d"],["/2019/08/04/Struts2的执行流程分析/index.html","b7bfe83f959e9644d7aa7ee0cda77ea0"],["/2019/08/17/Struts2的拦截器栈/index.html","8853231b1aa3fc37dac7bb692ae6857b"],["/2019/08/20/ognl表达式和值栈/index.html","f5f2f94add33ee1d36fd96bef1e7881d"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","fde489f0f7061553eb49177cad05ba51"],["/2019/09/01/Untitled/index.html","a1ab43eb4625ef1b1edcbf9003494271"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","fb1aa554f3c59bbda8bfaa31ef4bfaa0"],["/2019/09/06/MybatisUtils工具类/index.html","5513bca6f132c9e6dd7f683a144a6e4f"],["/2019/09/06/Mybatis使用注解入门案例/index.html","25352e7a01353a6a0eed1c0234fc276f"],["/2019/09/11/Git笔记/index.html","e16a05fb769f022818673a2455c9d850"],["/2019/09/11/MyBatis的动态SQL/index.html","ab3f32f79fdb56d232fc695f753717c6"],["/2019/09/14/安装Docker/index.html","fc89c39f5b28a0b2da306db2dacb9331"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","d2966d6f5f68a0d3510eaa787a2b5963"],["/2019/09/21/linux服务器和tomcat部署/index.html","12ff7f6af2ea71ed5ab4750a9d80f26b"],["/2019/09/21/maven创建spring入门项目/index.html","a82beacd749427d31410a83a2eff2090"],["/2019/09/23/mybatis多对一、一对多查询/index.html","566cf063506a82b276f8fe9f18369edb"],["/2019/10/08/Maven入门学习/index.html","012843adbc3c323100867302b4086a5c"],["/2019/10/09/CentOS安装Dokcer/index.html","8cafc738504ecfb4455c98d3bdadaa86"],["/2019/10/09/docker学习的入门/index.html","53d58c41827f1a29b056e3cfc2a57d67"],["/2019/10/09/linux常用命令/index.html","fa57b84b09a77cc2cfa854fcb9d766d9"],["/2019/10/10/mybatis单表的嵌套查询/index.html","b264146d2ff038c1d9f8175e7946ff1d"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","bf74c4e7b49af83bb95bdbbb2ca8ff4b"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","59350266231859cf5c78fc3f7a693b3c"],["/about/index.html","d14879db10d18c64ae78597a29c27ab3"],["/archives/2019/07/index.html","325d42bccdd005910e888ea1eb7e1262"],["/archives/2019/08/index.html","a9f349909f43a94e60d9f8dcb9d7234e"],["/archives/2019/09/index.html","a0a21a0ee3aa0609aa04b2495d6cc6c0"],["/archives/2019/09/page/2/index.html","bca9f39a583b3b6bd1774e4ca2d33dbd"],["/archives/2019/10/index.html","8ccf8fcd9484d0284e94a01a23c3ad83"],["/archives/2019/index.html","bceb9f40d832758581ad0ff28790e4e9"],["/archives/2019/page/2/index.html","02c928b3154530ac2862827e94b56923"],["/archives/2019/page/3/index.html","4a6bb228fb39c6a99750e5019f93d843"],["/archives/index.html","9b25c337c2d2ac8b898cd652263ed37e"],["/archives/page/2/index.html","f57aead67a4f445ac2305887ea90de51"],["/archives/page/3/index.html","fd3b0d534bfe9e4214def521aed603af"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","0c36d57e0cba59e0960708a8845689c9"],["/categories/git/index.html","1c49de4ca7f8f6da0c09a751acd2a2eb"],["/categories/index.html","a6cdbab1bdd1697fd52a245aa688d329"],["/categories/linux/index.html","fcbfab4089b0c934d13bce5140cea93f"],["/categories/linux/tomcat/index.html","e2b074b940e2d07e53dd4c5661e3e083"],["/categories/maven/index.html","662fd8e1da4489796cc32c752b512cac"],["/categories/mybatis/index.html","1b5fd2b38d67f17b3b7469da11301586"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","3a0735469d00f86387858748a33686e7"],["/categories/spring/index.html","1e2461810b012e98ea45a48dda2ed613"],["/categories/struts2/index.html","5273b8516fcd5ffafa82862adda7dcea"],["/categories/框架/page/2/index.html","4864f40a56dd0d6fcecce4f4e3906dfe"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","0f767703df7f4c2973b93a75f0873af3"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/高速下载相关/index.html","436d4bdb2204eab6aac43af64cd7ba02"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/main.css","bac1485014bfa59338303417956d621a"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","5c64ec338e45d15a04fbf271bfecb690"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","14af6ea267f8a7f2b104ef1d1f95c604"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","9399921cf6267c16ac87cda5a04f04c7"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","d7a1a70c8384bde770bddae2415b8fa8"],["/js/src/algolia-search.js","253443398b2054c114ad4c8d95b2c776"],["/js/src/bootstrap.js","b5e09f91d8f34986d6c5dd380c4cb657"],["/js/src/clipboard-use.js","02e51c82c0637fed31768a795b02f1bd"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","8eecec5734aa18238f17afd900504631"],["/js/src/exturl.js","31f91d4aac7e99d4d9688b6747255892"],["/js/src/hook-duoshuo.js","d46a40cf35cd918585e1c9ac50655e38"],["/js/src/instantclick.js","1c1f7968294e62bfb5d4786b0a6b6c98"],["/js/src/js.cookie.js","a890e4dff176ac0a5a260cac6f66a287"],["/js/src/motion.js","224dae44ec8c9c85d194902bf5307430"],["/js/src/post-details.js","58e7666701a767521ea7c168f1a66b06"],["/js/src/schemes/pisces.js","8ff5f605dbb94fa2d63f2ab54e367436"],["/js/src/scroll-cookie.js","d0bbe8fcf95a1788b043186b2e9eebd2"],["/js/src/scrollspy.js","2823df0424c1911b1617f9561445daf7"],["/js/src/utils.js","3f1a95bc6223d8c7644688385d150549"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","43018d123854388ca23fc4d027e6c94a"],["/lib/Han/dist/han.js","06cd99b50fa227431a901f6d9e5ee683"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","1ba3895c371592fd363497db6fa844cb"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","f96378dca62a0272b01c5d9e6f17ffc8"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","826511f2ec2eb8b8a7177d0f2f2c8ecc"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","bbf2e7f97ca03098c17105d22ff0b110"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","88d6ca8d57e4edd9674bced57543e1f5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e6e23bb769399557111cf9dcdf82513d"],["/lib/fancybox/source/jquery.fancybox.css","2ca255af59bdb00e59342a1d05f09369"],["/lib/fancybox/source/jquery.fancybox.js","cabe6ff9a5dad0e6c48ce10d18995005"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","3c2b0600964d344e41824c5162601dc2"],["/lib/fastclick/lib/fastclick.js","f45225602f17203df74fcf32fc9a8327"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","3faa66af2b8dd70b2f019d15cecb2ddc"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","00b87d0b67bcd2093a14fe516de45a65"],["/lib/jquery_lazyload/README.html","439703b3641ca86eb4e5ea049a8c6121"],["/lib/jquery_lazyload/jquery.lazyload.js","0a1b864ff8d43c60a8b4daa0020316e9"],["/lib/jquery_lazyload/jquery.scrollstop.js","3aebdfd3506b2a56d865526619e0ba4e"],["/lib/needsharebutton/font-embedded.css","365743274ae43b281f1eff77de41cf57"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","f87de8f3db737e45efebe082c4a91409"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","32b6f808f3fc0342b6fdb51ba6031778"],["/lib/velocity/velocity.js","c9648694873a4e603d4f4a5af1726c32"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","bb2ba20a7848af60e458911edc409c67"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","866861b028f580c2124a55b1677fa89c"],["/page/3/index.html","13e3a1c8f2724fe9c2c780c91d5b2c2d"],["/static/api/css/imgshare.css","55f811ef3382493f9dfe2ee281bb3274"],["/static/api/css/like.css","4c213f10134fc28dd8634d0b42c66fd4"],["/static/api/css/select_share.css","4a65a6be01825244670d8a27198a821c"],["/static/api/css/share_popup.css","2464b170d87feae89135d5263b9a788e"],["/static/api/css/share_style0_16.css","abe9668ff5fcf7f68140e7bb06896fe3"],["/static/api/css/share_style0_24.css","a6a6d3081f6fe90cc209cf9af4eeeec2"],["/static/api/css/share_style0_32.css","0abd866e474522bc7ed25331355d7777"],["/static/api/css/share_style1_16.css","fbb092e629e74f2e048bef34ea664199"],["/static/api/css/share_style1_24.css","0609d43b99e7bb0d9238f3db3bff7474"],["/static/api/css/share_style1_32.css","966e7cc9ac8a53dbb15a13a6dc583574"],["/static/api/css/share_style2.css","0e6fc8487f624c2e9cf1abe97dbc27f3"],["/static/api/css/share_style2_16.css","c2a9e4507dca5d672d2821fd4266a770"],["/static/api/css/share_style2_24.css","c70152c8e2093f4b6361dea906feb698"],["/static/api/css/share_style2_32.css","5edd5fdd728a5e4ba846d13fc6ceced9"],["/static/api/css/share_style4.css","50c76e02f803062e5650a4ceaf642df9"],["/static/api/css/slide_share.css","0bc2bbf3c472f79418a155f2233204bb"],["/static/api/css/weixin_popup.css","4b3fe3c01895ac7c6e839c9da4545a90"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","6a8f7554426428cf8cfe7ca912ae6d73"],["/static/api/js/base/tangram.js","bf3eb43db0f7da8dcd7b8299cae24d4a"],["/static/api/js/component/animate.js","e0167faf495e1d095163eda819b2ef17"],["/static/api/js/component/anticheat.js","7c0a9d0d6c6eed8226d5d086b5093160"],["/static/api/js/component/comm_tools.js","13ac2ee6724428c80f1b37ddd4f52d3a"],["/static/api/js/component/partners.js","a844a1add22b33e24a5c8e55fe741e39"],["/static/api/js/component/pop_base.js","f1d9d2f977ff6e9cfb202279b8ddc403"],["/static/api/js/component/pop_dialog.js","17aea550a1e5d2f6d4941540732fd66d"],["/static/api/js/component/pop_popup.js","a1f965435c45489a18cbde2e097cbcff"],["/static/api/js/component/pop_popup_slide.js","66de27a61b21cc6b4ac169e30a4dbbfa"],["/static/api/js/component/qrcode.js","500f38d3258c7948a380ec4b5185eae2"],["/static/api/js/conf/const.js","f4fee1e676cd24976a575b540ca0801e"],["/static/api/js/conf/define.js","d3fc8db509e808ac612563cbc2eeae41"],["/static/api/js/share.js","23eafc6e096bb3f0877544054b6ec164"],["/static/api/js/share/api_base.js","6c6cf43ab4066753934c977dec383069"],["/static/api/js/share/combine_api.js","c1dfbfb6bfe9bacf6c6682466b22f6b2"],["/static/api/js/share/image_api.js","00d73cc6fede932f5118d6cb47478675"],["/static/api/js/share/like_api.js","a4c1fdef6cbb28c23cc436c3bdde3599"],["/static/api/js/share/likeshare.js","f8774cf98e8e6395e57882a3b1b479f9"],["/static/api/js/share/select_api.js","70f886e21f144b8b75c83d796dc9f607"],["/static/api/js/share/share_api.js","1a32414ef2e653188b95985c619edfbe"],["/static/api/js/share/slide_api.js","030a019f855c3087dbcf785693525075"],["/static/api/js/start/router.js","bd2124857e75031128af258a2afeb901"],["/static/api/js/trans/data.js","56367787ab7e697982775e57a4a3029f"],["/static/api/js/trans/logger.js","56367787ab7e697982775e57a4a3029f"],["/static/api/js/trans/trans.js","dd60737d2681d1b00cbb557a7b85166a"],["/static/api/js/trans/trans_bdxc.js","55ab4ed57431656b55c3d8fdad174885"],["/static/api/js/trans/trans_bdysc.js","fb44f8d06673e12f3b5fa82d872f6a18"],["/static/api/js/trans/trans_weixin.js","53266634f201cba1dee332dd98e792f2"],["/static/api/js/view/image_view.js","ee34632c3c5ac0155b39c514b58bee37"],["/static/api/js/view/like_view.js","8efd9e4dc81bad590b6eeffdc719012e"],["/static/api/js/view/select_view.js","2ed1142efba84b6ef48ddd0d2bb132f0"],["/static/api/js/view/share_view.js","de8c0776972e02c784ca27d1f65ee9fb"],["/static/api/js/view/slide_view.js","e0f4f60023a71415a9057d262c684989"],["/static/api/js/view/view_base.js","8860de6a511c24d54646097db2acb10f"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","c0388a17b56813e924165f7f911f71b2"],["/tags/Spring/index.html","4c4ba16d19268ccba9bdffca809627aa"],["/tags/docker/index.html","3d7a8a0cc1dede5a14eea2cff9ad1f8d"],["/tags/git/index.html","936c71f06c85aa26996b29d34b4dae6c"],["/tags/index.html","6fa77260887dfd494a97b42d805a43b9"],["/tags/java/index.html","6ad35e45c04ec756324fb9d92fa6128e"],["/tags/linux/index.html","7939ea322afeb79705cf1def5993b472"],["/tags/maven/index.html","564fe351ead93af9da79555d0dba63b5"],["/tags/mybatis/index.html","d7be06540120795aa4a8105a50e34fd9"],["/tags/mysql/index.html","1867a956e60e4f784b91ef7e2793ccc1"],["/tags/scrapy/index.html","9056d350c105b8fb31866d0dba855166"],["/tags/spring/index.html","2f1d83f17ab3a6c56a05f6eec990650a"],["/tags/struts/index.html","8f1b825315e3827e3803da10be2e39ad"],["/tags/struts2/index.html","9ded3b90530f1d1d89a6e643e64e8acc"],["/tags/tomcat/index.html","08b49b1e3988280c89a8d018bd95d284"],["/tags/爬虫/index.html","84dbddbab52cebcd726dd31e80969f2d"],["/tags/百度云/index.html","4986a9c791c7e6b77ae796231b9b0110"],["/tags/高速下载/index.html","21ce4107e58aabcbf04d20e9aff3adbe"],["/测试/index.html","4266f74bb3853535c8ed8622aff6c5ac"]];
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
