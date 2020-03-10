/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/163/css/bootstrap.min.css","4eb7e3a7a7121c4a11f2daffd3fb39a0"],["/163/images/bg.jpg","5ac5da1b493c4c24aa958cf7675a0bd5"],["/163/index.html","c96471e181d04f4a6a11fbc11c29ae34"],["/163/js/bootstrap.min.js","4967232dd6018523eaea36b219c7a629"],["/163/live.js","8b6f5c30e296eae7aea0ed719f39348a"],["/2019/07/20/2019年7月20日/index.html","8213ada382174dcc0653d51b8f1e4d98"],["/2019/07/20/Spring入门学习/index.html","3b34b982a7d02c6450ce99c043183727"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","8dfef9d403273ed445e95507be0cfa4e"],["/2019/08/04/Struts2的执行流程分析/index.html","33d91f244b08b6703fff65785a7d5d78"],["/2019/08/17/Struts2的拦截器栈/index.html","9d32cb1157391433e5a3e3f15b83e3cd"],["/2019/08/20/ognl表达式和值栈/index.html","eaabd07a2f94e5662c6576b87710f462"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","82c2ab26931d78126463e73ac75f7f41"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","298ee96422cfaaa96ee762b236ca6bdc"],["/2019/09/06/MybatisUtils工具类/index.html","9dc5087de460cce29e7e55735f7c728a"],["/2019/09/06/Mybatis使用注解入门案例/index.html","e29840f3655281e4262aefb895bfe670"],["/2019/09/11/Git笔记/index.html","f376a9e309dd4201de3ad37c8622d320"],["/2019/09/11/MyBatis的动态SQL/index.html","33a52f77167b39d4c44b301cadb8b3d6"],["/2019/09/14/安装Docker/index.html","d7537a4194f71b64923c43c866d21803"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","22c0182cb08d8d81f72050bd3af1878f"],["/2019/09/21/linux服务器和tomcat部署/index.html","d91436659a99c28230cb0208cf21ed34"],["/2019/09/21/maven创建spring入门项目/index.html","1ad8e7e7a11f2bee84dc96e8d640eb1d"],["/2019/09/23/mybatis多对一、一对多查询/index.html","bc5ad8e4cf0c60e82b924648352d7194"],["/2019/10/08/Maven入门学习/index.html","18d98c1f6c61310e25a4f3b710255d26"],["/2019/10/09/CentOS安装Dokcer/index.html","6dbed8f23647b9fa2409c71993f6e80a"],["/2019/10/09/docker学习的入门/index.html","61ac91e212f0c97eafab28a4a8deb41b"],["/2019/10/09/linux常用命令/index.html","44b6900f8ea1bb8ec08a5e06270c70aa"],["/2019/10/10/mybatis单表的嵌套查询/index.html","3bb8886e0f85ebfff9adf40321323190"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","e79d3c8095a441904699e2f68cc46589"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","c16899a115ed6a232530418dac014b39"],["/2019/10/23/docker安装mysql/index.html","c48f084df23cc3af7bb5a5f3dc43fd85"],["/2019/10/24/Spring的属性注入/index.html","4d805612a25e9f9827ef8e5084581158"],["/2019/10/25/模拟电梯系统（java）/index.html","90dcbc0206a47d8e2b5c977ed2b60930"],["/2019/10/26/Docker学习之二/index.html","d0c8f39cebeb45e39f84645205d9d25e"],["/2019/10/28/Oracle数据库例题/index.html","cb6d768683013cb3447011cda933ed41"],["/2019/10/28/linux端口映射工具/index.html","e74496eca7c8e445fbaf435d5a0912dc"],["/2019/10/29/Untitled/index.html","1ff00741dacb10b6615b10fbfc3862ad"],["/2019/10/31/Spring-AOP学习之（二）/index.html","ae5af4ce0162e413e27db2cef024e717"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","3f98011185d85947102a9b1b8dc069d5"],["/2019/11/02/MyBatis与Spring的整合/index.html","5c855644a0df622ee3f2cb75e8ade033"],["/2019/11/02/Spring的事务管理/index.html","5910cbe7df54b4e1d5e790fc18219c2b"],["/2019/11/03/SpringMVC入门学习-一/index.html","0c9f43a841bd0e66a2ba1aaae6dff74a"],["/2019/11/06/SpringMVC入门学习-三/index.html","7f0d71bb7fd728d1f6ba0e6b23a6cf31"],["/2019/11/06/SpringMVC入门学习-二/index.html","ae33948e4c1023fe0d4161ad5b45648a"],["/2019/11/13/frp内网穿透/index.html","ad2a2ad669010a3043c3bd8453395748"],["/2019/11/15/Spring-MVC入门学习-五/index.html","97d84afab7164bfa08c3a2eb115aeced"],["/2019/11/15/Spring-MVC入门学习-四/index.html","324747c10daaf537d9f590175332384b"],["/2019/11/15/pageHelper分页插件初体验/index.html","17e8ca80aa129844e26bd386aea32569"],["/2019/11/19/使用IDEA将ssm项目模块化/index.html","b80e7aa67c82cde3f3e1f423d6d06072"],["/2019/11/21/MySQL-8-0安装与操作指南/index.html","f4a3680dd957495055e0d62d10f32173"],["/2019/11/26/SpringBoot相关知识/index.html","a6b6fba1ce43da0ca40c45ff01933333"],["/2019/11/26/在servlet中使用thymeleaf/index.html","5c23058ec8e1a9d8e39f3a0cef993e38"],["/2019/11/26/基于springboot对thymeleaf的使用/index.html","2d76f345bd5e9648ff3071cff3b242fe"],["/2019/12/17/Github搜索技巧和Cron表达式/index.html","f51749601d89be0609bcae23723d2fbd"],["/2019/12/19/easy/index.html","400e802601f5e7e09634c89e6a04804e"],["/about/index.html","0534d43eb91cbc15ea45006f9c0631ce"],["/api/index.html","0ad1f0892a7da6bb358679b47b09c40b"],["/archives/2019/07/index.html","3ef4af2a0b73a999782d4f619c77f05d"],["/archives/2019/08/index.html","a9f3e870c7ec3bf254055558dda3dc69"],["/archives/2019/09/index.html","929461a6fe56b0b49e0c207ab0df48bd"],["/archives/2019/10/index.html","032a63e181f6a553631d0d38b8da8888"],["/archives/2019/10/page/2/index.html","7c50b823342cc14827c4ed394279174e"],["/archives/2019/11/index.html","6984f432e42110704d23953a2b092d5a"],["/archives/2019/11/page/2/index.html","6022e456f289ec5dfe83edd94e77848f"],["/archives/2019/12/index.html","5bb899a393982b465a4a2d024c384e1c"],["/archives/2019/index.html","158b3e3fa5d354e063db4c453d614e7f"],["/archives/2019/page/2/index.html","3e1be548e90e5570148ba9826e2d7834"],["/archives/2019/page/3/index.html","a195a22788decd7b3a42d03c71190367"],["/archives/2019/page/4/index.html","054515739a3b7d5d5feeecd0626b209e"],["/archives/2019/page/5/index.html","8a75d6353c521ffc2159e165765724b8"],["/archives/index.html","faafa2b3e54a02bd154c40e7ec9b5975"],["/archives/page/2/index.html","84028c0875d62ac0798620bed72c5a04"],["/archives/page/3/index.html","7b06b07fc4efb0699778de9f28a7c69c"],["/archives/page/4/index.html","65479dcea7d01335c55d8ac8d209f863"],["/archives/page/5/index.html","aaf0d6786edd33eb4636d4d52af1ec9a"],["/categories/docker/index.html","840e47475f79ad6f7bdec65ebabf0f9f"],["/categories/git/index.html","df1fa67ef13411c13fb78bdfc5d49be9"],["/categories/github/index.html","2a20ebf26b9af0a581442ea19aaf9a88"],["/categories/index.html","42d70119d0f52b1a29291b1473d1f3cb"],["/categories/java基础/index.html","463262676b4a32dfd3af032a5f009d58"],["/categories/linux/index.html","80cd1f415df271fa34215221eded3281"],["/categories/linux/tomcat/index.html","3acae1d97e6141c49e16e9a98c7a8a24"],["/categories/maven/index.html","b56ad86cec70832bb43a56554dcb8306"],["/categories/mybatis/index.html","354584e99caf2654b3f0f73f232570ce"],["/categories/mysql/index.html","09576efb0939820896d6ef39da38d7b5"],["/categories/oracle/index.html","a3dbc85ff5c4539084788e73037973c3"],["/categories/spring/index.html","e73b3891259c31d005063e31bb778a25"],["/categories/springboot/index.html","dbc104bcd50cb05eb39471a980cdd95f"],["/categories/springmvc/index.html","e5a1a93f75f0bc13c8e3d996d7ca5c7c"],["/categories/struts2/index.html","e3020c13c9a4128e694f11059489e3b0"],["/categories/爬虫/index.html","351c72c7fbc1c8ebc9297ae03cffc52d"],["/categories/计算机网络/index.html","be97bc961580a19a11976e4b3641993e"],["/categories/高速下载相关/index.html","979c6ef3ac2fa66303cf22fb5219b8ed"],["/css/jitang.css","925104b03f812f478d09531d5263f072"],["/css/main.css","c0d593d59d14bda05e793d7a46522c4d"],["/css/normalize.css","7c188247a4f019024bd2775a87749ae4"],["/css/screen.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/xiantiao.css","5fe60a3e2d9623c96fe84167e487bd54"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","2a9059218b35a0b39e87cc65bedf83fa"],["/fonts/icons.dev.svg","4143a6cbb53e488ee357306805bb92a5"],["/fonts/icons.eot","b9c5cbed9bf5e79af98b6fecb9408ad5"],["/fonts/icons.svg","442a880c645e5da6e8c2e3b0f59c93c8"],["/fonts/icons.ttf","84e6367e8a1343d106300eaa692c532b"],["/fonts/icons.woff","f24eaa67582b0ee087a29b12ccdb53f9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","553c00f6fe307043e66138c3348b5a1b"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","04872471237f91e13a5ce5fa657e5da7"],["/js/index.js","7a399389d5c687dd19cfbe4b66f9a702"],["/js/jquery.fitvids.js","35edbdf88d1621c7a22cbee15b8018e8"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","fcf142861fc9da5f701f6eb603bca826"],["/js/src/algolia-search.js","be88d2e8881a1457dcfde381526444f8"],["/js/src/bootstrap.js","ebd6f97bef1d38c9f13b607187edcbc8"],["/js/src/clipboard-use.js","eb2048714b54fdb4a43d5c9b88075f12"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","3962d8f526627e92e437c38817a73d01"],["/js/src/exturl.js","e4e71eac6cc0f0c316297ef6a1a08b1a"],["/js/src/hook-duoshuo.js","23914c7a6bff17c36461ecf31f74ab29"],["/js/src/instantclick.js","4f5d12e43fe8eca3b9139419acf7529a"],["/js/src/jitang.js","e981b4972001a98d3d611a802239b58c"],["/js/src/js.cookie.js","6c5dbd7a673a0c8f782e644cfa99a7c9"],["/js/src/motion.js","d2124842013a8caedd48455789a535bf"],["/js/src/post-details.js","60079118e19cbbd4e5720f2e73a5f66b"],["/js/src/schemes/pisces.js","4319068ac6c60770ee8cf08a963034c4"],["/js/src/scroll-cookie.js","1bf3d2e08c8c5583750e4e81034b143b"],["/js/src/scrollspy.js","c347e332f42602c1a8f68fbbeddb754e"],["/js/src/utils.js","652408504c341748f3e9cdcc588cbf9b"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","f3c37b282a6f5f0b5a44ca0f88c7ed34"],["/lib/Han/dist/han.js","e30281adc2aa714547999be2ef4c7446"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","d4e25f8e385df90aa8be54bdfeb67a1d"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","97671b951b133a893953cca6fb8a48d0"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","518e0e9952f2bc436447510359e5b9a1"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","abc3b48c1ad75329a64ea89901c1c4e1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f72065e49fb8db45313e7f692adac917"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","675b6531b701542b0debfd66e5a10954"],["/lib/fancybox/source/jquery.fancybox.css","d1202b2c71611104b4b3b6bcab04f03e"],["/lib/fancybox/source/jquery.fancybox.js","b2abe07bb788083a876a9f8c2504fbca"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","952bb20d5a1a776948a438f9c7b9f081"],["/lib/fastclick/lib/fastclick.js","8b29f6dd14f2318bb1f9597534c28a5d"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","cc290b23bc989e7191e8da1ae5128bb3"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7d0ef4850209d8e5e758f1626382b5ba"],["/lib/jquery_lazyload/README.html","537ec826e9a4e30e22a2e321f42f6d2c"],["/lib/jquery_lazyload/jquery.lazyload.js","9d0f0436034ff8e66e8d29ab249e76e7"],["/lib/jquery_lazyload/jquery.scrollstop.js","945643567744141be69448581ee37f4b"],["/lib/needsharebutton/font-embedded.css","e4faefb25c1d5b369f32c65b73113cc8"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","524b8d2dd3274313153674358a1549f0"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","fa38588b8015035b9da0aaa7b35701a6"],["/lib/velocity/velocity.js","45f28318a14917ac9505fb0b94088c5f"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","36eab822fec0630190a11acec683c29b"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live/css/bootstrap.min.css","7cc40c199d128af6b01e74a28c5900b0"],["/live/index.html","eca8644a903512717ac842506d4d2d71"],["/live/js/bootstrap.min.js","61f338f870fcd0ff46362ef109d28533"],["/live/js/proper.min.js","2385337f1a10c77a74d2e636aea3abe4"],["/one/css/oneProblem.css","902b9efb0c9cc963946844c02d8ac05a"],["/one/index.html","2dc2115d1a6a2d6d8d17a536910c6c23"],["/one/js/oneProblem.js","cb0dbbff08d395efe064d97976e2a701"],["/page/2/index.html","b14b8ab1c231de4dd795e5b2393db496"],["/page/3/index.html","79db9795366931d323850837906c363e"],["/page/4/index.html","83e5a28da7b3f7cc6dc3be9033d2620e"],["/page/5/index.html","ffa241965e10297ee66a61e983a08ae0"],["/static/api/css/imgshare.css","a25fed7e2d4321e590cd71529e4ea6c4"],["/static/api/css/like.css","fb179c386d0bec7f9e4619d473e63485"],["/static/api/css/select_share.css","a54bab513189fe7af92b97a2f37c19dd"],["/static/api/css/share_popup.css","17deda52f0d054b06364358d6493a2d1"],["/static/api/css/share_style0_16.css","af4a8eb9b7bee7603534d77be6dcab97"],["/static/api/css/share_style0_24.css","cb30fa4aaab1fee448425b62b7a01ce5"],["/static/api/css/share_style0_32.css","2b6d39f2ac2e922d656809ec83e508cc"],["/static/api/css/share_style1_16.css","b24ffcf37a62cdf3e41af354905ed1f8"],["/static/api/css/share_style1_24.css","d424d7e150633c42b1476377251321ba"],["/static/api/css/share_style1_32.css","b788e10ddcac945ce6315659a58f2f4c"],["/static/api/css/share_style2.css","608490fda6dac35e73562a6d0a4a492f"],["/static/api/css/share_style2_16.css","2c38fba3fbda6cc6d3449378b406b10c"],["/static/api/css/share_style2_24.css","4cf987c40f825271d66202fa45ec59c2"],["/static/api/css/share_style2_32.css","b4206a55ef0a04b3d7f18bf93e3ae605"],["/static/api/css/share_style4.css","5e1ed8d12c0552e90effe76ef753d9ac"],["/static/api/css/slide_share.css","6dc9f5c18402799d60b4deab945f3807"],["/static/api/css/weixin_popup.css","6410106fe0dab53f2d04df2c3e93a8a4"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","391b895a812aa11b790e25b53b2b25f1"],["/static/api/js/base/tangram.js","8bd53f075fa7be2c745b4cff7364b018"],["/static/api/js/component/animate.js","9cd3cc4648091012c7c87507af23616f"],["/static/api/js/component/anticheat.js","f7918706ebad3055961d307bc96d607a"],["/static/api/js/component/comm_tools.js","4bce5d063406da52cffa7cb18ee49ea4"],["/static/api/js/component/partners.js","cb37c2cc71b111188b123fdbe9e7d089"],["/static/api/js/component/pop_base.js","4206c88475a0f56f6a6a334d3bd6b288"],["/static/api/js/component/pop_dialog.js","36a7582ae66adce08974541e698f8fea"],["/static/api/js/component/pop_popup.js","906d70fe29d43f9642f05d956ab54b34"],["/static/api/js/component/pop_popup_slide.js","60fa6d4b1efca86cc592494a1c7f4bb9"],["/static/api/js/component/qrcode.js","9b9607295875ca2858ea88c3dc37a36e"],["/static/api/js/conf/const.js","0a1f0e2c5d150a67e94b3d292f1fd495"],["/static/api/js/conf/define.js","788910d492c85bba1ae3ad3baca239a6"],["/static/api/js/share.js","7b22e29f3d85c98dcba5d962d624b513"],["/static/api/js/share/api_base.js","108635c321f8890cac3c77948e524ac0"],["/static/api/js/share/combine_api.js","1fc63b9817f3f8ac09589775483e69ff"],["/static/api/js/share/image_api.js","6db9fcbf824f0b751e3840b2f928b4e1"],["/static/api/js/share/like_api.js","d4de84316d8bed1c7c8392197446ec10"],["/static/api/js/share/likeshare.js","084caa136d50dcc271de22c5bb5727e6"],["/static/api/js/share/select_api.js","8918852f9f54e0a1650cb1373ca3b1d4"],["/static/api/js/share/share_api.js","39e7dbc9b4d9e6727e3981ab86b13f99"],["/static/api/js/share/slide_api.js","b03a61da96b9c784314bd0388b99a05c"],["/static/api/js/start/router.js","0bb555320f1f01b826deb6e4046e8e04"],["/static/api/js/trans/data.js","d0302cb50e8174cb1fbe4bc56ace2b2e"],["/static/api/js/trans/logger.js","d0302cb50e8174cb1fbe4bc56ace2b2e"],["/static/api/js/trans/trans.js","53f488521a5e72453a8925f83ff14944"],["/static/api/js/trans/trans_bdxc.js","374380808fa3afd28e30fa04f03ce169"],["/static/api/js/trans/trans_bdysc.js","64ba703cae375af5ee98be044816b6de"],["/static/api/js/trans/trans_weixin.js","8c7065fb4963a5727eab466e28ad6c73"],["/static/api/js/view/image_view.js","c79f19e81ed57879db6296d46992072c"],["/static/api/js/view/like_view.js","e421e8683ff107c693234ffd61c137ab"],["/static/api/js/view/select_view.js","f6cd07e2ee3a836d6a306068e04e31cd"],["/static/api/js/view/share_view.js","81791e194dcf5a4b798c59f69a4953d6"],["/static/api/js/view/slide_view.js","6a0e22f612f99f07082d543bb2417899"],["/static/api/js/view/view_base.js","cd14f2929cc7ec60067ff859eb7bc777"],["/sw-register.js","2023a7e41d51230f392a95390f5294a7"],["/tags/Spring-MVC/index.html","724118f3f8ca552dc9296c86c305aac8"],["/tags/cron/index.html","901d44a50c946a53599ecaa02901487d"],["/tags/docker/index.html","ad00c428b00110243d2803cf0ee8e0dd"],["/tags/easyexcel/index.html","b120191303a23c8420f76c2b197c79df"],["/tags/excel/index.html","a91fb4e9ee35f988b84db2e94a3204e4"],["/tags/frp/index.html","87317d4de97de421130a5a43eac5eb9d"],["/tags/git/index.html","466e82897001c8b5aa5ce52fc6489ac8"],["/tags/github/index.html","9c7e367e9363a53fb083e39806af7c16"],["/tags/index.html","7c4c92ba71024625b30c36c99498bd9b"],["/tags/java/index.html","c8f8a9a4d86a3541ba2526eddeb8947c"],["/tags/java/page/2/index.html","cde47cf928691aab7941fb6df636a880"],["/tags/linux/index.html","d9f159115d3a394f9515e0ac50af5546"],["/tags/maven/index.html","4283786b325586ad7b8ee8a677495e5e"],["/tags/mybatis/index.html","2a886794f49b03ee58fe0617b27f1d4d"],["/tags/mysql/index.html","d8ee35e243950baf905e7d779e00b939"],["/tags/oracle/index.html","394e133a7f191b90db48b89a9030719a"],["/tags/pageHelper/index.html","574d80b810a9b0012d6480b1ce8c6175"],["/tags/scrapy/index.html","bef5d5ce998b700ce541cf9b0db6e009"],["/tags/spring/index.html","07f476eef650ee5fb8be8e18da4fcaa5"],["/tags/springboot/index.html","b035011c8a18ed5da805aad7224a4258"],["/tags/springmvc/index.html","32c54ef5895651269184e584446908be"],["/tags/ssm/index.html","c24f554059187f0580a51f357c53b6e2"],["/tags/struts2/index.html","64ca6fa914c87dd82e957a74b7094268"],["/tags/thymeleaf/index.html","303302d7a529431c3bc745e3ef8750ab"],["/tags/tomcat/index.html","2b7138fe488eae37262f47c1e74deed3"],["/tags/内网穿透/index.html","362374a0e9bd9de55e15282bbea45d03"],["/tags/小技巧/index.html","4fcbe6b5035b77bd15751926f46fe19e"],["/tags/插件/index.html","4c3e6ac593ee08105fbec5c065d9ab63"],["/tags/爬虫/index.html","488d0fa81d291be8bc86623ab4bc958c"],["/tags/百度云/index.html","8e57eefbd93ef37ebb79bbf96a524891"],["/tags/端口映射/index.html","eed33ab34e960fdb0cc6a1342c42c440"],["/tags/高速下载/index.html","aaa856e859b0561bd807acc6e37e57bf"],["/xianbao/css/activities.css","124cb035d5704c4ee1873fc3afb2159b"],["/xianbao/index.html","d671989c3d8e38f85f9cabbd80955bdb"],["/xianbao/js/activities.js","f902fa697cff04745898135d01a54720"],["/测试/index.html","768b056a04bfc7e77ba79f1202eb18b3"]];
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
