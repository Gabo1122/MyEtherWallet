(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-704a1fb4"],{"102f":function(t,e,n){},1768:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"expanding-option",class:t.hidebottomborder?"hide-bottom-border":""},[n("div",{staticClass:"title-bar-container"},[n("div",{staticClass:"input-title"},[t._v(t._s(t.title))]),t.popover?n("popover",{attrs:{popcontent:t.popover}}):t._e(),""===t.buttonText||t.showEnable?t._e():n("div",{staticClass:"button-text"},[t._v(" "+t._s(t.buttonText)+" ")]),t.showEnable&&!t.expanded?n("div",{staticClass:"button-text"},[t._v(" "+t._s(t.buttonText)+" ")]):t._e(),t.showEnable&&t.expanded?n("div",{staticClass:"button-text"},[t._v(" "+t._s(t.$t("common.yes"))+" ")]):t._e(),n("div",{staticClass:"switch sliding-switch-white"},[n("label",{staticClass:"switch"},[n("input",{attrs:{type:"checkbox"},on:{click:t.optionExpanded}}),n("span",{staticClass:"slider round"})])])],1),n("div",{staticClass:"contnet-container",class:t.expanded?"expanded":""},[n("div",{staticClass:"content-block"},[t._t("default")],2)])])},a=[],r={props:{title:{type:String,default:""},buttonText:{type:String,default:""},hidebottomborder:{type:Boolean,default:!1},popover:{type:String,default:""},showEnable:{type:Boolean,default:!1}},data:function(){return{expanded:!1}},methods:{optionExpanded:function(){this.expanded=!this.expanded,this.$emit("expanded",this.expanded)}}},s=r,c=(n("a158"),n("2877")),o=Object(c["a"])(s,i,a,!1,null,"0fe729f8",null),l=o.exports},"1e2e":function(t,e,n){},4820:function(t,e,n){"use strict";var i=n("69b7"),a=n.n(i);a.a},"4e12":function(t,e,n){},"57a3":function(t,e,n){},"69b7":function(t,e,n){},"6f04":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-maker"},[n("dai-confirmation-modal",{ref:"daiconfirmation",attrs:{opencdp:t.openCdp,txinfo:t.txInfo,"liquidation-price":t.liquidationPrice,"collat-ratio":t.displayFixedPercent(t.collatRatio),"liquidation-penalty":t.displayPercentValue(t.liquidationPenalty),"min-ratio":t.displayPercentValue(t.liquidationRatio),"current-price":t.displayFixedValue(t.getCurrentPrice,2),collateral:t.ethQty.toString(),generate:t.daiQty.toString(),currency:t.selectedCurrency.symbol}}),t.loading?n("loading-overlay",{attrs:{loadingmessage:t.$t("dappsMCDMaker.creating-message")}}):t._e(),n("div",{staticClass:"manage-container"},[n("h3",{staticClass:"mb-3 "},[t._v(t._s(t.$t("dappsMCDMaker.maker_title")))]),n("div",{staticClass:"mb-5"},[t._v(t._s(t.$t("dappsMCDMaker.create-instruct")))]),n("div",{staticClass:"currency-ops-new"},[n("div",{staticClass:"currency-picker-container"},[n("div",{staticClass:"interface__block-title"},[t._v(" "+t._s(t.$t("dappsMCDMaker.collateral"))+" ")]),n("currency-picker",{attrs:{currencies:t.collateralOptions},on:{selectedCurrency:function(e){t.selectedCurrency=e}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.ethQty,expression:"ethQty"}],class:[t.hasEnoughEth?"":"red-border","currency-picker-container","dropdown-text-container","dropdown-container"],domProps:{value:t.ethQty},on:{input:function(e){e.target.composing||(t.ethQty=e.target.value)}}}),n("div",{staticClass:"input-block-message"},[t.hasEnoughEth?t._e():n("p",{staticClass:"red-text"},[t._v(" "+t._s(t.$t("dappsMCDMaker.not-enough-funds"))+" ")]),n("p",[t._v(" "+t._s(t.$t("dappsMCDMaker.min-collat"))+" "),n("b",[t._v(t._s(t.displayFixedValue(t.minDeposit,6)))]),t._v(" "+t._s(t.selectedCurrency.symbol)+" ")])])],1),n("div",{staticClass:"arrow"},[n("img",{attrs:{src:t.arrowImage}})]),n("div",[n("div",{staticClass:"interface__block-title"},[t._v(" "+t._s(t.$t("dappsMCDMaker.generate"))+" ")]),n("div",{staticClass:"dropdown-text-container dropdown-container"},[n("p",[n("span",{staticClass:"cc DAI cc-icon cc-icon-dai currency-symbol"}),t._v(" "+t._s(t.$t("dappsMCDMaker.dai"))+" "),n("span",{staticClass:"subname"},[t._v("- Maker DAI")])])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.daiQty,expression:"daiQty"}],class:[t.veryRisky?"red-border":"",t.risky&&!t.veryRisky?"orange-border":"","currency-picker-container","dropdown-text-container","dropdown-container"],domProps:{value:t.daiQty},on:{input:function(e){e.target.composing||(t.daiQty=e.target.value)}}}),n("div",{staticClass:"input-block-message"},[n("p",[t._v(" "+t._s(t.$t("dappsMCDMaker.min-generate"))+" "),n("b",[t._v(t._s(t.displayFixedValue(t.minCreate,6)))]),t._v(" "+t._s(t.$t("dappsMCDMaker.dai"))+" ")]),n("p",[t._v(" "+t._s(t.$t("dappsMCDMaker.max-generate"))+" "),n("b",[t._v(t._s(t.displayFixedValue(t.maxDaiDraw,6)))]),t._v(" "+t._s(t.$t("dappsMCDMaker.dai"))+" ")])])])]),n("div",{staticClass:"cdp-info-block cdp-info-entry"},[n("ul",[n("li",[n("p",[t._v(" "+t._s(t.$t("dappsMCDMaker.min-required",{value:t.selectedCurrency?t.selectedCurrency.symbol:"ETH"}))+" ")]),n("p",[t._v(" "+t._s(t.displayFixedValue(t.minDeposit,6))+" "+t._s(t.selectedCurrency.symbol)+" ")])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMCDMaker.liquid-price")))]),n("p",[n("b",[t._v(t._s(t.liquidationPrice))]),t._v(" "+t._s(t.$t("common.currency.usd"))+" ")])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMCDMaker.current-price-info")))]),n("p",[t._v(" "+t._s(t.displayFixedValue(t.getCurrentPrice,2))+" "+t._s(t.$t("common.currency.usd"))+" ")])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMCDMaker.liquidation-penalty")))]),n("p",[t._v(t._s(t.displayPercentValue(t.liquidationPenalty))+"%")])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMCDMaker.collateral-ratio")))]),n("p",{class:[t.veryRisky?"red-text":"",t.risky&&!t.veryRisky?"orange-text":""]},[n("b",[t._v(t._s(t.displayFixedPercent(t.collatRatio))+"%")])])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMCDMaker.minimum-ratio")))]),n("p",[t._v(t._s(t.displayPercentValue(t.liquidationRatio))+"%")])])])]),n("div",{staticClass:"cdp-info-block cdp-info-entry"},[n("ul",[n("li",[n("p",[t._v(" "+t._s(t.$t("dappsMCDMaker.stability-fee-in-mkr",{value:t.displayFixedPercent(t.stabilityFee).toString()}))+" ")])])])]),t.hasProxy?t._e():n("div",{staticClass:"buttons-container"},[n("div",{staticClass:"submit-button large-round-button-green-filled",on:{click:function(e){return t.BuildProxy()}}},[t._v(" Create Proxy ")])]),"ETH"===t.selectedCurrency.symbol||t.hasEnoughAllowance()?t._e():n("div",{staticClass:"buttons-container"},[n("div",{staticClass:"submit-button large-round-button-green-filled",on:{click:t.approveCurrency}},[t._v(" Set Allowance ")])]),n("div",{staticClass:"buttons-container"},[n("div",{class:[t.validInputs?"":"disabled","submit-button large-round-button-green-filled"],on:{click:t.openDaiConfirmation}},[t._v(" "+t._s(t.$t("dappsMCDMaker.collat-and-generate-vault"))+" ")])])])],1)},a=[],r=(n("13d5"),n("b64b"),n("d3b7"),n("25f0"),n("ddb0"),n("96cf"),n("c964")),s=n("f3f3"),c=n("2f62"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.openDropdown,expression:"openDropdown"}],staticClass:"currency-picker-container"},[n("div",[n("div",{class:[t.open?"open":"","dropdown-container",t.token?"dropdown-text-container":"dropdown-text-container-white"],on:{click:t.openDropdown}},[n("p",[""!==t.getIcon(t.selectedCurrency.symbol)?n("span",{staticClass:"currency-symbol",class:["cc",t.getIcon(t.selectedCurrency.symbol),"cc-icon"]}):t._e(),""===t.getIcon(t.selectedCurrency.symbol)?n("span",{staticClass:"currency-symbol"},[n("img",{staticClass:"icon-image",attrs:{src:t.iconFetcher(t.selectedCurrency.symbol)}})]):t._e(),t._v(" "+t._s(t.selectedCurrency.symbol)+" "),n("span",{staticClass:"subname"},[t._v("- "+t._s(t.selectedCurrency.name))])]),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.token,expression:"!token"}]},[t._v(t._s(t.selectedCurrency.name))]),t.selectable?n("i",{class:["fa",t.open?"fa-angle-up":"fa-angle-down"]}):t._e()]),t.selectable?n("div",{class:[t.open?"open":"hide","dropdown-item-container"]},[n("div",{staticClass:"dropdown-search-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{placeholder:t.$t("interface.search")},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),n("i",{staticClass:"fa fa-search"})]),n("div",{staticClass:"item-container"},t._l(t.localCurrencies,(function(e,i){return n("div",{key:i,class:[t.token?t.selectedCurrency.symbol===e.symbol?"selected":"":t.selectedCurrency.name===e.name?"selected":"","item"],on:{click:function(n){return t.selectCurrency(e)}}},[n("p",[""!==t.getIcon(e.symbol)?n("span",{staticClass:"currency-symbol",class:["cc",t.getIcon(e.symbol),"cc-icon"]}):t._e(),""===t.getIcon(e.symbol)?n("span",{staticClass:"currency-symbol"},[n("img",{staticClass:"icon-image",attrs:{src:t.iconFetcher(e.symbol)}})]):t._e(),t._v(" "+t._s(e.symbol)+" "),n("span",{staticClass:"subname"},[t._v("- "+t._s(e.name))])]),n("p"),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.token,expression:"!token"}]},[t._v(t._s(e.name))])])})),0)]):t._e()])])},l=[],u=(n("4de4"),n("4160"),n("caad"),n("b0c0"),n("2532"),n("159b"),n("7099"),n("e351"),n("b643")),d={props:{currencies:{type:Array,default:function(){return[]}},page:{type:String,default:""},token:{type:Boolean,default:!0},fromSource:{type:Boolean,default:!1},selectable:{type:Boolean,default:!0},defaultValue:{type:Object,default:function(){return{}}},overrideCurrency:{type:Object,default:function(){return{}}}},data:function(){return{icon:"",localCurrencies:[],selectedCurrency:{},open:!1,search:"",abi:"",address:""}},watch:{overrideCurrency:function(t){this.selectedCurrency=t},selectedCurrency:function(t){this.$emit("selectedCurrency",t)},currencies:function(t){var e=this;this.localCurrencies=[],t.forEach((function(t){return e.localCurrencies.push(t)}))},search:function(t){var e=this;""!==t?this.localCurrencies=this.currencies.filter((function(e){if(e.name&&e.symbol&&(e.name.toLowerCase().includes(t.toLowerCase())||e.symbol.toLowerCase().includes(t.toLowerCase())))return e})):(this.localCurrencies=[],this.currencies.forEach((function(t){return e.localCurrencies.push(t)})))}},mounted:function(){var t=this;this.currencies?(this.currencies.forEach((function(e){return t.localCurrencies.push(e)})),this.selectedCurrency=this.currencies[0]):this.currencies.length?this.selectedCurrency=this.currencies[0]:this.selectedCurrency={name:"Ethereum",symbol:"ETH"}},methods:{iconFetcher:function(t){var e;try{e=n("64d7")("./".concat(t,".svg"))}catch(i){return n("9294")}return e},getIcon:function(t){return Object(u["i"])(t)},openDropdown:function(){this.selectable&&(this.open=!this.open)},selectCurrency:function(t){this.openDropdown(),this.selectedCurrency=t}}},p=d,y=(n("c8dc"),n("2877")),m=Object(y["a"])(p,o,l,!1,null,"230c3633",null),h=m.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-container"},[i("b-modal",{ref:"modal",staticClass:"bootstrap-modal bootstrap-modal-wide padding-40-20",attrs:{title:t.$t("dappsMCDMaker.dai-confirmation"),centered:"","hide-footer":"",static:"",lazy:""}},[i("div",{staticClass:"modal-content-container"},[i("div",{staticClass:"tx-amount"},[i("div",[i("div",{staticClass:"interface__block-title"},[t._v(" "+t._s(t.$t("dappsMCDMaker.collateral"))+" ")]),i("div",{staticClass:"amount-block"},[i("div",{staticClass:"icon"},[""!==t.getIcon(t.currency)?i("i",{class:["icon","cc",t.getIcon(t.currency),"cc-icon"]}):t._e()]),i("div",{staticClass:"amount"},[t._v(" "+t._s(t.collateral)),i("span",[t._v(t._s(t.currency))])])])]),i("div",{staticClass:"arrow"},[i("img",{attrs:{src:n("432e")}})]),i("div",[i("div",{staticClass:"interface__block-title"},[t._v(" "+t._s(t.$t("dappsMCDMaker.generate"))+" ")]),i("div",{staticClass:"amount-block"},[i("div",{staticClass:"icon"},[i("img",{attrs:{src:n("9b76")}})]),i("div",{staticClass:"amount"},[t._v(" "+t._s(t.generate)),i("span",[t._v(t._s(t.$t("dappsMCDMaker.dai")))])])])])]),i("div",{staticClass:"detail-info"},[i("expanding-option",{attrs:{title:t.$t("dappsMCDMaker.details")}},[i("ul",[i("li",[i("p",[t._v(" "+t._s(t.$t("dappsMCDMaker.liquid-price"))+" ("+t._s(t.currency)+"/USD) ")]),i("p",{staticClass:"bold"},[t._v(t._s(t.liquidationPrice)+" USD")])]),i("li",[i("p",[t._v(" "+t._s(t.$t("dappsMCDMaker.current-price"))+" ("+t._s(t.currency)+"/USD) ")]),i("p",[t._v(t._s(t.currentPrice)+" USD")])]),i("li",[i("p",[t._v(t._s(t.$t("dappsMCDMaker.liquidation-penalty")))]),i("p",[t._v(t._s(t.liquidationPenalty)+"%")])]),i("li",[i("p",[t._v(t._s(t.$t("dappsMCDMaker.collateral-ratio")))]),i("p",{staticClass:"bold"},[t._v(t._s(t.collatRatio)+" %")])]),i("li",[i("p",[t._v(t._s(t.$t("dappsMCDMaker.minimum-ratio")))]),i("p",[t._v(t._s(t.minRatio)+"%")])])])])],1),i("div",{staticClass:"button-container"},[i("standard-button",{attrs:{options:{title:t.$t("dappsMCDMaker.confirm-and-create-vault"),buttonStyle:"green",helpCenter:!0},"click-function":t.confirmClicked}})],1)])])],1)},v=[],C=(n("a9e3"),n("1768")),b=n("a8f0"),g={components:{"expanding-option":C["a"],"standard-button":b["a"]},props:{opencdp:{type:Function,default:function(){}},liquidationPrice:{type:Number,default:0},collatRatio:{type:String,default:"Error"},liquidationPenalty:{type:String,default:"Error"},minRatio:{type:String,default:"Error"},currentPrice:{type:String,default:"Error"},collateral:{type:String,default:"Error"},generate:{type:String,default:"Error"},currency:{type:String,default:"Error"}},computed:{},watch:{},mounted:function(){},methods:{iconFetcher:function(t){var e;try{e=n("64d7")("./".concat(t,".svg"))}catch(i){return n("9294")}return e},getIcon:function(t){return Object(u["i"])(t)},confirmClicked:function(){this.opencdp()}}},_=g,k=(n("aa81c"),Object(y["a"])(_,f,v,!1,null,"7d634556",null)),x=k.exports,w=n("7a09"),D=n("d1fb"),M=n("901e"),F=n.n(M),P=n("cc82"),O=n.n(P),E=function(t,e,n){return Object(D["F"])(t).times(Object(D["F"])(e)).div(Object(D["F"])(n))},j={components:{"dai-confirmation-modal":x,"loading-overlay":w["a"],"currency-picker":h},props:{tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}},highestGas:{type:String,default:"0"},ethPrice:{type:F.a,default:Object(D["F"])(0)},liquidationPenalty:{type:F.a,default:Object(D["F"])(0)},stabilityFee:{type:F.a,default:Object(D["F"])(0)},priceService:{type:Object,default:function(){return{}}},cdpService:{type:Object,default:function(){return{}}},proxyService:{type:Object,default:function(){return{}}},buildEmpty:{type:Function,default:function(){}},getCollateralOptions:{type:Function,default:function(){}},getValueOrFunction:{type:Function,default:function(){}},makerActive:{type:Boolean,default:!1},values:{type:Object,default:function(){return{maxEthDraw:"",maxUsdDraw:"",ethCollateral:"",usdCollateral:"",debtValue:"",maxDai:"",collateralRatio:"",cdpId:"",stabilityFee:"",minEth:"",liquidationRatio:"",liquidationPenalty:"",targetPrice:""}}}},data:function(){return{emptyMakerCreated:!1,arrowImage:O.a,daiPrice:0,priceFloor:0,ethQty:0,daiQty:0,txInfo:{},loading:!1,selectedCurrency:{symbol:"ETH",name:"ETH-A"}}},computed:Object(s["a"])({},Object(c["c"])("main",["account","gasPrice","web3","network","ens"]),{validInputs:function(){if(!this.hasProxy)return!1;if(Object(D["F"])(this.ethQty).isNaN()||Object(D["F"])(this.daiQty).isNaN())return!1;if(Object(D["F"])(this.ethQty).gt(0)){if(Object(D["F"])(this.ethQty).lte(this.values.minEth))return!1;if(this.emptyMakerCreated){if(Object(D["F"])(this.makerCDP.minDai).gt(this.daiQty))return!1}else if(Object(D["F"])(20).gt(this.daiQty))return!1;if(Object(D["F"])(this.maxDaiDraw).lte(Object(D["F"])(this.daiQty)))return!1;if(this.emptyMakerCreated){if(Object(D["F"])(this.collatRatio).lte(this.makerCDP.liquidationRatio))return!1}else if(Object(D["F"])(this.collatRatio).lte(1.501))return!1;return this.hasEnoughEth}return!1},hasProxy:function(){return this.getValueOrFunction("proxyAddress")},hasEnoughEth:function(){return!this.emptyMakerCreated||this.hasEnough()},minInSelectedCurrency:function(){return this.minDeposit},atSetFloor:function(){return this.priceFloor<=0?0:E(this.ethPrice,this.liquidationRatio,this.priceFloor)},collatRatio:function(){return this.daiQty<=0||this.ethQty<=0?0:this.calcCollatRatio(this.ethQty,this.daiQty)},liquidationPrice:function(){return this.daiQty<=0||this.ethQty<=0?0:this.calcLiquidationPrice(this.ethQty,this.daiQty)},liquidationRatio:function(){return this.emptyMakerCreated?this.makerCDP.liquidationRatio:null},maxDaiDraw:function(){if(this.ethQty<=0)return 0;var t=this.calcDaiDraw(this.ethQty).times(.01);return Object(D["F"])(this.calcDaiDraw(this.ethQty)).minus(t)},risky:function(){var t=this.collatRatio;return!!Object(D["F"])(t).gt(0)&&Object(D["F"])(t).lte(2)},veryRisky:function(){var t=this.collatRatio;return!!Object(D["F"])(t).gt(0)&&Object(D["F"])(t).lte(1.75)},minEth:function(){return this.emptyMakerCreated?Object(D["F"])(this.getValueOrFunction("minEth")):null},collateralOptions:function(){var t=this.getValueOrFunction("mcdCurrencies");return t?Object.keys(t).reduce((function(e,n){return e.push({symbol:n,name:t[n].ilk}),e}),[]):[{symbol:"ETH",name:"ETH-A"}]},getCurrentPrice:function(){return this.emptyMakerCreated?this.makerCDP.getCurrentPriceFor(this.selectedCurrency.symbol):NaN},minDeposit:function(){return this.emptyMakerCreated?this.makerCDP.minDepositFor(this.selectedCurrency.symbol):null},minCreate:function(){return 20}}),watch:{selectedCurrency:function(t){this.emptyMakerCreated&&this.makerCDP.setType(t)},makerActive:function(){this.emptyMakerCreated||this.buildEmptyInstance()}},beforeDestroy:function(){this.makerCDP={}},destroyed:function(){this.makerCDP={}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.makerActive&&t.buildEmptyInstance();case 1:case"end":return e.stop()}}),e)})))()},methods:{getCurrentPriceFor:function(t){return t&&this.getValueOrFunction("mcdCurrencies")&&this.getValueOrFunction("mcdCurrencies")[t]?this.getValueOrFunction("mcdCurrencies")[t].price._amount.toString():0},getAllowanceFor:function(t){if(!t)return 0;var e=this.getValueOrFunction("proxyAllowances");return e?e[t]:0},getBalanceFor:function(t){if(!t)return 0;var e=this.getValueOrFunction("balances");return e?e[t]:0},buildEmptyInstance:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.buildEmpty();case 2:t.makerCDP=e.sent,t.$forceUpdate(),t.emptyMakerCreated=!0;case 5:case"end":return e.stop()}}),e)})))()},BuildProxy:function(){var t=this;this.emptyMakerCreated&&this.getValueOrFunction("getProxy")().then((function(e){t.proxyAddress=e,t.proxyAddress||t.getValueOrFunction("_proxyService").build().then((function(){return t.getValueOrFunction("_proxyService").currentProxy()})).then((function(e){t.proxyAddress=e}))}))},displayPercentValue:D["q"],displayFixedValue:D["p"],displayFixedPercent:D["o"],openCdp:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.loading=!0,!(t.ethQty<=0)){e.next=3;break}return e.abrupt("return",0);case 3:return setTimeout((function(){t.loading=!1}),5e3),t.$eventHub.$on("showTxConfirmModal",(function(){t.$emit("cdpOpened"),t.loading&&(t.$refs.daiconfirmation.$refs.modal.hide(),t.loading=!1)})),e.next=7,t.makerCDP.openCdp(t.getValueOrFunction("mcdCurrencies")[t.selectedCurrency.symbol],t.ethQty,t.daiQty);case 7:case"end":return e.stop()}}),e)})))()},openDaiConfirmation:function(){this.$refs.daiconfirmation.$refs.modal.show()},toUSD:function(t){if(void 0===t||null===t)return Object(D["F"])(0);var e=Object(D["F"])(this.getCurrentPrice).times(Object(D["F"])(t));return e.lt(0)?Object(D["F"])(0):e},hasEnough:function(){return!this.makerCDP||this.makerCDP.hasEnough(this.ethQty,this.selectedCurrency.symbol,this.account.balance)},hasEnoughAllowance:function(){if(this.emptyMakerCreated)return this.makerCDP.hasEnoughAllowance(this.ethQty,this.selectedCurrency.symbol)},calcMinCollatRatio:function(t){return E(this.ethPrice,this.liquidationRatio,t)},calcDaiDraw:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getCurrentPrice,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.liquidationRatio;return t<=0?0:E(e,Object(D["F"])(t),n)},calcCollatRatio:function(t,e){return t<=0||e<=0?0:E(this.getCurrentPrice,t,e)},calcLiquidationPrice:function(t,e){return this.makerCDP.calcLiquidationPrice(t,e,this.selectedCurrency.symbol)},approveCurrency:function(){return this.makerCDP.approveProxyFor(this.selectedCurrency.symbol)}}},$=j,S=(n("7122"),Object(y["a"])($,i,a,!1,null,"1e20429e",null)),Q=S.exports;e["default"]=Q},7122:function(t,e,n){"use strict";var i=n("4e12"),a=n.n(i);a.a},"72ad":function(t,e,n){},"7a09":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=function(t,e){var n=e._c;return n("div",{staticClass:"loading-overlay"},[n(e.injections.components.LoadingSign,{tag:"component",attrs:{loadingmessage1:e.props.loadingmessage,color:"white"}})],1)},a=[],r=n("c1be"),s={inject:{components:{default:{LoadingSign:r["a"]}}},props:{loadingmessage:{type:String,default:""}}},c=s,o=(n("df84"),n("2877")),l=Object(o["a"])(c,i,a,!0,null,"466143c1",null),u=l.exports},a158:function(t,e,n){"use strict";var i=n("102f"),a=n.n(i);a.a},aa81c:function(t,e,n){"use strict";var i=n("57a3"),a=n.n(i);a.a},c1be:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=function(t,e){var n=e._c;return n("div",[n("div",{class:[e.props.color,"loading-container","loading-sign"]},[e._m(0),""!=e.props.loadingmessage1?n("p",{staticClass:"loading-message1"},[e._v(" "+e._s(e.props.loadingmessage1)+" ")]):e._e(),""!=e.props.loadingmessage2?n("p",{staticClass:"loading-message2"},[e._v(" "+e._s(e.props.loadingmessage2)+" ")]):e._e()])])},a=[function(t,e){var n=e._c;return n("div",{staticClass:"lds-spinner"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])}],r={name:"LoadingSign",props:{type:{type:String,default:""},loadingmessage1:{type:String,default:""},loadingmessage2:{type:String,default:""},color:{type:String,default:"black"}}},s=r,c=(n("4820"),n("2877")),o=Object(c["a"])(s,i,a,!0,null,"3944612c",null),l=o.exports},c8dc:function(t,e,n){"use strict";var i=n("1e2e"),a=n.n(i);a.a},df84:function(t,e,n){"use strict";var i=n("72ad"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-704a1fb4.9daea93f.js.map