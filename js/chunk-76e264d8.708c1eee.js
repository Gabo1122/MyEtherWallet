(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76e264d8"],{"0003":function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return r}));a("b680"),a("d3b7"),a("25f0");var i=a("901e"),s=a.n(i);function n(t){return s.a.isBigNumber(t)||(t=new s.a(t)),t.times(100).toString()}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return s.a.isBigNumber(t)||(t=new s.a(t)),!isFinite(t)||isNaN(t)?"--":a?t.toFixed(e,s.a.ROUND_DOWN).toString():t.toFixed(e).toString()}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=l(n(t),e,a);return isFinite(i)&&new s.a(i).gt(0)?i:"--"}},"08b6":function(t,e,a){},2967:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"manage-container"},[a("div",{staticClass:"title-content-container"},[a("p",{staticClass:"cpd-title"},[t._v(t._s(t.$t("dappsMCDMaker.cdp-portal")))]),a("p",{staticClass:"cdp-id"},[t._v(" "+t._s(t.$t("dappsMCDMaker.position-label",{value:t.cdpIdDisplay}))+" ")])]),a("div",{staticClass:"information-blocks"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(" "+t._s(t.$t("dappsMCDMaker.liquid-price"))+" ("+t._s(t.$t("common.currency.eth"))+"/"+t._s(t.$t("common.currency.usd"))+") ")]),a("div",{staticClass:"blue"},[a("span",{staticClass:"blue-bold"},[t._v(t._s(t.liquidationPriceDisplay))]),t._v(" "+t._s(t.$t("common.currency.usd"))+" ")])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(" "+t._s(t.$t("dappsMCDMaker.current-price"))+"("+t._s(t.$t("common.currency.eth"))+"/"+t._s(t.$t("common.currency.usd"))+") ")]),a("div",[t._v(" "+t._s(t.ethPriceDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.liquidation-penalty")))]),a("div",[t._v(t._s(t.liquidationPenaltyDisplay)+"%")])])])]),a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.collateral-ratio")))]),a("div",{class:t.collateralRatioColoring},[a("span",[t._v(t._s(t.collaterlizationRatioDisplay)+"%")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.minimum-ratio")))]),a("div",[t._v(t._s(t.liquidationRatioDisplay)+"%")])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.stability-fee")))]),a("div",[t._v(t._s(t.stabilityFeeDisplay)+"%")])])])])]),a("div",{staticClass:"information-single-block"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.eth-collateral")))])]),a("div",{staticClass:"block-content-container"},[a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.deposited")))]),a("div",[t._v(" "+t._s(t.ethCollateral)+" "),a("span",[t._v(t._s(t.$t("common.currency.eth")))])]),a("div",[t._v(" "+t._s(t.pethCollateral)+" "),a("span",[t._v(t._s(t.$t("common.currency.peth")))]),t._v(" / "+t._s(t.usdCollateral)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.max-available")))]),a("div",[t._v(" "+t._s(t.maxEthDrawDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.eth")))])]),a("div",[t._v(" "+t._s(t.maxPethDrawDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.peth")))]),t._v(" / "+t._s(t.maxUsdDrawDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])])])])])])]),a("div",{staticClass:"information-single-block"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.dai-position")))])]),a("div",{staticClass:"block-content-container"},[a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.generated")))]),a("div",[t._v(" "+t._s(t.debtValue)+" "),a("span",[t._v(t._s(t.$t("dappsMCDMaker.dai")))])]),a("div",[t._v(" "+t._s(t.debtValueDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMCDMaker.max-available-gen")))]),a("div",[t._v(" "+t._s(t.maxDai)+" "),a("span",[t._v(t._s(t.$t("dappsMCDMaker.dai")))])]),a("div",[t._v(" "+t._s(t.maxUsd)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])])])])])])])]),a("help-link")],1)},s=[],n=(a("d3b7"),a("ddb0"),a("96cf"),a("c964")),l=a("f3f3"),r=a("2f62"),c=a("8e13"),o=a("0003"),u=a("901e"),d=a.n(u),p=function(t){return new d.a(t)},v={components:{"help-link":c["a"]},props:{openCloseModal:{type:Boolean,default:!1},openMoveModal:{type:Boolean,default:!1},tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}},makerActive:{type:Boolean,default:!1},cdps:{type:Array,default:function(){return[]}},availableCdps:{type:Object,default:function(){return{}}},getCdp:{type:Function,default:function(){}},hasCdp:{type:Function,default:function(){}},values:{type:Object,default:function(){return{maxPethDraw:"",maxEthDraw:"",maxUsdDraw:"",ethCollateral:"",pethCollateral:"",usdCollateral:"",debtValue:"",maxDai:"",collateralRatio:"",cdpId:"",stabilityFee:"",minEth:"",liquidationRatio:"",wethToPethRatio:"",liquidationPenalty:"",targetPrice:"",pethPrice:""}}},ethPrice:{type:d.a,default:p(0)},pethPrice:{type:d.a,default:p(0)},liquidationPenalty:{type:d.a,default:p(0)},stabilityFee:{type:d.a,default:p(0)},liquidationRatio:{type:d.a,default:p(0)},wethToPethRatio:{type:d.a,default:p(0)},pethMin:{type:d.a,default:p(0)},priceService:{type:Object,default:function(){return{}}},cdpService:{type:Object,default:function(){return{}}},proxyService:{type:Object,default:function(){return{}}}},data:function(){return{loaded:!1,ethQty:0,daiQty:0,selectedCdp:"",cdpId:"",cdp:{},maxDaiDraw:p(0),maxWithDraw:p(0),maxWithDrawUSD:p(0),maxPethDraw:p(0),maxEthDraw:p(0)}},computed:Object(l["a"])({},Object(r["c"])("main",["account","gasPrice","web3","network","ens"]),{collateralRatioColoring:function(){return this.values?this.values.collateralRatio>=2?"green":this.values.collateralRatio>=1.75&&this.values.collateralRatio<2?"orange":"red":""},liquidationPriceDisplay:function(){if(this.values){var t=Object(o["b"])(this.values.liquidationPrice,2);return new d.a(t).gt(0)?t:"--"}return"--"},collaterlizationRatioDisplay:function(){return this.values?Object(o["a"])(this.values.collateralRatio):"--"},cdpIdDisplay:function(){return this.values?this.values.cdpId:"--"},liquidationRatioDisplay:function(){return this.values?Object(o["b"])(Object(o["c"])(this.liquidationRatio)):"--"},liquidationPenaltyDisplay:function(){return this.values?Object(o["b"])(Object(o["c"])(this.liquidationPenalty)):"--"},stabilityFeeDisplay:function(){return this.values?Object(o["b"])(Object(o["c"])(this.stabilityFee)):"--"},ethPriceDisplay:function(){return this.values?Object(o["b"])(this.ethPrice,2):"--"},maxPethDrawDisplay:function(){return this.values?Object(o["b"])(this.values.maxPethDraw,5):"--"},zeroDebt:function(){return p(this.values.debtValue).eq(0)},maxEthDrawDisplay:function(){return this.values?this.values.maxEthDraw:"--"},maxUsdDrawDisplay:function(){return this.values?Object(o["b"])(this.values.maxUsdDraw,2):"--"},ethCollateral:function(){return this.values?Object(o["b"])(this.values.ethCollateral,5,!0):"--"},pethCollateral:function(){return this.values?Object(o["b"])(this.values.pethCollateral,5,!0):"--"},usdCollateral:function(){return this.values?Object(o["b"])(this.values.usdCollateral,2):"--"},debtValueDisplay:function(){return this.values?Object(o["b"])(this.values.debtValue,2):"--"},debtValue:function(){return this.values?this.values.debtValue:"--"},maxDai:function(){return this.values?this.values.maxDai:"--"},maxUsd:function(){return this.values?Object(o["b"])(this.values.maxDai,2):"--"}}),mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.cdpId=t.$route.params.cdpId,t.makerActive&&(t.loaded=!0,t.cdpId&&t.$emit("activeCdpId",t.cdpId));case 2:case"end":return e.stop()}}),e)})))()},methods:{showClose:function(){},showMove:function(){},displayPercentValue:o["c"],displayFixedValue:o["b"],isReady:function(){return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},migrateCdp:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$emit("migrateCdp",t.cdpId);case 1:case"end":return e.stop()}}),e)})))()}}},h=v,m=(a("930f"),a("2877")),f=Object(m["a"])(h,i,s,!1,null,"38a7a130",null),b=f.exports;e["default"]=b},"7f58":function(t,e,a){"use strict";var i=a("bc56"),s=a.n(i);s.a},"8e13":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Bottom-help-link"},["issues"==t.type?a("div",{staticClass:"issues"},[t._v(" "+t._s(t.$t("common.having-issues"))+" "),a("a",{attrs:{href:"https://kb.myetherwallet.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.$t("common.help-center")))])]):t._e()])},s=[],n={props:{type:{type:String,default:"issues"}},data:function(){return{popOverId:"popoverid"+String(Math.floor(1e8*Math.random()))}}},l=n,r=(a("7f58"),a("2877")),c=Object(r["a"])(l,i,s,!1,null,"16b84c17",null),o=c.exports},"930f":function(t,e,a){"use strict";var i=a("08b6"),s=a.n(i);s.a},bc56:function(t,e,a){}}]);
//# sourceMappingURL=chunk-76e264d8.708c1eee.js.map