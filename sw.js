/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/163/css/bootstrap.min.css","4eb7e3a7a7121c4a11f2daffd3fb39a0"],["/163/images/bg.jpg","5ac5da1b493c4c24aa958cf7675a0bd5"],["/163/index.html","d6136b492d515e4c2e5f0aaf61bfa9fe"],["/163/js/bootstrap.min.js","4967232dd6018523eaea36b219c7a629"],["/163/live.js","8b6f5c30e296eae7aea0ed719f39348a"],["/2019/07/20/2019年7月20日/index.html","6e7bd1b910c2c993e0d768283504273b"],["/2019/07/20/Spring入门学习/index.html","c5bd8c61cef661c8b33209c2a17f9a90"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","2613552859c9b99b26820bd91b300bdf"],["/2019/08/04/Struts2的执行流程分析/index.html","2f8e6a094ac8c4182f856f002782f4ae"],["/2019/08/17/Struts2的拦截器栈/index.html","b915272b61a1a39d98dd0000aa2b762a"],["/2019/08/20/ognl表达式和值栈/index.html","2b491760c71d9253b1d0a13655321b15"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","32f6b05d480414830340a0dd9f27934e"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","d2edc91d566555eb3752c944484d1532"],["/2019/09/06/MybatisUtils工具类/index.html","5e043850348100ccb1b51817878b35ed"],["/2019/09/06/Mybatis使用注解入门案例/index.html","87afb95dcf99be4b97f2f49b22f52e76"],["/2019/09/11/Git笔记/index.html","34ea7881fb472bc54256316d6ed00551"],["/2019/09/11/MyBatis的动态SQL/index.html","1b3516192d49376a706fa7c2a07a343c"],["/2019/09/14/安装Docker/index.html","440cf32143f763397e1fa7768099adba"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","bb9bcfae83321d27a7829ce31ff47aef"],["/2019/09/21/linux服务器和tomcat部署/index.html","e60a0b8cdd51899f66a91e2c7af3cae5"],["/2019/09/21/maven创建spring入门项目/index.html","469226d9432634a9ae6e438a80d782ce"],["/2019/09/23/mybatis多对一、一对多查询/index.html","cac1498e1af2c237dca6418a8373fce7"],["/2019/10/08/Maven入门学习/index.html","7f503e7d38d35423611a5c886d236232"],["/2019/10/09/CentOS安装Dokcer/index.html","9a8122c1e8068064f8322cb9affbf469"],["/2019/10/09/docker学习的入门/index.html","ae014e3f4c6f358fd5e5fd542fcee4a5"],["/2019/10/09/linux常用命令/index.html","02036d6df3cce2cd2ea54c4d803ee8f2"],["/2019/10/10/mybatis单表的嵌套查询/index.html","59c429a0fc1494aa83f87ba19b179fe7"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","0315f8e7b89e54851f6a2637fc0b1a51"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","f5832188d5f58755b751eeaf37555c4a"],["/2019/10/23/docker安装mysql/index.html","7f6877643278b30826cfdef17c634a32"],["/2019/10/24/Spring的属性注入/index.html","ac7d28c7a72e1046ae731f28d65d951c"],["/2019/10/25/模拟电梯系统（java）/index.html","224f1e4c74791d8943d7610c77e7c3ed"],["/2019/10/26/Docker学习之二/index.html","32096250fd1b6abb29788ace56f98d6b"],["/2019/10/28/Oracle数据库例题/index.html","0708a91ff8c20b895bf765b6cf97eaf8"],["/2019/10/28/linux端口映射工具/index.html","402c80cfe7f3fef21d8383ef56025676"],["/2019/10/29/Untitled/index.html","45eb5c050a4cc917e4fb2e9671b577e7"],["/2019/10/31/Spring-AOP学习之（二）/index.html","1e9c6d62ae48ecb53584c7d62bf719a6"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","34193cc48b8340d00b09dee5710d8098"],["/2019/11/02/MyBatis与Spring的整合/index.html","16179ff7c228cfc98df99478d2f8e6f6"],["/2019/11/02/Spring的事务管理/index.html","83c975f0ee806381466fd867714f9223"],["/2019/11/03/SpringMVC入门学习-一/index.html","e6f7e56baa95a165c9a425314ee33fa4"],["/2019/11/06/SpringMVC入门学习-三/index.html","4a975d583fdcafa3a1e44ff2f5de7a8d"],["/2019/11/06/SpringMVC入门学习-二/index.html","36ba95cd82200b2983891c5a1983d3a4"],["/2019/11/13/frp内网穿透/index.html","ed790734a53707a1781f4639a8a4493a"],["/2019/11/15/Spring-MVC入门学习-五/index.html","a10e3832f2b21d16f3ca0b659f321fe1"],["/2019/11/15/Spring-MVC入门学习-四/index.html","0bfbbdf7e267eb495c38cbe4a15241ab"],["/2019/11/15/pageHelper分页插件初体验/index.html","482feaa5388dd889eea6ebd0dfc4170b"],["/2019/11/19/使用IDEA将ssm项目模块化/index.html","ebc5d663f61e6d4f396090fd217d0a62"],["/2019/11/21/MySQL-8-0安装与操作指南/index.html","3fe7f55d9819d0b5e5996e71e4f7b56e"],["/2019/11/26/SpringBoot相关知识/index.html","d854a56f0cefb807e695cd425ffa3fbc"],["/2019/11/26/在servlet中使用thymeleaf/index.html","a6d9776851dc674fee98f95e90c2d2a1"],["/2019/11/26/基于springboot对thymeleaf的使用/index.html","5fcb7c1888276060ec1690dae8eb939b"],["/2019/12/17/Github搜索技巧和Cron表达式/index.html","ae30a0a23488586858f593c9425f6432"],["/2019/12/19/easy/index.html","189e72a414d1dcce62c36a0ed69d6454"],["/about/index.html","b55d64b7629901429b10dcd2f34172cf"],["/api/index.html","df7ad94ca97c8a89f0cee7fd985eee30"],["/archives/2019/07/index.html","80d131eb143e5ec5152d15d2d4fb3fa6"],["/archives/2019/08/index.html","915a081cdec43e249c1529ef12009f1b"],["/archives/2019/09/index.html","5c12cbc182f0a5d5d61df24ddfa14964"],["/archives/2019/10/index.html","76d8338a58db3bde2ae0cd5a8261d4ff"],["/archives/2019/10/page/2/index.html","e32bff6b8f013a1ac0dc802c6d1bb601"],["/archives/2019/11/index.html","16fec78176feacb6df5d865b73e74fc2"],["/archives/2019/11/page/2/index.html","1b54c37a1d91671ec46a729556b1ba08"],["/archives/2019/12/index.html","929214c6d9a049b25e8321de1da696a3"],["/archives/2019/index.html","aa580c4ab5a9323bc7d467bd3eb52cda"],["/archives/2019/page/2/index.html","d67cad884f97465f562cf2711e02a937"],["/archives/2019/page/3/index.html","f425d2624d342b311f8930fa95595579"],["/archives/2019/page/4/index.html","4576e2a9ff5b9a07d3037df7c45c0728"],["/archives/2019/page/5/index.html","e42c7d1b604cfd9ce85c86dc4455366d"],["/archives/index.html","f1caff21a19fa6022997956958fa2bc0"],["/archives/page/2/index.html","8c2592abee6da484ad90316483eecef0"],["/archives/page/3/index.html","4857911fcc09072c8ecd41aa41ada4d6"],["/archives/page/4/index.html","9668135d45109f30158ae44f46fa6d26"],["/archives/page/5/index.html","fb203284a328076505193541ffbf108f"],["/categories/docker/index.html","cfd20d9a647bf2d3659e8b2d84bbffae"],["/categories/git/index.html","444deb9cc11dd98f38b5d8cf7f58ec2a"],["/categories/github/index.html","aa5f1d70639daa33ad8a661b74e6d879"],["/categories/index.html","b9ba4cfa4aadc1951300d07d72f7a2f9"],["/categories/java基础/index.html","bdd563fca7396ab69933467f380e3d30"],["/categories/linux/index.html","65177e476e32469e40f456ed28671b37"],["/categories/linux/tomcat/index.html","8692b13d7204686daf9914f3ff74fb21"],["/categories/maven/index.html","20e6683b06b06891fcc1a94da2c9c9bd"],["/categories/mybatis/index.html","59ef51181a4078f22cf5b548e070824a"],["/categories/mysql/index.html","a1767c0be81ba10364866d7c417462f7"],["/categories/oracle/index.html","ece1e77f52dbb0d5b79f052540980c10"],["/categories/spring/index.html","a8f09f7c2a821beab63de1263b8d1a02"],["/categories/springboot/index.html","90275524a2c36127a1b8ded5e717b5e5"],["/categories/springmvc/index.html","11d476379c661422240c8014ff284d87"],["/categories/struts2/index.html","49a4dce497be173e89c8ff32a8095933"],["/categories/爬虫/index.html","7295fcb7742d5744f24802a727fa09a1"],["/categories/计算机网络/index.html","5b31c55db9ea7cad1e88aa40b2d35c26"],["/categories/高速下载相关/index.html","2db4fa379a17abb4d6d1dff83748ce8a"],["/css/jitang.css","6727067565989930207e0eb464d084e8"],["/css/main.css","442e4418f31b79296c32d7e6ca85e3ab"],["/css/normalize.css","7c188247a4f019024bd2775a87749ae4"],["/css/screen.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/xiantiao.css","53c74ff0d1c09dbdb95c59f32de1fd8f"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","108f1ba552f3250bbfadae1a09477fd3"],["/fonts/icons.dev.svg","4143a6cbb53e488ee357306805bb92a5"],["/fonts/icons.eot","b9c5cbed9bf5e79af98b6fecb9408ad5"],["/fonts/icons.svg","442a880c645e5da6e8c2e3b0f59c93c8"],["/fonts/icons.ttf","84e6367e8a1343d106300eaa692c532b"],["/fonts/icons.woff","f24eaa67582b0ee087a29b12ccdb53f9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","81a17b075ee38d4d5fda4ac6d3b0f623"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","296ebaf737c1c1e0bff5c51115474e8b"],["/js/index.js","7a399389d5c687dd19cfbe4b66f9a702"],["/js/jquery.fitvids.js","35edbdf88d1621c7a22cbee15b8018e8"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","7b621e584bb824c253ac12fb411f2552"],["/js/src/algolia-search.js","21399725720815b14fd6f13112862ec3"],["/js/src/bootstrap.js","59a99102ee3a6fe980ac28f04c9ad192"],["/js/src/clipboard-use.js","83b810c6f3a21415a8f76147210b4ee6"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","b2e09f5e26ed522cbbf6e019ff1e8bab"],["/js/src/exturl.js","99b22e99cfed9d32134a9ec9920d66bb"],["/js/src/hook-duoshuo.js","5b8c48934eecbfa294fbb737d16b021e"],["/js/src/instantclick.js","4d2fa3028e66f09dcdea69d1ffb8adb5"],["/js/src/jitang.js","94f5f4c6c63f6cc3a5516dce02ffe289"],["/js/src/js.cookie.js","31edc3295a5bdff925023d9f6d296081"],["/js/src/motion.js","ce77aab4d82631481bdb6f1ddb0a457f"],["/js/src/post-details.js","e10011a0210227f1ddfd4b4e308bf7f9"],["/js/src/schemes/pisces.js","f5a9c9fc860cc5812fb315a8a3b9b193"],["/js/src/scroll-cookie.js","781c6e2a6215c19706c0f56e7ffeabe3"],["/js/src/scrollspy.js","9e6146d57a42feae40a100328f5331c3"],["/js/src/utils.js","9a8ffc3f3b9010ffcabbd732b53e58fa"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","814f1cb58e272d180c8098b3b8c6f10c"],["/lib/Han/dist/han.js","47d98da33be195a30ea6a72ca0008223"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","011ae3f91f50436764e61f038ee4e4cb"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","e05d01a16712c2cf3bd790b95ee15209"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","98642b1f7b1bfef2aee4b8e005bfcbf1"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","8f2a01621492ed1abca6aba1da992468"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","7cde0d47a499e95aabb3b66d0b8ef8c1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","5f03aff1f421de7535c56049dc2edfd7"],["/lib/fancybox/source/jquery.fancybox.css","e0c07b9674c38c83a2f9fa99da5d84d1"],["/lib/fancybox/source/jquery.fancybox.js","e445a346feec2326f9d70e2809aa90b7"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","c55b16877cd66dc93d9438fac7fdd0df"],["/lib/fastclick/lib/fastclick.js","2cc0dcbb375d81fc7d0f74645393ab7c"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","7aa03602417c2338d5747d79019120f7"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","0840d985aac37864aad3763d0fd57f4d"],["/lib/jquery_lazyload/README.html","f56e57c545f2c7944da814d824710dc3"],["/lib/jquery_lazyload/jquery.lazyload.js","24c175758bea391d3e3c350068cc27f9"],["/lib/jquery_lazyload/jquery.scrollstop.js","73bb57a99e362813a5ce3b3bd67cad2a"],["/lib/needsharebutton/font-embedded.css","623a66bf80bc8b37fc1e55d5a44c8bfa"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","bd4ee920bd7ddf35b999caea6abbaaf0"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","82a5b129b4f4e5f2dbcfd1ddb13d33f1"],["/lib/velocity/velocity.js","db33b89c9396180a8fd46ff47bd29628"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","48a49c496d0aed07194ab0526918344f"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live/css/bootstrap.min.css","7cc40c199d128af6b01e74a28c5900b0"],["/live/index.html","8f762ed0d25cd49a541d09ce828a2930"],["/live/js/bootstrap.min.js","61f338f870fcd0ff46362ef109d28533"],["/live/js/proper.min.js","2385337f1a10c77a74d2e636aea3abe4"],["/one/css/oneProblem.css","982bed5eb2290f14fd84cd3fee896d01"],["/one/index.html","ab24b377cb8b46f9c4e1b3cecd83f11e"],["/one/js/oneProblem.js","8396eb08a5316f63bde9c36311e42f68"],["/page/2/index.html","5a99b85fca36e6a791897fc4f6805c83"],["/page/3/index.html","29e0f90110b4adcd66ff2074ad22be9d"],["/page/4/index.html","439d490e17f3b79ba81044fc81e7a6e5"],["/page/5/index.html","a7b22e772a8e1dfccf74f6b77ec953cc"],["/static/api/css/imgshare.css","d38ec405ffe6a39626c96e6b8cd62497"],["/static/api/css/like.css","39c5741e653a0d1b3ffe39143eb13507"],["/static/api/css/select_share.css","3d89bf0ff0e702218a034201b0e7a8c8"],["/static/api/css/share_popup.css","093ef84c362afc2ebc6bfd2bca329ffa"],["/static/api/css/share_style0_16.css","82600f64f79e424a98299c49f5d66e97"],["/static/api/css/share_style0_24.css","55649716b50a4dd9f7274c5ae442bfb8"],["/static/api/css/share_style0_32.css","75a72b3afc082628e1e714d283972a91"],["/static/api/css/share_style1_16.css","9039eed8421012254753a0cd322dd601"],["/static/api/css/share_style1_24.css","728bf1a3eeb9e817aecf6e1dc74faee0"],["/static/api/css/share_style1_32.css","3be51c8d1fcab6282ee01b9507a4a006"],["/static/api/css/share_style2.css","8e51ddda97f650d702e691f90d77238a"],["/static/api/css/share_style2_16.css","3ccd3092772b962cfcca65a710d2f2e2"],["/static/api/css/share_style2_24.css","65fc751cc4a007f42747f7432ca4a5c8"],["/static/api/css/share_style2_32.css","937d4ee3ed9d2f98931202b524fbaafc"],["/static/api/css/share_style4.css","ab9e503aa9c7a52214a86f801acf7252"],["/static/api/css/slide_share.css","975405a34d53e8e275827bc5b55de275"],["/static/api/css/weixin_popup.css","b13748f93f4733e7d95a601415eaab10"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","505889eb263f23f6e6139d2f1ad278b0"],["/static/api/js/base/tangram.js","11758133b8cb4dc288d1d9e1f254677e"],["/static/api/js/component/animate.js","90491a8ca791f6735a6244fb20d8bb25"],["/static/api/js/component/anticheat.js","c829d257229bab29c3f9abe165408e69"],["/static/api/js/component/comm_tools.js","221471275551f20c7603c565ba68d59b"],["/static/api/js/component/partners.js","1b4466e1ddaaeba164c48be8442f05ca"],["/static/api/js/component/pop_base.js","fc18b10ea65e07b136549d0b6032da7f"],["/static/api/js/component/pop_dialog.js","a23ca2af6c2a10f96cb3384c4b17c7d2"],["/static/api/js/component/pop_popup.js","601dca2cba124c0f99c80839770dabf1"],["/static/api/js/component/pop_popup_slide.js","251306fcb31c130935fdee36428d6caf"],["/static/api/js/component/qrcode.js","65ae3764c74729c0d65eb9adb8a685bf"],["/static/api/js/conf/const.js","7d9802ba2bc1a6a6264abc5350cfe98c"],["/static/api/js/conf/define.js","2cd773c567063cddf88b8a9870be1393"],["/static/api/js/share.js","9479cf1237712627d5cc05a02873062c"],["/static/api/js/share/api_base.js","7e5c1298f4732fc92f80d030465c3d61"],["/static/api/js/share/combine_api.js","b4f23b391d340c8669704dffb2cdb0ab"],["/static/api/js/share/image_api.js","3f3b412f3e0d31330c05f051b465586f"],["/static/api/js/share/like_api.js","8b1ca8fb1bde51da64c9ac9d6bdad73d"],["/static/api/js/share/likeshare.js","a4e55a523066844dc61ab50878409688"],["/static/api/js/share/select_api.js","c55c761fc06698e6f87d3208ec861f71"],["/static/api/js/share/share_api.js","6b5851dc984b82d35f0d7584318f6070"],["/static/api/js/share/slide_api.js","986df0e0589e3878b4b23dc0a5b4d06e"],["/static/api/js/start/router.js","003239a4cf3310ee5d4e95e73c5f5914"],["/static/api/js/trans/data.js","a4e55a523066844dc61ab50878409688"],["/static/api/js/trans/logger.js","a4e55a523066844dc61ab50878409688"],["/static/api/js/trans/trans.js","06e786694fad071dc7efc2a674574642"],["/static/api/js/trans/trans_bdxc.js","f6cf06acf8c8bffaab320e669a40833a"],["/static/api/js/trans/trans_bdysc.js","6fe27e7d233199ebc0fd93aa5fa61620"],["/static/api/js/trans/trans_weixin.js","81d6b8dd30163a5544afa14bba39a5e8"],["/static/api/js/view/image_view.js","55224eec925174d95c0a6e4e5d4e3827"],["/static/api/js/view/like_view.js","ad7bd7ab4a2058a09503fd0767c17c94"],["/static/api/js/view/select_view.js","8724f7bc238c8ca7fed72013cf5729d3"],["/static/api/js/view/share_view.js","bb46730cffeda6c45a90c17f2c361601"],["/static/api/js/view/slide_view.js","3f8231a85eadf81387b0b0eca6b2f217"],["/static/api/js/view/view_base.js","49aa749a24601434b9709a825e9cb956"],["/sw-register.js","df51641cd8a9efd3b33cdf2b12aa3ac9"],["/tags/Spring-MVC/index.html","2c7ce5a26277c21152500c85daca2a4c"],["/tags/cron/index.html","1eb64c41ef05c58506288e794889c4b8"],["/tags/docker/index.html","3c7ef0691214a837d59c9592c44c4836"],["/tags/easyexcel/index.html","65518f4690283a7cea6adcb0300b4b74"],["/tags/excel/index.html","52ae46bffc4e20dda73af66930272b06"],["/tags/frp/index.html","1ca5272cd26cd344b77ab7f6e2b7ef47"],["/tags/git/index.html","bd2a352e6c7024e9fc4a1674753112f1"],["/tags/github/index.html","d8a157bda76398b3eb37974b2c385878"],["/tags/index.html","b3a638f9cf127d0dd97775367029d5f9"],["/tags/java/index.html","07e5f7f5c08245eb84654184ef54724f"],["/tags/java/page/2/index.html","94323bded24320b0b591090bfe762b56"],["/tags/linux/index.html","4d40019d36ed718abf13149e2f1408db"],["/tags/maven/index.html","786b2566685ce3c43568c73581d77db8"],["/tags/mybatis/index.html","8e41393dc6a9aeace8d70c7ed3a5583e"],["/tags/mysql/index.html","a4cd9392d89134ec34db4aee5bdabd56"],["/tags/oracle/index.html","900b2beaefb83d1e4a66787ad4037551"],["/tags/pageHelper/index.html","b749a33cc313685decbbb3ba3e17221e"],["/tags/scrapy/index.html","f213e0c0ed17b5ea442cdd215a2d7785"],["/tags/spring/index.html","da0809f4a8ef3be8aa6bf50349b0fb4c"],["/tags/springboot/index.html","e91e85eb238a3c0cfd49a0eb2e8470eb"],["/tags/springmvc/index.html","e2b8315d49eeca062b95d6383065e404"],["/tags/ssm/index.html","0c6d073477ec8f70912d9f937a9f25b0"],["/tags/struts2/index.html","d61902086ad2e68ae4b620f9e0037018"],["/tags/thymeleaf/index.html","cc89f31bd2fe3591a744fb7378b05209"],["/tags/tomcat/index.html","7d53912365880a7ab9b270c25a3446bc"],["/tags/内网穿透/index.html","360f36c05666b007e7897c554bea1210"],["/tags/小技巧/index.html","9fb3be0501a0e07505b1fad6009c1ee4"],["/tags/插件/index.html","b6e03741efe8aa9dddac82262b9009e7"],["/tags/爬虫/index.html","c34b70dcc3e7f8157fbdd4e92e50dddb"],["/tags/百度云/index.html","4dd0d517c9c2920fcd45898db95f685c"],["/tags/端口映射/index.html","be2aba769c3a9f51ad4732ab21ececf8"],["/tags/高速下载/index.html","8ceb287e8100399aed0e5a6b342a2206"],["/xianbao/css/activities.css","51611eb9ba4a3ee5c52ca075ef8bfd5c"],["/xianbao/index.html","84ca7fa4b4e28a09d29917e0a2bef4ee"],["/xianbao/js/activities.js","486b18959aa631249aef08a0689e4619"],["/测试/index.html","f42ff3ae1e8726d26503df51d923d0c6"]];
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
