(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"onLogin",(function(){return j}));var a=n(8),r=n.n(a),c=n(1),i=n(17),s=n(61),u=n.n(s),o=n(20),d=n(48),l=n(62),p=n(26),j=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,i,s,j;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=o.c.getState(),i=n(278),a.user.info.token){e.next=13;break}if(s=window.sessionStorage.getItem(p.f.TOKEN)){e.next=12;break}if(!t){e.next=10;break}return e.next=8,u.a.post("".concat(d.a.API_OA_BASE,"/v1/user/login"),Object(c.a)(Object(c.a)({},t),{password:i(t.password)}));case 8:j=e.sent,l.a(j);case 10:e.next=13;break;case 12:o.c.dispatch({type:o.b.user.info.UPDATE_TOKEN,token:s});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},20:function(e,t,n){"use strict";n.d(t,"b",(function(){return D})),n.d(t,"c",(function(){return M})),n.d(t,"a",(function(){return N}));var a=n(1),r=n(9),c=n(8),i=n.n(c),s=n(17),u=n(7),o=n(2),d=n(0),l=n.n(d);var p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var a=t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}));return a},j=l.a.useContext,f=l.a.createContext,m=l.a.useReducer;var h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],c=f(),d={_state:t,getState:function(){return d._state},useContext:function(){return j(c)},dispatch:void 0},l=function(t){var l=m(e,d._state),j=Object(u.a)(l,2),f=j[0],h=j[1];d.dispatch=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof t){e.next=5;break}return e.next=3,t(h,f);case 3:e.next=6;break;case 5:h(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var b=n.map((function(e){return e(d)})),x=p.apply(void 0,Object(r.a)(b));return d.dispatch=x(d.dispatch),d._state=f,Object(o.jsx)(c.Provider,Object(a.a)(Object(a.a)({},t),{},{value:f}))};return{Provider:l,store:d}};var b=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,a={};return Object.keys(e).map((function(r){var c=e[r];return a[r]=c(t[r],n),r})),a}},x=n(69),O={FLEX_SIDER:"FLEX_SIDER"},y={home:{collapsed:!1}},_={home:O},g=function(e,t){switch(t.type){case O.FLEX_SIDER:return Object(x.a)(e,(function(t){t.home.collapsed=!e.home.collapsed}));default:return e}},v=n(26),k={UPDATE_TOKEN:"UPDATE_TOKEN"},w={UPDATE_USER_MENU:"UPDATE_USER_MENU"},I={info:{token:""},menu:{user_menu:[]}},E={info:k,menu:w},A=b({info:function(e,t){switch(t.type){case k.UPDATE_TOKEN:return window.sessionStorage.setItem(v.f.TOKEN,t.token),Object(x.a)(e,(function(e){e.token=t.token}));default:return e}},menu:function(e,t){switch(t.type){case w.UPDATE_USER_MENU:return Object(x.a)(e,(function(e){e.user_menu=t.user_menu}));default:return e}}}),P={UPDATE_MENU:"UPDATE_MENU"},S={UPDATE_APP:"UPDATE_APP"},T={menu:{menu:[]},app:{app:[]}},U={menu:P,app:S},C=b({menu:function(e,t){switch(t.type){case P.UPDATE_MENU:return Object(x.a)(e,(function(e){e.menu=t.menu}));default:return e}},app:function(e,t){switch(t.type){case S.UPDATE_APP:return Object(x.a)(e,(function(e){e.app=t.app}));default:return e}}}),D={page:_,user:E,setting:U},F=h(b({page:g,user:A,setting:C}),{page:y,user:I,setting:T}),M=F.store,N=F.Provider},226:function(e,t,n){},245:function(e,t,n){var a={"./config.dev.js":246,"./config.mini.js":247};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=245},246:function(e,t,n){"use strict";n.r(t);var a="oa-haxitag",r="http://127.0.0.1:9888",c={API_OA_PREFIX:a,API_OA_HOST:r,API_OA_BASE:"".concat(r,"/").concat(a),TITLE:"\u9605\u7c92\u77e5\u8bc6\u7ba1\u7406\u7cfb\u7edf",DEBUG:!0};t.default=c},247:function(e,t,n){"use strict";n.r(t);var a="oa-haxitag",r="http://10.65.49.14:9888",c={API_OA_PREFIX:a,API_OA_HOST:r,API_OA_BASE:"".concat(r,"/").concat(a),TITLE:"\u9605\u7c92\u77e5\u8bc6\u7ba1\u7406\u7cfb\u7edf",DEBUG:!1};t.default=c},26:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return d}));var a,r=n(6),c={TOKEN:"TOKEN"},i={MENU:0,MENU_ITEM:1},s=(a={},Object(r.a)(a,i.MENU,"\u83dc\u5355"),Object(r.a)(a,i.MENU_ITEM,"\u83dc\u5355\u9879"),a),u={fixed:-1,normal:0},o={app:0,comp:1,outer:2},d={success:0,auth_error:1}},283:function(e,t,n){var a={"./app.js":284,"./iframe.js":389,"./index.js":87,"./menu.js":390,"./temp_crawling_task.js":393,"./temp_search_advanced.js":397,"./temp_topic_manager.js":398,"./user.js":399};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=283},284:function(e,t,n){"use strict";n.r(t),n.d(t,"App",(function(){return k}));var a=n(1),r=n(8),c=n.n(r),i=n(17),s=n(7),u=n(2),o=n(20),d=n(34),l=n(218),p=n(116),j=n(141),f=n(142),m=n(14),h=n(143),b=n(64),x=n(50),O=n(43),y=n(0),_=n.n(y),g=n(26),v=n(65),k=function(e){var t=o.c.useContext(),n=_.a.useState(!1),r=Object(s.a)(n,2),m=r[0],h=r[1],b=_.a.useState({}),x=Object(s.a)(b,2),y=x[0],k=x[1];_.a.useEffect((function(){(function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.getApp();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var I=[Object(a.a)({title:"App\u540d\u79f0",dataIndex:"name",key:"name"},v.a("App\u540d\u79f0","name")),{title:"\u5165\u53e3\u5730\u5740",dataIndex:"enter",key:"enter"},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return t.state===g.e.fixed?Object(u.jsx)(d.a,{danger:!0,disabled:!0,children:"\u5220\u9664"}):Object(u.jsx)(l.a,{title:"\u4f1a\u540c\u65f6\u6e05\u7406\u76f8\u5173\u8054\u83dc\u5355\u3001\u83dc\u5355\u7ec4\u548c\u7528\u6237\u6743\u9650\uff0c\u786e\u8ba4\u5220\u9664\u5417?",cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a",onCancel:function(e){return e.stopPropagation()},onConfirm:function(){var e=Object(i.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.stopPropagation(),e.next=3,O.a.deleteApp(t._id);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(u.jsx)(d.a,{danger:!0,onClick:function(e){return e.stopPropagation()},children:"\u5220\u9664"})})}}];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.a,{justify:"end",children:Object(u.jsxs)(j.a,{span:2,children:[Object(u.jsx)(w,{show:m,setShow:h,initData:y,setInitData:k}),Object(u.jsx)(d.a,{type:"primary",onClick:Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k({_id:"",name:"",enter:""}),h(!0);case 2:case"end":return e.stop()}}),e)}))),children:"\u521b\u5efaAPP"})]})}),Object(u.jsx)(f.a,{columns:I,dataSource:t.setting.app.app,size:"small",scroll:{y:750},bordered:!0,onRow:function(e){return{onClick:function(t){k({_id:e._id,name:e.name,enter:e.enter}),h(!0)}}}})]})},w=function(e){var t=m.a.useForm(),n=Object(s.a)(t,1)[0];return n.setFieldsValue(e.initData),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h.a,{title:"\u7f16\u8f91App",visible:e.show,okText:"\u4fdd\u5b58",cancelText:"\u53d6\u6d88",onCancel:function(t){e.setShow(!1),n.resetFields()},onOk:function(){n.validateFields().then(function(){var t=Object(i.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.saveApp(a);case 2:if(t.sent){t.next=7;break}return b.b.error("\u4fdd\u5b58\u5931\u8d25"),t.abrupt("return");case 7:b.b.success("\u4fdd\u5b58\u6210\u529f"),e.setShow(!1),n.resetFields();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},children:Object(u.jsxs)(m.a,{form:n,children:[Object(u.jsx)(m.a.Item,{label:"_id",name:"_id",hidden:!0,children:Object(u.jsx)(x.a,{})}),Object(u.jsx)(m.a.Item,{label:"\u540d\u79f0",name:"name",rules:[{required:!0,message:"is required!"}],children:Object(u.jsx)(x.a,{})}),Object(u.jsx)(m.a.Item,{label:"\u5165\u53e3",name:"enter",rules:[{required:!0,message:"is required!"}],children:Object(u.jsx)(x.a,{})})]},Math.random())},Math.random())})}},389:function(e,t,n){"use strict";n.r(t),n.d(t,"IFrame",(function(){return p}));var a=n(8),r=n.n(a),c=n(17),i=n(7),s=n(2),u=n(0),o=n.n(u),d=n(207),l=n(43),p=function(e){var t=o.a.useState({_id:"",enter:"",name:""}),n=Object(i.a)(t,2),a=n[0],u=n[1];return o.a.useEffect((function(){(function(){var t=Object(c.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.getAppById(e.match.params.app_id);case 2:(n=t.sent)&&n.app&&u(n.app);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.match.params.app_id]),Object(s.jsx)("div",{children:Object(s.jsx)(d.a,{url:a.enter,frameBorder:0,position:"absolute",width:"100%",height:"100%",display:"initial"})})}},390:function(e,t,n){"use strict";n.r(t),n.d(t,"Menu",(function(){return A})),n.d(t,"MenuGroup",(function(){return P}));var a=n(1),r=n(8),c=n.n(r),i=n(17),s=n(7),u=n(2),o=n(0),d=n.n(o),l=n(20),p=n(43),j=n(87),f=n(26),m=n(34),h=n(218),b=n(116),x=n(141),O=n(142),y=n(64),_=n(14),g=n(143),v=n(50),k=n(63),w=n(401),I=n(44),E=n(65),A=function(e){var t=l.c.useContext(),n=d.a.useState(!1),r=Object(s.a)(n,2),o=r[0],j=r[1],_=d.a.useState({}),g=Object(s.a)(_,2),v=g[0],k=g[1],w={};t.setting.menu.menu.map((function(e){return w[e._id]=e,e})),d.a.useEffect((function(){(function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.c.getMenu();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var I=[Object(a.a)({title:"\u540d\u79f0",dataIndex:"name",key:"name",fixed:"left"},E.a("\u540d\u79f0","name")),{title:"\u82f1\u6587\u540d",dataIndex:"english_name",key:"english_name"},{title:"\u7c7b\u578b",dataIndex:"type",key:"type",render:function(e,t){return f.c[t.type]}},{title:"\u7236\u83dc\u5355",dataIndex:"parent_name",key:"parent_name",render:function(e,t){return t.parent_id?w[t.parent_id].name:"\u6839"}},{title:"\u8def\u5f84",dataIndex:"path",key:"path"},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return t.state===f.e.fixed?Object(u.jsx)(m.a,{danger:!0,disabled:!0,children:"\u5220\u9664"}):Object(u.jsx)(h.a,{title:"\u4f1a\u540c\u65f6\u6e05\u7406\u76f8\u5173\u8054\u83dc\u5355\u7ec4\uff0c\u786e\u8ba4\u5220\u9664\u5417?",cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a",onCancel:function(e){return e.stopPropagation()},onConfirm:function(){var e=Object(i.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.stopPropagation(),e.next=3,p.c.deleteMenu(t._id);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(u.jsx)(m.a,{danger:!0,onClick:function(e){return e.stopPropagation()},children:"\u5220\u9664"})})}}];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b.a,{justify:"end",children:Object(u.jsxs)(x.a,{span:2,children:[Object(u.jsx)(S,{show:o,setShow:j,initData:v,setInitData:k}),Object(u.jsx)(m.a,{type:"primary",onClick:Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k({_id:"",type:f.b.MENU,jump:f.d.app,name:"",english_name:"",app_id:"",comp:"",parent_id:"",icon:"",path:"",sort:0}),j(!0),console.log(v);case 3:case"end":return e.stop()}}),e)}))),children:"\u521b\u5efa\u83dc\u5355"})]})}),Object(u.jsx)(O.a,{columns:I,dataSource:t.setting.menu.menu,size:"small",scroll:{y:750},bordered:!0,onRow:function(e){return{onClick:function(t){e.state!==f.e.fixed?(k({_id:e._id,type:e.type,jump:e.jump,name:e.name,english_name:e.english_name,path:e.path,app_id:e.app_id,comp:e.comp,sort:e.type,icon:e.icon,parent_id:e.parent_id}),j(!0)):y.b.info("\u7cfb\u7edf\u9ed8\u8ba4\u83dc\u5355\u4e0d\u53ef\u4fee\u6539")}}}})]})},P=function(e){return Object(u.jsx)("div",{children:" this is menu group"})},S=function(e){var t=l.c.useContext(),n=_.a.useForm(),a=Object(s.a)(n,1)[0];return d.a.useEffect((function(){(function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.getApp();case 2:return e.next=4,p.c.getMenu();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a.setFieldsValue(e.initData),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(g.a,{title:"\u7f16\u8f91\u83dc\u5355",visible:e.show,okText:"\u4fdd\u5b58",cancelText:"\u53d6\u6d88",onCancel:function(t){e.setShow(!1),a.resetFields()},onOk:function(){a.validateFields().then(function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.c.createMenu(n);case 2:if(t.sent){t.next=7;break}return y.b.error("\u4fdd\u5b58\u5931\u8d25"),t.abrupt("return");case 7:y.b.success("\u4fdd\u5b58\u6210\u529f"),e.setShow(!1),a.resetFields();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},children:Object(u.jsxs)(_.a,{form:a,children:[Object(u.jsx)(_.a.Item,{label:"_id",name:"_id",hidden:!0,children:Object(u.jsx)(v.a,{})}),Object(u.jsx)(_.a.Item,{label:"\u7c7b\u578b",name:"type",children:Object(u.jsxs)(k.a.Group,{children:[Object(u.jsx)(k.a.Button,{value:f.b.MENU,children:"\u83dc\u5355"}),Object(u.jsx)(k.a.Button,{value:f.b.MENU_ITEM,children:"\u83dc\u5355\u9879"})]})}),Object(u.jsx)(_.a.Item,{label:"\u8df3\u8f6c",name:"jump",initialValue:e.initData.jump,children:Object(u.jsxs)(k.a.Group,{children:[Object(u.jsx)(k.a.Button,{value:f.d.comp,children:"\u7ec4\u4ef6"}),Object(u.jsx)(k.a.Button,{value:f.d.app,children:"APP"}),Object(u.jsx)(k.a.Button,{value:f.d.outer,children:"\u5916\u94fe"})]})}),Object(u.jsx)(_.a.Item,{label:"\u540d\u79f0",name:"name",rules:[{required:!0,message:"is required!"}],children:Object(u.jsx)(v.a,{})}),Object(u.jsx)(_.a.Item,{label:"\u82f1\u6587\u540d",name:"english_name",rules:[{required:!0,message:"is required!"}],children:Object(u.jsx)(v.a,{})}),Object(u.jsx)(_.a.Item,{label:"\u8def\u5f84",name:"path",rules:[{required:!0,message:"is required!"}],children:Object(u.jsx)(v.a,{})}),Object(u.jsx)(_.a.Item,{label:"\u6392\u5e8f",name:"sort",children:Object(u.jsx)(w.a,{min:0})}),Object(u.jsx)(_.a.Item,{label:"\u7236\u83dc\u5355",name:"parent_id",children:Object(u.jsx)(I.a,{allowClear:!0,children:t.setting.menu.menu.filter((function(e){return e.type===f.b.MENU})).map((function(e){return Object(u.jsxs)(I.a.Option,{value:e._id,children:[" ",e.name]})}))})}),Object(u.jsx)(_.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(e){return e.getFieldValue("jump")===f.d.comp?Object(u.jsx)(_.a.Item,{label:"\u7ec4\u4ef6",name:"comp",children:Object(u.jsx)(I.a,{allowClear:!0,children:Object.keys(j.default).map((function(e){return Object(u.jsx)(I.a.Option,{value:e,children:e})}))})}):null}}),Object(u.jsx)(_.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(e){return e.getFieldValue("jump")===f.d.app?Object(u.jsx)(_.a.Item,{label:"App",name:"app_id",children:Object(u.jsx)(I.a,{allowClear:!0,children:t.setting.app.app.map((function(e){return Object(u.jsx)(I.a.Option,{value:e._id,children:e.name})}))})}):null}})]})})})}},393:function(e,t,n){"use strict";n.r(t),n.d(t,"CrawlingTask",(function(){return o}));n(8),n(17),n(7);var a=n(2),r=n(116),c=n(141),i=n(34),s=n(142),u=(n(14),n(143),n(64),n(50),n(43),n(0),n(67)),o=function(e){var t=[{title:"Topic",dataIndex:"topic",key:"topic"},{title:"Topic\u7b80\u4ecb",dataIndex:"topic_desc",key:"topic_desc"},{title:"MD5",dataIndex:"md5",key:"md5"},{title:"\u4efb\u52a1\u7279\u5f81",dataIndex:"task_feature",key:"task_feature"},{title:"\u8bd5\u6293\u53d6\u7ed3\u679c",dataIndex:"try_result",key:"try_result"},{title:"\u65e5\u5e38\u6293\u53d6\u72b6\u6001",dataIndex:"daily_state",key:"daily_state"},{title:"\u662f\u5426\u6267\u884c\u8bd5\u6293",dataIndex:"is_try",key:"is_try"},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.a,{children:"\u4fee\u6539"}),Object(a.jsx)(u.a,{children:"\u5220\u9664"}),Object(a.jsx)(u.a,{children:"\u6dfb\u52a0"})]})}}];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.a,{justify:"end",children:Object(a.jsx)(c.a,{span:2,children:Object(a.jsx)(i.a,{type:"primary",children:"\u6dfb\u52a0\u8bdd\u9898"})})}),Object(a.jsx)(s.a,{columns:t,dataSource:[{topic:"\u533b\u7597.\u533b\u751f",topic_desc:"\u533b\u751f\u6570\u636e",md5:"71ed0f399b08fc7804ce79c478bee64e",task_feature:"\u5b9a\u65f6\u589e\u91cf\u66f4\u65b0",try_result:"\u53ef\u6267\u884c\u6279\u91cf\u6293\u53d6",daily_state:"\u672a\u5f00\u59cb",is_try:"\u5426"},{topic:"\u533b\u7597.\u533b\u9662",topic_desc:"\u533b\u9662\u6570\u636e",md5:"557c0c3f48f542aafd8cf8811690ca32",task_feature:"\u4e00\u6b21\u6027\u6293\u53d6",try_result:"\u53ef\u6267\u884c\u6279\u91cf\u6293\u53d6",daily_state:"\u672a\u5f00\u59cb",is_try:"\u5426"}],size:"small",scroll:{y:750},bordered:!0,onRow:function(e){return{onClick:function(e){}}}})]})}},397:function(e,t,n){"use strict";n.r(t),n.d(t,"Search",(function(){return h}));var a=n(7),r=n(1),c=n(2),i=n(217),s=n(14),u=n(63),o=n(44),d=n(50),l=n(116),p=n(34),j=n(64),f=n(402),m=n(403),h=(n(0),n(65),function(e){var t=s.a.useForm(),n=Object(a.a)(t,1)[0];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(l.a,{justify:"center",style:{minHeight:"100vh"},children:Object(c.jsxs)(s.a,{form:n,name:"dynamic_form_nest_item",onFinish:function(e){console.log("Received values of form:",e)},autoComplete:"off",initialValues:{search:[{fieldKey:0,isListField:!0,key:0,name:0}]},children:[Object(c.jsx)(s.a.List,{name:"search",children:function(e,t){var n=t.add,a=t.remove;return Object(c.jsxs)(c.Fragment,{children:[e.map((function(e,t){return function(e,t,n,a,l){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(i.b,{children:[Object(c.jsx)(s.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){if(n>0)return Object(c.jsx)(s.a.Item,Object(r.a)(Object(r.a)({},t),{},{name:[t.name,"and_or"],fieldKey:[t.fieldKey,"and_or"],rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}],children:Object(c.jsx)(u.a.Group,{options:[{label:"And",value:"and"},{label:"Or",value:"or"}],value:"and",optionType:"button",buttonStyle:"solid"})}))}}),Object(c.jsx)(s.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(s.a.Item,Object(r.a)(Object(r.a)({},t),{},{name:[t.name,"title"],fieldKey:[t.fieldKey,"title"],rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}],children:Object(c.jsx)(o.a,{style:{width:130},children:["text","title(only)","source name"].map((function(e){return Object(c.jsx)(o.a.Option,{value:e,children:e},e)}))})}))})}}),Object(c.jsx)(s.a.Item,Object(r.a)(Object(r.a)({},t),{},{name:[t.name,"title_value"],fieldKey:[t.fieldKey,"title_value"],children:Object(c.jsx)(d.a,{})})),Object(c.jsx)(s.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(s.a.Item,Object(r.a)(Object(r.a)({},t),{},{name:[t.name,"category"],fieldKey:[t.fieldKey,"category"],rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}],children:Object(c.jsx)(o.a,{style:{width:130},children:["Category","Entity","Label","tag"].map((function(e){return Object(c.jsx)(o.a.Option,{value:e,children:e},e)}))})}))})}}),Object(c.jsx)(s.a.Item,Object(r.a)(Object(r.a)({},t),{},{name:[t.name,"category_value"],fieldKey:[t.fieldKey,"category_value"],children:Object(c.jsx)(d.a,{})})),Object(c.jsx)(f.a,{onClick:function(){return l(t.name)}})]},t.key),Object(c.jsx)("br",{})]})}(0,e,t,0,a)})),Object(c.jsx)(s.a.Item,{children:Object(c.jsx)(p.a,{type:"dashed",block:!0,icon:Object(c.jsx)(m.a,{}),onClick:function(){e.length<3?n():j.b.error("\u540c\u65f6\u53ea\u53ef\u6dfb\u52a03\u4e2a\u6761\u4ef6")},children:"\u6dfb\u52a0\u67e5\u8be2\u6761\u4ef6"})})]})}}),Object(c.jsx)(s.a.Item,{children:Object(c.jsxs)(d.a.Group,{compact:!0,children:[Object(c.jsx)(s.a.Item,{name:["key","time"],children:Object(c.jsx)(o.a,{style:{width:130},placeholder:"\u65f6\u95f4",children:["Last 72 hours","7 days","14 days","30 days"].map((function(e){return Object(c.jsx)(o.a.Option,{value:e,children:e},e)}))})}),Object(c.jsx)(s.a.Item,{name:["key","method"],children:Object(c.jsx)(o.a,{style:{width:130},placeholder:"\u65b9\u6cd5",children:["Contains","Vector similarity"].map((function(e){return Object(c.jsx)(o.a.Option,{value:e,children:e},e)}))})}),Object(c.jsx)(s.a.Item,{name:["key","sort_by"],children:Object(c.jsx)(o.a,{style:{width:130},placeholder:"sort by",children:["relevancy score","timeliness"].map((function(e){return Object(c.jsx)(o.a.Option,{value:e,children:e},e)}))})})]})}),Object(c.jsx)(s.a.Item,{children:Object(c.jsx)(p.a,{type:"primary",htmlType:"submit",children:"Search"})})]})})})})},398:function(e,t,n){"use strict";n.r(t),n.d(t,"TopicManager",(function(){return u}));n(8),n(17),n(7);var a=n(2),r=n(116),c=n(141),i=n(34),s=n(142),u=(n(14),n(143),n(64),n(50),n(43),n(0),function(e){var t=[{title:"Topic\u540d\u79f0",dataIndex:"topic_name",key:"topic_name"},{title:"\u56fe\u7247\u6570\u91cf",dataIndex:"img_num",key:"img_num"},{title:"\u6807\u7b7e/\u5173\u952e\u8bcd",dataIndex:"keyword",key:"keyword"},{title:"\u53ec\u56de\u6570\u91cf",dataIndex:"recall_num",key:"recall_num"},{title:"Topic\u7c7b\u578b",dataIndex:"topic_type",key:"topic_type"},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"update_time",key:"update_time",render:function(e){var t=new Date(parseInt(e));return t.getFullYear()+"-"+(t.getMonth()<10?"0"+t.getMonth():t.getMinutes())+"-"+(t.getDay()<10?"0"+t.getDay():t.getDay())+" "+(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())}},{title:"\u66f4\u65b0\u4eba",dataIndex:"operator",key:"operator"}];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.a,{justify:"end",children:Object(a.jsx)(c.a,{span:2,children:Object(a.jsx)(i.a,{type:"primary",children:"\u521b\u5efa\u4e3b\u9898"})})}),Object(a.jsx)(s.a,{columns:t,dataSource:[{topic_name:"NFL",img_num:1,keyword:"NFL New England Patriots Pittsburgh Steelers Houston Texans Kansas City Chiefs Tom Brady Baltimore Ravens Indianapolis Colts Las Vegas Raiders Tennessee Titans Buffalo Bills",recall_num:501,topic_type:"1",update_time:"1605845947677",operator:"yangmengshu"},{topic_name:"Neha Kakkar",img_num:1,keyword:"Neha Kakkar",recall_num:84,topic_type:"1",update_time:"1605782202486",operator:"yangmengshu"},{topic_name:"PlayStation 5",img_num:1,keyword:"PS5 PlayStation 5",recall_num:501,topic_type:"1",update_time:"1605781304568",operator:"yangmengshu"},{topic_name:"Pfizer COVID vaccine",img_num:1,keyword:"Pfizer vaccine Pfizer Covid",recall_num:501,topic_type:"1",update_time:"1605755975749",operator:"yangmengshu"},{topic_name:"APEC summit 2020",img_num:1,keyword:"APEC",recall_num:94,topic_type:"1",update_time:"1605753340500",operator:"yangmengshu"},{topic_name:"Justice for Gulnaz",img_num:1,keyword:"India girl burnt Bihar girl burnt India teenager burnt BIhar teenager burnt Justice for Gulnaz JusticeForGulnaz JusticeforGulnaz Gulnaz Khatoon",recall_num:6,topic_type:"1",update_time:"1605753080936",operator:"yangmengshu"},{topic_name:"G20 Riyadh summit",img_num:1,keyword:"G20",recall_num:203,topic_type:"1",update_time:"1605689576273",operator:"yangmengshu"},{topic_name:"Vincent Reffet",img_num:1,keyword:"Vincent Reffet Jetman Dubai",recall_num:9,topic_type:"1",update_time:"1605672838552",operator:"yangmengshu"},{topic_name:"Karachi Kings",img_num:1,keyword:"Karachi Kings Imad Wasim Babar Azam",recall_num:113,topic_type:"1",update_time:"1605667131237",operator:"yangmengshu"},{topic_name:"Oman National Day",img_num:1,keyword:"National Day Oman Oman National Day Sultan Haitham National Day",recall_num:42,topic_type:"1",update_time:"1605622895433",operator:"yangmengshu"}],size:"small",scroll:{y:750},bordered:!0,onRow:function(e){return{onClick:function(e){}}}})]})})},399:function(e,t,n){"use strict";n.r(t),n.d(t,"User",(function(){return r}));var a=n(2),r=function(e){return Object(a.jsx)("div",{children:"This is User"})}},400:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),i=n(33),s=n.n(i),u=(n(226),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,407)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))}),o=n(20),d=n(8),l=n.n(d),p=n(17),j=(n(228),n(405)),f=n(406),m=n(95),h=n(404),b=n(116),x=n(43),O=n(67),y=n(42),_=n(87),g=n(26),v=n(48),k=m.a.SubMenu,w=h.a.Header,I=h.a.Content,E=h.a.Sider,A=h.a.Footer,P=function(e){var t=o.c.useContext();return c.a.useEffect((function(){(function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.c.getMenu({user:!0});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsxs)(h.a,{style:{minHeight:"100vh"},children:[Object(a.jsxs)(E,{theme:"light",collapsible:!0,collapsed:t.page.home.collapsed,onCollapse:x.b.onCollapse,children:[Object(a.jsx)(b.a,{justify:"center",children:Object(a.jsx)("h3",{children:v.a.TITLE})}),Object(a.jsx)(m.a,{mode:"inline",children:t.user.menu.user_menu.map((function(e){var t=e;return e.type===g.b.MENU?t=Object(a.jsx)(k,{icon:Object(a.jsx)(j.a,{}),title:e.name,children:e.children.map((function(e){return e.jump===g.d.outer?Object(a.jsx)(m.a.Item,{icon:Object(a.jsx)(f.a,{}),children:Object(a.jsx)("a",{href:e.path,target:"_blank",rel:"noopener noreferrer",children:e.name})},e._id):e.jump===g.d.app?Object(a.jsx)(m.a.Item,{children:Object(a.jsx)(O.a,{to:e.path+"/".concat(e.app_id),children:e.name})},e._id):Object(a.jsx)(m.a.Item,{children:Object(a.jsx)(O.a,{to:e.path,children:e.name})},e._id)}))},e._id):e.type===g.b.MENU_ITEM&&(t=e.jump===g.d.outer?Object(a.jsx)(m.a.Item,{icon:Object(a.jsx)(f.a,{}),children:Object(a.jsx)("a",{href:e.path,target:"_blank",rel:"noopener noreferrer",children:e.name})},e._id):e.jump===g.d.app?Object(a.jsx)(m.a.Item,{children:Object(a.jsx)(O.a,{to:e.path+"/".concat(e.app_id),children:e.name})},e._id):Object(a.jsx)(m.a.Item,{children:Object(a.jsx)(O.a,{to:e.path,children:e.name})},e._id)),t}))})]}),Object(a.jsxs)(h.a,{style:{minHeight:"100vh"},children:[Object(a.jsx)(w,{style:{backgroundColor:"white"}}),Object(a.jsx)(I,{style:{margin:"0 0px"},children:Object(a.jsx)("div",{className:"site-layout-background",style:{padding:1,minHeight:360},children:Object(a.jsx)(y.c,{children:t.user.menu.user_menu.map((function(e){return e.children.length>0?e.children.map((function(e){return e.jump===g.d.app?Object(a.jsx)(y.a,{exact:!0,path:"".concat(e.path,"/:app_id"),component:_.default[e.comp]},e._id):e.jump===g.d.comp?Object(a.jsx)(y.a,{exact:!0,path:e.path,component:_.default[e.comp]},e._id):Object(a.jsx)(y.a,{})})):e.jump===g.d.app?Object(a.jsx)(y.a,{exact:!0,path:"".concat(e.path,"/:app_id"),component:_.default[e.comp]},e._id):e.jump===g.d.comp?Object(a.jsx)(y.a,{exact:!0,path:e.path,component:_.default[e.comp]},e._id):Object(a.jsx)(y.a,{})}))})})}),Object(a.jsx)(A,{style:{textAlign:"center"},children:"Ant Design \xa92018 Created by Ant UED"})]})]})},S=n(141),T=n(14),U=n(50),C=n(34),D=function(e){return Object(a.jsx)(b.a,{type:"flex",justify:"center",align:"middle",style:{minHeight:"100vh"},children:Object(a.jsx)(S.a,{children:Object(a.jsxs)(T.a,{name:"basic",onFinish:x.d.onLogin,children:[Object(a.jsx)(T.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(a.jsx)(U.a,{})}),Object(a.jsx)(T.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(a.jsx)(U.a.Password,{})}),Object(a.jsx)(T.a.Item,{children:Object(a.jsx)(C.a,{type:"primary",htmlType:"submit",children:"\u767b\u5f55"})})]})})})},F=n(123),M=function(e){var t=o.c.useContext();return c.a.useEffect((function(){document.title=v.a.TITLE,function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.onLogin();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),t.user.info.token?Object(a.jsx)(P,{}):Object(a.jsx)(D,{})},N=n(65);s.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(y.b,{history:N.b,children:Object(a.jsx)(M,{})})}),document.getElementById("root")),u()},43:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c}));var a={};n.r(a),n.d(a,"onCollapse",(function(){return d}));var r={};n.r(r),n.d(r,"createMenu",(function(){return O})),n.d(r,"deleteMenu",(function(){return y})),n.d(r,"getMenu",(function(){return g}));var c={};n.r(c),n.d(c,"deleteApp",(function(){return k})),n.d(c,"saveApp",(function(){return w})),n.d(c,"getApp",(function(){return I})),n.d(c,"getAppById",(function(){return E}));var i=n(8),s=n.n(i),u=n(17),o=n(20),d=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.c.dispatch({type:o.b.page.home.FLEX_SIDER});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=n(123),p=n(1),j=n(61),f=n.n(j),m=n(48),h=n(62),b=n(131),x=n.n(b),O=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r,c,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.c.getState(),a=Object(p.a)({},t),e.next=4,f.a.post("".concat(m.a.API_OA_BASE,"/v1/menu/save"),a,{headers:{token:n.user.info.token}});case 4:if(r=e.sent,c=h.a(r),i=c.headers,u=c.data,!i||!u){e.next=12;break}return e.next=9,g();case 9:return e.next=11,g({user:!0});case 11:return e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.c.getState(),e.next=3,f.a.post("".concat(m.a.API_OA_BASE,"/v1/menu/delete"),x.a.stringify({menu_id:t}),{headers:{token:n.user.info.token}});case 3:if(a=e.sent,r=h.a(a),c=r.headers,i=r.data,!c||!i){e.next=11;break}return e.next=8,g();case 8:return e.next=10,g({user:!0});case 10:return e.abrupt("return",!0);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){var t={},n={};return e.map((function(e){return e.parent_id?n[e._id]=e:(e.children=[],t[e._id]=e),e})),Object.values(n).filter((function(e){return e.parent_id in t})).map((function(e){return t[e.parent_id].children.push(e)})),Object.values(t)},g=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,a,r,c,i,u,d,l,p,j,b=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=b.length>0&&void 0!==b[0]&&b[0],n=o.c.getState(),!t){e.next=10;break}return e.next=5,f.a.get("".concat(m.a.API_OA_BASE,"/v1/user/menu"),{headers:{token:n.user.info.token}});case 5:a=e.sent,r=h.a(a),c=r.headers,i=r.data,c&&i&&(u=_(i.data.menu),o.c.dispatch({type:o.b.user.menu.UPDATE_USER_MENU,user_menu:u})),e.next=15;break;case 10:return e.next=12,f.a.get("".concat(m.a.API_OA_BASE,"/v1/menu/list"),{headers:{token:n.user.info.token}});case 12:d=e.sent,l=h.a(d),p=l.headers,j=l.data,p&&j&&o.c.dispatch({type:o.b.setting.menu.UPDATE_MENU,menu:j.data.menu});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=n(65),k=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,c,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.c.getState(),e.next=3,f.a.post("".concat(m.a.API_OA_BASE,"/v1/app/delete"),x.a.stringify({app_id:t}),{headers:{token:n.user.info.token}});case 3:if(a=e.sent,c=h.a(a),i=c.headers,u=c.data,!i||!u){e.next=13;break}return e.next=8,I();case 8:return e.next=10,r.getMenu();case 10:return e.next=12,r.getMenu({user:!0});case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r,c,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=o.c.getState(),a=Object(p.a)({},t),e.next=5,f.a.post("".concat(m.a.API_OA_BASE,"/v1/app/save"),a,{headers:{token:n.user.info.token}});case 5:if(r=e.sent,c=h.a(r),i=c.headers,u=c.data,!i||!u){e.next=11;break}return e.next=10,I();case 10:return e.abrupt("return",!0);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),v.c(e.t0,!0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.c.getState(),e.next=3,f.a.get("".concat(m.a.API_OA_BASE,"/v1/app/list"),{headers:{token:t.user.info.token}});case 3:n=e.sent,a=h.a(n),r=a.headers,c=a.data,r&&c&&o.c.dispatch({type:o.b.setting.app.UPDATE_APP,app:c.data.app});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.c.getState(),e.next=3,f.a.get("".concat(m.a.API_OA_BASE,"/v1/app/").concat(t),{headers:{token:n.user.info.token}});case 3:if(a=e.sent,r=h.a(a),c=r.headers,i=r.data,!c||!i){e.next=7;break}return e.abrupt("return",i.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},48:function(e,t,n){"use strict";var a,r=(a="mini",n(245)("./config.".concat(a,".js")).default);t.a=r},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(1),r=n(26),c=n(64),i=n(20),s=n(65),u=function(e){var t={headers:null,data:null};return 200===e.status?(s.c(e),e.data.code===r.a.success?(i.c.dispatch({type:i.b.user.info.UPDATE_TOKEN,token:e.headers.token}),t=Object(a.a)(Object(a.a)({},t),{headers:e.headers,data:e.data})):e.data.code===r.a.auth_error?i.c.dispatch({type:i.b.user.info.UPDATE_TOKEN,token:""}):c.b.error(e.data.msg)):c.b.error("\u8bf7\u6c42\u63a5\u53e3\u5931\u8d25"),t}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return p}));var a=n(2),r=n(48),c=n(52),i=n(50),s=n(217),u=n(34),o=n(219),d=Object(c.a)(),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(r.a.DEBUG||t)&&console.log(e)},p=function(e,t){return{filterDropdown:function(t){var n=t.setSelectedKeys,r=t.selectedKeys,c=t.confirm,d=t.clearFilters;return Object(a.jsxs)("div",{style:{padding:8},children:[Object(a.jsx)(i.a,{ref:function(e){},placeholder:"\u641c\u7d22 ".concat(e),value:r[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){c()},style:{width:188,marginBottom:8,display:"block"}}),Object(a.jsxs)(s.b,{children:[Object(a.jsx)(u.a,{type:"primary",onClick:function(){c()},icon:Object(a.jsx)(o.a,{}),size:"small",style:{width:90},children:"Search"}),Object(a.jsx)(u.a,{onClick:function(){d()},size:"small",style:{width:90},children:"Reset"})]})]})},filterIcon:function(e){return Object(a.jsx)(o.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(e,n){return n[t]?n[t].toString().toLowerCase().includes(e.toLowerCase()):""}}}},87:function(e,t,n){"use strict";n.r(t);var a=n(1),r={},c=n(283);c.keys().forEach((function(e){"./index.js"!==e&&(r=Object(a.a)(Object(a.a)({},r),c(e)))})),console.log(r),t.default=r}},[[400,1,2]]]);
//# sourceMappingURL=main.24ffdd6e.chunk.js.map