(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{ff0f:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"q-mt-md"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-10 col-xs-7"}),i("div",{staticClass:"col-md-2 col-xs-5"},[i("q-btn",{attrs:{color:"primary",size:"md",label:"Create Connection"},on:{click:function(t){e.addModelDialog=!0}}})],1)]),i("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:e.addModelDialog,callback:function(t){e.addModelDialog=t},expression:"addModelDialog"}},[i("div",{staticClass:"row"},[i("q-card",{staticClass:"q-pa-lg",staticStyle:{width:"600px"}},[i("q-card-section",{staticClass:"q-mb-lg"},[i("div",{staticClass:"text-h6"},[e._v("Create Connection")])]),i("q-card-section",{staticClass:"text-center",attrs:{horizontal:""}},[i("q-card-section",{staticClass:"q-ma-sm"},[e._v("\n                  From\n              ")]),i("q-card-section",[i("q-btn-dropdown",{attrs:{color:"positive",outline:"",rounded:"",label:e.deviceFrom.deviceName}},[i("q-list",e._l(e.devices,(function(t,o){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:o,attrs:{clickable:""},on:{click:function(i){return e.onFromClick(t)}}},[i("q-item-section",[i("q-item-label",[e._v(e._s(t.deviceName))])],1)],1)})),1)],1)],1),i("q-card-section",{staticClass:"q-ma-sm"},[e._v("\n                  To\n              ")]),i("q-card-section",[i("q-btn-dropdown",{attrs:{color:"positive",rounded:"",outline:"",label:e.deviceTo.deviceName}},[i("q-list",e._l(e.devices,(function(t,o){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:o,attrs:{clickable:""},on:{click:function(i){return e.onToClick(t)}}},[i("q-item-section",[i("q-item-label",[e._v(e._s(t.deviceName))])],1)],1)})),1)],1)],1)],1),i("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Connect"},on:{click:e.addConnection}})],1)],1)],1)]),i("div",{staticClass:"q-mt-sm q-gutter-md row justify-center"},e._l(e.connections,(function(t,o){return i("q-intersection",{key:o,staticStyle:{"min-width":"300px"}},[i("q-card",{staticClass:"text-center",staticStyle:{width:"100%",border:"1px solid grey"}},[i("q-card-section",[e._v("\n                  Connection name\n              ")]),i("q-card-section",[i("div",{staticClass:"q-mb-sm"},[e._v("\n                      From\n                  ")]),i("q-btn-dropdown",{attrs:{color:"positive",outline:"",label:t.deviceFrom.deviceName}},[i("q-list",e._l(e.devices,(function(t,o){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:o,attrs:{clickable:""},on:{click:function(i){return e.onFromClick(t)}}},[i("q-item-section",[i("q-item-label",[e._v(e._s(t.deviceName))])],1)],1)})),1)],1),i("q-btn",{staticClass:"q-ml-md",attrs:{icon:"get_app"},on:{click:function(i){return e.downloadConfiguration(t.id,t.deviceFrom.id)}}})],1),i("q-card-section",[i("div",{staticClass:"q-mb-sm"},[e._v("\n                      To\n                  ")]),e._l(t.deviceTo,(function(o,n){return i("div",{key:n},[i("q-btn-dropdown",{attrs:{color:"positive",outline:"",label:o.deviceName}},[i("q-list",e._l(e.devices,(function(t,o){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:o,attrs:{clickable:""},on:{click:function(i){return e.onToClick(t)}}},[i("q-item-section",[i("q-item-label",[e._v(e._s(t.deviceName))])],1)],1)})),1)],1),i("q-btn",{staticClass:"q-ml-md",attrs:{icon:"get_app"},on:{click:function(i){return e.downloadConfiguration(t.id,o.id)}}})],1)}))],2),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{attrs:{label:"delete"},on:{click:function(t){return e.deleteConnection(o)}}})],1)],1)],1)})),1)],1)},n=[],a=i("ded3"),c=i.n(a),s=(i("ddb0"),i("2b3d"),i("515f"),i("2f62")),l={name:"Devices",computed:c()({},Object(s["b"])("global",["getToken"])),mounted(){this.token=this.getToken(),this.$axios.get(this.$backendUrl+"/connections/list",{headers:{Authorization:"Bearer "+this.getToken()}}).then((e=>{console.log(e),this.connections=e.data})),this.$axios.get(this.$backendUrl+"/auth/device/list",{headers:{Authorization:"Bearer "+this.getToken()}}).then((e=>{console.log(e),this.devices=e.data}))},methods:{downloadConfiguration(e,t){this.$axios.get(this.$backendUrl+`/connections/getConfiguration?id=${e}&deviceId=${t}`,{headers:{Authorization:"Bearer "+this.getToken()}}).then((i=>{var o=window.URL.createObjectURL(new Blob([i.data])),n=document.createElement("a");n.href=o,n.setAttribute("download",e+"-"+t+".json"),document.body.appendChild(n),n.click()}))},deleteConnection(e){var t=this.connections[e];this.$axios.delete(this.$backendUrl+"/connections/?id="+t.id,{headers:{Authorization:"Bearer "+this.getToken()}}).then((t=>{this.connections.splice(e,1),this.$q.notify({type:"positive",message:"Connection Deleted"})}))},addConnection(){this.$axios.post(this.$backendUrl+"/connections/",{deviceFrom:this.deviceFrom,deviceTo:[this.deviceTo]},{headers:{Authorization:"Bearer "+this.getToken()}}).then((e=>{this.connections.push(e.data)}))},onFromClick(e){this.deviceFrom=e},onToClick(e){this.deviceTo=e}},data(){return{addModelDialog:!1,deviceFrom:{deviceName:"Select From"},deviceTo:{deviceName:"Select To"},devices:[],token:"",connections:[]}}},d=l,r=i("2877"),m=i("9989"),u=i("9c40"),v=i("24e8"),p=i("f09f"),h=i("a370"),q=i("f20b"),b=i("1c1c"),C=i("66e5"),k=i("4074"),g=i("0170"),f=i("4b7e"),w=i("ad56"),_=i("4e73"),T=i("7f67"),x=i("eebe"),y=i.n(x),N=Object(r["a"])(d,o,n,!1,null,null,null);t["default"]=N.exports;y()(N,"components",{QPage:m["a"],QBtn:u["a"],QDialog:v["a"],QCard:p["a"],QCardSection:h["a"],QBtnDropdown:q["a"],QList:b["a"],QItem:C["a"],QItemSection:k["a"],QItemLabel:g["a"],QCardActions:f["a"],QIntersection:w["a"],QMenu:_["a"]}),y()(N,"directives",{ClosePopup:T["a"]})}}]);