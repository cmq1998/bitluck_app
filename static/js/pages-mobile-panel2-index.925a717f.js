(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mobile-panel2-index"],{"07ed":function(t,e,i){"use strict";var o=i("b96a"),s=i.n(o);s.a},3839:function(t,e,i){"use strict";i.r(e);var o=i("e2b7"),s=i.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=s.a},"5d1b":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,"uni-page-body[data-v-1c54328e]{height:100%;background-color:#fff}body.?%PAGE?%[data-v-1c54328e]{background-color:#fff}.content[data-v-1c54328e]{width:100%;height:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;position:relative;background-color:#fff\n\t/* background-image: linear-gradient(to right, white, antiquewhite); */\n\t/* background-color: white; */}\n\n/* 独立每一个盒子 */.item_box[data-v-1c54328e]{position:relative;width:24%;height:31%;display:flex;flex-direction:column;\n\t/* align-items: center; */\n\t/* justify-content: center; */border-radius:%?15?%;border:%?1?% solid #e3e3e3;\n\t/* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */box-shadow:rgba(88,102,126,.1) 0 4px 24px 0,rgba(88,102,126,.12) 0 1px 2px 0}.logo[data-v-1c54328e]{width:%?22?%;margin:%?10?% %?10?% %?10?% %?20?%\n\t/* margin-bottom: 5rpx; */}\n\n/* 价格 */.price_box[data-v-1c54328e]{height:30%;width:95%;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:7% auto}.price_text[data-v-1c54328e]{font-size:%?22?%}\n\n/* 每天涨跌幅 */.tab_box[data-v-1c54328e]{display:flex;justify-content:center;align-items:center;font-size:%?10?%;padding:%?2?% %?6?%;margin-top:%?10?%;border-radius:%?5?%;border-width:%?1?%;border-style:solid}\n\n/* 浮动盒子，成本、爆仓价格信息 */.float_box[data-v-1c54328e]{position:absolute;font-size:%?7?%;right:%?18?%;top:%?10?%;opacity:.8}",""]),t.exports=e},b96a:function(t,e,i){var o=i("5d1b");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=i("4f06").default;s("2222db4a",o,!0,{sourceMap:!1,shadowMode:!1})},bf83:function(t,e,i){"use strict";i.r(e);var o=i("d0e1"),s=i("3839");for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("07ed");var a=i("f0c5"),r=Object(a["a"])(s["default"],o["b"],o["c"],!1,null,"1c54328e",null,!1,o["a"],void 0);e["default"]=r.exports},d0e1:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var o={uIcon:i("ec95").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},t._l(t.showList,(function(e){return i("v-uni-view",{staticClass:"item_box"},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-image",{staticClass:"logo",attrs:{mode:"widthFix",src:e.logoLink}}),i("v-uni-view",{staticStyle:{"font-size":"10rpx",color:"gray"}},[t._v(t._s(e.symbol_okx))])],1),i("v-uni-view",{staticClass:"price_box"},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"},style:{color:e.color}},[i("v-uni-text",{staticClass:"price_text"},[t._v("$"+t._s(e.price))]),i("u-icon",{directives:[{name:"show",rawName:"v-show",value:e.logoArrow,expression:"item.logoArrow"}],staticStyle:{"margin-left":"0upx"},attrs:{name:e.logoArrow,size:"12"}})],1),i("v-uni-view",{staticClass:"tab_box",style:{color:e.dayUp>=0?"#d93d57":"#11a876"}},[t._v(t._s(e.dayUp)+" %")])],1),i("v-uni-view"),i("v-uni-view",{staticClass:"float_box"},[e.costPrice>0?i("v-uni-view",[t._v("成本价："+t._s(e.costPrice))]):t._e(),e.marginPrice>0?i("v-uni-view",[t._v("爆仓价："+t._s(e.marginPrice))]):t._e()],1)],1)})),1)},n=[]},e2b7:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7"),i("159b"),i("14d9"),i("e9c4"),i("a9e3"),i("c740");var o={data:function(){return{colorType:2,colorRed:"#d93d57",colorGreen:"#11a876",showList:[],paramsList:[],path:"wss://wsaws.okx.com:8443/ws/v5/public",socket:""}},onLoad:function(){var t=localStorage.getItem("localList2");if(null!=t){t=JSON.parse(t),this.showList=t;var e=[];t.forEach((function(t){e.push({channel:"tickers",instId:t.symbol_okx})})),this.paramsList=e}},onShow:function(){this.socketInit()},onHide:function(){this.close()},methods:{chooseItem:function(t){console.log("长按",t)},touchMove:function(t){console.log("长按",t)},socketInit:function(){var t=this;uni.closeSocket(),this.socket=uni.connectSocket({url:this.path,success:function(t){console.log("websocket正在连接...")}}),uni.onSocketOpen((function(e){console.log("WebSocket连接成功"),t.onSocketMessage(),t.send()}))},send:function(){var t={op:"subscribe",args:this.paramsList};uni.sendSocketMessage({data:JSON.stringify(t)})},onSocketMessage:function(){var t=this;uni.onSocketMessage((function(e){var i=JSON.parse(e.data);t.setListData(i)}))},setListData:function(t){if(t.data){var e=Number(t.data[0].last),i=this.showList.findIndex((function(e){return e.symbol_okx==t.data[0].instId}));if(i>=0){1==this.colorType?0!=this.showList[i].price&&t.data[0].last>this.showList[i].price?(this.$set(this.showList[i],"color",this.colorGreen),this.$set(this.showList[i],"logoArrow","arrow-upward")):0!=this.showList[i].price&&t.data[0].last<this.showList[i].price&&(this.$set(this.showList[i],"color",this.colorRed),this.$set(this.showList[i],"logoArrow","arrow-downward")):2==this.colorType&&(0!=this.showList[i].price&&t.data[0].last>this.showList[i].price?(this.$set(this.showList[i],"color",this.colorRed),this.$set(this.showList[i],"logoArrow","arrow-upward")):0!=this.showList[i].price&&t.data[0].last<this.showList[i].price&&(this.$set(this.showList[i],"color",this.colorGreen),this.$set(this.showList[i],"logoArrow","arrow-downward")));var o=((t.data[0].last-t.data[0].sodUtc8)/t.data[0].sodUtc8*100).toFixed(2);this.$set(this.showList[i],"dayUp",o),this.$set(this.showList[i],"price",e)}}},close:function(){console.log("关闭websocket"),this.socket&&(uni.closeSocket(),this.socket="")}}};e.default=o}}]);