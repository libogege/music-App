webpackJsonp([6],{AuAJ:function(e,t){},YOyO:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("Dd8w"),a=s.n(r),c=s("2X+S"),o=s("8stH"),i=s("T452"),n=s("6Xyt"),h=s("vhoT"),u=s("XEAW"),l=s("qwAB"),f=s("F4+m"),v=s("NYxO"),y={name:"Search",mixins:[f.b,f.c],data:function(){return{hotKey:[]}},created:function(){this._getHotKey()},computed:{shortcut:function(){return this.hotKey.concat(this.searchHistory)}},methods:a()({handlePlaylist:function(e){var t=e.length>0?"60px":"";this.$refs.shortcutWrapper.style.bottom=t,this.$refs.shortcut.refresh(),this.$refs.searchResult.style.bottom=t,this.$refs.suggest.refresh()},_getHotKey:function(){var e=this;Object(o.a)().then(function(t){t.code===i.a&&(e.hotKey=t.data.hotkey.slice(0,10))})},showConfirm:function(){this.$refs.confirm.show()}},Object(v.b)(["clearSearchHistory"])),watch:{query:function(e){var t=this;e||setTimeout(function(){t.$refs.shortcut.refresh()},20)}},components:{SearchBox:c.a,Suggest:n.a,SearchList:h.a,Confirm:u.a,Scroll:l.a}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search"},[s("div",{staticClass:"search-box-wrapper"},[s("search-box",{ref:"searchBox",on:{query:e.onQueryChange}})],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.query,expression:"!query"}],ref:"shortcutWrapper",staticClass:"shortcut-wrapper"},[s("scroll",{ref:"shortcut",staticClass:"shortcut",attrs:{refreshDelay:e.refreshDelay,data:e.shortcut}},[s("div",[s("div",{staticClass:"hot-key"},[s("h1",{staticClass:"title"},[e._v("热门搜索")]),e._v(" "),s("ul",e._l(e.hotKey,function(t,r){return s("li",{key:r,staticClass:"item",on:{click:function(s){return e.addQuery(t.k)}}},[s("span",[e._v(e._s(t.k))])])}),0)]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[s("h1",{staticClass:"title"},[s("span",{staticClass:"text"},[e._v("搜索历史")]),e._v(" "),s("span",{staticClass:"clear",on:{click:e.showConfirm}},[s("i",{staticClass:"icon-clear"})])]),e._v(" "),s("search-list",{attrs:{searches:e.searchHistory},on:{select:e.addQuery,delete:e.deleteSearchHistory}})],1)])])],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.query,expression:"query"}],ref:"searchResult",staticClass:"search-result"},[s("suggest",{ref:"suggest",attrs:{query:e.query},on:{select:e.saveSearch,listScroll:e.blurInput}})],1),e._v(" "),s("confirm",{ref:"confirm",attrs:{text:"是否清空所有搜索历史",confirmBtnText:"清空"},on:{confirm:e.clearSearchHistory}}),e._v(" "),s("router-view")],1)},staticRenderFns:[]};var m=s("VU/8")(y,d,!1,function(e){s("AuAJ")},"data-v-a8e6d2e2",null);t.default=m.exports}});
//# sourceMappingURL=6.5be561af5d07a8053cdb.js.map