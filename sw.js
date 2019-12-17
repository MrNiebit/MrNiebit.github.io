/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/163/css/bootstrap.min.css","4eb7e3a7a7121c4a11f2daffd3fb39a0"],["/163/images/bg.jpg","5ac5da1b493c4c24aa958cf7675a0bd5"],["/163/index.html","d57315281ef7bf87418b9ecd2f055dde"],["/163/js/bootstrap.min.js","4967232dd6018523eaea36b219c7a629"],["/2019/07/20/2019年7月20日/index.html","de52b934be47986417659a093cc01c36"],["/2019/07/20/Spring入门学习/index.html","e8f34fb07b2570cb617ba36c63832639"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","41c4c58d3b095cc54f1838056b554680"],["/2019/08/04/Struts2的执行流程分析/index.html","2e96fbe6428fcd85323f2567fe30d0eb"],["/2019/08/17/Struts2的拦截器栈/index.html","cdc39d3424589c33cd57ad6bc044e36f"],["/2019/08/20/ognl表达式和值栈/index.html","71ff01844958d78d7cd09b79baadd41e"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","0f0786cedc8a5ed8ddd2921b24323311"],["/2019/09/01/Untitled/index.html","a1ab43eb4625ef1b1edcbf9003494271"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","d102310253b0312262f1f9f43da45330"],["/2019/09/06/MybatisUtils工具类/index.html","8f43ae7c97379774802a9e85e4047b70"],["/2019/09/06/Mybatis使用注解入门案例/index.html","ee86cae55dfef6b564bd9b02fb1a0a0c"],["/2019/09/11/Git笔记/index.html","e327faa8842f5dd729f9095998b490c5"],["/2019/09/11/MyBatis的动态SQL/index.html","ecea642383d909f7fbb6ffbe94eaed3f"],["/2019/09/14/安装Docker/index.html","70a0086b47fcf34d9b2ecb8d939a5302"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","2564664f746932474f9271616f3305b1"],["/2019/09/21/linux服务器和tomcat部署/index.html","c37581f4defa4bb0ebdd637d396bc649"],["/2019/09/21/maven创建spring入门项目/index.html","e77a7a0c3299d1b341b8b56d91c663e2"],["/2019/09/23/mybatis多对一、一对多查询/index.html","5fc53cbe2e892ff96ee4993fd6a95da8"],["/2019/10/08/Maven入门学习/index.html","62a3a629d9f0323883bb7557d5ab5374"],["/2019/10/09/CentOS安装Dokcer/index.html","8390c9f0c2a52b70b2983bcef26172ec"],["/2019/10/09/docker学习的入门/index.html","6b8c75cac9a22ae4f4643df528142e22"],["/2019/10/09/linux常用命令/index.html","bf06fe96adc207ba7f296998c926b2a0"],["/2019/10/10/mybatis单表的嵌套查询/index.html","1806474c635ddc1a9cbb48176f655c94"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","2eb2bf37663f53d07809b41c6ab5eeae"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","3ec1f1a7a620879e57230851239c3c45"],["/2019/10/23/docker安装mysql/index.html","6ae4c545a2841d457db9895d11786e0d"],["/2019/10/24/Spring的属性注入/index.html","7c5526554362a50d2a70a9eba39bef5e"],["/2019/10/25/模拟电梯系统（java）/index.html","d8ad0a767ea8195fbb84536d10b698a1"],["/2019/10/26/Docker学习之二/index.html","9027846d88b1a4c0cae5065be13eb5b2"],["/2019/10/28/Oracle数据库例题/index.html","bd936c8376767b5558ea74722103f815"],["/2019/10/28/linux端口映射工具/index.html","38f87816bfa981f3fdc988b0aad74aa9"],["/2019/10/29/Untitled/index.html","2f53392aa312c07448e99f3cb2ec42e9"],["/2019/10/31/Spring-AOP学习之（二）/index.html","1f05c316775c8fb36435a31b75ce27f9"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","7881ed131883a2e19a293746818065f8"],["/2019/11/02/MyBatis与Spring的整合/index.html","c5d678fda860e62a5f1e6be38f4e4b22"],["/2019/11/02/Spring的事务管理/index.html","a9ce054abd95e4f6e1756601a066a1d6"],["/2019/11/03/SpringMVC入门学习-一/index.html","6eb34eb640975d49fee6b0a4ff75d5cf"],["/2019/11/06/SpringMVC入门学习-三/index.html","173237b60ada5f4417801861bb1ba929"],["/2019/11/06/SpringMVC入门学习-二/index.html","5324229148c83107216e0032163e10c7"],["/2019/11/13/frp内网穿透/index.html","19d557a077b214dc211b35d8ffb05e76"],["/2019/11/15/Spring-MVC入门学习-五/index.html","3853c4ae4b0283385903f5f36e151dad"],["/2019/11/15/Spring-MVC入门学习-四/index.html","518a1cef361a5d01f8d1f71aca86b633"],["/2019/11/15/pageHelper分页插件初体验/index.html","a60d8294be65e91604121010690e11b3"],["/2019/11/19/使用IDEA将ssm项目模块化/index.html","b55fd600ad24d0fc7e5ee82b30f486bb"],["/2019/11/21/MySQL-8-0安装与操作指南/index.html","2fc17c009617248957210e74dfcd82e6"],["/2019/11/26/SpringBoot相关知识/index.html","42465149ac9f8808e3331d0e165dc828"],["/2019/11/26/在servlet中使用thymeleaf/index.html","0aafea09ef9d5a41cae6b792d9d4ecc5"],["/2019/11/26/基于springboot对thymeleaf的使用/index.html","07a8bb2594151a7bcf506c4b4ed7cf42"],["/2019/12/17/Github搜索技巧和Cron表达式/index.html","3a6d010dbaf216dbc9e6b585fd4d50a7"],["/about/index.html","a0741569e54015cfd21e5acaac9b5fc0"],["/api/index.html","c4897c6b3ee887ee3a8e5221efd53e56"],["/archives/2019/07/index.html","2affd8d65dd0d36708400180c3f7d26b"],["/archives/2019/08/index.html","7684ad0d0d6966fa8b3df2fac4213a1d"],["/archives/2019/09/index.html","7655ab5e1cbd2d9c55b26ef08c952e46"],["/archives/2019/09/page/2/index.html","bca9f39a583b3b6bd1774e4ca2d33dbd"],["/archives/2019/10/index.html","bba97d66cd8a00d3200a93c8bd36a732"],["/archives/2019/10/page/2/index.html","a1112b2641891fe7471eba3c64fe5f70"],["/archives/2019/11/index.html","d0b1675b35f73ded3f0359ad17289ab1"],["/archives/2019/11/page/2/index.html","b64d75d9490d75fcaea3117f5a342151"],["/archives/2019/12/index.html","5dcb11ec5f91af551f6a4e3dc5d0dda7"],["/archives/2019/index.html","d004f378cb6a6395d2e828fe58195a3f"],["/archives/2019/page/2/index.html","7e61a09d24def95b1234cd77a0f5aff3"],["/archives/2019/page/3/index.html","893191a1cad90c70714bd57052c74a3c"],["/archives/2019/page/4/index.html","6c3a8c5a37ba0210c285dce93b7326f4"],["/archives/2019/page/5/index.html","547e6ecd8f99605ac30a37dbf1c6283e"],["/archives/index.html","a7260b2d2beee8a50bda38f0d5842c3f"],["/archives/page/2/index.html","9169c2fd2d718535ebf494d6a94b8b2a"],["/archives/page/3/index.html","ce8bf3a8f5c66b32c2adb916f26a564c"],["/archives/page/4/index.html","133349ccc60151beff36b53996d3832f"],["/archives/page/5/index.html","eb4270d58751b8a7ba9386397d6eaffa"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","586d649485e1f726ade0a5a6036a6057"],["/categories/git/index.html","10bf193fe623e2d2ca0b457b55b9f103"],["/categories/github/index.html","e1a86314a77dba4c4e5b3a864fc596f3"],["/categories/index.html","4dd6507d00647b9113495398a12a1741"],["/categories/java基础/index.html","c866ed6eedcd784b0ffe1dbfdeece4af"],["/categories/linux/index.html","7826954f1c07428147c4648affd27a08"],["/categories/linux/tomcat/index.html","92d4278ac1fd5cff70b711677eb446b2"],["/categories/maven/index.html","0cecd71caf09284bf2aab34a9ea2f53c"],["/categories/mybatis/index.html","adb02af95cd125e3130e1f43fa6299af"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","356ec58db2d4233b126032e1f03da370"],["/categories/oracle/index.html","eaaaddc3ed07d44277b994dba9511e13"],["/categories/spring/index.html","992667a360a0ce73ade9770fe064ab2b"],["/categories/springboot/index.html","9c3e7cb93a3fd43e9eab3f4b1dd3112e"],["/categories/springmvc/index.html","f7f91afc14f844dd8ec7f6b66d9e7d54"],["/categories/struts2/index.html","0b3d21d499c129c6aa14011c49a08b3e"],["/categories/框架/page/2/index.html","4864f40a56dd0d6fcecce4f4e3906dfe"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","f6eb43c209620d1d301748c4cf240d96"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/计算机网络/index.html","853e7b75b99c39cff283f8c7f8d4ece8"],["/categories/高速下载相关/index.html","dbfd00b0f55b6a820011252f65f9a0b3"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/jitang.css","a1cc8656401f2aa05f2b0a7f1317f9ce"],["/css/main.css","da509136d218500cd8e8cecbc3e4a859"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/css/xiantiao.css","f562ee53d94f8ee0b9db82355aec3db6"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","54b6acb0bc57f7e0167efbc16dcc0bbf"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","6a1bdef4f86af39c5cb42ae175a6c005"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","a40cf4647506fdc3a4adaab7e2d66557"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","b312014eb877dde1e09f50960eff551e"],["/js/src/algolia-search.js","c046a93c113dd2e420bc47e1e46f6e00"],["/js/src/bootstrap.js","9cd34350d0fb40693a78062aa99465c6"],["/js/src/clipboard-use.js","c1a09777492918999f868daaa8da7d24"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","9096d45fe7a56eb35c9fe7efe3bab8fe"],["/js/src/exturl.js","c63ace7adaa35af20adf9d6735b38e2e"],["/js/src/hook-duoshuo.js","e3a0d7c5a90493f57a1b43f8f584fb42"],["/js/src/instantclick.js","f8a5c6252fba8f54216c26f9a42b3260"],["/js/src/jitang.js","90d3dd3921893c43eec49fd6190fdcfd"],["/js/src/js.cookie.js","3e091a3584bef8e6536d92d762fc47ef"],["/js/src/motion.js","ada15581e5b69b379b343d36b30fbfdf"],["/js/src/post-details.js","d60dfcad7226d2de68223aecd22eff0a"],["/js/src/schemes/pisces.js","777079b8d63fb7ecadf88e678dd1758d"],["/js/src/scroll-cookie.js","6f5bf511c8019918b39d92947add5767"],["/js/src/scrollspy.js","e45aa3b8bb8254bceaad0ea41b10f88a"],["/js/src/utils.js","77c9682786d3d8da3be3709354bbcff3"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","72b5df5d263748a133366d3f536d0b2a"],["/lib/Han/dist/han.js","72bde4c3bc837c5dfa177386ecc0979c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","5f4986fa20e1f7903982a5883a0ec617"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","e08af78a03573bb5b6aa703feab31e7a"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","ffd0029f4e6e84e8f6d1a8506e5780ed"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","69d323a492e93cf2d22b7b0150d50591"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5cd4b5400fd7091b90104554fe023492"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","b7cad607e218b29618b4114ce71ccbda"],["/lib/fancybox/source/jquery.fancybox.css","70a866d9fbf2cc4ca7a6342fb4ea2d47"],["/lib/fancybox/source/jquery.fancybox.js","238c21ad24b668b12e70138c1a7967c0"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","d370b98e0975320300bbce4c4114048b"],["/lib/fastclick/lib/fastclick.js","8a8e9451398141f340e538702b167bef"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","f62d40463c356a91393b673634cf357e"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","80ce07c7f1a76b0a40d6869ac56455db"],["/lib/jquery_lazyload/README.html","fe5e67397137f1ff6767bb42cffa1438"],["/lib/jquery_lazyload/jquery.lazyload.js","81caee6dc03fdd74ac583fe8d428505e"],["/lib/jquery_lazyload/jquery.scrollstop.js","187c5bf109d4aa3e6708b420258b2203"],["/lib/needsharebutton/font-embedded.css","b5c731063229014ecefac11bc1315969"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","4ec92b7ef4a4898e38a2b1e47fd71857"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","aeabfee43f192b821d87cd39aed0a5ba"],["/lib/velocity/velocity.js","f1cb0e82d78815e89fa31d05b97f97a2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","4dafc3e2cd808d619173bb34368b26ba"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/one/css/oneProblem.css","973b5af8975d90458953f8d45dd5ed79"],["/one/index.html","7091c77855b5e44c2595bac7b20f39a2"],["/one/js/oneProblem.js","fedb160331f5911333732391df518c35"],["/page/2/index.html","6fed51d26c75c967469d50f272275e20"],["/page/3/index.html","136c7be179508891c0a9f1109ad3575d"],["/page/4/index.html","a0abebbf91043409cbcedda1882b48b4"],["/page/5/index.html","e44a078791990d3f4ecedb42a857ecc1"],["/static/api/css/imgshare.css","24bd84271dfe8ce35704ca0d2f787420"],["/static/api/css/like.css","2225a6d66b4b5037fe961b9511c5bb7c"],["/static/api/css/select_share.css","17aeff39521c4515f782d9f0a426e7f6"],["/static/api/css/share_popup.css","944687b92de2d625ce42d10408471460"],["/static/api/css/share_style0_16.css","973d21b6b49013ac6ada2f58176fc753"],["/static/api/css/share_style0_24.css","6895f74bf8c604db01e972f5b760f52b"],["/static/api/css/share_style0_32.css","b7e8d7bd8760153a4cedd3cbcf6cde30"],["/static/api/css/share_style1_16.css","6cd74d2d30eefa237613195c3086c2bc"],["/static/api/css/share_style1_24.css","8b74d5449b033fadcdeb85a4ece12b07"],["/static/api/css/share_style1_32.css","f3bad16dee1f65ff82ec40076c0bc134"],["/static/api/css/share_style2.css","2cdd282f2052793ef81c0b74ad0c4497"],["/static/api/css/share_style2_16.css","2f6ddca79bce286604efd022c3778866"],["/static/api/css/share_style2_24.css","90dc3cad13ec4eba6a2b14b62a2888ff"],["/static/api/css/share_style2_32.css","9ca4065e3952a84ad9a41caa4c8f71ed"],["/static/api/css/share_style4.css","9cf7aa7528000cccab58c63813907e51"],["/static/api/css/slide_share.css","8980cfdc5515b6ea693d044bb9cc1477"],["/static/api/css/weixin_popup.css","040896046d709b1d1ce8274b255165dc"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","77acb29cb655329a555090371f2c401f"],["/static/api/js/base/tangram.js","d069eac727a8a2ca55c4b249cfcd74c0"],["/static/api/js/component/animate.js","5ae7f482dbb4f5035979a7a57f0d7e1d"],["/static/api/js/component/anticheat.js","8ee2aaef37a2f89f6f3cfbf48bb0c0db"],["/static/api/js/component/comm_tools.js","01117078d15f6c60d995787e205cbbbf"],["/static/api/js/component/partners.js","be9b790223e9287b80b33d993f2fbbc5"],["/static/api/js/component/pop_base.js","bd02b467aa733499592bfbe9118ebbb6"],["/static/api/js/component/pop_dialog.js","fd3ffdb5bdec841c34bb3b90eab42b0f"],["/static/api/js/component/pop_popup.js","7902509588066296d068cf0e20d1d84a"],["/static/api/js/component/pop_popup_slide.js","111a9f367afe1301effb04bb507ab032"],["/static/api/js/component/qrcode.js","f52062e21c2c3ae897a92cdc6013b09f"],["/static/api/js/conf/const.js","29d79a5a80de37789b3d3db882a971c7"],["/static/api/js/conf/define.js","447972b07127b466ed8dce055472c9cc"],["/static/api/js/share.js","28546bf143e1b572b031769af1eac133"],["/static/api/js/share/api_base.js","642a2067302b5a7b4cfa52c7c43fbe67"],["/static/api/js/share/combine_api.js","e8eb62108a9a26a521340e9a44d465d3"],["/static/api/js/share/image_api.js","7c5def27673ef4b5621c4af5243d32f4"],["/static/api/js/share/like_api.js","1a27dac609853737ba477ae45b488ca0"],["/static/api/js/share/likeshare.js","cb72ac88261ec7d7ed867734a1235941"],["/static/api/js/share/select_api.js","f5043538aa67685fe2954329a06c4a47"],["/static/api/js/share/share_api.js","927414881468dc2caf50b1138eb81b5f"],["/static/api/js/share/slide_api.js","5d0e9a6a72839a0222a2174d41b1b0ca"],["/static/api/js/start/router.js","ce3f72f43da7b41a9de8bff400fc1a79"],["/static/api/js/trans/data.js","6b4e49bf1c151e34f50dab1f340fc371"],["/static/api/js/trans/logger.js","6b4e49bf1c151e34f50dab1f340fc371"],["/static/api/js/trans/trans.js","5708044a8f7c5e43e9983d1cde775c0c"],["/static/api/js/trans/trans_bdxc.js","1f3e67508ddf435d189f7fc2c1e08b08"],["/static/api/js/trans/trans_bdysc.js","c325c2da055c7236bcd4a9a925775802"],["/static/api/js/trans/trans_weixin.js","30b212efb2170e022f56ed8f8652fa46"],["/static/api/js/view/image_view.js","25edabf1359254525fc71386b714514a"],["/static/api/js/view/like_view.js","978172dc89569521738958cd16e0ff4f"],["/static/api/js/view/select_view.js","25e21320cc0add381492bec8772e0510"],["/static/api/js/view/share_view.js","3aeacd808636d52c31614d23c79c5653"],["/static/api/js/view/slide_view.js","c8071527f8b3a71843d5821aeec6c3df"],["/static/api/js/view/view_base.js","be38407ff0801213eb7ad38b4861e666"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","ef04eaf3ab6e3908fa110d904e5254e6"],["/tags/Spring-MVC/index.html","034af1af99ecbb835b190005416ed79c"],["/tags/cron/index.html","c9c536b358b29b00b96374a13a158bed"],["/tags/docker/index.html","cdcbc751a5e241f2996af643b51f8e9d"],["/tags/frp/index.html","90c99de6c3500cdd717c15a89bc407dd"],["/tags/git/index.html","f67ab84e6c4cd86dc5555083352c72fb"],["/tags/github/index.html","b1f76f177bf0bf8f5e96cf09574fd892"],["/tags/index.html","b1d58f234ad7608f5e79e2c32e0a9243"],["/tags/java/index.html","25d97bf72fb8b0ad7f853d4d7948560b"],["/tags/java/page/2/index.html","0fc4fe002eb85f3394b92872572d93d1"],["/tags/linux/index.html","99425b8b7d5a2c6e95e28e5d2f1918f5"],["/tags/maven/index.html","44fb5c886bd71cb181a8b747c83475f2"],["/tags/mybatis/index.html","ddd5ba962d3a513b68470ceaf9b0d5e7"],["/tags/mysql/index.html","8ee6ea4b7cd8d5f1e2f477ab59ba92b9"],["/tags/oracle/index.html","d3d9201ad55012043dcad169433a0614"],["/tags/pageHelper/index.html","9c12cf37995d92b84eb324b9c20af551"],["/tags/scrapy/index.html","ebe714fe01ea7576e32e33a4a5520f6a"],["/tags/spring/index.html","398341124eb28a269bc9670a66055cfd"],["/tags/springboot/index.html","36214a1064e40f62b603ab02409cbd66"],["/tags/springmvc/index.html","eb6c2da19d6f30ebe0c54a84df089d02"],["/tags/ssm/index.html","7f94a38c7f3b68e8579592ebfb6a76b6"],["/tags/struts2/index.html","57e07cbb955979da5f72723d8918ab39"],["/tags/thymeleaf/index.html","5da111aa2f656a1d12ab084bdb5eb9e8"],["/tags/tomcat/index.html","bbad310025db263fb1e58851943699ff"],["/tags/内网穿透/index.html","85ec10b55b1505a078973275050a6092"],["/tags/小技巧/index.html","982e709d24db203ca8f981598e1959bc"],["/tags/插件/index.html","fcbdc98c3e94118bbacc3db8828f7bb4"],["/tags/爬虫/index.html","06b5e80b80a7f8fed5471f9d044941b8"],["/tags/百度云/index.html","b4dbd083dfec10a282038722f7b62bca"],["/tags/端口映射/index.html","d2d0e4feb0e13ed924646ae440f423cf"],["/tags/高速下载/index.html","a9f9fcada04c8db560a37ef5c65bf569"],["/xianbao/css/activities.css","d66bc6b37cdf98d99537441eda77d3b3"],["/xianbao/index.html","f3e3a65dc760cd5f638830926fb693bc"],["/xianbao/js/activities.js","19d7dfa4584afd837a3252935c1899ab"],["/测试/index.html","28282706160f7ff00e196c6807c8f3ec"]];
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
