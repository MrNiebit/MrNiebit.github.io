/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","9f9f90e12b23468865a194a6c7ead2f2"],["/2019/07/20/Spring入门学习/index.html","2d35f5187a5b388d38a3a02cbbdb0b98"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","081dd3e0f3670b951b88f66ccc302b9c"],["/2019/08/04/Struts2的执行流程分析/index.html","2a5bdd3c7e344f39d62110959cfb28c9"],["/2019/08/17/Struts2的拦截器栈/index.html","2ebf429764a73374149fb13ce24745ee"],["/2019/08/20/ognl表达式和值栈/index.html","5e21c2f3b8f6af60ca72d2916ca9956a"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","3de6745cb2e956e054a6c71a70f39c13"],["/2019/09/01/Untitled/index.html","5451a19bb170b3042b37314bed2687c2"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","3df292112e7cd762af2361da3486fc2a"],["/2019/09/06/MybatisUtils工具类/index.html","ddeef2284c278e4054532f1c956c852b"],["/2019/09/06/Mybatis使用注解入门案例/index.html","ce44ad61e6db4d278b297800de0a64ad"],["/2019/09/11/Git笔记/index.html","12153f8183fef93871ab2dcb438b6a96"],["/2019/09/11/MyBatis的动态SQL/index.html","16ef07dbda9f90e4ffc5ac897617d055"],["/2019/09/14/安装Docker/index.html","d34b416eb4dd62181f330c052b59fe36"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","be8222d9e9413399aa1945272cbbdea8"],["/2019/09/21/linux服务器和tomcat部署/index.html","cd88dc18055773f98dc2c3391b519604"],["/2019/09/21/maven创建spring入门项目/index.html","a09c56d9ac7d5f9a481b246fec86b294"],["/2019/09/23/mybatis多对一、一对多查询/index.html","372092e2e037b5ffce53bd7f236ffff4"],["/2019/10/08/Maven入门学习/index.html","78768bac1ca35196abb5ca4340ec9d24"],["/about/index.html","251967eb4d263f47186546793b6399c3"],["/archives/2019/07/index.html","e08204aa99161a8161ff3f363f8ee65b"],["/archives/2019/08/index.html","a413885a220ec1e641c7ca0447292774"],["/archives/2019/09/index.html","354f59eb4d89d7ccc361ca45f93a7f2c"],["/archives/2019/09/page/2/index.html","ff2361fbd93f07c0414a963d2fa390ff"],["/archives/2019/10/index.html","163b05934baff2ef14fa8bd58cb49554"],["/archives/2019/index.html","87f2a13721eb471230be49ab641c2a1b"],["/archives/2019/page/2/index.html","bcb2875a97ed231a0e87766d55d14d82"],["/archives/index.html","9c56326fcdfcf409b187a5eb3d8f28ca"],["/archives/page/2/index.html","67bdf832ebb035820dd03fc6ffac5a08"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/git/index.html","43b76ee5a2c9e4e0ff3fa4a5c9fe8b07"],["/categories/index.html","9c375f28943bc0ebade999ef22f229a1"],["/categories/maven/index.html","e02e071807ec0fa33b2994de999c4130"],["/categories/mybatis/index.html","3d649590e0578de4712d310b1d77c632"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","c71102a43e4d833bb643da1299db6abd"],["/categories/框架/index.html","9596946e959492247a5d592353a38c9d"],["/categories/框架/page/2/index.html","69d851d5aecba32d239c36955aebccd5"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","da9afd79d1a232fd9097eeeaae7add4e"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/main.css","3d9c6137051354396177c1a7ece446f9"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","f77125d3242b71495239c73a108d08f2"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","fe40c953a20cf1b50a74767a33949433"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","9df65e892fa1c7321687a4c24ba740a4"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","2f236e496b0d6803fcd52930181fbba5"],["/js/src/algolia-search.js","dd95eee4682ce66d1eea321d4cb0fdbf"],["/js/src/bootstrap.js","de1dd890ccb6fb7adfaf1fd7e8348d58"],["/js/src/clipboard-use.js","e013d8c20e545c4c5b08ffb2f5987c71"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","14c6164f8cbda0843c2bef621a0fc64c"],["/js/src/exturl.js","a04bbcc1c0eb64901999c08cf52b41fd"],["/js/src/hook-duoshuo.js","8a531c0879fd3acb8d3693a82c88b420"],["/js/src/instantclick.js","8de42f2f7f0c220e2073abc470de1a63"],["/js/src/js.cookie.js","191a42312c2961903987eca9f3935951"],["/js/src/motion.js","68363f1495bdb3157a582426aa34ba3d"],["/js/src/post-details.js","cf2a2e63d54ebf9dca857ddd8246e43b"],["/js/src/schemes/pisces.js","94c761d6a7d16776fc2b750cb0de8131"],["/js/src/scroll-cookie.js","b88386d293a5b3a97fed331ce1da7248"],["/js/src/scrollspy.js","ff0e8941a78f482247f8d96364bb41cb"],["/js/src/utils.js","2d819a60cb3a4e3960032f20a1771192"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","99141b3ca3080ca28ef063874a76b2b7"],["/lib/Han/dist/han.js","906db56db45a8f0fa039bb332dce168c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","001076e66d538569324d7baa8d88d2fe"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","b46cf246bfb7db94303218340f41199d"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","607f69b022d1548c9e50cfa4b94731c8"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","59aaf471b7ec82890a272cca180d844a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","9718a8375f4d5dd5655c55390daccdf9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","dd2d4edc4dbf14fb06374a6e67040261"],["/lib/fancybox/source/jquery.fancybox.css","9b3c07de8e4e91fbc8b25ba2154350f0"],["/lib/fancybox/source/jquery.fancybox.js","18d3d647d2fd30b5bff630bb2f20510a"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","efd33b093be96887b6ad052119b08b53"],["/lib/fastclick/lib/fastclick.js","0160e473e51aaa76ebf3322a3abe20d6"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","886f2e648bf7dc4d26329152259d73ba"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2e9fb247741288823e55440656a2afa4"],["/lib/jquery_lazyload/README.html","6fb93ea4ee925a3b7e9cdb7ce03dd595"],["/lib/jquery_lazyload/jquery.lazyload.js","7a9bf376d961db7dc05f58b8820b7cd2"],["/lib/jquery_lazyload/jquery.scrollstop.js","74732b252e8bee2a79b3679ee754abea"],["/lib/needsharebutton/font-embedded.css","adbba0547fa97de73f6a8cc135d2edaf"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","7b823227f7e46938f7dacf72188c2405"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","7177ba2de9dd27d67db4f45de19b386a"],["/lib/velocity/velocity.js","7cfdebd201539d22e202822612fe7b73"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","8027586cfbfb965b724d1d1ea62bfac9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","83df1425331607300e1ffa56d4db5291"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","4c352e822f2fc101b42cd7a418ff6860"],["/live2d-widget/demo/demo1.html","9e15c4628011803a3859f8f70e623cc9"],["/live2d-widget/demo/demo2.html","68e1373edcca8513f962f99bb9fd722f"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","8f96ce9e49b965a3e4e431c37aba3a2b"],["/page/2/index.html","1bf0ffdca2eb7593d25e634660b2b04a"],["/static/api/css/imgshare.css","40f9b74ffdfcedad9eb85694c0d42905"],["/static/api/css/like.css","8a705e1a8e123b8c2a0d3660fd0fad26"],["/static/api/css/select_share.css","3859f505fe48cf437fdd8a38d5b3fcd3"],["/static/api/css/share_popup.css","ac19d0d810153a6bc7b87d60723cdac2"],["/static/api/css/share_style0_16.css","8d5630e8433d27c6fc13acc1984a066c"],["/static/api/css/share_style0_24.css","c6de94e63caff549c29b953ae4bf5361"],["/static/api/css/share_style0_32.css","cfe5c9518c3468a5a7b54998aa72208e"],["/static/api/css/share_style1_16.css","32acc36826a6b3bc2bce7c54c8bb19bd"],["/static/api/css/share_style1_24.css","d00dd74fe337028d792b3271661ec530"],["/static/api/css/share_style1_32.css","552f53a3ef13e58afb6e2ad2ab232114"],["/static/api/css/share_style2.css","2acdd6ba84492fa292ba077a0633a439"],["/static/api/css/share_style2_16.css","217e5210aa08d89dcbc7de0f69bf9ab9"],["/static/api/css/share_style2_24.css","9b65ca0258d33eb0e159af9e4f9b54df"],["/static/api/css/share_style2_32.css","fe6d57e66181119d871d07d842f70f6f"],["/static/api/css/share_style4.css","e9b529fb1c6ee2ecdc163bdfc43fb490"],["/static/api/css/slide_share.css","839e714623b12ce527d581483bd67615"],["/static/api/css/weixin_popup.css","97e895a2086cd2a313e57f0c5beb3a89"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","cd16174b61449f3bcadaf811280e4a5a"],["/static/api/js/base/tangram.js","b60e60db5b54cd1509c86406cc922ce1"],["/static/api/js/component/animate.js","4812d559aebf6f2a86aee60b71f1a0c6"],["/static/api/js/component/anticheat.js","a0f290a53199fea2fee93824c9ea2640"],["/static/api/js/component/comm_tools.js","5cb9df167045e31dd29091cd47d051f8"],["/static/api/js/component/partners.js","d395d54fcc7a93578bf89d8067c46f8c"],["/static/api/js/component/pop_base.js","18eb882783d7d067f2206f92e10081f9"],["/static/api/js/component/pop_dialog.js","fb239e857481ce0f65a2cee13f02f0a9"],["/static/api/js/component/pop_popup.js","8a62453e986b876a2a987414b61f9bd9"],["/static/api/js/component/pop_popup_slide.js","6aca50d58e527248a0d601f75b29850b"],["/static/api/js/component/qrcode.js","a3b265dbd69f458c95ded4140c737079"],["/static/api/js/conf/const.js","15627cad0e7f36fbd3805b6f503f36b9"],["/static/api/js/conf/define.js","bb12cb6fa20f6d1335738fc6045c7ffb"],["/static/api/js/share.js","f6a451f60b96c109585c3e3c87409f8e"],["/static/api/js/share/api_base.js","eb35ebf2a84df441569f666b0874c260"],["/static/api/js/share/combine_api.js","f0b28be129fd7759ece7749bfa59009d"],["/static/api/js/share/image_api.js","6a80f6d3067b5df61cf62782147dcd3e"],["/static/api/js/share/like_api.js","40c39119502c7b2b1fe8dca7b7328627"],["/static/api/js/share/likeshare.js","fc4738e7882382b00d78b689bc00329c"],["/static/api/js/share/select_api.js","ea5f96cf3f8d06ae1c7e58acbea3c00b"],["/static/api/js/share/share_api.js","3ecbbbde4384533decabc7dd374787ad"],["/static/api/js/share/slide_api.js","cdcb2ffb99fc0e842ff31292f7239983"],["/static/api/js/start/router.js","d90acb71f69fa36fe962ae5950d9fcb7"],["/static/api/js/trans/data.js","fc4738e7882382b00d78b689bc00329c"],["/static/api/js/trans/logger.js","fc4738e7882382b00d78b689bc00329c"],["/static/api/js/trans/trans.js","7b6fcfa19bde47fb7baee10d56739d72"],["/static/api/js/trans/trans_bdxc.js","0f8e7b9d6457a1efcfee45ef59e8c801"],["/static/api/js/trans/trans_bdysc.js","8ed3b91f522b41cb378f8af4aeda31d2"],["/static/api/js/trans/trans_weixin.js","0ba7189888b1227a82d6075eef56b3b1"],["/static/api/js/view/image_view.js","dc78bbcf6ed99bb018791b40c134b27d"],["/static/api/js/view/like_view.js","b546fec285cc3079866fa568793d1106"],["/static/api/js/view/select_view.js","1de4103c170c092e85bc8fd95390ec0c"],["/static/api/js/view/share_view.js","b5407a999d7121dc48ab916e8a091c20"],["/static/api/js/view/slide_view.js","aa49895d39c1cde79c18be1ab779e5c3"],["/static/api/js/view/view_base.js","b92af217c080b17d6c25d41adc4c8536"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","0408306e8d823f388eba66adda82ae69"],["/tags/Spring/index.html","14123f362e8c53e705022e57124808ea"],["/tags/git/index.html","fbe2c86068d04c973edf52b31448edfc"],["/tags/index.html","23cb806e38e84a9f2801d41a1777cafe"],["/tags/java/index.html","9406d4c18c28b04e15803da2f8f0bc75"],["/tags/linux/index.html","08aebb0223d7da4156439b094a974524"],["/tags/maven/index.html","1a38536ef6d371283136924d55fc2c7b"],["/tags/mybatis/index.html","b161e1c3d1e88b97afe951f40be947b6"],["/tags/mysql/index.html","ad63d938162f7be46eb6847266e4fa56"],["/tags/scrapy/index.html","ff85fa55eb521ee7d488ff5dea27812e"],["/tags/spring/index.html","213dd13e49b41835094183473a9db69e"],["/tags/struts/index.html","dbeb2d3304b9cf5b48b8123a7a64a2eb"],["/tags/struts2/index.html","88d15929d518bc6bc952e3bb063f2efd"],["/tags/tomcat/index.html","de54feaa341e9a24b8785bba47343a6a"],["/tags/爬虫/index.html","bdaa7e7e07034c28641cb40bd6a65e8e"],["/tags/爬虫框架/index.html","0d33db2bc8c6159adab379500ceffec7"],["/测试/index.html","4a882074c8764bb26b95def02a0bf516"]];
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
