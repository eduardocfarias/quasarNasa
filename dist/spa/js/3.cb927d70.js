(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("\n        NASA photo\n      ")]),a("div",[e._v("NASA photo v0.0.2")])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}}),e._l(e.essentialLinks,(function(t){return a("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{attrs:{clickable:"",to:{name:e.route},exact:""}},[e.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1):e._e(),a("q-item-section",[a("q-item-label",[e._v(e._s(e.title))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)},i=[],l={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},route:{type:String,default:"#"},icon:{type:String,default:""}}},s=l,c=a("2877"),p=a("66e5"),u=a("4074"),d=a("0016"),m=a("0170"),b=a("eebe"),f=a.n(b),v=Object(c["a"])(s,r,i,!1,null,null,null),q=v.exports;f()(v,"components",{QItem:p["a"],QItemSection:u["a"],QIcon:d["a"],QItemLabel:m["a"]});const w=[{title:"Home",caption:"",icon:"home",route:"home"},{title:"Rovers",caption:"Cada rover possui seu próprio conjunto de fotos armazenadas no banco de dados, que podem ser consultadas separadamente.",icon:"photo_library",route:"rovers"},{title:"APOD",caption:"O banco de imagem mais popular em todas as agências federais.",icon:"photo_library",route:"apod"}];var _={name:"MainLayout",components:{EssentialLink:q},data(){return{leftDrawerOpen:!1,essentialLinks:w}}},h=_,Q=a("4d5a"),k=a("e359"),y=a("65c6"),L=a("9c40"),g=a("6ac5"),O=a("9404"),D=a("1c1c"),S=a("09e3"),E=Object(c["a"])(h,n,o,!1,null,null,null);t["default"]=E.exports;f()(E,"components",{QLayout:Q["a"],QHeader:k["a"],QToolbar:y["a"],QBtn:L["a"],QToolbarTitle:g["a"],QDrawer:O["a"],QList:D["a"],QItemLabel:m["a"],QPageContainer:S["a"]})}}]);