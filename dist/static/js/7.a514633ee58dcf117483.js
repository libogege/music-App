webpackJsonp([7],{lEJ1:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),a=e("NYxO"),r=e("Sgn/"),o=e("T452"),c=e("PvFA"),u=e("kvay"),g={name:"SingerDetail",data:function(){return{songs:[]}},computed:s()({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},Object(a.c)(["singer"])),created:function(){this._getDetail()},methods:{_getDetail:function(){var t=this;this.singer.id?Object(r.a)(this.singer.id).then(function(n){n.code===o.a&&(t.songs=t._normalizeSong(n.data.list))}):this.$router.push("/singer")},_normalizeSong:function(t){var n=[];return t.forEach(function(t){var e=t.musicData;Object(r.c)(e.songmid).then(function(t){var i=t.data.items[0].vkey;e.songid&&e.albummid&&n.push(Object(c.a)(e,i))})}),n}},components:{MusicList:u.a}},d={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:this.title,"bg-image":this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var l=e("VU/8")(g,d,!1,function(t){e("w5xv")},"data-v-9240b096",null);n.default=l.exports},w5xv:function(t,n){}});
//# sourceMappingURL=7.a514633ee58dcf117483.js.map