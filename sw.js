/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/163/css/bootstrap.min.css","4eb7e3a7a7121c4a11f2daffd3fb39a0"],["/163/images/bg.jpg","5ac5da1b493c4c24aa958cf7675a0bd5"],["/163/index.html","c96471e181d04f4a6a11fbc11c29ae34"],["/163/js/bootstrap.min.js","4967232dd6018523eaea36b219c7a629"],["/163/live.js","8b6f5c30e296eae7aea0ed719f39348a"],["/2019/07/20/2019年7月20日/index.html","76e36c167f7499a157bb6853a1850f34"],["/2019/07/20/Spring入门学习/index.html","9f97a3a6639a0ac98a9439a8863cf9a8"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","b50c66dec8076beaf548f8b9752d5eb9"],["/2019/08/04/Struts2的执行流程分析/index.html","ca568d954346a36e0f7db083ad26e4de"],["/2019/08/17/Struts2的拦截器栈/index.html","e38bceae7893be5c3c96fc51b2649f1b"],["/2019/08/20/ognl表达式和值栈/index.html","ade4d8975998ce417856c3f734b6e9b2"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","17b9b4d2a7bac647db90812b18a52f09"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","1c3579736aa558051cc677ccbc671271"],["/2019/09/06/MybatisUtils工具类/index.html","44828944b540b1971504ce4f75bdc9f9"],["/2019/09/06/Mybatis使用注解入门案例/index.html","4e256f7d3253066645e0fe13d382f2ec"],["/2019/09/11/Git笔记/index.html","33e2ead9db6a28863710d5470c32d39a"],["/2019/09/11/MyBatis的动态SQL/index.html","ec16789f31767e3ffd11ed38e893855b"],["/2019/09/14/安装Docker/index.html","f7489bc013c34f506f311d375c5d5dcb"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","80723f998c9811957798ef8efcb2ad1b"],["/2019/09/21/linux服务器和tomcat部署/index.html","1bb2334bfe45639c2aaffc30030d6507"],["/2019/09/21/maven创建spring入门项目/index.html","4c8c1c7c791e58a7462089436eeb79ba"],["/2019/09/23/mybatis多对一、一对多查询/index.html","7b989ceaba6106e014e3d1c77dcdd0fc"],["/2019/10/08/Maven入门学习/index.html","83f8044f267e362b82a29ba884e3dfd8"],["/2019/10/09/CentOS安装Dokcer/index.html","e9707db4c6db47c4f21e29b270fd9c30"],["/2019/10/09/docker学习的入门/index.html","291b4aaeefaed67523ae8fdb0fc91d09"],["/2019/10/09/linux常用命令/index.html","7875e0c26c600aede9cff6e24e7b086e"],["/2019/10/10/mybatis单表的嵌套查询/index.html","b82a18f93ddc3d4db129017092279dde"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","ed75b5bd1b1e1e43510b0016c9326015"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","4619f8cf4af43894641610d733ec1880"],["/2019/10/23/docker安装mysql/index.html","7249621109972a7d285e6d55cc42e4ff"],["/2019/10/24/Spring的属性注入/index.html","2166960b6554b2f81a8dba2e1acf3244"],["/2019/10/25/模拟电梯系统（java）/index.html","d03550d8c4404b84229c7d6499961d64"],["/2019/10/26/Docker学习之二/index.html","50e151ffc41753502d92721ff4379357"],["/2019/10/28/Oracle数据库例题/index.html","21e8b94b8d4ceb541062f7fe7dea519b"],["/2019/10/28/linux端口映射工具/index.html","4164891ff2f6eeb0313449875ac6b689"],["/2019/10/29/Untitled/index.html","2f5a344bb1be62596b532de0dbe184aa"],["/2019/10/31/Spring-AOP学习之（二）/index.html","87de6845c5b31c9d666fa909e8f78fed"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","4bda20a00ce5034786dac6d6a378edc3"],["/2019/11/02/MyBatis与Spring的整合/index.html","2b1fe9e06d1810f4ff62bb22dc40d892"],["/2019/11/02/Spring的事务管理/index.html","b72d2facf5eaad5e59e333dd165863b6"],["/2019/11/03/SpringMVC入门学习-一/index.html","ffcf9e23dce166c1ed7b3306cc6da494"],["/2019/11/06/SpringMVC入门学习-三/index.html","d8f91e9a4f25ab908249ec890de1340d"],["/2019/11/06/SpringMVC入门学习-二/index.html","7cf3e96c026effaeebeaeaddb00a265c"],["/2019/11/13/frp内网穿透/index.html","d351cb729fe0c8afe3e352634b8655e0"],["/2019/11/15/Spring-MVC入门学习-五/index.html","5fa11d7087470fdcc3810fcbef416490"],["/2019/11/15/Spring-MVC入门学习-四/index.html","a9554b8b56cf87134a96b7ceb06c0d68"],["/2019/11/15/pageHelper分页插件初体验/index.html","c73410ccdb91f19d5fb62296fce6e4e7"],["/2019/11/19/使用IDEA将ssm项目模块化/index.html","46a4407fdd05a079d5d796a59fbc5d7a"],["/2019/11/21/MySQL-8-0安装与操作指南/index.html","384deccb1ce3301b123659d8c04ab6e5"],["/2019/11/26/SpringBoot相关知识/index.html","dc89e84f64f4525ce1ea28819bdb1710"],["/2019/11/26/在servlet中使用thymeleaf/index.html","eec842b7c035fb488f4190c595a4a626"],["/2019/11/26/基于springboot对thymeleaf的使用/index.html","8d13412063c0a5c81350dc0c6181eae6"],["/2019/12/17/Github搜索技巧和Cron表达式/index.html","a4079c4e213de54eae967f8da627b22c"],["/2019/12/19/easy/index.html","48fc6c30483562148b4a6a3ff9be8c34"],["/about/index.html","3a5e41312739c4a5beccd29c88794a70"],["/api/index.html","795178b2b1ae5cdff8b5448f8f6c34bb"],["/archives/2019/07/index.html","de0c68e83494c77853c7f20df9a6c3be"],["/archives/2019/08/index.html","bdf317e0f7cf200c083b88c2d974d36b"],["/archives/2019/09/index.html","016e528eaa61dc12564cced87bb762f6"],["/archives/2019/10/index.html","ba2850f3a8cf145c455106dcebb39d12"],["/archives/2019/10/page/2/index.html","89e0136bea1d601abdb623ada0c0ab98"],["/archives/2019/11/index.html","92bb3384cc032b2344f1e09cb0746676"],["/archives/2019/11/page/2/index.html","f7c62638f19bc56e82bcf6e058bae3e3"],["/archives/2019/12/index.html","e8d882923e6dbaaa2ecb4736346ebafe"],["/archives/2019/index.html","4b952d123ea70429689f4d238de3f7e0"],["/archives/2019/page/2/index.html","d93944e60dc4e7704c6d06b448e6787d"],["/archives/2019/page/3/index.html","edf8d399a4c26e393dbcba9dc627d2c4"],["/archives/2019/page/4/index.html","dbcfbc7daee571816def8f32ef25db0c"],["/archives/2019/page/5/index.html","4a56f3f2e1a18849b624df89a6e2ce59"],["/archives/index.html","27863eb3a1f373762d5624c78c0879a2"],["/archives/page/2/index.html","b828d1862e07a1dab68f1a1291e101bf"],["/archives/page/3/index.html","46ffaf6794e12321593a32a5d9ff1cbf"],["/archives/page/4/index.html","1fa2c5361d527fcb07514719b51dc26c"],["/archives/page/5/index.html","fb409d4e205e3a0b14660b0d87ccf955"],["/categories/docker/index.html","8bbc3f1aa95a38be7367cd637f3f9b73"],["/categories/git/index.html","a5167ff0c89f95619bf52f7fcc212006"],["/categories/github/index.html","772b10051b340169ced7cc5dc33dfe45"],["/categories/index.html","6c2de8875c32ffb37ae3d947e8e075cb"],["/categories/java基础/index.html","d33c8f13523085d666b9d3c26e5fa0e6"],["/categories/linux/index.html","768c2d51fbc0675ec91aab1c5776cfd4"],["/categories/linux/tomcat/index.html","dfdbca0e5dffd03ee79a27e9c4c2d59f"],["/categories/maven/index.html","3a126ff8d6ea81a9ecf1ef3107df2d81"],["/categories/mybatis/index.html","09a4e5c50d90e5b62371f0b307b13fea"],["/categories/mysql/index.html","993a11fdf4e3326445cd6d6c235269d0"],["/categories/oracle/index.html","de0707c6d691c5b4a088a744c9f67206"],["/categories/spring/index.html","37dd7bd22efdf06eba47a116d47d9a9d"],["/categories/springboot/index.html","3284a0c22794c624315b1eafbc825632"],["/categories/springmvc/index.html","6d8026047a5eddda4bb2c0edaf88343f"],["/categories/struts2/index.html","b9d2972ad6033363030ad58e5c42a591"],["/categories/爬虫/index.html","b2678d125e566465feee2d69e70114ea"],["/categories/计算机网络/index.html","b42a8fff9ee8d6ee96484f41a567133a"],["/categories/高速下载相关/index.html","c5805df84c4cf141d60fd5a1aa78d61f"],["/css/jitang.css","ade896ea636e147d052a58bacbe98328"],["/css/main.css","9a2371cab97cb0ea6c799630559482cc"],["/css/normalize.css","7c188247a4f019024bd2775a87749ae4"],["/css/screen.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/xiantiao.css","736724c2553c25ea5ca400f9daae0616"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","8ec10835f8584794ec2ffed1f4d663a0"],["/fonts/icons.dev.svg","4143a6cbb53e488ee357306805bb92a5"],["/fonts/icons.eot","b9c5cbed9bf5e79af98b6fecb9408ad5"],["/fonts/icons.svg","442a880c645e5da6e8c2e3b0f59c93c8"],["/fonts/icons.ttf","84e6367e8a1343d106300eaa692c532b"],["/fonts/icons.woff","f24eaa67582b0ee087a29b12ccdb53f9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","5ace20df4b02ef36e57fa34125236baa"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","8ef0d3250fb9762a8e9fb6ab451a4579"],["/js/index.js","7a399389d5c687dd19cfbe4b66f9a702"],["/js/jquery.fitvids.js","35edbdf88d1621c7a22cbee15b8018e8"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","6ea2c83db13479fdaa40a569d8d12d63"],["/js/src/algolia-search.js","2b89028b6fd9c7aa64b8ff9da32d9ac9"],["/js/src/bootstrap.js","99ca7285053ba949a74c0c43eb43e0de"],["/js/src/clipboard-use.js","557ee0431da4276a8940843bd8499bbd"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","f3dd9de0b71453f5950abe8c56be5761"],["/js/src/exturl.js","6ef7d40543a9eb423f912f1105ffb65e"],["/js/src/hook-duoshuo.js","37ed3755b5086e8cac0437228867a59a"],["/js/src/instantclick.js","5db4f2a21846f2bf8ad5c317e009bab0"],["/js/src/jitang.js","e11db51ae1a2df05f85f30e4f3f5b499"],["/js/src/js.cookie.js","136b22dfb1d17c95f2e9101c151c22ed"],["/js/src/motion.js","19440632a64afc028edb702062ecc899"],["/js/src/post-details.js","258db8ebd9423b8ccee18b7422878bea"],["/js/src/schemes/pisces.js","c84ff45972bb5845bc416586fc81891b"],["/js/src/scroll-cookie.js","a38a6d894a7bbd0271972131ff598916"],["/js/src/scrollspy.js","d1c940deeae04e7f30a389c05745b533"],["/js/src/utils.js","b8d5bb89e9dedcd6a41562746456b250"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","2a39aa91a4606fd2df7442839820b0c4"],["/lib/Han/dist/han.js","fa93d9a0667bce1bc6e160bfc242b983"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","7ca6e2ecea1afeddc39af732971514f3"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","9fb13d39587398edf93ad4c50a6d5f61"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c7ff6e79e022b90cdabad85017e3d1a0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","1dadec769847be6dfb4f2b83f374c8fa"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","8e93f92eae16f97b7315dccec892a9d9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","7a065c248b538084537b665010912d1a"],["/lib/fancybox/source/jquery.fancybox.css","74a2e453485d3ebc0f62fabb17b718fe"],["/lib/fancybox/source/jquery.fancybox.js","7954c8816095d44cc7ef5669c9088187"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ddd7ff1e18ba0e25e913ae7dcd9cbcf6"],["/lib/fastclick/lib/fastclick.js","cdea22d323583b93adea1208c4934f4a"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","54955d2e2b1f9e7063b9cbd48e6ee75b"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","4a8e401b4e61aaf61c47d4260f53acc2"],["/lib/jquery_lazyload/README.html","37c7dfe6aee7067c7b06067a5581c97f"],["/lib/jquery_lazyload/jquery.lazyload.js","d35485404faf869ab248cb5a24cb5488"],["/lib/jquery_lazyload/jquery.scrollstop.js","69f01b58a47af6b8dc7a4b9ac8c38b2a"],["/lib/needsharebutton/font-embedded.css","27d0686def60d885921f7655c6dcfdc1"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","a1704c2d5424c7e7840f2d2f8c4bcf04"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","44bbc0026e7beb9795185cc617466538"],["/lib/velocity/velocity.js","a956d76988a3b8418ba6f4f86dc266ee"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","1a2b9068c5e12924c6d3c30297fccdba"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live/css/bootstrap.min.css","7cc40c199d128af6b01e74a28c5900b0"],["/live/index.html","8f762ed0d25cd49a541d09ce828a2930"],["/live/js/bootstrap.min.js","61f338f870fcd0ff46362ef109d28533"],["/live/js/proper.min.js","2385337f1a10c77a74d2e636aea3abe4"],["/one/css/oneProblem.css","3d7d47ca6e9152ffc1a7eaf9bc97aab2"],["/one/index.html","4e5245afd588538e17eb626809b51ced"],["/one/js/oneProblem.js","10f5e789d491b69a678aff1842a4a4a9"],["/page/2/index.html","7bbd7373868a254bacabe32847dc9159"],["/page/3/index.html","cd8464f037b41917460c3a6b3c3033c3"],["/page/4/index.html","e385bd8c4782ed85ca3adaaaea288797"],["/page/5/index.html","754a7b800422e556d8372db6f0709a1a"],["/static/api/css/imgshare.css","ac012f5a8b6bd0ce8dadd6e359fcefbc"],["/static/api/css/like.css","c5fccf8891272bc80d2e53983e905b5f"],["/static/api/css/select_share.css","fa078397c4f74f21fc3b9feb975da554"],["/static/api/css/share_popup.css","6a6b068d257e1fe723ecd5f2d5c1f0b6"],["/static/api/css/share_style0_16.css","3e292e9f31a9fed894111d356eb5d036"],["/static/api/css/share_style0_24.css","ae4a3094f8c72a862b18224c78923954"],["/static/api/css/share_style0_32.css","55ed8e7a0cf62bac217efb69130b6a78"],["/static/api/css/share_style1_16.css","89e6c79ed2030aacd67d7aef3727ab30"],["/static/api/css/share_style1_24.css","fdb3ce33029d9e5e216e8c4d20da2d23"],["/static/api/css/share_style1_32.css","8e326da0bb2aae5fcd89f18083e85eab"],["/static/api/css/share_style2.css","f3bbaed3ec5333b7ca4d0f9c1a629ef2"],["/static/api/css/share_style2_16.css","8bf9925b8cb2eb848101d99455c849bd"],["/static/api/css/share_style2_24.css","6f95309af5f621b6b7a3fca0685e0b5a"],["/static/api/css/share_style2_32.css","6f77ed5b960ce99e2f5603202f4762f0"],["/static/api/css/share_style4.css","e22f9ed939f4250e46ec3f748aaf3e7e"],["/static/api/css/slide_share.css","b79bf4a43853618607f0acd319de555d"],["/static/api/css/weixin_popup.css","d0ec9befb3adf269a6929d712cf18531"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","24a0c613933424d25385837c68013e06"],["/static/api/js/base/tangram.js","8b2be08e6ea52b10dbcd5084406223cf"],["/static/api/js/component/animate.js","4627f53b1cf737f4a9713da4eb7e0fdd"],["/static/api/js/component/anticheat.js","eba73a9dff73f70c6b5d1d849cefe845"],["/static/api/js/component/comm_tools.js","a3936da4f2f5c6cbbe51a53bd91ed234"],["/static/api/js/component/partners.js","6274bcd505efbf99004f9ea6f6a1987e"],["/static/api/js/component/pop_base.js","3a02ce8a22a76c280df961e84393912b"],["/static/api/js/component/pop_dialog.js","393ae03808bf026e78fbaeedaaed85f3"],["/static/api/js/component/pop_popup.js","a63ce6c0bd4f5e9d70f1e9939b07431e"],["/static/api/js/component/pop_popup_slide.js","66e8ef9c5ba99f0bdae825684a7591b5"],["/static/api/js/component/qrcode.js","d3e2cfce0ac475b6c06e0fb08482bee3"],["/static/api/js/conf/const.js","04fcff7b8ddf21bd02bb2622c60677e7"],["/static/api/js/conf/define.js","48fcc51931421eab712779e53654992b"],["/static/api/js/share.js","13e2582163b5cdf84bb9c7dacd2c6b83"],["/static/api/js/share/api_base.js","716df501c31f8f0f9938a70f52e371e7"],["/static/api/js/share/combine_api.js","2686e23a27c9ed43add04b4826792289"],["/static/api/js/share/image_api.js","236725cbfbd1bea66457ddbf7b00a685"],["/static/api/js/share/like_api.js","d1664b4a98d1a760c022e3b13ce7753a"],["/static/api/js/share/likeshare.js","a6e4426ba0629e36bdfdbd7ceadc925e"],["/static/api/js/share/select_api.js","fabae7f750892687c5e201a355c40d32"],["/static/api/js/share/share_api.js","d2c7f071b30a2fdb6a0a9f88794b4a90"],["/static/api/js/share/slide_api.js","0af82b792398db8bd77f99cfe4f262d8"],["/static/api/js/start/router.js","6a44db8b561e710cc2af25b49727311a"],["/static/api/js/trans/data.js","a6e4426ba0629e36bdfdbd7ceadc925e"],["/static/api/js/trans/logger.js","a6e4426ba0629e36bdfdbd7ceadc925e"],["/static/api/js/trans/trans.js","1e324a1c44045c5b181627d4554ea791"],["/static/api/js/trans/trans_bdxc.js","d58f408f956ac8702025e6a6c1d1fd00"],["/static/api/js/trans/trans_bdysc.js","a08ff5dc2f265695e31627c56b4d275b"],["/static/api/js/trans/trans_weixin.js","2149c49e9668931ac09728a2e1f59513"],["/static/api/js/view/image_view.js","34801ce0bcd5411a432270a7d04c085f"],["/static/api/js/view/like_view.js","3bf8d51ae4097d0252ce1ffc6b8c955b"],["/static/api/js/view/select_view.js","1a41fd5cd10768559250a8a2514a49c1"],["/static/api/js/view/share_view.js","19224e2794cb36210e91c478206e2821"],["/static/api/js/view/slide_view.js","089b67691cac86713caa60409f052d35"],["/static/api/js/view/view_base.js","64fb59597fc606a278bfd5920fd3fee4"],["/sw-register.js","c1f5b52dedabd8032012d206fed3a673"],["/tags/Spring-MVC/index.html","7f047107205d151ead25462ac5de784d"],["/tags/cron/index.html","e5fcfd68463066fd728fe551ac57186c"],["/tags/docker/index.html","95627dcd2bd1f6fa599d127a2e4dc61d"],["/tags/easyexcel/index.html","547c6fc7ac733b19b0ba44bdcd02a435"],["/tags/excel/index.html","5b0ba4827593b176664253b251a8f48d"],["/tags/frp/index.html","940ed231c438e3683f6acb6810759b25"],["/tags/git/index.html","9aee00264b78d848035d8b88178ffa78"],["/tags/github/index.html","f3708a6fa62bf4d4249e709a9c6604d3"],["/tags/index.html","9baf47a00529eeb0665ea04a385285e4"],["/tags/java/index.html","c76f44b0a0ff83658cec7de923911883"],["/tags/java/page/2/index.html","0d0b273e3993a8999eade379ce64acc6"],["/tags/linux/index.html","a8b37af317215591e15f7d7b4b361258"],["/tags/maven/index.html","f05451ce21d4893a537b33c044741830"],["/tags/mybatis/index.html","3a8b74cd70f7ec7fb21b15fe5431e2d1"],["/tags/mysql/index.html","5e15bcee59cae317c6ef1548180d5149"],["/tags/oracle/index.html","bcaae3b0e15cccf05b6ec6a747f75a89"],["/tags/pageHelper/index.html","357995e6e4371357a6285411a85f5796"],["/tags/scrapy/index.html","292fb23f37be41c9540249a9c9a92f51"],["/tags/spring/index.html","26088a56202954b35001d21937a6fcef"],["/tags/springboot/index.html","372f2e5e16a47eb7b94a04603889092f"],["/tags/springmvc/index.html","47136913cf3c283cb7718558b7381b05"],["/tags/ssm/index.html","099b402524ed0ed82c26b4e13ec70d2b"],["/tags/struts2/index.html","04b78fd544dc5f9ad87af2a248e40d8f"],["/tags/thymeleaf/index.html","be18c2bb9b95d81bfb0d814aa748ca97"],["/tags/tomcat/index.html","c9d8c695c8f0be8dab93456e8f361211"],["/tags/内网穿透/index.html","32ee7ec193cada86c8b440fa9c83fa61"],["/tags/小技巧/index.html","78f9029a5b044ef99bb2fd90905a1522"],["/tags/插件/index.html","449d7af2ca0d56bed01923d753f3ae50"],["/tags/爬虫/index.html","ae56905bb1e847252ffb4a5f0046397d"],["/tags/百度云/index.html","7501d60aa0b7a44d1f84b800b53245f3"],["/tags/端口映射/index.html","4bd9c0243d80504aad0db338ba047a92"],["/tags/高速下载/index.html","e6f126eb5815000d4c9493d25d4d06b2"],["/xianbao/css/activities.css","814656c8491418c934b1ec9624a66be2"],["/xianbao/index.html","bb9116d3154f6133c4b7356b43bc172f"],["/xianbao/js/activities.js","af5ce91ee926fcea91b898d34ff9b690"],["/测试/index.html","aa0e8bfb7754cf77a71d8dcf2351dacf"]];
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
