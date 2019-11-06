/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","cc33b5c3cdd67dc138fa5b1c536d1659"],["/2019/07/20/Spring入门学习/index.html","fd2dfd9cdbfc201c339d4220aefec089"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","9ac59660429388ab5c90da0bf24cbb60"],["/2019/08/04/Struts2的执行流程分析/index.html","08cffa224e79f40f4edc49726db8ae72"],["/2019/08/17/Struts2的拦截器栈/index.html","aa831f675a6bd3ba2c915d98ebd2e579"],["/2019/08/20/ognl表达式和值栈/index.html","1ace920d2630161cc6e5884a9b133866"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","247c832f45537b53a2f6f4d291290219"],["/2019/09/01/Untitled/index.html","a1ab43eb4625ef1b1edcbf9003494271"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","e5c6fd7c699c9d4bcc9392d59fb5dee5"],["/2019/09/06/MybatisUtils工具类/index.html","45f9b29eb8b0e87ee191e67566860298"],["/2019/09/06/Mybatis使用注解入门案例/index.html","140875ac06ce7500c9e9217ace1252c1"],["/2019/09/11/Git笔记/index.html","d0a8c90a2810d0f99a635cd060e417ba"],["/2019/09/11/MyBatis的动态SQL/index.html","4c4806d8f3e144e2f32ebdea3b48f077"],["/2019/09/14/安装Docker/index.html","433454ec70cd0b9ce12eecfe47d17d1b"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","4f2e803b10117f1060339f03ea72c693"],["/2019/09/21/linux服务器和tomcat部署/index.html","c08f37faf8b4be6d0a49157ce16f165b"],["/2019/09/21/maven创建spring入门项目/index.html","43bca1532a283e60114f88c3f96015f2"],["/2019/09/23/mybatis多对一、一对多查询/index.html","8cbb8b8529b74192b7518672a92c5d5a"],["/2019/10/08/Maven入门学习/index.html","db704388bcc848e6d30bfd456ecc2153"],["/2019/10/09/CentOS安装Dokcer/index.html","dec53fcafce0b5174dcf4eeb61057754"],["/2019/10/09/docker学习的入门/index.html","1caf46e726d9bcfd81e9472ed0e2345f"],["/2019/10/09/linux常用命令/index.html","855eee3cbb7827ecbb49f71f6911588f"],["/2019/10/10/mybatis单表的嵌套查询/index.html","81a828f668bb7ba42a2556a1301eb004"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","1a884e34e5c801d3456918c14711d39f"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","7481a763bc15d624f62256511fc4ef58"],["/2019/10/23/docker安装mysql/index.html","3cf1fb58dc150ba16ed0376e5d96228e"],["/2019/10/24/Spring的属性注入/index.html","e542bc910a6c080ebbb8e93664eda6f4"],["/2019/10/25/模拟电梯系统（java）/index.html","138615a79ec1e1fe6838d5fbd3163020"],["/2019/10/26/Docker学习之二/index.html","47c158ab467a59870d8ade45b0467d2a"],["/2019/10/28/Oracle数据库例题/index.html","b9aadcc921ea0981bd60e4c73458a35c"],["/2019/10/28/linux端口映射工具/index.html","d3a84e5e3a96440ac9832635e5cc96ad"],["/2019/10/29/Untitled/index.html","bba3e708f2c6026409b81d9c893105ef"],["/2019/10/31/Spring-AOP学习之（二）/index.html","93d908e09b28cf1377f189346f0a9af2"],["/2019/10/31/使用spring的jdbc-Template学习/index.html","6b095e9c45dbe297460841a8307f36aa"],["/2019/11/02/MyBatis与Spring的整合/index.html","8251f7ae87565b11bdb4c89890079fe4"],["/2019/11/02/Spring的事务管理/index.html","5f731cbd678f872fcd1d8b0b86637a31"],["/2019/11/03/SpringMVC入门学习-一/index.html","ebc60335c14666d8b3a3f5bd35167471"],["/about/index.html","9c5bec1b7b5f7907d2965380f02fbfbd"],["/archives/2019/07/index.html","fced29cf9a75160f4b64ae2cc58cec62"],["/archives/2019/08/index.html","a35c621ee7b4d9152130e5fff19590d7"],["/archives/2019/09/index.html","5051482d7931b82aac83c959bf5a2151"],["/archives/2019/09/page/2/index.html","bca9f39a583b3b6bd1774e4ca2d33dbd"],["/archives/2019/10/index.html","9b575e06e197aeacb9bf95dd8cfea883"],["/archives/2019/10/page/2/index.html","202abedc6a105877ecfe9913c5a68261"],["/archives/2019/11/index.html","da0a7446cc2866af2e5c896f7db94b37"],["/archives/2019/index.html","01f3e3a3aa8c199962a98aeca44c538d"],["/archives/2019/page/2/index.html","154c89e61f7a5a3c51ed9dfa84a71012"],["/archives/2019/page/3/index.html","03140d5225e2128c2da92615a366db91"],["/archives/2019/page/4/index.html","39ef2c0b10095956c2ea0322c50fe800"],["/archives/index.html","fcf6f167f4553834b4e9d1011754fef7"],["/archives/page/2/index.html","944bfd844123039df3367d06160e6bdc"],["/archives/page/3/index.html","94dde9613bbecf8379c2107aa91cec31"],["/archives/page/4/index.html","89992703e89657ff983ac38b201812fa"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring-MVC/index.html","2cfd5abf4e0cd0823d55dc0467ee69d7"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","63255d81c7bdb94598ddb9061b85f142"],["/categories/git/index.html","adc687b9746e454b412c1f5ad8d99bec"],["/categories/index.html","cf82970286a8488a482afe7244cbe667"],["/categories/java基础/index.html","b2b169d553baea707422c8b89c86291d"],["/categories/linux/index.html","8efb36f61937ce6b63007c98d2503684"],["/categories/linux/tomcat/index.html","2506bab7804bbcd0ef8ed4ced3950c8e"],["/categories/maven/index.html","ed05d1d2e84d7f2ccdd36f7573bdb3ed"],["/categories/mybatis/index.html","7d09ada79d07fb3721074fe4767df1fe"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","e7c98790619fe52463eef69a46ba44c2"],["/categories/oracle/index.html","7f08c163705f2a037778c07fe4a216ef"],["/categories/spring/index.html","794fbe7c0eada3a13d3047dec4b159b3"],["/categories/struts2/index.html","7b62f637a19e672c57de9643f1b2b655"],["/categories/框架/page/2/index.html","4864f40a56dd0d6fcecce4f4e3906dfe"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","b0fd6b3a8e43ddbf55885d765e2b22c5"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/高速下载相关/index.html","a4998241bc4bed2939ec872494e109d8"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/jitang.css","57b3b47a868b4d7de53fd001d2e1ed42"],["/css/main.css","cbabe790d7ff6954b37040e23b8e58ce"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","4b8c04be72438a1aa9007791e3bbe946"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","8620ce139bbe699426004a3b03282c03"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","70b9a36da1314337431f5984a841d37a"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","53a2645387b6acb7de16c4590434ce11"],["/js/src/algolia-search.js","34a16c73b86c8c5c41d2027c419e9d83"],["/js/src/bootstrap.js","494bdc1037aee86c1aaf5c7eec27a37d"],["/js/src/clipboard-use.js","fc8bdf81f8c918021ec7a47a54c3aa4e"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","50a98976d64e744a91c2903c1eadcee3"],["/js/src/exturl.js","731d17efc7a9fdb238c8ab3bb44fc922"],["/js/src/hook-duoshuo.js","b589329ee690e5995b73cd42143b06c5"],["/js/src/instantclick.js","639c50d7e2876f6b290be657eb6e761f"],["/js/src/jitang.js","dfc5625cad0acaa137e1afaf59631bfc"],["/js/src/js.cookie.js","e3a584a186952b48e1df1bd9a6f2a6de"],["/js/src/motion.js","e2fc5acff88a8aa22b16f51a493ad3bf"],["/js/src/post-details.js","4573b0e3de1e3d1fd1d66024c81b1a31"],["/js/src/schemes/pisces.js","674b3d27e6bc0e9d88b665722f765c1a"],["/js/src/scroll-cookie.js","faaed88db07e154df2062b1b40ee4ec2"],["/js/src/scrollspy.js","79e51308c22fc161277bcd17861a7361"],["/js/src/utils.js","1301b3ade25d29b38f33f3bb0525f466"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","253bb5acd59825b7bc13812d67695308"],["/lib/Han/dist/han.js","0030e9f45a435482dfdef32a9e208936"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","267ff3e2a81f43cfe629e074ac4f7473"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","76e30a087f9e26d831d0ca9e119f2b06"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c730da2871e5c422f592f0259862d742"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","7589614f6d900f435e4739391556f711"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d5333aaed9bffae0a97813002f600138"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","80ef8d3effbdceeb505375aa29bab339"],["/lib/fancybox/source/jquery.fancybox.css","0cdbf7186c56f0fed44c510293e5aee6"],["/lib/fancybox/source/jquery.fancybox.js","e14998b7ad5cb31544e60b8662ac9193"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","dcf187431d40db3b226e530d693a8bdf"],["/lib/fastclick/lib/fastclick.js","109167ba1eec4b5008c60968a801dc79"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","f22bda0104069368375b926b2cbce16d"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","77ec2fbba449bb53f1a2bf5735f88b36"],["/lib/jquery_lazyload/README.html","e693dd0f016ee91a52106d546b0a97e7"],["/lib/jquery_lazyload/jquery.lazyload.js","27b9956d1de85633c73c9d4f578661f2"],["/lib/jquery_lazyload/jquery.scrollstop.js","5b29a05c0d15eac558cdccaba21d54fe"],["/lib/needsharebutton/font-embedded.css","f2231d22bf3d8a9429777fde572ab4f5"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","99dca510cab8e509c63e6c2b9de09e8b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","e103199ace1921aae369b0b5c1c307bd"],["/lib/velocity/velocity.js","f5641c083dbfb7f7bfb6ddb185a3c901"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","730f372cbf43aaaff0e334438618c5be"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","a8b970deee7f63597c320dd051d0238f"],["/page/3/index.html","1b6e6fe9646211322459c2ddacfb2ec5"],["/page/4/index.html","b67ae5f297fac01067365a714aa394e8"],["/static/api/css/imgshare.css","bf2841c05f08a485f9c4c087c6ab626a"],["/static/api/css/like.css","f2b2437b4e73fa18d283950a7d414851"],["/static/api/css/select_share.css","eb22cd32567c6c222d03b4a3096ed84c"],["/static/api/css/share_popup.css","875823ad349ea71fc4367d0d4f715814"],["/static/api/css/share_style0_16.css","b8b9ed9551df04888959be3ce53faee8"],["/static/api/css/share_style0_24.css","b6803d2de6e2f4f4250f5b6a65c9fee7"],["/static/api/css/share_style0_32.css","a80aa9b7f0b0f14d9eed95a0f2589e6b"],["/static/api/css/share_style1_16.css","084c0ab61049f15da4ef1d85801196f7"],["/static/api/css/share_style1_24.css","072a613fd0504d9d7cd20fab60102b19"],["/static/api/css/share_style1_32.css","27ed9a942801978d67edc53f0d7dff82"],["/static/api/css/share_style2.css","827d8d1285a5f1cacf840784a0cf096e"],["/static/api/css/share_style2_16.css","0c2680473c24580b15626bdafea28f2d"],["/static/api/css/share_style2_24.css","29884befd876356623a5fd3c2896f37d"],["/static/api/css/share_style2_32.css","76ce96ba471232226a4dbba73d997f50"],["/static/api/css/share_style4.css","7d601ad7195cff1605d4801a7d49177d"],["/static/api/css/slide_share.css","c7f769946cc084ebc732c1b9ffb25910"],["/static/api/css/weixin_popup.css","3910cec971f38d95c66756b7b6514fe1"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","c7ad1f9487b300002c66551ac882c40f"],["/static/api/js/base/tangram.js","bb3f2d9af12cf146f7e64608c46cc956"],["/static/api/js/component/animate.js","183c5356d6f38c28c340f7a78dfacf39"],["/static/api/js/component/anticheat.js","6334bd1e40f7d8036bf0be2ba2867fa0"],["/static/api/js/component/comm_tools.js","3405bf16fcd5e1bf18fd75680692be9c"],["/static/api/js/component/partners.js","2110d42f8523eac940e849b81d11f35f"],["/static/api/js/component/pop_base.js","265e91fb8472e6a13afa9e31e848445b"],["/static/api/js/component/pop_dialog.js","ca0ce63aae9b065a3c54b9b9bcb54848"],["/static/api/js/component/pop_popup.js","e74fae25ae52b2a125d07343dd39abfe"],["/static/api/js/component/pop_popup_slide.js","c2da04feda0a314a6cf3dcca99cae3c4"],["/static/api/js/component/qrcode.js","89392d0aea1dc7e0f8d1f28d7d2f6c00"],["/static/api/js/conf/const.js","c73129c5489b02a74825ffd1fb01633b"],["/static/api/js/conf/define.js","19e905c9d13b6763bfa25fed83d67095"],["/static/api/js/share.js","58f12d8daae423d8976194ea9411c015"],["/static/api/js/share/api_base.js","848ec723a776a2199e2382970f6a7eb7"],["/static/api/js/share/combine_api.js","829efa1fdade2f94d4db45a5ad13a174"],["/static/api/js/share/image_api.js","de00d489c4d44f56c4ee9d216e32f484"],["/static/api/js/share/like_api.js","12bc29623b769a7d505843c10e89fc74"],["/static/api/js/share/likeshare.js","b1b6cf447237a562acd40651c1a13169"],["/static/api/js/share/select_api.js","0f160524754dda8f90ea0302aaa498c7"],["/static/api/js/share/share_api.js","83ef36ca5b147e2a5390159290d8fbb6"],["/static/api/js/share/slide_api.js","b66cda1784500ea75ae229184d018821"],["/static/api/js/start/router.js","7faaa04594d63e73003cf05ef67864fd"],["/static/api/js/trans/data.js","b1b6cf447237a562acd40651c1a13169"],["/static/api/js/trans/logger.js","b1b6cf447237a562acd40651c1a13169"],["/static/api/js/trans/trans.js","fdd4955c031c91a9e5bf2187783c8c17"],["/static/api/js/trans/trans_bdxc.js","5dcd8eac334d9d324e7a08f052266734"],["/static/api/js/trans/trans_bdysc.js","08f76abe9fffd5fe37b6d0310d51db66"],["/static/api/js/trans/trans_weixin.js","32728f56a2a2dd4e1a9be5544bb0bf08"],["/static/api/js/view/image_view.js","6fcb8d3c48770cb24ce0db5bbee5b8c8"],["/static/api/js/view/like_view.js","8b3f73857d3ba18b5463cffe0733671f"],["/static/api/js/view/select_view.js","e4e9235f918940321b5f6f54d86a92de"],["/static/api/js/view/share_view.js","631dfc122891d9f449fa566590d2285a"],["/static/api/js/view/slide_view.js","a8852764490a28d806b12fb2a1740217"],["/static/api/js/view/view_base.js","067bea458ca613e2f1999a31c2b575f6"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","d4f25c8c234adf23c5841b851c01fd97"],["/tags/Spring-MVC/index.html","f75de8697f3812314fa63dcace25a72e"],["/tags/docker/index.html","7c0e20eeb259a707635c6b1fd2d77d63"],["/tags/git/index.html","42c95401e97335ee3cfe07ae8c9ee438"],["/tags/index.html","a9936e8ec722b0d7f6edb8b6a25fc74f"],["/tags/java/index.html","a71f7ca0132d3d5b25e1d3c4f005e420"],["/tags/linux/index.html","6d970f5c7f6ba9ae1cd45c8b87a0b4de"],["/tags/maven/index.html","effff5e235343640112b1a2b125ebfb7"],["/tags/mybatis/index.html","8ed1a1a2c71af924308e5c17a6f2681d"],["/tags/mysql/index.html","2e7d73c87aa26ac95d5a596c964ac5db"],["/tags/oracle/index.html","86bd4b808b4d05fa629cf0080634cc76"],["/tags/scrapy/index.html","ff1a8c745d639e5aa91921bf6f848bca"],["/tags/spring/index.html","42fa3965cb122801f26883293905b01b"],["/tags/struts2/index.html","a10eaf277d33f8bff1a637846fe446a9"],["/tags/tomcat/index.html","0410d7e6aba3dd238bf0c2b32a37ecdf"],["/tags/爬虫/index.html","9aebbe131a2ca3cc3c2aa9dc861fe213"],["/tags/百度云/index.html","d305d6e629212def1a3118c348ac74d9"],["/tags/端口映射/index.html","49067ec31cea66edf2792115d3470cde"],["/tags/高速下载/index.html","4beb8b77ddb6148f6b8c8c1ba8ffe47b"],["/xianbao/css/activities.css","cd215e189e31134a5cf830236e7ef59a"],["/xianbao/index.html","f1beb2e7655e2e53786712061d6d6ebc"],["/xianbao/js/activities.js","b90cd73a4d8968c9c0e3da5ff9e3cec1"],["/测试/index.html","6a8d3e4c022ffa5f4792a2e731777744"]];
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
