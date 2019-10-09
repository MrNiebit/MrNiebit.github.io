/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","60bd4a571fd60e20a6d625e675ea08d9"],["/2019/07/20/Spring入门学习/index.html","8cadc6e6ac0f81a8d8c884e1b5b7719e"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","e414773522df9009790153abd5d1707f"],["/2019/08/04/Struts2的执行流程分析/index.html","76499eb89fec0ed6f67635017d899fc6"],["/2019/08/17/Struts2的拦截器栈/index.html","640cb5d85243cd8c00c51c0894b55763"],["/2019/08/20/ognl表达式和值栈/index.html","d272fa4efbd208cf64b48f5bcf0e41a6"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","4a22bd56c97f78c82aa16e54277a647f"],["/2019/09/01/Untitled/index.html","6ccedf3b2fe9d4861221663a039e3580"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","a78608e323863389040cc0f5d43815df"],["/2019/09/06/MybatisUtils工具类/index.html","bc410295789b2462f0950e8d0139fa37"],["/2019/09/06/Mybatis使用注解入门案例/index.html","6288e8aaa7346969c71cc098b9f38310"],["/2019/09/11/Git笔记/index.html","325822d054e2054c8c57a264d3e4dc4f"],["/2019/09/11/MyBatis的动态SQL/index.html","16d7490dd4d68987c63e6093d350abf9"],["/2019/09/14/安装Docker/index.html","9fa07eab449373766206aa70155a01a2"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","a5fefee1afaee202fb42b4f8f98727a1"],["/2019/09/21/linux服务器和tomcat部署/index.html","86ddc6c9cc532fd209050ea176432da8"],["/2019/09/21/maven创建spring入门项目/index.html","d37ac9bd1edd075b4519e8659c0b5def"],["/2019/09/23/mybatis多对一、一对多查询/index.html","b0009554af93da0fbe6ecf0eca67a420"],["/2019/10/08/Maven入门学习/index.html","1c132e16c571ab3923222a3cfa9c367c"],["/about/index.html","2c4966053773128c465c29dd384c801f"],["/archives/2019/07/index.html","a389b1147b495062602d20edf683b45b"],["/archives/2019/08/index.html","b9c1c6051b04a261a1d4bc1b23fef3d0"],["/archives/2019/09/index.html","17c91ace669c5231bf25cde0c465d0ce"],["/archives/2019/09/page/2/index.html","d1d04ea4c2b787ca28df3a4337bfc4dc"],["/archives/2019/10/index.html","877eebbf49b75e2de7d2c567d80eb5bd"],["/archives/2019/index.html","342c3d263196a7c26315867c24d95d03"],["/archives/2019/page/2/index.html","fa0bda018f2c75b7249c87c04a4519c8"],["/archives/index.html","676bdf1efd157dfdc0df46c01b3b5d1b"],["/archives/page/2/index.html","62d4a44dfc7d4247adc535d6ea1a1d5a"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/git/index.html","853aaf8ffb89e37fc84d7b39e781647e"],["/categories/index.html","57799b31ca26a617ff922134af3fa6af"],["/categories/maven/index.html","51c19d895dadf28a397f5fab6507a7e7"],["/categories/mybatis/index.html","3d649590e0578de4712d310b1d77c632"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","349804838d12634188e017b089be2668"],["/categories/框架/index.html","6c0447081367df5ba6f3880be77e14e3"],["/categories/框架/page/2/index.html","ee79449245266ab15fa737f4fe3f6b20"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","49b9e20a474fd0388dbd9cf73ae18a67"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/main.css","d825415ea19ad2806c6943f3b03399e4"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","d8c06756a854117c9c7cabc2e8cb0795"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","bed8f9273e6eb236b6da240dba305937"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","ab7b6d6a803215b177e68dcef5553aa3"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","8f7d1308d2cfb091e0f36cc58f73cd07"],["/js/src/algolia-search.js","1f3791d4a9c18357fb2b0355f1550448"],["/js/src/bootstrap.js","ae95e914ea119e49c798097e2d0ad717"],["/js/src/clipboard-use.js","909dcca3dede4dc78b5185e6e8de807c"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a0134904d92d30c2ffadcf915d6b5a10"],["/js/src/exturl.js","9eabfe3d872ff607fae5447ec663a6ba"],["/js/src/hook-duoshuo.js","8b7fa72b8c7f5669e21596f681e58a0c"],["/js/src/instantclick.js","dc5ce88a45ba5b07839d6f281475ec29"],["/js/src/js.cookie.js","6ff5e82d232f4b7f90badb2d1483bfe6"],["/js/src/motion.js","982805160bc85a0d072390da0f9d7e73"],["/js/src/post-details.js","9e4296d4a227bb376a421a93f9fa8e6c"],["/js/src/schemes/pisces.js","91d31f5347f29587d7c8f1f300b3cec7"],["/js/src/scroll-cookie.js","d1aa07841393038ac7708e38a3d8ee9d"],["/js/src/scrollspy.js","e067278d267981c07934d561b8e58c1e"],["/js/src/utils.js","ed154576629fab0cdca85385a6e2a764"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","1a612524935d057f0e8d26192a69670a"],["/lib/Han/dist/han.js","60c74747f46422c3b5a32b360671407c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","19e54df81aad92a7f63f4309e41ef3ba"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c54537cef75c51b85411cbf358babdab"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","35e0ec5fdd0a610b043ee4124b76c8a8"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a52cce42091e91b1c548fa169ed0c100"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","e9127110985a86b7812c2da83b044b11"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","5af36194a990af9c7d7a5a087a74e2e5"],["/lib/fancybox/source/jquery.fancybox.css","02b0f87ff1b4b667099f8c60cda57e33"],["/lib/fancybox/source/jquery.fancybox.js","75523bfbb84f6791b46a042e96f7064b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","a17cfb2b99346003f5824ddf9eaa7a21"],["/lib/fastclick/lib/fastclick.js","80df511e0d592d2618a73a6bca9e786a"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","70bfbe734f36efacfb31fd3bc41adf07"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2afe293c2027bc6d49be54fca14b32ee"],["/lib/jquery_lazyload/README.html","f954b072bf065ac30b5c810bd9ca82a8"],["/lib/jquery_lazyload/jquery.lazyload.js","b11c15ce27d42a94aca9fddb02961685"],["/lib/jquery_lazyload/jquery.scrollstop.js","e40bd99a917eea37cc3a947320bfdb0a"],["/lib/needsharebutton/font-embedded.css","1cbd1c01eaf72d3317c332ff842b3bcd"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","d08b0d0771789ef3b676607aecd1d0f5"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d061986b5334693fe2c50069ea346e99"],["/lib/velocity/velocity.js","7ed91a99770205b881fdff69bc25e431"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","10a3b7cc8d8041473e20f3d68b65e4dc"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","5b3f049e590d3ea64477953d61418234"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d41ec94333a1dcef0e22205d23707baf"],["/live2d-widget/demo/demo1.html","09ee3463f5e60300917daa611e28d4ac"],["/live2d-widget/demo/demo2.html","eb00bd97ddaddc7df21297568d3f2bfd"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","f7b2090c2178d47f471e7cf3ddaf272d"],["/page/2/index.html","eade1f72adfb432c7310d7990bb2ab49"],["/static/api/css/imgshare.css","04cb7fef5d554f19c401fc949404c9cf"],["/static/api/css/like.css","86d7f0b6a962a5436bdea16983169912"],["/static/api/css/select_share.css","e14420fb9828dea52caad2434ed8937b"],["/static/api/css/share_popup.css","3089baf096c9580cfdfffa2a7c90ad45"],["/static/api/css/share_style0_16.css","e44dc14de34254cf61af1b082e56c7ae"],["/static/api/css/share_style0_24.css","1ac2a2a7ff775a4ea7189c252e3b7432"],["/static/api/css/share_style0_32.css","147869d4342eaff6451d46564dfc160d"],["/static/api/css/share_style1_16.css","9046f5ae0bcf49ac179be7340f1249b8"],["/static/api/css/share_style1_24.css","d1b79f0497465c866ff2850dd597b44a"],["/static/api/css/share_style1_32.css","81e2681f217b1d04e0e5612a4b6b91cf"],["/static/api/css/share_style2.css","74ada015781d3032dcdf796c5c77c8db"],["/static/api/css/share_style2_16.css","b8cb82f6a332aa39c91f965fd165dd01"],["/static/api/css/share_style2_24.css","7ea5b1904a074ce601dcabd9283acab5"],["/static/api/css/share_style2_32.css","f5c5384ceff45727d882e9294fa16363"],["/static/api/css/share_style4.css","f44a38d2566e113ef5865003da01903a"],["/static/api/css/slide_share.css","9092979e69390c3446818f4fc129c281"],["/static/api/css/weixin_popup.css","5f96e2e8840520418d7a9bd7b57a1ee3"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","670aa906a86ad1b67a855d6b723e8fcf"],["/static/api/js/base/tangram.js","9572e88c1b408116ac9b4ae7ec1e7c90"],["/static/api/js/component/animate.js","d1dfded2ebd45fd6900a101d959ced22"],["/static/api/js/component/anticheat.js","ebb8138299ffa0115bb0ac40e2ef548a"],["/static/api/js/component/comm_tools.js","dbbf03e33e616ed81f491cc08d133166"],["/static/api/js/component/partners.js","8494939b88b5ab68313915490ffe6b53"],["/static/api/js/component/pop_base.js","7cbfe1dc3e063fc134429f56f17991d9"],["/static/api/js/component/pop_dialog.js","771ef8fdf95fcd9a158717b7ed841654"],["/static/api/js/component/pop_popup.js","c75f32ae3f39ed6c6cb6e6e518dde717"],["/static/api/js/component/pop_popup_slide.js","910772fae05722a0672d83d767d418a5"],["/static/api/js/component/qrcode.js","37209ec8b8b90b7abc8b86ea0eff18c5"],["/static/api/js/conf/const.js","b7e9268b7ff16ad68e1addb7e32bd2c5"],["/static/api/js/conf/define.js","fa17a9128672e8c169f41649e55bf09b"],["/static/api/js/share.js","ad42fc961a8fba109511d4a764b78d71"],["/static/api/js/share/api_base.js","1f69876ec15c3788757b5a1fcb45c651"],["/static/api/js/share/combine_api.js","3e07fbe5add47642980c6690eed6972e"],["/static/api/js/share/image_api.js","196497cb6fed2eb498c3020b9c8480cb"],["/static/api/js/share/like_api.js","e3273b7ee939a8b9277f670579454a03"],["/static/api/js/share/likeshare.js","48a43acc95f27bcb66d6e8c815e53618"],["/static/api/js/share/select_api.js","28f5ba98acfd0bbdebf008c9d081719b"],["/static/api/js/share/share_api.js","99714eb66c372a6bb46d5845fe11754d"],["/static/api/js/share/slide_api.js","7e3a3856938d9368666e77253f5140ef"],["/static/api/js/start/router.js","89f723654cff8bb33caece37e96c8ca4"],["/static/api/js/trans/data.js","ea311ba59c244b6c844d48890f69d04a"],["/static/api/js/trans/logger.js","ea311ba59c244b6c844d48890f69d04a"],["/static/api/js/trans/trans.js","0583f7ee6899b366be71e1de96ea60a2"],["/static/api/js/trans/trans_bdxc.js","898d688754d45383971b18295775f8f6"],["/static/api/js/trans/trans_bdysc.js","83a8400ad10a072b58ae69c1e8974a73"],["/static/api/js/trans/trans_weixin.js","85ca5d9bc6a52095c6308d46856db829"],["/static/api/js/view/image_view.js","968c6718f8304279f2855e346a23f287"],["/static/api/js/view/like_view.js","a5e31442b4baf7b924dbebae77fe3b74"],["/static/api/js/view/select_view.js","bd90038674c8a58754fbc9d5c4e668ea"],["/static/api/js/view/share_view.js","5d5d2696440cdbe55578dce00d2e7c86"],["/static/api/js/view/slide_view.js","f11c9a4b58d2277f8bdf61494a28116d"],["/static/api/js/view/view_base.js","67b6a2293d67d8f0355b19274163fea6"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","e5e8543e2963727818c0d15b5f0d78f8"],["/tags/Spring/index.html","3d371d181cfccb170ad7bab5299f9c1f"],["/tags/git/index.html","8695ce75942c8c0d0238b6e8386dd495"],["/tags/index.html","259bb169ad2d18a3fa118edaedb84862"],["/tags/java/index.html","08e5230bd1b2d8d5eb71d02f3e173e9e"],["/tags/linux/index.html","eb47a94c4e42368cf4a3d675eefa426e"],["/tags/maven/index.html","f4e43d27868a0c13d0ef024620e8ae52"],["/tags/mybatis/index.html","50ed21e77c7c37facabfc28fce454759"],["/tags/mysql/index.html","7a6d90fc2b2e1a997b18d7a4b5c6449f"],["/tags/scrapy/index.html","907256a84107df9aea96c21ad82d89b7"],["/tags/spring/index.html","f2d5f7d636c1c6c7fb4616630bab5f4e"],["/tags/struts/index.html","12caa785898c79fbb6992dd301236be1"],["/tags/struts2/index.html","15261696462593bf4c81ff28cc6d4aa2"],["/tags/tomcat/index.html","afca081fcb302a43f04ba3f217933828"],["/tags/爬虫/index.html","d251a7666a570f5afedc0f0b7b1e3273"],["/tags/爬虫框架/index.html","30390773916c2f3bfdbc37b07664a5fd"],["/测试/index.html","b26f80788e321058125b90f227ea989d"]];
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
