(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bce52"],{"2a4a":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},r=[],s=n("2c18"),i={created:function(){console.log(this.$route),this.$d.user.userid||this.getUserInfo()},methods:{getUserInfo:function(){var t=this;s["ready"]((function(){s["runtime"].permission.requestAuthCode({corpId:t.$d.corp.corpId,onSuccess:function(e){t.$http.get(t.$http.baseDir+"third/dd/getUserByCode",e).end((function(e,n){e||(t.$d.user=n.body.data,t.next(),localStorage.setItem("user",JSON.stringify(n.body.data)))}))},onFail:function(){alert("fail")}})}))},next:function(){this.$router.replace({path:this.$route.query.next})}}},c=i,u=n("2877"),a=Object(u["a"])(c,o,r,!1,null,"3ab663dc",null);e["default"]=a.exports}}]);