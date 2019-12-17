/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/163/css/bootstrap.min.css","4eb7e3a7a7121c4a11f2daffd3fb39a0"],["/163/images/bg.jpg","5ac5da1b493c4c24aa958cf7675a0bd5"],["/163/index.html","d57315281ef7bf87418b9ecd2f055dde"],["/163/js/bootstrap.min.js","4967232dd6018523eaea36b219c7a629"],["/2019/07/20/2019年7月20日/index.html","2b0ec5c9f951e2a46df62cab8367aa41"],["/2019/07/20/Spring入门学习/index.html","e63390239650c0c310b69d289b4ac7a5"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","7ac9444fb05662f2fd0c2799cfc54632"],["/2019/08/04/Struts2的执行流程分析/index.html","abbe034319b236b0fb8299b8a8e541b2"],["/2019/08/17/Struts2的拦截器栈/index.html","43b04ebbd26b6ded9bb4b0a1f01d5377"],["/2019/08/20/ognl表达式和值栈/index.html","87c19fa73c042a08d2fb86a359155735"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","a33e2202eb329eca6fa279d5d71b4f96"],["/2019/09/01/Untitled/index.html","a1ab43eb4625ef1b1edcbf9003494271"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","766a83c42476621250f246208f977a3f"],["/2019/09/06/MybatisUtils工具类/index.html","c3fa09555268e20de45570f3ff94abe7"],["/2019/09/06/Mybatis使用注解入门案例/index.html","5c53ca5c8a5d86913681d47c089d3b02"],["/2019/09/11/Git笔记/index.html","8aba61fcb4f4de0e7d368b839bc0e6c2"],["/2019/09/11/MyBatis的动态SQL/index.html","d84f8bc0dec76ad166f3a6029dd38947"],["/2019/09/14/安装Docker/index.html","d63617c5edf61473f2c6934639d11d69"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","bb46fbb84a6c56e50879afb3ba87f2b4"],["/2019/09/21/linux服务器和tomcat部署/index.html","747e5359a20b3719ffdce91ffa56d2f7"],["/2019/09/21/maven创建spring入门项目/index.html","0cb9b0ff5c5f60fe61dee002d74cc40f"],["/2019/09/23/mybatis多对一、一对多查询/index.html","f5c7319fda40cd7b39734392cdb6286f"],["/2019/10/08/Maven入门学习/index.html","9976bc1402274cf99860daa5f928cbb9"],["/2019/10/09/CentOS安装Dokcer/index.html","ba529c8df61748f216ed9d6af39c8424"],["/2019/10/09/docker学习的入门/index.html","b4681a5b6b298e95afac5885e4ccd840"],["/2019/10/09/linux常用命令/index.html","385be01b470bd1865d631dc0df459981"],["/2019/10/10/mybatis单表的嵌套查询/index.html","491114df5a63052c05aefc1bafbd65a4"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","8a3b9cd4257420fad0fd8b2dd5fa75e5"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","c0cba99b212bf6513b6c9a40cbec2294"],["/2019/10/23/docker安装mysql/index.html","e0787b5184594b34188b4326a10bd0ff"],["/2019/10/24/Spring的属性注入/index.html","0af3b5c2e8bc2d2a7dd467e5930b3b27"],["/2019/10/25/模拟电梯系统（java）/index.html","7429fbcf8d749765b47a6a602e84ce54"],["/2019/10/26/Docker学习之二/index.html","b56530402fc806ccdc27da2dbc6678be"],["/2019/10/28/Oracle数据库例题/index.html","56ef39984fe6d5c6c7d56ab2f8c53645"],["/2019/10/28/linux端口映射工具/index.html","2eb3633fdbd3a5f7bb11ba1ad053df8d"],["/2019/10/29/Untitled/index.html","c05d4d21cbfae1070f94c5c94ed0b11a"],["/2019/10/31/Spring-AOP学习之（二）/index.html","798c05822d7e48b9a0cd63ebaa8203fa"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","607381878a9c2ea6d0e6e689b6ae1d77"],["/2019/11/02/MyBatis与Spring的整合/index.html","576639778cc05d6f2605f3d80baa54e8"],["/2019/11/02/Spring的事务管理/index.html","80d01eb981cf0f60887c5c22c2566258"],["/2019/11/03/SpringMVC入门学习-一/index.html","83ca96150fcbc5cc70815bb9f69bc77a"],["/2019/11/06/SpringMVC入门学习-三/index.html","d92a3e70215d261460666d4741a65b63"],["/2019/11/06/SpringMVC入门学习-二/index.html","57ab6e699b1c84969203d46e2032695c"],["/2019/11/13/frp内网穿透/index.html","f758eed677ef45b3558aac901390786e"],["/2019/11/15/Spring-MVC入门学习-五/index.html","a72c9a86f23669f713afc2267f0c1a4f"],["/2019/11/15/Spring-MVC入门学习-四/index.html","372a6e2f1100e6a81e955a95d9730b1e"],["/2019/11/15/pageHelper分页插件初体验/index.html","13c0253c0510e51e704ab855032cf81d"],["/2019/11/19/使用IDEA将ssm项目模块化/index.html","688ff679d2db3838773b75c49a414163"],["/2019/11/21/MySQL-8-0安装与操作指南/index.html","9a7bc88be874269ae13ffae26f4c6a2d"],["/2019/11/26/SpringBoot相关知识/index.html","a31a74c820ca4b785697a2da05098a3b"],["/2019/11/26/在servlet中使用thymeleaf/index.html","acd5e891469a2f1ffa5e6c08394cea76"],["/2019/11/26/基于springboot对thymeleaf的使用/index.html","de31443c90e6fdac95afe4b2c5cbcd77"],["/2019/12/17/Github搜索技巧和Cron表达式/index.html","92e643aa43c8c541c53b613f5a4e0094"],["/about/index.html","c110384113178274242cc66dcb48babc"],["/api/index.html","e1b46c1176e8e26c05fd8e7a5400de73"],["/archives/2019/07/index.html","34437115cc13a2797fa72b53c65f9de6"],["/archives/2019/08/index.html","f1991692a9512aedbcf22eeb92d8a256"],["/archives/2019/09/index.html","b11911a5d5c259d2998c2bbf46867147"],["/archives/2019/09/page/2/index.html","bca9f39a583b3b6bd1774e4ca2d33dbd"],["/archives/2019/10/index.html","3195aeefd91e90d4e41d5ff32255bd76"],["/archives/2019/10/page/2/index.html","3569e0822dc402311d73888590698598"],["/archives/2019/11/index.html","df469a30a4970e00d78d1555089cf237"],["/archives/2019/11/page/2/index.html","205c560ad30efb42bc0d23e9006fb1b3"],["/archives/2019/12/index.html","203685b58d8604c1e759255804afb570"],["/archives/2019/index.html","4683a006ba8bc049e36938c7895a6ece"],["/archives/2019/page/2/index.html","96ac2377469541a8564b8d99eb2e672b"],["/archives/2019/page/3/index.html","1d7ab53827ecbf0548b8313ae5106a9b"],["/archives/2019/page/4/index.html","6f1f1b2e94bf42b38d78f4a115d8140a"],["/archives/2019/page/5/index.html","1c829086536cbc6346f409bc968d93de"],["/archives/index.html","3ef3dd7057a74450492fa96bb2a2da6f"],["/archives/page/2/index.html","5dc39642e3371cefc42cb83772c2884f"],["/archives/page/3/index.html","91fca973191e60fe6100b15d40e22d23"],["/archives/page/4/index.html","4ec200355c4cc72a044ca2739a062a19"],["/archives/page/5/index.html","72614290025f306fe7b5984940e6d4e7"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","c0241154f8026d6661fa4291325383bf"],["/categories/git/index.html","efe25e0e1a659f76b0416b4bed794253"],["/categories/github/index.html","c6c74026bf201aac1068a8caf1a944a7"],["/categories/index.html","35ea257efd237ff783b10d3e40508a7e"],["/categories/java基础/index.html","6a5ba761833b5ad15524a06114e3fb64"],["/categories/linux/index.html","6cece3b8e80cd6f6348bf223efc6c208"],["/categories/linux/tomcat/index.html","8afcae182d1071396197939d010bd5a8"],["/categories/maven/index.html","1a2ee0cea08aee7dbe31e23df24e0cf5"],["/categories/mybatis/index.html","c7370e47c65f13834f28b9661ec6bdd9"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","bfd6e8bb5ca2b784941d53c1d00e7940"],["/categories/oracle/index.html","be00bc187f56f7dec802c7122e7889ce"],["/categories/spring/index.html","d6b7c8ed3b68e979ccd2e719e104231e"],["/categories/springboot/index.html","aac23a338b073970e8a9f4183ca0bcf0"],["/categories/springmvc/index.html","767b2fc460d9a15b173ec59063f32299"],["/categories/struts2/index.html","8747022161fa61d351c84a9760a12e56"],["/categories/框架/page/2/index.html","4864f40a56dd0d6fcecce4f4e3906dfe"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","1071a34f2ab3a1b49435b40189fff415"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/计算机网络/index.html","d2592c49fb0812562010b8e6415829fe"],["/categories/高速下载相关/index.html","75fa70685aa4bba6c54b7bb96f3c402b"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/jitang.css","a1cc8656401f2aa05f2b0a7f1317f9ce"],["/css/main.css","2b8b946729e1a1079abf079543e24bf7"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/css/xiantiao.css","9daaa469196e4ee8249d42f84ccc82de"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","30cef99c5e410bacc417099982e610f8"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","1963cf49191d28e30bee3ed0a8526218"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","5744377ee9aede900bb8c957f040a243"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","2f719b06bd90c81a41d96eb8c740590f"],["/js/src/algolia-search.js","f8785125cf9fd5e1199869dcb991937e"],["/js/src/bootstrap.js","59511deace04ce7d693e52df3427b80d"],["/js/src/clipboard-use.js","549cd45a017dbcd3ce2386535d016487"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","2df7e94a6bbe544057673d8bedb3b85c"],["/js/src/exturl.js","8452e54b1eeb29662e89b092e35e88cf"],["/js/src/hook-duoshuo.js","98fe411b78179be923ee797e316bf01f"],["/js/src/instantclick.js","a2294d8f29373baa33b8d5ca78915733"],["/js/src/jitang.js","c41e7939d13aa9209c1672f3a37a62ae"],["/js/src/js.cookie.js","de469d3777465dd45ae11daee7d166d0"],["/js/src/motion.js","cfff273b3c1e57fd86fed14b470605f9"],["/js/src/post-details.js","039015b3694403f3c251d91985eddfde"],["/js/src/schemes/pisces.js","2c52323a6ae2964b8deef7cf73d77432"],["/js/src/scroll-cookie.js","5a1a78695f3d59de78b851918359c504"],["/js/src/scrollspy.js","72f39bdaa48a01d3c99dff1f592426fd"],["/js/src/utils.js","cd58831eeb180a0fba675c723ac1b4e7"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","ea5f6b37f6f793dca355214ef4687389"],["/lib/Han/dist/han.js","f2e992ab17e4b82e3194180869dc4382"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","ca37d1fd88ca46388e85eed26524b4c3"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d4d233362ab5aedd1d5f171d0652f7ce"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","7f5d259a849188c4872d341bd95697cb"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","be3315b35e574150a1428b726a346b32"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","3368d619b735f99d0a87e9d9ceff51b0"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d6e1face02023c76c13f20dad41e5d60"],["/lib/fancybox/source/jquery.fancybox.css","e4083f8f89289c8bb712ad5be148852e"],["/lib/fancybox/source/jquery.fancybox.js","d101bc25ab4757a7286a8696d1e3d445"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","5adff0b96f0d48f3056ea404cb2d497b"],["/lib/fastclick/lib/fastclick.js","84daec804b7cfd5b7b8482bf641962a8"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","1cc856f85d51bc3473a457d9895893f7"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","d22ca8c753ecb4fd2d5831645c1b08d9"],["/lib/jquery_lazyload/README.html","10fdf55f5c78ce39df7af43812bd8a75"],["/lib/jquery_lazyload/jquery.lazyload.js","51ce052dbb95e3975b0b350565de22f2"],["/lib/jquery_lazyload/jquery.scrollstop.js","3f76bb907638fa49e0f3142791c81cfb"],["/lib/needsharebutton/font-embedded.css","c00b8094ab0c9995986ba5c55f504036"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","3e678a023476767dfc0b4c3f583fcf83"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","31dffbce7d267c6261f41850d0d6d8e3"],["/lib/velocity/velocity.js","609a433e0e383a25139667a1f734af01"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","98ac9c2b6193d93cffba8428c76c5593"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/one/css/oneProblem.css","6ee5a4f82080241d910b25026fbfc97d"],["/one/index.html","0acf55605b9b43fca0d09b561c96e33b"],["/one/js/oneProblem.js","ff152af34af6eb9c6a94126aba503d03"],["/page/2/index.html","af663eebcdf3f38c4ff273925c5b2824"],["/page/3/index.html","aa56d52297972636674b66bbcdeeeebd"],["/page/4/index.html","2923efcf004388bf4f3cfd807a61eeda"],["/page/5/index.html","54d8db2098108db1025176b7a551e34b"],["/static/api/css/imgshare.css","b6dd09b41f0907054b5de7d0bb920342"],["/static/api/css/like.css","95914fa42825171f9c6d5f3cb3012241"],["/static/api/css/select_share.css","48ec5cbf0aa1a1f8fe3a4fb677f2389b"],["/static/api/css/share_popup.css","54c678f4c695b2a7bc5e2d725ede18af"],["/static/api/css/share_style0_16.css","98c1ab9b7b2f664d9fc331b435419da3"],["/static/api/css/share_style0_24.css","ab729e5885c1a80c1f793988d375e13c"],["/static/api/css/share_style0_32.css","cc38cb92272357147eb5e6a8e45ce88a"],["/static/api/css/share_style1_16.css","27a0ae425361ea414e0e84fee23c8a0f"],["/static/api/css/share_style1_24.css","ed9e590dac04197225c02b6b360e5914"],["/static/api/css/share_style1_32.css","d52a9bd4be48496c9fe3d433cc3c9a0a"],["/static/api/css/share_style2.css","e6071007780ffe360812bc99d9a9838c"],["/static/api/css/share_style2_16.css","946fd84988e76cffe983503b71c09384"],["/static/api/css/share_style2_24.css","822237365f39ff442be475cb9a1caa1c"],["/static/api/css/share_style2_32.css","561c8ea04d13fb74072bfe9f20cf8ee6"],["/static/api/css/share_style4.css","365ba7045b152a05a9d3642606673b49"],["/static/api/css/slide_share.css","0a504b2412be2fc62b4f36efa1099ae7"],["/static/api/css/weixin_popup.css","d5a8c5f3ed0694ba2a757a852ab1ad28"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","252ec72126709058f7242abaa22fdc7d"],["/static/api/js/base/tangram.js","16c05f5938a7ddd877b1119a91a601cc"],["/static/api/js/component/animate.js","0524e0f74d7081d58f167fd534531359"],["/static/api/js/component/anticheat.js","b471e16becde4f4762a02c03424c73fc"],["/static/api/js/component/comm_tools.js","4fab4ef87859b7b7709843e1e6406dba"],["/static/api/js/component/partners.js","52c38c8c2eb154ce9db8ac003f1b807f"],["/static/api/js/component/pop_base.js","28c14b50e4aa360f65681cca6fd51974"],["/static/api/js/component/pop_dialog.js","303d4e42cd738a149f63971e6b0f8cc0"],["/static/api/js/component/pop_popup.js","f62d95a933c5d412c489f687cee2bdd8"],["/static/api/js/component/pop_popup_slide.js","02d1ed9469b0fde8d9bde2e4a579f916"],["/static/api/js/component/qrcode.js","ef8d468cde352960d7baf1bfd6125732"],["/static/api/js/conf/const.js","075642f7add7b2de1a218c7fc4cc881c"],["/static/api/js/conf/define.js","df48a80cf54b1091618330ee9bae6432"],["/static/api/js/share.js","ea2d11da0b5260e36ac29feca3b1a9d5"],["/static/api/js/share/api_base.js","276c88f25c3d11cf3901014288c5c351"],["/static/api/js/share/combine_api.js","396eefa48038437cf53f4c2333076ceb"],["/static/api/js/share/image_api.js","775aac6d53951408226965198a91716e"],["/static/api/js/share/like_api.js","b332688ad9bb3afeb59be4d6b6087e6d"],["/static/api/js/share/likeshare.js","a17cb53e8ece4160225ace1e3aab2604"],["/static/api/js/share/select_api.js","51e0b61c787178d5c9362d61d5afe640"],["/static/api/js/share/share_api.js","d7bea2fa915b463de49a23df318049ba"],["/static/api/js/share/slide_api.js","3b29c1ee7be2e9c7a1fc40f468a8b3ad"],["/static/api/js/start/router.js","009ace9cd4e8118b5f95b3c1b6c7ed07"],["/static/api/js/trans/data.js","a17cb53e8ece4160225ace1e3aab2604"],["/static/api/js/trans/logger.js","a17cb53e8ece4160225ace1e3aab2604"],["/static/api/js/trans/trans.js","3dda546b90441c2c3568d3aea2cb8024"],["/static/api/js/trans/trans_bdxc.js","fabf2581d0c9817cc3a5f5be6520a24c"],["/static/api/js/trans/trans_bdysc.js","1d196bd1c8e9a576b128299bb590aea5"],["/static/api/js/trans/trans_weixin.js","c3775865595eb8c4fd136198820effd9"],["/static/api/js/view/image_view.js","f31626bc7674a5d563b8001c3480379e"],["/static/api/js/view/like_view.js","bdbfe1ce68233b8a7feddd1b57eab121"],["/static/api/js/view/select_view.js","5563969d3f1b6c91188a591587c9a2ce"],["/static/api/js/view/share_view.js","36f985b7e927a476ffc3dc6c53b3cc0d"],["/static/api/js/view/slide_view.js","6c771ca2d25da237d2533227995c4595"],["/static/api/js/view/view_base.js","2a5465a6d20000a9291153c59f018d0e"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","5074bf3a484f9d4861251a1c6040ed96"],["/tags/Spring-MVC/index.html","1e74ffe9ab4b972af19c5880387d8405"],["/tags/cron/index.html","a2218dee0eb15ff294ee69b16339fa81"],["/tags/docker/index.html","e7f87a2f7d4971d0012230a06d6a85ca"],["/tags/frp/index.html","24cb4e85c763f0712b20ca1b567c365b"],["/tags/git/index.html","1b1f7ea9658a429e9c760e7185ac3811"],["/tags/github/index.html","846f8fb1735503aee1a8f248759b8f87"],["/tags/index.html","96df3b99832985015c1f60120bc6c338"],["/tags/java/index.html","be326a9282945eb77727913c088e4349"],["/tags/java/page/2/index.html","014845d8e4764959db6def8d16507316"],["/tags/linux/index.html","12c17e9d5533ab5d847ee7feffd8b38b"],["/tags/maven/index.html","80bde2ddd9e7fff3b319a1874593f697"],["/tags/mybatis/index.html","3ee155e0a05cb003c978881d18b911e3"],["/tags/mysql/index.html","6f32313eb2367393fd3d6227dcf97923"],["/tags/oracle/index.html","1f97992254178c70adb227ba5c7a584e"],["/tags/pageHelper/index.html","3763777da6599a878f546c1c7eb9e569"],["/tags/scrapy/index.html","495381e92a60731c6b50c90aa4df3de3"],["/tags/spring/index.html","90195359dfab1be26cb57f748c30164d"],["/tags/springboot/index.html","81806d1390e0c2c2de7b465456dc4a8b"],["/tags/springmvc/index.html","52417270b047b73dc7af2247d21b4f1c"],["/tags/ssm/index.html","1f5c5441c15f983c6a473904d5147e04"],["/tags/struts2/index.html","2588980c030cea78123deabcaec2aaba"],["/tags/thymeleaf/index.html","f342ec2175ed134683767c816d32ad07"],["/tags/tomcat/index.html","9a1833040941e8d0dbd7804bd4a115db"],["/tags/内网穿透/index.html","23757d2d89a0e846ac117fd4de2f7d3c"],["/tags/小技巧/index.html","0107824c56a2e9c8591392d731f51034"],["/tags/插件/index.html","f306bec1a20b3a75f25b702c7395a192"],["/tags/爬虫/index.html","74491c03f55d5633e1f39402fc740bcc"],["/tags/百度云/index.html","2a049070cbbf03d3cb33f1c849ad4534"],["/tags/端口映射/index.html","97c2f7b1c25d1bef559604b993754497"],["/tags/高速下载/index.html","1d467ad811a36a493f36302e25f8a56f"],["/xianbao/css/activities.css","57cc2b4ff27443c3c9c92572e9ff68c5"],["/xianbao/index.html","56e6ef5c6add585f2791118403414a85"],["/xianbao/js/activities.js","b1ba30d863ef735866515d26541cc507"],["/测试/index.html","4d46c1b42a5858acb53e4aade363b158"]];
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
