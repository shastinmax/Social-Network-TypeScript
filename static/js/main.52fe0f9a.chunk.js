(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{11:function(e,t,s){e.exports={userPhoto:"users_userPhoto__bL0S7",selectedPage:"users_selectedPage__3uKIF",preloader:"users_preloader__Xn2Vp"}},17:function(e,t,s){e.exports={item:"StyledNavLink_item__3V37q",active:"StyledNavLink_active__2aPHU"}},19:function(e,t,s){e.exports={myposts:"MyPosts_myposts__2twgh",posts:"MyPosts_posts__2G5MT"}},31:function(e,t,s){e.exports={header:"Header_header__3c_Tr"}},32:function(e,t,s){e.exports={avatar:"ProfileInfo_avatar__3rmGo"}},33:function(e,t,s){e.exports={item:"Post_item__14JiU"}},35:function(e,t,s){e.exports={nav:"Navbar_nav__1_ZQ8"}},41:function(e,t,s){},45:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=(s(41),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,72)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))}),r=s(22),i=s(15),o=s(3),l="ADD-POST",u="UPDATE-NEW-POST-TEXT",d={posts:[{id:1,message:"Hi,how are you",likesCount:12},{id:2,message:"Hi, you",likesCount:11},{id:3,message:"Hi,how are you",likesCount:11},{id:4,message:"how are you",likesCount:12}],newPostText:"it-kamas"},j="UPDATE-NEW-MESSAGE-BODY",p="SEND-MESSAGE",g={dialogs:[{id:1,name:"Slava"},{id:2,name:"Borya"},{id:3,name:"Igor"},{id:4,name:"Viktor"}],messages:[{id:1,message:"Hi Kaktus"},{id:2,message:"Hi klaus"},{id:3,message:"Hi Valeron"},{id:4,message:"Hi hello"},{id:5,message:"Hi you"}],newMessageBody:""},h="NAV-BAR",b={routes:[{path:"/",title:"Profile"},{path:"/dialogs",title:"Message"},{path:"/news",title:"News"},{path:"/music",title:"Music"},{path:"/settings",title:"Settings"},{path:"/users",title:"Users"}]},O={users:[],pageSize:5,totalUsersCount:20,currentPage:3,isFetching:!0},m=Object(r.a)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[{id:5,message:e.newPostText,likesCount:0}]),newPostText:""});case u:return Object(o.a)(Object(o.a)({},e),{},{newPostText:t.text});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(o.a)(Object(o.a)({},e),{},{newMessageBody:t.body});case p:var s=e.newMessageBody;return Object(o.a)(Object(o.a)({},e),{},{messages:[].concat(Object(i.a)(e.messages),[{id:5,message:s}]),newMessageBody:""});default:return e}},navbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!1}):e}))});case"SET-USER":return Object(o.a)(Object(o.a)({},e),{},{users:t.payload.users});case"SET-CURRENT-PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.payload.currentPage});case"SET-USERS-TOTAL-COUNT":return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.payload.totalCount});case"TOGGLE-IS-FETCHING":return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.payload.isFetching});default:return e}}}),f=Object(r.b)(m),x=s(14),v=s.n(x),P=(s(45),s(31)),y=s.n(P),w=s(1),_=function(){return Object(w.jsx)("header",{className:y.a.header,children:Object(w.jsx)("img",{src:"http://pngimg.com/uploads/magic_hat/small/magic_hat_PNG102.png",alt:"img"})})},C=s(32),N=s.n(C),T=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",alt:"img"})}),Object(w.jsxs)("div",{className:N.a.avatar,children:[Object(w.jsx)("img",{src:"https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",alt:"avatar"}),"descrip"]})]})},S=s(19),E=s.n(S),k=s(33),F=s.n(k),U=function(e){return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:F.a.item,children:[Object(w.jsx)("img",{src:"https://cdn.pixabay.com/photo/2017/01/26/13/00/mom-2010524__340.png",alt:"logo"}),Object(w.jsx)("span",{children:e.message}),Object(w.jsx)("div",{children:Object(w.jsxs)("span",{children:[" like ",e.likesCount]})})]})})},I=s(6),M=Object(I.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){return e({type:l})},updateNewPostText:function(t){return e({type:u,text:t})}}}))((function(e){var t=e.posts.map((function(e){var t=e.id,s=e.message,n=e.likesCount;return Object(w.jsx)(a.a.Fragment,{children:Object(w.jsx)(U,{message:s,likesCount:n})},t)})),s=a.a.createRef();return Object(w.jsxs)("div",{className:E.a.myposts,children:[Object(w.jsx)("h3",{children:"My Posts"}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{children:Object(w.jsx)("textarea",{onChange:function(){var t,n=(null===(t=s.current)||void 0===t?void 0:t.value)||"";e.updateNewPostText(n)},ref:s,value:e.newPostText})}),Object(w.jsx)("button",{onClick:function(){e.addPost()},children:"Add post"})]}),Object(w.jsx)("div",{className:E.a.posts,children:t})]})})),L=function(e){return Object(w.jsxs)("div",{children:[Object(w.jsx)(T,{}),Object(w.jsx)(M,{})]})},A=s(16),G=s(2),H=s(8),R=s.n(H),B=function(e){return Object(w.jsx)("div",{className:R.a.dialog,children:e.dialog})},D=Object(I.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageBody:function(t){e({type:j,body:t})},sendMessage:function(){e({type:p})}}}))((function(e){var t=e.dialogsPage,s=t.dialogs.map((function(e){var t=e.id,s=e.name;return Object(w.jsx)("div",{children:s},t)})),n=t.messages.map((function(e){var t=e.id,s=e.message;return Object(w.jsx)(a.a.Fragment,{children:Object(w.jsx)(B,{dialog:s})},t)})),c=t.newMessageBody,r=a.a.createRef();return Object(w.jsxs)("div",{className:R.a.dialogs,children:[Object(w.jsx)("div",{className:R.a.dialogsItems,children:s}),Object(w.jsxs)("div",{className:R.a.messages,children:[n,Object(w.jsx)("textarea",{value:c,onChange:function(t){var s=t.target.value;e.updateNewMessageBody(s)},ref:r,placeholder:"Enter your message"}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{onClick:function(){e.sendMessage()},children:"Add message"})})]})]})})),z=s(35),V=s.n(z),W=s(17),J=s.n(W),q=function(e){return Object(w.jsx)("div",{className:J.a.item,children:Object(w.jsx)(A.b,{className:function(e){var t=e.isActive;return"".concat(J.a.item," ").concat(t?J.a.active:"")},to:e.path,children:e.title})})},K=Object(I.b)((function(e){return{state:e.navbar}}),(function(e){return{}}))((function(e){return Object(w.jsx)("div",{className:V.a.nav,children:Object(w.jsx)("nav",{children:e.state.routes.map((function(e){var t=e.title,s=e.path;return Object(w.jsx)(a.a.Fragment,{children:Object(w.jsx)(q,{title:t,path:s})},s+t)}))})})})),Q=s(36),X=s(37),Z=s(39),Y=s(38),$=s(21),ee=s.n($),te=s(11),se=s.n(te),ne=s.p+"static/media/risuem-chelovek-rebenku-14.e9b2c5f4.jpg",ae=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],n=1;n<=t;n++)s.push(n);return Object(w.jsxs)("div",{children:[s.map((function(t){return Object(w.jsx)("span",{className:e.currentPage===t?se.a.selectedPage:"",onClick:function(){e.onPageChanged(t)},children:t})})),e.users.map((function(t){return Object(w.jsxs)("div",{children:[Object(w.jsxs)("span",{children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{className:se.a.userPhoto,src:null!==t.photos.small?t.photos.small:ne})}),Object(w.jsx)("div",{children:t.followed?Object(w.jsx)("button",{onClick:function(){return e.unfollow(t.id)},children:"Unfollow"}):Object(w.jsx)("button",{onClick:function(){return e.follow(t.id)},children:"Follow"})})]}),Object(w.jsxs)("span",{children:[Object(w.jsxs)("span",{children:[Object(w.jsx)("div",{children:t.name}),Object(w.jsx)("div",{children:t.status})]}),Object(w.jsxs)("span",{children:[Object(w.jsx)("div",{children:"u.location.country"}),Object(w.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})},ce=s.p+"static/media/preloader.81b72309.svg",re=function(){return Object(w.jsx)("img",{className:se.a.preloader,src:ce})},ie=function(e){Object(Z.a)(s,e);var t=Object(Y.a)(s);function s(){var e;Object(Q.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.toggleIsFetching(!0),ee.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(t,"&count=").concat(e.props.pageSize)).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items)}))},e}return Object(X.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetching(!0),ee.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize)).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items),e.props.setUsersTotalCount(t.data.totalCount)}))}},{key:"render",value:function(){return Object(w.jsx)("div",{children:Object(w.jsxs)(w.Fragment,{children:[this.props.isFetching&&Object(w.jsx)(re,{}),Object(w.jsx)(ae,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow})]})})}}]),s}(a.a.Component),oe=Object(I.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching}}),{follow:function(e){return{type:"FOLLOW",payload:{userId:e}}},unfollow:function(e){return{type:"UNFOLLOW",payload:{userId:e}}},setUsers:function(e){return{type:"SET-USER",payload:{users:e}}},setCurrentPage:function(e){return{type:"SET-CURRENT-PAGE",payload:{currentPage:e}}},setUsersTotalCount:function(e){return{type:"SET-USERS-TOTAL-COUNT",payload:{totalCount:e}}},toggleIsFetching:function(e){return{type:"TOGGLE-IS-FETCHING",payload:{isFetching:e}}}})(ie),le=function(e){return Object(w.jsx)(A.a,{children:Object(w.jsxs)("div",{className:"app-wrapper",children:[Object(w.jsx)(_,{}),Object(w.jsx)(K,{}),Object(w.jsx)("div",{className:"app-wrapper-content",children:Object(w.jsxs)(G.c,{children:[Object(w.jsx)(G.a,{path:"/",element:Object(w.jsx)(L,{})}),Object(w.jsx)(G.a,{path:"/dialogs/*",element:Object(w.jsx)(D,{})}),Object(w.jsx)(G.a,{path:"/news",element:Object(w.jsx)("h2",{children:"News"})}),Object(w.jsx)(G.a,{path:"/music",element:Object(w.jsx)("h2",{children:"Music"})}),Object(w.jsx)(G.a,{path:"/settings",element:Object(w.jsx)("h2",{children:"Settings"})}),Object(w.jsx)(G.a,{path:"/users",element:Object(w.jsx)(oe,{})})]})})]})})};v.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(I.a,{store:f,children:Object(w.jsx)(le,{})})}),document.getElementById("root")),c()},8:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__I_CAQ",dialogsItems:"Dialogs_dialogsItems__1VEp2",messages:"Dialogs_messages__3SXIq"}}},[[71,1,2]]]);
//# sourceMappingURL=main.52fe0f9a.chunk.js.map