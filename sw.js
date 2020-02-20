/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/163/css/bootstrap.min.css","4eb7e3a7a7121c4a11f2daffd3fb39a0"],["/163/images/bg.jpg","5ac5da1b493c4c24aa958cf7675a0bd5"],["/163/index.html","60f7ff17f79cb0c39706a75820400b83"],["/163/js/bootstrap.min.js","4967232dd6018523eaea36b219c7a629"],["/2019/07/20/2019年7月20日/index.html","a41fba051d828cccd552c6484d604843"],["/2019/07/20/Spring入门学习/index.html","d98fdb3be807a977181eeb795b0d4bdd"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","a7b4ba5a7c4e0a99e45845785b35b2b8"],["/2019/08/04/Struts2的执行流程分析/index.html","1a6a02a6ebb4b6d2cd34e89e45ea1070"],["/2019/08/17/Struts2的拦截器栈/index.html","437db7581feb0573e485077add5761b3"],["/2019/08/20/ognl表达式和值栈/index.html","82b55dbe26a3a91aefdd4eb4d3d61fa7"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","f3b7dfcc7a839bf027b60d7b5cf78641"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","3f1bd420818d786eae1bd8bf66c8a9b4"],["/2019/09/06/MybatisUtils工具类/index.html","f1890795fc9b56a56e202e194fe70d86"],["/2019/09/06/Mybatis使用注解入门案例/index.html","55c81873cfce73ed436743b282f03024"],["/2019/09/11/Git笔记/index.html","8e00be689d620c3880d8ccf50d3bfc6d"],["/2019/09/11/MyBatis的动态SQL/index.html","07c79cee784a8bfd38dca33291dd8445"],["/2019/09/14/安装Docker/index.html","c9fb0e7b98de9a2167bfd1e6c9e49bc9"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","dcb9c6f77ef4bf27ecd9fb18cb2fc410"],["/2019/09/21/linux服务器和tomcat部署/index.html","3240e994f884fccf1fa7b8587b91107e"],["/2019/09/21/maven创建spring入门项目/index.html","3bc5c7361adc4eaf3d2ecd167a8021fd"],["/2019/09/23/mybatis多对一、一对多查询/index.html","45bb8f37dedefe5aa939c44709dd516d"],["/2019/10/08/Maven入门学习/index.html","4268de6aa65c67d1b70f789b591c9942"],["/2019/10/09/CentOS安装Dokcer/index.html","9ab7845c2777798ef1b0d349b774381a"],["/2019/10/09/docker学习的入门/index.html","6b54158465ce3fe2a0b457910185e590"],["/2019/10/09/linux常用命令/index.html","0866a51d2c50d7623eee9fb830b77387"],["/2019/10/10/mybatis单表的嵌套查询/index.html","1d38ed9e8f1364a54cfb8c19e7ef0d46"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","aa4b17b3587da125ea668c93e544eed1"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","a9027f15bc11508353bc8614d5558e9b"],["/2019/10/23/docker安装mysql/index.html","753498b3f50ef0fb93289ac422471e95"],["/2019/10/24/Spring的属性注入/index.html","3eb0de678419132a9b107002a75f74fe"],["/2019/10/25/模拟电梯系统（java）/index.html","c686631cf862916c9cced34accbe890c"],["/2019/10/26/Docker学习之二/index.html","053c9ec87b5eb506510bfd9e0e635659"],["/2019/10/28/Oracle数据库例题/index.html","c1287f2a3c52f33e6e006f00d9e5851e"],["/2019/10/28/linux端口映射工具/index.html","388d01c84b833887c3c6d044241b0368"],["/2019/10/29/Untitled/index.html","c1955db4e6c8343d692f55ab524e2512"],["/2019/10/31/Spring-AOP学习之（二）/index.html","4f5ed9ccac52c4f695707679c799f0ed"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","d412837b7f434098bfcea1521d20ce8c"],["/2019/11/02/MyBatis与Spring的整合/index.html","e705e3b51681325e5427a9f4b083a2ea"],["/2019/11/02/Spring的事务管理/index.html","660be801176d892d0480ab10212805fb"],["/2019/11/03/SpringMVC入门学习-一/index.html","452a08837d1a97a520d8eb800912f634"],["/2019/11/06/SpringMVC入门学习-三/index.html","e226694c3f1ab47667f31e129ce7edc1"],["/2019/11/06/SpringMVC入门学习-二/index.html","fc3b2986b284e515415dc81b8ad5628c"],["/2019/11/13/frp内网穿透/index.html","81a6d827fee93735eacc1b2517dec702"],["/2019/11/15/Spring-MVC入门学习-五/index.html","79f4a5e40c50a8f2e02bbcd1f9640257"],["/2019/11/15/Spring-MVC入门学习-四/index.html","c18cf53b3801d61c3bd23297abe4ac58"],["/2019/11/15/pageHelper分页插件初体验/index.html","41bd431fc336c63d7391814cb3a92160"],["/2019/11/19/使用IDEA将ssm项目模块化/index.html","bdbb5b64f7893452cf1593d7c7a16a95"],["/2019/11/21/MySQL-8-0安装与操作指南/index.html","4809c893e5ae1d3e49280a503dd5de99"],["/2019/11/26/SpringBoot相关知识/index.html","77081b2898c6e66008e00068e74dd08c"],["/2019/11/26/在servlet中使用thymeleaf/index.html","86a95d98a87e4dff2984ce04f5ce5620"],["/2019/11/26/基于springboot对thymeleaf的使用/index.html","c40b7617f68dd9aab51249619d2e02a0"],["/2019/12/17/Github搜索技巧和Cron表达式/index.html","2c0d97bb05c49309baa2a47e93e12867"],["/2019/12/19/easy/index.html","d7517623621b9f85625cd261a0189d25"],["/about/index.html","0d02e027122ef5ff88429e599e6004b8"],["/api/index.html","b41242fe9643ccfbdbd3a0fd401d6aa5"],["/archives/2019/07/index.html","e100a226eb6f6942943da6cf1573e154"],["/archives/2019/08/index.html","e275fed8655cc887f46cbb5bf7851c8c"],["/archives/2019/09/index.html","3f6a990e0a1e95aef0ca821788330bda"],["/archives/2019/10/index.html","a5f0f6c63010a453f7ed8f2d78df41b8"],["/archives/2019/10/page/2/index.html","dadaf7ac3b6dbd028231b1c9de652c32"],["/archives/2019/11/index.html","6479001435811881ccc793cad7449f46"],["/archives/2019/11/page/2/index.html","8a601f5f983762f0ae9ccb812bf6e0d5"],["/archives/2019/12/index.html","0a7646e552df07cfbbd049ed6e45fe42"],["/archives/2019/index.html","6d23c03fddb8a699a14b05445d263ce1"],["/archives/2019/page/2/index.html","2b1830f3d3e5b05e7046fda1dd97c063"],["/archives/2019/page/3/index.html","6aa7e276e72ed3962acc3e43b1257a0d"],["/archives/2019/page/4/index.html","e2d1dac8fc3f54425b696da536024fa8"],["/archives/2019/page/5/index.html","643fb5922450f536684787193defccf4"],["/archives/index.html","85126709e5bf2feedceb65fa1c669d48"],["/archives/page/2/index.html","46867f7b95e7e59d9422c26ac1b15a57"],["/archives/page/3/index.html","7478e07b989906f5fac2586ea37a6a22"],["/archives/page/4/index.html","6d2a1dcc74faa2ace684d5d77843d05c"],["/archives/page/5/index.html","13454f06337f18a8889aad0550128ded"],["/categories/docker/index.html","c25257d2173aac6013c620ddcc730807"],["/categories/git/index.html","4f787ea0e337c10d504758dbdeba78c6"],["/categories/github/index.html","88cd31b942816f2178c0f917f136b262"],["/categories/index.html","c2d2c417501ea3d6023e00fbff179beb"],["/categories/java基础/index.html","6b947d9afa19fcce43aa68c9d2269c96"],["/categories/linux/index.html","e9f3cb8a82f63957547cfb92f3a0f8e1"],["/categories/linux/tomcat/index.html","e2750c061256fc40999cc0626fcee139"],["/categories/maven/index.html","26b3d1cd43329e0a6fc69751f1a5579d"],["/categories/mybatis/index.html","4873bc9535f5963a52ea6c0fdb355966"],["/categories/mysql/index.html","8dee43d2510417611ed6801cdfc85b78"],["/categories/oracle/index.html","90b6e5fa6d811a037c2563b780b7883f"],["/categories/spring/index.html","07c6fd64d163ef32f660009f4c2535e8"],["/categories/springboot/index.html","bb3177834a33e326adb5fde08c216c19"],["/categories/springmvc/index.html","ca0e9011b4d989f0fe2d988cf6620fad"],["/categories/struts2/index.html","e58624de11be0673a34675dd650d86fa"],["/categories/爬虫/index.html","286fa30d432a5f6b0f2cb42f77f71e68"],["/categories/计算机网络/index.html","f4088fe6f4558da8d15418a2e42ed808"],["/categories/高速下载相关/index.html","3f6a22a6639a953d5886cd2c83fce809"],["/css/jitang.css","9d80f2b2478a583acdab0dc90d2949cb"],["/css/main.css","71f956eb127b1195c7c3e8c1b09a63b7"],["/css/normalize.css","7c188247a4f019024bd2775a87749ae4"],["/css/screen.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/xiantiao.css","0e1c641d17c1d0b5d7f0e9b7cec98d61"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","bc99753f1fc87e8b6cd029ab76eb9a10"],["/fonts/icons.dev.svg","4143a6cbb53e488ee357306805bb92a5"],["/fonts/icons.eot","b9c5cbed9bf5e79af98b6fecb9408ad5"],["/fonts/icons.svg","442a880c645e5da6e8c2e3b0f59c93c8"],["/fonts/icons.ttf","84e6367e8a1343d106300eaa692c532b"],["/fonts/icons.woff","f24eaa67582b0ee087a29b12ccdb53f9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","1ac3b0f8edaceabede6c7d6140a44873"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fb30ea29eb0bc3ea09126170fc130732"],["/js/index.js","7a399389d5c687dd19cfbe4b66f9a702"],["/js/jquery.fitvids.js","35edbdf88d1621c7a22cbee15b8018e8"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","3a374f27a2a30cd7463c7f085ce3e9f8"],["/js/src/algolia-search.js","0fe8b91f1fbb57df48c21803dfba5796"],["/js/src/bootstrap.js","2b251a410a4afebb3850cf3df6e25483"],["/js/src/clipboard-use.js","c3a233bf0d9f7ab8501b0f873204e9df"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","2ad019c042ab3e1f265e572e8ddabf55"],["/js/src/exturl.js","fec81b8f1cc62cc5c09c67cef4384efc"],["/js/src/hook-duoshuo.js","cf97ea73159c9226f88417b05329a1ca"],["/js/src/instantclick.js","ba47860bca9b5238641a883c377d9126"],["/js/src/jitang.js","a33ba074eb4c33933942513b0d36c794"],["/js/src/js.cookie.js","0a582938ac1e3dfb8fd5d8ea4e00633d"],["/js/src/motion.js","4e6d3fb39c0e5ada848efd848fac215b"],["/js/src/post-details.js","9b507e266e622479398398cad1a90e79"],["/js/src/schemes/pisces.js","fc6d59150deee0d750bb12af70e130c6"],["/js/src/scroll-cookie.js","752f38f94108c40b811ec86eb990732f"],["/js/src/scrollspy.js","e7dfd7db87752b28829e5e31ab2c5dfa"],["/js/src/utils.js","d5ddbc6a508560c11ebabb6f62e982d9"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c89c8d189ceed289eaa3070942764473"],["/lib/Han/dist/han.js","4ffe99717f31ee583da4b4bc1254068e"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","0602a8d897e5df25bd0cc3c3b95cf3fd"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","954654e6a83ea49c639c2b9ab2f6bbd5"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b2c2e3a18572e6cb457fe2e8a40cd6e2"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2014d0c1d388ff114bd1522eaceb0d41"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","da8fb696147f80e765ed44d63e6b5d6c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","23506c2a10de9858a193c0cb222e4a80"],["/lib/fancybox/source/jquery.fancybox.css","73d8be2106cf700c1b6ec08e31b47ec4"],["/lib/fancybox/source/jquery.fancybox.js","41c02fa23a893739de401cd4499d9b82"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","9d522cb0ce4b81bfdeb51aa43b206558"],["/lib/fastclick/lib/fastclick.js","750987deacea6c4d81468548db1ba83a"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","1f25729d32d5703240078bb82b284952"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5611bacec9cbe13559b8e130cd66a471"],["/lib/jquery_lazyload/README.html","b3f8ac788e873dbfea5201f300c106a7"],["/lib/jquery_lazyload/jquery.lazyload.js","ba6feee5020dbe57e5091540a3529b30"],["/lib/jquery_lazyload/jquery.scrollstop.js","cd11911f258b581a3bd7b7d6594dc509"],["/lib/needsharebutton/font-embedded.css","2ea78506212cea5c7954ff9ce546890b"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","8c70aae2b980efffd8a8bc5513970af9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","3e8dfc49c7b2974ed4d5d54e6ae2b170"],["/lib/velocity/velocity.js","d7dd71f1609d2340e27fb69dda8957ce"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","94df9374b08da667e17cc53a511e0248"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live/css/bootstrap.min.css","7cc40c199d128af6b01e74a28c5900b0"],["/live/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/live/js/bootstrap.min.js","3f2224e611534a37f35ab282ad5329b9"],["/live/js/proper.min.js","ecbc209fd8a358b51f2871e61716f54c"],["/one/css/oneProblem.css","1ceaa95dec676042dec5dd2842364ab3"],["/one/index.html","9e2c1ce36d18e2790727b1b5903a7b9a"],["/one/js/oneProblem.js","e11906de1deccd2c2e400ab251aaf3e6"],["/page/2/index.html","67b1609f73f4e4e71e3a31ce0371861f"],["/page/3/index.html","981a2c3740b1a0135ab34b8a732590f7"],["/page/4/index.html","8afc171a7f8661ff6264b4cab5e40914"],["/page/5/index.html","c52fd3ec4d3f5ffa21c724e34ecf7365"],["/static/api/css/imgshare.css","0fc2534ff8791d42b24a2d840050f006"],["/static/api/css/like.css","7c88fcd0363882b58de0b65a095c3f8b"],["/static/api/css/select_share.css","ac354eeb1bc79194a5cdf0dbffb9b10a"],["/static/api/css/share_popup.css","0772272f4d32f609cf9513adcee6215d"],["/static/api/css/share_style0_16.css","8ceecd2dfd3801ce63b8ed47ad3f0dbd"],["/static/api/css/share_style0_24.css","91220287227813fa7718b6982d840b9f"],["/static/api/css/share_style0_32.css","be05dcc41858d0946b1e910229109ed8"],["/static/api/css/share_style1_16.css","fcc8725ba1f344eb87c7b89ece47541e"],["/static/api/css/share_style1_24.css","7134359ff3fd7d24db0163aaba1e2383"],["/static/api/css/share_style1_32.css","ce388f54e9d012d4b01ee03185546093"],["/static/api/css/share_style2.css","dceeaec76eaef733f8788cc0c3d162a6"],["/static/api/css/share_style2_16.css","b8fc4ea6c536cb02eb69ad2d0eb8017d"],["/static/api/css/share_style2_24.css","230c7435ca7741d891223c49ab4e7aeb"],["/static/api/css/share_style2_32.css","d4262c8b6fa6391cf6a511259ca60a51"],["/static/api/css/share_style4.css","ddc3ddf1f3831c0004a9f814c83e46c6"],["/static/api/css/slide_share.css","2d5e740d1aa7b89b2dfe6a8b24788e14"],["/static/api/css/weixin_popup.css","6df7d695c3550e060f18828ea39eaee9"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","1aaa931548685005823f854a959d0f16"],["/static/api/js/base/tangram.js","e22335a778a78078096a0715541d7963"],["/static/api/js/component/animate.js","00b82637b598c465fc69d4ea6284eb2f"],["/static/api/js/component/anticheat.js","9436a6fcd17b80e4093792c69af94179"],["/static/api/js/component/comm_tools.js","1cc081bd83181c4bb261449941e17b9e"],["/static/api/js/component/partners.js","ff95662073ed933985d9e5c25caa7895"],["/static/api/js/component/pop_base.js","0b251d350aa52df283ba8da24f7010c9"],["/static/api/js/component/pop_dialog.js","6364997fd4ae81c798a4833cb500a9da"],["/static/api/js/component/pop_popup.js","15ee288c867b4f930ecbf68d05d6c03d"],["/static/api/js/component/pop_popup_slide.js","8b5a0f184afce43a43c0d7b2dc69e5ab"],["/static/api/js/component/qrcode.js","e241416e8279a8978712a7aeac2ab37d"],["/static/api/js/conf/const.js","359f1354401c8095b47637717ecc72a1"],["/static/api/js/conf/define.js","d687e13cc02df9d4ab1e6c1adc04e256"],["/static/api/js/share.js","523c5e22e52f0a0d20804789eda91ff2"],["/static/api/js/share/api_base.js","07b5c289bd87e46dc41dda2966a92c40"],["/static/api/js/share/combine_api.js","343f16436852a3efa399dcf99afd3067"],["/static/api/js/share/image_api.js","df99e9c12bc86de6836c40e8220cab02"],["/static/api/js/share/like_api.js","6d08e85fa9231ba4cbf5e113f32f89a5"],["/static/api/js/share/likeshare.js","f91fcf80a8b6aee92012c88adb35cef8"],["/static/api/js/share/select_api.js","861b3f4e2be24076b8262940cf300574"],["/static/api/js/share/share_api.js","3d64184743b8909cd4c1d0dc7e1590f4"],["/static/api/js/share/slide_api.js","7c81d6367a6d27cbe10b78f1043df719"],["/static/api/js/start/router.js","6848cf210ef269a0fe6b7790d75af986"],["/static/api/js/trans/data.js","86591280bdce3a785bedfc747c0f4737"],["/static/api/js/trans/logger.js","f91fcf80a8b6aee92012c88adb35cef8"],["/static/api/js/trans/trans.js","23499225604531c40c6fc0753ec62e6a"],["/static/api/js/trans/trans_bdxc.js","0bf33807dae5ca857d3aad13c8b2d36e"],["/static/api/js/trans/trans_bdysc.js","388c44d487138f6d19c587eef8b95dad"],["/static/api/js/trans/trans_weixin.js","1d484f676a2911365a7845a0948c060d"],["/static/api/js/view/image_view.js","94cb204e98fe39bf238f72d25b817cfd"],["/static/api/js/view/like_view.js","21248e7a79f2dcbca3a3d85059947c95"],["/static/api/js/view/select_view.js","0a4bc4a3bc04c19e498741a5c6639108"],["/static/api/js/view/share_view.js","8db743cfdff099b613cc34bf10c952c3"],["/static/api/js/view/slide_view.js","7e1de2682681c30758f878a1cda7ce07"],["/static/api/js/view/view_base.js","d0cfb66e138f4e45e3119462ac28bdcc"],["/sw-register.js","50efbbaf4454087c11b4827503336421"],["/tags/Spring-MVC/index.html","aaa7d2f69f29b77dd3949d976a6ad19f"],["/tags/cron/index.html","28041231b0adb20b7abe10a44bc7d6e9"],["/tags/docker/index.html","5cc2e553498ee9a068ecd247b6d8f332"],["/tags/easyexcel/index.html","eedec63987435ba920e5de243059fdcb"],["/tags/excel/index.html","fe117a6e64e0a653853b2fbd919bf1ce"],["/tags/frp/index.html","a379d4f73389e13980274052357825c1"],["/tags/git/index.html","8b3310200d6f29a8a2129aa05a1561ee"],["/tags/github/index.html","51e008f44277d10d10f80d2bf5b7da38"],["/tags/index.html","c9ca81fac7c84f32844ca0b48a0ef030"],["/tags/java/index.html","47a235210761753dee5048e4fec3443d"],["/tags/java/page/2/index.html","150711e0d20e198d8c8e253d91b83a67"],["/tags/linux/index.html","a394b90d96e78100ea4605f7d287fefc"],["/tags/maven/index.html","45402e96a24e4446c2f8661652d73d61"],["/tags/mybatis/index.html","e399e7e6de9e2329765f2a9361973e1b"],["/tags/mysql/index.html","0285bf0c4eb180458d1666706e716372"],["/tags/oracle/index.html","e2c6ab7aebd0671f90ec9e42b9419d96"],["/tags/pageHelper/index.html","fc094805ddd81a0052eb40257bb7b416"],["/tags/scrapy/index.html","ab6b503bc8833b62d95b6f8295827eed"],["/tags/spring/index.html","9a1a71864b77fc3ff4a361a2ee31b2ad"],["/tags/springboot/index.html","c36bec9e49be6b54849fc7cef37530aa"],["/tags/springmvc/index.html","bc9d090578c678aa2967f06af65c5863"],["/tags/ssm/index.html","1dc159a1d7ae444b78eecc52c34aa542"],["/tags/struts2/index.html","9af4628672f24d376fb66687696499d2"],["/tags/thymeleaf/index.html","918b4ee6963f8995711f8030b2b3ecf9"],["/tags/tomcat/index.html","8ed48660ad1f5504626577271b5e272c"],["/tags/内网穿透/index.html","2b83c0cd1812e403ce7dc7a5b8a6e87d"],["/tags/小技巧/index.html","88ce65925eca6abf05b332d0675b5ce4"],["/tags/插件/index.html","2f068705ef75ae3a8f06f6236e7b122f"],["/tags/爬虫/index.html","3a36b85dcf4a2f029ab74e715d4a0c5a"],["/tags/百度云/index.html","5daa3ee0723da8f87bc7ada82bb567fe"],["/tags/端口映射/index.html","81d424afa011eaed5ab63d9c981ac54d"],["/tags/高速下载/index.html","033ebd66bc1b5326b5de39eab5351eaa"],["/xianbao/css/activities.css","314ddad2b63b459ee0b7e3ce602c1677"],["/xianbao/index.html","be4146931b0e1f1a781d2e75b0b5d3ce"],["/xianbao/js/activities.js","a9db934c1c57dad5fd3d5f0bd5fb016b"],["/测试/index.html","de5dad745ee3a91330d1ea817532a0b2"]];
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
