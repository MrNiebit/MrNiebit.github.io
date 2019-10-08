var InstantClick=function(d,e){function w(a){var b=a.indexOf("#");return 0>b?a:a.substr(0,b)}function z(a){for(;a&&"A"!=a.nodeName;)a=a.parentNode;return a}function A(a){var b=e.protocol+"//"+e.host;if(!(b=a.target||a.hasAttribute("download")||0!=a.href.indexOf(b+"/")||-1<a.href.indexOf("#")&&w(a.href)==k)){if(J){a:{do{if(!a.hasAttribute)break;if(a.hasAttribute("data-no-instant"))break;if(a.hasAttribute("data-instant")){a=!0;break a}}while(a=a.parentNode);a=!1}a=!a}else a:{do{if(!a.hasAttribute)break;
if(a.hasAttribute("data-instant"))break;if(a.hasAttribute("data-no-instant")){a=!0;break a}}while(a=a.parentNode);a=!1}b=a}return b?!1:!0}function t(a,b,c,g){for(var d=!1,e=0;e<B[a].length;e++)if("receive"==a){var f=B[a][e](b,c,g);f&&("body"in f&&(c=f.body),"title"in f&&(g=f.title),d=f)}else B[a][e](b,c,g);return d}function K(a,b,c,g){d.documentElement.replaceChild(b,d.body);if(c){history.pushState(null,null,c);b=c.indexOf("#");b=-1<b&&d.getElementById(c.substr(b+1));g=0;if(b)for(;b.offsetParent;)g+=
b.offsetTop,b=b.offsetParent;scrollTo(0,g);k=w(c)}else scrollTo(0,g);d.title=S&&d.title==a?a+String.fromCharCode(160):a;L();C.done();t("change",!1);a=d.createEvent("HTMLEvents");a.initEvent("instantclick:newpage",!0,!0);dispatchEvent(a)}function M(a){G>+new Date-500||(a=z(a.target))&&A(a)&&x(a.href)}function N(a){G>+new Date-500||(a=z(a.target))&&A(a)&&(a.addEventListener("mouseout",T),H?(O=a.href,l=setTimeout(x,H)):x(a.href))}function U(a){G=+new Date;(a=z(a.target))&&A(a)&&(D?a.removeEventListener("mousedown",
M):a.removeEventListener("mouseover",N),x(a.href))}function V(a){var b=z(a.target);!b||!A(b)||1<a.which||a.metaKey||a.ctrlKey||(a.preventDefault(),P(b.href))}function T(){l?(clearTimeout(l),l=!1):v&&!m&&(p.abort(),m=v=!1)}function W(){if(!(4>p.readyState)&&0!=p.status){q.ready=+new Date-q.start;if(p.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)){var a=d.implementation.createHTMLDocument("");a.documentElement.innerHTML=p.responseText.replace(/<noscript[\s\S]+<\/noscript>/gi,"");y=a.title;
u=a.body;var b=t("receive",r,u,y);b&&("body"in b&&(u=b.body),"title"in b&&(y=b.title));b=w(r);h[b]={body:u,title:y,scrollY:b in h?h[b].scrollY:0};for(var a=a.head.children,b=0,c,g=a.length-1;0<=g;g--)if(c=a[g],c.hasAttribute("data-instant-track")){c=c.getAttribute("href")||c.getAttribute("src")||c.innerHTML;for(var e=E.length-1;0<=e;e--)E[e]==c&&b++}b!=E.length&&(F=!0)}else F=!0;m&&(m=!1,P(r))}}function L(a){d.body.addEventListener("touchstart",U,!0);D?d.body.addEventListener("mousedown",M,!0):d.body.addEventListener("mouseover",
N,!0);d.body.addEventListener("click",V,!0);if(!a){a=d.body.getElementsByTagName("script");var b,c,g,e;i=0;for(j=a.length;i<j;i++)b=a[i],b.hasAttribute("data-no-instant")||(c=d.createElement("script"),b.src&&(c.src=b.src),b.innerHTML&&(c.innerHTML=b.innerHTML),g=b.parentNode,e=b.nextSibling,g.removeChild(b),g.insertBefore(c,e))}}function x(a){!D&&"display"in q&&100>+new Date-(q.start+q.display)||(l&&(clearTimeout(l),l=!1),a||(a=O),v&&(a==r||m))||(v=!0,m=!1,r=a,F=u=!1,q={start:+new Date},t("fetch"),
p.open("GET",a),p.send())}function P(a){"display"in q||(q.display=+new Date-q.start);l||!v?l&&r&&r!=a?e.href=a:(x(a),C.start(0,!0),t("wait"),m=!0):m?e.href=a:F?e.href=r:u?(h[k].scrollY=pageYOffset,m=v=!1,K(y,u,r)):(C.start(0,!0),t("wait"),m=!0)}var I=navigator.userAgent,S=-1<I.indexOf(" CriOS/"),Q="createTouch"in d,k,O,l,G,h={},p,r=!1,y=!1,F=!1,u=!1,q={},v=!1,m=!1,E=[],J,D,H,B={fetch:[],receive:[],wait:[],change:[]},C=function(){function a(a,e){n=a;d.getElementById(f.id)&&d.body.removeChild(f);f.style.opacity=
"1";d.getElementById(f.id)&&d.body.removeChild(f);g();e&&setTimeout(b,0);clearTimeout(l);l=setTimeout(c,500)}function b(){n=10;g()}function c(){n+=1+2*Math.random();98<=n?n=98:l=setTimeout(c,500);g()}function g(){h.style[k]="translate("+n+"%)";d.getElementById(f.id)||d.body.appendChild(f)}function e(){d.getElementById(f.id)?(clearTimeout(l),n=100,g(),f.style.opacity="0"):(a(100==n?0:n),setTimeout(e,0))}function m(){f.style.left=pageXOffset+"px";f.style.width=innerWidth+"px";f.style.top=pageYOffset+
"px";var a="orientation"in window&&90==Math.abs(orientation);f.style[k]="scaleY("+innerWidth/screen[a?"height":"width"]*2+")"}var f,h,k,n,l;return{init:function(){f=d.createElement("div");f.id="instantclick";h=d.createElement("div");h.id="instantclick-bar";h.className="instantclick-bar";f.appendChild(h);var a=["Webkit","Moz","O"];k="transform";if(!(k in h.style))for(var b=0;3>b;b++)a[b]+"Transform"in h.style&&(k=a[b]+"Transform");var c="transition";if(!(c in h.style))for(b=0;3>b;b++)a[b]+"Transition"in
h.style&&(c="-"+a[b].toLowerCase()+"-"+c);a=d.createElement("style");a.innerHTML="#instantclick{position:"+(Q?"absolute":"fixed")+";top:0;left:0;width:100%;pointer-events:none;z-index:2147483647;"+c+":opacity .25s .1s}.instantclick-bar{background:#29d;width:100%;margin-left:-100%;height:2px;"+c+":all .25s}";d.head.appendChild(a);Q&&(m(),addEventListener("resize",m),addEventListener("scroll",m))},start:a,done:e}}(),R="pushState"in history&&(!I.match("Android")||I.match("Chrome/"))&&"file:"!=e.protocol;
return{supported:R,init:function(){if(!k)if(R){for(var a=arguments.length-1;0<=a;a--){var b=arguments[a];!0===b?J=!0:"mousedown"==b?D=!0:"number"==typeof b&&(H=b)}k=w(e.href);h[k]={body:d.body,title:d.title,scrollY:pageYOffset};for(var b=d.head.children,c,a=b.length-1;0<=a;a--)c=b[a],c.hasAttribute("data-instant-track")&&(c=c.getAttribute("href")||c.getAttribute("src")||c.innerHTML,E.push(c));p=new XMLHttpRequest;p.addEventListener("readystatechange",W);L(!0);C.init();t("change",!0);addEventListener("popstate",
function(){var a=w(e.href);a!=k&&(a in h?(h[k].scrollY=pageYOffset,k=a,K(h[a].title,h[a].body,!1,h[a].scrollY)):e.href=e.href)})}else t("change",!0)},on:function(a,b){B[a].push(b)}}}(document,location);;!function () {
  function getAttr(script, attr, default_val) {
      return Number(script.getAttribute(attr)) || default_val;
  }

  // 获取自定义配置
  var ribbon = document.getElementById('ribbon');  // 当前加载的script
  config = {
      zIndex: getAttr(ribbon, "zIndex", -1), // z-index
      alpha: getAttr(ribbon, "alpha", 0.6), // alpha
      ribbon_width: getAttr(ribbon, "size", 90), // size
  };

  var canvas = document.createElement("canvas");
  canvas.style.cssText = "position:fixed;top:0;left:0;z-index:"+config.zIndex;
  document.getElementsByTagName("body")[0].appendChild(canvas);

  var canvasRibbon = canvas,
      ctx = canvasRibbon.getContext('2d'),    // 获取canvas 2d上下文
      dpr = window.devicePixelRatio || 1, // the size of one CSS pixel to the size of one physical pixel.
      width = window.innerWidth,     // 返回窗口的文档显示区的宽高
      height = window.innerHeight,
      RIBBON_WIDTH = config.ribbon_width,
      path,
      math = Math,
      r = 0,
      PI_2 = math.PI * 2,    // 圆周率*2
      cos = math.cos,   // cos函数返回一个数值的余弦值（-1~1）
      random = math.random;   // 返回0-1随机数

  canvasRibbon.width = width * dpr;     // 返回实际宽高
  canvasRibbon.height = height * dpr;
  ctx.scale(dpr, dpr);    // 水平、竖直方向缩放
  ctx.globalAlpha = config.alpha;  // 图形透明度

  function init() {
      ctx.clearRect(0, 0, width, height);     // 擦除之前绘制内容
      path = [{x: 0, y: height * 0.7 + RIBBON_WIDTH}, {x: 0, y: height * 0.7 - RIBBON_WIDTH}];
      // 路径没有填满屏幕宽度时，绘制路径
      while (path[1].x < width + RIBBON_WIDTH) {
          draw(path[0], path[1])
      }
  }

  function draw(start, end) {
      ctx.beginPath();    // 创建一个新的路径
      ctx.moveTo(start.x, start.y);   // path起点
      ctx.lineTo(end.x, end.y);   // path终点
      var nextX = end.x + (random() * 2 - 0.25) * RIBBON_WIDTH,
          nextY = geneY(end.y);
      ctx.lineTo(nextX, nextY);
      ctx.closePath();

      r -= PI_2 / -50;
      // 随机生成并设置canvas路径16进制颜色
      ctx.fillStyle = '#' + (cos(r) * 127 + 128 << 16 | cos(r + PI_2 / 3) * 127 + 128 << 8 | cos(r + PI_2 / 3 * 2) * 127 + 128).toString(16);
      ctx.fill();     // 根据当前样式填充路径
      path[0] = path[1];    // 起点更新为当前终点
      path[1] = {x: nextX, y: nextY}     // 更新终点
  }

  function geneY(y) {
      var temp = y + (random() * 2 - 1.1) * RIBBON_WIDTH;
      return (temp > height || temp < 0) ? geneY(y) : temp;
  }

  document.onclick = init;
  document.ontouchstart = init;
  init();
}();;NexT.utils = NexT.$u = {
  
  wrapImageWithFancyBox: function () {
    $('.content img')
      .not('[hidden]')
      .not('.group-picture img, .post-gallery img')
      .each(function () {
        var $image = $(this);
        var imageTitle = $image.attr('title');
        var $imageWrapLink = $image.parent('a');

        if ($imageWrapLink.size() < 1) {
	        var imageLink = ($image.attr('data-original')) ? this.getAttribute('data-original') : this.getAttribute('src');
          $imageWrapLink = $image.wrap('<a href="' + imageLink + '"></a>').parent('a');
        }

        $imageWrapLink.addClass('fancybox fancybox.image');
        $imageWrapLink.attr('rel', 'group');

        if (imageTitle) {
          $imageWrapLink.append('<p class="image-caption">' + imageTitle + '</p>');

          //make sure img title tag will show correctly in fancybox
          $imageWrapLink.attr('title', imageTitle);
        }
      });

    $('.fancybox').fancybox({
      helpers: {
        overlay: {
          locked: false
        }
      }
    });
  },

  lazyLoadPostsImages: function () {
    $('#posts').find('img').lazyload({
      //placeholder: '/images/loading.gif',
      effect: 'fadeIn',
      threshold : 0
    });
  },

  
  registerTabsTag: function () {
    var tNav = '.tabs ul.nav-tabs ';

    // Binding `nav-tabs` & `tab-content` by real time permalink changing.
    $(function() {
      $(window).bind('hashchange', function() {
        var tHash = location.hash;
        if (tHash !== '') {
          $(tNav + 'li:has(a[href="' + tHash + '"])').addClass('active').siblings().removeClass('active');
          $(tHash).addClass('active').siblings().removeClass('active');
        }
      }).trigger('hashchange');
    });

    $(tNav + '.tab').on('click', function (href) {
      href.preventDefault();
      // Prevent selected tab to select again.
      if(!$(this).hasClass('active')){

        // Add & Remove active class on `nav-tabs` & `tab-content`.
        $(this).addClass('active').siblings().removeClass('active');
        var tActive = $(this).find('a').attr('href');
        $(tActive).addClass('active').siblings().removeClass('active');

        // Clear location hash in browser if #permalink exists.
        if (location.hash !== '') {
          history.pushState('', document.title, window.location.pathname + window.location.search);
        }
      }
    });

  },

  registerESCKeyEvent: function () {
    $(document).on('keyup', function (event) {
      var shouldDismissSearchPopup = event.which === 27 &&
        $('.search-popup').is(':visible');
      if (shouldDismissSearchPopup) {
        $('.search-popup').hide();
        $('.search-popup-overlay').remove();
        $('body').css('overflow', '');
      }
    });
  },

  registerBackToTop: function () {
    var THRESHOLD = 50;
    var $top = $('.back-to-top');

    $(window).on('scroll', function () {
      $top.toggleClass('back-to-top-on', window.pageYOffset > THRESHOLD);

      var scrollTop = $(window).scrollTop();
      var contentVisibilityHeight = NexT.utils.getContentVisibilityHeight();
      var scrollPercent = (scrollTop) / (contentVisibilityHeight);
      var scrollPercentRounded = Math.round(scrollPercent*100);
      var scrollPercentMaxed = (scrollPercentRounded > 100) ? 100 : scrollPercentRounded;
      $('#scrollpercent>span').html(scrollPercentMaxed);
    });

    $top.on('click', function () {
      $('body').velocity('scroll');
    });
  },

  
  embeddedVideoTransformer: function () {
    var $iframes = $('iframe');

    // Supported Players. Extend this if you need more players.
    var SUPPORTED_PLAYERS = [
      'www.youtube.com',
      'player.vimeo.com',
      'player.youku.com',
      'music.163.com',
      'www.tudou.com'
    ];
    var pattern = new RegExp( SUPPORTED_PLAYERS.join('|') );

    $iframes.each(function () {
      var iframe = this;
      var $iframe = $(this);
      var oldDimension = getDimension($iframe);
      var newDimension;

      if (this.src.search(pattern) > 0) {

        // Calculate the video ratio based on the iframe's w/h dimensions
        var videoRatio = getAspectRadio(oldDimension.width, oldDimension.height);

        // Replace the iframe's dimensions and position the iframe absolute
        // This is the trick to emulate the video ratio
        $iframe.width('100%').height('100%')
          .css({
            position: 'absolute',
            top: '0',
            left: '0'
          });


        // Wrap the iframe in a new <div> which uses a dynamically fetched padding-top property
        // based on the video's w/h dimensions
        var wrap = document.createElement('div');
        wrap.className = 'fluid-vids';
        wrap.style.position = 'relative';
        wrap.style.marginBottom = '20px';
        wrap.style.width = '100%';
        wrap.style.paddingTop = videoRatio + '%';
        // Fix for appear inside tabs tag.
        (wrap.style.paddingTop === '') && (wrap.style.paddingTop = '50%');

        // Add the iframe inside our newly created <div>
        var iframeParent = iframe.parentNode;
        iframeParent.insertBefore(wrap, iframe);
        wrap.appendChild(iframe);

        // Additional adjustments for 163 Music
        if (this.src.search('music.163.com') > 0) {
          newDimension = getDimension($iframe);
          var shouldRecalculateAspect = newDimension.width > oldDimension.width ||
                                        newDimension.height < oldDimension.height;

          // 163 Music Player has a fixed height, so we need to reset the aspect radio
          if (shouldRecalculateAspect) {
            wrap.style.paddingTop = getAspectRadio(newDimension.width, oldDimension.height) + '%';
          }
        }
      }
    });

    function getDimension($element) {
      return {
        width: $element.width(),
        height: $element.height()
      };
    }

    function getAspectRadio(width, height) {
      return height / width * 100;
    }
  },

  
  addActiveClassToMenuItem: function () {
    var path = window.location.pathname;
    path = path === '/' ? path : path.substring(0, path.length - 1);
    $('.menu-item a[href^="' + path + '"]:first').parent().addClass('menu-item-active');
  },

  hasMobileUA: function () {
    var nav = window.navigator;
    var ua = nav.userAgent;
    var pa = /iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;

    return pa.test(ua);
  },

  isTablet: function () {
    return window.screen.width < 992 && window.screen.width > 767 && this.hasMobileUA();
  },

  isMobile: function () {
    return window.screen.width < 767 && this.hasMobileUA();
  },

  isDesktop: function () {
    return !this.isTablet() && !this.isMobile();
  },

  
  escapeSelector: function (selector) {
    return selector.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, '\\$&');
  },

  displaySidebar: function () {
    if (!this.isDesktop() || this.isPisces() || this.isGemini()) {
      return;
    }
    $('.sidebar-toggle').trigger('click');
  },

  isMist: function () {
    return CONFIG.scheme === 'Mist';
  },

  isPisces: function () {
    return CONFIG.scheme === 'Pisces';
  },

  isGemini: function () {
    return CONFIG.scheme === 'Gemini';
  },

  getScrollbarWidth: function () {
    var $div = $('<div />').addClass('scrollbar-measure').prependTo('body');
    var div = $div[0];
    var scrollbarWidth = div.offsetWidth - div.clientWidth;

    $div.remove();

    return scrollbarWidth;
  },

  getContentVisibilityHeight: function () {
    var docHeight = $('#content').height(),
        winHeight = $(window).height(),
        contentVisibilityHeight = (docHeight > winHeight) ? (docHeight - winHeight) : ($(document).height() - winHeight);
    return contentVisibilityHeight;
  },

  getSidebarb2tHeight: function () {
    //var sidebarb2tHeight = (CONFIG.sidebar.b2t) ? document.getElementsByClassName('back-to-top')[0].clientHeight : 0;
    var sidebarb2tHeight = (CONFIG.sidebar.b2t) ? $('.back-to-top').height() : 0;
    //var sidebarb2tHeight = (CONFIG.sidebar.b2t) ? 24 : 0;
    return sidebarb2tHeight;
  },

  getSidebarSchemePadding: function () {
    var sidebarNavHeight = ($('.sidebar-nav').css('display') == 'block') ? $('.sidebar-nav').outerHeight(true) : 0,
        sidebarInner = $('.sidebar-inner'),
        sidebarPadding = sidebarInner.innerWidth() - sidebarInner.width(),
        sidebarSchemePadding = this.isPisces() || this.isGemini() ?
          ((sidebarPadding * 2) + sidebarNavHeight + (CONFIG.sidebar.offset * 2) + this.getSidebarb2tHeight()) :
          ((sidebarPadding * 2) + (sidebarNavHeight / 2));
    return sidebarSchemePadding;
  }

  
//  needAffix: function () {
//    return this.isPisces() || this.isGemini();
//  }
};

$(document).ready(function () {

  initSidebarDimension();

  
  function initSidebarDimension () {
    var updateSidebarHeightTimer;

    $(window).on('resize', function () {
      updateSidebarHeightTimer && clearTimeout(updateSidebarHeightTimer);

      updateSidebarHeightTimer = setTimeout(function () {
        var sidebarWrapperHeight = document.body.clientHeight - NexT.utils.getSidebarSchemePadding();

        updateSidebarHeight(sidebarWrapperHeight);
      }, 0);
    });

    // Initialize Sidebar & TOC Width.
    var scrollbarWidth = NexT.utils.getScrollbarWidth();
      if ($('.site-overview-wrap').height() > (document.body.clientHeight - NexT.utils.getSidebarSchemePadding())) {
        $('.site-overview').css('width', 'calc(100% + ' + scrollbarWidth + 'px)');
      }
      if ($('.post-toc-wrap').height() > (document.body.clientHeight - NexT.utils.getSidebarSchemePadding())) {
        $('.post-toc').css('width', 'calc(100% + ' + scrollbarWidth + 'px)');
      }

    // Initialize Sidebar & TOC Height.
    updateSidebarHeight(document.body.clientHeight - NexT.utils.getSidebarSchemePadding());
  }

  function updateSidebarHeight (height) {
    height = height || 'auto';
    $('.site-overview, .post-toc').css('max-height', height);
  }

});;$(document).ready(function () {
  NexT.motion = {};

  var sidebarToggleLines = {
    lines: [],
    push: function (line) {
      this.lines.push(line);
    },
    init: function () {
      this.lines.forEach(function (line) {
        line.init();
      });
    },
    arrow: function () {
      this.lines.forEach(function (line) {
        line.arrow();
      });
    },
    close: function () {
      this.lines.forEach(function (line) {
        line.close();
      });
    }
  };

  function SidebarToggleLine(settings) {
    this.el = $(settings.el);
    this.status = $.extend({}, {
      init: {
        width: '100%',
        opacity: 1,
        left: 0,
        rotateZ: 0,
        top: 0
      }
    }, settings.status);
  }

  SidebarToggleLine.prototype.init = function () {
    this.transform('init');
  };
  SidebarToggleLine.prototype.arrow = function () {
    this.transform('arrow');
  };
  SidebarToggleLine.prototype.close = function () {
    this.transform('close');
  };
  SidebarToggleLine.prototype.transform = function (status) {
    this.el.velocity('stop').velocity(this.status[status]);
  };

  var sidebarToggleLine1st = new SidebarToggleLine({
    el: '.sidebar-toggle-line-first',
    status: {
      arrow: {width: '50%', rotateZ: '-45deg', top: '2px'},
      close: {width: '100%', rotateZ: '-45deg', top: '5px'}
    }
  });
  var sidebarToggleLine2nd = new SidebarToggleLine({
    el: '.sidebar-toggle-line-middle',
    status: {
      arrow: {width: '90%'},
      close: {opacity: 0}
    }
  });
  var sidebarToggleLine3rd = new SidebarToggleLine({
    el: '.sidebar-toggle-line-last',
    status: {
      arrow: {width: '50%', rotateZ: '45deg', top: '-2px'},
      close: {width: '100%', rotateZ: '45deg', top: '-5px'}
    }
  });

  sidebarToggleLines.push(sidebarToggleLine1st);
  sidebarToggleLines.push(sidebarToggleLine2nd);
  sidebarToggleLines.push(sidebarToggleLine3rd);

  var SIDEBAR_WIDTH = '320px';
  var SIDEBAR_DISPLAY_DURATION = 200;
  var xPos, yPos;

  var sidebarToggleMotion = {
    toggleEl: $('.sidebar-toggle'),
    dimmerEl: $('#sidebar-dimmer'),
    sidebarEl: $('.sidebar'),
    isSidebarVisible: false,
    init: function () {
      this.toggleEl.on('click', this.clickHandler.bind(this));
      this.dimmerEl.on('click', this.clickHandler.bind(this));
      this.toggleEl.on('mouseenter', this.mouseEnterHandler.bind(this));
      this.toggleEl.on('mouseleave', this.mouseLeaveHandler.bind(this));
      this.sidebarEl.on('touchstart', this.touchstartHandler.bind(this));
      this.sidebarEl.on('touchend', this.touchendHandler.bind(this));
      this.sidebarEl.on('touchmove', function(e){e.preventDefault();});

      $(document)
        .on('sidebar.isShowing', function () {
          NexT.utils.isDesktop() && $('body').velocity('stop').velocity(
            {paddingRight: SIDEBAR_WIDTH},
            SIDEBAR_DISPLAY_DURATION
          );
        })
        .on('sidebar.isHiding', function () {
        });
    },
    clickHandler: function () {
      this.isSidebarVisible ? this.hideSidebar() : this.showSidebar();
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    mouseEnterHandler: function () {
      if (this.isSidebarVisible) {
        return;
      }
      sidebarToggleLines.arrow();
    },
    mouseLeaveHandler: function () {
      if (this.isSidebarVisible) {
        return;
      }
      sidebarToggleLines.init();
    },
    touchstartHandler: function(e) {
      xPos = e.originalEvent.touches[0].clientX;
      yPos = e.originalEvent.touches[0].clientY;
    },
    touchendHandler: function(e) {
      var _xPos = e.originalEvent.changedTouches[0].clientX;
      var _yPos = e.originalEvent.changedTouches[0].clientY;
      if (_xPos-xPos > 30 && Math.abs(_yPos-yPos) < 20) {
          this.clickHandler();
      }
    },
    showSidebar: function () {
      var self = this;

      sidebarToggleLines.close();

      this.sidebarEl.velocity('stop').velocity({
          width: SIDEBAR_WIDTH
        }, {
          display: 'block',
          duration: SIDEBAR_DISPLAY_DURATION,
          begin: function () {
            $('.sidebar .motion-element').velocity(
              'transition.slideRightIn',
              {
                stagger: 50,
                drag: true,
                complete: function () {
                  self.sidebarEl.trigger('sidebar.motion.complete');
                }
              }
            );
          },
          complete: function () {
            self.sidebarEl.addClass('sidebar-active');
            self.sidebarEl.trigger('sidebar.didShow');
          }
        }
      );

      this.sidebarEl.trigger('sidebar.isShowing');
    },
    hideSidebar: function () {
      NexT.utils.isDesktop() && $('body').velocity('stop').velocity({paddingRight: 0});
      this.sidebarEl.find('.motion-element').velocity('stop').css('display', 'none');
      this.sidebarEl.velocity('stop').velocity({width: 0}, {display: 'none'});

      sidebarToggleLines.init();

      this.sidebarEl.removeClass('sidebar-active');
      this.sidebarEl.trigger('sidebar.isHiding');

      // Prevent adding TOC to Overview if Overview was selected when close & open sidebar.
      if (!!$('.post-toc-wrap')) {
        if ($('.site-overview-wrap').css('display') === 'block') {
          $('.post-toc-wrap').removeClass('motion-element');
        } else {
          $('.post-toc-wrap').addClass('motion-element');
        }
      }
    }
  };
  sidebarToggleMotion.init();

  NexT.motion.integrator = {
    queue: [],
    cursor: -1,
    add: function (fn) {
      this.queue.push(fn);
      return this;
    },
    next: function () {
      this.cursor++;
      var fn = this.queue[this.cursor];
      $.isFunction(fn) && fn(NexT.motion.integrator);
    },
    bootstrap: function () {
      this.next();
    }
  };

  NexT.motion.middleWares =  {
    logo: function (integrator) {
      var sequence = [];
      var $brand = $('.brand');
      var $title = $('.site-title');
      var $subtitle = $('.site-subtitle');
      var $logoLineTop = $('.logo-line-before i');
      var $logoLineBottom = $('.logo-line-after i');

      $brand.size() > 0 && sequence.push({
        e: $brand,
        p: {opacity: 1},
        o: {duration: 200}
      });

      NexT.utils.isMist() && hasElement([$logoLineTop, $logoLineBottom]) &&
      sequence.push(
        getMistLineSettings($logoLineTop, '100%'),
        getMistLineSettings($logoLineBottom, '-100%')
      );

      hasElement($title) && sequence.push({
        e: $title,
        p: {opacity: 1, top: 0},
        o: { duration: 200 }
      });

      hasElement($subtitle) && sequence.push({
        e: $subtitle,
        p: {opacity: 1, top: 0},
        o: {duration: 200}
      });

      if (CONFIG.motion.async) {
        integrator.next();
      }

      if (sequence.length > 0) {
        sequence[sequence.length - 1].o.complete = function () {
          integrator.next();
        };
        $.Velocity.RunSequence(sequence);
      } else {
        integrator.next();
      }


      function getMistLineSettings (element, translateX) {
        return {
          e: $(element),
          p: {translateX: translateX},
          o: {
            duration: 500,
            sequenceQueue: false
          }
        };
      }

      
      function hasElement ($elements) {
        $elements = Array.isArray($elements) ? $elements : [$elements];
        return $elements.every(function ($element) {
          return $.isFunction($element.size) && $element.size() > 0;
        });
      }
    },

    menu: function (integrator) {

      if (CONFIG.motion.async) {
        integrator.next();
      }

      $('.menu-item').velocity('transition.slideDownIn', {
        display: null,
        duration: 200,
        complete: function () {
          integrator.next();
        }
      });
    },

    postList: function (integrator) {
      //var $post = $('.post');
      var $postBlock = $('.post-block, .pagination, .comments');
      var $postBlockTransition = CONFIG.motion.transition.post_block;
      var $postHeader = $('.post-header');
      var $postHeaderTransition = CONFIG.motion.transition.post_header;
      var $postBody = $('.post-body');
      var $postBodyTransition = CONFIG.motion.transition.post_body;
      var $collHeader = $('.collection-title, .archive-year');
      var $collHeaderTransition = CONFIG.motion.transition.coll_header;
      var $sidebarAffix = $('.sidebar-inner');
      var $sidebarAffixTransition = CONFIG.motion.transition.sidebar;
      var hasPost = $postBlock.size() > 0;

      hasPost ? postMotion() : integrator.next();

      if (CONFIG.motion.async) {
        integrator.next();
      }

      function postMotion () {
        var postMotionOptions = window.postMotionOptions || {
            stagger: 100,
            drag: true
          };
        postMotionOptions.complete = function () {
          // After motion complete need to remove transform from sidebar to let affix work on Pisces | Gemini.
          if (CONFIG.motion.transition.sidebar && (NexT.utils.isPisces() || NexT.utils.isGemini())) {
            $sidebarAffix.css({ 'transform': 'initial' });
          }
          integrator.next();
        };

        //$post.velocity('transition.slideDownIn', postMotionOptions);
        if (CONFIG.motion.transition.post_block) {
          $postBlock.velocity('transition.' + $postBlockTransition, postMotionOptions);
        }
        if (CONFIG.motion.transition.post_header) {
          $postHeader.velocity('transition.' + $postHeaderTransition, postMotionOptions);
        }
        if (CONFIG.motion.transition.post_body) {
          $postBody.velocity('transition.' + $postBodyTransition, postMotionOptions);
        }
        if (CONFIG.motion.transition.coll_header) {
          $collHeader.velocity('transition.' + $collHeaderTransition, postMotionOptions);
        }
        // Only for Pisces | Gemini.
        if (CONFIG.motion.transition.sidebar && (NexT.utils.isPisces() || NexT.utils.isGemini())) {
          $sidebarAffix.velocity('transition.' + $sidebarAffixTransition, postMotionOptions);
        }
      }
    },

    sidebar: function (integrator) {
      if (CONFIG.sidebar.display === 'always') {
        NexT.utils.displaySidebar();
      }
      integrator.next();
    }
  };

});;+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.5'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);;$(document).ready(function () {

  var sidebarInner = $('.sidebar-inner');

  initAffix();
  resizeListener();

  function initAffix () {
    var headerOffset = getHeaderOffset(),
        footerOffset = getFooterOffset(),
        sidebarHeight = $('#sidebar').height() + NexT.utils.getSidebarb2tHeight(),
        contentHeight = $('#content').height();

    // Not affix if sidebar taller then content (to prevent bottom jumping).
    if (headerOffset + sidebarHeight < contentHeight) {
      sidebarInner.affix({
        offset: {
          top: headerOffset - CONFIG.sidebar.offset,
          bottom: footerOffset
        }
      });
    }

    setSidebarMarginTop(headerOffset).css({ 'margin-left': 'initial' });
  }

  function resizeListener () {
    var mql = window.matchMedia('(min-width: 991px)');
    mql.addListener(function(e){
      if(e.matches){
        recalculateAffixPosition();
      }
    });
  }

  function getHeaderOffset () {
    return $('.header-inner').height() + CONFIG.sidebar.offset;
  }

  function getFooterOffset () {
    var footerInner = $('.footer-inner'),
        footerMargin = footerInner.outerHeight(true) - footerInner.outerHeight(),
        footerOffset = footerInner.outerHeight(true) + footerMargin;
    return footerOffset;
  }

  function setSidebarMarginTop (headerOffset) {
    return $('#sidebar').css({ 'margin-top': headerOffset });
  }

  function recalculateAffixPosition () {
    $(window).off('.affix');
    sidebarInner.removeData('bs.affix').removeClass('affix affix-top affix-bottom');
    initAffix();
  }

});;+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.2'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(NexT.utils.escapeSelector(href)) // Need to escape selector.

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })


  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      $(this.selector).trigger('clear.bs.scrollspy')  // Add a custom event.
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);;$(document).ready(function () {

  initScrollSpy();

  function initScrollSpy () {
    var tocSelector = '.post-toc';
    var $tocElement = $(tocSelector);
    var activeCurrentSelector = '.active-current';

    $tocElement
      .on('activate.bs.scrollspy', function () {
        var $currentActiveElement = $(tocSelector + ' .active').last();

        removeCurrentActiveClass();
        $currentActiveElement.addClass('active-current');

        // Scrolling to center active TOC element if TOC content is taller then viewport.
        $tocElement.scrollTop($currentActiveElement.offset().top - $tocElement.offset().top + $tocElement.scrollTop() - ($tocElement.height() / 2));
      })
      .on('clear.bs.scrollspy', removeCurrentActiveClass);

    $('body').scrollspy({ target: tocSelector });

    function removeCurrentActiveClass () {
      $(tocSelector + ' ' + activeCurrentSelector)
        .removeClass(activeCurrentSelector.substring(1));
    }
  }

});

$(document).ready(function () {
  var html = $('html');
  var TAB_ANIMATE_DURATION = 200;
  var hasVelocity = $.isFunction(html.velocity);

  $('.sidebar-nav li').on('click', function () {
    var item = $(this);
    var activeTabClassName = 'sidebar-nav-active';
    var activePanelClassName = 'sidebar-panel-active';
    if (item.hasClass(activeTabClassName)) {
      return;
    }

    var currentTarget = $('.' + activePanelClassName);
    var target = $('.' + item.data('target'));

    hasVelocity ?
      currentTarget.velocity('transition.slideUpOut', TAB_ANIMATE_DURATION, function () {
        target
          .velocity('stop')
          .velocity('transition.slideDownIn', TAB_ANIMATE_DURATION)
          .addClass(activePanelClassName);
      }) :
      currentTarget.animate({ opacity: 0 }, TAB_ANIMATE_DURATION, function () {
        currentTarget.hide();
        target
          .stop()
          .css({'opacity': 0, 'display': 'block'})
          .animate({ opacity: 1 }, TAB_ANIMATE_DURATION, function () {
            currentTarget.removeClass(activePanelClassName);
            target.addClass(activePanelClassName);
          });
      });

    item.siblings().removeClass(activeTabClassName);
    item.addClass(activeTabClassName);
  });

  // TOC item animation navigate & prevent #item selector in adress bar.
  $('.post-toc a').on('click', function (e) {
    e.preventDefault();
    var targetSelector = NexT.utils.escapeSelector(this.getAttribute('href'));
    var offset = $(targetSelector).offset().top;

    hasVelocity ?
      html.velocity('stop').velocity('scroll', {
        offset: offset  + 'px',
        mobileHA: false
      }) :
      $('html, body').stop().animate({
        scrollTop: offset
      }, 500);
  });

  // Expand sidebar on post detail page by default, when post has a toc.
  var $tocContent = $('.post-toc-content');
  var isSidebarCouldDisplay = CONFIG.sidebar.display === 'post' ||
      CONFIG.sidebar.display === 'always';
  var hasTOC = $tocContent.length > 0 && $tocContent.html().trim().length > 0;
  if (isSidebarCouldDisplay && hasTOC) {
    CONFIG.motion.enable ?
      (NexT.motion.middleWares.sidebar = function () {
          NexT.utils.displaySidebar();
      }) : NexT.utils.displaySidebar();
  }
});;$(document).ready(function () {

  $(document).trigger('bootstrap:before');

  NexT.utils.isMobile() && window.FastClick.attach(document.body);

  NexT.utils.lazyLoadPostsImages();

  NexT.utils.registerESCKeyEvent();

  NexT.utils.registerBackToTop();

  // Mobile top menu bar.
  $('.site-nav-toggle button').on('click', function () {
    var $siteNav = $('.site-nav');
    var ON_CLASS_NAME = 'site-nav-on';
    var isSiteNavOn = $siteNav.hasClass(ON_CLASS_NAME);
    var animateAction = isSiteNavOn ? 'slideUp' : 'slideDown';
    var animateCallback = isSiteNavOn ? 'removeClass' : 'addClass';

    $siteNav.stop()[animateAction]('fast', function () {
      $siteNav[animateCallback](ON_CLASS_NAME);
    });
  });

  
  CONFIG.fancybox && NexT.utils.wrapImageWithFancyBox();
  CONFIG.tabs && NexT.utils.registerTabsTag();

  NexT.utils.embeddedVideoTransformer();
  NexT.utils.addActiveClassToMenuItem();


  // Define Motion Sequence.
  NexT.motion.integrator
    .add(NexT.motion.middleWares.logo)
    .add(NexT.motion.middleWares.menu)
    .add(NexT.motion.middleWares.postList)
    .add(NexT.motion.middleWares.sidebar);

  $(document).trigger('motion:before');

  // Bootstrap Motion.
  CONFIG.motion.enable && NexT.motion.integrator.bootstrap();

  $(document).trigger('bootstrap:after');
});;;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));;$(document).ready(function() {

  // Set relative link path (without domain)
  var rpath = window.location.href.replace(window.location.origin, "");

  // Write position in cookie
  var timeout;
  $(window).on("scroll", function() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      Cookies.set("scroll-cookie", ($(window).scrollTop() + "|" + rpath), { expires: 365, path: '' });
    }, 250);
  });

  // Read position from cookie
  if (Cookies.get("scroll-cookie") !== undefined) {
    var cvalues = Cookies.get("scroll-cookie").split('|');
      if (cvalues[1] == rpath) {
        $(window).scrollTop(cvalues[0]);
      }
  }

});;class Circle {
  constructor({ origin, speed, color, angle, context }) {
    this.origin = origin
    this.position = { ...this.origin }
    this.color = color
    this.speed = speed
    this.angle = angle
    this.context = context
    this.renderCount = 0
  }

  draw() {
    this.context.fillStyle = this.color
    this.context.beginPath()
    this.context.arc(this.position.x, this.position.y, 2, 0, Math.PI * 2)
    this.context.fill()
  }

  move() {
    this.position.x = (Math.sin(this.angle) * this.speed) + this.position.x
    this.position.y = (Math.cos(this.angle) * this.speed) + this.position.y + (this.renderCount * 0.3)
    this.renderCount++
  }
}

class Boom {
  constructor ({ origin, context, circleCount = 16, area }) {
    this.origin = origin
    this.context = context
    this.circleCount = circleCount
    this.area = area
    this.stop = false
    this.circles = []
  }

  randomArray(range) {
    const length = range.length
    const randomIndex = Math.floor(length * Math.random())
    return range[randomIndex]
  }

  randomColor() {
    const range = ['8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    return '#' + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range)
  }

  randomRange(start, end) {
    return (end - start) * Math.random() + start
  }

  init() {
    for(let i = 0; i < this.circleCount; i++) {
      const circle = new Circle({
        context: this.context,
        origin: this.origin,
        color: this.randomColor(),
        angle: this.randomRange(Math.PI - 1, Math.PI + 1),
        speed: this.randomRange(1, 6)
      })
      this.circles.push(circle)
    }
  }

  move() {
    this.circles.forEach((circle, index) => {
      if (circle.position.x > this.area.width || circle.position.y > this.area.height) {
        return this.circles.splice(index, 1)
      }
      circle.move()
    })
    if (this.circles.length == 0) {
      this.stop = true
    }
  }

  draw() {
    this.circles.forEach(circle => circle.draw())
  }
}

class CursorSpecialEffects {
  constructor() {
    this.computerCanvas = document.createElement('canvas')
    this.renderCanvas = document.createElement('canvas')

    this.computerContext = this.computerCanvas.getContext('2d')
    this.renderContext = this.renderCanvas.getContext('2d')

    this.globalWidth = window.innerWidth
    this.globalHeight = window.innerHeight

    this.booms = []
    this.running = false
  }

  handleMouseDown(e) {
    const boom = new Boom({
      origin: { x: e.clientX, y: e.clientY },
      context: this.computerContext,
      area: {
        width: this.globalWidth,
        height: this.globalHeight
      }
    })
    boom.init()
    this.booms.push(boom)
    this.running || this.run()
  }

  handlePageHide() {
    this.booms = []
    this.running = false
  }

  init() {
    const style = this.renderCanvas.style
    style.position = 'fixed'
    style.top = style.left = 0
    style.zIndex = '999999999999999999999999999999999999999999'
    style.pointerEvents = 'none'

    style.width = this.renderCanvas.width = this.computerCanvas.width = this.globalWidth
    style.height = this.renderCanvas.height = this.computerCanvas.height = this.globalHeight

    document.body.append(this.renderCanvas)

    window.addEventListener('mousedown', this.handleMouseDown.bind(this))
    window.addEventListener('pagehide', this.handlePageHide.bind(this))
  }

  run() {
    this.running = true
    if (this.booms.length == 0) {
      return this.running = false
    }

    requestAnimationFrame(this.run.bind(this))

    this.computerContext.clearRect(0, 0, this.globalWidth, this.globalHeight)
    this.renderContext.clearRect(0, 0, this.globalWidth, this.globalHeight)

    this.booms.forEach((boom, index) => {
      if (boom.stop) {
        return this.booms.splice(index, 1)
      }
      boom.move()
      boom.draw()
    })
    this.renderContext.drawImage(this.computerCanvas, 0, 0, this.globalWidth, this.globalHeight)
  }
}

const cursorSpecialEffects = new CursorSpecialEffects()
cursorSpecialEffects.init();(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==='object'&&typeof module==='object')module.exports=factory();else if(typeof define==='function'&&define.amd)define([],factory);else if(typeof exports==='object')exports["POWERMODE"]=factory();else root["POWERMODE"]=factory()})(this,function(){return(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0)})([function(module,exports,__webpack_require__){'use strict';var canvas=document.createElement('canvas');canvas.width=window.innerWidth;canvas.height=window.innerHeight;canvas.style.cssText='position:fixed;top:0;left:0;pointer-events:none;z-index:999999';window.addEventListener('resize',function(){canvas.width=window.innerWidth;canvas.height=window.innerHeight});document.body.appendChild(canvas);var context=canvas.getContext('2d');var particles=[];var particlePointer=0;POWERMODE.shake=true;function getRandom(min,max){return Math.random()*(max-min)+min}function getColor(el){if(POWERMODE.colorful){var u=getRandom(0,360);return'hsla('+getRandom(u-10,u+10)+', 100%, '+getRandom(50,80)+'%, '+1+')'}else{return window.getComputedStyle(el).color}}function getCaret(){var el=document.activeElement;var bcr;if(el.tagName==='TEXTAREA'||(el.tagName==='INPUT'&&el.getAttribute('type')==='text')){var offset=__webpack_require__(1)(el,el.selectionStart);bcr=el.getBoundingClientRect();return{x:offset.left+bcr.left,y:offset.top+bcr.top,color:getColor(el)}}var selection=window.getSelection();if(selection.rangeCount){var range=selection.getRangeAt(0);var startNode=range.startContainer;if(startNode.nodeType===document.TEXT_NODE){startNode=startNode.parentNode}bcr=range.getBoundingClientRect();return{x:bcr.left,y:bcr.top,color:getColor(startNode)}}return{x:0,y:0,color:'transparent'}}function createParticle(x,y,color){return{x:x,y:y,alpha:1,color:color,velocity:{x:-1+Math.random()*2,y:-3.5+Math.random()*2}}}function POWERMODE(){{var caret=getCaret();var numParticles=5+Math.round(Math.random()*10);while(numParticles--){particles[particlePointer]=createParticle(caret.x,caret.y,caret.color);particlePointer=(particlePointer+1)%500}}{if(POWERMODE.shake){var intensity=1+2*Math.random();var x=intensity*(Math.random()>0.5?-1:1);var y=intensity*(Math.random()>0.5?-1:1);document.body.style.marginLeft=x+'px';document.body.style.marginTop=y+'px';setTimeout(function(){document.body.style.marginLeft='';document.body.style.marginTop=''},75)}}};POWERMODE.colorful=false;function loop(){requestAnimationFrame(loop);context.clearRect(0,0,canvas.width,canvas.height);for(var i=0;i<particles.length;++i){var particle=particles[i];if(particle.alpha<=0.1)continue;particle.velocity.y+=0.075;particle.x+=particle.velocity.x;particle.y+=particle.velocity.y;particle.alpha*=0.96;context.globalAlpha=particle.alpha;context.fillStyle=particle.color;context.fillRect(Math.round(particle.x-1.5),Math.round(particle.y-1.5),3,3)}}requestAnimationFrame(loop);module.exports=POWERMODE},function(module,exports){(function(){var properties=['direction','boxSizing','width','height','overflowX','overflowY','borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth','borderStyle','paddingTop','paddingRight','paddingBottom','paddingLeft','fontStyle','fontVariant','fontWeight','fontStretch','fontSize','fontSizeAdjust','lineHeight','fontFamily','textAlign','textTransform','textIndent','textDecoration','letterSpacing','wordSpacing','tabSize','MozTabSize'];var isFirefox=window.mozInnerScreenX!=null;function getCaretCoordinates(element,position,options){var debug=options&&options.debug||false;if(debug){var el=document.querySelector('#input-textarea-caret-position-mirror-div');if(el){el.parentNode.removeChild(el)}}var div=document.createElement('div');div.id='input-textarea-caret-position-mirror-div';document.body.appendChild(div);var style=div.style;var computed=window.getComputedStyle?getComputedStyle(element):element.currentStyle;style.whiteSpace='pre-wrap';if(element.nodeName!=='INPUT')style.wordWrap='break-word';style.position='absolute';if(!debug)style.visibility='hidden';properties.forEach(function(prop){style[prop]=computed[prop]});if(isFirefox){if(element.scrollHeight>parseInt(computed.height))style.overflowY='scroll'}else{style.overflow='hidden'}div.textContent=element.value.substring(0,position);if(element.nodeName==='INPUT')div.textContent=div.textContent.replace(/\s/g,"\u00a0");var span=document.createElement('span');span.textContent=element.value.substring(position)||'.';div.appendChild(span);var coordinates={top:span.offsetTop+parseInt(computed['borderTopWidth']),left:span.offsetLeft+parseInt(computed['borderLeftWidth'])};if(debug){span.style.backgroundColor='#aaa'}else{document.body.removeChild(div)}return coordinates}if(typeof module!="undefined"&&typeof module.exports!="undefined"){module.exports=getCaretCoordinates}else{window.getCaretCoordinates=getCaretCoordinates}}())}])});;//注意：live2d_path参数应使用绝对路径
const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/"; //cdn加速
// const live2d_path = "/live2d-widget/";

//加载waifu.css
$("<link>").attr({ href: live2d_path + "waifu.css", rel: "stylesheet" }).appendTo("head");

//加载live2d.min.js
$.ajax({
	url: live2d_path + "live2d.min.js",
	dataType: "script",
	cache: true
});

//加载waifu-tips.js
$.ajax({
	url: live2d_path + "waifu-tips.js",
	dataType: "script",
	cache: true
});

//初始化看板娘，会自动加载指定目录下的waifu-tips.json
$(window).on("load", function() {
	initWidget(live2d_path + "waifu-tips.json", "https://live2d.fghrsh.net/api");
});
//initWidget第一个参数为waifu-tips.json的路径
//第二个参数为api地址（无需修改）
//api后端可自行搭建，参考https://github.com/fghrsh/live2d_api;!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("APlayer",[],t):"object"==typeof exports?exports.APlayer=t():e.APlayer=t()}(window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=41)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=/mobile/i.test(window.navigator.userAgent),a={secondToTime:function(e){var t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60),i=Math.floor(e-3600*t-60*n);return(t>0?[t,n,i]:[n,i]).map(function(e){return e<10?"0"+e:""+e}).join(":")},getElementViewLeft:function(e){var t=e.offsetLeft,n=e.offsetParent,i=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;null!==n&&n!==e;)t+=n.offsetLeft,n=n.offsetParent;else for(;null!==n;)t+=n.offsetLeft,n=n.offsetParent;return t-i},getElementViewTop:function(e,t){for(var n,i=e.offsetTop,a=e.offsetParent;null!==a;)i+=a.offsetTop,a=a.offsetParent;return n=document.body.scrollTop+document.documentElement.scrollTop,t?i:i-n},isMobile:i,storage:{set:function(e,t){localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)}},nameMap:{dragStart:i?"touchstart":"mousedown",dragMove:i?"touchmove":"mousemove",dragEnd:i?"touchend":"mouseup"},randomOrder:function(e){return function(e){for(var t=e.length-1;t>=0;t--){var n=Math.floor(Math.random()*(t+1)),i=e[n];e[n]=e[t],e[t]=i}return e}([].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(Array(e))).map(function(e,t){return t}))}};t.default=a},function(e,t,n){var i=n(2);e.exports=function(e){"use strict";e=e||{};var t="",n=i.$each,a=e.audio,r=(e.$value,e.$index,i.$escape),o=e.theme,s=e.index;return n(a,function(e,n){t+='\n<li>\n    <span class="aplayer-list-cur" style="background-color: ',t+=r(e.theme||o),t+=';"></span>\n    <span class="aplayer-list-index">',t+=r(n+s),t+='</span>\n    <span class="aplayer-list-title">',t+=r(e.name),t+='</span>\n    <span class="aplayer-list-author">',t+=r(e.artist),t+="</span>\n</li>\n"}),t}},function(e,t,n){"use strict";e.exports=n(15)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=g(n(33)),a=g(n(32)),r=g(n(31)),o=g(n(30)),s=g(n(29)),l=g(n(28)),u=g(n(27)),c=g(n(26)),p=g(n(25)),d=g(n(24)),h=g(n(23)),y=g(n(22)),f=g(n(21)),v=g(n(20)),m=g(n(19));function g(e){return e&&e.__esModule?e:{default:e}}var w={play:i.default,pause:a.default,volumeUp:r.default,volumeDown:o.default,volumeOff:s.default,orderRandom:l.default,orderList:u.default,menu:c.default,loopAll:p.default,loopOne:d.default,loopNone:h.default,loading:y.default,right:f.default,skip:v.default,lrc:m.default};t.default=w},function(e,t,n){"use strict";var i,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":a(window))&&(i=window)}e.exports=i},function(e,t,n){"use strict";var i,a,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};void 0===(a="function"==typeof(i=function(){if("object"===("undefined"==typeof window?"undefined":r(window))&&void 0!==document.querySelectorAll&&void 0!==window.pageYOffset&&void 0!==history.pushState){var e=function(e,t,n,i){return n>i?t:e+(t-e)*((a=n/i)<.5?4*a*a*a:(a-1)*(2*a-2)*(2*a-2)+1);var a},t=function(t,n,i,a){n=n||500;var r=(a=a||window).scrollTop||window.pageYOffset;if("number"==typeof t)var o=parseInt(t);else var o=function(e,t){return"HTML"===e.nodeName?-t:e.getBoundingClientRect().top+t}(t,r);var s=Date.now(),l=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,15)};!function u(){var c=Date.now()-s;a!==window?a.scrollTop=e(r,o,c,n):window.scroll(0,e(r,o,c,n)),c>n?"function"==typeof i&&i(t):l(u)}()},n=function(e){if(!e.defaultPrevented){e.preventDefault(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash);var n=document.getElementById(this.hash.substring(1));if(!n)return;t(n,500,function(e){location.replace("#"+e.id)})}};return document.addEventListener("DOMContentLoaded",function(){for(var e,t=document.querySelectorAll('a[href^="#"]:not([href="#"])'),i=t.length;e=t[--i];)e.addEventListener("click",n,!1)}),t}})?i.call(t,n,t,e):i)||(e.exports=a)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=s(n(1)),r=s(n(0)),o=s(n(5));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,this.index=0,this.audios=this.player.options.audio,this.bindEvents()}return i(e,[{key:"bindEvents",value:function(){var e=this;this.player.template.list.addEventListener("click",function(t){var n=void 0;n="LI"===t.target.tagName.toUpperCase()?t.target:t.target.parentElement;var i=parseInt(n.getElementsByClassName("aplayer-list-index")[0].innerHTML)-1;i!==e.index?(e.switch(i),e.player.play()):e.player.toggle()})}},{key:"show",value:function(){this.player.events.trigger("listshow"),this.player.template.list.classList.remove("aplayer-list-hide"),this.player.template.listOl.scrollTop=33*this.index}},{key:"hide",value:function(){this.player.events.trigger("listhide"),this.player.template.list.classList.add("aplayer-list-hide")}},{key:"toggle",value:function(){this.player.template.list.classList.contains("aplayer-list-hide")?this.show():this.hide()}},{key:"add",value:function(e){this.player.events.trigger("listadd",{audios:e}),"[object Array]"!==Object.prototype.toString.call(e)&&(e=[e]),e.map(function(e){return e.name=e.name||e.title||"Audio name",e.artist=e.artist||e.author||"Audio artist",e.cover=e.cover||e.pic,e.type=e.type||"normal",e});var t=!(this.audios.length>1),n=0===this.audios.length;this.player.template.listOl.innerHTML+=(0,a.default)({theme:this.player.options.theme,audio:e,index:this.audios.length+1}),this.audios=this.audios.concat(e),t&&this.audios.length>1&&this.player.container.classList.add("aplayer-withlist"),this.player.randomOrder=r.default.randomOrder(this.audios.length),this.player.template.listCurs=this.player.container.querySelectorAll(".aplayer-list-cur"),this.player.template.listCurs[this.audios.length-1].style.backgroundColor=e.theme||this.player.options.theme,n&&("random"===this.player.options.order?this.switch(this.player.randomOrder[0]):this.switch(0))}},{key:"remove",value:function(e){if(this.player.events.trigger("listremove",{index:e}),this.audios[e])if(this.audios.length>1){var t=this.player.container.querySelectorAll(".aplayer-list li");t[e].remove(),this.audios.splice(e,1),this.player.lrc&&this.player.lrc.remove(e),e===this.index&&(this.audios[e]?this.switch(e):this.switch(e-1)),this.index>e&&this.index--;for(var n=e;n<t.length;n++)t[n].getElementsByClassName("aplayer-list-index")[0].textContent=n;1===this.audios.length&&this.player.container.classList.remove("aplayer-withlist"),this.player.template.listCurs=this.player.container.querySelectorAll(".aplayer-list-cur")}else this.clear()}},{key:"switch",value:function(e){if(this.player.events.trigger("listswitch",{index:e}),void 0!==e&&this.audios[e]){this.index=e;var t=this.audios[this.index];this.player.template.pic.style.backgroundImage=t.cover?"url('"+t.cover+"')":"",this.player.theme(this.audios[this.index].theme||this.player.options.theme,this.index,!1),this.player.template.title.innerHTML=t.name,this.player.template.author.innerHTML=t.artist?" - "+t.artist:"";var n=this.player.container.getElementsByClassName("aplayer-list-light")[0];n&&n.classList.remove("aplayer-list-light"),this.player.container.querySelectorAll(".aplayer-list li")[this.index].classList.add("aplayer-list-light"),(0,o.default)(33*this.index,500,null,this.player.template.listOl),this.player.setAudio(t),this.player.lrc&&this.player.lrc.switch(this.index),this.player.lrc&&this.player.lrc.update(0),1!==this.player.duration&&(this.player.template.dtime.innerHTML=r.default.secondToTime(this.player.duration))}}},{key:"clear",value:function(){this.player.events.trigger("listclear"),this.index=0,this.player.container.classList.remove("aplayer-withlist"),this.player.pause(),this.audios=[],this.player.lrc&&this.player.lrc.clear(),this.player.audio.src="",this.player.template.listOl.innerHTML="",this.player.template.pic.style.backgroundImage="",this.player.theme(this.player.options.theme,this.index,!1),this.player.template.title.innerHTML="No audio",this.player.template.author.innerHTML="",this.player.bar.set("loaded",0,"width"),this.player.template.dtime.innerHTML=r.default.secondToTime(0)}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.events={},this.audioEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["destroy","listshow","listhide","listadd","listremove","listswitch","listclear","noticeshow","noticehide","lrcshow","lrchide"]}return i(e,[{key:"on",value:function(e,t){this.type(e)&&"function"==typeof t&&(this.events[e]||(this.events[e]=[]),this.events[e].push(t))}},{key:"trigger",value:function(e,t){if(this.events[e]&&this.events[e].length)for(var n=0;n<this.events[e].length;n++)this.events[e][n](t)}},{key:"type",value:function(e){return-1!==this.playerEvents.indexOf(e)?"player":-1!==this.audioEvents.indexOf(e)?"audio":(console.error("Unknown event name: "+e),null)}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},this.types=["loading"],this.init()}return i(e,[{key:"init",value:function(){var e=this;this.types.forEach(function(t){e["init"+t+"Checker"]()})}},{key:"initloadingChecker",value:function(){var e=this,t=0,n=0,i=!1;this.loadingChecker=setInterval(function(){e.enableloadingChecker&&(n=e.player.audio.currentTime,i||n!==t||e.player.audio.paused||(e.player.container.classList.add("aplayer-loading"),i=!0),i&&n>t&&!e.player.audio.paused&&(e.player.container.classList.remove("aplayer-loading"),i=!1),t=n)},100)}},{key:"enable",value:function(e){this["enable"+e+"Checker"]=!0,"fps"===e&&this.initfpsChecker()}},{key:"disable",value:function(e){this["enable"+e+"Checker"]=!1}},{key:"destroy",value:function(){var e=this;this.types.forEach(function(t){e["enable"+t+"Checker"]=!1,e[t+"Checker"]&&clearInterval(e[t+"Checker"])})}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=o(n(0)),r=o(n(3));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,this.initPlayButton(),this.initPlayBar(),this.initOrderButton(),this.initLoopButton(),this.initMenuButton(),a.default.isMobile||this.initVolumeButton(),this.initMiniSwitcher(),this.initSkipButton(),this.initLrcButton()}return i(e,[{key:"initPlayButton",value:function(){var e=this;this.player.template.pic.addEventListener("click",function(){e.player.toggle()})}},{key:"initPlayBar",value:function(){var e=this,t=function(t){var n=((t.clientX||t.changedTouches[0].clientX)-a.default.getElementViewLeft(e.player.template.barWrap))/e.player.template.barWrap.clientWidth;n=Math.max(n,0),n=Math.min(n,1),e.player.bar.set("played",n,"width"),e.player.lrc&&e.player.lrc.update(n*e.player.duration),e.player.template.ptime.innerHTML=a.default.secondToTime(n*e.player.duration)},n=function n(i){document.removeEventListener(a.default.nameMap.dragEnd,n),document.removeEventListener(a.default.nameMap.dragMove,t);var r=((i.clientX||i.changedTouches[0].clientX)-a.default.getElementViewLeft(e.player.template.barWrap))/e.player.template.barWrap.clientWidth;r=Math.max(r,0),r=Math.min(r,1),e.player.bar.set("played",r,"width"),e.player.seek(e.player.bar.get("played","width")*e.player.duration),e.player.disableTimeupdate=!1};this.player.template.barWrap.addEventListener(a.default.nameMap.dragStart,function(){e.player.disableTimeupdate=!0,document.addEventListener(a.default.nameMap.dragMove,t),document.addEventListener(a.default.nameMap.dragEnd,n)})}},{key:"initVolumeButton",value:function(){var e=this;this.player.template.volumeButton.addEventListener("click",function(){e.player.audio.muted?(e.player.audio.muted=!1,e.player.switchVolumeIcon(),e.player.bar.set("volume",e.player.volume(),"height")):(e.player.audio.muted=!0,e.player.switchVolumeIcon(),e.player.bar.set("volume",0,"height"))});var t=function(t){var n=1-((t.clientY||t.changedTouches[0].clientY)-a.default.getElementViewTop(e.player.template.volumeBar,e.player.options.fixed))/e.player.template.volumeBar.clientHeight;n=Math.max(n,0),n=Math.min(n,1),e.player.volume(n)},n=function n(i){e.player.template.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"),document.removeEventListener(a.default.nameMap.dragEnd,n),document.removeEventListener(a.default.nameMap.dragMove,t);var r=1-((i.clientY||i.changedTouches[0].clientY)-a.default.getElementViewTop(e.player.template.volumeBar,e.player.options.fixed))/e.player.template.volumeBar.clientHeight;r=Math.max(r,0),r=Math.min(r,1),e.player.volume(r)};this.player.template.volumeBarWrap.addEventListener(a.default.nameMap.dragStart,function(){e.player.template.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"),document.addEventListener(a.default.nameMap.dragMove,t),document.addEventListener(a.default.nameMap.dragEnd,n)})}},{key:"initOrderButton",value:function(){var e=this;this.player.template.order.addEventListener("click",function(){"list"===e.player.options.order?(e.player.options.order="random",e.player.template.order.innerHTML=r.default.orderRandom):"random"===e.player.options.order&&(e.player.options.order="list",e.player.template.order.innerHTML=r.default.orderList)})}},{key:"initLoopButton",value:function(){var e=this;this.player.template.loop.addEventListener("click",function(){e.player.list.audios.length>1?"one"===e.player.options.loop?(e.player.options.loop="none",e.player.template.loop.innerHTML=r.default.loopNone):"none"===e.player.options.loop?(e.player.options.loop="all",e.player.template.loop.innerHTML=r.default.loopAll):"all"===e.player.options.loop&&(e.player.options.loop="one",e.player.template.loop.innerHTML=r.default.loopOne):"one"===e.player.options.loop||"all"===e.player.options.loop?(e.player.options.loop="none",e.player.template.loop.innerHTML=r.default.loopNone):"none"===e.player.options.loop&&(e.player.options.loop="all",e.player.template.loop.innerHTML=r.default.loopAll)})}},{key:"initMenuButton",value:function(){var e=this;this.player.template.menu.addEventListener("click",function(){e.player.list.toggle()})}},{key:"initMiniSwitcher",value:function(){var e=this;this.player.template.miniSwitcher.addEventListener("click",function(){e.player.setMode("mini"===e.player.mode?"normal":"mini")})}},{key:"initSkipButton",value:function(){var e=this;this.player.template.skipBackButton.addEventListener("click",function(){e.player.skipBack()}),this.player.template.skipForwardButton.addEventListener("click",function(){e.player.skipForward()}),this.player.template.skipPlayButton.addEventListener("click",function(){e.player.toggle()})}},{key:"initLrcButton",value:function(){var e=this;this.player.template.lrcButton.addEventListener("click",function(){e.player.template.lrcButton.classList.contains("aplayer-icon-lrc-inactivity")?(e.player.template.lrcButton.classList.remove("aplayer-icon-lrc-inactivity"),e.player.lrc&&e.player.lrc.show()):(e.player.template.lrcButton.classList.add("aplayer-icon-lrc-inactivity"),e.player.lrc&&e.player.lrc.hide())})}}]),e}();t.default=s},function(e,t,n){var i=n(2);e.exports=function(e){"use strict";e=e||{};var t="",n=i.$each,a=e.lyrics,r=(e.$value,e.$index,i.$escape);return n(a,function(e,n){t+="\n    <p",0===n&&(t+=' class="aplayer-lrc-current"'),t+=">",t+=r(e[1]),t+="</p>\n"}),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(10),o=(i=r)&&i.__esModule?i:{default:i};var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t.container,this.async=t.async,this.player=t.player,this.parsed=[],this.index=0,this.current=[]}return a(e,[{key:"show",value:function(){this.player.events.trigger("lrcshow"),this.player.template.lrcWrap.classList.remove("aplayer-lrc-hide")}},{key:"hide",value:function(){this.player.events.trigger("lrchide"),this.player.template.lrcWrap.classList.add("aplayer-lrc-hide")}},{key:"toggle",value:function(){this.player.template.lrcWrap.classList.contains("aplayer-lrc-hide")?this.show():this.hide()}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.player.audio.currentTime;if(this.index>this.current.length-1||e<this.current[this.index][0]||!this.current[this.index+1]||e>=this.current[this.index+1][0])for(var t=0;t<this.current.length;t++)e>=this.current[t][0]&&(!this.current[t+1]||e<this.current[t+1][0])&&(this.index=t,this.container.style.transform="translateY("+16*-this.index+"px)",this.container.style.webkitTransform="translateY("+16*-this.index+"px)",this.container.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"),this.container.getElementsByTagName("p")[t].classList.add("aplayer-lrc-current"))}},{key:"switch",value:function(e){var t=this;if(!this.parsed[e])if(this.async){this.parsed[e]=[["00:00","Loading"]];var n=new XMLHttpRequest;n.onreadystatechange=function(){e===t.player.list.index&&4===n.readyState&&(n.status>=200&&n.status<300||304===n.status?t.parsed[e]=t.parse(n.responseText):(t.player.notice("LRC file request fails: status "+n.status),t.parsed[e]=[["00:00","Not available"]]),t.container.innerHTML=(0,o.default)({lyrics:t.parsed[e]}),t.update(0),t.current=t.parsed[e])};var i=this.player.list.audios[e].lrc;n.open("get",i,!0),n.send(null)}else this.player.list.audios[e].lrc?this.parsed[e]=this.parse(this.player.list.audios[e].lrc):this.parsed[e]=[["00:00","Not available"]];this.container.innerHTML=(0,o.default)({lyrics:this.parsed[e]}),this.update(0),this.current=this.parsed[e]}},{key:"parse",value:function(e){if(e){for(var t=(e=e.replace(/([^\]^\n])\[/g,function(e,t){return t+"\n["})).split("\n"),n=[],i=t.length,a=0;a<i;a++){var r=t[a].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),o=t[a].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(r)for(var s=r.length,l=0;l<s;l++){var u=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(r[l]),c=60*u[1]+parseInt(u[2])+(u[4]?parseInt(u[4])/(2===(u[4]+"").length?100:1e3):0);n.push([c,o])}}return(n=n.filter(function(e){return e[1]})).sort(function(e,t){return e[0]-t[0]}),n}return[]}},{key:"remove",value:function(e){this.parsed.splice(e,1)}},{key:"clear",value:function(){this.parsed=[],this.container.innerHTML=""}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(0),o=(i=r)&&i.__esModule?i:{default:i};var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.storageName=t.options.storageName,this.data=JSON.parse(o.default.storage.get(this.storageName)),this.data||(this.data={}),this.data.volume=this.data.volume||t.options.volume}return a(e,[{key:"get",value:function(e){return this.data[e]}},{key:"set",value:function(e,t){this.data[e]=t,o.default.storage.set(this.storageName,JSON.stringify(this.data))}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elements={},this.elements.volume=t.volume,this.elements.played=t.played,this.elements.loaded=t.loaded}return i(e,[{key:"set",value:function(e,t,n){t=Math.max(t,0),t=Math.min(t,1),this.elements[e].style[n]=100*t+"%"}},{key:"get",value:function(e,t){return parseFloat(this.elements[e].style[t])/100}}]),e}();t.default=a},function(e,t,n){"use strict";(function(t){e.exports=!1;try{e.exports="[object process]"===Object.prototype.toString.call(t.process)}catch(e){}}).call(this,n(4))},function(e,t,n){"use strict";(function(t){var i=n(14),a=Object.create(i?t:window),r=/["&'<>]/;a.$escape=function(e){return function(e){var t=""+e,n=r.exec(t);if(!n)return e;var i="",a=void 0,o=void 0,s=void 0;for(a=n.index,o=0;a<t.length;a++){switch(t.charCodeAt(a)){case 34:s="&#34;";break;case 38:s="&#38;";break;case 39:s="&#39;";break;case 60:s="&#60;";break;case 62:s="&#62;";break;default:continue}o!==a&&(i+=t.substring(o,a)),o=a+1,i+=s}return o!==a?i+t.substring(o,a):i}(function e(t){"string"!=typeof t&&(t=void 0===t||null===t?"":"function"==typeof t?e(t.call(t)):JSON.stringify(t));return t}(e))},a.$each=function(e,t){if(Array.isArray(e))for(var n=0,i=e.length;n<i;n++)t(e[n],n);else for(var a in e)t(e[a],a)},e.exports=a}).call(this,n(4))},function(e,t,n){var i=n(2);e.exports=function(e){"use strict";var t="",a=(e=e||{}).options,r=e.cover,o=i.$escape,s=e.icons,l=(arguments[1],function(e){return t+=e}),u=e.getObject;e.theme,e.audio,e.index;return a.fixed?(t+='\n<div class="aplayer-list',a.listFolded&&(t+=" aplayer-list-hide"),t+='"',a.listMaxHeight&&(t+=' style="max-height: ',t+=o(a.listMaxHeight),t+='"'),t+=">\n    <ol",a.listMaxHeight&&(t+=' style="max-height: ',t+=o(a.listMaxHeight),t+='"'),t+=">\n        ",l(n(1)(u({theme:a.theme,audio:a.audio,index:1}))),t+='\n    </ol>\n</div>\n<div class="aplayer-body">\n    <div class="aplayer-pic" style="',r&&(t+="background-image: url(&quot;",t+=o(r),t+="&quot;);"),t+="background-color: ",t+=o(a.theme),t+=';">\n        <div class="aplayer-button aplayer-play">',t+=s.play,t+='</div>\n    </div>\n    <div class="aplayer-info" style="display: none;">\n        <div class="aplayer-music">\n            <span class="aplayer-title">No audio</span>\n            <span class="aplayer-author"></span>\n        </div>\n        <div class="aplayer-controller">\n            <div class="aplayer-bar-wrap">\n                <div class="aplayer-bar">\n                    <div class="aplayer-loaded" style="width: 0"></div>\n                    <div class="aplayer-played" style="width: 0; background: ',t+=o(a.theme),t+=';">\n                        <span class="aplayer-thumb" style="background: ',t+=o(a.theme),t+=';">\n                            <span class="aplayer-loading-icon">',t+=s.loading,t+='</span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class="aplayer-time">\n                <span class="aplayer-time-inner">\n                    <span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span>\n                </span>\n                <span class="aplayer-icon aplayer-icon-back">\n                    ',t+=s.skip,t+='\n                </span>\n                <span class="aplayer-icon aplayer-icon-play">\n                    ',t+=s.play,t+='\n                </span>\n                <span class="aplayer-icon aplayer-icon-forward">\n                    ',t+=s.skip,t+='\n                </span>\n                <div class="aplayer-volume-wrap">\n                    <button type="button" class="aplayer-icon aplayer-icon-volume-down">\n                        ',t+=s.volumeDown,t+='\n                    </button>\n                    <div class="aplayer-volume-bar-wrap">\n                        <div class="aplayer-volume-bar">\n                            <div class="aplayer-volume" style="height: 80%; background: ',t+=o(a.theme),t+=';"></div>\n                        </div>\n                    </div>\n                </div>\n                <button type="button" class="aplayer-icon aplayer-icon-order">\n                    ',"list"===a.order?t+=s.orderList:"random"===a.order&&(t+=s.orderRandom),t+='\n                </button>\n                <button type="button" class="aplayer-icon aplayer-icon-loop">\n                    ',"one"===a.loop?t+=s.loopOne:"all"===a.loop?t+=s.loopAll:"none"===a.loop&&(t+=s.loopNone),t+='\n                </button>\n                <button type="button" class="aplayer-icon aplayer-icon-menu">\n                    ',t+=s.menu,t+='\n                </button>\n                <button type="button" class="aplayer-icon aplayer-icon-lrc">\n                    ',t+=s.lrc,t+='\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class="aplayer-notice"></div>\n    <div class="aplayer-miniswitcher"><button class="aplayer-icon">',t+=s.right,t+='</button></div>\n</div>\n<div class="aplayer-lrc">\n    <div class="aplayer-lrc-contents" style="transform: translateY(0); -webkit-transform: translateY(0);"></div>\n</div>\n'):(t+='\n<div class="aplayer-body">\n    <div class="aplayer-pic" style="',r&&(t+="background-image: url(&quot;",t+=o(r),t+="&quot;);"),t+="background-color: ",t+=o(a.theme),t+=';">\n        <div class="aplayer-button aplayer-play">',t+=s.play,t+='</div>\n    </div>\n    <div class="aplayer-info">\n        <div class="aplayer-music">\n            <span class="aplayer-title">No audio</span>\n            <span class="aplayer-author"></span>\n        </div>\n        <div class="aplayer-lrc">\n            <div class="aplayer-lrc-contents" style="transform: translateY(0); -webkit-transform: translateY(0);"></div>\n        </div>\n        <div class="aplayer-controller">\n            <div class="aplayer-bar-wrap">\n                <div class="aplayer-bar">\n                    <div class="aplayer-loaded" style="width: 0"></div>\n                    <div class="aplayer-played" style="width: 0; background: ',t+=o(a.theme),t+=';">\n                        <span class="aplayer-thumb" style="background: ',t+=o(a.theme),t+=';">\n                            <span class="aplayer-loading-icon">',t+=s.loading,t+='</span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class="aplayer-time">\n                <span class="aplayer-time-inner">\n                    <span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span>\n                </span>\n                <span class="aplayer-icon aplayer-icon-back">\n                    ',t+=s.skip,t+='\n                </span>\n                <span class="aplayer-icon aplayer-icon-play">\n                    ',t+=s.play,t+='\n                </span>\n                <span class="aplayer-icon aplayer-icon-forward">\n                    ',t+=s.skip,t+='\n                </span>\n                <div class="aplayer-volume-wrap">\n                    <button type="button" class="aplayer-icon aplayer-icon-volume-down">\n                        ',t+=s.volumeDown,t+='\n                    </button>\n                    <div class="aplayer-volume-bar-wrap">\n                        <div class="aplayer-volume-bar">\n                            <div class="aplayer-volume" style="height: 80%; background: ',t+=o(a.theme),t+=';"></div>\n                        </div>\n                    </div>\n                </div>\n                <button type="button" class="aplayer-icon aplayer-icon-order">\n                    ',"list"===a.order?t+=s.orderList:"random"===a.order&&(t+=s.orderRandom),t+='\n                </button>\n                <button type="button" class="aplayer-icon aplayer-icon-loop">\n                    ',"one"===a.loop?t+=s.loopOne:"all"===a.loop?t+=s.loopAll:"none"===a.loop&&(t+=s.loopNone),t+='\n                </button>\n                <button type="button" class="aplayer-icon aplayer-icon-menu">\n                    ',t+=s.menu,t+='\n                </button>\n                <button type="button" class="aplayer-icon aplayer-icon-lrc">\n                    ',t+=s.lrc,t+='\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class="aplayer-notice"></div>\n    <div class="aplayer-miniswitcher"><button class="aplayer-icon">',t+=s.right,t+='</button></div>\n</div>\n<div class="aplayer-list',a.listFolded&&(t+=" aplayer-list-hide"),t+='"',a.listMaxHeight&&(t+=' style="max-height: ',t+=o(a.listMaxHeight),t+='"'),t+=">\n    <ol",a.listMaxHeight&&(t+=' style="max-height: ',t+=o(a.listMaxHeight),t+='"'),t+=">\n        ",l(n(1)(u({theme:a.theme,audio:a.audio,index:1}))),t+="\n    </ol>\n</div>\n"),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=o(n(3)),r=o(n(16));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t.container,this.options=t.options,this.randomOrder=t.randomOrder,this.init()}return i(e,[{key:"init",value:function(){var e="";this.options.audio.length&&(e="random"===this.options.order?this.options.audio[this.randomOrder[0]].cover:this.options.audio[0].cover),this.container.innerHTML=(0,r.default)({options:this.options,icons:a.default,cover:e,getObject:function(e){return e}}),this.lrc=this.container.querySelector(".aplayer-lrc-contents"),this.lrcWrap=this.container.querySelector(".aplayer-lrc"),this.ptime=this.container.querySelector(".aplayer-ptime"),this.info=this.container.querySelector(".aplayer-info"),this.time=this.container.querySelector(".aplayer-time"),this.barWrap=this.container.querySelector(".aplayer-bar-wrap"),this.button=this.container.querySelector(".aplayer-button"),this.body=this.container.querySelector(".aplayer-body"),this.list=this.container.querySelector(".aplayer-list"),this.listOl=this.container.querySelector(".aplayer-list ol"),this.listCurs=this.container.querySelectorAll(".aplayer-list-cur"),this.played=this.container.querySelector(".aplayer-played"),this.loaded=this.container.querySelector(".aplayer-loaded"),this.thumb=this.container.querySelector(".aplayer-thumb"),this.volume=this.container.querySelector(".aplayer-volume"),this.volumeBar=this.container.querySelector(".aplayer-volume-bar"),this.volumeButton=this.container.querySelector(".aplayer-time button"),this.volumeBarWrap=this.container.querySelector(".aplayer-volume-bar-wrap"),this.loop=this.container.querySelector(".aplayer-icon-loop"),this.order=this.container.querySelector(".aplayer-icon-order"),this.menu=this.container.querySelector(".aplayer-icon-menu"),this.pic=this.container.querySelector(".aplayer-pic"),this.title=this.container.querySelector(".aplayer-title"),this.author=this.container.querySelector(".aplayer-author"),this.dtime=this.container.querySelector(".aplayer-dtime"),this.notice=this.container.querySelector(".aplayer-notice"),this.miniSwitcher=this.container.querySelector(".aplayer-miniswitcher"),this.skipBackButton=this.container.querySelector(".aplayer-icon-back"),this.skipForwardButton=this.container.querySelector(".aplayer-icon-forward"),this.skipPlayButton=this.container.querySelector(".aplayer-icon-play"),this.lrcButton=this.container.querySelector(".aplayer-icon-lrc")}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={container:e.element||document.getElementsByClassName("aplayer")[0],mini:e.narrow||e.fixed||!1,fixed:!1,autoplay:!1,mutex:!0,lrcType:e.showlrc||e.lrc||0,preload:"auto",theme:"#b7daff",loop:"all",order:"list",volume:.7,listFolded:e.fixed,listMaxHeight:e.listmaxheight||"250px",audio:e.music||[],storageName:"aplayer-setting"};for(var n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n]);return"[object Array]"!==Object.prototype.toString.call(e.audio)&&(e.audio=[e.audio]),e.audio.map(function(e){return e.name=e.name||e.title||"Audio name",e.artist=e.artist||e.author||"Audio artist",e.cover=e.cover||e.pic,e.type=e.type||"normal",e}),e.audio.length<=1&&"one"===e.loop&&(e.loop="all"),e}},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 33 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},function(e,t,n){"use strict";var i,a,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function l(e){if(i===setTimeout)return setTimeout(e,0);if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:o}catch(e){i=o}try{a="function"==typeof clearTimeout?clearTimeout:s}catch(e){a=s}}();var u,c=[],p=!1,d=-1;function h(){p&&u&&(p=!1,u.length?c=u.concat(c):d=-1,c.length&&y())}function y(){if(!p){var e=l(h);p=!0;for(var t=c.length;t;){for(u=c,c=[];++d<t;)u&&u[d].run();d=-1,t=c.length}u=null,p=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===s||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function v(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||p||l(y)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,n){"use strict";(function(e,t){!function(e,n){if(!e.setImmediate){var i,a,r,o,s,l=1,u={},c=!1,p=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?i=function(e){t.nextTick(function(){y(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){y(e.data)},i=function(e){r.port2.postMessage(e)}):p&&"onreadystatechange"in p.createElement("script")?(a=p.documentElement,i=function(e){var t=p.createElement("script");t.onreadystatechange=function(){y(e),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):i=function(e){setTimeout(y,0,e)}:(o="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&y(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),i=function(t){e.postMessage(o+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return u[l]=a,i(l),l++},d.clearImmediate=h}function h(e){delete u[e]}function y(e){if(c)setTimeout(y,0,e);else{var t=u[e];if(t){c=!0;try{!function(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(n,i)}}(t)}finally{h(e),c=!1}}}}}("undefined"==typeof self?void 0===e?void 0:e:self)}).call(this,n(4),n(34))},function(e,t,n){"use strict";var i=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new a(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new a(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(35),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,n){"use strict";(function(t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=setTimeout;function a(){}function r(e){if(!(this instanceof r))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(e,this)}function o(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,r._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var i;try{i=n(e._value)}catch(e){return void l(t.promise,e)}s(t.promise,i)}else(1===e._state?s:l)(t.promise,e._value)})):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===(void 0===t?"undefined":n(t))||"function"==typeof t)){var i=t.then;if(t instanceof r)return e._state=3,e._value=t,void u(e);if("function"==typeof i)return void c((a=i,o=t,function(){a.apply(o,arguments)}),e)}e._state=1,e._value=t,u(e)}catch(t){l(e,t)}var a,o}function l(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&r._immediateFn(function(){e._handled||r._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t]);e._deferreds=null}function c(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,l(t,e))})}catch(e){if(n)return;n=!0,l(t,e)}}r.prototype.catch=function(e){return this.then(null,e)},r.prototype.then=function(e,t){var n=new this.constructor(a);return o(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,n)),n},r.prototype.finally=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})},r.all=function(e){return new r(function(t,i){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var a=Array.prototype.slice.call(e);if(0===a.length)return t([]);var r=a.length;function o(e,s){try{if(s&&("object"===(void 0===s?"undefined":n(s))||"function"==typeof s)){var l=s.then;if("function"==typeof l)return void l.call(s,function(t){o(e,t)},i)}a[e]=s,0==--r&&t(a)}catch(e){i(e)}}for(var s=0;s<a.length;s++)o(s,a[s])})},r.resolve=function(e){return e&&"object"===(void 0===e?"undefined":n(e))&&e.constructor===r?e:new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,n){n(e)})},r.race=function(e){return new r(function(t,n){for(var i=0,a=e.length;i<a;i++)e[i].then(t,n)})},r._immediateFn="function"==typeof t&&function(e){t(e)}||function(e){i(e,0)},r._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},e.exports=r}).call(this,n(36).setImmediate)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=v(n(37)),r=v(n(0)),o=v(n(3)),s=v(n(18)),l=v(n(17)),u=v(n(13)),c=v(n(12)),p=v(n(11)),d=v(n(9)),h=v(n(8)),y=v(n(7)),f=v(n(6));function v(e){return e&&e.__esModule?e:{default:e}}var m=[],g=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=(0,s.default)(t),this.container=this.options.container,this.paused=!0,this.playedPromise=a.default.resolve(),this.mode="normal",this.randomOrder=r.default.randomOrder(this.options.audio.length),this.container.classList.add("aplayer"),this.options.lrcType&&!this.options.fixed&&this.container.classList.add("aplayer-withlrc"),this.options.audio.length>1&&this.container.classList.add("aplayer-withlist"),r.default.isMobile&&this.container.classList.add("aplayer-mobile"),this.arrow=this.container.offsetWidth<=300,this.arrow&&this.container.classList.add("aplayer-arrow"),this.container=this.options.container,2===this.options.lrcType||!0===this.options.lrcType)for(var n=this.container.getElementsByClassName("aplayer-lrc-content"),i=0;i<n.length;i++)this.options.audio[i]&&(this.options.audio[i].lrc=n[i].innerHTML);this.template=new l.default({container:this.container,options:this.options,randomOrder:this.randomOrder}),this.options.fixed&&(this.container.classList.add("aplayer-fixed"),this.template.body.style.width=this.template.body.offsetWidth-18+"px"),this.options.mini&&(this.setMode("mini"),this.template.info.style.display="block"),this.template.info.offsetWidth<200&&this.template.time.classList.add("aplayer-time-narrow"),this.options.lrcType&&(this.lrc=new p.default({container:this.template.lrc,async:3===this.options.lrcType,player:this})),this.events=new y.default,this.storage=new c.default(this),this.bar=new u.default(this.template),this.controller=new d.default(this),this.timer=new h.default(this),this.list=new f.default(this),this.initAudio(),this.bindEvents(),"random"===this.options.order?this.list.switch(this.randomOrder[0]):this.list.switch(0),this.options.autoplay&&this.play(),m.push(this)}return i(e,[{key:"initAudio",value:function(){var e=this;this.audio=document.createElement("audio"),this.audio.preload=this.options.preload;for(var t=function(t){e.audio.addEventListener(e.events.audioEvents[t],function(n){e.events.trigger(e.events.audioEvents[t],n)})},n=0;n<this.events.audioEvents.length;n++)t(n);this.volume(this.storage.get("volume"),!0)}},{key:"bindEvents",value:function(){var e=this;this.on("play",function(){e.paused&&e.setUIPlaying()}),this.on("pause",function(){e.paused||e.setUIPaused()}),this.on("timeupdate",function(){if(!e.disableTimeupdate){e.bar.set("played",e.audio.currentTime/e.duration,"width"),e.lrc&&e.lrc.update();var t=r.default.secondToTime(e.audio.currentTime);e.template.ptime.innerHTML!==t&&(e.template.ptime.innerHTML=t)}}),this.on("durationchange",function(){1!==e.duration&&(e.template.dtime.innerHTML=r.default.secondToTime(e.duration))}),this.on("progress",function(){var t=e.audio.buffered.length?e.audio.buffered.end(e.audio.buffered.length-1)/e.duration:0;e.bar.set("loaded",t,"width")});var t=void 0;this.on("error",function(){e.list.audios.length>1?(e.notice("An audio error has occurred, player will skip forward in 2 seconds."),t=setTimeout(function(){e.skipForward(),e.paused||e.play()},2e3)):1===e.list.audios.length&&e.notice("An audio error has occurred.")}),this.events.on("listswitch",function(){t&&clearTimeout(t)}),this.on("ended",function(){"none"===e.options.loop?"list"===e.options.order?e.list.index<e.list.audios.length-1?(e.list.switch((e.list.index+1)%e.list.audios.length),e.play()):(e.list.switch((e.list.index+1)%e.list.audios.length),e.pause()):"random"===e.options.order&&(e.randomOrder.indexOf(e.list.index)<e.randomOrder.length-1?(e.list.switch(e.nextIndex()),e.play()):(e.list.switch(e.nextIndex()),e.pause())):"one"===e.options.loop?(e.list.switch(e.list.index),e.play()):"all"===e.options.loop&&(e.skipForward(),e.play())})}},{key:"setAudio",value:function(e){this.hls&&(this.hls.destroy(),this.hls=null);var t=e.type;this.options.customAudioType&&this.options.customAudioType[t]?"[object Function]"===Object.prototype.toString.call(this.options.customAudioType[t])?this.options.customAudioType[t](this.audio,e,this):console.error("Illegal customType: "+t):(t&&"auto"!==t||(t=/m3u8(#|\?|$)/i.exec(e.url)?"hls":"normal"),"hls"===t?Hls.isSupported()?(this.hls=new Hls,this.hls.loadSource(e.url),this.hls.attachMedia(this.audio)):this.audio.canPlayType("application/x-mpegURL")||this.audio.canPlayType("application/vnd.apple.mpegURL")?this.audio.src=e.url:this.notice("Error: HLS is not supported."):"normal"===t&&(this.audio.src=e.url)),this.seek(0),this.paused||this.audio.play()}},{key:"theme",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.list.audios[this.list.index].theme||this.options.theme,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.list.index;(!(arguments.length>2&&void 0!==arguments[2])||arguments[2])&&this.list.audios[t]&&(this.list.audios[t].theme=e),this.template.listCurs[t]&&(this.template.listCurs[t].style.backgroundColor=e),t===this.list.index&&(this.template.pic.style.backgroundColor=e,this.template.played.style.background=e,this.template.thumb.style.background=e,this.template.volume.style.background=e)}},{key:"seek",value:function(e){e=Math.max(e,0),e=Math.min(e,this.duration),this.audio.currentTime=e,this.bar.set("played",e/this.duration,"width"),this.template.ptime.innerHTML=r.default.secondToTime(e)}},{key:"setUIPlaying",value:function(){var e=this;if(this.paused&&(this.paused=!1,this.template.button.classList.remove("aplayer-play"),this.template.button.classList.add("aplayer-pause"),this.template.button.innerHTML="",setTimeout(function(){e.template.button.innerHTML=o.default.pause},100),this.template.skipPlayButton.innerHTML=o.default.pause),this.timer.enable("loading"),this.options.mutex)for(var t=0;t<m.length;t++)this!==m[t]&&m[t].pause()}},{key:"play",value:function(){var e=this;this.setUIPlaying();var t=this.audio.play();t&&t.catch(function(t){console.warn(t),"NotAllowedError"===t.name&&e.setUIPaused()})}},{key:"setUIPaused",value:function(){var e=this;this.paused||(this.paused=!0,this.template.button.classList.remove("aplayer-pause"),this.template.button.classList.add("aplayer-play"),this.template.button.innerHTML="",setTimeout(function(){e.template.button.innerHTML=o.default.play},100),this.template.skipPlayButton.innerHTML=o.default.play),this.container.classList.remove("aplayer-loading"),this.timer.disable("loading")}},{key:"pause",value:function(){this.setUIPaused(),this.audio.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeButton.innerHTML=o.default.volumeUp:this.volume()>0?this.template.volumeButton.innerHTML=o.default.volumeDown:this.template.volumeButton.innerHTML=o.default.volumeOff}},{key:"volume",value:function(e,t){return e=parseFloat(e),isNaN(e)||(e=Math.max(e,0),e=Math.min(e,1),this.bar.set("volume",e,"height"),t||this.storage.set("volume",e),this.audio.volume=e,this.audio.muted&&(this.audio.muted=!1),this.switchVolumeIcon()),this.audio.muted?0:this.audio.volume}},{key:"on",value:function(e,t){this.events.on(e,t)}},{key:"toggle",value:function(){this.template.button.classList.contains("aplayer-play")?this.play():this.template.button.classList.contains("aplayer-pause")&&this.pause()}},{key:"switchAudio",value:function(e){this.list.switch(e)}},{key:"addAudio",value:function(e){this.list.add(e)}},{key:"removeAudio",value:function(e){this.list.remove(e)}},{key:"destroy",value:function(){m.splice(m.indexOf(this),1),this.pause(),this.container.innerHTML="",this.audio.src="",this.timer.destroy(),this.events.trigger("destroy")}},{key:"setMode",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"normal";this.mode=e,"mini"===e?this.container.classList.add("aplayer-narrow"):"normal"===e&&this.container.classList.remove("aplayer-narrow")}},{key:"notice",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.8;this.template.notice.innerHTML=e,this.template.notice.style.opacity=i,this.noticeTime&&clearTimeout(this.noticeTime),this.events.trigger("noticeshow",{text:e}),n&&(this.noticeTime=setTimeout(function(){t.template.notice.style.opacity=0,t.events.trigger("noticehide")},n))}},{key:"prevIndex",value:function(){if(!(this.list.audios.length>1))return 0;if("list"===this.options.order)return this.list.index-1<0?this.list.audios.length-1:this.list.index-1;if("random"===this.options.order){var e=this.randomOrder.indexOf(this.list.index);return 0===e?this.randomOrder[this.randomOrder.length-1]:this.randomOrder[e-1]}}},{key:"nextIndex",value:function(){if(!(this.list.audios.length>1))return 0;if("list"===this.options.order)return(this.list.index+1)%this.list.audios.length;if("random"===this.options.order){var e=this.randomOrder.indexOf(this.list.index);return e===this.randomOrder.length-1?this.randomOrder[0]:this.randomOrder[e+1]}}},{key:"skipBack",value:function(){this.list.switch(this.prevIndex())}},{key:"skipForward",value:function(){this.list.switch(this.nextIndex())}},{key:"duration",get:function(){return isNaN(this.audio.duration)?0:this.audio.duration}}],[{key:"version",get:function(){return"1.10.1"}}]),e}();t.default=g},,function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(40);var i,a=n(38),r=(i=a)&&i.__esModule?i:{default:i};console.log("\n %c APlayer v1.10.1 af84efb %c http://aplayer.js.org \n","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;"),t.default=r.default}]).default});
//# sourceMappingURL=APlayer.min.js.map;const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  lrcType: 0,
  audio: [
    {
      name: "偏爱",
      artist: '张芸京',
      url: 'http://music.163.com/song/media/outer/url?id=86369',
      cover: 'http://star.kuwo.cn/star/starheads/180/24/49/1438549359.jpg',
      lrc: 'LRC/许巍-无尽光芒.lrc',
    },
    // {
    //   name: '第三极',
    //   artist: '许巍',
    //   url: 'http://www.ytmp3.cn/down/31601.mp3',
    //   cover: 'https://s2.ax1x.com/2019/08/08/e7M5VK.png',
    // },
    {
      name: '	此生不换仙剑奇侠传三 电视剧原声带',
      artist: '青鸟飞鱼',
      url: 'http://music.163.com/song/media/outer/url?id=86363',
      cover: 'http://p2.music.126.net/2-_sPmCBnN6VfwFmONRy2Q==/46179488378975.jpg?param=130y130',
    },
    {
      name: '忘记时间仙剑奇侠传三 电视剧原声带',
      artist: '胡歌',
      url: 'http://music.163.com/song/media/outer/url?id=86360',
      cover: 'http://p2.music.126.net/2-_sPmCBnN6VfwFmONRy2Q==/46179488378975.jpg?param=130y130',
    },
    // ,
    // {
    //   name: 'My Love',
    //   artist: 'Westlife',
    //   url: 'http://www.ytmp3.cn/down/50091.mp3',
    //   cover: 'https://s2.ax1x.com/2019/08/08/e7M5VK.png',
    // }
   {
      name: '失眠飞行',
      artist: '接个吻，开一枪 / 沈以诚 / 薛明媛',
      url: 'http://music.163.com/song/media/outer/url?id=1365898499',
      cover: 'http://p1.music.126.net/Bq6Io8lpY1l2HsQ28QKFlw==/109951164083996255.jpg?param=130y130',
    },
   {
      name: '圈住你',
      artist: '巧乐兹',
      url: 'http://music.163.com/song/media/outer/url?id=1388357890',
      cover: 'http://p2.music.126.net/adU6WbJI4uZMpfkPXIMyQQ==/109951164359250906.jpg?param=130y130',
    },
   {
      name: '画',
      artist: '王巨星',
      url: 'http://music.163.com/song/media/outer/url?id=1379416556',
      cover: 'http://p1.music.126.net/XoOjqWvL3MUZIDADjoNacA==/109951164347163273.jpg?param=130y130',
    },
    {
      name: '太阳 (完整版) (Cover：邱振哲)',
      artist: '程佳佳',
      url: 'http://music.163.com/song/media/outer/url?id=1387178379',
      cover: 'http://p2.music.126.net/g0XBgjDBKm6aTC1IIPYFgA==/109951164328580208.jpg?param=130y130',
    },
    {
      name: 'Sansa Lala',
      artist: 'lala',
      url: 'http://music.163.com/song/media/outer/url?id=1327781623',
      cover: 'http://p2.music.126.net/Jl9DEf4VGLaBi_DEyaJqPw==/109951163779294836.jpg?param=130y130',
    },
    {
      name: '一直很安静',
      artist: '阿桑',
      url: 'http://music.163.com/song/media/outer/url?id=5260494',
      cover: 'http://p2.music.126.net/Zyji-kiWpjLF19CF0yHSlg==/1727332767246198.jpg?param=130y130',
    },{"name": "Everybody", "cover": "http://p2.music.126.net/aoKHoweQRAukG6mwUAfkEw==/109951163453374655.jpg?param=130y130", "artist": "Ingrid Michaelson", "url": "http://music.163.com/song/media/outer/url?id=18374823"}, {"name": "2019无敌大串烧 (Cover：群星)", "cover": "http://p2.music.126.net/ovQ2RcuzaxBUboC4FDsHBw==/109951164305327722.jpg?param=130y130", "artist": "沈虫虫", "url": "http://music.163.com/song/media/outer/url?id=1385126398"}, {"name": "太阳 (完整版) (Cover：邱振哲)", "cover": "http://p2.music.126.net/g0XBgjDBKm6aTC1IIPYFgA==/109951164328580208.jpg?param=130y130", "artist": "程佳佳", "url": "http://music.163.com/song/media/outer/url?id=1387178379"}, {"name": "李圣杰-最近DJ版（DJ黎小霸 remix）", "cover": "http://p1.music.126.net/9xcTL106C4Pem9NL_IQiTw==/109951163941921976.jpg?param=130y130", "artist": "黎小霸", "url": "http://music.163.com/song/media/outer/url?id=1353288660"}, {"name": "圈住你", "cover": "http://p2.music.126.net/adU6WbJI4uZMpfkPXIMyQQ==/109951164359250906.jpg?param=130y130", "artist": "巧乐兹", "url": "http://music.163.com/song/media/outer/url?id=1388357890"}, {"name": "重复犯错", "cover": "http://p1.music.126.net/J7qqZaVGm-fPDkUlGP4czw==/109951163200247709.jpg?param=130y130", "artist": "古巨基", "url": "http://music.163.com/song/media/outer/url?id=86464"}, {"name": "芒种", "cover": "http://p1.music.126.net/7ZKMPIvPcwaK08ffDBTjJw==/109951164124664532.jpg?param=130y130", "artist": "音阙诗听", "url": "http://music.163.com/song/media/outer/url?id=1369798757"}, {"name": "坠落星空", "cover": "http://p1.music.126.net/-kDO5LiKki3bmeF21MaCuQ==/109951163917806959.jpg?param=130y130", "artist": "小星星Aurora", "url": "http://music.163.com/song/media/outer/url?id=1351520305"}, {"name": "画", "cover": "http://p1.music.126.net/XoOjqWvL3MUZIDADjoNacA==/109951164347163273.jpg?param=130y130", "artist": "王巨星", "url": "http://music.163.com/song/media/outer/url?id=1379416556"}, {"name": "失眠飞行", "cover": "http://p1.music.126.net/Bq6Io8lpY1l2HsQ28QKFlw==/109951164083996255.jpg?param=130y130", "artist": "接个吻，开一枪", "url": "http://music.163.com/song/media/outer/url?id=1365898499"}, {"name": "无赖", "cover": "http://p2.music.126.net/2vFBKWUmF_jiWGaBgO6RaA==/17648261137761966.jpg?param=130y130", "artist": "郑中基", "url": "http://music.163.com/song/media/outer/url?id=191171"}, {"name": "情人-抖音live完整版", "cover": "http://p2.music.126.net/Ij3cuSbc9stjr5ED6s3hgw==/109951163703576809.jpg?param=130y130", "artist": "杨彦好(Mark.Yeung)", "url": "http://music.163.com/song/media/outer/url?id=1334014687"}, {"name": "7.28_", "cover": "http://p2.music.126.net/E7pmUYgj9UKhMTs2fuKAew==/109951163713459101.jpg?param=130y130", "artist": "不知春去", "url": "http://music.163.com/song/media/outer/url?id=1332052986"}, {"name": "Sansa Lala", "cover": "http://p1.music.126.net/Jl9DEf4VGLaBi_DEyaJqPw==/109951163779294836.jpg?param=130y130", "artist": "Kayaz", "url": "http://music.163.com/song/media/outer/url?id=1327781623"}, {"name": "串烧", "cover": "http://p2.music.126.net/9FIMdyHY58nO0wLYBusFmQ==/109951163138340227.jpg?param=130y130", "artist": "许天昱", "url": "http://music.163.com/song/media/outer/url?id=536841326"}, {"name": "All Time Low", "cover": "http://p1.music.126.net/Fb07N5IYB2gaqVR0ds-hLw==/18701593278659791.jpg?param=130y130", "artist": "Kurt Hugo Schneider", "url": "http://music.163.com/song/media/outer/url?id=461544312"}, {"name": "弱点 (DJ咚鼓版)", "cover": "http://p2.music.126.net/a2F1Gnzs9nT-G7eoiLkTfw==/109951163469767260.jpg?param=130y130", "artist": "承利", "url": "http://music.163.com/song/media/outer/url?id=1302953360"}, {"name": "后来(咚鼓版)", "cover": "http://p1.music.126.net/WnuvS0hOsvQwKnoryAf1Dg==/109951163616405051.jpg?param=130y130", "artist": "浪子康", "url": "http://music.163.com/song/media/outer/url?id=1306908061"}, {"name": "如果的事 (Cover：张韶涵&范玮琪)", "cover": "http://p2.music.126.net/kVE4JQVDogxWw8Zqq-jxcQ==/109951164048013225.jpg?param=130y130", "artist": "superluckyqi", "url": "http://music.163.com/song/media/outer/url?id=1363078221"}, {"name": "身骑白马 (cover：徐佳莹)", "cover": "http://p2.music.126.net/e8H_QXXvsC4nng55haVoWA==/109951164075582426.jpg?param=130y130", "artist": "张小伙", "url": "http://music.163.com/song/media/outer/url?id=1365428235"}, {"name": "公子向北走", "cover": "http://p1.music.126.net/EeCOXlqwFfuY4vHsS0foKA==/109951163876806880.jpg?param=130y130", "artist": "李春花", "url": "http://music.163.com/song/media/outer/url?id=1347181386"}, {"name": "这一生关于你的风景", "cover": "http://p2.music.126.net/cPkQaIjsYNKqNUUSgnJztQ==/109951164096998306.jpg?param=130y130", "artist": "枯木逢春", "url": "http://music.163.com/song/media/outer/url?id=1356350562"}, {"name": "Monsters", "cover": "http://p2.music.126.net/YPh291Jw4Lzy7x1iT_Aw5A==/109951163510035145.jpg?param=130y130", "artist": "Katie Sky", "url": "http://music.163.com/song/media/outer/url?id=28481189"}, {"name": "亦是此间少年（demo）", "cover": "http://p2.music.126.net/dHRFJJ9nfF_9YTxOz9UXUQ==/109951163901435148.jpg?param=130y130", "artist": "枯木逢春", "url": "http://music.163.com/song/media/outer/url?id=1316921651"}, {"name": "星月神话（咚鼓）（Cover：金莎）", "cover": "http://p2.music.126.net/UFt2oZBzmpiyUY-v0OBfjQ==/109951163625988695.jpg?param=130y130", "artist": "浪子康", "url": "http://music.163.com/song/media/outer/url?id=1320570892"}, {"name": "认真地老去", "cover": "http://p1.music.126.net/LwisuwyurwWs3zpkoBIC9g==/19024849695642179.jpg?param=130y130", "artist": "张希", "url": "http://music.163.com/song/media/outer/url?id=461080452"}, {"name": "树说", "cover": "http://p1.music.126.net/H6dt7IgvXNWhRM_w7XbcqQ==/109951163990575387.jpg?param=130y130", "artist": "花粥", "url": "http://music.163.com/song/media/outer/url?id=1357999883"}, {"name": "奉献", "cover": "http://p1.music.126.net/NqiiABaxJQFQeWkLd_sKzQ==/109951163842098152.jpg?param=130y130", "artist": "韩寒", "url": "http://music.163.com/song/media/outer/url?id=1344368486"}, {"name": "我们俩（Cover 郭顶）", "cover": "http://p2.music.126.net/yvSTiPAGUi4w2LVxcl_XhQ==/109951163379502184.jpg?param=130y130", "artist": "江一位", "url": "http://music.163.com/song/media/outer/url?id=863233827"}, {"name": "当我唱起这首歌（Cover：群星）", "cover": "http://p1.music.126.net/7w2QPl76QgOCMSuIlyWtaw==/109951163999612182.jpg?param=130y130", "artist": "王小帅", "url": "http://music.163.com/song/media/outer/url?id=1358803219"}, {"name": "红尘来去一场梦（Cover 普罗米修斯）", "cover": "http://p2.music.126.net/ZjnqYUWxth5ZMDzD9H3EjQ==/109951163237500439.jpg?param=130y130", "artist": "子默", "url": "http://music.163.com/song/media/outer/url?id=560961488"}, {"name": "紫霞仙子&至尊宝", "cover": "http://p1.music.126.net/O1mWbnuO0Arx5J6nurLRaA==/109951163808045218.jpg?param=130y130", "artist": "杨权威", "url": "http://music.163.com/song/media/outer/url?id=1302114856"}, {"name": "琵琶行", "cover": "http://p2.music.126.net/NQBaw13hHiaTh41QQUYsQg==/109951162922231753.jpg?param=130y130", "artist": "奇然", "url": "http://music.163.com/song/media/outer/url?id=476513774"}, {"name": "歌路", "cover": "http://p1.music.126.net/GAz7fyTdwMe_A_oJ5oK35A==/8888451999121589.jpg?param=130y130", "artist": "刘瑞琦", "url": "http://music.163.com/song/media/outer/url?id=28949013"}, {"name": "原谅 (Cover 张玉华)", "cover": "http://p1.music.126.net/lpS_Z4Hl08QIA7qjfWsOJg==/18743374719403675.jpg?param=130y130", "artist": "刘瑞琦", "url": "http://music.163.com/song/media/outer/url?id=425724850"}, {"name": "你是年少的欢喜", "cover": "http://p2.music.126.net/frVLBBoT5OpDBycFbKQK_A==/109951163560986413.jpg?param=130y130", "artist": "王贰浪", "url": "http://music.163.com/song/media/outer/url?id=1311345316"}, {"name": "像鱼", "cover": "http://p2.music.126.net/ejEPGN6ulPSgCBXGq7dgqw==/109951163720047382.jpg?param=130y130", "artist": "王贰浪", "url": "http://music.163.com/song/media/outer/url?id=1331819951"}, {"name": "爱你", "cover": "http://p2.music.126.net/2-Zdyz0qAJki0YwCYDBnog==/109951163303451875.jpg?param=130y130", "artist": "王贰浪", "url": "http://music.163.com/song/media/outer/url?id=558290126"}, {"name": "拥抱", "cover": "http://p2.music.126.net/YbK78l9n6AWSQwqIKP2iDA==/109951163200203679.jpg?param=130y130", "artist": "徐秉龙", "url": "http://music.163.com/song/media/outer/url?id=546723152"}, {"name": "恋曲2018", "cover": "http://p1.music.126.net/bmMjuLVA-fEpSG-bXUf7EA==/109951163832799601.jpg?param=130y130", "artist": "王贰浪", "url": "http://music.163.com/song/media/outer/url?id=1336871780"}, {"name": "最近 (Live)", "cover": "http://p2.music.126.net/-L_V5fzYm1TME55ae2MV-Q==/109951163906888437.jpg?param=130y130", "artist": "王小帅", "url": "http://music.163.com/song/media/outer/url?id=1350364033"}, {"name": "DJ Mr.Zi - 时间教会了我们很多东西（DJ Mr.Zi remix）", "cover": "http://p2.music.126.net/Ps4imex4Q86oB3LJCYlHUQ==/109951163115523199.jpg?param=130y130", "artist": "DJ Mr.Zi", "url": "http://music.163.com/song/media/outer/url?id=532572369"}, {"name": "出山", "cover": "http://p2.music.126.net/xUAfdMHdXhu3BmO4g8nOYA==/109951163573311341.jpg?param=130y130", "artist": "花粥", "url": "http://music.163.com/song/media/outer/url?id=1313354324"}, {"name": "光辉岁月 (咚鼓版)", "cover": "http://p1.music.126.net/4a75yGm-1IHudlLH6j9v9g==/109951163414697634.jpg?param=130y130", "artist": "枫叶", "url": "http://music.163.com/song/media/outer/url?id=574928854"}, {"name": "造物弄人", "cover": "http://p2.music.126.net/s6DkmCLiOZIz31_43SIguA==/109951163314189207.jpg?param=130y130", "artist": "RT", "url": "http://music.163.com/song/media/outer/url?id=566953433"}, {"name": "FLY-飞", "cover": "http://p1.music.126.net/yp8qCRkDQj2NzQ68hzhEJA==/19145795974603349.jpg?param=130y130", "artist": "ANU", "url": "http://music.163.com/song/media/outer/url?id=479422828"}, {"name": "Home (Blaze U Remix)", "cover": "http://p1.music.126.net/9Nub3O5wm7Vs22W84BhJnQ==/18646617697109289.jpg?param=130y130", "artist": "ThimLife", "url": "http://music.163.com/song/media/outer/url?id=448317566"}, {"name": "预谋（Cover：许佳慧）", "cover": "http://p1.music.126.net/G8_oPmS9hCrlCslA-FUQLQ==/109951163834531868.jpg?param=130y130", "artist": "尚士达", "url": "http://music.163.com/song/media/outer/url?id=1343314651"}, {"name": "我告诉你什么事最可悲（Jones & Brock&RTRemix）", "cover": "http://p1.music.126.net/IHzG7x8x9-KpoScvpU2SNg==/109951163231260063.jpg?param=130y130", "artist": "RT", "url": "http://music.163.com/song/media/outer/url?id=550453774"}, {"name": "River flowers in you (钢琴改编版)", "cover": "http://p2.music.126.net/WsFC3AUK2Qztc6NDzevd8Q==/3295236349944129.jpg?param=130y130", "artist": "群星", "url": "http://music.163.com/song/media/outer/url?id=29544731"}, {"name": "我不会唱歌", "cover": "http://p2.music.126.net/yYWQmQyeCxFpnpsYnPHBew==/1411772933763044.jpg?param=130y130", "artist": "李克勤", "url": "http://music.163.com/song/media/outer/url?id=407679576"}, {"name": "当你走了", "cover": "http://p1.music.126.net/Mgu0fLvEkXexoAtROLi30A==/109951163747407395.jpg?param=130y130", "artist": "吾尊", "url": "http://music.163.com/song/media/outer/url?id=1334270729"}, {"name": "某某", "cover": "http://p1.music.126.net/mrZF-lN6ORzHez8Nw6YbGw==/109951163458125171.jpg?param=130y130", "artist": "孟凡明", "url": "http://music.163.com/song/media/outer/url?id=1301572067"}, {"name": "房间-新版", "cover": "http://p1.music.126.net/F5x7VgIRu_awduoWu2sDeA==/109951163302871673.jpg?param=130y130", "artist": "刘瑞琦", "url": "http://music.163.com/song/media/outer/url?id=562598081"}, {"name": "Right Now (Na Na Na)", "cover": "http://p1.music.126.net/ejLPvQsq-7TrU-3D1z2hrg==/19132601834939735.jpg?param=130y130", "artist": "Am1r", "url": "http://music.163.com/song/media/outer/url?id=463352828"}, {"name": "浪子回头", "cover": "http://p1.music.126.net/emWwYFceRZ2plNWgnGUDfg==/109951163333175426.jpg?param=130y130", "artist": "茄子蛋", "url": "http://music.163.com/song/media/outer/url?id=516728102"}, {"name": "口是心非", "cover": "http://p2.music.126.net/anZ5nJuAe6rsxDFmi1nG3g==/109951163783500767.jpg?param=130y130", "artist": "丫蛋蛋", "url": "http://music.163.com/song/media/outer/url?id=1338414233"}, {"name": "笛子", "cover": "http://p2.music.126.net/vt6S9SnTmlGOliUpCy70KQ==/109951163926965902.jpg?param=130y130", "artist": "群星", "url": "http://music.163.com/song/media/outer/url?id=29401700"}, {"name": "别再闹了", "cover": "http://p2.music.126.net/rvX5AGzJW10FPHkKkYFWWQ==/109951163739268118.jpg?param=130y130", "artist": "毛不易", "url": "http://music.163.com/song/media/outer/url?id=1334270281"}, {"name": "不在", "cover": "http://p1.music.126.net/duY_T9VXfpnEcsuoQDFPmw==/109951163169037953.jpg?param=130y130", "artist": "韩安旭", "url": "http://music.163.com/song/media/outer/url?id=541511427"}, {"name": "走马", "cover": "http://p1.music.126.net/VuJFMbXzpAProbJPoXLv7g==/7721870161993398.jpg?param=130y130", "artist": "陈粒", "url": "http://music.163.com/song/media/outer/url?id=30431367"}, {"name": "知秋", "cover": "http://p1.music.126.net/S5yHzeie-bEEJ5XYYCVHFA==/109951163032187445.jpg?param=130y130", "artist": "孟凡明", "url": "http://music.163.com/song/media/outer/url?id=509343394"}, {"name": "Hello（3D）", "cover": "http://p2.music.126.net/meOs-RSbOcFsAlU2aPA62Q==/18178225742764178.jpg?param=130y130", "artist": "杭立旺", "url": "http://music.163.com/song/media/outer/url?id=428391758"}, {"name": "爱得太迟", "cover": "http://p2.music.126.net/J7qqZaVGm-fPDkUlGP4czw==/109951163200247709.jpg?param=130y130", "artist": "古巨基", "url": "http://music.163.com/song/media/outer/url?id=86477"}, {"name": "蜀绣", "cover": "http://p1.music.126.net/kgKCM6qfRsUaGCG_J_bNrw==/109951163298354754.jpg?param=130y130", "artist": "李宇春", "url": "http://music.163.com/song/media/outer/url?id=30621618"}, {"name": "说爱你", "cover": "http://p2.music.126.net/JbI9SM4QKHninON9GRAiQg==/109951163725401850.jpg?param=130y130", "artist": "刘至佳", "url": "http://music.163.com/song/media/outer/url?id=1332662300"}, {"name": "飞云之下", "cover": "http://p1.music.126.net/YsQrEZ_M6kduwN2zh6Q6kg==/109951163311406661.jpg?param=130y130", "artist": "韩红", "url": "http://music.163.com/song/media/outer/url?id=554242032"}, {"name": "你瞒我瞒", "cover": "http://p2.music.126.net/LGSZ3rGT8Ux1pYxcwxnR-g==/2225411534621328.jpg?param=130y130", "artist": "陈柏宇", "url": "http://music.163.com/song/media/outer/url?id=25718007"}, {"name": "友情岁月", "cover": "http://p1.music.126.net/8INL3nPv3FVF3eAiGwrG8Q==/528865152667909.jpg?param=130y130", "artist": "李克勤", "url": "http://music.163.com/song/media/outer/url?id=403710394"}, {"name": "说爱你", "cover": "http://p2.music.126.net/lsMlFshdJ96aTGFFgayh4Q==/109951163611523278.jpg?param=130y130", "artist": "蔡依林", "url": "http://music.163.com/song/media/outer/url?id=210042"}, {"name": "stay with me（Cover：朴灿烈/Punch）", "cover": "http://p2.music.126.net/Hcpd514w5iqa_ozAXtwikQ==/109951162862670515.jpg?param=130y130", "artist": "秋仁", "url": "http://music.163.com/song/media/outer/url?id=458679625"}, {"name": "【3D】We Don't Talk Anymore", "cover": "http://p1.music.126.net/fV7GPehW4xu0yqzJ6HN-3g==/17739520602905228.jpg?param=130y130", "artist": "Nisw", "url": "http://music.163.com/song/media/outer/url?id=436668683"}, {"name": "好好恋爱", "cover": "http://p1.music.126.net/04vQp1ZH1Fn3k4FgIa2cow==/854320534803436.jpg?param=130y130", "artist": "邓丽欣", "url": "http://music.163.com/song/media/outer/url?id=5261521"}, {"name": "断点", "cover": "http://p2.music.126.net/UwB8YHn4BWODYj_CuGt37w==/109951163520357845.jpg?param=130y130", "artist": "张敬轩", "url": "http://music.163.com/song/media/outer/url?id=189323"}, {"name": "英雄寞", "cover": "http://p1.music.126.net/WmYTQAndstneYhNPbg3NJA==/6638851208589589.jpg?param=130y130", "artist": "郑中基", "url": "http://music.163.com/song/media/outer/url?id=191048"}, {"name": "我只能爱你", "cover": "http://p1.music.126.net/370FlbvJbDJ-vX7QwrIYXA==/8987408045456825.jpg?param=130y130", "artist": "彭青", "url": "http://music.163.com/song/media/outer/url?id=28959183"}, {"name": "只想对你说", "cover": "http://p2.music.126.net/itPBBkJROpAcsKlcTUlbAg==/109951163398371353.jpg?param=130y130", "artist": "掌嘴", "url": "http://music.163.com/song/media/outer/url?id=488532353"}, {"name": "地铁等待", "cover": "http://p1.music.126.net/ZMjn2ap3oe4zLVu9EQzV0g==/109951163608576268.jpg?param=130y130", "artist": "郭小萍", "url": "http://music.163.com/song/media/outer/url?id=1318458131"}, {"name": "越来越不懂", "cover": "http://p2.music.126.net/urAYesmIFsMak292DbudlQ==/125344325567370.jpg?param=130y130", "artist": "蔡健雅", "url": "http://music.163.com/song/media/outer/url?id=208958"}, {"name": "アイロニ", "cover": "http://p2.music.126.net/4Zpn57gnArtV3F5xiNBK0g==/109951163598414321.jpg?param=130y130", "artist": "majiko", "url": "http://music.163.com/song/media/outer/url?id=31421442"}, {"name": "想太多", "cover": "http://p2.music.126.net/rseQHt6MVwmyLMpY_f5bOQ==/131941395346293.jpg?param=130y130", "artist": "李玖哲", "url": "http://music.163.com/song/media/outer/url?id=109196"}, {"name": "心做し（Cover GUMI）", "cover": "http://p2.music.126.net/uwF73BxhvWiR-Kxn0wGe0g==/109951162927951204.jpg?param=130y130", "artist": "双笙", "url": "http://music.163.com/song/media/outer/url?id=478303470"}, {"name": "断线", "cover": "http://p2.music.126.net/W-4b64hCb_s8OAGROQXgig==/109951162995598984.jpg?param=130y130", "artist": "Shang", "url": "http://music.163.com/song/media/outer/url?id=496370620"}, {"name": "Something Just Like This (DJ Asher Remix Cover)", "cover": "http://p1.music.126.net/qJOiBo7F8sybUN6XU1f3og==/109951164208527342.jpg?param=130y130", "artist": "DJ Asher", "url": "http://music.163.com/song/media/outer/url?id=504017347"}, {"name": "你知道我在等你吗", "cover": "http://p2.music.126.net/TIQMdKKvWY0dDr-yKBaBeQ==/19000660439853455.jpg?param=130y130", "artist": "迪克牛仔", "url": "http://music.163.com/song/media/outer/url?id=77099"}, {"name": "再见", "cover": "http://p2.music.126.net/kVwk6b8Qdya8oDyGDcyAVA==/1364493930777368.jpg?param=130y130", "artist": "G.E.M.邓紫棋", "url": "http://music.163.com/song/media/outer/url?id=36024806"}, {"name": "Bye Bye Bye", "cover": "http://p2.music.126.net/__TFfEz3M6Coxauyxnmk0g==/1695446930044953.jpg?param=130y130", "artist": "Lovestoned", "url": "http://music.163.com/song/media/outer/url?id=4164331"}, {"name": "倒数", "cover": "http://p2.music.126.net/tXCIFsVDK6IKcQ9YWxwOEg==/109951163523944497.jpg?param=130y130", "artist": "G.E.M.邓紫棋", "url": "http://music.163.com/song/media/outer/url?id=1299550532"}, {"name": "我的秘密", "cover": "http://p2.music.126.net/maj6C_L03m59WopCkMEzJw==/45079976754675.jpg?param=130y130", "artist": "G.E.M.邓紫棋", "url": "http://music.163.com/song/media/outer/url?id=233974"}, {"name": "光年之外", "cover": "http://p1.music.126.net/fkqFqMaEt0CzxYS-0NpCog==/18587244069235039.jpg?param=130y130", "artist": "G.E.M.邓紫棋", "url": "http://music.163.com/song/media/outer/url?id=449818741"}, {"name": "只只", "cover": "http://p2.music.126.net/2pFqN1pyqF2DHdSt1hQ10Q==/109951163063456206.jpg?param=130y130", "artist": "孟凡明", "url": "http://music.163.com/song/media/outer/url?id=519136840"}, {"name": "好心分手", "cover": "http://p1.music.126.net/cYUBYPO02oPo2J-cOK5yQA==/105553116280533.jpg?param=130y130", "artist": "叶文辉", "url": "http://music.163.com/song/media/outer/url?id=179884"}, {"name": "千与千寻 いつも何度でも 钢琴 即兴（Cover 久石让）", "cover": "http://p2.music.126.net/y6bzC8DukNbHWOzKxy5bgA==/109951162832161807.jpg?param=130y130", "artist": "Elsee", "url": "http://music.163.com/song/media/outer/url?id=472021850"}, {"name": "可能否", "cover": "http://p2.music.126.net/SJYnDay7wgewU3O7tPfmOQ==/109951163322541581.jpg?param=130y130", "artist": "木小雅", "url": "http://music.163.com/song/media/outer/url?id=569214126"}, {"name": "学猫叫", "cover": "http://p1.music.126.net/D1Ov-XMAwUzsr16mQk95fA==/109951163256119128.jpg?param=130y130", "artist": "小潘潘（潘柚彤）", "url": "http://music.163.com/song/media/outer/url?id=554191055"}, {"name": "大火", "cover": "http://p2.music.126.net/6VshvgnaD5VBs_z4j1QKlA==/109951163188719203.jpg?param=130y130", "artist": "李佳薇", "url": "http://music.163.com/song/media/outer/url?id=274696"}, {"name": "椿", "cover": "http://p1.music.126.net/CpwIPy2YUWC6ksF88eGNyw==/109951162931819035.jpg?param=130y130", "artist": "沈以诚", "url": "http://music.163.com/song/media/outer/url?id=479598964"}, {"name": "一直很安静", "cover": "http://p2.music.126.net/Zyji-kiWpjLF19CF0yHSlg==/1727332767246198.jpg?param=130y130", "artist": "阿桑", "url": "http://music.163.com/song/media/outer/url?id=5260494"}, {"name": "Something Just Like This", "cover": "http://p1.music.126.net/aMZLDXAV6h87T_PkcbEEVw==/19017153114046721.jpg?param=130y130", "artist": "Anthony Keyrouz", "url": "http://music.163.com/song/media/outer/url?id=466794339"}, {"name": "感激遇到你（Cover 胡杏儿、黄宗泽）", "cover": "http://p1.music.126.net/8vrJmPPb5LLnioi327ciZw==/109951162877813520.jpg?param=130y130", "artist": "阿细", "url": "http://music.163.com/song/media/outer/url?id=474938709"}, {"name": "9420", "cover": "http://p2.music.126.net/tyOXJ8U9TisNRfcorQ-4og==/109951163050074297.jpg?param=130y130", "artist": "麦小兜", "url": "http://music.163.com/song/media/outer/url?id=515143305"}, {"name": "Because Of You", "cover": "http://p2.music.126.net/okJjGpLDfCBV-9Jdz1LUsw==/19065531625854354.jpg?param=130y130", "artist": "Kelly Clarkson", "url": "http://music.163.com/song/media/outer/url?id=25657521"}, {"name": "风屿", "cover": "http://p1.music.126.net/LDVWKDqOIhXGytKQFDiQbA==/18317863718845292.jpg?param=130y130", "artist": "闫东炜", "url": "http://music.163.com/song/media/outer/url?id=477844082"}, {"name": "佛系少女", "cover": "http://p2.music.126.net/MdSa3oZgGXPPry9nthntEQ==/109951163156209240.jpg?param=130y130", "artist": "冯提莫", "url": "http://music.163.com/song/media/outer/url?id=539941039"}, {"name": "天造地设", "cover": "http://p1.music.126.net/MuGvbmTV2zRncisO5l5miA==/109951163047502154.jpg?param=130y130", "artist": "胖胖胖", "url": "http://music.163.com/song/media/outer/url?id=514053886"}, {"name": "123我爱你（Cover 新乐尘符）", "cover": "http://p1.music.126.net/J2IFhmJF0HWPJsr54PxV5w==/109951163163191337.jpg?param=130y130", "artist": "丁文杰", "url": "http://music.163.com/song/media/outer/url?id=541217692"}, {"name": "玻璃之情", "cover": "http://p2.music.126.net/2YIpNoCzXfYgz4zIw3s0Vg==/73667279073787.jpg?param=130y130", "artist": "张国荣", "url": "http://music.163.com/song/media/outer/url?id=186436"}, {"name": "Something Just Like This", "cover": "http://p2.music.126.net/ggnyubDdMxrhpqYvpZbhEQ==/3302932937412681.jpg?param=130y130", "artist": "The Chainsmokers", "url": "http://music.163.com/song/media/outer/url?id=461347998"}, {"name": "BINGBIAN病变 (女声版)", "cover": "http://p1.music.126.net/4TuBpyxVpbHnj2EMCSnW9w==/109951163176375492.jpg?param=130y130", "artist": "鞠文娴", "url": "http://music.163.com/song/media/outer/url?id=543607345"}, {"name": "重生", "cover": "http://p1.music.126.net/4DMV1vkYiYVlAdICZNnqAA==/109951163081286379.jpg?param=130y130", "artist": "容祖儿", "url": "http://music.163.com/song/media/outer/url?id=522631413"}, {"name": "怪你过分美丽（Cover 张国荣）", "cover": "http://p2.music.126.net/8vrJmPPb5LLnioi327ciZw==/109951162877813520.jpg?param=130y130", "artist": "阿细", "url": "http://music.163.com/song/media/outer/url?id=469426303"}, {"name": "纸短情长（完整版）", "cover": "http://p1.music.126.net/tbZaE-DjL_BkemynFlL1cQ==/109951163052534918.jpg?param=130y130", "artist": "烟把儿", "url": "http://music.163.com/song/media/outer/url?id=516076896"}, {"name": "Summer", "cover": "http://p1.music.126.net/1qUu2mkawtQ4pbXfCglo3Q==/109951163008469051.jpg?param=130y130", "artist": "久石譲", "url": "http://music.163.com/song/media/outer/url?id=443242"}, {"name": "爱到万年", "cover": "http://p1.music.126.net/Hv_PQR9aMlF0raWq9tUyPQ==/2442015325351700.jpg?param=130y130", "artist": "刘庭羽", "url": "http://music.163.com/song/media/outer/url?id=26599220"}

  ]
});;!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),a=o(n(1)),c=o(n(3)),u=o(n(4));function o(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function o(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return n.resolveOptions(e),n.listenClick(t),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,c.default),i(o,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===r(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,u.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new a.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return s("action",t)}},{key:"defaultTarget",value:function(t){var e=s("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return s("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),o}();function s(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=l},function(t,e,n){"use strict";var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),a=n(2),c=(o=a)&&o.__esModule?o:{default:o};var u=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,c.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,c.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),e}();t.exports=u},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var d=n(5),h=n(6);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return s=e,f=n,(l=t).addEventListener(s,f),{destroy:function(){l.removeEventListener(s,f)}};if(d.nodeList(t))return a=t,c=e,u=n,Array.prototype.forEach.call(a,function(t){t.addEventListener(c,u)}),{destroy:function(){Array.prototype.forEach.call(a,function(t){t.removeEventListener(c,u)})}};if(d.string(t))return o=t,r=e,i=n,h(document.body,o,r,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,a,c,u,l,s,f}},function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(7);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}])});;!function (e, t, a) {
  
  var initCopyCode = function(){
    var copyHtml = '';
    copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
    //fa fa-globe可以去字体库替换自己想要的图标
    copyHtml += '  <i class="fa fa-clipboard"></i><span>copy</span>';
    copyHtml += '</button>';
    $(".highlight .code pre").before(copyHtml);
    new ClipboardJS('.btn-copy', {
      target: function(trigger) {
        return trigger.nextElementSibling;
      }
    });
  }
  initCopyCode();
}(window, document);;window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "../../images/failure.png");
      $('[rel="shortcut icon"]').attr('href', "../../images/failure.png");
      document.title = '(●—●)喔哟，崩溃啦！';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "../../images/favicon-32x32-next.png");
      $('[rel="shortcut icon"]').attr('href', "../../images/favicon-32x32.png");
      document.title = '(/≧▽≦/)咦！页面又好了！';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
    }
  });
};