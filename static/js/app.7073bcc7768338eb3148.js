webpackJsonp([2,1],{0:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var i=a(11),n=s(i),l=a(19),o=s(l),c=a(3),r=s(c),u=a(372),d=s(u),p=a(371),f=s(p),v=a(277),m=s(v);a(20);var b=a(33),g=s(b),h=a(40),I=s(h);(0,o["default"])(n["default"]),r["default"].use(d["default"]),r["default"].use(f["default"]);var C=n["default"].sidebar,x=new d["default"]({saveScrollPosition:!0,transitionOnLoad:!0,linkActiveClass:"is-active"});r["default"].http.interceptors.push(function(e,t){m["default"].inc(.2),t(function(e){return m["default"].done(),e})}),x.beforeEach(function(e){var t=e.next;m["default"].start(),C.isMobile&&C.opened&&(C.opened=!1),t()}),x.afterEach(function(){m["default"].done()});var M=function(e){var t=arguments.length<=1||void 0===arguments[1]?".vue":arguments[1];return function(s){a.e(0,function(a){var i=[a(374)(""+e+t)];s.apply(null,i)}.bind(this))}};x.map({"/dashboard":{name:"Dashboard",component:I["default"]},"/charts/chartJs":{name:"ChartJs",component:M("./components/pages/Charts/ChartJs")},"/charts/chartist":{name:"Chartist",component:M("./components/pages/Charts/Chartist")},"/charts/peity":{name:"Peity",component:M("./components/pages/Charts/Peity")},"/charts/plotly":{name:"Plotly",component:M("./components/pages/Charts/Plotly")},"/ui":{name:"UI",component:M("./components/pages/UI/index"),subRoutes:{"/typography":{name:"Typography",component:M("./components/pages/UI/Typography")},"/buttons":{name:"Buttons",component:M("./components/pages/UI/Buttons")},"/icons":{name:"Icons",component:M("./components/pages/UI/Icons")},"/form":{name:"Form",component:M("./components/pages/UI/Form")}}},"/components":{name:"Components",component:M("./components/pages/Components/index"),subRoutes:{"/backtotop":{name:"BackToTop",component:M("./components/pages/Components/BackToTop")},"/collapse":{name:"Collapse",component:M("./components/pages/Components/Collapse")},"/datepicker":{name:"Datepicker",component:M("./components/pages/Components/Datepicker")},"/message":{name:"Message",component:M("./components/pages/Components/Message")},"/modal":{name:"Modal",component:M("./components/pages/Components/Modal")},"/notification":{name:"Notification",component:M("./components/pages/Components/Notification")},"/progress":{name:"Progress",component:M("./components/pages/Components/Progress")},"/rating":{name:"Rating",component:M("./components/pages/Components/Rating")},"/slider":{name:"Slider",component:M("./components/pages/Components/Slider")},"/switch":{name:"Switch",component:M("./components/pages/Components/Switch")},"/tabs":{name:"Tabs",component:M("./components/pages/Components/Tabs")},"/tooltip":{name:"Tooltip",component:M("./components/pages/Components/Tooltip")}}},"/tables/basic":{name:"BasicTables",component:M("./components/pages/Tables/Basic")},"/tables/handsontable":{name:"Handsontable",component:M("./components/pages/Tables/Handsontable")}}),x.redirect({"/ui":"/ui/typography","*":"/dashboard"}),x.start(g["default"],"app")},11:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(17),n=s(i),l=a(18),o=s(l);t["default"]={menu:n["default"],sidebar:o["default"]}},17:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=[{link:"Dashboard",label:"Dashboard",icon:"fa-tachometer"},{label:"Charts",icon:"fa-bar-chart-o",expanded:!0,subMenu:[{link:"ChartJs",label:"ChartJs"},{link:"Chartist",label:"Chartist"},{link:"Peity",label:"Peity"},{link:"Plotly",label:"Plotly"}]},{label:"UI Features",icon:"fa-laptop",expanded:!1,subMenu:[{link:"Buttons",label:"Buttons"},{link:"Form",label:"Form"},{link:"Typography",label:"Typography"},{link:"Icons",label:"Icons"}]},{label:"Components",icon:"fa-building-o",expanded:!1,subMenu:[{link:"BackToTop",label:"BackToTop"},{link:"Collapse",label:"Collapse"},{link:"Datepicker",label:"Datepicker"},{link:"Message",label:"Message"},{link:"Modal",label:"Modal"},{link:"Notification",label:"Notification"},{link:"Progress",label:"Progress"},{link:"Rating",label:"Rating"},{link:"Slider",label:"Slider"},{link:"Switch",label:"Switch"},{link:"Tabs",label:"Tabs"},{link:"Tooltip",label:"Tooltip"}]},{label:"Tables",icon:"fa-table",expanded:!1,subMenu:[{link:"BasicTables",label:"Basic Tables"},{link:"Handsontable",label:"Handsontable"}]}]},18:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={opened:!1,isMobile:!1}},19:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=e.sidebar,a=document,s=a.body,i=768,n=3,l=function(){if(!document.hidden){var e=s.getBoundingClientRect();t.isMobile=e.width-n<i,t.opened=!t.isMobile}};document.addEventListener("visibilitychange",l),window.addEventListener("DOMContentLoaded",l),window.addEventListener("resize",l)}},20:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var i=a(3),n=s(i),l=a(88),o=s(l);n["default"].transition("fade",{enterClass:"fadeIn",leaveClass:"fadeOut"}),n["default"].transition("fade-horizontal-rtl",{enterClass:"fadeInRight",leaveClass:"fadeOutLeft"}),n["default"].transition("fade-horizontal-ltr",{enterClass:"fadeInLeft",leaveClass:"fadeOutRight"}),n["default"].transition("slide-horizontal-rtl",{enterClass:"slideInRight",leaveClass:"slideOutLeft"}),n["default"].transition("slide-horizontal-ltr",{enterClass:"slideInLeft",leaveClass:"slideOutRight"}),n["default"].transition("fade-vertical-dtu",{enterClass:"fadeInUp",leaveClass:"fadeOutUp"}),n["default"].transition("fade-vertical-utd",{enterClass:"fadeInDown",leaveClass:"fadeOutDown"}),n["default"].transition("slide-vertical-dtu",{enterClass:"slideInUp",leaveClass:"slideOutUp"}),n["default"].transition("slide-vertical-utd",{enterClass:"slideInDown",leaveClass:"slideOutDown"}),n["default"].transition("zoom",{enterClass:"zoomIn",leaveClass:"zoomOut"});var c=["","Left","Right"];c.forEach(function(e){var t="bounce"+(e?"-"+e.toLowerCase():"");n["default"].transition(t,{enterClass:"bounceIn"+e,leaveClass:"bounceOut"+e})});var r=["Up","Down"];r.forEach(function(e){var t="bounce-"+e.toLowerCase();n["default"].transition(t,{enterClass:"bounceIn"+e,leaveClass:"bounceOut"+("Up"===e?"Down":"Up")})}),n["default"].transition("menu-expand",{enter:function(e){e.classList.remove("collapse"),e.classList.add("collapsing"),e.style.height=e.scrollHeight+"px"},afterEnter:function(e){e.classList.remove("collapsing"),e.classList.add("collapse","in")},leave:function(e){e.classList.add("collapsing"),e.classList.remove("collapse","in"),e.style.height=0},afterLeave:function(e){e.classList.remove("collapsing"),e.classList.add("collapse"),e.style.display="none"}}),n["default"].transition("fade-expand",{css:!1,enter:function(e,t){var a=e.scrollHeight,s={value:[0,1]},i=377,n="easeOutExpo",l=function(){e.removeAttribute("style"),t()};e.style.height=0,e.style.opacity=0,this.anime=(0,o["default"])({targets:e,duration:i,easing:n,opacity:s,height:a,complete:l})},enterCancelled:function(e){this.anime.pause()},leave:function(e,t){var a=0,s={value:[1,0]},i=377,n="easeOutExpo";this.anime=(0,o["default"])({targets:e,duration:i,easing:n,opacity:s,height:a,complete:t})},leaveCancelled:function(e){this.anime.pause()}})},21:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(3),n=s(i),l=a(373),o=s(l),c=a(11),r=s(c),u=r["default"].menu,d=r["default"].sidebar;n["default"].use(o["default"]);var p=new o["default"].Store({state:{menu:u,sidebar:d},mutations:{}});t["default"]=p},32:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy44LjMgKDI5ODAyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT52dWUtYWRtaW48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWxpbmUgaWQ9InBhdGgtMSIgcG9pbnRzPSIyLjgzMzk3NjYzZS0xNCA2MS41ODYyNjM1IDE5OS43NjQyNzkgLTUuOTkwODkwNWUtMTUgMTcyLjU5MDM5MSAyMDAgMi44MzM5NzY2M2UtMTQgNjEuNTg2MjYzNSI+PC9wb2x5bGluZT4KICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjE5OS43NjQyNzkiIGhlaWdodD0iMjAwIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDxwb2x5bGluZSBpZD0icGF0aC0zIiBwb2ludHM9Ijg4Ljc1IDM0LjIxNDU5MDggMTk5LjczMDE1NSAxLjQ3NjgxMjMxZS0xNCAxODQuNjMzNTUgMTExLjExMTExMSA4OC43NSAzNC4yMTQ1OTA4Ij48L3BvbHlsaW5lPgogICAgICAgIDxtYXNrIGlkPSJtYXNrLTQiIG1hc2tDb250ZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBtYXNrVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB4PSIwIiB5PSIwIiB3aWR0aD0iMTEwLjk4MDE1NSIgaGVpZ2h0PSIxMTEuMTExMTExIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMyI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PC9yZWN0PgogICAgICAgICAgICA8dXNlIGlkPSJUcmlhbmdsZS0xIiBzdHJva2U9IiM0MEI4ODMiIG1hc2s9InVybCgjbWFzay0yKSIgc3Ryb2tlLXdpZHRoPSI0MCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDx1c2UgaWQ9IlRyaWFuZ2xlLTEiIHN0cm9rZT0iIzM0NDk1RCIgbWFzaz0idXJsKCNtYXNrLTQpIiBzdHJva2Utd2lkdGg9IjQwIiB4bGluazpocmVmPSIjcGF0aC0zIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},33:function(e,t,a){var s,i;a(244),s=a(117),i=a(316),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},34:function(e,t,a){var s,i;a(245),s=a(118),i=a(317),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},35:function(e,t,a){var s,i;a(246),s=a(120),i=a(318),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},36:function(e,t,a){var s,i;a(247),s=a(121),i=a(319),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},37:function(e,t,a){var s,i;a(248),s=a(122),i=a(320),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},40:function(e,t,a){var s,i;a(261),s=a(141),i=a(336),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},117:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(21),n=s(i),l=a(36),o=s(l),c=a(37),r=s(c),u=a(35),d=s(u),p=a(34),f=s(p);t["default"]={store:n["default"],vuex:{getters:{sidebar:function(e){return e.sidebar}}},components:{Navbar:o["default"],Sidebar:r["default"],Levelbar:d["default"],FooterBar:f["default"]}}},118:function(e,t){"use strict"},120:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(350),n=s(i);t["default"]={vuex:{getters:{menu:function(e){return e.menu}}},components:{Breadcrumb:n["default"]},data:function(){return{defaultList:[{label:"Home",link:"Dashboard"}]}},computed:{name:function(){return this.$route.name||this.$route.title},list:function(){return this.defaultList.concat(this.find(this.name,this.menu))}},methods:{find:function(e,t){for(var a=[],s=0,i=t.length;s<i;++s){var n=t[s];if(n.label===e||n.link===e){a.push({label:n.label,link:n.link});break}if(n.subMenu){n.link&&a.push({lable:n.label,link:n.link});var l=this.find(e,n.subMenu);l.length?a=a.concat(l):n.link&&a.pop()}}return a}}}},121:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={vuex:{getters:{sidebar:function(e){return e.sidebar}}},methods:{toggleSidebar:function(){this.sidebar.opened=!this.sidebar.opened}}}},122:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=0;t["default"]={vuex:{getters:{menu:function(e){return e.menu},sidebar:function(e){return e.sidebar}}},data:function(){return{steps:this.menu.filter(function(e){return!!e.subMenu}).length,isReady:!1}},ready:function(){this.isReady=!0},methods:{toggle:function(e,t){this.hasCollapse(e)?(t.preventDefault(),e.expanded=!e.expanded):this.autoClose()},hasCollapse:function(e){return!!e.subMenu},isExpanded:function(e){var t=this,s=this.hasCollapse(e);if(s)return a<this.steps&&(a++,e.expanded=!!e.subMenu.filter(function(e){return e.link===t.$route.name}).length),this.isReady&e.expanded},autoClose:function(){this.sidebar.isMobile&&(this.sidebar.opened=!1)}}}},141:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(85),n=s(i);t["default"]={components:{Chart:n["default"]},data:function(){return{data:[300,50,100]}},computed:{chartData:function(){return{labels:["Red","Blue","Yellow"],datasets:[{data:this.data,backgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]}}},created:function(){var e=this;setInterval(function(){e.data.forEach(function(t,a){e.data.$set(a,Math.ceil(1e3*Math.random()))})},1024)}}},244:230,245:230,246:230,247:230,248:230,261:230,316:function(e,t){e.exports=' <div id=app> <navbar></navbar> <sidebar></sidebar> <section class=app-main> <div class="container is-fluid is-marginless app-content"> <levelbar></levelbar> <router-view class=animated transition=fade transition-mode=out-in keep-alive> </router-view> </div> </section> <footer-bar></footer-bar> </div> '},317:function(e,t){e.exports=' <footer class=footer> <div class=container> <div class="content has-text-centered"> <p class=social> <a href=https://github.com/fundon/vue-admin> <span class=icon> <i class="fa fa-github"></i> </span> </a> <a href=https://twitter.com/_fundon> <span class=icon> <i class="fa fa-twitter"></i> </span> </a> </p> <p><span class=icon><i class="fa fa-code"></i></span> with <span class=icon><i class="fa fa-heart"></i></span> by <a href=https://github.com/fundon>fundon</a>.</p> <p>Code licensed under <a href=https://github.com/fundon/vue-admin/blob/master/LICENSE>MIT</a>.</p> </div> </div> </footer> '},318:function(e,t){e.exports=' <nav class="level app-levelbar"> <div class=level-left> <div class=level-item> <h3 class="subtitle is-5"> <strong>{{ name }}</strong> </h3> </div> </div> <div class="level-right is-hidden-mobile"> <breadcrumb :list=list><breadcrumb> </breadcrumb></breadcrumb></div> </nav> '},319:function(e,t,a){e.exports=' <section class="hero is-bold app-navbar"> <div class=hero-head> <nav class=nav> <div class=nav-left> <a class="nav-item is-hidden-tablet touchable sidebar-toggle" @click=toggleSidebar> <span class=icon> <i class="fa fa-bars" aria-hidden=true></i> </span> </a> </div> <div class=nav-center> <a class="nav-item hero-brand touchable" href=#> <img src='+a(32)+' alt="Vue Admin Panel Framework"> <div class=is-hidden-mobile> <span class=vue>Vue</span><strong class=admin>Admin</strong> </div> </a> </div> <div class="nav-right is-flex"></div> </nav> </div> </section> '},320:function(e,t){e.exports=' <aside class="menu app-sidebar animated" :class="{ \'slideInLeft\': sidebar.opened, \'slideOutLeft\': !sidebar.opened }"> <ul class=menu-list> <li v-for="item in menu"> <a class=touchable v-link="{ name: item.link }" @click="toggle(item, $event)" :aria-expanded="isExpanded(item) ? \'true\' : \'false\'"> <span class="icon is-small" v-if=item.icon> <i :class="[\'fa\', item.icon]"></i> </span> <span>{{ item.label }}</span> <span class="icon is-small is-angle" v-if=item.subMenu> <i class="fa fa-angle-down"></i> </span> </a> <ul v-show="isReady && item.expanded" :class="{ \'collapse\': item.subMenu }" @click=autoClose transition=menu-expand> <li v-for="subItem in item.subMenu"> <a class=touchable v-link="{ name: subItem.link }">{{ subItem.label }}</a> </li> </ul> </li> </ul> </aside> '},336:function(e,t){e.exports=' <div _v-2f0c4620=""> <div class="tile is-ancestor" _v-2f0c4620=""> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">One</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> </article> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Two</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> </article> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Three</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> </article> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Four</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> </article> </div> </div> <div class="tile is-ancestor" _v-2f0c4620=""> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <h4 class=title _v-2f0c4620="">Five</h4> <div class=content _v-2f0c4620=""> <chart :type="\'doughnut\'" :data=chartData _v-2f0c4620=""></chart> </div> </article> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <h4 class=title _v-2f0c4620="">Six</h4> <div class=content _v-2f0c4620=""> <chart :type="\'pie\'" :data=chartData _v-2f0c4620=""></chart> </div> </article> </div> </div> <div class="tile is-ancestor" _v-2f0c4620=""> <div class="tile is-vertical is-9" _v-2f0c4620=""> <div class=tile _v-2f0c4620=""> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Seven</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> <div class=content _v-2f0c4620=""> <p _v-2f0c4620="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> </div> </article> </div> <div class="tile is-8 is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Eight</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> <div class=content _v-2f0c4620=""> <p _v-2f0c4620="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> </div> </article> </div> </div> <div class=tile _v-2f0c4620=""> <div class="tile is-8 is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Nine</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> <div class=content _v-2f0c4620=""> <p _v-2f0c4620="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> </div> </article> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Ten</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> <div class=content _v-2f0c4620=""> <p _v-2f0c4620="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> </div> </article> </div> </div> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <div class=content _v-2f0c4620=""> <p class=title _v-2f0c4620="">Eleven</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> <div class=content _v-2f0c4620=""> <p _v-2f0c4620="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p> <p _v-2f0c4620="">Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p> </div> </div> </article> </div> </div> </div> '}});
//# sourceMappingURL=app.7073bcc7768338eb3148.js.map