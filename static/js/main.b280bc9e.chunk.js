(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{15:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__I_CAQ",dialogsItems:"Dialogs_dialogsItems__1VEp2",messages:"Dialogs_messages__3SXIq"}},17:function(e,t,s){e.exports={userPhoto:"users_userPhoto__bL0S7",selectedPage:"users_selectedPage__3uKIF",preloader:"users_preloader__Xn2Vp"}},22:function(e,t,s){e.exports={item:"StyledNavLink_item__3V37q",active:"StyledNavLink_active__2aPHU"}},25:function(e,t,s){e.exports={myposts:"MyPosts_myposts__2twgh",posts:"MyPosts_posts__2G5MT"}},26:function(e,t,s){e.exports={header:"Header_header__3c_Tr",loginBlock:"Header_loginBlock__1pyM0"}},37:function(e,t,s){e.exports={nav:"Navbar_nav__1_ZQ8"}},38:function(e,t,s){e.exports={avatar:"ProfileInfo_avatar__3rmGo"}},39:function(e,t,s){e.exports={item:"Post_item__14JiU"}},41:function(e,t,s){},45:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t);var a,n=s(0),r=s.n(n),c=(s(41),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,72)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),r(e),c(e)}))}),i=s(27),o=s(21),l=s(2),u="ADD-POST",d="UPDATE-NEW-POST-TEXT",j={posts:[{id:1,message:"Hi,how are you",likesCount:12},{id:2,message:"Hi, you",likesCount:11},{id:3,message:"Hi,how are you",likesCount:11},{id:4,message:"how are you",likesCount:12}],newPostText:"it-kamas",profile:null},p="UPDATE-NEW-MESSAGE-BODY",h="SEND-MESSAGE",b={dialogs:[{id:1,name:"Slava"},{id:2,name:"Borya"},{id:3,name:"Igor"},{id:4,name:"Viktor"}],messages:[{id:1,message:"Hi Kaktus"},{id:2,message:"Hi klaus"},{id:3,message:"Hi Valeron"},{id:4,message:"Hi hello"},{id:5,message:"Hi you"}],newMessageBody:""},g="NAV-BAR",O={routes:[{path:"/profile",title:"Profile"},{path:"/dialogs",title:"Message"},{path:"/news",title:"News"},{path:"/music",title:"Music"},{path:"/settings",title:"Settings"},{path:"/users",title:"Users"}]},f={users:[],pageSize:5,totalUsersCount:20,currentPage:3,isFetching:!0},m={id:null,email:null,login:null,isAuth:!1},x=Object(i.a)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[{id:5,message:e.newPostText,likesCount:0}]),newPostText:""});case d:return Object(l.a)(Object(l.a)({},e),{},{newPostText:t.text});case"SET-USER-PROFILE":return Object(l.a)(Object(l.a)({},e),{},{profile:t.profile});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(l.a)(Object(l.a)({},e),{},{newMessageBody:t.body});case h:var s=e.newMessageBody;return Object(l.a)(Object(l.a)({},e),{},{messages:[].concat(Object(o.a)(e.messages),[{id:5,message:s}]),newMessageBody:""});default:return e}},navbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.userId?Object(l.a)(Object(l.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.userId?Object(l.a)(Object(l.a)({},e),{},{followed:!1}):e}))});case"SET-USER":return Object(l.a)(Object(l.a)({},e),{},{users:t.payload.users});case"SET-CURRENT-PAGE":return Object(l.a)(Object(l.a)({},e),{},{currentPage:t.payload.currentPage});case"SET-USERS-TOTAL-COUNT":return Object(l.a)(Object(l.a)({},e),{},{totalUsersCount:t.payload.totalCount});case"TOGGLE-IS-FETCHING":return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.payload.isFetching});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(l.a)(Object(l.a)(Object(l.a)({},e),t.data),{},{isAuth:!0});default:return e}}}),v=Object(i.b)(x),P=s(20),y=s.n(P),w=(s(45),s(8)),C=s(3),_=s(15),S=s.n(_),T=s(1),E=function(e){return Object(T.jsx)("div",{className:S.a.dialog,children:e.dialog})},k=s(5),N=Object(k.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageBody:function(t){e({type:p,body:t})},sendMessage:function(){e({type:h})}}}))((function(e){var t=e.dialogsPage,s=t.dialogs.map((function(e){var t=e.id,s=e.name;return Object(T.jsx)("div",{children:s},t)})),a=t.messages.map((function(e){var t=e.id,s=e.message;return Object(T.jsx)(r.a.Fragment,{children:Object(T.jsx)(E,{dialog:s})},t)})),n=t.newMessageBody,c=r.a.createRef();return Object(T.jsxs)("div",{className:S.a.dialogs,children:[Object(T.jsx)("div",{className:S.a.dialogsItems,children:s}),Object(T.jsxs)("div",{className:S.a.messages,children:[a,Object(T.jsx)("textarea",{value:n,onChange:function(t){var s=t.target.value;e.updateNewMessageBody(s)},ref:c,placeholder:"Enter your message"}),Object(T.jsx)("div",{children:Object(T.jsx)("button",{onClick:function(){e.sendMessage()},children:"Add message"})})]})]})})),U=s(37),F=s.n(U),I=s(22),A=s.n(I),M=function(e){return Object(T.jsx)("div",{className:A.a.item,children:Object(T.jsx)(w.b,{className:function(e){var t=e.isActive;return"".concat(A.a.item," ").concat(t?A.a.active:"")},to:e.path,children:e.title})})},L=Object(k.b)((function(e){return{state:e.navbar}}),(function(e){return{}}))((function(e){return Object(T.jsx)("div",{className:F.a.nav,children:Object(T.jsx)("nav",{children:e.state.routes.map((function(e){var t=e.title,s=e.path;return Object(T.jsx)(r.a.Fragment,{children:Object(T.jsx)(M,{title:t,path:s})},s+t)}))})})})),R=s(11),D=s(12),B=s(14),G=s(13),H=s(7),z=s.n(H),W=s(17),V=s.n(W),J=s.p+"static/media/risuem-chelovek-rebenku-14.e9b2c5f4.jpg",K=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],a=1;a<=t;a++)s.push(a);return Object(T.jsxs)("div",{children:[s.map((function(t){return Object(T.jsx)("span",{className:e.currentPage===t?V.a.selectedPage:"",onClick:function(){e.onPageChanged(t)},children:t})})),e.users.map((function(t){return Object(T.jsxs)("div",{children:[Object(T.jsxs)("span",{children:[Object(T.jsx)("div",{children:Object(T.jsx)(w.b,{to:"/profile/"+t.id,children:Object(T.jsx)("img",{className:V.a.userPhoto,src:null!==t.photos.small?t.photos.small:J,alt:"avatar"})})}),Object(T.jsx)("div",{children:t.followed?Object(T.jsx)("button",{onClick:function(){z.a.delete("https://social-network.samuraijs.com/api/1.0/follow/".concat(t.id),{withCredentials:!0,headers:{"API-KEY":"1be3afd1-cb12-4713-953a-273c84cfad9b"}}).then((function(s){s.data.resultCode&&e.unfollow(t.id)}))},children:"Unfollow"}):Object(T.jsx)("button",{onClick:function(){z.a.post("https://social-network.samuraijs.com/api/1.0/follow/".concat(t.id),{},{withCredentials:!0,headers:{"API-KEY":"1be3afd1-cb12-4713-953a-273c84cfad9b"}}).then((function(s){s.data.resultCode&&e.follow(t.id)}))},children:"Follow"})})]}),Object(T.jsxs)("span",{children:[Object(T.jsxs)("span",{children:[Object(T.jsx)("div",{children:t.name}),Object(T.jsx)("div",{children:t.status})]}),Object(T.jsxs)("span",{children:[Object(T.jsx)("div",{children:"u.location.country"}),Object(T.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})},q=s.p+"static/media/preloader.81b72309.svg",Q=function(){return Object(T.jsx)("img",{className:V.a.preloader,src:q})},X=function(e){Object(B.a)(s,e);var t=Object(G.a)(s);function s(){var e;Object(R.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.toggleIsFetching(!0),z.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(t,"&count=").concat(e.props.pageSize),{withCredentials:!0}).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items)}))},e}return Object(D.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetching(!0),z.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize),{withCredentials:!0}).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items),e.props.setUsersTotalCount(t.data.totalCount)}))}},{key:"render",value:function(){return Object(T.jsx)("div",{children:Object(T.jsxs)(T.Fragment,{children:[this.props.isFetching&&Object(T.jsx)(Q,{}),Object(T.jsx)(K,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow})]})})}}]),s}(r.a.Component),Y=Object(k.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching}}),{follow:function(e){return{type:"FOLLOW",payload:{userId:e}}},unfollow:function(e){return{type:"UNFOLLOW",payload:{userId:e}}},setUsers:function(e){return{type:"SET-USER",payload:{users:e}}},setCurrentPage:function(e){return{type:"SET-CURRENT-PAGE",payload:{currentPage:e}}},setUsersTotalCount:function(e){return{type:"SET-USERS-TOTAL-COUNT",payload:{totalCount:e}}},toggleIsFetching:function(e){return{type:"TOGGLE-IS-FETCHING",payload:{isFetching:e}}}})(X),Z=s(38),$=s.n(Z),ee=function(e){var t=Object.assign({},e);return t.profile?Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",alt:"img"})}),Object(T.jsxs)("div",{className:$.a.avatar,children:[Object(T.jsx)("img",{src:t.profile.photos.small,alt:"avatar"}),"descrip"]})]}):Object(T.jsx)(Q,{})},te=s(25),se=s.n(te),ae=s(39),ne=s.n(ae),re=function(e){return Object(T.jsx)("div",{children:Object(T.jsxs)("div",{className:ne.a.item,children:[Object(T.jsx)("img",{src:"https://cdn.pixabay.com/photo/2017/01/26/13/00/mom-2010524__340.png",alt:"logo"}),Object(T.jsx)("span",{children:e.message}),Object(T.jsx)("div",{children:Object(T.jsxs)("span",{children:[" like ",e.likesCount]})})]})})},ce=Object(k.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){return e({type:u})},updateNewPostText:function(t){return e({type:d,text:t})}}}))((function(e){var t=e.posts.map((function(e){var t=e.id,s=e.message,a=e.likesCount;return Object(T.jsx)(r.a.Fragment,{children:Object(T.jsx)(re,{message:s,likesCount:a})},t)})),s=r.a.createRef();return Object(T.jsxs)("div",{className:se.a.myposts,children:[Object(T.jsx)("h3",{children:"My Posts"}),Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{children:Object(T.jsx)("textarea",{onChange:function(){var t,a=(null===(t=s.current)||void 0===t?void 0:t.value)||"";e.updateNewPostText(a)},ref:s,value:e.newPostText})}),Object(T.jsx)("button",{onClick:function(){e.addPost()},children:"Add post"})]}),Object(T.jsx)("div",{className:se.a.posts,children:t})]})})),ie=function(e){return Object(T.jsxs)("div",{children:[Object(T.jsx)(ee,{profile:e.profile}),Object(T.jsx)(ce,{})]})},oe=function(e){Object(B.a)(s,e);var t=Object(G.a)(s);function s(){return Object(R.a)(this,s),t.apply(this,arguments)}return Object(D.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.router.params.userId;console.log(t),t||(t="2"),z.a.get("https://social-network.samuraijs.com/api/1.0/profile/"+t).then((function(t){e.props.setUserProfile(t.data)}))}},{key:"render",value:function(){return Object(T.jsx)("div",{children:Object(T.jsx)(ie,Object(l.a)(Object(l.a)({},this.props),{},{profile:this.props.profile}))})}}]),s}(r.a.Component),le=(a=oe,function(e){console.log("ComponentWithRouterProp");var t=Object(C.e)(),s=Object(C.f)(),n=Object(C.g)();return Object(T.jsx)(a,Object(l.a)(Object(l.a)({},e),{},{router:{location:t,navigate:s,params:n}}))}),ue=Object(k.b)((function(e){return{profile:e.profilePage.profile}}),{setUserProfile:function(e){return{type:"SET-USER-PROFILE",profile:e}}})(le);var de=s(26),je=s.n(de),pe=function(e){return Object(T.jsxs)("header",{className:je.a.header,children:[Object(T.jsx)("img",{src:"http://pngimg.com/uploads/magic_hat/small/magic_hat_PNG102.png",alt:"img"}),Object(T.jsx)("div",{className:je.a.loginBlock,children:e.auth.isAuth?e.auth.login:Object(T.jsx)(w.b,{to:"/login",children:"Login"})})]})},he=function(e){Object(B.a)(s,e);var t=Object(G.a)(s);function s(){return Object(R.a)(this,s),t.apply(this,arguments)}return Object(D.a)(s,[{key:"componentDidMount",value:function(){var e=this;z.a.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:!0}).then((function(t){if(0===t.data.resultCode){var s=t.data.data,a=s.id,n=s.email,r=s.login;e.props.setAuthUserData(a,n,r,!0)}}))}},{key:"render",value:function(){return Object(T.jsx)(pe,Object(l.a)(Object(l.a)({},this.props),{},{auth:this.props.auth}))}}]),s}(r.a.Component),be=Object(k.b)((function(e){return{auth:e.auth}}),{setAuthUserData:function(e,t,s,a){return{type:"SET-USER-DATA",data:{id:e,email:t,login:s,isAuth:a}}}})(he),ge=function(e){return Object(T.jsx)(w.a,{children:Object(T.jsxs)("div",{className:"app-wrapper",children:[Object(T.jsx)(be,{}),Object(T.jsx)(L,{}),Object(T.jsx)("div",{className:"app-wrapper-content",children:Object(T.jsxs)(C.c,{children:[Object(T.jsx)(C.a,{path:"/profile/",element:Object(T.jsx)(ue,{})}),Object(T.jsx)(C.a,{path:"/profile/:userId",element:Object(T.jsx)(ue,{})}),Object(T.jsx)(C.a,{path:"/dialogs/*",element:Object(T.jsx)(N,{})}),Object(T.jsx)(C.a,{path:"/news",element:Object(T.jsx)("h2",{children:"News"})}),Object(T.jsx)(C.a,{path:"/music",element:Object(T.jsx)("h2",{children:"Music"})}),Object(T.jsx)(C.a,{path:"/settings",element:Object(T.jsx)("h2",{children:"Settings"})}),Object(T.jsx)(C.a,{path:"/users",element:Object(T.jsx)(Y,{})})]})})]})})};y.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(k.a,{store:v,children:Object(T.jsx)(ge,{})})}),document.getElementById("root")),c()}},[[71,1,2]]]);
//# sourceMappingURL=main.b280bc9e.chunk.js.map