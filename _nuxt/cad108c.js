(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(t,e,n){"use strict";n.r(e);var o=n(124),r=n(122).default,l=n(123).default,c=n(125),f={name:"CoreHeader",components:{HomeIcon:o.default,LocaleSwitch:l,NavBar:r,TextButton:c.default},computed:{myPyConUrl:function(){return"https://tw.pycon.org/2021/".concat(this.$i18n.locale,"/dashboard/")}}},d=n(4),component=Object(d.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"w-full h-16 px-4 flex justify-between items-center"},[e("div",{staticClass:"w-56 h-full flex justify-between items-center"},[e("home-icon"),this._v(" "),e("locale-switch")],1),this._v(" "),e("nav-bar"),this._v(" "),e("text-button",{attrs:{href:this.myPyConUrl,secondary:""}},[this._v(" my pycontw ")])],1)}),[],!1,null,"7fb2cb7d",null);e.default=component.exports;installComponents(component,{HomeIcon:n(124).default,LocaleSwitch:n(123).default,NavBar:n(122).default,TextButton:n(125).default,Header:n(121).default})},122:function(t,e,n){"use strict";n.r(e);n(39),n(120);var o=n(53),r=n(44),l=Object(r.a)({"en-us":{about:"About",sponsor:"Sponsor",speaking:"Speaking",cfp:"Call for Proposals",talk:"Propose a Talk",tutorial:"Propose a Tutorial",recording:"Recording Release",conference:"Conference",schedule:"Schedule",keynotes:"Keynotes",talks:"Talks",tutorials:"Tutorials",communityTracks:"Community Tracks",events:"Events",overview:"Overview",warmUpSessions:"Warm-Up Sessions",openSpaces:"Open Spaces",sprints:"Sprints",jobListings:"Job Listings",registration:"Registration",conferenceTickets:"Conference Tickets",financialAid:"Financial Aid",venue:"Venue",covid19Guidelines:"COVID-19 Guidelines"},"zh-hant":{about:"關於",sponsor:"贊助",speaking:"投稿",cfp:"投稿募集",talk:"如何投稿演講",tutorial:"如何投稿專業課程",recording:"錄影釋出",conference:"議程",schedule:"時間表",keynotes:"基調演講",talks:"一般演講",tutorials:"專業課程",communityTracks:"社群軌",events:"活動",overview:"活動總覽",warmUpSessions:"暖身活動",openSpaces:"開放空間",sprints:"衝刺開發",jobListings:"徵才資訊",registration:"註冊",conferenceTickets:"會議門票",financialAid:"財務補助",venue:"會場",covid19Guidelines:"COVID-19 防疫守則"}}),c=n(43),f={i18n:l,name:"CoreHeaderNavBar",components:{NavBarItemDropdown:o.default,LocaleLink:c.b},computed:{conferenceItems:function(){return[{label:this.$i18n.t("schedule"),value:"/conference/schedule"},{label:this.$i18n.t("keynotes"),value:"/conference/keynotes"},{label:this.$i18n.t("talks"),value:"/conference/talks"},{label:this.$i18n.t("tutorials"),value:"/conference/tutorials"},{label:this.$i18n.t("communityTracks"),value:"/conference/community-tracks"}]},speakingItems:function(){return[{label:this.$i18n.t("cfp"),value:"/speaking/cfp"},{label:this.$i18n.t("talk"),value:"/speaking/talk"},{label:this.$i18n.t("tutorial"),value:"/speaking/tutorial"},{label:this.$i18n.t("recording"),value:"/speaking/recording"}]},eventsItems:function(){return[{label:this.$i18n.t("overview"),value:"/events/overview"},{label:this.$i18n.t("warmUpSessions"),value:"/events/warm-up-sessions"},{label:this.$i18n.t("openSpaces"),value:"/events/open-spaces"},{label:this.$i18n.t("sprints"),value:"/events/sprints"},{label:this.$i18n.t("jobListings"),value:"/events/job-listings"}]},registrationItems:function(){return[{label:this.$i18n.t("conferenceTickets"),value:"/registration/tickets"},{label:this.$i18n.t("financialAid"),value:"/registration/financial-aid"}]}},methods:{getPageClassesByPath:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.$route.name.startsWith(t);return{"mx-4":!0,"px-4":e,"py-2":e,"border-b-2":!0,"border-gray-800":n,"border-transparent":!n}}}},d=n(4),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"flex justify-evenly items-center"},[n("locale-link",{class:t.getPageClassesByPath("about",!0),attrs:{to:"/about"}},[t._v("\n        "+t._s(t.$t("about"))+"\n    ")]),t._v(" "),n("locale-link",{class:t.getPageClassesByPath("sponsor",!0),attrs:{to:"/sponsor"}},[t._v("\n        "+t._s(t.$t("sponsor"))+"\n    ")]),t._v(" "),n("nav-bar-item-dropdown",{class:t.getPageClassesByPath("speaking"),attrs:{label:t.$t("speaking"),items:t.speakingItems}})],1)}),[],!1,null,"dc6c010c",null);e.default=component.exports;installComponents(component,{LocaleLink:n(28).default,NavBarItemDropdown:n(53).default})},123:function(t,e,n){"use strict";n.r(e);var o=n(53),r=n(44),l={i18n:Object(r.a)({"en-us":{"en-us":"EN","zh-hant":"ZH"},"zh-hant":{"en-us":"英文","zh-hant":"中文"}}),name:"CoreHeaderLocaleSwitch",components:{CoreMenuItem:n(69).b,NavBarItemDropdown:o.default},data:function(){return{languages:["en-us","zh-hant"]}},methods:{onClickLang:function(t,e,n){this.$i18n.locale=n,this.$router.push(e(n)),t()}}},c=n(4),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav-bar-item-dropdown",{attrs:{sm:""},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("\n        "+t._s(t.$t(t.$i18n.locale))+"\n        "),n("svg",{staticClass:"-mr-1 ml-2 h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]},proxy:!0},{key:"items",fn:function(e){var o=e.hideMenu;return t._l(t.languages,(function(e,i){return n("core-menu-item",{key:"language_"+i,on:{click:function(n){return t.onClickLang(o,t.switchLocalePath,e)}}},[t._v("\n            "+t._s(t.$t(e))+"\n        ")])}))}}])})}),[],!1,null,"48bc576a",null);e.default=component.exports;installComponents(component,{NavBarItemDropdown:n(53).default})},124:function(t,e,n){"use strict";n.r(e);var o={name:"HomeIcon",components:{LocaleLink:n(28).default}},r=n(4),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("locale-link",{staticClass:"w-10",attrs:{to:"/"}},[e("svg",{attrs:{viewBox:"0 0 36 36"}},[e("rect",{attrs:{width:"36",height:"36",x:"0",fill:"#ab320e"}})])])}),[],!1,null,"7951d90e",null);e.default=component.exports;installComponents(component,{LocaleLink:n(28).default})},125:function(t,e,n){"use strict";n.r(e);var o={name:"CoreTextButton",components:{ExtLink:n(45).default},props:{primary:{type:Boolean,default:!0},secondary:{type:Boolean,default:!1},block:{type:Boolean,default:!1},href:{type:String,default:void 0}},computed:{coreButtonClasses:function(){return{"core-button":!0,"--primary":this.primary,"--secondary":this.secondary,"--block":this.block}}}},r=(n(237),n(4)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{class:this.coreButtonClasses},[this.href?e("ext-link",{staticClass:"w-full h-full",attrs:{href:this.href}},[this._t("default")],2):this._t("default")],2)}),[],!1,null,"617cc8f3",null);e.default=component.exports;installComponents(component,{ExtLink:n(45).default})},166:function(t,e,n){var content=n(234);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("afc021a0",content,!0,{sourceMap:!1})},167:function(t,e,n){var content=n(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("8b1e478e",content,!0,{sourceMap:!1})},168:function(t,e,n){var content=n(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("5aa25992",content,!0,{sourceMap:!1})},169:function(t,e,n){var content=n(240);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("56b15182",content,!0,{sourceMap:!1})},183:function(t,e,n){"use strict";var o=n(44),r=Object(o.a)({"en-us":{codeOfConduct:"Code of Conduct",staff:"Staff",community:"Community",privacyPolicy:"Privacy Policy"},"zh-hant":{codeOfConduct:"行為準則",staff:"工作人員",community:"社群",privacyPolicy:"個人資料保護聲明"}}),l=n(43),c={i18n:r,name:"CoreFooter",components:{ExtLink:l.a,LocaleLink:l.b}},f=n(4),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col px-4 py-8 bg-orange-300"},[n("div",{staticClass:"flex justify-center"},[n("div",{staticClass:"flex flex-col mr-20"},[n("locale-link",{attrs:{to:"/about/code-of-conduct"}},[t._v("\n                "+t._s(t.$t("codeOfConduct"))+"\n            ")])],1),t._v(" "),n("div",{staticClass:"flex flex-col ml-20"},[n("ext-link",{attrs:{href:"https://pycontw.blogspot.tw/"}},[t._v("\n                Blogspot\n            ")]),t._v(" "),n("ext-link",{attrs:{href:"https://www.facebook.com/pycontw"}},[t._v("\n                Facebook\n            ")]),t._v(" "),n("ext-link",{attrs:{href:"https://twitter.com/pycontw"}},[t._v("Twitter")]),t._v(" "),n("a",{staticClass:"outline-none",attrs:{href:"mailto:organizers@pycon.tw",target:"_blank"}},[t._v("\n                Email\n            ")])],1)]),t._v(" "),n("div",{staticClass:"flex justify-center mt-16 text-2xl cursor-default"},[t._v("\n        PyCon Taiwan\n    ")])])}),[],!1,null,"18c4c242",null),d=component.exports;installComponents(component,{LocaleLink:n(28).default,ExtLink:n(45).default});var footer=d,h={components:{CoreHeader:n(121).default,CoreFooter:footer}},v=(n(239),Object(f.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"default-layout"},[e("core-header"),this._v(" "),e("Nuxt"),this._v(" "),e("core-footer")],1)}),[],!1,null,null,null));e.a=v.exports},185:function(t,e,n){n(186),n(187),t.exports=n(188)},233:function(t,e,n){"use strict";n(166)},234:function(t,e,n){(e=n(34)(!1)).push([t.i,"a[data-v-41207a24]{color:inherit}.highlight[data-v-41207a24]{color:#2563eb}.highlight[data-v-41207a24]:hover{color:#1e40af}",""]),t.exports=e},235:function(t,e,n){"use strict";n(167)},236:function(t,e,n){(e=n(34)(!1)).push([t.i,".highlight[data-v-219fe382]{color:#2563eb}.highlight[data-v-219fe382]:hover{color:#1e40af}",""]),t.exports=e},237:function(t,e,n){"use strict";n(168)},238:function(t,e,n){(e=n(34)(!1)).push([t.i,".core-button[data-v-617cc8f3]{display:inline-flex;align-items:center;justify-content:center;min-width:88px;height:2.25rem;padding:8px 12px;line-height:1.25rem;border-radius:5px;text-transform:uppercase;outline:none}.core-button.--primary[data-v-617cc8f3]{color:#fdf5e6;background-color:sienna;border-color:transparent}.core-button.--secondary[data-v-617cc8f3]{color:sienna;background-color:#fff;border:1px solid sienna}",""]),t.exports=e},239:function(t,e,n){"use strict";n(169)},240:function(t,e,n){(e=n(34)(!1)).push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.default-layout{display:grid;height:100vh;grid-template-rows:60px auto 280px;grid-template-columns:auto}',""]),t.exports=e},28:function(t,e,n){"use strict";n.r(e);var o={name:"CoreLocaleLink",props:{to:{type:String,default:""},highlight:{type:Boolean,default:!1}},computed:{classObject:function(){return{highlight:this.highlight}}}},r=(n(235),n(4)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("nuxt-link",{class:this.classObject,attrs:{to:this.localePath(this.to)}},[this._t("default")],2)}),[],!1,null,"219fe382",null);e.default=component.exports},43:function(t,e,n){"use strict";var o=n(45);n.d(e,"a",(function(){return o.default}));var r=n(28);n.d(e,"b",(function(){return r.default}))},44:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(t){return{messages:t}}},45:function(t,e,n){"use strict";n.r(e);var o={name:"CoreExtLink",props:{href:{type:String,default:""},highlight:{type:Boolean,default:!1}},computed:{classObject:function(){return{"outline-none":!0,highlight:this.highlight}}}},r=(n(233),n(4)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("a",{class:this.classObject,attrs:{href:this.href,rel:"noopener noreferrer",target:"_blank"}},[this._t("default")],2)}),[],!1,null,"41207a24",null);e.default=component.exports},53:function(t,e,n){"use strict";n.r(e);var menu=n(69),o={name:"CoreHeaderNavBarItemDropdown",components:{CoreMenu:menu.a,CoreMenuItem:menu.b},props:{sm:Boolean,lg:Boolean,label:{type:String,default:""},items:{type:Array,default:function(){return[]}}},data:function(){return{delay:0,isHovering:!1}},methods:{hideMenu:function(){this.isHovering=!1},showMenu:function(){this.isHovering=!0}}},r=n(4),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative inline-block text-left"},[n("div",{staticClass:"relative flex flex-col rounded-md items-start cursor-pointer",on:{mouseenter:t.showMenu,mouseleave:t.hideMenu}},[n("div",{staticClass:"inline-flex justify-center w-full px-4 py-2 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",attrs:{id:"options-menu","aria-haspopup":"true","aria-expanded":"true"}},[t.$slots.label?t._t("label"):t._e(),t._v("\n            "+t._s(t.label)+"\n        ")],2),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition ease-out duration-100 transform","enter-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75 transform","leave-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"}},[n("core-menu",{directives:[{name:"show",rawName:"v-show",value:t.isHovering,expression:"isHovering"}],style:{top:"32px"},attrs:{sm:t.sm,lg:t.lg}},[t._t("items",null,{hideMenu:t.hideMenu}),t._v(" "),t._l(t.items,(function(e){return n("core-menu-item",{key:e.value,attrs:{href:e.value},on:{click:t.hideMenu}},[t._v("\n                    "+t._s(e.label)+"\n                ")])}))],2)],1)],1)])}),[],!1,null,"48fa47f1",null);e.default=component.exports},69:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return h}));n(30);var o=n(86),r={name:"CoreMenu",props:{sm:Boolean,lg:Boolean},data:function(){return{originalClasses:["origin-top-right","absolute","right-0","mt-2","rounded-md","shadow-lg","bg-white","ring-1","ring-black","ring-opacity-5"]}},computed:{menuClasses:function(){var t;return t=this.sm?"w-24":this.lg?"w-56":"w-48",[].concat(Object(o.a)(this.originalClasses),[t])}}},l=n(4),c=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.menuClasses,attrs:{"aria-labelledby":"options-menu","aria-orientation":"vertical",role:"menu"}},[this._t("default")],2)}),[],!1,null,"272d2561",null).exports,f={name:"MenuItem",components:{LocaleLink:n(43).b},props:{href:{type:String,default:"#"}},computed:{readonly:function(){return!this.href}},methods:{onClick:function(t){this.$emit("click",t)}}},d=Object(l.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"py-1",on:{click:this.onClick}},[this.readonly?e("div",[this._t("default")],2):e("locale-link",{staticClass:"block px-4 py-2 text-sm text-gray-700 rounded hover:bg-gray-100 hover:text-gray-900",attrs:{to:this.href,role:"menuitem"}},[this._t("default")],2)],1)}),[],!1,null,"6a0d0e37",null),h=d.exports;installComponents(d,{LocaleLink:n(28).default})}},[[185,35,1,36]]]);