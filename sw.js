/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/163/css/bootstrap.min.css","4eb7e3a7a7121c4a11f2daffd3fb39a0"],["/163/images/bg.jpg","5ac5da1b493c4c24aa958cf7675a0bd5"],["/163/index.html","ae94b9765aad163651025a5b5cde1e56"],["/163/js/bootstrap.min.js","4967232dd6018523eaea36b219c7a629"],["/2019/07/20/2019年7月20日/index.html","0de0eca36066efcb3b2559c62376c550"],["/2019/07/20/Spring入门学习/index.html","b74d44b07fd49ef3f8be2dc727ff7c22"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","ec8b4b5e88a1354e5dbfb2ab2317b06c"],["/2019/08/04/Struts2的执行流程分析/index.html","86f10957776b03e82b8cce0ea2820c27"],["/2019/08/17/Struts2的拦截器栈/index.html","c14a4af8af2ca498327ecbbd59e53896"],["/2019/08/20/ognl表达式和值栈/index.html","1721149c88bc03434f53b33b2fa8f2e5"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","888fe9f072606ff7a64f403c768c99eb"],["/2019/09/01/Untitled/index.html","a1ab43eb4625ef1b1edcbf9003494271"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","14435da90fa41ec3dfab5a83b19a9378"],["/2019/09/06/MybatisUtils工具类/index.html","43ed861515a5fc3b072455fc4ec32c43"],["/2019/09/06/Mybatis使用注解入门案例/index.html","266e526bf516d545fc54c149d8c486c1"],["/2019/09/11/Git笔记/index.html","32fd1c27f2df05b3961e9dc157ccdf50"],["/2019/09/11/MyBatis的动态SQL/index.html","a2eae09545403effea537dd561791e9a"],["/2019/09/14/安装Docker/index.html","7b990495ca164e9c31caccaa6333b5db"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","b1d6d8870dcfc7fdf9f31ed4d8f8cf66"],["/2019/09/21/linux服务器和tomcat部署/index.html","2e4fb15bea57cbd5307bb717c866a519"],["/2019/09/21/maven创建spring入门项目/index.html","ef2aa8e1ac3f451535c57b92029815ff"],["/2019/09/23/mybatis多对一、一对多查询/index.html","76a90edae56f98b5a9d6572dea58bb49"],["/2019/10/08/Maven入门学习/index.html","83b1d86260e90f14f40c21d7966b080c"],["/2019/10/09/CentOS安装Dokcer/index.html","101791412e96e3f156e01db627632f1d"],["/2019/10/09/docker学习的入门/index.html","57942585876a215648f6f295c7d046ce"],["/2019/10/09/linux常用命令/index.html","10558719d525c25cbe1aed18ff898b86"],["/2019/10/10/mybatis单表的嵌套查询/index.html","0c38d4de68f8f8590525691593609062"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","919b17a3215db44b6c7a3215d92a860a"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","42b1cab45af956f53188bb180b176b6a"],["/2019/10/23/docker安装mysql/index.html","2bcee80a063c30d2e366b16e704acf94"],["/2019/10/24/Spring的属性注入/index.html","96f95dbd80850eccef78815f4caa46e7"],["/2019/10/25/模拟电梯系统（java）/index.html","57bcd02c857ea610eb1c344fc744c8c4"],["/2019/10/26/Docker学习之二/index.html","c79666b734ea65f7a598231806d286da"],["/2019/10/28/Oracle数据库例题/index.html","eacf73e1b1719c40ef3fdbda0ef98e14"],["/2019/10/28/linux端口映射工具/index.html","fa7971da2a40e58a5f4bd290808aff81"],["/2019/10/29/Untitled/index.html","ec105db6276226cbc69e4ee2b3862785"],["/2019/10/31/Spring-AOP学习之（二）/index.html","0cf16e2cd81e72925ed6db559caea47c"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","e4cc9499cc899f12cda15e3babb302d9"],["/2019/11/02/MyBatis与Spring的整合/index.html","547ceca8833879f9607dd1ad78961b83"],["/2019/11/02/Spring的事务管理/index.html","e4789adc74c3a2ecd757ee29f0fb4b02"],["/2019/11/03/SpringMVC入门学习-一/index.html","db9dd5e4fa94f0b1ac62412cfb9f73d0"],["/2019/11/06/SpringMVC入门学习-三/index.html","a9004c44cbff7aaeb0d1e6ea28023cde"],["/2019/11/06/SpringMVC入门学习-二/index.html","17b2395780f96b9a97fd9bb2a9a3f7b2"],["/2019/11/13/frp内网穿透/index.html","d9f857ad6d6d43ebfe1824cc65622320"],["/2019/11/15/Spring-MVC入门学习-五/index.html","cc738c7824829ebb1a8f994e53c0e9a6"],["/2019/11/15/Spring-MVC入门学习-四/index.html","af1243ff2d719222842a40d4d7756af6"],["/2019/11/15/pageHelper分页插件初体验/index.html","0367993d2dfbf3da1ff00dcc7a118a7a"],["/2019/11/19/使用IDEA将ssm项目模块化/index.html","ce8b9cebc9a8bc351a1e26bcec5da73a"],["/2019/11/21/MySQL-8-0安装与操作指南/index.html","4d5db51c0b85d02b9f8db1b93459ee77"],["/2019/11/26/SpringBoot相关知识/index.html","63af577a6a2b7daa04fcf13bb0ef9c30"],["/2019/11/26/在servlet中使用thymeleaf/index.html","42d16d765b3cffd73dbecc9086957f60"],["/2019/11/26/基于springboot对thymeleaf的使用/index.html","be0296a555d84f744fe88cf98b295920"],["/2019/12/17/Github搜索技巧和Cron表达式/index.html","3765a3c3b7b2e4b90c0b828dcbccf23a"],["/about/index.html","01953e861c7173ccd305e1e124ce20fc"],["/api/index.html","a32c819712842e9bf94e30e73a41eecc"],["/archives/2019/07/index.html","eaec3abafb6b575dff2c087b5ce78d42"],["/archives/2019/08/index.html","104a7d2f41328605aa755d1c37b9cbc0"],["/archives/2019/09/index.html","97f01cc8d0d9cfba64a0527edc04d3a4"],["/archives/2019/09/page/2/index.html","bca9f39a583b3b6bd1774e4ca2d33dbd"],["/archives/2019/10/index.html","04f957739fe9d09c10be3c1337fa36a8"],["/archives/2019/10/page/2/index.html","817724f2ab5468385dafef2195deb6ca"],["/archives/2019/11/index.html","9f01f60c86df6943f329f15706d1ecc9"],["/archives/2019/11/page/2/index.html","f30597760ab900fb7ccd762eda5830b7"],["/archives/2019/12/index.html","5ae93228bbe94605027b732d3df324ff"],["/archives/2019/index.html","7d9a795e15f5befa55bb46ccb164033f"],["/archives/2019/page/2/index.html","61e388962a250c52d164e0d2517ffdc6"],["/archives/2019/page/3/index.html","95fc02a20c25e3857cd6bb80960c79bb"],["/archives/2019/page/4/index.html","00f8ce417a8ce349e37f7322ca4a3a41"],["/archives/2019/page/5/index.html","7a87732e006356692a78695e9cc2bf30"],["/archives/index.html","81cf867c2c2260f09c2855ec8894234f"],["/archives/page/2/index.html","0983bf06ff01bc3ffe386ba6acfc1d5c"],["/archives/page/3/index.html","30e615831f7ec796318eee4d36da332e"],["/archives/page/4/index.html","28837b65d5c9d983e894e9773a0005c6"],["/archives/page/5/index.html","d1ca815ea9cdf2cad8ecd5ff62f65cba"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","09875d30133f880642bcb401fc4ea4e1"],["/categories/git/index.html","b24a49bfcced5c11ba308c7dc09ef04e"],["/categories/github/index.html","2ac3e94e13dbe3773fa9be8686d7d92f"],["/categories/index.html","dc6de9a653ed600c88a3ae8800d3e499"],["/categories/java基础/index.html","d0ee0b7072001b530d9bf34845f3e8d5"],["/categories/linux/index.html","9580477a8b39105660b3dafda0c4dae3"],["/categories/linux/tomcat/index.html","8c79b3cb7813b7ce01261a8cc860f91b"],["/categories/maven/index.html","66e437a4fbbd7cbda21b6bf46c169434"],["/categories/mybatis/index.html","aba63aadd38aadd50df54fce1a6eb976"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","86eeadebc2d59ca843b050bc7ee4709a"],["/categories/oracle/index.html","90c1c4c624fcc8265d033bb34dc6defc"],["/categories/spring/index.html","47827b0d8e93ba89ca4a01f95a5ad66f"],["/categories/springboot/index.html","462cc99677f82ae4a3678d6cce3e41b1"],["/categories/springmvc/index.html","9ade618b4643a568cb4dbe3836c0f89c"],["/categories/struts2/index.html","a8d49bd06371ee4433251c15282be390"],["/categories/框架/page/2/index.html","4864f40a56dd0d6fcecce4f4e3906dfe"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","cababb1e4634767a98354db2cee2e794"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/计算机网络/index.html","11be9a10bd68e32501f8ff5968106d00"],["/categories/高速下载相关/index.html","feee75ab6544956939a76b8a5e7a3169"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/jitang.css","a1cc8656401f2aa05f2b0a7f1317f9ce"],["/css/main.css","b64293039150b85b52281359e1f5c507"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/css/xiantiao.css","4f6b3e147eca46e845c451e78fa7864b"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1028f51006b4a806028acf217dec8896"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","71d088c26037a1ab40823526c8251465"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","56aec0cb094e1e8c057cf05ee1f3ed04"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","effa8746add2feabfa9731c6f8a31068"],["/js/src/algolia-search.js","25b12da01670396a0ac91903bb5aecd9"],["/js/src/bootstrap.js","2588385437dc6666d727ce6d3e6eb3fd"],["/js/src/clipboard-use.js","84e17c2ef384db5971b02634d0661c04"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","4937ff887306cd2f90db7ce2c18b77d2"],["/js/src/exturl.js","d82b1189f7dc5de33f9eec6f734fd128"],["/js/src/hook-duoshuo.js","0b2699173c61caa830952f10cde4fc56"],["/js/src/instantclick.js","0d55a9f44fc03fa144cdc4097bf519f6"],["/js/src/jitang.js","c99cc0bddb5b438eeff98df253d4175e"],["/js/src/js.cookie.js","ace6bff236b341ca57ca25f948930890"],["/js/src/motion.js","43e83d77a65782fca2885a7c69db2c5c"],["/js/src/post-details.js","314eaa9e75c3c5a482f3d778a9b513ae"],["/js/src/schemes/pisces.js","5e7051a250bd3676e58dc2cdfbc784cf"],["/js/src/scroll-cookie.js","2388811d5a1233862bfe6070cb94a1f2"],["/js/src/scrollspy.js","606d6f77ee3038d513faaf2b9c541842"],["/js/src/utils.js","32e445c798d0e0b28283821d1c2eb69b"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","5cd68c0a0eec3fdd39b799168c43c668"],["/lib/Han/dist/han.js","ea44df868240c77f84d19f00983f2e40"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","7aef38eed0beaf3d9d8313e77e16e84c"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","8be7e8839ce430d8f013e46831872ca3"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","15eb5e4f230c0c6e8007e6a1b0e9656f"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","356aaf74b04e1e92dbe7ff02ca2499b9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2677c204f52b52e6b0bbadbbbf637a71"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","b7c9f19e7e05aaedb0f11e17347e8a57"],["/lib/fancybox/source/jquery.fancybox.css","b767f3638833762f5c44f2921df2a3c1"],["/lib/fancybox/source/jquery.fancybox.js","ff4d880246e04c591b0499e62f3601ac"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","1c8b46a934f0ab0f03f6143c479c3cfe"],["/lib/fastclick/lib/fastclick.js","f58be18560cc1fa5578733b745d25d94"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","acdd56345d27b39060f8c5f4854bc7a2"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","307fc884e2c8bb19a347ad703550ada1"],["/lib/jquery_lazyload/README.html","8444a704d60413366636d2e7c8e5c24f"],["/lib/jquery_lazyload/jquery.lazyload.js","d14a0683728ff3216fc18d76310b8572"],["/lib/jquery_lazyload/jquery.scrollstop.js","9cfea489202d9296cd1c03bcbd41e7ea"],["/lib/needsharebutton/font-embedded.css","1ac5ade532c6a4d1fceb6340f45990a8"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","a20cc6decfe61e1c891eab910913957e"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","231c3808fbfdf4229e52af8084828c13"],["/lib/velocity/velocity.js","159338fc8ad5cc59e98f1421094d12fa"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a186b7d14fa3790eb5345d963c01e101"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/one/css/oneProblem.css","d9b7f468585c05b41e21459f4eaa0cf8"],["/one/index.html","c977f5970cfab3eeaad80320501e4ef9"],["/one/js/oneProblem.js","94b493bc7a6e6cfc553564d2ffe3b9fc"],["/page/2/index.html","272f0dd60205985fabde6574b11613e4"],["/page/3/index.html","8b429dfddf0114af60b8b289646ce0fc"],["/page/4/index.html","de28adb8482aaf0dc0040062f164ea56"],["/page/5/index.html","0563dc2bf3979ac88e0be9f761f04570"],["/static/api/css/imgshare.css","d76353f08e6e58f86c9d8ad6c7fe7b0b"],["/static/api/css/like.css","dfbdc5c611c02bd609b5ce08e96eefd2"],["/static/api/css/select_share.css","ab1158e6ca6b0b96e5df7f855283cdc7"],["/static/api/css/share_popup.css","f3495d3519de998dc2c90df25d9a9bdd"],["/static/api/css/share_style0_16.css","cc34a6ac6e2fe4144b2f985975e2b852"],["/static/api/css/share_style0_24.css","a6704c49e4b8831016f5e86806cca3a4"],["/static/api/css/share_style0_32.css","65474679bae4f06c92d221e7f89033fe"],["/static/api/css/share_style1_16.css","ed7bc8462620b79107c86f6013371643"],["/static/api/css/share_style1_24.css","39c629b278f2761ebdfdbeadf5681a35"],["/static/api/css/share_style1_32.css","31f07076b2a4e2ae8530839db5c18cef"],["/static/api/css/share_style2.css","17babd96d73014eb795289c3e5c49e65"],["/static/api/css/share_style2_16.css","edcc6554cbd433fc4016b70a7b1b0887"],["/static/api/css/share_style2_24.css","b18861ab332ceee83ff8e9065d4bce11"],["/static/api/css/share_style2_32.css","d3514a275cb48797efadfdb46bcffef2"],["/static/api/css/share_style4.css","0995acb61acfbfd3a38ccc1fe87270e6"],["/static/api/css/slide_share.css","10ea9e06b47cfccbe4b7609fe4276c60"],["/static/api/css/weixin_popup.css","45f25c97b1977c5668b1b7f0b039295b"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","3a16b16002c842e32e1e310b6003d445"],["/static/api/js/base/tangram.js","9ba2d76a0413a09900352128d3c57faf"],["/static/api/js/component/animate.js","c9b47b2121286784156f38e65d7f6bac"],["/static/api/js/component/anticheat.js","f6b99b2c5d3e9ccc42212791025c3a56"],["/static/api/js/component/comm_tools.js","c08b1791165a6ed8f01dbabdc0258100"],["/static/api/js/component/partners.js","bfe8e99b984c477dd58946b0221c2200"],["/static/api/js/component/pop_base.js","d579c8a8f3bb96bfbad7575d4a3d29cb"],["/static/api/js/component/pop_dialog.js","1ee647a4cafcdc6f21efa4c3a082da15"],["/static/api/js/component/pop_popup.js","b12bbf0b120ca2c610fcad27ad57b089"],["/static/api/js/component/pop_popup_slide.js","0d8cbd8a7f32f83ca40e3411ca011cc1"],["/static/api/js/component/qrcode.js","09b910805aa7c9e62df38031b0982077"],["/static/api/js/conf/const.js","2f602730d191cc8f6506659550779b6c"],["/static/api/js/conf/define.js","f6ef253be4cd2faa6d5f8638980448d3"],["/static/api/js/share.js","05f54eb42e9940b5870ee760a7562daa"],["/static/api/js/share/api_base.js","d0b862ae34e9168ca4c423683f10e9b1"],["/static/api/js/share/combine_api.js","ccf9c46aff8ab3a9aa33c51ee69e644b"],["/static/api/js/share/image_api.js","c63f66aa5441989b1bb3581c0900952a"],["/static/api/js/share/like_api.js","b3ab9b65d760aefa38393965084dd6cd"],["/static/api/js/share/likeshare.js","713efeffd9528def65a78302495a89fd"],["/static/api/js/share/select_api.js","a864a76e374fbf1f951538b1784385a4"],["/static/api/js/share/share_api.js","842c86b711e46c90096a5cc9f4f245af"],["/static/api/js/share/slide_api.js","f4c8bbda1d382b926b7e700c7f9278fd"],["/static/api/js/start/router.js","240514020cf0329aa16ff97e382f9809"],["/static/api/js/trans/data.js","713efeffd9528def65a78302495a89fd"],["/static/api/js/trans/logger.js","713efeffd9528def65a78302495a89fd"],["/static/api/js/trans/trans.js","ac6354ab2ec410f3b808a0d27a526fcc"],["/static/api/js/trans/trans_bdxc.js","bd3e21b2dfa406f2a345b32ef2a04212"],["/static/api/js/trans/trans_bdysc.js","04683e8993893c59c6ce1637c36f50ca"],["/static/api/js/trans/trans_weixin.js","0b6b526b4be3272562856dda2e74fe68"],["/static/api/js/view/image_view.js","2e3de69d043d27a7deeea2c3ce01e09f"],["/static/api/js/view/like_view.js","45616246867588cea6a1d91ae62dfbd0"],["/static/api/js/view/select_view.js","846c34f28a1b4e2f83afbd8bb806c1a6"],["/static/api/js/view/share_view.js","b835ee69b8902b94aac4c49edb4c18d9"],["/static/api/js/view/slide_view.js","b560fe01668113bdb9f46df6996f7c01"],["/static/api/js/view/view_base.js","09b6328765bd94b90e2f7dd4c5ba8956"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","e402c966a94fad75a20eb6b7c470832b"],["/tags/Spring-MVC/index.html","901792c77b13dc41f5b6c1e17ac2d610"],["/tags/cron/index.html","1a947a612e9a286ae4c93f56287c5fa9"],["/tags/docker/index.html","b970803edda16f17919b6840f9b1685d"],["/tags/frp/index.html","4f5070a4f0e42ee6b2d6f7e76c517829"],["/tags/git/index.html","d87969fa21000163ec468ae8ce3f7fd1"],["/tags/github/index.html","1b91398275e955390d0722d65b6ae324"],["/tags/index.html","cb1a0e7f28a1782399b3a4e6a51963d0"],["/tags/java/index.html","35fab6dbb64183f18f0d2f60a23436c3"],["/tags/java/page/2/index.html","ba02c6187a989207033409c8d9ff3b77"],["/tags/linux/index.html","0e164be33cda6610ef012c7047ae271e"],["/tags/maven/index.html","94049f14e0c6781516c804f2ad57a092"],["/tags/mybatis/index.html","c4da27c37c42a76874036f1f2a5ddb80"],["/tags/mysql/index.html","ff97f503747370c7beaf00f3e53b3dd5"],["/tags/oracle/index.html","d621faa1e9cbdcdb17c3d15c8a77dbdc"],["/tags/pageHelper/index.html","e061b14c128513140b4b2f8f27ca30ca"],["/tags/scrapy/index.html","54639fbeb5f0d6cda66b19d674b55f91"],["/tags/spring/index.html","0e5b6ba53ebd3b1996bf953bf449e22c"],["/tags/springboot/index.html","77e169a561b6d888d0538766f1b69fdb"],["/tags/springmvc/index.html","cccbf5165f9cbe0fd47d35fe447e090f"],["/tags/ssm/index.html","39848f5c54fa719122f5ee06780aace6"],["/tags/struts2/index.html","2cb5363357dd2ca136a5a3f951dbb815"],["/tags/thymeleaf/index.html","535c551f51492eeab13092cc8ad97263"],["/tags/tomcat/index.html","b20af8fac8592885d732fb58cbaf9ee6"],["/tags/内网穿透/index.html","b145dfb91bba900029199f46d8658f18"],["/tags/小技巧/index.html","92a92b2bde285137721e41954c618aae"],["/tags/插件/index.html","4e90b81d33b5d2312f039530fb7d3a2c"],["/tags/爬虫/index.html","d453be14883c435bd698d6fa627b0187"],["/tags/百度云/index.html","089f6ebe0fc4660aa0eaf59b08f90207"],["/tags/端口映射/index.html","af2dab275df11486af4c312d5d66b46e"],["/tags/高速下载/index.html","b67f963e48961976f5c9babcd06869cc"],["/xianbao/css/activities.css","fe34b1eefd1fce48a5a5f3c1b28cdf49"],["/xianbao/index.html","be72fbb88785af930ce3a385f7e49dd9"],["/xianbao/js/activities.js","599f76d3b19aaee601b93fbe105f5756"],["/测试/index.html","f85711af6f231199e56ceaec254d448d"]];
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
