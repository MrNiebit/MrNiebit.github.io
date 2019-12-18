/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/163/css/bootstrap.min.css","4eb7e3a7a7121c4a11f2daffd3fb39a0"],["/163/images/bg.jpg","5ac5da1b493c4c24aa958cf7675a0bd5"],["/163/index.html","ae94b9765aad163651025a5b5cde1e56"],["/163/js/bootstrap.min.js","4967232dd6018523eaea36b219c7a629"],["/2019/07/20/2019年7月20日/index.html","e072da86bc7dd701d0128d592730a23b"],["/2019/07/20/Spring入门学习/index.html","b4765925b152abb20aac8369a32ab0bb"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","6f260cf0fde6647ef3b889c2c5fd16fb"],["/2019/08/04/Struts2的执行流程分析/index.html","73eceace99d7b3697748e7789f7ed490"],["/2019/08/17/Struts2的拦截器栈/index.html","1f6472bff03aa42e852ff7e807a8ea70"],["/2019/08/20/ognl表达式和值栈/index.html","9deb5c4354ce449daafa3ca0e89ffdb2"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","5d0ee2b270d4676cbedd55bed451ba31"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","e19cf75b47de107c04507a2178dc45f3"],["/2019/09/06/MybatisUtils工具类/index.html","e10099e5b0d61836d1f167a2b02515ed"],["/2019/09/06/Mybatis使用注解入门案例/index.html","ac9d7a28779692e8b7eca1ce0f8e1da9"],["/2019/09/11/Git笔记/index.html","e59703549dae853c0a67f1e2c37f2709"],["/2019/09/11/MyBatis的动态SQL/index.html","7ca11a9ac4c9faac2381cbce547dc509"],["/2019/09/14/安装Docker/index.html","9db9956c6f99200332965ba09a09f684"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","224797cbb1c2d757e2594d31d879ad17"],["/2019/09/21/linux服务器和tomcat部署/index.html","9d85e050e776c80eb1a89374a5638b3b"],["/2019/09/21/maven创建spring入门项目/index.html","118a9a28a00a01dcfa363604ea103391"],["/2019/09/23/mybatis多对一、一对多查询/index.html","40b61d5c9e6ff2fdaddbaf3b25685ad0"],["/2019/10/08/Maven入门学习/index.html","580d3ebc234cd5c8bf771671fc1fc5c0"],["/2019/10/09/CentOS安装Dokcer/index.html","a70d5a827af82cb7df9b03fc8bf2987f"],["/2019/10/09/docker学习的入门/index.html","55d18deb3c3018a8692d403695956eb8"],["/2019/10/09/linux常用命令/index.html","9cc891a739b66c258eae13eff6193297"],["/2019/10/10/mybatis单表的嵌套查询/index.html","e966269ffa2701fed7b34235d3e240db"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","d8456aff045725e91dc8a3ade0f76d05"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","a0256cc98350520c611821a85fec2854"],["/2019/10/23/docker安装mysql/index.html","47d94890baafd5a5840673fa3e11acc3"],["/2019/10/24/Spring的属性注入/index.html","6a7050b87a62c4efbdf85a8c699f4b4d"],["/2019/10/25/模拟电梯系统（java）/index.html","a89eb1bd8f13ebfbd21ff780498d9243"],["/2019/10/26/Docker学习之二/index.html","fb30a598ec814df6e152a0981a546f57"],["/2019/10/28/Oracle数据库例题/index.html","5d3f870e18a33cf4c53876bd0c6fbb87"],["/2019/10/28/linux端口映射工具/index.html","287d823f39025f94b7572738c315e097"],["/2019/10/29/Untitled/index.html","1443983a54d34bfacde05bbd56981821"],["/2019/10/31/Spring-AOP学习之（二）/index.html","6468c4e4a38c2d06733235dff2a30076"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","1bfd0394bed0ec7167e18026fef4714f"],["/2019/11/02/MyBatis与Spring的整合/index.html","977fb262e89df8392af8808f0030a8ea"],["/2019/11/02/Spring的事务管理/index.html","65e775497a26109dd6bb7d587a10af5b"],["/2019/11/03/SpringMVC入门学习-一/index.html","801c77a62dd34d27fd019b4395d5d122"],["/2019/11/06/SpringMVC入门学习-三/index.html","149a0dae67fafc965c009b38aa5b7ab8"],["/2019/11/06/SpringMVC入门学习-二/index.html","54984815c1686d88846ad43d9bbd58be"],["/2019/11/13/frp内网穿透/index.html","20c5ed0b5c8751f79ad79c7c7fb0ddc5"],["/2019/11/15/Spring-MVC入门学习-五/index.html","2a664711cdb9891920d00b79064bf6f7"],["/2019/11/15/Spring-MVC入门学习-四/index.html","753e0bb93bf58a32a48616adf43b694d"],["/2019/11/15/pageHelper分页插件初体验/index.html","d06a58bdafa7d3c8cbbde30ff255af30"],["/2019/11/19/使用IDEA将ssm项目模块化/index.html","fbe3b883bf19689d5ab27bd65a5e04b4"],["/2019/11/21/MySQL-8-0安装与操作指南/index.html","11e4f210f6595520c112695a5a68cfbf"],["/2019/11/26/SpringBoot相关知识/index.html","77dffb8000db0e7ff58a869a8f0540d5"],["/2019/11/26/在servlet中使用thymeleaf/index.html","682948826cb947d05e48f308e066cbd6"],["/2019/11/26/基于springboot对thymeleaf的使用/index.html","a120edc8759b118222f7e4e0f412f835"],["/2019/12/17/Github搜索技巧和Cron表达式/index.html","c9fa5092af6b8ad45e351fadb83f0ca3"],["/about/index.html","87f3f61cd47a4fd7e314344b6f380f58"],["/api/index.html","b9a44b81c33562bc5a9a9b0cdc9d01de"],["/archives/2019/07/index.html","a165173c349fddccae2ed547739e6e22"],["/archives/2019/08/index.html","8124bafa0044e41e3cbb015e0e800442"],["/archives/2019/09/index.html","bd79055a0f6c9e5b50e78463e5bc0de6"],["/archives/2019/10/index.html","b6349a6472b2e69772eedff44829149b"],["/archives/2019/10/page/2/index.html","ad97ddff5e54f54589b90aceb507ee20"],["/archives/2019/11/index.html","fdc5b3f2b6b8bafe8aceec9e7a7b7583"],["/archives/2019/11/page/2/index.html","724448b7a41ce74bedc922a9e789cfc0"],["/archives/2019/12/index.html","0ce8f4a744ae3da3220e8bfa4a884f13"],["/archives/2019/index.html","f6110836032d8821f15e3f2c69bab95e"],["/archives/2019/page/2/index.html","a844a135f93fc435139901225ee27c0a"],["/archives/2019/page/3/index.html","bba9f9787bc2ef25f9a0b9c4d1101189"],["/archives/2019/page/4/index.html","6060f5a9755a111a7973e9a65e1f81be"],["/archives/2019/page/5/index.html","f3b9146a0f2612aa6653ab4886915867"],["/archives/index.html","d38d94b7c94196d30f9031465c68d1f7"],["/archives/page/2/index.html","64c8f1b9bdcfdcaecf65f4fe69fb058d"],["/archives/page/3/index.html","66f051823fea5390aae28dce218b124a"],["/archives/page/4/index.html","79e2d589c3e08444566da5bdacef5eef"],["/archives/page/5/index.html","c254c0db65f340ff55784ec789e5b9b1"],["/categories/docker/index.html","18064c62ead38629f5aecdd65555e4aa"],["/categories/git/index.html","6365362ab84d5d3d67a6c1661b886be1"],["/categories/github/index.html","4d4ce76671cc4c6426a2797b6b889f48"],["/categories/index.html","6a31bc6e6fdbd53a85ba639db2ffe101"],["/categories/java基础/index.html","61afcd0e7c6c7bec2f1154ed1e481b1c"],["/categories/linux/index.html","76bf7faebb2aec00f6cc0b726328ece8"],["/categories/linux/tomcat/index.html","c9670b9a8ea30f89d59ae3cd7e068847"],["/categories/maven/index.html","72843a51e8713d5092154b1375aab232"],["/categories/mybatis/index.html","88f131b490d819b99d0769104d232d80"],["/categories/mysql/index.html","2a0236bb08f5af1d21eb3d5f2fc36d9e"],["/categories/oracle/index.html","bcbf1f14a84257d822447469e790311c"],["/categories/spring/index.html","52004ba30a32ba047603eec24044dc2e"],["/categories/springboot/index.html","97b09274f4c51842724f02b0e5cfb118"],["/categories/springmvc/index.html","d4d9d703b8194ad64ad25042758d452d"],["/categories/struts2/index.html","e61fd89734f99a29e31a92ef2ba7cc1b"],["/categories/爬虫/index.html","214d73347b0c49ce81214fc807d70cdd"],["/categories/计算机网络/index.html","87f931ceff85da0bb7f04215c6e8f144"],["/categories/高速下载相关/index.html","5544ff075a643a69cd43e30ef12bc279"],["/css/main.css","230e1553f994ae4b013e42c768726c12"],["/css/xiantiao.css","8edee946fd04ceaee18da81df1bd01bb"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","0893673a5379d68854f753577fea8e1b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","9b93a6a8d54e4c7c9be65f8c4b30cb33"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","63f54acc23bfd42a7c1a152e450b94a1"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","33ee06c68ecfff208b5ae726d9ba7912"],["/js/src/algolia-search.js","0cc3f51aad18ad4413e1138ba11fe650"],["/js/src/bootstrap.js","5987c982d419fb491d1e34e50170873a"],["/js/src/clipboard-use.js","1e6486c8fa76b4bab0ce9c63c594d454"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","94a08a7a643b779208f9884b9da78016"],["/js/src/exturl.js","993756b59db7d715980988e9de44bb5f"],["/js/src/hook-duoshuo.js","82a57e796eea4c4a588c8ccee7c7c5f9"],["/js/src/instantclick.js","4bbe2b96de6038c15e84d2e14fd8dccc"],["/js/src/jitang.js","0ccd6eb5c3a7d1953a252392fdd52346"],["/js/src/js.cookie.js","ea63fdfb85a5cf9c9ea67540c91f2bf8"],["/js/src/motion.js","acd220606677b5c1dd2cd604e7137331"],["/js/src/post-details.js","604b668afd3aab0c7af020bb65f9d553"],["/js/src/schemes/pisces.js","2358edd068106614083cf00cfa11d19b"],["/js/src/scroll-cookie.js","aff00981510b33c82beb4ca17f510f7e"],["/js/src/scrollspy.js","1fab8816d0f8a18388fca8216f4a33bc"],["/js/src/utils.js","745e6eceb6a8bad252b86ea94fe17ece"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","78873eefe03c9b6524972eab4f60774e"],["/lib/Han/dist/han.js","e7aa4667c61aa45cf0fe48134dcf21bb"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","7efe3b6e33f226cf3f9459645c50fdc2"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","f9451971840d2a6bc36c68ba4cdabf88"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","8fb1a414d7b0a0997cfd2affe9e7439e"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","740de0ac66db9caf038dda12bc919853"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2f7a4f76f3f22eb17fc1e375cd8716c8"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d753c19193362a8dfa752ad18f8085b3"],["/lib/fancybox/source/jquery.fancybox.css","6407a2fac46a4dd9cc3ae6386e054314"],["/lib/fancybox/source/jquery.fancybox.js","31acaf109000c1225effda8848dd3a41"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","d5faa6e40d2e3208f66037f961287add"],["/lib/fastclick/lib/fastclick.js","2dff5683d9c47aec3b7248f24a1c67cd"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","e1e513c8ad37cd1521c3cd192f7ea035"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","21a278ec8a5268ff4ef1e4d4fa31620e"],["/lib/jquery_lazyload/README.html","c5930fa409a8804110ab94ce6fefe9a2"],["/lib/jquery_lazyload/jquery.lazyload.js","21ac583abeae89935045dad083352763"],["/lib/jquery_lazyload/jquery.scrollstop.js","f98a35c5dfbcacd04cd7070dcb2920ee"],["/lib/needsharebutton/font-embedded.css","17c55d9bff0eb149cee037e5d4b87749"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","053687920bdfdb0daf5be49072255d61"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6ffa7560322801085aee30aa8b274027"],["/lib/velocity/velocity.js","248e3ba4b723f3c52cfb8d4f02663ca8"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","38945c6bdb8dcd5ed0183f366f86207e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/one/css/oneProblem.css","9a8cc8b1006cfa114a7b839e70936187"],["/one/index.html","16e43b50e3aff2468ced0529f40b3475"],["/one/js/oneProblem.js","40d1cecea0e38ba0023b1281ea209747"],["/page/2/index.html","1eec56e99cd137483f236c00893fecc0"],["/page/3/index.html","6c40df04e66ae17245b7f33b7c16fa41"],["/page/4/index.html","81b151f18a580cba98ac831be07e1af5"],["/page/5/index.html","aded51e9193d976d054aa057ce44b597"],["/static/api/css/imgshare.css","f1d1ba2d168e5d32b081f7f742cf533c"],["/static/api/css/like.css","8ce2a0a4693f686ae30056d52a12fa82"],["/static/api/css/select_share.css","7c98f4ff269c1f988ac05817937cccca"],["/static/api/css/share_popup.css","30869b56f61012643ddd4a58d75ecde2"],["/static/api/css/share_style0_16.css","98cde5177c9ec12027cc8285ab8d25c6"],["/static/api/css/share_style0_24.css","a5ce1d070e4937a10a9e8a280c3f1454"],["/static/api/css/share_style0_32.css","92b7a9cc63b48d2a565e88fb27c424ae"],["/static/api/css/share_style1_16.css","d2626b97a3f27610ee31e7398d9005ac"],["/static/api/css/share_style1_24.css","de349bf52bc96eb4bf8748b4a62f3669"],["/static/api/css/share_style1_32.css","9132ad26d7cbbcd8eeb192354d8c43e0"],["/static/api/css/share_style2.css","bd705dcb064ecb962c23ac2a97639de2"],["/static/api/css/share_style2_16.css","d4c5c8c30cc548a3da5c41fe96834409"],["/static/api/css/share_style2_24.css","ade86ed2605b392ecc1c9b26c8aa01ac"],["/static/api/css/share_style2_32.css","01d5204e4d6a810b1099ea73152b82c0"],["/static/api/css/share_style4.css","6fd64fe6ca7990c501c44017fcab9aac"],["/static/api/css/slide_share.css","fb91a98d7ee256242ab4507bef00bad9"],["/static/api/css/weixin_popup.css","113f17eed28d307054be8e4375edf05f"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","2c7de7c0c4716b0335aa2e53470bb0c4"],["/static/api/js/base/tangram.js","79a20734d265c68e72f263f93b0f7c9c"],["/static/api/js/component/animate.js","2954a082524d0ce214b4d58f86ea9367"],["/static/api/js/component/anticheat.js","ed239d39a61eb486928197b8c9361901"],["/static/api/js/component/comm_tools.js","96e364118f7bb27c62b7e4e28bfa2ccb"],["/static/api/js/component/partners.js","4a18e03fb838b609a901f9ff0f0a2e77"],["/static/api/js/component/pop_base.js","719099ef24cfd4ca0b603835cdb4fad9"],["/static/api/js/component/pop_dialog.js","7e2b0ab8e01fb45627ba293b29a7eaea"],["/static/api/js/component/pop_popup.js","c6302e4095095981437271be1689b9f9"],["/static/api/js/component/pop_popup_slide.js","6bfc010b4124a38bf129f85b1ed1bddf"],["/static/api/js/component/qrcode.js","482164c60214efa31eed472b7b2a74e2"],["/static/api/js/conf/const.js","a306fd7c277c817f33eb45a0e24f9b83"],["/static/api/js/conf/define.js","59b032c3fc48764248b683add2368a00"],["/static/api/js/share.js","a9026a16fb2c5ad85dded236819df0d9"],["/static/api/js/share/api_base.js","42b6e554c14ef2dd647effa9306c9e71"],["/static/api/js/share/combine_api.js","4b1bcabb85478402550844b92fa2ab87"],["/static/api/js/share/image_api.js","69658c5427d27195b5c71be7058a97be"],["/static/api/js/share/like_api.js","60c11e52247090a96cbf23fb58f22a22"],["/static/api/js/share/likeshare.js","d63edc9095f3e8092846a309afaeb667"],["/static/api/js/share/select_api.js","8ccff41903ceff576699a7f11a289d96"],["/static/api/js/share/share_api.js","09557d72130d5588c6843e4a18478071"],["/static/api/js/share/slide_api.js","2fd72880fd71c483e881d773c4dbe3a9"],["/static/api/js/start/router.js","cd7afece8cb51d45982ea241cfc50c9a"],["/static/api/js/trans/data.js","d63edc9095f3e8092846a309afaeb667"],["/static/api/js/trans/logger.js","5340002dbda367ba6683bc1cb414c6f6"],["/static/api/js/trans/trans.js","b71407a4cd37f0084896cc0ded23250f"],["/static/api/js/trans/trans_bdxc.js","76ae95df35a2f17706d395cc2a7c3fef"],["/static/api/js/trans/trans_bdysc.js","540aaa6c6c327923b5cefcee9a7a1119"],["/static/api/js/trans/trans_weixin.js","142d841a3a52e76d72ae4a907a79c296"],["/static/api/js/view/image_view.js","db65415f61a1bf4674e73cfb0d429e03"],["/static/api/js/view/like_view.js","bafceb37e2543669e05e2613ffc3e09d"],["/static/api/js/view/select_view.js","45129344910f75addf8bd78d692c72f4"],["/static/api/js/view/share_view.js","15844dd1c255cd08f23e1886ac6f9ead"],["/static/api/js/view/slide_view.js","64fade2fed8a97e75ad2716f1d6306f3"],["/static/api/js/view/view_base.js","66f097debe3f23091405ff9898edf7e4"],["/sw-register.js","15bc5b4519a99682cf422e54c0b63c1c"],["/tags/Spring-MVC/index.html","58cc5c710fa0dbc3e5707a47892617b3"],["/tags/cron/index.html","d6016bead8cd32138a0eb02bdefcb12e"],["/tags/docker/index.html","9e739302bec47b939d9d0b8b1060e631"],["/tags/frp/index.html","7a12217722a71dfd21289ef168965f38"],["/tags/git/index.html","e4d46fe1c824e57626b6331c6b5e0925"],["/tags/github/index.html","35b0bfc85bf569cd9981f4ba3ac999ab"],["/tags/index.html","4b517d80285203dcccbfdc4cccfc7c47"],["/tags/java/index.html","3b9af934155deb49d605afa90fab4de7"],["/tags/java/page/2/index.html","2493e92ae53ecb72e2f24c09602f4b27"],["/tags/linux/index.html","77fda4b0cecd4e15ae43722f8a1266ae"],["/tags/maven/index.html","6bace04c858f973b4c46931946aa99b1"],["/tags/mybatis/index.html","5aa05cd9b570e807689cd8f8a0333590"],["/tags/mysql/index.html","e5d801d0ed5ab9eb06d816f20cec0fb8"],["/tags/oracle/index.html","f661525d20fed43ba80d06df887efe08"],["/tags/pageHelper/index.html","611394b4fe4cee771361e3b280882679"],["/tags/scrapy/index.html","14d02169f2fd4b1a593fe08afc0379a8"],["/tags/spring/index.html","fbddabeb6d22924a1a7fe5356d45fc84"],["/tags/springboot/index.html","4b03f6ff462d542848ace466ac0cb2d5"],["/tags/springmvc/index.html","49aa057316689dd1d865988f19db2ea6"],["/tags/ssm/index.html","e08d951d1508fe1147621c221f714160"],["/tags/struts2/index.html","0420f4799f232de4aaf192c546bd424e"],["/tags/thymeleaf/index.html","75d46ea94956d871472c6eb54d0b090a"],["/tags/tomcat/index.html","114b198cc2ec51b9896d4e9d814e9bd3"],["/tags/内网穿透/index.html","ee1057390a3788568912807982bce4e7"],["/tags/小技巧/index.html","038fd85e70d35a1ef0e5dd0d99ccac4b"],["/tags/插件/index.html","f130e4679c6474886ba2b241903fbdf1"],["/tags/爬虫/index.html","4587b850600a861d2d4ca49d45b3458e"],["/tags/百度云/index.html","d4308e87aec96cf0fef0b9f62dfa4cd0"],["/tags/端口映射/index.html","0c4927a77599a070ffa2819e1578a077"],["/tags/高速下载/index.html","ae014cfe334bbe4c4fb56167e7dd3cb8"],["/xianbao/css/activities.css","be50afac267fe530baa6471995aa402d"],["/xianbao/index.html","c584a494ab398b76eee1ba3163971290"],["/xianbao/js/activities.js","f1577e9aa8bde49cb132ec1cd618715e"],["/测试/index.html","4388f94a166a3b4b5566078187080df8"]];
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
