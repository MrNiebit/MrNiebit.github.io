/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","44f307a19f9229a1219180eb1e24a854"],["/2019/07/20/Spring入门学习/index.html","7fd654546845657bd7fe41e9bd7740da"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","51682cabee2b0de8d6ddb8c648a70d0f"],["/2019/08/04/Struts2的执行流程分析/index.html","b7250ddef7316db396b4a5f146152f3f"],["/2019/08/17/Struts2的拦截器栈/index.html","137e946950c285c340e7d10a9d39597d"],["/2019/08/20/ognl表达式和值栈/index.html","22ed8608f761034b703202debf035912"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","2c8a651d41e5d7c231a342586b92f82f"],["/2019/09/01/Untitled/index.html","a1ab43eb4625ef1b1edcbf9003494271"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","ffa5bb127152bf3b0fa0e1c865acb249"],["/2019/09/06/MybatisUtils工具类/index.html","e13e75ca1c903c47793f1b48f2f71a18"],["/2019/09/06/Mybatis使用注解入门案例/index.html","44f57d2cd59c96c42352a3284c5b176c"],["/2019/09/11/Git笔记/index.html","c3044b8d8f3a41d9ca0e26a3521a2022"],["/2019/09/11/MyBatis的动态SQL/index.html","ad5b4dd88ff5e56a9b364365fc10bb4f"],["/2019/09/14/安装Docker/index.html","8654b22cb8358ecf66eed918aeac4902"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","0c1664f8cdbb424f36fcee57afe32c02"],["/2019/09/21/linux服务器和tomcat部署/index.html","8025e6534a4021764345289df375e206"],["/2019/09/21/maven创建spring入门项目/index.html","b0f0fe4efded6f8f135b575c39da20e0"],["/2019/09/23/mybatis多对一、一对多查询/index.html","d8e42f9c3d02518be10d207fbb950c91"],["/2019/10/08/Maven入门学习/index.html","4a60e0f9e80ff9c2c65bccfd71f06fdb"],["/2019/10/09/CentOS安装Dokcer/index.html","08220203d6dc5c6b04ccde160d81aeb1"],["/2019/10/09/docker学习的入门/index.html","d163ec7771e3496590dcbf5e7203e3c9"],["/2019/10/09/linux常用命令/index.html","02f8332dbd233b4eae96989fcbf41e05"],["/2019/10/10/mybatis单表的嵌套查询/index.html","3451685309773d2ba85257577a11631a"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","5ba86bec55d234c6bd49ea6855209085"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","3a38cd71b27a43d98f2c0676a94359e9"],["/2019/10/23/docker安装mysql/index.html","cbaf0584ad1acecd1fe72b126fe5915f"],["/2019/10/24/Spring的属性注入/index.html","87b6dc7a00682fc92b6bd152337e807e"],["/2019/10/25/模拟电梯系统（java）/index.html","29fb151b9cb8e7ae4a057cc3e10521df"],["/2019/10/26/Docker学习之二/index.html","9f438c56278d80401b0b59d0391335a6"],["/2019/10/28/Oracle数据库例题/index.html","d2e5f637bf1a5d5fdd6d96e32c0d70c0"],["/2019/10/28/linux端口映射工具/index.html","a4f2d63025bbb020080ff624aee3da94"],["/2019/10/29/Untitled/index.html","919de7a8bc6d519ecc311396c9564abd"],["/2019/10/31/Spring-AOP学习之（二）/index.html","020b8cd440bc2823e2af697208eefb2b"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","2e0ee3876e335186efa3500713b38989"],["/2019/11/02/MyBatis与Spring的整合/index.html","7c210bce8c358609bec71dbb3f396f31"],["/2019/11/02/Spring的事务管理/index.html","7d68224ba1327a910a8f2ef341fac36d"],["/2019/11/03/SpringMVC入门学习-一/index.html","3a8f949fb691e2043ce751a940952236"],["/2019/11/06/SpringMVC入门学习-三/index.html","9fc50ade305492a0778ff61c098863b5"],["/2019/11/06/SpringMVC入门学习-二/index.html","c25acd305ffade0e0986f2f15d889510"],["/about/index.html","fdf05d76ccfef51ca88877e3684f8aec"],["/archives/2019/07/index.html","c38c1be948743d012f4c4a43f2ea738c"],["/archives/2019/08/index.html","d76a9d8070b8de39c94a72058a2c082d"],["/archives/2019/09/index.html","c1f4b940dcdf632e22749fdad3832a8d"],["/archives/2019/09/page/2/index.html","bca9f39a583b3b6bd1774e4ca2d33dbd"],["/archives/2019/10/index.html","98a0f201c896826c2a7e9257bdeb7e7e"],["/archives/2019/10/page/2/index.html","9de6499657df6c6d899f86de16fcb197"],["/archives/2019/11/index.html","22d787b9a46bb9a7846195a2307acfeb"],["/archives/2019/index.html","20965b7caa68a183b595a18f7c89acd4"],["/archives/2019/page/2/index.html","7175833317975e487159b3635df3cbd6"],["/archives/2019/page/3/index.html","06451eb8f2597eee004820368db0e774"],["/archives/2019/page/4/index.html","4e8516d73439086b66c0d51ec031e2c8"],["/archives/index.html","1a1a7b8130f82f868f677dc399662d11"],["/archives/page/2/index.html","f804587f99120e43a31ebabeca60725b"],["/archives/page/3/index.html","e6c70fd2b6bfdb2397466b2449962847"],["/archives/page/4/index.html","ac8a180c2d77276941a77ba1e9dd7395"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","3809798f43efba9de865703efa59df1c"],["/categories/git/index.html","eef6c2ce28f84e7756469638e57574e7"],["/categories/index.html","c4e96af791c1523ebeb1b0930dbe001e"],["/categories/java基础/index.html","ae83bcf461aaa2c3e286ba002d65322a"],["/categories/linux/index.html","4a81426909f57d5176193f6939b7e85a"],["/categories/linux/tomcat/index.html","269fcaae450e5b5a8c092ed3ad003bd8"],["/categories/maven/index.html","906239c274e988fe0d4cded38a5c26e7"],["/categories/mybatis/index.html","06bc08d42bc7fb89d47f93d1a32a7384"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","183756a9192235c5bc26b75c9518d467"],["/categories/oracle/index.html","5e7b17d1f9d9abe55103a19606bd7274"],["/categories/spring/index.html","91f561ab3af44ef227b08c29c46651f0"],["/categories/springmvc/index.html","6f35c62a5d6cccde1c5a47c8ce5f90ec"],["/categories/struts2/index.html","bec2c39a6d4baa36adb0cb1ece23a5a2"],["/categories/框架/page/2/index.html","4864f40a56dd0d6fcecce4f4e3906dfe"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","4f1da95b765f07c47f761afad50c961b"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/高速下载相关/index.html","90f2d95335d40d5ce7b9705b925ef185"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/jitang.css","1ef02bd0e2ad7627b9c4a6c9d4e404ea"],["/css/main.css","d677d99eefc63ce13154116a1e1ea290"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","79263a2fda897457a1184fc045f8b3dc"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","e688dd1d73a8e3041ae7ca9ef541db91"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","5ff89f8aced29d886ec98a2351598a42"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","c999e602d837de37fbb0fef2da032db2"],["/js/src/algolia-search.js","49ec8c78852ad5bd6bfd1517d3a5727a"],["/js/src/bootstrap.js","96c476f676d3c77aca5142a420fe4e75"],["/js/src/clipboard-use.js","d2471359225aa82bda3616b7c7f4f6bd"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","1aa8872ab4ceda139fa9c48e4b25f79e"],["/js/src/exturl.js","77d68cb8b951a15af3d6fe786a1d9417"],["/js/src/hook-duoshuo.js","9cdad34fd1fc67f3343f946c61eb2361"],["/js/src/instantclick.js","1d616124f4956f3fddf7056258a5672f"],["/js/src/jitang.js","592b5e81a4aa836c134a5e53392df0c8"],["/js/src/js.cookie.js","1565a68121608f1f780554186669f0db"],["/js/src/motion.js","2847269bf8afb83e8e93cb4687aba0de"],["/js/src/post-details.js","ed5d1efcd7e0f28e95a73766c8340e0f"],["/js/src/schemes/pisces.js","0b54cf6cff3e9eb7bdeceafaf5da9fe5"],["/js/src/scroll-cookie.js","0515bcc1a1c59f628d4075fb629b031b"],["/js/src/scrollspy.js","049612b729a3fc612238c017eb6fd2d8"],["/js/src/utils.js","231e8a196b6a4750402fbae5003a98ad"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","4215531fd82d7bfa3815e87163eefe3a"],["/lib/Han/dist/han.js","9e024e785aba734af817c810b87d1a12"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","4fa6e30faf86de355c9b69f2de6e6f9d"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","1533da48e7a4a827bd1a437abde27948"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","796f5b1d83b0daee2dc0cef4f635bd02"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","1dc7c3f232495e2051c79aa4666291a1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","70ddefbaac09cf9ad47c422849ba4e14"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","24826b83e45147cac22974d30c79f22c"],["/lib/fancybox/source/jquery.fancybox.css","2a7c0526489a8d970005a96d56a9ee8f"],["/lib/fancybox/source/jquery.fancybox.js","0277cc7514b726464986ed7bacf5f56f"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","43fd7aa81b5139faba1c78c251eaf653"],["/lib/fastclick/lib/fastclick.js","117c97f0c083b963fa97a761ca70ddbb"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","a2c0830de306899344b821035fbc5296"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2472cbfe09be2e7655d012aae4f19602"],["/lib/jquery_lazyload/README.html","fb70f465e12bcfc0e9042ef38ecf36e9"],["/lib/jquery_lazyload/jquery.lazyload.js","1aa9d56ff0753fd0b13449cd9b96236d"],["/lib/jquery_lazyload/jquery.scrollstop.js","6adb3e06cca3f4ce63baaf2598299e88"],["/lib/needsharebutton/font-embedded.css","c9ae4d5d8ba2b319375732aec0d495a8"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","b76032847eff6812551e3ec81bec4e1e"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c32e24889bc437cf603cbf46ff0dee23"],["/lib/velocity/velocity.js","b1892c02937834c5bb096912a07bf3f8"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","dd009361a1571a94d2b14c9a0d2ee7b0"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","2922f54046ee7adeb2c4fc8507b83932"],["/page/3/index.html","c90fc3279b56e30ac041442a3a779724"],["/page/4/index.html","333dceba755b1adfd1378712fa41bea6"],["/static/api/css/imgshare.css","785d804a2d423d08e827ef677818d60f"],["/static/api/css/like.css","66f5cf5d8cbfeaaa068b54b8c9541427"],["/static/api/css/select_share.css","9a3b1121e2edc9cee40387ec68c50e6a"],["/static/api/css/share_popup.css","7a71a248eb336b650a730193d9853f72"],["/static/api/css/share_style0_16.css","511d7a3348ed1899b8351ea0b0775b5e"],["/static/api/css/share_style0_24.css","3071f2af300b2040467d6bcc108a4e58"],["/static/api/css/share_style0_32.css","32d15f900f777c80a706d523d8d66d88"],["/static/api/css/share_style1_16.css","5dadbe3e77ae2f568977a52615130f37"],["/static/api/css/share_style1_24.css","e4918c05deb020268a4c28f6f64365e8"],["/static/api/css/share_style1_32.css","7a395368229d320f3761b3c5b44bba0f"],["/static/api/css/share_style2.css","1389fa3e6d0f846c6834b5a66503f06b"],["/static/api/css/share_style2_16.css","8315a42d90c0f5b6552335f4dc330704"],["/static/api/css/share_style2_24.css","67d300d93129b0a847d8176741436813"],["/static/api/css/share_style2_32.css","f2c208cf749205a6f7a69ed14e50fa52"],["/static/api/css/share_style4.css","69a05ab5cb1473d222922209fd91c75f"],["/static/api/css/slide_share.css","5712d563d482889819dab3c6d05f80be"],["/static/api/css/weixin_popup.css","04d8bbf2c77012fb77ce5b7fcce47d61"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","94c2251e50e9a69ff2b4076bd8918c3b"],["/static/api/js/base/tangram.js","cfafed44f2e5329e8664820cb1894e75"],["/static/api/js/component/animate.js","4c94d576f48c99d257305dc42db8051c"],["/static/api/js/component/anticheat.js","fbcc5d4d82859c94be8a43a86dc81c27"],["/static/api/js/component/comm_tools.js","40c8777125d87e2acfdf71b5016f5141"],["/static/api/js/component/partners.js","14e1aa5fe6ab6bafaf6352f340125cca"],["/static/api/js/component/pop_base.js","92d6d2904397ce500958704d6a0b9d0e"],["/static/api/js/component/pop_dialog.js","7e3a0bf3baee9e5ecf71c2cc0bbb0ba8"],["/static/api/js/component/pop_popup.js","712c7423edebaaaf3e1ad28f01978835"],["/static/api/js/component/pop_popup_slide.js","1ddd3a6bd367a5b8e490880ebdebe840"],["/static/api/js/component/qrcode.js","be595cd57a5acac94de17f941b71117e"],["/static/api/js/conf/const.js","ad35dc3fcabb2f93499d70452f83e782"],["/static/api/js/conf/define.js","83d8fa70eb901003181918485207781d"],["/static/api/js/share.js","bb1d166c4751e87122eefcf969236ae9"],["/static/api/js/share/api_base.js","40ea73513bbf4cb633d58c4b2d1a6ace"],["/static/api/js/share/combine_api.js","4a75bf4320c885873b4784b3f1e2bb62"],["/static/api/js/share/image_api.js","65e2ee47865fa5215a4981671b4be926"],["/static/api/js/share/like_api.js","768923a3cde1cb8fa53e40b9bd5c8f49"],["/static/api/js/share/likeshare.js","2667687f0b5e124e6f2a09c7e4a41a72"],["/static/api/js/share/select_api.js","8fda905409bb3e918660dbdbaf0b436f"],["/static/api/js/share/share_api.js","6dae94adfacd1347520f12cb46cd6a64"],["/static/api/js/share/slide_api.js","3305b4b269a359705e203f29a0a2858b"],["/static/api/js/start/router.js","7b56ce142ab3677e8e49709ada9e74a0"],["/static/api/js/trans/data.js","2667687f0b5e124e6f2a09c7e4a41a72"],["/static/api/js/trans/logger.js","2667687f0b5e124e6f2a09c7e4a41a72"],["/static/api/js/trans/trans.js","b01d6977e152aca4e2943d6cbfbd7d5f"],["/static/api/js/trans/trans_bdxc.js","0505ac2d4af4f965538efe2ff1de2082"],["/static/api/js/trans/trans_bdysc.js","5ebf05af5d23bb81b4704c975e30832e"],["/static/api/js/trans/trans_weixin.js","46d093ab9bcc5e46597a0bb5ef1382d1"],["/static/api/js/view/image_view.js","9ee99cec85c75846b48c05432a1a34af"],["/static/api/js/view/like_view.js","b0c014597d82cd06451814f01dc8d9b2"],["/static/api/js/view/select_view.js","84d2cd306d859d2e050bacf941c85599"],["/static/api/js/view/share_view.js","b13ea0ade2e4368196e8024b0c43ca1f"],["/static/api/js/view/slide_view.js","9b84c473fdc19f9c10d20df7a2413eef"],["/static/api/js/view/view_base.js","fac4556e19134897463712fa8c93f055"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","aeab58d76bccacfe1543575eb35694a4"],["/tags/Spring-MVC/index.html","2613177b77cd3c3e2d55bd5701e3ae93"],["/tags/docker/index.html","a905ac6bc311da35a9dca8d567327173"],["/tags/git/index.html","b4905938e9e3dfd87ab02180a74bf321"],["/tags/index.html","0c8fe42cb898b11560ac1dcb69b38fbf"],["/tags/java/index.html","397589f3c3dd26a9a97049515356f1c7"],["/tags/linux/index.html","e75a979d78d4e28c382ede7641625a2f"],["/tags/maven/index.html","e03ed3ecab894b5fb69bebd5ecfd8793"],["/tags/mybatis/index.html","c837c352d8d8c983817c70c54eba5d83"],["/tags/mysql/index.html","b0f2c383bff41b1d90a27ef178cbbd6d"],["/tags/oracle/index.html","d38c5d08b1909791e93e4786cc325b4a"],["/tags/scrapy/index.html","89430fc0d50ef3fda277959549dbb715"],["/tags/spring/index.html","80004ca52ab43cecff1e7b30944c773e"],["/tags/springmvc/index.html","0da0766789a45dff7b97ccbc5264438f"],["/tags/struts2/index.html","911773a52a4514277292b150266f3971"],["/tags/tomcat/index.html","6e138ad28e1d6bc8c1b31eba169acdf8"],["/tags/爬虫/index.html","14807dbeaeb4e5cd46410a202f040d78"],["/tags/百度云/index.html","39d92b741d97e2908e05e3d6a48762ab"],["/tags/端口映射/index.html","f0f6b71bcfe58e402a75b29c01e2f5d9"],["/tags/高速下载/index.html","b61f929d52dabff1f0b02b6eeed253b1"],["/xianbao/css/activities.css","a7097573ed1f463e4002149248c49ff2"],["/xianbao/index.html","902a631e789ef3b0787e36ddd3783210"],["/xianbao/js/activities.js","c2d2e10dcbf24369a733ede7b55e2461"],["/测试/index.html","826c199d878a230ff989633cca2d3d7b"]];
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
