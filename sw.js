/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/163/css/bootstrap.min.css","4eb7e3a7a7121c4a11f2daffd3fb39a0"],["/163/images/bg.jpg","5ac5da1b493c4c24aa958cf7675a0bd5"],["/163/index.html","ae94b9765aad163651025a5b5cde1e56"],["/163/js/bootstrap.min.js","4967232dd6018523eaea36b219c7a629"],["/2019/07/20/2019年7月20日/index.html","9c008c76632d8ddd7488ce7dacd50549"],["/2019/07/20/Spring入门学习/index.html","1c992bceb44585534029611893a3eb8a"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","8d34fd5309b14ce603505e7a2ff52838"],["/2019/08/04/Struts2的执行流程分析/index.html","ff360121d17073c9a87ac6e113b0a9c0"],["/2019/08/17/Struts2的拦截器栈/index.html","eca1665f8031925ff7fb6139cc6b1234"],["/2019/08/20/ognl表达式和值栈/index.html","02fe85e94f20132d36fae06bb0b183a2"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","11da6913cc2cbad90f978da23d6f85bb"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","58974398f94dc7381bf47201f9d78033"],["/2019/09/06/MybatisUtils工具类/index.html","2c0ae2065790b42f745406361a162081"],["/2019/09/06/Mybatis使用注解入门案例/index.html","f294f3136f46f40386248092fbfa4103"],["/2019/09/11/Git笔记/index.html","f35d972ce92ec9f865f7638b3b8ecf99"],["/2019/09/11/MyBatis的动态SQL/index.html","316b07a500a9abd0d7e898ca17e5fe3c"],["/2019/09/14/安装Docker/index.html","f953da5264a4245fdef66c40f3d9866a"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","e11ec8b6c48635b7f3b2e70f614135eb"],["/2019/09/21/linux服务器和tomcat部署/index.html","d3299b5737d51d4221370ac5cfa54d9c"],["/2019/09/21/maven创建spring入门项目/index.html","00e18a2b198e5b4551ede367717a2988"],["/2019/09/23/mybatis多对一、一对多查询/index.html","a3e4b39c1595adb607a0a0a319c45a13"],["/2019/10/08/Maven入门学习/index.html","ba7668c023093df976588cc8c47baafe"],["/2019/10/09/CentOS安装Dokcer/index.html","04506eb237eccee86a91a04350f0aa39"],["/2019/10/09/docker学习的入门/index.html","644367e65826c1a200173334583e9b7f"],["/2019/10/09/linux常用命令/index.html","6daed10042489b5570d0d8e14f70e984"],["/2019/10/10/mybatis单表的嵌套查询/index.html","420645bdfb6faa4a0eb91fdf2cd29eb7"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","4b7dca3bb438914e672b8e74ed5c91cf"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","eac936f7b451fe572c477eff7bc80b58"],["/2019/10/23/docker安装mysql/index.html","373d60007801eb8863a1343e3cdadbb0"],["/2019/10/24/Spring的属性注入/index.html","db8cdd1c1078c44777a3e2dbcbc26f73"],["/2019/10/25/模拟电梯系统（java）/index.html","89fc86c75a3863a0dfcd738e17d5a6fc"],["/2019/10/26/Docker学习之二/index.html","b06c12dccf3973baeb5dd9d3325153c7"],["/2019/10/28/Oracle数据库例题/index.html","78c88816fbc5d33955f84ef71470bd7e"],["/2019/10/28/linux端口映射工具/index.html","61c8ca2cc0c7496f7c69403142e36572"],["/2019/10/29/Untitled/index.html","c59261480eb0793a281a841828e1c095"],["/2019/10/31/Spring-AOP学习之（二）/index.html","12816f61c26bfe0603a2c80275a9a3c5"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","169165106811136c1035fe4da492f660"],["/2019/11/02/MyBatis与Spring的整合/index.html","284b32f909d62834ec913042c5e31890"],["/2019/11/02/Spring的事务管理/index.html","5467f0f1960d406f297c05e8fe21aa6a"],["/2019/11/03/SpringMVC入门学习-一/index.html","be5ca7cf709291c862c67a051b973ad2"],["/2019/11/06/SpringMVC入门学习-三/index.html","bf48c455834f72d0989c9a690916d279"],["/2019/11/06/SpringMVC入门学习-二/index.html","6bef64a093128a742704cb5971bdc890"],["/2019/11/13/frp内网穿透/index.html","ae2e472ebd4027e3a90654d24d345ee0"],["/2019/11/15/Spring-MVC入门学习-五/index.html","d5cd721e2f68952c47acc06b9082f64a"],["/2019/11/15/Spring-MVC入门学习-四/index.html","4a43f03b5ea626a85ba59901e505b175"],["/2019/11/15/pageHelper分页插件初体验/index.html","f63e7fe9ebea54d55252d9dce7782f06"],["/2019/11/19/使用IDEA将ssm项目模块化/index.html","b002416b80e2ca6eae17037363cc3eea"],["/2019/11/21/MySQL-8-0安装与操作指南/index.html","e5a5295151b20f7bdde1dd0580538c84"],["/2019/11/26/SpringBoot相关知识/index.html","77c6837a43b97b9097715ed4bf69b751"],["/2019/11/26/在servlet中使用thymeleaf/index.html","c42106fb81016b2749fa655a1741ef43"],["/2019/11/26/基于springboot对thymeleaf的使用/index.html","dd1b799dd916e546a087343213b853c3"],["/2019/12/17/Github搜索技巧和Cron表达式/index.html","b86b6d88d37117b75cbf877bc6023c97"],["/about/index.html","869293c3d1bde5842d6b357757dea246"],["/api/index.html","a80ed268a644a58b52a09f0110e6ec58"],["/archives/2019/07/index.html","dbef8dae8ec24698437a8d50b07be536"],["/archives/2019/08/index.html","31a5782b4cc96ff1a67f38e314df09d8"],["/archives/2019/09/index.html","15571087561be1f36f84413c4ab43ff4"],["/archives/2019/10/index.html","fecd464936e4272366e6df2938da0e7c"],["/archives/2019/10/page/2/index.html","af41b91bc301b02d9936c0f54b604b7d"],["/archives/2019/11/index.html","cb8e37828b5e64a051c8268e5ad0ffb9"],["/archives/2019/11/page/2/index.html","ab61fe2776c291c566b50dd5da8bfd93"],["/archives/2019/12/index.html","b4722584bcb609297e7bb58e55ec605b"],["/archives/2019/index.html","ef1fa57a84aebf5067fa61a74424f6e0"],["/archives/2019/page/2/index.html","1095a382c67d0b2c2763dc8530eb1c36"],["/archives/2019/page/3/index.html","ed0db2a9d82f586ef5dd65e7389d5bcf"],["/archives/2019/page/4/index.html","30d52695a54f0cebb9a332204de9de8c"],["/archives/2019/page/5/index.html","20e6af2522569cfdd5d678a3b34d3453"],["/archives/index.html","f8612bcf015f2096aeb2f8a02f5a00d8"],["/archives/page/2/index.html","1682a0c0938e21604c4c23738e4c0bb3"],["/archives/page/3/index.html","6503c2b24fb0cebf6b4914c3cd8b4399"],["/archives/page/4/index.html","207dc9f06178d47551a8b1c0a7aa74c8"],["/archives/page/5/index.html","8ce24b2f329619e231ab5bd05ab69ca9"],["/categories/docker/index.html","aa9fe0a70b4ea0de32f2007a8529d5f4"],["/categories/git/index.html","dd995e395c1451b57c2e42c097b2eab6"],["/categories/github/index.html","d57715c500f904427ca25cb0c54feda3"],["/categories/index.html","7f6c1ff3070afd57021f325881bc7f1a"],["/categories/java基础/index.html","5b0bd4d425d7db0f1ab347db1f315e4b"],["/categories/linux/index.html","d30b1ab450e18978c4730ca35d39284b"],["/categories/linux/tomcat/index.html","bd697ffe33288e552f984ad00e823bbc"],["/categories/maven/index.html","a8d66700af9b17a446b911e80d450fd9"],["/categories/mybatis/index.html","4ec8e7e18591f02f6934e0227c205292"],["/categories/mysql/index.html","62f4ce6d303824c2fa72f85277f53a9f"],["/categories/oracle/index.html","4fdcc28584952c328545822da5a162fc"],["/categories/spring/index.html","ab3fa100388bd6cff2530b05bb193c44"],["/categories/springboot/index.html","783b64951d8322090b4832186eba27e5"],["/categories/springmvc/index.html","5b8467939893b38bde2e3b708fc39eef"],["/categories/struts2/index.html","a248994b9255c1186cb25b72b0616d5c"],["/categories/爬虫/index.html","a3c71b41214f35779e968f3221da6c8d"],["/categories/计算机网络/index.html","f81a5d9bdee57e6de14a3f008cb15c15"],["/categories/高速下载相关/index.html","3b3710c8bea3622ae7b261e030d4bf14"],["/css/jitang.css","cbc135c3bf003ae3f24b87e34d174536"],["/css/main.css","659c13af0c7c647726a8f99e8ff15bc3"],["/css/xiantiao.css","b5a77872c816da074d59fbfd9667e4f2"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","ce51fe03ca9f5601ce84a155fb29aa51"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","ede26725d26fd5f587777b61ab0e6471"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","2c892beaa1436832440b0a5fab84881e"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","b9d50be883a1771bcf4d432a29be75dd"],["/js/src/algolia-search.js","3d6146137298c34e3ea94b0f8495f1b0"],["/js/src/bootstrap.js","e1c87504e66b65cee3ddfec2a91decc3"],["/js/src/clipboard-use.js","49076700c479cc87f802f64a114d8fa5"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","575a93877dc692757895950aa2837251"],["/js/src/exturl.js","1ded0c45daa5e3058b4905de60f64aad"],["/js/src/hook-duoshuo.js","63d29bc3db85b070bab9936657ccf6c9"],["/js/src/instantclick.js","83d7b1ba7cc55a150b0dac7302476793"],["/js/src/jitang.js","b238d27de52c1d1a34f2dc178a70a558"],["/js/src/js.cookie.js","8b6ff0b421b4db4d200ac8065e0e1182"],["/js/src/motion.js","0363e6775142e7757c5757076e44855e"],["/js/src/post-details.js","3894b92a864bd203fee042a7d1cf22c7"],["/js/src/schemes/pisces.js","ebbbd9eb46ec508a3476cfd366cd9347"],["/js/src/scroll-cookie.js","86ad417029aa30bdeff24e3ffc195d91"],["/js/src/scrollspy.js","530c33e24b10167bc4029b0748817a64"],["/js/src/utils.js","e877add06c58ab8c0dd90075056c5ecb"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","206234ff231f99ae2327107b82ffed55"],["/lib/Han/dist/han.js","b4da2857cff5a66716cdbda0c21482ad"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","6a7a28a082a5727294fa8d4746c4e950"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","3a5335a189841f79b63171b3b75654ff"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","5a99d3c6f3ddb44885c580d78156a599"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","59a6a75a889e058d85f10b9de8de2365"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","1aecbb703747b4b46e22edbfc0594f42"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","fc921729ce851570047f4b6d8d58bae5"],["/lib/fancybox/source/jquery.fancybox.css","ab39f8096242dd4fbafd786736ebbc14"],["/lib/fancybox/source/jquery.fancybox.js","f282e5ae0610c8bbd288aef1333e631a"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","dc1069c857743d8c63790594d269d5e0"],["/lib/fastclick/lib/fastclick.js","443189601e32430e51b6968053446cc4"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","d34ec4b51ece08751faf1624a39ade6e"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","71bb462771418b7d4a71ca6801e45804"],["/lib/jquery_lazyload/README.html","146e275132ab1b01df178ec98013109a"],["/lib/jquery_lazyload/jquery.lazyload.js","1f2102b3009d6220359911fff1f2ebba"],["/lib/jquery_lazyload/jquery.scrollstop.js","9743b505ae7200520e2644f22f5700bd"],["/lib/needsharebutton/font-embedded.css","ed1e545eb49789ef03eaf1ba0264ea86"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","100412cbd26f54906d66be63b0dac40b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","800e1fd76ef7c25cd1a496b7677e2730"],["/lib/velocity/velocity.js","1d4a12d391047f0c506f8d11cb5ab617"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","1eccc6ee90fa2a63a177bcd2fb6d03f8"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/one/css/oneProblem.css","95b52761a481e3fa1812f370d042f824"],["/one/index.html","7f6c9c5efb47024ed955f22f326f1b03"],["/one/js/oneProblem.js","104a35b5206a8bd2e0eaef9406206a75"],["/page/2/index.html","355ed39774a15e730716f2f1cca15d0d"],["/page/3/index.html","a780d6257ba16661cb1753baf1ed5f85"],["/page/4/index.html","d1e9e14497874858258f368f36136b82"],["/page/5/index.html","3a30ddf25ba8808bd5cc54a9e5964108"],["/static/api/css/imgshare.css","ffe37f209382d40ac143af28fcbd649e"],["/static/api/css/like.css","70c008e9c5fd2999fb5516639effdef4"],["/static/api/css/select_share.css","2653ec16361cdf7755d4e76ed824223b"],["/static/api/css/share_popup.css","9b5886e98c817ceed62eb3cff45b38fd"],["/static/api/css/share_style0_16.css","fd8a01119f4f229691a1c317551305c7"],["/static/api/css/share_style0_24.css","2ec3ccc112b4602567fd9ac92722413a"],["/static/api/css/share_style0_32.css","84a1cbd63f3be164b1556d2cd92a2407"],["/static/api/css/share_style1_16.css","9129b6e0ed39ef58ca056b1b37e10325"],["/static/api/css/share_style1_24.css","ae75019da7b4c3ce9f1cb57581a1b6bb"],["/static/api/css/share_style1_32.css","fb2fd59d38dd0c21176edc7d16d8cbb7"],["/static/api/css/share_style2.css","707ed2efe24f9a8ccc06293a8797cfc5"],["/static/api/css/share_style2_16.css","6145f6f2ea6620a56e4cf9c38d10eff9"],["/static/api/css/share_style2_24.css","61f28e9add2f67fe9a594bda9ec1f9c5"],["/static/api/css/share_style2_32.css","c763f648a61c19f5de8e4d548aac40b4"],["/static/api/css/share_style4.css","d379005d25c7b0372ec1edb7a367a2ee"],["/static/api/css/slide_share.css","37b5b4b2694bf77cfbf02a2c9ccb5aac"],["/static/api/css/weixin_popup.css","8ba2caca597c47c896f95639dd49d0e4"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","d2145ea83adce8b7c452a178f4859089"],["/static/api/js/base/tangram.js","8a714fdbf4c8a7423a542881873afb37"],["/static/api/js/component/animate.js","f02fb28dd9269cb245531b8784190119"],["/static/api/js/component/anticheat.js","c9d03c98ecb43adff113072936dfe04e"],["/static/api/js/component/comm_tools.js","32353f9a42d8923e628b67ec89025245"],["/static/api/js/component/partners.js","247765a9580f6d14d8f2ba7efedd837d"],["/static/api/js/component/pop_base.js","0de605c2a3e5c2d35485b9897591e7b5"],["/static/api/js/component/pop_dialog.js","d04a3a19f090ed822231a4611c4314d7"],["/static/api/js/component/pop_popup.js","1232a92a5973f03584f368bcd9b9b362"],["/static/api/js/component/pop_popup_slide.js","06e36cda2883dc2f6b2ca417ae3cb85d"],["/static/api/js/component/qrcode.js","9a48db3c561878fb7da490ae6680610b"],["/static/api/js/conf/const.js","6411b368edf0641d9d2b0dbd0a9babab"],["/static/api/js/conf/define.js","c9876d1f73059f8f38b84017a37bdccb"],["/static/api/js/share.js","84ebb6e04cfa5aa80a33e8945b5f4264"],["/static/api/js/share/api_base.js","e932fe3679afa73944ac819cabe891e6"],["/static/api/js/share/combine_api.js","9bd42001a2a53cdd20036c3359adf024"],["/static/api/js/share/image_api.js","28d85de754ca15fbeb1254feb8f6d935"],["/static/api/js/share/like_api.js","1ee2f39b8d52724412849e5e71f51b8f"],["/static/api/js/share/likeshare.js","c17346a7a3460cc8fe11c4659eae3280"],["/static/api/js/share/select_api.js","45e88200083c3569978987171c387216"],["/static/api/js/share/share_api.js","ce25524bebad8fe3956d368c9c774d08"],["/static/api/js/share/slide_api.js","18f631c1795ae1e1c97f56cd8b3e9a6a"],["/static/api/js/start/router.js","42d182379b1b0f8dc6df9ead1e90b292"],["/static/api/js/trans/data.js","c17346a7a3460cc8fe11c4659eae3280"],["/static/api/js/trans/logger.js","c17346a7a3460cc8fe11c4659eae3280"],["/static/api/js/trans/trans.js","de05f3b331965d9238e35ace9af27dbf"],["/static/api/js/trans/trans_bdxc.js","4b3e702d2a0a82377f70bef53425176c"],["/static/api/js/trans/trans_bdysc.js","d461d8bcc596a50c4e4bc4a2ea510cc8"],["/static/api/js/trans/trans_weixin.js","26e07c5f5ad4b73f28d751d63be1eae2"],["/static/api/js/view/image_view.js","f3aac2a11a68636cf1264a04003de231"],["/static/api/js/view/like_view.js","5d0991c7a0c82d4e81f7b7da3e517500"],["/static/api/js/view/select_view.js","2f394877ee252c19ce4819b90a383949"],["/static/api/js/view/share_view.js","78cd0b679a3a90da62584cd355d5ccd5"],["/static/api/js/view/slide_view.js","c98780f1bbe1b405d3764d30f1d52ac2"],["/static/api/js/view/view_base.js","9b2a93d5f8ade4bda61b976bb6e15144"],["/sw-register.js","115ddaad89ab667a9252b945645de424"],["/tags/Spring-MVC/index.html","a8dbf794a2622571930aee38c52a8d7f"],["/tags/cron/index.html","b1286e9b2edb63e7a8aeda7451705dfe"],["/tags/docker/index.html","d43c47a321e770e6c70c1eeb5a718127"],["/tags/frp/index.html","45f7ffe4d17db469edfaab815b06b3df"],["/tags/git/index.html","642d2c7191b45c4924c2b2114a2d1844"],["/tags/github/index.html","78ee47f02314ff177e6599448ec7f6f2"],["/tags/index.html","03a7156a2cddf400c8066b04aca427f2"],["/tags/java/index.html","02fa08a9ca27d65bc9019d91ca8a39e2"],["/tags/java/page/2/index.html","f67188f7b4bc1b2df2d5af1d021a98d1"],["/tags/linux/index.html","a6706e63dc03c0506cded628e3117237"],["/tags/maven/index.html","54daaedb113feb361438e053f1f3cd05"],["/tags/mybatis/index.html","1a7a413c38a07f45e840de584073ad39"],["/tags/mysql/index.html","010cd2fcd2ec2215e7881984e25ab543"],["/tags/oracle/index.html","40cd1db462b0bdbd68e43b9751edfc4f"],["/tags/pageHelper/index.html","b4a0bfa47be299e4f2a5d24ec1560941"],["/tags/scrapy/index.html","8f807685bbd03a64c942f7a895347973"],["/tags/spring/index.html","c9f5dd87d9441355fc6461d163aba4ca"],["/tags/springboot/index.html","90ed97550c39168ada613bc0e0ff598e"],["/tags/springmvc/index.html","a46a632b055f9ef7d5b9c0b5efbcedbf"],["/tags/ssm/index.html","ce58be97ae3a2af8d154615258eb1040"],["/tags/struts2/index.html","c72370c6b891baceb8362718ce699362"],["/tags/thymeleaf/index.html","77636ae60dcc949a01df5bbab67722a3"],["/tags/tomcat/index.html","74b066ff26a6b896ee96a5359b8cd629"],["/tags/内网穿透/index.html","1bc634f77325b1eea9b6a8d27d6f55a1"],["/tags/小技巧/index.html","d3fcf282b646486b2e0507959432080b"],["/tags/插件/index.html","49b45c3e207b234e0024972788bcf858"],["/tags/爬虫/index.html","7adbc38605ff93dceb0301a058fdebf6"],["/tags/百度云/index.html","393304033585a0edfb9e8155de958d38"],["/tags/端口映射/index.html","a003175dda456be5236e1296b98f1887"],["/tags/高速下载/index.html","67dfe4db29f07e136d517cfe664e5136"],["/xianbao/css/activities.css","2e42bbd9b6db5c9d8145695c356938d5"],["/xianbao/index.html","0876dfaccff63882b39c38c7250a9adc"],["/xianbao/js/activities.js","ef2a95e7bae3fa95431a6cb0c10365c7"],["/测试/index.html","b82853ef22e5d2f0bf82d4f68602892c"]];
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
