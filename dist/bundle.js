(()=>{var e={34:()=>{window.BGLinks=function(){var e={version:"NIV",clickTooltip:!1,apocrypha:!1,showTooltips:!0};e.host=document.currentScript?document.currentScript.src.match(/https:\/\/(.*?)\//)[1]:"www.biblegateway.com";var t,o,n,i,a=0,r=0,s=!1,l=!1,c=navigator.appVersion,d="Genesis|Gen?|Gn|Exodus|Exod?|Ex|Leviticus|Le?v|Numbers|Nu?m|Nu|Deuteronomy|Deut?|Dt|Josh?ua|Josh?|Jsh|Judges|Ju?dg|Jg|Ru(?:th)?|Ru?t|(?:1|i|2|ii) ?Samuel|(?:1|i|2|ii) ?S(?:a|m)|(?:1|i|2|ii) ?Sam|(?:1|i|2|ii) ?Kin(?:gs?)?|(?:1|i|2|ii) ?Kgs|(?:1|i|2|ii) ?Chronicles|(?:1|i|2|ii) ?Chr(?:o?n)?|(?:1|i|2|ii) ?Cr|Ezra?|Nehemiah|Neh?|Esther|Esth?|Jo?b|Psalms?|Psa?|Proverbs|Pro?v?|Ecclesiastes|Ec(?:cl?)?|Song (?:O|o)f Solomon|Song (?:O|o)f Songs?|Son(?:gs?)?|SS|Isaiah?|Isa?|Jeremiah|Je?r|Lamentations|La(?:me?)?|Ezekiel|Eze?k?|Daniel|Da?n|Da|Hosea|Hos?|Hs|Jo(?:el?)?|Am(?:os?)?|Obadiah|Ob(?:ad?)?|Jon(?:ah?)?|Jnh|Mic(?:ah?)?|Mi|Nah?um|Nah?|Habakkuk|Hab|Zephaniah|Ze?ph?|Haggai|Hagg?|Hg|Zechariah|Ze?ch?|Malachi|Ma?l|Matthew|Matt?|Mt|Mark|Ma(?:r|k)|M(?:r|k)|Luke?|Lk|Lu?c|John|Jn|Ac(?:ts?)?|Romans|Ro?m|(?:1|i|2|ii) ?Corinthians|(?:1|i|2|ii) ?C(?:or?)?|Galatians|Gal?|Gl|Ephesians|Eph?|Philippians|Phil|Colossians|Co?l|(?:1|i|2|ii) ?Thessalonians|(?:1|i|2|ii) ?Th(?:e(?:ss?)?)?|(?:1|i|2|ii) ?Timothy|(?:1|i|2|ii) ?Tim|(?:1|i|2|ii) ?T(?:i|m)|Ti(?:tus)?|Ti?t|Philemon|Phl?m|Hebrews|Heb?|Jam(?:es)?|Jms|Jas|(?:1|i|2|ii) ?Peter|(?:1|i|2|ii) ?Pe?t?|(?:1|i|2|ii|3|iii) ?J(?:oh)?n?|Jude?|Revelations?|Rev|R(?:e|v)";e.linkVerses=function(){u(),p(document.body),!0===e.showTooltips&&f(),H()};var u=function(){o="https://"+e.host,n=o+"/share/tooltips/data",i=o+"/public/link-to-us/tooltips"},p=function(e){if(3===e.nodeType)return m(e,0);if(null!=e.tagName&&e.tagName.match(/^(?:a|h\d|img|pre|input|option)$/i))return null;for(var t=e.childNodes,o=0;o<t.length;)o+=p(t[o])+1;return null},m=function(t,n){var i,a=!0===e.apocrypha?"|Tobit?|To?b|Judi(?:th?)?|Jdt|(?:1|2) ?Mac(?:cabees)?|(?:1|2) ?Ma?|Wi(?:sdom)?|Wi?s|Sir(?:ach)?|Ba(?:ruc?h)?|Ba?r":"",r="[\\u0020\\u00a0\\u1680\\u2000-\\u200a\\u2028-\\u202f\\u205f\\u3000]",s="((?:("+d+a+")(?:.)?"+r+"*?)?(?:(\\d*):)?(\\d+(?:(?:ff|f|\\w)|(?:\\s?(?:-|–|—)\\s?\\d+)?)))([^a-z0-9]*)",l=new RegExp("(?:"+d+a+")(?:.)?"+r+"*?\\d+:\\d+(?:ff|f|\\w)?(?:\\s?(?:(?:(?:-|–|—)\\s?(?:(?:"+d+a+")(?:.)?\\s)?)|(?:(?:,|;|&amp;|&|and|cf\\.|cf)))\\s?(?:(?:(?:vv.|vs.|vss.|v.) ?)?\\d+\\w?)(?::\\d+\\w?)?)*","i"),c=t.nodeValue.match(l);if(null==c)return n;var u=t.nodeValue,p=u.substr(0,u.indexOf(c[0])),f=u.substr(u.indexOf(c[0])+c[0].length);p.length>0&&(i=document.createTextNode(p),t.parentNode.insertBefore(i,t),n++);for(var g,h,v,b,w=new RegExp(s,"gi");b=w.exec(c[0]);){""!=b[2]&&null!=b[2]&&(g=b[2]),""!=b[3]&&null!=b[3]&&(h=b[3]),v=b[4];var N=document.createElement("a");N.className="bibleref",N.target="_BLANK";var y=g+" "+h+":"+v;N.href=o+"/passage/?search="+y+"&version="+e.version+"&src=tools",N.innerHTML=b[1],!0===e.clickTooltip&&(N.onclick=function(){return!1}),t.parentNode.insertBefore(N,t),n++,""!=b[6]&&(i=document.createTextNode(b[5]),t.parentNode.insertBefore(i,t))}return f.length>0?(i=document.createTextNode(f),t.parentNode.insertBefore(i,t),t.parentNode.removeChild(t),n=m(i,n+1)):t.parentNode.removeChild(t),n},f=function(){for(var t=document.getElementsByTagName("a"),o=0;o<t.length;o++){var n=t[o];n.className&&-1!=n.className.indexOf("bibleref")&&(!0!==e.clickTooltip?(g(n,"mouseover",y),g(n,"mouseout",_)):g(n,"click",h))}},g=function(e,t,o){e.addEventListener?"mouseover"==t?e.addEventListener("mouseover",o,!1):"mouseout"==t?e.addEventListener("mouseout",o,!1):"click"==t&&e.addEventListener("click",o,!1):e.attachEvent?"mouseover"==t?e.attachEvent("onmouseover",o):"mouseout"==t?e.attachEvent("onmouseout",o):"click"==t&&e.attachEvent("onclick",o):"mouseover"==t?e.onmouseover=o:"mouseout"==t?e.onmouseout=o:"click"==t&&(e.onclick=o)},h=function(e){e||(e=window.event);var t,o,n=e.target||e.srcElement,i=(t=(o=n.getAttribute("data-bibleref"))?o:n.href.match(/search=(.*?)(?:&.*)?$/)[1]).replace(/%20| /g,"");i=t.replace(/:/g,"_");var a=document.getElementById("bg_popup-"+i);null===a||"none"==a.style.display?v(e):b(e)},v=function(e,t){var o,n,i;e||(e=window.event),null==t&&(t=e.currentTarget||e.target||e.srcElement);var a=(o=(n=t.getAttribute("data-bibleref"))?n:decodeURIComponent(t.href.match(/search=(.*?)(?:&.*)?$/)[1])).replace(/%20| |\+|[^\x00-\x80]/g,"");a=(a=a.replace(/:/g,"_")).replace(/ /g,"");var r=document.getElementById("bg_popup-"+a);w(e),null===r?r=x(o,t):(i=L(t),r.style.left=i.offsetX+"px",r.style.top=i.offsetY+"px",r.style.display="block")},b=function(e){e||(e=window.event);var t,o,n=e.target||e.srcElement;t=(t=(t=(o=n.getAttribute("data-bibleref"))?o:n.href.match(/search=(.*?)(?:&.*)?$/)[1]).replace(/%20| /g,"")).replace(/:/g,"_");var i=document.getElementById("bg_popup-"+t);i&&(i.style.display="none")},w=function(){for(var e=t.children,o=0;o<e.length;o++)e[o].style.display="none"},N=function(e,t){let o;return function(...n){clearTimeout(o),o=setTimeout((()=>{o=null,e(...n)}),t)}},y=N((function(e){e||(e=window.event);var t=e.currentTarget||e.target;"a"==t.nodeName.toLowerCase()&&(window.clearTimeout(a),a=window.setTimeout((function(){v(e,t)}),0))}),100),_=N((function(e){e||(e=window.event),"a"==e.target.nodeName.toLowerCase()&&a&&(window.clearTimeout(a),window.clearTimeout(r),r=window.setTimeout((function(){b(e)}),0))}),100),E=function(e){e||(e=window.event);for(var t=e.relatedTarget||e.fromElement;t&&null!=t&&(!t.className||-1==t.className.indexOf("bg_popup-outer"))&&"body"!=t.nodeName.toLowerCase();)t=t.parentNode;t&&t.className&&-1!=t.className.indexOf("bg_popup-outer")||(window.clearTimeout(a),window.clearTimeout(r))},T=function(e){e||(e=window.event);for(var t=e.relatedTarget||e.toElement;t&&null!=t&&(!t.className||-1==t.className.indexOf("bg_popup-outer"))&&"body"!=t.nodeName.toLowerCase();)t=t.parentNode;t&&t.className&&-1!=t.className.indexOf("bg_popup-outer")||(window.clearTimeout(r),r=window.setTimeout((function(){w(e)}),0))},x=function(a,r){var s=document.createElement("div");s.style.display="none",s.className="bg_popup bg_popup-outer";var l=L(r);s.style.top=l.offsetY+"px",s.style.left=l.offsetX+"px";var c="bg_popup-"+a.replace(/(?:%20)|\+|[^\x00-\x80]/g,"");c=(c=c.replace(/:/g,"_")).replace(/ /g,""),s.id=c,s.innerHTML='<div class="bg_popup-header"><div class="bg_popup-header_title"><strong>'+a.replace(/%20/g," ")+'</strong></div></div><div class="bg_popup-content"><div class="bg_popup-spinner"><img alt="loading" src="'+i+'/theme/images/tools/spinner.gif"/></div></div><div class="bg_popup-footer"><a class="bg_popup-bglogo" href="'+o+'/" target="_blank"></a></div>',s.style.display="block",k(s),s=t.appendChild(s),!0!==e.clickTooltip&&(g(s,"mouseover",E),g(s,"mouseout",T));var d=document.createElement("script");d.type="text/javascript",d.src=n+"/?search="+a+"&version="+e.version+"&callback=BGLinks.updateTooltip",d.id="bg_remote_passage_script-"+a.replace(/(?:%20)|\+|[^\x00-\x80]/g,""),d.id=d.id.replace(/:/g,"_"),d.id=d.id.replace(/ /g,"");var u=document.getElementsByTagName("script")[0];return u.parentNode.insertBefore(d,u),s};e.updateTooltip=function(e){var t;t=(t="bg_popup-"+e.reference.replace(/:/g,"_")).replace(/ |\+|[^\x00-\x80]/g,"");var n=document.getElementById(t),i=e.reference_display.replace(/%20/g," ");null==e.text&&(null==n.text?e.text="Retrieving Passage...":(e.text=n.text,i=n.reference_display)),n.innerHTML='<div class="bg_popup-header"><div class="bg_popup-header_title"><strong>'+i+" "+e.version+'</strong></div></div><div class="bg_popup-content"><div class="bg_popup-content-bible"><p>'+e.text+' <a class="bg_popup-copyright" href="'+o+e.version_url+'" target="_blank">('+e.version+')</a> <a class="bg_popup-more" href="'+o+"/passage/?search="+e.reference+"&version="+e.version+'&src=tools" target="_blank">More</a></p></div></div><div class="bg_popup-footer"><a class="bg_popup-bglogo" href="'+o+'/" rel="nofollow" target="_blank"></a></div>',k(n)};var k=function(e){for(var t=e.getElementsByTagName("div"),o=0;o<t.length;o++)"bg_popup-header_right"==t[o].className&&g(t[o],"click",w)},L=function(e){var t,o,n=362;"number"==typeof window.innerWidth?(t=window.innerWidth,o=window.innerHeight):document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?(t=document.documentElement.clientWidth,o=document.documentElement.clientHeight):document.body&&(document.body.clientWidth||document.body.clientHeight)&&(t=document.body.clientWidth,o=document.body.clientHeight);var i={},a=J(e),r=a.leftPos,s=a.topPos;e.offsetWidth/e.parentNode.offsetWidth>.5&&(r=(r=J(e.parentNode)).leftPos),r+n+5>t?((r-=n)+n+e.offsetWidth<=t&&(r+=e.offsetWidth),r+n+25<=t&&(r+=25),r-e.offsetWidth/2>=0&&(r-=e.offsetWidth/2)):(r+e.offsetWidth/2<=t&&e.offsetWidth/e.parentNode.offsetWidth<=.5&&(r+=e.offsetWidth/2),r-35>=0&&(r-=35));var l=window.pageYOffset||document.documentElement.scrollTop||0;return s+e.offsetHeight+234+15<=o+l||s-234+5<0?s+=e.offsetHeight+10:s-=244,i.offsetY=s,i.offsetX=r,i},J=function(e){var t,o;t=o=0;do{t+=e.offsetTop,o+=e.offsetLeft,document.all&&(t+=e.clientTop,o+=e.clientLeft)}while(null!=(e=e.offsetParent));return{topPos:t,leftPos:o}},H=function(){l||(!0===e.showTooltips&&(function(){if(!s){var e=document.createElement("link");e.type="text/css",e.rel="stylesheet",-1!=c.search("MSIE 6.0")?(c="ie6",e.href=i+"/theme/bglinks-ie.css"):e.href=i+"/theme/popover.css",e.media="screen";var t=document.getElementsByTagName("head")[0].childNodes[0];t.parentNode.insertBefore(e,t),s=!0}}(),g(document,"click",w)),(t=document.createElement("div")).id="bg_popup-container",document.body.appendChild(t),l=!0)};return e}()}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(34)})()})();