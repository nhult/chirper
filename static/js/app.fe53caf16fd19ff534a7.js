webpackJsonp([1],{"88EZ":function(t,e){},JIhC:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App"},i,!1,function(t){a("NhIl")},null,null).exports,r=a("/ocq"),o=a("kxiW"),l=a.n(o),c={name:"LandingPage",data:function(){return{loginEmail:"",loginPassword:""}},methods:{redirect:function(t){this.$router.push(t)},signIn:function(){l.a.auth().signInWithEmailAndPassword(this.loginEmail,this.loginPassword).then(function(t){alert("Success.")},function(t){alert(t.message)})}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"LandingPage"},[t._m(0),t._v(" "),n("div",{staticClass:"LandingPage-Right"},[n("div",{staticClass:"Login__form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.loginEmail,expression:"loginEmail"}],attrs:{type:"email",placeholder:"Email address"},domProps:{value:t.loginEmail},on:{input:function(e){e.target.composing||(t.loginEmail=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.loginPassword,expression:"loginPassword"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.loginPassword},on:{input:function(e){e.target.composing||(t.loginPassword=e.target.value)}}}),t._v(" "),n("input",{staticClass:"Login__button",attrs:{type:"submit",value:"Log in"},on:{click:function(e){t.signIn()}}}),t._v(" "),n("router-link",{attrs:{to:"/reset"}},[n("a",[t._v("Forgot password?")])])],1),t._v(" "),n("div",{staticClass:"Sign__container"},[n("div",{staticClass:"Sign__header"},[n("img",{attrs:{src:a("rHnq")}}),t._v(" "),n("button",{staticClass:"Login__button",attrs:{type:"button"},on:{click:function(e){t.signIn()}}},[t._v("Log in")])]),t._v(" "),n("h1",[t._v("See what’s happening in the world right now")]),t._v(" "),n("div",{staticClass:"Sign__selection"},[n("span",[t._v("Join Twitter today.")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){t.redirect("/signup")}}},[t._v("Sign Up")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){t.redirect("/signin")}}},[t._v("Log in")])])])]),t._v(" "),n("div",{staticClass:"LandingPage__footer"})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"LandingPage-Left"},[e("div",{staticClass:"Introduction"},[e("span",[this._v("Follow your interests.")]),this._v(" "),e("span",[this._v("Hear what people are talking about.")]),this._v(" "),e("span",[this._v("Join the conversation.")])])])}]};var u=a("VU/8")(c,d,!1,function(t){a("JIhC")},"data-v-54ec7f3e",null).exports,g={name:"Register",data:function(){return{registerEmail:"",registerPassword:"",registerPassword2:""}},methods:{signUp:function(){if(this.registerPassword!==this.registerPassword2)return alert("Passwords do not match."),!1;l.a.auth().createUserWithEmailAndPassword(this.registerEmail,this.registerPassword).then(function(t){alert("Success.")},function(t){alert(t.message)})}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Register"},[a("div",{staticClass:"Register__form"},[a("h2",[t._v("Register")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.registerEmail,expression:"registerEmail"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.registerEmail},on:{input:function(e){e.target.composing||(t.registerEmail=e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.registerPassword,expression:"registerPassword"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.registerPassword},on:{input:function(e){e.target.composing||(t.registerPassword=e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.registerPassword2,expression:"registerPassword2"}],attrs:{type:"password",placeholder:"Repeat password"},domProps:{value:t.registerPassword2},on:{input:function(e){e.target.composing||(t.registerPassword2=e.target.value)}}}),t._v(" "),a("button",{attrs:{type:"button"},on:{click:function(e){t.signUp()}}},[t._v("Register")])])])},staticRenderFns:[]};var p=a("VU/8")(g,v,!1,function(t){a("bQii")},"data-v-878b394c",null).exports,m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Header"},[n("div",{staticClass:"Header__nav-home",on:{click:function(e){t.redirect("/")}}},[n("img",{attrs:{src:a("rHnq")}}),t._v(" "),n("span",[t._v("Home")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Header__nav-about"},[e("span",[this._v("About")])])}]};var w={name:"Login",components:{Header:a("VU/8")({name:"Header",methods:{redirect:function(t){this.$router.push(t)}}},m,!1,function(t){a("88EZ")},"data-v-269d3802",null).exports},data:function(){return{loginEmail:"",loginPassword:""}},methods:{signIn:function(){l.a.auth().signInWithEmailAndPassword(this.loginEmail,this.loginPassword).then(function(t){alert("Success.")},function(t){alert(t.message)})}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Login"},[a("Header"),t._v(" "),a("div",{staticClass:"Login__container"},[a("div",{staticClass:"Login__form"},[a("h2",[t._v("Log in to Chirper")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginEmail,expression:"loginEmail"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.loginEmail},on:{input:function(e){e.target.composing||(t.loginEmail=e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginPassword,expression:"loginPassword"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.loginPassword},on:{input:function(e){e.target.composing||(t.loginPassword=e.target.value)}}}),t._v(" "),a("div",[a("button",{staticClass:"Login__button",attrs:{type:"button"},on:{click:function(e){t.signIn()}}},[t._v("Log in")]),t._v(" "),a("span",[t._v("REMEMBERME")]),t._v(" "),a("router-link",{attrs:{to:"/reset"}},[a("a",[t._v("Forgot password?")])])],1)]),t._v(" "),a("div",{staticClass:"Login__footer"},[a("span",[t._v("New to Twitter? "),a("router-link",{attrs:{to:"/signup"}},[a("a",[t._v("Sign up now »")])])],1)])])],1)},staticRenderFns:[]};var f=a("VU/8")(w,h,!1,function(t){a("xqWV")},"data-v-c96d236a",null).exports;n.a.use(r.a);var A=new r.a({routes:[{path:"/",name:"LandingPage",component:u},{path:"/signup",name:"Register",component:p},{path:"/signin",name:"Login",component:f},{path:"/reset",name:"ResetPassword"}]});n.a.config.productionTip=!1,l.a.initializeApp({apiKey:"AIzaSyA16PLKUxS7Jx7PLER5BC2BIWonGG5KkUc",authDomain:"chirper-b545e.firebaseapp.com",databaseURL:"https://chirper-b545e.firebaseio.com",projectId:"chirper-b545e",storageBucket:"",messagingSenderId:"942118905847"}),new n.a({el:"#app",router:A,components:{App:s},template:"<App/>"})},NhIl:function(t,e){},bQii:function(t,e){},rHnq:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAalSURBVGhD7VltTFNXGMZsWZaZbD+2ZdmffSXLkn383P5sCZP20tLeAu29BbHSqoCKiFgLfoAZCkEdoMxvVEQEhClOUTKZn6TZMjf34TRzqATQMR0iOLSFIUjfvef23LbUK1xKSVjSJ3lEL/e+7/Oc95z3nHsNCyGEEEIIIYT/E2ao+HcUGj5LqeErFBrumELL7VNq+YwZGsPr9JapDZUq/g0UfgRFgxTxd8PElFrNv0wfETBDx72n1HKNSg3niNDyH9HL8qGI4liG5SLpPycEJsrwMQq5K4qOjbdAdm4BFHxeAraVuaDRJ3gNabl2JcvPxYrlKrS8Ha+5xN9hDAMNKQ8Rav5dGoDQRi8HBDKVcER7iZBoPhEaTpyCoaFH4Iu+vn4or6wBVXS8x9AI4iBE6ozzFaz+Q6PR+AwNPTawzFbfQDhKa+mvxotpOKo/kBgxcWZobb9BpY/EMPI+/tH48yUwzkkVcmpMKRC9ZFUHw5ksDMNMRzP7BS0afjeNPTYweZVoQiSa2RMebnmW3iILmFQrPm//9nu3ah/cGALY/wAgpwdgebeXWZ2PIKvb1RQGME2Io+XWe7Vw+UJwOcD5eZQ8lJtfCPkbNvmauajUGt6mt40JcRSTUpeCy+Wi8t0VaHCOFO9PNNK1vNuVw+dvuuDJj10Op9ZTNPzYQMGkJUJm9hpBQM2hI6BkjTQY34dGc+TMVUzcQp7Zs6/a7YCifgwThJkd/cDnlQx7TODCZ1n2ORpaHiI0/ALysFY/C3rvY+0RS5t+BXb2fG91UCTelzSaIaxIP7m3vqFRiEFwbVBauC8zrnQCE+PtZKT9jtsEgUqlfxWFPiRB9lYcEASQBLabTrAUl47oLnjfLUxUSHq8f9mxct3knuraw0IMgh29jwv3Z1J9kyc+o+WLwsPDn6Yhxw8UV0YCaQ0muNbaDit8Etkud0BGXiEwdLp5qOEfkCmArEGDW5H3yPUtO8sEEw5cHL5xnsRU+yVPzHA24SUqKTBE6Ga+gmulhwQzJ6dBQVvPYwl3tHTCtrJKSExKG2nIj7WHjgpG2rFL+ceQYkrjec+zE6sGa3wNK1KqUHNWHNVHJGDOrirJpGuwddr7AVrab8KJk2dh554KyFu/EVaszhO4r6oWN0B0gLguY30Qzqs7SY1wvVRSYBD7ti7ecj3BvMBsTsvs+u16K6z26/e+LLgH0ISGyMb2JHTjhi71rD8TSsrcRjTcj1RSYEAjFhIoUhcHDgf2Sorv/pVO7MuVyLL7AGfRVCtWwInbh3gguSvTSOyyzwQjOBvKqaTAQE+qQg+vOfgVleFGnUM6+Vgki3yV3zVJ3nWBKs7iNsLyy6ikwIGd5yAJRrpW87UWasO9K6/DaSQpIghMu9BC1wcPAR3b/aHQGt7CdvoPCUhOrbkN56DugQtqsSJyWmignL3zAF0ffPe4jiOjAdfKp2RvEEeITV4Cc6qPC+WXEjFhYlyNeSE1wu2iMoIDRqt/H6fZT6IZwvSLN6WFTJDzffYP3AI+oRKCA0Vs7Iv4tliJp97NOEpfxqSvtE9KRTBm9KLlggkycDR98IBBTSQ4tmLXmea2rgana1BSyASZdOSspxp4vtLT9MGDWm16HivxF0lgTl4MPT334CruD9tlHP7k0trWC+qZ88Rq2DGt8EIVdDCsQSfuK7wpSXjvdjid0IUb3Gi7vSx2DYPelkurwQ2SNUnTTg7cU4wbdCfkhaN84uIsmFN5TFqgHOK6SNi4m5oQdnIrTTe5UETxH6CZU5jU84lGxZuHJEXK4KytFR4TOH3rMMXkTKkngWyW+Mq7CJPXmrZXnZYSORozbw+AMf8LrwkcnPF+2AgaInU8I1SES4TMWwOSgqWYfrEddAttHhM4IGcCeo0NFPQgacXd/rIu3nzBfrXtDjm6JKdnQSO++u3CE2/+KGcw259OmLW5HJiRH+E2TejFSQ4wSQaZOvjznNh+Rapj4oXj/cDAAAwPe19A+vHI7m8go7lTWAuRaFp8HhvHbYwZR1NNHhgd/6avcJHkG+3adcXw+5VmKt0L8tXq6z4q/o+/wVLdAPrMNZ7PSJRDWNUSpdL4Ak01uSCnThy1Ikxcn7DAerKw/EDHN+d/eXi7847wrWuJLRtWr90ARSXboWRrKRRtKYWUvGKIyciGKFOKr3A3hVM0Vzhl/uvAZF0lfO+SRQ3nwJ+Hydsmw8yeTkNMDdBKpeL0KMZR3os8ijyNnec4Xq9CbsO/Z2F7Vo724S6EEEIIIYQQphbCwv4DKzmxNaC8C3EAAAAASUVORK5CYII="},xqWV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fe53caf16fd19ff534a7.js.map