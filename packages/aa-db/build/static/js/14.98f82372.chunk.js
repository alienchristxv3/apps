(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[14],{105:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(105);function r(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(105);var r=n(107);function c(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},110:function(e,t,n){"use strict";var a=n(11),r=n(12),c=n(19),s=n(18),i=n(0),o=n.n(i),u=new Map([[1,"./assets/star1.png"],[2,"./assets/star2.png"],[3,"./assets/star3.png"],[4,"./assets/star4.png"],[5,"./assets/star5.png"]]),l=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e;return o.a.createElement("span",null,u.has(this.props.rarity)?o.a.createElement("img",{alt:"".concat(this.props.rarity," star(s)"),src:u.get(this.props.rarity),style:{height:null!==(e=this.props.height)&&void 0!==e?e:18}}):null)}}]),n}(o.a.Component);t.a=l},116:function(e,t,n){"use strict";var a;!function(e){e.SABER="saber",e.ARCHER="archer",e.LANCER="lancer",e.RIDER="rider",e.CASTER="caster",e.ASSASSIN="assassin",e.BERSERKER="berserker",e.SHIELDER="shielder",e.RULER="ruler",e.ALTER_EGO="alterEgo",e.AVENGER="avenger",e.GRAND_CASTER="grandCaster",e.BEAST_II="beastII",e.BEAST_I="beastI",e.MOON_CANCER="moonCancer",e.BEAST_IIIR="beastIIIR",e.FOREIGNER="foreigner",e.BEAST_IIIL="beastIIIL",e.BEAST_UNKNOWN="beastUnknown",e.ALL="ALL",e.EXTRA="EXTRA"}(a||(a={})),t.a=a},120:function(e,t,n){"use strict";var a=n(11),r=n(12),c=n(19),s=n(18),i=n(0),o=n.n(i),u=n(116),l=new Map([[0,0],[1,1],[2,1],[3,2],[4,3],[5,3]]),f=new Map([[u.a.SABER,1],[u.a.ARCHER,2],[u.a.LANCER,3],[u.a.RIDER,4],[u.a.CASTER,5],[u.a.ASSASSIN,6],[u.a.BERSERKER,7],[u.a.SHIELDER,8],[u.a.RULER,9],[u.a.ALTER_EGO,10],[u.a.AVENGER,11],[u.a.MOON_CANCER,23],[u.a.FOREIGNER,25],[u.a.GRAND_CASTER,5],[u.a.BEAST_I,20],[u.a.BEAST_II,20],[u.a.BEAST_IIIL,20],[u.a.BEAST_IIIR,20],[u.a.BEAST_UNKNOWN,20],[u.a.ALL,1001],[u.a.EXTRA,1002]]),p=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e;return o.a.createElement("img",{alt:"",src:this.location(),style:{height:null!==(e=this.props.height)&&void 0!==e?e:24}})}},{key:"location",value:function(){var e,t=f.has(this.props.className)?f.get(this.props.className):12,n=null!==(e=this.props.rarity)&&void 0!==e?e:5,a=l.has(n)?l.get(n):3;return"https://assets.atlasacademy.io/GameData/NA/ClassIcons/class".concat(a,"_").concat(t,".png")}}]),n}(o.a.Component);t.a=p},132:function(e,t,n){"use strict";var a=n(11),r=n(12),c=n(19),s=n(18),i=n(0),o=n.n(i),u=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("img",{alt:"",src:this.props.location,style:this.props.height?{height:this.props.height}:void 0})}}]),n}(o.a.Component);t.a=u},185:function(e,t,n){},195:function(e,t,n){"use strict";n.r(t);var a=n(109),r=n(11),c=n(12),s=n(19),i=n(18),o=n(0),u=n.n(o),l=n(95),f=n(187),p=n(13),v=n(99),h=n(116),g=n(120),E=n(54),m=n(132),d=n(9),y=n(110),b=(n(185),[h.a.SABER,h.a.ARCHER,h.a.LANCER,h.a.RIDER,h.a.CASTER,h.a.ASSASSIN,h.a.BERSERKER,h.a.EXTRA]),C=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={loading:!0,servants:[],activeClassFilters:[],activeRarityFilters:[]},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;try{v.a.servantList(this.props.region).then((function(t){e.setState({loading:!1,servants:t})}))}catch(t){this.setState({error:t})}}},{key:"isClassFilterActive",value:function(e){return-1!==this.state.activeClassFilters.indexOf(e)}},{key:"isExtra",value:function(e){return!(e===h.a.SABER||e===h.a.ARCHER||e===h.a.LANCER||e===h.a.RIDER||e===h.a.CASTER||e===h.a.ASSASSIN||e===h.a.BERSERKER)}},{key:"toggleClassFilter",value:function(e){var t=!1,n=this.state.activeClassFilters.filter((function(n){return n!==h.a.ALL&&(n!==e||(t=!0,!1))}));t||n.push(e),this.setState({activeClassFilters:n})}},{key:"toggleRarityFilter",value:function(e){-1!==this.state.activeRarityFilters.indexOf(e)?this.setState({activeClassFilters:this.state.activeClassFilters.filter((function(e){return e!==h.a.ALL})),activeRarityFilters:this.state.activeRarityFilters.filter((function(t){return t!==e}))}):this.setState({activeClassFilters:this.state.activeClassFilters.filter((function(e){return e!==h.a.ALL})),activeRarityFilters:[].concat(Object(a.a)(this.state.activeRarityFilters),[e])})}},{key:"servants",value:function(){var e=this,t=this.state.servants.slice().reverse();if(this.state.activeRarityFilters.length>0&&(t=t.filter((function(t){return-1!==e.state.activeRarityFilters.indexOf(t.rarity)}))),this.state.activeClassFilters.length>0&&(t=t.filter((function(t){for(var n in e.state.activeClassFilters){var a=e.state.activeClassFilters[n];if(a===h.a.EXTRA&&e.isExtra(t.className))return!0;if(t.className===a)return!0}return!1}))),this.state.search){var n=this.state.search.split(" ").filter((function(e){return e})).map((function(e){return e.toLowerCase()}));t=t.filter((function(e){return n.every((function(t){return e.name.toLowerCase().includes(t)}))}))}return t}},{key:"render",value:function(){var e,t=this;return this.state.error?u.a.createElement(E.a,{error:this.state.error}):this.state.loading?u.a.createElement(d.a,null):u.a.createElement("div",{id:"servants"},u.a.createElement(l.a,{inline:!0,style:{justifyContent:"center"}},b.map((function(e){var n=t.isClassFilterActive(e);return u.a.createElement("span",{key:e,className:"filter",style:{opacity:n?1:.5},onClick:function(n){t.toggleClassFilter(e)}},u.a.createElement(g.a,{height:50,rarity:n?5:3,className:e}))})),u.a.createElement(l.a.Control,{style:{marginLeft:"auto"},placeholder:"Search",value:null!==(e=this.state.search)&&void 0!==e?e:"",onChange:function(e){t.setState({search:e.target.value})}})),u.a.createElement("hr",null),u.a.createElement(f.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"#"),u.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"Class"),u.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"Thumbnail"),u.a.createElement("th",null,"Name"),u.a.createElement("th",null,"Rarity"))),u.a.createElement("tbody",null,this.servants().map((function(e,n){var a="/".concat(t.props.region,"/servant/").concat(e.collectionNo);return u.a.createElement("tr",{key:n},u.a.createElement("td",{align:"center"},u.a.createElement(p.b,{to:a},e.collectionNo)),u.a.createElement("td",{align:"center"},u.a.createElement(g.a,{className:e.className,rarity:e.rarity,height:50})),u.a.createElement("td",{align:"center"},u.a.createElement(p.b,{to:a},u.a.createElement(m.a,{type:e.type,rarity:e.rarity,location:e.face,height:50}))),u.a.createElement("td",null,u.a.createElement(p.b,{to:a},e.name)),u.a.createElement("td",null,u.a.createElement(y.a,{rarity:e.rarity})))})))))}}]),n}(u.a.Component);t.default=C},99:function(e,t,n){"use strict";var a=n(117),r=n(11),c=n(12),s=n(97),i=n.n(s),o=n(98),u=n(104),l=n.n(u),f=n(24),p=n(31),v=n(29),h=function(){function e(){Object(r.a)(this,e),this.cache=new Map,this.pending=new Map,this.pendingCatches=new Map}return Object(c.a)(e,[{key:"get",value:function(e,t,n){var a=this,r=this.cache.get(e);if(void 0!==r)return new Promise((function(e){e(r)}));var c=this.pending.get(e);return void 0!==c?new Promise((function(t,n){var r;c.push(t),(null!==(r=a.pendingCatches.get(e))&&void 0!==r?r:[]).push(n)})):(this.pending.set(e,[]),this.pendingCatches.set(e,[]),new Promise((function(r,c){t.call(null).then((function(t){var c;(null!==(c=a.pending.get(e))&&void 0!==c?c:[]).forEach((function(e){e.call(null,t)})),a.cache.set(e,t),a.pending.delete(e),a.pendingCatches.delete(e),null!==n&&window.setTimeout((function(){a.cache.delete(e)}),n),r(t)})).catch((function(t){var n;(null!==(n=a.pendingCatches.get(e))&&void 0!==n?n:[]).forEach((function(e){e.call(null,t)})),a.pending.delete(e),a.pendingCatches.delete(e),c(t)}))})))}}]),e}(),g="https://api.atlasacademy.io",E=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m={buff:new h,commandCode:new h,commandCodes:new h,craftEssence:new h,craftEssenceList:new h,func:new h,mysticCode:new h,mysticCodeList:new h,noblePhantasm:new h,quest:new h,servant:new h,servantList:new h,skill:new h,traitMap:new h},d=function(){function e(){Object(r.a)(this,e)}return Object(c.a)(e,null,[{key:"buff",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return m.buff.get(a,(function(){var a="?reverse=true&reverseDepth=skillNp"+(n===p.a.ENGLISH?"&lang=en":"");return E("".concat(g,"/nice/").concat(e,"/buff/").concat(t).concat(a))}),2e4)}},{key:"commandCode",value:function(e,t){var n="".concat(e,"-").concat(t);return m.commandCode.get(n,(function(){return E("".concat(g,"/nice/").concat(e,"/CC/").concat(t))}),2e4)}},{key:"commandCodeList",value:function(){var t=Object(o.a)(i.a.mark((function t(n){var r,c,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==v.a.NA){t.next=4;break}return t.abrupt("return",e.getCommandCodeEssenceList(v.a.NA));case 4:if(n!==v.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCommandCodeEssenceList(v.a.JP));case 6:return t.next=8,e.getCommandCodeEssenceList(v.a.JP);case 8:return r=t.sent,t.next=11,e.getCommandCodeEssenceList(v.a.NA);case 11:return c=t.sent,s=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",r.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=s.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"craftEssence",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return m.craftEssence.get(a,(function(){var a="?lore=true"+(n===p.a.ENGLISH?"&lang=en":"");return E("".concat(g,"/nice/").concat(e,"/equip/").concat(t).concat(a))}),2e4)}},{key:"craftEssenceList",value:function(){var t=Object(o.a)(i.a.mark((function t(n){var r,c,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==v.a.NA){t.next=4;break}return t.abrupt("return",e.getCacheableCraftEssenceList(v.a.NA));case 4:if(n!==v.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableCraftEssenceList(v.a.JP));case 6:return t.next=8,e.getCacheableCraftEssenceList(v.a.JP);case 8:return r=t.sent,t.next=11,e.getCacheableCraftEssenceList(v.a.NA);case 11:return c=t.sent,s=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",r.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=s.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"func",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return m.func.get(a,(function(){var a="?reverse=true&reverseDepth=servant"+(n===p.a.ENGLISH?"&lang=en":"");return E("".concat(g,"/nice/").concat(e,"/function/").concat(t).concat(a))}),2e4)}},{key:"mysticCode",value:function(e,t){var n="".concat(e,"-").concat(t);return m.mysticCode.get(n,(function(){return E("".concat(g,"/nice/").concat(e,"/MC/").concat(t))}),2e4)}},{key:"mysticCodeList",value:function(){var t=Object(o.a)(i.a.mark((function t(n){var r,c,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==v.a.NA){t.next=4;break}return t.abrupt("return",e.getCacheableMysticCodeList(v.a.NA));case 4:if(n!==v.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableMysticCodeList(v.a.JP));case 6:return t.next=8,e.getCacheableMysticCodeList(v.a.JP);case 8:return r=t.sent,t.next=11,e.getCacheableMysticCodeList(v.a.NA);case 11:return c=t.sent,s=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",r.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=s.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"noblePhantasm",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return m.noblePhantasm.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return E("".concat(g,"/nice/").concat(e,"/NP/").concat(t).concat(a))}),2e4)}},{key:"quest",value:function(e,t,n){var a="".concat(e,"-").concat(t,"-").concat(n);return m.quest.get(a,(function(){return E("".concat(g,"/nice/").concat(e,"/quest/").concat(t,"/").concat(n))}),2e4)}},{key:"servant",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return m.servant.get(a,(function(){var a="?lore=true"+(n===p.a.ENGLISH?"&lang=en":"");return E("".concat(g,"/nice/").concat(e,"/servant/").concat(t).concat(a))}),2e4)}},{key:"servantList",value:function(){var e=Object(o.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.a.language(),a="".concat(t,"-").concat(n),r=t===v.a.NA?"".concat(g,"/export/NA/basic_servant.json"):t===v.a.JP&&n===p.a.DEFAULT?"".concat(g,"/export/JP/basic_servant.json"):"".concat(g,"/export/JP/basic_servant_lang_en.json"),e.abrupt("return",m.servantList.get(a,(function(){return E(r)}),null));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"skill",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return m.skill.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return E("".concat(g,"/nice/").concat(e,"/skill/").concat(t).concat(a))}),2e4)}},{key:"traitMap",value:function(e){return m.traitMap.get(e,(function(){return E("".concat(g,"/export/").concat(e,"/nice_trait.json"))}),null)}},{key:"searchBuffs",value:function(e,t,n){var a="?reverse=true";return f.a.language()===p.a.ENGLISH&&(a+="&lang=en"),t&&(a+="&name="+encodeURI(t)),n&&(a+="&type="+n),E("".concat(g,"/nice/").concat(e,"/buff/search").concat(a))}},{key:"searchFuncs",value:function(e,t,n,a,r){var c="?reverse=true";return f.a.language()===p.a.ENGLISH&&(c+="&lang=en"),t&&(c+="&popupText="+encodeURI(t)),n&&(c+="&type="+n),a&&(c+="&targetType="+a),r&&(c+="&targetTeam="+r),E("".concat(g,"/nice/").concat(e,"/function/search").concat(c))}},{key:"getCommandCodeEssenceList",value:function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.commandCodes.get(t,(function(){return E("".concat(g,"/export/").concat(t,"/nice_command_code.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCacheableCraftEssenceList",value:function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.craftEssenceList.get(t,(function(){return E("".concat(g,"/export/").concat(t,"/basic_equip.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCacheableMysticCodeList",value:function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.mysticCodeList.get(t,(function(){return E("".concat(g,"/export/").concat(t,"/nice_mystic_code.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.a=d}}]);
//# sourceMappingURL=14.98f82372.chunk.js.map