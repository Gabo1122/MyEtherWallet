(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e220be0"],{"013d":function(t,e,s){},"4fb31":function(t,e,s){"use strict";var n=s("013d"),a=s.n(n);a.a},"90e9":function(t,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return p}));var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"already-owned-container"},[s("h3",[t._v(t._s(t.$t("ens.already-owned",{domain:t.fullDomainName})))]),s("div",{staticClass:"content-container"},[s("p",{staticClass:"label"},[t._v(t._s(t.$t("ens.label-hash"))+"("+t._s(t.hostName)+"):")]),s("p",{staticClass:"content"},[t._v(t._s(t.labelHash))])]),s("div",{staticClass:"content-container"},[s("p",{staticClass:"label"},[t._v(t._s(t.$t("ens.name-hash"))+"("+t._s(t.fullDomainName)+"):")]),s("p",{staticClass:"content"},[t._v(t._s(t.nameHash))])]),s("div",{staticClass:"content-container"},[s("p",{staticClass:"label"},[t._v(t._s(t.$t("ens.owner"))+":")]),s("p",{staticClass:"content"},[t._v(t._s(t.owner))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.resolverMultiCoinSupport,expression:"resolverMultiCoinSupport"}],staticClass:"content-container"},[s("h4",[t._v(t._s(t.$t("ens.multi-coin"))+":")]),t._l(t.supportedCoinsWithValue,(function(e,n){return s("div",{key:n.id},[s("span",{staticClass:"currency"},[t._v(t._s(e.symbol)+" "+t._s(t.$t("common.lowercase-addr"))+": ")]),s("span",{staticClass:"content"},[t._v(t._s(e.value))])])}))],2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.hasAnyTxt,expression:"hasAnyTxt"}],staticClass:"content-container"},[s("h4",[t._v(t._s(t.$t("ens.txt-record"))+":")]),t._l(t.txtRecordsWithValue,(function(e,n){return s("div",{key:n},[s("span",{staticClass:"currency"},[t._v(t._s(n)+": ")]),s("span",{staticClass:"content"},[t._v(t._s(e))])])}))],2),s("div",{staticClass:"owner-options"},[t.owner.toLowerCase()===t.account.address.toLowerCase()?s("button",{staticClass:"manage-button",on:{click:t.manageEns}},[t._v(" "+t._s(t.$t("ens.manage"))+" ")]):t._e()]),s("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},a=[],o=(s("99af"),s("f3f3")),i=s("539d"),r=s("2f62"),c={components:{"interface-bottom-text":i["a"]},props:{labelHash:{type:String,default:""},nameHash:{type:String,default:""},owner:{type:String,default:""},hostName:{type:String,default:""},tld:{type:String,default:""},supportedCoins:{type:Object,default:function(){}},resolverMultiCoinSupport:{type:Boolean,default:!1},txtRecords:{type:Object,default:function(){}}},computed:Object(o["a"])({},Object(r["c"])("main",["account"]),{fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)},supportedCoinsWithValue:function(){var t={};for(var e in this.supportedCoins)this.supportedCoins[e].value&&(t[e]=this.supportedCoins[e]);return t},txtRecordsWithValue:function(){var t={};for(var e in this.txtRecords)this.txtRecords[e]&&(t[e]=this.txtRecords[e]);return t},hasAnyTxt:function(){for(var t in this.txtRecords)if(""!==this.txtRecords[t])return!0;return!1}}),mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")},methods:{manageEns:function(){this.$router.push("manage")}}},l=c,u=(s("4fb31"),s("2877")),d=Object(u["a"])(l,n,a,!1,null,"db031700",null),p=d.exports}}]);
//# sourceMappingURL=chunk-5e220be0.a6f476ff.js.map